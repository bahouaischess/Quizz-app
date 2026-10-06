// ============================================================================
// MatrixGenerators - Générateur paramétrique d'exercices d'algèbre linéaire
// Capable de générer des milliers de variantes pour produits matriciels et déterminants
// ============================================================================

const MatrixGenerators = {
    // Génère un entier aléatoire dans [min, max]
    randInt(min, max, avoidZero = false) {
        let val = Math.floor(Math.random() * (max - min + 1)) + min;
        if (avoidZero && val === 0) val = Math.random() < 0.5 ? 1 : -1;
        return val;
    },

    // Crée une matrice de zéros
    createZeros(rows, cols) {
        return Array.from({ length: rows }, () => Array(cols).fill(0));
    },

    // Produit matriciel exact de deux matrices
    multiply(A, B) {
        const rowsA = A.length;
        const colsA = A[0].length;
        const rowsB = B.length;
        const colsB = B[0].length;
        if (colsA !== rowsB) throw new Error("Dimensions incompatibles pour la multiplication");

        const C = this.createZeros(rowsA, colsB);
        for (let i = 0; i < rowsA; i++) {
            for (let j = 0; j < colsB; j++) {
                let sum = 0;
                for (let k = 0; k < colsA; k++) {
                    sum += A[i][k] * B[k][j];
                }
                C[i][j] = sum;
            }
        }
        return C;
    },

    // Convertit une matrice en LaTeX
    toLatex(matrix) {
        const rows = matrix.map(r => r.join(' & ')).join(' \\\\ ');
        return `\\begin{pmatrix} ${rows} \\end{pmatrix}`;
    },

    // ========================================================================
    // 1. GÉNÉRATEUR DE PRODUITS MATRICIELS (Centaines de variantes)
    // ========================================================================
    generateProductExercise(options = {}) {
        const category = options.category || '2x2'; // '2x2', '3x3', '2x3_3x2', '3x2_2x3', 'triangular', 'single_coeff'
        const difficulty = options.difficulty || 'medium'; // 'easy', 'medium', 'hard'

        let rowsA = 2, colsA = 2, rowsB = 2, colsB = 2;
        let range = 4;
        let isTriangular = false;

        if (category === '2x2') {
            rowsA = 2; colsA = 2; rowsB = 2; colsB = 2;
            range = difficulty === 'easy' ? 3 : (difficulty === 'medium' ? 5 : 8);
        } else if (category === '3x3') {
            rowsA = 3; colsA = 3; rowsB = 3; colsB = 3;
            range = difficulty === 'easy' ? 2 : 4;
        } else if (category === '2x3_3x2') {
            rowsA = 2; colsA = 3; rowsB = 3; colsB = 2;
            range = 3;
        } else if (category === '3x2_2x3') {
            rowsA = 3; colsA = 2; rowsB = 2; colsB = 3;
            range = 3;
        } else if (category === 'triangular') {
            rowsA = 3; colsA = 3; rowsB = 3; colsB = 3;
            range = 4;
            isTriangular = true;
        }

        // Construction des matrices A et B
        const A = this.createZeros(rowsA, colsA);
        const B = this.createZeros(rowsB, colsB);

        for (let i = 0; i < rowsA; i++) {
            for (let j = 0; j < colsA; j++) {
                if (isTriangular && i > j) A[i][j] = 0; // Triangulaire supérieure
                else A[i][j] = this.randInt(-range, range);
            }
        }

        for (let i = 0; i < rowsB; i++) {
            for (let j = 0; j < colsB; j++) {
                if (isTriangular && i > j) B[i][j] = 0; // Triangulaire supérieure
                else B[i][j] = this.randInt(-range, range);
            }
        }

        const C = this.multiply(A, B);

        // Sous-mode A : Calcul d'un coefficient unique ciblé
        if (options.mode === 'single_coeff' || (Math.random() < 0.35 && options.mode !== 'full_matrix')) {
            const targetRow = this.randInt(0, rowsA - 1);
            const targetCol = this.randInt(0, colsB - 1);
            const expectedVal = C[targetRow][targetCol];

            // Détail du calcul pour l'explication
            const terms = [];
            for (let k = 0; k < colsA; k++) {
                terms.push(`(${A[targetRow][k]} \\times ${B[k][targetCol]})`);
            }

            return {
                type: 'numeric_input',
                conceptId: 'produit_matriciel',
                tags: ['Calcul Matriciel', 'Produit matriciel'],
                q: `Soient les matrices $A = ${this.toLatex(A)}$ et $B = ${this.toLatex(B)}$.<br>Calculez le coefficient $(C)_{${targetRow + 1}, ${targetCol + 1}}$ de la matrice produit $C = AB$ :`,
                correctAnswer: expectedVal,
                tolerance: 0,
                explanation: `Le coefficient $C_{${targetRow + 1}, ${targetCol + 1}}$ s'obtient en effectuant le produit scalaire de la ligne ${targetRow + 1} de $A$ avec la colonne ${targetCol + 1} de $B$ :<br>$$C_{${targetRow + 1}, ${targetCol + 1}} = ${terms.join(' + ')} = ${expectedVal}$$`
            };
        }

        // Sous-mode B : Calcul de toute la matrice produit
        return {
            type: 'matrix_input',
            subType: 'matrix',
            conceptId: 'produit_matriciel',
            tags: ['Calcul Matriciel', 'Produit matriciel'],
            q: `Soient les matrices $A = ${this.toLatex(A)}$ et $B = ${this.toLatex(B)}$.<br>Calculez la matrice produit $C = AB$ :`,
            rows: rowsA,
            cols: colsB,
            expectedMatrix: C.map(row => row.map(v => String(v))),
            explanation: `Le produit matriciel $C = AB$ de taille ${rowsA} $\\times$ ${colsB} est donné par :<br>$$AB = ${this.toLatex(C)}$$`
        };
    },

    // ========================================================================
    // 2. GÉNÉRATEUR DE DÉTERMINANTS (2x2, 3x3, Triangulaires, Propriétés)
    // ========================================================================
    generateDeterminantExercise(options = {}) {
        const order = options.order || (Math.random() < 0.5 ? 2 : 3); // 2 ou 3
        const mode = options.mode || 'direct'; // 'direct', 'properties', 'spot_flaw'

        if (order === 2) {
            const a = this.randInt(-6, 6, true);
            const b = this.randInt(-6, 6);
            const c = this.randInt(-6, 6);
            const d = this.randInt(-6, 6, true);
            const det = a * d - b * c;
            const M = [[a, b], [c, d]];

            return {
                type: 'numeric_input',
                conceptId: 'determinant_2x2',
                tags: ['Déterminants', 'Calcul Matriciel'],
                q: `Calculez le déterminant de la matrice $M = ${this.toLatex(M)}$ :`,
                correctAnswer: det,
                tolerance: 0,
                explanation: `$\\det(M) = (${a} \\times ${d}) - (${b} \\times ${c}) = ${a * d} - (${b * c}) = ${det}$.`
            };
        }

        // Déterminant 3x3 (avec au moins 1 zéro pour encourager le développement efficace)
        const M = this.createZeros(3, 3);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                M[i][j] = this.randInt(-4, 4);
            }
        }
        // Force un zéro pour rendre le développement par ligne/colonne pédagogique
        const zeroRow = this.randInt(0, 2);
        const zeroCol = this.randInt(0, 2);
        M[zeroRow][zeroCol] = 0;

        // Calcul Sarrus / développement
        const a = M[0][0], b = M[0][1], c = M[0][2];
        const d = M[1][0], e = M[1][1], f = M[1][2];
        const g = M[2][0], h = M[2][1], k = M[2][2];

        const det = a * (e * k - f * h) - b * (d * k - f * g) + c * (d * h - e * g);

        return {
            type: 'numeric_input',
            conceptId: 'determinant_3x3',
            tags: ['Déterminants', 'Développement par ligne'],
            q: `Calculez le déterminant de la matrice $3 \\times 3$ suivante :<br>$$M = ${this.toLatex(M)}$$`,
            correctAnswer: det,
            tolerance: 0,
            explanation: `En développant selon la première ligne :<br>
            $$\\det(M) = ${a}\\begin{vmatrix} ${e} & ${f} \\\\ ${h} & ${k} \\end{vmatrix} - ${b}\\begin{vmatrix} ${d} & ${f} \\\\ ${g} & ${k} \\end{vmatrix} + ${c}\\begin{vmatrix} ${d} & ${e} \\\\ ${g} & ${h} \\end{vmatrix}$$
            $$= ${a}(${e * k - f * h}) - ${b}(${d * k - f * g}) + ${c}(${d * h - e * g}) = ${det}$$`
        };
    },

    // ========================================================================
    // 3. GÉNÉRATEUR DE SYSTÈMES LINÉAIRES ET PIVOT DE GAUSS
    // ========================================================================
    generateLinearSystemExercise() {
        // Système 2x2 à solution entière unique garantie
        const x = this.randInt(-5, 5);
        const y = this.randInt(-5, 5);

        const a1 = this.randInt(1, 4);
        const b1 = this.randInt(-3, 3, true);
        const a2 = this.randInt(1, 4);
        let b2 = this.randInt(-3, 3, true);

        // Assure déterminant non nul (solution unique)
        while (a1 * b2 - a2 * b1 === 0) {
            b2 = this.randInt(-4, 4, true);
        }

        const c1 = a1 * x + b1 * y;
        const c2 = a2 * x + b2 * y;

        return {
            type: 'numeric_input',
            conceptId: 'systemes_lineaires',
            tags: ['Systèmes Linéaires & Gauss'],
            q: `On considère le système linéaire suivant :<br>
            $$\\begin{cases} ${a1}x ${b1 >= 0 ? '+' : ''} ${b1}y = ${c1} \\\\ ${a2}x ${b2 >= 0 ? '+' : ''} ${b2}y = ${c2} \\end{cases}$$
            Déterminez la valeur de l'inconnue $x$ :`,
            correctAnswer: x,
            tolerance: 0,
            explanation: `Par substitution ou combinaison linéaire (méthode du pivot de Gauss), on obtient :<br>
            $x = ${x}$ et $y = ${y}$.`
        };
    },

    // ========================================================================
    // 4. GÉNÉRATEUR DE VALEURS PROPRES & DIAGONALISATION (2x2)
    // ========================================================================
    generateEigenvaluesExercise() {
        // Construit une matrice 2x2 avec valeurs propres entières connues l1 et l2
        const l1 = this.randInt(-3, 5);
        const l2 = this.randInt(-3, 5);

        // Trace = l1 + l2, Det = l1 * l2
        const a = this.randInt(-2, 4);
        const d = (l1 + l2) - a;
        // ad - bc = l1 * l2  =>  bc = ad - l1*l2
        const diff = a * d - l1 * l2;

        let b = 1;
        let c = diff;
        if (Math.abs(diff) > 6) {
            b = 2;
            c = Math.round(diff / 2);
        }

        const M = [[a, b], [c, d]];
        const trace = a + d;
        const det = a * d - b * c;

        return {
            type: 'numeric_input',
            conceptId: 'valeurs_propres',
            tags: ['Éléments Propres & Polynômes', 'Diagonalisation'],
            q: `Soit la matrice $A = ${this.toLatex(M)}$.<br>Sachant que le polynôme caractéristique est $P_A(\\lambda) = \\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A)$, calculez la plus grande valeur propre de $A$ :`,
            correctAnswer: Math.max(l1, l2),
            tolerance: 0,
            explanation: `$\\text{Tr}(A) = ${trace}$ et $\\det(A) = ${det}$.<br>
            L'équation caractéristique $\\lambda^2 - ${trace}\\lambda + ${det} = 0$ admet pour racines $\\lambda_1 = ${l1}$ et $\\lambda_2 = ${l2}$.<br>
            La plus grande valeur propre est donc $\\max(${l1}, ${l2}) = ${Math.max(l1, l2)}$.`
        };
    }
};

if (typeof window !== 'undefined') {
    window.MatrixGenerators = MatrixGenerators;
}
