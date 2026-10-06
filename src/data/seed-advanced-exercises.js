// ============================================================================
// seed-advanced-exercises.js - Banque d'exercices de référence (Maths & Informatique)
// Saisie matricielle, Next-Step, Spot-the-Flaw, Code Python, Pointeurs C et Mémoire
// ============================================================================

(function() {
    const advancedExercises = {
        "Algèbre 2 : Chapitre 1 (Matrices)": [
            // 1. SAISIE MATRICIELLE RÉELLE : Produit matriciel 2x2
            {
                type: "matrix_input",
                tags: ["Calcul Matriciel", "Produit matriciel"],
                q: "Soient $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$ et $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$. Calculez le produit matriciel $AB$ :",
                rows: 2,
                cols: 2,
                expectedMatrix: [
                    ["4", "6"],
                    ["1", "3"]
                ],
                explanation: "$AB = \\begin{pmatrix} 1\\times 2 + 2\\times 1 & 1\\times 0 + 2\\times 3 \\\\ 0\\times 2 + 1\\times 1 & 0\\times 0 + 1\\times 3 \\end{pmatrix} = \\begin{pmatrix} 4 & 6 \\\\ 1 & 3 \\end{pmatrix}$."
            },
            // 2. SAISIE SCALAIRE / FRACTION : Déterminant 2x2
            {
                type: "numeric_input",
                tags: ["Déterminants"],
                q: "Calculez le déterminant de la matrice $M = \\begin{pmatrix} 3 & -2 \\\\ 5 & 4 \\end{pmatrix}$ :",
                correctAnswer: 22,
                tolerance: 0,
                explanation: "$\\det(M) = (3 \\times 4) - (-2 \\times 5) = 12 - (-10) = 12 + 10 = 22$."
            }
        ],

        "Algèbre 3 : Chapitre 1 (Réduction des endomorphismes)": [
            // 3. NEXT-STEP REASONING : Stratégie de diagonalisation
            {
                type: "next_step",
                conceptId: "diagonalisation_multiplicite",
                tags: ["Diagonalisation", "Polynômes"],
                q: "On souhaite déterminer si la matrice $A = \\begin{pmatrix} 4 & 1 & -1 \\\\ 2 & 5 & -2 \\\\ 1 & 1 & 2 \\end{pmatrix}$ est diagonalisable.",
                currentWork: "On a calculé le polynôme caractéristique : $P_A(\\lambda) = (3 - \\lambda)^2(5 - \\lambda)$. Les valeurs propres sont donc $\\lambda_1 = 5$ (simple) et $\\lambda_2 = 3$ (double).",
                options: [
                    {
                        text: "Calculer la dimension du sous-espace propre $E_3 = \\ker(A - 3I_3)$",
                        isCorrect: true,
                        rationale: "Exact ! Comme 3 est valeur propre de multiplicité algébrique 2, $A$ est diagonalisable si et seulement si $\\dim\\ker(A - 3I_3) = 2$."
                    },
                    {
                        text: "Conclure immédiatement que $A$ n'est pas diagonalisable car elle a une valeur propre double",
                        isCorrect: false,
                        rationale: "Faux ! Une valeur propre double n'empêche pas la diagonalisation (ex: l'identité $I_3$ a une valeur propre de multiplicité 3 et est diagonale)."
                    },
                    {
                        text: "Calculer le déterminant de $A$ pour vérifier l'inversibilité",
                        isCorrect: false,
                        rationale: "Le déterminant donne le produit des valeurs propres ($3^2 \\times 5 = 45 \\neq 0$), ce qui prouve l'inversibilité mais n'apporte aucune information sur la diagonalisabilité."
                    },
                    {
                        text: "Calculer les puissances $A^2, A^3$ pour trouver un polynôme annulateur",
                        isCorrect: false,
                        rationale: "Trop coûteux en calculs. L'étude directe du rang de $A - 3I_3$ est la méthode de référence."
                    }
                ],
                explanation: "Pour une valeur propre multiple $\\lambda_k$, le critère fondamental est la comparaison entre multiplicité algébrique $m_k$ et géométrique $d_k = \\dim\\ker(A - \\lambda_k I)$. Ici, il faut déterminer si $\\dim\\ker(A - 3I) = 2$."
            },

            // 4. SPOT-THE-FLAW : Détection d'erreur dans une preuve
            {
                type: "spot_the_flaw",
                conceptId: "sous_espaces_stables",
                tags: ["Sous-espaces stables", "Éléments Propres"],
                q: "Un étudiant tente de prouver que deux endomorphismes $u$ et $v$ qui commutent ($u \\circ v = v \\circ u$) admettent une base commune de vecteurs propres. Analyse son raisonnement :",
                steps: [
                    { id: 1, text: "Supposons que $u$ et $v$ soient deux endomorphismes diagonalisables qui commutent ($u \\circ v = v \\circ u$)." },
                    { id: 2, text: "Soit $\\lambda$ une valeur propre de $u$ et $E_\\lambda(u) = \\ker(u - \\lambda \\text{Id})$ le sous-espace propre associé." },
                    { id: 3, text: "Comme $u$ et $v$ commutent, $E_\\lambda(u)$ est stable par $v$ ($v(E_\\lambda(u)) \\subseteq E_\\lambda(u)$)." },
                    { id: 4, text: "Comme $E_\\lambda(u)$ est stable par $v$, tout vecteur non nul de $E_\\lambda(u)$ est nécessairement un vecteur propre de $v$." },
                    { id: 5, text: "On en conclut que les bases propres de $u$ sont directement des bases propres de $v$." }
                ],
                flawStepId: 4,
                flawCategory: "definition_confusion",
                flawOptions: [
                    { text: "Hypothèse oubliée : $u$ et $v$ doivent être inversibles", id: "omitted_hypothesis" },
                    { text: "Confusion de définition : la stabilité d'un sous-espace $F$ n'implique pas que chaque vecteur de $F$ est un vecteur propre de $v$", id: "definition_confusion" },
                    { text: "Erreur à l'étape 3 : la commutation n'entraîne pas la stabilité des sous-espaces propres", id: "incomplete_reasoning" }
                ],
                remediation: "L'erreur se situe à l'étape 4 : la restriction $v_{|E_\\lambda(u)}$ est un endomorphisme de $E_\\lambda(u)$, mais tous ses vecteurs ne sont pas colinéaires à leur image ! Il faut diagonaliser $v_{|E_\\lambda(u)}$ pour extraire une base de vecteurs propres communs."
            }
        ],

        "Programmation C : Chapitre 2 (Types et Variables)": [
            // 5. INFORMATIQUE : Programmation Python active avec tests unitaires
            {
                type: "code_exercise",
                language: "python",
                tags: ["Python", "Algorithmique"],
                q: "Écrire une fonction `somme_pairs(liste)` qui retourne la somme des entiers pairs d'une liste.",
                description: "La fonction prend en entrée une liste d'entiers et doit renvoyer un entier correspondant à la somme de tous les nombres pairs. Si aucun nombre pair n'est présent, renvoyer 0.",
                functionName: "somme_pairs",
                initialCode: "def somme_pairs(liste):\n    # Écris ton implémentation ici\n    total = 0\n    for n in liste:\n        if n % 2 == 0:\n            total += n\n    return total\n",
                testCases: [
                    { input: [[1, 2, 3, 4, 5, 6]], expected: 12, description: "Liste standard" },
                    { input: [[1, 3, 5]], expected: 0, description: "Aucun pair" },
                    { input: [[-2, 4, -6]], expected: -4, description: "Nombres négatifs" },
                    { input: [[]], expected: 0, isHidden: true, description: "Liste vide (cas limite)" }
                ],
                solutionCode: "def somme_pairs(liste):\n    return sum(x for x in liste if x % 2 == 0)",
                explanation: "On itère sur chaque élément en testant le reste modulo 2 (`n % 2 == 0`)."
            },

            // 6. INFORMATIQUE : Traçage de mémoire et pointeurs en C avec simulateur
            {
                type: "code_tracing",
                language: "c",
                tags: ["Langage C", "Pointeurs & Mémoire"],
                q: "Quelle est la valeur de la variable `a` après l'exécution de ce code C ?",
                codeSnippet: "int a = 42;\nint *p = &a;\n*p = 100;\nprintf(\"%d\", a);",
                inputLabel: "Valeur de la variable a :",
                placeholder: "Ex: 42, 100...",
                expectedAnswer: "100",
                memoryState: {
                    stack: [
                        { name: "a", type: "int", address: "0x7ffd00", value: "100" },
                        { name: "p", type: "int*", address: "0x7ffd08", value: "0x7ffd00", isPointer: true, pointsTo: "0x7ffd00 (&a)" }
                    ]
                },
                explanation: "L'instruction `int *p = &a;` stocke l'adresse de `a` dans le pointeur `p`. Le déréférencement `*p = 100;` modifie directement le contenu de la case mémoire pointée, c'est-à-dire `a`. Donc `a` vaut désormais 100."
            }
        ]
    };

    // Injection automatique dans defaultData au chargement
    if (typeof defaultData !== 'undefined') {
        Object.keys(advancedExercises).forEach(subject => {
            if (defaultData[subject] && Array.isArray(defaultData[subject].questions)) {
                defaultData[subject].questions.unshift(...advancedExercises[subject]);
            }
        });
    }

    if (typeof window !== 'undefined') {
        window.advancedExercises = advancedExercises;
    }
})();
