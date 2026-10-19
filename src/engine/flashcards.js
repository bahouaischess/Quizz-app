/**
 * QuizzHub - Moteur de Flashcards & Répétition Espacée (SM-2)
 * Permet de créer, éditer, organiser en dossiers/matières et réviser des flashcards.
 */

(function () {
    'use strict';

    const DEFAULT_FOLDER = 'Général';
    const DEFAULT_SUBJECT = 'Général';

    // État de la session de révision en cours
    let currentStudySession = {
        active: false,
        deckName: 'Toutes les cartes',
        cards: [],
        currentIndex: 0,
        isFlipped: false,
        reviewedCount: 0,
        againCount: 0,
        xpEarned: 0
    };

    // Filtres d'affichage du hub
    let currentFilter = {
        folder: 'ALL',
        subject: 'ALL',
        status: 'ALL', // ALL, DUE, NEW, MASTERED
        search: ''
    };

    // ------------------------------------------------------------------------
    // 1. GESTION DES DONNÉES & NORMALISATION
    // ------------------------------------------------------------------------

    function getFlashcards() {
        if (!window.appData) return [];
        if (!Array.isArray(window.appData._flashcards)) {
            window.appData._flashcards = [];
        }
        return window.appData._flashcards;
    }

    function setFlashcards(cards) {
        if (!window.appData) return;
        window.appData._flashcards = Array.isArray(cards) ? cards : [];
    }

    function normalizeFlashcard(raw, index = 0) {
        const now = Date.now();
        const id = raw.id || `fc_${now}_${Math.random().toString(36).substring(2, 9)}_${index}`;
        const recto = typeof raw.recto === 'string' ? raw.recto.trim() : (raw.front || raw.question || '');
        const verso = typeof raw.verso === 'string' ? raw.verso.trim() : (raw.back || raw.answer || raw.reponse || '');
        const subject = (raw.subject || raw.matiere || raw.matière || DEFAULT_SUBJECT).trim() || DEFAULT_SUBJECT;
        let folder = (raw.folder || raw.dossier || DEFAULT_FOLDER).trim() || DEFAULT_FOLDER;
        let deletedFolders = [];
        try {
            deletedFolders = JSON.parse(localStorage.getItem('myQuizDeletedFolders') || '[]');
        } catch (e) { deletedFolders = []; }
        if (deletedFolders.includes(folder)) folder = DEFAULT_FOLDER;

        const tags = Array.isArray(raw.tags) ? raw.tags.map(t => String(t).trim()).filter(Boolean) : [];

        const rawSm2 = raw.sm2 || {};
        const sm2 = {
            repetition: Number(rawSm2.repetition) || 0,
            interval: Number(rawSm2.interval) || 0,
            easeFactor: Number(rawSm2.easeFactor) || 2.5,
            nextReview: Number(rawSm2.nextReview) || 0,
            lastReviewed: Number(rawSm2.lastReviewed) || 0,
            successStreak: Number(rawSm2.successStreak) || 0
        };

        const rawStats = raw.stats || {};
        const stats = {
            reviews: Number(rawStats.reviews) || 0,
            success: Number(rawStats.success) || 0
        };

        return {
            id,
            recto,
            verso,
            subject,
            folder,
            tags,
            sm2,
            stats,
            createdAt: Number(raw.createdAt) || now,
            updatedAt: Number(raw.updatedAt) || now
        };
    }

    // Récupérer les dossiers et sous-dossiers uniques
    function getAllFolders() {
        const cards = getFlashcards();
        let deletedFolders = [];
        try {
            deletedFolders = JSON.parse(localStorage.getItem('myQuizDeletedFolders') || '[]');
            if (!Array.isArray(deletedFolders)) deletedFolders = [];
        } catch (e) { deletedFolders = []; }
        const deletedSet = new Set(deletedFolders);

        const folderSet = new Set([DEFAULT_FOLDER]);
        cards.forEach(c => {
            if (c.folder && !deletedSet.has(c.folder)) folderSet.add(c.folder);
            else if (c.folder && deletedSet.has(c.folder)) c.folder = DEFAULT_FOLDER;
        });
        if (window.appData && Array.isArray(window.appData._folders)) {
            window.appData._folders.forEach(f => {
                if (f && f !== 'Archives' && !deletedSet.has(f)) folderSet.add(f);
            });
        }
        return Array.from(folderSet).sort();
    }

    // Récupérer toutes les matières uniques (depuis les flashcards et les quiz)
    function getAllSubjects() {
        const cards = getFlashcards();
        const subSet = new Set([DEFAULT_SUBJECT]);
        cards.forEach(c => {
            if (c.subject) subSet.add(c.subject);
        });
        if (window.appData) {
            Object.keys(window.appData).forEach(k => {
                if (!k.startsWith('_') && !window.appData[k]?.deleted) {
                    subSet.add(k);
                }
            });
        }
        return Array.from(subSet).sort();
    }

    // Sauvegarder dans appData et persister
    async function saveFlashcards() {
        if (typeof window.saveData === 'function') {
            await window.saveData();
        } else {
            try {
                localStorage.setItem('myQuizData', JSON.stringify(window.appData));
            } catch (e) {
                console.warn('Erreur sauvegarde locale flashcards:', e);
            }
        }
    }

    // ------------------------------------------------------------------------
    // 2. SM-2 SPACED REPETITION ENGINE POUR FLASHCARDS
    // ------------------------------------------------------------------------

    function calculateFlashcardNextInterval(sm2, quality) {
        if (quality < 3) return { interval: 0, text: "< 10 min", ms: 10 * 60 * 1000 };

        const rep = sm2.repetition || 0;
        const int = sm2.interval || 0;
        const ef = sm2.easeFactor || 2.5;

        // Première répétition réussie
        if (rep === 0) {
            if (quality === 3) return { interval: 0.5, text: "12 h", ms: 12 * 60 * 60 * 1000 };
            if (quality === 4) return { interval: 1, text: "1 jour", ms: 1 * 24 * 60 * 60 * 1000 };
            return { interval: 3, text: "3 jours", ms: 3 * 24 * 60 * 60 * 1000 };
        }

        // Deuxième répétition
        if (rep === 1) {
            if (quality === 3) return { interval: 0.5, text: "12 h", ms: 12 * 60 * 60 * 1000 };
            if (quality === 4) return { interval: 3, text: "3 jours", ms: 3 * 24 * 60 * 60 * 1000 };
            return { interval: 7, text: "7 jours", ms: 7 * 24 * 60 * 60 * 1000 };
        }

        // Répétitions suivantes
        let newInt;
        if (quality === 3) newInt = Math.max(1, Math.round(int * 1.2));
        else if (quality === 4) newInt = Math.max(1, Math.round(int * ef));
        else if (quality === 5) newInt = Math.max(2, Math.round(int * ef * 1.3));

        return { interval: newInt, text: `${newInt} jours`, ms: newInt * 24 * 60 * 60 * 1000 };
    }

    function applyFlashcardSM2(card, quality) {
        const next = calculateFlashcardNextInterval(card.sm2, quality);
        const now = Date.now();

        card.sm2.lastReviewed = now;
        card.stats.reviews = (card.stats.reviews || 0) + 1;

        if (quality < 3) {
            // À revoir (échec)
            card.sm2.repetition = 0;
            card.sm2.interval = 0;
            card.sm2.nextReview = now + (10 * 60 * 1000);
            card.sm2.successStreak = 0;
        } else {
            // Succès
            card.sm2.repetition = (card.sm2.repetition || 0) + 1;
            card.sm2.interval = next.interval;
            card.sm2.nextReview = now + next.ms;
            card.sm2.successStreak = (card.sm2.successStreak || 0) + 1;
            card.stats.success = (card.stats.success || 0) + 1;
        }

        // Facteur de facilité SM-2
        card.sm2.easeFactor = (card.sm2.easeFactor || 2.5) + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
        if (card.sm2.easeFactor < 1.3) card.sm2.easeFactor = 1.3;

        card.updatedAt = now;
    }

    function isCardDue(card) {
        if (!card.sm2 || !card.sm2.nextReview) return true; // Carte jamais révisée
        return Date.now() >= card.sm2.nextReview;
    }

    // ------------------------------------------------------------------------
    // 3. CRUD FLASHCARDS
    // ------------------------------------------------------------------------

    function addCard({ recto, verso, subject, folder, tags = [] }) {
        if (!recto || !recto.trim() || !verso || !verso.trim()) {
            throw new Error('Le recto et le verso ne peuvent pas être vides.');
        }
        const cards = getFlashcards();
        const newCard = normalizeFlashcard({
            recto,
            verso,
            subject: subject || DEFAULT_SUBJECT,
            folder: folder || DEFAULT_FOLDER,
            tags
        });
        cards.unshift(newCard);
        setFlashcards(cards);
        saveFlashcards();
        return newCard;
    }

    function updateCard(id, updates) {
        const cards = getFlashcards();
        const index = cards.findIndex(c => c.id === id);
        if (index === -1) return false;

        const card = cards[index];
        if (updates.recto !== undefined) card.recto = updates.recto.trim();
        if (updates.verso !== undefined) card.verso = updates.verso.trim();
        if (updates.subject !== undefined) card.subject = updates.subject.trim() || DEFAULT_SUBJECT;
        if (updates.folder !== undefined) card.folder = updates.folder.trim() || DEFAULT_FOLDER;
        if (updates.tags !== undefined) card.tags = Array.isArray(updates.tags) ? updates.tags : [];
        card.updatedAt = Date.now();

        saveFlashcards();
        return true;
    }

    function deleteCard(id) {
        let cards = getFlashcards();
        const initialLen = cards.length;
        cards = cards.filter(c => c.id !== id);
        if (cards.length !== initialLen) {
            setFlashcards(cards);
            saveFlashcards();
            return true;
        }
        return false;
    }

    function importCards(cardsList) {
        if (!Array.isArray(cardsList)) {
            throw new Error('Le format importé doit être une liste (tableau) de flashcards.');
        }
        const existing = getFlashcards();
        let addedCount = 0;

        cardsList.forEach((raw, idx) => {
            if (!raw || (!raw.recto && !raw.front && !raw.question)) return;
            const card = normalizeFlashcard(raw, idx);
            existing.push(card);
            addedCount++;
        });

        setFlashcards(existing);
        saveFlashcards();
        return addedCount;
    }

    // ------------------------------------------------------------------------
    // 4. RENDU DE LA VUE PRINCIPALE FLASHCARDS
    // ------------------------------------------------------------------------

    function renderView() {
        const container = document.getElementById('flashcard-view');
        if (!container) return;

        const cards = getFlashcards();
        const now = Date.now();
        const dueCards = cards.filter(isCardDue);
        const masteredCards = cards.filter(c => (c.sm2?.interval || 0) >= 7);
        const totalCards = cards.length;

        // Récupérer les dossiers et matières pour les filtres
        const folders = getAllFolders();
        const subjects = getAllSubjects();

        container.innerHTML = `
            <div class="flashcards-header" style="margin-bottom: 25px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 15px;">
                    <div>
                        <h1 style="margin: 0 0 6px 0; display:flex; align-items:center; gap:10px;">
                            <span>🎴</span> <span>Mes Flashcards</span>
                        </h1>
                        <p style="color: var(--text-muted); margin: 0; font-size: 0.95em;">
                            Mémorise tes définitions, formules et théorèmes grâce à la répétition espacée SM-2.
                        </p>
                    </div>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <button class="btn btn-primary" onclick="window.flashcardManager.startStudySession()" style="display:flex; align-items:center; gap:8px;">
                            <span>▶</span> <span>Réviser (${dueCards.length} prêtes)</span>
                        </button>
                        <button class="secondary" onclick="window.flashcardManager.openCreateModal()" style="display:flex; align-items:center; gap:8px;">
                            <span>➕</span> <span>Nouvelle carte</span>
                        </button>
                        <button class="secondary" onclick="window.flashcardManager.openImportModal()" style="display:flex; align-items:center; gap:8px;" title="Importer un deck JSON">
                            <span>📥</span> <span>Importer JSON</span>
                        </button>
                        <button class="secondary" onclick="window.flashcardManager.exportCardsJson()" style="display:flex; align-items:center; gap:8px;" title="Exporter toutes mes cartes">
                            <span>📤</span> <span>Exporter</span>
                        </button>
                    </div>
                </div>

                <!-- STATS BAR -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin-top: 20px;">
                    <div class="card" style="padding: 15px; margin: 0; border-left: 4px solid var(--primary);">
                        <div style="font-size: 0.8em; color: var(--text-muted); text-transform: uppercase;">Total Flashcards</div>
                        <div style="font-size: 1.6em; font-weight: bold; color: var(--primary);">${totalCards}</div>
                    </div>
                    <div class="card" style="padding: 15px; margin: 0; border-left: 4px solid var(--warning);">
                        <div style="font-size: 0.8em; color: var(--text-muted); text-transform: uppercase;">À réviser aujourd'hui</div>
                        <div style="font-size: 1.6em; font-weight: bold; color: var(--warning);">${dueCards.length}</div>
                    </div>
                    <div class="card" style="padding: 15px; margin: 0; border-left: 4px solid var(--success);">
                        <div style="font-size: 0.8em; color: var(--text-muted); text-transform: uppercase;">Cartes Maîtrisées</div>
                        <div style="font-size: 1.6em; font-weight: bold; color: var(--success);">${masteredCards.length}</div>
                    </div>
                </div>
            </div>

            <!-- ZONE SESSION DE RÉVISION (SI ACTIVE) -->
            <div id="flashcard-study-container" class="${currentStudySession.active ? '' : 'hidden'}"></div>

            <!-- EXPLORATEUR DE FLASHCARDS & DECKS -->
            <div id="flashcard-browser-container" class="${currentStudySession.active ? 'hidden' : ''}">
                <!-- FILTRES ET RECHERCHE -->
                <div class="card" style="padding: 15px 20px; margin-bottom: 20px;">
                    <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                        <input type="text" id="fc-filter-search" placeholder="🔍 Rechercher dans le recto ou verso..."
                               value="${escapeHtml(currentFilter.search)}"
                               oninput="window.flashcardManager.updateFilter('search', this.value)"
                               style="flex: 2; min-width: 200px; margin: 0;">

                        <select id="fc-filter-folder" style="flex: 1; min-width: 160px; margin: 0;"
                                onchange="window.flashcardManager.updateFilter('folder', this.value)">
                            <option value="ALL" ${currentFilter.folder === 'ALL' ? 'selected' : ''}>📁 Tous les dossiers</option>
                            ${folders.map(f => `<option value="${escapeHtml(f)}" ${currentFilter.folder === f ? 'selected' : ''}>📁 ${escapeHtml(f)}</option>`).join('')}
                        </select>

                        <select id="fc-filter-subject" style="flex: 1; min-width: 160px; margin: 0;"
                                onchange="window.flashcardManager.updateFilter('subject', this.value)">
                            <option value="ALL" ${currentFilter.subject === 'ALL' ? 'selected' : ''}>📚 Toutes les matières</option>
                            ${subjects.map(s => `<option value="${escapeHtml(s)}" ${currentFilter.subject === s ? 'selected' : ''}>📚 ${escapeHtml(s)}</option>`).join('')}
                        </select>

                        <select id="fc-filter-status" style="flex: 1; min-width: 140px; margin: 0;"
                                onchange="window.flashcardManager.updateFilter('status', this.value)">
                            <option value="ALL" ${currentFilter.status === 'ALL' ? 'selected' : ''}>Toutes les cartes</option>
                            <option value="DUE" ${currentFilter.status === 'DUE' ? 'selected' : ''}>⏳ À réviser</option>
                            <option value="NEW" ${currentFilter.status === 'NEW' ? 'selected' : ''}>✨ Nouvelles</option>
                            <option value="MASTERED" ${currentFilter.status === 'MASTERED' ? 'selected' : ''}>🏆 Maîtrisées</option>
                        </select>
                    </div>
                </div>

                <!-- LISTE PAR DOSSIERS ET MATIÈRES -->
                <div id="flashcards-deck-explorer">
                    ${renderCardsList()}
                </div>
            </div>

            <!-- MODAL CRÉATION / ÉDITION -->
            <div id="fc-editor-modal" class="modal hidden" style="display:none; position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 1000; overflow-y: auto; padding: 20px;">
                <div class="card" style="max-width: 650px; margin: 40px auto; position: relative;">
                    <button type="button" onclick="window.flashcardManager.closeEditorModal()" style="position: absolute; right: 20px; top: 15px; background: transparent; border: none; font-size: 24px; color: var(--text-muted); cursor: pointer;">&times;</button>
                    <h2 id="fc-modal-title" style="margin-top: 0;">➕ Nouvelle Flashcard</h2>

                    <input type="hidden" id="fc-edit-id" value="">

                    <label style="font-weight: 600; font-size: 0.9em; color: var(--primary);">Recto (Question / Définition / Concept à deviner) *</label>
                    <textarea id="fc-edit-recto" rows="4" placeholder="Ex: Quelle est la formule de Taylor avec reste intégral ?" style="font-family: inherit; font-size: 1em;"></textarea>

                    <label style="font-weight: 600; font-size: 0.9em; color: var(--success); margin-top: 10px;">Verso (Réponse / Démonstration / Explication détaillée) *</label>
                    <textarea id="fc-edit-verso" rows="5" placeholder="Ex: f(x) = ∑ f^(k)(a)/k! (x-a)^k + ∫ (x-t)^n/n! f^(n+1)(t) dt..." style="font-family: inherit; font-size: 1em;"></textarea>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px;">
                        <div>
                            <label style="font-weight: 600; font-size: 0.9em; color: var(--text-main);">Matière</label>
                            <input type="text" id="fc-edit-subject" list="fc-subjects-datalist" placeholder="Ex: Algèbre 2" value="${DEFAULT_SUBJECT}">
                            <datalist id="fc-subjects-datalist">
                                ${subjects.map(s => `<option value="${escapeHtml(s)}"></option>`).join('')}
                            </datalist>
                        </div>
                        <div>
                            <label style="font-weight: 600; font-size: 0.9em; color: var(--text-main);">Dossier / Sous-dossier</label>
                            <input type="text" id="fc-edit-folder" list="fc-folders-datalist" placeholder="Ex: Mathématiques / Chapitre 1" value="${DEFAULT_FOLDER}">
                            <datalist id="fc-folders-datalist">
                                ${folders.map(f => `<option value="${escapeHtml(f)}"></option>`).join('')}
                            </datalist>
                        </div>
                    </div>

                    <label style="font-weight: 600; font-size: 0.9em; color: var(--text-muted); margin-top: 10px;">Tags / Mots-clés (séparés par des virgules)</label>
                    <input type="text" id="fc-edit-tags" placeholder="Ex: Définition, Chapitre 2, Important">

                    <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px;">
                        <button type="button" class="secondary" onclick="window.flashcardManager.closeEditorModal()">Annuler</button>
                        <button type="button" class="btn btn-primary" onclick="window.flashcardManager.submitEditorModal()">Enregistrer</button>
                    </div>
                </div>
            </div>

            <!-- MODAL IMPORTATION JSON -->
            <div id="fc-import-modal" class="modal hidden" style="display:none; position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 1000; overflow-y: auto; padding: 20px;">
                <div class="card" style="max-width: 700px; margin: 40px auto; position: relative;">
                    <button type="button" onclick="window.flashcardManager.closeImportModal()" style="position: absolute; right: 20px; top: 15px; background: transparent; border: none; font-size: 24px; color: var(--text-muted); cursor: pointer;">&times;</button>
                    <h2 style="margin-top: 0; color: var(--primary);">📥 Importer des Flashcards (JSON)</h2>
                    <p style="color: var(--text-muted); font-size: 0.9em;">
                        Tu peux importer un fichier JSON généré par une IA ou créé manuellement. Chaque flashcard aura son recto, verso, matière et dossier.
                    </p>

                    <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 15px;">
                        <button class="secondary" type="button" onclick="window.flashcardManager.downloadTemplate()">
                            📥 Télécharger le modèle JSON
                        </button>
                        <label class="file-button secondary" for="fc-import-file" style="cursor: pointer; margin: 0;">
                            📄 Choisir un fichier JSON
                        </label>
                        <input id="fc-import-file" type="file" accept=".json,application/json" onchange="window.flashcardManager.handleImportFile(event)" style="display: none;">
                    </div>

                    <label style="font-weight: 600; color: var(--text-main);">Ou colle directement le code JSON ci-dessous :</label>
                    <textarea id="fc-import-text" rows="10" placeholder='[
  {
    "recto": "Quelle est la définition d'\''une matrice inversible ?",
    "verso": "Une matrice carrée A est inversible s'\''il existe B telle que AB = BA = In.",
    "subject": "Algèbre 2",
    "folder": "Maths / Algèbre",
    "tags": ["Matrices"]
  }
]' style="font-family: monospace; font-size: 0.88em;"></textarea>

                    <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 15px;">
                        <button type="button" class="secondary" onclick="window.flashcardManager.closeImportModal()">Fermer</button>
                        <button type="button" class="btn btn-primary" onclick="window.flashcardManager.submitImportText()">Importer les cartes</button>
                    </div>
                </div>
            </div>
        `;

        if (currentStudySession.active) {
            renderStudySession();
        }
    }

    function renderCardsList() {
        const allCards = getFlashcards();
        if (allCards.length === 0) {
            return `
                <div class="card" style="text-align: center; padding: 40px 20px;">
                    <div style="font-size: 3em; margin-bottom: 10px;">🎴</div>
                    <h2 style="margin: 0 0 10px 0;">Aucune flashcard pour le moment</h2>
                    <p style="color: var(--text-muted); max-width: 450px; margin: 0 auto 20px auto;">
                        Crée ta première carte recto/verso ou importe un modèle JSON pour démarrer tes révisions espacées.
                    </p>
                    <div style="display: flex; justify-content: center; gap: 10px;">
                        <button class="btn btn-primary" onclick="window.flashcardManager.openCreateModal()">➕ Créer une Flashcard</button>
                        <button class="secondary" onclick="window.flashcardManager.openImportModal()">📥 Importer un JSON</button>
                    </div>
                </div>
            `;
        }

        // Appliquer les filtres
        const filtered = allCards.filter(c => {
            if (currentFilter.folder !== 'ALL' && c.folder !== currentFilter.folder) return false;
            if (currentFilter.subject !== 'ALL' && c.subject !== currentFilter.subject) return false;
            if (currentFilter.status === 'DUE' && !isCardDue(c)) return false;
            if (currentFilter.status === 'NEW' && (c.sm2?.repetition || 0) > 0) return false;
            if (currentFilter.status === 'MASTERED' && (c.sm2?.interval || 0) < 7) return false;
            if (currentFilter.search) {
                const term = currentFilter.search.toLowerCase();
                const inRecto = (c.recto || '').toLowerCase().includes(term);
                const inVerso = (c.verso || '').toLowerCase().includes(term);
                const inTags = (c.tags || []).some(t => t.toLowerCase().includes(term));
                if (!inRecto && !inVerso && !inTags) return false;
            }
            return true;
        });

        if (filtered.length === 0) {
            return `
                <div class="card" style="text-align: center; padding: 30px;">
                    <p style="color: var(--text-muted); margin: 0;">Aucune flashcard ne correspond aux filtres sélectionnés.</p>
                </div>
            `;
        }

        // Regrouper par Dossier -> puis par Matière
        const tree = {};
        filtered.forEach(c => {
            const folder = c.folder || DEFAULT_FOLDER;
            const subject = c.subject || DEFAULT_SUBJECT;
            if (!tree[folder]) tree[folder] = {};
            if (!tree[folder][subject]) tree[folder][subject] = [];
            tree[folder][subject].push(c);
        });

        let html = '';
        Object.keys(tree).sort().forEach(folder => {
            html += `
                <div class="card" style="margin-bottom: 20px; border-left: 3px solid #818cf8;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 1px solid var(--surface-light); padding-bottom: 10px;">
                        <h3 style="margin: 0; color: var(--primary); display:flex; align-items:center; gap:8px;">
                            <span>📁</span> <span>${escapeHtml(folder)}</span>
                        </h3>
                        <button class="secondary" style="padding: 6px 12px; font-size: 0.85em;"
                                onclick="window.flashcardManager.startStudySessionForFolder('${escapeJsString(folder)}')">
                            ▶ Réviser ce dossier
                        </button>
                    </div>
            `;

            Object.keys(tree[folder]).sort().forEach(subject => {
                const cardsInSub = tree[folder][subject];
                const dueInSub = cardsInSub.filter(isCardDue).length;

                html += `
                    <div style="margin-bottom: 18px; padding-left: 10px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                            <h4 style="margin: 0; color: var(--text-main); font-size: 1.05em; display:flex; align-items:center; gap:6px;">
                                <span>📚</span> <span>${escapeHtml(subject)}</span>
                                <span class="badge" style="font-size:0.75em; background: rgba(255,255,255,0.06); color:var(--text-muted);">${cardsInSub.length} carte(s)</span>
                                ${dueInSub > 0 ? `<span class="badge pending" style="font-size:0.75em;">${dueInSub} à réviser</span>` : ''}
                            </h4>
                            <button class="secondary" style="padding: 4px 10px; font-size: 0.8em;"
                                    onclick="window.flashcardManager.startStudySessionForSubject('${escapeJsString(subject)}')">
                                ▶ Réviser la matière
                            </button>
                        </div>

                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px;">
                            ${cardsInSub.map(c => renderCardItem(c)).join('')}
                        </div>
                    </div>
                `;
            });

            html += `</div>`;
        });

        return html;
    }

    function renderCardItem(c) {
        const isDue = isCardDue(c);
        const rep = c.sm2?.repetition || 0;
        const interval = c.sm2?.interval || 0;

        let badgeStyle = 'background: rgba(249, 226, 175, 0.15); color: var(--warning);';
        let badgeText = '⏳ À réviser';

        if (!isDue) {
            badgeStyle = 'background: rgba(166, 227, 161, 0.15); color: var(--success);';
            badgeText = `Dans ${Math.max(1, Math.round(interval))}j`;
        } else if (rep === 0) {
            badgeStyle = 'background: rgba(137, 180, 250, 0.15); color: var(--primary);';
            badgeText = '✨ Nouvelle';
        }

        return `
            <div class="card" style="margin: 0; padding: 14px; background: rgba(255,255,255,0.02); border: 1px solid var(--surface-light); display: flex; flex-direction: column; justify-content: space-between; border-radius: 10px; transition: transform 0.2s;"
                 onmouseenter="this.style.borderColor='var(--primary)'" onmouseleave="this.style.borderColor='var(--surface-light)'">
                <div>
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                        <span class="badge" style="font-size: 0.72em; ${badgeStyle}">${badgeText}</span>
                        <div style="display: flex; gap: 6px;">
                            <button class="secondary" style="padding: 2px 7px; font-size: 0.8em; line-height: 1;" title="Modifier" onclick="window.flashcardManager.openEditModal('${c.id}')">✏️</button>
                            <button class="secondary" style="padding: 2px 7px; font-size: 0.8em; line-height: 1; color: var(--danger);" title="Supprimer" onclick="window.flashcardManager.confirmDeleteCard('${c.id}')">🗑️</button>
                        </div>
                    </div>

                    <div style="font-weight: 600; font-size: 0.95em; color: var(--text-main); margin-bottom: 6px; word-break: break-word;">
                        ${escapeHtml(c.recto)}
                    </div>
                    <div style="font-size: 0.85em; color: var(--text-muted); max-height: 4.5em; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; word-break: break-word;">
                        ${escapeHtml(c.verso)}
                    </div>
                </div>

                <div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center; font-size: 0.75em; color: var(--text-muted);">
                    <span>${c.tags && c.tags.length ? `🏷️ ${escapeHtml(c.tags[0])}` : `Rep: ${rep}`}</span>
                    <span>Succès: ${c.stats?.success || 0}/${c.stats?.reviews || 0}</span>
                </div>
            </div>
        `;
    }

    // ------------------------------------------------------------------------
    // 5. SESSION DE RÉVISION INTERACTIVE (STUDY SESSION)
    // ------------------------------------------------------------------------

    function startStudySession(deckName = 'Toutes les cartes', customCardList = null) {
        const cards = customCardList || getFlashcards().filter(isCardDue);
        if (cards.length === 0) {
            if (window.customAlert) {
                window.customAlert('Bravo !', 'Toutes tes flashcards pour ce deck sont à jour ! Reviens plus tard pour les prochaines répétitions.');
            } else {
                alert('Toutes tes flashcards sont à jour !');
            }
            return;
        }

        // Mélanger les cartes
        const shuffled = [...cards].sort(() => Math.random() - 0.5);

        currentStudySession = {
            active: true,
            deckName,
            cards: shuffled,
            currentIndex: 0,
            isFlipped: false,
            reviewedCount: 0,
            againCount: 0,
            xpEarned: 0
        };

        const studyContainer = document.getElementById('flashcard-study-container');
        const browserContainer = document.getElementById('flashcard-browser-container');
        if (studyContainer) studyContainer.classList.remove('hidden');
        if (browserContainer) browserContainer.classList.add('hidden');

        renderStudySession();
    }

    function startStudySessionForFolder(folderName) {
        const cards = getFlashcards().filter(c => c.folder === folderName && isCardDue(c));
        startStudySession(`Dossier : ${folderName}`, cards);
    }

    function startStudySessionForSubject(subjectName) {
        const cards = getFlashcards().filter(c => c.subject === subjectName && isCardDue(c));
        startStudySession(`Matière : ${subjectName}`, cards);
    }

    function quitStudySession() {
        currentStudySession.active = false;
        renderView();
    }

    function flipCard() {
        if (!currentStudySession.active) return;
        currentStudySession.isFlipped = !currentStudySession.isFlipped;
        renderStudySession();
    }

    function handleStudyRating(quality) {
        if (!currentStudySession.active) return;
        const currentCard = currentStudySession.cards[currentStudySession.currentIndex];
        if (!currentCard) return;

        applyFlashcardSM2(currentCard, quality);
        saveFlashcards();

        currentStudySession.reviewedCount++;
        if (quality < 3) {
            currentStudySession.againCount++;
            // Remettre la carte en fin de file pour la revoir durant cette session
            currentStudySession.cards.push(currentCard);
        } else {
            // Gain d'XP
            const xpBonus = quality === 5 ? 15 : (quality === 4 ? 10 : 5);
            currentStudySession.xpEarned += xpBonus;
            if (window.appData && window.appData._player) {
                window.appData._player.xp = (window.appData._player.xp || 0) + xpBonus;
                if (typeof window.updatePlayerUI === 'function') window.updatePlayerUI();
            }
        }

        currentStudySession.currentIndex++;
        currentStudySession.isFlipped = false;

        if (currentStudySession.currentIndex >= currentStudySession.cards.length) {
            finishStudySession();
        } else {
            renderStudySession();
        }
    }

    function finishStudySession() {
        const container = document.getElementById('flashcard-study-container');
        if (!container) return;

        container.innerHTML = `
            <div class="card" style="text-align: center; padding: 40px 20px; animation: fadeIn 0.3s ease;">
                <div style="font-size: 3.5em; margin-bottom: 12px;">🎉</div>
                <h2 style="color: var(--success); margin: 0 0 10px 0;">Séance de révision terminée !</h2>
                <p style="color: var(--text-muted); font-size: 1.05em; max-width: 500px; margin: 0 auto 20px auto;">
                    Tu as révisé <strong>${currentStudySession.reviewedCount}</strong> flashcard(s) avec succès.
                </p>

                <div style="display: inline-flex; gap: 20px; background: rgba(255,255,255,0.03); padding: 15px 30px; border-radius: 12px; margin-bottom: 25px; border: 1px solid var(--surface-light);">
                    <div>
                        <div style="font-size: 0.8em; color: var(--text-muted);">XP GAGNÉE</div>
                        <div style="font-size: 1.6em; font-weight: bold; color: #ec4899;">+${currentStudySession.xpEarned} XP</div>
                    </div>
                    <div style="border-right: 1px solid var(--surface-light);"></div>
                    <div>
                        <div style="font-size: 0.8em; color: var(--text-muted);">À REVOIR</div>
                        <div style="font-size: 1.6em; font-weight: bold; color: var(--warning);">${currentStudySession.againCount}</div>
                    </div>
                </div>

                <div>
                    <button class="btn btn-primary" onclick="window.flashcardManager.quitStudySession()">
                        Retourner aux Flashcards
                    </button>
                </div>
            </div>
        `;
    }

    function renderStudySession() {
        const container = document.getElementById('flashcard-study-container');
        if (!container) return;

        const { cards, currentIndex, isFlipped, deckName } = currentStudySession;
        const total = cards.length;
        const card = cards[currentIndex];
        if (!card) return;

        const progressPercent = Math.min(100, Math.round((currentIndex / total) * 100));

        // Calcul des prochains intervalles prévisualisés sur les boutons
        const intervalAgain = calculateFlashcardNextInterval(card.sm2, 1);
        const intervalHard = calculateFlashcardNextInterval(card.sm2, 3);
        const intervalGood = calculateFlashcardNextInterval(card.sm2, 4);
        const intervalEasy = calculateFlashcardNextInterval(card.sm2, 5);

        container.innerHTML = `
            <div style="max-width: 750px; margin: 0 auto;">
                <!-- BARRE D'ÉTAT DE SESSION -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                    <button class="secondary" onclick="window.flashcardManager.quitStudySession()" style="padding: 6px 12px; font-size: 0.9em;">
                        ← Quitter la session
                    </button>
                    <div style="color: var(--text-muted); font-size: 0.9em;">
                        ${escapeHtml(deckName)} • <strong>${currentIndex + 1} / ${total}</strong>
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <span class="badge" style="background: rgba(99, 102, 241, 0.15); color: #818cf8;">📁 ${escapeHtml(card.folder)}</span>
                        <span class="badge" style="background: rgba(203, 166, 247, 0.15); color: var(--secondary);">📚 ${escapeHtml(card.subject)}</span>
                    </div>
                </div>

                <!-- PROGRESS BAR -->
                <div style="height: 6px; background: var(--surface-light); border-radius: 3px; overflow: hidden; margin-bottom: 25px;">
                    <div style="height: 100%; width: ${progressPercent}%; background: linear-gradient(90deg, var(--primary), var(--secondary)); transition: width 0.3s;"></div>
                </div>

                <!-- 3D FLIP CARD CONTAINER -->
                <div class="flashcard-scene" onclick="window.flashcardManager.flipCard()" style="cursor: pointer; min-height: 320px; perspective: 1000px; margin-bottom: 25px;">
                    <div class="flashcard-flipper ${isFlipped ? 'flipped' : ''}" style="position: relative; width: 100%; height: 100%; min-height: 320px; transition: transform 0.4s ease-out; transform-style: preserve-3d;">

                        <!-- RECTO (FRONT) -->
                        <div class="flashcard-face flashcard-front" style="position: absolute; inset: 0; backface-visibility: hidden; background: linear-gradient(145deg, #1e1e2e, #28283d); border: 2px solid ${isFlipped ? 'var(--surface-light)' : 'rgba(137, 180, 250, 0.4)'}; border-radius: 16px; padding: 30px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 10px 25px rgba(0,0,0,0.4);">
                            <div style="display: flex; justify-content: space-between; align-items: center; color: var(--primary); font-size: 0.85em; font-weight: bold; text-transform: uppercase;">
                                <span>Question / Recto</span>
                                <span style="color: var(--text-muted); font-size: 0.9em; font-weight: normal;">Clique pour révéler</span>
                            </div>

                            <div style="font-size: 1.35em; font-weight: 500; color: var(--text-main); line-height: 1.5; text-align: center; margin: 20px 0; word-break: break-word;">
                                ${escapeHtml(card.recto)}
                            </div>

                            <div style="text-align: center; color: var(--text-muted); font-size: 0.85em;">
                                🔄 Touche Espace ou clique sur la carte pour retourner
                            </div>
                        </div>

                        <!-- VERSO (BACK) -->
                        <div class="flashcard-face flashcard-back" style="position: absolute; inset: 0; backface-visibility: hidden; transform: rotateY(180deg); background: linear-gradient(145deg, #1b263b, #1e1e2e); border: 2px solid rgba(166, 227, 161, 0.4); border-radius: 16px; padding: 30px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 10px 25px rgba(0,0,0,0.4);">
                            <div style="display: flex; justify-content: space-between; align-items: center; color: var(--success); font-size: 0.85em; font-weight: bold; text-transform: uppercase;">
                                <span>Réponse / Verso</span>
                                <span style="color: var(--text-muted); font-size: 0.9em; font-weight: normal;">${escapeHtml(card.subject)}</span>
                            </div>

                            <div style="font-size: 1.25em; color: var(--text-main); line-height: 1.55; text-align: center; margin: 20px 0; word-break: break-word;">
                                ${escapeHtml(card.verso)}
                            </div>

                            <div style="text-align: center; color: var(--text-muted); font-size: 0.85em;">
                                Indique ci-dessous ta facilité de mémorisation :
                            </div>
                        </div>

                    </div>
                </div>

                <!-- CONTRÔLES SOUS LA CARTE -->
                ${!isFlipped ? `
                    <div style="text-align: center;">
                        <button class="btn btn-primary" onclick="window.flashcardManager.flipCard()" style="padding: 14px 35px; font-size: 1.1em; border-radius: 30px;">
                            🔄 Retourner la carte
                        </button>
                    </div>
                ` : `
                    <div style="animation: fadeIn 0.25s ease;">
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
                            <!-- 1. À revoir -->
                            <button onclick="window.flashcardManager.handleStudyRating(1)"
                                    style="background: rgba(243, 139, 168, 0.15); border: 1px solid var(--danger); color: var(--danger); padding: 12px 6px; border-radius: 10px; display:flex; flex-direction:column; align-items:center; gap:4px;">
                                <span style="font-weight: bold; font-size: 0.95em;">🔴 À revoir</span>
                                <span style="font-size: 0.78em; opacity: 0.85;">${intervalAgain.text}</span>
                            </button>

                            <!-- 2. Difficile -->
                            <button onclick="window.flashcardManager.handleStudyRating(3)"
                                    style="background: rgba(249, 226, 175, 0.15); border: 1px solid var(--warning); color: var(--warning); padding: 12px 6px; border-radius: 10px; display:flex; flex-direction:column; align-items:center; gap:4px;">
                                <span style="font-weight: bold; font-size: 0.95em;">🟠 Difficile</span>
                                <span style="font-size: 0.78em; opacity: 0.85;">${intervalHard.text}</span>
                            </button>

                            <!-- 3. Correct -->
                            <button onclick="window.flashcardManager.handleStudyRating(4)"
                                    style="background: rgba(166, 227, 161, 0.15); border: 1px solid var(--success); color: var(--success); padding: 12px 6px; border-radius: 10px; display:flex; flex-direction:column; align-items:center; gap:4px;">
                                <span style="font-weight: bold; font-size: 0.95em;">🟢 Correct</span>
                                <span style="font-size: 0.78em; opacity: 0.85;">${intervalGood.text}</span>
                            </button>

                            <!-- 4. Facile -->
                            <button onclick="window.flashcardManager.handleStudyRating(5)"
                                    style="background: rgba(137, 180, 250, 0.15); border: 1px solid var(--primary); color: var(--primary); padding: 12px 6px; border-radius: 10px; display:flex; flex-direction:column; align-items:center; gap:4px;">
                                <span style="font-weight: bold; font-size: 0.95em;">🔵 Facile</span>
                                <span style="font-size: 0.78em; opacity: 0.85;">${intervalEasy.text}</span>
                            </button>
                        </div>
                    </div>
                `}
            </div>
        `;
    }

    // Gestion des raccourcis clavier dans la session
    document.addEventListener('keydown', (e) => {
        if (!currentStudySession.active) return;
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        if (e.code === 'Space') {
            e.preventDefault();
            flipCard();
        } else if (currentStudySession.isFlipped) {
            if (e.key === '1') handleStudyRating(1);
            else if (e.key === '2') handleStudyRating(3);
            else if (e.key === '3') handleStudyRating(4);
            else if (e.key === '4') handleStudyRating(5);
        }
    });

    // ------------------------------------------------------------------------
    // 6. MODALES D'ÉDITION ET IMPORTATION
    // ------------------------------------------------------------------------

    function openCreateModal(defaultSubject = null, defaultFolder = null) {
        const modal = document.getElementById('fc-editor-modal');
        if (!modal) return;

        document.getElementById('fc-modal-title').textContent = '➕ Nouvelle Flashcard';
        document.getElementById('fc-edit-id').value = '';
        document.getElementById('fc-edit-recto').value = '';
        document.getElementById('fc-edit-verso').value = '';
        document.getElementById('fc-edit-subject').value = defaultSubject || DEFAULT_SUBJECT;
        document.getElementById('fc-edit-folder').value = defaultFolder || DEFAULT_FOLDER;
        document.getElementById('fc-edit-tags').value = '';

        modal.classList.remove('hidden');
        modal.style.display = 'block';
    }

    function openEditModal(cardId) {
        const modal = document.getElementById('fc-editor-modal');
        const cards = getFlashcards();
        const card = cards.find(c => c.id === cardId);
        if (!modal || !card) return;

        document.getElementById('fc-modal-title').textContent = '✏️ Modifier la Flashcard';
        document.getElementById('fc-edit-id').value = card.id;
        document.getElementById('fc-edit-recto').value = card.recto;
        document.getElementById('fc-edit-verso').value = card.verso;
        document.getElementById('fc-edit-subject').value = card.subject || DEFAULT_SUBJECT;
        document.getElementById('fc-edit-folder').value = card.folder || DEFAULT_FOLDER;
        document.getElementById('fc-edit-tags').value = (card.tags || []).join(', ');

        modal.classList.remove('hidden');
        modal.style.display = 'block';
    }

    function closeEditorModal() {
        const modal = document.getElementById('fc-editor-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.style.display = 'none';
        }
    }

    function submitEditorModal() {
        const id = document.getElementById('fc-edit-id').value;
        const recto = document.getElementById('fc-edit-recto').value.trim();
        const verso = document.getElementById('fc-edit-verso').value.trim();
        const subject = document.getElementById('fc-edit-subject').value.trim() || DEFAULT_SUBJECT;
        const folder = document.getElementById('fc-edit-folder').value.trim() || DEFAULT_FOLDER;
        const tagsRaw = document.getElementById('fc-edit-tags').value;
        const tags = tagsRaw.split(',').map(t => t.trim()).filter(Boolean);

        if (!recto || !verso) {
            if (window.customAlert) window.customAlert('Champs requis', 'Veuillez remplir le Recto et le Verso de la carte.');
            else alert('Veuillez remplir le Recto et le Verso.');
            return;
        }

        if (id) {
            updateCard(id, { recto, verso, subject, folder, tags });
        } else {
            addCard({ recto, verso, subject, folder, tags });
        }

        closeEditorModal();
        renderView();
    }

    function confirmDeleteCard(cardId) {
        const action = () => {
            deleteCard(cardId);
            renderView();
        };

        if (window.customConfirm) {
            window.customConfirm('Supprimer', 'Es-tu sûr de vouloir supprimer cette flashcard ?', action);
        } else if (confirm('Supprimer cette flashcard ?')) {
            action();
        }
    }

    function openImportModal() {
        const modal = document.getElementById('fc-import-modal');
        if (!modal) return;
        modal.classList.remove('hidden');
        modal.style.display = 'block';
    }

    function closeImportModal() {
        const modal = document.getElementById('fc-import-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.style.display = 'none';
        }
    }

    function handleImportFile(event) {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const parsed = JSON.parse(e.target.result);
                const list = Array.isArray(parsed) ? parsed : (parsed.flashcards || parsed.cards || []);
                const count = importCards(list);
                closeImportModal();
                renderView();
                if (window.customAlert) {
                    window.customAlert('Succès', `${count} flashcard(s) importée(s) avec succès !`);
                }
            } catch (err) {
                if (window.customAlert) window.customAlert('Erreur', 'Fichier JSON invalide : ' + err.message);
            }
        };
        reader.readAsText(file);
    }

    function submitImportText() {
        const text = document.getElementById('fc-import-text').value.trim();
        if (!text) return;

        try {
            const parsed = JSON.parse(text);
            const list = Array.isArray(parsed) ? parsed : (parsed.flashcards || parsed.cards || []);
            const count = importCards(list);
            closeImportModal();
            renderView();
            if (window.customAlert) {
                window.customAlert('Succès', `${count} flashcard(s) importée(s) avec succès !`);
            }
        } catch (err) {
            if (window.customAlert) window.customAlert('Erreur', 'JSON invalide : ' + err.message);
        }
    }

    function downloadTemplate() {
        const template = [
            {
                "recto": "Quelle est la définition d'un espace vectoriel ?",
                "verso": "Un ensemble E muni d'une loi interne (+) et d'une loi externe (.) vérifiant les 8 axiomes (associativité, commutativité, élément neutre, symétrique, distributivités).",
                "subject": "Algèbre 2",
                "folder": "Mathématiques / Algèbre",
                "tags": ["Espaces vectoriels", "Définition"]
            },
            {
                "recto": "Quelle est la différence entre un pointeur et une référence en C/C++ ?",
                "verso": "Un pointeur possède sa propre adresse mémoire et peut être NULL ou réassigné. Une référence est un alias pour une variable existante et ne peut pas être nulle.",
                "subject": "Programmation C",
                "folder": "Informatique / Programmation C",
                "tags": ["Mémoire", "Pointeurs"]
            },
            {
                "recto": "Qu'est-ce que la loi des rendements décroissants en microéconomie ?",
                "verso": "À court terme, lorsque la quantité d'un facteur variable augmente tandis que les autres facteurs restent fixes, la productivité marginale de ce facteur finit par décroître.",
                "subject": "Microéconomie 1",
                "folder": "Économie / Microéconomie",
                "tags": ["Production", "Rendements"]
            }
        ];

        const blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'modele-flashcards.json';
        a.click();
        URL.revokeObjectURL(url);
    }

    function exportCardsJson() {
        const cards = getFlashcards();
        if (cards.length === 0) {
            if (window.customAlert) window.customAlert('Info', 'Aucune flashcard à exporter.');
            return;
        }

        const exportList = cards.map(c => ({
            recto: c.recto,
            verso: c.verso,
            subject: c.subject,
            folder: c.folder,
            tags: c.tags,
            sm2: c.sm2,
            stats: c.stats
        }));

        const blob = new Blob([JSON.stringify(exportList, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `mes-flashcards-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    function updateFilter(key, value) {
        currentFilter[key] = value;
        renderView();
    }

    // ------------------------------------------------------------------------
    // 7. HELPERS
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

    // Initialisation
    window.flashcardManager = {
        getFlashcards,
        normalizeFlashcard,
        addCard,
        updateCard,
        deleteCard,
        importCards,
        renderView,
        startStudySession,
        startStudySessionForFolder,
        startStudySessionForSubject,
        quitStudySession,
        flipCard,
        handleStudyRating,
        openCreateModal,
        openEditModal,
        closeEditorModal,
        submitEditorModal,
        confirmDeleteCard,
        openImportModal,
        closeImportModal,
        handleImportFile,
        submitImportText,
        downloadTemplate,
        exportCardsJson,
        updateFilter
    };

})();
