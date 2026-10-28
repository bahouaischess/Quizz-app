// ============================================================================
// ANNALES VIEW - PASS UNIVERSITÉ PARIS CITÉ
// Interface utilisateur complète : Hub, Mode Épreuve, et Corrigé Détaillé
// ============================================================================

window.AnnalesApp = (function () {
    // État de l'application
    const state = {
        currentView: 'hub', // 'hub' | 'exam' | 'results'
        activeFilters: {
            year: 'all',
            subjectId: 'all',
            search: ''
        },
        activeExam: null,
        currentQuestionIndex: 0,
        userAnswers: {},     // { [qNum]: ['A', 'C'] }
        questionTimes: {},   // { [qNum]: secondsSpent }
        questionTimer: null,
        globalTimer: null,
        totalElapsedSeconds: 0,
        flaggedQuestions: new Set(),
        paletteCollapsed: false,
        lastSummary: null,
        resultFilter: 'all'  // 'all' | 'errors' | 'overtime'
    };

    const SUBJECT_ICONS = {
        'sante_publique': '🏥',
        'bio_cellulaire': '🔬',
        'biochimie': '🧪',
        'chimie': '⚗️',
        'histo_embryo': '🧬',
        'physique': '⚡',
        'shs': '📚'
    };

    function getSubjectIcon(subjectId, currentIcon) {
        if (currentIcon && !currentIcon.includes('?')) return currentIcon;
        return SUBJECT_ICONS[subjectId] || '📝';
    }

    function normalizeQuestion(q, idx) {
        if (!q) return null;
        const letters = ['A', 'B', 'C', 'D', 'E'];
        const rawOptions = q.options || q.Options || [];

        const options = rawOptions.map((o, optIdx) => {
            const id = (o.id || o.Id || letters[optIdx] || '').toString().trim().toUpperCase();
            const text = o.text !== undefined ? o.text : (o.Text !== undefined ? o.Text : '');
            const isCorrect = o.isCorrect !== undefined ? Boolean(o.isCorrect) : (o.IsCorrect !== undefined ? Boolean(o.IsCorrect) : false);
            const explanation = o.explanation !== undefined ? o.explanation : (o.Explanation !== undefined ? o.Explanation : '');
            return { id, text, isCorrect, explanation };
        });

        const type = q.type || q.Type || 'QCM';
        if (type === 'QCM' && options.length === 0) {
            for (let i = 0; i < 5; i++) {
                options.push({
                    id: letters[i],
                    text: `(Proposition ${letters[i]})`,
                    isCorrect: false,
                    explanation: ''
                });
            }
        }

        const rawCorrect = q.correctAnswers || q.CorrectAnswers || [];
        const correctAnswers = Array.isArray(rawCorrect) ? rawCorrect.map(a => a.toString().trim().toUpperCase()) : [];

        if (correctAnswers.length > 0) {
            options.forEach(opt => {
                if (correctAnswers.includes(opt.id)) {
                    opt.isCorrect = true;
                }
            });
        } else {
            options.forEach(opt => {
                if (opt.isCorrect && !correctAnswers.includes(opt.id)) {
                    correctAnswers.push(opt.id);
                }
            });
        }

        return {
            num: q.num !== undefined ? q.num : (q.Num !== undefined ? q.Num : idx + 1),
            type: type,
            context: q.context !== undefined ? q.context : (q.Context !== undefined ? q.Context : ''),
            images: q.images || q.Images || [],
            question: q.question !== undefined ? q.question : (q.Question !== undefined ? q.Question : ''),
            rawOptions: q.rawOptions || q.RawOptions || [],
            options: options,
            correctAnswers: correctAnswers,
            generalNotes: q.generalNotes || q.GeneralNotes || ''
        };
    }

    function normalizeAnnale(a) {
        if (!a) return null;
        let icon = getSubjectIcon(a.subjectId || a.SubjectId, a.icon || a.Icon);

        const rawQuestions = a.questions || a.Questions || [];
        const questions = rawQuestions.map((q, idx) => normalizeQuestion(q, idx));

        return {
            id: a.id || a.Id,
            year: a.year || a.Year,
            semester: a.semester || a.Semester || 'Semestre 1',
            subjectId: a.subjectId || a.SubjectId,
            subjectName: a.subjectName || a.SubjectName,
            ue: a.ue || a.Ue || 'UE',
            icon: icon,
            tutoId: a.tutoId || a.TutoId,
            tutoName: a.tutoName || a.TutoName,
            title: a.title || a.Title,
            durationMinutes: a.durationMinutes || a.DurationMinutes || (questions.length > 0 ? questions.length : 30),
            questionCount: questions.length || a.questionCount || a.QuestionCount || 0,
            isSpecial: Boolean(a.isSpecial || a.IsSpecial),
            questions: questions
        };
    }

    // Initialisation
    function init() {
        console.log('[AnnalesApp] Initialisé avec succès.');
    }

    // Basculer l'affichage dans le conteneur principal
    function showSubView(subViewName) {
        state.currentView = subViewName;
        const hubEl = document.getElementById('annales-hub-subview');
        const examEl = document.getElementById('annales-exam-subview');
        const resultsEl = document.getElementById('annales-results-subview');

        if (hubEl) hubEl.classList.toggle('hidden', subViewName !== 'hub');
        if (examEl) examEl.classList.toggle('hidden', subViewName !== 'exam');
        if (resultsEl) resultsEl.classList.toggle('hidden', subViewName !== 'results');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ------------------------------------------------------------------------
    // 1. HUB / CATALOGUE DES ANNALES
    // ------------------------------------------------------------------------
    function renderHub() {
        showSubView('hub');
        const container = document.getElementById('annales-hub-subview');
        if (!container) return;

        const allAnnales = window.AnnalesManager ? window.AnnalesManager.getAllAnnales() : [];
        const filtered = window.AnnalesManager ? window.AnnalesManager.filterAnnales(state.activeFilters) : [];

        // Calcul de statistiques globales
        const history = window.AnnalesManager ? window.AnnalesManager.getHistory() : {};
        const completedCount = Object.keys(history).length;

        container.innerHTML = `
            <div class="annales-header-banner">
                <div class="banner-content">
                    <div class="badge-accent">🏛️ Épreuves Officielles & Entraînements PASS</div>
                    <h1>Annales & Tutorats PASS Paris Cité</h1>
                    <p class="banner-desc">
                        Révisez en conditions réelles d'examen avec les annales authentiques du tutorat A2SUP de l'Université Paris Cité (Semestre 1).
                        Notation officielle PASS : <strong>0 erreur = 1.0 pt</strong>, <strong>1 erreur = 0.7 pt</strong>, <strong>2 erreurs = 0.1 pt</strong>.
                        Chrono d'épreuve : <strong>1 minute par question</strong> (dépassement = -0,3 pt).
                    </p>
                    <div class="banner-stats-row">
                        <div class="stat-pill"><span class="stat-num">${allAnnales.length}</span> épreuves disponibles</div>
                        <div class="stat-pill"><span class="stat-num">${completedCount}</span> épreuves réalisées</div>
                        <div class="stat-pill"><span class="stat-num">3</span> années répertoriées (S1)</div>
                        <div class="stat-pill highlight-pill">✨ 1 Annale Santé Publique Inédite</div>
                    </div>
                </div>
            </div>

            <!-- CARTE VEDETTE : NOUVELLE ANNALE INÉDITE SANTÉ PUBLIQUE -->
            <div class="special-annale-card" onclick="AnnalesApp.startExam('pass_2026_sp_inedite')">
                <div class="special-card-left">
                    <span class="special-badge">⭐ Nouvelle Annale Exclusive 2026-2027</span>
                    <h2>Annale Inédite de Santé Publique (UE 6)</h2>
                    <p>
                        20 QCM exclusifs créés selon les exigences pédagogiques et pièges récurrents de Paris Cité :
                        Épidémiologie (Snow, Framingham, Bradford Hill), indicateurs de morbidité/mortalité, gradient social,
                        cancers, prévention et organisation du système de santé.
                    </p>
                    <div class="special-card-meta">
                        <span>⏱️ 20 min (1 min / QCM)</span>
                        <span>🎯 20 questions</span>
                        <span>🏆 Barème officiel Paris Cité</span>
                    </div>
                </div>
                <div class="special-card-right">
                    <button class="primary-btn pulse-glow">Lancer l'épreuve inédite →</button>
                </div>
            </div>

            <!-- BARRE DE FILTRES -->
            <div class="annales-filter-toolbar">
                <div class="filter-group">
                    <label>Année universitaire :</label>
                    <select id="annales-year-select" onchange="AnnalesApp.onYearChange(this.value)">
                        <option value="all" ${state.activeFilters.year === 'all' ? 'selected' : ''}>Toutes les années</option>
                        <option value="inedite" ${state.activeFilters.year === 'inedite' ? 'selected' : ''}>⭐ Annale Inédite (2026-2027)</option>
                        <option value="2026-2027" ${state.activeFilters.year === '2026-2027' ? 'selected' : ''}>2026-2027 (En cours)</option>
                        <option value="2025-2026" ${state.activeFilters.year === '2025-2026' ? 'selected' : ''}>2025-2026</option>
                        <option value="2024-2025" ${state.activeFilters.year === '2024-2025' ? 'selected' : ''}>2024-2025</option>
                    </select>
                </div>

                <div class="filter-group search-group">
                    <label>Rechercher un mot-clé :</label>
                    <input type="text" id="annales-search-input" placeholder="Ex: Framingham, choléra, acide aminé, Bohr..." 
                        value="${escapeHtml(state.activeFilters.search)}"
                        oninput="AnnalesApp.onSearchChange(this.value)">
                </div>
            </div>

            <!-- CHIPS DES MATIÈRES -->
            <div class="subject-chips-bar">
                ${renderSubjectChips()}
            </div>

            <!-- GRILLE DES ANNALES -->
            <div class="annales-grid-header">
                <h3>Épreuves disponibles (${filtered.length})</h3>
                <span class="grid-subtitle">Cliquez sur une carte pour lancer l'examen en conditions réelles</span>
            </div>

            <div class="annales-cards-grid">
                ${filtered.length > 0 ? filtered.map(a => renderAnnaleCard(a)).join('') : `
                    <div class="empty-results-box">
                        <span class="empty-icon">🔍</span>
                        <h4>Aucune annale ne correspond à vos filtres</h4>
                        <p>Essayez de réinitialiser vos critères de recherche ou de changer de matière.</p>
                        <button class="secondary-btn" onclick="AnnalesApp.resetFilters()">Réinitialiser les filtres</button>
                    </div>
                `}
            </div>
        `;
    }

    function renderSubjectChips() {
        const subjects = [
            { id: 'all', name: 'Toutes les matières', icon: '📚' },
            { id: 'sante_publique', name: 'Santé Publique', icon: '🏥' },
            { id: 'bio_cellulaire', name: 'Biologie Cellulaire', icon: '🔬' },
            { id: 'biochimie', name: 'Biochimie', icon: '🧪' },
            { id: 'chimie', name: 'Chimie', icon: '⚗️' },
            { id: 'histo_embryo', name: 'Histo-Embryo', icon: '🧬' },
            { id: 'physique', name: 'Physique', icon: '⚡' },
            { id: 'shs', name: 'SHS', icon: '📖' }
        ];

        return subjects.map(s => {
            const isActive = state.activeFilters.subjectId === s.id;
            return `
                <button class="subject-chip ${isActive ? 'active' : ''}" onclick="AnnalesApp.onSubjectChange('${s.id}')">
                    <span class="chip-icon">${s.icon}</span>
                    <span class="chip-label">${s.name}</span>
                </button>
            `;
        }).join('');
    }

    function renderAnnaleCard(rawA) {
        const a = normalizeAnnale(rawA);
        const best = window.AnnalesManager ? window.AnnalesManager.getBestResult(a.id) : null;
        const last = window.AnnalesManager ? window.AnnalesManager.getLastResult(a.id) : null;

        const hasImages = a.questions && a.questions.some(q => (q.images || q.Images || []).length > 0);
        const hasContext = a.questions && a.questions.some(q => Boolean(q.context || q.Context));

        return `
            <div class="annale-card ${a.isSpecial ? 'special-glow' : ''}" onclick="AnnalesApp.startExam('${a.id}')">
                <div class="card-top-row">
                    <span class="card-icon">${a.icon || '📝'}</span>
                    <span class="card-ue-badge">${a.ue || 'UE'}</span>
                    <span class="card-year-badge">${a.year}</span>
                </div>
                <h4 class="card-title">${escapeHtml(a.title)}</h4>
                <div class="card-features">
                    <span class="feat-pill">⏱️ ${a.durationMinutes || a.questionCount} min</span>
                    <span class="feat-pill">❓ ${a.questionCount} QCM</span>
                    ${hasImages ? '<span class="feat-pill feat-img">🖼️ Schémas</span>' : ''}
                    ${hasContext ? '<span class="feat-pill feat-ctx">📄 Étude/Exercice</span>' : ''}
                </div>
                <div class="card-footer-row">
                    ${best ? `
                        <div class="past-score-badge ${best.scoreSur20 >= 10 ? 'pass' : 'fail'}">
                            Meilleur : <strong>${best.scoreSur20}/20</strong>
                        </div>
                    ` : `
                        <span class="unattempted-label">Non effectué</span>
                    `}
                    <button class="card-start-btn" type="button">S'entraîner →</button>
                </div>
            </div>
        `;
    }

    // Filtres
    function onYearChange(val) {
        state.activeFilters.year = val;
        renderHub();
    }

    function onSubjectChange(subjId) {
        state.activeFilters.subjectId = subjId;
        renderHub();
    }

    function onSearchChange(val) {
        state.activeFilters.search = val;
        renderHub();
    }

    function resetFilters() {
        state.activeFilters = { year: 'all', subjectId: 'all', search: '' };
        renderHub();
    }

    // ------------------------------------------------------------------------
    // 2. MODE ÉPREUVE (EXAM PLAYER)
    // ------------------------------------------------------------------------
    function startExam(annaleId) {
        const rawAnnale = window.AnnalesManager ? window.AnnalesManager.getAnnaleById(annaleId) : null;
        if (!rawAnnale) {
            alert("Cette épreuve n'est pas encore disponible.");
            return;
        }

        const annale = normalizeAnnale(rawAnnale);
        if (!annale || !annale.questions || annale.questions.length === 0) {
            alert("Cette épreuve n'est pas encore disponible.");
            return;
        }

        // Réinitialisation de l'état d'épreuve
        state.activeExam = annale;
        state.currentQuestionIndex = 0;
        state.userAnswers = {};
        state.questionTimes = {};
        state.flaggedQuestions.clear();
        state.totalElapsedSeconds = 0;

        // Initialiser le temps pour chaque question
        annale.questions.forEach((q, idx) => {
            const qNum = q.num !== undefined ? q.num : (idx + 1);
            state.questionTimes[qNum] = 0;
            state.userAnswers[qNum] = [];
        });

        // Démarrer les timers
        stopAllTimers();
        startGlobalTimer();
        startQuestionTimer();

        // Afficher l'interface d'examen
        showSubView('exam');
        renderExamInterface();
    }

    function stopAllTimers() {
        if (state.questionTimer) {
            clearInterval(state.questionTimer);
            state.questionTimer = null;
        }
        if (state.globalTimer) {
            clearInterval(state.globalTimer);
            state.globalTimer = null;
        }
    }

    function startGlobalTimer() {
        state.globalTimer = setInterval(() => {
            state.totalElapsedSeconds++;
            const el = document.getElementById('exam-global-timer-display');
            if (el) {
                el.textContent = formatTime(state.totalElapsedSeconds);
            }
        }, 1000);
    }

    function startQuestionTimer() {
        if (state.questionTimer) clearInterval(state.questionTimer);

        const currentQ = getCurrentQuestion();
        if (!currentQ) return;
        const qNum = currentQ.num !== undefined ? currentQ.num : (state.currentQuestionIndex + 1);

        state.questionTimer = setInterval(() => {
            state.questionTimes[qNum] = (state.questionTimes[qNum] || 0) + 1;
            updateQuestionTimerDisplay();
        }, 1000);

        updateQuestionTimerDisplay();
    }

    function updateQuestionTimerDisplay() {
        const currentQ = getCurrentQuestion();
        if (!currentQ) return;
        const qNum = currentQ.num !== undefined ? currentQ.num : (state.currentQuestionIndex + 1);
        const secondsSpent = state.questionTimes[qNum] || 0;

        const timerBadge = document.getElementById('exam-question-timer-badge');
        const timerText = document.getElementById('exam-question-timer-text');
        const overtimeAlert = document.getElementById('exam-overtime-alert');

        if (!timerBadge || !timerText) return;

        timerText.textContent = `${formatTime(secondsSpent)} / 01:00`;

        if (secondsSpent > 60) {
            const overtimeSecs = secondsSpent - 60;
            timerBadge.classList.add('overtime-active');
            if (overtimeAlert) {
                overtimeAlert.classList.remove('hidden');
                overtimeAlert.innerHTML = `⚠️ <strong>Temps dépassé (+${overtimeSecs}s)</strong> : Pénalité de <strong>-0,3 pt</strong> appliquée`;
            }
        } else {
            timerBadge.classList.remove('overtime-active');
            if (overtimeAlert) {
                overtimeAlert.classList.add('hidden');
            }
        }
    }

    function formatTime(totalSeconds) {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function getCurrentQuestion() {
        if (!state.activeExam || !state.activeExam.questions) return null;
        return state.activeExam.questions[state.currentQuestionIndex] || null;
    }

    function renderExamInterface() {
        const container = document.getElementById('annales-exam-subview');
        if (!container || !state.activeExam) return;

        const annale = state.activeExam;
        const q = getCurrentQuestion();
        if (!q) return;

        const totalQ = annale.questions.length;
        const qNum = q.num !== undefined ? q.num : (state.currentQuestionIndex + 1);
        const isFlagged = state.flaggedQuestions.has(qNum);
        const currentAnswers = state.userAnswers[qNum] || [];

        container.innerHTML = `
            <div class="exam-top-nav">
                <div class="exam-nav-left">
                    <button class="exit-exam-btn" onclick="AnnalesApp.confirmQuitExam()" title="Quitter l'épreuve">✕ Quitter</button>
                    <div class="exam-title-stack">
                        <span class="exam-subject-tag">${annale.ue} • ${annale.subjectName}</span>
                        <span class="exam-annale-name">${escapeHtml(annale.tutoName)} (${annale.year})</span>
                    </div>
                </div>

                <div class="exam-nav-center">
                    <!-- CHRONO PAR QUESTION (1 MINUTE) -->
                    <div id="exam-question-timer-badge" class="question-timer-badge">
                        <span class="timer-icon">⏱️</span>
                        <span id="exam-question-timer-text">00:00 / 01:00</span>
                    </div>

                    <!-- TEMPS TOTAL ÉCOULÉ -->
                    <div class="global-timer-pill">
                        Total : <span id="exam-global-timer-display">${formatTime(state.totalElapsedSeconds)}</span>
                    </div>
                </div>

                <div class="exam-nav-right">
                    <button class="flag-btn ${isFlagged ? 'active' : ''}" onclick="AnnalesApp.toggleFlag(${qNum})">
                        ${isFlagged ? '🚩 Marqué pour relecture' : '🏳️ Marquer'}
                    </button>
                    <button class="finish-exam-btn" onclick="AnnalesApp.confirmFinishExam()">Terminer l'épreuve</button>
                </div>
            </div>

            <!-- ALERTE DE DÉPASSEMENT DE TEMPS -->
            <div id="exam-overtime-alert" class="overtime-banner hidden"></div>

            <div class="exam-body-layout">
                <!-- PALETTE DE NAVIGATION RAPIDE (RÉTRACTABLE) -->
                <div id="exam-palette-panel" class="exam-palette-panel ${state.paletteCollapsed ? 'collapsed' : ''}">
                    <div class="palette-toggle-bar">
                        <button id="palette-toggle-btn" class="palette-toggle-btn" type="button" onclick="AnnalesApp.togglePalette()" title="${state.paletteCollapsed ? 'Afficher la liste des questions' : 'Masquer la liste des questions'}">
                            ${state.paletteCollapsed ? '▶ Questions' : '◀ Masquer'}
                        </button>
                    </div>
                    <div class="palette-header-content">
                        <h4>Questions (${totalQ})</h4>
                        <span class="palette-prog">${Object.values(state.userAnswers).filter(a => a && a.length > 0).length}/${totalQ}</span>
                    </div>
                    <div class="palette-grid">
                        ${annale.questions.map((questionItem, idx) => {
                            const num = questionItem.num !== undefined ? questionItem.num : (idx + 1);
                            const isCurrent = idx === state.currentQuestionIndex;
                            const hasAns = (state.userAnswers[num] && state.userAnswers[num].length > 0);
                            const isFlg = state.flaggedQuestions.has(num);
                            let cls = 'palette-btn';
                            if (isCurrent) cls += ' current';
                            if (hasAns) cls += ' answered';
                            if (isFlg) cls += ' flagged';
                            return `<button class="${cls}" onclick="AnnalesApp.jumpToQuestion(${idx})">${num}</button>`;
                        }).join('')}
                    </div>
                </div>

                <!-- CONTENU DE LA QUESTION ACTIVE -->
                <div class="exam-question-viewport">
                    <div class="question-meta-bar">
                        <div class="q-progress-title">
                            Question <strong>${state.currentQuestionIndex + 1}</strong> sur ${totalQ}
                            ${q.type && q.type !== 'QCM' ? `<span class="qtype-badge">${q.type}</span>` : ''}
                        </div>
                        <div class="keyboard-tip">Raccourcis : [A] [B] [C] [D] [E] pour cocher, [←] [→] pour naviguer</div>
                    </div>

                    <!-- ÉNONCÉ COMMUN / CONTEXTE / ÉTUDE DE CAS -->
                    ${(q.context || q.Context) ? `
                        <div class="exercise-context-box">
                            <div class="ctx-header">📄 Énoncé / Données de l'exercice :</div>
                            <div class="ctx-body">${renderFormattedContent(q.context || q.Context)}</div>
                        </div>
                    ` : ''}

                    <!-- IMAGES / SCHÉMAS / CARTES / MICROGRAPHIES -->
                    ${(q.images || q.Images || []).length > 0 ? `
                        <div class="question-images-box">
                            ${(q.images || q.Images).map(imgSrc => `
                                <div class="image-wrapper" onclick="AnnalesApp.openLightbox('${imgSrc}')">
                                    <img src="${imgSrc}" alt="Document d'illustration PASS" loading="lazy">
                                    <span class="zoom-cue">🔍 Cliquez pour agrandir</span>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}

                    <!-- ÉNONCÉ DE LA QUESTION -->
                    <div class="question-stem-text">
                        ${renderFormattedContent(q.question || q.Question || '')}
                    </div>

                    <!-- OPTIONS A, B, C, D, E OU SHS -->
                    ${renderQuestionInputArea(q, qNum, currentAnswers)}

                    <!-- FOOTER DE NAVIGATION -->
                    <div class="exam-question-footer">
                        <button class="nav-arrow-btn" ${state.currentQuestionIndex === 0 ? 'disabled' : ''} onclick="AnnalesApp.prevQuestion()">
                            ← Question précédente
                        </button>

                        <div class="center-nav-info">
                            Progression : ${Math.round(((state.currentQuestionIndex + 1) / totalQ) * 100)}%
                        </div>

                        ${state.currentQuestionIndex < totalQ - 1 ? `
                            <button class="nav-arrow-btn primary" onclick="AnnalesApp.nextQuestion()">
                                Question suivante →
                            </button>
                        ` : `
                            <button class="nav-arrow-btn finish-highlight" onclick="AnnalesApp.confirmFinishExam()">
                                Valider & Voir le corrigé ✓
                            </button>
                        `}
                    </div>
                </div>
            </div>

            <!-- MODAL LIGHTBOX POUR IMAGES EN HAUTE RÉSOLUTION -->
            <div id="annales-lightbox" class="lightbox-modal hidden" onclick="AnnalesApp.closeLightbox()">
                <div class="lightbox-content" onclick="event.stopPropagation()">
                    <button class="lightbox-close-btn" onclick="AnnalesApp.closeLightbox()">✕</button>
                    <img id="lightbox-img" src="" alt="Image plein écran">
                </div>
            </div>
        `;

        updateQuestionTimerDisplay();
        setTimeout(triggerMathTypeset, 25);
    }

    function renderQuestionInputArea(q, qNum, currentAnswers) {
        if (q.type === 'QROC') {
            return `
                <div class="shs-open-box">
                    <label>Votre réponse rédigée (QROC) :</label>
                    <textarea class="shs-textarea" rows="8" placeholder="Rédigez votre réponse structurée..." 
                        oninput="AnnalesApp.onTextAnswerChange(${qNum}, this.value)">${escapeHtml(state.userAnswers[qNum] ? state.userAnswers[qNum][0] || '' : '')}</textarea>
                    <div class="shs-tip">Conseil officiel : concision, vocabulaire précis du cours et clarté de l'argumentation.</div>
                </div>
            `;
        }

        if (q.type === 'COMMENTAIRE') {
            return `
                <div class="shs-open-box">
                    <label>Votre commentaire de texte argumenté :</label>
                    <textarea class="shs-textarea" rows="12" placeholder="Structurez votre commentaire : Problématique, analyse de la thèse, mobilisation des notions du cours..."
                        oninput="AnnalesApp.onTextAnswerChange(${qNum}, this.value)">${escapeHtml(state.userAnswers[qNum] ? state.userAnswers[qNum][0] || '' : '')}</textarea>
                </div>
            `;
        }

        // QCM standard à 5 options (A, B, C, D, E)
        const letters = ['A', 'B', 'C', 'D', 'E'];
        const rawOpts = q.options || q.Options || [];
        const options = rawOpts.length > 0
            ? rawOpts.map((opt, idx) => ({
                id: (opt.id || opt.Id || letters[idx] || '').toString().trim().toUpperCase(),
                text: opt.text !== undefined ? opt.text : (opt.Text !== undefined ? opt.Text : `Proposition ${letters[idx]}`)
            }))
            : letters.map(l => ({ id: l, text: `Proposition ${l}` }));

        return `
            <div class="options-container">
                ${options.map(opt => {
                    const letter = opt.id;
                    const isChecked = currentAnswers.includes(letter);
                    return `
                        <div class="option-row ${isChecked ? 'selected' : ''}" onclick="AnnalesApp.toggleOption('${letter}')">
                            <div class="checkbox-indicator ${isChecked ? 'checked' : ''}">
                                <span class="opt-letter">${letter}</span>
                            </div>
                            <div class="option-text">${renderFormattedContent(opt.text)}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    // Gestion des réponses
    function toggleOption(letter) {
        const q = getCurrentQuestion();
        if (!q) return;
        const qNum = q.num !== undefined ? q.num : (state.currentQuestionIndex + 1);

        if (!state.userAnswers[qNum]) {
            state.userAnswers[qNum] = [];
        }

        const current = state.userAnswers[qNum];
        const idx = current.indexOf(letter);
        if (idx > -1) {
            current.splice(idx, 1);
        } else {
            current.push(letter);
        }
        current.sort();

        renderExamInterface();
    }

    function onTextAnswerChange(qNum, val) {
        state.userAnswers[qNum] = [val];
    }

    function toggleFlag(qNum) {
        if (state.flaggedQuestions.has(qNum)) {
            state.flaggedQuestions.delete(qNum);
        } else {
            state.flaggedQuestions.add(qNum);
        }
        renderExamInterface();
    }

    // Navigation entre questions
    function nextQuestion() {
        if (state.currentQuestionIndex < state.activeExam.questions.length - 1) {
            state.currentQuestionIndex++;
            startQuestionTimer();
            renderExamInterface();
        }
    }

    function prevQuestion() {
        if (state.currentQuestionIndex > 0) {
            state.currentQuestionIndex--;
            startQuestionTimer();
            renderExamInterface();
        }
    }

    function jumpToQuestion(idx) {
        if (idx >= 0 && idx < state.activeExam.questions.length) {
            state.currentQuestionIndex = idx;
            startQuestionTimer();
            renderExamInterface();
        }
    }

    // Lightbox pour images
    function openLightbox(src) {
        const lb = document.getElementById('annales-lightbox');
        const img = document.getElementById('lightbox-img');
        if (lb && img) {
            img.src = src;
            lb.classList.remove('hidden');
        }
    }

    function closeLightbox() {
        const lb = document.getElementById('annales-lightbox');
        if (lb) lb.classList.add('hidden');
    }

    // Terminer et Corriger l'épreuve
    function confirmFinishExam() {
        const total = state.activeExam.questions.length;
        const answeredCount = Object.values(state.userAnswers).filter(a => a && a.length > 0).length;
        const unansweredCount = total - answeredCount;
        const flaggedCount = state.flaggedQuestions.size;

        let warning = '';
        if (unansweredCount > 0) {
            warning += `Il vous reste ${unansweredCount} question(s) sans réponse.\n`;
        }
        if (flaggedCount > 0) {
            warning += `Vous avez ${flaggedCount} question(s) marquée(s) pour relecture.\n`;
        }

        const msg = warning ? `${warning}\nÊtes-vous sûr(e) de vouloir terminer et corriger votre épreuve ?` :
            "Êtes-vous sûr(e) de vouloir terminer l'épreuve et afficher le corrigé ?";

        if (confirm(msg)) {
            finishExam();
        }
    }

    function confirmQuitExam() {
        if (confirm("Voulez-vous vraiment quitter ? Votre progression en cours sur cette épreuve sera perdue.")) {
            stopAllTimers();
            showSubView('hub');
            renderHub();
        }
    }

    function finishExam() {
        stopAllTimers();
        if (!state.activeExam) return;

        // Évaluation via AnnalesManager
        const summary = window.AnnalesManager.evaluateExam(
            state.activeExam,
            state.userAnswers,
            state.questionTimes
        );

        state.lastSummary = summary;
        state.resultFilter = 'all';
        showSubView('results');
        renderResults();
    }

    // ------------------------------------------------------------------------
    // 3. RÉSULTATS & CORRIGÉ DÉTAILLÉ
    // ------------------------------------------------------------------------
    function renderResults() {
        const container = document.getElementById('annales-results-subview');
        if (!container || !state.lastSummary) return;

        const s = state.lastSummary;
        const filteredQuestions = s.questionResults.filter(q => {
            if (state.resultFilter === 'errors') return q.errorsCount > 0;
            if (state.resultFilter === 'overtime') return q.isOvertime;
            return true;
        });

        container.innerHTML = `
            <div class="results-header-banner">
                <div class="res-banner-top">
                    <span class="badge-white">Corrigé Détaillé & Notation Officielle</span>
                    <h2>${escapeHtml(s.annaleTitle)}</h2>
                </div>

                <!-- CARTE DE SCORE PRINCIPALE -->
                <div class="scoreboard-hero">
                    <div class="score-circle-container">
                        <div class="score-circle">
                            <span class="score-num">${s.scoreSur20}</span>
                            <span class="score-den">/ 20</span>
                        </div>
                        <div class="score-mention ${s.mentionClass}">${s.mention}</div>
                    </div>

                    <div class="scoreboard-details">
                        <div class="score-detail-row">
                            <span class="detail-label">Points bruts obtenus :</span>
                            <span class="detail-val"><strong>${s.totalBaseScore}</strong> / ${s.maxPoints} pts</span>
                        </div>
                        <div class="score-detail-row ${s.totalPenalties > 0 ? 'penalty-highlight' : ''}">
                            <span class="detail-label">Pénalités de temps (1 min/Q) :</span>
                            <span class="detail-val"><strong>-${s.totalPenalties} pt</strong> (${s.overtimeQuestionsCount} questions dépassées)</span>
                        </div>
                        <div class="score-detail-row total-row">
                            <span class="detail-label">Score Net Définitif :</span>
                            <span class="detail-val"><strong>${s.netScore}</strong> / ${s.maxPoints} pts (Note : <strong>${s.scoreSur20}/20</strong>)</span>
                        </div>
                        <div class="score-detail-row">
                            <span class="detail-label">Temps total :</span>
                            <span class="detail-val">${formatTime(s.totalTimeSeconds)} (Moyenne : ${Math.round(s.totalTimeSeconds / s.totalQuestions)}s / question)</span>
                        </div>
                    </div>
                </div>

                <!-- MINI-STATS BARÈME PARIS CITÉ -->
                <div class="bareme-breakdown-row">
                    <div class="stat-box box-perfect">
                        <span class="box-icon">🎯</span>
                        <div class="box-num">${s.stats.perfectCount}</div>
                        <div class="box-desc">0 erreur (1.0 pt)</div>
                    </div>
                    <div class="stat-box box-one-err">
                        <span class="box-icon">🟡</span>
                        <div class="box-num">${s.stats.oneErrorCount}</div>
                        <div class="box-desc">1 erreur (0.7 pt)</div>
                    </div>
                    <div class="stat-box box-two-err">
                        <span class="box-icon">🟠</span>
                        <div class="box-num">${s.stats.twoErrorsCount}</div>
                        <div class="box-desc">2 erreurs (0.1 pt)</div>
                    </div>
                    <div class="stat-box box-three-err">
                        <span class="box-icon">🔴</span>
                        <div class="box-num">${s.stats.threePlusErrorsCount}</div>
                        <div class="box-desc">≥3 erreurs (0.0 pt)</div>
                    </div>
                    <div class="stat-box box-overtime ${s.overtimeQuestionsCount > 0 ? 'has-overtime' : ''}">
                        <span class="box-icon">⏱️</span>
                        <div class="box-num">${s.overtimeQuestionsCount}</div>
                        <div class="box-desc">>60s (-0.3 pt/q)</div>
                    </div>
                </div>

                <!-- ACTIONS RAPIDES -->
                <div class="results-actions-bar">
                    <button class="primary-btn" onclick="AnnalesApp.startExam('${s.annaleId}')">🔄 Recommencer l'épreuve</button>
                    <button class="secondary-btn" onclick="AnnalesApp.returnToHub()">← Choisir une autre annale</button>
                </div>
            </div>

            <!-- FILTRES DE CORRECTION -->
            <div class="correction-filter-tabs">
                <button class="cor-tab ${state.resultFilter === 'all' ? 'active' : ''}" onclick="AnnalesApp.onResultFilterChange('all')">
                    Toutes les questions (${s.questionResults.length})
                </button>
                <button class="cor-tab ${state.resultFilter === 'errors' ? 'active' : ''}" onclick="AnnalesApp.onResultFilterChange('errors')">
                    ❌ Erreurs uniquement (${s.questionResults.filter(q => q.errorsCount > 0).length})
                </button>
                <button class="cor-tab ${state.resultFilter === 'overtime' ? 'active' : ''}" onclick="AnnalesApp.onResultFilterChange('overtime')">
                    ⚠️ Dépassements de temps (${s.overtimeQuestionsCount})
                </button>
            </div>

            <!-- LISTE DÉTAILLÉE DES QUESTIONS -->
            <div class="correction-questions-list">
                ${filteredQuestions.map((qr, idx) => renderQuestionCorrectionCard(qr, idx)).join('')}
            </div>
        `;

        setTimeout(triggerMathTypeset, 50);
    }

    function renderQuestionCorrectionCard(qr, idx) {
        const hasErrors = qr.errorsCount > 0;
        const userAnsStr = qr.userSelection.length > 0 ? qr.userSelection.join(', ') : 'Aucune réponse';
        const correctAnsStr = qr.correctAnswers.length > 0 ? qr.correctAnswers.join(', ') : 'Aucune';

        return `
            <div class="correction-card ${hasErrors ? 'has-error' : 'is-perfect'} ${qr.isOvertime ? 'has-penalty' : ''}">
                <div class="cor-card-header">
                    <div class="cor-q-title">
                        <span class="q-badge">Question ${qr.num}</span>
                        <span class="score-badge ${hasErrors ? 'badge-err' : 'badge-perf'}">
                            ${qr.baseScore} pt ${qr.isOvertime ? '<span class="penalty-tag">-0,3 pt (chrono)</span>' : ''} = <strong>${qr.netScore} pt</strong>
                        </span>
                    </div>

                    <div class="cor-time-tag ${qr.isOvertime ? 'time-over' : 'time-ok'}">
                        ⏱️ Temps passé : <strong>${formatTime(qr.timeSpentSeconds)}</strong>
                        ${qr.isOvertime ? '(Dépassement > 60s)' : '(Dans les temps)'}
                    </div>
                </div>

                ${qr.context ? `
                    <div class="exercise-context-box readonly">
                        <div class="ctx-header">📄 Rappel de l'énoncé commun :</div>
                        <div class="ctx-body">${renderFormattedContent(qr.context)}</div>
                    </div>
                ` : ''}

                ${qr.images && qr.images.length > 0 ? `
                    <div class="question-images-box">
                        ${qr.images.map(img => `
                            <div class="image-wrapper" onclick="AnnalesApp.openLightbox('${img}')">
                                <img src="${img}" alt="Schéma de cours">
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                <div class="cor-question-stem">
                    ${renderFormattedContent(qr.questionText)}
                </div>

                <!-- BANDEAU COMPARAISON RÉPONSES -->
                <div class="answers-comparison-bar">
                    <div class="ans-box user">
                        <span class="ans-label">Votre réponse :</span>
                        <span class="ans-val ${hasErrors ? 'val-wrong' : 'val-right'}">${userAnsStr}</span>
                    </div>
                    <div class="ans-box correct">
                        <span class="ans-label">Réponse exacte :</span>
                        <span class="ans-val val-exact">${correctAnsStr}</span>
                    </div>
                    <div class="ans-box errors">
                        <span class="ans-label">Fautes :</span>
                        <span class="ans-val">${qr.errorsCount} faute(s)</span>
                    </div>
                </div>

                <!-- ANALYSE DÉTAILLÉE ITEM PAR ITEM (A, B, C, D, E) -->
                <div class="items-correction-table">
                    ${qr.itemAnalysis.map(it => {
                        const statusBadge = it.isActuallyCorrect ? '<span class="vrai-badge">VRAI</span>' : '<span class="faux-badge">FAUX</span>';
                        let userChoiceBadge = '';
                        if (it.isUserChecked) {
                            userChoiceBadge = it.isActuallyCorrect ?
                                '<span class="user-choice-badge correct">✓ Vous avez coché</span>' :
                                '<span class="user-choice-badge wrong">✗ Vous avez coché à tort</span>';
                        } else {
                            userChoiceBadge = it.isActuallyCorrect ?
                                '<span class="user-choice-badge missed">⚠️ Bonne réponse omise</span>' :
                                '<span class="user-choice-badge neutral">• Non coché (juste)</span>';
                        }

                        return `
                            <div class="item-correction-row ${it.isItemMistake ? 'row-mistake' : 'row-correct'}">
                                <div class="item-head">
                                    <span class="item-letter">${it.letter}.</span>
                                    ${statusBadge}
                                    ${userChoiceBadge}
                                </div>
                                <div class="item-content-text">${renderFormattedContent(it.text)}</div>
                                ${it.explanation ? `
                                    <div class="item-explanation-box">
                                        <span class="exp-icon">💡</span>
                                        <div class="exp-text">${renderFormattedContent(it.explanation)}</div>
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>

                ${qr.generalNotes ? `
                    <div class="general-rule-box">
                        <strong>📌 Règle / Conseil pédagogique :</strong> ${renderFormattedContent(qr.generalNotes)}
                    </div>
                ` : ''}
            </div>
        `;
    }

    function onResultFilterChange(filter) {
        state.resultFilter = filter;
        renderResults();
    }

    function returnToHub() {
        showSubView('hub');
        renderHub();
    }

    // Gestion des touches du clavier
    window.addEventListener('keydown', function (e) {
        if (state.currentView !== 'exam') return;

        const key = e.key.toUpperCase();
        if (['A', 'B', 'C', 'D', 'E'].includes(key)) {
            toggleOption(key);
        } else if (e.key === 'ArrowRight') {
            nextQuestion();
        } else if (e.key === 'ArrowLeft') {
            prevQuestion();
        } else if (key === 'F') {
            const q = getCurrentQuestion();
            if (q) {
                const qNum = q.num !== undefined ? q.num : (state.currentQuestionIndex + 1);
                toggleFlag(qNum);
            }
        }
    });

    // Utilitaire d'échappement HTML
    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // Affichage préservant les tableaux HTML, les exposants (sup) et indices (sub) scientifiques
    function renderFormattedContent(raw) {
        if (!raw) return '';
        let str = String(raw);

        const containsHtml = /<table|<sup|<sub|<div|<tr|<td|<th|<br/i.test(str);

        if (containsHtml) {
            str = str.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
            str = str.replace(/on\w+="[^"]*"/gi, '');
            str = str.replace(/javascript:[^"']*/gi, '');

            const parts = str.split(/(<\/?[a-z0-9_-]+(?:(?:\s+[\w\-:]+(?:\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>)/gi);
            let result = '';
            let insideTable = false;
            for (let i = 0; i < parts.length; i++) {
                const p = parts[i];
                if (!p) continue;
                if (p.startsWith('<')) {
                    if (/<table\b/i.test(p)) insideTable = true;
                    if (/<\/table>/i.test(p)) insideTable = false;
                    result += p;
                } else {
                    if (insideTable) {
                        result += p;
                    } else {
                        result += p.replace(/\n{2,}/g, '<br><br>').replace(/\n/g, '<br>');
                    }
                }
            }
            return result;
        }

        return escapeHtml(str).replace(/\n{2,}/g, '<br><br>').replace(/\n/g, '<br>');
    }

    // Rendu dynamique MathJax (formules LaTeX et équations mathématiques)
    function triggerMathTypeset(targetEl) {
        if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
            const el = targetEl || document.getElementById('annales-view') || document.body;
            if (el) {
                window.MathJax.typesetPromise([el]).catch(err => {
                    console.debug('MathJax rendering notice:', err);
                });
            }
        }
    }

    // Masquer / afficher la palette de navigation pour libérer 100% de la largeur d'écran
    function togglePalette() {
        state.paletteCollapsed = !state.paletteCollapsed;
        const panel = document.getElementById('exam-palette-panel');
        const toggleBtn = document.getElementById('palette-toggle-btn');
        if (panel) {
            panel.classList.toggle('collapsed', state.paletteCollapsed);
        }
        if (toggleBtn) {
            toggleBtn.innerHTML = state.paletteCollapsed ? '▶ Questions' : '◀ Masquer';
            toggleBtn.title = state.paletteCollapsed ? 'Afficher la liste des questions' : 'Masquer la liste des questions';
        }
    }

    return {
        init,
        renderHub,
        startExam,
        renderExamInterface,
        toggleOption,
        onTextAnswerChange,
        toggleFlag,
        togglePalette,
        triggerMathTypeset,
        nextQuestion,
        prevQuestion,
        jumpToQuestion,
        confirmFinishExam,
        confirmQuitExam,
        openLightbox,
        closeLightbox,
        renderResults,
        onYearChange,
        onSubjectChange,
        onSearchChange,
        resetFilters,
        onResultFilterChange,
        returnToHub
    };
})();

