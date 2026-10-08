// ============================================================
// MatiÃ¨re : Probabilités : Chapitre 1 - Modélisation des phénomènes aléatoires
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
Object.assign(defaultData, {
    "Probabilités : Chapitre 1 - Modélisation des phénomènes aléatoires": {
        folder: "Probabilités",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Univers", "Définitions"],
                q: "Que représente l'espace des états (ou univers) $\\Omega$ dans la modélisation d'une expérience aléatoire ?",
                options: [
                    { text: "L'ensemble de tous les résultats possibles de l'expérience", isCorrect: true },
                    { text: "L'ensemble des évènements considérés comme réalisables", isCorrect: false },
                    { text: "La probabilité associée à chaque résultat", isCorrect: false },
                    { text: "Un sous-ensemble particulier des résultats jugés probables", isCorrect: false }
                ],
                explanation: "Par définition (Définition 1.1), $\\Omega$ est l'ensemble des résultats possibles $\\omega$ de l'expérience aléatoire, noté $\\omega \\in \\Omega$. Ce n'est pas l'ensemble des évènements (qui est $\\mathcal{F} \\subset \\mathcal{P}(\\Omega)$), ni une notion probabiliste.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Univers", "Choix de modèle"],
                q: "Concernant le choix de l'espace des états $\\Omega$ pour modéliser une expérience aléatoire, quelles affirmations sont correctes ?",
                options: [
                    { text: "Le choix de $\\Omega$ n'est pas nécessairement unique", isCorrect: true },
                    { text: "$\\Omega$ peut être fini, dénombrable ou infini non dénombrable", isCorrect: true },
                    { text: "Un seul choix d'univers est mathématiquement valide pour une expérience donnée", isCorrect: false },
                    { text: "$\\Omega$ doit toujours être un ensemble de nombres réels", isCorrect: false }
                ],
                explanation: "Le cours précise qu'il n'y a pas forcément unicité du modèle : par exemple pour la somme de deux dés, on peut choisir $\\Omega_1 = \\{1,\\dots,6\\}^2$ ou $\\Omega_2 = \\{2,\\dots,12\\}$. $\\Omega$ peut être de natures très différentes (fini, dénombrable, espace de fonctions, etc.).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tribu", "Axiomes"],
                q: "Quelles conditions un ensemble $\\mathcal{F}$ de parties de $\\Omega$ doit-il satisfaire pour être une tribu (σ-algèbre) ?",
                options: [
                    { text: "$\\Omega \\in \\mathcal{F}$", isCorrect: true },
                    { text: "Si $A \\in \\mathcal{F}$, alors $A^c \\in \\mathcal{F}$", isCorrect: true },
                    { text: "Si $(A_n)_{n \\geq 1}$ est une suite d'éléments de $\\mathcal{F}$, alors $\\bigcup_{n\\geq 1} A_n \\in \\mathcal{F}$", isCorrect: true },
                    { text: "$\\mathcal{F}$ doit contenir uniquement des singletons de $\\Omega$", isCorrect: false }
                ],
                explanation: "La Définition 1.3 donne exactement ces trois axiomes : stabilité par le complémentaire, stabilité par réunion dénombrable, et $\\Omega \\in \\mathcal{F}$ (ce qui implique $\\emptyset \\in \\mathcal{F}$ par complémentation). La stabilité par intersection dénombrable en découle par les lois de De Morgan.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tribu"],
                q: "Quelle est la tribu la plus petite (au sens de l'inclusion) que l'on puisse définir sur $\\Omega$ ?",
                options: [
                    { text: "$\\{\\emptyset, \\Omega\\}$, appelée tribu grossière ou triviale", isCorrect: true },
                    { text: "$\\mathcal{P}(\\Omega)$", isCorrect: false },
                    { text: "L'ensemble des singletons de $\\Omega$", isCorrect: false },
                    { text: "La tribu engendrée par un évènement $A$ quelconque", isCorrect: false }
                ],
                explanation: "$\\{\\emptyset, \\Omega\\}$ est bien une tribu (elle vérifie les trois axiomes) et c'est la plus petite possible car toute tribu doit contenir au minimum $\\Omega$ et $\\emptyset$. À l'inverse, $\\mathcal{P}(\\Omega)$ est la plus grande tribu possible.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tribu", "Cas fini/dénombrable"],
                q: "Dans quel(s) cas choisit-on typiquement $\\mathcal{F} = \\mathcal{P}(\\Omega)$ comme tribu d'évènements ?",
                options: [
                    { text: "Lorsque $\\Omega$ est fini", isCorrect: true },
                    { text: "Lorsque $\\Omega$ est dénombrable", isCorrect: true },
                    { text: "Systématiquement, quel que soit $\\Omega$, y compris infini non dénombrable", isCorrect: false },
                    { text: "Uniquement lorsque $\\Omega$ est un intervalle de $\\mathbb{R}$", isCorrect: false }
                ],
                explanation: "Le cours précise que $\\mathcal{P}(\\Omega)$ est choisie lorsque $\\Omega$ est fini ou dénombrable. Lorsque $\\Omega$ est infini non dénombrable, cette tribu est typiquement trop grande (il devient impossible d'y définir une probabilité cohérente sur toutes les parties), d'où l'usage de tribus plus restreintes comme la tribu borélienne.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tribu", "Tribu engendrée"],
                q: "Comment est définie la tribu engendrée $\\sigma(\\mathcal{C})$ par une classe $\\mathcal{C} \\subset \\mathcal{P}(\\Omega)$ ?",
                options: [
                    { text: "C'est la plus petite tribu contenant $\\mathcal{C}$", isCorrect: true },
                    { text: "C'est l'intersection de toutes les tribus contenant $\\mathcal{C}$", isCorrect: true },
                    { text: "C'est la réunion de tous les éléments de $\\mathcal{C}$", isCorrect: false },
                    { text: "C'est toujours égale à $\\mathcal{P}(\\Omega)$", isCorrect: false }
                ],
                explanation: "$\\sigma(\\mathcal{C})$ est définie comme $\\bigcap_{\\{\\mathcal{F} : \\mathcal{F} \\text{ tribu contenant } \\mathcal{C}\\}} \\mathcal{F}$. Cette intersection existe car $\\mathcal{P}(\\Omega)$ est toujours une telle tribu, c'est bien une tribu (une intersection de tribus est une tribu), elle contient $\\mathcal{C}$, et c'est la plus petite car on prend l'intersection de toutes les candidates.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tribu borélienne"],
                q: "Comment est définie la tribu borélienne $\\mathcal{B}(\\mathbb{R})$ ?",
                options: [
                    { text: "La tribu engendrée par l'ensemble des intervalles ouverts $]a,b[$ avec $a<b$", isCorrect: true },
                    { text: "Elle peut aussi être engendrée par les intervalles de la forme $]-\\infty, a]$, $a \\in \\mathbb{R}$", isCorrect: true },
                    { text: "L'ensemble $\\mathcal{P}(\\mathbb{R})$ de toutes les parties de $\\mathbb{R}$", isCorrect: false },
                    { text: "L'ensemble des singletons de $\\mathbb{R}$", isCorrect: false }
                ],
                explanation: "La Définition 1.7 introduit $\\mathcal{B}(\\mathbb{R})$ comme la tribu engendrée par les intervalles ouverts. Une remarque du cours indique que cette même tribu est aussi engendrée par les intervalles $]-\\infty, a]$. Ce n'est pas $\\mathcal{P}(\\mathbb{R})$ (qui serait trop grande pour porter une mesure de probabilité cohérente).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tribu engendrée", "Exemples"],
                q: "Soit $A \\in \\mathcal{P}(\\Omega)$ avec $A \\neq \\emptyset$ et $A \\neq \\Omega$. Quelle est la tribu engendrée par $\\{A\\}$ ?",
                options: [
                    { text: "$\\sigma(A) = \\{\\emptyset, A, A^c, \\Omega\\}$", isCorrect: true },
                    { text: "$\\sigma(A) = \\{A\\}$", isCorrect: false },
                    { text: "$\\sigma(A) = \\mathcal{P}(\\Omega)$", isCorrect: false },
                    { text: "$\\sigma(A) = \\{\\emptyset, \\Omega\\}$", isCorrect: false }
                ],
                explanation: "Pour être une tribu, l'ensemble doit contenir $\\Omega$, être stable par complémentation (donc contenir $A^c$) et par réunion (donc $A \\cup A^c = \\Omega$, déjà présent, et $\\emptyset$ via complémentation de $\\Omega$). Le plus petit ensemble satisfaisant ces propriétés et contenant $A$ est exactement $\\{\\emptyset, A, A^c, \\Omega\\}$ (Exemple 1.9).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Vocabulaire", "Évènements"],
                q: "Concernant la correspondance entre terminologie ensembliste et probabiliste, quelles affirmations sont exactes ?",
                options: [
                    { text: "$A \\cup B$ correspond à l'évènement « A ou B » au sens non exclusif", isCorrect: true },
                    { text: "$A \\cap B = \\emptyset$ signifie que A et B sont incompatibles", isCorrect: true },
                    { text: "$A \\subset B$ signifie que si A est réalisé alors B l'est aussi", isCorrect: true },
                    { text: "$A^c$ correspond à l'ensemble vide", isCorrect: false }
                ],
                explanation: "Le tableau de correspondance du cours établit ces équivalences : $A\\cup B$ = « A ou B » (non exclusif), $A \\cap B = \\emptyset$ = A et B incompatibles, $A \\subset B$ = si A réalisé alors B aussi. $A^c$ est l'évènement contraire de A, pas l'ensemble vide.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Opérations", "De Morgan"],
                q: "Parmi les propriétés suivantes sur les opérations d'évènements, lesquelles sont correctes ?",
                options: [
                    { text: "$(A \\cup B)^c = A^c \\cap B^c$ (loi de De Morgan)", isCorrect: true },
                    { text: "$(A \\cap B)^c = A^c \\cup B^c$ (loi de De Morgan)", isCorrect: true },
                    { text: "$(A \\cup B) \\cap C = (A \\cap C) \\cup (B \\cap C)$ (distributivité)", isCorrect: true },
                    { text: "$(A \\cup B)^c = A^c \\cup B^c$", isCorrect: false }
                ],
                explanation: "La Propriété 1.6 donne les lois de De Morgan $(A\\cup B)^c = A^c \\cap B^c$ et $(A\\cap B)^c = A^c \\cup B^c$, ainsi que la distributivité de l'intersection sur l'union. La dernière option confond union et intersection dans la loi de De Morgan et est donc fausse.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité", "Axiomes de Kolmogorov"],
                q: "Quels sont les deux axiomes définissant une mesure de probabilité $P$ sur $(\\Omega, \\mathcal{F})$ ?",
                options: [
                    { text: "$P(\\Omega) = 1$", isCorrect: true },
                    { text: "σ-additivité : pour toute famille dénombrable $(A_n)_{n\\geq 1}$ d'évènements deux-à-deux disjoints, $P(\\bigcup_{n\\geq 1} A_n) = \\sum_{n=1}^{+\\infty} P(A_n)$", isCorrect: true },
                    { text: "$P(A) = P(A^c)$ pour tout évènement $A$", isCorrect: false },
                    { text: "$P$ doit être une fonction strictement croissante", isCorrect: false }
                ],
                explanation: "La Définition 1.10 pose exactement ces deux axiomes : la probabilité de l'évènement certain vaut 1, et la σ-additivité pour les familles dénombrables d'évènements disjoints. Toutes les autres propriétés (P(∅)=0, complémentaire, monotonie, etc.) s'en déduisent comme corollaires.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité", "Propriétés"],
                q: "Que vaut $P(\\emptyset)$ pour toute mesure de probabilité $P$, et comment le démontre-t-on ?",
                options: [
                    { text: "$P(\\emptyset) = 0$", isCorrect: true },
                    { text: "On l'obtient en appliquant la σ-additivité à la famille $(A_n)_{n\\geq 1}$ où $A_n = \\emptyset$ pour tout $n$", isCorrect: true },
                    { text: "$P(\\emptyset) = 1$", isCorrect: false },
                    { text: "C'est un axiome supplémentaire, non démontrable", isCorrect: false }
                ],
                explanation: "En appliquant la σ-additivité à la famille $(\\emptyset)_{n\\geq1}$ (deux-à-deux disjoints, trivialement), on obtient $P(\\emptyset) = \\sum_{n\\geq1} P(\\emptyset)$, une série dont chaque terme est identique et qui ne converge que si $P(\\emptyset)=0$ (Corollaire 1.12, Point 1).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité", "Propriétés"],
                q: "Soit $(\\Omega, \\mathcal{F}, P)$ un espace probabilisé et $A, B \\in \\mathcal{F}$. Quelles formules sont correctes ?",
                options: [
                    { text: "$P(A^c) = 1 - P(A)$", isCorrect: true },
                    { text: "$P(B \\setminus A) = P(B) - P(A \\cap B)$", isCorrect: true },
                    { text: "Si $A \\subset B$ alors $P(A) \\leq P(B)$", isCorrect: true },
                    { text: "$P(B \\setminus A) = P(B) - P(A)$ en toute généralité", isCorrect: false }
                ],
                explanation: "Le Corollaire 1.12 donne : $P(A^c)=1-P(A)$ (points 1 et 2 appliqués à $A,A^c$), $P(B\\setminus A)=P(B)-P(A\\cap B)$ (Point 4), et la monotonie (Point 5). La dernière formule n'est correcte que si $A \\subset B$ ; en général il faut soustraire $P(A\\cap B)$ et non $P(A)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité", "Formule du crible"],
                q: "Quelle est la formule du crible (cas de deux évènements) et sa généralisation (formule de Poincaré) ?",
                options: [
                    { text: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$", isCorrect: true },
                    { text: "Pour $n$ évènements, la formule de Poincaré alterne les signes selon le cardinal des intersections multiples", isCorrect: true },
                    { text: "$P(A \\cup B) = P(A) + P(B)$ pour tous A, B", isCorrect: false },
                    { text: "$P(A \\cup B) = P(A) \\cdot P(B)$", isCorrect: false }
                ],
                explanation: "La formule du crible $P(A\\cup B) = P(A)+P(B)-P(A\\cap B)$ se généralise en la formule de Poincaré $P\\left(\\bigcup_{i=1}^n A_i\\right) = \\sum_{i=1}^n (-1)^{i-1} \\sum_{J \\subset \\{1,\\dots,n\\}, |J|=i} P\\left(\\bigcap_{k \\in J} A_k\\right)$, une somme alternée sur les intersections de tailles croissantes.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité", "Sous-additivité", "Limites"],
                q: "Concernant la Proposition 1.13 sur les suites d'évènements, quelles affirmations sont correctes ?",
                options: [
                    { text: "$P(\\bigcup_{n\\geq1} A_n) \\leq \\sum_{n\\geq1} P(A_n)$ (sous-additivité)", isCorrect: true },
                    { text: "Si $(A_n)$ est croissante et $A = \\bigcup_{n\\geq1} A_n$, alors $P(A) = \\lim_{n\\to+\\infty} P(A_n)$", isCorrect: true },
                    { text: "Si $(B_n)$ est décroissante et $B = \\bigcap_{n\\geq1} B_n$, alors $P(B) = \\lim_{n\\to+\\infty} P(B_n)$", isCorrect: true },
                    { text: "La sous-additivité devient toujours une égalité stricte", isCorrect: false }
                ],
                explanation: "La sous-additivité découle de la construction d'une famille disjointe $C_n = A_n \\setminus A_{n-1}$ et n'est une égalité que si les $A_n$ sont eux-mêmes disjoints. La continuité monotone (croissante et décroissante) de la probabilité est démontrée via cette même famille $(C_n)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Cas fini", "Probabilité uniforme"],
                q: "Dans un univers $\\Omega$ fini muni de la probabilité uniforme, comment calcule-t-on $P(A)$ pour $A \\in \\mathcal{P}(\\Omega)$ ?",
                options: [
                    { text: "$P(A) = \\dfrac{\\text{card}(A)}{\\text{card}(\\Omega)}$", isCorrect: true },
                    { text: "$P(\\{\\omega\\}) = \\dfrac{1}{\\text{card}(\\Omega)}$ pour tout $\\omega \\in \\Omega$", isCorrect: true },
                    { text: "$P(A) = \\text{card}(A)$", isCorrect: false },
                    { text: "$P(A)$ dépend de la nature des éléments de $A$, pas seulement de son cardinal", isCorrect: false }
                ],
                explanation: "La Définition 1.15 précise que sous l'hypothèse d'équiprobabilité, chaque singleton a la même probabilité $1/\\text{card}(\\Omega)$, et donc $P(A) = \\text{card}(A)/\\text{card}(\\Omega)$ pour tout évènement $A$ : seul le cardinal de $A$ compte.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Combinatoire", "Tirage avec remise ordonné"],
                q: "On tire un échantillon ordonné de taille $r$ avec remise dans une population de taille $N$. Combien d'échantillons distincts sont possibles ?",
                options: [
                    { text: "$N^r$", isCorrect: true },
                    { text: "$\\dfrac{N!}{(N-r)!}$", isCorrect: false },
                    { text: "$\\binom{N}{r}$", isCorrect: false },
                    { text: "$\\binom{N+r-1}{r}$", isCorrect: false }
                ],
                explanation: "Pour un tirage ordonné avec remise, chaque tirage a $N$ possibilités indépendamment des précédents, donnant $N^r$ échantillons possibles (Exemple : jeter un dé 5 fois donne $6^5$ tirages). Les autres formules correspondent respectivement au tirage ordonné sans remise, au tirage non ordonné sans remise, et au tirage non ordonné avec remise.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Combinatoire", "Tirage sans remise ordonné"],
                q: "Combien y a-t-il d'échantillons ordonnés de taille $r \\leq N$ sans répétition (arrangements) dans une population de taille $N$ ?",
                options: [
                    { text: "$A_N^r = N(N-1)\\dots(N-r+1) = \\dfrac{N!}{(N-r)!}$", isCorrect: true },
                    { text: "$N^r$", isCorrect: false },
                    { text: "$\\binom{N}{r}$", isCorrect: false },
                    { text: "$r!$", isCorrect: false }
                ],
                explanation: "Pour un tirage sans remise, il y a $N$ choix pour le premier élément, $N-1$ pour le second (l'élément déjà tiré étant exclu), etc., jusqu'à $N-r+1$ pour le $r$-ième, soit $N(N-1)\\dots(N-r+1) = N!/(N-r)!$, noté $A_N^r$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Combinatoire", "Coefficient binomial"],
                q: "Le nombre de sous-populations (non ordonnées) de taille $r$ sans répétition choisies parmi $N$ individus est appelé coefficient binomial et vaut :",
                options: [
                    { text: "$\\binom{N}{r} = \\dfrac{N!}{(N-r)!\\, r!}$", isCorrect: true },
                    { text: "$\\dfrac{N!}{(N-r)!}$", isCorrect: false },
                    { text: "$N^r$", isCorrect: false },
                    { text: "$r! \\cdot \\binom{N}{r}$ donne le nombre d'échantillons ordonnés sans répétition associés à chaque combinaison", isCorrect: true }
                ],
                explanation: "Le coefficient binomial $\\binom{N}{r} = \\frac{N!}{(N-r)!r!}$ compte les combinaisons (sous-ensembles non ordonnés). Chaque sous-ensemble à $r$ éléments donne $r!$ arrangements ordonnés, d'où la relation $\\text{card}(\\Omega_2) = r! \\cdot \\text{card}(\\Omega_3)$, c'est-à-dire $A_N^r = r! \\binom{N}{r}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Combinatoire", "Tirage avec remise non ordonné"],
                q: "Combien de sous-populations de taille $r$ avec répétitions (tirage non ordonné avec remise) peut-on former à partir de $N$ individus ?",
                options: [
                    { text: "$\\binom{N+r-1}{r}$", isCorrect: true },
                    { text: "$\\binom{N+r-1}{N-1}$", isCorrect: true },
                    { text: "$N^r$", isCorrect: false },
                    { text: "$\\binom{N}{r}$", isCorrect: false }
                ],
                explanation: "Ce dénombrement (méthode des « étoiles et barres ») revient à placer $r$ boules indistinguables dans $N$ urnes, soit à disposer $N-1$ cloisons parmi $N+r-1$ positions : $\\binom{N+r-1}{N-1} = \\binom{N+r-1}{r}$ (ces deux écritures sont égales par symétrie du coefficient binomial).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Combinatoire", "Coefficient multinomial"],
                q: "Le nombre d'anagrammes du mot CHERCHER (8 lettres, avec les répétitions C×2, H×2, E×2, R×2) se calcule avec :",
                options: [
                    { text: "$\\dfrac{8!}{2!\\,2!\\,2!\\,2!}$, un coefficient multinomial", isCorrect: true },
                    { text: "$8!$", isCorrect: false },
                    { text: "$\\binom{8}{2}$", isCorrect: false },
                    { text: "Le coefficient multinomial $\\binom{N}{r_1 \\dots r_k}$ compte le nombre de façons de répartir $N$ objets en $k$ familles de tailles fixées $r_1,\\dots,r_k$", isCorrect: true }
                ],
                explanation: "Le coefficient multinomial $\\binom{N}{r_1\\dots r_k} = \\frac{N!}{r_1!\\dots r_k!}$ généralise le coefficient binomial à plus de deux catégories. Pour CHERCHER, on partitionne les 8 positions en 4 lettres répétées 2 fois chacune, d'où $8!/(2!)^4$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Combinatoire", "Loi hypergéométrique"],
                q: "Une urne contient $N_a$ individus de catégorie a et $N_b = N - N_a$ de catégorie b. On tire une sous-population de taille $r$ sans répétition. Quelle est la probabilité de tirer exactement $k$ individus de catégorie a ?",
                options: [
                    { text: "$P(A_k) = \\dfrac{\\binom{N_a}{k}\\binom{N-N_a}{r-k}}{\\binom{N}{r}}$", isCorrect: true },
                    { text: "$P(A_k) = \\binom{r}{k}\\left(\\dfrac{N_a}{N}\\right)^k\\left(\\dfrac{N_b}{N}\\right)^{r-k}$", isCorrect: false },
                    { text: "C'est un exemple de loi hypergéométrique", isCorrect: true },
                    { text: "C'est un exemple de loi de Poisson", isCorrect: false }
                ],
                explanation: "Ce tirage sans remise donne la loi hypergéométrique $P(A_k) = \\binom{N_a}{k}\\binom{N-N_a}{r-k} / \\binom{N}{r}$. La deuxième option correspond en fait à la loi binomiale, qui s'obtient dans le cas d'un tirage AVEC remise, et qui apparaît aussi comme limite de la loi hypergéométrique quand $N \\to +\\infty$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Combinatoire", "Limite hypergéométrique-binomiale"],
                q: "Que se passe-t-il lorsque, dans un tirage hypergéométrique, le nombre total de boules $N$ tend vers l'infini avec $N_a/N \\to p$ (r et k fixés) ?",
                options: [
                    { text: "$P(A_k)$ converge vers $\\binom{r}{k} p^k (1-p)^{r-k}$, la probabilité binomiale", isCorrect: true },
                    { text: "Ce résultat est intuitif car pour un grand nombre de boules, tirer avec ou sans remise change peu de choses", isCorrect: true },
                    { text: "$P(A_k)$ diverge vers l'infini", isCorrect: false },
                    { text: "$P(A_k)$ tend toujours vers 0", isCorrect: false }
                ],
                explanation: "Le cours démontre que la loi hypergéométrique converge vers la loi binomiale $\\binom{r}{k}p^k(1-p)^{r-k}$ quand $N \\to +\\infty$ avec $N_a/N \\to p$. L'intuition est que sur une population immense, la probabilité de retirer deux fois le même individu devient négligeable, rendant le tirage sans remise proche du tirage avec remise.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Cas dénombrable"],
                q: "On lance une pièce équilibrée jusqu'à l'obtention du premier pile. On prend $\\Omega = \\mathbb{N}^* \\cup \\{\\infty\\}$ avec $P(\\{k\\}) = 1/2^k$. Quelle est la probabilité que pile ne sorte jamais ?",
                options: [
                    { text: "$P(\\{\\infty\\}) = 0$", isCorrect: true },
                    { text: "$P(\\{\\infty\\}) = 1 - \\sum_{k=1}^{+\\infty} \\frac{1}{2^k} = 1 - 1 = 0$", isCorrect: true },
                    { text: "$P(\\{\\infty\\}) = 1/2$", isCorrect: false },
                    { text: "$P(\\{\\infty\\})$ n'est pas définie car $\\Omega$ est infini", isCorrect: false }
                ],
                explanation: "Comme $\\mathbb{N}^*$ et $\\{\\infty\\}$ partitionnent $\\Omega$, $1 = P(\\{\\infty\\}) + \\sum_{k=1}^{+\\infty} P(\\{k\\})$. Or $\\sum_{k=1}^{+\\infty} \\frac{1}{2^k} = 1$ (série géométrique), donc $P(\\{\\infty\\}) = 1-1 = 0$ : l'univers est bien dénombrable et la probabilité est parfaitement définie même si $\\Omega$ est infini.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Cas dénombrable"],
                q: "Dans l'exemple précédent (lancers de pièce jusqu'au premier pile), quelle est la probabilité que le premier pile sorte après un nombre pair de lancers, $P(\\{2,4,6,\\dots\\})$ ?",
                options: [
                    { text: "$P = \\sum_{k=1}^{+\\infty} \\frac{1}{2^{2k}} = \\frac{1}{3}$", isCorrect: true },
                    { text: "$P = 1/2$", isCorrect: false },
                    { text: "$P = 1$", isCorrect: false },
                    { text: "Le calcul utilise une somme géométrique de raison $1/4$", isCorrect: true }
                ],
                explanation: "$P(\\{2,4,6,\\dots\\}) = \\sum_{k\\geq1} P(\\{2k\\}) = \\sum_{k\\geq1} \\frac{1}{2^{2k}} = \\sum_{k\\geq1} \\left(\\frac{1}{4}\\right)^k = \\frac{1/4}{1-1/4} = \\frac{1}{3}$, série géométrique de raison $1/4$ et premier terme $1/4$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Cas général", "Mesure de Dirac"],
                q: "Qu'est-ce que la mesure de Dirac $\\delta_{\\omega_0}$ en un point $\\omega_0 \\in \\Omega$ ?",
                options: [
                    { text: "La probabilité définie par $\\delta_{\\omega_0}(A) = 1$ si $\\omega_0 \\in A$, et $0$ sinon", isCorrect: true },
                    { text: "Une mesure qui charge tout $\\Omega$ de manière uniforme", isCorrect: false },
                    { text: "Une probabilité telle que $\\Omega \\setminus \\{\\omega_0\\}$ est négligeable", isCorrect: true },
                    { text: "Une mesure qui n'existe que dans le cas fini", isCorrect: false }
                ],
                explanation: "$\\delta_{\\omega_0}$ « concentre » toute la masse de probabilité sur le point $\\omega_0$. Elle vaut 1 sur tout évènement contenant $\\omega_0$ et 0 sinon, ce qui rend $\\Omega\\setminus\\{\\omega_0\\}$ négligeable et $\\omega_0$ (au sens des propriétés qu'il satisfait) presque sûr. Elle est définie dans un cadre d'univers général, pas seulement fini.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Cas général", "π-système"],
                q: "Quel résultat théorique permet de caractériser une mesure de probabilité par ses valeurs sur une classe restreinte d'évènements $\\mathcal{C}$ ?",
                options: [
                    { text: "Si $\\mathcal{C}$ est stable par intersections finies (π-système) et $\\sigma(\\mathcal{C}) = \\mathcal{F}$, alors la mesure est entièrement déterminée par ses valeurs sur $\\mathcal{C}$", isCorrect: true },
                    { text: "Ce résultat découle du lemme de classe monotone", isCorrect: true },
                    { text: "Une mesure de probabilité sur $(\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))$ est entièrement déterminée par sa valeur sur les intervalles $]-\\infty, x]$", isCorrect: true },
                    { text: "Ce résultat garantit également l'existence de la mesure sans autre argument", isCorrect: false }
                ],
                explanation: "Le cours mentionne que, comme conséquence du lemme de classe monotone, une mesure de probabilité est entièrement déterminée par ses valeurs sur un π-système générateur. L'existence de la mesure est une question distincte, plus délicate, nécessitant par exemple le théorème d'extension de Carathéodory.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Combinatoire", "Application numérique"],
                q: "On jette un dé équilibré 5 fois de suite. Quelle est (approximativement) la probabilité d'obtenir 5 résultats tous distincts ?",
                options: [
                    { text: "$\\dfrac{6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2}{6^5} \\approx 0{,}09$", isCorrect: true },
                    { text: "Cette probabilité est le rapport entre un tirage sans remise et un tirage avec remise sur le même univers", isCorrect: true },
                    { text: "$\\dfrac{1}{6^5}$", isCorrect: false },
                    { text: "$\\dfrac{5!}{6!}$", isCorrect: false }
                ],
                explanation: "On choisit $\\Omega_1 = \\{1,\\dots,6\\}^5$ (tirage avec remise, équiprobable), et l'évènement « tous distincts » correspond à $\\Omega_2$ (tirage sans remise) : $P(A) = \\text{card}(\\Omega_2)/\\text{card}(\\Omega_1) = A_6^5/6^5 = (6\\cdot5\\cdot4\\cdot3\\cdot2)/6^5 \\approx 0{,}09$ (Exemple 1.19).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Combinatoire", "Applications"],
                q: "Pour une main de poker (5 cartes tirées parmi un jeu de 32), quelle démarche permet de calculer la probabilité que les 5 hauteurs soient toutes différentes ?",
                options: [
                    { text: "Choisir 5 hauteurs parmi 8 : $\\binom{8}{5}$ façons, puis choisir la couleur de chaque carte : $4^5$ façons", isCorrect: true },
                    { text: "La probabilité recherchée est $\\dfrac{\\binom{8}{5} \\cdot 4^5}{\\binom{32}{5}}$", isCorrect: true },
                    { text: "Il suffit de calculer $\\binom{32}{5}$ sans autre choix supplémentaire", isCorrect: false },
                    { text: "On utilise un tirage avec remise pour modéliser la main de poker", isCorrect: false }
                ],
                explanation: "Il y a $\\binom{32}{5}$ mains possibles au total (tirage sans remise, non ordonné). Pour avoir 5 hauteurs distinctes, on choisit d'abord les 8 hauteurs parmi 8 possibles via $\\binom{8}{5}$, puis pour chaque hauteur on choisit une des 4 couleurs, soit $4^5$ combinaisons, d'où $\\text{card}(A) = \\binom{8}{5}4^5$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Vocabulaire", "Presque-sûr"],
                q: "Que signifie qu'un évènement $A$ est « négligeable » ou « presque-sûr » ?",
                options: [
                    { text: "$A$ est négligeable si $P(A) = 0$", isCorrect: true },
                    { text: "$A$ est presque-sûr si $P(A) = 1$", isCorrect: true },
                    { text: "$A$ négligeable signifie que $A = \\emptyset$ nécessairement", isCorrect: false },
                    { text: "$A$ presque-sûr signifie que $A = \\Omega$ nécessairement", isCorrect: false }
                ],
                explanation: "La Définition 1.11 introduit ces termes : négligeable si $P(A)=0$, presque-sûr si $P(A)=1$. Ces notions ne sont pas équivalentes à $A=\\emptyset$ ou $A=\\Omega$ : dans le cas continu (par exemple), un singleton peut avoir une probabilité nulle sans être l'ensemble vide.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    }
});

