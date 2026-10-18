// ============================================================
// MatiÃ¨re : Analyse 3 : Chapitre 6 (Topologie - Partie 1)
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
Object.assign(defaultData, {
    "Analyse 3 : Chapitre 6 (Topologie - Partie 1)": {
        folder: "Analyse 3",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            // --- 6.1 DÉFINITION ET EXEMPLES (DISTANCES) ---
            {
                type: "qcm", tags: ["Distance", "Définitions"],
                q: "Quelles sont les quatre propriétés fondamentales qui définissent une distance $d$ sur un ensemble $X$ ?",
                options: [
                    { text: "Positivité, séparation, symétrie, inégalité triangulaire", isCorrect: true },
                    { text: "Positivité, séparation, homogénéité, inégalité triangulaire", isCorrect: false },
                    { text: "Séparation, linéarité, symétrie, inégalité triangulaire", isCorrect: false }
                ],
                explanation: "Une distance doit vérifier $d(x,y) \\ge 0$ (positivité), $d(x,y)=0 \\iff x=y$ (séparation), $d(x,y)=d(y,x)$ (symétrie) et $d(x,y) \\le d(x,z)+d(z,y)$ (inégalité triangulaire)[cite: 1]. L'homogénéité est une propriété des normes, pas des distances[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Distance", "Propriétés"],
                q: "Que stipule la « deuxième inégalité triangulaire » dans un espace métrique ?",
                options: [
                    { text: "$d(x,y) \\ge |d(x,z) - d(y,z)|$", isCorrect: true },
                    { text: "$d(x,y) \\le |d(x,z) - d(y,z)|$", isCorrect: false }
                ],
                explanation: "Pour tous $x, y, z \\in X$, on a $d(x,y) \\ge |d(x,z) - d(y,z)|$[cite: 1]. Cette propriété découle directement de l'inégalité triangulaire classique[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Distance", "Exemples"],
                q: "Comment est définie la distance discrète sur un ensemble $X$ non vide ?",
                options: [
                    { text: "$d(x,y) = 1$ si $x \\neq y$, et $d(x,y) = 0$ si $x = y$", isCorrect: true },
                    { text: "$d(x,y) = |x - y|$", isCorrect: false }
                ],
                explanation: "Dans la distance discrète, tous les points distincts sont à une distance exacte de 1 entre eux[cite: 1]. Si les points sont identiques, la distance est nulle par séparation[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Distance", "Équivalence"],
                q: "À quelle condition deux distances $d$ et $d_*$ sur $X$ sont-elles dites « équivalentes » ?",
                options: [
                    { text: "S'il existe $C_1, C_2 > 0$ telles que $C_1 d(x,y) \\le d_*(x,y) \\le C_2 d(x,y)$ pour tous $x,y$", isCorrect: true },
                    { text: "S'il existe une constante $C > 0$ telle que $d(x,y) = C d_*(x,y)$ pour tous $x,y$", isCorrect: false }
                ],
                explanation: "L'équivalence de distances permet de borner l'une par rapport à l'autre à un facteur multiplicatif près, de part et d'autre ($C_1$ et $C_2$)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Distance", "Contre-exemples"],
                q: "Sur $\\mathbb{R}$, la distance usuelle $d(x,y) = |x-y|$ et la distance discrète sont-elles équivalentes ?",
                options: [
                    { text: "Non, elles ne sont pas équivalentes", isCorrect: true },
                    { text: "Oui, elles sont équivalentes", isCorrect: false }
                ],
                explanation: "Elles ne sont pas équivalentes[cite: 1]. Par exemple, si on prend $y = 1/n$, la distance discrète reste de 1, ce qui empêcherait l'existence d'une constante $C_1 > 0$ vérifiant l'inégalité $C_1 d(x,y) \\le |x-y|$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Distance", "Exemples"],
                q: "Comment définit-on la distance $d_\\infty$ sur $\\mathbb{R}^n$ ?",
                options: [
                    { text: "$d_\\infty(x,y) = \\max_{i=1,...,n} |x_i - y_i|$", isCorrect: true },
                    { text: "$d_\\infty(x,y) = \\sum_{i=1}^n |x_i - y_i|$", isCorrect: false }
                ],
                explanation: "La distance $d_\\infty$ correspond au maximum des écarts absolus coordonnée par coordonnée[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Distance", "Espaces de fonctions"],
                q: "Comment définit-on la distance uniforme $\\sigma(f,g)$ sur l'espace des applications bornées $\\mathcal{B}(X, Y)$ ?",
                options: [
                    { text: "$\\sigma(f,g) = \\sup_{x \\in X} \\delta(f(x), g(x))$", isCorrect: true },
                    { text: "$\\sigma(f,g) = \\int_X \\delta(f(x), g(x)) dx$", isCorrect: false }
                ],
                explanation: "La distance uniforme est la borne supérieure (sup) des distances ponctuelles $\\delta(f(x), g(x))$ sur l'ensemble $X$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Distance", "Produit"],
                q: "Soient $(X_1, d_1)$ et $(X_2, d_2)$ deux espaces métriques. Comment définit-on naturellement la distance produit $d(x,y)$ sur $X_1 \\times X_2$ ?",
                options: [
                    { text: "$d(x,y) = \\max(d_1(x_1, y_1), d_2(x_2, y_2))$", isCorrect: true },
                    { text: "$d(x,y) = d_1(x_1, y_1) \\times d_2(x_2, y_2)$", isCorrect: false }
                ],
                explanation: "La distance produit est définie comme le maximum des distances sur chaque composante de l'espace[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.2 ESPACES VECTORIELS NORMÉS ---
            {
                type: "qcm", tags: ["Normes", "Définitions"],
                q: "Quelle propriété parmi les suivantes est exclusive aux NORMES et n'est pas requise pour une simple distance ?",
                options: [
                    { text: "L'homogénéité : $||\\lambda x|| = |\\lambda| ||x||$", isCorrect: true },
                    { text: "L'inégalité triangulaire", isCorrect: false },
                    { text: "La séparation ($||x|| = 0 \\iff x = 0$)", isCorrect: false }
                ],
                explanation: "Une norme possède la propriété d'homogénéité (mise en facteur des scalaires en valeur absolue), ce qu'une distance générale ne possède pas[cite: 1]. Les autres axiomes (positivité, séparation, inégalité triangulaire) sont partagés[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Normes", "Propriétés"],
                q: "Comment s'écrit la sous-additivité inverse pour une norme $|| \\cdot ||$ ?",
                options: [
                    { text: "$| ||x|| - ||y|| | \\le ||x - y||$", isCorrect: true },
                    { text: "$||x - y|| \\le ||x|| - ||y||$", isCorrect: false }
                ],
                explanation: "Cette inégalité découle de la sous-additivité classique et permet de lier la différence des normes à la norme de la différence[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Normes", "Équivalence"],
                q: "Vrai ou Faux : Deux normes sur un espace vectoriel de dimension FINIE sont toujours équivalentes.",
                options: [
                    { text: "Vrai", isCorrect: true },
                    { text: "Faux", isCorrect: false }
                ],
                explanation: "Toutes les normes sur un espace vectoriel de dimension finie sont équivalentes[cite: 1]. Par conséquent, elles définissent les mêmes ouverts, fermés et voisinages[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Normes", "Exemples"],
                q: "Dans $\\mathbb{R}^n$, comment est définie la norme $||x||_p$ pour $p \\ge 1$ ?",
                options: [
                    { text: "$||x||_p = (\\sum_{i=1}^n |x_i|^p)^{1/p}$", isCorrect: true },
                    { text: "$||x||_p = \\sum_{i=1}^n |x_i|^{1/p}$", isCorrect: false }
                ],
                explanation: "C'est la définition standard de la norme $L^p$ discrète sur $\\mathbb{R}^n$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Normes", "Distance induite"],
                q: "Tout Espace Vectoriel Normé (EVN) est un espace métrique. Quelle est la distance $d_{|| \\cdot ||}$ induite par la norme ?",
                options: [
                    { text: "$d(x,y) = ||x - y||$", isCorrect: true },
                    { text: "$d(x,y) = ||x|| - ||y||$", isCorrect: false }
                ],
                explanation: "La norme de la différence $||x-y||$ satisfait toutes les propriétés d'une distance (positivité, séparation, symétrie, inégalité triangulaire)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Normes", "Exemples"],
                q: "Soit l'espace $\\mathcal{B}(X,Y)$ des applications bornées vers un EVN. Comment définit-on la norme uniforme $||f||_\\infty$ ?",
                options: [
                    { text: "$||f||_\\infty = \\sup_{x \\in X} ||f(x)||$", isCorrect: true },
                    { text: "$||f||_\\infty = \\max_{x \\in X} ||f(x)||$", isCorrect: false }
                ],
                explanation: "On utilise la borne supérieure (sup) car le maximum n'est pas forcément atteint sur un ensemble $X$ quelconque[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Normes", "Exemples"],
                q: "Pour une fonction continue $f \\in \\mathcal{C}(I, \\mathbb{R})$ sur un intervalle $I=[a,b]$, comment s'écrit la norme $L^p$ (pour $p \\ge 1$) ?",
                options: [
                    { text: "$||f||_p = (\\int_I |f(x)|^p dx)^{1/p}$", isCorrect: true },
                    { text: "$||f||_p = \\int_I |f(x)|^{1/p} dx$", isCorrect: false }
                ],
                explanation: "C'est l'analogue continu de la norme $p$ vectorielle[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Normes", "Espaces produits"],
                q: "Pour un espace produit $X = X_1 \\times X_2 \\times ... \\times X_n$, comment est définie la norme produit $||x||$ ?",
                options: [
                    { text: "$||x|| = \\max_{1 \\le i \\le n} ||x_i||_i$", isCorrect: true },
                    { text: "$||x|| = \\sum_{i=1}^n ||x_i||_i$", isCorrect: false }
                ],
                explanation: "La norme produit usuelle est définie comme le maximum des normes des coordonnées dans leurs espaces respectifs[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.2.2 ESPACES PRÉHILBERTIENS ET EUCLIDIENS ---
            {
                type: "qcm", tags: ["Préhilbertiens", "Définitions"],
                q: "Quelles sont les propriétés qui définissent un produit scalaire $\\langle x,y \\rangle$ sur un espace vectoriel $X$ sur $\\mathbb{R}$ ?",
                options: [
                    { text: "Positivité, séparation (définition), symétrie et bilinéarité", isCorrect: true },
                    { text: "Positivité, homogénéité, inégalité triangulaire", isCorrect: false }
                ],
                explanation: "Un produit scalaire est une forme bilinéaire, symétrique, définie et positive[cite: 1]. L'inégalité triangulaire est une propriété de la norme qui en découle, pas du produit scalaire lui-même[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Euclidiens", "Définitions"],
                q: "Quelle est la définition stricte d'un espace euclidien ?",
                options: [
                    { text: "Un espace préhilbertien de dimension finie", isCorrect: true },
                    { text: "N'importe quel espace préhilbertien", isCorrect: false },
                    { text: "Un espace vectoriel normé de dimension finie", isCorrect: false }
                ],
                explanation: "Le terme « euclidien » est réservé aux espaces préhilbertiens (munis d'un produit scalaire) qui sont de dimension finie[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Préhilbertiens", "Exemples"],
                q: "Sur l'espace des matrices carrées $M_n(\\mathbb{R})$, comment définit-on classiquement le produit scalaire $\\langle A, B \\rangle$ ?",
                options: [
                    { text: "$\\langle A, B \\rangle = Tr({}^tA B)$", isCorrect: true },
                    { text: "$\\langle A, B \\rangle = Tr(AB)$", isCorrect: false },
                    { text: "$\\langle A, B \\rangle = \\det(A) \\times \\det(B)$", isCorrect: false }
                ],
                explanation: "Le produit scalaire matriciel usuel utilise la trace du produit de la transposée de $A$ avec $B$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Préhilbertiens", "Cauchy-Schwarz"],
                q: "Que stipule l'inégalité de Cauchy-Schwarz dans un espace préhilbertien ?",
                options: [
                    { text: "$|\\langle x,y \\rangle| \\le \\langle x,x \\rangle^{1/2} \\langle y,y \\rangle^{1/2}$", isCorrect: true },
                    { text: "$|\\langle x,y \\rangle| \\ge \\langle x,x \\rangle^{1/2} \\langle y,y \\rangle^{1/2}$", isCorrect: false }
                ],
                explanation: "La valeur absolue du produit scalaire est toujours majorée par le produit des normes (issues de ce produit scalaire)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Préhilbertiens", "Cauchy-Schwarz"],
                q: "Dans l'inégalité de Cauchy-Schwarz, à quelle condition a-t-on l'égalité stricte ?",
                options: [
                    { text: "Si et seulement si les vecteurs $x$ et $y$ sont colinéaires (il existe $\\lambda$ tel que $x=\\lambda y$ ou $y=\\lambda x$)", isCorrect: true },
                    { text: "Si et seulement si $x$ et $y$ sont orthogonaux", isCorrect: false }
                ],
                explanation: "L'égalité de Cauchy-Schwarz caractérise la colinéarité des vecteurs[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Préhilbertiens", "Norme"],
                q: "Comment la norme euclidienne $||x||$ est-elle dérivée du produit scalaire ?",
                options: [
                    { text: "$||x|| = \\sqrt{\\langle x,x \\rangle}$", isCorrect: true },
                    { text: "$||x|| = \\langle x,x \\rangle^2$", isCorrect: false }
                ],
                explanation: "Tout espace préhilbertien devient un espace vectoriel normé en définissant la norme comme la racine carrée du produit scalaire d'un vecteur avec lui-même[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Préhilbertiens", "Identités"],
                q: "Dans un espace préhilbertien, que stipule l'identité du parallélogramme ?",
                options: [
                    { text: "$||x+y||^2 + ||x-y||^2 = 2(||x||^2 + ||y||^2)$", isCorrect: true },
                    { text: "$||x+y||^2 = ||x||^2 + ||y||^2$", isCorrect: false }
                ],
                explanation: "Cette identité géométrique relie la somme des carrés des diagonales à la somme des carrés des côtés[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Préhilbertiens", "Identités"],
                q: "À quoi correspond l'identité de polarisation dans un espace préhilbertien ?",
                options: [
                    { text: "$\\langle x,y \\rangle = \\frac{1}{4}||x+y||^2 - \\frac{1}{4}||x-y||^2$", isCorrect: true },
                    { text: "$\\langle x,y \\rangle = ||x||^2 + ||y||^2 - ||x-y||^2$", isCorrect: false }
                ],
                explanation: "L'identité de polarisation permet d'exprimer le produit scalaire uniquement à partir de la norme[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Préhilbertiens", "Théorème de Pythagore"],
                q: "Dans un espace préhilbertien, à quelle condition le théorème de Pythagore $||x+y||^2 = ||x||^2 + ||y||^2$ est-il vérifié ?",
                options: [
                    { text: "Si et seulement si $\\langle x,y \\rangle = 0$ (vecteurs orthogonaux)", isCorrect: true },
                    { text: "Si et seulement si $x$ et $y$ sont colinéaires", isCorrect: false }
                ],
                explanation: "Le théorème de Pythagore est équivalent à l'annulation du produit scalaire (donc au terme croisé dans le développement du carré de la norme)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.3 BOULES ET SPHÈRES ---
            {
                type: "qcm", tags: ["Boules", "Définitions"],
                q: "Comment est définie une boule ouverte $B_d(x_0, r)$ de centre $x_0$ et de rayon $r > 0$ ?",
                options: [
                    { text: "$B_d(x_0, r) = \\{x \\in X \\mid d(x_0, x) < r\\}$", isCorrect: true },
                    { text: "$B_d(x_0, r) = \\{x \\in X \\mid d(x_0, x) \\le r\\}$", isCorrect: false }
                ],
                explanation: "La boule ouverte correspond à une inégalité stricte pour la distance[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Boules", "Définitions"],
                q: "Comment est définie une boule fermée $\\overline{B}_d(x_0, r)$ ?",
                options: [
                    { text: "$\\overline{B}_d(x_0, r) = \\{x \\in X \\mid d(x_0, x) \\le r\\}$", isCorrect: true },
                    { text: "$\\overline{B}_d(x_0, r) = \\{x \\in X \\mid d(x_0, x) = r\\}$", isCorrect: false }
                ],
                explanation: "La boule fermée inclut la frontière (inégalité large)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Boules", "Définitions"],
                q: "Comment est définie la sphère $S_d(x_0, r)$ ?",
                options: [
                    { text: "$S_d(x_0, r) = \\{x \\in X \\mid d(x_0, x) = r\\}$", isCorrect: true },
                    { text: "$S_d(x_0, r) = \\{x \\in X \\mid d(x_0, x) \\le r\\}$", isCorrect: false }
                ],
                explanation: "La sphère contient uniquement les points situés exactement à la distance $r$ du centre[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Boules", "Distance discrète"],
                q: "Dans un espace métrique muni de la distance discrète, que vaut la boule ouverte $B_d(x, r)$ si $0 < r \\le 1$ ?",
                options: [
                    { text: "$B_d(x, r) = \\{x\\}$", isCorrect: true },
                    { text: "$B_d(x, r) = X$", isCorrect: false },
                    { text: "$B_d(x, r) = \\emptyset$", isCorrect: false }
                ],
                explanation: "Pour la distance discrète, toute distance non nulle vaut 1. Si le rayon est $\\le 1$, la boule ouverte (inégalité stricte $< r$) ne peut contenir aucun autre point que le centre $x$ dont la distance est 0[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Boules", "Distance discrète"],
                q: "Dans un espace métrique muni de la distance discrète, que vaut la boule ouverte $B_d(x, r)$ si $r > 1$ ?",
                options: [
                    { text: "$B_d(x, r) = X$", isCorrect: true },
                    { text: "$B_d(x, r) = \\{x\\}$", isCorrect: false }
                ],
                explanation: "Si le rayon est strictement supérieur à 1, tous les points de l'espace (situés à une distance de 1) satisfont l'inégalité stricte $< r$, donc la boule est l'espace entier $X$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Boules", "Distance discrète"],
                q: "Dans un espace métrique discret, que vaut la sphère $S_d(x, 1)$ ?",
                options: [
                    { text: "$X \\setminus \\{x\\}$", isCorrect: true },
                    { text: "$\\emptyset$", isCorrect: false },
                    { text: "$\\{x\\}$", isCorrect: false }
                ],
                explanation: "La sphère de rayon 1 rassemble les points à distance exactement 1. Dans la distance discrète, c'est le cas de tous les points de $X$ à l'exception du centre $x$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Propriété de Hausdorff"],
                q: "Que garantit la propriété de Hausdorff pour deux points distincts $x_1 \\neq x_2$ dans un espace métrique ?",
                options: [
                    { text: "Il existe deux rayons $r_1, r_2 > 0$ tels que les boules ouvertes $B_d(x_1, r_1)$ et $B_d(x_2, r_2)$ sont disjointes", isCorrect: true },
                    { text: "Les boules fermées centrées en ces points ont toujours une intersection non vide", isCorrect: false }
                ],
                explanation: "Tout espace métrique possède la propriété de Hausdorff (ou séparation), ce qui permet toujours d'isoler deux points distincts par des voisinages ouverts disjoints (par exemple avec des rayons valant le tiers de la distance entre eux)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Boules", "Distances équivalentes"],
                q: "Si deux distances $d$ et $d_*$ sont équivalentes ($C_1 d \\le d_* \\le C_2 d$), que peut-on dire de leurs boules ouvertes ?",
                options: [
                    { text: "Les boules s'emboîtent : $B_d(x_0, r) \\subseteq B_{d_*}(x_0, C_2 r)$ et $B_{d_*}(x_0, r) \\subseteq B_d(x_0, r/C_1)$", isCorrect: true },
                    { text: "Les boules ouvertes sont strictement identiques pour tout rayon $r$", isCorrect: false }
                ],
                explanation: "L'équivalence des distances garantit l'emboîtement des boules ouvertes l'une dans l'autre (à une constante près), ce qui implique qu'elles définissent les mêmes voisinages et ouverts[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Boules", "Distance induite"],
                q: "Soit $Y \\subseteq X$ muni de la distance induite $d_Y$. Comment s'exprime la boule $B_{d_Y}(x_0, r)$ pour $x_0 \\in Y$ ?",
                options: [
                    { text: "$B_{d_Y}(x_0, r) = Y \\cap B_d(x_0, r)$", isCorrect: true },
                    { text: "$B_{d_Y}(x_0, r) = B_d(x_0, r) \\setminus Y$", isCorrect: false }
                ],
                explanation: "La boule dans le sous-espace $Y$ est simplement l'intersection de la boule de l'espace global $X$ avec la partie $Y$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.4 VOISINAGES, POINTS INTÉRIEURS ET ADHÉRENTS ---
            {
                type: "qcm", tags: ["Voisinages", "Distance à une partie"],
                q: "Comment est définie la distance d'un point $x_0$ à une partie $E \\subseteq X$ ?",
                options: [
                    { text: "$d(x_0, E) = \\inf_{y \\in E} d(x_0, y)$", isCorrect: true },
                    { text: "$d(x_0, E) = \\min_{y \\in E} d(x_0, y)$", isCorrect: false }
                ],
                explanation: "La distance est définie par la borne inférieure (inf), car le minimum n'est pas obligatoirement atteint (il se peut qu'il n'existe aucun point $y \\in E$ réalisant exactement cette distance)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Voisinages", "Définitions"],
                q: "Qu'est-ce qu'un voisinage de $x_0$ dans un espace métrique ?",
                options: [
                    { text: "Une partie $E$ qui contient une boule ouverte centrée en $x_0$", isCorrect: true },
                    { text: "Uniquement une boule ouverte centrée en $x_0$", isCorrect: false },
                    { text: "Tout ensemble contenant le point $x_0$", isCorrect: false }
                ],
                explanation: "Par définition, $E$ est un voisinage de $x_0$ s'il existe $r>0$ tel que $B_d(x_0, r) \\subseteq E$[cite: 1]. Toute boule ouverte est donc un voisinage, mais un voisinage n'est pas forcément ouvert[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Voisinages", "Propriétés"],
                q: "Que peut-on dire de l'intersection de deux voisinages de $x_0$ ?",
                options: [
                    { text: "C'est encore un voisinage de $x_0$", isCorrect: true },
                    { text: "Ce n'est plus nécessairement un voisinage", isCorrect: false }
                ],
                explanation: "Si $B(x_0, r_1) \\subseteq E_1$ et $B(x_0, r_2) \\subseteq E_2$, alors la boule de rayon $\\min(r_1, r_2)$ est incluse dans l'intersection $E_1 \\cap E_2$, qui est donc un voisinage[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Intérieur", "Définitions"],
                q: "Quand dit-on qu'un point $x_0$ est « intérieur » à une partie $E$ ?",
                options: [
                    { text: "Si $E$ est un voisinage de $x_0$ (i.e. $\\exists r > 0, B_d(x_0, r) \\subseteq E$)", isCorrect: true },
                    { text: "Si $x_0 \\in E$", isCorrect: false }
                ],
                explanation: "Appartenir à $E$ ne suffit pas. Pour être intérieur, il faut qu'il y ait tout un espace (une boule ouverte) autour du point qui soit entièrement contenu dans $E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Adhérence", "Définitions"],
                q: "Quand dit-on qu'un point $x_0$ est « adhérent » à une partie $E$ ?",
                options: [
                    { text: "Si tout voisinage de $x_0$ a une intersection non vide avec $E$ (i.e. $\\forall r > 0, B_d(x_0, r) \\cap E \\neq \\emptyset$)", isCorrect: true },
                    { text: "S'il existe un voisinage de $x_0$ entièrement inclus dans $E$", isCorrect: false }
                ],
                explanation: "Un point adhérent n'a pas besoin d'appartenir à $E$, il suffit qu'on puisse trouver des points de $E$ arbitrairement proches de lui (toute boule autour de $x_0$ touche $E$)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Topologie", "Caractérisation métrique"],
                q: "Lequel de ces énoncés est équivalent au fait que $x_0$ est un point INTÉRIEUR à $E$ ?",
                options: [
                    { text: "$d(x_0, E^c) > 0$", isCorrect: true },
                    { text: "$d(x_0, E) = 0$", isCorrect: false }
                ],
                explanation: "Si la distance au complémentaire est strictement positive, cela signifie qu'il y a une « marge » (une boule) autour de $x_0$ qui ne touche pas $E^c$, donc qui est incluse dans $E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Topologie", "Caractérisation métrique"],
                q: "Lequel de ces énoncés est équivalent au fait que $x_0$ est un point ADHÉRENT à $E$ ?",
                options: [
                    { text: "$d(x_0, E) = 0$", isCorrect: true },
                    { text: "$d(x_0, E^c) > 0$", isCorrect: false }
                ],
                explanation: "Si la distance (infimum) de $x_0$ à $E$ est nulle, cela signifie qu'on peut s'approcher de $E$ de façon infinitésimale : toute boule autour de $x_0$ rencontre $E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Points particuliers", "Isolé"],
                q: "Qu'est-ce qu'un point isolé de $E$ ?",
                options: [
                    { text: "Un point $x_0 \\in E$ tel qu'il existe $r>0$ pour lequel $B_d(x_0, r) \\cap E = \\{x_0\\}$", isCorrect: true },
                    { text: "Un point qui n'est pas adhérent à $E$", isCorrect: false }
                ],
                explanation: "Un point isolé appartient à $E$, mais il y a un \"vide\" de points de $E$ autour de lui. Il est seul dans une petite boule[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Points particuliers", "Accumulation"],
                q: "Qu'est-ce qu'un point d'accumulation de $E$ ?",
                options: [
                    { text: "Un point $x_0$ tel que toute boule autour de $x_0$ contient au moins un point de $E$ distinct de $x_0$", isCorrect: true },
                    { text: "Un point qui est intérieur à $E$", isCorrect: false }
                ],
                explanation: "Un point d'accumulation a la propriété : $\\forall r > 0, \\exists x \\neq x_0 \\text{ tel que } x \\in B_d(x_0, r) \\cap E$[cite: 1]. Tout point adhérent est soit isolé, soit d'accumulation[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Points particuliers", "Frontière"],
                q: "Qu'est-ce qu'un point de frontière de $E$ ?",
                options: [
                    { text: "Un point adhérent à $E$ qui n'est pas intérieur à $E$", isCorrect: true },
                    { text: "Un point extérieur à $E$ et non adhérent", isCorrect: false }
                ],
                explanation: "Autrement dit, pour un point de frontière $x_0$, toute boule autour de $x_0$ rencontre à la fois $E$ et son complémentaire $E^c$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Topologie", "Exemples"],
                q: "Dans $\\mathbb{R}$, on considère l'ensemble des rationnels $\\mathbb{Q}$. Quelle est la particularité de chaque point de $\\mathbb{R}$ vis-à-vis de $\\mathbb{Q}$ ?",
                options: [
                    { text: "Chaque point de $\\mathbb{R}$ est un point d'accumulation et un point de frontière de $\\mathbb{Q}$", isCorrect: true },
                    { text: "Chaque point de $\\mathbb{R}$ est intérieur à $\\mathbb{Q}$", isCorrect: false }
                ],
                explanation: "Comme $\\mathbb{Q}$ est dense dans $\\mathbb{R}$, toute boule autour de n'importe quel réel contient des rationnels (donc adhérence) et des irrationnels (donc pas d'intérieur). Chaque réel est donc sur la frontière[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.5 PARTIES OUVERTES ET FERMÉES ---
            {
                type: "qcm", tags: ["Ouverts et Fermés", "Définitions"],
                q: "Comment définit-on une partie OUVERTE $E$ dans un espace métrique ?",
                options: [
                    { text: "Chaque point de $E$ est un point intérieur à $E$", isCorrect: true },
                    { text: "Chaque point de $E$ est un point isolé", isCorrect: false }
                ],
                explanation: "Une partie est ouverte si elle forme un voisinage pour chacun de ses points (i.e., on peut y centrer une boule ouverte entièrement contenue dans $E$)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Ouverts et Fermés", "Définitions"],
                q: "Comment définit-on une partie FERMÉE $E$ dans un espace métrique ?",
                options: [
                    { text: "Elle contient tous ses points d'adhérence", isCorrect: true },
                    { text: "Elle contient tous ses points intérieurs", isCorrect: false }
                ],
                explanation: "Si on s'approche de $E$ jusqu'à sa frontière, on reste dans $E$. Une partie fermée contient donc toute sa frontière[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Ouverts et Fermés", "Complémentaire"],
                q: "Quel est le lien fondamental entre ouverts et fermés ?",
                options: [
                    { text: "$E$ est fermée si et seulement si son complémentaire $E^c$ est ouvert", isCorrect: true },
                    { text: "$E$ est fermée si et seulement si elle n'est pas ouverte", isCorrect: false }
                ],
                explanation: "C'est la dualité de la topologie. Si $E$ contient ses points d'adhérence, alors tout point extérieur a une distance non nulle avec $E$, donc peut être entouré d'une boule ouverte disjointe de $E$ (faisant de $E^c$ un ouvert)[cite: 1]. Attention : un ensemble peut être ni ouvert ni fermé[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Ouverts et Fermés", "Propriétés"],
                q: "Parmi les assertions suivantes sur l'espace total $X$ et l'ensemble vide $\\emptyset$, laquelle est vraie ?",
                options: [
                    { text: "$X$ et $\\emptyset$ sont à la fois ouverts et fermés", isCorrect: true },
                    { text: "$X$ est ouvert mais pas fermé, $\\emptyset$ est fermé mais pas ouvert", isCorrect: false }
                ],
                explanation: "C'est une propriété universelle de toute topologie. $X$ contient tout (donc tous ses points d'adhérence), et tout point y est intérieur. $\\emptyset$ est son complémentaire, donc il hérite des deux propriétés[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Ouverts et Fermés", "Boules"],
                q: "Dans un espace métrique, une boule ouverte $B_d(x_0, r)$ est-elle une partie ouverte ?",
                options: [
                    { text: "Oui, toujours", isCorrect: true },
                    { text: "Pas nécessairement, cela dépend de la distance", isCorrect: false }
                ],
                explanation: "La démonstration s'appuie sur l'inégalité triangulaire : si $y \\in B_d(x_0, r)$, alors une petite boule de rayon $r - d(x_0, y)$ centrée en $y$ restera incluse dans la grande boule, prouvant que tout point est intérieur[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Ouverts et Fermés", "Singletons"],
                q: "Dans n'importe quel espace métrique, quelle est la nature topologique d'un singleton $\\{x\\}$ ?",
                options: [
                    { text: "C'est toujours une partie fermée", isCorrect: true },
                    { text: "Ce n'est ni ouvert ni fermé en général", isCorrect: false }
                ],
                explanation: "Un point isolé sans autres éléments autour de lui contient trivialement tous ses (uniques) points d'adhérence. Son complémentaire est d'ailleurs un ouvert[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Ouverts et Fermés", "Intervalles de R"],
                q: "Dans $(\\mathbb{R}, |\\cdot|)$, quelle est la nature de l'intervalle $[a, b[$ ?",
                options: [
                    { text: "Il n'est ni ouvert ni fermé", isCorrect: true },
                    { text: "Il est ouvert", isCorrect: false },
                    { text: "Il est fermé", isCorrect: false }
                ],
                explanation: "Il n'est pas ouvert car le point $a$ n'est pas intérieur (toute boule centrée en $a$ déborde à gauche de $a$). Il n'est pas fermé car il ne contient pas son point d'adhérence $b$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Ouverts et Fermés", "Topologie discrète"],
                q: "Dans un espace muni de la distance discrète, quelle est la nature topologique d'une partie $E$ quelconque ?",
                options: [
                    { text: "Toute partie $E$ est à la fois ouverte et fermée", isCorrect: true },
                    { text: "La notion d'ouvert/fermé n'a pas de sens", isCorrect: false }
                ],
                explanation: "Chaque point $x$ admet la boule $B(x,1) = \\{x\\}$ comme voisinage ouvert. Toute partie est donc union de boules ouvertes, donc ouverte. Son complémentaire l'est aussi, la rendant fermée[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    }
});

