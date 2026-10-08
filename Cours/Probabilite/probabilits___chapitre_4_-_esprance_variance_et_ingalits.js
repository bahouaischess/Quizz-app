// ============================================================
// MatiÃ¨re : Probabilités : Chapitre 4 - Espérance, variance et inégalités
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
Object.assign(defaultData, {
    "Probabilités : Chapitre 4 - Espérance, variance et inégalités": {
        folder: "Probabilités",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Espérance", "Cas discret"],
                q: "Soit $(\\Omega, F, P)$ un espace probabilisé avec $\\Omega$ fini ou dénombrable, et $p_\\omega = P(\\{\\omega\\})$. Comment est définie l'espérance $E(X)$ d'une variable aléatoire $X$ définie sur $\\Omega$ ?",
                options: [
                    { text: "$E(X) = \\sum_{\\omega \\in \\Omega} p_\\omega X(\\omega)$", isCorrect: true },
                    { text: "$E(X) = \\sum_{\\omega \\in \\Omega} X(\\omega)$", isCorrect: false },
                    { text: "$E(X) = \\max_{\\omega \\in \\Omega} p_\\omega X(\\omega)$", isCorrect: false },
                    { text: "$E(X) = \\prod_{\\omega \\in \\Omega} p_\\omega X(\\omega)$", isCorrect: false }
                ],
                explanation: "Par définition, l'espérance pondère chaque valeur $X(\\omega)$ par la probabilité $p_\\omega$ de l'issue $\\omega$ correspondante, puis somme sur tout $\\Omega$. C'est la moyenne pondérée par les probabilités.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Espérance", "Intégrabilité"],
                q: "Dans le cas d'un espace des états $\\Omega$ fini ou dénombrable, quelle condition garantit que l'espérance $E(X) = \\sum_{\\omega\\in\\Omega} p_\\omega X(\\omega)$ est bien définie ?",
                options: [
                    { text: "$\\sum_{\\omega\\in\\Omega} p_\\omega |X(\\omega)| < \\infty$", isCorrect: true },
                    { text: "$X$ doit être positive", isCorrect: false },
                    { text: "$\\Omega$ doit être fini", isCorrect: false },
                    { text: "$\\sum_{\\omega\\in\\Omega} X(\\omega) = 1$", isCorrect: false }
                ],
                explanation: "La Définition 4.1 exige que la somme $\\sum_{\\omega\\in\\Omega} p_\\omega |X(\\omega)|$ soit finie pour que l'espérance soit bien définie ; c'est une condition d'intégrabilité, et elle n'exige pas que $\\Omega$ soit fini (dénombrable suffit) ni que $X$ soit positive.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Espérance", "Loi"],
                q: "D'après le Théorème 4.2, que peut-on affirmer sur l'espérance $E(X)$ lorsque $X(\\Omega)=\\{x_i\\}_{i\\in I}$ ?",
                options: [
                    { text: "$E(X)$ ne dépend que de la loi de $X$, avec $E(X) = \\sum_{i\\in I} x_i P(X=x_i)$", isCorrect: true },
                    { text: "$E(X)$ dépend uniquement de $\\Omega$, pas de la loi de $X$", isCorrect: false },
                    { text: "$E(X)$ ne peut se calculer qu'à partir de $(\\Omega, F, P)$", isCorrect: false },
                    { text: "$E(X)$ n'est définie que si $I$ est fini", isCorrect: false }
                ],
                explanation: "Le Théorème 4.2 permet de passer de l'espace de départ abstrait $(\\Omega,F,P)$ à l'espace d'arrivée $X(\\Omega)$ : l'espérance se réécrit uniquement en fonction de la loi $P_X$ de $X$, ce qui est un résultat clé pour les calculs pratiques.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable étagée"],
                q: "Qu'est-ce qu'une variable aléatoire étagée ?",
                options: [
                    { text: "Une variable aléatoire qui ne prend qu'un nombre fini de valeurs $x_1,\\dots,x_m$", isCorrect: true },
                    { text: "Une variable aléatoire positive", isCorrect: false },
                    { text: "Une variable aléatoire à densité", isCorrect: false },
                    { text: "Une variable aléatoire dénombrable", isCorrect: false }
                ],
                explanation: "Selon la Définition 4.3, une variable aléatoire étagée est de la forme $X = \\sum_{i=1}^m x_i \\mathbb{1}_{A_i}$ avec $A_i = \\{X=x_i\\}$, c'est-à-dire qu'elle ne prend qu'un nombre fini de valeurs distinctes.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Espérance", "Variable positive"],
                q: "Comment est définie l'espérance d'une variable aléatoire positive $X$ (pas nécessairement intégrable) ?",
                options: [
                    { text: "$E(X) = \\sup\\{E(Z) : Z \\text{ étagée positive}, Z \\le X\\}$", isCorrect: true },
                    { text: "$E(X) = \\inf\\{E(Z) : Z \\text{ étagée positive}, Z \\le X\\}$", isCorrect: false },
                    { text: "$E(X)$ n'est jamais définie pour une variable positive non intégrable", isCorrect: false },
                    { text: "$E(X) = \\lim_{n\\to\\infty} X_n$ où $X_n$ est une suite quelconque", isCorrect: false }
                ],
                explanation: "L'espérance d'une variable positive se définit comme le supremum des espérances des variables étagées positives qui la minorent. Cette quantité est toujours positive mais peut valoir $+\\infty$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Décomposition X+ X-"],
                q: "Pour une variable aléatoire quelconque $X$, on écrit $X = X^+ - X^-$. Lesquelles de ces affirmations sont vraies ?",
                options: [
                    { text: "$X^+ = \\max(0, X)$", isCorrect: true },
                    { text: "$X^- = \\max(0, -X)$", isCorrect: true },
                    { text: "$X^-$ et $X^+$ sont toutes deux des variables aléatoires positives", isCorrect: true },
                    { text: "$X = X^+ + X^-$", isCorrect: false }
                ],
                explanation: "$X^+$ et $X^-$ sont respectivement la partie positive et la partie négative de $X$, toutes deux positives. On a bien $X = X^+ - X^-$ (et non $X^+ + X^-$, qui donnerait $|X|$).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Intégrabilité"],
                q: "Une variable aléatoire $X$ est dite intégrable si et seulement si :",
                options: [
                    { text: "$E(X^+) < \\infty$ et $E(X^-) < \\infty$", isCorrect: true },
                    { text: "$E(|X|) < \\infty$", isCorrect: true },
                    { text: "$E(X) > 0$", isCorrect: false },
                    { text: "$X$ est bornée", isCorrect: false }
                ],
                explanation: "Les deux premières conditions sont équivalentes, car $|X| = X^+ + X^-$. La positivité de l'espérance et le caractère borné de $X$ ne sont ni nécessaires ni suffisants pour l'intégrabilité.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable centrée"],
                q: "Une variable aléatoire positive ou intégrable $X$ est dite centrée si :",
                options: [
                    { text: "$E(X) = 0$", isCorrect: true },
                    { text: "$\\text{Var}(X) = 0$", isCorrect: false },
                    { text: "$X = 0$ presque sûrement", isCorrect: false },
                    { text: "$E(X) = E(X^2)$", isCorrect: false }
                ],
                explanation: "Par la Définition 4.5, une variable aléatoire est centrée si son espérance est nulle, sans condition sur sa variance ou sur la valeur de $X$ elle-même.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Propriétés espérance", "Linéarité"],
                q: "Soient $X, Y$ deux variables aléatoires intégrables et $a, b \\in \\mathbb{R}$. Que vaut $E(aX+bY)$ ?",
                options: [
                    { text: "$aE(X) + bE(Y)$", isCorrect: true },
                    { text: "$abE(XY)$", isCorrect: false },
                    { text: "$a E(X) \\cdot b E(Y)$", isCorrect: false },
                    { text: "$E(X) + E(Y)$", isCorrect: false }
                ],
                explanation: "La linéarité de l'espérance (Proposition 4.6, point 2) donne directement $E(aX+bY) = aE(X)+bE(Y)$, ce qui fait de $L^1(\\Omega,F,P)$ un espace vectoriel.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Propriétés espérance", "Monotonie"],
                q: "Si $X \\le Y$ presque sûrement (avec $X,Y$ positives ou intégrables), que peut-on en conclure ?",
                options: [
                    { text: "$E(X) \\le E(Y)$", isCorrect: true },
                    { text: "$E(X) = E(Y)$", isCorrect: false },
                    { text: "$E(X) \\ge E(Y)$", isCorrect: false },
                    { text: "On ne peut rien conclure sans indépendance", isCorrect: false }
                ],
                explanation: "La monotonie de l'espérance (Proposition 4.6, point 3) affirme que $X \\le Y$ p.s. implique $E(X) \\le E(Y)$, de manière équivalente $X\\ge 0$ p.s. implique $E(X)\\ge 0$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Propriétés espérance"],
                q: "Pour $X$ intégrable, quelle inégalité relie $|E(X)|$ et $E(|X|)$ ?",
                options: [
                    { text: "$|E(X)| \\le E(|X|)$", isCorrect: true },
                    { text: "$|E(X)| \\ge E(|X|)$", isCorrect: false },
                    { text: "$|E(X)| = E(|X|)$ toujours", isCorrect: false },
                    { text: "Aucune relation générale n'existe", isCorrect: false }
                ],
                explanation: "C'est la propriété 4 de la Proposition 4.6 : la valeur absolue de l'espérance est toujours majorée par l'espérance de la valeur absolue.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Convergence monotone"],
                q: "Quelles sont les hypothèses du théorème de convergence monotone pour une suite $(X_n)_{n\\ge1}$ ?",
                options: [
                    { text: "$(X_n)$ est croissante et positive presque sûrement", isCorrect: true },
                    { text: "$(X_n)$ converge vers $X$ presque sûrement", isCorrect: true },
                    { text: "$(X_n)$ converge en loi vers $X$", isCorrect: false },
                    { text: "$(X_n)$ est majorée par une variable aléatoire intégrable", isCorrect: false }
                ],
                explanation: "Le théorème de convergence monotone exige que la suite soit croissante et positive p.s. et qu'elle converge p.s. vers $X$. Sous ces conditions, $E(X_n) \\to E(X)$. La domination par une variable intégrable est l'hypothèse du théorème de convergence dominée, pas de la convergence monotone.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Convergence dominée"],
                q: "Quelles sont les hypothèses du théorème de convergence dominée ?",
                options: [
                    { text: "$(X_n)$ converge vers $X$ presque sûrement", isCorrect: true },
                    { text: "Il existe $Y$ intégrable telle que $|X_n| \\le Y$ presque sûrement pour tout $n$", isCorrect: true },
                    { text: "$(X_n)$ doit être croissante", isCorrect: false },
                    { text: "$X$ doit être positive", isCorrect: false }
                ],
                explanation: "Contrairement à la convergence monotone, aucune monotonie n'est requise : il suffit de la convergence p.s. et d'une domination par une variable aléatoire intégrable $Y$. On conclut alors que $X$ est intégrable et $E(X_n)\\to E(X)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Caractérisation de la loi"],
                q: "D'après le Théorème 4.8, deux variables aléatoires $X$ et $Y$ ont la même loi si et seulement si :",
                options: [
                    { text: "Pour toute fonction $h : \\mathbb{R} \\to \\mathbb{R}$ continue et bornée, $E(h(X)) = E(h(Y))$", isCorrect: true },
                    { text: "$E(X) = E(Y)$", isCorrect: false },
                    { text: "$\\text{Var}(X) = \\text{Var}(Y)$", isCorrect: false },
                    { text: "$X$ et $Y$ sont indépendantes", isCorrect: false }
                ],
                explanation: "L'égalité des espérances de $X$ et $Y$ seules ne caractérise pas la loi (contre-exemple facile), mais connaître $E(h(X))=E(h(Y))$ pour toute fonction continue bornée $h$ le fait, car cela permet de reconstruire la fonction de répartition.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Théorème de transfert", "Discret"],
                q: "Soit $X$ une variable aléatoire discrète réelle à valeurs dans $E=\\{x_i\\}_{i\\in I}$, et $h : E \\to \\mathbb{R}$ telle que $h(X)$ soit positive ou intégrable. Que vaut $E(h(X))$ ?",
                options: [
                    { text: "$\\sum_{i\\in I} h(x_i) P(X=x_i)$", isCorrect: true },
                    { text: "$\\sum_{i\\in I} h(x_i)$", isCorrect: false },
                    { text: "$h\\left(\\sum_{i\\in I} x_i P(X=x_i)\\right)$", isCorrect: false },
                    { text: "$\\int_{-\\infty}^{\\infty} h(x) f(x)\\, dx$", isCorrect: false }
                ],
                explanation: "Le théorème de transfert (Théorème 4.10) dans le cas discret donne $E(h(X)) = \\sum_{i\\in I} h(x_i)P(X=x_i)$. Attention : $E(h(X)) \\ne h(E(X))$ en général (sauf cas particuliers, ex : $h$ affine).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Théorème de transfert", "Densité"],
                q: "Soit $X$ une variable aléatoire à densité $f$, et $h$ telle que $h(X)$ soit positive ou intégrable. Que vaut $E(h(X))$ ?",
                options: [
                    { text: "$\\int_{-\\infty}^{+\\infty} h(x) f(x)\\, dx$", isCorrect: true },
                    { text: "$\\int_{-\\infty}^{+\\infty} h(x)\\, dx$", isCorrect: false },
                    { text: "$\\sum_{x} h(x) f(x)$", isCorrect: false },
                    { text: "$h\\left(\\int_{-\\infty}^{+\\infty} x f(x) dx\\right)$", isCorrect: false }
                ],
                explanation: "Dans le cas à densité, le théorème de transfert donne $E(h(X)) = \\int_{-\\infty}^{+\\infty} h(x) f(x)\\,dx$, condition étant que $\\int |h(x)|f(x)dx < \\infty$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Densité", "Changement de variable"],
                q: "Soit $X$ une variable aléatoire à densité $f$, et $Y = aX+b$ avec $a \\ne 0$. Quelle est la densité $f^Y$ de $Y$ ?",
                options: [
                    { text: "$f^Y(y) = f\\left(\\frac{y-b}{a}\\right) \\frac{1}{|a|}$", isCorrect: true },
                    { text: "$f^Y(y) = f(ay+b)$", isCorrect: false },
                    { text: "$f^Y(y) = a f(y) + b$", isCorrect: false },
                    { text: "$f^Y(y) = f\\left(\\frac{y-b}{a}\\right)$ (sans le facteur $1/|a|$)", isCorrect: false }
                ],
                explanation: "L'Exemple 4.13 obtient ce résultat via le théorème de transfert et le changement de variable $y=ax+b$. Le facteur $\\frac{1}{|a|}$ vient du jacobien de la transformation et assure que $f^Y$ s'intègre bien à 1.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variance", "Définition"],
                q: "Quelle est la définition de la variance de $X$ (variable de carré intégrable) ?",
                options: [
                    { text: "$\\text{Var}(X) = E[(X-E(X))^2]$", isCorrect: true },
                    { text: "$\\text{Var}(X) = E(X^2)$", isCorrect: false },
                    { text: "$\\text{Var}(X) = E(X) - E(X)^2$", isCorrect: false },
                    { text: "$\\text{Var}(X) = E(|X-E(X)|)$", isCorrect: false }
                ],
                explanation: "La variance mesure l'écart quadratique moyen de $X$ à sa moyenne : $\\text{Var}(X) = E[(X-E(X))^2]$. Elle est équivalente à $E(X^2)-E(X)^2$, mais ce n'est pas la définition première.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variance", "Ecart-type"],
                q: "L'écart-type $\\sigma(X)$ est défini par :",
                options: [
                    { text: "$\\sigma(X) = \\sqrt{\\text{Var}(X)}$", isCorrect: true },
                    { text: "$\\sigma(X) = \\text{Var}(X)^2$", isCorrect: false },
                    { text: "$\\sigma(X) = E(|X|)$", isCorrect: false },
                    { text: "$\\sigma(X) = \\text{Var}(X)$", isCorrect: false }
                ],
                explanation: "L'écart-type est la racine carrée de la variance. On lui préfère souvent la variance pour les calculs, mais on préfère l'écart-type en statistique car il a la même unité que $X$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable réduite"],
                q: "Une variable aléatoire $X$ est dite centrée-réduite si :",
                options: [
                    { text: "$\\text{Var}(X) = 1$ et $E(X) = 0$", isCorrect: true },
                    { text: "$\\text{Var}(X) = 0$ et $E(X) = 1$", isCorrect: false },
                    { text: "$\\text{Var}(X) = 1$ uniquement", isCorrect: false },
                    { text: "$E(X) = 1$ uniquement", isCorrect: false }
                ],
                explanation: "Une variable est dite réduite si sa variance vaut 1, et centrée-réduite si de plus son espérance est nulle. C'est le cas typique de la loi $N(0,1)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Propriétés variance"],
                q: "Parmi les propriétés suivantes de la variance (pour $X$ de carré intégrable, $a \\in \\mathbb{R}$), lesquelles sont vraies ?",
                options: [
                    { text: "$\\text{Var}(X+a) = \\text{Var}(X)$", isCorrect: true },
                    { text: "$\\text{Var}(aX) = a^2 \\text{Var}(X)$", isCorrect: true },
                    { text: "$\\text{Var}(X) = E(X^2) - E(X)^2$", isCorrect: true },
                    { text: "$\\text{Var}(aX) = a \\, \\text{Var}(X)$", isCorrect: false }
                ],
                explanation: "La variance est invariante par translation, quadratique en le facteur multiplicatif ($\\text{Var}(aX)=a^2\\text{Var}(X)$, pas $a\\,\\text{Var}(X)$), et se calcule aussi par la formule de Koenig-Huygens $\\text{Var}(X)=E(X^2)-E(X)^2$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variance", "Positivité"],
                q: "Que peut-on dire du signe de $\\text{Var}(X)$ pour toute variable aléatoire $X$ de carré intégrable ?",
                options: [
                    { text: "$\\text{Var}(X) \\ge 0$ toujours", isCorrect: true },
                    { text: "$\\text{Var}(X) > 0$ toujours", isCorrect: false },
                    { text: "$\\text{Var}(X)$ peut être négative si $X$ prend des valeurs négatives", isCorrect: false },
                    { text: "Le signe dépend de $E(X)$", isCorrect: false }
                ],
                explanation: "La variance est toujours positive ou nulle car $\\text{Var}(X)=E[(X-E(X))^2]$, espérance d'une quantité positive (par monotonie de l'espérance). Elle est nulle si et seulement si $X$ est presque sûrement constante.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Covariance", "Définition"],
                q: "Quelle est la définition de la covariance de deux variables aléatoires $X, Y$ de carré intégrable ?",
                options: [
                    { text: "$\\text{Cov}(X,Y) = E[(X-E(X))(Y-E(Y))]$", isCorrect: true },
                    { text: "$\\text{Cov}(X,Y) = E(XY)$", isCorrect: false },
                    { text: "$\\text{Cov}(X,Y) = \\text{Var}(X) \\times \\text{Var}(Y)$", isCorrect: false },
                    { text: "$\\text{Cov}(X,Y) = E(X) + E(Y)$", isCorrect: false }
                ],
                explanation: "La covariance généralise la variance au cas de deux variables : elle mesure comment elles varient conjointement autour de leurs moyennes respectives.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Covariance", "Formule pratique"],
                q: "Quelle est la formule pratique pour calculer $\\text{Cov}(X,Y)$ ?",
                options: [
                    { text: "$\\text{Cov}(X,Y) = E(XY) - E(X)E(Y)$", isCorrect: true },
                    { text: "$\\text{Cov}(X,Y) = E(XY) + E(X)E(Y)$", isCorrect: false },
                    { text: "$\\text{Cov}(X,Y) = E(X^2Y^2) - E(X)^2E(Y)^2$", isCorrect: false },
                    { text: "$\\text{Cov}(X,Y) = E(X)E(Y)$", isCorrect: false }
                ],
                explanation: "En développant $E[(X-E(X))(Y-E(Y))]$ et en utilisant la linéarité de l'espérance, on obtient directement $\\text{Cov}(X,Y) = E(XY)-E(X)E(Y)$ (Proposition 4.21, point 4).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Corrélation"],
                q: "Comment est définie la corrélation $\\text{Cor}(X,Y)$ entre deux variables aléatoires de variances non-nulles ?",
                options: [
                    { text: "$\\text{Cor}(X,Y) = \\dfrac{\\text{Cov}(X,Y)}{\\sigma(X)\\sigma(Y)}$", isCorrect: true },
                    { text: "$\\text{Cor}(X,Y) = \\text{Cov}(X,Y) \\times \\sigma(X)\\sigma(Y)$", isCorrect: false },
                    { text: "$\\text{Cor}(X,Y) = \\dfrac{\\sigma(X)\\sigma(Y)}{\\text{Cov}(X,Y)}$", isCorrect: false },
                    { text: "$\\text{Cor}(X,Y) = \\text{Var}(X) + \\text{Var}(Y)$", isCorrect: false }
                ],
                explanation: "La corrélation normalise la covariance par les écarts-types, ce qui la rend sans unité et comprise entre $-1$ et $1$ (conséquence de Cauchy-Schwarz).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Covariance", "Bilinéarité"],
                q: "Soient $X, Y, Z$ de carré intégrable et $a,b\\in\\mathbb{R}$. Que vaut $\\text{Cov}(aX+bY, Z)$ ?",
                options: [
                    { text: "$a\\,\\text{Cov}(X,Z) + b\\,\\text{Cov}(Y,Z)$", isCorrect: true },
                    { text: "$ab\\,\\text{Cov}(X,Z)\\text{Cov}(Y,Z)$", isCorrect: false },
                    { text: "$\\text{Cov}(X,Z) + \\text{Cov}(Y,Z)$", isCorrect: false },
                    { text: "$a\\,\\text{Cov}(X,Y)+b\\,\\text{Cov}(Y,Z)$", isCorrect: false }
                ],
                explanation: "La covariance est une forme bilinéaire (Proposition 4.21, point 2) : elle est linéaire par rapport à chacun de ses deux arguments, ce qui donne $\\text{Cov}(aX+bY,Z)=a\\,\\text{Cov}(X,Z)+b\\,\\text{Cov}(Y,Z)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variance de la somme"],
                q: "Quelle est la relation générale entre $\\text{Var}(X+Y)$, $\\text{Var}(X)$, $\\text{Var}(Y)$ et $\\text{Cov}(X,Y)$ ?",
                options: [
                    { text: "$\\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y) + 2\\,\\text{Cov}(X,Y)$", isCorrect: true },
                    { text: "$\\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y)$ toujours", isCorrect: false },
                    { text: "$\\text{Var}(X+Y) = \\text{Var}(X) \\times \\text{Var}(Y)$", isCorrect: false },
                    { text: "$\\text{Var}(X+Y) = \\text{Var}(X) - \\text{Var}(Y)$", isCorrect: false }
                ],
                explanation: "C'est le point 5 de la Proposition 4.21 : la formule générale contient toujours le terme de covariance, qui ne s'annule que si $X$ et $Y$ sont non corrélées (par exemple si elles sont indépendantes).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Matrice de covariance"],
                q: "Concernant la matrice de covariance $\\text{Cov}$ de $X_1,\\dots,X_n$ de carré intégrable, quelles affirmations sont vraies ?",
                options: [
                    { text: "Elle est symétrique", isCorrect: true },
                    { text: "Sa diagonale est formée des variances $\\text{Var}(X_i)$", isCorrect: true },
                    { text: "$\\text{Var}\\left(\\sum_{i=1}^n X_i\\right) = \\sum_{i=1}^n \\text{Var}(X_i) + 2\\sum_{1\\le i<j\\le n} \\text{Cov}(X_i,X_j)$", isCorrect: true },
                    { text: "Elle est toujours diagonale", isCorrect: false }
                ],
                explanation: "La matrice de covariance est réelle symétrique (car $\\text{Cov}(X_i,X_j)=\\text{Cov}(X_j,X_i)$), sa diagonale contient les variances, et la formule de la variance d'une somme fait apparaître tous les termes croisés. Elle n'est diagonale que si les covariances croisées sont nulles (par exemple en cas d'indépendance).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Moment d'ordre n"],
                q: "Pour une variable aléatoire $X$ et $n \\in \\mathbb{N}^*$ tel que $X^n$ est intégrable, comment appelle-t-on la quantité $E(X^n)$ ?",
                options: [
                    { text: "Le moment d'ordre $n$ de $X$", isCorrect: true },
                    { text: "La variance d'ordre $n$", isCorrect: false },
                    { text: "L'écart-type d'ordre $n$", isCorrect: false },
                    { text: "Le quantile d'ordre $n$", isCorrect: false }
                ],
                explanation: "Par définition (Définition 4.26), $E(X^n)$ est appelé le moment d'ordre $n$ de $X$ ; le moment d'ordre 1 est l'espérance, et le moment d'ordre 2 sert à définir la variance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Inégalité de Markov"],
                q: "Soit $X$ admettant un moment d'ordre $n \\ge 1$. Que dit l'inégalité de Markov pour $a > 0$ ?",
                options: [
                    { text: "$P(|X| \\ge a) \\le \\dfrac{E(|X|^n)}{a^n}$", isCorrect: true },
                    { text: "$P(|X| \\ge a) \\ge \\dfrac{E(|X|^n)}{a^n}$", isCorrect: false },
                    { text: "$P(|X| \\ge a) \\le \\dfrac{a^n}{E(|X|^n)}$", isCorrect: false },
                    { text: "$P(|X| \\ge a) = \\dfrac{E(|X|^n)}{a^n}$", isCorrect: false }
                ],
                explanation: "L'inégalité de Markov (Proposition 4.28) majore la probabilité que $|X|$ dépasse un seuil $a$ par $E(|X|^n)/a^n$. La preuve utilise l'inégalité $|X|^n \\ge a^n \\mathbb{1}_{|X|\\ge a}$ puis la monotonie de l'espérance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Inégalité de Bienaymé-Tchebychev"],
                q: "Soit $X$ de carré intégrable. Que dit l'inégalité de Bienaymé-Tchebychev pour $a > 0$ ?",
                options: [
                    { text: "$P(|X - E(X)| \\ge a) \\le \\dfrac{\\text{Var}(X)}{a^2}$", isCorrect: true },
                    { text: "$P(|X - E(X)| \\ge a) \\le \\dfrac{E(X)}{a^2}$", isCorrect: false },
                    { text: "$P(|X - E(X)| \\ge a) \\ge \\dfrac{\\text{Var}(X)}{a^2}$", isCorrect: false },
                    { text: "$P(|X - E(X)| \\ge a) \\le \\dfrac{\\text{Var}(X)}{a}$", isCorrect: false }
                ],
                explanation: "Cette inégalité quantifie comment plus la variance est grande, plus les fluctuations autour de la moyenne peuvent être importantes. C'est une version 'déguisée' de l'inégalité de Markov appliquée à $Y=X-E(X)$ avec $n=2$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Bienaymé-Tchebychev", "Démonstration"],
                q: "La preuve de l'inégalité de Bienaymé-Tchebychev applique l'inégalité de Markov à quelle variable aléatoire, et avec quel exposant $n$ ?",
                options: [
                    { text: "$Y = X - E(X)$ avec $n = 2$", isCorrect: true },
                    { text: "$Y = X$ avec $n = 1$", isCorrect: false },
                    { text: "$Y = X^2$ avec $n = 1$", isCorrect: false },
                    { text: "$Y = X - E(X)$ avec $n = 1$", isCorrect: false }
                ],
                explanation: "En posant $Y = X-E(X)$ et en appliquant Markov avec $n=2$ : $P(|Y|\\ge a) \\le E[|Y|^2]/a^2 = \\text{Var}(X)/a^2$, ce qui donne exactement Bienaymé-Tchebychev.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Inégalité de Jensen"],
                q: "Soit $X$ intégrable et $f$ continue et convexe telle que $f(X)$ est intégrable. Que dit l'inégalité de Jensen ?",
                options: [
                    { text: "$E(f(X)) \\ge f(E(X))$", isCorrect: true },
                    { text: "$E(f(X)) \\le f(E(X))$", isCorrect: false },
                    { text: "$E(f(X)) = f(E(X))$", isCorrect: false },
                    { text: "$f(E(X)) \\ge E(X)$", isCorrect: false }
                ],
                explanation: "Pour une fonction convexe, l'espérance de la fonction est toujours supérieure ou égale à la fonction évaluée en l'espérance ; c'est l'inégalité de Jensen (Proposition 4.30), qui se démontre à l'aide d'une tangente en $a=E(X)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Inégalité de Cauchy-Schwarz"],
                q: "Soient $X, Y$ deux variables aléatoires de carré intégrable. Que dit l'inégalité de Cauchy-Schwarz ?",
                options: [
                    { text: "$|E(XY)| \\le \\sqrt{E(X^2)E(Y^2)}$", isCorrect: true },
                    { text: "$E(XY) = E(X)E(Y)$", isCorrect: false },
                    { text: "$|E(XY)| \\ge \\sqrt{E(X^2)E(Y^2)}$", isCorrect: false },
                    { text: "$E(XY) \\le E(X)+E(Y)$", isCorrect: false }
                ],
                explanation: "L'inégalité de Cauchy-Schwarz (Proposition 4.31) garantit notamment que $XY$ est intégrable dès que $X$ et $Y$ sont de carré intégrable, et majore $|E(XY)|$ par le produit des racines carrées des moments d'ordre 2.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Corrélation", "Cauchy-Schwarz"],
                q: "En appliquant Cauchy-Schwarz à $X-E(X)$ et $Y-E(Y)$, quelles bornes obtient-on pour la covariance et la corrélation ?",
                options: [
                    { text: "$|\\text{Cov}(X,Y)| \\le \\sigma(X)\\sigma(Y)$", isCorrect: true },
                    { text: "$-1 \\le \\text{Cor}(X,Y) \\le 1$", isCorrect: true },
                    { text: "$\\text{Cor}(X,Y) \\ge 1$ toujours", isCorrect: false },
                    { text: "$|\\text{Cov}(X,Y)| \\ge \\sigma(X)\\sigma(Y)$", isCorrect: false }
                ],
                explanation: "En appliquant Cauchy-Schwarz aux variables centrées $X-E(X)$ et $Y-E(Y)$, on obtient $|\\text{Cov}(X,Y)|\\le\\sigma(X)\\sigma(Y)$, d'où immédiatement $-1\\le\\text{Cor}(X,Y)\\le 1$ (Proposition 4.32).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Espaces L1 et L2"],
                q: "Quelle relation existe entre les espaces $L^1(\\Omega,F,P)$ et $L^2(\\Omega,F,P)$ ?",
                options: [
                    { text: "$L^2 \\subset L^1$ : toute variable de carré intégrable est intégrable", isCorrect: true },
                    { text: "$L^1 \\subset L^2$ : toute variable intégrable est de carré intégrable", isCorrect: false },
                    { text: "$L^1 = L^2$ toujours", isCorrect: false },
                    { text: "$L^1$ et $L^2$ sont disjoints", isCorrect: false }
                ],
                explanation: "En utilisant $|X| \\le 1+X^2$ et la linéarité de l'espérance, on montre que si $X$ est de carré intégrable elle est intégrable, donc $L^2$ est un sous-espace vectoriel de $L^1$. La réciproque est fausse en général.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Inégalité"],
                q: "Si $X$ est de carré intégrable, quelle inégalité relie $E(|X|)$ et $E(X^2)$ ?",
                options: [
                    { text: "$E(|X|) \\le \\sqrt{E(X^2)}$", isCorrect: true },
                    { text: "$E(|X|) \\ge \\sqrt{E(X^2)}$", isCorrect: false },
                    { text: "$E(|X|) = \\sqrt{E(X^2)}$", isCorrect: false },
                    { text: "$E(|X|)^2 \\ge E(X^2)$", isCorrect: false }
                ],
                explanation: "La Proposition 4.16 montre que $E(|X|) \\le \\sqrt{E(X^2)}$, ce qui est aussi une conséquence de Cauchy-Schwarz appliquée à $|X|$ et à la variable constante 1.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    }
});

