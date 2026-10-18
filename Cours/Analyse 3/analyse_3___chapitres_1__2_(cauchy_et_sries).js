// ============================================================
// MatiÃ¨re : Analyse 3 : Chapitres 1 & 2 (Cauchy et Séries)
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
Object.assign(defaultData, {
    "Analyse 3 : Chapitres 1 & 2 (Cauchy et Séries)": {
        folder: "Analyse 3",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            // --- SUITES DE CAUCHY (Chapitre 1) ---
            {
                type: "qcm", tags: ["Suites de Cauchy"],
                q: "Que stipule le théorème de Bolzano-Weierstrass (Théorème 1.3) ?",
                options: [
                    { text: "Toute suite réelle admet une limite finie", isCorrect: false },
                    { text: "Toute suite réelle bornée possède au moins une valeur d'adhérence (une sous-suite convergente)", isCorrect: true },
                    { text: "Toute suite croissante est de Cauchy", isCorrect: false }
                ],
                explanation: "C'est un théorème fondamental d'analyse : toute suite réelle bornée possède une valeur d'adhérence[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Suites de Cauchy"],
                q: "Quelle est la définition formelle d'une suite de Cauchy $(x_n)$ ?",
                options: [
                    { text: "$\\forall \\epsilon > 0, \\exists n_0 \\in \\mathbb{N}, \\forall n \\ge n_0, |x_n - x_{n-1}| < \\epsilon$", isCorrect: false },
                    { text: "$\\forall \\epsilon > 0, \\exists n_0 \\in \\mathbb{N}, \\forall p, q \\ge n_0, |x_p - x_q| < \\epsilon$", isCorrect: true }
                ],
                explanation: "Une suite est de Cauchy si les termes deviennent tous arbitrairement proches les uns des autres à partir d'un certain rang, et non pas seulement deux termes consécutifs[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Suites de Cauchy"],
                q: "Quel est le lien direct entre les suites convergentes et les suites de Cauchy ?",
                options: [
                    { text: "Toute suite de Cauchy est convergente, mais l'inverse est faux", isCorrect: false },
                    { text: "Toute suite convergente est de Cauchy", isCorrect: true }
                ],
                explanation: "C'est la Proposition 1.5 : toute suite qui admet une limite finie voit nécessairement ses termes se rapprocher les uns des autres[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Suites de Cauchy"],
                q: "Que peut-on affirmer concernant le caractère borné d'une suite de Cauchy (Prop 1.6) ?",
                options: [
                    { text: "Toute suite de Cauchy est bornée", isCorrect: true },
                    { text: "Une suite de Cauchy peut tendre vers $+\\infty$", isCorrect: false }
                ],
                explanation: "En fixant $\\epsilon = 1$, tous les termes à partir du rang $n_0$ sont dans une boule de rayon 1. Comme les termes précédents sont en nombre fini, la suite entière est bornée[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Suites de Cauchy"],
                q: "Si une suite de Cauchy admet une valeur d'adhérence, que se passe-t-il (Prop 1.6) ?",
                options: [
                    { text: "Elle converge vers cette valeur d'adhérence", isCorrect: true },
                    { text: "Elle peut diverger", isCorrect: false }
                ],
                explanation: "Si les termes se rapprochent tous les uns des autres (Cauchy) et qu'une sous-suite converge vers $l$, alors toute la suite est fatalement entraînée vers $l$[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Suites de Cauchy"],
                q: "Que signifie l'affirmation « $\\mathbb{R}$ est complet » (Théorème 1.7) ?",
                options: [
                    { text: "Dans $\\mathbb{R}$, toute suite convergente est de Cauchy", isCorrect: false },
                    { text: "Dans $\\mathbb{R}$, toute suite de Cauchy est une suite convergente", isCorrect: true }
                ],
                explanation: "C'est la propriété fondamentale qui différencie $\\mathbb{R}$ de $\\mathbb{Q}$ : un espace est complet si toute suite de Cauchy y admet une limite[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Suites de Cauchy"],
                q: "L'ensemble des rationnels $\\mathbb{Q}$ est-il complet ?",
                options: [
                    { text: "Oui", isCorrect: false },
                    { text: "Non", isCorrect: true }
                ],
                explanation: "Il existe des suites de rationnels qui sont de Cauchy (car elles convergent vers un irrationnel dans $\\mathbb{R}$) mais qui ne convergent pas dans $\\mathbb{Q}$, car leur limite n'y appartient pas[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },

            // --- SÉRIES : DÉFINITIONS & PROPRIÉTÉS (Chapitre 2) ---
            {
                type: "qcm", tags: ["Séries : Définitions & Propriétés"],
                q: "Comment définit-on la convergence d'une série de terme général $x_n$ ?",
                options: [
                    { text: "Elle converge si la suite $(x_n)$ tend vers 0", isCorrect: false },
                    { text: "Elle converge si la suite de ses sommes partielles $(S_n = \\sum_{k=0}^n x_k)$ admet une limite réelle finie", isCorrect: true }
                ],
                explanation: "La convergence d'une série est définie EXCLUSIVEMENT par la convergence de la suite de ses sommes partielles vers une limite finie[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries : Définitions & Propriétés"],
                q: "À quelle condition stricte la série géométrique $\\sum a^k$ converge-t-elle ?",
                options: [
                    { text: "Si $|a| \\le 1$", isCorrect: false },
                    { text: "Si $|a| < 1$", isCorrect: true },
                    { text: "Si $a < 1$", isCorrect: false }
                ],
                explanation: "La série géométrique converge si et seulement si $|a| < 1$. Si $a=1$ ou $a \\le -1$, elle diverge[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries : Définitions & Propriétés"],
                q: "Que vaut la somme de la série géométrique $\\sum_{k=0}^\\infty a^k$ (pour $|a| < 1$) ?",
                options: [
                    { text: "$\\frac{a}{1-a}$", isCorrect: false },
                    { text: "$\\frac{1}{1-a}$", isCorrect: true }
                ],
                explanation: "Puisque $S_n = \\frac{1-a^{n+1}}{1-a}$, la limite quand $n \\to \\infty$ est $\\frac{1}{1-a}$ pour $|a| < 1$[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries : Définitions & Propriétés"],
                q: "Si la série $\\sum x_n$ converge, que peut-on affirmer sur la suite $(x_n)$ (Prop 2.5) ?",
                options: [
                    { text: "La suite $(x_n)$ converge vers 0", isCorrect: true },
                    { text: "La suite $(x_n)$ est décroissante", isCorrect: false }
                ],
                explanation: "C'est une condition NÉCESSAIRE. Si la série converge, son terme général tend obligatoirement vers zéro ($x_{n+1} = S_{n+1} - S_n \\to l - l = 0$)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries : Définitions & Propriétés"],
                q: "Vrai ou Faux : Si la suite $(x_n)$ tend vers 0, alors la série $\\sum x_n$ converge obligatoirement.",
                options: [
                    { text: "Vrai", isCorrect: false },
                    { text: "Faux", isCorrect: true }
                ],
                explanation: "Faux ! C'est une erreur classique. Le contre-exemple est la série harmonique (terme général $1/n$ qui tend vers 0, mais dont la série diverge)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries : Définitions & Propriétés"],
                q: "Si la suite $(x_n)$ ne tend pas vers 0, que peut-on affirmer sur la série $\\sum x_n$ ?",
                options: [
                    { text: "Elle diverge", isCorrect: true },
                    { text: "On ne peut rien conclure", isCorrect: false }
                ],
                explanation: "C'est la contraposée de la Proposition 2.5. On parle de « divergence grossière »[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries : Définitions & Propriétés"],
                q: "Deux séries dont les termes généraux coïncident à partir d'un certain rang $n_0$ ont-elles la même nature (Prop 2.8) ?",
                options: [
                    { text: "Oui", isCorrect: true },
                    { text: "Non", isCorrect: false }
                ],
                explanation: "La convergence d'une série ne dépend QUE de son comportement à l'infini. Modifier un nombre fini de termes ne change pas sa nature (convergence ou divergence)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries : Définitions & Propriétés"],
                q: "Comment est défini le Reste $R_n$ d'une série convergente $\\sum x_k$ (Def 2.10) ?",
                options: [
                    { text: "$R_n = \\sum_{k=0}^n x_k$", isCorrect: false },
                    { text: "$R_n = \\sum_{k=n+1}^\\infty x_k$", isCorrect: true }
                ],
                explanation: "Le reste $R_n$ est la somme des termes de $n+1$ à l'infini. Par définition, la suite $(R_n)$ d'une série convergente tend vers 0[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries : Définitions & Propriétés"],
                q: "Quel est le lien fondamental entre convergence et convergence absolue (Thm 2.12) ?",
                options: [
                    { text: "Convergence implique convergence absolue", isCorrect: false },
                    { text: "Convergence absolue implique convergence", isCorrect: true }
                ],
                explanation: "Si la série des valeurs absolues $\\sum |x_n|$ converge, alors la série $\\sum x_n$ converge obligatoirement[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },

            // --- SÉRIES À TERMES POSITIFS ---
            {
                type: "qcm", tags: ["Séries à termes positifs"],
                q: "Si le terme général $x_n$ d'une série est positif, que peut-on dire de la suite des sommes partielles $(S_n)$ ?",
                options: [
                    { text: "Elle est strictement décroissante", isCorrect: false },
                    { text: "Elle est positive et croissante", isCorrect: true }
                ],
                explanation: "Puisque $S_{n+1} - S_n = x_{n+1} \\ge 0$, la suite des sommes partielles est croissante (Prop 2.15)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries à termes positifs"],
                q: "Pour une série à termes POSITIFS, quels sont les deux seuls comportements possibles (Prop 2.15) ?",
                options: [
                    { text: "Elle converge, ou elle n'a pas de limite (oscille)", isCorrect: false },
                    { text: "Elle converge (si $(S_n)$ est majorée), ou elle tend vers $+\\infty$ (si $(S_n)$ n'est pas majorée)", isCorrect: true }
                ],
                explanation: "Une suite croissante est soit majorée (et converge), soit non majorée (et tend vers $+\\infty$). Elle ne peut jamais osciller[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries à termes positifs"],
                q: "Séries de Riemann : À quelle condition la série $\\sum \\frac{1}{n^\\alpha}$ converge-t-elle ?",
                options: [
                    { text: "Si $\\alpha \\ge 1$", isCorrect: false },
                    { text: "Si $\\alpha > 1$", isCorrect: true },
                    { text: "Si $\\alpha < 1$", isCorrect: false }
                ],
                explanation: "C'est l'un des résultats les plus utilisés : la série de Riemann converge si et seulement si $\\alpha > 1$. Pour $\\alpha=1$ (série harmonique), elle diverge[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },

            // --- CRITÈRES DE CONVERGENCE ---
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Critère de comparaison : Soient $0 \\le x_n \\le y_n$. Si la série $\\sum x_n$ DIVERGE, que fait $\\sum y_n$ ?",
                options: [
                    { text: "Elle converge", isCorrect: false },
                    { text: "Elle diverge aussi", isCorrect: true },
                    { text: "On ne peut rien dire", isCorrect: false }
                ],
                explanation: "Si la « petite » série diverge (tend vers l'infini), la « grande » série diverge obligatoirement aussi vers l'infini[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Vrai ou Faux : Le critère de comparaison ($x_n \\le y_n$) est applicable même si $x_n$ et $y_n$ changent de signe.",
                options: [
                    { text: "Vrai", isCorrect: false },
                    { text: "Faux", isCorrect: true }
                ],
                explanation: "Faux. C'est une erreur fatale. Le critère de comparaison N'EST VALABLE QUE pour les séries à termes POSITIFS. Contre-exemple : $x_n=-1 \\le 0=y_n$, $\\sum 0$ converge mais $\\sum -1$ diverge[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Critère d'équivalence : Si $x_n \\sim y_n$ et que les termes sont POSITIFS, que peut-on affirmer (Prop 2.21) ?",
                options: [
                    { text: "Elles ont la même somme", isCorrect: false },
                    { text: "Elles sont de même nature (convergent ou divergent en même temps)", isCorrect: true }
                ],
                explanation: "L'équivalence assure que les deux séries ont le même comportement à l'infini. Attention, elles n'auront pas forcément la même somme[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Vrai ou Faux : On peut utiliser le critère d'équivalence sur des séries dont le terme général change de signe.",
                options: [
                    { text: "Vrai", isCorrect: false },
                    { text: "Faux", isCorrect: true }
                ],
                explanation: "Faux. L'équivalence ne conserve la nature des séries QUE si les termes sont de signe constant (positif ou négatif)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Critère de Cauchy : Soit $x_n > 0$. Si $\\lim (x_n)^{\\frac{1}{n}} = l$, que conclut-on ?",
                options: [
                    { text: "Si $l < 1$ la série converge. Si $l > 1$ elle diverge.", isCorrect: true },
                    { text: "Si $l > 1$ la série converge. Si $l < 1$ elle diverge.", isCorrect: false }
                ],
                explanation: "Si la racine n-ième tend vers $l < 1$, le terme général est majoré par une suite géométrique convergente[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Critère de D'Alembert : Soit $x_n > 0$. Si $\\lim \\frac{x_{n+1}}{x_n} = l$, à quelle condition la série diverge-t-elle ?",
                options: [
                    { text: "Si $l < 1$", isCorrect: false },
                    { text: "Si $l > 1$", isCorrect: true }
                ],
                explanation: "Si le rapport est strictement supérieur à 1 à l'infini, les termes grandissent : la série diverge (divergence grossière)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Que se passe-t-il pour les critères de Cauchy et D'Alembert si la limite $l = 1$ ?",
                options: [
                    { text: "La série converge", isCorrect: false },
                    { text: "La série diverge", isCorrect: false },
                    { text: "On ne peut pas conclure", isCorrect: true }
                ],
                explanation: "Le cas $l=1$ est un cas indéterminé pour ces deux règles. Il faut utiliser une autre méthode (ex: équivalence ou critère en $n^\\alpha$)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Critère en $n^\\alpha$ : S'il existe $\\alpha > 1$ tel que $\\lim n^\\alpha x_n = l$ (limite finie), que fait la série à termes positifs $\\sum x_n$ ?",
                options: [
                    { text: "Elle diverge", isCorrect: false },
                    { text: "Elle converge", isCorrect: true }
                ],
                explanation: "Cela signifie que $x_n = \\mathcal{O}(\\frac{1}{n^\\alpha})$. Comme $\\alpha > 1$, la série de Riemann converge, et donc $\\sum x_n$ converge par comparaison[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Critère en $n^\\alpha$ : S'il existe $\\alpha \\le 1$ tel que $\\lim n^\\alpha x_n = +\\infty$, que fait la série à termes positifs $\\sum x_n$ ?",
                options: [
                    { text: "Elle diverge", isCorrect: true },
                    { text: "Elle converge", isCorrect: false }
                ],
                explanation: "Cela signifie qu'à partir d'un certain rang, $n^\\alpha x_n \\ge 1$, soit $x_n \\ge \\frac{1}{n^\\alpha}$. Comme $\\alpha \\le 1$, la série diverge par comparaison[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },

            // --- SÉRIES ALTERNÉES & ABEL ---
            {
                type: "qcm", tags: ["Séries alternées & Abel"],
                q: "Qu'est-ce qu'une série « semi-convergente » (Def 2.31) ?",
                options: [
                    { text: "Une série qui converge vers l'infini", isCorrect: false },
                    { text: "Une série qui est convergente, mais PAS absolument convergente", isCorrect: true }
                ],
                explanation: "Exemple classique : $\\sum \\frac{(-1)^n}{n}$ converge, mais $\\sum \\left|\\frac{(-1)^n}{n}\\right| = \\sum \\frac{1}{n}$ diverge. Elle est semi-convergente[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries alternées & Abel"],
                q: "Critère Spécial des Séries Alternées (CSSA) : Quelles sont les 3 conditions sur la suite $(x_n)$ pour que $\\sum (-1)^n x_n$ converge ?",
                options: [
                    { text: "Positive, strictement croissante, tend vers 1", isCorrect: false },
                    { text: "Positive, décroissante, et tend vers 0", isCorrect: true }
                ],
                explanation: "Si la suite $(x_n)$ (sans le signe) baisse sans cesse vers 0, les oscillations s'atténuent et la série alternée converge[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries alternées & Abel"],
                q: "Peut-on utiliser les théorèmes d'équivalence ou de comparaison directement sur une série alternée pour prouver sa semi-convergence ?",
                options: [
                    { text: "Oui", isCorrect: false },
                    { text: "Non, jamais", isCorrect: true }
                ],
                explanation: "C'est une interdiction absolue (Rem 2.34). On ne peut utiliser ces critères QUE sur la valeur absolue pour prouver la convergence absolue[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries alternées & Abel"],
                q: "Critère d'Abel (Thm 2.36) : Si $x_n = a_n b_n$. Quelles sont les conditions pour que $\\sum x_n$ converge ?",
                options: [
                    { text: "$(a_n)$ tend vers 0, et $(b_n)$ tend vers 0", isCorrect: false },
                    { text: "$(a_n)$ est décroissante vers 0, et la suite des SOMMES PARTIELLES de $(b_n)$ est bornée", isCorrect: true }
                ],
                explanation: "Le critère d'Abel généralise le CSSA. Il demande un amortisseur monotone vers 0 ($(a_n)$) et un oscillateur à énergie bornée (les sommes partielles de $(b_n)$)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries alternées & Abel"],
                q: "Sur quoi repose la démonstration du Critère d'Abel ?",
                options: [
                    { text: "Sur la transformation d'Abel (version discrète de l'intégration par parties)", isCorrect: true },
                    { text: "Sur un développement limité à l'ordre 3", isCorrect: false }
                ],
                explanation: "La transformation d'Abel utilise $b_n = B_n - B_{n-1}$ pour réécrire la somme et transférer les différences sur $a_n - a_{n+1}$[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },

            // --- RESTES & ESTIMATIONS ---
            {
                type: "qcm", tags: ["Restes & Estimations"],
                q: "Si $u_n \\sim v_n > 0$ et que les séries DIVERGENT. Que peut-on affirmer ?",
                options: [
                    { text: "Les restes sont équivalents", isCorrect: false },
                    { text: "Les sommes partielles sont équivalentes : $\\sum_{k=0}^n u_k \\sim \\sum_{k=0}^n v_k$", isCorrect: true }
                ],
                explanation: "Pour des séries divergentes équivalentes positives, la somme explose et c'est la somme partielle entière qui devient équivalente (Prop 2.39)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Restes & Estimations"],
                q: "Si $u_n \\sim v_n > 0$ et que les séries CONVERGENT. Que peut-on affirmer ?",
                options: [
                    { text: "Les sommes partielles sont équivalentes", isCorrect: false },
                    { text: "Les RESTES sont équivalents : $\\sum_{k=n}^\\infty u_k \\sim \\sum_{k=n}^\\infty v_k$", isCorrect: true }
                ],
                explanation: "Puisque les séries convergent, la limite des sommes partielles est une constante (pas forcément la même). Ce sont les queues (les restes) qui tendent vers 0 et qui sont équivalentes[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Restes & Estimations"],
                q: "Dans le cadre du Critère Spécial des Séries Alternées (CSSA), comment majore-t-on la valeur absolue du reste $|R_n|$ ?",
                options: [
                    { text: "$|R_n| \\le |u_n|$", isCorrect: false },
                    { text: "$|R_n| \\le |u_{n+1}|$ (la valeur absolue du PREMIER terme négligé)", isCorrect: true }
                ],
                explanation: "C'est l'un des outils les plus puissants du CSSA : l'erreur commise en arrêtant la somme au rang $n$ est majorée par la taille du tout premier terme que l'on n'a pas additionné[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Restes & Estimations"],
                q: "Dans le cadre du CSSA, quel est le signe du reste $R_n = \\sum_{k=n+1}^\\infty (-1)^k u_k$ ?",
                options: [
                    { text: "Il est toujours positif", isCorrect: false },
                    { text: "Il est du même signe que son premier terme : $(-1)^{n+1}$", isCorrect: true }
                ],
                explanation: "Le premier terme négligé impose son signe à tout le reste de la somme infinie (Prop 2.40)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Restes & Estimations"],
                q: "Comment démontre-t-on le Critère Spécial des Séries Alternées (CSSA) ?",
                options: [
                    { text: "En utilisant le critère de D'Alembert", isCorrect: false },
                    { text: "En prouvant que les suites extraites $(S_{2n})$ et $(S_{2n+1})$ sont adjacentes", isCorrect: true }
                ],
                explanation: "La démonstration classique (et exigible) montre que la somme des termes pairs décroît, celle des impairs croît, et que leur différence $S_{2n+1} - S_{2n}$ tend vers 0[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },

            // --- SÉRIES COMPLEXES ---
            {
                type: "qcm", tags: ["Séries complexes"],
                q: "Quand dit-on qu'une série à termes complexes $\\sum z_n$ converge (Def 2.42) ?",
                options: [
                    { text: "Quand le module $|z_n|$ tend vers 0", isCorrect: false },
                    { text: "Quand la série des parties réelles $\\sum \\text{Re}(z_n)$ ET la série des parties imaginaires $\\sum \\text{Im}(z_n)$ convergent toutes les deux", isCorrect: true }
                ],
                explanation: "Une série complexe se scinde simplement en deux séries réelles indépendantes. Elle converge si et seulement si ses deux composantes réelles convergent[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries complexes"],
                q: "À quelle condition une série complexe est-elle ABSOLUMENT convergente (Def 2.43) ?",
                options: [
                    { text: "Si la série des parties réelles et celle des parties imaginaires sont absolument convergentes", isCorrect: true },
                    { text: "Si $\\sum (z_n)^2$ converge", isCorrect: false }
                ],
                explanation: "La convergence absolue d'une série complexe implique la convergence absolue de ses composantes réelles et imaginaires (et réciproquement)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries complexes"],
                q: "Propriété fondamentale (Prop 2.44) : Une série complexe est absolument convergente SI ET SEULEMENT SI...",
                options: [
                    { text: "... la série réelle des modules $\\sum |z_n|$ converge", isCorrect: true },
                    { text: "... la série $\\sum |z_n|$ diverge", isCorrect: false }
                ],
                explanation: "C'est l'équivalence parfaite : tester la convergence absolue des composantes revient exactement à tester la convergence de la série (réelle et positive) des modules[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries complexes"],
                q: "Dans l'utilisation du critère d'Abel sur la série complexe $\\sum a_n e^{i k \\theta}$ (pour $\\theta \\not\\equiv 0 \\pmod{2\\pi}$), que vaut la somme partielle géométrique $\\sum_{k=0}^n e^{i\\theta k}$ ?",
                options: [
                    { text: "$\\frac{1-e^{i\\theta(n+1)}}{1-e^{i\\theta}}$", isCorrect: true },
                    { text: "$\\frac{e^{i\\theta n}-1}{e^{i\\theta}}$", isCorrect: false }
                ],
                explanation: "C'est la formule classique de la somme des termes d'une suite géométrique de raison $q = e^{i\\theta}$ (avec $q \\neq 1$)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries complexes"],
                q: "Comment majore-t-on le module de la somme de $b_k = e^{i \\theta k}$ pour l'appliquer au critère d'Abel (Ex 2.46) ?",
                options: [
                    { text: "En factorisant par l'angle moitié, on trouve une forme bornée par $\\frac{1}{|\\sin(\\theta/2)|}$", isCorrect: true },
                    { text: "Ce n'est pas majorable, ça tend vers l'infini", isCorrect: false }
                ],
                explanation: "L'astuce de l'angle moitié permet d'extraire des sinus, prouvant que la somme partielle $(B_n)$ des oscillateurs complexes est bornée, condition clé d'Abel[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries complexes"],
                q: "Quelle inégalité est utilisée pour lier la convergence absolue des parties réelles/imaginaires avec celle du module $|z_n|$ ?",
                options: [
                    { text: "$|z_n| \\le |\\text{Re}(z_n)| \\times |\\text{Im}(z_n)|$", isCorrect: false },
                    { text: "$\\max(|\\text{Re}(z_n)|, |\\text{Im}(z_n)|) \\le |z_n| \\le |\\text{Re}(z_n)| + |\\text{Im}(z_n)|$", isCorrect: true }
                ],
                explanation: "La partie gauche vient de la géométrie du triangle rectangle. La partie droite est l'inégalité triangulaire appliquée à $z = \\text{Re}(z) + i\\text{Im}(z)$[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            }
        ]
    }
});

