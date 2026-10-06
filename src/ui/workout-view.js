// ============================================================================
// WorkoutView - Architecture Hiérarchique de l'Entraînement Académique
// Organisée en 5 Espaces :
// 1. S'Entraîner (Point d'entrée, reprise intelligente, matières, notions)
// 2. Mes Faiblesses (Remédiation personnalisée & erreurs récurrentes cliquables)
// 3. Mes Progrès & Radar (Radar SVG 6 axes, paliers de difficulté 1-9, records)
// 4. Modes d'Entraînement (Calcul, Raisonnement, Problèmes, Programmation, Performance)
// 5. Défis (Défis du jour personnalisés, sprint, marathon, concours)
// Avec drill-down fluide : Vue Matière & Vue Notion sans rechargement.
// ============================================================================

const WorkoutView = {
    hierarchyCache: null,
    currentConfig: null,
    activeTab: 'train', // 'train' | 'weaknesses' | 'progress' | 'modes' | 'challenges'
    activeView: 'hub',  // 'hub' | 'subject' | 'notion'
    activeSubject: null,
    activeNotion: null,

    // Point d'entrée principal
    renderHub() {
        if (typeof document === 'undefined') return;
        const hubContainer = document.getElementById('workout-hub-view');
        if (!hubContainer) return;

        const appData = window.appData || window.defaultData || {};
        if (window.CourseAnalyzer) window.CourseAnalyzer.analyze(appData);
        this.hierarchyCache = window.ConceptEngine ? window.ConceptEngine.getHierarchy() : {};

        // Routage drill-down
        if (this.activeView === 'subject' && this.activeSubject) {
            this.renderSubjectView(this.activeSubject);
            return;
        }
        if (this.activeView === 'notion' && this.activeNotion) {
            this.renderNotionView(this.activeNotion, this.activeSubject);
            return;
        }

        // Vue Hub standard avec les 5 Espaces
        hubContainer.innerHTML = `
            <div class="workout-hub-header">
                <div class="hub-title-wrap">
                    <span class="hub-icon">🎓</span>
                    <div>
                        <h2>Plateforme d'Entraînement Académique</h2>
                        <p class="hub-subtitle">Mathématiques Supérieures & Informatique • L2 / MPSI-MP</p>
                    </div>
                </div>
                <div class="hub-stats-badge" onclick="WorkoutView.switchTab('progress')" style="cursor:pointer;" title="Voir mes progrès complets">
                    <span>Niveau <strong>${appData._player?.level || 1}</strong> • <strong>${appData._player?.xp || 0} XP</strong></span>
                    <small>📈 Voir mon radar de compétences →</small>
                </div>
            </div>

            <!-- NAVIGATION SUPÉRIEURE : LES 5 ESPACES -->
            <div class="workout-nav-tabs">
                <button type="button" class="workout-tab-btn ${this.activeTab === 'train' ? 'active' : ''}" onclick="WorkoutView.switchTab('train')">
                    🏋️ S'Entraîner
                </button>
                <button type="button" class="workout-tab-btn ${this.activeTab === 'weaknesses' ? 'active' : ''}" onclick="WorkoutView.switchTab('weaknesses')">
                    🔥 Mes Faiblesses
                </button>
                <button type="button" class="workout-tab-btn ${this.activeTab === 'progress' ? 'active' : ''}" onclick="WorkoutView.switchTab('progress')">
                    📈 Mes Progrès & Radar
                </button>
                <button type="button" class="workout-tab-btn ${this.activeTab === 'modes' ? 'active' : ''}" onclick="WorkoutView.switchTab('modes')">
                    ⚡ Modes d'Entraînement
                </button>
                <button type="button" class="workout-tab-btn ${this.activeTab === 'challenges' ? 'active' : ''}" onclick="WorkoutView.switchTab('challenges')">
                    🏆 Défis & Concours
                </button>
            </div>

            <!-- CONTENU DE L'ESPACE ACTIF -->
            <div id="workout-tab-content" class="workout-tab-content">
                ${this.renderActiveTabContent()}
            </div>
        `;

        if (this.activeTab === 'progress' && window.CompetencyRadar) {
            window.CompetencyRadar.renderToContainer('workout-radar-container');
        }

        if (window.renderMath) window.renderMath([hubContainer]);
    },

    switchTab(tabKey) {
        this.activeTab = tabKey;
        this.activeView = 'hub';
        this.renderHub();
    },

    renderActiveTabContent() {
        switch (this.activeTab) {
            case 'train': return this.renderTrainTab();
            case 'weaknesses': return this.renderWeaknessesTab();
            case 'progress': return this.renderProgressTab();
            case 'modes': return this.renderModesTab();
            case 'challenges': return this.renderChallengesTab();
            default: return this.renderTrainTab();
        }
    },

    // ========================================================================
    // ESPACE 1 : S'ENTRAÎNER (POINT D'ENTRÉE PRINCIPAL, REPRISE INTELLIGENTE)
    // ========================================================================
    renderTrainTab() {
        const appData = window.appData || {};
        const history = appData._workoutHistory || [];
        const lastEx = history.slice(-1)[0];

        // 1. Détection prioritaire : Y a-t-il une séance interrompue en cours à reprendre ?
        const activeSaved = window.AdaptiveSessionEngine ? window.AdaptiveSessionEngine.getSavedSession() : null;
        let resumeHtml = '';

        if (activeSaved && activeSaved.stats && !activeSaved.sessionCompleted) {
            const completedCount = activeSaved.currentIndex || 0;
            const totalTarget = activeSaved.totalTarget;
            const targetLabel = activeSaved.isFreeMode ? 'Mode Libre' : `${totalTarget} exercices`;
            const remaining = activeSaved.isFreeMode ? '∞' : Math.max(0, totalTarget - completedCount);
            const notionName = activeSaved.targetConcept || activeSaved.context?.notionId || 'Séance Générale';
            const diffLevel = activeSaved.difficulty || 5;

            resumeHtml = `
                <div class="workout-resume-card session-in-progress-card" style="border-left: 4px solid #6366f1; background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(15, 23, 42, 0.6));">
                    <div class="resume-info">
                        <span class="resume-tag" style="background: rgba(99, 102, 241, 0.25); color: #a5b4fc; border: 1px solid rgba(99, 102, 241, 0.4);">
                            ⚡ Séance En Cours Sauvegardée
                        </span>
                        <h3 style="margin: 6px 0 4px 0; color: #fff;">${notionName} — Niveau ${diffLevel}</h3>
                        <p style="margin: 0; color: #cbd5e1; font-size: 0.9em;">
                            <strong>${completedCount}</strong> ${activeSaved.isFreeMode ? 'exercices réalisés' : `sur ${totalTarget} exercices réalisés`} • 
                            <span style="color: #38bdf8;">${remaining} exercices restants</span>
                        </p>
                    </div>
                    <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                        <button type="button" class="action-btn primary pulse-btn" onclick="WorkoutView.resumeSavedActiveSession()">
                            ▶ Reprendre la séance
                        </button>
                        <button type="button" class="action-btn secondary" style="font-size: 0.85em; padding: 8px 12px;" onclick="WorkoutView.discardSavedActiveSession()" title="Recommencer une nouvelle séance">
                            ✕ Annuler
                        </button>
                    </div>
                </div>
            `;
        } else if (lastEx) {
            resumeHtml = `
                <div class="workout-resume-card">
                    <div class="resume-info">
                        <span class="resume-tag">Reprise Intelligente</span>
                        <h3>Continuer mon entraînement</h3>
                        <p>Dernière notion pratiquée : <strong>${lastEx.notion}</strong> (Niveau ${lastEx.difficulty || 1})</p>
                    </div>
                    <button type="button" class="action-btn primary pulse-btn" onclick="WorkoutView.resumeLastPractice()">
                        ▶ Continuer (${lastEx.notion})
                    </button>
                </div>
            `;
        } else {
            resumeHtml = `
                <div class="workout-resume-card">
                    <div class="resume-info">
                        <span class="resume-tag">Première Séance</span>
                        <h3>Prêt pour l'entraînement ?</h3>
                        <p>Le moteur adaptatif ajuste la difficulté en temps réel selon vos réponses.</p>
                    </div>
                    <button type="button" class="action-btn primary pulse-btn" onclick="WorkoutView.startSmartSession(10)">
                        ▶ Lancer ma première séance (10 ex)
                    </button>
                </div>
            `;
        }

        // Stats d'aujourd'hui
        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        const todayExercises = history.filter(h => h.timestamp >= startOfDay);
        const todayXP = todayExercises.reduce((sum, h) => sum + (h.xpEarned || 0), 0);

        return `
            ${resumeHtml}

            <!-- BILAN DU JOUR MOBILE-FIRST -->
            <div class="today-summary-strip">
                <div class="strip-item">
                    <span class="strip-label">Aujourd'hui</span>
                    <strong class="strip-val text-success">+${todayXP} XP</strong>
                </div>
                <div class="strip-item">
                    <span class="strip-label">Exercices résolus</span>
                    <strong class="strip-val">${todayExercises.length}</strong>
                </div>
                <div class="strip-item">
                    <span class="strip-label">Série d'assiduité</span>
                    <strong class="strip-val text-warning">${window.getStudyStreak ? window.getStudyStreak() : 1} jour(s) 🔥</strong>
                </div>
            </div>

            <!-- 4 GRANDS POINTS D'ENTRÉE CLAIRS -->
            <div class="section-heading">📚 ACCÈS DIRECT PAR MATIÈRE</div>
            <div class="disciplines-grid">
                <div class="discipline-card" onclick="WorkoutView.openSubjectView('Algèbre Linéaire')">
                    <div class="discipline-icon">📐</div>
                    <div class="discipline-content">
                        <h3>Algèbre Linéaire</h3>
                        <p>Déterminants (Niv 1-9), matrices, puissances, rang, Gauss, réduction spectrale.</p>
                        <span class="discipline-action">Explorer la matière →</span>
                    </div>
                </div>

                <div class="discipline-card" onclick="WorkoutView.openSubjectView('Analyse')">
                    <div class="discipline-icon">📈</div>
                    <div class="discipline-content">
                        <h3>Analyse & Séries</h3>
                        <p>Séries numériques, calculs de sommes, Riemann paramétré, d'Alembert & Cauchy.</p>
                        <span class="discipline-action">Explorer la matière →</span>
                    </div>
                </div>

                <div class="discipline-card" onclick="WorkoutView.openSubjectView('Informatique')">
                    <div class="discipline-icon">💻</div>
                    <div class="discipline-content">
                        <h3>Informatique (Python & C)</h3>
                        <p>Mutabilité d'objets, récursivité, complexité, arithmétique *p++, mémoire et Stack Escape.</p>
                        <span class="discipline-action">Explorer la matière →</span>
                    </div>
                </div>

                <div class="discipline-card" onclick="WorkoutView.openSubjectView('Probabilités')">
                    <div class="discipline-icon">🎲</div>
                    <div class="discipline-content">
                        <h3>Probabilités</h3>
                        <p>Dénombrement, probabilités conditionnelles, variables aléatoires et lois usuelles.</p>
                        <span class="discipline-action">Explorer la matière →</span>
                    </div>
                </div>
            </div>

            <!-- CHOIX PAR NOTION OU CRÉATION SUR MESURE -->
            <div class="workout-quick-actions-grid" style="margin-top: 25px;">
                <div class="action-card-entry" onclick="WorkoutView.openCustomSessionModal()">
                    <span class="entry-icon">⚙️</span>
                    <div>
                        <h4>Créer ma séance sur mesure</h4>
                        <p>Choisissez vos chapitres, difficulté (1-9), nombre d'exercices et contraintes.</p>
                    </div>
                </div>

                <div class="action-card-entry" onclick="WorkoutView.startSmartSession(20)">
                    <span class="entry-icon">🧠</span>
                    <div>
                        <h4>Session Intelligente IA</h4>
                        <p>Laissez le moteur piocher et enchaîner les calculs selon vos besoins immédiats.</p>
                    </div>
                </div>
            </div>
        `;
    },

    // ========================================================================
    // ESPACE 2 : MES FAIBLESSES & REMÉDIATION
    // ========================================================================
    renderWeaknessesTab() {
        const history = window.appData?._workoutHistory || [];
        const masteryOverview = window.MasteryTracker ? window.MasteryTracker.getOverview() : { topWeaknesses: [] };

        // Extraction des notions avec taux d'échec
        const notionsMap = {};
        history.forEach(h => {
            const k = h.notion || 'Général';
            if (!notionsMap[k]) notionsMap[k] = { total: 0, correct: 0, wrong: 0, lastDiff: h.difficulty };
            notionsMap[k].total++;
            if (h.correct) notionsMap[k].correct++;
            else notionsMap[k].wrong++;
        });

        const weakList = Object.keys(notionsMap)
            .map(k => ({
                notion: k,
                ...notionsMap[k],
                rate: Math.round((notionsMap[k].correct / notionsMap[k].total) * 100)
            }))
            .filter(item => item.rate < 70 && item.total >= 1)
            .sort((a, b) => a.rate - b.rate);

        return `
            <div class="weakness-banner-card">
                <div class="banner-header">
                    <span class="banner-icon">🔥</span>
                    <div>
                        <h3>Analyse Personnalisée de Vos Points de Friction</h3>
                        <p>Ces notions présentent un taux de réussite inférieur à 70% et nécessitent une consolidation active.</p>
                    </div>
                    <button type="button" class="action-btn warning pulse-btn" onclick="WorkoutView.startWeaknessSession()">
                        ⚡ Travailler mes faiblesses prioritaires
                    </button>
                </div>
            </div>

            <!-- LISTE DES NOTIONS FRAGILES -->
            <div class="section-heading">🎯 NOTIONS EN DIFFICULTÉ</div>
            <div class="weakness-list-grid">
                ${weakList.length === 0 ? `
                    <div class="card" style="text-align: center; padding: 25px;">
                        <p style="color: var(--success); font-weight: bold; font-size: 1.1em;">🎉 Aucune notion fragile détectée pour le moment !</p>
                        <p style="color: var(--text-muted);">Continuez à pratiquer pour affiner le diagnostic.</p>
                    </div>
                ` : weakList.map(w => `
                    <div class="weakness-item-card">
                        <div class="weakness-item-header">
                            <div>
                                <span class="notion-title"><strong>${w.notion}</strong></span>
                                <small style="color:var(--text-muted); display:block;">${w.correct}/${w.total} exercices réussis</small>
                            </div>
                            <span class="weakness-rate-badge ${w.rate < 50 ? 'danger' : 'warning'}">${w.rate}%</span>
                        </div>
                        <div class="weakness-bar-bg">
                            <div class="weakness-bar-fill ${w.rate < 50 ? 'danger' : 'warning'}" style="width: ${w.rate}%;"></div>
                        </div>
                        <button type="button" class="action-btn secondary btn-sm" onclick="WorkoutView.openSetupModal({ title: '🎯 ${w.notion.replaceAll("'", "\\'")}', notion: '${w.notion.replaceAll("'", "\\'")}', mode: 'targeted' })">
                            Renforcer cette notion →
                        </button>
                    </div>
                `).join('')}
            </div>

            <!-- ERREURS RÉCURRENTES DÉTECTÉES -->
            <div class="section-heading" style="margin-top: 30px;">⚠️ ERREURS RÉCURRENTES DÉTECTÉES</div>
            <div class="error-remediation-grid">
                <div class="error-remediation-card" onclick="WorkoutView.startDeterminantLevel(4)">
                    <span class="err-count-badge">Erreur de signe</span>
                    <h4>Calculs de Déterminants & Transpositions</h4>
                    <p>Oubli du facteur $(-1)^{i+j}$ lors du développement ou confusion lors des opérations $L_i \\leftarrow L_i - \\lambda L_j$.</p>
                    <button type="button" class="action-btn secondary btn-sm">Travailler ce réflexe →</button>
                </div>

                <div class="error-remediation-card" onclick="WorkoutView.startAlgebraLevel(5)">
                    <span class="err-count-badge">Multiplicité géométrique</span>
                    <h4>Réduction : Sous-espaces propres $\\dim(E_\\lambda)$</h4>
                    <p>Confusion entre multiplicité algébrique $m(\\lambda)$ et géométrique $\\dim \\ker(A - \\lambda I)$ pour conclure à la diagonalisabilité.</p>
                    <button type="button" class="action-btn secondary btn-sm">Travailler ce réflexe →</button>
                </div>

                <div class="error-remediation-card" onclick="WorkoutView.startSeriesLevel(3)">
                    <span class="err-count-badge">Critère inopérant</span>
                    <h4>Séries : Règle de d'Alembert sur Riemann</h4>
                    <p>Tentative d'appliquer $\\lim u_{n+1}/u_n$ sur des séries polynomiales où le rapport tend vers 1 (cas douteux).</p>
                    <button type="button" class="action-btn secondary btn-sm">Travailler ce réflexe →</button>
                </div>

                <div class="error-remediation-card" onclick="WorkoutView.startCSLevel('c', 2)">
                    <span class="err-count-badge">Priorité mémoire</span>
                    <h4>Langage C : Arithmétique *p++ vs (*p)++</h4>
                    <p>Inversion entre déréférencement et post-incrémentation du pointeur en mémoire contiguë.</p>
                    <button type="button" class="action-btn secondary btn-sm">Travailler ce réflexe →</button>
                </div>
            </div>
        `;
    },

    // ========================================================================
    // ESPACE 3 : MES PROGRÈS & RADAR MULTIDIMENSIONNEL
    // ========================================================================
    renderProgressTab() {
        const appData = window.appData || {};
        const player = appData._player || { xp: 0, level: 1, workoutXP: 0 };
        const history = appData._workoutHistory || [];

        // Calcul par palier de difficulté (Niv 1 à 9)
        const levelsStats = {};
        for (let l = 1; l <= 9; l++) levelsStats[l] = { total: 0, correct: 0 };

        history.forEach(h => {
            const d = h.difficulty || 1;
            if (levelsStats[d]) {
                levelsStats[d].total++;
                if (h.correct) levelsStats[d].correct++;
            }
        });

        // Records personnels
        let maxDifficultySuccess = 0;
        history.forEach(h => {
            if (h.correct && h.difficulty > maxDifficultySuccess) maxDifficultySuccess = h.difficulty;
        });

        return `
            <!-- STATS PRINCIPALES -->
            <div class="progress-stats-summary-grid">
                <div class="stat-box-card">
                    <span class="stat-box-label">Niveau Actuel</span>
                    <strong class="stat-box-val text-primary">Niv. ${player.level || 1}</strong>
                    <small style="color:var(--text-muted);">${player.xp || 0} XP au total</small>
                </div>
                <div class="stat-box-card">
                    <span class="stat-box-label">XP Entraînement</span>
                    <strong class="stat-box-val text-success">+${player.workoutXP || 0} XP</strong>
                    <small style="color:var(--text-muted);">Gagnée par calcul réel</small>
                </div>
                <div class="stat-box-card">
                    <span class="stat-box-label">Exercices Réalisés</span>
                    <strong class="stat-box-val">${history.length}</strong>
                    <small style="color:var(--text-muted);">${history.filter(h => h.correct).length} réussis avec succès</small>
                </div>
                <div class="stat-box-card">
                    <span class="stat-box-label">Record de Difficulté</span>
                    <strong class="stat-box-val text-warning">Niveau ${maxDifficultySuccess || 1}</strong>
                    <small style="color:var(--text-muted);">Difficulté max validée</small>
                </div>
            </div>

            <!-- RADAR DE COMPÉTENCES MATHÉMATIQUES & INFORMATIQUES (SVG HAUTE DÉFINITION) -->
            <div class="section-heading" style="margin-top: 30px;">📊 RADAR MULTIDIMENSIONNEL DE COMPÉTENCES</div>
            <div class="card radar-card-container">
                <p style="color: var(--text-muted); font-size: 0.9em; margin-bottom: 20px;">
                    Ce radar intègre simultanément votre <strong>taux de réussite</strong>, la <strong>difficulté moyenne</strong> des exercices validés, le <strong>volume</strong> de pratique et votre <strong>récence</strong> :
                </p>
                <div id="workout-radar-container">
                    <!-- SVG dynamique généré par CompetencyRadar.renderToContainer -->
                </div>
            </div>

            <!-- PALIERS DE MAÎTRISE PAR DIFFICULTÉ (NIVEAUX 1 À 9) -->
            <div class="section-heading" style="margin-top: 30px;">🪜 MAÎTRISE PAR PALIER DE DIFFICULTÉ</div>
            <div class="card difficulty-breakdown-card">
                <div class="difficulty-tiers-list">
                    ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(lvl => {
                        const s = levelsStats[lvl];
                        const rate = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
                        return `
                            <div class="tier-row">
                                <span class="tier-label">Niveau ${lvl}</span>
                                <div class="tier-bar-bg">
                                    <div class="tier-bar-fill" style="width: ${s.total > 0 ? rate : 0}%; background: ${rate >= 75 ? 'var(--success)' : rate >= 50 ? 'var(--warning)' : '#6366f1'};"></div>
                                </div>
                                <span class="tier-rate">${s.total > 0 ? `${rate}% (${s.correct}/${s.total})` : '<em style="color:var(--text-muted)">Non testé</em>'}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <!-- PROFIL D'AUTONOMIE ACADÉMIQUE PAR NOTION (EXIGENCE UNIVERSITAIRE) -->
            <div class="section-heading" style="margin-top: 30px;">🎓 MESURE DE L'AUTONOMIE & RAISONNEMENT PAR NOTION</div>
            <div class="card autonomy-breakdown-card">
                <p style="color: var(--text-muted); font-size: 0.9em; margin-bottom: 16px;">
                    Une vraie maîtrise exige de savoir résoudre <strong>sans indications</strong>. Ce tableau dissocie votre vitesse de calcul, votre rigueur de raisonnement et votre niveau d'autonomie réelle :
                </p>
                <div class="autonomy-table-wrapper" style="overflow-x: auto;">
                    <table class="academic-table" style="width: 100%; border-collapse: collapse; font-size: 0.9em; text-align: left;">
                        <thead>
                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.15); color: var(--text-muted);">
                                <th style="padding: 10px 8px;">Notion</th>
                                <th style="padding: 10px 8px;">🧮 Calcul</th>
                                <th style="padding: 10px 8px;">🧠 Raisonnement</th>
                                <th style="padding: 10px 8px;">⚡ Autonomie Réelle</th>
                                <th style="padding: 10px 8px;">Palier Atteint</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${(() => {
                                const trackerStats = window.MasteryTracker ? window.MasteryTracker.init() : {};
                                const entries = Object.values(trackerStats);
                                if (entries.length === 0) {
                                    return `
                                        <tr>
                                            <td colspan="5" style="text-align: center; padding: 20px; color: var(--text-muted);">
                                                Effectuez des entraînements pour calibrer votre indice d'autonomie.
                                            </td>
                                        </tr>
                                    `;
                                }
                                return entries.map(e => {
                                    const dims = e.dimensions || {};
                                    const calcPct = dims.calculation?.percent ?? e.masteryPercent ?? 75;
                                    const reasPct = dims.reasoning?.percent ?? e.masteryPercent ?? 70;
                                    const autoScore = dims.autonomy?.score ?? (e.currentLevel >= 4 ? 65 : 45);
                                    return `
                                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
                                            <td style="padding: 10px 8px; font-weight: 600; color: #fff;">${e.label || e.conceptKey}</td>
                                            <td style="padding: 10px 8px;"><strong style="color: #38bdf8;">${calcPct}%</strong></td>
                                            <td style="padding: 10px 8px;"><strong style="color: #a78bfa;">${reasPct}%</strong></td>
                                            <td style="padding: 10px 8px;">
                                                <strong style="color: ${autoScore >= 70 ? '#34d399' : autoScore >= 50 ? '#fbbf24' : '#f87171'};">
                                                    ${autoScore}%
                                                </strong>
                                            </td>
                                            <td style="padding: 10px 8px;">
                                                <span class="badge" style="background: rgba(255,255,255,0.08); padding: 2px 8px; border-radius: 4px;">
                                                    Niv. ${e.currentLevel || 1}/9
                                                </span>
                                            </td>
                                        </tr>
                                    `;
                                }).join('');
                            })()}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },

    // ========================================================================
    // ESPACE 4 : MODES D'ENTRAÎNEMENT (HIÉRARCHIE DES 6 FAMILLES PÉDAGOGIQUES)
    // ========================================================================
    renderModesTab() {
        return `
            <div class="modes-intro-box">
                <h3>⚡ Bibliothèque Hiérarchique des Modes d'Entraînement</h3>
                <p>Chaque famille d'entraînement forge une compétence académique précise : automatisation du calcul, rigueur de déduction, traque d'erreurs ou vision globale.</p>
            </div>

            <!-- 1. CALCUL -->
            <div class="section-heading">🧮 1. CALCUL PUR & AUTOMATISATION</div>
            <div class="modes-category-grid">
                <div class="mode-action-card" onclick="WorkoutView.openNotionView('Déterminants', 'Algèbre Linéaire')">
                    <span class="mode-badge">Calcul</span>
                    <h4>Déterminants (9 Niveaux)</h4>
                    <p>Du $2\\times 2$ direct aux blocs triangulaires, paramètres $D(a)=0$ et astuce de colonnes.</p>
                    <button type="button" class="action-btn secondary btn-sm">Lancer le parcours →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.startAlgebraLevel(1)">
                    <span class="mode-badge">Calcul</span>
                    <h4>Calcul Matriciel & Trace</h4>
                    <p>Produit de matrices, puissances $A^2$, nilpotence et propriétés de $\\text{Tr}(A^2)$.</p>
                    <button type="button" class="action-btn secondary btn-sm">S'entraîner →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.startSeriesLevel(2)">
                    <span class="mode-badge">Calcul</span>
                    <h4>Calculs de Sommes de Séries</h4>
                    <p>Sommes géométriques exactes $\\frac{a}{1-q}$ et sommes télescopiques par décomposition.</p>
                    <button type="button" class="action-btn secondary btn-sm">S'entraîner →</button>
                </div>
            </div>

            <!-- 2. RAISONNEMENT -->
            <div class="section-heading" style="margin-top: 30px;">🧭 2. RAISONNEMENT & DÉDUCTION LOGIQUE</div>
            <div class="modes-category-grid">
                <div class="mode-action-card" onclick="WorkoutView.startCaseDisjunction()">
                    <span class="mode-badge reasoning">Paramètres</span>
                    <h4>Disjonction de Cas $A(m)$ (Phase B1)</h4>
                    <p>Déterminer selon $m$ le rang, l'inversibilité, le noyau et les valeurs critiques singulières.</p>
                    <button type="button" class="action-btn primary btn-sm">Démarrer la disjonction →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.startAlgebraLevel(6)">
                    <span class="mode-badge reasoning">Espaces Propres</span>
                    <h4>Multiplicité Géométrique $\\dim(E_\\lambda)$</h4>
                    <p>Calculer la dimension du noyau $\\ker(A - \\lambda I)$ et confronter à la multiplicité algébrique.</p>
                    <button type="button" class="action-btn secondary btn-sm">S'entraîner →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.startAlgebraLevel(7)">
                    <span class="mode-badge reasoning">Théorème</span>
                    <h4>Conditions de Diagonalisabilité</h4>
                    <p>Identifier les conditions nécessaires et suffisantes de diagonalisation sur $\\mathbb{R}$.</p>
                    <button type="button" class="action-btn secondary btn-sm">Résoudre →</button>
                </div>
            </div>

            <!-- 3. PROBLÈMES & SYNTHÈSE -->
            <div class="section-heading" style="margin-top: 30px;">📚 3. PROBLÈMES & SYNTHÈSE GUIDÉE</div>
            <div class="modes-category-grid">
                <div class="mode-action-card" onclick="WorkoutView.startFullExamProblem()">
                    <span class="mode-badge" style="background: rgba(236, 72, 153, 0.2); color: #f472b6;">Épreuve 35 min</span>
                    <h4>Grand Problème de Synthèse (Phase C1)</h4>
                    <p>Épreuve universitaire en 5 parties interdépendantes : polynôme $\\to$ spectre $\\to$ réduction $\\to$ $A^n$.</p>
                    <button type="button" class="action-btn primary btn-sm">Lancer l'épreuve →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.startMultiStep('diag')">
                    <span class="mode-badge reasoning">Multi-Étapes</span>
                    <h4>Problème Guidé : Réduction d'Ordre 3</h4>
                    <p>Étude complète avec report des résultats exacts en cas d'erreur intermédiaire.</p>
                    <button type="button" class="action-btn secondary btn-sm">Démarrer →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.startMultiStep('series')">
                    <span class="mode-badge reasoning">Multi-Étapes</span>
                    <h4>Étude Complète de Série Asymptotique</h4>
                    <p>Équivalents, terme dominant selon $\\alpha$, seuil critique de Riemann et cas limite.</p>
                    <button type="button" class="action-btn secondary btn-sm">Démarrer →</button>
                </div>
            </div>

            <!-- 4. ANTI-ERREUR & RÉPARATION -->
            <div class="section-heading" style="margin-top: 30px;">🔍 4. ANTI-ERREUR & RÉPARATION DE COPIES</div>
            <div class="modes-category-grid">
                <div class="mode-action-card" onclick="WorkoutView.startFlawPractice()">
                    <span class="mode-badge" style="background: rgba(245, 158, 11, 0.2); color: #fbbf24;">Réparation</span>
                    <h4>Traque & Réparation de Fautes (Phase B3)</h4>
                    <p>Repérer l'étape fausse dans une copie d'étudiant, identifier sa nature (signe, hypothèse, théorème) et réparer.</p>
                    <button type="button" class="action-btn warning btn-sm">Réparer la copie →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.openSpectralVisualizerModal()">
                    <span class="mode-badge" style="background: rgba(56, 189, 248, 0.2); color: #38bdf8;">Visuel</span>
                    <h4>Laboratoire Spectral Interactif (Phase C3)</h4>
                    <p>Comprendre visuellement ce que signifie la stabilité d'une direction propre par une transformation 2×2.</p>
                    <button type="button" class="action-btn secondary btn-sm">Ouvrir le laboratoire →</button>
                </div>
            </div>

            <!-- 5. PROGRAMMATION & MODÈLE MÉMOIRE -->
            <div class="section-heading" style="margin-top: 30px;">💻 5. PROGRAMMATION (PYTHON & LANGAGE C)</div>
            <div class="modes-category-grid">
                <div class="mode-action-card" onclick="WorkoutView.startMemoryLeakPractice()">
                    <span class="mode-badge cs">C Mémoire</span>
                    <h4>Chasse aux Fuites Mémoire C (Phase B2)</h4>
                    <p>Modèle mémoire STACK vs HEAP : malloc, free, double free, use-after-free et pointeurs pendants.</p>
                    <button type="button" class="action-btn primary btn-sm">Inspecter la mémoire →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.startCSLevel('c', 2)">
                    <span class="mode-badge cs">Langage C</span>
                    <h4>Arithmétique fine : *p++ vs (*p)++</h4>
                    <p>Priorité des opérateurs unaires, déplacement dans les tableaux et déréférencement.</p>
                    <button type="button" class="action-btn secondary btn-sm">S'entraîner →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.startCSLevel('python', 3)">
                    <span class="mode-badge cs">Python</span>
                    <h4>Écriture de Code Récursif</h4>
                    <p>Éditeur de code avec exécution réelle et validation par tests unitaires automatisés.</p>
                    <button type="button" class="action-btn secondary btn-sm">Coder →</button>
                </div>
            </div>

            <!-- 6. PERFORMANCE & CONCOURS -->
            <div class="section-heading" style="margin-top: 30px;">⏱️ 6. PERFORMANCE & CONCOURS</div>
            <div class="modes-category-grid">
                <div class="mode-action-card" onclick="WorkoutView.startPerformanceMode('sprint')">
                    <span class="mode-badge perf">Sprint</span>
                    <h4>Sprint d'Excellence (5 ex difficiles)</h4>
                    <p>5 calculs consécutifs sous pression sans droit à l'erreur.</p>
                    <button type="button" class="action-btn warning btn-sm">Lancer le sprint →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.startPerformanceMode('marathon')">
                    <span class="mode-badge perf">Marathon</span>
                    <h4>Marathon (50 exercices)</h4>
                    <p>Grande session d'entraînement pour forger des automatismes mathématiques durables.</p>
                    <button type="button" class="action-btn secondary btn-sm">Lancer le marathon →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.startPerformanceMode('exam')">
                    <span class="mode-badge perf">Examen</span>
                    <h4>Examen Blanc L2 (Zéro Aide)</h4>
                    <p>Série de 10 exercices mixtes sans indice ni solution intermédiaire, avec bilan final chiffré.</p>
                    <button type="button" class="action-btn primary btn-sm">Commencer l'épreuve →</button>
                </div>
            </div>
        `;
    },

    // ========================================================================
    // ESPACE 5 : DÉFIS, QUÊTES QUOTIDIENNES DU PROFIL & CONCOURS (B4)
    // ========================================================================
    renderChallengesTab() {
        const appData = window.appData || {};
        const history = appData._workoutHistory || [];

        // Génération intelligente des quêtes à partir du profil réel (Faiblesses + pratique)
        let dynamicQuests = [];
        if (window.MasteryTracker) {
            const weaknesses = window.MasteryTracker.getTopWeaknesses(3);
            weaknesses.forEach(w => {
                dynamicQuests.push({
                    icon: '🎯',
                    title: `Faiblesse Détectée : ${w.label}`,
                    desc: `Tu as rencontré des difficultés sur « ${w.label} ». Réussis 5 exercices ciblés pour restaurer ta maîtrise.`,
                    actionText: 'Travailler cette faiblesse →',
                    actionFn: `WorkoutView.startTargetedConcept('${w.label}')`
                });
            });
        }

        // Compléments si profil neuf ou peu de faiblesses
        if (dynamicQuests.length === 0) {
            dynamicQuests.push({
                icon: '📐',
                title: 'Multiplicité Géométrique & Espaces Propres',
                desc: 'Valider le calcul du noyau ker(A - λI) et la dimension des sous-espaces.',
                actionText: 'S\'entraîner (5 ex) →',
                actionFn: `WorkoutView.startAlgebraLevel(6)`
            });
            dynamicQuests.push({
                icon: '🔍',
                title: 'Chasse aux Pièges d\'Énoncé',
                desc: 'Diagnostiquer 3 erreurs de calcul de déterminants dans des copies d\'étudiants.',
                actionText: 'Réparer les copies →',
                actionFn: `WorkoutView.startFlawPractice()`
            });
        }

        return `
            <div class="challenges-intro-card">
                <h3>🏆 Quêtes Quotidiennes Intelligentes & Concours</h3>
                <p>Ces objectifs sont calibrés dynamiquement à partir de votre historique d'erreurs, de vos faiblesses réelles et des prérequis académiques.</p>
            </div>

            <!-- OBJECTIFS QUOTIDIENS DYNAMIQUES -->
            <div class="section-heading">🎯 QUÊTES PERSONNALISÉES DU PROFIL</div>
            <div class="daily-quests-list">
                ${dynamicQuests.map(q => `
                    <div class="quest-card">
                        <div class="quest-icon">${q.icon}</div>
                        <div class="quest-content">
                            <strong>${q.title}</strong>
                            <p>${q.desc}</p>
                        </div>
                        <button type="button" class="action-btn secondary btn-sm" onclick="${q.actionFn}">${q.actionText}</button>
                    </div>
                `).join('')}
            </div>

            <!-- DÉFIS CONCOURS -->
            <div class="section-heading" style="margin-top: 30px;">🏛️ SIMULATION EXAMEN & CONCOURS</div>
            <div class="modes-category-grid">
                <div class="mode-action-card" onclick="WorkoutView.startFullExamProblem()">
                    <span class="mode-badge perf">35 min</span>
                    <h4>Épreuve Complète Réduction (Phase C1)</h4>
                    <p>Feuille d'examen universitaire avec 5 parties interdépendantes et barème chiffré.</p>
                    <button type="button" class="action-btn primary btn-sm">Commencer l'épreuve →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.startPerformanceMode('exam')">
                    <span class="mode-badge perf">Examen</span>
                    <h4>Mode Examen Blanc (Zéro Aide)</h4>
                    <p>Série de 10 exercices mixtes sans indice ni solution intermédiaire, avec bilan final chiffré.</p>
                    <button type="button" class="action-btn secondary btn-sm">Lancer le test →</button>
                </div>
            </div>
        `;
    },

    // ========================================================================
    // DRILL-DOWN : VUE MATIÈRE (EX: ALGÈBRE LINÉAIRE)
    // ========================================================================
    openSubjectView(subjectName) {
        this.activeSubject = subjectName;
        this.activeView = 'subject';
        this.renderHub();
    },

    renderSubjectView(subjectName) {
        const hubContainer = document.getElementById('workout-hub-view');
        if (!hubContainer) return;

        hubContainer.innerHTML = `
            <div class="drilldown-nav-bar">
                <button type="button" class="drilldown-back-btn" onclick="WorkoutView.backToHub()">
                    ← Retour à l'Entraînement
                </button>
                <span class="drilldown-breadcrumb">Matière : <strong>${subjectName}</strong></span>
            </div>

            <div class="drilldown-hero-card">
                <h2>📐 ${subjectName}</h2>
                <p>Espace de travail complet dédié aux notions et automatismes d'${subjectName}.</p>
                <div class="hero-actions">
                    <button type="button" class="action-btn primary" onclick="WorkoutView.startSubjectSmart('${subjectName}')">
                        ▶ Continuer ${subjectName}
                    </button>
                </div>
            </div>

            <div class="section-heading">🧮 NOTIONS DE CALCUL & AUTOMATISMES</div>
            <div class="modes-category-grid">
                <div class="mode-action-card" onclick="WorkoutView.openNotionView('Déterminants', '${subjectName}')">
                    <h4>Déterminants (9 Niveaux)</h4>
                    <p>Matrices 2×2, 3×3, opérations $L_i-\\lambda L_j$, paramètres $D(a)=0$, blocs et astuces.</p>
                    <span class="drilldown-action-link">Ouvrir la notion →</span>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.openNotionView('Calcul Matriciel', '${subjectName}')">
                    <h4>Calcul Matriciel & Trace</h4>
                    <p>Produits, puissances $A^2$, nilpotence et invariants de trace.</p>
                    <span class="drilldown-action-link">Ouvrir la notion →</span>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.openNotionView('Systèmes & Gauss', '${subjectName}')">
                    <h4>Systèmes Linéaires & Gauss</h4>
                    <p>Résolution, rang et pivot avec paramètres critiques.</p>
                    <span class="drilldown-action-link">Ouvrir la notion →</span>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.openNotionView('Rang & SEV', '${subjectName}')">
                    <h4>Rang, Noyau & Image</h4>
                    <p>Théorème du rang, dimension de sous-espaces et somme directe.</p>
                    <span class="drilldown-action-link">Ouvrir la notion →</span>
                </div>
            </div>

            <div class="section-heading" style="margin-top: 30px;">🎯 RÉDUCTION & DIAGONALISATION</div>
            <div class="modes-category-grid">
                <div class="mode-action-card" onclick="WorkoutView.openNotionView('Diagonalisation', '${subjectName}')">
                    <h4>Diagonalisation & Spectre</h4>
                    <p>Valeurs propres, multiplicités géométriques et matrices à paramètres $A(a)$.</p>
                    <span class="drilldown-action-link">Ouvrir la notion →</span>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.startMultiStep('diag')">
                    <h4>Problème de Synthèse Réduction</h4>
                    <p>Résolution guidée en 4 étapes de l'étude spectrale complète d'une matrice.</p>
                    <span class="drilldown-action-link">Lancer le problème →</span>
                </div>
            </div>
        `;

        if (window.renderMath) window.renderMath([hubContainer]);
    },

    // ========================================================================
    // DRILL-DOWN : VUE NOTION DÉTAILLÉE (EX: DÉTERMINANTS)
    // ========================================================================
    openNotionView(notionName, parentSubject) {
        this.activeNotion = notionName;
        this.activeSubject = parentSubject || 'Algèbre Linéaire';
        this.activeView = 'notion';
        this.renderHub();
    },

    renderNotionView(notionName, parentSubject) {
        const hubContainer = document.getElementById('workout-hub-view');
        if (!hubContainer) return;

        const isDet = /déterminant/i.test(notionName);

        hubContainer.innerHTML = `
            <div class="drilldown-nav-bar">
                <button type="button" class="drilldown-back-btn" onclick="WorkoutView.openSubjectView('${parentSubject}')">
                    ← Retour à ${parentSubject}
                </button>
                <span class="drilldown-breadcrumb">Notion : <strong>${notionName}</strong></span>
            </div>

            <div class="drilldown-hero-card">
                <h2>🧮 ${notionName}</h2>
                <p>Banque d'entraînement intensif au calcul pur et à la résolution de ${notionName}.</p>
                <div class="hero-actions">
                    <button type="button" class="action-btn primary" onclick="${isDet ? 'WorkoutView.startDeterminantLevel(1)' : `WorkoutView.startTargetedConcept('${notionName}')`}">
                        ▶ Démarrer la série
                    </button>
                    <button type="button" class="action-btn secondary" onclick="WorkoutView.openSetupModal({ title: '${notionName}', notion: '${notionName}', mode: 'targeted' })">
                        ⚙️ Configurer ma séance
                    </button>
                </div>
            </div>

            ${isDet ? `
            <div class="section-heading">🪜 LES 9 NIVEAUX DE CALCUL DE DÉTERMINANTS</div>
            <div class="determinant-nine-grid">
                ${[
                    { lvl: 1, title: '2×2 Direct', xp: 10, desc: 'Calcul direct ad - bc avec coefficients relatifs.' },
                    { lvl: 2, title: '3×3 Développement', xp: 15, desc: 'Développement selon la ligne ou colonne à zéros.' },
                    { lvl: 3, title: '3×3 Fractions', xp: 25, desc: 'Coefficients rationnels p/q et factorisation.' },
                    { lvl: 4, title: 'Opérations Élémentaires', xp: 35, desc: 'Combinaisons Li - λLj sans changer le déterminant.' },
                    { lvl: 5, title: 'Paramètre a et D(a)=0', xp: 50, desc: 'Recherche de l\'ensemble des racines réelles.' },
                    { lvl: 6, title: 'Matrice 4×4 Structurée', xp: 70, desc: 'Pivot partiel et réduction d\'ordre.' },
                    { lvl: 7, title: 'Déterminants par Blocs', xp: 100, desc: 'Matrices triangulaires par blocs det(A)det(D).' },
                    { lvl: 8, title: 'Astuce Somme Colonnes', xp: 125, desc: 'Remplacement C1 <- somme(Cj) et factorisation.' },
                    { lvl: 9, title: 'Problème Combiné', xp: 150, desc: 'Déterminant -> paramètre -> rang -> inverse.' }
                ].map(item => `
                    <div class="tier-card-box" onclick="WorkoutView.startDeterminantLevel(${item.lvl})">
                        <div class="tier-card-head">
                            <span class="tier-num">Niveau ${item.lvl}</span>
                            <span class="tier-xp">+${item.xp} XP</span>
                        </div>
                        <h4>${item.title}</h4>
                        <p>${item.desc}</p>
                        <button type="button" class="action-btn secondary btn-sm">S'entraîner Niv.${item.lvl}</button>
                    </div>
                `).join('')}
            </div>
            ` : `
            <div class="section-heading">⚡ MODES D'ENTRAÎNEMENT DISPONIBLES POUR CETTE NOTION</div>
            <div class="modes-category-grid">
                <div class="mode-action-card" onclick="WorkoutView.launchDirect({ notion: '${notionName}', subject: '${parentSubject}', trainingFamily: 'calculation', mode: 'targeted' }, 10)">
                    <span class="mode-badge">Calcul</span>
                    <h4>Calcul & Pratique Directe</h4>
                    <p>Saisie directe de réponses mathématiques, valeurs propres, polynômes caractéristiques et déterminants.</p>
                    <button type="button" class="action-btn secondary btn-sm">Lancer le calcul →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.launchDirect({ notion: '${notionName}', subject: '${parentSubject}', trainingFamily: 'reasoning', mode: 'targeted' }, 10)">
                    <span class="mode-badge reasoning">Raisonnement</span>
                    <h4>Raisonnement & Conditions CNS</h4>
                    <p>Déductions logiques, dimension de sous-espaces propres et critères formels.</p>
                    <button type="button" class="action-btn secondary btn-sm">Démarrer →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.startFlawPractice()">
                    <span class="mode-badge" style="background: rgba(245, 158, 11, 0.2); color: #fbbf24;">Anti-Erreur</span>
                    <h4>Traque & Réparation de Fautes</h4>
                    <p>Identifier et réparer les erreurs types d'étudiants sur cette notion.</p>
                    <button type="button" class="action-btn warning btn-sm">Réparer la copie →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.startMultiStep('${/diag|réduction/i.test(notionName) ? 'diag' : 'series'}')">
                    <span class="mode-badge reasoning">Multi-Étapes</span>
                    <h4>Problème Multi-Étapes Guidé</h4>
                    <p>Enchaînement d'étapes interdépendantes avec report de valeurs corrigées sans blocage.</p>
                    <button type="button" class="action-btn primary btn-sm">Résoudre pas à pas →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.startFullExamProblem()">
                    <span class="mode-badge perf">35 min</span>
                    <h4>Grand Problème de Concours</h4>
                    <p>Épreuve universitaire complète simulant les sujets de concours.</p>
                    <button type="button" class="action-btn primary btn-sm">Lancer l'épreuve →</button>
                </div>

                ${/diag|propre|spectre|réduction/i.test(notionName) ? `
                <div class="mode-action-card" onclick="WorkoutView.startAutonomyReduction('semi_guided')">
                    <span class="mode-badge" style="background: rgba(168, 85, 247, 0.2); color: #c084fc;">Niveau 2 • Choix de Méthode</span>
                    <h4>Réduction sans Guidage Imposé</h4>
                    <p>On donne la matrice sans le polynôme caractéristique : à vous d'initier la bonne démarche et de tester la multiplicité géométrique.</p>
                    <button type="button" class="action-btn secondary btn-sm">S'exercer en autonomie →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.startTrigonalisationPractice()">
                    <span class="mode-badge" style="background: rgba(236, 72, 153, 0.2); color: #f472b6;">Distinction Fondamentale</span>
                    <h4>Trigonalisable vs Diagonalisable vs Ni l'un ni l'autre</h4>
                    <p>Déterminer la nature exacte selon que le polynôme caractéristique est scindé et que la multiplicité géométrique coïncide.</p>
                    <button type="button" class="action-btn secondary btn-sm">Distinguer les cas →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.startPartialInfoPractice()">
                    <span class="mode-badge" style="background: rgba(34, 197, 94, 0.2); color: #4ade80;">Raisonnement Pur</span>
                    <h4>Exercices à Information Partielle</h4>
                    <p>Déduire la diagonalisabilité ou trigonalisabilité à partir des seules dimensions d'espaces propres, sans matrice explicite.</p>
                    <button type="button" class="action-btn secondary btn-sm">Raisonner →</button>
                </div>

                <div class="mode-action-card" onclick="WorkoutView.openSpectralVisualizerModal()">
                    <span class="mode-badge" style="background: rgba(56, 189, 248, 0.2); color: #38bdf8;">Visualisation 2D</span>
                    <h4>Laboratoire Spectral Interactif</h4>
                    <p>Faire tourner un vecteur $u$ et visualiser les directions stables par $x \\mapsto Ax$.</p>
                    <button type="button" class="action-btn secondary btn-sm">Ouvrir le laboratoire →</button>
                </div>
                ` : ''}
            </div>
            `}
        `;

        if (window.renderMath) window.renderMath([hubContainer]);
    },

    backToHub() {
        this.activeView = 'hub';
        this.activeSubject = null;
        this.activeNotion = null;
        this.renderHub();
    },

    // ========================================================================
    // REPRISE DE SÉANCE EN COURS (ZÉRO PERTE, FLUIDITÉ TOTALE)
    // ========================================================================
    resumeSavedActiveSession() {
        if (!window.AdaptiveSessionEngine) return;
        const restored = window.AdaptiveSessionEngine.resumeSavedSession();
        if (restored) {
            this.openPlayer();
        } else {
            this.startSmartSession(10);
        }
    },

    discardSavedActiveSession() {
        if (window.AdaptiveSessionEngine) {
            window.AdaptiveSessionEngine.clearSavedSession();
        }
        this.renderHub();
    },

    resumeLastPractice() {
        const history = window.appData?._workoutHistory || [];
        const last = history.slice(-1)[0];
        if (last && /déterminant/i.test(last.notion)) {
            const nextLvl = Math.min(9, (last.difficulty || 1) + (last.correct ? 1 : 0));
            this.startDeterminantLevel(nextLvl);
        } else if (last && /série/i.test(last.notion)) {
            this.startSeriesLevel(Math.min(5, (last.difficulty || 1) + 1));
        } else {
            this.startSmartSession(10);
        }
    },

    startSubjectSmart(subject) {
        this.openSetupModal({
            title: `📐 ${subject} (Session Ciblée)`,
            notion: subject,
            mode: 'targeted'
        });
    },

    // 1. Séance d'autonomie progressive en réduction (Niveaux 1 à 3)
    startAutonomyReduction(level = 'semi_guided') {
        window.AdaptiveSessionEngine.startSession({
            mode: 'generator',
            generatorFn: () => window.AlgebraGenerators ? window.AlgebraGenerators.generateReductionProgression(level) : null,
            totalTarget: 5,
            subject: 'Algèbre Linéaire',
            chapter: 'Réduction des Endomorphismes',
            notion: 'Diagonalisation & Autonomie',
            trainingFamily: 'reasoning',
            difficulty: level === 'autonomous' ? 8 : (level === 'semi_guided' ? 7 : 5)
        });
        this.openPlayer();
    },

    // 2. Trichotomie Trigonalisable vs Diagonalisable vs Ni l'un ni l'autre
    startTrigonalisationPractice() {
        window.AdaptiveSessionEngine.startSession({
            mode: 'generator',
            generatorFn: () => window.AlgebraGenerators ? window.AlgebraGenerators.generateTrigonalisationExercise() : null,
            totalTarget: 6,
            subject: 'Algèbre Linéaire',
            chapter: 'Réduction des Endomorphismes',
            notion: 'Trigonalisation vs Diagonalisation',
            trainingFamily: 'reasoning',
            difficulty: 7
        });
        this.openPlayer();
    },

    // 3. Raisonnement à information partielle
    startPartialInfoPractice() {
        window.AdaptiveSessionEngine.startSession({
            mode: 'generator',
            generatorFn: () => window.AlgebraGenerators ? window.AlgebraGenerators.generatePartialInfoReductionExercise() : null,
            totalTarget: 6,
            subject: 'Algèbre Linéaire',
            chapter: 'Réduction des Endomorphismes',
            notion: 'Information Partielle & Spectre',
            trainingFamily: 'reasoning',
            difficulty: 6
        });
        this.openPlayer();
    },

    startCaseDisjunction() {
        const problemData = window.AlgebraGenerators ? window.AlgebraGenerators.generateCaseDisjunctionExercise() : null;
        if (!problemData) return;

        window.AdaptiveSessionEngine.startSession({
            mode: 'generator',
            generatorFn: () => window.AlgebraGenerators.generateCaseDisjunctionExercise(),
            totalTarget: 1,
            subject: 'Algèbre Linéaire',
            chapter: 'Systèmes Linéaires & Rang',
            notion: 'Disjonction de Cas à Paramètre',
            trainingFamily: 'reasoning',
            difficulty: 6
        });
        this.openPlayer();
    },

    startMemoryLeakPractice() {
        window.AdaptiveSessionEngine.startSession({
            mode: 'generator',
            generatorFn: () => window.CSGenerators.generateMemoryLeakExercise(),
            totalTarget: 5,
            subject: 'Informatique',
            chapter: 'Langage C',
            notion: 'Modèle Mémoire & Fuites',
            trainingFamily: 'programming',
            difficulty: 5
        });
        this.openPlayer();
    },

    startFlawPractice() {
        window.AdaptiveSessionEngine.startSession({
            mode: 'generator',
            generatorFn: () => window.FlawGenerators.generate(),
            totalTarget: 5,
            subject: 'Mathématiques Supérieures',
            chapter: 'Anti-Erreur',
            notion: 'Réparation de Copie',
            trainingFamily: 'anti_error',
            difficulty: 5
        });
        this.openPlayer();
    },

    startFullExamProblem() {
        window.AdaptiveSessionEngine.startSession({
            mode: 'generator',
            generatorFn: () => window.MultiStepGenerators.generateFullExamProblem(),
            totalTarget: 1,
            subject: 'Algèbre Linéaire',
            chapter: 'Réduction',
            notion: 'Grand Problème Concours',
            trainingFamily: 'long_problem',
            difficulty: 8
        });
        this.openPlayer();
    },

    openSpectralVisualizerModal() {
        const modal = document.getElementById('workout-config-modal');
        const modalBody = document.getElementById('workout-config-modal-body');
        if (!modal || !modalBody) return;
        modal.classList.remove('hidden');
        modalBody.innerHTML = `
            <div style="max-width: 720px; margin: 0 auto;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <h3 style="margin: 0; color: #38bdf8;">🧭 Laboratoire Spectral Interactif (Phase C3)</h3>
                    <button class="secondary" type="button" onclick="WorkoutView.closeConfigModal()">✕ Fermer</button>
                </div>
                <div id="modal-spectral-container"></div>
            </div>
        `;
        if (window.SpectralVisualizer) {
            window.SpectralVisualizer.render('modal-spectral-container', [[2, 1], [0, 3]]);
        }
    },

    startMultiStep(type = 'diag') {
        const problemData = window.MultiStepGenerators ? window.MultiStepGenerators.generate(type) : null;
        if (!problemData) return;

        window.AdaptiveSessionEngine.startSession({
            mode: 'generator',
            generatorFn: () => window.MultiStepGenerators.generate(type),
            totalTarget: 1,
            subject: type === 'series' ? 'Analyse' : 'Algèbre Linéaire',
            chapter: type === 'series' ? 'Séries Numériques' : 'Réduction',
            notion: type === 'series' ? 'Séries à Paramètres' : 'Diagonalisation',
            trainingFamily: 'multi_step',
            difficulty: 7
        });
        this.openPlayer();
    },

    startPerformanceMode(perfType) {
        let count = 5;
        let title = 'Sprint';
        if (perfType === 'marathon') { count = 50; title = 'Marathon (50 exercices)'; }
        if (perfType === 'exam') { count = 10; title = 'Mode Examen Blanc'; }

        this.openSetupModal({
            title: `⏱️ ${title}`,
            notion: 'Algèbre Linéaire',
            mode: 'smart',
            forceCount: count
        });
    },

    startDeterminantLevel(level, directTarget = null) {
        if (directTarget !== null) {
            this.launchDirect({
                mode: 'generator',
                generatorFn: () => window.DeterminantGenerators.generate(level)
            }, directTarget);
            return;
        }

        const levelNames = {
            1: "2×2 Direct",
            2: "3×3 Développement Ligne/Colonne",
            3: "3×3 avec Fractions",
            4: "Opérations Élémentaires Li - λLj",
            5: "Paramètre a et D(a) = 0",
            6: "4×4 à Structure Exploitable",
            7: "Déterminants par Blocs",
            8: "Astuce Somme des Colonnes",
            9: "Problème Combiné (Paramètre, Rang & Inverse)"
        };

        this.openSetupModal({
            title: `🧮 Déterminants — Niv ${level} : ${levelNames[level] || ''}`,
            notion: 'déterminants',
            mode: 'generator',
            generatorFn: () => window.DeterminantGenerators.generate(level)
        });
    },

    startSeriesLevel(level, directTarget = null) {
        if (directTarget !== null) {
            this.launchDirect({
                mode: 'generator',
                generatorFn: () => window.SeriesGenerators.generate(level)
            }, directTarget);
            return;
        }

        this.openSetupModal({
            title: `📈 Séries Numériques — Niveau ${level}`,
            notion: 'séries',
            mode: 'generator',
            generatorFn: () => window.SeriesGenerators.generate(level)
        });
    },

    startAlgebraLevel(level, directTarget = null) {
        if (directTarget !== null) {
            this.launchDirect({
                mode: 'generator',
                generatorFn: () => window.AlgebraGenerators.generate(level)
            }, directTarget);
            return;
        }

        this.openSetupModal({
            title: `📐 Algèbre Linéaire — Niveau ${level}`,
            notion: 'matrice',
            mode: 'generator',
            generatorFn: () => window.AlgebraGenerators.generate(level)
        });
    },

    startCSLevel(lang, level, directTarget = null) {
        if (directTarget !== null) {
            this.launchDirect({
                mode: 'generator',
                generatorFn: () => window.CSGenerators.generate(lang, level)
            }, directTarget);
            return;
        }

        const langTitle = lang === 'python' ? '🐍 Python' : '⚙️ Langage C';
        this.openSetupModal({
            title: `${langTitle} — Niveau ${level}`,
            notion: lang === 'python' ? 'python' : 'langage c',
            mode: 'generator',
            generatorFn: () => window.CSGenerators.generate(lang, level)
        });
    },

    startTargetedConcept(concept, mode = 'all', directTarget = null) {
        if (directTarget !== null) {
            this.launchDirect({
                mode: 'targeted',
                notion: concept,
                title: concept
            }, directTarget);
            return;
        }

        this.openSetupModal({
            title: `🎯 ${concept}`,
            notion: concept,
            mode: 'targeted'
        });
    },

    startSmartSession(minutes) {
        const target = minutes === 0 ? Infinity : minutes;
        window.AdaptiveSessionEngine.startSession({
            mode: minutes === 0 ? 'free' : 'smart',
            durationMinutes: minutes,
            totalTarget: minutes === 0 ? Infinity : target
        });
        this.openPlayer();
    },

    startWeaknessSession() {
        this.openSetupModal({
            title: '🔥 Remédiation sur mes Faiblesses',
            notion: 'faiblesses',
            mode: 'weakness'
        });
    },

    // ========================================================================
    // MODALE DE CONFIGURATION RAPIDE & CRÉATION SUR MESURE
    // ========================================================================
    openSetupModal(config) {
        this.currentConfig = config;
        const modal = document.getElementById('workout-config-modal');
        const modalBody = document.getElementById('workout-config-modal-body');
        if (!modal || !modalBody) return;

        const presetCounts = [5, 10, 20, 30, 50, 100];
        const initialCount = config.forceCount || 10;

        modalBody.innerHTML = `
            <div class="config-modal-content">
                <div class="config-modal-header">
                    <h3>⚡ Configuration de la Séance</h3>
                    <button type="button" class="config-close-btn" onclick="WorkoutView.closeConfigModal()">✕</button>
                </div>
                
                <p class="config-modal-subtitle">${config.title || 'Séance d\'entraînement'}</p>

                <div class="config-section">
                    <label class="config-label">Nombre d'exercices à réaliser :</label>
                    <div class="count-pills-selector" id="setup-count-pills">
                        ${presetCounts.map(n => `
                            <button type="button" class="count-pill-btn ${n === initialCount ? 'active' : ''}" onclick="WorkoutView.selectCountPill(${n})">${n}</button>
                        `).join('')}
                        <button type="button" class="count-pill-btn" onclick="WorkoutView.selectCountPill(0)">∞ (Libre)</button>
                    </div>
                    <div class="config-custom-row">
                        <span>Ou nombre précis :</span>
                        <input type="number" id="setup-custom-count" class="config-custom-input" min="1" max="500" value="${initialCount}">
                    </div>
                </div>

                <div class="config-modal-actions">
                    <button type="button" class="action-btn secondary" onclick="WorkoutView.closeConfigModal()">Annuler</button>
                    <button type="button" class="action-btn primary" onclick="WorkoutView.launchConfiguredSession()">Démarrer la séance →</button>
                </div>
            </div>
        `;

        modal.style.display = 'block';
        modal.classList.remove('hidden');
    },

    openCustomSessionModal() {
        const modal = document.getElementById('workout-config-modal');
        const modalBody = document.getElementById('workout-config-modal-body');
        if (!modal || !modalBody) return;

        modalBody.innerHTML = `
            <div class="config-modal-content">
                <div class="config-modal-header">
                    <h3>⚙️ Créer Mon Entraînement Sur Mesure</h3>
                    <button type="button" class="config-close-btn" onclick="WorkoutView.closeConfigModal()">✕</button>
                </div>

                <div class="config-section">
                    <label class="config-label">Matière principale :</label>
                    <select id="custom-sess-subject" class="config-select">
                        <option value="Algèbre Linéaire">📐 Algèbre Linéaire</option>
                        <option value="Analyse">📈 Analyse & Séries</option>
                        <option value="Informatique">💻 Informatique (Python & C)</option>
                        <option value="Probabilités">🎲 Probabilités</option>
                    </select>
                </div>

                <div class="config-section">
                    <label class="config-label">Difficulté ciblée :</label>
                    <select id="custom-sess-diff" class="config-select">
                        <option value="all">Tous niveaux (Progression adaptative)</option>
                        <option value="easy">Niveaux 1 à 3 (Fondamentaux)</option>
                        <option value="medium">Niveaux 4 à 6 (Intermédiaire universitaire)</option>
                        <option value="hard">Niveaux 7 à 9 (Excellence & Concours)</option>
                    </select>
                </div>

                <div class="config-section">
                    <label class="config-label">Volume de la séance :</label>
                    <div class="count-pills-selector" id="setup-count-pills">
                        ${[5, 10, 20, 30, 50].map(n => `
                            <button type="button" class="count-pill-btn ${n === 10 ? 'active' : ''}" onclick="WorkoutView.selectCountPill(${n})">${n}</button>
                        `).join('')}
                        <button type="button" class="count-pill-btn" onclick="WorkoutView.selectCountPill(0)">∞ (Libre)</button>
                    </div>
                </div>

                <div class="config-modal-actions">
                    <button type="button" class="action-btn secondary" onclick="WorkoutView.closeConfigModal()">Annuler</button>
                    <button type="button" class="action-btn primary" onclick="WorkoutView.launchCustomCreatedSession()">Lancer la séance sur mesure →</button>
                </div>
            </div>
        `;

        modal.style.display = 'block';
        modal.classList.remove('hidden');
    },

    selectCountPill(n) {
        document.querySelectorAll('.count-pill-btn').forEach(b => b.classList.remove('active'));
        const targetBtn = Array.from(document.querySelectorAll('.count-pill-btn')).find(b => {
            return n === 0 ? b.innerText.includes('∞') : b.innerText.trim() === String(n);
        });
        if (targetBtn) targetBtn.classList.add('active');

        const customIn = document.getElementById('setup-custom-count');
        if (customIn && n > 0) customIn.value = n;
    },

    closeConfigModal() {
        const modal = document.getElementById('workout-config-modal');
        if (modal) {
            modal.style.display = 'none';
            modal.classList.add('hidden');
        }
        this.currentConfig = null;
    },

    launchConfiguredSession() {
        const customIn = document.getElementById('setup-custom-count');
        let count = customIn ? Number.parseInt(customIn.value, 10) : 10;
        const activePill = document.querySelector('.count-pill-btn.active');
        if (activePill && activePill.innerText.includes('∞')) count = 0;

        const config = this.currentConfig || {};
        this.closeConfigModal();

        this.launchDirect(config, count);
    },

    launchCustomCreatedSession() {
        const sub = document.getElementById('custom-sess-subject')?.value || 'Algèbre Linéaire';
        const activePill = document.querySelector('.count-pill-btn.active');
        let count = 10;
        if (activePill) {
            count = activePill.innerText.includes('∞') ? 0 : (Number.parseInt(activePill.innerText, 10) || 10);
        }
        this.closeConfigModal();

        this.launchDirect({
            mode: 'targeted',
            notion: sub,
            title: sub
        }, count);
    },

    launchDirect(config, count) {
        const isFree = count === 0;
        const target = isFree ? Infinity : count;

        let contextObj = config.context || null;
        if (!contextObj && window.PedagogicalContext) {
            contextObj = window.PedagogicalContext.createContext({
                subjectId: config.subject,
                chapterId: config.chapter,
                notionId: config.notion,
                trainingFamily: config.trainingFamily || 'calculation',
                difficulty: config.difficulty || 5,
                mode: config.mode || 'targeted'
            });
        }

        window.AdaptiveSessionEngine.startSession({
            mode: config.mode || 'targeted',
            notion: config.notion,
            targetConcept: config.notion,
            context: contextObj,
            subject: config.subject,
            chapter: config.chapter,
            totalTarget: target,
            generatorFn: config.generatorFn,
            trainingFamily: config.trainingFamily || contextObj?.trainingFamily || 'calculation',
            difficulty: config.difficulty || contextObj?.difficulty || 5,
            isFreeMode: isFree
        });

        this.openPlayer();
    },

    // ========================================================================
    // LECTEUR D'ENTRAÎNEMENT & WORKFLOW D'EXÉCUTION
    // ========================================================================
    openPlayer() {
        document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
        const playerView = document.getElementById('workout-player-view');
        if (playerView) {
            playerView.classList.remove('hidden');
            const sessionScreen = document.getElementById('workout-session-screen');
            const summaryScreen = document.getElementById('workout-summary-screen');
            if (sessionScreen) sessionScreen.classList.remove('hidden');
            if (summaryScreen) summaryScreen.classList.add('hidden');
        }
        this.renderCurrentExercise();
    },

    renderCurrentExercise() {
        const session = window.AdaptiveSessionEngine.currentSession;
        if (!session || window.AdaptiveSessionEngine.isSessionFinished()) {
            this.renderSummary();
            return;
        }

        const current = window.AdaptiveSessionEngine.getCurrentExercise();
        if (!current) {
            this.renderSummary();
            return;
        }

        const sessionScreen = document.getElementById('workout-session-screen');
        const summaryScreen = document.getElementById('workout-summary-screen');
        if (sessionScreen) sessionScreen.classList.remove('hidden');
        if (summaryScreen) summaryScreen.classList.add('hidden');

        // Application de l'identité visuelle de la famille d'entraînement
        const playerView = document.getElementById('workout-player-view');
        const family = session.context?.trainingFamily || session.trainingFamily || current.data?.trainingFamily || 'calculation';
        const familyClass = `training-${family.replace(/_/g, '-')}`;
        if (playerView) {
            playerView.className = `view workout-player-view ${familyClass}`;
        }

        // Fil d'Ariane persistant
        const breadcrumbEl = document.getElementById('workout-breadcrumb-trail');
        if (breadcrumbEl) {
            breadcrumbEl.textContent = session.context?.breadcrumb || `${session.targetConcept || 'Entraînement'} › Niv.${session.difficulty || 5}`;
        }

        // Barre d'état
        const totalStr = session.isFreeMode ? '∞ (Libre)' : session.totalTarget;
        const progressEl = document.getElementById('workout-progress-indicator');
        if (progressEl) progressEl.textContent = `Exercice ${session.currentIndex + 1} / ${totalStr}`;

        const subjectTag = document.getElementById('workout-subject-tag');
        if (subjectTag) {
            subjectTag.textContent = current.data.tags ? current.data.tags.slice(0, 2).join(' • ') : (current.data._discipline || 'Entraînement');
        }

        const remBadge = document.getElementById('workout-remediation-badge');
        if (remBadge) {
            if (current.data.isRemediation) remBadge.classList.remove('hidden');
            else remBadge.classList.add('hidden');
        }

        // Rendu de l'exercice
        const container = document.getElementById('workout-exercise-container');
        if (container) current.instance.render(container);

        // Boutons
        const validateBtn = document.getElementById('workout-validate-btn');
        const nextBtn = document.getElementById('workout-next-btn');
        if (validateBtn) {
            validateBtn.classList.remove('hidden');
            validateBtn.disabled = false;
        }
        if (nextBtn) nextBtn.classList.add('hidden');

        // Reset de la boîte d'indice et du feedback
        const hintBox = document.getElementById('workout-hint-box');
        if (hintBox) {
            hintBox.innerHTML = '';
            hintBox.classList.add('hidden');
        }
        const hintBtn = document.getElementById('workout-hint-btn');
        if (hintBtn) {
            hintBtn.classList.remove('hidden');
            hintBtn.textContent = '💡 Indice progressif';
            hintBtn.disabled = false;
        }

        const feedbackContainer = document.getElementById('workout-feedback-container');
        if (feedbackContainer) feedbackContainer.innerHTML = '';

        if (window.renderMath && container) window.renderMath([container]);
    },

    requestProgressiveHint() {
        const session = window.AdaptiveSessionEngine?.currentSession;
        if (!session) return;
        const current = window.AdaptiveSessionEngine.getCurrentExercise();
        if (!current) return;

        session.currentHintsUsed = (session.currentHintsUsed || 0) + 1;
        const hintLevel = session.currentHintsUsed;

        const hintBox = document.getElementById('workout-hint-box');
        const hintBtn = document.getElementById('workout-hint-btn');
        if (!hintBox) return;

        // Échelle d'indices progressifs
        const ex = current.data;
        let hintText = '';

        if (hintLevel === 1) {
            // Indice 1 : Piste conceptuelle discrète
            hintText = `<strong>Indice 1 (Piste) :</strong> Observez attentivement la forme de l'objet (valeurs diagonales, zéros, symétries ou définitions fondamentales). Quel théorème fondamental relie cette configuration à la conclusion cherchée ?`;
            if (hintBtn) hintBtn.textContent = '💡 Indice 2 (Méthode)';
        } else if (hintLevel === 2) {
            // Indice 2 : Méthode explicitée
            if (ex.explanation) {
                // Donne les 40 premiers pourcents de l'explication sans donner la réponse brute
                const snip = ex.explanation.split('.')[0] || ex.explanation.slice(0, 100);
                hintText = `<strong>Indice 2 (Méthode amorcée) :</strong> ${snip}. Poursuivez ce calcul pour obtenir la réponse exacte.`;
            } else {
                hintText = `<strong>Indice 2 (Méthode) :</strong> Posez explicitement l'équation ou le système associé pour isoler la grandeur inconnue.`;
            }
            if (hintBtn) {
                hintBtn.textContent = '💡 Indice 3 (Démarche complète)';
            }
        } else {
            // Indice 3 : Démarche presque complète
            hintText = `<strong>Indice 3 (Démarche détaillée) :</strong> ${ex.explanation || 'Vérifiez les calculs terme à terme.'}`;
            if (hintBtn) {
                hintBtn.disabled = true;
                hintBtn.textContent = 'Indice maximal affiché';
            }
        }

        hintBox.innerHTML = hintText;
        hintBox.classList.remove('hidden');
        if (window.renderMath) window.renderMath([hintBox]);
    },

    validateCurrentExercise() {
        const session = window.AdaptiveSessionEngine.currentSession;
        if (!session || !session.currentExerciseInstance) return;

        const res = session.currentExerciseInstance.validate();
        if (res.error) {
            if (window.customAlert) window.customAlert('Attention', res.error);
            return;
        }

        // Enregistre le résultat SANS terminer la séance
        window.AdaptiveSessionEngine.processAnswer(res);

        // Affiche le feedback enrichi avec +XP
        const feedbackContainer = document.getElementById('workout-feedback-container');
        if (feedbackContainer) session.currentExerciseInstance.displayFeedback(feedbackContainer, res);

        // Affiche le bouton "Exercice suivant →"
        const validateBtn = document.getElementById('workout-validate-btn');
        const nextBtn = document.getElementById('workout-next-btn');
        if (validateBtn) validateBtn.classList.add('hidden');
        if (nextBtn) {
            nextBtn.classList.remove('hidden');
            nextBtn.focus();
        }

        if (window.renderMath && feedbackContainer) window.renderMath([feedbackContainer]);
    },

    nextExercise() {
        const hasNext = window.AdaptiveSessionEngine.next();
        if (!hasNext || window.AdaptiveSessionEngine.isSessionFinished()) {
            this.renderSummary();
        } else {
            this.renderCurrentExercise();
        }
    },

    quitSession() {
        // ZÉRO POPUP INUTILE : Sauvegarde automatique transparente et retour immédiat
        if (window.AdaptiveSessionEngine) {
            window.AdaptiveSessionEngine.autoSaveSession();
        }
        // Ferme le clavier mathématique s'il était ouvert pour libérer l'espace
        if (window.MathKeyboard) {
            window.MathKeyboard.collapse();
        }
        this.returnToHub();
    },

    renderSummary() {
        // La séance étant achevée, effacer la sauvegarde de reprise de session active
        if (window.AdaptiveSessionEngine) {
            window.AdaptiveSessionEngine.clearSavedSession();
        }
        if (window.MathKeyboard) {
            window.MathKeyboard.collapse();
        }
        const sessionScreen = document.getElementById('workout-session-screen');
        const summaryScreen = document.getElementById('workout-summary-screen');
        if (sessionScreen) sessionScreen.classList.add('hidden');
        if (!summaryScreen) return;
        summaryScreen.classList.remove('hidden');

        const session = window.AdaptiveSessionEngine.currentSession;
        const stats = session ? session.stats : { totalAnswered: 0, correctCount: 0, partialCount: 0, earnedXP: 0 };
        const rate = stats.totalAnswered > 0 ? Math.round((stats.correctCount / stats.totalAnswered) * 100) : 0;

        summaryScreen.innerHTML = `
            <div class="workout-summary-card">
                <div class="summary-header">
                    <span class="summary-icon">🏆</span>
                    <h2>Bilan de la Séance d'Entraînement</h2>
                    <p>Vos performances ont été enregistrées sur votre compte.</p>
                </div>

                <div class="summary-stats-grid">
                    <div class="summary-stat-box">
                        <span class="stat-number text-success">+${stats.earnedXP || 0} XP</span>
                        <span class="stat-label">XP Réelle Gagnée</span>
                    </div>
                    <div class="summary-stat-box">
                        <span class="stat-number">${stats.correctCount} / ${stats.totalAnswered}</span>
                        <span class="stat-label">Exercices Réussis</span>
                    </div>
                    <div class="summary-stat-box">
                        <span class="stat-number ${rate >= 75 ? 'text-success' : rate >= 50 ? 'text-warning' : 'text-danger'}">${rate}%</span>
                        <span class="stat-label">Taux d'Exactitude</span>
                    </div>
                </div>

                <div class="summary-actions">
                    <button type="button" class="action-btn secondary" onclick="WorkoutView.returnToHub()">
                        ← Retour au Hub Entraînement
                    </button>
                    <button type="button" class="action-btn primary" onclick="WorkoutView.resumeLastPractice()">
                        🔄 Enchaîner une nouvelle série
                    </button>
                </div>
            </div>
        `;
    },

    returnToHub() {
        if (window.showView) window.showView('workout-hub-view');
        this.renderHub();
    },

    // ========================================================================
    // RACCOURCIS CLAVIER PHYSIQUES (PRODUCTIVITÉ UNIVERSITAIRE DESKTOP)
    // Entrée : Valider / Passer à l'exercice suivant
    // Échap : Réduire le clavier mathématique virtuel
    // Alt + H : Déclencher l'indice progressif
    // Alt + K : Toggle clavier mathématique
    // ========================================================================
    initGlobalShortcuts() {
        if (this._shortcutsInitialized) return;
        this._shortcutsInitialized = true;

        document.addEventListener('keydown', (e) => {
            // Uniquement si nous sommes sur le lecteur d'entraînement visible
            const playerView = document.getElementById('workout-player-view');
            if (!playerView || playerView.classList.contains('hidden')) return;

            // Ne pas intercepter Entrée à l'intérieur d'un textarea de code
            const isTextarea = e.target && e.target.tagName === 'TEXTAREA';

            // 1. Touche Échap -> Réduire le clavier virtuel
            if (e.key === 'Escape') {
                if (window.MathKeyboard && window.MathKeyboard.isExpanded) {
                    e.preventDefault();
                    window.MathKeyboard.collapse();
                }
                return;
            }

            // 2. Alt + H -> Indice progressif
            if (e.altKey && (e.key === 'h' || e.key === 'H')) {
                e.preventDefault();
                const hintBtn = document.getElementById('workout-hint-btn');
                if (hintBtn && !hintBtn.classList.contains('hidden') && !hintBtn.disabled) {
                    WorkoutView.requestProgressiveHint();
                }
                return;
            }

            // 3. Alt + K -> Toggle clavier virtuel
            if (e.altKey && (e.key === 'k' || e.key === 'K')) {
                e.preventDefault();
                if (window.MathKeyboard) window.MathKeyboard.toggle();
                return;
            }

            // 4. Touche Entrée (sans Shift) -> Validation ou Exercice suivant
            if (e.key === 'Enter' && !e.shiftKey && !isTextarea) {
                const nextBtn = document.getElementById('workout-next-btn');
                const valBtn = document.getElementById('workout-validate-btn');

                if (nextBtn && !nextBtn.classList.contains('hidden')) {
                    e.preventDefault();
                    WorkoutView.nextExercise();
                } else if (valBtn && !valBtn.classList.contains('hidden') && !valBtn.disabled) {
                    e.preventDefault();
                    WorkoutView.validateCurrentExercise();
                }
            }
        });
    }
};

if (typeof window !== 'undefined') {
    window.WorkoutView = WorkoutView;
    if (typeof document !== 'undefined') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => WorkoutView.initGlobalShortcuts());
        } else {
            WorkoutView.initGlobalShortcuts();
        }
    }
}
