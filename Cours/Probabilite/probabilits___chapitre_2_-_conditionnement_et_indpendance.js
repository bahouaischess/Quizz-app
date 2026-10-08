// ============================================================
// MatiÃ¨re : Probabilités : Chapitre 2 - Conditionnement et indépendance
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
Object.assign(defaultData, {
    "Probabilités : Chapitre 2 - Conditionnement et indépendance": {
        folder: "Probabilités",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Probabilité conditionnelle", "Définition"],
                q: "Comment est définie la probabilité conditionnelle $P(A|B)$ pour $B$ tel que $P(B) > 0$ ?",
                options: [
                    { text: "$P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$", isCorrect: true },
                    { text: "$P(A|B) = P(A) \\cdot P(B)$", isCorrect: false },
                    { text: "$P(A|B) = P(A) - P(B)$", isCorrect: false },
                    { text: "$P(A|B) = \\dfrac{P(B)}{P(A \\cap B)}$", isCorrect: false }
                ],
                explanation: "La Définition 2.1 pose $P(A|B) = P(A\\cap B)/P(B)$, qui nécessite $P(B) > 0$ pour être définie. Intuitivement, on « restreint » l'univers à $B$ et on regarde la proportion de $A\\cap B$ dans ce nouvel univers.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité conditionnelle", "Propriétés"],
                q: "Que peut-on dire de l'application $P(\\cdot | B) : \\mathcal{F} \\to \\mathbb{R}_+$, $A \\mapsto P(A|B)$ (avec $P(B)>0$) ?",
                options: [
                    { text: "C'est une probabilité sur $(\\Omega, \\mathcal{F})$", isCorrect: true },
                    { text: "Le triplet $(\\Omega, \\mathcal{F}, P(\\cdot|B))$ est un espace probabilisé", isCorrect: true },
                    { text: "Elle satisfait donc toutes les propriétés générales des probabilités (Corollaire 1.12, Proposition 1.13)", isCorrect: true },
                    { text: "Elle n'est définie que sur les sous-ensembles de $B$", isCorrect: false }
                ],
                explanation: "Le Lemme 2.2 démontre que $P(\\cdot|B)$ vérifie les trois axiomes d'une probabilité (bornes dans [0,1], $P(\\Omega|B)=1$, σ-additivité), donc c'est bien une probabilité sur l'ensemble de $\\mathcal{F}$ (pas seulement sur les sous-ensembles de $B$), et hérite donc de toutes les propriétés générales déjà établies.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité conditionnelle", "Probabilités composées"],
                q: "Si $P(A) > 0$ et $P(B) > 0$, quelle identité relie $P(A\\cap B)$, $P(A|B)$ et $P(B|A)$ ?",
                options: [
                    { text: "$P(A \\cap B) = P(B|A)\\,P(A) = P(A|B)\\,P(B)$", isCorrect: true },
                    { text: "$P(A \\cap B) = P(A|B) + P(B|A)$", isCorrect: false },
                    { text: "$P(A \\cap B) = P(A) \\cdot P(B)$ dans tous les cas", isCorrect: false },
                    { text: "$P(A \\cap B) = P(A|B) \\cdot P(B|A)$", isCorrect: false }
                ],
                explanation: "C'est la formule des probabilités composées (Proposition 2.4, Point 1), obtenue simplement en réécrivant la définition de la probabilité conditionnelle des deux façons possibles. L'égalité $P(A\\cap B) = P(A)P(B)$ n'est vraie que dans le cas particulier de l'indépendance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité conditionnelle", "Probabilités composées"],
                q: "Quelle est la formule des probabilités composées généralisée à $n$ évènements $A_1, \\dots, A_n$ (avec $P(\\cap_{i=1}^{n-1} A_i) > 0$) ?",
                options: [
                    { text: "$P(A_1 \\cap \\dots \\cap A_n) = P(A_1)\\, P(A_2|A_1)\\, P(A_3|A_1\\cap A_2) \\dots P(A_n|A_1\\cap \\dots \\cap A_{n-1})$", isCorrect: true },
                    { text: "$P(A_1 \\cap \\dots \\cap A_n) = \\prod_{i=1}^n P(A_i)$ en toute généralité", isCorrect: false },
                    { text: "Cette formule se démontre par récurrence à partir du cas $n=2$", isCorrect: true },
                    { text: "$P(A_1 \\cap \\dots \\cap A_n) = P(A_n|A_1 \\cap \\dots \\cap A_{n-1})$ seul suffit", isCorrect: false }
                ],
                explanation: "La Proposition 2.4, Point 2, généralise la règle du produit conditionnel en chaîne. Chaque facteur conditionne sur l'intersection de tous les évènements précédents. Le produit simple des probabilités $\\prod P(A_i)$ ne serait valable qu'en cas d'indépendance mutuelle.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité conditionnelle", "Exemple", "Calcul"],
                q: "On lance deux fois un dé équilibré. Sachant que le premier jet donne 3, quelle est la probabilité que la somme soit strictement supérieure à 6 ?",
                options: [
                    { text: "$P(A|B) = 1/2$", isCorrect: true },
                    { text: "$B$ = « premier jet donne 3 » a pour cardinal 6, donc $P(B) = 1/6$", isCorrect: true },
                    { text: "$A \\cap B = \\{(3,4),(3,5),(3,6)\\}$, de cardinal 3", isCorrect: true },
                    { text: "$P(A|B) = 1/6$", isCorrect: false }
                ],
                explanation: "Avec $\\Omega = \\{1,\\dots,6\\}^2$ équiprobable, $B=\\{(3,j): j\\in\\{1,\\dots,6\\}\\}$ a pour cardinal 6, donc $P(B)=6/36=1/6$. $A\\cap B = \\{(3,4),(3,5),(3,6)\\}$ (sommes 7,8,9 > 6), de cardinal 3, donc $P(A\\cap B) = 3/36 = 1/12$. Ainsi $P(A|B) = (1/12)/(1/6) = 1/2$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Système complet", "Probabilités totales"],
                q: "Qu'est-ce qu'un système complet d'évènements $(B_i)_{i \\in I}$ ?",
                options: [
                    { text: "Une famille d'évènements deux-à-deux disjoints dont la réunion vaut $\\Omega$", isCorrect: true },
                    { text: "C'est-à-dire une partition de $\\Omega$", isCorrect: true },
                    { text: "Une famille d'évènements indépendants", isCorrect: false },
                    { text: "Une famille d'évènements dont l'intersection vaut $\\Omega$", isCorrect: false }
                ],
                explanation: "La Définition 2.6 précise que $(B_i)_{i\\in I}$ forme un système complet d'évènements (une partition de $\\Omega$) si les $B_i$ sont deux-à-deux disjoints et $\\bigcup_{i\\in I} B_i = \\Omega$. Cette notion n'a aucun rapport direct avec l'indépendance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Formule des probabilités totales"],
                q: "Soit $(B_i)_{i\\in I}$ un système complet d'évènements avec $P(B_i) > 0$ pour tout $i$. Quelle est la formule des probabilités totales pour $A \\in \\mathcal{F}$ ?",
                options: [
                    { text: "$P(A) = \\sum_{i \\in I} P(A|B_i)\\, P(B_i)$", isCorrect: true },
                    { text: "$P(A) = \\sum_{i \\in I} P(A \\cap B_i)$", isCorrect: true },
                    { text: "$P(A) = \\prod_{i \\in I} P(A|B_i)$", isCorrect: false },
                    { text: "$P(A) = \\max_{i \\in I} P(A|B_i)$", isCorrect: false }
                ],
                explanation: "Le Théorème 2.7 établit que $A = \\bigcup_{i\\in I}(A\\cap B_i)$ (réunion disjointe car les $B_i$ le sont), d'où par σ-additivité $P(A) = \\sum_i P(A\\cap B_i)$, et en utilisant $P(A\\cap B_i) = P(A|B_i)P(B_i)$, on obtient la forme usuelle de la formule.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Formule de Bayes"],
                q: "Sous les hypothèses de la formule des probabilités totales et si $P(A) > 0$, quelle est la formule de Bayes pour $P(B_i|A)$ ?",
                options: [
                    { text: "$P(B_i|A) = \\dfrac{P(A|B_i)\\,P(B_i)}{\\sum_{j \\in I} P(A|B_j)\\,P(B_j)}$", isCorrect: true },
                    { text: "Le dénominateur est obtenu en appliquant la formule des probabilités totales à $P(A)$", isCorrect: true },
                    { text: "$P(B_i|A) = P(A|B_i)$", isCorrect: false },
                    { text: "$P(B_i|A) = \\dfrac{P(B_i)}{P(A)}$", isCorrect: false }
                ],
                explanation: "La formule de Bayes « inverse » le conditionnement : elle exprime $P(B_i|A)$ en fonction des $P(A|B_j)$. Elle se démontre en écrivant $P(B_i|A) = P(B_i \\cap A)/P(A) = P(A|B_i)P(B_i)/P(A)$, puis en remplaçant $P(A)$ par la formule des probabilités totales.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Paradoxe de Simpson"],
                q: "Que met en évidence le paradoxe de Simpson illustré par l'exemple des traitements de calculs rénaux ?",
                options: [
                    { text: "Une comparaison globale entre deux traitements peut s'inverser lorsqu'on tient compte d'une variable supplémentaire (comme la taille des calculs)", isCorrect: true },
                    { text: "Ce rebroussement provient d'une répartition très différente des tailles de groupes combinés dans les deux populations comparées", isCorrect: true },
                    { text: "Ce paradoxe montre que la formule des probabilités totales est fausse", isCorrect: false },
                    { text: "Le traitement B est toujours objectivement supérieur au traitement A", isCorrect: false }
                ],
                explanation: "Dans l'exemple, le traitement B semble globalement meilleur (83% vs 78%), mais en stratifiant par la taille des calculs, le traitement A est en fait plus efficace dans les deux sous-groupes. Ce paradoxe illustre l'importance de bien utiliser la formule des probabilités totales pour interpréter des données agrégées, et ne remet nullement en cause sa validité.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance", "Définition"],
                q: "Quelle est la définition de l'indépendance de deux évènements $A$ et $B$ ?",
                options: [
                    { text: "$P(A \\cap B) = P(A)\\,P(B)$", isCorrect: true },
                    { text: "$A \\cap B = \\emptyset$", isCorrect: false },
                    { text: "$P(A|B) = P(A)$ (lorsque $P(B) > 0$), ce qui est équivalent à la définition", isCorrect: true },
                    { text: "$P(A \\cup B) = P(A) + P(B)$", isCorrect: false }
                ],
                explanation: "La Définition 2.9 pose $A, B$ indépendants si $P(A\\cap B) = P(A)P(B)$. Quand $P(A), P(B) > 0$, ceci équivaut à $P(A|B) = P(A)$ et $P(B|A) = P(B)$ : l'information de réalisation de B ne modifie pas la vraisemblance de A. L'indépendance n'a rien à voir avec la disjonction des évènements.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance", "Exemples"],
                q: "Les évènements $\\emptyset$ et $\\Omega$ sont-ils toujours indépendants, quelle que soit la probabilité $P$ ?",
                options: [
                    { text: "Oui, car $P(\\emptyset \\cap \\Omega) = P(\\emptyset) = 0$ et $P(\\emptyset)P(\\Omega) = 0 \\times 1 = 0$", isCorrect: true },
                    { text: "Non, cela dépend de la probabilité choisie", isCorrect: false },
                    { text: "Ce résultat illustre que l'indépendance n'implique pas la disjonction (ici $\\emptyset \\cap \\Omega = \\emptyset$ mais aussi $\\emptyset \\subset \\Omega$)", isCorrect: false },
                    { text: "Non, car $\\emptyset$ a une probabilité nulle donc n'est jamais indépendant d'un autre évènement", isCorrect: false }
                ],
                explanation: "$P(\\emptyset \\cap \\Omega) = P(\\emptyset) = 0 = P(\\emptyset) \\cdot P(\\Omega)$ pour toute probabilité $P$ (puisque $P(\\emptyset)=0$ toujours). Cette égalité est vraie systématiquement, indépendamment du choix de $P$. Un évènement de probabilité 0 (ou 1) est toujours indépendant de tout autre évènement.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance", "Nature de la notion"],
                q: "Quelles affirmations sur la nature de la notion d'indépendance sont correctes ?",
                options: [
                    { text: "L'indépendance est liée au choix de la probabilité $P$, ce n'est pas une notion purement ensembliste", isCorrect: true },
                    { text: "Deux évènements indépendants peuvent avoir une intersection non vide", isCorrect: true },
                    { text: "Deux évènements disjoints (incompatibles) et de probabilité strictement positive sont toujours indépendants", isCorrect: false },
                    { text: "L'indépendance équivaut toujours à la disjonction des évènements", isCorrect: false }
                ],
                explanation: "La Remarque 2.11 souligne que l'indépendance dépend du choix de $P$ et n'a rien à voir avec la disjonction ensembliste. Au contraire, si $A$ et $B$ sont disjoints avec $P(A), P(B) > 0$, alors $P(A\\cap B) = 0 \\neq P(A)P(B) > 0$ : ils ne sont donc jamais indépendants dans ce cas.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance", "Exemple dé"],
                q: "On jette un dé équilibré. Soit $A$ = « obtenir 1, 2 ou 3 » et $B$ = « obtenir 1, 2, 4 ou 5 ». $A$ et $B$ sont-ils indépendants ?",
                options: [
                    { text: "Oui, car $P(A\\cap B) = P(\\{1,2\\}) = 1/3 = P(A) \\cdot P(B) = (1/2)(2/3)$", isCorrect: true },
                    { text: "Non, car $A \\cap B \\neq \\emptyset$", isCorrect: false },
                    { text: "$P(A) = 1/2$ et $P(B) = 2/3$", isCorrect: true },
                    { text: "Non, car $A$ et $B$ ont des cardinaux différents", isCorrect: false }
                ],
                explanation: "$P(A) = 3/6 = 1/2$, $P(B) = 4/6 = 2/3$, $A \\cap B = \\{1,2\\}$ donc $P(A\\cap B) = 2/6 = 1/3$. On vérifie $P(A)P(B) = (1/2)(2/3) = 1/3 = P(A\\cap B)$ : les évènements sont bien indépendants, malgré une intersection non vide — ce qui illustre justement que disjonction et indépendance sont des notions distinctes.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance", "Propriétés"],
                q: "Si $A$ et $B$ sont des évènements indépendants, quelles paires d'évènements sont également indépendantes ?",
                options: [
                    { text: "$A^c$ et $B$", isCorrect: true },
                    { text: "$A$ et $B^c$", isCorrect: true },
                    { text: "$A^c$ et $B^c$", isCorrect: true },
                    { text: "Seule la paire originale $A, B$ est garantie indépendante ; les complémentaires ne le sont pas nécessairement", isCorrect: false }
                ],
                explanation: "La Proposition 2.12 démontre que si $A$ et $B$ sont indépendants, alors $A^c$ et $B$, $A$ et $B^c$, ainsi que $A^c$ et $B^c$ le sont aussi. La démonstration clé utilise $P(A^c \\cap B) = P(B) - P(A\\cap B) = P(B)(1-P(A)) = P(B)P(A^c)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance mutuelle"],
                q: "Quelle est la définition de l'indépendance mutuelle d'une famille d'évènements $(A_i)_{i \\in I}$ ?",
                options: [
                    { text: "Pour toute partie finie $K \\subset I$, $P\\left(\\bigcap_{i \\in K} A_i\\right) = \\prod_{i \\in K} P(A_i)$", isCorrect: true },
                    { text: "Il suffit que $P(A_i \\cap A_j) = P(A_i)P(A_j)$ pour tout $i \\neq j$", isCorrect: false },
                    { text: "Cette condition doit être vérifiée pour TOUTE sous-famille finie, pas seulement la famille entière", isCorrect: true },
                    { text: "Il suffit que $\\bigcap_{i \\in I} A_i \\neq \\emptyset$", isCorrect: false }
                ],
                explanation: "La Définition 2.13 exige l'égalité du produit pour toute partie finie $K$ de $I$, ce qui est une condition bien plus forte que la simple indépendance deux-à-deux (qui ne teste que les paires). C'est précisément cette distinction que met en évidence l'Exemple 2.14.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance mutuelle", "Deux-à-deux"],
                q: "Quelle relation existe-t-il entre l'indépendance mutuelle et l'indépendance deux-à-deux d'une famille d'évènements ?",
                options: [
                    { text: "L'indépendance mutuelle implique l'indépendance deux-à-deux", isCorrect: true },
                    { text: "L'indépendance deux-à-deux n'implique pas en général l'indépendance mutuelle", isCorrect: true },
                    { text: "Ces deux notions sont toujours équivalentes", isCorrect: false },
                    { text: "L'indépendance deux-à-deux est une condition plus forte que l'indépendance mutuelle", isCorrect: false }
                ],
                explanation: "L'indépendance mutuelle (produit vrai pour toute sous-famille finie) est strictement plus forte que l'indépendance deux-à-deux (produit vrai seulement pour les paires). L'Exemple 2.14 du cours construit un contre-exemple explicite montrant que l'indépendance deux-à-deux n'entraîne pas l'indépendance mutuelle.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance mutuelle", "Contre-exemple"],
                q: "Dans l'Exemple 2.14 ($\\Omega = \\{1,2,3,4\\}$ équiprobable, $A=\\{1,2\\}$, $B=\\{2,3\\}$, $C=\\{1,3\\}$), pourquoi $A, B, C$ ne sont-ils pas mutuellement indépendants ?",
                options: [
                    { text: "$A \\cap B \\cap C = \\emptyset$ donc $P(A\\cap B\\cap C) = 0$, alors que $P(A)P(B)P(C) = 1/8 \\neq 0$", isCorrect: true },
                    { text: "Ils sont pourtant deux-à-deux indépendants : $P(A\\cap B) = P(A)P(B) = 1/4$", isCorrect: true },
                    { text: "Parce que $A$, $B$ et $C$ sont deux-à-deux disjoints", isCorrect: false },
                    { text: "Parce que $P(A) \\neq P(B) \\neq P(C)$", isCorrect: false }
                ],
                explanation: "On a $P(A)=P(B)=P(C)=1/2$, et $P(A\\cap B)=P(B\\cap C)=P(A\\cap C)=1/4=P(A)P(B)$ etc., donc les trois paires sont bien indépendantes deux-à-deux. Mais $A\\cap B\\cap C = \\emptyset$, donc $P(A\\cap B\\cap C)=0$ alors que $P(A)P(B)P(C)=1/8$ : la condition d'indépendance mutuelle échoue pour la famille entière.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Borel-Cantelli", "lim sup", "lim inf"],
                q: "Soit $(A_n)_{n\\geq1}$ une suite d'évènements. Comment sont définis $\\limsup_n A_n$ et $\\liminf_n A_n$ ?",
                options: [
                    { text: "$\\limsup_n A_n = \\bigcap_{k\\geq1}\\bigcup_{n\\geq k} A_n$, l'ensemble des $\\omega$ appartenant à une infinité de $A_n$", isCorrect: true },
                    { text: "$\\liminf_n A_n = \\bigcup_{k\\geq1}\\bigcap_{n\\geq k} A_n$, l'ensemble des $\\omega$ appartenant à tous les $A_n$ à partir d'un certain rang", isCorrect: true },
                    { text: "$\\limsup_n A_n$ et $\\liminf_n A_n$ n'appartiennent pas nécessairement à $\\mathcal{F}$", isCorrect: false },
                    { text: "$\\limsup_n A_n = \\bigcup_{k\\geq1}\\bigcap_{n\\geq k} A_n$", isCorrect: false }
                ],
                explanation: "La Définition 2.15 donne ces formules précises. Comme $\\limsup A_n$ et $\\liminf A_n$ sont des intersections et réunions dénombrables d'évènements de $\\mathcal{F}$, ils appartiennent bien à $\\mathcal{F}$ (stabilité de la tribu par ces opérations).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Borel-Cantelli", "Théorème"],
                q: "Quel est le premier point du lemme de Borel-Cantelli ?",
                options: [
                    { text: "Si $\\sum_{n\\geq1} P(A_n) < \\infty$, alors $P(\\limsup_n A_n) = 0$", isCorrect: true },
                    { text: "Ce résultat ne nécessite aucune hypothèse d'indépendance des $A_n$", isCorrect: true },
                    { text: "Cela signifie que presque sûrement, un nombre fini seulement de $A_n$ sont réalisés", isCorrect: true },
                    { text: "Ce point nécessite que les $A_n$ soient indépendants", isCorrect: false }
                ],
                explanation: "Le Théorème 2.17, Point 1, est valable sans aucune hypothèse d'indépendance : si la série des probabilités converge, alors presque sûrement seul un nombre fini de $A_n$ se réalisent. C'est le Point 2 (réciproque partielle) qui nécessite l'indépendance des $(A_n)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Borel-Cantelli", "Théorème"],
                q: "Quel est le second point du lemme de Borel-Cantelli, et quelle hypothèse supplémentaire nécessite-t-il ?",
                options: [
                    { text: "Si les $(A_n)$ sont indépendants et $\\sum_{n\\geq1} P(A_n) = \\infty$, alors $P(\\limsup_n A_n) = 1$", isCorrect: true },
                    { text: "Il nécessite l'hypothèse d'indépendance de la suite $(A_n)_{n\\geq1}$", isCorrect: true },
                    { text: "Cela signifie que presque sûrement une infinité de $A_n$ sont réalisés", isCorrect: true },
                    { text: "Ce point est valable même sans hypothèse d'indépendance, comme le premier point", isCorrect: false }
                ],
                explanation: "Le Point 2 du Théorème 2.17 est une réciproque partielle qui, contrairement au Point 1, nécessite l'indépendance des évènements $(A_n)$. Sous cette hypothèse, si la série des probabilités diverge, alors presque sûrement une infinité de $A_n$ sont réalisés.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Borel-Cantelli", "Démonstration"],
                q: "Dans la démonstration du Point 1 du lemme de Borel-Cantelli, quelle inégalité clé est utilisée ?",
                options: [
                    { text: "La sous-additivité : $P(\\bigcup_{n\\geq k} A_n) \\leq \\sum_{n\\geq k} P(A_n)$", isCorrect: true },
                    { text: "La continuité décroissante : $P(\\limsup_n A_n) = \\lim_{k\\to\\infty} P(B_k)$ où $B_k = \\bigcup_{n\\geq k} A_n$", isCorrect: true },
                    { text: "L'inégalité $1-x \\leq e^{-x}$", isCorrect: false },
                    { text: "La formule de Bayes", isCorrect: false }
                ],
                explanation: "La démonstration du Point 1 pose $B_k = \\bigcup_{n\\geq k} A_n$ (suite décroissante), utilise la continuité décroissante de $P$ (Proposition 1.13, Point 3) pour écrire $P(\\limsup A_n) = \\lim_k P(B_k)$, puis borne $P(B_k)$ par sous-additivité. L'inégalité $1-x\\leq e^{-x}$ est utilisée dans la démonstration du Point 2, pas du Point 1.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité produit", "Tribu produit"],
                q: "Pour $k$ espaces probabilisés $(\\Omega_1,\\mathcal{F}_1,P_1),\\dots,(\\Omega_k,\\mathcal{F}_k,P_k)$ indépendants, comment est construite la probabilité produit sur $\\Omega = \\Omega_1 \\times \\dots \\times \\Omega_k$ ?",
                options: [
                    { text: "Sur la tribu produit $\\mathcal{F} = \\mathcal{F}_1 \\otimes \\dots \\otimes \\mathcal{F}_k$, on pose $P(A_1\\times\\dots\\times A_k) = P_1(A_1)\\dots P_k(A_k)$ sur les pavés", isCorrect: true },
                    { text: "La tribu produit est la tribu engendrée par les pavés $A_1 \\times \\dots \\times A_k$ avec $A_n \\in \\mathcal{F}_n$", isCorrect: true },
                    { text: "Cette définition sur les pavés suffit, en général, à caractériser entièrement la probabilité produit sur toute la tribu", isCorrect: true },
                    { text: "On additionne les probabilités $P_1(A_1) + \\dots + P_k(A_k)$", isCorrect: false }
                ],
                explanation: "La probabilité produit est définie sur les pavés (produits cartésiens d'évènements) par le produit des probabilités individuelles. En référence à la Section 1.4 (résultat de caractérisation par un π-système générateur), cela suffit à déterminer entièrement la probabilité produit sur toute la tribu produit.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité produit", "Cas dénombrable"],
                q: "Dans le cas d'un nombre dénombrable infini d'espaces probabilisés, comment est définie la tribu produit (tribu des cylindres) ?",
                options: [
                    { text: "C'est la tribu engendrée par les produits cartésiens finis d'évènements des tribus $(\\mathcal{F}_n)_{n\\geq1}$", isCorrect: true },
                    { text: "Elle contient tous les évènements de la forme $A_1 \\times \\dots \\times A_k \\times \\Omega_{k+1} \\times \\Omega_{k+2} \\times \\dots$", isCorrect: true },
                    { text: "L'existence et l'unicité de la probabilité produit associée sont admises (démontrées en théorie de la mesure)", isCorrect: true },
                    { text: "C'est simplement $\\mathcal{P}(\\Omega)$ où $\\Omega = \\prod_{n\\geq1} \\Omega_n$", isCorrect: false }
                ],
                explanation: "La tribu des cylindres est engendrée par les produits cartésiens finis d'évènements, où seules un nombre fini de coordonnées sont contraintes (les autres valant $\\Omega_n$ tout entier). L'existence et l'unicité de la probabilité produit vérifiant $P(A_1\\times\\dots\\times A_k\\times\\Omega_{k+1}\\times\\dots) = \\prod_{n=1}^k P_n(A_n)$ sont admises, renvoyées au cours de théorie de la mesure.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Synthèse", "Indépendance", "Conditionnement"],
                q: "Parmi les affirmations suivantes concernant conditionnement et indépendance, lesquelles sont vraies ?",
                options: [
                    { text: "Si $A$ et $B$ sont indépendants et $P(B) > 0$, alors $P(A|B) = P(A)$", isCorrect: true },
                    { text: "La formule des probabilités totales nécessite un système complet d'évènements de probabilité strictement positive", isCorrect: true },
                    { text: "La probabilité conditionnelle $P(\\cdot|B)$ ne satisfait pas nécessairement l'axiome de σ-additivité", isCorrect: false },
                    { text: "Deux évènements incompatibles ($A\\cap B=\\emptyset$) de probabilités strictement positives sont automatiquement indépendants", isCorrect: false }
                ],
                explanation: "Ces deux dernières affirmations sont fausses : le Lemme 2.2 montre que $P(\\cdot|B)$ est bien une probabilité complète, satisfaisant la σ-additivité ; et deux évènements incompatibles de probabilité strictement positive ne sont jamais indépendants car $P(A\\cap B)=0 \\neq P(A)P(B)>0$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Borel-Cantelli", "Application"],
                q: "On lance une infinité de fois une pièce équilibrée de façon indépendante et on note $A_n$ l'évènement « le $n$-ième lancer donne pile ». Que peut-on dire de $\\limsup_n A_n$ ?",
                options: [
                    { text: "$\\sum_{n\\geq1} P(A_n) = \\sum_{n\\geq1} 1/2 = +\\infty$", isCorrect: true },
                    { text: "Comme les $A_n$ sont indépendants et la série diverge, le Point 2 de Borel-Cantelli donne $P(\\limsup_n A_n) = 1$", isCorrect: true },
                    { text: "Presque sûrement, on obtient pile une infinité de fois", isCorrect: true },
                    { text: "Le lemme de Borel-Cantelli ne peut pas s'appliquer ici car $P(A_n)$ ne tend pas vers 0", isCorrect: false }
                ],
                explanation: "Ici $P(A_n) = 1/2$ pour tout $n$, donc $\\sum P(A_n) = \\infty$. Les lancers étant indépendants, le Point 2 du lemme de Borel-Cantelli s'applique directement (aucune condition sur la limite de $P(A_n)$ n'est requise) et donne $P(\\limsup_n A_n)=1$ : presque sûrement, pile apparaît une infinité de fois.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Borel-Cantelli", "Application"],
                q: "Soit $(A_n)_{n\\geq1}$ des évènements (non nécessairement indépendants) tels que $P(A_n) = 1/n^2$. Que peut-on conclure sur $\\limsup_n A_n$ ?",
                options: [
                    { text: "$\\sum_{n\\geq1} 1/n^2 = \\pi^2/6 < \\infty$, la série converge", isCorrect: true },
                    { text: "D'après le Point 1 du lemme de Borel-Cantelli, $P(\\limsup_n A_n) = 0$", isCorrect: true },
                    { text: "Presque sûrement, seul un nombre fini de $A_n$ sont réalisés", isCorrect: true },
                    { text: "On ne peut rien conclure sans savoir si les $A_n$ sont indépendants", isCorrect: false }
                ],
                explanation: "Le Point 1 du lemme de Borel-Cantelli ne requiert aucune hypothèse d'indépendance : dès que $\\sum P(A_n) < \\infty$ (ici la série de Riemann convergente $\\sum 1/n^2$), on peut conclure directement que $P(\\limsup_n A_n) = 0$, c'est-à-dire que presque sûrement un nombre fini seulement des $A_n$ se réalisent.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    }
});

