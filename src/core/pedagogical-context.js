// ============================================================================
// PedagogicalContext - Moteur de Contexte et Règle d'Étanchéité Pédagogique
// Garantit qu'un entraînement ciblé ne peut JAMAIS dériver vers une autre
// matière ou notion hors-sujet.
// ============================================================================

const PedagogicalContext = {
    // Normalise n'importe quelle entrée utilisateur en contexte strict
    createContext({
        subjectId = null,
        chapterId = null,
        notionId = null,
        subNotionId = null,
        trainingFamily = 'calculation',
        difficulty = 5,
        mode = 'targeted',
        source = 'generator'
    } = {}) {
        // Déduction automatique si seul notionId ou subjectId est fourni
        const resolved = this.resolveHierarchy(subjectId, chapterId, notionId);

        return {
            subjectId: resolved.subjectId,
            chapterId: resolved.chapterId,
            notionId: resolved.notionId,
            subNotionId: subNotionId || resolved.subNotionId || null,
            trainingFamily: trainingFamily || 'calculation',
            difficulty: Math.max(1, Math.min(9, Number(difficulty) || 5)),
            mode: mode || 'targeted',
            source: source || 'generator',
            breadcrumb: this.formatBreadcrumb(resolved, trainingFamily, difficulty)
        };
    },

    // Résout la hiérarchie à partir de chaînes courantes (tolérant aux variations de casse/accents)
    resolveHierarchy(subjectRaw, chapterRaw, notionRaw) {
        const text = `${subjectRaw || ''} ${chapterRaw || ''} ${notionRaw || ''}`.toLowerCase();

        // 1. Informatique : Langage C
        if (/langage c|\bpointeur|stack|malloc|free|\*p\+\+|segfault|mémoire/i.test(text)) {
            return {
                subjectId: 'informatique',
                chapterId: 'langage_c',
                notionId: /pointeur/i.test(text) ? 'pointeurs' : /malloc|free|mémoire/i.test(text) ? 'gestion_memoire' : 'langage_c_general'
            };
        }

        // 2. Informatique : Python
        if (/python|mutabilit|récursiv|compréhension|complexit/i.test(text)) {
            return {
                subjectId: 'informatique',
                chapterId: 'python',
                notionId: /mutabilit/i.test(text) ? 'mutabilite' : /récursiv/i.test(text) ? 'recursivite' : 'python_general'
            };
        }

        // 3. Algèbre Linéaire : Déterminants
        if (/déterminant|determinant/i.test(text)) {
            return {
                subjectId: 'algebre',
                chapterId: 'determinants',
                notionId: 'determinants'
            };
        }

        // 4. Algèbre Linéaire : Réduction & Diagonalisation
        if (/diagonalis|spectre|propre|réduction|trigonalis|valeur propre/i.test(text)) {
            return {
                subjectId: 'algebre',
                chapterId: 'reduction',
                notionId: /diagonalis/i.test(text) ? 'diagonalisation' : /spectre|valeur propre/i.test(text) ? 'valeurs_propres' : 'espaces_propres'
            };
        }

        // 5. Algèbre Linéaire : Calcul Matriciel & Systèmes
        if (/matrice|produit|puissance|trace|gauss|système|pivot|rang|noyau|image/i.test(text)) {
            return {
                subjectId: 'algebre',
                chapterId: /gauss|système/i.test(text) ? 'systemes_lineaires' : 'calcul_matriciel',
                notionId: /rang|noyau/i.test(text) ? 'rang_noyau' : 'matrices'
            };
        }

        // 6. Analyse : Séries Numériques
        if (/série|riemann|alembert|cauchy|télescop|géométrique/i.test(text)) {
            return {
                subjectId: 'analyse',
                chapterId: 'series_numeriques',
                notionId: /riemann/i.test(text) ? 'riemann' : /alembert|cauchy/i.test(text) ? 'criteres_convergence' : 'series'
            };
        }

        // 7. Probabilités
        if (/proba|variable aléatoire|loi|espérance/i.test(text)) {
            return {
                subjectId: 'probabilites',
                chapterId: 'proba_discretes',
                notionId: 'variables_aleatoires'
            };
        }

        // Repli propre par défaut
        return {
            subjectId: subjectRaw ? subjectRaw.toLowerCase().replace(/\s+/g, '_') : 'algebre',
            chapterId: chapterRaw ? chapterRaw.toLowerCase().replace(/\s+/g, '_') : 'general',
            notionId: notionRaw ? notionRaw.toLowerCase().replace(/\s+/g, '_') : 'general'
        };
    },

    formatBreadcrumb(resolved, trainingFamily, difficulty) {
        const labels = {
            algebre: 'Algèbre Linéaire',
            analyse: 'Analyse',
            informatique: 'Informatique',
            probabilites: 'Probabilités',
            reduction: 'Réduction',
            determinants: 'Déterminants',
            calcul_matriciel: 'Calcul Matriciel',
            series_numeriques: 'Séries',
            langage_c: 'Langage C',
            python: 'Python',
            calculation: 'Calcul',
            reasoning: 'Raisonnement',
            anti_error: 'Anti-Erreur',
            multi_step: 'Multi-Étapes',
            programming: 'Programmation',
            exam: 'Examen',
            long_problem: 'Problème Long'
        };

        const sub = labels[resolved.subjectId] || resolved.subjectId;
        const chap = labels[resolved.chapterId] || resolved.chapterId;
        const not = labels[resolved.notionId] || resolved.notionId;
        const fam = labels[trainingFamily] || trainingFamily;

        return `${sub} › ${chap} › ${not} › ${fam} (Niv.${difficulty})`;
    },

    // RÈGLE D'OR : Vérifie si un exercice est 100% compatible avec le contexte
    // Renvoie false si l'exercice appartient à une autre matière
    isExerciseCompatible(exercise, context) {
        if (!context) return true;
        if (!exercise) return false;

        const exSub = (exercise._discipline || exercise.discipline || exercise.subjectKey || '').toLowerCase();
        const exTags = (exercise.tags || []).map(t => t.toLowerCase()).join(' ');
        const exText = `${exercise.q || ''} ${exercise.title || ''} ${exTags}`.toLowerCase();

        // 1. Filtrage strict par Matière (INTERDICTION ABSOLUE DE CROISEMENT)
        if (context.subjectId === 'algebre') {
            if (/langage c|\bpointeur|malloc|free|python|def\s+|#include/i.test(exText) || /informatique/i.test(exSub)) {
                return false; // Rejet formel d'informatique dans l'algèbre
            }
            if (/série numérique|\bsérie\b|riemann|d'alembert|cauchy/i.test(exText) || /analyse/i.test(exSub)) {
                return false; // Rejet formel d'analyse dans l'algèbre
            }
        }

        if (context.subjectId === 'analyse') {
            if (/langage c|\bpointeur|python|def\s+|#include/i.test(exText) || /informatique/i.test(exSub)) {
                return false;
            }
            if (/matrice|déterminant|diagonalis|spectre/i.test(exText) && !/série/i.test(exText)) {
                return false;
            }
        }

        if (context.subjectId === 'informatique') {
            if (/déterminant|diagonalis|valeur propre|riemann/i.test(exText)) {
                return false;
            }
            // Séparation stricte Python vs C
            if (context.chapterId === 'langage_c' && /python|def\s+|list comprehension/i.test(exText)) {
                return false;
            }
            if (context.chapterId === 'python' && /langage c|\bint\s+\*|malloc|#include/i.test(exText)) {
                return false;
            }
        }

        // 2. Filtrage par Notion ciblée si spécifiée
        if (context.notionId === 'diagonalisation') {
            // Doit porter sur diagonalisation, réduction, spectre, espaces propres, multiplicités
            const isDiag = /diagonalis|spectre|valeur propre|vecteur propre|propre|réduction|a\(a\)|sous-espace propre|multiplicité/i.test(exText);
            if (!isDiag) return false;
        }

        if (context.notionId === 'determinants') {
            const isDet = /déterminant|determinant|sarrus|det\(|comatrice|vandermonde/i.test(exText);
            if (!isDet) return false;
        }

        if (context.notionId === 'series' || context.notionId === 'riemann') {
            const isSeries = /série|riemann|d'alembert|cauchy|somme partielle|harmonique/i.test(exText);
            if (!isSeries) return false;
        }

        if (context.notionId === 'pointeurs') {
            const isPtr = /pointeur|\*p|malloc|free|adresse|référence mémoire/i.test(exText);
            if (!isPtr) return false;
        }

        return true;
    },

    // Attache le contexte pédagogique à un exercice
    tagExercise(exercise, context) {
        if (!exercise) return exercise;
        exercise.pedagogicalContext = context ? { ...context } : null;
        if (context) {
            exercise._discipline = context.subjectId;
            exercise._chapter = context.chapterId;
            exercise._concept = context.notionId;
            exercise.trainingFamily = context.trainingFamily;
        }
        return exercise;
    },

    // Obtenir la chaîne pédagogique de prérequis pour une remédiation cohérente
    getPrerequisites(notionId) {
        const PREREQ_MAP = {
            'diagonalisation': ['espaces_propres', 'noyau_image', 'systemes_lineaires', 'polynome_caracteristique', 'calcul_matriciel'],
            'valeurs_propres': ['polynome_caracteristique', 'determinants', 'systemes_lineaires'],
            'espaces_propres': ['noyau_image', 'systemes_lineaires', 'rang'],
            'determinants': ['calcul_matriciel', 'operations_elementaires'],
            'series': ['suites_numeriques', 'equivalents', 'integrales'],
            'riemann': ['series', 'integrales'],
            'pointeurs': ['modele_memoire', 'types_primitifs'],
            'gestion_memoire': ['pointeurs', 'tas_pile']
        };
        return PREREQ_MAP[notionId] || [];
    }
};

if (typeof window !== 'undefined') {
    window.PedagogicalContext = PedagogicalContext;
}
