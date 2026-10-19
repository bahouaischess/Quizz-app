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
    // 1. REGISTRES ISOLÉS (ANTI-PERTE LORS DES MISES À JOUR DU CODE)
    // ------------------------------------------------------------------------
    function getCustomSubjectsRegistry() {
        try {
            return JSON.parse(localStorage.getItem(CUSTOM_SUBJECTS_STORAGE_KEY) || '{}');
        } catch (e) {
            console.error('Erreur lecture myQuizCustomSubjects:', e);
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
            localStorage.setItem(CUSTOM_SUBJECTS_STORAGE_KEY, JSON.stringify(registry));
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
            localStorage.setItem(SELECTED_SUBJECTS_STORAGE_KEY, JSON.stringify(unique));
        } catch (e) { }
    }

    // Restaure tous les cours custom dans appData pour garantir 0 perte
    function restoreIsolatedCustomSubjects(targetAppData) {
        if (!targetAppData || typeof targetAppData !== 'object') return;
        const registry = getCustomSubjectsRegistry();
        Object.keys(registry).forEach(name => {
            if (!targetAppData[name] || !Array.isArray(targetAppData[name].questions) || targetAppData[name].questions.length === 0) {
                targetAppData[name] = JSON.parse(JSON.stringify(registry[name]));
                targetAppData[name].isCustom = true;
                targetAppData[name].isSelected = true;
            } else {
                targetAppData[name].isCustom = true;
            }
        });
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
            localStorage.setItem(COMMUNITY_CUSTOM_STORAGE_KEY, JSON.stringify(catalog));
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
                    author: 'Équipe Universitaire (Cours/)',
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

    // ------------------------------------------------------------------------
    // 3. APPARTENANCE À "MES MATIÈRES"
    // ------------------------------------------------------------------------
    function isUserSubject(subjectName) {
        if (!subjectName || subjectName.startsWith('_')) return false;
        if (!window.appData || !window.appData[subjectName]) return false;
        if (window.appData[subjectName].deleted) return false;

        const s = window.appData[subjectName];

        // A. Matière personnalisée uploadée par cet utilisateur
        if (s.isCustom || s.uploadedByMe) return true;
        const registry = getCustomSubjectsRegistry();
        if (registry[subjectName]) return true;

        // B. Matière explicitement choisie depuis "Matières de la communauté"
        if (s.isSelected === true) return true;
        const selectedList = getSelectedSubjectsList();
        if (selectedList.includes(subjectName)) return true;

        // C. RÉTROCOMPATIBILITÉ ABSOLUE : si l'utilisateur a déjà des tentatives ou des révisions, on conserve !
        if (Number(s.stats?.attempts) > 0) return true;
        if (Array.isArray(s.questions) && s.questions.some(q => (q.stats?.attempts > 0) || (q.sm2?.repetition > 0))) {
            return true;
        }

        return false;
    }

    // ------------------------------------------------------------------------
    // 4. AJOUT / RETRAIT DEPUIS LA SECTION COMMUNAUTAIRE
    // ------------------------------------------------------------------------
    async function toggleCommunitySubject(subjectName) {
        if (!window.appData) return;
        const inMySubjects = isUserSubject(subjectName);

        if (inMySubjects) {
            // Retirer de mes matières
            if (window.appData[subjectName]) {
                window.appData[subjectName].isSelected = false;
            }
            const selectedList = getSelectedSubjectsList().filter(name => name !== subjectName);
            saveSelectedSubjectsList(selectedList);
            if (window.saveData) await window.saveData();
            showCustomToast('Matière retirée', `"${subjectName}" a été retirée de tes matières.`);
        } else {
            // Ajouter à mes matières
            const catalog = getCommunityCatalog();
            const source = catalog[subjectName];
            if (!source) {
                if (window.customAlert) window.customAlert('Erreur', 'Matière introuvable dans le catalogue communautaire.');
                return;
            }

            if (!window.appData[subjectName]) {
                window.appData[subjectName] = JSON.parse(JSON.stringify(source));
                window.appData[subjectName].stats = { attempts: 0, correct: 0, partial: 0 };
                window.appData[subjectName].dailyValidations = {};
            }

            window.appData[subjectName].isSelected = true;
            window.appData[subjectName].deleted = false;
            window.appData[subjectName].archived = false;

            const folder = window.appData[subjectName].folder || 'Général';
            if (Array.isArray(window.appData._folders) && !window.appData._folders.includes(folder)) {
                window.appData._folders.push(folder);
            }

            const selectedList = getSelectedSubjectsList();
            if (!selectedList.includes(subjectName)) {
                selectedList.push(subjectName);
                saveSelectedSubjectsList(selectedList);
            }

            if (window.saveData) await window.saveData();
            showCustomToast('Matière ajoutée !', `"${subjectName}" est maintenant dans "Mes Matières".`);
        }

        renderCommunity();
        if (window.renderHome) window.renderHome();
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
                feedback.textContent = '❌ Code administrateur incorrect (Indice : 0408).';
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

    // Enregistrement continu de l'utilisateur actif dans le registre local / cloud
    function recordUserInDirectory() {
        try {
            const directory = JSON.parse(localStorage.getItem(USERS_DIRECTORY_STORAGE_KEY) || '{}');
            const user = window.currentUser || { id: 'guest_local', email: 'etudiant.local@quizzhub' };
            const userId = user.id;

            // Extraire tous les cours uploadés par cet utilisateur
            const customSubjects = {};
            if (window.appData) {
                Object.keys(window.appData).forEach(sub => {
                    if (sub.startsWith('_') || window.appData[sub]?.deleted) return;
                    if (window.appData[sub]?.isCustom || (!window.baseData?.[sub] && !window.defaultData?.[sub])) {
                        customSubjects[sub] = JSON.parse(JSON.stringify(window.appData[sub]));
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
                customSubjects
            };

            localStorage.setItem(USERS_DIRECTORY_STORAGE_KEY, JSON.stringify(directory));
        } catch (e) {
            console.error('Erreur recordUserInDirectory:', e);
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
                        if (!uid) return;
                        const content = row.content || {};
                        const p = content._player || {};
                        const custom = content._customSubjects || {};

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
                                customSubjects: custom
                            };
                        } else {
                            // Enrichir avec les données distantes
                            usersMap[uid].xp = Math.max(usersMap[uid].xp, p.xp || 0);
                            usersMap[uid].level = Math.max(usersMap[uid].level, p.level || 1);
                            usersMap[uid].customSubjects = {
                                ...usersMap[uid].customSubjects,
                                ...custom
                            };
                        }
                    });
                }
            } catch (e) {
                console.warn('Interrogation distante Supabase admin (mode local actif) :', e);
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
            const subs = u.customSubjects || {};
            const subKeys = Object.keys(subs);
            totalUploads += subKeys.length;
            subKeys.forEach(k => {
                totalQuestions += (subs[k]?.questions?.length || 0);
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

        // Affichage des cartes étudiants
        if (!usersListEl) return;

        if (users.length === 0) {
            usersListEl.innerHTML = '<p style="color:var(--text-muted); text-align:center;">Aucun utilisateur enregistré.</p>';
            return;
        }

        const communityCourses = getCommunityCustomCourses();

        usersListEl.innerHTML = users.map(user => {
            const isMe = window.currentUser && user.id === window.currentUser.id;
            const customSubs = user.customSubjects || {};
            const customSubNames = Object.keys(customSubs).filter(k => !k.startsWith('_'));

            let coursesHtml = '';
            if (customSubNames.length === 0) {
                coursesHtml = '<p style="font-size:0.85em; color:var(--text-muted); margin:4px 0 0 0; font-style:italic;">Aucun cours uploadé par cet étudiant pour le moment.</p>';
            } else {
                coursesHtml = customSubNames.map(courseName => {
                    const c = customSubs[courseName];
                    const qCount = Array.isArray(c.questions) ? c.questions.length : 0;
                    const isAlreadyInCommunity = Boolean(communityCourses[courseName]);

                    return `
                        <div class="admin-course-item">
                            <div>
                                <strong style="color:var(--text-main); font-size:0.95em;">📚 ${escapeHtml(courseName)}</strong>
                                <div style="font-size:0.8em; color:var(--text-muted); margin-top:2px;">
                                    📁 ${escapeHtml(c.folder || 'Général')} • <strong>${qCount}</strong> questions
                                </div>
                            </div>
                            <div style="display:flex; gap:8px; align-items:center;">
                                <button class="secondary" style="font-size:0.8em; padding:5px 10px;" onclick="window.communityAdmin.previewUserUploadedCourse('${escapeJsString(user.id)}', '${escapeJsString(courseName)}')">
                                    👁️ Examiner
                                </button>
                                ${isAlreadyInCommunity ? `
                                    <span class="badge validated" style="font-size:0.8em; padding:5px 10px;">
                                        ✓ Déjà en Communauté
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
                </div>
            `;
        }).join('');
    }

    // Action Admin : Copier un cours d'un utilisateur dans l'onglet communautaire
    async function copyUserCourseToCommunity(userId, courseName) {
        const users = await getAllSiteUsers();
        const user = users.find(u => u.id === userId);
        if (!user || !user.customSubjects || !user.customSubjects[courseName]) {
            if (window.customAlert) window.customAlert('Erreur', 'Cours introuvable pour cet utilisateur.');
            return;
        }

        const sourceCourse = user.customSubjects[courseName];
        const communityCatalog = getCommunityCustomCourses();

        // Dupliquer le cours pour la communauté
        communityCatalog[courseName] = {
            ...JSON.parse(JSON.stringify(sourceCourse)),
            isCommunityCustom: true,
            promotedByAdmin: true,
            promotedAt: Date.now(),
            author: user.email || 'Étudiant de la communauté',
            description: sourceCourse.description || `Cours partagé par ${user.email || 'un étudiant'}.`
        };

        // Sauvegarder localement
        saveCommunityCustomCourses(communityCatalog);

        // Sauvegarder dans Supabase pour que tous les étudiants connectés y aient accès
        if (window.supabaseClient) {
            try {
                // On met à jour ou crée la ligne partagée
                await window.supabaseClient
                    .from('quiz_data')
                    .upsert([{
                        user_id: 'community_catalog_shared',
                        content: { _communityCourses: communityCatalog },
                        updated_at: new Date().toISOString()
                    }]);
            } catch (e) {
                console.warn('Synchro cloud du cours communautaire:', e);
            }
        }

        if (window.customAlert) {
            window.customAlert(
                'Cours Publié en Communauté !',
                `Le cours "${courseName}" a été copié avec succès dans les "Matières de la communauté".\nIl est désormais accessible à tous les étudiants du site !`
            );
        }

        renderAdminDashboard();
        renderCommunity();
    }

    // Examiner un cours uploadé par un utilisateur depuis la console admin
    async function previewUserUploadedCourse(userId, courseName) {
        const users = await getAllSiteUsers();
        const user = users.find(u => u.id === userId);
        if (!user || !user.customSubjects || !user.customSubjects[courseName]) return;
        const course = user.customSubjects[courseName];

        // Ouvrir le modal d'aperçu avec les données de ce cours
        openCoursePreviewModalDirect(courseName, course, user.email);
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

        questionsEl.innerHTML = course.questions.map((q, idx) => `
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
        saveSelectedSubjectsList
    };

    // Fonctions globales requises par les attributs onclick dans le HTML
    window.verifyAdminCode = verifyAdminCode;
    window.lockAdminMode = lockAdminMode;
    window.refreshAdminDashboard = renderAdminDashboard;
    window.renderCommunity = renderCommunity;
    window.filterCommunityCourses = filterCommunityCourses;
    window.closeCoursePreviewModal = closeCoursePreviewModal;
})();
