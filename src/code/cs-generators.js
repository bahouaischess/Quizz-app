// ============================================================================
// CSGenerators - Moteur d'Entraînement Procédural Universitaire Informatique (Python & C)
// Algorithmique, Complexité, Pièges du Langage, Modèle Mémoire & Pointeurs
// ============================================================================

const CSGenerators = {
    randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    generate(lang = 'python', level = 1) {
        if (lang === 'c') return this.generateC(level);
        return this.generatePython(level);
    },

    // ========================================================================
    // MODULE PYTHON UNIVERSITAIRE (NIVEAUX 1 À 5)
    // ========================================================================
    generatePython(level = 1) {
        const lvl = Math.min(Math.max(Number(level) || 1, 1), 5);
        switch (lvl) {
            case 1:
                // Niveau 1 : Mutabilité et références d'objets (Aliasing)
                const val1 = this.randInt(3, 7);
                const val2 = this.randInt(8, 12);
                return {
                    type: 'code_tracing',
                    difficulty: 1,
                    cognitiveLevel: 'reasoning',
                    notion: 'python_mutabilite_references',
                    tags: ['Python', 'Mutabilité', 'Références & Alias', 'Niveau 1'],
                    q: `Analysez attentivement le comportement des références d'objets en mémoire :`,
                    codeSnippet: `a = [${val1}, ${val2}]\nb = a\nb.append(99)\nres = len(a) * 10 + a[0]`,
                    inputLabel: `Quelle est la valeur finale de 'res' ?`,
                    expectedAnswer: String(3 * 10 + val1),
                    placeholder: `Entrez un entier...`,
                    explanation: `En Python, 'b = a' ne copie pas la liste mais crée un nouvel alias pointant vers le MÊME objet en mémoire. Modifier 'b' modifie donc directement 'a'. La longueur de 'a' devient 3, et a[0] = ${val1}, donc res = 30 + ${val1} = ${30 + val1}.`
                };

            case 2:
                // Niveau 2 : List comprehensions avec filtres imbriqués
                const mult = this.randInt(2, 4);
                return {
                    type: 'code_tracing',
                    difficulty: 2,
                    cognitiveLevel: 'calculation',
                    notion: 'python_comprehensions_imbriquees',
                    tags: ['Python', 'Compréhensions', 'Filtrage', 'Niveau 2'],
                    q: `Prédiction de sortie d'une compréhension de liste avec condition :`,
                    codeSnippet: `nums = [1, 2, 3, 4, 5, 6]\nres = [x * ${mult} for x in nums if x % 2 == 1 and x > 1]\nval = sum(res)`,
                    inputLabel: `Quelle est la valeur de 'val' ?`,
                    expectedAnswer: String((3 + 5) * mult),
                    placeholder: `Entrez un entier...`,
                    explanation: `Les éléments de nums qui sont à la fois impairs et strictement supérieurs à 1 sont 3 et 5. Multipliés par ${mult}, on obtient [${3*mult}, ${5*mult}]. La somme vaut ${ (3 + 5) * mult }.`
                };

            case 3:
                // Niveau 3 : Programmation récursive
                return {
                    type: 'code_exercise',
                    difficulty: 3,
                    language: 'python',
                    cognitiveLevel: 'application',
                    notion: 'python_recursivite_division',
                    tags: ['Python', 'Récursivité', 'Arithmétique', 'Niveau 3'],
                    q: `Écrivez une fonction récursive 'somme_chiffres(n)' qui calcule la somme des chiffres d'un entier positif $n$.`,
                    description: `Interdiction d'utiliser la conversion en chaîne de caractères (pas de str). Utilisez exclusivement les opérateurs modulo (%) et division entière (//).`,
                    example: `somme_chiffres(123) -> 6\nsomme_chiffres(405) -> 9`,
                    functionName: 'somme_chiffres',
                    initialCode: `def somme_chiffres(n):\n    # Cas de base et appel récursif\n    pass\n`,
                    testCases: [
                        { input: [0], expected: 0 },
                        { input: [7], expected: 7 },
                        { input: [123], expected: 6 },
                        { input: [405], expected: 9 },
                        { input: [9999], expected: 36 }
                    ],
                    explanation: `<code>def somme_chiffres(n):\n    if n < 10: return n\n    return (n % 10) + somme_chiffres(n // 10)</code>`
                };

            case 4:
                // Niveau 4 : Le piège classique de l'argument par défaut mutable
                return {
                    type: 'qcm',
                    difficulty: 4,
                    cognitiveLevel: 'diagnostic',
                    notion: 'python_default_arg_mutable',
                    trapType: 'trap_flaw',
                    tags: ['Python', 'Arguments par Défaut', 'Objets Mutables', 'Niveau 4'],
                    q: `On considère la fonction Python suivante :<br>
                    <pre><code>def ajouter_element(x, lst=[]):\n    lst.append(x)\n    return lst\n\nres1 = ajouter_element(1)\nres2 = ajouter_element(2)</code></pre>
                    Que contient la variable <code>res2</code> à l'issue de cette exécution ?`,
                    options: [
                        {
                            text: `<code>[1, 2]</code>, car l'argument par défaut <code>lst=[]</code> n'est évalué qu'une seule fois lors de la définition de la fonction, et réutilisé à chaque appel ultérieur.`,
                            isCorrect: true,
                            rationale: `Exact ! En Python, les arguments par défaut sont des singletons évalués au moment du chargement du module. La même liste en mémoire est donc partagée entre les deux appels.`
                        },
                        {
                            text: `<code>[2]</code>, car une nouvelle liste vide est automatiquement instanciée à chaque invocation de la fonction.`,
                            isCorrect: false,
                            rationale: `Erreur classique très répandue ! Une nouvelle liste n'est créée que si l'on écrit <code>lst = None</code> puis <code>if lst is None: lst = []</code>.`
                        },
                        {
                            text: `Une exception <code>TypeError</code> car les listes ne sont pas autorisées comme valeurs par défaut en Python.`,
                            isCorrect: false,
                            rationale: `Faux : la syntaxe est parfaitement légale en Python, bien qu'elle constitue un anti-pattern notoire.`
                        },
                        {
                            text: `<code>[1]</code>, car le premier appel verrouille la liste et empêche toute modification ultérieure.`,
                            isCorrect: false,
                            rationale: `Absurde : la liste reste un objet mutable standard.`
                        }
                    ],
                    explanation: `En Python, les expressions de valeurs par défaut sont évaluées une seule fois lors de la création de la fonction.`
                };

            case 5:
            default:
                // Niveau 5 : Complexité asymptotique (Recherche d'appartenance Liste vs Ensemble)
                return {
                    type: 'qcm',
                    difficulty: 5,
                    cognitiveLevel: 'reasoning',
                    notion: 'python_complexite_structures',
                    trapType: 'necessary_condition',
                    tags: ['Algorithmique', 'Complexité', 'Structures de Données', 'Niveau 5'],
                    q: `Soit une collection contenant $n$ éléments distincts. On effectue $m$ requêtes d'appartenance de la forme <code>if element in collection: ...</code>.<br>
                    Quelle est la complexité temporelle globale dans le pire des cas selon que la collection est une <code>list</code> ou un <code>set</code> ?`,
                    options: [
                        {
                            text: `$O(m \\times n)$ avec une <code>list</code> (recherche linéaire séquentielle), mais $O(m)$ en moyenne avec un <code>set</code> (recherche par table de hachage en temps $O(1)$).`,
                            isCorrect: true,
                            rationale: `Exact ! L'opérateur 'in' sur une liste parcourt en moyenne $n/2$ éléments (coût $O(n)$ par test). Sur une table de hachage (set ou dict), le calcul du hash permet un accès en temps constant $O(1)$.`
                        },
                        {
                            text: `$O(m \\log n)$ avec une <code>list</code>, et $O(m \\log n)$ avec un <code>set</code>, car Python utilise un arbre binaire de recherche équilibré.`,
                            isCorrect: false,
                            rationale: `Faux : les listes Python ne sont pas triées (recherche en $O(n)$ et non $O(\\log n)$), et les sets utilisent du hachage, pas des arbres AVL.`
                        },
                        {
                            text: `$O(m)$ dans les deux cas, car le compilateur bytecode optimise automatiquement les recherches d'appartenance.`,
                            isCorrect: false,
                            rationale: `Faux : le compilateur ne peut pas changer la complexité algorithmique d'un parcours de tableau séquentiel.`
                        },
                        {
                            text: `$O(m \\times n)$ avec un <code>set</code>, car la gestion des collisions ralentit les requêtes.`,
                            isCorrect: false,
                            rationale: `Absurde : sauf cas pathologique extrême de collisions totales, le hachage garantit $O(1)$ par requête.`
                        }
                    ],
                    explanation: `Recherche d'appartenance : $O(n)$ pour une liste, $O(1)$ amorti pour un set ou un dictionnaire.`
                };
        }
    },

    // ========================================================================
    // MODULE LANGAGE C & MODÈLE MÉMOIRE (NIVEAUX 1 À 5)
    // ========================================================================
    generateC(level = 1) {
        const lvl = Math.min(Math.max(Number(level) || 1, 1), 5);
        switch (lvl) {
            case 1:
                // Niveau 1 : Types entiers et priorité d'évaluation
                const a = this.randInt(5, 9);
                const b = 2;
                const c = this.randInt(3, 5);
                const res = Math.floor(a / b) * c + (a % b);
                return {
                    type: 'code_tracing',
                    difficulty: 1,
                    cognitiveLevel: 'calculation',
                    notion: 'c_types_priorites',
                    tags: ['Langage C', 'Division Entière', 'Opérateurs', 'Niveau 1'],
                    q: `Tracez le résultat de l'expression entière suivante en C :`,
                    codeSnippet: `int a = ${a};\nint b = ${b};\nint c = ${c};\nint res = (a / b) * c + (a % b);`,
                    inputLabel: `Valeur entière de 'res' :`,
                    expectedAnswer: String(res),
                    placeholder: `Entrez un entier...`,
                    explanation: `La division entière '${a} / ${b}' tronque vers zéro et vaut ${Math.floor(a/b)}. Multipliée par ${c}, cela donne ${Math.floor(a/b) * c}. Le modulo '${a} % ${b}' vaut ${a % b}. La somme est ${res}.`
                };

            case 2:
                // Niveau 2 : Arithmétique fine des pointeurs : *p++ vs (*p)++
                return {
                    type: 'qcm',
                    difficulty: 2,
                    cognitiveLevel: 'reasoning',
                    notion: 'c_pointeurs_priorite_post_incrementation',
                    trapType: 'necessary_condition',
                    tags: ['Langage C', 'Pointeurs', 'Post-Incrémentation', 'Niveau 2'],
                    q: `Soit <code>int tab[] = {10, 20, 30}; int *p = tab;</code>.<br>
                    Quelle est la différence fondamentale entre l'instruction <code>*p++</code> et l'instruction <code>(*p)++</code> ?`,
                    options: [
                        {
                            text: `<code>*p++</code> évalue la valeur pointée puis avance le pointeur <code>p</code> vers l'élément suivant de la mémoire, tandis que <code>(*p)++</code> incrémente de 1 la valeur entière située à l'adresse actuelle sans déplacer le pointeur.`,
                            isCorrect: true,
                            rationale: `Exact ! L'opérateur unaire '++' post-fixé a une priorité supérieure à l'opérateur de déréférencement '*'. Avec des parenthèses '(*p)++', l'incrémentation s'applique directement à l'entier pointé.`
                        },
                        {
                            text: `Les deux instructions sont strictement identiques et modifient à la fois l'adresse et le contenu pointé.`,
                            isCorrect: false,
                            rationale: `Faux : <code>*p++</code> modifie le pointeur $p$, tandis que <code>(*p)++</code> modifie la valeur entière en mémoire.`
                        },
                        {
                            text: `<code>*p++</code> provoque une erreur de compilation car on ne peut pas incrémenter un pointeur vers un tableau.`,
                            isCorrect: false,
                            rationale: `Faux : $p$ est une variable pointeur autonome (lvalue), elle peut être incrémentée librement (contrairement à l'identifiant 'tab').`
                        },
                        {
                            text: `<code>(*p)++</code> déplace le pointeur de 4 octets en avant dans la pile d'exécution.`,
                            isCorrect: false,
                            rationale: `Faux : les parenthèses forcent l'incrémentation sur la valeur déréférencée.`
                        }
                    ],
                    explanation: `Priorité des opérateurs en C : <code>*p++</code> lit <code>*p</code> puis incrémente $p$. <code>(*p)++</code> incrémente la valeur pointée.`
                };

            case 3:
                // Niveau 3 : Pointeur sur pointeur (int **pp) et passage par adresse
                return {
                    type: 'qcm',
                    difficulty: 3,
                    cognitiveLevel: 'reasoning',
                    notion: 'c_pointeur_de_pointeur',
                    trapType: 'dimension',
                    tags: ['Langage C', 'Pointeur sur Pointeur', 'Passage d\'Arguments', 'Niveau 3'],
                    q: `Pourquoi une fonction C souhaitant modifier l'adresse mémoire contenue dans un pointeur d'entier <code>int *ptr</code> doit-elle recevoir en argument un pointeur sur pointeur <code>int **pp</code> ?`,
                    options: [
                        {
                            text: `Parce que le langage C effectue tous ses passages d'arguments par valeur ; pour modifier une variable (y compris un pointeur), il faut obligatoirement transmettre son adresse en mémoire (<code>&ptr</code>).`,
                            isCorrect: true,
                            rationale: `Exact ! Si l'on passe <code>int *ptr</code> par valeur, la fonction reçoit une copie locale de l'adresse ; toute réaffectation du pointeur ne modifie que la copie locale.`
                        },
                        {
                            text: `Parce que les pointeurs simples ne peuvent pas être alloués avec la fonction <code>malloc</code>.`,
                            isCorrect: false,
                            rationale: `Faux : un pointeur simple est couramment alloué avec <code>ptr = malloc(...)</code>.`
                        },
                        {
                            text: `Pour permettre au système d'exploitation de libérer automatiquement la mémoire à la sortie de la fonction.`,
                            isCorrect: false,
                            rationale: `Faux : le langage C ne possède aucun ramasse-miettes (garbage collector) automatique.`
                        },
                        {
                            text: `Parce que le déréférencement d'un pointeur simple est interdit dans les sous-fonctions.`,
                            isCorrect: false,
                            rationale: `Absurde : le déréférencement d'un pointeur est une opération fondamentale toujours autorisée.`
                        }
                    ],
                    explanation: `En C, tout passage est par valeur. Modifier une variable $X$ nécessite de passer $\\&X$. Si $X$ est un <code>int*</code>, $\\&X$ est un <code>int**</code>.`
                };

            case 4:
                // Niveau 4 : Arithmétique de tableau 2D
                return {
                    type: 'code_tracing',
                    difficulty: 4,
                    cognitiveLevel: 'calculation',
                    notion: 'c_tableaux_2d_pointeurs',
                    tags: ['Langage C', 'Tableaux 2D', 'Arithmétique Ptr', 'Niveau 4'],
                    q: `Tracez l'accès mémoire avec arithmétique de pointeur sur matrice :`,
                    codeSnippet: `int m[2][3] = {{10, 20, 30}, {40, 50, 60}};\nint *p = &m[0][0];\nint val = *(p + 4);`,
                    inputLabel: `Valeur entière de 'val' :`,
                    expectedAnswer: '50',
                    placeholder: `Entrez un entier...`,
                    explanation: `En C, les tableaux à deux dimensions sont stockés de manière contiguë en mémoire (Row-Major Order) : m[0][0]=10, m[0][1]=20, m[0][2]=30, m[1][0]=40, m[1][1]=50. Déplacer p de 4 positions ('*(p + 4)') accède donc directement à l'élément m[1][1] = 50.`
                };

            case 5:
            default:
                // Niveau 5 : Stack Escape & Dangling Pointer (Spot-the-Flaw)
                return {
                    type: 'spot_the_flaw',
                    difficulty: 5,
                    cognitiveLevel: 'diagnostic',
                    notion: 'c_stack_escape_dangling_pointer',
                    trapType: 'trap_flaw',
                    tags: ['Langage C', 'Modèle Mémoire', 'Stack Escape', 'Undefined Behavior', 'Niveau 5'],
                    q: `Examinez cette fonction C d'initialisation. Trouvez l'erreur critique de gestion mémoire :`,
                    steps: [
                        {
                            stepNum: 1,
                            text: "int* creer_entier(int valeur) {",
                            hasFlaw: false
                        },
                        {
                            stepNum: 2,
                            text: "    int local = valeur;",
                            hasFlaw: false
                        },
                        {
                            stepNum: 3,
                            text: "    return &local;",
                            hasFlaw: true,
                            flawExplanation: "Stack Escape fatal ! La variable 'local' est allouée sur la pile d'exécution (Stack) et sa durée de vie se termine dès le retour de la fonction. Renvoyer son adresse produit un pointeur pendant (dangling pointer) et un comportement indéfini (Segmentation Fault)."
                        },
                        {
                            stepNum: 4,
                            text: "}",
                            hasFlaw: false
                        }
                    ],
                    options: [
                        { text: "Étape 1 (Signature de fonction)", isCorrect: false },
                        { text: "Étape 2 (Déclaration de la variable locale)", isCorrect: false },
                        { text: "Étape 3 (Retour de l'adresse d'une variable locale de la pile)", isCorrect: true },
                        { text: "Étape 4 (Fermeture du bloc)", isCorrect: false }
                    ],
                    explanation: `Les variables automatiques locales sont détruites à la sortie de la fonction. Pour renvoyer une adresse persistante, il faut allouer dynamiquement sur le tas (Heap) avec <code>malloc()</code>.`
                };
        }
    },

    // ========================================================================
    // B2 — CHASSE AUX FUITES MÉMOIRE EN C (malloc, free, double-free, leaks)
    // ========================================================================
    generateMemoryLeakExercise() {
        const scenarios = [
            {
                type: 'leak',
                title: 'Fuite Mémoire Majeure (Memory Leak)',
                code: `void traitement() {\n    int *p = malloc(10 * sizeof(int));\n    p[0] = 42;\n    p = malloc(20 * sizeof(int)); // réaffectation sans libération !\n    free(p);\n}`,
                stackDisplay: `p (0x7fff...) ───► 0x2080`,
                heapDisplay: `0x1048 : [ 40 octets alloués ] ───► [ ORPHELIN / FUITE INACCESSIBLE ]\n0x2080 : [ 80 octets alloués ] ───► Libéré par free(p) à la fin`,
                correctOption: "Fuite mémoire : l'adresse initiale 0x1048 a été écrasée par la seconde allocation sans avoir été libérée par free().",
                wrongOptions: [
                    "Double Free : le pointeur p a été libéré deux fois.",
                    "Stack Escape : la variable p est renvoyée sur la pile.",
                    "Erreur de segmentation immédiate lors de l'indexation p[0]."
                ],
                explanation: `En réaffectant le pointeur <code>p</code> avec le second <code>malloc()</code>, l'adresse du premier bloc (0x1048) est définitivement perdue. Ces 40 octets restent réservés sur le tas sans qu'aucun pointeur ne puisse plus les libérer : c'est une fuite mémoire (memory leak).`
            },
            {
                type: 'double_free',
                title: 'Double Libération Fatale (Double Free)',
                code: `void nettoyer(int *a) {\n    free(a);\n}\nint main() {\n    int *ptr = malloc(sizeof(int));\n    *ptr = 100;\n    nettoyer(ptr);\n    free(ptr); // tentative de seconde libération !\n    return 0;\n}`,
                stackDisplay: `ptr (0x7fff...) ───► 0x1048`,
                heapDisplay: `0x1048 : [ 4 octets ] ───► Libéré (DÉJÀ LIBÉRÉ par nettoyer())\n           [ TENTATIVE DE RE-LIBÉRATION ] ───► Crash / Abort (core dumped)`,
                correctOption: "Double Free : tentative de libération d'un bloc mémoire déjà rendu au système d'exploitation.",
                wrongOptions: [
                    "Fuite mémoire : le bloc ptr n'est jamais libéré.",
                    "Use-After-Free : tentative d'écriture dans un pointeur nul.",
                    "Stack Overflow : la fonction nettoyer a saturé la pile."
                ],
                explanation: `Appeler <code>free(ptr)</code> alors que le bloc mémoire situé à 0x1048 a déjà été libéré dans la fonction <code>nettoyer()</code> corrompt la table des métadonnées du tas (glibc heap metadata) et déclenche immédiatement un arrêt brutal du programme (<code>free(): double free detected</code>).`
            },
            {
                type: 'use_after_free',
                title: 'Utilisation Après Libération (Use-After-Free)',
                code: `int *ptr = malloc(sizeof(int));\n*ptr = 15;\nfree(ptr);\n// ... instructions intermédiaires ...\nint val = *ptr; // déréférencement d'un bloc libéré !`,
                stackDisplay: `ptr (0x7fff...) ───► 0x1048 (dangling pointer)`,
                heapDisplay: `0x1048 : [ MÉMOIRE DÉJÀ RESTITUÉE ]\n         (peut être réallouée à tout instant à une autre variable)`,
                correctOption: "Use-After-Free : déréférencement d'un pointeur pendant (dangling pointer) pointant sur un bloc déjà libéré.",
                wrongOptions: [
                    "Fuite mémoire : bloc jamais libéré.",
                    "Double Free : libération redondante.",
                    "Erreur de syntaxe : free() interdit avant affectation."
                ],
                explanation: `Après <code>free(ptr)</code>, l'adresse reste inchangée dans la variable <code>ptr</code>, mais la zone mémoire sous-jacente n'appartient plus au programme. Accéder à <code>*ptr</code> est un comportement indéfini (Use-After-Free), faille de sécurité majeure en C.`
            }
        ];

        const chosen = scenarios[Math.floor(Math.random() * scenarios.length)];
        const allOpts = [
            { text: chosen.correctOption, isCorrect: true },
            ...chosen.wrongOptions.map(t => ({ text: t, isCorrect: false }))
        ].sort(() => Math.random() - 0.5);

        return {
            type: 'qcm',
            difficulty: 5,
            cognitiveLevel: 'diagnostic',
            notion: 'c_gestion_memoire_heap_stack',
            trainingFamily: 'programming',
            tags: ['Langage C', 'Tas & Pile', 'Modèle Mémoire', 'Chasse aux Fuites'],
            q: `<strong>🔍 [Chasse aux Fuites Mémoire] — ${chosen.title}</strong><br>
            Analysez attentivement le code C et la cartographie de la mémoire associés :
            <pre><code class="language-c">${chosen.code}</code></pre>
            <div class="memory-inspector-box" style="margin: 15px 0; padding: 12px; background: #0f172a; border-radius: 8px; font-family: monospace; border: 1px solid #334155;">
                <div style="color: #38bdf8; font-weight: bold; margin-bottom: 4px;">STACK (Pile d'exécution)</div>
                <div style="padding: 4px 8px; background: rgba(56, 189, 248, 0.1); border-left: 3px solid #38bdf8; margin-bottom: 10px;">
                    ${chosen.stackDisplay}
                </div>
                <div style="color: #f59e0b; font-weight: bold; margin-bottom: 4px;">HEAP (Tas dynamique)</div>
                <div style="padding: 4px 8px; background: rgba(245, 158, 11, 0.1); border-left: 3px solid #f59e0b;">
                    ${chosen.heapDisplay.replace(/\n/g, '<br>')}
                </div>
            </div>
            Quel est le diagnostic mémoire exact de ce fragment de code ?`,
            options: allOpts,
            explanation: chosen.explanation
        };
    }
};

if (typeof window !== 'undefined') {
    window.CSGenerators = CSGenerators;
}
