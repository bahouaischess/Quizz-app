// ============================================================================
// SeriesGenerators - Moteur d'Entraînement Pratique sur les Séries Numériques
// Calculs de sommes exactes, télescopages, exposants critiques et limites de quotients.
// PRODUCTION D'UNE RÉPONSE RÉELLE (Saisie numérique, fractionnaire et rationnelle)
// ============================================================================

const SeriesGenerators = {
    randInt(min, max, avoidZero = false) {
        let val = Math.floor(Math.random() * (max - min + 1)) + min;
        if (avoidZero && val === 0) val = Math.random() < 0.5 ? 1 : -1;
        return val;
    },

    generate(level = 1) {
        const lvl = Math.min(Math.max(Number(level) || 1, 1), 7);
        switch (lvl) {
            case 1: return this.generateLevel1();
            case 2: return this.generateLevel2();
            case 3: return this.generateLevel3();
            case 4: return this.generateLevel4();
            case 5: return this.generateLevel5();
            case 6: return this.generateLevel6();
            case 7: return this.generateLevel7();
            default: return this.generateLevel3();
        }
    },

    // ========================================================================
    // NIVEAU 1 : Limite du Terme Général & Test de Divergence Grossière
    // ========================================================================
    generateLevel1() {
        const a = this.randInt(2, 6);
        const b = this.randInt(2, 5);
        const c = this.randInt(-4, 4);

        // lim (a n^2 + c) / (b n^2 + 1) = a / b
        const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
        const g = gcd(a, b);
        const fracStr = (b / g === 1) ? String(a / g) : `${a / g}/${b / g}`;

        return {
            type: 'numeric_input',
            difficulty: 1,
            level: 1,
            conceptId: 'series_calcul_limite_terme_general',
            tags: ['Séries Numériques', 'Limite du Terme Général', 'Divergence Grossière', 'Niveau 1'],
            q: `On étudie la série $\\sum_{n=1}^{+\\infty} u_n$ avec $u_n = \\frac{${a}n^2 ${c >= 0 ? '+' : ''}${c}}{${b}n^2 + 3}$.<br>
            Calculez la limite exacte du terme général $\\lim_{n \\to +\\infty} u_n$ (prouvant la divergence grossière) :`,
            correctAnswer: fracStr,
            tolerance: 1e-4,
            placeholder: 'Ex: 3/2 ou 1.5',
            explanation: `Par quotient des monômes de plus haut degré : $\\lim_{n \\to +\\infty} u_n = \\frac{${a}}{${b}} = ${fracStr} \\neq 0$. La série diverge grossièrement.`
        };
    },

    // ========================================================================
    // NIVEAU 2 : Somme Exacte d'une Série Géométrique
    // ========================================================================
    generateLevel2() {
        const num = this.randInt(1, 3);
        const den = this.randInt(num + 1, 5);
        const a = this.randInt(1, 4);

        // S = a / (1 - num/den) = a * den / (den - num)
        const sumNum = a * den;
        const sumDen = den - num;
        const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
        const g = gcd(sumNum, sumDen);
        const exactFraction = (sumDen / g === 1) ? String(sumNum / g) : `${sumNum / g}/${sumDen / g}`;

        return {
            type: 'numeric_input',
            difficulty: 2,
            level: 2,
            conceptId: 'series_calcul_somme_geometrique',
            tags: ['Séries Géométriques', 'Calcul de Somme', 'Niveau 2'],
            q: `Calculez la somme exacte de la série convergente :<br>
            $$S = \\sum_{n=0}^{+\\infty} ${a} \\left(\\frac{${num}}{${den}}\\right)^n$$
            $S = $`,
            correctAnswer: exactFraction,
            tolerance: 1e-4,
            placeholder: 'Ex: 8/3 ou 2',
            explanation: `Il s'agit d'une série géométrique de premier terme $u_0 = ${a}$ et de raison $q = \\frac{${num}}{${den}} \\in ]-1, 1[$.<br>
            Sa somme vaut : $S = \\frac{u_0}{1 - q} = \\frac{${a}}{1 - ${num}/${den}} = \\frac{${a} \\times ${den}}{${den - num}} = ${exactFraction}$.`
        };
    },

    // ========================================================================
    // NIVEAU 3 : Séries Télescopiques (Calcul de Somme)
    // ========================================================================
    generateLevel3() {
        const p = this.randInt(1, 3);
        // S = sum_{n=1}^{+inf} 1 / (n(n+p)) = 1/p * (1 + 1/2 + ... + 1/p)
        let harmonic = 0;
        let harmNum = 0, harmDen = 1;
        for (let i = 1; i <= p; i++) {
            harmonic += 1 / i;
        }
        // Pour p = 1 : sum 1/(n(n+1)) = 1
        // Pour p = 2 : 1/2 * (1 + 1/2) = 3/4
        // Pour p = 3 : 1/3 * (1 + 1/2 + 1/3) = 1/3 * 11/6 = 11/18
        let ansStr = '1';
        if (p === 2) ansStr = '3/4';
        if (p === 3) ansStr = '11/18';

        return {
            type: 'numeric_input',
            difficulty: 3,
            level: 3,
            conceptId: 'series_calcul_telescopique',
            tags: ['Séries Télescopiques', 'Décomposition en Éléments Simples', 'Niveau 3'],
            q: `En décomposant en éléments simples $\\frac{1}{n(n+${p})} = \\frac{1}{${p}} \\left(\\frac{1}{n} - \\frac{1}{n+${p}}\\right)$, calculez la somme :<br>
            $$S = \\sum_{n=1}^{+\\infty} \\frac{1}{n(n+${p})}$$
            $S = $`,
            correctAnswer: ansStr,
            tolerance: 1e-4,
            placeholder: 'Ex: 1 ou 3/4',
            explanation: `Par télescopage des sommes partielles : $S_N = \\frac{1}{${p}} \\sum_{k=1}^N \\left(\\frac{1}{k} - \\frac{1}{k+${p}}\\right) \\xrightarrow[N\\to+\\infty]{} ${ansStr}$.`
        };
    },

    // ========================================================================
    // NIVEAU 4 : Séries de Riemann Paramétrées (Exposant Critique)
    // ========================================================================
    generateLevel4() {
        const c = this.randInt(2, 6);
        // 2a - c > 1 => 2a > c + 1 => a > (c + 1)/2
        const crit = (c + 1) / 2;
        const ansStr = ((c + 1) % 2 === 0) ? String(crit) : `${c + 1}/2`;

        return {
            type: 'numeric_input',
            difficulty: 4,
            level: 4,
            conceptId: 'series_exposant_critique',
            tags: ['Séries de Riemann', 'Exposant Critique', 'Paramètres', 'Niveau 4'],
            q: `La série numérique $\\sum_{n=1}^{+\\infty} \\frac{1}{n^{2\\alpha - ${c}}}$ converge si et seulement si $\\alpha > \\alpha_0$.<br>
            Déterminez la valeur critique $\\alpha_0$ :`,
            correctAnswer: ansStr,
            tolerance: 1e-4,
            placeholder: 'Ex: 2 ou 5/2',
            explanation: `D'après le critère de Riemann, $\\sum 1/n^p$ converge $\\iff p > 1$.<br>
            Ici $2\\alpha - ${c} > 1 \\iff 2\\alpha > ${c + 1} \\iff \\alpha > ${ansStr}$. Donc $\\alpha_0 = ${ansStr}$.`
        };
    },

    // ========================================================================
    // NIVEAU 5 : Règle de d'Alembert (Calcul de la Limite du Quotient)
    // ========================================================================
    generateLevel5() {
        const a = this.randInt(2, 5);
        return {
            type: 'numeric_input',
            difficulty: 5,
            level: 5,
            conceptId: 'series_dalembert_calcul_quotient',
            tags: ['Règle de d\'Alembert', 'Calcul de Limite', 'Niveau 5'],
            q: `Pour la série $\\sum_{n=0}^{+\\infty} \\frac{${a}^n}{n!}$, calculez la limite du rapport de d'Alembert $\\lim_{n \\to +\\infty} \\frac{u_{n+1}}{u_n}$ :<br>
            $$\\lim_{n \\to +\\infty} \\frac{u_{n+1}}{u_n} = $$`,
            correctAnswer: 0,
            tolerance: 0,
            placeholder: 'Valeur numérique...',
            explanation: `$$\\frac{u_{n+1}}{u_n} = \\frac{${a}^{n+1}}{(n+1)!} \\times \\frac{n!}{${a}^n} = \\frac{${a}}{n+1} \\xrightarrow[n \\to +\\infty]{} 0$$
            Comme $0 < 1$, la série converge d'après la règle de d'Alembert.`
        };
    },

    // ========================================================================
    // NIVEAU 6 : Règle de Cauchy (Calcul de la Racine n-ième)
    // ========================================================================
    generateLevel6() {
        const k = this.randInt(2, 4);
        const p = this.randInt(2, 5);
        // un = (k n / (p n + 1))^n => \sqrt[n]{un} -> k / p
        const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
        const g = gcd(k, p);
        const fracStr = (p / g === 1) ? String(k / g) : `${k / g}/${p / g}`;

        return {
            type: 'numeric_input',
            difficulty: 6,
            level: 6,
            conceptId: 'series_cauchy_calcul_racine',
            tags: ['Règle de Cauchy', 'Racine n-ième', 'Niveau 6'],
            q: `On pose $u_n = \\left( \\frac{${k}n}{${p}n + 1} \\right)^n$. Calculez la limite de la règle de Cauchy :<br>
            $$\\ell = \\lim_{n \\to +\\infty} \\sqrt[n]{u_n} = $$`,
            correctAnswer: fracStr,
            tolerance: 1e-4,
            placeholder: 'Ex: 2/3 ou 1/2',
            explanation: `$$\\sqrt[n]{u_n} = \\frac{${k}n}{${p}n + 1} = \\frac{${k}}{${p} + 1/n} \\xrightarrow[n \\to +\\infty]{} \\frac{${k}}{${p}} = ${fracStr}$$`
        };
    },

    // ========================================================================
    // NIVEAU 7 : Analyse Asymptotique (Calcul du Coefficient de l'Équivalent)
    // ========================================================================
    generateLevel7() {
        const a = this.randInt(2, 5);
        // un = ln(1 + a / n) ~ a / n
        return {
            type: 'numeric_input',
            difficulty: 7,
            level: 7,
            conceptId: 'series_equivalent_coefficient',
            tags: ['Analyse Asymptotique', 'Équivalents', 'Niveau 7'],
            q: `Au voisinage de $+\\infty$, le terme général $u_n = \\sin\\left(\\frac{${a}}{\\sqrt{n}}\\right)$ est équivalent à $\\frac{C}{\\sqrt{n}}$.<br>
            Quelle est la valeur de la constante $C$ ?`,
            correctAnswer: a,
            tolerance: 0,
            placeholder: 'Valeur de C...',
            explanation: `Comme $\\frac{${a}}{\\sqrt{n}} \\to 0$, on applique l'équivalent classique $\\sin(u) \\sim_{u \\to 0} u$.<br>
            Ainsi, $u_n \\sim \\frac{${a}}{\\sqrt{n}}$, donc $C = ${a}$.`
        };
    }
};

if (typeof window !== 'undefined') {
    window.SeriesGenerators = SeriesGenerators;
}
