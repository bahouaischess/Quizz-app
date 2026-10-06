// ============================================================================
// MasteryTracker - Suivi de Maîtrise, Niveaux et Analyse des Faiblesses Prioritaires
// Enregistre les performances par notion, calcule les 5 faiblesses clés et
// ajuste dynamiquement la difficulté (Niveau 1 à 5).
// ============================================================================

const MasteryTracker = {
    STORAGE_KEY: 'quizzhub_mastery_stats',

    _stats: null,

    getStorage() {
        if (typeof window !== 'undefined' && window.localStorage) return window.localStorage;
        if (typeof localStorage !== 'undefined') return localStorage;
        return null;
    },

    init() {
        if (!this._stats) {
            try {
                const storage = this.getStorage();
                const stored = storage ? storage.getItem(this.STORAGE_KEY) : null;
                this._stats = stored ? JSON.parse(stored) : {};
            } catch (e) {
                this._stats = {};
            }
        }
        return this._stats;
    },

    save() {
        try {
            const storage = this.getStorage();
            if (storage) {
                storage.setItem(this.STORAGE_KEY, JSON.stringify(this._stats));
            }
        } catch (e) {
            console.error('Erreur sauvegarde MasteryTracker:', e);
        }
    },

    // Enregistre le résultat d'un exercice pour une notion donnée
    recordAttempt(conceptKey, isCorrect, options = {}) {
        this.init();
        if (!conceptKey) return;

        if (!this._stats[conceptKey]) {
            this._stats[conceptKey] = {
                conceptKey,
                label: options.conceptLabel || conceptKey.split('::').pop() || conceptKey,
                discipline: options.discipline || 'Général',
                chapter: options.chapter || '',
                attempts: 0,
                correctCount: 0,
                currentLevel: 1, // Niveau 1 à 9
                errorTypes: {},
                lastPracticed: Date.now(),
                masteryPercent: 0,
                // Nouvelles dimensions universitaires d'autonomie et de compétences
                dimensions: {
                    calculation: { attempts: 0, correct: 0, percent: 0 },
                    reasoning: { attempts: 0, correct: 0, percent: 0 },
                    autonomy: {
                        guidedAttempts: 0, guidedSuccess: 0,
                        semiGuidedAttempts: 0, semiGuidedSuccess: 0,
                        autonomousAttempts: 0, autonomousSuccess: 0,
                        score: 0 // % d'autonomie réelle
                    }
                },
                status: 'initiated' // 'initiated' | 'in_progress' | 'mastered'
            };
        }

        const rec = this._stats[conceptKey];
        if (!rec.dimensions) {
            rec.dimensions = {
                calculation: { attempts: 0, correct: 0, percent: 0 },
                reasoning: { attempts: 0, correct: 0, percent: 0 },
                autonomy: {
                    guidedAttempts: 0, guidedSuccess: 0,
                    semiGuidedAttempts: 0, semiGuidedSuccess: 0,
                    autonomousAttempts: 0, autonomousSuccess: 0,
                    score: 0
                }
            };
        }

        rec.attempts++;
        if (isCorrect) {
            rec.correctCount++;
            if (rec.currentLevel < 9 && rec.correctCount % 2 === 0) {
                rec.currentLevel++;
            }
        } else {
            if (rec.currentLevel > 1 && (rec.attempts - rec.correctCount) % 3 === 0) {
                rec.currentLevel--;
            }
            if (options.errorCategory) {
                rec.errorTypes[options.errorCategory] = (rec.errorTypes[options.errorCategory] || 0) + 1;
            }
        }

        // Enregistrement par dimension (Calcul vs Raisonnement)
        const family = options.trainingFamily || (options.type === 'multi_step' ? 'reasoning' : 'calculation');
        if (family === 'reasoning') {
            rec.dimensions.reasoning.attempts++;
            if (isCorrect) rec.dimensions.reasoning.correct++;
            rec.dimensions.reasoning.percent = Math.round((rec.dimensions.reasoning.correct / rec.dimensions.reasoning.attempts) * 100);
        } else {
            rec.dimensions.calculation.attempts++;
            if (isCorrect) rec.dimensions.calculation.correct++;
            rec.dimensions.calculation.percent = Math.round((rec.dimensions.calculation.correct / rec.dimensions.calculation.attempts) * 100);
        }

        // Enregistrement de l'autonomie (guided vs semi_guided vs autonomous)
        const autoLvl = options.autonomyLevel || (options.hintsUsed > 0 ? 'guided' : (options.type === 'multi_step' ? 'semi_guided' : 'autonomous'));
        const autoDim = rec.dimensions.autonomy;
        if (autoLvl === 'guided') {
            autoDim.guidedAttempts++;
            if (isCorrect) autoDim.guidedSuccess++;
        } else if (autoLvl === 'semi_guided') {
            autoDim.semiGuidedAttempts++;
            if (isCorrect) autoDim.semiGuidedSuccess++;
        } else {
            autoDim.autonomousAttempts++;
            if (isCorrect) autoDim.autonomousSuccess++;
        }

        // Calcul du score d'autonomie pondéré (poids : guidé = 25%, semi-guidé = 60%, autonome = 100%)
        const totalWeighted = (autoDim.guidedAttempts * 0.25) + (autoDim.semiGuidedAttempts * 0.6) + (autoDim.autonomousAttempts * 1.0);
        const successWeighted = (autoDim.guidedSuccess * 0.25) + (autoDim.semiGuidedSuccess * 0.6) + (autoDim.autonomousSuccess * 1.0);
        autoDim.score = totalWeighted > 0 ? Math.round((successWeighted / totalWeighted) * 100) : (isCorrect ? 80 : 40);

        rec.lastPracticed = Date.now();
        rec.masteryPercent = Math.round((rec.correctCount / rec.attempts) * 100);

        if (rec.attempts >= 4 && rec.masteryPercent >= 80 && (autoDim.score >= 60 || autoDim.autonomousAttempts >= 2)) {
            rec.status = 'mastered';
        } else if (rec.attempts >= 2) {
            rec.status = 'in_progress';
        } else {
            rec.status = 'initiated';
        }

        this.save();
        return rec;
    },

    // Récupère les 5 faiblesses prioritaires nécessitant un travail immédiat
    getTopWeaknesses(limit = 5) {
        this.init();
        const list = Object.values(this._stats).filter(item => item.attempts >= 1);

        // Score de priorité de friction :
        // Taux d'échec élevé + nombre d'erreurs + récence
        list.sort((a, b) => {
            const failRateA = 1 - (a.correctCount / a.attempts);
            const failRateB = 1 - (b.correctCount / b.attempts);
            const priorityA = failRateA * 10 + (a.attempts - a.correctCount) * 2;
            const priorityB = failRateB * 10 + (b.attempts - b.correctCount) * 2;
            return priorityB - priorityA;
        });

        return list.slice(0, limit);
    },

    // Récupère les notions maîtrisées
    getMasteredConcepts() {
        this.init();
        return Object.values(this._stats).filter(item => item.status === 'mastered');
    },

    // Récupère la fiche détaillée d'une notion
    getConceptRecord(conceptKey) {
        this.init();
        return this._stats[conceptKey] || null;
    },

    // Vue globale pour le tableau de bord
    getOverview() {
        this.init();
        const all = Object.values(this._stats);
        const totalPracticed = all.length;
        const masteredCount = all.filter(c => c.status === 'mastered').length;
        const totalAttempts = all.reduce((acc, c) => acc + c.attempts, 0);
        const totalCorrect = all.reduce((acc, c) => acc + c.correctCount, 0);
        const globalRate = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

        return {
            totalPracticed,
            masteredCount,
            totalAttempts,
            totalCorrect,
            globalRate,
            topWeaknesses: this.getTopWeaknesses(5),
            masteredList: this.getMasteredConcepts()
        };
    }
};

if (typeof window !== 'undefined') {
    window.MasteryTracker = MasteryTracker;
}
