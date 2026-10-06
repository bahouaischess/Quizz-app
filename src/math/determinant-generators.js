// ============================================================================
// DeterminantGenerators - Moteur d'Entraînement Intensif au Calcul de Déterminants
// Du Niveau 1 au Niveau 9 : Calcul effectif, saisie réelle, paramètres & astuces.
// ============================================================================

const DeterminantGenerators = {
    randInt(min, max, avoidZero = false) {
        let val = Math.floor(Math.random() * (max - min + 1)) + min;
        if (avoidZero && val === 0) val = Math.random() < 0.5 ? 1 : -1;
        return val;
    },

    toLatex(matrix) {
        const rows = matrix.map(r => r.join(' & ')).join(' \\\\ ');
        return `\\begin{pmatrix} ${rows} \\end{pmatrix}`;
    },

    toDetLatex(matrix) {
        const rows = matrix.map(r => r.join(' & ')).join(' \\\\ ');
        return `\\begin{vmatrix} ${rows} \\end{vmatrix}`;
    },

    generate(level = 1) {
        const lvl = Math.min(Math.max(Number(level) || 1, 1), 9);
        switch (lvl) {
            case 1: return this.generateLevel1();
            case 2: return this.generateLevel2();
            case 3: return this.generateLevel3();
            case 4: return this.generateLevel4();
            case 5: return this.generateLevel5();
            case 6: return this.generateLevel6();
            case 7: return this.generateLevel7();
            case 8: return this.generateLevel8();
            case 9: return this.generateLevel9();
            default: return this.generateLevel2();
        }
    },

    // ========================================================================
    // NIVEAU 1 : Déterminant 2×2 Direct
    // ========================================================================
    generateLevel1() {
        const a = this.randInt(-7, 7, true);
        const b = this.randInt(-6, 6);
        const c = this.randInt(-6, 6);
        const d = this.randInt(-7, 7, true);
        const det = a * d - b * c;
        const M = [[a, b], [c, d]];

        return {
            type: 'numeric_input',
            difficulty: 1,
            level: 1,
            conceptId: 'determinant_calcul_2x2',
            tags: ['Déterminants', 'Calcul 2×2', 'Niveau 1'],
            q: `Calculez le déterminant d'ordre 2 suivant :<br>$$\\Delta = ${this.toDetLatex(M)}$$`,
            correctAnswer: det,
            tolerance: 0,
            placeholder: 'Entrez un entier...',
            explanation: `$$\\Delta = (${a} \\times ${d}) - (${b} \\times ${c}) = ${a * d} - (${b * c}) = ${det}$$`
        };
    },

    // ========================================================================
    // NIVEAU 2 : Déterminant 3×3 avec Développement Ligne/Colonne
    // ========================================================================
    generateLevel2() {
        const M = [
            [this.randInt(-4, 4), this.randInt(-4, 4), this.randInt(-4, 4)],
            [this.randInt(-4, 4), this.randInt(-4, 4), this.randInt(-4, 4)],
            [this.randInt(-4, 4), this.randInt(-4, 4), this.randInt(-4, 4)]
        ];
        // Place stratégiquement deux zéros sur une ligne ou colonne pour encourager le choix judicieux
        const pivotRow = this.randInt(0, 2);
        const nonZeroCol = this.randInt(0, 2);
        for (let j = 0; j < 3; j++) {
            if (j !== nonZeroCol) M[pivotRow][j] = 0;
            else if (M[pivotRow][j] === 0) M[pivotRow][j] = this.randInt(1, 4);
        }

        const a = M[0][0], b = M[0][1], c = M[0][2];
        const d = M[1][0], e = M[1][1], f = M[1][2];
        const g = M[2][0], h = M[2][1], k = M[2][2];
        const det = a * (e * k - f * h) - b * (d * k - f * g) + c * (d * h - e * g);

        return {
            type: 'numeric_input',
            difficulty: 2,
            level: 2,
            conceptId: 'determinant_calcul_3x3',
            tags: ['Déterminants', 'Développement par Ligne', 'Niveau 2'],
            q: `Calculez le déterminant $3 \\times 3$ suivant en développant selon la ligne ou colonne la plus efficace :<br>
            $$\\Delta = ${this.toDetLatex(M)}$$`,
            correctAnswer: det,
            tolerance: 0,
            placeholder: 'Entrez un entier...',
            explanation: `En développant selon la ligne ${pivotRow + 1} (qui comporte deux zéros), le calcul se réduit à un seul sous-déterminant d'ordre 2 :<br>$$\\Delta = ${det}$$`
        };
    },

    // ========================================================================
    // NIVEAU 3 : Déterminant 3×3 avec Fractions
    // ========================================================================
    generateLevel3() {
        const d1 = this.randInt(2, 4);
        const d2 = this.randInt(2, 3);
        const num1 = this.randInt(1, 3);
        const num2 = this.randInt(1, 3);

        const a = `${num1}/${d1}`;
        const b = 1;
        const c = 0;
        const d = 0;
        const e = `${num2}/${d2}`;
        const f = 1;
        const g = 1;
        const h = 0;
        const k = 2;

        const valA = num1 / d1;
        const valE = num2 / d2;
        // Det = a * (e*2 - 0) - b * (0 - 1) = a * 2e + 1 = 2 * (num1*num2)/(d1*d2) + 1
        const detNum = 2 * num1 * num2 + d1 * d2;
        const detDen = d1 * d2;

        const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
        const gDiv = gcd(detNum, detDen);
        const fracStr = (detDen / gDiv === 1) ? String(detNum / gDiv) : `${detNum / gDiv}/${detDen / gDiv}`;

        const M = [
            [`\\frac{${num1}}{${d1}}`, `1`, `0`],
            [`0`, `\\frac{${num2}}{${d2}}`, `1`],
            [`1`, `0`, `2`]
        ];

        return {
            type: 'numeric_input',
            difficulty: 3,
            level: 3,
            conceptId: 'determinant_fractions',
            tags: ['Déterminants', 'Fractions Rationnelles', 'Niveau 3'],
            q: `Calculez la valeur exacte (entière ou fractionnaire) du déterminant à coefficients rationnels suivant :<br>
            $$\\Delta = ${this.toDetLatex(M)}$$`,
            correctAnswer: fracStr,
            tolerance: 1e-5,
            placeholder: 'Ex: 7/6 ou 5',
            explanation: `En développant selon la première ligne :<br>
            $$\\Delta = \\frac{${num1}}{${d1}} \\left( 2 \\times \\frac{${num2}}{${d2}} - 0 \\right) - 1 \\left( 0 - 1 \\right) = \\frac{2 \\times ${num1 * num2}}{${d1 * d2}} + 1 = ${fracStr}$$`
        };
    },

    // ========================================================================
    // NIVEAU 4 : Opérations Élémentaires (Combinaisons L_i <- L_i - lambda L_j)
    // ========================================================================
    generateLevel4() {
        const x = this.randInt(2, 5);
        const y = this.randInt(1, 3);
        const z = this.randInt(-3, 3);
        // Matrice où soustraire L1 à L2 et L3 simplifie immédiatement
        const M = [
            [1, x, y],
            [1, x + 2, y],
            [1, x, y + 3]
        ];
        // L2 - L1 = [0, 2, 0], L3 - L1 = [0, 0, 3] => Det = 1 * (2 * 3) = 6
        const det = 6;

        return {
            type: 'numeric_input',
            difficulty: 4,
            level: 4,
            conceptId: 'determinant_operations_elementaires',
            tags: ['Déterminants', 'Opérations Élémentaires', 'Pivot de Gauss', 'Niveau 4'],
            q: `En effectuant les opérations sur les lignes $L_2 \\leftarrow L_2 - L_1$ et $L_3 \\leftarrow L_3 - L_1$, calculez sans développer :<br>
            $$\\Delta = ${this.toDetLatex(M)}$$`,
            correctAnswer: det,
            tolerance: 0,
            placeholder: 'Entrez un entier...',
            explanation: `Après $L_2 \\leftarrow L_2 - L_1$ et $L_3 \\leftarrow L_3 - L_1$, la matrice devient triangulaire supérieure :<br>
            $$\\begin{vmatrix} 1 & ${x} & ${y} \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{vmatrix} = 1 \\times 2 \\times 3 = 6$$`
        };
    },

    // ========================================================================
    // NIVEAU 5 : Déterminant avec Paramètre D(a) = 0 (Saisie des Racines)
    // ========================================================================
    generateLevel5() {
        // D(a) = a(a^2 - 2) ou D(a) = a^2 - c
        const c = this.randInt(1, 4);
        const r1 = c;
        const r2 = -c;

        const M = [
            [`a`, `1`, `0`],
            [`${c * c}`, `a`, `0`],
            [`2`, `3`, `1`]
        ];
        // En développant selon C3 : 1 * (a^2 - c^2) = (a - c)(a + c) = 0 => a = c ou a = -c

        return {
            type: 'numeric_input',
            isSet: true,
            subType: 'set',
            difficulty: 5,
            level: 5,
            conceptId: 'determinant_parametre_racines',
            tags: ['Déterminants', 'Paramètres', 'Équation D(a)=0', 'Niveau 5'],
            q: `On considère pour tout $a \\in \\mathbb{R}$ le déterminant :<br>
            $$D(a) = ${this.toDetLatex(M)}$$
            Déterminez toutes les valeurs réelles de $a$ pour lesquelles $D(a) = 0$ (séparez les valeurs par une virgule) :`,
            correctAnswer: `${r1}, ${r2}`,
            placeholder: `Ex: ${r1}, ${r2}`,
            explanation: `En développant selon la troisième colonne :<br>
            $$D(a) = 1 \\times \\begin{vmatrix} a & 1 \\\\ ${c * c} & a \\end{vmatrix} = a^2 - ${c * c}$$
            $D(a) = 0 \\iff a^2 = ${c * c} \\iff a = ${c}$ ou $a = ${-c}$. L'ensemble des solutions est $\\{ ${c}, ${-c} \\}$.`
        };
    },

    // ========================================================================
    // NIVEAU 6 : Déterminant 4×4 avec Structure Exploitable
    // ========================================================================
    generateLevel6() {
        const d1 = this.randInt(2, 3);
        const d2 = this.randInt(2, 4);
        const d3 = this.randInt(1, 3);
        const d4 = this.randInt(2, 3);

        const M = [
            [d1, this.randInt(1, 3), 0, 0],
            [0, d2, this.randInt(1, 2), 0],
            [0, 0, d3, this.randInt(1, 3)],
            [0, 0, 0, d4]
        ];
        const det = d1 * d2 * d3 * d4;

        return {
            type: 'numeric_input',
            difficulty: 6,
            level: 6,
            conceptId: 'determinant_4x4_structure',
            tags: ['Déterminants', 'Ordre 4×4', 'Triangulaire', 'Niveau 6'],
            q: `Calculez le déterminant $4 \\times 4$ suivant :<br>
            $$\\Delta = ${this.toDetLatex(M)}$$`,
            correctAnswer: det,
            tolerance: 0,
            placeholder: 'Entrez un entier...',
            explanation: `La matrice étant triangulaire supérieure d'ordre 4, son déterminant est le produit de ses 4 éléments diagonaux :<br>
            $$\\Delta = ${d1} \\times ${d2} \\times ${d3} \\times ${d4} = ${det}$$`
        };
    },

    // ========================================================================
    // NIVEAU 7 : Déterminant par Blocs
    // ========================================================================
    generateLevel7() {
        const a1 = this.randInt(2, 4);
        const a2 = this.randInt(1, 3);
        const detA = a1 * a2;

        const c1 = this.randInt(2, 3);
        const c2 = this.randInt(2, 4);
        const detC = c1 * c2 - 1; // 2x2 avec coeff 1

        const totalDet = detA * detC;

        const M = [
            [a1, 0, this.randInt(1, 4), this.randInt(1, 4)],
            [this.randInt(1, 3), a2, this.randInt(1, 4), this.randInt(1, 4)],
            [0, 0, c1, 1],
            [0, 0, 1, c2]
        ];

        return {
            type: 'numeric_input',
            difficulty: 7,
            level: 7,
            conceptId: 'determinant_par_blocs',
            tags: ['Déterminants', 'Matrices par Blocs', 'Niveau 7'],
            q: `Calculez le déterminant de la matrice triangulaire par blocs $M = \\begin{pmatrix} A & B \\\\ 0 & C \\end{pmatrix}$ d'ordre 4 :<br>
            $$\\det(M) = ${this.toDetLatex(M)}$$`,
            correctAnswer: totalDet,
            tolerance: 0,
            placeholder: 'Entrez un entier...',
            explanation: `Pour une matrice triangulaire par blocs : $\\det(M) = \\det(A) \\times \\det(C)$.<br>
            $\\det(A) = ${a1} \\times ${a2} = ${detA}$<br>
            $\\det(C) = (${c1} \\times ${c2}) - 1 = ${detC}$<br>
            $$\\det(M) = ${detA} \\times ${detC} = ${totalDet}$$`
        };
    },

    // ========================================================================
    // NIVEAU 8 : Astuce d'Addition de Colonnes (C_1 <- C_1 + C_2 + C_3)
    // ========================================================================
    generateLevel8() {
        const a = this.randInt(2, 5);
        const b = this.randInt(1, 3);
        // Matrice circulante symétrique 3x3 :
        // [a, b, b]
        // [b, a, b]
        // [b, b, a]
        // Somme des colonnes C1 <- C1+C2+C3 donne (a + 2b) en facteur
        // Déterminant = (a + 2b)(a - b)^2
        const det = (a + 2 * b) * Math.pow(a - b, 2);
        const M = [
            [a, b, b],
            [b, a, b],
            [b, b, a]
        ];

        return {
            type: 'numeric_input',
            difficulty: 8,
            level: 8,
            conceptId: 'determinant_astuce_circulante',
            tags: ['Déterminants', 'Astuce Somme de Colonnes', 'Circulante', 'Niveau 8'],
            q: `En effectuant l'opération sur les colonnes $C_1 \\leftarrow C_1 + C_2 + C_3$ pour factoriser, calculez :<br>
            $$\\Delta = ${this.toDetLatex(M)}$$`,
            correctAnswer: det,
            tolerance: 0,
            placeholder: 'Entrez la valeur calculée...',
            explanation: `L'opération $C_1 \\leftarrow C_1 + C_2 + C_3$ met en facteur commun $(a + 2b) = ${a + 2*b}$ sur la première colonne.<br>
            En soustrayant ensuite $L_2 \\leftarrow L_2 - L_1$ et $L_3 \\leftarrow L_3 - L_1$, on obtient :<br>
            $$\\Delta = (a + 2b)(a - b)^2 = (${a + 2*b}) \\times (${a - b})^2 = ${det}$$`
        };
    },

    // ========================================================================
    // NIVEAU 9 : Problème Combiné (Calcul Det -> Inversibilité -> Rang)
    // ========================================================================
    generateLevel9() {
        const m = this.randInt(2, 5);
        // Matrice A(m) 3x3 telle que det = m - 3
        const M = [
            [1, 1, 1],
            [1, 2, 3],
            [2, 3, m]
        ];
        // Det = (2m - 9) - (m - 6) + (3 - 4) = m - 4
        const criticalM = 4;

        return {
            type: 'numeric_input',
            difficulty: 9,
            level: 9,
            conceptId: 'determinant_probleme_combine',
            tags: ['Déterminants', 'Problème Combiné', 'Rang & Inversibilité', 'Niveau 9'],
            q: `Soit la matrice $A(m) = ${this.toLatex(M)}$.<br>
            Pour quelle valeur entière du paramètre $m$ le rang de $A(m)$ chute-t-il à $\\text{rg}(A(m)) < 3$ (rendant la matrice non inversible) ?`,
            correctAnswer: criticalM,
            tolerance: 0,
            placeholder: 'Valeur entière de m...',
            explanation: `Le rang est strictement inférieur à 3 si et seulement si $\\det(A(m)) = 0$.<br>
            Calcul du déterminant par opérations sur les lignes ($L_2 \\leftarrow L_2 - L_1$, $L_3 \\leftarrow L_3 - 2L_1$) :<br>
            $$\\begin{vmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 2 \\\\ 0 & 1 & m - 2 \\end{vmatrix} = (m - 2) - 2 = m - 4$$
            Le rang chute si et seulement si $m - 4 = 0 \\iff m = ${criticalM}$.`
        };
    }
};

if (typeof window !== 'undefined') {
    window.DeterminantGenerators = DeterminantGenerators;
}
