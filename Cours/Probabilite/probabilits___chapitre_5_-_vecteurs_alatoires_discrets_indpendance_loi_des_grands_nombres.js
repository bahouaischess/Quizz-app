// ============================================================
// MatiÃ¨re : Probabilités : Chapitre 5 - Vecteurs aléatoires discrets, indépendance, loi des grands nombres
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
Object.assign(defaultData, {
    "Probabilités : Chapitre 5 - Vecteurs aléatoires discrets, indépendance, loi des grands nombres": {
        folder: "Probabilités",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Vecteur aléatoire discret"],
                q: "Qu'est-ce qu'un vecteur aléatoire discret $X=(X_1,\\dots,X_n) : \\Omega \\to E_1 \\times \\cdots \\times E_n$ ?",
                options: [
                    { text: "Une variable aléatoire de $(\\Omega,F)$ dans $(E,P(E))$ où chaque $E_i$ est dénombrable ou fini", isCorrect: true },
                    { text: "Une variable aléatoire à densité dans $\\mathbb{R}^n$", isCorrect: false },
                    { text: "Une famille de variables aléatoires indépendantes uniquement", isCorrect: false },
                    { text: "Une variable aléatoire dont seule la première composante est discrète", isCorrect: false }
                ],
                explanation: "Un vecteur aléatoire discret est une variable aléatoire à valeurs dans un produit d'espaces discrets, munie de la tribu $P(E)$. C'est équivalent à dire que chacune des composantes $X_i$ est une variable aléatoire discrète (Remarque 5.2).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi jointe", "Loi marginale"],
                q: "Soit $Z=(X,Y)$ un couple aléatoire discret. Que représentent la loi jointe et les lois marginales ?",
                options: [
                    { text: "La loi jointe est $P_{(X,Y)}$ ; les lois marginales sont $P_X$ et $P_Y$", isCorrect: true },
                    { text: "La loi jointe et les lois marginales désignent la même chose", isCorrect: false },
                    { text: "La loi marginale de $X$ est la loi de $Y$ sachant $X$", isCorrect: false },
                    { text: "La loi jointe ne peut être définie que si $X$ et $Y$ sont indépendantes", isCorrect: false }
                ],
                explanation: "La loi jointe $P_{(X,Y)}$ décrit la loi du couple entier, tandis que les lois marginales $P_X$ et $P_Y$ décrivent la loi de chaque composante isolément.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi marginale", "Formule"],
                q: "Comment retrouve-t-on la loi marginale $P_X(\\{x\\})$ à partir de la loi jointe du couple $(X,Y)$ ?",
                options: [
                    { text: "$P_X(\\{x\\}) = \\sum_{y \\in F} P(\\{X=x, Y=y\\})$", isCorrect: true },
                    { text: "$P_X(\\{x\\}) = P(\\{X=x, Y=y\\})$ pour un $y$ fixé quelconque", isCorrect: false },
                    { text: "$P_X(\\{x\\}) = \\max_{y\\in F} P(\\{X=x,Y=y\\})$", isCorrect: false },
                    { text: "$P_X(\\{x\\}) = P(\\{X=x\\}) \\times P(\\{Y=y\\})$", isCorrect: false }
                ],
                explanation: "En sommant sur toutes les valeurs possibles de $Y$ (formule des probabilités totales), on retrouve la loi marginale de $X$ à partir de la loi jointe.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi jointe vs marginales"],
                q: "Connaître les lois marginales $P_X$ et $P_Y$ suffit-il pour connaître la loi jointe $P_{(X,Y)}$ ?",
                options: [
                    { text: "Non, en général la connaissance des lois marginales n'entraîne pas celle de la loi jointe", isCorrect: true },
                    { text: "Oui, toujours", isCorrect: false },
                    { text: "Oui, mais seulement si $X$ et $Y$ prennent un nombre fini de valeurs", isCorrect: false },
                    { text: "Oui, mais seulement si les variables sont à densité", isCorrect: false }
                ],
                explanation: "La Remarque 5.8 souligne que la loi jointe détermine les lois marginales, mais la réciproque est fausse : plusieurs lois jointes différentes peuvent avoir les mêmes lois marginales (voir l'Exemple 5.6 où $X,Y$ suivent une loi uniforme mais le couple non).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Théorème de transfert", "Couple"],
                q: "Soit $(X,Y)$ un couple aléatoire discret et $h : E\\times F \\to \\mathbb{R}$ telle que $h(X,Y)$ soit positive ou intégrable. Que vaut $E(h(X,Y))$ ?",
                options: [
                    { text: "$\\sum_{(x,y)\\in E\\times F} h(x,y) P(\\{X=x, Y=y\\})$", isCorrect: true },
                    { text: "$\\sum_{x\\in E} h(x) P(X=x) + \\sum_{y\\in F} h(y) P(Y=y)$", isCorrect: false },
                    { text: "$h(E(X), E(Y))$", isCorrect: false },
                    { text: "$\\sum_{x\\in E} h(x, E(Y)) P(X=x)$", isCorrect: false }
                ],
                explanation: "Le théorème de transfert pour un couple (Théorème 5.5) généralise celui d'une seule variable : on somme $h(x,y)$ pondéré par la probabilité jointe $P(\\{X=x,Y=y\\})$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi conditionnelle"],
                q: "Soit $(X,Y)$ un couple aléatoire discret, $x \\in E$ avec $P(X=x)>0$. Comment est définie la loi conditionnelle $P(\\{Y=y\\}|\\{X=x\\})$ ?",
                options: [
                    { text: "$P(\\{Y=y\\}|\\{X=x\\}) = \\dfrac{P(\\{Y=y, X=x\\})}{P(\\{X=x\\})}$", isCorrect: true },
                    { text: "$P(\\{Y=y\\}|\\{X=x\\}) = P(\\{Y=y\\}) \\times P(\\{X=x\\})$", isCorrect: false },
                    { text: "$P(\\{Y=y\\}|\\{X=x\\}) = P(\\{Y=y\\}) - P(\\{X=x\\})$", isCorrect: false },
                    { text: "$P(\\{Y=y\\}|\\{X=x\\}) = P(\\{X=x\\})$", isCorrect: false }
                ],
                explanation: "C'est la définition standard de la probabilité conditionnelle appliquée aux évènements $\\{Y=y\\}$ et $\\{X=x\\}$ (Définition 5.7).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Espérance conditionnelle", "Nombre"],
                q: "Soit $x$ tel que $P(X=x)>0$. Comment est définie l'espérance conditionnelle $E(Y|X=x)$ ?",
                options: [
                    { text: "$E(Y|X=x) = \\sum_{y\\in F} y\\, P(Y=y|X=x)$", isCorrect: true },
                    { text: "$E(Y|X=x) = \\sum_{y\\in F} y\\, P(Y=y)$", isCorrect: false },
                    { text: "$E(Y|X=x) = E(Y) \\times P(X=x)$", isCorrect: false },
                    { text: "$E(Y|X=x) = E(XY)/E(X)$", isCorrect: false }
                ],
                explanation: "$E(Y|X=x)$ est l'espérance de $Y$ calculée avec la loi conditionnelle de $Y$ sachant $\\{X=x\\}$, c'est un nombre réel (contrairement à $E(Y|X)$ qui est une variable aléatoire).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Espérance conditionnelle", "Variable aléatoire"],
                q: "Quelle est la nature mathématique de $E(Y|X)$ ?",
                options: [
                    { text: "C'est une variable aléatoire, fonction de $X$", isCorrect: true },
                    { text: "C'est un nombre réel fixe, indépendant de $X$", isCorrect: false },
                    { text: "C'est toujours égale à $E(Y)$", isCorrect: false },
                    { text: "C'est une probabilité, comprise entre 0 et 1", isCorrect: false }
                ],
                explanation: "Contrairement à $E(Y)$ qui est un nombre réel, $E(Y|X) = \\psi(X)$ où $\\psi(x)=E(Y|X=x)$ est une fonction, donc $E(Y|X)$ dépend de l'aléa à travers $X$ : c'est bien une variable aléatoire (Remarque 5.10).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Espérance conditionnelle", "Théorème"],
                q: "Que dit le Théorème 5.11 concernant $E[E(Y|X)]$ ?",
                options: [
                    { text: "$E[E(Y|X)] = E(Y)$", isCorrect: true },
                    { text: "$E[E(Y|X)] = E(X)$", isCorrect: false },
                    { text: "$E[E(Y|X)] = E(X)E(Y)$", isCorrect: false },
                    { text: "$E[E(Y|X)] = \\text{Var}(Y)$", isCorrect: false }
                ],
                explanation: "C'est un résultat fondamental : l'espérance de l'espérance conditionnelle redonne l'espérance totale. La preuve utilise le théorème de transfert et la formule des probabilités totales.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Espérance conditionnelle", "Propriétés"],
                q: "Parmi les propriétés suivantes de l'espérance conditionnelle $E(\\cdot|X)$, lesquelles sont vraies (Y,Z intégrables) ?",
                options: [
                    { text: "$E(aY+bZ|X) = aE(Y|X)+bE(Z|X)$ (linéarité)", isCorrect: true },
                    { text: "$Y \\ge 0 \\Rightarrow E(Y|X) \\ge 0$ (positivité)", isCorrect: true },
                    { text: "$E(1|X) = 1$", isCorrect: true },
                    { text: "$E[Yg(X)|X] = E(Y|X) + g(X)$", isCorrect: false }
                ],
                explanation: "L'espérance conditionnelle hérite des propriétés fondamentales de l'espérance : linéarité, positivité, et $E(1|X)=1$. En revanche, la formule correcte pour une fonction $g(X)$ 'sortie' de l'espérance conditionnelle est $E[Yg(X)|X]=g(X)E(Y|X)$ (produit, pas somme), car $g(X)$ se comporte comme une constante.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance", "Définition"],
                q: "Deux variables aléatoires discrètes $X, Y$ sont dites indépendantes si :",
                options: [
                    { text: "$\\forall A \\in P(E), B \\in P(F),\\ P(\\{X\\in A, Y\\in B\\}) = P(\\{X\\in A\\})P(\\{Y\\in B\\})$", isCorrect: true },
                    { text: "$E(X) = E(Y)$", isCorrect: false },
                    { text: "$\\text{Cov}(X,Y) = 0$", isCorrect: false },
                    { text: "$X$ et $Y$ ont la même loi", isCorrect: false }
                ],
                explanation: "La Définition 5.14 exige que la probabilité jointe se factorise pour tout couple d'évènements $A,B$. Avoir une covariance nulle est une condition nécessaire mais pas suffisante à l'indépendance (voir la remarque 5.19).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance mutuelle"],
                q: "Une famille $(X_i)_{i\\in I}$ de variables aléatoires est dite mutuellement indépendante si :",
                options: [
                    { text: "Pour toute partie finie $K$ de $I$ et tout $A_i \\in P(E_i)$, $P(\\cap_{i\\in K}\\{X_i\\in A_i\\}) = \\prod_{i\\in K} P(X_i \\in A_i)$", isCorrect: true },
                    { text: "Toute paire $(X_i, X_j)$ avec $i\\ne j$ est indépendante", isCorrect: false },
                    { text: "Les $X_i$ ont toutes la même loi", isCorrect: false },
                    { text: "$\\sum_{i\\in I} X_i$ est bornée", isCorrect: false }
                ],
                explanation: "L'indépendance mutuelle est une condition sur toutes les parties finies simultanément, pas seulement sur les paires : l'indépendance deux à deux n'implique pas l'indépendance mutuelle en général.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["i.i.d"],
                q: "Que signifie que des variables aléatoires $(X_i)_{i\\in I}$ soient i.i.d ?",
                options: [
                    { text: "Elles sont indépendantes et ont toutes la même loi", isCorrect: true },
                    { text: "Elles sont indépendantes uniquement", isCorrect: false },
                    { text: "Elles ont la même loi uniquement, sans être nécessairement indépendantes", isCorrect: false },
                    { text: "Elles ont la même espérance", isCorrect: false }
                ],
                explanation: "i.i.d signifie 'indépendantes et identiquement distribuées' : les deux conditions (indépendance ET même loi) sont requises simultanément.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance", "Conséquences"],
                q: "Si $(X_i)_{i\\in I}$ est une famille de variables aléatoires indépendantes, lesquelles des affirmations suivantes (Remarque 5.15) sont vraies ?",
                options: [
                    { text: "Toute sous-famille $(X_i)_{i\\in J}$ avec $J\\subset I$ est indépendante", isCorrect: true },
                    { text: "Pour toute famille de fonctions mesurables $h_i$, les $(h_i(X_i))_{i\\in I}$ sont indépendantes", isCorrect: true },
                    { text: "Les $(X_i)$ deviennent nécessairement de carré intégrable", isCorrect: false },
                    { text: "Les $(X_i)$ ont nécessairement la même loi", isCorrect: false }
                ],
                explanation: "L'indépendance se transmet aux sous-familles et aux images par des fonctions mesurables des composantes, mais n'implique ni intégrabilité ni identité de loi (ce dernier point est spécifique au cas i.i.d).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Théorème caractérisation indépendance"],
                q: "D'après le Théorème 5.16, lesquelles de ces conditions sont équivalentes à l'indépendance de $X$ et $Y$ (variables discrètes) ?",
                options: [
                    { text: "$P(\\{X=x,Y=y\\}) = P(\\{X=x\\})P(\\{Y=y\\})$ pour tout $x,y$", isCorrect: true },
                    { text: "Pour tout $x$ avec $P(X=x)>0$, $P_Y(\\cdot|\\{X=x\\}) = P_Y(\\cdot)$", isCorrect: true },
                    { text: "Pour toutes fonctions bornées $f,g$, $E[f(X)g(Y)] = E[f(X)]E[g(Y)]$", isCorrect: true },
                    { text: "$E(X) = E(Y)$", isCorrect: false }
                ],
                explanation: "Le Théorème 5.16 établit cinq conditions équivalentes à l'indépendance : la factorisation ponctuelle des probabilités, l'invariance des lois conditionnelles, et l'égalité $E[f(X)g(Y)]=E[f(X)]E[g(Y)]$ pour toutes fonctions bornées. L'égalité des espérances n'a aucun lien direct avec l'indépendance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance", "Variance", "Covariance"],
                q: "Si $X, Y$ sont deux variables aléatoires de carré intégrable et indépendantes, lesquelles des affirmations suivantes (Proposition 5.18) sont vraies ?",
                options: [
                    { text: "$E(XY) = E(X)E(Y)$", isCorrect: true },
                    { text: "$\\text{Cov}(X,Y) = 0$", isCorrect: true },
                    { text: "$\\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y)$", isCorrect: true },
                    { text: "$\\text{Var}(X+Y) = \\text{Var}(X) \\times \\text{Var}(Y)$", isCorrect: false }
                ],
                explanation: "Ces trois résultats sont des conséquences directes de l'indépendance : la covariance s'annule car $E(XY)=E(X)E(Y)$, et donc le terme croisé $2\\text{Cov}(X,Y)$ disparaît dans $\\text{Var}(X+Y)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Réciproque fausse", "Covariance"],
                q: "Si $\\text{Cov}(X,Y) = 0$, peut-on en conclure que $X$ et $Y$ sont indépendantes ?",
                options: [
                    { text: "Non, la réciproque est fausse en général", isCorrect: true },
                    { text: "Oui, toujours", isCorrect: false },
                    { text: "Oui, mais seulement si $X$ et $Y$ sont discrètes", isCorrect: false },
                    { text: "Oui, mais seulement si $X$ et $Y$ sont de même loi", isCorrect: false }
                ],
                explanation: "La Remarque 5.19 donne un contre-exemple explicite : $Z$ uniforme sur $\\{-1,0,1\\}$, $X=Z$, $Y=Z^2$. On a $\\text{Cov}(X,Y)=0$ mais $X$ et $Y$ ne sont pas indépendantes, car par exemple $P(X=-1,Y=1) \\ne P(X=-1)P(Y=1)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Contre-exemple", "Application numérique"],
                q: "Dans le contre-exemple de la Remarque 5.19 ($Z$ uniforme sur $\\{-1,0,1\\}$, $X=Z$, $Y=Z^2$), que vaut $P(X=-1, Y=1)$ ?",
                options: [
                    { text: "$\\dfrac{1}{3}$", isCorrect: true },
                    { text: "$\\dfrac{2}{9}$", isCorrect: false },
                    { text: "$\\dfrac{1}{9}$", isCorrect: false },
                    { text: "$0$", isCorrect: false }
                ],
                explanation: "$\\{X=-1,Y=1\\} = \\{Z=-1, Z^2=1\\} = \\{Z=-1\\}$, et comme $Z$ est uniforme sur $\\{-1,0,1\\}$, $P(Z=-1)=1/3$. En revanche $P(X=-1)P(Y=1) = \\frac{1}{3}\\times\\frac{2}{3} = \\frac{2}{9} \\ne \\frac{1}{3}$, ce qui prouve la non-indépendance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi de la somme", "Convolution discrète"],
                q: "Soient $X, Y$ deux variables aléatoires discrètes réelles. Comment est caractérisée la loi de $S = X+Y$ (cas général, pas nécessairement indépendant) ?",
                options: [
                    { text: "$P(X+Y=s) = \\sum_{x\\in E} P(X=x, Y=s-x)$", isCorrect: true },
                    { text: "$P(X+Y=s) = \\sum_{x\\in E} P(X=x) + P(Y=s-x)$", isCorrect: false },
                    { text: "$P(X+Y=s) = P(X=s) \\times P(Y=s)$", isCorrect: false },
                    { text: "$P(X+Y=s) = \\max_{x\\in E} P(X=x,Y=s-x)$", isCorrect: false }
                ],
                explanation: "La Proposition 5.20 utilise la formule des probabilités totales : on décompose selon toutes les valeurs possibles de $X$, ce qui donne la formule générale valable même sans indépendance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Convolution", "Cas indépendant"],
                q: "Si $X$ et $Y$ sont de plus indépendantes, comment se simplifie la formule de $P(X+Y=s)$ ?",
                options: [
                    { text: "$P(X+Y=s) = \\sum_{x\\in E} P(X=x)P(Y=s-x)$", isCorrect: true },
                    { text: "$P(X+Y=s) = P(X=s)+P(Y=s)$", isCorrect: false },
                    { text: "$P(X+Y=s) = \\sum_{x\\in E} P(X=x, Y=s-x)$ (inchangée)", isCorrect: false },
                    { text: "$P(X+Y=s) = P(X=s)P(Y=s)$", isCorrect: false }
                ],
                explanation: "Sous indépendance, $P(X=x,Y=s-x)=P(X=x)P(Y=s-x)$, ce qui donne le produit de convolution discret des lois de $X$ et $Y$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Convolution", "Densité"],
                q: "Soient $X, Y$ deux variables aléatoires réelles à densité indépendantes, de densités $f^X, f^Y$. Quelle est la densité $f^Z$ de $Z = X+Y$ ?",
                options: [
                    { text: "$f^Z(z) = \\int_{\\mathbb{R}} f^X(w) f^Y(z-w)\\, dw$", isCorrect: true },
                    { text: "$f^Z(z) = f^X(z) + f^Y(z)$", isCorrect: false },
                    { text: "$f^Z(z) = f^X(z) \\times f^Y(z)$", isCorrect: false },
                    { text: "$f^Z(z) = \\int_{\\mathbb{R}} f^X(w) + f^Y(z-w)\\, dw$", isCorrect: false }
                ],
                explanation: "C'est la formule du produit de convolution des densités (Proposition 5.22). Elle est très utilisée en pratique et ne nécessite qu'une intégration à une variable, malgré une preuve plus complexe (hors programme ici).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Convolution", "Exemples classiques"],
                q: "Si $X \\sim \\text{Bin}(n_1, p)$ et $Y \\sim \\text{Bin}(n_2, p)$ sont indépendantes, quelle est la loi de $X+Y$ ?",
                options: [
                    { text: "$\\text{Bin}(n_1+n_2, p)$", isCorrect: true },
                    { text: "$\\text{Bin}(n_1 \\times n_2, p)$", isCorrect: false },
                    { text: "$\\text{Bin}(n_1, p) \\times \\text{Bin}(n_2, p)$", isCorrect: false },
                    { text: "Une loi de Poisson de paramètre $n_1+n_2$", isCorrect: false }
                ],
                explanation: "L'Exemple 5.24 précise que la somme de deux variables binomiales indépendantes de même paramètre $p$ suit une loi binomiale dont le nombre d'essais s'additionne : $\\text{Bin}(n_1+n_2,p)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Convolution", "Loi normale"],
                q: "Si $X \\sim N(\\mu,\\sigma^2)$ et $Y \\sim N(\\nu,\\tau^2)$ sont indépendantes, quelle est la loi de $X+Y$ ?",
                options: [
                    { text: "$N(\\mu+\\nu, \\sigma^2+\\tau^2)$", isCorrect: true },
                    { text: "$N(\\mu\\nu, \\sigma^2\\tau^2)$", isCorrect: false },
                    { text: "$N(\\mu+\\nu, \\sigma^2\\tau^2)$", isCorrect: false },
                    { text: "$N(\\mu-\\nu, |\\sigma^2-\\tau^2|)$", isCorrect: false }
                ],
                explanation: "La stabilité de la loi normale par somme (indépendante) est un résultat classique et important : les moyennes s'additionnent et les variances s'additionnent aussi (jamais les écarts-types directement).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Convergence presque sûre"],
                q: "Que signifie que la suite $(X_n)_{n\\ge1}$ converge presque sûrement vers $X$ ?",
                options: [
                    { text: "$P[\\omega \\in \\Omega : \\lim_{n\\to\\infty} X_n(\\omega) = X(\\omega)] = 1$", isCorrect: true },
                    { text: "$\\forall \\varepsilon>0,\\ \\lim_{n\\to\\infty} P[|X-X_n|\\ge \\varepsilon]=0$", isCorrect: false },
                    { text: "$E(X_n) \\to E(X)$", isCorrect: false },
                    { text: "$X_n(\\omega) = X(\\omega)$ pour tout $\\omega\\in\\Omega$", isCorrect: false }
                ],
                explanation: "La convergence presque sûre demande que l'ensemble des $\\omega$ pour lesquels $X_n(\\omega)\\to X(\\omega)$ ait probabilité 1 ; c'est plus fort que d'exiger l'égalité pour tout $\\omega$, et différent de la convergence en probabilité (deuxième option).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Convergence en probabilité"],
                q: "Que signifie que la suite $(X_n)_{n\\ge1}$ converge en probabilité vers $X$ ?",
                options: [
                    { text: "$\\forall \\varepsilon>0,\\ \\lim_{n\\to+\\infty} P[|X-X_n|\\ge \\varepsilon]=0$", isCorrect: true },
                    { text: "$P[\\omega\\in\\Omega : \\lim_{n\\to\\infty} X_n(\\omega)=X(\\omega)]=1$", isCorrect: false },
                    { text: "$X_n = X$ avec probabilité $1/n$", isCorrect: false },
                    { text: "$\\text{Var}(X_n) \\to 0$", isCorrect: false }
                ],
                explanation: "Notée $X_n \\xrightarrow{P} X$, cette convergence demande que la probabilité que $X_n$ s'écarte de $X$ de plus de $\\varepsilon$ tende vers 0, pour tout $\\varepsilon>0$ fixé.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Modes de convergence", "Comparaison"],
                q: "Quelle est la relation entre convergence presque sûre et convergence en probabilité ?",
                options: [
                    { text: "La convergence presque sûre est plus forte : elle implique la convergence en probabilité", isCorrect: true },
                    { text: "La convergence en probabilité est plus forte que la convergence presque sûre", isCorrect: false },
                    { text: "Les deux notions sont équivalentes", isCorrect: false },
                    { text: "Aucune des deux n'implique l'autre", isCorrect: false }
                ],
                explanation: "La Remarque 5.26 précise que la convergence presque sûre est plus forte que la convergence en probabilité : elle l'implique, mais la réciproque est fausse en général.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi faible des grands nombres"],
                q: "Soit $(X_n)_{n\\ge1}$ une suite i.i.d de carré intégrable, de moyenne $\\mu$ et variance $\\sigma^2$, et $Z_n = \\dfrac{X_1+\\cdots+X_n}{n}$. Que dit la loi faible des grands nombres ?",
                options: [
                    { text: "$(Z_n)$ converge en probabilité vers $\\mu$", isCorrect: true },
                    { text: "$(Z_n)$ converge presque sûrement vers $\\mu$", isCorrect: false },
                    { text: "$(Z_n)$ converge vers $\\sigma^2$", isCorrect: false },
                    { text: "$(Z_n)$ diverge toujours", isCorrect: false }
                ],
                explanation: "La version faible (Théorème 5.27) donne uniquement la convergence en probabilité de la moyenne empirique vers $\\mu$. La convergence presque sûre est un résultat plus fort, objet de la loi forte des grands nombres, qui n'est que mentionnée en remarque dans ce chapitre.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi faible des grands nombres", "Borne explicite"],
                q: "Quelle borne explicite le Théorème 5.27 donne-t-il pour $P(|Z_n-\\mu|\\ge \\varepsilon)$ ?",
                options: [
                    { text: "$P(|Z_n-\\mu|\\ge\\varepsilon) \\le \\dfrac{\\sigma^2}{\\varepsilon^2 n}$", isCorrect: true },
                    { text: "$P(|Z_n-\\mu|\\ge\\varepsilon) \\le \\dfrac{\\sigma^2}{\\varepsilon n^2}$", isCorrect: false },
                    { text: "$P(|Z_n-\\mu|\\ge\\varepsilon) \\ge \\dfrac{\\sigma^2}{\\varepsilon^2 n}$", isCorrect: false },
                    { text: "$P(|Z_n-\\mu|\\ge\\varepsilon) \\le \\dfrac{\\sigma^2}{n}$", isCorrect: false }
                ],
                explanation: "Cette borne explicite résulte de l'application de l'inégalité de Bienaymé-Tchebychev à $Z_n$, avec $\\text{Var}(Z_n)=\\sigma^2/n$, ce qui donne une vitesse de convergence quantitative en $O(1/n)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi faible des grands nombres", "Démonstration"],
                q: "Dans la démonstration du Théorème 5.27, que valent $E(Z_n)$ et $\\text{Var}(Z_n)$ (avec $(X_n)$ i.i.d de moyenne $\\mu$ et variance $\\sigma^2$) ?",
                options: [
                    { text: "$E(Z_n) = \\mu$ et $\\text{Var}(Z_n) = \\dfrac{\\sigma^2}{n}$", isCorrect: true },
                    { text: "$E(Z_n) = n\\mu$ et $\\text{Var}(Z_n) = n\\sigma^2$", isCorrect: false },
                    { text: "$E(Z_n) = \\mu$ et $\\text{Var}(Z_n) = \\sigma^2$", isCorrect: false },
                    { text: "$E(Z_n) = \\mu/n$ et $\\text{Var}(Z_n) = \\sigma^2/n^2$", isCorrect: false }
                ],
                explanation: "Par linéarité de l'espérance, $E(Z_n)=\\frac{E(X_1)+\\cdots+E(X_n)}{n}=\\mu$. Par indépendance des $X_i$ et la formule de la variance d'une somme de variables indépendantes, $\\text{Var}(Z_n)=\\frac{\\text{Var}(X_1)+\\cdots+\\text{Var}(X_n)}{n^2}=\\frac{\\sigma^2}{n}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance", "Fréquentisme"],
                q: "Quel est l'intérêt conceptuel principal de la loi faible des grands nombres, mentionné dans le cours ?",
                options: [
                    { text: "Elle valide l'intuition de l'approche fréquentiste de la définition d'une probabilité", isCorrect: true },
                    { text: "Elle permet de calculer exactement la loi de $X_1$", isCorrect: false },
                    { text: "Elle prouve que toute suite de variables aléatoires converge presque sûrement", isCorrect: false },
                    { text: "Elle remplace l'inégalité de Markov", isCorrect: false }
                ],
                explanation: "Le texte du cours souligne que ce théorème fondamental justifie mathématiquement l'idée intuitive que la fréquence empirique d'un évènement se rapproche de sa probabilité théorique quand le nombre d'observations croît.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
}
});

