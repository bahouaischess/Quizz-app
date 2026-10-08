// ============================================================
// MatiÃ¨re : Analyse 3 : Chapitre 5 (Séries Entières)
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
Object.assign(defaultData, {
    "Analyse 3 : Chapitre 5 (Séries Entières)": {
        folder: "Analyse 3",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            // --- LEMME D'ABEL ET RAYON DE CONVERGENCE ---
            {
                type: "qcm", tags: ["Lemme d'Abel", "Définitions"],
                q: "Que stipule le Lemme d'Abel concernant une série entière $\\sum a_n z^n$ ?",
                options: [
                    { text: "S'il existe un point $z_0$ tel que la suite $(a_n z_0^n)$ est BORNÉE, alors la série converge absolument pour tout $z$ tel que $|z| < |z_0|$", isCorrect: true },
                    { text: "Si la série converge en $z_0$, alors elle converge pour tout $z$ tel que $|z| \\le |z_0|$", isCorrect: false }
                ],
                explanation: "C'est la pierre angulaire des séries entières. Le fait que le terme général soit juste BORNÉ en $z_0$ suffit à forcer la convergence absolue (et même normale sur les compacts) à l'intérieur du disque ouvert de rayon $|z_0|$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Rayon de convergence", "Définitions"],
                q: "Le rayon de convergence $R$ d'une série entière $\\sum a_n z^n$ est défini comme...",
                options: [
                    { text: "La borne supérieure (sup) de l'ensemble des réels $r \\ge 0$ tels que la suite $(|a_n| r^n)$ est bornée", isCorrect: true },
                    { text: "La limite de $|a_{n+1}/a_n|$ quand $n \\to \\infty$", isCorrect: false }
                ],
                explanation: "C'est la définition exacte. Le critère de d'Alembert n'est qu'une astuce de calcul qui ne marche pas toujours, alors que la définition avec le sup de la suite bornée (issue du Lemme d'Abel) est universelle.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Convergence", "Disque"],
                q: "Si $R$ est le rayon de convergence de $\\sum a_n z^n$ (avec $0 < R < \\infty$), quelle est la nature de la convergence sur le disque ouvert $D(0, R)$ ?",
                options: [
                    { text: "Absolue partout sur $D(0,R)$, et NORMALE sur tout sous-disque fermé (compact) inclus dans $D(0,R)$", isCorrect: true },
                    { text: "Normale sur le disque ouvert $D(0, R)$ tout entier", isCorrect: false }
                ],
                explanation: "Piège classique ! La convergence n'est presque jamais normale sur le disque ouvert entier (l'erreur explose au bord). Mais elle est normale sur tout compact $[-r, r]$ strictement à l'intérieur.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Rayon de convergence", "Bord du disque"],
                q: "Si $|z| = R$ (on est sur le cercle de convergence), que peut-on affirmer sur la série $\\sum a_n z^n$ ?",
                options: [
                    { text: "Absolument rien : elle peut converger absolument, semi-converger ou diverger selon la série", isCorrect: true },
                    { text: "Elle diverge obligatoirement", isCorrect: false },
                    { text: "Elle converge, mais pas absolument", isCorrect: false }
                ],
                explanation: "Le bord du disque est la « zone de non-droit ». Exemple : $\\sum z^n$ (diverge partout sur $|z|=1$), $\\sum z^n/n$ (semi-converge sauf en 1), $\\sum z^n/n^2$ (converge absolument partout sur $|z|=1$).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- CALCUL DU RAYON (D'ALEMBERT ET CAUCHY) ---
            {
                type: "qcm", tags: ["Calcul du rayon", "Critère de d'Alembert"],
                q: "Pour une série entière $\\sum a_n z^n$, on suppose que $\\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| = L$. Que vaut le rayon $R$ ?",
                options: [
                    { text: "$R = \\frac{1}{L}$ (avec $1/0 = \\infty$ et $1/\\infty = 0$)", isCorrect: true },
                    { text: "$R = L$", isCorrect: false }
                ],
                explanation: "C'est l'application du critère de d'Alembert. Si la limite vaut $L$, on étudie $|a_{n+1}z^{n+1}| / |a_nz^n| = |z| \\times L$. Pour que ça converge, il faut $|z|L < 1$, donc $|z| < 1/L$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Calcul du rayon", "Critère de d'Alembert"],
                q: "Quelle est la condition obligatoire pour pouvoir utiliser la règle de d'Alembert pour trouver le rayon de convergence ?",
                options: [
                    { text: "Les coefficients $a_n$ ne doivent pas s'annuler à partir d'un certain rang", isCorrect: true },
                    { text: "Les coefficients $a_n$ doivent être positifs", isCorrect: false }
                ],
                explanation: "On ne peut pas diviser par zéro ! Pour une série lacunaire (comme $\\sum z^{2n}$), la moitié des coefficients sont nuls, d'Alembert est inutilisable tel quel.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Calcul du rayon", "Formule de Hadamard"],
                q: "La formule de Cauchy-Hadamard stipule que le rayon de convergence $R$ vérifie : $\\frac{1}{R} = ...$",
                options: [
                    { text: "$\\limsup_{n \\to \\infty} |a_n|^{1/n}$", isCorrect: true },
                    { text: "$\\lim_{n \\to \\infty} |a_n|^{1/n}$", isCorrect: false }
                ],
                explanation: "Il faut utiliser la limite supérieure (limsup) car la simple limite de la racine $n$-ième n'existe pas toujours, notamment si la série est lacunaire ou oscille.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Calcul du rayon", "Croissance comparée"],
                q: "Quel est le rayon de convergence de la série $\\sum n^k a_n z^n$ (pour un entier $k \\in \\mathbb{Z}$ fixé), sachant que $\\sum a_n z^n$ a un rayon $R$ ?",
                options: [
                    { text: "Le rayon est toujours $R$", isCorrect: true },
                    { text: "Le rayon dépend du signe de $k$", isCorrect: false }
                ],
                explanation: "Multiplier ou diviser les coefficients par une puissance de $n$ ne change JAMAIS le rayon de convergence. La croissance exponentielle de $z^n$ écrase totalement la croissance polynomiale de $n^k$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Calcul du rayon", "Séries lacunaires"],
                q: "Soit la série entière $\\sum a_n z^{2n}$. Si le rayon de $\\sum a_n w^n$ est $R'$, quel est le rayon $R$ de la série en $z$ ?",
                options: [
                    { text: "$R = \\sqrt{R'}$", isCorrect: true },
                    { text: "$R = R'^2$", isCorrect: false },
                    { text: "$R = R'/2$", isCorrect: false }
                ],
                explanation: "On pose $w = z^2$. La série converge si $|w| < R'$, c'est-à-dire si $|z|^2 < R'$, soit $|z| < \\sqrt{R'}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- PROPRIÉTÉS DE LA SOMME (Continuité, Dérivation, Intégration) ---
            {
                type: "qcm", tags: ["Propriétés", "Dérivation"],
                q: "Soit $S(x) = \\sum_{n=0}^\\infty a_n x^n$ de rayon $R > 0$. La somme $S$ est-elle dérivable sur $]-R, R[$ ?",
                options: [
                    { text: "Oui, elle est indéfiniment dérivable (classe $C^\\infty$) et on peut dériver terme à terme", isCorrect: true },
                    { text: "Oui, mais on ne peut la dériver qu'une seule fois", isCorrect: false }
                ],
                explanation: "C'est la magie des séries entières. À l'intérieur de l'intervalle ouvert de convergence, la fonction est de classe $\\mathcal{C}^\\infty$. Le rayon de la série dérivée est le même que l'original.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Propriétés", "Primitives"],
                q: "Quelle est la primitive s'annulant en 0 de $S(x) = \\sum_{n=0}^\\infty a_n x^n$ sur $]-R, R[$ ?",
                options: [
                    { text: "$\\sum_{n=0}^\\infty \\frac{a_n}{n+1} x^{n+1}$", isCorrect: true },
                    { text: "$\\sum_{n=1}^\\infty \\frac{a_n}{n} x^n$", isCorrect: false }
                ],
                explanation: "On intègre terme à terme. La primitive de $x^n$ est $x^{n+1}/(n+1)$. Cette série intégrée conserve exactement le même rayon de convergence $R$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Propriétés", "Unicité"],
                q: "Principe des zéros isolés / Unicité du DSE : Si $\\sum a_n x^n = \\sum b_n x^n$ sur un petit intervalle $]-\\varepsilon, \\varepsilon[$. Que conclut-on ?",
                options: [
                    { text: "Pour tout $n$, $a_n = b_n$", isCorrect: true },
                    { text: "Les deux sommes sont égales mais les coefficients peuvent différer", isCorrect: false }
                ],
                explanation: "L'unicité du développement en série entière est absolue. Comme $a_n = S^{(n)}(0) / n!$, si deux séries coïncident sur un voisinage de 0, elles ont les mêmes dérivées en 0, donc les mêmes coefficients.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Théorème d'Abel radial", "Bord du disque"],
                q: "Si la série entière $S(x) = \\sum a_n x^n$ converge en $x = R$. Que garantit le théorème d'Abel radial ?",
                options: [
                    { text: "La fonction somme $S$ est continue à gauche en $R$ : $\\lim_{x \\to R^-} S(x) = \\sum_{n=0}^\\infty a_n R^n$", isCorrect: true },
                    { text: "La fonction $S$ est dérivable en $R$", isCorrect: false }
                ],
                explanation: "C'est un théorème subtil : la convergence uniforme sur les compacts $]-R, R[$ ne garantit rien sur le bord. Abel radial affirme que SI ça converge au bord, ALORS la continuité s'étend jusqu'à ce bord.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- DÉVELOPPEMENTS USUELS (DSE) ---
            {
                type: "qcm", tags: ["DSE usuels", "Exponentielle"],
                q: "Quel est le DSE de $e^x$ et son rayon de convergence ?",
                options: [
                    { text: "$\\sum_{n=0}^\\infty \\frac{x^n}{n!}$ avec $R = +\\infty$", isCorrect: true },
                    { text: "$\\sum_{n=1}^\\infty \\frac{x^n}{n}$ avec $R = +\\infty$", isCorrect: false }
                ],
                explanation: "La factorielle au dénominateur grandit beaucoup plus vite que n'importe quelle puissance $x^n$. Par d'Alembert, la limite de $1/(n+1)$ est 0, donc le rayon est infini.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["DSE usuels", "Fonction rationnelle"],
                q: "Quel est le DSE de $\\frac{1}{1-x}$ et son rayon de convergence ?",
                options: [
                    { text: "$\\sum_{n=0}^\\infty x^n$ avec $R = 1$", isCorrect: true },
                    { text: "$\\sum_{n=0}^\\infty (-1)^n x^n$ avec $R = 1$", isCorrect: false }
                ],
                explanation: "C'est la série géométrique de base. Elle diverge dès que $|x| \\ge 1$. C'est la matrice de tous les autres DSE par dérivation ou intégration.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["DSE usuels", "Logarithme"],
                q: "Sachant que $\\frac{1}{1+x} = \\sum_{n=0}^\\infty (-1)^n x^n$, quel est le DSE de $\\ln(1+x)$ ?",
                options: [
                    { text: "$\\sum_{n=1}^\\infty (-1)^{n-1} \\frac{x^n}{n}$ avec $R = 1$", isCorrect: true },
                    { text: "$\\sum_{n=0}^\\infty (-1)^n \\frac{x^{n+1}}{n+1}$ avec $R = 1$", isCorrect: false },
                    { text: "Les deux expressions sont rigoureusement identiques", isCorrect: true }
                ],
                explanation: "On intègre $\\sum (-1)^n x^n$ terme à terme pour obtenir $\\sum (-1)^n x^{n+1}/(n+1)$. Un simple changement d'indice ($k = n+1$) donne la forme classique. Le rayon reste 1.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["DSE usuels", "Trigonométrie"],
                q: "Quel est le DSE de $\\sin(x)$ et son rayon de convergence ?",
                options: [
                    { text: "$\\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{(2n+1)!}$ avec $R = +\\infty$", isCorrect: true },
                    { text: "$\\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n}}{(2n)!}$ avec $R = +\\infty$", isCorrect: false }
                ],
                explanation: "Le sinus est une fonction impaire, son DSE ne contient donc QUE des puissances impaires. L'autre formule correspond au cosinus (fonction paire).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["DSE usuels", "Arc Tangente"],
                q: "Quel est le DSE de $\\arctan(x)$ et comment le retrouve-t-on ?",
                options: [
                    { text: "$\\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{2n+1}$, trouvé en intégrant $\\frac{1}{1+x^2}$", isCorrect: true },
                    { text: "$\\sum_{n=0}^\\infty \\frac{x^{2n+1}}{2n+1}$, trouvé en intégrant $\\frac{1}{1-x^2}$", isCorrect: false }
                ],
                explanation: "On part de $1/(1-u) = \\sum u^n$. On pose $u = -x^2$, ce qui donne $1/(1+x^2) = \\sum (-1)^n x^{2n}$. On intègre terme à terme pour obtenir le DSE de l'arctangente.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["DSE usuels", "Binôme de Newton généralisé"],
                q: "Quel est le DSE de $(1+x)^\\alpha$ (pour $\\alpha \\notin \\mathbb{N}$) ?",
                options: [
                    { text: "$1 + \\sum_{n=1}^\\infty \\frac{\\alpha(\\alpha-1)...(\\alpha-n+1)}{n!} x^n$ avec $R = 1$", isCorrect: true },
                    { text: "$\\sum_{n=0}^\\infty \\alpha^n x^n$ avec $R = 1$", isCorrect: false }
                ],
                explanation: "C'est la formule du binôme généralisé. Elle se démontre en cherchant la solution DSE de l'équation différentielle $(1+x)y' = \\alpha y$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            
            // --- OPÉRATIONS (Produit, Équations Différentielles) ---
            {
                type: "qcm", tags: ["Opérations", "Produit de Cauchy"],
                q: "Soient deux séries $\\sum a_n x^n$ (rayon $R_1$) et $\\sum b_n x^n$ (rayon $R_2$). Que vaut le rayon $R$ de la série produit $\\sum c_n x^n$ ?",
                options: [
                    { text: "$R \\ge \\min(R_1, R_2)$", isCorrect: true },
                    { text: "$R = \\min(R_1, R_2)$ strictement", isCorrect: false },
                    { text: "$R = R_1 \\times R_2$", isCorrect: false }
                ],
                explanation: "Le produit de Cauchy converge à l'intérieur du plus petit des deux disques. Cependant, le rayon peut s'avérer STRICTEMENT supérieur par hasard (si des annulations miraculeuses s'opèrent dans les $c_n$).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Opérations", "Produit de Cauchy"],
                q: "Dans le produit de Cauchy $\\sum c_n x^n = (\\sum a_n x^n)(\\sum b_n x^n)$, quelle est l'expression du coefficient $c_n$ ?",
                options: [
                    { text: "$c_n = \\sum_{k=0}^n a_k b_{n-k}$", isCorrect: true },
                    { text: "$c_n = a_n b_n$", isCorrect: false }
                ],
                explanation: "En développant le produit, on regroupe les termes donnant la puissance $x^n$. L'indice du premier doit être $k$, et l'indice du second doit être le complément $n-k$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Équations différentielles", "Méthodologie"],
                q: "Pour résoudre une équation différentielle (ex: $y' - xy = 0$) à l'aide des séries entières, quelle est la première étape ?",
                options: [
                    { text: "On pose $y(x) = \\sum a_n x^n$, on dérive terme à terme, et on injecte dans l'équation pour obtenir une relation de récurrence sur les $a_n$", isCorrect: true },
                    { text: "On intègre directement l'équation", isCorrect: false }
                ],
                explanation: "On suppose a priori que la solution admet un DSE de rayon $R>0$. L'identification des coefficients permet de trouver $a_n$. On valide a posteriori la méthode en vérifiant que le rayon trouvé est bien non nul.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Dérivation", "Calcul pratique"],
                q: "Que vaut la somme $\\sum_{n=1}^\\infty n x^{n-1}$ pour $|x| < 1$ ?",
                options: [
                    { text: "$\\frac{1}{(1-x)^2}$", isCorrect: true },
                    { text: "$\\frac{x}{(1-x)^2}$", isCorrect: false }
                ],
                explanation: "C'est la dérivée directe de la série géométrique $\\sum_{n=0}^\\infty x^n = \\frac{1}{1-x}$. La dérivée de $(1-x)^{-1}$ est $(-1)(-1)(1-x)^{-2} = \\frac{1}{(1-x)^2}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Dérivation", "Calcul pratique"],
                q: "Que vaut la somme $\\sum_{n=1}^\\infty n x^n$ pour $|x| < 1$ ?",
                options: [
                    { text: "$\\frac{x}{(1-x)^2}$", isCorrect: true },
                    { text: "$\\frac{1}{(1-x)^2}$", isCorrect: false }
                ],
                explanation: "Puisque $\\sum_{n=1}^\\infty n x^{n-1} = \\frac{1}{(1-x)^2}$, il suffit de multiplier l'expression de gauche par $x$ (ce qui donne bien $\\sum n x^n$) et de multiplier le côté droit par $x$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- ASTUCES ET CALCULS DE RAYONS COMPLEXES ---
            {
                type: "qcm", tags: ["Astuces", "Rayon de convergence"],
                q: "Si la suite des coefficients $|a_n|$ est majorée par une constante $M$, que peut-on dire du rayon $R$ ?",
                options: [
                    { text: "$R \\ge 1$", isCorrect: true },
                    { text: "$R = 1$", isCorrect: false },
                    { text: "$R \\le 1$", isCorrect: false }
                ],
                explanation: "Si $|a_n| \\le M$, alors pour $|z|<1$, on a $|a_n z^n| \\le M|z|^n$. Or $\\sum |z|^n$ converge (série géométrique). Donc par comparaison, la série converge pour tout $|z|<1$, ce qui prouve $R \\ge 1$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Calcul du rayon", "Formule de Stirling"],
                q: "Quel est le rayon de convergence de la série $\\sum_{n=1}^\\infty \\frac{n^n}{n!} z^n$ ?",
                options: [
                    { text: "$1/e$", isCorrect: true },
                    { text: "$e$", isCorrect: false },
                    { text: "$+\\infty$", isCorrect: false }
                ],
                explanation: "Par d'Alembert : $\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^{n+1}}{(n+1)!} \\frac{n!}{n^n} = \\frac{(n+1)^n}{n^n} = (1 + \\frac{1}{n})^n$. On sait que cette limite (caractérisation classique) vaut $e$. Donc $R = 1/e$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    }
});

