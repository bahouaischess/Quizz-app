// ============================================================================
// AdaptiveSessionEngine - Moteur de Session Adaptative & Gestionnaire de Cycle de Vie
// Sépare strictement :
// 1. État exercice en cours
// 2. État exercice validé (exerciseCompleted = true)
// 3. Passage à l'exercice suivant (next())
// 4. État séance terminée (sessionCompleted = true, UNIQUEMENT à la fin des N exercices)
// ============================================================================

const AdaptiveSessionEngine = {
    currentSession: null,

    // Initialise une session complète avec un objectif d'exercices précis
    // totalTarget: nombre total d'exercices choisi par l'utilisateur (5, 10, 20, 30, 50, 100, ou Infinity en mode libre)
    startSession({
        mode = 'smart',
        targetConcept = null,
        notion = null,
        context = null,
        subject = null,
        chapter = null,
        durationMinutes = 20,
        totalTarget = null,
        generatorFn = null,
        difficulty = 'adaptive',
        cognitiveType = 'all',
        trainingFamily = 'calculation'
    }) {
        let targetCount = totalTarget;
        let isFree = false;

        if (durationMinutes === 0 || mode === 'free') {
            isFree = true;
            targetCount = Infinity;
        } else if (!targetCount) {
            if (durationMinutes === 10) targetCount = 10;
            else if (durationMinutes === 20) targetCount = 20;
            else if (durationMinutes === 30) targetCount = 30;
            else targetCount = 10;
        }

        const effectiveNotion = targetConcept || notion || (context ? (context.notionId || context.chapterId) : null);
        const effectiveSub = subject || (context ? context.subjectId : null);
        const effectiveChap = chapter || (context ? context.chapterId : null);
        const numDifficulty = Number(difficulty) || 5;

        let pedagogicalCtx = null;
        if (window.PedagogicalContext) {
            if (context && context.subjectId) {
                pedagogicalCtx = window.PedagogicalContext.createContext(context);
            } else {
                pedagogicalCtx = window.PedagogicalContext.createContext({
                    subjectId: effectiveSub,
                    chapterId: effectiveChap,
                    notionId: effectiveNotion,
                    trainingFamily: trainingFamily || 'calculation',
                    difficulty: numDifficulty,
                    mode
                });
            }
        }

        // Constitution de la file initiale
        const initialQueue = this.buildInitialQueue({
            mode,
            targetConcept: effectiveNotion,
            targetCount,
            generatorFn,
            difficulty: numDifficulty,
            cognitiveType,
            context: pedagogicalCtx
        });

        this.currentSession = {
            id: `session-${Date.now()}`,
            mode,
            targetConcept: effectiveNotion,
            context: pedagogicalCtx,
            totalTarget: targetCount,
            difficulty: numDifficulty,
            cognitiveType,
            trainingFamily: pedagogicalCtx?.trainingFamily || trainingFamily,
            isFreeMode: isFree,
            durationMs: (!isFree && durationMinutes > 0) ? durationMinutes * 60 * 1000 : null,
            startedAt: Date.now(),
            generatorFn,

            queue: initialQueue,
            currentIndex: 0,
            currentExerciseInstance: null,

            // Séparation explicite des états
            exerciseCompleted: false, // Devient true seulement après validation de l'exercice actuel
            sessionCompleted: false,  // Devient true UNIQUEMENT quand tous les exercices sont achevés
            status: 'active',         // 'active' | 'completed' | 'abandoned'

            history: [],
            stats: {
                totalAnswered: 0,
                correctCount: 0,
                partialCount: 0,
                diagnosedErrors: []
            },
            remediationPending: null
        };

        return this.currentSession;
    },

    // Construit la file d'attente initiale avec garantie d'exercices suffisants et étanchéité pédagogique
    buildInitialQueue({ mode, targetConcept, targetCount, generatorFn, context }) {
        const queue = [];

        // 1. Session basée sur un générateur procédural dédié
        if (generatorFn && typeof generatorFn === 'function') {
            const initialCount = Math.min(targetCount === Infinity ? 10 : targetCount, 15);
            for (let i = 0; i < initialCount; i++) {
                const ex = generatorFn();
                if (ex) {
                    if (window.PedagogicalContext) window.PedagogicalContext.tagExercise(ex, context);
                    queue.push(ex);
                }
            }
            return queue;
        }

        // 2. Session ciblée sur une notion précise ou sous contexte strict
        if ((mode === 'targeted' || context?.notionId || context?.subjectId) && window.ConceptEngine) {
            const conceptQuery = targetConcept || context?.notionId || context?.chapterId;
            const conceptPool = window.ConceptEngine.getExercisesForConcept(conceptQuery, context?.trainingFamily || 'all', targetCount, context);
            
            conceptPool.forEach(ex => {
                if (!context || (window.PedagogicalContext && window.PedagogicalContext.isExerciseCompatible(ex, context))) {
                    if (window.PedagogicalContext) window.PedagogicalContext.tagExercise(ex, context);
                    queue.push(ex);
                }
            });

            // Si le pool contient moins d'exercices que l'objectif, le compléter par des variantes de la même matière
            if (queue.length < targetCount && targetCount !== Infinity) {
                const variants = window.ConceptEngine.getProceduralVariants(conceptQuery, context?.trainingFamily || 'all', context);
                variants.forEach(ex => {
                    if (!context || (window.PedagogicalContext && window.PedagogicalContext.isExerciseCompatible(ex, context))) {
                        if (window.PedagogicalContext) window.PedagogicalContext.tagExercise(ex, context);
                        queue.push(ex);
                    }
                });
            }
            if (queue.length > 0) return queue;
        }

        // 3. Session sur les faiblesses prioritaires
        if (mode === 'weakness' && window.MasteryTracker) {
            const topWeak = window.MasteryTracker.getTopWeaknesses(5);
            topWeak.forEach(w => {
                if (window.ConceptEngine) {
                    const exs = window.ConceptEngine.getExercisesForConcept(w.label, 'all', 3, context);
                    exs.forEach(ex => {
                        if (!context || (window.PedagogicalContext && window.PedagogicalContext.isExerciseCompatible(ex, context))) {
                            if (window.PedagogicalContext) window.PedagogicalContext.tagExercise(ex, context);
                            queue.push(ex);
                        }
                    });
                }
            });
            if (queue.length > 0) return this.shuffle(queue);
        }

        // 4. Session de révisions SM-2 (filtrée par contexte si présent)
        if (mode === 'sm2') {
            const now = Date.now();
            const allQ = this.getAllCourseQuestions(context);
            const due = allQ.filter(q => !q.sm2?.nextReview || q.sm2.nextReview <= now);
            if (due.length > 0) return this.shuffle(due);
        }

        // 5. Session Standard / Mixte (Toujours restreinte à la matière si contexte présent !)
        const allQuestions = this.getAllCourseQuestions(context);
        const now = Date.now();
        const weak = allQuestions.filter(q => (q.stats?.attempts || 0) >= 1 && (q.stats.correct / q.stats.attempts) < 0.6);
        const due = allQuestions.filter(q => !q.sm2?.nextReview || q.sm2.nextReview <= now);
        const unseen = allQuestions.filter(q => (q.stats?.attempts || 0) === 0);

        // Intégration de variantes procédurales STRICTEMENT compatibles
        if (!context || context.subjectId === 'analyse') {
            if (window.SeriesGenerators) queue.push(window.SeriesGenerators.generate(2), window.SeriesGenerators.generate(3));
        }
        if (!context || context.subjectId === 'algebre') {
            if (window.AlgebraGenerators) queue.push(window.AlgebraGenerators.generate(2), window.AlgebraGenerators.generate(4));
        }
        if (!context || context.subjectId === 'informatique') {
            const lang = context?.chapterId === 'python' ? 'python' : 'c';
            if (window.CSGenerators) queue.push(window.CSGenerators.generate(lang, 2));
        }

        queue.push(...this.shuffle(weak).slice(0, 5));
        queue.push(...this.shuffle(due).slice(0, 5));
        queue.push(...this.shuffle(unseen).slice(0, 10));

        const filteredQueue = context ? queue.filter(ex => window.PedagogicalContext.isExerciseCompatible(ex, context)) : queue;
        return (filteredQueue.length > 0 ? this.shuffle(filteredQueue) : this.shuffle(allQuestions));
    },

    getAllCourseQuestions(context = null) {
        const list = [];
        const appData = window.appData || window.defaultData || {};
        Object.keys(appData).forEach(sub => {
            if (sub.startsWith('_') || appData[sub]?.deleted) return;
            (appData[sub].questions || []).forEach(q => {
                const ex = { ...q, subjectKey: sub, id: q.id || `${sub}-${q.q.slice(0, 20)}` };
                if (!context || (window.PedagogicalContext && window.PedagogicalContext.isExerciseCompatible(ex, context))) {
                    if (window.PedagogicalContext) window.PedagogicalContext.tagExercise(ex, context);
                    list.push(ex);
                }
            });
        });
        return list;
    },

    // Récupère l'exercice courant ou en génère un nouveau si la file a besoin de carburant
    getCurrentExercise() {
        const session = this.currentSession;
        if (!session) return null;

        // Si la session est déjà terminée
        if (session.sessionCompleted) return null;

        // Si l'index dépasse la file existante, vérifier si on peut générer de nouveaux exercices
        if (session.currentIndex >= session.queue.length) {
            // Mode générateur ou mode libre ou objectif non atteint
            if (session.generatorFn) {
                const freshEx = session.generatorFn();
                session.queue.push(freshEx);
            } else if (session.isFreeMode || session.currentIndex < session.totalTarget) {
                // Génère une nouvelle variante procédurale
                const freshEx = this.generateDynamicExercise(session);
                session.queue.push(freshEx);
            } else {
                // Fin normale de la session
                session.sessionCompleted = true;
                session.status = 'completed';
                return null;
            }
        }

        const qData = session.queue[session.currentIndex];
        if (!qData) {
            session.sessionCompleted = true;
            session.status = 'completed';
            return null;
        }

        const instance = window.ExerciseRegistry.create(qData);
        session.currentExerciseInstance = instance;
        return { data: qData, instance };
    },

    // ========================================================================
    // ÉTAT 1 : VALIDATION DE L'EXERCICE ACTUEL
    // NE TERMINE JAMAIS LA SÉANCE !
    // ========================================================================
    processAnswer(validationResult) {
        const session = this.currentSession;
        if (!session) return;

        const currentExData = session.queue[session.currentIndex];
        session.stats.totalAnswered++;

        // Marque l'exercice actuel comme complété
        session.exerciseCompleted = true;

        if (validationResult.isCorrect) {
            session.stats.correctCount++;
        } else if (validationResult.isPartial) {
            session.stats.partialCount++;
        }

        // Enregistrement de la maîtrise dans MasteryTracker
        if (window.MasteryTracker) {
            const conceptKey = currentExData._conceptKey || currentExData.conceptId || (currentExData.tags && currentExData.tags[0]) || 'Général';
            window.MasteryTracker.recordAttempt(conceptKey, validationResult.isCorrect, {
                conceptLabel: currentExData._concept || (currentExData.tags && currentExData.tags[0]),
                discipline: currentExData._discipline,
                chapter: currentExData._chapter,
                errorCategory: validationResult.diagnostic?.category?.label
            });
        }

        // Historique
        session.history.push({
            exerciseId: currentExData.id,
            type: currentExData.type,
            isCorrect: validationResult.isCorrect,
            isPartial: validationResult.isPartial,
            diagnostic: validationResult.diagnostic,
            timestamp: Date.now()
        });

        // Remédiation ciblée en cas d'erreur : insertion après l'exercice actuel
        if (!validationResult.isCorrect && validationResult.diagnostic) {
            const diag = validationResult.diagnostic;
            session.stats.diagnosedErrors.push(diag);

            const remediation = this.findRemediationExercise(currentExData, diag);
            if (remediation) {
                // Insère la remédiation en position suivante
                session.queue.splice(session.currentIndex + 1, 0, remediation);
            }
        }

        // Calcul et persistance de l'XP selon la difficulté et le travail réel
        const XP_MAP = {
            1: 10,
            2: 15,
            3: 25,
            4: 35,
            5: 50,
            6: 70,
            7: 100,
            8: 125,
            9: 150
        };
        const difficulty = currentExData?.difficulty || 1;
        const baseXP = XP_MAP[difficulty] || (difficulty >= 9 ? 150 : 20);

        let multiplier = 1.0;
        const attempts = session.currentAttempts || 1;
        const hintsUsed = session.currentHintsUsed || (validationResult.hintsUsed || 0);

        if (!validationResult.isCorrect && !validationResult.isPartial) {
            multiplier = 0;
        } else if (validationResult.isPartial) {
            multiplier = 0.3;
        } else {
            if (hintsUsed > 0) multiplier *= 0.6;
            if (attempts === 2) multiplier *= 0.5;
            else if (attempts === 3) multiplier *= 0.25;
            else if (attempts > 3) multiplier *= 0.1;
        }

        const earnedXP = Math.round(baseXP * multiplier);
        validationResult.xpEarned = earnedXP;
        session.stats.earnedXP = (session.stats.earnedXP || 0) + earnedXP;

        if (earnedXP > 0 && window.addXP) {
            window.addXP(earnedXP, 'workout');
        }

        // Enregistrement des performances détaillées dans appData._workoutHistory
        const appDataRef = window.appData || {};
        if (!Array.isArray(appDataRef._workoutHistory)) {
            appDataRef._workoutHistory = [];
        }
        const timeSpentSeconds = Math.max(1, Math.round((Date.now() - (session.currentStartedAt || Date.now())) / 1000));
        appDataRef._workoutHistory.push({
            exerciseId: currentExData?.id || `ex-${Date.now()}`,
            notion: currentExData?._concept || (currentExData?.tags && currentExData?.tags[0]) || 'Général',
            chapter: currentExData?._chapter || currentExData?.discipline || 'Mathématiques',
            difficulty: difficulty,
            type: currentExData?.type || 'numeric_input',
            correct: Boolean(validationResult.isCorrect),
            attempts: attempts,
            timeSpent: timeSpentSeconds,
            hintsUsed: hintsUsed,
            xpEarned: earnedXP,
            timestamp: Date.now()
        });
        if (appDataRef._workoutHistory.length > 500) {
            appDataRef._workoutHistory = appDataRef._workoutHistory.slice(-500);
        }

        // Enregistrement de la maîtrise, du calcul, du raisonnement et de l'autonomie
        if (window.MasteryTracker) {
            const conceptKey = currentExData?._concept || (currentExData?.tags && currentExData?.tags[0]) || 'Général';
            window.MasteryTracker.recordAttempt(conceptKey, Boolean(validationResult.isCorrect), {
                conceptLabel: conceptKey,
                discipline: currentExData?.discipline || 'Mathématiques',
                chapter: currentExData?._chapter || '',
                trainingFamily: session.context?.trainingFamily || session.trainingFamily || currentExData?.trainingFamily,
                autonomyLevel: currentExData?.autonomyLevel || (hintsUsed > 0 ? 'guided' : (currentExData?.type === 'multi_step' ? 'semi_guided' : 'autonomous')),
                type: currentExData?.type,
                hintsUsed: hintsUsed,
                errorCategory: validationResult.errorType || (validationResult.isCorrect ? null : 'calcul_erreur')
            });
        }

        // Activité globale pour la série de révisions
        if (window.recordActivity && currentExData) {
            window.recordActivity(currentExData._chapter || 'Entraînement', currentExData, validationResult);
        }

        // Mise à jour de SM-2
        this.updateSM2Progress(currentExData, validationResult);
    },

    // ========================================================================
    // ÉTAT 2 : PASSAGE À L'EXERCICE SUIVANT
    // Incrémente l'index et prépare le prochain exercice
    // ========================================================================
    next() {
        const session = this.currentSession;
        if (!session) return false;

        // 1. Incrémente l'index
        session.currentIndex++;
        // 2. Réinitialise l'état de complétion pour le nouvel exercice
        session.exerciseCompleted = false;

        // 3. Vérification du temps imparti
        if (session.durationMs && (Date.now() - session.startedAt >= session.durationMs)) {
            session.sessionCompleted = true;
            session.status = 'completed';
            return false;
        }

        // 4. Vérification de l'objectif d'exercices (si pas en mode libre)
        if (!session.isFreeMode && session.currentIndex >= session.totalTarget) {
            session.sessionCompleted = true;
            session.status = 'completed';
            return false;
        }

        // 5. Approvisionnement de la file si besoin
        if (session.currentIndex >= session.queue.length) {
            if (session.generatorFn) {
                session.queue.push(session.generatorFn());
            } else if (session.isFreeMode || session.currentIndex < session.totalTarget) {
                session.queue.push(this.generateDynamicExercise(session));
            } else {
                session.sessionCompleted = true;
                session.status = 'completed';
                return false;
            }
        }

        return true;
    },

    // ========================================================================
    // ÉTAT 3 : LA SÉANCE EST-ELLE ACHEVÉE ?
    // ========================================================================
    isSessionFinished() {
        const session = this.currentSession;
        if (!session) return true;
        return Boolean(session.sessionCompleted);
    },

    // Quitter volontairement l'entraînement en cours (distinct de terminée)
    quitSession() {
        const session = this.currentSession;
        if (session) {
            session.status = 'abandoned';
            session.sessionCompleted = false;
        }
        this.currentSession = null;
    },

    generateDynamicExercise(session) {
        const ctx = session?.context;
        const diff = ctx?.difficulty || 5;

        // 1. Si le contexte est Algèbre
        if (ctx?.subjectId === 'algebre') {
            if (ctx.notionId === 'determinants' && window.DeterminantGenerators) {
                const ex = window.DeterminantGenerators.generate(diff);
                return window.PedagogicalContext ? window.PedagogicalContext.tagExercise(ex, ctx) : ex;
            }
            if (window.AlgebraGenerators) {
                const ex = window.AlgebraGenerators.generate(diff);
                return window.PedagogicalContext ? window.PedagogicalContext.tagExercise(ex, ctx) : ex;
            }
        }

        // 2. Si le contexte est Analyse
        if (ctx?.subjectId === 'analyse') {
            if (window.SeriesGenerators) {
                const ex = window.SeriesGenerators.generate(Math.min(diff, 7));
                return window.PedagogicalContext ? window.PedagogicalContext.tagExercise(ex, ctx) : ex;
            }
        }

        // 3. Si le contexte est Informatique
        if (ctx?.subjectId === 'informatique') {
            const lang = ctx.chapterId === 'python' ? 'python' : 'c';
            if (window.CSGenerators) {
                const ex = window.CSGenerators.generate(lang, Math.min(diff, 5));
                return window.PedagogicalContext ? window.PedagogicalContext.tagExercise(ex, ctx) : ex;
            }
        }

        // 4. Session globale ou fallback : restreint strictement au contexte si présent
        const coursePool = this.getAllCourseQuestions(ctx);
        if (coursePool.length > 0) {
            const randQ = coursePool[Math.floor(Math.random() * coursePool.length)];
            return window.PedagogicalContext ? window.PedagogicalContext.tagExercise(randQ, ctx) : randQ;
        }

        if (window.AlgebraGenerators) {
            const ex = window.AlgebraGenerators.generate(diff);
            return window.PedagogicalContext ? window.PedagogicalContext.tagExercise(ex, ctx) : ex;
        }

        return { type: 'qcm', q: 'Exercice académique', options: [{ text: 'Valider', isCorrect: true }] };
    },

    findRemediationExercise(failedExercise, diagnostic) {
        const session = this.currentSession;
        const ctx = session?.context;
        const concept = (diagnostic?.remediationConcept || '').toLowerCase();
        const currentSub = ctx?.subjectId || (failedExercise?._discipline || '').toLowerCase();

        // 1. Recherche dans les questions du cours STRICTEMENT dans la même matière
        const appData = window.appData || window.defaultData || {};
        let candidate = null;
        Object.keys(appData).forEach(sub => {
            if (candidate || sub.startsWith('_')) return;
            const questions = appData[sub].questions || [];
            for (const q of questions) {
                if (q.id === failedExercise.id) continue;
                const matchTag = (q.tags || []).some(t => t.toLowerCase().includes(concept));
                const matchText = (q.q || '').toLowerCase().includes(concept);
                if (matchTag || matchText) {
                    const cand = {
                        ...q,
                        subjectKey: sub,
                        isRemediation: true,
                        remediationNote: `Remédiation ciblée : ${diagnostic?.diagnosticLabel || 'consolidation des bases'}`
                    };
                    if (!ctx || (window.PedagogicalContext && window.PedagogicalContext.isExerciseCompatible(cand, ctx))) {
                        candidate = cand;
                        break;
                    }
                }
            }
        });

        if (candidate) return candidate;

        // 2. Génération procédurale STRICTEMENT restreinte à la matière du contexte
        if (currentSub === 'analyse' && window.SeriesGenerators) {
            return {
                ...window.SeriesGenerators.generate(1),
                isRemediation: true,
                remediationNote: "Remédiation : révision des conditions nécessaires et séries de référence."
            };
        }

        if (currentSub === 'algebre' && window.AlgebraGenerators) {
            return {
                ...window.AlgebraGenerators.generate(3), // Systèmes / Noyau / Calcul de base
                isRemediation: true,
                remediationNote: "Remédiation : cette notion nécessite de revoir la résolution de systèmes et le calcul du noyau."
            };
        }

        if (currentSub === 'informatique' && window.CSGenerators) {
            const lang = ctx?.chapterId === 'python' ? 'python' : 'c';
            return {
                ...window.CSGenerators.generate(lang, 1),
                isRemediation: true,
                remediationNote: "Remédiation : consolidation des fondamentaux de la syntaxe et de la mémoire."
            };
        }

        return null;
    },

    updateSM2Progress(exerciseData, result) {
        const appData = window.appData;
        if (!appData || !exerciseData.subjectKey) return;

        const subject = appData[exerciseData.subjectKey];
        if (!subject || !subject.questions) return;

        const original = subject.questions.find(q => q.id === exerciseData.id || q.q === exerciseData.q);
        if (!original) return;

        original.stats = original.stats || { attempts: 0, correct: 0, partial: 0 };
        original.stats.attempts++;
        if (result.isCorrect) original.stats.correct++;
        else if (result.isPartial) original.stats.partial = (original.stats.partial || 0) + 1;

        const quality = result.isCorrect ? 4 : (result.isPartial ? 3 : 0);
        original.sm2 = original.sm2 || { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 };

        if (quality < 3) {
            original.sm2.repetition = 0;
            original.sm2.interval = 0;
            original.sm2.nextReview = Date.now() + 10 * 60 * 1000;
        } else {
            original.sm2.repetition++;
            if (original.sm2.repetition === 1) original.sm2.interval = 1;
            else if (original.sm2.repetition === 2) original.sm2.interval = 3;
            else original.sm2.interval = Math.round(original.sm2.interval * original.sm2.easeFactor);

            original.sm2.nextReview = Date.now() + original.sm2.interval * 24 * 60 * 60 * 1000;
        }

        original.sm2.easeFactor += (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
        if (window.saveData) window.saveData();
    },

    // Sauvegarde automatique transparente de la session active dans localStorage
    autoSaveSession() {
        const session = this.currentSession;
        if (!session || session.sessionCompleted) {
            this.clearSavedSession();
            return;
        }
        try {
            const snapshot = {
                id: session.id,
                mode: session.mode,
                targetConcept: session.targetConcept,
                context: session.context,
                totalTarget: session.totalTarget,
                difficulty: session.difficulty,
                cognitiveType: session.cognitiveType,
                trainingFamily: session.trainingFamily,
                isFreeMode: session.isFreeMode,
                durationMs: session.durationMs,
                startedAt: session.startedAt,
                currentIndex: session.currentIndex,
                history: session.history,
                stats: session.stats,
                savedAt: Date.now(),
                queue: (session.queue || []).map(item => {
                    const clean = { ...item };
                    delete clean.instance;
                    return clean;
                })
            };
            localStorage.setItem('quizz_active_workout_session', JSON.stringify(snapshot));
        } catch (e) {
            console.warn('Impossible de sauvegarder la session active:', e);
        }
    },

    getSavedSession() {
        try {
            const data = localStorage.getItem('quizz_active_workout_session');
            if (!data) return null;
            const parsed = JSON.parse(data);
            if (Date.now() - parsed.savedAt > 48 * 3600 * 1000) {
                this.clearSavedSession();
                return null;
            }
            return parsed;
        } catch (e) {
            return null;
        }
    },

    clearSavedSession() {
        try {
            localStorage.removeItem('quizz_active_workout_session');
        } catch (e) {}
    },

    resumeSavedSession() {
        const saved = this.getSavedSession();
        if (!saved) return false;

        this.currentSession = {
            id: saved.id,
            mode: saved.mode,
            targetConcept: saved.targetConcept,
            context: saved.context,
            totalTarget: saved.totalTarget,
            difficulty: saved.difficulty,
            cognitiveType: saved.cognitiveType,
            trainingFamily: saved.trainingFamily,
            isFreeMode: saved.isFreeMode,
            durationMs: saved.durationMs,
            startedAt: saved.startedAt,
            generatorFn: null,
            queue: saved.queue || [],
            currentIndex: saved.currentIndex || 0,
            currentExerciseInstance: null,
            exerciseCompleted: false,
            sessionCompleted: false,
            status: 'active',
            history: saved.history || [],
            stats: saved.stats || { totalAnswered: 0, correctCount: 0, partialCount: 0, diagnosedErrors: [], earnedXP: 0 },
            remediationPending: null
        };

        return true;
    },

    shuffle(array) {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }
};

if (typeof window !== 'undefined') {
    window.AdaptiveSessionEngine = AdaptiveSessionEngine;
}
