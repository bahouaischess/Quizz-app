// ============================================================
// MatiÃ¨re : Probabilités : Chapitre 6 - Introduction à la marche aléatoire
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
Object.assign(defaultData, {
    "Probabilités : Chapitre 6 - Introduction à la marche aléatoire": {
        folder: "Probabilités",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Marche aléatoire", "Définition"],
                q: "Comment est définie une marche aléatoire $(S_n)_{n\\ge0}$ selon la Définition 6.1 ?",
                options: [
                    { text: "$S_n = x + \\sum_{k=1}^{n} X_k$, où $x=S_0$ et les $(X_k)_{k\\ge1}$ sont i.i.d", isCorrect: true },
                    { text: "$S_n = x \\times \\prod_{k=1}^n X_k$, où les $(X_k)$ sont indépendantes", isCorrect: false },
                    { text: "$S_n = \\max(X_1,\\dots,X_n)$", isCorrect: false },
                    { text: "$S_n = x + \\sum_{k=1}^n X_k$, où les $(X_k)$ sont indépendantes mais pas nécessairement de même loi", isCorrect: false }
                ],
                explanation: "Une marche aléatoire cumule des pas i.i.d $(X_k)_{k\\ge1}$ à partir d'une position initiale $x=S_0$. L'hypothèse i.i.d (indépendance ET même loi) est essentielle, contrairement à la simple indépendance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Marche aléatoire", "Applications"],
                q: "Selon l'introduction du chapitre, à quels phénomènes la marche aléatoire est-elle sous-jacente ?",
                options: [
                    { text: "Le déplacement d'une particule", isCorrect: true },
                    { text: "Les cours de la bourse", isCorrect: true },
                    { text: "Les réseaux électriques", isCorrect: true },
                    { text: "Uniquement les jeux de pile ou face", isCorrect: false }
                ],
                explanation: "Le cours mentionne explicitement le déplacement d'une particule, les cours de la bourse, les réseaux électriques et l'évolution d'une population comme phénomènes modélisés par des marches aléatoires ; ce n'est donc pas limité aux jeux de hasard simples.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Marche aléatoire sur Z", "Dimension 1"],
                q: "Pour la marche aléatoire sur $\\mathbb{Z}$ ($d=1$), les variables $X_k$ sont à valeurs dans $\\{-1,1\\}$ avec $P(X_k=1)=p$. Quand parle-t-on de marche aléatoire symétrique ?",
                options: [
                    { text: "Lorsque $p = \\frac{1}{2}$", isCorrect: true },
                    { text: "Lorsque $p = 1$", isCorrect: false },
                    { text: "Lorsque $p = 0$", isCorrect: false },
                    { text: "Pour toute valeur de $p \\in [0,1]$", isCorrect: false }
                ],
                explanation: "La marche est dite symétrique quand les probabilités d'aller à gauche ou à droite sont égales, c'est-à-dire $p=1/2$, ce qui correspond au cas où les $X_k$ sont uniformes sur $\\{-1,1\\}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Marche aléatoire sur Z^2", "Dimension 2"],
                q: "Pour la marche aléatoire symétrique sur $\\mathbb{Z}^2$, à quelles valeurs les pas $X_k$ sont-ils uniformément distribués ?",
                options: [
                    { text: "$\\{(1,0), (-1,0), (0,1), (0,-1)\\}$, chacun avec probabilité $1/4$", isCorrect: true },
                    { text: "$\\{(1,1), (-1,-1)\\}$, chacun avec probabilité $1/2$", isCorrect: false },
                    { text: "$\\{(1,0), (0,1)\\}$, chacun avec probabilité $1/2$", isCorrect: false },
                    { text: "$\\{-1,1\\}^2$ avec probabilité $1/4$ chacun, mais uniquement les 4 coins", isCorrect: false }
                ],
                explanation: "Sur $\\mathbb{Z}^2$, la marche symétrique se déplace uniformément vers l'un des 4 voisins directs (haut, bas, gauche, droite), chacun avec probabilité $1/4$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Notation"],
                q: "Que représente la notation $P_x(S_n = \\cdot)$ dans le cours ?",
                options: [
                    { text: "La loi de la marche aléatoire partant de l'état initial $x$", isCorrect: true },
                    { text: "La probabilité que $x$ soit visité au temps $n$", isCorrect: false },
                    { text: "La probabilité que la marche s'arrête en $x$", isCorrect: false },
                    { text: "La densité de $S_n$", isCorrect: false }
                ],
                explanation: "Cette notation spécifie la loi de la marche aléatoire conditionnellement au fait qu'elle démarre en $x$ (état initial $S_0=x$), notation utile car la loi de $(S_n)$ dépend du point de départ.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Retours en zéro", "Parité"],
                q: "Pour la marche aléatoire symétrique sur $\\mathbb{Z}^d$ ($d=1,2$), que vaut la probabilité de retour en 0 après un nombre impair de pas ?",
                options: [
                    { text: "Elle est nulle", isCorrect: true },
                    { text: "Elle vaut $1/2$", isCorrect: false },
                    { text: "Elle vaut $1$", isCorrect: false },
                    { text: "Cela dépend de la dimension $d$", isCorrect: false }
                ],
                explanation: "Pour revenir à l'origine, la marche doit faire autant de pas dans chaque direction opposée, ce qui n'est possible qu'avec un nombre total de pas pair (Proposition 6.3).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Retours en zéro", "Formule dimension 1"],
                q: "Pour la marche aléatoire symétrique sur $\\mathbb{Z}$ ($d=1$), quelle est la formule de $P_0(S_{2n}=0)$ ?",
                options: [
                    { text: "$\\binom{2n}{n} \\dfrac{1}{2^{2n}}$", isCorrect: true },
                    { text: "$\\binom{2n}{n} \\dfrac{1}{2^{4n}}$", isCorrect: false },
                    { text: "$\\binom{2n}{n}^2 \\dfrac{1}{2^{4n}}$", isCorrect: false },
                    { text: "$\\dfrac{1}{2^{2n}}$", isCorrect: false }
                ],
                explanation: "La formule pour $d=1$ est $P_0(S_{2n}=0) = \\binom{2n}{n}\\frac{1}{2^{2n}}$, obtenue via le lien avec une loi binomiale $\\text{Bin}(2n,1/2)$ : il faut $n$ pas vers la droite et $n$ vers la gauche parmi $2n$ pas.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Retours en zéro", "Formule dimension 2"],
                q: "Pour la marche aléatoire symétrique sur $\\mathbb{Z}^2$ ($d=2$), quelle est la formule de $P_0(S_{2n}=0)$ ?",
                options: [
                    { text: "$\\binom{2n}{n}^2 \\dfrac{1}{2^{4n}}$", isCorrect: true },
                    { text: "$\\binom{2n}{n} \\dfrac{1}{2^{2n}}$", isCorrect: false },
                    { text: "$\\binom{2n}{n} \\dfrac{1}{2^{4n}}$", isCorrect: false },
                    { text: "$\\binom{2n}{n}^2 \\dfrac{1}{2^{2n}}$", isCorrect: false }
                ],
                explanation: "Grâce à une bijection avec deux marches aléatoires indépendantes sur $\\mathbb{Z}$ (après rotation à 45° du réseau), on obtient le carré de la formule en dimension 1 : $\\binom{2n}{n}^2 \\frac{1}{2^{4n}}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Preuve dimension 1", "Loi de Bernoulli"],
                q: "Dans la preuve pour $d=1$, on écrit $X_k = 2Y_k - 1$ avec $Y_k \\sim \\text{Ber}(1/2)$. À quoi sert cette transformation ?",
                options: [
                    { text: "À exprimer $\\sum_{k=1}^{2n} Y_k$ comme une loi binomiale $\\text{Bin}(2n,1/2)$", isCorrect: true },
                    { text: "À rendre les $X_k$ indépendantes (elles ne l'étaient pas avant)", isCorrect: false },
                    { text: "À transformer la marche en une marche continue", isCorrect: false },
                    { text: "À garantir que $E(X_k)=1$", isCorrect: false }
                ],
                explanation: "En posant $Y_k=(X_k+1)/2 \\in \\{0,1\\}$, l'évènement $\\{S_{2n}=0\\}$ (i.e. $\\sum X_k=0$) devient $\\{\\sum Y_k = n\\}$, et comme les $(Y_k)$ sont i.i.d. de Bernoulli(1/2), leur somme suit une loi binomiale, ce qui permet le calcul explicite.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Preuve dimension 2", "Rotation du réseau"],
                q: "Quelle astuce est utilisée dans la preuve du cas $d=2$ pour se ramener au cas $d=1$ ?",
                options: [
                    { text: "Une bijection avec la marche $(\\tilde{S}_n)$ sur le réseau $\\tilde{\\mathbb{Z}}^2$, tourné de $45°$", isCorrect: true },
                    { text: "Un changement de variable exponentiel", isCorrect: false },
                    { text: "L'utilisation de la fonction caractéristique", isCorrect: false },
                    { text: "La projection sur une seule des deux coordonnées, en ignorant l'autre", isCorrect: false }
                ],
                explanation: "En tournant le réseau $\\mathbb{Z}^2$ de $45°$ (et en multipliant la longueur des arêtes par $\\sqrt{2}$), les pas deviennent à valeurs dans $\\{(1,1),(-1,1),(1,-1),(-1,-1)\\}$, et les deux composantes de la marche transformée deviennent des marches indépendantes sur $\\mathbb{Z}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Preuve dimension 2", "Indépendance des composantes"],
                q: "Dans la preuve du cas $d=2$, pourquoi les composantes $\\tilde{S}_n^1$ et $\\tilde{S}_n^2$ sont-elles indépendantes ?",
                options: [
                    { text: "Car pour chaque $k$, $\\tilde{X}_k^1$ et $\\tilde{X}_k^2$ sont indépendantes, et les $(\\tilde{X}_k)_{k\\ge1}$ sont i.i.d", isCorrect: true },
                    { text: "Car $\\tilde{S}_n^1$ et $\\tilde{S}_n^2$ ont la même loi", isCorrect: false },
                    { text: "Car $d=2$ implique automatiquement l'indépendance des coordonnées", isCorrect: false },
                    { text: "Ce n'est vrai qu'asymptotiquement quand $n\\to\\infty$", isCorrect: false }
                ],
                explanation: "L'indépendance des composantes $\\tilde{X}_k^1, \\tilde{X}_k^2$ pour chaque pas $k$, combinée à l'indépendance des différents pas $(\\tilde{X}_k)_{k\\ge1}$ entre eux, entraîne l'indépendance des sommes cumulées $\\tilde{S}_n^1$ et $\\tilde{S}_n^2$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Nombre de visites en zéro"],
                q: "Comment est défini $N_0$, le nombre de visites en 0 de la marche aléatoire ?",
                options: [
                    { text: "$N_0 = \\sum_{n=1}^{\\infty} \\mathbb{1}_{\\{S_n=0\\}}$", isCorrect: true },
                    { text: "$N_0 = \\max\\{n : S_n = 0\\}$", isCorrect: false },
                    { text: "$N_0 = \\min\\{n\\ge1 : S_n=0\\}$", isCorrect: false },
                    { text: "$N_0 = P(S_n = 0 \\text{ pour un certain } n)$", isCorrect: false }
                ],
                explanation: "$N_0$ compte le nombre total (éventuellement infini) de visites en 0 sur toute la trajectoire, en sommant les indicatrices $\\mathbb{1}_{\\{S_n=0\\}}$ pour tout $n\\ge1$. Ce n'est pas le premier temps de retour (qui serait un temps d'arrêt).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Corollaire 6.4", "Espérance infinie"],
                q: "Que dit le Corollaire 6.4 concernant $E(N_0)$ pour la marche aléatoire symétrique sur $\\mathbb{Z}^d$, $d=1,2$ ?",
                options: [
                    { text: "$E(N_0) = \\infty$", isCorrect: true },
                    { text: "$E(N_0) = 1$", isCorrect: false },
                    { text: "$E(N_0) = 0$", isCorrect: false },
                    { text: "$E(N_0)$ dépend de la dimension et est toujours finie", isCorrect: false }
                ],
                explanation: "En dimension 1 et 2, la marche aléatoire symétrique visite l'origine infiniment souvent en espérance ; c'est un signe de récurrence. Ce résultat contraste avec la dimension $d\\ge3$, où $E(N_0)$ devient finie (transience).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Récurrence / transience", "Dimension"],
                q: "Que se passe-t-il pour $E(N_0)$ lorsque la dimension $d$ augmente au-delà de 2 (i.e. $d\\ge3$) ?",
                options: [
                    { text: "$E(N_0)$ devient finie", isCorrect: true },
                    { text: "$E(N_0)$ reste infinie pour toute dimension", isCorrect: false },
                    { text: "$E(N_0)$ devient nulle", isCorrect: false },
                    { text: "$E(N_0)$ n'est définie que pour $d\\le2$", isCorrect: false }
                ],
                explanation: "Le cours indique qu'en dimension supérieure ou égale à 3, il devient de plus en plus difficile pour la marche de revenir en 0 une fois partie, ce qui rend l'espérance du nombre de visites finie (marche transiente).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Preuve Corollaire 6.4", "Convergence monotone"],
                q: "Quel théorème est utilisé dans la preuve du Corollaire 6.4 pour intervertir espérance et limite dans $E_0(N_0) = \\lim_{\\ell\\to\\infty} E_0(N_0^\\ell)$ ?",
                options: [
                    { text: "Le théorème de convergence monotone", isCorrect: true },
                    { text: "Le théorème de convergence dominée", isCorrect: false },
                    { text: "L'inégalité de Markov", isCorrect: false },
                    { text: "Le théorème de transfert", isCorrect: false }
                ],
                explanation: "La suite $(N_0^\\ell)_{\\ell\\ge1} = \\left(\\sum_{n=1}^{\\ell}\\mathbb{1}_{\\{S_n=0\\}}\\right)_{\\ell\\ge1}$ est croissante et positive, ce qui permet d'appliquer le théorème de convergence monotone pour obtenir $E_0(N_0) = \\sum_{n=1}^{\\infty} P_0(S_n=0)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Formule de Stirling"],
                q: "Quelle est la formule de Stirling utilisée dans la preuve du Corollaire 6.4 ?",
                options: [
                    { text: "$n! \\sim \\sqrt{2\\pi n} \\left(\\frac{n}{e}\\right)^n$", isCorrect: true },
                    { text: "$n! \\sim n^n$", isCorrect: false },
                    { text: "$n! \\sim \\sqrt{2\\pi n} \\, e^n$", isCorrect: false },
                    { text: "$n! \\sim \\frac{n^n}{e^n}$ (sans le facteur $\\sqrt{2\\pi n}$)", isCorrect: false }
                ],
                explanation: "La formule de Stirling $n! \\sim \\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^n$ est essentielle pour estimer le comportement asymptotique de $\\binom{2n}{n}\\frac{1}{2^{2n}}$, qui est équivalent à $\\frac{1}{\\sqrt{\\pi n}}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Séries divergentes", "Dimension 1 et 2"],
                q: "Pourquoi $E(N_0) = \\infty$ en dimension $d=1$ et $d=2$ d'après l'analyse asymptotique ?",
                options: [
                    { text: "Car le terme général $P_0(S_{2n}=0)$ est équivalent à $\\frac{1}{\\sqrt{\\pi n}}$ (d=1) ou $\\frac{1}{\\pi n}$ (d=2), termes généraux de séries divergentes", isCorrect: true },
                    { text: "Car $P_0(S_{2n}=0)$ tend vers une constante non nulle", isCorrect: false },
                    { text: "Car $P_0(S_{2n}=0)$ est croissant en $n$", isCorrect: false },
                    { text: "Car la série est une série géométrique de raison supérieure à 1", isCorrect: false }
                ],
                explanation: "En $d=1$, $\\sum \\frac{1}{\\sqrt{\\pi n}}$ diverge (comparable à une série de Riemann d'exposant $1/2 \\le 1$) ; en $d=2$, $\\sum \\frac{1}{\\pi n}$ diverge aussi (série harmonique). C'est cette divergence qui entraîne $E(N_0)=\\infty$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Ruine de la joueuse", "Modélisation"],
                q: "Dans le problème de la ruine de la joueuse, comment est modélisée la fortune $S_n$ de la joueuse A au temps $n$ (avant la fin du jeu) ?",
                options: [
                    { text: "$S_n = a + \\sum_{k=1}^{n} X_k$, avec $(X_k)$ i.i.d à valeurs dans $\\{-1,1\\}$, $P(X_k=1)=p$", isCorrect: true },
                    { text: "$S_n = a - \\sum_{k=1}^n X_k$, avec $X_k$ à valeurs dans $\\{0,1\\}$", isCorrect: false },
                    { text: "$S_n = a \\times p^n$", isCorrect: false },
                    { text: "$S_n = a + n$, de façon déterministe", isCorrect: false }
                ],
                explanation: "La fortune de la joueuse A évolue comme une marche aléatoire partant de sa fortune initiale $a$, avec des pas $+1$ (gain, probabilité $p$) ou $-1$ (perte, probabilité $q=1-p$), jusqu'à ce que le jeu s'arrête.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Ruine de la joueuse", "États absorbants"],
                q: "Dans le modèle de ruine, quels sont les états absorbants de la marche $(S_n)$ ?",
                options: [
                    { text: "$0$ et $a+b$", isCorrect: true },
                    { text: "Uniquement $0$", isCorrect: false },
                    { text: "Uniquement $a+b$", isCorrect: false },
                    { text: "$a$ et $b$", isCorrect: false }
                ],
                explanation: "Le jeu s'arrête dès que $S_n=0$ (la joueuse A est ruinée) ou $S_n=a+b$ (l'adversaire B est ruinée, A possède toute la fortune totale $a+b$) ; ces deux états sont absorbants car la marche y reste constante ensuite.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Ruine de la joueuse", "Récurrence"],
                q: "Notons $u_k = P_k(R)$ la probabilité de ruine de A en partant de la fortune $k$. Quelle récurrence satisfont les $(u_k)$ ?",
                options: [
                    { text: "$u_k = p\\,u_{k+1} + q\\,u_{k-1}$, pour $1\\le k \\le a+b-1$, avec $u_0=1$, $u_{a+b}=0$", isCorrect: true },
                    { text: "$u_k = p\\,u_{k-1} + q\\,u_{k+1}$, avec $u_0=0$, $u_{a+b}=1$", isCorrect: false },
                    { text: "$u_k = u_{k+1} + u_{k-1}$, indépendamment de $p$", isCorrect: false },
                    { text: "$u_k = p \\cdot u_{k+1} \\cdot u_{k-1}$", isCorrect: false }
                ],
                explanation: "En conditionnant sur le premier lancer (pile avec probabilité $p$, la fortune passe à $k+1$ ; face avec probabilité $q$, elle passe à $k-1$), on obtient cette récurrence linéaire d'ordre 2, avec les conditions au bord $u_0=1$ (déjà ruinée) et $u_{a+b}=0$ (déjà gagnante).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Ruine de la joueuse", "Équation caractéristique"],
                q: "Quelle est l'équation caractéristique associée à la récurrence $u_k = p\\,u_{k+1} + q\\,u_{k-1}$ ?",
                options: [
                    { text: "$p r^2 - r + q = 0$", isCorrect: true },
                    { text: "$r^2 - pr + q = 0$", isCorrect: false },
                    { text: "$p r^2 + r + q = 0$", isCorrect: false },
                    { text: "$r^2 - p - q = 0$", isCorrect: false }
                ],
                explanation: "En cherchant des solutions de la forme $u_k = r^k$, on obtient $r^{k+1}p - r^k + r^{k-1}q = 0$, ce qui après division par $r^{k-1}$ donne $pr^2-r+q=0$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Ruine de la joueuse", "Racines"],
                q: "Quelles sont les racines de l'équation caractéristique $pr^2-r+q=0$ (avec $q=1-p$) ?",
                options: [
                    { text: "$r_1 = 1$ et $r_2 = q/p$", isCorrect: true },
                    { text: "$r_1 = p$ et $r_2 = q$", isCorrect: false },
                    { text: "$r_1 = -1$ et $r_2 = p/q$", isCorrect: false },
                    { text: "$r_1 = 0$ et $r_2 = 1$", isCorrect: false }
                ],
                explanation: "Le discriminant vaut $\\Delta = 1-4pq = (2p-1)^2 \\ge 0$, et les racines sont $r_1=1$ (racine évidente puisque $p+q=1$) et $r_2 = q/p$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Ruine de la joueuse", "Cas p différent de q"],
                q: "Lorsque $p \\ne q$ (i.e. $p \\ne 1/2$), quelle est la formule finale pour $u_k$ ?",
                options: [
                    { text: "$u_k = \\dfrac{(q/p)^{a+b} - (q/p)^k}{(q/p)^{a+b} - 1}$", isCorrect: true },
                    { text: "$u_k = \\dfrac{(q/p)^{k}}{(q/p)^{a+b}}$", isCorrect: false },
                    { text: "$u_k = 1 - \\dfrac{k}{a+b}$", isCorrect: false },
                    { text: "$u_k = \\dfrac{(q/p)^k - 1}{(q/p)^{a+b}-1}$", isCorrect: false }
                ],
                explanation: "En utilisant les deux racines $r_1=1, r_2=q/p$, la solution générale $u_k = \\alpha + \\beta(q/p)^k$ et les conditions aux bords $u_0=1, u_{a+b}=0$, on obtient $u_k = \\frac{(q/p)^{a+b}-(q/p)^k}{(q/p)^{a+b}-1}$ après résolution du système linéaire.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Ruine de la joueuse", "Cas p égal q"],
                q: "Lorsque $p=q=1/2$, quelle est la formule finale pour $u_k$ ?",
                options: [
                    { text: "$u_k = 1 - \\dfrac{k}{a+b}$", isCorrect: true },
                    { text: "$u_k = \\dfrac{k}{a+b}$", isCorrect: false },
                    { text: "$u_k = \\dfrac{1}{2}$ pour tout $k$", isCorrect: false },
                    { text: "$u_k = 1 - \\left(\\dfrac{1}{2}\\right)^k$", isCorrect: false }
                ],
                explanation: "Quand $p=q=1/2$, la racine $r_2=q/p=1$ est double, donc la solution générale prend la forme $u_k = \\alpha + k\\beta$. Avec $u_0=1$ (donc $\\alpha=1$) et $u_{a+b}=0$ (donc $\\beta=-1/(a+b)$), on obtient $u_k = 1 - k/(a+b)$, linéaire en $k$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Ruine de la joueuse", "Racine double"],
                q: "Pourquoi la forme des solutions $u_k$ change-t-elle qualitativement lorsque $p=q$ ?",
                options: [
                    { text: "Car l'équation caractéristique admet alors une racine double $r=1$, imposant une solution de la forme $\\alpha + k\\beta$ au lieu de $\\alpha r_1^k+\\beta r_2^k$", isCorrect: true },
                    { text: "Car les probabilités deviennent négatives", isCorrect: false },
                    { text: "Car la marche aléatoire n'est plus définie quand $p=q$", isCorrect: false },
                    { text: "Car la joueuse ne peut plus être ruinée dans ce cas", isCorrect: false }
                ],
                explanation: "Pour une récurrence linéaire d'ordre 2 avec racine double $r$, l'espace des solutions est engendré par $r^k$ et $k\\,r^k$ (et non par deux puissances distinctes), ce qui change la forme générale de la solution — un résultat classique sur les équations de récurrence linéaires.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Ruine de la joueuse", "Conditions au bord"],
                q: "Quelles sont les conditions au bord (valeurs connues) de la récurrence sur $(u_k)$ ?",
                options: [
                    { text: "$u_0 = 1$ et $u_{a+b} = 0$", isCorrect: true },
                    { text: "$u_0 = 0$ et $u_{a+b} = 1$", isCorrect: false },
                    { text: "$u_0 = 1/2$ et $u_{a+b} = 1/2$", isCorrect: false },
                    { text: "$u_a = 1$ et $u_b = 0$", isCorrect: false }
                ],
                explanation: "$u_0=1$ car si la joueuse A a déjà une fortune nulle, elle est ruinée avec certitude ; $u_{a+b}=0$ car si elle possède toute la fortune totale, elle n'est jamais ruinée (le jeu s'est arrêté avec son adversaire ruiné).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Ruine de la joueuse", "Probabilités totales"],
                q: "Quel outil probabiliste est utilisé pour établir la récurrence sur $P_k(R)$ ?",
                options: [
                    { text: "La formule des probabilités totales, en conditionnant sur le résultat $X_1$ du premier lancer", isCorrect: true },
                    { text: "L'inégalité de Cauchy-Schwarz", isCorrect: false },
                    { text: "Le théorème de convergence dominée", isCorrect: false },
                    { text: "L'indépendance des évènements $R$ et $X_1$", isCorrect: false }
                ],
                explanation: "En conditionnant sur $X_1=1$ (probabilité $p$) ou $X_1=-1$ (probabilité $q$), la formule des probabilités totales donne $P_k(R) = P_{k+1}(R)p + P_{k-1}(R)q$, correspondant au fait que le jeu redémarre depuis une nouvelle fortune selon le résultat du premier lancer.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Ruine de la joueuse", "Interprétation"],
                q: "Que représente l'évènement $R$ dans le problème de la ruine de la joueuse ?",
                options: [
                    { text: "\"La joueuse A est finalement ruinée\"", isCorrect: true },
                    { text: "\"La joueuse A gagne le jeu\"", isCorrect: false },
                    { text: "\"Le jeu ne se termine jamais\"", isCorrect: false },
                    { text: "\"La pièce tombe sur pile au premier lancer\"", isCorrect: false }
                ],
                explanation: "$R$ désigne l'évènement où la fortune de A atteint 0 (elle perd tout son argent), et $u_k=P_k(R)$ est la probabilité de cet évènement lorsqu'elle démarre avec une fortune $k$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Ruine de la joueuse", "Extension"],
                q: "Le cours mentionne qu'une approche similaire à celle utilisée pour $u_k$ permet de calculer :",
                options: [
                    { text: "L'espérance de la durée du jeu avant la ruine de l'une des deux joueuses", isCorrect: true },
                    { text: "La probabilité que la pièce soit truquée", isCorrect: false },
                    { text: "La variance de $p$", isCorrect: false },
                    { text: "Le nombre total de parties jouées dans une vie", isCorrect: false }
                ],
                explanation: "Une méthode analogue (récurrence linéaire avec conditions au bord) permet d'obtenir l'espérance du temps d'arrêt du jeu, en plus de la probabilité de ruine.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Marche aléatoire", "Discriminant"],
                q: "Que vaut le discriminant $\\Delta$ de l'équation caractéristique $pr^2-r+q=0$ ?",
                options: [
                    { text: "$\\Delta = (2p-1)^2$", isCorrect: true },
                    { text: "$\\Delta = 1 - 4p$", isCorrect: false },
                    { text: "$\\Delta = 4pq - 1$", isCorrect: false },
                    { text: "$\\Delta = (p-q)^2 - 1$", isCorrect: false }
                ],
                explanation: "On calcule $\\Delta = 1 - 4pq$. En remplaçant $q=1-p$, on trouve $\\Delta = 1-4p(1-p) = 1-4p+4p^2 = (2p-1)^2 \\ge 0$, ce qui garantit deux racines réelles (éventuellement confondues si $p=1/2$).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Marche aléatoire", "Loi jointe des composantes"],
                q: "Dans la preuve du cas $d=2$, comment vérifie-t-on que $\\tilde{X}_k^1$ et $\\tilde{X}_k^2$ sont indépendantes ?",
                options: [
                    { text: "En montrant que $P(\\tilde{X}_k=(j,\\ell)) = P(\\tilde{X}_k^1=j)P(\\tilde{X}_k^2=\\ell) = 1/4$ pour tout $(j,\\ell) \\in \\{-1,1\\}^2$", isCorrect: true },
                    { text: "En supposant l'indépendance sans preuve", isCorrect: false },
                    { text: "En calculant uniquement $E(\\tilde{X}_k^1)$ et $E(\\tilde{X}_k^2)$", isCorrect: false },
                    { text: "En utilisant l'inégalité de Bienaymé-Tchebychev", isCorrect: false }
                ],
                explanation: "On vérifie directement la caractérisation de l'indépendance (Théorème 5.16) : la loi jointe se factorise en produit des lois marginales pour chaque couple de valeurs, ce qui confirme l'indépendance de $\\tilde{X}_k^1$ et $\\tilde{X}_k^2$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Marche aléatoire", "Loi marginale des composantes"],
                q: "Dans la preuve du cas $d=2$, quelle est la loi de chacune des composantes $\\tilde{X}_k^1$ et $\\tilde{X}_k^2$ ?",
                options: [
                    { text: "La loi uniforme sur $\\{-1,1\\}$", isCorrect: true },
                    { text: "La loi de Bernoulli de paramètre $1/4$", isCorrect: false },
                    { text: "La loi uniforme sur $\\{-1,0,1\\}$", isCorrect: false },
                    { text: "La loi binomiale $\\text{Bin}(2,1/2)$", isCorrect: false }
                ],
                explanation: "En sommant les probabilités jointes correspondant aux deux valeurs possibles, on obtient $P(\\tilde{X}_k^1=1)=P(\\tilde{X}_k^1=-1)=1/2$, soit une loi uniforme sur $\\{-1,1\\}$, identique à la marche symétrique en dimension 1.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    }
});

