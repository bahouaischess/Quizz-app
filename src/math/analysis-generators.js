// ============================================================================
// AnalysisGenerators - Générateur paramétrique pour l'analyse (L1/L2, MPSI/MP)
// Limites, séries numériques, équivalents, développements limités
// ============================================================================

const AnalysisGenerators = {
    randInt(min, max, avoidZero = false) {
        let val = Math.floor(Math.random() * (max - min + 1)) + min;
        if (avoidZero && val === 0) val = Math.random() < 0.5 ? 1 : -1;
        return val;
    },

    // 1. Limites avec formes indéterminées et équivalents usuels
    generateLimitExercise() {
        const type = Math.random() < 0.5 ? 'poly_ratio' : 'trig_equiv';

        if (type === 'poly_ratio') {
            // lim x->+inf (a x^p + b) / (c x^p + d) = a / c
            const a = this.randInt(2, 6);
            const c = this.randInt(2, 4);
            const p = this.randInt(2, 4);
            const b = this.randInt(-5, 5);
            const d = this.randInt(-5, 5, true);

            return {
                type: 'numeric_input',
                conceptId: 'limites_equivalents',
                tags: ['Suites & Fonctions', 'Limites'],
                q: `Calculez la limite suivante lorsque $x \\to +\\infty$ :<br>
                $$\\lim_{x \\to +\\infty} \\frac{${a}x^${p} ${b >= 0 ? '+' : ''}${b}}{${c}x^${p} ${d >= 0 ? '+' : ''}${d}}$$`,
                correctAnswer: `${a}/${c}`,
                tolerance: 1e-4,
                placeholder: 'Ex: 3/2 ou 1.5',
                explanation: `Au voisinage de $+\\infty$, le numérateur équivaut à son terme de plus haut degré : $N(x) \\sim ${a}x^${p}$.<br>
                De même, $D(x) \\sim ${c}x^${p}$.<br>
                Par quotient d'équivalents : $\\lim_{x \\to +\\infty} \\frac{${a}x^${p}}{${c}x^${p}} = \\frac{${a}}{${c}}$.`
            };
        } else {
            // lim x->0 sin(k x) / (m x) = k / m
            const k = this.randInt(2, 7);
            const m = this.randInt(2, 5);

            return {
                type: 'numeric_input',
                conceptId: 'limites_equivalents',
                tags: ['Limites', 'Équivalents usuels'],
                q: `Calculez la limite suivante en 0 :<br>
                $$\\lim_{x \\to 0} \\frac{\\sin(${k}x)}{${m}x}$$`,
                correctAnswer: `${k}/${m}`,
                tolerance: 1e-4,
                placeholder: 'Ex: 5/2 ou 2.5',
                explanation: `Comme $\\sin(u) \\sim_{u \\to 0} u$, avec $u = ${k}x \\to 0$, on a $\\sin(${k}x) \\sim ${k}x$.<br>
                D'où $\\lim_{x \\to 0} \\frac{${k}x}{${m}x} = \\frac{${k}}{${m}}$.`
            };
        }
    },

    // 2. Séries numériques : Reconnaissance et nature
    generateSeriesExercise() {
        const sub = Math.random() < 0.5 ? 'riemann' : 'geometric';

        if (sub === 'riemann') {
            const alpha = this.randInt(1, 4) * 0.5; // 0.5, 1.0, 1.5, 2.0
            const isConvergent = alpha > 1;

            return {
                type: 'next_step',
                conceptId: 'series_riemann',
                tags: ['Séries numériques', 'Règles de convergence'],
                q: `On étudie la série numérique $\\sum_{n=1}^{+\\infty} \\frac{1}{n^{${alpha}}}$. Quelle est sa nature ?`,
                currentWork: `Il s'agit d'une série de Riemann de paramètre $\\alpha = ${alpha}$.`,
                options: [
                    {
                        text: isConvergent ? `La série converge car $\\alpha = ${alpha} > 1$` : `La série diverge car $\\alpha = ${alpha} \\le 1$`,
                        isCorrect: true,
                        rationale: isConvergent ? `Exact, la série de Riemann converge si et seulement si $\\alpha > 1$.` : `Exact, elle diverge pour $\\alpha \\le 1$ (série harmonique ou sous-harmonique).`
                    },
                    {
                        text: isConvergent ? `La série diverge car son terme général tend vers 0 trop lentement` : `La série converge car son terme général tend vers 0`,
                        isCorrect: false,
                        rationale: `Attention ! Le fait que le terme général tende vers 0 est une condition nécessaire, mais absolument pas suffisante.`
                    },
                    {
                        text: `On ne peut pas conclure sans utiliser la règle de d'Alembert`,
                        isCorrect: false,
                        rationale: `La règle de d'Alembert donne un quotient tendant vers 1 pour les séries de Riemann et est donc inopérante.`
                    }
                ],
                explanation: `Le théorème de Riemann stipule que $\\sum \\frac{1}{n^\\alpha}$ converge si et seulement si $\\alpha > 1$. Ici $\\alpha = ${alpha}$, la série est donc ${isConvergent ? 'convergente' : 'divergente'}.`
            };
        } else {
            // Série géométrique
            const qNum = this.randInt(1, 4);
            const qDen = this.randInt(2, 5);
            const q = qNum / qDen;
            const isConv = q < 1;

            return {
                type: 'next_step',
                conceptId: 'series_geometriques',
                tags: ['Séries numériques', 'Séries géométriques'],
                q: `On considère la série géométrique $\\sum_{n=0}^{+\\infty} \\left(\\frac{${qNum}}{${qDen}}\\right)^n$.`,
                currentWork: `La raison de cette suite géométrique est $q = \\frac{${qNum}}{${qDen}}$.`,
                options: [
                    {
                        text: isConv ? `La série converge et sa somme vaut $\\frac{1}{1 - q} = \\frac{${qDen}}{${qDen - qNum}}$` : `La série diverge car $|q| \\ge 1$`,
                        isCorrect: true,
                        rationale: isConv ? `Exact ! Pour $|q| < 1$, la série géométrique converge vers $\\frac{1}{1-q}$.` : `Exact, la série géométrique diverge si $|q| \\ge 1$.`
                    },
                    {
                        text: isConv ? `La série diverge car $q \\neq 0$` : `La série converge vers 0`,
                        isCorrect: false,
                        rationale: `Faux. La convergence dépend uniquement du critère $|q| < 1$.`
                    }
                ],
                explanation: `Une série géométrique de raison $q$ converge si et seulement si $|q| < 1$. Ici $|q| = ${q.toFixed(2)}$ ${isConv ? '< 1' : '\\ge 1'}.`
            };
        }
    }
};

if (typeof window !== 'undefined') {
    window.AnalysisGenerators = AnalysisGenerators;
}
