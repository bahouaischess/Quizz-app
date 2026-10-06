// ============================================================================
// FlawGenerators - Moteur d'Exercices Anti-Erreur & Réparation Académique
// Présente la copie d'un étudiant comportant un vice de raisonnement précis.
// L'étudiant doit :
// 1. Localiser l'étape erronée
// 2. Qualifier la nature de l'erreur (signe, arithmétique, définition, hypothèse oubliée, etc.)
// 3. Fournir la correction exacte
// ============================================================================

const FlawGenerators = {
    ERROR_CATEGORIES: [
        { id: 'sign', label: 'Erreur de signe (-1)^{i+j}' },
        { id: 'arithmetic', label: 'Erreur arithmétique / de calcul élémentaire' },
        { id: 'definition', label: 'Confusion de définition' },
        { id: 'hypothesis', label: 'Hypothèse de théorème oubliée' },
        { id: 'reasoning', label: 'Rupture de déduction logique' },
        { id: 'theorem_confusion', label: 'Confusion entre deux théorèmes' },
        { id: 'order_of_ops', label: 'Priorité des opérations' }
    ],

    generate(category = 'all') {
        const generators = [
            () => this.generateDeterminantFlaw(),
            () => this.generateDiagonalizationFlaw(),
            () => this.generateSeriesFlaw(),
            () => this.generateElementaryOpFlaw()
        ];
        const fn = generators[Math.floor(Math.random() * generators.length)];
        return fn();
    },

    // Cas 1 : Déterminant 3x3 avec erreur de signe sur le cofacteur
    generateDeterminantFlaw() {
        const a = 1, b = 2, c = 3;
        const d = 0, e = 4, f = 1;
        const g = 2, h = 1, i = 5;

        // det = 1*(20 - 1) - 2*(0 - 2) + 3*(0 - 8) = 19 + 4 - 24 = -1
        // L'étudiant écrit à l'étape 2 : + 2*(0 - 2) au lieu de - 2*(0 - 2) (erreur de signe)
        return {
            id: `flaw-det-${Date.now()}`,
            type: 'spot_the_flaw',
            discipline: 'Algèbre Linéaire',
            _chapter: 'Déterminants',
            _concept: 'Développement par Ligne',
            trainingFamily: 'anti_error',
            difficulty: 5,
            tags: ['Anti-Erreur', 'Déterminants', 'Cofacteurs', 'Signe'],
            q: `<strong>🔍 [Copie d'Étudiant à Réparer]</strong><br>
            Voici la tentative de calcul du déterminant de $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 1 \\\\ 2 & 1 & 5 \\end{pmatrix}$ par un étudiant :`,
            steps: [
                {
                    stepNum: 1,
                    text: `On développe par rapport à la première ligne : $\\det(A) = 1 \\cdot \\begin{vmatrix} 4 & 1 \\\\ 1 & 5 \\end{vmatrix} + 2 \\cdot \\begin{vmatrix} 0 & 1 \\\\ 2 & 5 \\end{vmatrix} + 3 \\cdot \\begin{vmatrix} 0 & 4 \\\\ 2 & 1 \\end{vmatrix}$`,
                    hasFlaw: true,
                    flawCategory: 'sign',
                    flawExplanation: `Erreur de signe ! Le coefficient $a_{1,2} = 2$ est situé en position $(1,2)$, son cofacteur porte donc un signe $(-1)^{1+2} = -1$. L'expression correcte est $- 2 \\cdot \\begin{vmatrix} 0 & 1 \\\\ 2 & 5 \\end{vmatrix}$.`
                },
                {
                    stepNum: 2,
                    text: `$= 1 \\cdot (20 - 1) + 2 \\cdot (0 - 2) + 3 \\cdot (0 - 8)$`,
                    hasFlaw: false
                },
                {
                    stepNum: 3,
                    text: `$= 19 - 4 - 24 = -9$`,
                    hasFlaw: false
                }
            ],
            options: [
                { text: `Étape 1 : Erreur de signe sur le signe damier du cofacteur $(-1)^{1+2}$`, isCorrect: true },
                { text: `Étape 2 : Erreur de calcul des déterminants $2\\times 2$`, isCorrect: false },
                { text: `Étape 3 : Erreur d'addition arithmétique finale`, isCorrect: false }
            ],
            repairQuestion: `Quelle est la valeur exacte du déterminant après correction de ce signe ?`,
            expectedRepairedAnswer: `-1`,
            explanation: `Le terme $a_{1,2}$ doit être affecté du signe $-$. Ainsi : $\\det(A) = 19 - 2(0 - 2) + 3(0 - 8) = 19 + 4 - 24 = -1$.`
        };
    },

    // Cas 2 : Diagonalisation - Confusion multiplicité algébrique vs géométrique
    generateDiagonalizationFlaw() {
        return {
            id: `flaw-diag-${Date.now()}`,
            type: 'spot_the_flaw',
            discipline: 'Algèbre Linéaire',
            _chapter: 'Réduction',
            _concept: 'Diagonalisabilité',
            trainingFamily: 'anti_error',
            difficulty: 6,
            tags: ['Anti-Erreur', 'Réduction', 'Multiplicité Géométrique'],
            q: `<strong>🔍 [Copie d'Étudiant à Réparer]</strong><br>
            Un étudiant étudie la matrice $M = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$. Voici sa conclusion :`,
            steps: [
                {
                    stepNum: 1,
                    text: `Le polynôme caractéristique est $\\chi_M(\\lambda) = (\\lambda - 2)^2$, donc $\\lambda = 2$ est valeur propre double.`,
                    hasFlaw: false
                },
                {
                    stepNum: 2,
                    text: `Comme la multiplicité de la valeur propre $\\lambda = 2$ vaut 2, la dimension de l'espace est atteinte, donc la matrice est diagonalisable.`,
                    hasFlaw: true,
                    flawCategory: 'theorem_confusion',
                    flawExplanation: `Confusion fatale de théorème ! La multiplicité algébrique égale à la dimension de l'espace assure seulement que le polynôme est scindé. Pour être diagonalisable, il faut en outre que la dimension du sous-espace propre $\\dim(\\ker(M - 2I))$ soit égale à la multiplicité algébrique (2). Or ici $\\dim(E_2) = 1 < 2$.`
                }
            ],
            options: [
                { text: `Étape 1 : Le polynôme caractéristique est faux`, isCorrect: false },
                { text: `Étape 2 : Confusion entre polynôme scindé et critère de diagonalisabilité (oubli de la multiplicité géométrique)`, isCorrect: true }
            ],
            repairQuestion: `Quelle est la dimension réelle du sous-espace propre $\\dim(\\ker(M - 2I))$ ?`,
            expectedRepairedAnswer: `1`,
            explanation: `$M - 2I_2 = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ est de rang 1, donc par le théorème du rang $\\dim(E_2) = 2 - 1 = 1 \\neq 2$. $M$ n'est pas diagonalisable.`
        };
    },

    // Cas 3 : Opération élémentaire frauduleuse sur les lignes
    generateElementaryOpFlaw() {
        return {
            id: `flaw-elem-op-${Date.now()}`,
            type: 'spot_the_flaw',
            discipline: 'Algèbre Linéaire',
            _chapter: 'Déterminants',
            _concept: 'Opérations Élémentaires',
            trainingFamily: 'anti_error',
            difficulty: 5,
            tags: ['Anti-Erreur', 'Opérations Élémentaires', 'Déterminants'],
            q: `<strong>🔍 [Copie d'Étudiant à Réparer]</strong><br>
            Calcul du déterminant par combinaison de lignes :`,
            steps: [
                {
                    stepNum: 1,
                    text: `Soit $D = \\begin{vmatrix} 3 & 5 \\\\ 2 & 1 \\end{vmatrix}$. On applique l'opération $L_1 \\leftarrow 2L_1 - 3L_2$.`,
                    hasFlaw: false
                },
                {
                    stepNum: 2,
                    text: `Donc $D = \\begin{vmatrix} 0 & 7 \\\\ 2 & 1 \\end{vmatrix} = -14$.`,
                    hasFlaw: true,
                    flawCategory: 'definition',
                    flawExplanation: `Opération non autorisée sans facteur multiplicatif ! Remplacer $L_1$ par $2L_1 - 3L_2$ multiplie la valeur du déterminant par 2. Il fallait écrire : $D = \\frac{1}{2} \\begin{vmatrix} 0 & 7 \\\\ 2 & 1 \\end{vmatrix} = -7$.`
                }
            ],
            options: [
                { text: `Étape 1 : On ne peut pas combiner deux lignes`, isCorrect: false },
                { text: `Étape 2 : L'opération $L_1 \\leftarrow 2L_1$ multiplie le déterminant par 2 sans division compensatrice`, isCorrect: true }
            ],
            repairQuestion: `Quelle est la valeur exacte du déterminant initial ?`,
            expectedRepairedAnswer: `-7`,
            explanation: `$D = (3 \\times 1) - (5 \\times 2) = 3 - 10 = -7$.`
        };
    },

    // Cas 4 : Séries - Équivalent sur terme oscillant
    generateSeriesFlaw() {
        return {
            id: `flaw-series-${Date.now()}`,
            type: 'spot_the_flaw',
            discipline: 'Analyse',
            _chapter: 'Séries Numériques',
            _concept: 'Critères de Convergence',
            trainingFamily: 'anti_error',
            difficulty: 6,
            tags: ['Anti-Erreur', 'Analyse', 'Signe Constant', 'Équivalents'],
            q: `<strong>🔍 [Copie d'Étudiant à Réparer]</strong><br>
            Étude de la nature de la série $\\sum_{n=1}^\\infty \\frac{(-1)^n}{\\sqrt{n} + (-1)^n}$ :`,
            steps: [
                {
                    stepNum: 1,
                    text: `On a au dénominateur $(-1)^n = o(\\sqrt{n})$, d'où $\\frac{(-1)^n}{\\sqrt{n} + (-1)^n} \\sim \\frac{(-1)^n}{\\sqrt{n}}$ quand $n \\to +\\infty$.`,
                    hasFlaw: false
                },
                {
                    stepNum: 2,
                    text: `Or la série alternée $\\sum \\frac{(-1)^n}{\\sqrt{n}}$ converge par le critère de Leibniz. Par équivalence, la série initiale converge.`,
                    hasFlaw: true,
                    flawCategory: 'hypothesis',
                    flawExplanation: `Hypothèse oubliée fondamentale ! Le théorème d'équivalence $\\sum u_n \\sim \\sum v_n$ n'est valable QUE pour des séries à termes de SIGNE CONSTANT au voisinage de l'infini. Il est formellement interdit de l'appliquer à des séries de signe non constant ! (En réalité, un DL d'ordre 2 montre que cette série diverge comme $\\sum -1/n$).`
                }
            ],
            options: [
                { text: `Étape 1 : L'équivalent asymptotique est mathématiquement faux`, isCorrect: false },
                { text: `Étape 2 : Application illicite du théorème d'équivalence à une série de signe non constant`, isCorrect: true }
            ],
            repairQuestion: `La série initiale converge-t-elle ? Répondez 1 pour OUI, 0 pour NON :`,
            expectedRepairedAnswer: `0`,
            explanation: `Par DL : $\\frac{(-1)^n}{\\sqrt{n}(1 + (-1)^n/\\sqrt{n})} = \\frac{(-1)^n}{\\sqrt{n}} - \\frac{1}{n} + O(n^{-3/2})$. La somme est la somme d'une série convergente et d'une série divergente (harmonique) : elle **DIVERGE** (réponse 0).`
        };
    }
};

if (typeof window !== 'undefined') {
    window.FlawGenerators = FlawGenerators;
}
