// ============================================================================
// AlgebraGenerators - Moteur d'Entraînement Pratique d'Algèbre Linéaire
// Calcul effectif, résolution de systèmes, spectres, rangs, puissances et paramètres.
// PRODUCTION D'UNE RÉPONSE RÉELLE (Saisie numérique, matricielle et ensembles)
// ============================================================================

const AlgebraGenerators = {
    randInt(min, max, avoidZero = false) {
        let val = Math.floor(Math.random() * (max - min + 1)) + min;
        if (avoidZero && val === 0) val = Math.random() < 0.5 ? 1 : -1;
        return val;
    },

    toLatex(matrix) {
        const rows = matrix.map(r => r.join(' & ')).join(' \\\\ ');
        return `\\begin{pmatrix} ${rows} \\end{pmatrix}`;
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
            default: return this.generateLevel5();
        }
    },

    // ========================================================================
    // NIVEAU 1 : Calcul de Trace et Produit Matriciel Ciblé
    // ========================================================================
    generateLevel1() {
        const type = Math.random() < 0.5 ? 'trace' : 'coeff';

        if (type === 'trace') {
            const d1 = this.randInt(-5, 6);
            const d2 = this.randInt(-5, 6);
            const d3 = this.randInt(-5, 6);
            const M = [
                [d1, this.randInt(-3, 3), this.randInt(-3, 3)],
                [this.randInt(-3, 3), d2, this.randInt(-3, 3)],
                [this.randInt(-3, 3), this.randInt(-3, 3), d3]
            ];
            const traceVal = d1 + d2 + d3;

            return {
                type: 'numeric_input',
                difficulty: 1,
                level: 1,
                conceptId: 'algebre_calcul_trace',
                tags: ['Calcul Matriciel', 'Trace', 'Niveau 1'],
                q: `Calculez la trace de la matrice suivante :<br>$$M = ${this.toLatex(M)}$$
                $\\text{Tr}(M) = $`,
                correctAnswer: traceVal,
                tolerance: 0,
                placeholder: 'Valeur de la trace...',
                explanation: `La trace est la somme des éléments diagonaux : $\\text{Tr}(M) = (${d1}) + (${d2}) + (${d3}) = ${traceVal}$.`
            };
        } else {
            const A = [
                [this.randInt(-3, 4), this.randInt(-3, 4)],
                [this.randInt(-3, 4), this.randInt(-3, 4)]
            ];
            const B = [
                [this.randInt(-3, 4), this.randInt(-3, 4)],
                [this.randInt(-3, 4), this.randInt(-3, 4)]
            ];
            const r = this.randInt(0, 1);
            const c = this.randInt(0, 1);
            const expected = A[r][0] * B[0][c] + A[r][1] * B[1][c];

            return {
                type: 'numeric_input',
                difficulty: 1,
                level: 1,
                conceptId: 'algebre_calcul_produit_coeff',
                tags: ['Calcul Matriciel', 'Produit', 'Niveau 1'],
                q: `Soient $A = ${this.toLatex(A)}$ et $B = ${this.toLatex(B)}$.<br>
                Calculez le coefficient $(AB)_{${r+1},${c+1}}$ du produit matriciel :`,
                correctAnswer: expected,
                tolerance: 0,
                placeholder: 'Valeur numérique...',
                explanation: `$(AB)_{${r+1},${c+1}} = (${A[r][0]} \\times ${B[0][c]}) + (${A[r][1]} \\times ${B[1][c]}) = ${expected}$.`
            };
        }
    },

    // ========================================================================
    // NIVEAU 2 : Puissances de Matrices & Matrices Nilpotentes
    // ========================================================================
    generateLevel2() {
        const a = this.randInt(1, 3);
        const b = this.randInt(2, 4);
        // Matrice triangulaire supérieure A = [[a, b], [0, a]]
        // A^2 = [[a^2, 2ab], [0, a^2]]
        const M = [
            [a, b],
            [0, a]
        ];
        const M2 = [
            [String(a * a), String(2 * a * b)],
            ['0', String(a * a)]
        ];

        return {
            type: 'matrix_input',
            subType: 'matrix',
            difficulty: 2,
            level: 2,
            conceptId: 'algebre_puissance_matrice',
            tags: ['Calcul Matriciel', 'Puissances A^2', 'Niveau 2'],
            q: `Calculez la matrice carrée $M^2$ pour la matrice suivante :<br>
            $$M = ${this.toLatex(M)}$$`,
            rows: 2,
            cols: 2,
            expectedMatrix: M2,
            explanation: `$$M^2 = ${this.toLatex(M)} ${this.toLatex(M)} = \\begin{pmatrix} ${a}^2 & ${a}\\times${b} + ${b}\\times${a} \\\\ 0 & ${a}^2 \\end{pmatrix} = ${this.toLatex(M2)}$$`
        };
    },

    // ========================================================================
    // NIVEAU 3 : Résolution de Systèmes Linéaires par Pivot de Gauss
    // ========================================================================
    generateLevel3() {
        const x = this.randInt(-4, 5);
        const y = this.randInt(-4, 5);
        const a1 = this.randInt(1, 3);
        const b1 = this.randInt(-3, 3, true);
        const a2 = this.randInt(1, 3);
        let b2 = this.randInt(-3, 3, true);
        while (a1 * b2 - a2 * b1 === 0) {
            b2 = this.randInt(-4, 4, true);
        }

        const c1 = a1 * x + b1 * y;
        const c2 = a2 * x + b2 * y;

        return {
            type: 'numeric_input',
            difficulty: 3,
            level: 3,
            conceptId: 'algebre_systeme_gauss',
            tags: ['Systèmes Linéaires', 'Pivot de Gauss', 'Niveau 3'],
            q: `Résolvez le système linéaire suivant et donnez la valeur de l'inconnue $x$ :<br>
            $$\\begin{cases} ${a1}x ${b1 >= 0 ? '+' : ''} ${b1}y = ${c1} \\\\ ${a2}x ${b2 >= 0 ? '+' : ''} ${b2}y = ${c2} \\end{cases}$$
            $x = $`,
            correctAnswer: x,
            tolerance: 0,
            placeholder: 'Valeur de x...',
            explanation: `Par élimination ou combinaison $L_2 \\leftarrow ${a1}L_2 - ${a2}L_1$ : on trouve $y = ${y}$, puis en réinjectant : $x = ${x}$.`
        };
    },

    // ========================================================================
    // NIVEAU 4 : Calcul Effectif du Rang et Dimension du Noyau
    // ========================================================================
    generateLevel4() {
        // Matrice 3x3 de rang 2 garanti (L3 = L1 + L2)
        const a = this.randInt(1, 3);
        const b = this.randInt(-2, 3);
        const c = this.randInt(1, 4);
        const d = this.randInt(-3, 2);
        const M = [
            [a, b, 1],
            [c, d, 2],
            [a + c, b + d, 3]
        ];

        return {
            type: 'numeric_input',
            difficulty: 4,
            level: 4,
            conceptId: 'algebre_calcul_rang',
            tags: ['Espaces Vectoriels', 'Calcul de Rang', 'Théorème du Rang', 'Niveau 4'],
            q: `Déterminez le rang de la matrice suivante par échelonnement :<br>
            $$M = ${this.toLatex(M)}$$
            $\\text{rg}(M) = $`,
            correctAnswer: 2,
            tolerance: 0,
            placeholder: 'Entrez un entier (1, 2 ou 3)...',
            explanation: `La 3ᵉ ligne est la somme exacte des deux premières ($L_3 = L_1 + L_2$). Les deux premières lignes n'étant pas colinéaires, la matrice est de rang 2. Par le théorème du rang, $\\dim(\\ker M) = 3 - 2 = 1$.`
        };
    },

    // ========================================================================
    // NIVEAU 5 : Spectre Sp(A) — Calcul des Valeurs Propres (Saisie de Racines)
    // ========================================================================
    generateLevel5() {
        const l1 = this.randInt(-3, 3);
        const l2 = this.randInt(l1 + 1, 5); // Deux valeurs propres entières distinctes
        const a = this.randInt(-2, 3);
        const d = (l1 + l2) - a;
        const diff = a * d - l1 * l2;
        let b = 1;
        let c = diff;

        const M = [[a, b], [c, d]];
        const trace = a + d;
        const det = a * d - b * c;

        return {
            type: 'numeric_input',
            isSet: true,
            subType: 'set',
            difficulty: 5,
            level: 5,
            conceptId: 'algebre_calcul_spectre',
            tags: ['Réduction', 'Valeurs Propres', 'Spectre Sp(A)', 'Niveau 5'],
            q: `Déterminez le spectre de la matrice $A$ (l'ensemble des valeurs propres dans $\\mathbb{R}$, séparées par une virgule) :<br>
            $$A = ${this.toLatex(M)}$$
            $\\text{Sp}(A) = \\{$ [ __________ ] $\\}$`,
            correctAnswer: `${l1}, ${l2}`,
            placeholder: `Ex: ${l1}, ${l2}`,
            explanation: `Le polynôme caractéristique est :<br>
            $$\\chi_A(\\lambda) = \\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = \\lambda^2 - (${trace})\\lambda + (${det}) = (\\lambda - ${l1})(\\lambda - ${l2})$$<br>
            Les racines sont $\\lambda_1 = ${l1}$ et $\\lambda_2 = ${l2}$. Le spectre est $\\text{Sp}(A) = \\{${l1}, ${l2}\\}$.`
        };
    },

    // ========================================================================
    // NIVEAU 6 : Dimension des Sous-Espaces Propres dim(E_lambda)
    // ========================================================================
    generateLevel6() {
        const val = this.randInt(2, 4);
        // Matrice triangulaire 3x3 avec valeur propre multiple 'val' de multiplicité 2
        // mais sous-espace propre de dimension 1 (non diagonalisable)
        const M = [
            [val, 1, 0],
            [0, val, 0],
            [0, 0, val + 2]
        ];

        return {
            type: 'numeric_input',
            difficulty: 6,
            level: 6,
            conceptId: 'algebre_dimension_espace_propre',
            tags: ['Réduction', 'Sous-Espaces Propres', 'Multiplicité Géométrique', 'Niveau 6'],
            q: `Pour la matrice $M = ${this.toLatex(M)}$, calculez la dimension du sous-espace propre associé à la valeur propre double $\\lambda = ${val}$ :<br>
            $$\\dim(E_{${val}}) = \\dim(\\ker(M - ${val}I_3)) = $$`,
            correctAnswer: 1,
            tolerance: 0,
            placeholder: 'Entrez un entier...',
            explanation: `On calcule la matrice $M - ${val}I_3 = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}$.<br>
            Cette matrice comporte deux colonnes indépendantes, son rang est donc $\\text{rg}(M - ${val}I_3) = 2$.<br>
            D'après le théorème du rang : $\\dim(E_{${val}}) = 3 - 2 = 1$.`
        };
    },

    // ========================================================================
    // NIVEAU 7 : Diagonalisation à Paramètres A(a) (Valeur Critique de a)
    // ========================================================================
    generateLevel7() {
        const val = this.randInt(2, 5);
        const M = [
            [val, 'a'],
            [0, val]
        ];

        return {
            type: 'numeric_input',
            difficulty: 7,
            level: 7,
            conceptId: 'algebre_parametre_diagonalisation',
            tags: ['Réduction', 'Matrices à Paramètres', 'Condition de Diagonalisabilité', 'Niveau 7'],
            q: `On considère la matrice dépendante du paramètre $a \\in \\mathbb{R}$ :<br>
            $$A(a) = \\begin{pmatrix} ${val} & a \\\\ 0 & ${val} \\end{pmatrix}$$
            Quelle est l'unique valeur réelle de $a$ pour laquelle la matrice $A(a)$ est diagonalisable sur $\\mathbb{R}$ ?`,
            correctAnswer: 0,
            tolerance: 0,
            placeholder: 'Valeur de a...',
            explanation: `La seule valeur propre de $A(a)$ est $\\lambda = ${val}$ avec multiplicité algébrique 2.<br>
            Pour $a \\neq 0$, $A(a) - ${val}I_2 = \\begin{pmatrix} 0 & a \\\\ 0 & 0 \\end{pmatrix}$ est de rang 1, d'où $\\dim(\\ker) = 1 < 2$ (non diagonalisable).<br>
            La matrice n'est donc diagonalisable que si $a = 0$ (où elle est directement diagonale scalaire).`
        };
    },

    // ========================================================================
    // B1 — DISJONCTION DE CAS À PARAMÈTRE A(m) (Rang, Inversibilité, Noyau)
    // ========================================================================
    generateCaseDisjunctionExercise() {
        const variants = [
            {
                // A(m) = [[1, m, 1], [0, 2, m], [1, 1, m]]
                // det = m^2 + m - 2 = (m - 1)(m + 2)
                matrixLatex: '\\begin{pmatrix} 1 & m & 1 \\\\ 0 & 2 & m \\\\ 1 & 1 & m \\end{pmatrix}',
                detFormula: 'm^2 + m - 2',
                roots: [1, -2],
                rootsDisplay: '1, -2',
                genericRank: 3,
                criticalRank: 2,
                kerDimCritical: 1,
                sampleCritical: 1,
                sampleCriticalAlt: -2
            },
            {
                // A(m) = [[m, 1, 1], [1, m, 1], [1, 1, m]]
                // det = (m + 2)(m - 1)^2
                matrixLatex: '\\begin{pmatrix} m & 1 & 1 \\\\ 1 & m & 1 \\\\ 1 & 1 & m \\end{pmatrix}',
                detFormula: '(m + 2)(m - 1)^2',
                roots: [1, -2],
                rootsDisplay: '1, -2',
                genericRank: 3,
                criticalRank: 1, // for m = 1
                kerDimCritical: 2,
                sampleCritical: 1,
                sampleCriticalAlt: -2
            },
            {
                // A(m) = [[1, 0, m], [2, m, 0], [0, 1, 2]]
                // det = 2m + 2m^2 = 2m(m + 1)
                matrixLatex: '\\begin{pmatrix} 1 & 0 & m \\\\ 2 & m & 0 \\\\ 0 & 1 & 2 \\end{pmatrix}',
                detFormula: '2m^2 + 2m',
                roots: [0, -1],
                rootsDisplay: '0, -1',
                genericRank: 3,
                criticalRank: 2,
                kerDimCritical: 1,
                sampleCritical: 0,
                sampleCriticalAlt: -1
            }
        ];

        const chosen = variants[Math.floor(Math.random() * variants.length)];

        return {
            id: `case-disjunction-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            type: 'multi_step',
            discipline: 'Algèbre Linéaire',
            _chapter: 'Systèmes Linéaires & Rang',
            _concept: 'Disjonction de Cas à Paramètre',
            trainingFamily: 'reasoning',
            title: `Disjonction de cas selon le paramètre $m$ : $A(m)$`,
            difficulty: 6,
            xp: 100,
            intro: `On considère la famille de matrices réelles dépendantes du paramètre réel $m$ :
                $$A(m) = ${chosen.matrixLatex}$$
                L'objectif est d'étudier l'inversibilité, le rang et le noyau de $A(m)$ selon toutes les valeurs possibles de $m \\in \\mathbb{R}$.`,
            steps: [
                {
                    shortLabel: 'Valeurs critiques',
                    title: 'Étape 1 : Racines du déterminant $\\det(A(m)) = 0$',
                    instruction: `Calculez $\\det(A(m))$. Donnez les valeurs réelles critiques de $m$ annulant le déterminant, séparées par une virgule (ex: 1, -2) :`,
                    type: 'numeric',
                    isSet: true,
                    correctAnswer: chosen.rootsDisplay,
                    explanation: `Le calcul direct donne $\\det(A(m)) = ${chosen.detFormula}$. Le déterminant s'annule si et seulement si $m \\in \\{${chosen.rootsDisplay}\\}$.`
                },
                {
                    shortLabel: 'Inversibilité',
                    title: 'Étape 2 : Inversibilité et Rang générique ($m \\notin \\{${chosen.rootsDisplay}\\}$)',
                    instruction: `Pour tout $m \\notin \\{${chosen.rootsDisplay}\\}$, quelle est la valeur du rang $\\text{rg}(A(m))$ ?`,
                    type: 'numeric',
                    correctAnswer: `${chosen.genericRank}`,
                    explanation: `Pour $m \\notin \\{${chosen.rootsDisplay}\\}$, le déterminant est non nul. La matrice $A(m)$ est donc inversible et de rang maximal $\\text{rg}(A(m)) = ${chosen.genericRank}$.`
                },
                {
                    shortLabel: `Rang en m=${chosen.sampleCritical}`,
                    title: `Étape 3 : Rang pour la valeur critique particulière $m = ${chosen.sampleCritical}$`,
                    instruction: `Pour $m = ${chosen.sampleCritical}$, calculez le rang de la matrice $A(${chosen.sampleCritical})$ :`,
                    type: 'numeric',
                    correctAnswer: `${chosen.criticalRank}`,
                    explanation: `En remplaçant $m$ par ${chosen.sampleCritical}, les lignes deviennent liées et la réduction échelonnée de Gauss montre que le rang vaut $\\text{rg}(A(${chosen.sampleCritical})) = ${chosen.criticalRank}$.`
                },
                {
                    shortLabel: 'Noyau Ker',
                    title: `Étape 4 : Dimension du noyau $\\dim(\\ker(A(${chosen.sampleCritical})))$`,
                    instruction: `D'après le théorème du rang appliqué dans $\\mathbb{R}^3$, quelle est la dimension du noyau de $A(${chosen.sampleCritical})$ ?`,
                    type: 'numeric',
                    correctAnswer: `${chosen.kerDimCritical}`,
                    explanation: `Théorème du rang : $\\dim(\\ker(A)) + \\text{rg}(A) = 3$.<br>
                        Donc $\\dim(\\ker(A(${chosen.sampleCritical}))) = 3 - ${chosen.criticalRank} = ${chosen.kerDimCritical}$.`
                }
            ],
            conclusion: `Étude paramétrique complète achevée avec succès. Vous avez établi la disjonction de cas rigoureuse entre le cas générique inversible ($m \\notin \\{${chosen.rootsDisplay}\\}$) et les cas singuliers.`
        };
    },

    // ========================================================================
    // NOUVEAU : PROGRESSION PAR AUTONOMIE EN RÉDUCTION / DIAGONALISATION
    // Niveau 1 (Guidé), Niveau 2 (Moins guidé / Choix de méthode), Niveau 3 (Autonomie complète)
    // Variantes A à G : SANS donner le polynôme caractéristique systématiquement !
    // ========================================================================
    generateReductionProgression(autonomyLevel = 'semi_guided') {
        const idSuffix = `${Date.now()}-${Math.floor(Math.random() * 1000)}`;

        // Choix de la matrice 3x3 avec spectre entier connu
        // Cas A : Matrice avec 3 valeurs propres distinctes (diagonalisable)
        // Cas B : Matrice avec valeur propre multiple et dim(E_lambda) < mult (non diagonalisable, mais trigonalisable)
        // Cas C : Matrice scalaire par blocs avec dim(E_lambda) = mult (diagonalisable)
        const scenarios = [
            {
                type: 'distinct',
                l1: 1, l2: 2, l3: 3,
                matrix: [
                    [2, 0, 1],
                    [0, 2, 0],
                    [1, 0, 2] // eigenvalues 1, 2, 3
                ],
                polyLatex: '(X - 1)(X - 2)(X - 3)',
                polyRoots: '1, 2, 3',
                isDiag: true,
                isTrig: true,
                reason: 'Le polynôme caractéristique est scindé à racines simples dans $\\mathbb{R}$ ($1, 2, 3$). La matrice est donc diagonalisable sur $\\mathbb{R}$.'
            },
            {
                type: 'non_diag_trig',
                l1: 2, l2: 2, l3: 3,
                matrix: [
                    [2, 1, 0],
                    [0, 2, 0],
                    [0, 0, 3]
                ],
                polyLatex: '(X - 2)^2(X - 3)',
                polyRoots: '2, 3',
                mult2_alg: 2,
                mult2_geom: 1,
                isDiag: false,
                isTrig: true,
                reason: '$\\chi_A(X) = (X - 2)^2(X - 3)$ est scindé sur $\\mathbb{R}$, donc $A$ est trigonalisable. Cependant $\\dim(E_2) = \\dim(\\ker(A - 2I_3)) = 3 - \\text{rg}(A - 2I_3) = 3 - 2 = 1 < 2$ (multiplicité algébrique). Donc $A$ n\'est PAS diagonalisable.'
            },
            {
                type: 'diag_multiple',
                l1: 1, l2: 3, l3: 3,
                matrix: [
                    [1, 0, 0],
                    [0, 3, 0],
                    [0, 0, 3]
                ],
                polyLatex: '(X - 1)(X - 3)^2',
                polyRoots: '1, 3',
                mult3_alg: 2,
                mult3_geom: 2,
                isDiag: true,
                isTrig: true,
                reason: '$\\chi_A(X) = (X - 1)(X - 3)^2$ est scindé. Pour la valeur propre double 3, $A - 3I_3 = \\text{diag}(-2, 0, 0)$ est de rang 1, donc $\\dim(E_3) = 3 - 1 = 2$. Multiplicité algébrique = dimension de l\'espace propre : la matrice est diagonalisable.'
            }
        ];

        const chosen = scenarios[Math.floor(Math.random() * scenarios.length)];

        // ==========================================
        // 1. NIVEAU GUIDÉ (Niveau 1)
        // ==========================================
        if (autonomyLevel === 'guided') {
            return {
                id: `reduction-guided-${idSuffix}`,
                type: 'multi_step',
                discipline: 'Algèbre Linéaire',
                _chapter: 'Réduction des Endomorphismes',
                _concept: 'Diagonalisation & Spectre',
                autonomyLevel: 'guided',
                trainingFamily: 'reasoning',
                difficulty: 5,
                title: 'Étude Guidée pas à pas de Réduction',
                intro: `Soit la matrice $A = ${this.toLatex(chosen.matrix)}$.
                Suivez la démarche pour étudier sa réduction sur $\\mathbb{R}$.`,
                steps: [
                    {
                        shortLabel: 'Valeurs propres',
                        title: 'Étape 1 : Racines du polynôme caractéristique',
                        instruction: `Déterminez les valeurs propres réelles de $A$, séparées par une virgule (ex: 1, 2) :`,
                        type: 'numeric',
                        isSet: true,
                        correctAnswer: chosen.polyRoots,
                        explanation: `Le calcul du déterminant $\\det(A - XI_3)$ donne $\\chi_A(X) = ${chosen.polyLatex}$. Les valeurs propres sont donc $\\{${chosen.polyRoots}\\}$.`
                    },
                    {
                        shortLabel: 'Espace propre',
                        title: `Étape 2 : Dimension du sous-espace propre $E_{${chosen.l2}}$`,
                        instruction: `Calculez la dimension du sous-espace propre $E_{${chosen.l2}} = \\ker(A - ${chosen.l2}I_3)$ :`,
                        type: 'numeric',
                        correctAnswer: `${chosen.type === 'non_diag_trig' ? 1 : (chosen.type === 'diag_multiple' ? 2 : 1)}`,
                        explanation: `Par le théorème du rang, $\\dim(E_{${chosen.l2}}) = 3 - \\text{rg}(A - ${chosen.l2}I_3)$.`
                    },
                    {
                        shortLabel: 'Conclusion',
                        title: 'Étape 3 : Diagonalisabilité',
                        instruction: `La matrice $A$ est-elle diagonalisable sur $\\mathbb{R}$ ? (Tapez 1 pour OUI, 0 pour NON)`,
                        type: 'numeric',
                        correctAnswer: chosen.isDiag ? '1' : '0',
                        explanation: chosen.reason
                    }
                ],
                conclusion: 'Bravo ! Vous avez mené l\'analyse pas à pas selon le théorème spectral fondamental.'
            };
        }

        // ==========================================
        // 2. NIVEAU MOINS GUIDÉ (Niveau 2 : Choix de méthode)
        // L'étudiant ne reçoit PAS le polynôme ni les étapes intermédiaires
        // ==========================================
        if (autonomyLevel === 'semi_guided') {
            return {
                id: `reduction-semiguided-${idSuffix}`,
                type: 'multi_step',
                discipline: 'Algèbre Linéaire',
                _chapter: 'Réduction des Endomorphismes',
                _concept: 'Diagonalisation & Réduction',
                autonomyLevel: 'semi_guided',
                trainingFamily: 'reasoning',
                difficulty: 7,
                title: 'Étude de Diagonalisabilité (Méthode Libre)',
                intro: `Soit la matrice $A = ${this.toLatex(chosen.matrix)}$.
                <br><strong>Consigne :</strong> Étudiez la diagonalisabilité de $A$ sur $\\mathbb{R}$.
                Vous devez décider vous-même de la stratégie (polynôme caractéristique, multiplicités algébriques vs géométriques).`,
                steps: [
                    {
                        shortLabel: 'Spectre Sp(A)',
                        title: 'Étape 1 : Spectre de A',
                        instruction: `À vous de déterminer le spectre $\\text{Sp}_{\\mathbb{R}}(A)$ (valeurs propres séparées par une virgule) :`,
                        type: 'numeric',
                        isSet: true,
                        correctAnswer: chosen.polyRoots,
                        explanation: `En calculant $\\det(A - \\lambda I_3) = 0$, on obtient $\\chi_A(\\lambda) = ${chosen.polyLatex}$, d'où $\\text{Sp}(A) = \\{${chosen.polyRoots}\\}$.`
                    },
                    {
                        shortLabel: 'Décision',
                        title: 'Étape 2 : Conclusion sur la diagonalisabilité',
                        instruction: `La matrice $A$ est-elle diagonalisable sur $\\mathbb{R}$ ? (1 = OUI, 0 = NON) :`,
                        type: 'numeric',
                        correctAnswer: chosen.isDiag ? '1' : '0',
                        explanation: chosen.reason
                    }
                ],
                conclusion: 'Excellente démarche autonome. Vous avez déterminé vous-même la nécessité de sonder les multiplicités géométriques.'
            };
        }

        // ==========================================
        // 3. NIVEAU AUTONOMIE COMPLÈTE (Niveau 3)
        // Aucune aide : question directe de réduction globale
        // ==========================================
        return {
            id: `reduction-autonomous-${idSuffix}`,
            type: 'numeric_input',
            discipline: 'Algèbre Linéaire',
            _chapter: 'Réduction des Endomorphismes',
            _concept: 'Diagonalisation & Autonomie',
            autonomyLevel: 'autonomous',
            trainingFamily: 'reasoning',
            difficulty: 8,
            tags: ['Réduction', 'Autonomie Complète', 'Niveau 8'],
            q: `Soit la matrice $A = ${this.toLatex(chosen.matrix)}$.<br>
            Étudiez complètement la réduction de $A$ sur $\\mathbb{R}$.<br>
            <strong>Question :</strong> Quelle est la dimension maximale parmi tous les sous-espaces propres de $A$ ?<br>
            $$\\max_{\\lambda \\in \\text{Sp}(A)} \\dim(E_\\lambda) = $$`,
            correctAnswer: chosen.type === 'diag_multiple' ? 2 : 1,
            tolerance: 0,
            placeholder: 'Entrez un entier (1, 2 ou 3)...',
            explanation: `Démarche autonome complète :<br>
            1. Calcul de $\\chi_A(X) = ${chosen.polyLatex}$ $\\implies \\text{Sp}(A) = \\{${chosen.polyRoots}\\}$.<br>
            2. Pour chaque valeur propre, étude du rang de $A - \\lambda I_3$.<br>
            ${chosen.reason}`
        };
    },

    // ========================================================================
    // NOUVEAU : DISTINCTION TRIGONALISABLE vs DIAGONALISABLE vs NI L'UN NI L'AUTRE
    // Permet de travailler la subtilité fondamentale entre polynôme scindé et multiplicité géométrique.
    // ========================================================================
    generateTrigonalisationExercise() {
        const idSuffix = `${Date.now()}-${Math.floor(Math.random() * 1000)}`;

        const cases = [
            {
                matrixLatex: '\\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 4 \\\\ 0 & 0 & 1 \\end{pmatrix}',
                polyLatex: '(X - 1)^3',
                roots: '1',
                field: '\\mathbb{R}',
                nature: 'trig_only',
                natureText: 'Trigonalisable mais NON diagonalisable',
                numericCode: 2, // 1 = Diagonalisable, 2 = Trigonalisable seulement, 3 = Ni l'un ni l'autre
                explanation: `Le polynôme caractéristique est $\\chi_A(X) = (X - 1)^3$. Il est scindé sur $\\mathbb{R}$, donc $A$ est trigonalisable.<br>
                Cependant, $A - I_3 = \\begin{pmatrix} 0 & 2 & 0 \\\\ 0 & 0 & 4 \\\\ 0 & 0 & 0 \\end{pmatrix}$ est de rang 2, d'où $\\dim(E_1) = 3 - 2 = 1 < 3$.<br>
                La matrice n'est donc PAS diagonalisable.`
            },
            {
                matrixLatex: '\\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}',
                polyLatex: '(X - 2)^3',
                roots: '2',
                field: '\\mathbb{R}',
                nature: 'diag',
                natureText: 'Diagonalisable (et donc trigonalisable)',
                numericCode: 1,
                explanation: `La matrice est déjà diagonale scalaire $2I_3$. Elle est trivialement diagonalisable (et donc trigonalisable). $\\dim(E_2) = 3$.`
            },
            {
                matrixLatex: '\\begin{pmatrix} 0 & -1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}',
                polyLatex: '(X^2 + 1)(X - 3)',
                roots: '3',
                field: '\\mathbb{R}',
                nature: 'neither',
                natureText: 'Ni diagonalisable ni trigonalisable sur R',
                numericCode: 3,
                explanation: `Le polynôme caractéristique est $\\chi_A(X) = (X^2 + 1)(X - 3)$. Il possède deux racines complexes non réelles $\\pm i$.<br>
                Sur $\\mathbb{R}$, $\\chi_A$ n'est PAS scindé. Par conséquent, la matrice n'est NI diagonalisable NI trigonalisable sur $\\mathbb{R}$.`
            },
            {
                matrixLatex: '\\begin{pmatrix} 1 & 4 & 5 \\\\ 0 & 2 & 6 \\\\ 0 & 0 & 3 \\end{pmatrix}',
                polyLatex: '(X - 1)(X - 2)(X - 3)',
                roots: '1, 2, 3',
                field: '\\mathbb{R}',
                nature: 'diag',
                natureText: 'Diagonalisable',
                numericCode: 1,
                explanation: `Matrice triangulaire avec 3 éléments diagonaux distincts 1, 2, 3. Les 3 valeurs propres sont distinctes dans $\\mathbb{R}$, donc la matrice est diagonalisable sur $\\mathbb{R}$.`
            }
        ];

        const chosen = cases[Math.floor(Math.random() * cases.length)];

        return {
            id: `trigonalisation-nature-${idSuffix}`,
            type: 'numeric_input',
            discipline: 'Algèbre Linéaire',
            _chapter: 'Réduction des Endomorphismes',
            _concept: 'Trigonalisation vs Diagonalisation',
            autonomyLevel: 'semi_guided',
            trainingFamily: 'reasoning',
            difficulty: 7,
            tags: ['Réduction', 'Trigonalisation', 'Polynôme Scindé', 'Niveau 7'],
            q: `On considère la matrice suivante à coefficients réels :<br>
            $$A = ${chosen.matrixLatex}$$
            Déterminez la nature exacte de sa réduction sur $\\mathbb{R}$ :<br>
            <strong>1</strong> = Diagonalisable sur $\\mathbb{R}$<br>
            <strong>2</strong> = Trigonalisable sur $\\mathbb{R}$, mais NON diagonalisable<br>
            <strong>3</strong> = Ni l'un ni l'autre sur $\\mathbb{R}$<br><br>
            Votre réponse (1, 2 ou 3) :`,
            correctAnswer: chosen.numericCode,
            tolerance: 0,
            placeholder: 'Entrez 1, 2 ou 3...',
            explanation: chosen.explanation
        };
    },

    // ========================================================================
    // NOUVEAU : EXERCICES À INFORMATION PARTIELLE (Raisonnement Pur & Déduction)
    // Pas de calcul mécanique de matrice : déduire les propriétés à partir des dimensions.
    // ========================================================================
    generatePartialInfoReductionExercise() {
        const idSuffix = `${Date.now()}-${Math.floor(Math.random() * 1000)}`;

        const templates = [
            {
                q: `Soit $A \\in \\mathcal{M}_3(\\mathbb{R})$ une matrice dont le polynôme caractéristique est :
                $$\\chi_A(X) = (X - 2)^3$$
                On sait par ailleurs que $\\dim(E_2) = \\dim(\\ker(A - 2I_3)) = 2$.
                <br>La matrice $A$ est-elle diagonalisable sur $\\mathbb{R}$ ? (1 = OUI, 0 = NON) :`,
                correctAnswer: 0,
                explanation: `Pour être diagonalisable, la dimension de chaque sous-espace propre doit être égale à la multiplicité algébrique de la valeur propre.<br>
                Ici, la multiplicité algébrique de 2 est $m_2 = 3$, alors que sa dimension géométrique est $\\dim(E_2) = 2 < 3$.<br>
                La matrice n'est donc PAS diagonalisable.`
            },
            {
                q: `Soit $A \\in \\mathcal{M}_3(\\mathbb{R})$ dont les valeurs propres réelles sont $1$ et $2$.
                On sait que :
                $$\\dim(E_1) = 1 \\quad \\text{et} \\quad \\dim(E_2) = 2$$
                La matrice $A$ est-elle diagonalisable sur $\\mathbb{R}$ ? (1 = OUI, 0 = NON) :`,
                correctAnswer: 1,
                explanation: `La somme des dimensions des sous-espaces propres est $\\dim(E_1) + \\dim(E_2) = 1 + 2 = 3 = \\dim(\\mathbb{R}^3)$.<br>
                Par théorème, la matrice $A$ est donc diagonalisable sur $\\mathbb{R}$.`
            },
            {
                q: `Soit $A \\in \\mathcal{M}_4(\\mathbb{R})$ telle que $\\chi_A(X) = (X - 1)^2(X^2 + 1)$.
                La matrice $A$ peut-elle être trigonalisable sur $\\mathbb{R}$ ? (1 = OUI, 0 = NON) :`,
                correctAnswer: 0,
                explanation: `Une matrice est trigonalisable sur $\\mathbb{K}$ si et seulement si son polynôme caractéristique est scindé sur $\\mathbb{K}$.<br>
                Ici le facteur $X^2 + 1$ est irréductible sur $\\mathbb{R}$ (racines non réelles $\\pm i$).<br>
                Le polynôme n'étant pas scindé sur $\\mathbb{R}$, $A$ ne peut pas être trigonalisable sur $\\mathbb{R}$.`
            },
            {
                q: `Soit $A \\in \\mathcal{M}_3(\\mathbb{R})$ une matrice non scalaire vérifiant $A^2 = A$ (projecteur orthogonal ou oblique).
                Combien de valeurs propres réelles au maximum $A$ peut-elle posséder ?`,
                correctAnswer: 2,
                explanation: `Le polynôme $P(X) = X^2 - X = X(X - 1)$ est un polynôme annulateur de $A$.<br>
                Toute valeur propre de $A$ est racine de ce polynôme annulateur, donc $\\text{Sp}(A) \\subseteq \\{0, 1\\}$.<br>
                Il y a donc au maximum 2 valeurs propres distinctes.`
            }
        ];

        const chosen = templates[Math.floor(Math.random() * templates.length)];

        return {
            id: `partial-info-reduction-${idSuffix}`,
            type: 'numeric_input',
            discipline: 'Algèbre Linéaire',
            _chapter: 'Réduction des Endomorphismes',
            _concept: 'Raisonnement & Information Partielle',
            autonomyLevel: 'autonomous',
            trainingFamily: 'reasoning',
            difficulty: 6,
            tags: ['Réduction', 'Information Partielle', 'Théorèmes Spectraux', 'Niveau 6'],
            q: chosen.q,
            correctAnswer: chosen.correctAnswer,
            tolerance: 0,
            placeholder: 'Votre réponse...',
            explanation: chosen.explanation
        };
    }
};

if (typeof window !== 'undefined') {
    window.AlgebraGenerators = AlgebraGenerators;
}
