// ============================================================================
// MultiStepGenerators - Générateurs de Problèmes Multi-Étapes Universitaires
// Simule une feuille d'exercices complète avec enchaînement logique.
// ============================================================================

const MultiStepGenerators = {
    // Problème 1 : Réduction & Diagonalisation Complète
    generateDiagonalizationProblem() {
        const a = Math.floor(Math.random() * 3) + 1; // 1, 2, 3
        const b = 0;
        const c = Math.floor(Math.random() * 2) + 1; // 1, 2
        
        // Matrice A = [[a, 1, 0], [0, a, 0], [0, 0, c + 3]]
        // Spectres: lambda_1 = a (mult 2), lambda_2 = c+3 (mult 1)
        const lambda1 = a;
        const lambda2 = c + 3;
        const trace = 2 * a + lambda2;
        const det = a * a * lambda2;

        return {
            id: `prob-diag-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            type: 'multi_step',
            discipline: 'Algèbre Linéaire',
            _chapter: 'Réduction des Endomorphismes',
            _concept: 'Diagonalisation',
            title: `Problème Synthèse : Réduction complète d'une matrice d'ordre 3`,
            difficulty: 7,
            xp: 120,
            intro: `On considère la matrice réelle suivante :
                $$A = \\begin{pmatrix} ${a} & 1 & 0 \\\\ 0 & ${a} & 0 \\\\ 0 & 0 & ${lambda2} \\end{pmatrix}$$
                L'objectif de ce problème est d'étudier la réduction de $A$ pas à pas : polynôme caractéristique, spectre, sous-espaces propres, diagonalisabilité et conséquences.`,
            steps: [
                {
                    shortLabel: 'Trace & Det',
                    title: 'Étape 1 : Invariants élémentaires (Trace & Déterminant)',
                    instruction: `Calculez la trace de la matrice $A$ : $\\text{Tr}(A) = ?$`,
                    type: 'numeric',
                    correctAnswer: `${trace}`,
                    explanation: `$$\\text{Tr}(A) = ${a} + ${a} + ${lambda2} = ${trace}$$`
                },
                {
                    shortLabel: 'Spectre',
                    title: 'Étape 2 : Spectre de la matrice $\\text{Sp}(A)$',
                    instruction: `Donnez l'ensemble des valeurs propres de $A$ séparées par une virgule (ex: 2, 5) :`,
                    type: 'numeric',
                    isSet: true,
                    correctAnswer: `${lambda1}, ${lambda2}`,
                    explanation: `La matrice $A$ étant triangulaire supérieure, ses valeurs propres sont exactement les coefficients diagonaux :
                        $$\\text{Sp}(A) = \\{ ${lambda1}, ${lambda2} \\}$$
                        avec multiplicité algébrique $m(${lambda1}) = 2$ et $m(${lambda2}) = 1$.`
                },
                {
                    shortLabel: 'Sous-espace',
                    title: `Étape 3 : Dimension du sous-espace propre $E_{${lambda1}}$`,
                    instruction: `Calculez la dimension du sous-espace propre $E_{${lambda1}} = \\ker(A - ${lambda1} I_3)$ :`,
                    type: 'numeric',
                    correctAnswer: '1',
                    explanation: `$$A - ${lambda1} I_3 = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & ${lambda2 - lambda1} \\end{pmatrix}$$
                        Cette matrice possède deux colonnes non nulles indépendantes, donc son rang vaut $\\text{rg}(A - ${lambda1} I_3) = 2$.
                        D'après le théorème du rang :
                        $$\\dim(E_{${lambda1}}) = 3 - \\text{rg}(A - ${lambda1} I_3) = 3 - 2 = 1$$`
                },
                {
                    shortLabel: 'Diagonalisabilité',
                    title: 'Étape 4 : Conclusion sur la diagonalisabilité',
                    instruction: `La matrice $A$ est-elle diagonalisable dans $M_3(\\mathbb{R})$ ? Répondez par 1 pour OUI, 0 pour NON.`,
                    type: 'numeric',
                    correctAnswer: '0',
                    explanation: `Pour que $A$ soit diagonalisable, il est nécessaire et suffisant que la multiplicité géométrique de chaque valeur propre soit égale à sa multiplicité algébrique.
                        Ici, pour la valeur propre double $\\lambda = ${lambda1}$, on a :
                        $$\\dim(E_{${lambda1}}) = 1 < m(${lambda1}) = 2$$
                        Par conséquent, $A$ n'est **PAS diagonalisable** (réponse 0).`
                }
            ],
            conclusion: `Synthèse terminée. Vous avez mené l'étude spectrale complète de $A$ : calcul des invariants, détermination du spectre et démonstration rigoureuse de la non-diagonalisabilité via les multiplicités.`
        };
    },

    // Problème 2 : Étude Asymptotique et Convergence d'une Série
    generateSeriesProblem() {
        const k = Math.floor(Math.random() * 3) + 2; // 2, 3, 4
        return {
            id: `prob-series-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            type: 'multi_step',
            discipline: 'Analyse',
            _chapter: 'Séries Numériques',
            _concept: 'Séries à Paramètres',
            title: `Problème Guidé : Étude complète de la série $\\sum \\frac{n + 1}{n^\\alpha + n}`,
            difficulty: 6,
            xp: 90,
            intro: `Pour $\\alpha \\in \\mathbb{R}$, on considère la série numérique de terme général :
                $$u_n = \\frac{n + 1}{n^\\alpha + n}, \\quad n \\ge 1$$
                L'objectif est d'étudier la nature de cette série selon les valeurs du paramètre $\\alpha$.`,
            steps: [
                {
                    shortLabel: 'Équivalent',
                    title: 'Étape 1 : Équivalent lorsque $\\alpha > 1$',
                    instruction: `Pour $\\alpha > 1$, le monôme dominant au dénominateur est $n^\\alpha$. Donnez l'exposant $p$ dans l'équivalent $u_n \\sim \\frac{1}{n^p}$ quand $n \\to +\\infty$ en fonction de $\\alpha$ sous forme de relation : quelle est la valeur de $p$ si $\\alpha = 4$ ?`,
                    type: 'numeric',
                    correctAnswer: '3',
                    explanation: `$$u_n = \\frac{n(1 + 1/n)}{n^\\alpha(1 + n^{1-\\alpha})} \\sim \\frac{n}{n^\\alpha} = \\frac{1}{n^{\\alpha - 1}}$$
                        Pour $\\alpha = 4$, $p = 4 - 1 = 3$.`
                },
                {
                    shortLabel: 'Seuil Riemann',
                    title: 'Étape 2 : Seuil critique de convergence $\\alpha_0$',
                    instruction: `D'après le critère d'équivalence pour les séries à termes positifs et les séries de Riemann, la série $\\sum u_n$ converge si et seulement si $\\alpha > \\alpha_0$. Quelle est la valeur exacte du seuil $\\alpha_0$ ?`,
                    type: 'numeric',
                    correctAnswer: '2',
                    explanation: `Comme $u_n \\sim \\frac{1}{n^{\\alpha - 1}} > 0$, la série converge si et seulement si l'exposant de Riemann est strictement supérieur à 1 :
                        $$\\alpha - 1 > 1 \\iff \\alpha > 2$$
                        Le seuil critique vaut donc $\\alpha_0 = 2$.`
                },
                {
                    shortLabel: 'Cas Limite',
                    title: 'Étape 3 : Cas critique $\\alpha = 2$',
                    instruction: `Pour $\\alpha = 2$, quelle est la limite de $n \\cdot u_n$ quand $n \\to +\\infty$ ?`,
                    type: 'numeric',
                    correctAnswer: '1',
                    explanation: `Pour $\\alpha = 2$ :
                        $$u_n = \\frac{n + 1}{n^2 + n} = \\frac{n + 1}{n(n + 1)} = \\frac{1}{n}$$
                        Ainsi $n \\cdot u_n = 1$, et la série $\\sum \\frac{1}{n}$ diverge (série harmonique).`
                }
            ],
            conclusion: `Étude de la série achevée : la série converge si et seulement si $\\alpha > 2$, avec divergence grossière pour $\\alpha \\le 0$ et divergence harmonique pour $\\alpha = 2$.`
        };
    },

    // Problème 3 : C1 — Grand Problème de Concours (30-45 minutes)
    generateFullExamProblem() {
        const l1 = 1, l2 = 2, l3 = -1;
        // Matrice diagonalisable 3x3 avec valeurs propres simples :
        // P = [[1, 0, 1], [1, 1, 0], [0, 1, 1]] -> det(P) = 2
        // A = P * diag(1, 2, -1) * P^-1
        // Pour un énoncé clair, prenons A = [[2, -1, 1], [-1, 2, -1], [1, -1, 2]] ou matrice symétrique réelle
        // Matrice A symétrique : A = [[3, 1, 1], [1, 3, 1], [1, 1, 3]] -> valeurs propres 2 (mult 2) et 5 (mult 1)
        return {
            id: `exam-problem-${Date.now()}`,
            type: 'multi_step',
            discipline: 'Algèbre Linéaire',
            _chapter: 'Réduction des Endomorphismes',
            _concept: 'Diagonalisation & Puissances',
            title: `Épreuve Universitaire : Réduction Complète & Calcul de A^n (30–45 min)`,
            difficulty: 8,
            xp: 200,
            estimatedMinutes: 35,
            isLongProblem: true,
            trainingFamily: 'long_problem',
            intro: `<strong>ÉPREUVE ACADÉMIQUE DE SYNTHÈSE (30 à 45 minutes)</strong><br>
                On considère l'endomorphisme de $\\mathbb{R}^3$ représenté dans la base canonique par la matrice réelle symétrique :
                $$A = \\begin{pmatrix} 3 & 1 & 1 \\\\ 1 & 3 & 1 \\\\ 1 & 1 & 3 \\end{pmatrix}$$
                L'épreuve est découpée en 5 parties interdépendantes : chaque résultat est réutilisé dans les parties suivantes. En cas d'erreur, la valeur exacte sera retenue pour la suite afin de ne pas bloquer l'épreuve.`,
            steps: [
                {
                    shortLabel: 'Partie A : χ_A(λ)',
                    title: 'Partie A : Polynôme caractéristique et spectre',
                    instruction: `Calculez le polynôme caractéristique $\\chi_A(\\lambda) = \\det(A - \\lambda I_3)$. Donnez l'ensemble des racines distinctes (le spectre $\\text{Sp}(A)$) séparées par une virgule :`,
                    type: 'numeric',
                    isSet: true,
                    correctAnswer: '2, 5',
                    explanation: `En effectuant $C_1 \\leftarrow C_1 + C_2 + C_3$, on factorise $(5 - \\lambda)$. On trouve :
                        $$\\chi_A(\\lambda) = (5 - \\lambda)(2 - \\lambda)^2$$
                        Le spectre est $\\text{Sp}(A) = \\{2, 5\\}$ avec multiplicité algébrique $m(2) = 2$ et $m(5) = 1$.`
                },
                {
                    shortLabel: 'Partie B : Espaces Propres',
                    title: 'Partie B : Étude du sous-espace propre E_2',
                    instruction: `Calculez la dimension du sous-espace propre $E_2 = \\ker(A - 2I_3)$ :`,
                    type: 'numeric',
                    correctAnswer: '2',
                    explanation: `$$A - 2I_3 = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 1 & 1 \\\\ 1 & 1 & 1 \\end{pmatrix}$$
                        Cette matrice a ses 3 lignes identiques non nulles, son rang est donc $\\text{rg}(A - 2I_3) = 1$.<br>
                        Par le théorème du rang : $\\dim(E_2) = 3 - 1 = 2$.`
                },
                {
                    shortLabel: 'Partie C : Diagonalisabilité',
                    title: 'Partie C : Conclusion sur la diagonalisabilité',
                    instruction: `La matrice $A$ est-elle diagonalisable sur $\\mathbb{R}$ ? (Répondez 1 pour OUI, 0 pour NON) :`,
                    type: 'numeric',
                    correctAnswer: '1',
                    explanation: `Pour $\\lambda = 2$, $\\dim(E_2) = 2 = m(2)$. Pour $\\lambda = 5$, $\\dim(E_5) = 1 = m(5)$.<br>
                        La somme des dimensions des sous-espaces propres est $2 + 1 = 3 = \\dim(\\mathbb{R}^3)$ : $A$ est **diagonalisable** (réponse 1).<br>
                        *(Remarque : A étant symétrique réelle, le théorème spectral garantissait déjà la diagonalisabilité).*`
                },
                {
                    shortLabel: 'Partie D : Trace & D^n',
                    title: 'Partie D : Matrice diagonale associée D',
                    instruction: `Soit $D = \\text{diag}(2, 2, 5)$ la matrice diagonale semblable à $A$. Quelle est la trace $\\text{Tr}(D^2) = \\text{Tr}(A^2)$ ?`,
                    type: 'numeric',
                    correctAnswer: '33',
                    explanation: `$$D^2 = \\text{diag}(2^2, 2^2, 5^2) = \\text{diag}(4, 4, 25)$$
                        $$\\text{Tr}(D^2) = 4 + 4 + 25 = 33$$`
                },
                {
                    shortLabel: 'Partie E : A^n et Limite',
                    title: 'Partie E : Coefficient diagonal de la puissance A^n',
                    instruction: `Par la formule de changement de base $A^n = P D^n P^{-1}$, on obtient que pour tout $n \\ge 1$ :
                        $$(A^n)_{1,1} = \\frac{1}{3} (2^{n+1} + 5^n)$$
                        Quelle est la valeur numérique exacte du coefficient $(A^2)_{1,1}$ ?`,
                    type: 'numeric',
                    correctAnswer: '11',
                    explanation: `Pour $n = 2$ : $(A^2)_{1,1} = \\frac{1}{3} (2^3 + 5^2) = \\frac{8 + 25}{3} = \\frac{33}{3} = 11$.<br>
                        On vérifie par produit matriciel : $3^2 + 1^2 + 1^2 = 9 + 1 + 1 = 11$.`
                }
            ],
            conclusion: `Félicitations ! Vous avez mené à son terme l'ensemble de cette épreuve universitaire de 35 minutes : calcul spectral complet, validation du théorème de diagonalisation et déduction de la formule fermée de la puissance $A^n$.`
        };
    },

    generate(type = 'diag') {
        if (type === 'exam' || type === 'long') return this.generateFullExamProblem();
        if (type === 'series') return this.generateSeriesProblem();
        return this.generateDiagonalizationProblem();
    }
};

if (typeof window !== 'undefined') {
    window.MultiStepGenerators = MultiStepGenerators;
}
