// ============================================================
// MatiÃ¨re : Programmation C : Chapitre 3 (Expressions, instructions et E/S simples)
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
Object.assign(defaultData, {
"Programmation C : Chapitre 3 (Expressions, instructions et E/S simples)": {
        course: "info",
        folder: "Programmation C",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Expressions", "Définitions"],
                q: "En langage C, qu'est-ce qu'une expression[cite: 3] ?",
                options: [
                    { text: "Une combinaison de valeurs, de variables, d'opérateurs et d'appels de fonctions qui est évaluée pour produire une valeur de type connu[cite: 3]", isCorrect: true },
                    { text: "Une étape du programme qui ne produit aucune valeur, comme une déclaration[cite: 3]", isCorrect: false }
                ],
                explanation: "Une expression produit toujours une valeur typée, qu'il s'agisse d'une constante (ex: 42), d'une opération ($x+y$) ou d'un appel de fonction[cite: 3]. Une étape qui ne produit rien est une instruction[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Instructions", "Définitions"],
                q: "Quelle est la principale différence entre une expression et une instruction[cite: 3] ?",
                options: [
                    { text: "Une instruction est une étape du programme qui ne produit aucune valeur, contrairement à une expression[cite: 3]", isCorrect: true },
                    { text: "Une expression est obligatoirement terminée par un point-virgule, contrairement à une instruction[cite: 3]", isCorrect: false }
                ],
                explanation: "Une instruction (comme la déclaration `int x;` ou une boucle `for`) décrit une action à effectuer mais ne s'évalue pas en une valeur[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Affectation", "Valeur de retour"],
                q: "Que produit l'expression d'affectation `x = 5` en plus de stocker la valeur dans la variable[cite: 3] ?",
                options: [
                    { text: "Elle renvoie la valeur affectée (ici 5)[cite: 3]", isCorrect: true },
                    { text: "Elle renvoie un booléen indiquant si l'affectation a réussi[cite: 3]", isCorrect: false },
                    { text: "Elle ne renvoie aucune valeur[cite: 3]", isCorrect: false }
                ],
                explanation: "En C, l'affectation est une expression qui renvoie la valeur affectée[cite: 3]. C'est ce qui permet d'enchaîner les affectations comme `x = y = z = 5;` ou de tester des retours de fonctions directement dans un `if`[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Affectation", "Exemples"],
                q: "Si `int a = 3;` et `int b = (a = a + 5) + 1;`, que valent `a` et `b` à la fin de l'exécution[cite: 3] ?",
                options: [
                    { text: "`a` vaut 8 et `b` vaut 9[cite: 3]", isCorrect: true },
                    { text: "`a` vaut 3 et `b` vaut 9[cite: 3]", isCorrect: false }
                ],
                explanation: "L'expression `(a = a + 5)` affecte la valeur 8 à `a` et renvoie cette même valeur 8[cite: 3]. Ensuite, `b` reçoit la valeur $8 + 1 = 9$[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Affectation", "Opérateurs composés"],
                q: "À quoi équivaut strictement l'instruction `x *= y + 1;`[cite: 3] ?",
                options: [
                    { text: "`x = x * (y + 1);`[cite: 3]", isCorrect: true },
                    { text: "`x = x * y + 1;`[cite: 3]", isCorrect: false }
                ],
                explanation: "Les affectations composées `<lvalue> <op>= <expression>` équivalent à `<lvalue> = <lvalue> <op> (<expression>)`[cite: 3]. L'expression de droite est toujours évaluée en premier[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Opérateurs", "Incrémentation"],
                q: "Quelle est la différence entre l'incrémentation postfixée (`i++`) et préfixée (`++i`)[cite: 3] ?",
                options: [
                    { text: "`i++` renvoie la valeur de `i` avant l'incrémentation, tandis que `++i` renvoie la valeur de `i` après l'incrémentation[cite: 3]", isCorrect: true },
                    { text: "`i++` ajoute 1, tandis que `++i` ajoute la valeur de la variable précédente[cite: 3]", isCorrect: false }
                ],
                explanation: "Dans les deux cas, la variable est incrémentée[cite: 3]. La seule différence réside dans la valeur renvoyée par l'expression au moment de son exécution[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Opérateurs", "Incrémentation", "Exemples"],
                q: "Si `int i = 2;` et `int a = i++;`, quelles sont les valeurs finales[cite: 3] ?",
                options: [
                    { text: "`a = 2` et `i = 3`[cite: 3]", isCorrect: true },
                    { text: "`a = 3` et `i = 3`[cite: 3]", isCorrect: false }
                ],
                explanation: "L'opérateur postfixé `i++` renvoie la valeur courante de `i` (donc 2) pour l'affecter à `a`, puis incrémente `i` à 3[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Opérateurs", "Erreurs classiques"],
                q: "Peut-on utiliser l'opérateur d'incrémentation sur une constante, comme `5++;`[cite: 3] ?",
                options: [
                    { text: "Non, cela produit une erreur[cite: 3]", isCorrect: true },
                    { text: "Oui, la valeur devient 6 en mémoire[cite: 3]", isCorrect: false }
                ],
                explanation: "L'opérateur d'incrémentation requiert une `<lvalue>` (une variable possédant une adresse mémoire modifiable). Il ne s'applique pas sur les constantes[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Booléens", "Généralités"],
                q: "Comment le langage C (historiquement, avant C99) représente-t-il les valeurs booléennes[cite: 3] ?",
                options: [
                    { text: "La valeur 0 représente \"faux\", et toute valeur non nulle représente \"vrai\"[cite: 3]", isCorrect: true },
                    { text: "Avec les mots clés `True` et `False` uniquement[cite: 3]", isCorrect: false }
                ],
                explanation: "Historiquement, le C n'a pas de type booléen dédié. Le zéro vaut faux, et toute autre valeur (comme 42 ou -1) est évaluée comme vraie[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Booléens", "Normes"],
                q: "Quel ajout la norme C99 a-t-elle apporté concernant les booléens[cite: 3] ?",
                options: [
                    { text: "L'ajout du type `_Bool` et de la macro `bool` via la bibliothèque `<stdbool.h>`[cite: 3]", isCorrect: true },
                    { text: "La suppression définitive de l'évaluation du nombre 0 comme faux[cite: 3]", isCorrect: false }
                ],
                explanation: "La norme C99 a introduit `_Bool` et l'en-tête `<stdbool.h>`. En C23, `bool` devient même un mot-clé natif du langage[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Opérateurs", "Logique"],
                q: "Quels sont les opérateurs logiques en C pour le ET, le OU et le NON[cite: 3] ?",
                options: [
                    { text: "`&&` pour ET, `||` pour OU, `!` pour NON[cite: 3]", isCorrect: true },
                    { text: "`&` pour ET, `|` pour OU, `~` pour NON[cite: 3]", isCorrect: false },
                    { text: "`and` pour ET, `or` pour OU, `not` pour NON[cite: 3]", isCorrect: false }
                ],
                explanation: "Les opérateurs logiques sont `&&` (ET), `||` (OU), et `!` (NON)[cite: 3]. Les opérateurs `&` et `|` sont des opérateurs bit à bit[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Booléens", "Évaluation paresseuse"],
                q: "Qu'est-ce que l'évaluation paresseuse (lazy evaluation) de l'opérateur logique `&&`[cite: 3] ?",
                options: [
                    { text: "Dans `A && B`, si `A` est faux, l'expression `B` n'est même pas évaluée car le résultat sera forcément faux[cite: 3]", isCorrect: true },
                    { text: "Le compilateur retarde le calcul de l'expression à la fin de la fonction[cite: 3]", isCorrect: false }
                ],
                explanation: "C'est un mécanisme de sécurité et d'optimisation fondamental en C. Si la première partie d'un ET logique échoue, la seconde est ignorée[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Booléens", "Évaluation paresseuse"],
                q: "Comment fonctionne l'évaluation paresseuse de l'opérateur logique `||`[cite: 3] ?",
                options: [
                    { text: "Dans `A || B`, si `A` est vrai, l'expression `B` n'est pas évaluée car le résultat sera forcément vrai[cite: 3]", isCorrect: true },
                    { text: "Dans `A || B`, les deux opérandes sont toujours évaluées pour vérifier les erreurs[cite: 3]", isCorrect: false }
                ],
                explanation: "Dès qu'une condition du OU logique est vraie (en lisant de gauche à droite), le système arrête l'évaluation et renvoie vrai[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Booléens", "Évaluation paresseuse", "Exemples"],
                q: "Dans l'expression `if (s != NULL && s[0] < '0')`, pourquoi l'ordre est-il vital[cite: 3] ?",
                options: [
                    { text: "Grâce à l'évaluation paresseuse, si `s` est NULL, `s[0]` ne sera jamais évalué, ce qui évite un crash (erreur de segmentation)[cite: 3]", isCorrect: true },
                    { text: "C'est juste une convention de style[cite: 3]", isCorrect: false }
                ],
                explanation: "L'évaluation paresseuse garantit que l'opérande de droite n'est testée que si celle de gauche est vraie. On teste donc si le pointeur est valide AVANT d'essayer de lire sa première case[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Opérateurs", "Évaluation"],
                q: "En dehors des opérateurs `&&` et `||`, que garantit le C sur l'ordre d'évaluation des opérandes (ex: `f() + g()`)[cite: 3] ?",
                options: [
                    { text: "Rien n'est garanti, l'ordre d'évaluation est souvent non spécifié[cite: 3]", isCorrect: true },
                    { text: "L'évaluation se fait toujours strictement de gauche à droite[cite: 3]", isCorrect: false }
                ],
                explanation: "L'ordre d'évaluation des opérandes pour des opérations mathématiques ou des appels de fonctions n'est pas défini par la norme. On ne sait pas si `f()` sera exécuté avant `g()`[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Opérateurs", "Comportement indéfini"],
                q: "Pourquoi l'expression `A[i] = B[i++]` est-elle considérée comme un comportement indéfini[cite: 3] ?",
                options: [
                    { text: "Car l'ordre d'évaluation n'étant pas spécifié, on ne sait pas si le `i` de `A[i]` sera la valeur avant ou après l'incrémentation de `i++`[cite: 3]", isCorrect: true },
                    { text: "Car on ne peut pas affecter un tableau à un autre tableau[cite: 3]", isCorrect: false }
                ],
                explanation: "Modifier une variable (avec `++`) et la relire dans la même expression, sans point de séquence garanti, donne un comportement indéfini en C[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Comparaison", "Types"],
                q: "Quelles sont les opérateurs réservés à la comparaison d'ordre sur des types numériques[cite: 3] ?",
                options: [
                    { text: "`<`, `>`, `<=`, `>=`[cite: 3]", isCorrect: true },
                    { text: "`==`, `!=`[cite: 3]", isCorrect: false }
                ],
                explanation: "Les opérateurs de stricte infériorité/supériorité ne s'appliquent qu'à des grandeurs numériques. L'égalité (`==`) s'applique plus largement (pointeurs, caractères)[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Opérateurs", "Priorité"],
                q: "Quel opérateur est le plus prioritaire entre `&&`, `==` et `<`[cite: 3] ?",
                options: [
                    { text: "`<` est plus prioritaire que `==`, qui est plus prioritaire que `&&`[cite: 3]", isCorrect: true },
                    { text: "`&&` est le plus prioritaire des trois[cite: 3]", isCorrect: false }
                ],
                explanation: "Dans l'ordre de priorité décroissant : les comparaisons d'ordre (`<`), puis l'égalité (`==`), puis le ET logique (`&&`)[cite: 3]. Dans le doute, il faut utiliser des parenthèses[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Booléens", "Exemples"],
                q: "Que vaut l'expression booléenne `!17` en C[cite: 3] ?",
                options: [
                    { text: "0 (faux)[cite: 3]", isCorrect: true },
                    { text: "1 (vrai)[cite: 3]", isCorrect: false }
                ],
                explanation: "Toute valeur non nulle est considérée comme vraie. La négation (`!`) de \"vrai\" donne 0 (\"faux\")[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Booléens", "Exemples"],
                q: "Que vaut l'expression `4 && 6` en C[cite: 3] ?",
                options: [
                    { text: "1 (vrai)[cite: 3]", isCorrect: true },
                    { text: "4[cite: 3]", isCorrect: false },
                    { text: "24[cite: 3]", isCorrect: false }
                ],
                explanation: "Les opérandes 4 et 6 sont non nuls, donc considérés comme vrais. L'opération logique \"vrai ET vrai\" renvoie le booléen vrai (qui vaut 1 en C)[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Structures conditionnelles", "Syntaxe"],
                q: "Quelle est la structure d'une instruction `if ... else` classique[cite: 3] ?",
                options: [
                    { text: "`if (expression) { instructions1; } else { instructions2; }`[cite: 3]", isCorrect: true },
                    { text: "`if expression then instructions1; else instructions2;`[cite: 3]", isCorrect: false }
                ],
                explanation: "En C, l'expression conditionnelle doit obligatoirement être entre parenthèses, et les blocs d'instructions sont (généralement) entourés d'accolades[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Structures conditionnelles", "Erreurs classiques"],
                q: "Que provoque le code `if (a = 2) { printf(\"vrai\"); }`[cite: 3] ?",
                options: [
                    { text: "L'affectation `a = 2` renvoie 2 (vrai), donc la condition est toujours remplie et le code affiche \"vrai\"[cite: 3]", isCorrect: true },
                    { text: "Une erreur de compilation[cite: 3]", isCorrect: false },
                    { text: "Il n'affiche rien si `a` ne valait pas 2 initialement[cite: 3]", isCorrect: false }
                ],
                explanation: "C'est une erreur très courante. On a confondu l'égalité `==` avec l'affectation `=`. L'affectation écrase `a` avec 2 et la condition évalue ce 2 comme \"vrai\"[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Structures conditionnelles", "Chaînes"],
                q: "Pourquoi le test `if (s1 == s2)` pour deux chaînes contenant \"Francois\" renvoie-t-il faux[cite: 3] ?",
                options: [
                    { text: "Parce que l'opérateur `==` compare les adresses mémoire des tableaux, pas le contenu textuel[cite: 3]", isCorrect: true },
                    { text: "Parce qu'il faut utiliser l'opérateur `===` en C[cite: 3]", isCorrect: false }
                ],
                explanation: "En C, le nom d'un tableau est un pointeur. Comparer deux chaînes avec `==` compare si elles sont stockées au même endroit en mémoire. Il faut utiliser `strcmp()`[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Structures conditionnelles", "Erreurs classiques"],
                q: "Que se passe-t-il dans ce code : `if (10 % 2 == 1); printf(\"10 est impair\\n\");`[cite: 3] ?",
                options: [
                    { text: "Il affichera toujours \"10 est impair\" car le point-virgule après le `if` termine l'instruction conditionnelle (instruction vide)[cite: 3]", isCorrect: true },
                    { text: "Le compilateur plante[cite: 3]", isCorrect: false }
                ],
                explanation: "Le point-virgule après la parenthèse du `if` constitue le corps du `if` (une action vide). Le `printf` qui suit est donc totalement indépendant de la condition et s'exécutera toujours[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Structures conditionnelles", "Portée"],
                q: "Dans un enchaînement `if ... if ... else`, à quel `if` le `else` est-il rattaché par défaut[cite: 3] ?",
                options: [
                    { text: "Au `if` le plus proche qui n'a pas encore de `else`[cite: 3]", isCorrect: true },
                    { text: "Au tout premier `if` de l'enchaînement[cite: 3]", isCorrect: false }
                ],
                explanation: "Pour éviter l'ambiguïté (problème du \"dangling else\"), le compilateur associe toujours le `else` au dernier `if` ouvert. Utiliser des accolades permet de forcer un autre comportement[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Boucles", "for"],
                q: "Quelles sont les trois parties constitutives de l'en-tête d'une boucle `for` en C[cite: 3] ?",
                options: [
                    { text: "`for(instruction_initialisation; expression_condition; instruction_evolution)`[cite: 3]", isCorrect: true },
                    { text: "`for(variable in liste_valeurs)`[cite: 3]", isCorrect: false }
                ],
                explanation: "La boucle `for` en C s'articule autour de l'initialisation (faite une fois), la condition (testée avant chaque tour), et l'évolution (exécutée en fin de tour)[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Boucles", "for"],
                q: "Peut-on laisser des champs vides dans un `for`, comme `for(; i < 10;)`[cite: 3] ?",
                options: [
                    { text: "Oui, c'est autorisé[cite: 3]", isCorrect: true },
                    { text: "Non, une erreur de syntaxe empêchera la compilation[cite: 3]", isCorrect: false }
                ],
                explanation: "Les trois champs du `for` sont optionnels. Laisser la condition vide équivaut à un test toujours vrai, ce qui crée une boucle infinie (`for(;;)`). Les points-virgules, eux, restent obligatoires[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Boucles", "Complexité"],
                q: "Pourquoi écrire `for(i=0; i < strlen(mot); i++)` peut-il poser un problème de complexité[cite: 3] ?",
                options: [
                    { text: "Parce que l'expression de condition (`strlen`) est réévaluée à CHAQUE itération, ce qui recalcule la longueur à chaque tour[cite: 3]", isCorrect: true },
                    { text: "Parce que `strlen` modifie la chaîne de caractères[cite: 3]", isCorrect: false }
                ],
                explanation: "Dans un `for`, l'expression centrale est testée à chaque boucle. Appeler une fonction lourde à cet endroit ralentit énormément le programme. Il vaut mieux la stocker dans une variable avant la boucle[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Boucles", "Portée"],
                q: "Si je déclare la variable d'itération DANS la boucle : `for(int i=0; i<10; i++)`, est-ce que `i` est accessible après la boucle[cite: 3] ?",
                options: [
                    { text: "Non, sa portée se limite au bloc du `for`. Une erreur de compilation surviendra si on l'appelle après[cite: 3]", isCorrect: true },
                    { text: "Oui, `i` conservera la valeur 10[cite: 3]", isCorrect: false }
                ],
                explanation: "Déclarer la variable d'itération à l'intérieur de l'en-tête du `for` réduit sa portée (scope) à la boucle elle-même. Elle n'existe plus en dehors[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Boucles", "while"],
                q: "Quelle est la particularité d'une boucle `while`[cite: 3] ?",
                options: [
                    { text: "Elle n'exige qu'une condition. Si la condition est fausse dès le début, on n'entre jamais dans la boucle[cite: 3]", isCorrect: true },
                    { text: "Elle s'exécute toujours au moins une fois[cite: 3]", isCorrect: false }
                ],
                explanation: "Le `while(expression)` teste la condition avant l'exécution du bloc d'instructions. C'est l'équivalent d'un `for` sans initialisation ni évolution[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Boucles", "do-while"],
                q: "Comment garantit-on qu'une boucle s'exécute TOUJOURS au moins une fois[cite: 3] ?",
                options: [
                    { text: "En utilisant la structure `do { ... } while(expression);`[cite: 3]", isCorrect: true },
                    { text: "En mettant la condition à 1 dans un `while`[cite: 3]", isCorrect: false }
                ],
                explanation: "La boucle `do...while` effectue d'abord les instructions, puis teste la condition à la fin de l'itération pour savoir si elle doit recommencer[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Boucles", "do-while", "Syntaxe"],
                q: "Quelle est la contrainte syntaxique stricte de la structure `do...while`[cite: 3] ?",
                options: [
                    { text: "Le point-virgule `;` est obligatoire tout à la fin, après la parenthèse du `while`[cite: 3]", isCorrect: true },
                    { text: "Les accolades ne sont pas autorisées[cite: 3]", isCorrect: false }
                ],
                explanation: "Contrairement aux blocs `if` ou `while` classiques qui finissent par une accolade fermante `}`, le `do...while` nécessite un point-virgule après l'expression : `do { ... } while(cond);`[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Contrôle du déroulement", "return"],
                q: "Quel est l'effet de l'instruction `return;`[cite: 3] ?",
                options: [
                    { text: "Elle quitte immédiatement la fonction en cours et retourne l'exécution à la fonction appelante[cite: 3]", isCorrect: true },
                    { text: "Elle relance la fonction depuis le début[cite: 3]", isCorrect: false }
                ],
                explanation: "Le `return` met fin à l'exécution de la fonction et, le cas échéant, transmet une valeur au code qui l'a appelée[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Contrôle du déroulement", "break"],
                q: "Que fait l'instruction `break;` dans une boucle[cite: 3] ?",
                options: [
                    { text: "Elle force la sortie immédiate de la boucle la plus proche[cite: 3]", isCorrect: true },
                    { text: "Elle passe immédiatement à l'itération suivante de la boucle[cite: 3]", isCorrect: false }
                ],
                explanation: "L'instruction `break` interrompt prématurément le déroulement et éjecte le programme de la boucle englobante la plus proche[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Contrôle du déroulement", "continue"],
                q: "Que fait l'instruction `continue;` dans une boucle[cite: 3] ?",
                options: [
                    { text: "Elle ignore le reste des instructions et passe directement à l'itération suivante de la boucle la plus proche[cite: 3]", isCorrect: true },
                    { text: "Elle casse la boucle et passe à l'instruction suivante[cite: 3]", isCorrect: false }
                ],
                explanation: "Le `continue` permet de zapper la fin du code de la boucle pour le tour en cours et d'embrayer directement sur la vérification de la condition pour le tour suivant. Cela évite des indentations lourdes (des `if` géants)[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Contrôle du déroulement", "switch"],
                q: "La structure de contrôle `switch` permet de remplacer de multiples `if...else`. Quelle est sa particularité[cite: 3] ?",
                options: [
                    { text: "Elle ne fonctionne que pour vérifier l'égalité sur des constantes entières (ou des caractères)[cite: 3]", isCorrect: true },
                    { text: "Elle permet d'évaluer des conditions complexes avec des signes supérieurs ou inférieurs[cite: 3]", isCorrect: false }
                ],
                explanation: "Le `switch` attend une expression évaluée à un nombre entier et compare ce résultat aux différentes branches `case`[cite: 3]. On ne peut pas mettre de conditions complexes type `x > 5` dans un `case`[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Contrôle du déroulement", "switch", "break"],
                q: "Dans un `switch`, pourquoi faut-il généralement mettre un `break;` à la fin de chaque `case`[cite: 3] ?",
                options: [
                    { text: "Parce que sans `break`, l'exécution va « traverser » et exécuter tous les `case` suivants (comportement de fall-through)[cite: 3]", isCorrect: true },
                    { text: "Parce que le compilateur refusera de compiler sans lui[cite: 3]", isCorrect: false }
                ],
                explanation: "Sans `break`, dès que le programme trouve un cas valide, il exécute les instructions de ce cas MAIS AUSSI les instructions de tous les cas positionnés en dessous, sans refaire de vérification[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Contrôle du déroulement", "switch", "default"],
                q: "À quoi sert le mot-clé `default:` dans un `switch`[cite: 3] ?",
                options: [
                    { text: "Il permet d'exécuter des instructions si aucune des valeurs spécifiées dans les `case` ne correspond à l'expression[cite: 3]", isCorrect: true },
                    { text: "Il définit la variable par défaut à utiliser si l'expression est nulle[cite: 3]", isCorrect: false }
                ],
                explanation: "Le `default` est le cas par défaut (similaire au `else` final d'une longue chaîne de `if`). Il est optionnel mais recommandé pour traiter les cas imprévus[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "printf"],
                q: "À quoi sert le spécificateur `%d` dans un `printf`[cite: 3] ?",
                options: [
                    { text: "À remplacer l'emplacement par la valeur d'une expression au format entier (décimal)[cite: 3]", isCorrect: true },
                    { text: "À formater l'affichage en nombre flottant double[cite: 3]", isCorrect: false }
                ],
                explanation: "Les formats de `printf` incluent : `%d` pour un entier, `%f` pour un flottant, `%c` pour un caractère et `%s` pour une chaîne[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "printf", "Typage"],
                q: "Que se passe-t-il si vous écrivez `printf(\"%d\", 3.14);`[cite: 3] ?",
                options: [
                    { text: "La fonction va afficher n'importe quoi (elle va lire les bits du flottant comme si c'était un entier, car il n'y a pas de conversion automatique)[cite: 3]", isCorrect: true },
                    { text: "La fonction va afficher 3 en tronquant la décimale[cite: 3]", isCorrect: false }
                ],
                explanation: "Le `printf` en C ne convertit pas automatiquement les types. Si on lui donne un `%d`, il prend 32 bits en mémoire et les lit comme un entier, ce qui donne un résultat absurde avec un flottant[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "printf", "Buffer"],
                q: "Pourquoi le texte d'un `printf` peut-il ne pas s'afficher immédiatement à l'écran[cite: 3] ?",
                options: [
                    { text: "L'affichage est « bufferisé » : il est stocké en mémoire et n'est envoyé à l'écran que lorsque le buffer est plein, qu'il y a un `\\n`, ou que le programme se termine[cite: 3]", isCorrect: true },
                    { text: "Parce que l'écran rafraîchit trop lentement[cite: 3]", isCorrect: false }
                ],
                explanation: "Pour des raisons de performance (les appels systèmes coûtent cher), le C attend d'avoir un bon paquet de caractères (ou une commande claire comme `\\n`) avant de demander au système de les afficher[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "scanf"],
                q: "Quelle est la syntaxe correcte pour récupérer un entier saisi par l'utilisateur avec `scanf`[cite: 3] ?",
                options: [
                    { text: "`scanf(\"%d\", &a);` (avec l'esperluette devant la variable)[cite: 3]", isCorrect: true },
                    { text: "`scanf(\"%d\", a);`[cite: 3]", isCorrect: false }
                ],
                explanation: "Contrairement au `printf`, le `scanf` a besoin de modifier la variable. Il faut donc lui envoyer l'adresse mémoire de cette variable, d'où la présence obligatoire du `&`[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "scanf", "Chaînes"],
                q: "Faut-il mettre un `&` devant une variable chaîne de caractères (`char s[64]`) dans un `scanf(\"%s\", s)`[cite: 3] ?",
                options: [
                    { text: "Non, car le nom d'un tableau est déjà une adresse mémoire[cite: 3]", isCorrect: true },
                    { text: "Oui, c'est obligatoire pour tous les types[cite: 3]", isCorrect: false }
                ],
                explanation: "Pour une chaîne de caractères, la variable `s` désigne intrinsèquement l'adresse de la première case du tableau, on n'utilise donc pas le `&`[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "scanf", "Espaces"],
                q: "Lorsqu'on utilise `scanf(\"%s\", s);`, que se passe-t-il si l'utilisateur saisit \"Salut tout le monde\"[cite: 3] ?",
                options: [
                    { text: "La variable `s` contiendra uniquement \"Salut\" car le `%s` s'arrête au premier espace[cite: 3]", isCorrect: true },
                    { text: "La variable `s` contiendra toute la phrase[cite: 3]", isCorrect: false }
                ],
                explanation: "Le format `%s` de `scanf` lit une chaîne en s'arrêtant dès qu'il rencontre un espace, une tabulation ou un saut de ligne[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "scanf", "Retour"],
                q: "Que renvoie la fonction `scanf` après exécution[cite: 3] ?",
                options: [
                    { text: "Le nombre de variables qui ont été saisies et assignées correctement[cite: 3]", isCorrect: true },
                    { text: "La valeur saisie par l'utilisateur[cite: 3]", isCorrect: false }
                ],
                explanation: "C'est utile pour vérifier les erreurs. Si on demande 3 entiers et que `scanf` renvoie 2, c'est que l'utilisateur s'est trompé sur la troisième saisie (par exemple, il a tapé des lettres)[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "puts"],
                q: "Comment fonctionne la fonction `puts(const char[]);`[cite: 3] ?",
                options: [
                    { text: "Elle affiche la chaîne de caractères passée en argument suivie d'un retour à la ligne automatique[cite: 3]", isCorrect: true },
                    { text: "Elle enregistre une chaîne saisie au clavier[cite: 3]", isCorrect: false }
                ],
                explanation: "C'est une fonction simple d'affichage. La chaîne doit obligatoirement être terminée par le caractère nul `\\0` pour que `puts` sache où s'arrêter[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "gets", "Sécurité"],
                q: "Pourquoi la fonction `gets(char[]);` a-t-elle été supprimée dans la norme C11[cite: 3] ?",
                options: [
                    { text: "Parce qu'elle ne vérifie pas la taille du tableau de destination, ce qui provoque des dépassements de tampon (buffer overflow) très dangereux[cite: 3]", isCorrect: true },
                    { text: "Parce qu'elle était trop lente à exécuter[cite: 3]", isCorrect: false }
                ],
                explanation: "La fonction `gets` est historiquement responsable d'énormément de failles de sécurité, comme le ver de Morris en 1988. Un pirate peut envoyer une chaîne plus longue que prévue pour écraser la pile et exécuter du code malveillant. On doit utiliser `fgets` à la place[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "getchar"],
                q: "Quel est le type de retour de la fonction `getchar()`[cite: 3] ?",
                options: [
                    { text: "`int` (un entier)[cite: 3]", isCorrect: true },
                    { text: "`char` (un caractère)[cite: 3]", isCorrect: false }
                ],
                explanation: "Bien qu'elle lise un caractère, `getchar()` renvoie un entier. Cela permet de renvoyer le code ASCII du caractère lu, mais aussi de pouvoir renvoyer la constante d'erreur ou de fin de fichier `EOF` (qui vaut -1)[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    }
});

