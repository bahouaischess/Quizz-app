// ============================================================
// MatiÃ¨re : Programmation C : Mémoire, pointeurs et tableaux (Cours 5)
// Source : c-cours5-memoire-pointeurs.json
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;

Object.assign(defaultData, {
"Programmation C : Mémoire, pointeurs et tableaux (Cours 5)": {
    "course":  "info",
    "folder":  "Programmation C",
    "description":  "Adresses et pointeurs, const et void*, pointeurs de pointeurs, mémoire virtuelle, pile et tas, arithmétique des pointeurs, tableaux et arguments de fonctions, retour de tableaux locaux.",
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
                          "q":  "Pourquoi gérer la mémoire en C ?",
                          "tags":  [
                                       "Adresses et pointeurs"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le passage des paramètres est par valeur : les pointeurs permettent de court-circuiter cette limite",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Pour gérer dynamiquement la mémoire avec les structures de données",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Pour éviter les fuites de mémoire, si l\u0027on est consciencieux",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce que le C libère automatiquement toute la mémoire allouée dynamiquement",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C ne possède pas de ramasse-miettes : la mémoire allouée dynamiquement doit être gérée par le programmeur, sans quoi on obtient des fuites. Les pointeurs répondent aussi à la contrainte du passage par valeur."
                      },
                      {
                          "q":  "Qu\u0027est-ce qu\u0027un pointeur ?",
                          "tags":  [
                                       "Adresses et pointeurs"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Une variable dont la valeur est une adresse mémoire, avec un type cible spécifié",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Une variable qui stocke une copie de la valeur d\u0027une autre variable",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une adresse constante, sans type associé",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Un type entier spécial sans lien avec la mémoire",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Un pointeur est un type particulier, dénoté par une étoile après le type cible (int *p, char *p, double *p). Sa valeur est une adresse, et le type cible indique comment interpréter la zone pointée."
                      },
                      {
                          "q":  "Concernant les opérateurs \u0026 et * :",
                          "tags":  [
                                       "Adresses et pointeurs"
                                   ],
                          "options":  [
                                          {
                                              "text":  "\u0026 récupère l\u0027adresse d\u0027une variable sous forme d\u0027un pointeur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "* appliqué à un pointeur récupère le contenu de la mémoire à l\u0027adresse pointée (déréférencement)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "* sert à la fois à déclarer un pointeur et à accéder à la valeur pointée",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "\u0026 permet de récupérer la valeur pointée par un pointeur",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "\u0026 donne l\u0027adresse, * donne le contenu. Le piège est la double vie de * : dans une déclaration (int *p) il indique un type pointeur, dans une expression (*p) il déréférence."
                      },
                      {
                          "q":  "Soit int a = 42; int *p = \u0026(a); int c = *(p); Quelles affirmations sont exactes ?",
                          "tags":  [
                                       "Adresses et pointeurs"
                                   ],
                          "options":  [
                                          {
                                              "text":  "p contient l\u0027adresse de a",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "c vaut 42",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "*p désigne la valeur de a",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Sur l\u0027architecture du cours, p occupe 32 bits comme a puisqu\u0027il pointe sur un int",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le pointeur p est lui-même une variable qui stocke une adresse : sur une machine 64 bits il occupe 64 bits (8 octets), quelle que soit la taille du type pointé. Ici a et c occupent 32 bits chacun."
                      },
                      {
                          "q":  "Concernant ces déclarations : long *pl, l;   char *a, *b;   int* p, q;",
                          "tags":  [
                                       "Adresses et pointeurs"
                                   ],
                          "options":  [
                                          {
                                              "text":  "pl est un pointeur sur long et l est un long",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "a et b sont deux pointeurs sur char",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Dans int* p, q; seul p est un pointeur, q est un int",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "int* p, q; déclare deux pointeurs sur int",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027étoile se rattache au nom de variable, pas au type : il faut la répéter pour chaque pointeur. C\u0027est pourquoi le style int *p est recommandé : il évite l\u0027étourderie int* p, q;."
                      },
                      {
                          "q":  "Pourquoi un pointeur est-il associé à un type (celui de la case pointée) ?",
                          "tags":  [
                                       "Adresses et pointeurs"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Pour que le compilateur sache combien d\u0027octets considérer à l\u0027adresse pointée en lecture ou en écriture",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Pour définir la taille de la variable pointeur elle-même",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Pour interdire au pointeur de valoir NULL",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Pour rendre l\u0027opérateur \u0026 utilisable",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le type cible détermine l\u0027interprétation de la zone mémoire (nombre d\u0027octets et format), mais pas la taille du pointeur, qui reste celle d\u0027une adresse. Le type sert aussi à l\u0027arithmétique des pointeurs."
                      },
                      {
                          "q":  "Concernant les pointeurs non initialisés :",
                          "tags":  [
                                       "Adresses et pointeurs"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Un pointeur déclaré n\u0027est pas initialisé par défaut : il ne contient pas d\u0027adresse légitime",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le déréférencer peut provoquer un plantage ou une lecture/écriture dans une zone imprévisible",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Bonne pratique : l\u0027initialiser à NULL s\u0027il n\u0027a pas d\u0027adresse légitime, ce qui permet de tester if (p != NULL)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un pointeur déclaré sans initialisation vaut automatiquement NULL",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le contenu d\u0027un pointeur local non initialisé est indéterminé. Avec les bonnes options de gcc, un warning est émis. Initialiser à NULL rend l\u0027état testable explicitement."
                      },
                      {
                          "q":  "Que se passe-t-il lorsqu\u0027on déréférence un pointeur NULL ?",
                          "tags":  [
                                       "Adresses et pointeurs"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le comportement est indéfini, avec souvent un plantage",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "On obtient toujours la valeur 0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le compilateur alloue automatiquement la mémoire nécessaire",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le programme continue normalement, l\u0027écriture étant ignorée",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "NULL (ou 0) signifie que le pointeur ne pointe vers aucune adresse valide. On le teste avant usage : if (p != NULL) { *p = 5; }. Le déréférencer sans test est un comportement indéfini."
                      },
                      {
                          "q":  "Après int i = 5; int *pi; pi = \u0026i; *pi = 10; pi += 1; quelles affirmations sont exactes ?",
                          "tags":  [
                                       "Adresses et pointeurs"
                                   ],
                          "options":  [
                                          {
                                              "text":  "i vaut 10",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "pi += 1 déplace le pointeur d\u0027un int, soit sizeof(int) octets plus loin",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "pi += 1 incrémente la valeur de i",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "*pi = 10 modifie le pointeur pi lui-même",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "*pi = 10 modifie la variable pointée, donc i. pi += 1 modifie le pointeur, pas la valeur : il pointe désormais sur la case suivante, à une adresse qui n\u0027est plus légitime ici. Confusion classique entre *pi += 1 (modifie i) et pi += 1 (modifie pi)."
                      },
                      {
                          "q":  "Avec char t[10], *p, *q; p = \u0026t[0]; q = p + 3; vers quoi pointe q ?",
                          "tags":  [
                                       "Adresses et pointeurs"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Vers t[3]",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Vers t[2]",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Vers t[0], mais avec la valeur augmentée de 3",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Vers une adresse invalide car on ne peut pas additionner un entier à un pointeur",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "On peut initialiser un pointeur à partir d\u0027un autre pointeur du même type. p + 3 avance de 3 éléments : t[0] + 3 positions donne t[3]. Attention à ne pas confondre avec *p + 3 qui ajouterait 3 à la valeur pointée."
                      },
                      {
                          "q":  "Soit void fct(int i) { i = 10; }  void fct_2(int *ptr) { *ptr = 10; }  avec int i = 5 dans main. On affiche i, puis on appelle fct(i) et on affiche i, puis fct_2(\u0026i) et on affiche i. Quelle est la suite affichée ?",
                          "tags":  [
                                       "Adresses et pointeurs"
                                   ],
                          "options":  [
                                          {
                                              "text":  "5, 5, 10",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "5, 10, 10",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "10, 10, 10",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "5, 5, 5",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "fct reçoit une copie de i : la modification reste locale. fct_2 reçoit l\u0027adresse de i et écrit à cette adresse, donc modifie la variable de l\u0027appelant. C\u0027est l\u0027utilisation classique des pointeurs pour modifier une variable extérieure à la fonction."
                      },
                      {
                          "q":  "Vrai ou faux : après int *pi = \u0026i; fct_3(pi); avec void fct_3(int *ptr) { ptr = NULL; }, le pointeur pi vaut NULL dans main.",
                          "tags":  [
                                       "Adresses et pointeurs"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Faux",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Vrai",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Un pointeur passé en argument est une copie de l\u0027adresse : on peut modifier la valeur pointée, mais pas le pointeur de l\u0027appelant. Pour modifier le pointeur lui-même il faudrait passer son adresse, donc un pointeur de pointeur."
                      },
                      {
                          "q":  "Pourquoi fct(i) ne modifie-t-elle pas i alors que fct_2(\u0026i) la modifie ?",
                          "tags":  [
                                       "Adresses et pointeurs"
                                   ],
                          "options":  [
                                          {
                                              "text":  "fct reçoit une copie de la valeur de i, alors que fct_2 reçoit une copie de l\u0027adresse de i et écrit à cette adresse",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce que le C passe les entiers par valeur et les pointeurs par référence",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que fct_2 est déclarée avec le qualificateur const",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que i est une variable globale dans le premier cas seulement",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "En C, tous les arguments sont passés par valeur, y compris les pointeurs. C\u0027est le contenu de la copie qui change tout : une copie d\u0027entier ne permet pas de retrouver l\u0027original, une copie d\u0027adresse permet d\u0027y accéder."
                      },
                      {
                          "q":  "À quoi servent les pointeurs ?",
                          "tags":  [
                                       "Adresses et pointeurs"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Éviter de copier des données : il suffit d\u0027en connaître l\u0027adresse",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Modifier la valeur originale d\u0027une variable passée en argument d\u0027une fonction",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Allouer dynamiquement la mémoire et gérer des structures récursives",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Rendre inutile l\u0027initialisation des variables",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le cours cite aussi l\u0027accès au matériel, une autre manière de manipuler les tableaux et le passage d\u0027une fonction en argument d\u0027une fonction. Un pointeur bien utilisé ne dispense jamais d\u0027initialiser."
                      },
                      {
                          "q":  "Concernant le qualificateur const avec les pointeurs :",
                          "tags":  [
                                       "const et void"
                                   ],
                          "options":  [
                                          {
                                              "text":  "const int *p; : le pointeur peut être modifié mais pas la valeur pointée",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "int *const p; : le pointeur ne peut pas être modifié mais la valeur pointée peut l\u0027être",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "const int *const p; : ni le pointeur ni la valeur pointée ne peuvent être modifiés",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "const int *p; : le pointeur ne peut pas être modifié",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Règle de lecture : ce que const précède immédiatement est protégé. Dans const int *p, const qualifie l\u0027int pointé ; dans int *const p, const qualifie le pointeur lui-même."
                      },
                      {
                          "q":  "Soit void f(int* a, const int* b, int* const c, const int* const d) { int e; ... }. Quelles instructions compilent sans erreur ?",
                          "tags":  [
                                       "const et void"
                                   ],
                          "options":  [
                                          {
                                              "text":  "b = \u0026e;",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "*c = 3;",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "*b = 3;",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "d = \u0026e;",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Pour a (int *), tout est permis. b (const int *) : on peut le réaffecter mais pas écrire dans *b. c (int *const) : on peut écrire dans *c mais pas réaffecter c. d (const int *const) : ni l\u0027un ni l\u0027autre."
                      },
                      {
                          "q":  "Comment garantir qu\u0027une fonction qui affiche un grand tableau ne modifie pas ses éléments, sans le recopier ?",
                          "tags":  [
                                       "const et void"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Lui passer un pointeur const int * (plus la taille)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Lui passer un pointeur int *const",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Lui passer le tableau par valeur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Initialiser le pointeur à NULL avant l\u0027appel",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "int *const interdit de modifier le pointeur, pas les éléments : c\u0027est le piège. Passer un pointeur évite la recopie ; const int * interdit l\u0027écriture dans les éléments pointés."
                      },
                      {
                          "q":  "Concernant les pointeurs void * :",
                          "tags":  [
                                       "const et void"
                                   ],
                          "options":  [
                                          {
                                              "text":  "On peut les déclarer sans type cible",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "On ne peut pas déréférencer directement un void *",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "On peut convertir sa valeur vers un pointeur d\u0027un autre type si l\u0027on sait ce qu\u0027elle désigne",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Avec void *q = \u0026i; l\u0027instruction *q = 5; est valide",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Sans type cible, le compilateur ne sait pas combien d\u0027octets écrire. Il faut passer par un pointeur typé : int *p = q; *p = 5; est correct et donne i = 5. Les void * servent aux fonctions génériques."
                      },
                      {
                          "q":  "Soit long l; long *pl = \u0026l; long **ppl = \u0026pl; **ppl = 20; puis long k; *ppl = \u0026k; *pl = 30; Quelles affirmations sont exactes ?",
                          "tags":  [
                                       "const et void"
                                   ],
                          "options":  [
                                          {
                                              "text":  "**ppl = 20 modifie l",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "*ppl = \u0026k modifie pl, qui pointe désormais sur k",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "*pl = 30 modifie k",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "*pl = 30 modifie l",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "ppl pointe sur pl, donc *ppl désigne pl et **ppl désigne l. Après *ppl = \u0026k, pl contient l\u0027adresse de k, donc *pl = 30 écrit dans k et non plus dans l."
                      },
                      {
                          "q":  "Concernant la mémoire virtuelle :",
                          "tags":  [
                                       "Segmentation de la mémoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Chaque processus se voit allouer une plage de mémoire virtuelle comme s\u0027il était le seul actif",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le système d\u0027exploitation gère la correspondance entre mémoire virtuelle et mémoire physique",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le processus ignore l\u0027implémentation de la mémoire, gérée au niveau du noyau",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les processus accèdent directement à la mémoire physique et se coordonnent entre eux",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est une couche d\u0027abstraction qui répond au problème de deux processus voulant la même zone mémoire au même moment dans un système multitâche."
                      },
                      {
                          "q":  "Concernant la pile et le tas :",
                          "tags":  [
                                       "Segmentation de la mémoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La pile est allouée automatiquement, liée aux fonctions, et suit une structure LIFO",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La pile garde trace de l\u0027endroit où chaque fonction doit retourner après son exécution",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le tas est un espace allouable dynamiquement, sans taille fixe, dont les variables sont accessibles partout via les pointeurs",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La durée de vie d\u0027une variable locale dépasse celle de la fonction qui la déclare",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Une variable locale vit sur la pile et disparaît à la fin de la fonction. Le tas permet au contraire de créer des données qui survivent aux appels, au prix d\u0027une gestion manuelle."
                      },
                      {
                          "q":  "Avec short T[10] = {0}; short *p = T;, comment accède-t-on au i-ème élément ?",
                          "tags":  [
                                       "Pointeurs et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "*(p + i), qui ajoute i éléments au pointeur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "p + i avance de i × sizeof(short) octets",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "*(p + i) est équivalent à T[i]",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "p + i avance de i octets",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027arithmétique des pointeurs tient compte de la taille du type pointé : on ajoute i éléments et non i octets. Sur un tableau d\u0027int, *(t + 3) décale de 3 × sizeof(int) octets."
                      },
                      {
                          "q":  "Quelle expression est équivalente à t[3] pour un pointeur t sur le premier élément d\u0027un tableau ?",
                          "tags":  [
                                       "Pointeurs et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "*(t + 3)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "*t + 3",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "t + 3",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "\u0026t + 3",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les parenthèses sont obligatoires : *t + 3 est la valeur de t[0] augmentée de 3, alors que *(t + 3) est la valeur de t[3]. t + 3 est l\u0027adresse de t[3], pas sa valeur."
                      },
                      {
                          "q":  "Soit int T[] = {10, 20, 30, 40, 50}; int *p = T; Quelles affirmations sont exactes ?",
                          "tags":  [
                                       "Pointeurs et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "*(p + 2) vaut 30",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "*p + 2 vaut 12",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "*(p) + 2 et *p + 2 sont deux écritures de la même expression",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "*p + 2 vaut 30 car les parenthèses sont facultatives",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "*p + 2 ajoute 2 à la valeur 10, donnant 12 de type int. *(p + 2) décale d\u0027abord le pointeur de 2 éléments avant de déréférencer, donnant T[2] = 30. Les parenthèses autour de p seul ne changent rien."
                      },
                      {
                          "q":  "Avec T = {10, 20, 30, 40, 50} et p = T, quelles affirmations sont exactes ?",
                          "tags":  [
                                       "Pointeurs et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "\u0026(T[4]) - 3 est de type int * et pointe sur T[1]",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "p + (*(p) - 8) est de type int * et pointe sur T[2]",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "\u0026(T[4]) - 3 est de type int et vaut 20",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "p + (*(p) - 8) est de type int et vaut 30",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Une expression de la forme adresse ± entier reste une adresse : \u0026(T[4]) - 3 désigne T[1] (dont la valeur est 20, mais l\u0027expression n\u0027est pas cette valeur). Ici *(p) - 8 = 2, donc p + 2 pointe sur T[2] (valeur 30)."
                      },
                      {
                          "q":  "Soit char tab[] = {\u0027A\u0027, \u0027C\u0027}; char *p_a = \u0026(tab[0]); char d = *(p_a+1); char *p_c = p_a + 1; char e = *(p_a) + 1; Quelles affirmations sont exactes ?",
                          "tags":  [
                                       "Pointeurs et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "d vaut \u0027C\u0027",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "e vaut \u0027B\u0027",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les adresses p_a et p_c diffèrent de 1 octet",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "e vaut \u0027C\u0027",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "d = *(p_a+1) lit tab[1] = \u0027C\u0027. e = *(p_a) + 1 ajoute 1 à la valeur de \u0027A\u0027 (pas à l\u0027adresse), d\u0027où \u0027B\u0027. Un char occupe 1 octet donc p_c = p_a + 1 est à 1 octet."
                      },
                      {
                          "q":  "Soit int tab[] = {1, 3}; int *p_a = \u0026(tab[0]); int d = *(p_a+1); int *p_c = p_a + 1; int e = *(p_a) + 1; Quelles affirmations sont exactes ?",
                          "tags":  [
                                       "Pointeurs et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "d vaut 3",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "e vaut 2",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les adresses p_a et p_c diffèrent de sizeof(int) octets",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les adresses p_a et p_c diffèrent de 1 octet",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Même code qu\u0027avec des char, mais l\u0027incrément d\u0027adresse dépend du type pointé : p_a + 1 avance d\u0027un int, soit 4 octets sur les architectures usuelles. Ici e = 1 + 1 = 2 et d = tab[1] = 3."
                      },
                      {
                          "q":  "Concernant int T[5]; et int *p; :",
                          "tags":  [
                                       "Pointeurs et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "int T[5] réserve une zone mémoire pour 5 entiers",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "int *p déclare un pointeur modifiable sans allouer de zone cible",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Avec int X[5], l\u0027affectation X = T; est une erreur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "int *p réserve de la mémoire pour 5 entiers",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le nom d\u0027un tableau se convertit souvent en pointeur vers son premier élément, mais ce n\u0027est pas une variable pointeur modifiable : X = T est refusé alors que p = T est correct. Un pointeur déclaré n\u0027alloue rien, et ne peut pas être déréférencé tant qu\u0027il n\u0027a pas d\u0027adresse valide."
                      },
                      {
                          "q":  "Concernant les tableaux passés en argument d\u0027une fonction :",
                          "tags":  [
                                       "Pointeurs et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "On passe l\u0027adresse du premier élément, donc un pointeur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "void f(int T[]) est équivalent à void f(int *T) pour le compilateur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La fonction ne peut pas connaître la taille du tableau, sauf si on la passe en argument",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "sizeof(T) dans la fonction donne la taille totale du tableau",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "T n\u0027est pas un tableau dans la fonction, mais un pointeur : sizeof(T) donne la taille d\u0027un pointeur (8 sur 64 bits). La notation T[] n\u0027est qu\u0027un moyen de signaler l\u0027intention à un lecteur."
                      },
                      {
                          "q":  "Soit int U[10]; dans main, avec un printf de sizeof(U) suivi de l\u0027appel f(U) où f(int T[]) affiche sizeof(T). Avec des int de 4 octets et des pointeurs 64 bits, quelle sortie obtient-on ?",
                          "tags":  [
                                       "Pointeurs et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "40 puis 8",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "40 puis 40",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "8 puis 40",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "10 puis 8",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Dans main, U est un vrai tableau : sizeof(U) = 10 × 4 = 40. Dans f, T est un pointeur : sizeof(T) = 8. Ce sont donc deux affichages différents pour le même tableau, d\u0027où la nécessité de transmettre la taille séparément."
                      },
                      {
                          "q":  "Soit void f(int *T) { *T = 42; } et int X[5] = {0}; On affiche X[1], on appelle f(X+1), puis on affiche X[1]. Que voit-on ?",
                          "tags":  [
                                       "Pointeurs et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "0 puis 42",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "0 puis 0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "42 puis 42",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "42 puis 0",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "X+1 est l\u0027adresse de X[1] : dans f, *T désigne alors X[1]. Le tableau n\u0027est pas recopié, donc la modification est visible de l\u0027appelant."
                      },
                      {
                          "q":  "Dans strcpy_PTR, la fonction déclare char *p = dest; puis incrémente dest pendant la copie. Pourquoi ?",
                          "tags":  [
                                       "Pointeurs et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Pour conserver l\u0027adresse de départ de dest et la renvoyer à la fin",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Pour libérer la mémoire de dest à la fin de la copie",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Pour tester si dest vaut NULL",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Pour copier le caractère terminateur \\0",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "dest et src sont incrémentés à chaque caractère copié : sans copie de l\u0027adresse initiale, on renverrait la fin de la chaîne. Le \\0 est copié par la condition de la boucle, qui s\u0027arrête juste après l\u0027avoir copié."
                      },
                      {
                          "q":  "On copie Hello! (7 octets avec le \\0) dans un tableau char XX[4]. Que peut-on dire ?",
                          "tags":  [
                                       "Pointeurs et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le comportement est indéfini : le tableau destination est trop petit",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La copie écrase la mémoire voisine, ce que suggère l\u0027affichage altéré s : o! au lieu de Hello!",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La chaîne source Hello! comporte 7 octets : 6 caractères et le terminateur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le programme est correct : la fonction agrandit automatiquement le tableau destination",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Rien dans strcpy_TAB ou strcpy_PTR ne vérifie la taille de destination : c\u0027est au programmeur de la garantir. Un débordement de tampon peut altérer d\u0027autres variables, y compris la source, comme ici."
                      },
                      {
                          "q":  "Pourquoi est-il dangereux de renvoyer l\u0027adresse d\u0027un tableau local (return T; avec int T[10] déclaré dans la fonction) ?",
                          "tags":  [
                                       "Pointeurs et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Car la zone mémoire n\u0027existe plus après l\u0027exécution de la fonction",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Car le compilateur refuse toujours ce code",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Car les tableaux ne peuvent pas être renvoyés en C, même par adresse",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Car l\u0027adresse renvoyée est toujours NULL",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Un tableau local vit sur la pile, dans le cadre de la fonction, qui est libéré au retour. L\u0027adresse renvoyée pointe vers une zone dont le contenu peut être réutilisé : on parle de pointeur pendouillant. Modifier un tableau passé en argument n\u0027est en revanche pas un problème."
                      },
                      {
                          "q":  "Dans le code où f renvoie l\u0027adresse d\u0027un tableau local T[1] (T[0] = 42), M = f(); puis on affiche M[0], on appelle g(1), on affiche M[0], on appelle g(2), on affiche M[0]. Quelles affirmations sont exactes ?",
                          "tags":  [
                                       "Pointeurs et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le comportement est indéfini",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Avec clang on observe 42, 1, 2, alors qu\u0027avec gcc on obtient une erreur de segmentation",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "L\u0027emplacement libéré est réutilisé par les appels de fonctions suivants",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "M[0] vaut toujours 42 tant que personne n\u0027écrase explicitement T",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La valeur 42 n\u0027est plus garantie une fois f terminée : les appels à g réutilisent la même zone de pile, d\u0027où des valeurs qui changent. Le résultat dépend du compilateur : c\u0027est la caractéristique d\u0027un comportement indéfini."
                      },
                      {
                          "q":  "Que fait cette fonction : int f(int * t, int n) { for(int i=1; i\u003cn; i++) { if (*(t+i) \u003e *(t+i-1)) { return 0; } } return 1; } ?",
                          "tags":  [
                                       "Pointeurs et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elle renvoie 1 si le tableau est trié par ordre décroissant (au sens large), 0 sinon",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle renvoie 1 si le tableau est trié par ordre croissant (au sens large), 0 sinon",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle renvoie 1 si le tableau est strictement décroissant, 0 sinon",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle renvoie 1 si tous les éléments sont égaux, 0 sinon",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La fonction renvoie 0 dès qu\u0027un élément est strictement plus grand que son prédécesseur : il ne reste donc que des éléments inférieurs ou égaux au précédent. L\u0027égalité est autorisée, donc décroissant au sens large. Version avec crochets : if (t[i] \u003e t[i-1])."
                      },
                      {
                          "q":  "Que fait cette fonction : int f2(int* t, int n) { int* p_r, *p_l; p_l = t, p_r = t + n - 1; while (p_l \u003c p_r) { if (*p_l != *p_r) return 0; p_l++, p_r--; } return 1; } ?",
                          "tags":  [
                                       "Pointeurs et tableaux"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elle renvoie 1 si le tableau est un palindrome (symétrique), 0 sinon",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle renvoie 1 si tous les éléments sont distincts, 0 sinon",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle renvoie 1 si le tableau est trié par ordre croissant, 0 sinon",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle renvoie 1 si le premier et le dernier élément sont égaux, sans regarder les autres",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Deux pointeurs partent des extrémités et convergent vers le milieu en comparant les éléments symétriques. La fonction renvoie 0 dès qu\u0027une paire diffère. Avec crochets : t[l] != t[r] avec deux indices l et r."
                      },
                      {
                          "q":  "Quels points figurent dans le doggy bag « À retenir » du cours ?",
                          "tags":  [
                                       "Adresses et pointeurs"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Un tableau passé en argument est traité comme un pointeur sur son premier élément",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Il ne faut pas renvoyer l\u0027adresse d\u0027un tableau local",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un pointeur peut être initialisé à NULL pour indiquer qu\u0027il ne pointe sur aucune adresse légitime",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un tableau passé en argument est recopié entièrement dans la fonction",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le doggy bag rappelle aussi que la mémoire est segmentée, que * sert à déclarer un pointeur et à accéder à la valeur pointée, que \u0026 récupère l\u0027adresse, et qu\u0027un pointeur passé en argument permet de modifier la valeur pointée."
                      }
                  ]
}
});