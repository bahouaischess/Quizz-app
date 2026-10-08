// ============================================================
// MatiÃ¨re : Programmation C : Cours 4 (Fonctions en C)
// Source : quizzhub-cours4-fonctions.json
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;

Object.assign(defaultData, {
"Programmation C : Cours 4 (Fonctions en C)": {
    "course":  "info",
    "folder":  "Programmation C",
    "description":  "Quiz sur le Cours 4 de L2 MIDO - MI (Florian Sikora, Université Paris-Dauphine) : portée des variables, fonctions, fonctions et tableaux, définition d\u0027une fonction et gestion des erreurs.",
    "prerequisites":  {

                      },
    "stats":  {
                  "attempts":  0,
                  "correct":  0
              },
    "dailyValidations":  {

                         },
    "questions":  [
                      {
                          "q":  "En C, par quoi un bloc est-il délimité ?",
                          "tags":  [
                                       "Portée des variables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Des parenthèses ( )",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Des accolades { }",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "L\u0027indentation du code",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Des points-virgules",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Un bloc est délimité par des accolades. L\u0027indentation n\u0027a aucun sens pour le compilateur C (contrairement à Python), et les parenthèses servent aux expressions et aux paramètres."
                      },
                      {
                          "q":  "Quelle est la durée de vie d\u0027une variable déclarée dans un bloc ?",
                          "tags":  [
                                       "Portée des variables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Toute l\u0027exécution du programme",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Jusqu\u0027à la fin de la fonction, même si elle est déclarée dans un sous-bloc",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle est bornée au bloc où elle a été déclarée",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Jusqu\u0027au prochain appel de free()",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le bloc définit la portée de la variable : elle n\u0027existe que dans le bloc où elle est déclarée. Seule une variable globale ou static vit plus longtemps, et free() n\u0027a rien à voir avec les variables locales."
                      },
                      {
                          "q":  "À quel moment l\u0027espace mémoire d\u0027une variable locale est-il libéré ?",
                          "tags":  [
                                       "Portée des variables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "À la fin du bloc où elle est déclarée",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "À la fin du programme uniquement",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Dès sa dernière utilisation dans le code",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Jamais, la mémoire est conservée",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027espace est alloué à la déclaration et libéré à la fin du bloc. Ce n\u0027est pas lié à la dernière utilisation de la variable."
                      },
                      {
                          "q":  "Qu\u0027appelle-t-on une variable globale ?",
                          "tags":  [
                                       "Portée des variables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Une variable déclarée avec le mot-clé global",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une variable déclarée dans main",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une variable déclarée en dehors de tout bloc",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Une variable passée en paramètre à toutes les fonctions",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Une variable globale est déclarée en dehors de tout bloc et est accessible depuis n\u0027importe quel bloc du fichier. Il n\u0027existe pas de mot-clé global en C, et une variable déclarée dans main est locale à main."
                      },
                      {
                          "q":  "Soit le code suivant :\n\nint a = 5, b = 12;\nint main() {\n    int a = 3, i = 0;\n    printf(\"%d\\n\", a); // (1)\n    return 0;\n}\n\nQue vaut ce qui est affiché en (1) ?",
                          "tags":  [
                                       "Portée des variables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "5",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "3",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "12",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Erreur de compilation : a est déclarée deux fois",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La variable locale a (= 3) masque la variable globale a (= 5) dans main. Il n\u0027y a pas d\u0027erreur car les deux variables sont dans des portées différentes."
                      },
                      {
                          "q":  "Soit le code suivant :\n\nint a = 5, b = 12;\nint main() {\n    int a = 3, i = 0;\n    for (i = 0; i \u003c 10; i++) {\n        int a = 2;\n        printf(\"%d\\n\", a);\n    }\n    return 0;\n}\n\nQue affiche la boucle ?",
                          "tags":  [
                                       "Portée des variables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "10 fois la valeur 3",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "10 fois la valeur 2",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les valeurs de 0 à 9",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "10 fois la valeur 5",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Dans le bloc du for, la variable locale a = 2 masque celle de main (3) et la globale (5). Le programme affiche donc 2 à chaque itération. Redéclarer a ainsi est cependant une mauvaise pratique (le cours dit « beurk »)."
                      },
                      {
                          "q":  "Dans le code suivant, que vaut ce qui est affiché ?\n\nint a = 5, b = 12;\nint main() {\n    int a = 3;\n    printf(\"%d\\n\", b);\n    return 0;\n}",
                          "tags":  [
                                       "Portée des variables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "3",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "5",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une valeur indéterminée",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "12",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Aucune variable locale ne s\u0027appelle b : c\u0027est donc la variable globale b (= 12) qui est utilisée."
                      },
                      {
                          "q":  "Pourquoi faut-il éviter les variables globales ?",
                          "tags":  [
                                       "Portée des variables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elles sont plus lentes que les variables locales",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elles sont difficiles à suivre (modularité du code) et ne sont pas thread-safe",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elles sont interdites par le compilateur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elles ne peuvent contenir que des entiers",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les globales sont accessibles et modifiables de partout, ce qui rend le code difficile à suivre et peu modulaire. Elles posent aussi problème en multithreading. Elles sont autorisées par le compilateur et peuvent avoir n\u0027importe quel type."
                      },
                      {
                          "q":  "Qu\u0027est-ce que « masquer » une variable ?",
                          "tags":  [
                                       "Portée des variables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La rendre inaccessible depuis les autres fichiers",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Supprimer sa valeur de la mémoire",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La déclarer const",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Déclarer une variable locale de même nom qu\u0027une variable située dans une portée plus large",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Une variable locale peut masquer une variable de même nom située dans une portée plus large : à l\u0027intérieur du bloc, le nom désigne la variable locale."
                      },
                      {
                          "q":  "Que affiche ce programme ?\n\nint varGlob = 0;\nvoid f(void) {\n    printf(\"Appel de f : %d\\n\", ++varGlob);\n}\nint main(void) {\n    int i;\n    for (i = 0; i \u003c 10; i++)\n        f();\n    return 0;\n}",
                          "tags":  [
                                       "Portée des variables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "« Appel de f : 0 » dix fois",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "« Appel de f : 1 » dix fois",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "« Appel de f : 1 », « Appel de f : 2 », ..., « Appel de f : 10 »",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "« Appel de f : 0 », « Appel de f : 1 », ..., « Appel de f : 9 »",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "varGlob est globale : elle conserve sa valeur d\u0027un appel à l\u0027autre. ++varGlob incrémente avant d\u0027afficher, donc on obtient 1, 2, ..., 10."
                      },
                      {
                          "q":  "Que affiche ce programme ?\n\nvoid f(void) {\n    int cumul = 0;\n    printf(\"Appel de f : %d\\n\", ++cumul);\n}\nint main(void) {\n    int i;\n    for (i = 0; i \u003c 10; i++)\n        f();\n    return 0;\n}",
                          "tags":  [
                                       "Portée des variables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "« Appel de f : 1 » dix fois",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "« Appel de f : 1 », « Appel de f : 2 », ..., « Appel de f : 10 »",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "« Appel de f : 0 » dix fois",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une erreur de compilation",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "cumul est une variable locale recréée à chaque appel de f et initialisée à 0. ++cumul vaut donc toujours 1."
                      },
                      {
                          "q":  "Que affiche ce programme ?\n\nvoid f(void) {\n    static int cumul = 0;\n    printf(\"Appel de f : %d\\n\", ++cumul);\n}\nint main(void) {\n    int i;\n    for (i = 0; i \u003c 10; i++)\n        f();\n    return 0;\n}",
                          "tags":  [
                                       "Portée des variables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "« Appel de f : 1 » dix fois",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "« Appel de f : 0 » dix fois",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "« Appel de f : 1 », « Appel de f : 2 », ..., « Appel de f : 10 »",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Une erreur de compilation car static est interdit dans une fonction",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Une variable static est initialisée une seule fois à la compilation, existe pendant tout le programme et garde sa valeur entre deux appels. Elle reste visible seulement dans f, contrairement à une globale."
                      },
                      {
                          "q":  "Quelle est la particularité d\u0027une variable locale déclarée static ?",
                          "tags":  [
                                       "Portée des variables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elle est visible depuis tout le programme",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle est initialisée à la compilation, existe et garde sa valeur entre deux appels",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle est recréée à chaque appel de la fonction",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle ne peut pas être modifiée",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "static donne à la variable une durée de vie égale à celle du programme, avec conservation de la valeur, tout en limitant sa visibilité au bloc. Ne pas confondre avec const (non modifiable) ou avec une globale (visible partout)."
                      },
                      {
                          "q":  "Que se passe-t-il avec ce code ?\n\nfor (int i = 0; i \u003c 10; i = i + 1) {\n    ...\n}\nprintf(\"%d\", i);",
                          "tags":  [
                                       "Portée des variables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Affiche 10",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Affiche 9",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Erreur de compilation : i n\u0027existe plus après le for",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Affiche 0",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Une variable déclarée dans l\u0027en-tête du for n\u0027existe que dans ce for. Après la boucle, i n\u0027est plus déclarée, donc le printf ne compile pas."
                      },
                      {
                          "q":  "Que affiche ce code (le corps de la boucle ne modifie pas i) ?\n\nint i;\nfor (i = 0; i \u003c 10; i = i + 1) {\n    ...\n}\nprintf(\"%d\", i);",
                          "tags":  [
                                       "Portée des variables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "10",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "9",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Erreur de compilation",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Ici i est déclarée avant le for, dans le bloc englobant : elle reste accessible après la boucle. La boucle s\u0027arrête quand i vaut 10, donc 10 est affiché."
                      },
                      {
                          "q":  "Ce programme compile-t-il ?\n\n#include \u003cstdio.h\u003e\nint main(void) {\n    {\n        int a = 1;\n        printf(\"a = %d\\n\", a);\n    }\n    int b = a;\n    printf(\"b = %d\\n\", b);\n    return 0;\n}",
                          "tags":  [
                                       "Portée des variables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Oui, et il affiche a = 1 puis b = 1",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Oui, mais b contient une valeur indéterminée",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Non, car a n\u0027est plus visible à la ligne int b = a;",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Non, car on ne peut pas ouvrir un bloc sans instruction de contrôle",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "a est déclarée dans un bloc interne qui se ferme avant la ligne int b = a;. Elle n\u0027existe plus à cet endroit : erreur de compilation. Ouvrir un bloc seul avec des accolades est en revanche parfaitement valide."
                      },
                      {
                          "q":  "Que affiche ce programme et pourquoi ?\n\nint main(void) {\n    for (int i = 0; i \u003c 2; i++) {\n        int x = 0;\n        printf(\"x = %d\\n\", x);\n        x = x + 1;\n    }\n    return 0;\n}",
                          "tags":  [
                                       "Portée des variables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "x = 0 puis x = 1, car x est incrémentée entre les deux itérations",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "x = 0 puis x = 0, car x est recréée et réinitialisée à chaque itération",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "x = 1 puis x = 2",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "x = 0 puis x = 0, car x est static",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "x est déclarée dans le bloc du for : elle est créée, initialisée à 0, puis détruite à la fin de chaque itération. Sa valeur n\u0027est donc jamais conservée. Elle ne serait conservée que si elle était déclarée avant la boucle ou static."
                      },
                      {
                          "q":  "Parmi ces propositions, laquelle ne fait PAS partie des caractéristiques d\u0027un prototype de fonction ?",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le type de retour",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le nom de la fonction",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La liste des paramètres (types et noms)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le corps de la fonction (ses instructions)",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Le prototype contient le type de retour, le nom et la liste des paramètres. Les instructions forment le corps, présent seulement dans la définition."
                      },
                      {
                          "q":  "Quelle affirmation sur la définition de fonctions en C est correcte ?",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "On peut imbriquer une fonction dans une autre fonction",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Deux fonctions peuvent avoir le même nom si leurs paramètres diffèrent",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le nom d\u0027une fonction doit être unique dans le programme",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Une fonction peut avoir le même nom qu\u0027une variable globale",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "En C, le nom d\u0027une fonction doit être unique dans le programme (pas de surcharge), il ne doit pas coïncider avec une variable globale, et les fonctions imbriquées ne sont pas permises."
                      },
                      {
                          "q":  "Que signifie void utilisé comme type de retour ?",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La fonction ne renvoie aucune valeur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La fonction renvoie toujours 0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La fonction ne prend aucun paramètre",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La fonction renvoie une valeur quelconque",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "void en type de retour signifie l\u0027absence de retour. Utilisé dans la liste des paramètres, il indique l\u0027absence de paramètre : ce sont deux usages différents."
                      },
                      {
                          "q":  "Pourquoi écrire int get_day(void) plutôt que int get_day() ?",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Sans void, la fonction ne peut pas renvoyer d\u0027entier",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Sans void, le compilateur ne vérifie pas explicitement l\u0027absence de paramètres",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Sans void, la fonction est automatiquement static",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il n\u0027y a aucune différence, c\u0027est purement esthétique",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Avec (void), le compilateur sait que la fonction n\u0027a aucun paramètre et vérifie les appels. Avec (), cette vérification n\u0027est pas faite explicitement : le cours recommande donc de l\u0027éviter."
                      },
                      {
                          "q":  "Que fait l\u0027instruction return dans une fonction ?",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elle quitte la fonction (peu importe où elle se trouve) et renvoie la valeur de l\u0027expression si le type de retour n\u0027est pas void",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle renvoie la valeur mais continue d\u0027exécuter la suite de la fonction",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle ne peut apparaître qu\u0027à la dernière ligne de la fonction",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle quitte toujours le programme entier",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "return interrompt immédiatement la fonction, où qu\u0027il soit placé, et transmet la valeur à l\u0027appelant. Il ne quitte le programme que dans le cas particulier de main (appelée comme point d\u0027entrée)."
                      },
                      {
                          "q":  "Soit void print_sum(float a, float b) { ... }. Que se passe-t-il avec sum = print_sum(3.5, 1.5); ?",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "sum reçoit 5.0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "sum reçoit 0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "On ne peut pas utiliser la valeur de retour d\u0027une fonction qui renvoie void : le compilateur signale un problème",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La fonction n\u0027est pas exécutée",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Une fonction void ne renvoie rien : on ne peut pas utiliser son résultat dans une affectation."
                      },
                      {
                          "q":  "Peut-on appeler float print_and_return(float a, float b) en ignorant sa valeur de retour (par exemple print_and_return(3.5, 1.5); seul sur une ligne) ?",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Non, c\u0027est une erreur de compilation",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Oui, on peut ignorer la valeur de retour d\u0027une fonction (comme on le fait avec printf ou scanf)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Oui, mais la fonction n\u0027est alors pas exécutée",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Oui, mais uniquement pour les fonctions void",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Ignorer la valeur de retour est permis : la fonction est exécutée normalement et son résultat est simplement perdu. C\u0027est ce que l\u0027on fait couramment avec printf et scanf."
                      },
                      {
                          "q":  "Quelle est la convention pour la valeur renvoyée par return dans main ?",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "0 indique un succès, toute autre valeur indique une erreur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "0 indique une erreur, 1 indique un succès",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La valeur renvoyée n\u0027est jamais utilisée",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Toute valeur positive indique un succès",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Par convention, main renvoie 0 en cas de succès et une autre valeur en cas d\u0027erreur (ce code est exploité par le système, voir cours système)."
                      },
                      {
                          "q":  "Comment sont passés les arguments à une fonction en C ?",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Par référence : la fonction modifie la variable de l\u0027appelant",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Par valeur uniquement pour les types simples, par référence pour les autres",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Toujours par valeur (copie)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Cela dépend du mot-clé utilisé dans l\u0027appel",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "En C, les arguments sont toujours passés par valeur : la valeur est recopiée dans les variables locales de la fonction (sur la pile). Une fonction ne peut donc pas modifier directement une variable qui lui est passée."
                      },
                      {
                          "q":  "Que affiche ce programme à la dernière ligne ?\n\nint f(int x) {\n    x++;\n    return x;\n}\nint main(void) {\n    int i = 10;\n    printf(\"%d\\n\", i);\n    f(i);\n    printf(\"%d\\n\", i);\n    return 0;\n}",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "11",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "10",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une erreur de compilation",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "f reçoit une copie de i dans x : l\u0027incrémentation de x n\u0027a aucun effet sur i. De plus, la valeur renvoyée par f(i) est ignorée. i vaut toujours 10."
                      },
                      {
                          "q":  "À quel moment les arguments d\u0027un appel de fonction sont-ils évalués ?",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Avant l\u0027appel de la fonction",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Au fur et à mesure que la fonction les utilise",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "À la fin de la fonction",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "À la compilation uniquement",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les arguments sont des expressions évaluées avant l\u0027appel ; leurs valeurs sont ensuite copiées dans les paramètres. La fonction ne connaît pas l\u0027origine de ces valeurs."
                      },
                      {
                          "q":  "Soit void foo(int a, int b) { }. Que se passe-t-il avec foo(5); ?",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Ça compile, b vaut 0 par défaut",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Ça compile avec un simple warning",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Ça compile, b est indéterminé",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Ça ne compile pas : le nombre d\u0027arguments ne correspond pas au prototype",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Le compilateur vérifie le nombre et le type des arguments par rapport au prototype (s\u0027il le connaît). Un argument manquant provoque une erreur de compilation ; C n\u0027a pas de valeurs par défaut pour les paramètres."
                      },
                      {
                          "q":  "Soit void foo(int a, int b) { }. Que se passe-t-il avec foo(4.5, 3); ?",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Conversion implicite de 4.5 en int (le compilateur procède à la conversion)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Erreur de compilation, car 4.5 n\u0027est pas un int",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le paramètre a devient automatiquement un double",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027appel est ignoré",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le compilateur effectue des conversions implicites quand c\u0027est possible : le double 4.5 est converti en int (donc 4). Passer une chaîne de caractères à la place d\u0027un int, en revanche, génère un warning."
                      },
                      {
                          "q":  "Que affiche ce programme ?\n\ndouble f(double x) {\n    return x+1;\n}\nint main(void) {\n    double dd;\n    dd = f(10);\n    printf(\"%f\\n\", dd);\n    return 0;\n}",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "11",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "11.000000",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "10.000000",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Erreur de compilation car 10 est un int",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027entier 10 est converti implicitement en double ; f renvoie 11.0 et %f affiche 11.000000 (6 décimales par défaut)."
                      },
                      {
                          "q":  "Quelle est la différence entre déclaration et définition d\u0027une fonction ?",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La déclaration contient le code, la définition seulement le prototype",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La définition contient le code (implémentation), la déclaration est le prototype terminé par un point-virgule",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Il n\u0027y a aucune différence",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La déclaration réserve la mémoire de la fonction, la définition non",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Définition = code de la fonction ; déclaration = prototype avec ; et sans code. Une définition est aussi une déclaration, mais pas l\u0027inverse."
                      },
                      {
                          "q":  "Dans quel cas ce code compile-t-il correctement ?",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "void bar(void) { foo(); }\nvoid foo(void) { }",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "void foo(void);\nvoid bar(void) { foo(); }\nvoid foo(void) { }",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "void bar(void) { foo(); }",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Aucun, une fonction ne peut pas en appeler une autre",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Une fonction doit être déclarée avant d\u0027être appelée. La deuxième proposition déclare foo (prototype) avant bar, puis la définit ensuite. La première appelle foo avant toute déclaration, ce qui est à éviter (déclaration implicite)."
                      },
                      {
                          "q":  "Soit void foo(int a, int b, int c) { ... } et l\u0027appel foo(1, num, 2+4); Que sont a, b, c et 1, num, 2+4 ?",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "a, b, c sont des arguments ; 1, num, 2+4 sont des paramètres",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "a, b, c sont des paramètres ; 1, num, 2+4 sont des arguments",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Ce sont tous des paramètres",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Ce sont tous des arguments",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Mnémotechnique du cours : paramètres ↔ prototype, arguments ↔ appel. Les paramètres sont les variables locales déclarées dans le prototype ; les arguments sont les expressions passées lors de l\u0027appel."
                      },
                      {
                          "q":  "Quel est l\u0027effet du mot-clé static devant la définition d\u0027une fonction ?",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La fonction garde ses variables locales entre deux appels",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La fonction devient visible dans tous les fichiers du programme",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La fonction ne peut plus être appelée récursivement",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La visibilité de la fonction est restreinte au fichier où elle est définie",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Normalement une fonction est visible de tout le programme. static restreint sa visibilité à un seul fichier : utile pour des fonctions auxiliaires privées ou pour éviter les collisions de noms."
                      },
                      {
                          "q":  "Que reçoit réellement une fonction à qui l\u0027on passe un tableau en argument ?",
                          "tags":  [
                                       "Fonctions et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Une copie complète du tableau",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une copie de l\u0027adresse du premier élément du tableau",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Uniquement la taille du tableau",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le premier élément du tableau seulement",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "En C, un tableau se convertit souvent en l\u0027adresse de son premier élément. C\u0027est cette adresse (copiée, comme tout argument) que la fonction reçoit, pas le tableau lui-même."
                      },
                      {
                          "q":  "Quelles sont les conséquences du passage d\u0027un tableau à une fonction ?",
                          "tags":  [
                                       "Fonctions et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La fonction connaît automatiquement la taille du tableau et ne peut pas le modifier",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La fonction ne connaît pas la taille du tableau et peut en modifier les éléments",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La fonction connaît la taille du tableau et peut le modifier",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La fonction ne connaît pas la taille du tableau et ne peut pas le modifier",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Comme seule l\u0027adresse du premier élément est transmise, la taille est perdue (il faut la passer en paramètre) et les éléments pointés sont ceux du tableau d\u0027origine : la fonction peut donc les modifier."
                      },
                      {
                          "q":  "Que se passe-t-il avec ce code ?\n\nint* foo(int n) {\n    int tab[n];\n    tab[0] = 1;\n    return tab;\n}\nint main(void) {\n    int* t = foo(10);\n    printf(\"%d\\n\", t[0]);\n    return 0;\n}",
                          "tags":  [
                                       "Fonctions et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Ça ne compile pas",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Ça compile et affiche toujours 1",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Ça compile, mais le programme plante (comportement indéfini)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Ça affiche 10",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "tab est une variable locale détruite à la fin de foo. L\u0027adresse renvoyée est donc invalide (voire réutilisée par d\u0027autres variables locales). Le code compile mais plante. Il ne faut jamais renvoyer l\u0027adresse d\u0027une variable locale."
                      },
                      {
                          "q":  "Que se passe-t-il avec ce code ?\n\nvoid foo(const int t[]) {\n    t[0] = 1;\n}",
                          "tags":  [
                                       "Fonctions et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Ça compile et t[0] est modifié",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Ça compile mais l\u0027écriture est ignorée à l\u0027exécution",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Ça ne compile pas, car const interdit de modifier les éléments du tableau",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Ça compile mais plante à l\u0027exécution",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le mot-clé const empêche la modification des éléments du tableau dans la fonction : l\u0027affectation t[0] = 1 est refusée par le compilateur."
                      },
                      {
                          "q":  "Comment peut-on empêcher une fonction de modifier les éléments d\u0027un tableau qu\u0027on lui passe ?",
                          "tags":  [
                                       "Fonctions et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "En déclarant le tableau static",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "En utilisant le mot-clé const sur le paramètre",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "En renvoyant le tableau avec return",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Ce n\u0027est pas possible en C",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le mot-clé const (ex. const int t[]) empêche la modification des éléments dans la fonction. static concerne la durée de vie ou la visibilité, pas la modification."
                      },
                      {
                          "q":  "Pourquoi est-il inutile et dangereux de renvoyer un tableau depuis une fonction ?",
                          "tags":  [
                                       "Fonctions et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le tableau serait copié intégralement, ce qui est trop lent",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Seul un tableau de char peut être renvoyé",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il serait renvoyé sous forme d\u0027adresse d\u0027une variable locale détruite ; et c\u0027est inutile car on peut déjà modifier le tableau passé en argument",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "C\u0027est interdit par la syntaxe : le compilateur refuse toujours",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "return renvoie la valeur de l\u0027expression, c\u0027est-à-dire ici une adresse. Si le tableau est local, il disparaît à la fin de la fonction. Inutile aussi car la fonction peut modifier directement le tableau fourni par l\u0027appelant."
                      },
                      {
                          "q":  "Pour un tableau à plusieurs dimensions passé à une fonction, quelle(s) dimension(s) faut-il préciser ?",
                          "tags":  [
                                       "Fonctions et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Aucune",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Toutes les dimensions sauf la première",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Uniquement la première dimension",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Toutes les dimensions sauf la dernière",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Il faut préciser toutes les dimensions sauf la première : void foo(int t[][M]) est valide, void foo(int t[][]) ne compile pas."
                      },
                      {
                          "q":  "Parmi ces prototypes, lequel est valide pour passer un tableau à deux dimensions (M étant une constante) ?",
                          "tags":  [
                                       "Fonctions et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "void foo(int t[][])",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "void foo(int t[][M])",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "void foo(int t[M][])",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "void foo(int t[][][])",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Seule la première dimension peut être omise. int t[][M] est donc valide, alors que int t[][] et int t[M][] ne compilent pas."
                      },
                      {
                          "q":  "Soit int t[100][16]; Que représente t[i] ?",
                          "tags":  [
                                       "Fonctions et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Un entier",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Un tableau de 100 entiers",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Un tableau de 16 entiers",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un tableau de 1600 entiers",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "int t[100][16] est un tableau de 100 tableaux de 16 entiers : chaque t[i] est donc un tableau de 16 entiers."
                      },
                      {
                          "q":  "Dans un tableau t à deux dimensions dont la deuxième dimension vaut M, quel est le décalage de t[i][j] par rapport au début du tableau ?",
                          "tags":  [
                                       "Fonctions et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "i + j",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "i * j",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "j * M + i",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "i * M + j",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Les lignes sont stockées les unes après les autres : pour atteindre la ligne i, on saute i lignes de M éléments, puis on avance de j. D\u0027où i * M + j."
                      },
                      {
                          "q":  "Pourquoi une fonction doit-elle connaître le nombre de colonnes d\u0027un tableau à deux dimensions ?",
                          "tags":  [
                                       "Fonctions et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Pour pouvoir afficher le tableau avec printf",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Pour calculer l\u0027adresse mémoire de t[i][j] lors de l\u0027accès",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Pour que le compilateur alloue le tableau dans la fonction",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Pour empêcher la modification du tableau",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Seule l\u0027adresse du premier élément est transmise. Pour trouver t[i][j] (adresse de début + i * M + j), la fonction a besoin de M, la taille de la deuxième dimension."
                      },
                      {
                          "q":  "Quel principe de conception illustre l\u0027exemple d\u0027une fonction minimum qui calcule le minimum ET l\u0027affiche avec printf ?",
                          "tags":  [
                                       "Définir une fonction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "C\u0027est une bonne pratique : une fonction doit toujours afficher son résultat",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "C\u0027est une mauvaise pratique : 1 fonction = 1 tâche, il ne faut pas mélanger calcul et affichage",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "C\u0027est interdit par le compilateur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "C\u0027est nécessaire quand la fonction renvoie un int",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le cours indique « 1 fonction = 1 tâche ». Mieux vaut que minimum se contente de renvoyer le résultat, et que l\u0027affichage soit fait par l\u0027appelant (ex. dans main)."
                      },
                      {
                          "q":  "Quelles sont les trois manières de gérer les cas d\u0027erreur d\u0027une fonction présentées dans le cours ?",
                          "tags":  [
                                       "Définir une fonction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Un commentaire, un code d\u0027erreur renvoyé, un message d\u0027erreur suivi de l\u0027arrêt du programme",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un try/catch, un code d\u0027erreur, un assert",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une variable globale, un goto, un exit()",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Un commentaire, une boucle infinie, un return void",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le cours présente : 1) mettre un commentaire, 2) renvoyer un code d\u0027erreur, 3) afficher un message d\u0027erreur et quitter le programme. Le C n\u0027a pas de try/catch."
                      },
                      {
                          "q":  "Quand utiliser un simple commentaire pour traiter un cas d\u0027erreur, et quelle est sa limite ?",
                          "tags":  [
                                       "Définir une fonction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Quand la fonction n\u0027est pas supposée être appelée dans certains cas ; mais il n\u0027a aucun impact si le programmeur ne le respecte pas",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Quand l\u0027erreur est grave ; le commentaire arrête alors le programme",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Toujours ; le compilateur vérifie le respect du commentaire",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Jamais, les commentaires sont ignorés par les programmeurs",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le commentaire documente les cas où la fonction ne doit pas être appelée (ex. « dst est supposé assez grand », « w n\u0027est pas supposé être NULL »). Le compilateur ne le vérifie pas : s\u0027il n\u0027est pas respecté, rien ne se passe de spécial."
                      },
                      {
                          "q":  "Soit #define ERROR_CODE -1 et int minimum(int t[], int size) qui renvoie ERROR_CODE si size \u003c= 0 et sinon le minimum du tableau. Quel est le problème ?",
                          "tags":  [
                                       "Définir une fonction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "On ne peut pas savoir si on a une erreur ou si le minimum vaut réellement -1",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le #define est interdit dans une fonction",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une fonction ne peut pas renvoyer de valeur négative",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il n\u0027y a aucun problème",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le code d\u0027erreur -1 est aussi une valeur de retour légitime (le minimum peut valoir -1). On doit toujours pouvoir distinguer un cas d\u0027erreur d\u0027un cas normal."
                      },
                      {
                          "q":  "Soit int length(char* s) renvoyant ERROR_CODE (-1) si s est NULL, et sinon la longueur de la chaîne. Pourquoi ce choix de code d\u0027erreur est-il acceptable ?",
                          "tags":  [
                                       "Définir une fonction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Parce que -1 est toujours un bon code d\u0027erreur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce qu\u0027une chaîne ne peut pas avoir de longueur négative : -1 ne peut jamais être un résultat normal",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce que la fonction renvoie un int",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que NULL vaut -1",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Une longueur est toujours ≥ 0, donc la valeur -1 est disponible pour signaler l\u0027erreur sans ambiguïté. Le choix d\u0027un code d\u0027erreur n\u0027est valable que s\u0027il est en dehors des valeurs de retour normales."
                      },
                      {
                          "q":  "Que faire quand toutes les valeurs de retour possibles sont déjà des résultats valides (ex. un quotient de deux entiers) ?",
                          "tags":  [
                                       "Définir une fonction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Renvoyer 0 en cas d\u0027erreur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Ne rien faire, le programmeur doit faire attention",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Changer la manière de récupérer le résultat : le code de succès/erreur est renvoyé et le résultat est écrit via un pointeur passé en paramètre (comme scanf)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Utiliser une variable globale nommée erreur",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Dans l\u0027exemple int quotient(int a, int b, int * res), la fonction renvoie un code (ERROR_CODE si b == 0, SUCCESS_CODE sinon) et écrit le résultat dans *res. Ce mécanisme sera détaillé dans le cours sur les pointeurs."
                      },
                      {
                          "q":  "Dans quel cas est-il approprié d\u0027afficher un message d\u0027erreur et de quitter le programme avec exit(EXIT_FAILURE) ?",
                          "tags":  [
                                       "Définir une fonction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "À chaque fois qu\u0027un paramètre est invalide",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Uniquement pour les erreurs insurmontables et très graves (plus de mémoire, problème d\u0027E/S, mauvais arguments du programme...)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "À la place de return à la fin de chaque fonction",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Seulement dans la fonction main",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "exit() est à réserver aux cas très graves. Le message doit être explicite et le code de sortie différent de 0 (EXIT_FAILURE). Pour les erreurs courantes, on préfère un code d\u0027erreur renvoyé à l\u0027appelant."
                      },
                      {
                          "q":  "Quelle bonne pratique est illustrée par la seconde version de get_value (celle avec if (s==NULL) return -1; en tête de fonction) ?",
                          "tags":  [
                                       "Définir une fonction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Tester les erreurs le plus tôt possible et éviter les else inutiles",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Toujours utiliser un seul return en fin de fonction",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Ne jamais utiliser de boucle while",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Déclarer toutes les variables en début de fonction",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Vérifier les cas d\u0027erreur en premier et retourner immédiatement évite les else imbriqués et rend le code plus lisible. La version avec un seul return et une cascade de else est plus lourde."
                      },
                      {
                          "q":  "Quelles sont les précautions à prendre avec une fonction récursive ?",
                          "tags":  [
                                       "Définir une fonction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Il faut une condition d\u0027arrêt (sinon boucle infinie) et on doit se méfier de la pile d\u0027appels qui gonfle (stack overflow)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Il faut la déclarer static",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle ne peut pas avoir de paramètres",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle doit obligatoirement renvoyer void",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Une fonction qui s\u0027appelle elle-même doit avoir une condition d\u0027arrêt. Chaque appel ajoute un cadre sur la pile, d\u0027où un risque de stack overflow : à éviter ou à utiliser de manière judicieuse."
                      },
                      {
                          "q":  "Comparez la factorielle récursive (if (n == 1) return 1; return n * factorial(n-1);) et la version itérative (boucle while avec r *= n--). Quelles sont leurs complexités ?",
                          "tags":  [
                                       "Définir une fonction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Récursive : O(n) en temps et O(n) en mémoire (pile) ; itérative : O(n) en temps et O(1) en mémoire",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Récursive : O(1) en temps ; itérative : O(n) en temps",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les deux sont O(n) en temps et O(n) en mémoire",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Récursive : O(n²) en temps ; itérative : O(n) en temps",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les deux versions font n multiplications (O(n) en temps). La version récursive empile n appels (O(n) d\u0027espace sur la pile), alors que l\u0027itérative n\u0027utilise que quelques variables (O(1))."
                      },
                      {
                          "q":  "Parmi ces règles du « doggy bag » du cours, laquelle est exacte ?",
                          "tags":  [
                                       "À retenir"
                                   ],
                          "options":  [
                                          {
                                              "text":  "On peut renvoyer l\u0027adresse d\u0027une variable locale si on la copie avant",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il ne faut jamais renvoyer l\u0027adresse d\u0027une variable locale",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Il est conseillé d\u0027utiliser des variables globales pour partager les données",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une fonction peut être appelée avant d\u0027être déclarée sans aucun risque",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Une variable locale est détruite à la fin de la fonction : son adresse devient invalide. Il faut aussi éviter les globales et déclarer toute fonction avant son utilisation."
                      },
                      {
                          "q":  "Parmi ces affirmations de synthèse, lesquelles sont vraies ?",
                          "tags":  [
                                       "À retenir"
                                   ],
                          "options":  [
                                          {
                                              "text":  "On peut passer un tableau à une fonction mais pas le renvoyer",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Pour un tableau à plusieurs dimensions, toutes les dimensions sauf la première doivent être connues dans la fonction",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Une fonction peut modifier la variable d\u0027origine passée en argument par valeur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une variable locale conserve sa valeur entre deux appels de la fonction",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les deux premières propositions sont dans le « doggy bag ». Les deux autres sont fausses : les arguments sont passés par copie, et une variable locale (non static) est recréée à chaque appel."
                      }
                  ]
}
});