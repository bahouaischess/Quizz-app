// ============================================================================
// DiagnosticEngine - Analyse et qualification cognitive des erreurs
// Relie chaque type d'erreur à une cause pédagogique précise et oriente le prochain exercice
// ============================================================================

const DiagnosticEngine = {
    CATEGORIES: {
        SIGN_ERROR: {
            id: 'sign_error',
            label: 'Erreur de signe',
            icon: '➖➕',
            description: 'Inversion de signe dans un calcul intermédiaire ou un terme soustrait.'
        },
        CALCULATION_ERROR: {
            id: 'calculation_error',
            label: 'Erreur de calcul',
            icon: '🧮',
            description: 'Erreur arithmétique ou manipulation de fractions erronée.'
        },
        OMITTED_HYPOTHESIS: {
            id: 'omitted_hypothesis',
            label: 'Hypothèse manquante',
            icon: '⚠️',
            description: 'Application d’un théorème sans avoir vérifié toutes les conditions requises.'
        },
        DEFINITION_CONFUSION: {
            id: 'definition_confusion',
            label: 'Confusion de définitions',
            icon: '📖',
            description: 'Confusion entre deux notions proches (ex: multiplicité algébrique vs géométrique).'
        },
        METHOD_ERROR: {
            id: 'method_error',
            label: 'Méthode inadaptée',
            icon: '🧭',
            description: 'Approche trop lourde ou théorème inopérant pour ce type de problème.'
        },
        INCOMPLETE_REASONING: {
            id: 'incomplete_reasoning',
            label: 'Raisonnement incomplet',
            icon: '🧩',
            description: 'Conclusion hâtive ou implication réciproque non établie.'
        },
        CODE_MEMORY_MODEL: {
            id: 'code_memory_model',
            label: 'Modèle mémoire / Pointeurs',
            icon: '💻',
            description: 'Mauvaise représentation de l’adresse mémoire, de la pile ou du déréférencement.'
        }
    },

    // Analyse une mauvaise réponse et en déduit le profil d'erreur
    analyze(exercise, userAnswer) {
        // 1. Si l'exercice possède des erreurs pré-catégorisées pour les distracteurs (cas spot-the-flaw, next-step, QCM enrichi)
        if (exercise.distractorDiagnostics && userAnswer !== undefined) {
            const diag = exercise.distractorDiagnostics[userAnswer];
            if (diag) {
                return {
                    category: this.CATEGORIES[diag.category] || this.CATEGORIES.DEFINITION_CONFUSION,
                    specificReason: diag.reason || "Raisonnement non optimal.",
                    remediationHint: diag.hint || "Prends le temps de relire les hypothèses.",
                    remediationConcept: diag.targetConcept || exercise.conceptId || exercise.tags?.[0]
                };
            }
        }

        // 2. Détection heuristique pour exercices numériques et matriciels
        if (exercise.type === 'numeric_input' && typeof exercise.correctAnswer === 'number') {
            const userNum = Number(userAnswer);
            if (!Number.isNaN(userNum)) {
                // Erreur de signe exacte
                if (userNum === -exercise.correctAnswer) {
                    return {
                        category: this.CATEGORIES.SIGN_ERROR,
                        specificReason: `Tu as trouvé ${userNum} au lieu de ${exercise.correctAnswer}. La valeur absolue est correcte, mais le signe est inversé.`,
                        remediationHint: "Revois les signes '-' devant les termes ou la règle des signes $(-1)^{i+j}$ dans le déterminant.",
                        remediationConcept: 'Calcul de signe'
                    };
                }
                // Erreur arithmétique proche
                if (Math.abs(userNum - exercise.correctAnswer) <= 2) {
                    return {
                        category: this.CATEGORIES.CALCULATION_ERROR,
                        specificReason: `Tu as répondu ${userNum}, ce qui est très proche de la bonne réponse (${exercise.correctAnswer}).`,
                        remediationHint: "Vérifie les additions ou produits intermédiaires.",
                        remediationConcept: 'Arithmétique'
                    };
                }
            }
        }

        // 3. Cas Spot-the-Flaw où l'élève a identifié l'étape mais avec une mauvaise qualification
        if (exercise.type === 'spot_the_flaw') {
            return {
                category: this.CATEGORIES.OMITTED_HYPOTHESIS,
                specificReason: "L'étape repérée était correcte ou l'argument de justification était incomplet.",
                remediationHint: "Regarde attentivement si le théorème utilisé ne demandait pas une condition supplémentaire.",
                remediationConcept: exercise.conceptId || 'Conditions de théorèmes'
            };
        }

        // 4. Par défaut : compréhension ou définition
        return {
            category: this.CATEGORIES.DEFINITION_CONFUSION,
            specificReason: "La réponse choisie ne satisfait pas les critères mathématiques requis.",
            remediationHint: "Revois les définitions exactes et leurs contre-exemples associés.",
            remediationConcept: exercise.conceptId || exercise.tags?.[0] || 'Définitions'
        };
    }
};

if (typeof window !== 'undefined') {
    window.DiagnosticEngine = DiagnosticEngine;
}
