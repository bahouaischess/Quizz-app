// ============================================================
// MatiÃ¨re : Probabilités : Chapitre 3 - Variables aléatoires
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
Object.assign(defaultData, {
    "Probabilités : Chapitre 3 - Variables aléatoires": {
        folder: "Probabilités",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Variable aléatoire", "Définition"],
                q: "Comment est définie une variable aléatoire $X$ de $(\\Omega, \\mathcal{F})$ dans $(E, \\mathcal{E})$ ?",
                options: [
                    { text: "Une application qui vérifie $\\forall B \\in \\mathcal{E}, X^{-1}(B) = \\{X \\in B\\} \\in \\mathcal{F}$", isCorrect: true },
                    { text: "Une application mesurable préservant les structures de tribus respectives", isCorrect: true },
                    { text: "Une application nécessairement bijective de $\\Omega$ dans $E$", isCorrect: false },
                    { text: "Une application qui associe à chaque évènement un nombre réel", isCorrect: false }
                ],
                explanation: "La Définition 3.1 exige que l'image réciproque de tout borélien $B \\in \\mathcal{E}$ soit un élément de $\\mathcal{F}$ : c'est la notion d'application mesurable. La notation $X^{-1}$ n'a aucun rapport avec la bijectivité (Remarque 3.2) : elle désigne simplement l'image réciproque d'une partie.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable aléatoire", "Loi"],
                q: "Qu'est-ce que la loi $P_X$ d'une variable aléatoire $X$, et quelle propriété fondamentale possède-t-elle ?",
                options: [
                    { text: "$P_X(B) := P(X^{-1}(B)) = P(\\{X \\in B\\})$ pour tout $B \\in \\mathcal{E}$", isCorrect: true },
                    { text: "C'est une probabilité sur l'espace d'arrivée $(E, \\mathcal{E})$", isCorrect: true },
                    { text: "On l'appelle aussi « probabilité image » de $P$", isCorrect: true },
                    { text: "$P_X$ n'est définie que si $X$ est une variable discrète", isCorrect: false }
                ],
                explanation: "La Définition/Proposition 3.3 introduit $P_X$ comme la mesure image, et démontre (en vérifiant les axiomes) que c'est bien une probabilité sur $(E,\\mathcal{E})$, faisant de $(E,\\mathcal{E},P_X)$ un espace probabilisé. Cette construction est générale, pas limitée au cas discret.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable aléatoire", "Notation"],
                q: "Que signifie la notation $X \\sim \\mu$ ?",
                options: [
                    { text: "$X$ a pour loi $\\mu$, c'est-à-dire $P_X = \\mu$", isCorrect: true },
                    { text: "$X$ est indépendante de $\\mu$", isCorrect: false },
                    { text: "$X$ converge vers $\\mu$", isCorrect: false },
                    { text: "$\\mu$ est la valeur moyenne de $X$", isCorrect: false }
                ],
                explanation: "C'est une notation standard rappelée dans la Remarque suivant la Définition 3.3 : $X \\sim \\mu$ signifie simplement que la loi de $X$, notée $P_X$, est égale à la mesure $\\mu$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable aléatoire discrète", "Définition"],
                q: "Qu'est-ce qu'une variable aléatoire discrète, et comment sa loi est-elle caractérisée ?",
                options: [
                    { text: "C'est une variable aléatoire dont l'ensemble d'arrivée $E = \\{x_i\\}_{i\\in I}$ est fini ou dénombrable, muni de $\\mathcal{P}(E)$", isCorrect: true },
                    { text: "Sa loi est caractérisée par la donnée de $P(X = x_i)$ pour tout $i \\in I$", isCorrect: true },
                    { text: "Pour tout $B \\in \\mathcal{P}(E)$, $P_X(B) = \\sum_{x_i \\in B} P(X = x_i)$", isCorrect: true },
                    { text: "Sa loi ne peut être caractérisée que via sa fonction de répartition", isCorrect: false }
                ],
                explanation: "La Définition 3.4 et la Proposition 3.5 précisent ce cadre : $E$ dénombrable/fini muni de $\\mathcal{P}(E)$, et grâce à la Proposition 1.14 (caractérisation d'une probabilité par ses valeurs sur les singletons), la loi $P_X$ est entièrement déterminée par les valeurs $(P(X=x_i))_{i\\in I}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indicatrice", "Propriétés"],
                q: "Soit $A, B \\in \\mathcal{F}$. Quelles identités sur les fonctions indicatrices sont correctes ?",
                options: [
                    { text: "$\\mathbb{I}_{A^c} = 1 - \\mathbb{I}_A$", isCorrect: true },
                    { text: "$\\mathbb{I}_{A \\cap B} = \\mathbb{I}_A \\cdot \\mathbb{I}_B$", isCorrect: true },
                    { text: "$\\mathbb{I}_{A \\cup B} = \\mathbb{I}_A + \\mathbb{I}_B - \\mathbb{I}_{A \\cap B}$", isCorrect: true },
                    { text: "$\\mathbb{I}_{A \\cup B} = \\mathbb{I}_A + \\mathbb{I}_B$ en toute généralité", isCorrect: false }
                ],
                explanation: "Ces trois identités sont rappelées dans l'Exemple 3.6. La dernière n'est vraie que si $A$ et $B$ sont disjoints ; en général il faut soustraire $\\mathbb{I}_{A\\cap B}$ pour ne pas compter deux fois les éléments communs (analogue de la formule du crible).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indicatrice", "Loi"],
                q: "Quelle est la loi de l'indicatrice $\\mathbb{I}_A$ d'un évènement $A \\in \\mathcal{F}$ ?",
                options: [
                    { text: "$P_{\\mathbb{I}_A}(1) = P(A)$", isCorrect: true },
                    { text: "$P_{\\mathbb{I}_A}(0) = 1 - P(A) = P(A^c)$", isCorrect: true },
                    { text: "$\\mathbb{I}_A$ suit une loi de Bernoulli de paramètre $P(A)$", isCorrect: true },
                    { text: "$P_{\\mathbb{I}_A}(1) = P(A^c)$", isCorrect: false }
                ],
                explanation: "L'Exemple 3.6 calcule directement $P_{\\mathbb{I}_A}(1) = P(\\{\\omega : \\mathbb{I}_A(\\omega)=1\\}) = P(A)$ et $P_{\\mathbb{I}_A}(0) = P(A^c) = 1-P(A)$, ce qui est précisément la loi de Bernoulli de paramètre $P(A)$ (Exemple 3.8).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi uniforme discrète"],
                q: "Une variable aléatoire $X$ suit la loi uniforme discrète $\\mathcal{U}(\\{x_1,\\dots,x_n\\})$ si :",
                options: [
                    { text: "$X(\\Omega) = \\{x_1,\\dots,x_n\\}$ et $P_X(x_i) = 1/n$ pour tout $i$", isCorrect: true },
                    { text: "Chaque valeur possible a la même probabilité d'être prise", isCorrect: true },
                    { text: "$P_X(x_i)$ dépend de la position de $i$ dans la liste", isCorrect: false },
                    { text: "$X(\\Omega)$ doit être un sous-ensemble de $\\mathbb{N}$", isCorrect: false }
                ],
                explanation: "La loi uniforme discrète attribue la même probabilité $1/n$ à chacune des $n$ valeurs possibles $x_1,\\dots,x_n$, qui n'ont pas besoin d'être des entiers (l'Exemple 3.7 utilise $\\{-1,1\\}$).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi binomiale", "Schéma de Bernoulli"],
                q: "Dans un schéma de Bernoulli de paramètres $n$ et $p$ (n répétitions indépendantes d'une épreuve de Bernoulli de paramètre $p$), quelle est la loi du nombre de succès $X$ ?",
                options: [
                    { text: "$X$ suit une loi binomiale $\\text{Bin}(n,p)$", isCorrect: true },
                    { text: "$P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$ pour $k \\in \\{0,\\dots,n\\}$", isCorrect: true },
                    { text: "$X = \\sum_{i=1}^n \\mathbb{I}_{A_i}$, une somme de $n$ variables de Bernoulli indépendantes de paramètre $p$", isCorrect: true },
                    { text: "$X$ suit une loi géométrique de paramètre $p$", isCorrect: false }
                ],
                explanation: "L'Exemple 3.9 montre que $\\binom{n}{k}$ compte les façons d'obtenir $k$ succès parmi $n$ épreuves indépendantes, chacune de probabilité $p^k(1-p)^{n-k}$, et interprète $X$ comme la somme des indicatrices des succès individuels : $X=\\sum_{i=1}^n \\mathbb{I}_{A_i}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi binomiale", "Somme de variables"],
                q: "Si $X_1$ suit une loi binomiale $\\text{Bin}(n,p)$ et $X_2$ suit une loi binomiale $\\text{Bin}(m,p)$, et que $X_1$ et $X_2$ sont indépendantes, quelle est la loi de $X_1+X_2$ ?",
                options: [
                    { text: "$X_1 + X_2$ suit une loi binomiale $\\text{Bin}(n+m, p)$", isCorrect: true },
                    { text: "$X_1 + X_2$ suit une loi binomiale $\\text{Bin}(nm, p)$", isCorrect: false },
                    { text: "Ce résultat s'explique car $X_1$ et $X_2$ sont chacune des sommes de Bernoulli indépendantes de même paramètre $p$", isCorrect: true },
                    { text: "$X_1+X_2$ ne suit aucune loi connue en général", isCorrect: false }
                ],
                explanation: "Le cours (remarque après l'Exemple 3.9) indique que la somme de variables binomiales indépendantes de même paramètre $p$ mais de nombres d'épreuves différents reste binomiale, avec les paramètres d'épreuves qui s'additionnent : $\\text{Bin}(n,p) + \\text{Bin}(m,p) = \\text{Bin}(n+m,p)$. L'intuition vient de la représentation comme sommes d'indicatrices de Bernoulli indépendantes.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi géométrique"],
                q: "Une variable aléatoire $X$ suit une loi géométrique $\\mathcal{G}(p)$ si :",
                options: [
                    { text: "$X(\\Omega) = \\mathbb{N}^*$ et $P_X(k) = (1-p)^{k-1} p$ pour tout $k \\in \\mathbb{N}^*$", isCorrect: true },
                    { text: "Elle modélise le temps d'attente jusqu'au premier succès dans un schéma de Bernoulli répété indéfiniment", isCorrect: true },
                    { text: "$P_X(k) = \\binom{k}{p}(1-p)^{k}$", isCorrect: false },
                    { text: "$X(\\Omega)$ est nécessairement fini", isCorrect: false }
                ],
                explanation: "L'Exemple 3.10 démontre précisément que $X$ = « rang du premier succès » dans une suite indéfinie d'épreuves de Bernoulli indépendantes suit la loi géométrique $\\mathcal{G}(p)$ : pour obtenir succès au $k$-ième essai, il faut $k-1$ échecs suivis d'un succès, d'où $P(X=k)=(1-p)^{k-1}p$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi de Poisson"],
                q: "Une variable aléatoire $X$ suit une loi de Poisson $\\mathcal{P}(\\lambda)$ (avec $\\lambda > 0$) si :",
                options: [
                    { text: "$X(\\Omega) = \\mathbb{N}$ et $P_X(k) = e^{-\\lambda} \\dfrac{\\lambda^k}{k!}$ pour tout $k \\in \\mathbb{N}$", isCorrect: true },
                    { text: "Elle peut modéliser le nombre d'arrivées d'autobus à un arrêt avant un instant $T$ donné", isCorrect: true },
                    { text: "$\\lambda$ représente le nombre moyen d'arrivées dans l'intervalle considéré", isCorrect: true },
                    { text: "Elle ne prend que des valeurs bornées par $\\lambda$", isCorrect: false }
                ],
                explanation: "La définition et l'Exemple 3.11 donnent cette loi et son interprétation classique : le paramètre $\\lambda$ représente le taux moyen d'occurrence d'un phénomène (ici, arrivées d'autobus), et $X$ peut prendre n'importe quelle valeur entière positive, sans borne supérieure.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Convergence binomiale-Poisson"],
                q: "Sous quelles conditions la loi binomiale $\\text{Bin}(n, p_n)$ converge-t-elle vers la loi de Poisson $\\mathcal{P}(\\lambda)$ ?",
                options: [
                    { text: "Lorsque $n \\to +\\infty$, $p_n \\to 0$, et $n\\, p_n \\to \\lambda > 0$", isCorrect: true },
                    { text: "Pour tout $k$ fixé, $P^{X_n}(k) \\to e^{-\\lambda}\\lambda^k/k!$", isCorrect: true },
                    { text: "Cette convergence nécessite que $p_n$ reste constant et égal à $p$", isCorrect: false },
                    { text: "Cette convergence est valable uniquement lorsque $n$ est pair", isCorrect: false }
                ],
                explanation: "La Proposition 3.12 énonce précisément ce résultat de convergence (« loi des évènements rares ») : lorsque $n\\to+\\infty$ et $p_n\\to 0$ de sorte que $np_n \\to \\lambda$, alors pour tout $k$ fixé, la probabilité binomiale converge vers la probabilité de Poisson correspondante. Il s'agit bien d'une suite $(p_n)$ qui varie avec $n$, pas d'un $p$ fixe.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable aléatoire réelle", "Définition"],
                q: "Qu'est-ce qu'une variable aléatoire réelle ?",
                options: [
                    { text: "Une variable aléatoire $X$ de $(\\Omega,\\mathcal{F})$ dans $(E,\\mathcal{E}) = (\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))$", isCorrect: true },
                    { text: "Une variable aléatoire à valeurs dans $\\mathbb{R}$ munie de la tribu borélienne", isCorrect: true },
                    { text: "Toute application de $\\Omega$ dans $\\mathbb{R}$, sans condition supplémentaire", isCorrect: false },
                    { text: "Une variable aléatoire qui prend nécessairement une infinité de valeurs", isCorrect: false }
                ],
                explanation: "La Définition 3.13 précise le cas particulier où l'espace d'arrivée est $(\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))$. Il ne suffit pas d'être une simple application de $\\Omega$ dans $\\mathbb{R}$ : il faut vérifier la mesurabilité, c'est-à-dire que l'image réciproque de tout borélien appartient à $\\mathcal{F}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable aléatoire réelle", "Critère de mesurabilité"],
                q: "Pour montrer qu'une application $X : \\Omega \\to \\mathbb{R}$ est une variable aléatoire réelle, quel critère suffisant peut-on utiliser (Remarque 3.14) ?",
                options: [
                    { text: "Il suffit de montrer que pour tout $x \\in \\mathbb{R}$, $X^{-1}(]-\\infty,x]) \\in \\mathcal{F}$", isCorrect: true },
                    { text: "Ce critère fonctionne car $\\mathcal{B}(\\mathbb{R})$ est la plus petite tribu contenant les intervalles $]-\\infty,x]$", isCorrect: true },
                    { text: "Il faut vérifier la condition pour tous les boréliens de $\\mathbb{R}$ un par un", isCorrect: false },
                    { text: "Ce critère nécessite en plus que $X$ soit continue", isCorrect: false }
                ],
                explanation: "La démonstration de la Remarque 3.14 construit l'ensemble $G = \\{B \\in \\mathcal{B}(\\mathbb{R}) : X^{-1}(B) \\in \\mathcal{F}\\}$, montre que c'est une tribu contenant les $]-\\infty,x]$, donc contenant $\\mathcal{B}(\\mathbb{R})$ tout entier (car cette dernière est la plus petite tribu engendrée par ces intervalles). Ce critère évite de tester tous les boréliens un par un et ne requiert aucune continuité de $X$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable aléatoire réelle", "Opérations"],
                q: "Si $X_1,\\dots,X_n$ sont des variables aléatoires réelles et $f: \\mathbb{R}^n \\to \\mathbb{R}$ est continue, que peut-on dire de $Y = f(X_1,\\dots,X_n)$ (Proposition 3.15) ?",
                options: [
                    { text: "$Y$ est également une variable aléatoire réelle", isCorrect: true },
                    { text: "En conséquence, $X+Y$, $XY$, et $X/Y$ (si $Y\\neq0$) sont des variables aléatoires réelles", isCorrect: true },
                    { text: "$\\sup_{1\\leq n\\leq k} X_n$, $\\liminf_{n\\geq1} X_n$ sont aussi des variables aléatoires réelles", isCorrect: true },
                    { text: "Ce résultat n'est vrai que si $f$ est linéaire", isCorrect: false }
                ],
                explanation: "La Proposition 3.15 exige seulement la continuité de $f$, pas la linéarité. Le Corollaire 3.16 en tire les conséquences pour les opérations usuelles (somme, produit, quotient) ainsi que pour sup/inf finis et infinis, limsup/liminf, et la limite lorsqu'elle est bien définie.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Fonction de répartition", "Définition"],
                q: "Comment est définie la fonction de répartition $F^X$ d'une variable aléatoire réelle $X$ ?",
                options: [
                    { text: "$F^X(x) = P_X(]-\\infty,x]) = P(X \\leq x)$ pour tout $x \\in \\mathbb{R}$", isCorrect: true },
                    { text: "$F^X(x) = P(X < x)$", isCorrect: false },
                    { text: "$F^X(x) = P(X = x)$", isCorrect: false },
                    { text: "$F^X$ prend ses valeurs dans $[0,1]$", isCorrect: true }
                ],
                explanation: "La Définition 3.17 pose $F^X(x) = P(X\\leq x)$, avec l'inégalité large. Comme $F^X$ est une probabilité d'un évènement, elle prend nécessairement ses valeurs dans $[0,1]$. La confusion fréquente est d'utiliser $P(X<x)$ (inégalité stricte), qui ne coïncide pas toujours avec $F^X(x)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Fonction de répartition", "Propriétés"],
                q: "Quelles sont les trois propriétés fondamentales de toute fonction de répartition $F^X$ (Proposition 3.18) ?",
                options: [
                    { text: "Elle est croissante", isCorrect: true },
                    { text: "Elle est continue à droite", isCorrect: true },
                    { text: "$\\lim_{x\\to-\\infty} F^X(x) = 0$ et $\\lim_{x\\to+\\infty} F^X(x) = 1$", isCorrect: true },
                    { text: "Elle est nécessairement continue en tout point", isCorrect: false }
                ],
                explanation: "$F^X$ vérifie croissance, continuité à droite (mais pas nécessairement à gauche : elle peut avoir des sauts, comme pour les variables discrètes) et les limites 0/1 aux infinis. Ces trois propriétés caractérisent entièrement les fonctions de répartition possibles (Théorème 3.21).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Fonction de répartition", "Caractérisation de la loi"],
                q: "En quel sens la fonction de répartition $F^X$ caractérise-t-elle la loi $P_X$ ?",
                options: [
                    { text: "Deux variables aléatoires ont même loi si et seulement si elles ont même fonction de répartition", isCorrect: true },
                    { text: "Ce résultat s'appuie sur le fait qu'une probabilité sur $(\\mathbb{R},\\mathcal{B}(\\mathbb{R}))$ est déterminée par ses valeurs sur les $]-\\infty,x]$", isCorrect: true },
                    { text: "Cette caractérisation est une conséquence du lemme de classe monotone", isCorrect: true },
                    { text: "Deux variables ayant même fonction de répartition ont nécessairement même valeur presque sûrement", isCorrect: false }
                ],
                explanation: "La Proposition 3.18 affirme cette équivalence. Le sens facile est direct (même loi ⟹ même $F^X$) ; l'autre sens s'appuie sur le résultat de caractérisation par un π-système générateur mentionné en Section 1.4, conséquence du lemme de classe monotone. Attention : « même loi » ne signifie pas « même valeur presque sûrement », deux variables aléatoires distinctes peuvent avoir la même loi sans être égales.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Fonction de répartition", "Formules"],
                q: "Soit $x < y$ deux réels. Quelles formules impliquant $F^X$ et sa limite à gauche $F^X(x^-)$ sont correctes ?",
                options: [
                    { text: "$P(X > x) = 1 - F^X(x)$", isCorrect: true },
                    { text: "$P(x < X \\leq y) = F^X(y) - F^X(x)$", isCorrect: true },
                    { text: "$P(X = x) = F^X(x) - F^X(x^-)$", isCorrect: true },
                    { text: "$P(x < X < y) = F^X(y) - F^X(x)$", isCorrect: false }
                ],
                explanation: "La Proposition 3.19 donne ces formules. Attention à la dernière : $P(x<X<y)$ utilise la limite à gauche en $y$, soit $F^X(y^-) - F^X(x)$, et non $F^X(y)$, car il faut exclure la masse ponctuelle éventuelle en $y$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Fonction de répartition", "Continuité"],
                q: "Quel est le lien entre la continuité de $F^X$ en un point $x$ et la probabilité $P(X=x)$ (Corollaire 3.20) ?",
                options: [
                    { text: "$P(X=x) = 0 \\iff F^X$ est continue en $x$", isCorrect: true },
                    { text: "$F^X$ admet toujours une limite à gauche en tout point (même si elle n'y est pas continue)", isCorrect: true },
                    { text: "$P(X=x) > 0$ signifie que $F^X$ présente un saut de hauteur $P(X=x)$ en $x$", isCorrect: true },
                    { text: "$F^X$ est toujours continue en tout point où $X$ est une variable discrète", isCorrect: false }
                ],
                explanation: "Ce corollaire découle directement du Point 7 de la Proposition 3.19 : $P(X=x) = F^X(x) - F^X(x^-)$. Ainsi la masse ponctuelle en $x$ correspond exactement à la taille du saut de $F^X$ en ce point. Pour une variable discrète, $F^X$ a des sauts précisément aux points de $X(\\Omega)$, donc n'y est justement PAS continue.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Fonction de répartition", "Théorème de caractérisation"],
                q: "Que dit le Théorème 3.21 sur les fonctions satisfaisant les propriétés 1 à 3 de la Proposition 3.18 (croissance, continuité à droite, limites 0/1) ?",
                options: [
                    { text: "Toute fonction $F$ ayant ces propriétés est la fonction de répartition d'une loi $\\mu$ sur $(\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))$", isCorrect: true },
                    { text: "On ne peut pas en général définir $\\mu$ sur la tribu $\\mathcal{P}(\\mathbb{R})$ de toutes les parties de $\\mathbb{R}$", isCorrect: true },
                    { text: "Ce résultat se démontre facilement sans outils avancés", isCorrect: false },
                    { text: "Ce théorème est une conséquence directe et élémentaire du Corollaire 3.20", isCorrect: false }
                ],
                explanation: "Le Théorème 3.21 est la réciproque de la Proposition 3.18 : c'est un résultat profond de théorie de la mesure (nécessitant la preuve de l'existence d'une mesure de probabilité), énoncé sans démonstration dans ce cours. Il souligne aussi que $\\mathcal{P}(\\mathbb{R})$ est en général trop grande pour porter une telle mesure de manière cohérente.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variables discrètes réelles", "Fonction de répartition"],
                q: "Pour une variable aléatoire $X$ discrète réelle, quelles propriétés de la fonction de répartition $F^X$ sont vraies (Proposition 3.22) ?",
                options: [
                    { text: "$F^X(x) = \\sum_{y \\in X(\\Omega), y \\leq x} P_X(y)$", isCorrect: true },
                    { text: "Si $x$ et $y$ sont deux points consécutifs de $X(\\Omega)$, $F^X$ est constante sur $[x,y[$", isCorrect: true },
                    { text: "La hauteur du saut en $x \\in X(\\Omega)$ est $P_X(x)$", isCorrect: true },
                    { text: "$F^X$ est une fonction continue dans le cas discret", isCorrect: false }
                ],
                explanation: "Pour une variable discrète, $F^X$ est une fonction en escalier : constante entre deux valeurs consécutives de $X(\\Omega)$ et présentant un saut de hauteur $P_X(x)$ en chaque point $x$ de $X(\\Omega)$. Elle n'est donc jamais continue en ces points (sauf si $P_X(x)=0$, ce qui n'arrive pas pour les valeurs effectivement prises).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Densité de probabilité", "Définition"],
                q: "Quelles conditions doit vérifier une fonction $f : \\mathbb{R} \\to \\mathbb{R}$ pour être une densité de probabilité ?",
                options: [
                    { text: "$f$ est positive", isCorrect: true },
                    { text: "$f$ est intégrable", isCorrect: true },
                    { text: "$\\int_{-\\infty}^{+\\infty} f(x)\\,dx = 1$", isCorrect: true },
                    { text: "$f$ doit être bornée par 1", isCorrect: false }
                ],
                explanation: "La Définition 3.24 exige positivité, intégrabilité, et intégrale totale égale à 1. Contrairement à une confusion fréquente, une densité n'est PAS bornée par 1 : par exemple la densité uniforme sur $[0, 0.5]$ vaut 2 sur cet intervalle.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable à densité", "Propriétés"],
                q: "Si $X$ est une variable aléatoire à densité $f$, quelles propriétés sont vraies (Proposition 3.25) ?",
                options: [
                    { text: "$F^X$ est continue sur $\\mathbb{R}$, donc $P(X=x)=0$ pour tout $x$", isCorrect: true },
                    { text: "$F^X$ est dérivable partout où $f$ est continue, avec $(F^X)'(x) = f(x)$ en ces points", isCorrect: true },
                    { text: "Pour tout intervalle $J$ non réduit à un point, $P(X \\in J) = \\int_J f(x)\\,dx$", isCorrect: true },
                    { text: "Une variable à densité prend nécessairement un nombre fini de valeurs", isCorrect: false }
                ],
                explanation: "Ces propriétés découlent directement de la définition d'une densité via l'intégrale (3.1). Une variable à densité prend au contraire un continuum de valeurs (typiquement un intervalle de $\\mathbb{R}$), ce qui contraste fondamentalement avec le cas discret.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Densité", "Non-unicité"],
                q: "Concernant l'unicité de la densité d'une variable aléatoire, que dit la Remarque 3.26 ?",
                options: [
                    { text: "Si on modifie $f$ en un nombre fini de points, on obtient une autre densité définissant la même variable aléatoire", isCorrect: true },
                    { text: "On devrait parler « d'une » densité plutôt que « de la » densité", isCorrect: true },
                    { text: "Toutes les variables aléatoires discrètes admettent aussi une densité", isCorrect: false },
                    { text: "La densité d'une variable aléatoire est toujours unique", isCorrect: false }
                ],
                explanation: "Modifier une fonction en un nombre fini (ou même dénombrable) de points ne change pas la valeur de son intégrale, donc ne change pas la loi définie. La densité n'est donc pas unique. Les variables discrètes, elles, n'admettent PAS de densité au sens de cette définition (leur loi est portée par un ensemble dénombrable de points, de mesure de Lebesgue nulle).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi uniforme continue"],
                q: "Quelle est la densité de la loi uniforme $\\mathcal{U}([a,b])$ (avec $a<b$) ?",
                options: [
                    { text: "$f(x) = \\dfrac{1}{b-a} \\mathbb{I}_{[a,b]}(x)$", isCorrect: true },
                    { text: "$f(x) = \\dfrac{1}{b-a}$ pour tout $x \\in \\mathbb{R}$", isCorrect: false },
                    { text: "On peut redéfinir $f(a)=0$ et/ou $f(b)=0$ sans changer la loi", isCorrect: true },
                    { text: "$f(x) = b-a$ pour $x \\in [a,b]$", isCorrect: false }
                ],
                explanation: "La densité vaut $1/(b-a)$ uniquement sur $[a,b]$ et $0$ ailleurs (sinon l'intégrale ne vaudrait pas 1 sur un domaine non borné). En vertu de la non-unicité de la densité, on peut modifier les valeurs aux bornes $a$ et $b$ sans changer la loi (ces points ont une mesure de Lebesgue nulle).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi normale", "Gaussienne"],
                q: "Concernant la loi normale (gaussienne) $\\mathcal{N}(\\mu, \\sigma^2)$ de densité $f(x) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$, quelles affirmations sont vraies ?",
                options: [
                    { text: "Si $X \\sim \\mathcal{N}(0,1)$, alors $Y = \\sigma X + \\mu$ suit une loi $\\mathcal{N}(\\mu, \\sigma^2)$", isCorrect: true },
                    { text: "Si $Y \\sim \\mathcal{N}(\\mu,\\sigma^2)$, alors $X = (Y-\\mu)/\\sigma$ suit une loi $\\mathcal{N}(0,1)$", isCorrect: true },
                    { text: "La fonction de répartition de $\\mathcal{N}(0,1)$ se calcule à l'aide des fonctions usuelles", isCorrect: false },
                    { text: "On parle de loi gaussienne « centrée-réduite » lorsque $\\mu=0$ et $\\sigma^2=1$", isCorrect: true }
                ],
                explanation: "Le cours indique explicitement que la fonction de répartition de la loi normale ne se calcule PAS à l'aide des fonctions usuelles (on utilise des tables numériques, avec la relation $\\Pi(x)+\\Pi(-x)=1$). Les relations de standardisation entre $X\\sim\\mathcal{N}(0,1)$ et $Y=\\sigma X+\\mu \\sim \\mathcal{N}(\\mu,\\sigma^2)$ sont vraies et fondamentales.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi exponentielle"],
                q: "Concernant la loi exponentielle $\\mathcal{E}(\\lambda)$ de densité $f(x) = \\lambda e^{-\\lambda x} \\mathbb{I}_{[0,+\\infty[}(x)$, quelles affirmations sont correctes ?",
                options: [
                    { text: "Elle modélise souvent une durée de vie ou un temps d'attente", isCorrect: true },
                    { text: "Elle a la propriété d'être « sans mémoire »", isCorrect: true },
                    { text: "La densité est nulle pour les valeurs négatives", isCorrect: true },
                    { text: "$\\lambda$ représente la variance de la loi", isCorrect: false }
                ],
                explanation: "Le cours décrit précisément ces usages et propriétés de la loi exponentielle. Le paramètre $\\lambda$ est un taux (analogue continu de la loi géométrique), pas directement la variance (qui vaudra en réalité $1/\\lambda^2$, résultat établi au chapitre suivant sur l'espérance).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi de Cauchy"],
                q: "Concernant la loi de Cauchy $\\mathcal{C}(\\lambda)$ de densité $f(x) = \\dfrac{\\lambda}{\\pi(\\lambda^2+x^2)}$, quelles affirmations sont correctes ?",
                options: [
                    { text: "Elle apparaît comme la loi du quotient de deux variables gaussiennes centrées indépendantes de même variance", isCorrect: true },
                    { text: "L'inverse d'une variable de Cauchy suit également une loi de Cauchy", isCorrect: true },
                    { text: "Sa densité est définie sur $\\mathbb{R}$ tout entier (pas seulement sur $[0,+\\infty[$)", isCorrect: true },
                    { text: "Elle est identique à la loi normale centrée réduite", isCorrect: false }
                ],
                explanation: "Le cours présente ces propriétés remarquables de la loi de Cauchy : elle résulte du quotient de deux gaussiennes centrées indépendantes de même variance, et se distingue de la loi normale (elle a des queues beaucoup plus lourdes, et n'admet même pas d'espérance finie).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi du chi carré"],
                q: "Que représente la loi du $\\chi^2$ à $n$ degrés de liberté, notée $\\chi^2(n)$ ?",
                options: [
                    { text: "La loi de la somme des carrés de $n$ variables aléatoires gaussiennes centrées réduites indépendantes", isCorrect: true },
                    { text: "Sa densité est nulle pour les valeurs strictement négatives", isCorrect: true },
                    { text: "Elle correspond à un cas particulier de la loi Gamma, avec $\\alpha = n/2$ et $\\lambda = 1/2$", isCorrect: true },
                    { text: "Elle est la loi du produit de $n$ variables gaussiennes indépendantes", isCorrect: false }
                ],
                explanation: "Le cours définit $\\chi^2(n)$ comme la loi de $\\sum_{i=1}^n Z_i^2$ où les $Z_i$ sont des gaussiennes centrées réduites indépendantes (pas un produit). Sa densité fait intervenir $\\mathbb{I}_{[0,\\infty[}$, donc s'annule pour les valeurs négatives, et elle coïncide avec la loi Gamma$(n/2, 1/2)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi Gamma"],
                q: "Concernant la loi Gamma $\\Gamma(\\alpha,\\lambda)$ de densité $f(x) = \\dfrac{\\lambda^\\alpha}{\\Gamma(\\alpha)} x^{\\alpha-1} e^{-\\lambda x} \\mathbb{I}_{[0,\\infty[}(x)$, quelles affirmations sont vraies ?",
                options: [
                    { text: "Lorsque $\\alpha = 1$, on retrouve la loi exponentielle $\\mathcal{E}(\\lambda)$", isCorrect: true },
                    { text: "Lorsque $\\alpha = n/2$ et $\\lambda = 1/2$, on retrouve la loi $\\chi^2(n)$", isCorrect: true },
                    { text: "La fonction $\\Gamma$ est définie par $\\Gamma(\\alpha) = \\int_0^{+\\infty} x^{\\alpha-1} e^{-x}\\,dx$", isCorrect: true },
                    { text: "La loi Gamma généralise uniquement la loi normale", isCorrect: false }
                ],
                explanation: "La loi Gamma est une famille très générale qui englobe l'exponentielle ($\\alpha=1$) et le $\\chi^2$ ($\\alpha=n/2, \\lambda=1/2$) comme cas particuliers. La fonction $\\Gamma$, définie par cette intégrale généralisée sur $]0,\\infty[$, normalise la densité. Elle n'a pas de lien direct de généralisation avec la loi normale.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Synthèse", "Discret vs densité"],
                q: "Quelles différences fondamentales distinguent une variable aléatoire discrète d'une variable aléatoire à densité ?",
                options: [
                    { text: "Une variable discrète a une fonction de répartition en escalier (sauts), une variable à densité a une fonction de répartition continue", isCorrect: true },
                    { text: "Pour une variable discrète, $P(X=x)$ peut être strictement positif ; pour une variable à densité, $P(X=x)=0$ toujours", isCorrect: true },
                    { text: "Une variable discrète prend ses valeurs dans un ensemble fini ou dénombrable, une variable à densité typiquement dans un intervalle", isCorrect: true },
                    { text: "Toute variable aléatoire réelle est soit discrète, soit à densité, sans autre possibilité", isCorrect: false }
                ],
                explanation: "Ces trois distinctions résument bien les Sections 3.3.3 et 3.3.4. La dernière affirmation est fausse : il existe des variables aléatoires réelles qui ne sont ni discrètes ni à densité (par exemple des lois mixtes, combinant une partie discrète et une partie continue, ou des lois singulières comme la fonction de Cantor).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    }
});

