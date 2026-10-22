// ============================================================================
// COMMUNITY-ADMIN.JS
// Gestion des Matières de la Communauté, Persistance Anti-Perte et Console Admin (Code: 0408)
// ============================================================================

(function () {
    const ADMIN_CODE = '0408';
    const CUSTOM_SUBJECTS_STORAGE_KEY = 'myQuizCustomSubjects';
    const SELECTED_SUBJECTS_STORAGE_KEY = 'myQuizSelectedSubjects';
    const COMMUNITY_CUSTOM_STORAGE_KEY = 'quizz_community_custom_courses';
    const USERS_DIRECTORY_STORAGE_KEY = 'quizz_users_directory';
    const ADMIN_SESSION_KEY = 'quizz_admin_authenticated';

    // ------------------------------------------------------------------------
    // HELPER : ÉCRITURE SÉCURISÉE DANS LE LOCALSTORAGE SANS DÉPASSEMENT DE QUOTA
    // ------------------------------------------------------------------------
    function safeSetItem(key, value) {
        try {
            localStorage.setItem(key, value);
            return true;
        } catch (e) {
            console.warn(`[Storage] Quota atteint ou erreur sur ${key}. Nettoyage d'urgence...`, e.message);
            // 1. Purger les anciens snapshots volumineux de secours pour libérer l'espace
            try {
                const backups = JSON.parse(localStorage.getItem('myQuizBackups') || '[]');
                if (backups.length > 1) {
                    // Ne garder que le dernier snapshot
                    localStorage.setItem('myQuizBackups', JSON.stringify(backups.slice(-1)));
                } else if (backups.length === 1) {
                    localStorage.removeItem('myQuizBackups');
                }
            } catch (err) {
                try { localStorage.removeItem('myQuizBackups'); } catch (err2) { }
            }

            // 2. Nettoyer le registre utilisateur si trop gros
            try { localStorage.removeItem(USERS_DIRECTORY_STORAGE_KEY); } catch (err) { }

            // 3. Réessayer l'écriture
            try {
                localStorage.setItem(key, value);
                return true;
            } catch (retryErr) {
                console.error(`[Storage] Échec critique écriture sur ${key}:`, retryErr.message);
                try { sessionStorage.setItem(key, value); } catch (sErr) { }
                return false;
            }
        }
    }

    // ------------------------------------------------------------------------
    // 1. REGISTRES ISOLÉS (ANTI-PERTE LORS DES MISES À JOUR DU CODE)
    // ------------------------------------------------------------------------
    function getCustomSubjectsRegistry() {
        try {
            return JSON.parse(localStorage.getItem(CUSTOM_SUBJECTS_STORAGE_KEY) || '{}');
        } catch (e) {
            return {};
        }
    }

    function saveCustomSubjectToRegistry(subjectName, subjectData) {
        try {
            const registry = getCustomSubjectsRegistry();
            registry[subjectName] = JSON.parse(JSON.stringify(subjectData));
            registry[subjectName].isCustom = true;
            registry[subjectName].uploadedAt = registry[subjectName].uploadedAt || Date.now();
            registry[subjectName].author = registry[subjectName].author || (window.currentUser ? window.currentUser.email : 'local@etudiant');
            safeSetItem(CUSTOM_SUBJECTS_STORAGE_KEY, JSON.stringify(registry));
            recordUserInDirectory();
        } catch (e) {
            console.error('Erreur sauvegarde myQuizCustomSubjects:', e);
        }
    }

    function getSelectedSubjectsList() {
        try {
            const stored = JSON.parse(localStorage.getItem(SELECTED_SUBJECTS_STORAGE_KEY) || '[]');
            if (Array.isArray(stored)) return stored;
            return [];
        } catch (e) {
            return [];
        }
    }

    function saveSelectedSubjectsList(list) {
        try {
            const unique = [...new Set(list)];
            safeSetItem(SELECTED_SUBJECTS_STORAGE_KEY, JSON.stringify(unique));
        } catch (e) { }
    }

    // Restaure tous les cours custom dans appData pour garantir 0 perte
    function restoreIsolatedCustomSubjects(targetAppData) {
        if (!targetAppData || typeof targetAppData !== 'object') return;
        const registry = getCustomSubjectsRegistry();
        const defaults = window.defaultData || {};
        let regModified = false;
        let deletedFolders = [];
        try {
            deletedFolders = JSON.parse(localStorage.getItem('myQuizDeletedFolders') || '[]');
            if (!Array.isArray(deletedFolders)) deletedFolders = [];
        } catch (e) { deletedFolders = []; }
        const deletedSet = new Set(deletedFolders);

        Object.keys(registry).forEach(name => {
            // Si le cours est un cours officiel ou son alias, nettoyer le snapshot périmé du registre custom
            const cleanName = name.replace(/^CM\s*\d+\s*[-:]\s*/i, '').replace(/^UE\d+\s*[-:]\s*/i, '').trim().toLowerCase();
            const officialKey = Object.keys(defaults).find(dKey => {
                if (dKey === name) return true;
                const cleanD = dKey.replace(/^CM\s*\d+\s*[-:]\s*/i, '').replace(/^UE\d+\s*[-:]\s*/i, '').trim().toLowerCase();
                return cleanD === cleanName;
            });

            if (officialKey) {
                delete registry[name];
                regModified = true;
                return;
            }

            if (!targetAppData[name] || !Array.isArray(targetAppData[name].questions) || targetAppData[name].questions.length < (registry[name].questions?.length || 0)) {
                targetAppData[name] = JSON.parse(JSON.stringify(registry[name]));
                targetAppData[name].isCustom = true;
                targetAppData[name].isSelected = true;
            } else {
                targetAppData[name].isCustom = true;
            }

            // Si le dossier a été supprimé par l'utilisateur, ne jamais le ressusciter
            if (deletedSet.has(targetAppData[name].folder)) {
                targetAppData[name].folder = 'Général';
                registry[name].folder = 'Général';
            }

            if (targetAppData._folders && !deletedSet.has(targetAppData[name].folder) && !targetAppData._folders.includes(targetAppData[name].folder)) {
                targetAppData._folders.push(targetAppData[name].folder);
            }
        });

        if (regModified) {
            safeSetItem(CUSTOM_SUBJECTS_STORAGE_KEY, JSON.stringify(registry));
        }
    }

    // ------------------------------------------------------------------------
    // 2. CATALOGUE DES MATIÈRES DE LA COMMUNAUTÉ
    // ------------------------------------------------------------------------
    function getCommunityCustomCourses() {
        try {
            return JSON.parse(localStorage.getItem(COMMUNITY_CUSTOM_STORAGE_KEY) || '{}');
        } catch (e) {
            return {};
        }
    }

    function saveCommunityCustomCourses(catalog) {
        try {
            safeSetItem(COMMUNITY_CUSTOM_STORAGE_KEY, JSON.stringify(catalog));
        } catch (e) { }
    }

    // Combine tout le sous-dossier Cours/ (window.defaultData) et les cours promus par l'admin
    function getCommunityCatalog() {
        const catalog = {};

        // 1. Cours officiels du sous-dossier Cours/ (chargés dans window.defaultData)
        const defaults = window.defaultData || {};
        Object.keys(defaults).forEach(sub => {
            if (!sub.startsWith('_') && defaults[sub]?.questions) {
                catalog[sub] = {
                    ...JSON.parse(JSON.stringify(defaults[sub])),
                    isOfficial: true,
                    author: defaults[sub].author || 'Équipe Universitaire (Cours/)',
                    category: defaults[sub].folder || 'Général'
                };
            }
        });

        // 2. Cours uploadés par des étudiants et promus par l'administrateur
        const customCommunity = getCommunityCustomCourses();
        Object.keys(customCommunity).forEach(sub => {
            if (!sub.startsWith('_') && customCommunity[sub]?.questions) {
                catalog[sub] = {
                    ...JSON.parse(JSON.stringify(customCommunity[sub])),
                    isOfficial: false,
                    isPromoted: true,
                    category: customCommunity[sub].folder || 'Partagé par la communauté'
                };
            }
        });

        return catalog;
    }

    function getAppData() {
        return window.appData || (typeof appData !== 'undefined' ? appData : null);
    }

    // ------------------------------------------------------------------------
    // HELPER : CORRESPONDANCE D'ALIAS (ex: "CM 10 - Neurohistologie (Partie 1)" <-> "Neurohistologie (Partie 1)")
    // ------------------------------------------------------------------------
    function cleanSubjectKey(name) {
        if (!name || typeof name !== 'string') return '';
        return name
            .replace(/^CM\s*\d+\s*[-:]\s*/i, '')
            .replace(/^UE\d+\s*[-:]\s*/i, '')
            .trim()
            .toLowerCase();
    }

    function findExistingSubjectByAlias(canonicalName, targetData) {
        if (!targetData || typeof targetData !== 'object' || !canonicalName) return null;
        if (targetData[canonicalName]) return { ...targetData[canonicalName], _keyName: canonicalName };

        const cleanCanonical = cleanSubjectKey(canonicalName);
        for (const key of Object.keys(targetData)) {
            if (key.startsWith('_')) continue;
            if (cleanSubjectKey(key) === cleanCanonical) {
                return { ...targetData[key], _keyName: key };
            }
        }
        return null;
    }

    function findCanonicalCommunitySubject(name) {
        const catalog = getCommunityCatalog();
        if (catalog[name]) return { canonicalName: name, course: catalog[name] };

        const cleanName = cleanSubjectKey(name);
        for (const key of Object.keys(catalog)) {
            if (cleanSubjectKey(key) === cleanName) {
                return { canonicalName: key, course: catalog[key] };
            }
        }
        return null;
    }

    // ------------------------------------------------------------------------
    // 3. APPARTENANCE À "MES MATIÈRES"
    // ------------------------------------------------------------------------
    function isUserSubject(subjectName, targetData = null) {
        if (!subjectName || subjectName.startsWith('_')) return false;
        const data = targetData || getAppData();
        if (!data) return false;

        let s = data[subjectName];
        let actualName = subjectName;
        if (!s) {
            const alias = findExistingSubjectByAlias(subjectName, data);
            if (alias) {
                s = data[alias._keyName];
                actualName = alias._keyName;
            }
        }

        if (!s || s.deleted) return false;

        // 1. Si la matière a été explicitement retirée : JAMAIS AFFICHÉE
        if (s.isSelected === false) return false;

        // 2. Matière personnalisée créée ou uploadée par l'utilisateur : TOUJOURS AFFICHÉE
        if (s.isCustom || s.uploadedByMe) return true;
        const registry = getCustomSubjectsRegistry();
        if (registry[subjectName] || registry[actualName]) return true;

        // 3. Matière explicitement ajoutée depuis "Matières de la communauté"
        if (s.isSelected === true) return true;
        const selectedList = getSelectedSubjectsList();
        if (selectedList.includes(subjectName) || selectedList.includes(actualName)) return true;

        return false;
    }

    // ------------------------------------------------------------------------
    // 4. AJOUT / RETRAIT DEPUIS LA SECTION COMMUNAUTAIRE
    // ------------------------------------------------------------------------
    async function toggleCommunitySubject(subjectName) {
        const data = getAppData();
        if (!data) return;
        const inMySubjects = isUserSubject(subjectName, data);

        if (inMySubjects) {
            // Retirer de mes matières
            const alias = findExistingSubjectByAlias(subjectName, data);
            const actualName = alias ? alias._keyName : subjectName;

            if (data[actualName]) {
                data[actualName].isSelected = false;
                delete data[actualName].restored;
            }
            if (data[subjectName]) {
                data[subjectName].isSelected = false;
                delete data[subjectName].restored;
            }

            const selectedList = getSelectedSubjectsList().filter(name => name !== subjectName && name !== actualName);
            saveSelectedSubjectsList(selectedList);

            // Si le dossier n'a plus de matière active, le fermer
            const folder = (data[actualName] || data[subjectName])?.folder || 'Général';
            const remaining = Object.keys(data).filter(sub => !sub.startsWith('_') && data[sub]?.folder === folder && isUserSubject(sub, data));
            if (remaining.length === 0 && window.openFolders) {
                window.openFolders.delete(folder);
            }

            if (window.saveData) await window.saveData();
            showCustomToast('Matière retirée', `"${subjectName}" a été retirée de tes matières.`);
        } else {
            // Ajouter à mes matières avec synchronisation automatique des dernières questions
            await syncCommunitySubject(subjectName, true);
        }

        renderCommunity();
        if (window.renderHome) window.renderHome();
    }

    // ------------------------------------------------------------------------
    // SYNCHRONISATION INDIVIDUELLE AVEC LA COMMUNAUTÉ
    // ------------------------------------------------------------------------
    async function syncCommunitySubject(subjectName, isInitialAdd = false) {
        const data = getAppData();
        if (!data) return;

        const catalog = getCommunityCatalog();
        let source = catalog[subjectName];
        let canonicalName = subjectName;

        if (!source) {
            const match = findCanonicalCommunitySubject(subjectName);
            if (match) {
                source = match.course;
                canonicalName = match.canonicalName;
            }
        }

        if (!source) {
            if (window.customAlert) window.customAlert('Erreur', 'Matière introuvable dans le catalogue communautaire.');
            return;
        }

        // Récupérer les stats existantes de l'utilisateur (conservées par ID ou intitulé de question)
        const alias = findExistingSubjectByAlias(canonicalName, data);
        const actualName = alias ? alias._keyName : canonicalName;

        const existingStatsMap = new Map();
        if (data[actualName] && Array.isArray(data[actualName].questions)) {
            data[actualName].questions.forEach(q => {
                const stats = q.stats ? { ...q.stats } : null;
                const sm2 = q.sm2 ? { ...q.sm2 } : null;
                if (stats || sm2) {
                    if (q.id) existingStatsMap.set(q.id, { stats, sm2 });
                    if (q.q) existingStatsMap.set(q.q, { stats, sm2 });
                }
            });
        }

        const oldStats = data[actualName]?.stats || { attempts: 0, correct: 0, partial: 0 };
        const oldDaily = data[actualName]?.dailyValidations || {};

        // Cloner la matière communautaire à jour (avec les nouvelles questions / options corrigées)
        const freshSubject = JSON.parse(JSON.stringify(source));
        if (existingStatsMap.size > 0 && Array.isArray(freshSubject.questions)) {
            freshSubject.questions.forEach(q => {
                const saved = existingStatsMap.get(q.id) || existingStatsMap.get(q.q);
                if (saved) {
                    if (saved.stats) q.stats = saved.stats;
                    if (saved.sm2) q.sm2 = saved.sm2;
                }
            });
        }

        data[canonicalName] = freshSubject;
        data[canonicalName].stats = oldStats;
        data[canonicalName].dailyValidations = oldDaily;
        data[canonicalName].isSelected = true;
        data[canonicalName].deleted = false;
        data[canonicalName].archived = false;

        // Si la matière existait sous un ancien alias différent (ex: sans préfixe CM), supprimer l'ancien doublon
        if (actualName !== canonicalName && data[actualName]) {
            delete data[actualName];
        }

        // Nettoyer du registre isolé custom pour éviter toute réécriture obsolète au refresh
        const customReg = getCustomSubjectsRegistry();
        let regChanged = false;
        if (customReg[actualName]) { delete customReg[actualName]; regChanged = true; }
        if (customReg[canonicalName]) { delete customReg[canonicalName]; regChanged = true; }
        if (regChanged) safeSetItem(CUSTOM_SUBJECTS_STORAGE_KEY, JSON.stringify(customReg));

        // Création / maintien automatique du dossier dans appData._folders
        const folder = data[canonicalName].folder || 'Général';
        if (!Array.isArray(data._folders)) data._folders = ['Général'];
        if (!data._folders.includes(folder)) data._folders.push(folder);

        if (window.openFolders && typeof window.openFolders.add === 'function') {
            window.openFolders.add(folder);
        }

        const selectedList = getSelectedSubjectsList();
        if (!selectedList.includes(canonicalName)) {
            selectedList.push(canonicalName);
        }
        const cleanedSelected = selectedList.filter(name => name !== actualName || actualName === canonicalName);
        saveSelectedSubjectsList(cleanedSelected);

        if (window.saveData) await window.saveData();

        if (isInitialAdd) {
            showCustomToast('Matière ajoutée !', `"${canonicalName}" a été ajoutée et synchronisée dans "Mes Matières".`);
        } else {
            showCustomToast('Synchronisation réussie !', `"${canonicalName}" est à jour avec les dernières questions.`);
            renderCommunity();
            if (window.renderHome) window.renderHome();
        }
    }

    // ------------------------------------------------------------------------
    // SYNCHRONISATION GLOBALE DE TOUTES LES MATIÈRES AJOUTÉES
    // ------------------------------------------------------------------------
    async function syncAllCommunitySubjects() {
        const data = getAppData();
        if (!data) return;

        const catalog = getCommunityCatalog();
        let syncedCount = 0;

        for (const subName of Object.keys(catalog)) {
            if (isUserSubject(subName, data)) {
                await syncCommunitySubject(subName, false);
                syncedCount++;
            }
        }

        showCustomToast('Synchronisation globale terminée !', `${syncedCount} matière(s) communautaire(s) synchronisée(s) avec succès.`);
        renderCommunity();
        if (window.renderHome) window.renderHome();
    }
        if (window.renderHome) window.renderHome();
    }

    function addSubjectToUserSelection(subjectName) {
        const data = getAppData();
        if (!subjectName || !data || !data[subjectName]) return;
        data[subjectName].isSelected = true;
        data[subjectName].deleted = false;
        const selectedList = getSelectedSubjectsList();
        if (!selectedList.includes(subjectName)) {
            selectedList.push(subjectName);
            saveSelectedSubjectsList(selectedList);
        }
        const folder = data[subjectName].folder || 'Général';
        if (!Array.isArray(data._folders)) data._folders = ['Général'];
        if (!data._folders.includes(folder)) data._folders.push(folder);
        if (window.openFolders && typeof window.openFolders.add === 'function') {
            window.openFolders.add(folder);
        }
    }

    // ------------------------------------------------------------------------
    // 5. AFFICHAGE DES "MATIÈRES DE LA COMMUNAUTÉ"
    // ------------------------------------------------------------------------
    function renderCommunity() {
        const container = document.getElementById('community-list');
        if (!container) return;

        const catalog = getCommunityCatalog();
        const subjects = Object.keys(catalog);

        // Mettre à jour le compteur global
        const countBadge = document.getElementById('community-total-count');
        if (countBadge) countBadge.textContent = subjects.length;

        // Remplir le select des catégories s'il n'est pas encore peuplé
        const catSelect = document.getElementById('filter-community-category');
        if (catSelect && catSelect.children.length <= 1) {
            const categories = [...new Set(subjects.map(sub => catalog[sub].category || catalog[sub].folder || 'Général'))].sort();
            catSelect.innerHTML = '<option value="ALL">📁 Toutes les catégories (' + subjects.length + ')</option>';
            categories.forEach(cat => {
                const count = subjects.filter(sub => (catalog[sub].category || catalog[sub].folder) === cat).length;
                const opt = document.createElement('option');
                opt.value = cat;
                opt.textContent = `${cat} (${count})`;
                catSelect.appendChild(opt);
            });
        }

        filterCommunityCourses();
    }

    function filterCommunityCourses() {
        const container = document.getElementById('community-list');
        if (!container) return;

        const catalog = getCommunityCatalog();
        const searchInput = document.getElementById('search-community');
        const catSelect = document.getElementById('filter-community-category');
        const statusSelect = document.getElementById('filter-community-status');

        const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
        const selectedCat = catSelect ? catSelect.value : 'ALL';
        const selectedStatus = statusSelect ? statusSelect.value : 'ALL';

        const filtered = Object.keys(catalog).filter(sub => {
            const item = catalog[sub];
            const cat = item.category || item.folder || 'Général';
            const isAdded = isUserSubject(sub);

            if (selectedCat !== 'ALL' && cat !== selectedCat) return false;
            if (selectedStatus === 'ADDED' && !isAdded) return false;
            if (selectedStatus === 'NOT_ADDED' && isAdded) return false;

            if (query) {
                const matchName = sub.toLowerCase().includes(query);
                const matchCat = cat.toLowerCase().includes(query);
                const matchDesc = (item.description || '').toLowerCase().includes(query);
                const matchAuthor = (item.author || '').toLowerCase().includes(query);
                if (!matchName && !matchCat && !matchDesc && !matchAuthor) return false;
            }
            return true;
        });

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="empty-state-card" style="grid-column: 1 / -1;">
                    <span style="font-size: 2.5em;">🔍</span>
                    <h3 style="margin: 12px 0 6px 0; color: var(--text-main);">Aucune matière trouvée</h3>
                    <p style="color: var(--text-muted); font-size: 0.9em; margin: 0;">Essaie de modifier tes filtres ou ta recherche.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(sub => {
            const item = catalog[sub];
            const isAdded = isUserSubject(sub);
            const qCount = Array.isArray(item.questions) ? item.questions.length : 0;
            const cat = item.category || item.folder || 'Général';
            const author = item.author || (item.isOfficial ? 'Équipe Universitaire' : 'Étudiant');
            const authorBadge = item.isOfficial
                ? `<span style="font-size:0.75em; color:var(--primary); font-weight:600;">🏛️ Cours Officiel</span>`
                : `<span style="font-size:0.75em; color:#10b981; font-weight:600;">🌟 Partagé par l'étudiant (${escapeHtml(author)})</span>`;

            return `
                <div class="community-card ${isAdded ? 'is-added' : ''}">
                    <div>
                        <div class="community-card-header">
                            <span class="community-category-pill">📁 ${escapeHtml(cat)}</span>
                            ${isAdded ? '<span class="badge validated" style="font-size:0.75em; padding:3px 8px;">✓ Dans mes matières</span>' : ''}
                        </div>
                        <h3 class="community-card-title">${escapeHtml(sub)}</h3>
                        <div class="community-card-meta" style="margin-top: 8px;">
                            <span>📝 <strong>${qCount}</strong> question(s)</span>
                            <span>•</span>
                            ${authorBadge}
                        </div>
                        ${item.description ? `<p style="font-size:0.85em; color:var(--text-muted); line-height:1.45; margin:8px 0 0 0;">${escapeHtml(item.description)}</p>` : ''}
                    </div>

                    <div class="community-card-actions">
                        <button class="btn-preview-subject" onclick="window.communityAdmin.openCoursePreviewModal('${escapeJsString(sub)}')">
                            👁️ Questions
                        </button>
                        ${isAdded ? `
                            <button class="btn-sync-subject" onclick="window.communityAdmin.syncCommunitySubject('${escapeJsString(sub)}')" title="Mettre à jour avec les dernières questions">
                                🔄 Sync
                            </button>
                            <button class="btn-remove-subject" onclick="window.communityAdmin.toggleCommunitySubject('${escapeJsString(sub)}')">
                                ➖ Retirer
                            </button>
                            <button class="btn btn-primary" style="flex:1; padding:8px 12px; font-size:0.88em;" onclick="window.openSubject('${escapeJsString(sub)}')">
                                🚀 Réviser
                            </button>
                        ` : `
                            <button class="btn-add-subject" onclick="window.communityAdmin.toggleCommunitySubject('${escapeJsString(sub)}')">
                                ➕ Ajouter à mes matières
                            </button>
                        `}
                    </div>
                </div>
            `;
        }).join('');
    }

    // ------------------------------------------------------------------------
    // 6. MODAL D'APERÇU D'UN COURS
    // ------------------------------------------------------------------------
    function openCoursePreviewModal(courseName) {
        const modal = document.getElementById('preview-course-modal');
        if (!modal) return;

        const catalog = getCommunityCatalog();
        const course = catalog[courseName] || (window.appData ? window.appData[courseName] : null);
        if (!course) return;

        const headerEl = document.getElementById('preview-course-header');
        const questionsEl = document.getElementById('preview-course-questions');
        const actionBtn = document.getElementById('preview-course-action-btn');

        const isAdded = isUserSubject(courseName);
        const qCount = Array.isArray(course.questions) ? course.questions.length : 0;

        headerEl.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
                <span class="community-category-pill">📁 ${escapeHtml(course.folder || 'Général')}</span>
                ${isAdded ? '<span class="badge validated" style="font-size:0.8em;">✓ Déjà dans tes matières</span>' : ''}
            </div>
            <h2 style="margin: 0 0 6px 0; color: var(--text-main); font-size: 1.4em;">${escapeHtml(courseName)}</h2>
            <div style="font-size: 0.88em; color: var(--text-muted); display:flex; gap:12px; flex-wrap:wrap;">
                <span>Total : <strong>${qCount}</strong> questions</span>
                <span>•</span>
                <span>Auteur : <strong>${escapeHtml(course.author || 'Communauté')}</strong></span>
            </div>
            ${course.description ? `<p style="margin: 10px 0 0 0; font-size: 0.9em; color: var(--text-muted); line-height: 1.4;">${escapeHtml(course.description)}</p>` : ''}
        `;

        if (qCount === 0) {
            questionsEl.innerHTML = `<p style="color:var(--text-muted); text-align:center; padding:30px;">Aucune question dans ce cours.</p>`;
        } else {
            questionsEl.innerHTML = course.questions.map((q, idx) => {
                const optionsHtml = Array.isArray(q.options) ? q.options.map((opt, oIdx) => `
                    <div style="padding: 6px 10px; margin-top: 4px; border-radius: 6px; font-size: 0.9em; background: ${opt.isCorrect ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255,255,255,0.03)'}; border: 1px solid ${opt.isCorrect ? '#10b981' : 'var(--surface-light)'}; color: ${opt.isCorrect ? '#34d399' : 'var(--text-main)'};">
                        ${opt.isCorrect ? '✓ ' : '• '} ${escapeHtml(opt.text)}
                    </div>
                `).join('') : '';

                return `
                    <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--surface-light); border-radius: 8px; padding: 12px; margin-bottom: 12px;">
                        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
                            <strong style="color: var(--primary); font-size: 0.9em;">Question ${idx + 1}</strong>
                            ${Array.isArray(q.tags) && q.tags.length ? `<span style="font-size:0.75em; color:var(--text-muted);">🏷️ ${escapeHtml(q.tags.join(', '))}</span>` : ''}
                        </div>
                        <div style="font-size: 0.98em; color: var(--text-main); margin-bottom: 8px; font-weight: 500;">
                            ${escapeHtml(q.q || '')}
                        </div>
                        <div style="margin-bottom: 8px;">
                            ${optionsHtml}
                        </div>
                        ${q.explanation ? `
                            <div style="font-size: 0.85em; color: var(--text-muted); background: rgba(0,0,0,0.2); padding: 8px 10px; border-radius: 6px; border-left: 3px solid var(--primary);">
                                💡 <strong>Explication :</strong> ${escapeHtml(q.explanation)}
                            </div>
                        ` : ''}
                    </div>
                `;
            }).join('');
        }

        if (actionBtn) {
            if (isAdded) {
                actionBtn.textContent = '➖ Retirer de mes matières';
                actionBtn.className = 'btn-remove-subject';
                actionBtn.onclick = () => {
                    toggleCommunitySubject(courseName);
                    closeCoursePreviewModal();
                };
            } else {
                actionBtn.textContent = '➕ Ajouter à mes matières';
                actionBtn.className = 'btn btn-primary';
                actionBtn.onclick = () => {
                    toggleCommunitySubject(courseName);
                    closeCoursePreviewModal();
                };
            }
        }

        modal.classList.remove('hidden');
        modal.style.display = 'block';
    }

    function closeCoursePreviewModal() {
        const modal = document.getElementById('preview-course-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.style.display = 'none';
        }
    }

    // ------------------------------------------------------------------------
    // 7. GESTION DE L'ESPACE ADMIN (CODE: 0408)
    // ------------------------------------------------------------------------
    function isAdminAuthenticated() {
        return sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true';
    }

    function verifyAdminCode() {
        const input = document.getElementById('admin-code-input');
        const feedback = document.getElementById('admin-code-feedback');
        if (!input) return;

        const code = input.value.trim();
        if (code === ADMIN_CODE) {
            sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
            input.value = '';
            if (feedback) {
                feedback.style.display = 'block';
                feedback.style.color = '#10b981';
                feedback.textContent = '✓ Code correct ! Accès administrateur déverrouillé.';
            }
            updateAdminUI();
            renderAdminDashboard();
        } else {
            if (feedback) {
                feedback.style.display = 'block';
                feedback.style.color = 'var(--danger)';
                feedback.textContent = '❌ Code administrateur incorrect (Code : 0408).';
            }
        }
    }

    function lockAdminMode() {
        sessionStorage.removeItem(ADMIN_SESSION_KEY);
        updateAdminUI();
        const feedback = document.getElementById('admin-code-feedback');
        if (feedback) {
            feedback.style.display = 'block';
            feedback.style.color = 'var(--text-muted)';
            feedback.textContent = '🔒 Mode administrateur verrouillé.';
        }
    }

    function updateAdminUI() {
        const isAuth = isAdminAuthenticated();
        const badge = document.getElementById('admin-status-badge');
        const panel = document.getElementById('admin-panel-container');
        const loginBox = document.getElementById('admin-login-box');

        if (badge) badge.style.display = isAuth ? 'inline-block' : 'none';
        if (panel) {
            panel.classList.toggle('hidden', !isAuth);
            panel.style.display = isAuth ? 'block' : 'none';
        }
        if (loginBox) {
            loginBox.style.display = isAuth ? 'none' : 'flex';
        }
    }

    // Enregistrement Léger de l'utilisateur actif (NE DUPLIQUE PAS LES QUESTIONS DANS LOCALSTORAGE)
    function recordUserInDirectory() {
        try {
            const user = window.currentUser || { id: 'guest_local', email: 'etudiant.local@quizzhub' };
            const userId = user.id;

            // Résumé ULTRA LÉGER des cours uploadés par cet utilisateur (quelques octets seulement !)
            const customSummary = {};
            if (window.appData) {
                Object.keys(window.appData).forEach(sub => {
                    if (sub.startsWith('_') || window.appData[sub]?.deleted) return;
                    if (window.appData[sub]?.isCustom || (!window.baseData?.[sub] && !window.defaultData?.[sub])) {
                        customSummary[sub] = {
                            name: sub,
                            folder: window.appData[sub].folder || 'Général',
                            questionsCount: (window.appData[sub].questions || []).length,
                            description: window.appData[sub].description || ''
                        };
                    }
                });
            }

            const p = (window.appData && window.appData._player) || { xp: 0, level: 1 };
            const attemptsTotal = Object.keys(window.appData || {})
                .filter(k => !k.startsWith('_'))
                .reduce((acc, k) => acc + (window.appData[k]?.stats?.attempts || 0), 0);
            const correctTotal = Object.keys(window.appData || {})
                .filter(k => !k.startsWith('_'))
                .reduce((acc, k) => acc + (window.appData[k]?.stats?.correct || 0), 0);

            let directory = {};
            try {
                directory = JSON.parse(localStorage.getItem(USERS_DIRECTORY_STORAGE_KEY) || '{}');
            } catch (err) { }

            directory[userId] = {
                id: userId,
                email: user.email || 'etudiant@univ',
                lastActive: new Date().toISOString(),
                level: p.level || 1,
                xp: p.xp || 0,
                workoutXP: p.workoutXP || 0,
                quizXP: p.quizXP || 0,
                attemptsTotal,
                correctTotal,
                successRate: attemptsTotal > 0 ? Math.round((correctTotal / attemptsTotal) * 100) : 0,
                customSummary,
                selectedList: getSelectedSubjectsList()
            };

            safeSetItem(USERS_DIRECTORY_STORAGE_KEY, JSON.stringify(directory));
        } catch (e) {
            console.warn('Notice recordUserInDirectory (sécurisé):', e.message);
        }
    }

    // Récupération de tous les utilisateurs (Cloud Supabase + Registre Local)
    async function getAllSiteUsers() {
        const usersMap = {};

        // 1. Lire le registre local
        try {
            const localDir = JSON.parse(localStorage.getItem(USERS_DIRECTORY_STORAGE_KEY) || '{}');
            Object.assign(usersMap, localDir);
        } catch (e) { }

        // S'assurer que l'utilisateur actuel est bien dedans
        recordUserInDirectory();
        try {
            const localDir = JSON.parse(localStorage.getItem(USERS_DIRECTORY_STORAGE_KEY) || '{}');
            Object.assign(usersMap, localDir);
        } catch (e) { }

        // 2. Interroger Supabase si connecté
        if (window.supabaseClient) {
            try {
                const { data, error } = await window.supabaseClient
                    .from('quiz_data')
                    .select('id, user_id, content, updated_at');

                if (!error && Array.isArray(data)) {
                    data.forEach(row => {
                        const uid = row.user_id;
                        if (!uid || uid === 'community_catalog_shared') return;
                        const content = row.content || {};
                        const p = content._player || {};
                        const custom = content._customSubjects || {};
                        const customSummary = {};
                        Object.keys(custom).forEach(cName => {
                            customSummary[cName] = {
                                name: cName,
                                folder: custom[cName].folder || 'Général',
                                questionsCount: (custom[cName].questions || []).length,
                                description: custom[cName].description || ''
                            };
                        });

                        // Fusionner ou ajouter l'utilisateur
                        if (!usersMap[uid]) {
                            usersMap[uid] = {
                                id: uid,
                                email: uid === window.currentUser?.id ? window.currentUser.email : `etudiant_${uid.slice(0, 8)}@univ`,
                                lastActive: row.updated_at || new Date().toISOString(),
                                level: p.level || 1,
                                xp: p.xp || 0,
                                workoutXP: p.workoutXP || 0,
                                quizXP: p.quizXP || 0,
                                attemptsTotal: 0,
                                correctTotal: 0,
                                successRate: 0,
                                customSummary
                            };
                        } else {
                            usersMap[uid].xp = Math.max(usersMap[uid].xp, p.xp || 0);
                            usersMap[uid].level = Math.max(usersMap[uid].level, p.level || 1);
                            usersMap[uid].customSummary = {
                                ...usersMap[uid].customSummary,
                                ...customSummary
                            };
                        }
                    });
                }
            } catch (e) {
                console.warn('Interrogation distante Supabase admin (mode local actif) :', e.message);
            }
        }

        return Object.values(usersMap);
    }

    // Rendu du tableau de bord d'administration
    async function renderAdminDashboard() {
        if (!isAdminAuthenticated()) return;

        const usersListEl = document.getElementById('admin-users-list');
        if (usersListEl) usersListEl.innerHTML = '<p style="color:var(--text-muted); text-align:center; padding:20px;">Chargement des données étudiants...</p>';

        const users = await getAllSiteUsers();

        // Calcul des métriques globales
        let totalUploads = 0;
        let totalQuestions = 0;
        let totalXP = 0;

        users.forEach(u => {
            totalXP += (u.xp || 0);
            const subs = u.customSummary || {};
            const subKeys = Object.keys(subs);
            totalUploads += subKeys.length;
            subKeys.forEach(k => {
                totalQuestions += (subs[k]?.questionsCount || 0);
            });
        });

        // Mise à jour des compteurs du dashboard
        const statUsers = document.getElementById('admin-stat-users-count');
        const statUploads = document.getElementById('admin-stat-uploads-count');
        const statQuestions = document.getElementById('admin-stat-questions-count');
        const statXp = document.getElementById('admin-stat-xp-count');

        if (statUsers) statUsers.textContent = users.length;
        if (statUploads) statUploads.textContent = totalUploads;
        if (statQuestions) statQuestions.textContent = totalQuestions;
        if (statXp) statXp.textContent = totalXP.toLocaleString();

        const communityCourses = getCommunityCustomCourses();
        const statPromoted = document.getElementById('admin-stat-promoted-count');
        if (statPromoted) statPromoted.textContent = Object.keys(communityCourses).length;

        if (!usersListEl) return;

        if (users.length === 0) {
            usersListEl.innerHTML = '<p style="color:var(--text-muted); text-align:center;">Aucun utilisateur enregistré.</p>';
            return;
        }

        usersListEl.innerHTML = users.map(user => {
            const isMe = window.currentUser && user.id === window.currentUser.id;
            const customSubs = user.customSummary || {};
            const customSubNames = Object.keys(customSubs).filter(k => !k.startsWith('_'));

            let coursesHtml = '';
            if (customSubNames.length === 0) {
                coursesHtml = '<p style="font-size:0.85em; color:var(--text-muted); margin:4px 0 0 0; font-style:italic;">Aucun cours uploadé par cet étudiant pour le moment.</p>';
            } else {
                coursesHtml = customSubNames.map(courseName => {
                    const c = customSubs[courseName];
                    const qCount = c.questionsCount || 0;
                    const isAlreadyInCommunity = Boolean(communityCourses[courseName]);

                    return `
                        <div class="admin-course-item">
                            <div>
                                <strong style="color:var(--text-main); font-size:0.95em;">📚 ${escapeHtml(courseName)}</strong>
                                <div style="font-size:0.8em; color:var(--text-muted); margin-top:2px;">
                                    📁 ${escapeHtml(c.folder || 'Général')} • <strong>${qCount}</strong> questions
                                </div>
                            </div>
                            <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
                                <button class="secondary" style="font-size:0.8em; padding:5px 10px;" onclick="window.communityAdmin.previewUserUploadedCourse('${escapeJsString(user.id)}', '${escapeJsString(courseName)}')">
                                    👁️ Examiner
                                </button>
                                ${isAlreadyInCommunity ? `
                                    <span class="badge validated" style="font-size:0.82em; padding:6px 12px; background:rgba(16, 185, 129, 0.2); color:#10b981; border:1px solid #10b981; border-radius:6px; font-weight:600; display:inline-flex; align-items:center; gap:4px;">
                                        ✓ Ajouté aux matières de la communauté
                                    </span>
                                ` : `
                                    <button class="btn btn-primary" style="font-size:0.8em; padding:5px 12px; background:linear-gradient(135deg, #10b981, #059669);" onclick="window.communityAdmin.copyUserCourseToCommunity('${escapeJsString(user.id)}', '${escapeJsString(courseName)}')">
                                        📢 Copier dans les matières communautaires
                                    </button>
                                `}
                            </div>
                        </div>
                    `;
                }).join('');
            }

            const dateStr = user.lastActive ? new Date(user.lastActive).toLocaleDateString() : 'Actif';
            const userSelectedList = user.selectedList || [];

            return `
                <div class="admin-user-card">
                    <div class="admin-user-header">
                        <div class="admin-user-email">
                            👤 ${escapeHtml(user.email || 'Étudiant')}
                            ${isMe ? '<span class="badge" style="background:var(--primary); color:#fff; font-size:0.7em;">Toi</span>' : ''}
                        </div>
                        <div class="admin-user-badges">
                            <span class="badge" style="background:rgba(99,102,241,0.15); color:var(--primary); font-size:0.8em;">Niv. ${user.level || 1}</span>
                            <span class="badge" style="background:rgba(16,185,129,0.15); color:#10b981; font-size:0.8em;">⚡ ${user.xp || 0} XP</span>
                            <span class="badge" style="background:rgba(245,158,11,0.15); color:#f59e0b; font-size:0.8em;">🎯 ${user.successRate || 0}% réussite</span>
                            <small style="color:var(--text-muted); font-size:0.8em; align-self:center;">Activité: ${dateStr}</small>
                        </div>
                    </div>
                    <div style="margin-top: 10px; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 10px;">
                        <div style="font-size:0.85em; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:6px;">
                            Cours uploadés (${customSubNames.length}) :
                        </div>
                        ${coursesHtml}
                    </div>
                    ${userSelectedList.length > 0 ? `
                        <div style="margin-top: 10px; border-top: 1px dashed rgba(255,255,255,0.06); padding-top: 8px;">
                            <div style="font-size:0.8em; font-weight:600; color:var(--text-muted); text-transform:uppercase; margin-bottom:5px;">
                                Matières communautaires choisies (${userSelectedList.length}) :
                            </div>
                            <div style="display:flex; flex-wrap:wrap; gap:6px;">
                                ${userSelectedList.map(name => `
                                    <span style="font-size:0.78em; padding:3px 8px; border-radius:12px; background:rgba(99,102,241,0.12); color:var(--primary); border:1px solid rgba(99,102,241,0.3);">
                                        📖 ${escapeHtml(name)}
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            `;
        }).join('');
    }

    // Action Admin : Copier un cours d'un utilisateur dans l'onglet communautaire
    async function copyUserCourseToCommunity(userId, courseName) {
        // 1. Chercher le cours dans appData local si disponible
        let sourceCourse = window.appData && window.appData[courseName];
        if (!sourceCourse) {
            const customRegistry = getCustomSubjectsRegistry();
            sourceCourse = customRegistry[courseName];
        }

        // 2. Si pas trouvé en local, chercher dans les données distantes Supabase
        if (!sourceCourse && window.supabaseClient) {
            try {
                const { data } = await window.supabaseClient
                    .from('quiz_data')
                    .select('content')
                    .eq('user_id', userId)
                    .maybeSingle();
                if (data?.content?._customSubjects?.[courseName]) {
                    sourceCourse = data.content._customSubjects[courseName];
                }
            } catch (e) { }
        }

        if (!sourceCourse) {
            if (window.customAlert) window.customAlert('Information', `Les données complètes du cours "${courseName}" ne sont pas directement accessibles en local.`);
            return;
        }

        const communityCatalog = getCommunityCustomCourses();
        communityCatalog[courseName] = {
            ...JSON.parse(JSON.stringify(sourceCourse)),
            isCommunityCustom: true,
            promotedByAdmin: true,
            promotedAt: Date.now(),
            author: sourceCourse.author || 'Étudiant de la communauté',
            description: sourceCourse.description || `Cours partagé par la communauté.`
        };

        saveCommunityCustomCourses(communityCatalog);

        if (window.customAlert) {
            window.customAlert(
                'Cours Publié en Communauté !',
                `Le cours "${courseName}" a été copié avec succès dans "Matières de la communauté".\nIl est désormais accessible à tous les étudiants du site !`
            );
        }

        renderAdminDashboard();
        renderCommunity();
    }

    // Examiner un cours uploadé par un utilisateur
    async function previewUserUploadedCourse(userId, courseName) {
        let sourceCourse = window.appData && window.appData[courseName];
        if (!sourceCourse) {
            sourceCourse = getCustomSubjectsRegistry()[courseName];
        }
        if (!sourceCourse && window.supabaseClient) {
            try {
                const { data } = await window.supabaseClient
                    .from('quiz_data')
                    .select('content')
                    .eq('user_id', userId)
                    .maybeSingle();
                if (data?.content?._customSubjects?.[courseName]) {
                    sourceCourse = data.content._customSubjects[courseName];
                }
            } catch (e) { }
        }

        if (sourceCourse) {
            openCoursePreviewModalDirect(courseName, sourceCourse, sourceCourse.author || 'Étudiant');
        } else {
            if (window.customAlert) window.customAlert('Aperçu', `Questions du cours "${courseName}" non chargées en mémoire.`);
        }
    }

    function openCoursePreviewModalDirect(courseName, course, authorEmail) {
        const modal = document.getElementById('preview-course-modal');
        if (!modal) return;

        const headerEl = document.getElementById('preview-course-header');
        const questionsEl = document.getElementById('preview-course-questions');
        const actionBtn = document.getElementById('preview-course-action-btn');

        const qCount = Array.isArray(course.questions) ? course.questions.length : 0;

        headerEl.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
                <span class="community-category-pill">📁 ${escapeHtml(course.folder || 'Général')}</span>
                <span class="badge" style="background:#6366f1; color:#fff; font-size:0.8em;">Upload Étudiant</span>
            </div>
            <h2 style="margin: 0 0 6px 0; color: var(--text-main); font-size: 1.4em;">${escapeHtml(courseName)}</h2>
            <div style="font-size: 0.88em; color: var(--text-muted); display:flex; gap:12px; flex-wrap:wrap;">
                <span>Total : <strong>${qCount}</strong> questions</span>
                <span>•</span>
                <span>Auteur : <strong>${escapeHtml(authorEmail || 'Étudiant')}</strong></span>
            </div>
        `;

        questionsEl.innerHTML = (course.questions || []).map((q, idx) => `
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--surface-light); border-radius: 8px; padding: 12px; margin-bottom: 12px;">
                <strong style="color: var(--primary); font-size: 0.9em;">Question ${idx + 1}</strong>
                <div style="font-size: 0.98em; color: var(--text-main); margin: 6px 0 8px 0; font-weight: 500;">
                    ${escapeHtml(q.q || '')}
                </div>
                <div>
                    ${(q.options || []).map(opt => `
                        <div style="padding: 5px 8px; margin-top: 4px; border-radius: 6px; font-size: 0.88em; background: ${opt.isCorrect ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255,255,255,0.03)'}; border: 1px solid ${opt.isCorrect ? '#10b981' : 'var(--surface-light)'}; color: ${opt.isCorrect ? '#34d399' : 'var(--text-main)'};">
                            ${opt.isCorrect ? '✓ ' : '• '} ${escapeHtml(opt.text)}
                        </div>
                    `).join('')}
                </div>
                ${q.explanation ? `
                    <div style="font-size: 0.85em; color: var(--text-muted); background: rgba(0,0,0,0.2); padding: 8px 10px; border-radius: 6px; margin-top: 8px;">
                        💡 <strong>Explication :</strong> ${escapeHtml(q.explanation)}
                    </div>
                ` : ''}
            </div>
        `).join('');

        if (actionBtn) {
            actionBtn.textContent = '📢 Copier dans la communauté';
            actionBtn.className = 'btn btn-primary';
            actionBtn.onclick = () => {
                copyUserCourseToCommunity(authorEmail, courseName);
                closeCoursePreviewModal();
            };
        }

        modal.classList.remove('hidden');
        modal.style.display = 'block';
    }

    // ------------------------------------------------------------------------
    // 8. HELPERS & TOAST
    // ------------------------------------------------------------------------
    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function escapeJsString(str) {
        if (!str) return '';
        return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    }

    function showCustomToast(title, message) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: 25px;
            right: 25px;
            z-index: 3000;
            background: linear-gradient(135deg, #1e1e2e, #2d2b55);
            border: 1px solid var(--primary);
            color: #fff;
            padding: 14px 20px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.6);
            animation: slideDownFade 0.3s ease-out;
            max-width: 360px;
        `;
        toast.innerHTML = `
            <div style="font-weight: bold; color: var(--primary); margin-bottom: 4px;">${escapeHtml(title)}</div>
            <div style="font-size: 0.9em; color: var(--text-muted);">${escapeHtml(message)}</div>
        `;
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    }

    // Initialisation au chargement
    document.addEventListener('DOMContentLoaded', () => {
        updateAdminUI();
        if (isAdminAuthenticated()) {
            renderAdminDashboard();
        }
    });

    // Exposition globale sur window
    window.communityAdmin = {
        getCommunityCatalog,
        isUserSubject,
        toggleCommunitySubject,
        syncCommunitySubject,
        syncAllCommunitySubjects,
        findExistingSubjectByAlias,
        findCanonicalCommunitySubject,
        renderCommunity,
        filterCommunityCourses,
        openCoursePreviewModal,
        closeCoursePreviewModal,
        verifyAdminCode,
        lockAdminMode,
        renderAdminDashboard,
        copyUserCourseToCommunity,
        previewUserUploadedCourse,
        recordUserInDirectory,
        saveCustomSubjectToRegistry,
        getCustomSubjectsRegistry,
        restoreIsolatedCustomSubjects,
        getSelectedSubjectsList,
        saveSelectedSubjectsList,
        addSubjectToUserSelection,
        safeSetItem
    };

    window.verifyAdminCode = verifyAdminCode;
    window.lockAdminMode = lockAdminMode;
    window.refreshAdminDashboard = renderAdminDashboard;
    window.renderCommunity = renderCommunity;
    window.filterCommunityCourses = filterCommunityCourses;
    window.closeCoursePreviewModal = closeCoursePreviewModal;
    window.syncAllCommunitySubjects = syncAllCommunitySubjects;
    window.syncCommunitySubject = syncCommunitySubject;
})();
