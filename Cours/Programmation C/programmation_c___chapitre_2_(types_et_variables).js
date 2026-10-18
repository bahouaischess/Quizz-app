// ============================================================
// MatiÃ¨re : Programmation C : Chapitre 2 (Types et Variables)
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
Object.assign(defaultData, {
"Programmation C : Chapitre 2 (Types et Variables)": {
        course: "info",
        folder: "Programmation C",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Mémoire", "Définitions"],
                q: "Qu'est-ce qu'une adresse mémoire dans le contexte d'un programme C[cite: 2] ?",
                options: [
                    { text: "Une case mémoire d'un octet, qui est l'unité indivisible de 8 bits (0 ou 1)[cite: 2]", isCorrect: true },
                    { text: "L'emplacement du fichier source sur le disque dur[cite: 2]", isCorrect: false },
                    { text: "Une variable globale stockée dans le processeur[cite: 2]", isCorrect: false }
                ],
                explanation: "La mémoire est manipulée à l'aide d'adresses. Chaque adresse correspond à une case mémoire d'un octet (8 bits)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Mémoire", "Zones"],
                q: "Quelles sont les différentes zones de mémoire utilisées par un programme C[cite: 2] ?",
                options: [
                    { text: "La zone dynamique (pile, tas) et la zone statique (code, données statiques)[cite: 2]", isCorrect: true },
                    { text: "Uniquement le disque dur et la mémoire cache[cite: 2]", isCorrect: false }
                ],
                explanation: "La mémoire d'un programme est divisée en plusieurs segments : la zone dynamique (qui inclut la pile pour les variables locales et le tas pour l'allocation dynamique) et la zone statique (contenant le code exécutable et les données statiques globales)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Types", "Généralités"],
                q: "À quoi sert la déclaration explicite d'un type en C[cite: 2] ?",
                options: [
                    { text: "À permettre au compilateur de réserver la bonne quantité de mémoire et de vérifier la cohérence des expressions[cite: 2]", isCorrect: true },
                    { text: "À indiquer si la variable doit être stockée sur le disque ou en RAM[cite: 2]", isCorrect: false }
                ],
                explanation: "Le type donne deux informations cruciales au compilateur : la taille de la zone mémoire à réserver, et la façon dont il faut interpréter les bits qui s'y trouvent (signé, non signé, flottant...)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Types", "Généralités"],
                q: "Comment est définie la notion de type en C[cite: 2] ?",
                options: [
                    { text: "C'est la combinaison d'une taille de zone mémoire et d'une interprétation des bits[cite: 2]", isCorrect: true },
                    { text: "C'est uniquement la taille en octets de la variable[cite: 2]", isCorrect: false }
                ],
                explanation: "Un type = taille + interprétation (par exemple, savoir si le premier bit indique un signe ou fait partie de la valeur)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Types", "Portabilité"],
                q: "Quelle est l'unique contrainte imposée par la norme C concernant la taille des types entiers[cite: 2] ?",
                options: [
                    { text: "L'ordre des tailles : caractère < petit entier ≤ entier ≤ entier long[cite: 2]", isCorrect: true },
                    { text: "Qu'un entier `int` fasse exactement 4 octets sur toutes les machines[cite: 2]", isCorrect: false }
                ],
                explanation: "Le C est machine-dépendant. La norme impose seulement un ordre de grandeur (ex: `short` $\\le$ `int` $\\le$ `long`), ce qui explique pourquoi la taille exacte varie selon le compilateur et la machine (32 ou 64 bits)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Types entiers", "Limites"],
                q: "Quelles sont les valeurs possibles pour un `signed char` (1 octet)[cite: 2] ?",
                options: [
                    { text: "De -127 à 127 (la norme autorise aussi -128 selon le compilateur)[cite: 2]", isCorrect: true },
                    { text: "De 0 à 255[cite: 2]", isCorrect: false }
                ],
                explanation: "Un `signed char` utilise 1 octet (8 bits). Un bit est réservé pour le signe. La norme contraint l'intervalle entre $-(2^7-1)$ et $2^7-1$, soit $[-127 ; 127]$. Les compilateurs incluent souvent -128, mais ce n'est pas standard et nuit à la portabilité[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Types entiers", "Limites"],
                q: "Quelles sont les valeurs possibles pour un `unsigned char` (1 octet)[cite: 2] ?",
                options: [
                    { text: "De 0 à 255[cite: 2]", isCorrect: true },
                    { text: "De -127 à 127[cite: 2]", isCorrect: false }
                ],
                explanation: "Un `unsigned char` utilise l'intégralité de ses 8 bits pour des valeurs positives, allant donc de $0$ à $2^8-1 = 255$[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Types entiers", "Débordement"],
                q: "Que se passe-t-il si l'on exécute : `unsigned char c = 255; c = c + 1;`[cite: 2] ?",
                options: [
                    { text: "La variable `c` prend la valeur 0 (débordement)[cite: 2]", isCorrect: true },
                    { text: "La variable `c` prend la valeur 256[cite: 2]", isCorrect: false },
                    { text: "Le programme plante avec une erreur d'exécution[cite: 2]", isCorrect: false }
                ],
                explanation: "Il n'y a aucune vérification faite à l'exécution en C. Quand on ajoute 1 à `0b11111111`, on obtient `0b100000000`. Comme on n'a que 8 bits, le 9ème bit est tronqué et il ne reste que des zéros[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Types entiers", "Débordement", "Boucles"],
                q: "Quel est le problème dans cette boucle : `for (unsigned int i=10; i>=0; i--)`[cite: 2] ?",
                options: [
                    { text: "C'est une boucle infinie : quand `i` atteint 0, `i--` provoque un débordement qui remet `i` à sa valeur maximale ($2^{32}-1$), donc `i` reste toujours supérieur ou égal à 0[cite: 2]", isCorrect: true },
                    { text: "Il n'y a pas de problème, la boucle s'arrêtera quand `i` vaudra -1[cite: 2]", isCorrect: false }
                ],
                explanation: "Un `unsigned int` ne peut jamais être strictement inférieur à 0. Après 0, il boucle sur le plafond maximum (phénomène de roll-over), la condition de la boucle est donc une tautologie[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Types entiers", "Représentation"],
                q: "En C, comment écrire l'entier 12 en base octale dans le code source[cite: 2] ?",
                options: [
                    { text: "En ajoutant un 0 devant : `014`[cite: 2]", isCorrect: true },
                    { text: "En écrivant simplement `00012`[cite: 2]", isCorrect: false }
                ],
                explanation: "En C, un nombre entier qui commence par `0` est interprété comme de l'octal (base 8). Le nombre écrit `012` en C vaut donc $1\\times8 + 2 = 10$ en décimal[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Types entiers", "Opérations"],
                q: "Que vaut le résultat de la division `9/4` en C[cite: 2] ?",
                options: [
                    { text: "2[cite: 2]", isCorrect: true },
                    { text: "2.25[cite: 2]", isCorrect: false }
                ],
                explanation: "En C, si les deux opérandes sont des entiers, l'opérateur `/` effectue le quotient de la division entière (il tronque la partie décimale). Le résultat est donc 2[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Réels", "Types"],
                q: "Quelles sont les particularités des types `float` et `double`[cite: 2] ?",
                options: [
                    { text: "Ce sont des représentations en virgule flottante qui produisent des approximations et des erreurs d'arrondis. Ils ne doivent pas être utilisés pour des calculs exacts[cite: 2]", isCorrect: true },
                    { text: "Ils permettent de stocker des nombres réels avec une précision infinie[cite: 2]", isCorrect: false }
                ],
                explanation: "Les flottants sont des approximations stockées sous la forme $m \times 2^e$. Des nombres simples comme 0.1 ne sont pas représentables de façon exacte en binaire, ce qui crée des erreurs d'accumulation[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Réels", "Précision"],
                q: "Vrai ou Faux : En C, la condition `if (0.1 + 0.2 == 0.3)` est toujours vérifiée[cite: 2].",
                options: [
                    { text: "Faux[cite: 2]", isCorrect: true },
                    { text: "Vrai[cite: 2]", isCorrect: false }
                ],
                explanation: "C'est un piège classique de l'arithmétique à virgule flottante. L'approximation de 0.1 et de 0.2 en binaire fait que leur somme n'est pas strictement égale à l'approximation en mémoire de 0.3[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Réels", "Opérations"],
                q: "Que se passe-t-il lors de l'opération `8.4 / 2`[cite: 2] ?",
                options: [
                    { text: "Le 2 est implicitement converti en réel (2.0) pour adopter le type le plus précis, et le résultat est une division réelle (4.2)[cite: 2]", isCorrect: true },
                    { text: "Le programme génère une erreur car les types sont différents[cite: 2]", isCorrect: false }
                ],
                explanation: "C'est la règle de conversion automatique (promotion) du C. Si les opérandes sont de types différents, on convertit dans le type le plus « large » pour effectuer le calcul[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Caractères", "Définition"],
                q: "Comment le type `char` fonctionne-t-il en interne en C[cite: 2] ?",
                options: [
                    { text: "C'est un entier stocké sur 1 octet qui est interprété comme un code de caractère (code ASCII)[cite: 2]", isCorrect: true },
                    { text: "C'est un type de donnée complexe capable de stocker n'importe quel symbole Unicode[cite: 2]", isCorrect: false }
                ],
                explanation: "Un `char` est avant tout un petit entier de 8 bits. La table ASCII fait la correspondance entre ce nombre et un caractère affichable (pour les valeurs de 0 à 127)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Caractères", "Valeurs"],
                q: "Que va afficher l'instruction `printf(\"%d %d\", 9, '9');`[cite: 2] ?",
                options: [
                    { text: "9 et 57[cite: 2]", isCorrect: true },
                    { text: "9 et 9[cite: 2]", isCorrect: false }
                ],
                explanation: "Le premier argument est l'entier mathématique 9. Le second argument est le caractère `'9'`, dont la valeur dans la table ASCII est 57. Le formateur `%d` demande d'afficher l'entier sous-jacent[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Caractères", "Spéciaux"],
                q: "À quoi correspond le caractère spécial `\\n`[cite: 2] ?",
                options: [
                    { text: "Un saut de ligne[cite: 2]", isCorrect: true },
                    { text: "Une tabulation[cite: 2]", isCorrect: false }
                ],
                explanation: "Le `\\n` est la séquence d'échappement standard pour ordonner un retour à la ligne (newline)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variables", "Initialisation"],
                q: "Quelle est la valeur par défaut d'une variable non initialisée (ex: `int a;` dans une fonction)[cite: 2] ?",
                options: [
                    { text: "Sa valeur est indéterminée (elle contient ce qui traînait en mémoire à cette adresse)[cite: 2]", isCorrect: true },
                    { text: "Elle vaut 0 par sécurité[cite: 2]", isCorrect: false }
                ],
                explanation: "En C, les variables locales ne sont pas nettoyées. Déclarer `int a;` réserve la mémoire, mais ne la vide pas. Ne jamais utiliser une variable sans l'avoir initialisée d'abord ![cite: 2]",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variables", "Conversions implicites"],
                q: "Que se passe-t-il avec le code `int a = 2.45;`[cite: 2] ?",
                options: [
                    { text: "La valeur réelle (2.45) est tronquée, et la variable `a` reçoit la valeur 2[cite: 2]", isCorrect: true },
                    { text: "Le compilateur rejette l'affectation car les types sont incompatibles[cite: 2]", isCorrect: false }
                ],
                explanation: "C'est une conversion implicite. La donnée à droite est forcée dans le type de la variable à gauche, ce qui entraîne une perte de précision (la partie décimale est ignorée)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variables", "Cast"],
                q: "Qu'est-ce qu'un « cast » explicite en C[cite: 2] ?",
                options: [
                    { text: "Le fait de forcer le compilateur à interpréter une variable dans un autre type (ex: `b = (int) a;`)[cite: 2]", isCorrect: true },
                    { text: "Une fonction qui nettoie la mémoire d'une variable[cite: 2]", isCorrect: false }
                ],
                explanation: "Le cast (transtypage) dit au compilateur de fermer les yeux et de traiter les octets de la variable selon les règles du nouveau type précisé entre parenthèses[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Constantes", "Déclaration"],
                q: "Quelle est la différence fondamentale entre `const int a = 5;` et `#define A 5`[cite: 2] ?",
                options: [
                    { text: "`const` crée une vraie variable (en lecture seule) avec un type et un espace mémoire. `#define` effectue une simple substitution de texte avant la compilation sans aucune vérification[cite: 2]", isCorrect: true },
                    { text: "Il n'y a aucune différence, ce sont deux syntaxes pour la même chose[cite: 2]", isCorrect: false }
                ],
                explanation: "La macro `#define` est aveugle. Le préprocesseur cherche et remplace le texte. La variable `const` est gérée par le compilateur, avec toutes les garanties de type et de portée[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Constantes", "Macros"],
                q: "Pourquoi est-il risqué d'utiliser des macros (`#define`) avec un nom d'un seul caractère (ex: `#define A 3`)[cite: 2] ?",
                options: [
                    { text: "Parce que le remplacement de texte est brut. Si on déclare ensuite une variable `int A = 4;`, le code deviendra `int 3 = 4;` et plantera à la compilation[cite: 2]", isCorrect: true },
                    { text: "Parce que le C interdit les identificateurs d'une seule lettre[cite: 2]", isCorrect: false }
                ],
                explanation: "Le préprocesseur qui gère le `#define` ne comprend pas le langage C. Il remplace le texte partout où il le trouve. C'est pourquoi on utilise toujours des mots longs et en MAJUSCULES pour les macros[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tableaux", "Caractéristiques"],
                q: "Un tableau statique en C peut-il être redimensionné au cours de l'exécution du programme[cite: 2] ?",
                options: [
                    { text: "Non[cite: 2]", isCorrect: true },
                    { text: "Oui, en utilisant la fonction resize[cite: 2]", isCorrect: false }
                ],
                explanation: "Un tableau statique est placé dans une zone contiguë de la pile avec une taille fixée à la compilation. Il ne peut jamais changer de taille. Pour un tableau extensible, il faut gérer la mémoire dynamiquement (tas)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tableaux", "Accès"],
                q: "Dans un tableau `int tab[10];`, quel est l'indice du premier et du dernier élément[cite: 2] ?",
                options: [
                    { text: "Le premier est `tab[0]` et le dernier est `tab[9]`[cite: 2]", isCorrect: true },
                    { text: "Le premier est `tab[1]` et le dernier est `tab[10]`[cite: 2]", isCorrect: false }
                ],
                explanation: "En C, les tableaux sont indexés à partir de 0 (zéro-based numbering). Le dernier élément d'un tableau de taille $N$ est donc à l'indice $N-1$[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tableaux", "Sécurité"],
                q: "Que se passe-t-il si l'on écrit `tab[10]` pour un tableau de taille 10[cite: 2] ?",
                options: [
                    { text: "C'est un accès hors-limites (out of bounds). Le C ne vérifie rien, on va lire ou corrompre la mémoire située juste après le tableau (erreur fatale possible)[cite: 2]", isCorrect: true },
                    { text: "Le compilateur signale une erreur et refuse de compiler[cite: 2]", isCorrect: false }
                ],
                explanation: "Le C ne surveille jamais les accès aux indices des tableaux, ni à la compilation ni à l'exécution. C'est l'entière responsabilité du programmeur de rester dans les bornes[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tableaux", "Taille"],
                q: "Pourquoi est-il nécessaire de transmettre la taille d'un tableau en tant que paramètre supplémentaire lorsqu'on le passe à une fonction[cite: 2] ?",
                options: [
                    { text: "Parce qu'un tableau ne connaît pas sa propre taille (il ne transmet que l'adresse de sa première case à la fonction)[cite: 2]", isCorrect: true },
                    { text: "Pour que la fonction puisse vérifier que le tableau n'est pas vide[cite: 2]", isCorrect: false }
                ],
                explanation: "En C, le nom d'un tableau est équivalent à l'adresse mémoire de son premier élément. La fonction appelée ignore complètement où s'arrête le tableau. L'utilisation de `sizeof` dans la fonction renverrait juste la taille d'une adresse[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tableaux", "Initialisation"],
                q: "Dans la déclaration `int tab[5] = {1};`, que valent les éléments du tableau[cite: 2] ?",
                options: [
                    { text: "Le premier vaut 1, et tous les autres (qui n'ont pas été précisés) sont initialisés à 0[cite: 2]", isCorrect: true },
                    { text: "Tous les éléments valent 1[cite: 2]", isCorrect: false }
                ],
                explanation: "Lorsqu'on initialise partiellement un tableau avec des accolades, le compilateur remplit automatiquement toutes les cases restantes avec des zéros[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tableaux", "Affectation"],
                q: "Pourquoi l'instruction `a = b;` (où `a` et `b` sont deux tableaux) provoque-t-elle une erreur de compilation[cite: 2] ?",
                options: [
                    { text: "Parce que le nom d'un tableau désigne une adresse mémoire constante (le début du tableau), on ne peut donc pas réaffecter cette adresse[cite: 2]", isCorrect: true },
                    { text: "Parce que les tableaux n'ont pas la même taille[cite: 2]", isCorrect: false }
                ],
                explanation: "Le C n'offre pas d'opérateur pour copier le contenu d'un tableau d'un seul coup. Le nom du tableau pointe de manière figée sur la première case, on ne peut pas écraser ce pointeur[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tableaux multidimensionnels", "Syntaxe"],
                q: "Comment accède-t-on à l'élément de la 2ème ligne et 3ème colonne de la matrice `int A[3][4];`[cite: 2] ?",
                options: [
                    { text: "`A[1][2]`[cite: 2]", isCorrect: true },
                    { text: "`A[2][3]`[cite: 2]", isCorrect: false },
                    { text: "`A[1, 2]`[cite: 2]", isCorrect: false }
                ],
                explanation: "Chaque dimension possède sa propre paire de crochets et on compte à partir de 0. La syntaxe `A[1,2]` avec une virgule compile mais effectue une opération obscure totalement différente de l'accès 2D[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tableaux multidimensionnels", "Parcours"],
                q: "Dans une très grande matrice en C, pourquoi est-il crucial de parcourir les éléments « ligne par ligne » plutôt que « colonne par colonne »[cite: 2] ?",
                options: [
                    { text: "Car le C stocke les matrices de manière linéaire (ligne après ligne) en mémoire. Le parcours par ligne respecte la contiguïté mémoire et est beaucoup plus rapide (mémoire cache)[cite: 2]", isCorrect: true },
                    { text: "C'est faux, le temps de parcours est exactement le même dans les deux sens[cite: 2]", isCorrect: false }
                ],
                explanation: "Un tableau 2D n'est qu'un grand tableau 1D déguisé, organisé ligne par ligne (`t[0][0]`, `t[0][1]`, `t[0][2]`, puis `t[1][0]`). Parcourir les colonnes implique de faire de grands bonds en mémoire, ruinant les performances d'accès (cache miss)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tableaux", "Limites de la pile"],
                q: "Que se passera-t-il à l'exécution de ce code : `int main() { int tab[10000][10000]; return 0; }`[cite: 2] ?",
                options: [
                    { text: "Le programme va planter immédiatement avec une erreur de segmentation (Stack overflow)[cite: 2]", isCorrect: true },
                    { text: "Le tableau sera créé sans problème dans la RAM[cite: 2]", isCorrect: false }
                ],
                explanation: "Les tableaux statiques locaux sont stockés sur la « pile » (Stack), une zone mémoire de taille très restreinte (souvent de l'ordre de quelques Mo). Un tableau aussi gigantesque fait exploser la pile[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chaînes de caractères", "Définition"],
                q: "Qu'est-ce qu'une chaîne de caractères en langage C[cite: 2] ?",
                options: [
                    { text: "C'est simplement une convention : un tableau de `char` dont le tout dernier élément utile est suivi du caractère spécial `\\0` (caractère nul)[cite: 2]", isCorrect: true },
                    { text: "C'est un type de base indépendant nommé `String`[cite: 2]", isCorrect: false }
                ],
                explanation: "Le type String n'existe pas en C. Une chaîne est un tableau de caractères classique, et c'est le `\\0` qui indique aux fonctions (comme `printf`) où s'arrêter de lire[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chaînes de caractères", "Taille en mémoire"],
                q: "Pour stocker la chaîne \"cat\" (3 lettres), quelle doit être la longueur minimale du tableau de caractères[cite: 2] ?",
                options: [
                    { text: "4 cases (3 pour les lettres, plus 1 pour le caractère de fin `\\0`)[cite: 2]", isCorrect: true },
                    { text: "3 cases[cite: 2]", isCorrect: false }
                ],
                explanation: "Il faut toujours prévoir une case supplémentaire pour loger le caractère de terminaison nul (`\\0`), indispensable pour délimiter la fin de la chaîne[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chaînes de caractères", "Bibliothèques"],
                q: "Si `s1` et `s2` sont des chaînes, pourquoi l'instruction `s2 = s1;` ne copie-t-elle pas la chaîne[cite: 2] ?",
                options: [
                    { text: "Car ce sont des tableaux (on ne peut pas réaffecter les adresses de tableaux statiques). Il faut utiliser une fonction dédiée comme `strcpy(s2, s1);` de la bibliothèque `string.h`[cite: 2]", isCorrect: true },
                    { text: "Car l'opérateur `=` copie à l'envers, il faut faire `s1 = s2;`[cite: 2]", isCorrect: false }
                ],
                explanation: "Comme pour tous les tableaux en C, le signe `=` ne duplique pas le contenu des cases. On doit utiliser des fonctions standard (`strcpy` pour la copie, `strlen` pour la taille, `strcmp` pour la comparaison)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chaînes de caractères", "Erreurs classiques"],
                q: "Quel est le risque principal lié à l'utilisation du `\\0` pour marquer la fin des chaînes en C[cite: 2] ?",
                options: [
                    { text: "Si l'on oublie de l'insérer (ou si on l'écrase par erreur), les fonctions de lecture comme `printf` ou `strlen` vont continuer à lire la mémoire à l'infini jusqu'à provoquer un crash[cite: 2]", isCorrect: true },
                    { text: "Cela ralentit considérablement la compilation[cite: 2]", isCorrect: false }
                ],
                explanation: "Les fonctions du C s'appuient aveuglément sur la présence de cette sentinelle `\\0`. Sans elle, elles parcourent la mémoire indéfiniment (car le tableau ne connaît pas sa propre taille)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Concepts fondamentaux"],
                q: "En C, l'équation « Variable = ... » se résume à trois éléments fondamentaux. Lesquels[cite: 2] ?",
                options: [
                    { text: "Variable = adresse + type + valeur[cite: 2]", isCorrect: true },
                    { text: "Variable = nom + portée + fonction[cite: 2]", isCorrect: false }
                ],
                explanation: "C'est la clé de voûte de la mémoire en C : une variable est située à une adresse précise, elle stocke une valeur binaire pure, et c'est son type qui détermine comment cette valeur doit être interprétée et quelle est sa taille[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    }
});

