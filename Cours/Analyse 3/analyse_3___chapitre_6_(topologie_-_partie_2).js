// ============================================================
// MatiÃ¨re : Analyse 3 : Chapitre 6 (Topologie - Partie 2)
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
Object.assign(defaultData, {
    "Analyse 3 : Chapitre 6 (Topologie - Partie 2)": {
        folder: "Analyse 3",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            // --- 6.5 PARTIES OUVERTES ET FERMÉES (OPÉRATIONS) ---
            {
                type: "qcm", tags: ["Ouverts", "Opérations"],
                q: "L'union quelconque (même infinie) de parties ouvertes est-elle une partie ouverte ?",
                options: [
                    { text: "Oui, toute union d'ouverts est un ouvert", isCorrect: true },
                    { text: "Non, seule une union finie d'ouverts est ouverte", isCorrect: false }
                ],
                explanation: "Toute union (même infinie) de parties ouvertes de $(X,d)$ est une partie ouverte[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Ouverts", "Opérations"],
                q: "L'intersection infinie de parties ouvertes est-elle nécessairement ouverte ?",
                options: [
                    { text: "Non, seule une intersection finie de parties ouvertes est garantie d'être ouverte", isCorrect: true },
                    { text: "Oui, toute intersection d'ouverts reste un ouvert", isCorrect: false }
                ],
                explanation: "Une intersection finie de parties ouvertes de $(X,d)$ est une partie ouverte[cite: 1]. Une intersection infinie d'ouverts n'est pas toujours un ouvert, comme $\\bigcap_{k \\ge 1} ]-1/k, 1/k[ = \\{0\\}$ dans $\\mathbb{R}$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Fermés", "Opérations"],
                q: "L'union infinie de parties fermées est-elle nécessairement fermée ?",
                options: [
                    { text: "Non, seule une union finie de parties fermées est fermée", isCorrect: true },
                    { text: "Oui, l'union de fermés est toujours fermée", isCorrect: false }
                ],
                explanation: "Une union finie de parties fermées de $(X,d)$ est une partie fermée[cite: 1]. Une union infinie de fermés n'est pas toujours fermée[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Fermés", "Opérations"],
                q: "L'intersection de parties fermées est-elle toujours fermée ?",
                options: [
                    { text: "Oui, toute intersection (même infinie) de parties fermées est fermée", isCorrect: true },
                    { text: "Non, cela dépend de la distance", isCorrect: false }
                ],
                explanation: "Toute intersection (même infinie) de parties fermées de $(X,d)$ est une partie fermée[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Ouverts", "Caractérisation"],
                q: "Comment peut-on caractériser globalement tous les ouverts de $X$ à l'aide des boules ?",
                options: [
                    { text: "Les ouverts de $X$ sont les réunions de boules ouvertes", isCorrect: true },
                    { text: "Les ouverts de $X$ sont les intersections de boules ouvertes", isCorrect: false }
                ],
                explanation: "Les ouverts de $X$ sont les réunions de boules ouvertes[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.6 INTÉRIEUR ET ADHÉRENCE ---
            {
                type: "qcm", tags: ["Intérieur", "Définitions"],
                q: "Comment définit-on rigoureusement l'intérieur $\\mathring{E}$ d'une partie $E$ ?",
                options: [
                    { text: "C'est la réunion de toutes les parties ouvertes de $X$ incluses dans $E$", isCorrect: true },
                    { text: "C'est l'intersection de toutes les parties ouvertes contenant $E$", isCorrect: false }
                ],
                explanation: "On appelle intérieur de $E$, noté $\\mathring{E}$, la réunion de toutes les parties ouvertes de $X$ incluses dans $E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Intérieur", "Propriétés"],
                q: "Quelle est la caractéristique maximale de l'intérieur $\\mathring{E}$ ?",
                options: [
                    { text: "$\\mathring{E}$ est la plus grande partie ouverte contenue dans $E$", isCorrect: true },
                    { text: "$\\mathring{E}$ est le plus petit ouvert contenant $E$", isCorrect: false }
                ],
                explanation: "$\\mathring{E}$ est la plus grande partie ouverte contenue dans $E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Intérieur", "Équivalence"],
                q: "Que signifie l'égalité $E = \\mathring{E}$ ?",
                options: [
                    { text: "Cela signifie que $E$ est une partie ouverte", isCorrect: true },
                    { text: "Cela signifie que $E$ est une partie fermée", isCorrect: false }
                ],
                explanation: "$E = \\mathring{E}$ si et seulement si $E$ est une partie ouverte[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Intérieur", "Points"],
                q: "Quel est le lien direct entre l'intérieur $\\mathring{E}$ et les points de $E$ ?",
                options: [
                    { text: "L'intérieur $\\mathring{E}$ est exactement l'ensemble de tous les points intérieurs à $E$", isCorrect: true },
                    { text: "L'intérieur contient tous les points d'accumulation de $E$", isCorrect: false }
                ],
                explanation: "L'ensemble de tous les points intérieurs à $E$ est égal à $\\mathring{E}$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Adhérence", "Définitions"],
                q: "Comment définit-on rigoureusement l'adhérence $\\overline{E}$ d'une partie $E$ ?",
                options: [
                    { text: "C'est l'intersection de tous les fermés de $X$ contenant $E$", isCorrect: true },
                    { text: "C'est la réunion de tous les fermés inclus dans $E$", isCorrect: false }
                ],
                explanation: "On appelle adhérence de $E$, notée $\\overline{E}$, l'intersection de tous les fermés de $X$ contenant $E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Adhérence", "Propriétés"],
                q: "Quelle est la caractéristique minimale de l'adhérence $\\overline{E}$ ?",
                options: [
                    { text: "$\\overline{E}$ est la plus petite partie fermée qui contient $E$", isCorrect: true },
                    { text: "$\\overline{E}$ est le plus grand fermé contenu dans $E$", isCorrect: false }
                ],
                explanation: "$\\overline{E}$ est la plus petite partie fermée qui contient $E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Adhérence", "Équivalence"],
                q: "Que signifie l'égalité $E = \\overline{E}$ ?",
                options: [
                    { text: "Cela signifie que $E$ est une partie fermée", isCorrect: true },
                    { text: "Cela signifie que $E$ est une partie d'intérieur vide", isCorrect: false }
                ],
                explanation: "$E = \\overline{E}$ si et seulement si $E$ est une partie fermée[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Adhérence", "Points"],
                q: "Quel est le lien direct entre l'adhérence $\\overline{E}$ et les points d'adhérence ?",
                options: [
                    { text: "L'adhérence $\\overline{E}$ est exactement l'ensemble de tous les points adhérents à $E$", isCorrect: true },
                    { text: "L'adhérence contient uniquement les points de frontière de $E$", isCorrect: false }
                ],
                explanation: "L'ensemble de tous les points adhérents à $E$ est égal à $\\overline{E}$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Intérieur", "Adhérence", "Opérations"],
                q: "Que valent l'adhérence de l'ensemble vide ($\\overline{\\emptyset}$) et l'intérieur de l'espace entier ($\\mathring{X}$) ?",
                options: [
                    { text: "$\\overline{\\emptyset} = \\emptyset$ et $\\mathring{X} = X$", isCorrect: true },
                    { text: "$\\overline{\\emptyset} = X$ et $\\mathring{X} = \\emptyset$", isCorrect: false }
                ],
                explanation: "On a $\\mathring{X} = X$ et $\\overline{\\emptyset} = \\emptyset$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Intérieur", "Adhérence", "Dualité"],
                q: "Quel est le lien de dualité (passage au complémentaire) entre l'intérieur et l'adhérence ?",
                options: [
                    { text: "$X \\setminus \\mathring{E} = \\overline{X \\setminus E}$", isCorrect: true },
                    { text: "$X \\setminus \\mathring{E} = \\mathring{X \\setminus E}$", isCorrect: false }
                ],
                explanation: "On a la relation $X \\setminus \\mathring{E} = \\overline{X \\setminus E}$[cite: 1]. L'adhérence du complémentaire est le complémentaire de l'intérieur.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Inclusions"],
                q: "Si $F \\subseteq E$, que peut-on affirmer sur les intérieurs et les adhérences de ces ensembles ?",
                options: [
                    { text: "$\\mathring{F} \\subseteq \\mathring{E}$ et $\\overline{F} \\subseteq \\overline{E}$", isCorrect: true },
                    { text: "L'inclusion est inversée pour les intérieurs", isCorrect: false }
                ],
                explanation: "Si $F \\subseteq E$, alors $\\mathring{F} \\subseteq \\mathring{E}$ et $\\overline{F} \\subseteq \\overline{E}$[cite: 1]. L'opération conserve l'ordre de l'inclusion.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Idempotence"],
                q: "Que se passe-t-il si on applique deux fois de suite l'opération d'intérieur ($\\mathring{\\mathring{E}}$) ou d'adhérence ($\\overline{\\overline{E}}$) ?",
                options: [
                    { text: "L'opération est idempotente : $\\mathring{\\mathring{E}} = \\mathring{E}$ et $\\overline{\\overline{E}} = \\overline{E}$", isCorrect: true },
                    { text: "L'ensemble grandit ou rétrécit à chaque étape", isCorrect: false }
                ],
                explanation: "On a $\\mathring{\\mathring{E}} = \\mathring{E}$ et $\\overline{\\overline{E}} = \\overline{E}$[cite: 1]. L'intérieur est déjà un ouvert, donc son intérieur est lui-même, et de même pour l'adhérence (fermé)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Adhérence", "Unions"],
                q: "L'adhérence respecte-t-elle l'union ? Que vaut $\\overline{F \\cup E}$ ?",
                options: [
                    { text: "$\\overline{F \\cup E} = \\overline{F} \\cup \\overline{E}$", isCorrect: true },
                    { text: "On a seulement $\\overline{F \\cup E} \\subseteq \\overline{F} \\cup \\overline{E}$", isCorrect: false }
                ],
                explanation: "On a l'égalité stricte : $\\overline{F \\cup E} = \\overline{F} \\cup \\overline{E}$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Adhérence", "Intersections"],
                q: "L'adhérence respecte-t-elle l'intersection ? Que vaut $\\overline{F \\cap E}$ ?",
                options: [
                    { text: "On a seulement l'inclusion $\\overline{F \\cap E} \\subseteq \\overline{F} \\cap \\overline{E}$", isCorrect: true },
                    { text: "L'égalité $\\overline{F \\cap E} = \\overline{F} \\cap \\overline{E}$ est toujours vraie", isCorrect: false }
                ],
                explanation: "On a l'inclusion $\\overline{F \\cap E} \\subseteq \\overline{F} \\cap \\overline{E}$, mais l'égalité n'est pas garantie en général[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Supremum", "Adhérence"],
                q: "Dans $\\mathbb{R}$, soit $E$ une partie non vide et majorée. Que peut-on dire de son supremum $y = \\sup E$ par rapport à l'adhérence $\\overline{E}$ ?",
                options: [
                    { text: "$\\sup E$ appartient toujours à $\\overline{E}$", isCorrect: true },
                    { text: "$\\sup E$ appartient toujours à $E$ (il est le plus grand élément)", isCorrect: false }
                ],
                explanation: "Si $E \\subseteq \\mathbb{R}$ est non vide et majorée, alors $\\sup\\{x \\in E\\} \\in \\overline{E}$[cite: 1]. La caractérisation de la borne supérieure permet de construire une suite d'éléments de $E$ l'approchant, faisant du sup un point adhérent[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.6.1 FRONTIÈRE, INTÉRIEUR VIDE, DENSITÉ ---
            {
                type: "qcm", tags: ["Frontière", "Définitions"],
                q: "Comment est formellement définie la frontière $\\partial E$ d'une partie $E$ ?",
                options: [
                    { text: "$\\partial E = \\overline{E} \\setminus \\mathring{E}$", isCorrect: true },
                    { text: "$\\partial E = X \\setminus \\overline{E}$", isCorrect: false }
                ],
                explanation: "On appelle frontière de $E$ la partie définie par $\\partial E := \\overline{E} \\setminus \\mathring{E}$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Frontière", "Points"],
                q: "La frontière $\\partial E$ correspond-elle à un ensemble précis de points ?",
                options: [
                    { text: "Oui, $\\partial E$ est exactement l'ensemble de tous les points de frontière de $E$", isCorrect: true },
                    { text: "Non, c'est l'ensemble des points isolés", isCorrect: false }
                ],
                explanation: "L'ensemble de tous les points de frontière de $E$ est égal à $\\partial E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Frontière", "Distance discrète"],
                q: "Que vaut la frontière $\\partial E$ d'une partie quelconque $E$ dans un espace métrique discret ?",
                options: [
                    { text: "$\\partial E = \\emptyset$", isCorrect: true },
                    { text: "$\\partial E = E$", isCorrect: false }
                ],
                explanation: "Dans un espace muni de la distance discrète, toute partie est à la fois ouverte et fermée, donc $\\mathring{E} = \\overline{E} = E$[cite: 1]. Il s'ensuit que $\\partial E = \\emptyset$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Densité", "Définitions"],
                q: "Quand dit-on qu'une partie $E$ est dense dans un espace métrique $X$ ?",
                options: [
                    { text: "Lorsque $\\overline{E} = X$", isCorrect: true },
                    { text: "Lorsque $\\mathring{E} = X$", isCorrect: false }
                ],
                explanation: "On dit que $E$ est dense dans $X$ lorsque $X$ est la plus petite partie fermée contenant $E$, c'est-à-dire lorsque $\\overline{E} = X$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Densité", "Intersections"],
                q: "Une partie $E$ est dense dans $V$ si et seulement si pour tout $x \\in V$...",
                options: [
                    { text: "Chaque boule ouverte autour de $x$ possède une intersection non vide avec $E$", isCorrect: true },
                    { text: "Chaque boule ouverte autour de $x$ est entièrement incluse dans $E$", isCorrect: false }
                ],
                explanation: "$E$ est dense dans $V$ si et seulement si pour tout $x \\in V$, $x$ est adhérent à $E$, c'est-à-dire que $\\forall r > 0, B_d(x,r) \\cap E \\neq \\emptyset$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Intérieur vide", "Définitions"],
                q: "Quand dit-on qu'une partie $E$ est d'intérieur vide ?",
                options: [
                    { text: "Lorsqu'elle ne contient aucune partie ouverte non vide, c'est-à-dire $\\mathring{E} = \\emptyset$", isCorrect: true },
                    { text: "Lorsqu'elle est de diamètre nul", isCorrect: false }
                ],
                explanation: "On dit qu'une partie $E$ est d'intérieur vide lorsqu'elle ne contient pas de partie ouverte non vide, c'est-à-dire lorsque $\\mathring{E} = \\emptyset$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Densité", "Intérieur vide"],
                q: "Quel est le lien direct d'équivalence entre une partie d'intérieur vide et la densité ?",
                options: [
                    { text: "$E$ est d'intérieur vide si et seulement si $E^c$ (son complémentaire) est dense dans $X$", isCorrect: true },
                    { text: "$E$ est d'intérieur vide si et seulement si $E$ est dense dans $X$", isCorrect: false }
                ],
                explanation: "Une partie $E$ est d'intérieur vide si et seulement si $E^c$ est dense dans $X$[cite: 1]. Cela découle de $X \\setminus \\mathring{E} = \\overline{X \\setminus E}$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Densité", "Exemples"],
                q: "Dans l'espace $\\mathbb{R}$, la partie $\\mathbb{Z}$ des entiers relatifs est-elle dense ?",
                options: [
                    { text: "Non, $\\mathbb{Z}$ n'est pas dense dans $\\mathbb{R}$", isCorrect: true },
                    { text: "Oui, $\\mathbb{Z}$ est dense dans $\\mathbb{R}$", isCorrect: false }
                ],
                explanation: "Dans $(\\mathbb{R}, |\\cdot|)$, $\\mathbb{Q}$ et $\\mathbb{R} \\setminus \\mathbb{Q}$ sont des parties denses, mais $\\mathbb{Z}$ ne l'est pas (il y a du vide entre deux entiers)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Intérieur vide", "Exemples"],
                q: "Dans $\\mathbb{R}$ muni de sa distance usuelle, un singleton $\\{x\\}$ est-il d'intérieur vide ?",
                options: [
                    { text: "Oui, tout singleton est d'intérieur vide", isCorrect: true },
                    { text: "Non, un singleton n'est pas d'intérieur vide", isCorrect: false }
                ],
                explanation: "Dans $(\\mathbb{R}, |\\cdot|)$, tout singleton $\\{x\\}$ est d'intérieur vide[cite: 1]. Il ne peut contenir aucun intervalle ouvert non vide[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.7 PARTIES BORNÉES ET DIAMÈTRE ---
            {
                type: "qcm", tags: ["Parties bornées", "Définitions"],
                q: "Comment définit-on une partie $E$ bornée dans un espace métrique ?",
                options: [
                    { text: "Elle est contenue dans au moins une boule ouverte", isCorrect: true },
                    { text: "Elle a un nombre fini d'éléments", isCorrect: false }
                ],
                explanation: "La partie $E$ est dite bornée si elle est contenue dans une boule ouverte, c'est-à-dire s'il existe $x_0 \\in X$ et $r > 0$ tels que $E \\subseteq B_d(x_0, r)$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Parties bornées", "Opérations"],
                q: "L'union de plusieurs parties bornées est-elle bornée ?",
                options: [
                    { text: "Oui, une union finie de parties bornées reste une partie bornée", isCorrect: true },
                    { text: "Non, l'union détruit le caractère borné", isCorrect: false }
                ],
                explanation: "Une union finie de parties bornées de $(X,d)$ est une partie bornée de $(X,d)$[cite: 1]. On peut englober toutes ces parties dans une seule grande boule en choisissant un rayon suffisamment grand[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Parties bornées", "Espaces normés"],
                q: "Dans un Espace Vectoriel Normé, quelle est la caractérisation la plus simple d'une partie bornée $E$ ?",
                options: [
                    { text: "Il existe $M > 0$ tel que $||x|| < M$ pour tout $x \\in E$", isCorrect: true },
                    { text: "L'ensemble $E$ contient le vecteur nul", isCorrect: false }
                ],
                explanation: "Une partie $E$ d'un EVN est bornée si et seulement s'il existe $M > 0$ tel que $||x|| < M$ pour tout $x \\in E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Diamètre", "Définitions"],
                q: "Comment définit-on le diamètre d'une partie $E$, noté $\\text{diam}(E)$ ?",
                options: [
                    { text: "$\\text{diam}(E) = \\sup\\{d(x,y) \\mid x,y \\in E\\}$", isCorrect: true },
                    { text: "$\\text{diam}(E) = \\sup_{x \\in E} ||x||$", isCorrect: false }
                ],
                explanation: "Le diamètre de $E$ est la borne supérieure de l'ensemble des distances entre tous les couples de points appartenant à $E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Diamètre", "Propriétés"],
                q: "Dans quelles conditions a-t-on $\\text{diam}(E) = 0$ (pour $E \\neq \\emptyset$) ?",
                options: [
                    { text: "Si et seulement si $E = \\{x_0\\}$ (un singleton)", isCorrect: true },
                    { text: "Si et seulement si $E$ est d'intérieur vide", isCorrect: false }
                ],
                explanation: "$\\text{diam}(E) = 0$ si et seulement si $E$ est constitué d'un unique point $x_0$[cite: 1]. S'il existait deux points distincts, leur distance serait strictement positive (séparation), donc le supremum aussi[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Diamètre", "Parties bornées"],
                q: "Quel est le lien direct entre le diamètre fini d'un ensemble et le fait qu'il soit borné ?",
                options: [
                    { text: "$\\text{diam}(E) < +\\infty$ si et seulement si $E$ est une partie bornée", isCorrect: true },
                    { text: "Un diamètre fini n'implique pas que la partie soit bornée", isCorrect: false }
                ],
                explanation: "$\\text{diam}(E) < +\\infty$ si et seulement si $E$ est une partie bornée[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Diamètre", "Inclusions"],
                q: "Si $E \\subseteq F$, que peut-on déduire sur les diamètres de ces deux parties ?",
                options: [
                    { text: "$\\text{diam}(E) \\le \\text{diam}(F)$", isCorrect: true },
                    { text: "$\\text{diam}(E) \\ge \\text{diam}(F)$", isCorrect: false }
                ],
                explanation: "Si $E \\subseteq F$, l'ensemble des distances de $E$ est inclus dans l'ensemble des distances de $F$, donc le supremum du premier est inférieur ou égal à celui du second : $\\text{diam}(E) \\le \\text{diam}(F)$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Diamètre", "Adhérence"],
                q: "Que vaut le diamètre de l'adhérence $\\overline{E}$ par rapport à celui de la partie $E$ ?",
                options: [
                    { text: "$\\text{diam}(\\overline{E}) = \\text{diam}(E)$", isCorrect: true },
                    { text: "$\\text{diam}(\\overline{E}) > \\text{diam}(E)$", isCorrect: false }
                ],
                explanation: "On a toujours $\\text{diam}(\\overline{E}) = \\text{diam}(E)$[cite: 1]. L'ajout de la frontière n'augmente pas la distance maximale entre les éléments de l'ensemble[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.8 SUITES : CONVERGENCE ET UNICITÉ ---
            {
                type: "qcm", tags: ["Suites", "Définition de convergence"],
                q: "Comment définit-on topologiquement la convergence d'une suite $(x_n)$ vers un point $y$ ?",
                options: [
                    { text: "Pour tout voisinage $V$ de $y$, la suite appartient à $V$ à partir d'un certain rang", isCorrect: true },
                    { text: "Il existe un voisinage $V$ de $y$ contenant une infinité de termes de la suite", isCorrect: false }
                ],
                explanation: "On dit que $(x_n)$ converge vers $y$ lorsque pour tout voisinage $V$ de $y$, $\\exists n_0 \\in \\mathbb{N}$ tel que $\\forall n \\ge n_0, x_n \\in V$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Suites", "Définition métrique"],
                q: "Dans un espace métrique (X,d), comment se traduit métriquement la convergence de $(x_n)$ vers $y$ ?",
                options: [
                    { text: "$\\forall \\epsilon > 0, \\exists n_0 \\in \\mathbb{N}$ tel que $\\forall n \\ge n_0, d(x_n, y) < \\epsilon$", isCorrect: true },
                    { text: "$\\forall \\epsilon > 0, d(x_n, y) \\le \\epsilon$ pour au moins un $n$", isCorrect: false }
                ],
                explanation: "Cela équivaut à dire que la distance numérique entre $x_n$ et la limite $y$ tend vers $0$ : $\\lim_{n\\to+\\infty} d(x_n, y) = 0$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Suites", "Stationnaire"],
                q: "Qu'est-ce qu'une suite stationnaire ?",
                options: [
                    { text: "Une suite qui est constante à partir d'un certain rang", isCorrect: true },
                    { text: "Une suite qui n'admet aucune valeur d'adhérence", isCorrect: false }
                ],
                explanation: "Une suite $(x_n)$ est stationnaire si elle est constante à partir d'un certain rang $n_0$ ($\\exists n_0 \\in \\mathbb{N}, \\forall n \\ge n_0, x_n = x_{n_0}$)[cite: 1]. Toute suite stationnaire est convergente[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Suites", "Distance discrète"],
                q: "Dans un espace métrique muni de la distance discrète, quelles sont les SEULES suites convergentes ?",
                options: [
                    { text: "Les suites stationnaires (constantes à partir d'un certain rang)", isCorrect: true },
                    { text: "Les suites bornées", isCorrect: false }
                ],
                explanation: "Dans un espace muni de la distance discrète, seules les suites stationnaires sont convergentes[cite: 1]. En effet, dès que $\\epsilon = 1/2$, la condition $d(x_n, y) < 1/2$ impose $x_n = y$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Suites", "Unicité"],
                q: "Que stipule le théorème d'unicité de la limite dans un espace métrique ?",
                options: [
                    { text: "Si une suite converge vers $y_1$ et vers $y_2$, alors $y_1 = y_2$", isCorrect: true },
                    { text: "Une suite convergente possède une unique sous-suite", isCorrect: false }
                ],
                explanation: "Si $\\lim_{n\\to+\\infty} x_n = y_1$ et $\\lim_{n\\to+\\infty} x_n = y_2$, alors $y_1 = y_2$[cite: 1]. C'est une conséquence directe de l'inégalité triangulaire et de l'axiome de séparation de la distance[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Suites", "Parties bornées"],
                q: "Tout suite convergente dans un espace métrique $(X,d)$ est-elle bornée ?",
                options: [
                    { text: "Oui, toute suite convergente est une suite bornée", isCorrect: true },
                    { text: "Non, cela dépend de la limite", isCorrect: false }
                ],
                explanation: "Une suite convergente dans $(X,d)$ est toujours une suite bornée[cite: 1]. À partir d'un certain rang $n_0$, tous les termes sont dans une petite boule autour de la limite, et les $n_0$ premiers termes s'inscrivent dans une grande boule finale[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Suites", "Parties bornées", "Contre-exemples"],
                q: "La réciproque est-elle vraie ? Une suite bornée est-elle forcément convergente ?",
                options: [
                    { text: "Non, une suite bornée n'est pas forcément convergente", isCorrect: true },
                    { text: "Oui, toute suite bornée est convergente", isCorrect: false }
                ],
                explanation: "Une suite bornée n'est pas forcément convergente[cite: 1]. On se rappellera de l'exemple de la suite $x_n = (-1)^n$ dans $\\mathbb{R}$, qui est bornée mais oscille sans converger[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.8.1 CARACTÉRISATION SÉQUENTIELLE ---
            {
                type: "qcm", tags: ["Caractérisation séquentielle", "Adhérence"],
                q: "Comment caractériser qu'un point $y$ appartient à l'adhérence $\\overline{E}$ à l'aide de suites ?",
                options: [
                    { text: "$y \\in \\overline{E}$ si et seulement s'il existe une suite $(x_n)$ de points de $E$ qui converge vers $y$", isCorrect: true },
                    { text: "$y \\in \\overline{E}$ si et seulement si toute suite de $E$ converge vers $y$", isCorrect: false }
                ],
                explanation: "C'est la caractérisation séquentielle de l'adhérence : on peut approcher tout point adhérent par une suite d'éléments du sous-ensemble[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Caractérisation séquentielle", "Fermés"],
                q: "Comment caractériser qu'une partie $E$ est fermée à l'aide de suites ?",
                options: [
                    { text: "$E$ est fermée si et seulement si toute suite de points de $E$ qui converge a sa limite dans $E$", isCorrect: true },
                    { text: "$E$ est fermée si et seulement si toute suite de $E$ est convergente", isCorrect: false }
                ],
                explanation: "$E$ est une partie fermée si et seulement si toute suite $(x_n)$ de points de $E$ qui converge dans l'espace a sa limite dans $E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Caractérisation séquentielle", "Densité"],
                q: "Comment caractériser qu'une partie $E$ est dense dans une partie $V$ à l'aide de suites ?",
                options: [
                    { text: "$E$ est dense dans $V$ si et seulement si tout point de $V$ est limite d'une suite de points de $E$", isCorrect: true },
                    { text: "$E$ est dense dans $V$ si toute suite de $V$ admet une sous-suite dans $E$", isCorrect: false }
                ],
                explanation: "$E$ est dense dans $V$ si et seulement si tout point $x \\in V$ est limite d'une suite de $E$[cite: 1]. Cela découle directement de la caractérisation séquentielle de l'adhérence[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.8.2 SUITES EXTRAITES ET VALEURS D'ADHÉRENCE ---
            {
                type: "qcm", tags: ["Sous-suites", "Définitions"],
                q: "Qu'est-ce qu'une suite extraite (ou sous-suite) $(x_{\\phi(n)})$ d'une suite $(x_n)$ ?",
                options: [
                    { text: "C'est une application composée $x \\circ \\phi$ où $\\phi : \\mathbb{N} \\to \\mathbb{N}$ est une application STRICTEMENT croissante", isCorrect: true },
                    { text: "C'est une restriction arbitraire des indices de la suite originelle", isCorrect: false }
                ],
                explanation: "Une sous-suite est définie par une application d'extraction $\\phi : \\mathbb{N} \\to \\mathbb{N}$ strictement croissante[cite: 1]. Cela garantit qu'on avance toujours dans les indices de la suite initiale sans jamais reculer ni stagner[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Valeur d'adhérence", "Définitions"],
                q: "Qu'est-ce qu'une valeur d'adhérence d'une suite $(x_n)$ ?",
                options: [
                    { text: "C'est la limite d'une suite extraite (sous-suite) convergente de $(x_n)$", isCorrect: true },
                    { text: "C'est la borne supérieure des valeurs de la suite", isCorrect: false }
                ],
                explanation: "On dit que $y \\in X$ est une valeur d'adhérence de la suite $(x_n)$ s'il existe une sous-suite $(x_{\\phi(n)})$ qui converge vers $y$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Valeur d'adhérence", "Équivalence métrique"],
                q: "Quelle propriété permet de savoir que $y$ est une valeur d'adhérence d'une suite $(x_n)$ SANS construire explicitement de sous-suite ?",
                options: [
                    { text: "$\\forall \\epsilon > 0, \\forall n \\in \\mathbb{N}, \\exists n_0 \\ge n$ tel que $d(x_{n_0}, y) < \\epsilon$", isCorrect: true },
                    { text: "$\\forall \\epsilon > 0, \\exists n_0 \\in \\mathbb{N}, \\forall n \\ge n_0, d(x_n, y) < \\epsilon$", isCorrect: false }
                ],
                explanation: "Le point $y$ est une valeur d'adhérence si et seulement si pour tout voisinage de $y$ et pour tout rang de départ, on peut toujours trouver un terme de la suite plus loin qui  ce voisinage[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Valeur d'adhérence", "Suites convergentes"],
                q: "Combien de valeurs d'adhérence possède une suite convergente ?",
                options: [
                    { text: "Elle n'en possède qu'une seule (qui est sa limite)", isCorrect: true },
                    { text: "Elle peut en posséder une infinité", isCorrect: false }
                ],
                explanation: "Une suite convergente dans un espace métrique n'a qu'une seule valeur d'adhérence : sa limite (qui est unique)[cite: 1]. Toute suite extraite converge vers cette même limite[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Valeur d'adhérence", "Contre-exemples"],
                q: "Si une suite possède une et une seule valeur d'adhérence, converge-t-elle nécessairement ?",
                options: [
                    { text: "Non, une suite avec une seule valeur d'adhérence ne converge pas forcément", isCorrect: true },
                    { text: "Oui, c'est une condition suffisante de convergence", isCorrect: false }
                ],
                explanation: "Une suite avec une seule valeur d'adhérence ne converge pas forcément[cite: 1]. Par exemple, la suite $x_{2n}=1$ et $x_{2n+1}=n$ a pour unique valeur d'adhérence 1, mais diverge car elle n'est pas bornée[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Suites extraites", "Convergence"],
                q: "Quelle est une condition nécessaire pour qu'une suite $(x_n)$ converge vers $y$ (concernant ses sous-suites) ?",
                options: [
                    { text: "Chaque sous-suite de $(x_n)$ doit converger vers $y$", isCorrect: true },
                    { text: "Au moins une sous-suite doit converger vers $y$", isCorrect: false }
                ],
                explanation: "Une condition nécessaire pour que $(x_n)$ converge vers $y$ est que chaque sous-suite converge vers $y$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Suites extraites", "Critère de convergence"],
                q: "Quelle est une condition SUFFISANTE de convergence basée sur l'extraction de sous-suites ?",
                options: [
                    { text: "De chaque sous-suite, on peut extraire une sous-sous-suite qui converge vers la même limite $y$", isCorrect: true },
                    { text: "Il suffit qu'une sous-suite converge vers $y$", isCorrect: false }
                ],
                explanation: "Une condition suffisante pour que $(x_n)$ converge vers $y$ est que de chaque sous-suite $(x_{\\phi(n)})$, on puisse extraire une sous-sous-suite convergente vers $y$[cite: 1]. Si ce n'était pas le cas, on pourrait construire une sous-suite restant éternellement loin de $y$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Bolzano-Weierstrass", "Suites"],
                q: "Que stipule le Théorème de Bolzano-Weierstrass dans l'espace $(\\mathbb{R}^n, ||\\cdot||_\\infty)$ ?",
                options: [
                    { text: "Toute suite bornée admet au moins une valeur d'adhérence (une sous-suite convergente)", isCorrect: true },
                    { text: "Toute suite admet une valeur d'adhérence", isCorrect: false }
                ],
                explanation: "Le Théorème de Bolzano-Weierstrass stipule que toute suite BORNÉE de $(\\mathbb{R}^n, ||\\cdot||_\\infty)$ admet (au moins) une valeur d'adhérence[cite: 1]. La démonstration procède par extractions successives sur chaque coordonnée[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Bolzano-Weierstrass", "Contre-exemples"],
                q: "Peut-on trouver une suite qui n'a AUCUNE valeur d'adhérence dans $\\mathbb{R}$ ?",
                options: [
                    { text: "Oui, par exemple la suite divergente $x_n = n$", isCorrect: true },
                    { text: "Non, le théorème de Bolzano-Weierstrass garantit toujours une valeur d'adhérence", isCorrect: false }
                ],
                explanation: "La suite de terme général $x_n = n$ n'a aucune valeur d'adhérence car elle n'est pas bornée (elle s'échappe vers l'infini)[cite: 1]. Bolzano-Weierstrass ne s'applique qu'aux suites bornées[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    }
});

