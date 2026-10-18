// ============================================================
// MatiÃ¨re : Archi : Présentation générale d'un ordinateur (Chap. 4b)
// Source : archi-chap4b-presentation-generale.json
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;

Object.assign(defaultData, {
"Archi : Présentation générale d'un ordinateur (Chap. 4b)": {
    "course":  "info",
    "folder":  "Architecture des ordis",
    "description":  "Typologie des systèmes informatiques, programme enregistré et architecture de von Neumann, langage machine/assembleur/haut niveau, compilation vs interprétation, structure interne (CPU, mémoires, bus, E/S), mémoire morte et vive, ROM/PROM/EPROM/EEPROM.",
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
                          "q":  "Avant ~1985, comment se répartissaient les systèmes informatiques ?",
                          "tags":  [
                                       "Typologie"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Micro-ordinateur (usage individuel), mini-ordinateur (plusieurs utilisateurs), ordinateurs centraux (grosses bases de données), supercalculateurs (gros calculs)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "PC, serveur, smartphone, système embarqué",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Uniquement des ordinateurs centraux partagés par toute une organisation",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Micro-ordinateur, supercalculateur, smartphone, serveur",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le cours distingue explicitement une typologie « avant ~1985 » (micro, mini, ordinateurs centraux, supercalculateurs) d\u0027une typologie plus actuelle (PC, serveur, smartphone, supercalculateur, système embarqué). Le smartphone n\u0027existait pas dans la première typologie."
                      },
                      {
                          "q":  "Associez chaque système actuel à son usage principal :",
                          "tags":  [
                                       "Typologie"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Serveur → services réseau (ex. serveur web)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Système embarqué → fonction spécifique (ex. voiture, robot)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Smartphone → mobilité (ex. Android/iPhone)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Supercalculateur → mobilité",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le supercalculateur est associé au calcul intensif (ex. simulation scientifique), pas à la mobilité. L\u0027architecture d\u0027un système informatique dépend de son usage, ce qui justifie cette typologie."
                      },
                      {
                          "q":  "Concernant les premiers ordinateurs et leur programme :",
                          "tags":  [
                                       "Programme enregistré"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le Z3 (1941) utilisait une perforation sur un film vidéo",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le Mark I (1944) utilisait des cartes et bandes perforées",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "L\u0027ENIAC (1945) se programmait par câbles et interrupteurs",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "L\u0027ENIAC (1945) stockait son programme dans une mémoire interne",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Ces trois machines avaient un programme « externe », câblé ou lu sur un support physique, et non stocké en mémoire interne. C\u0027est précisément ce que le rapport von Neumann va changer en 1945."
                      },
                      {
                          "q":  "Que définit le rapport von Neumann de 1945 ?",
                          "tags":  [
                                       "Programme enregistré"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Définir des instructions sous forme numérique et les stocker dans une mémoire interne pour les exécuter",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La séparation physique entre mémoire des instructions et mémoire des données",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027invention du transistor comme composant de commutation",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le codage des caractères en ASCII",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est le principe du programme enregistré : la séparation instructions / données caractérise au contraire l\u0027architecture Harvard, qui s\u0027oppose à von Neumann."
                      },
                      {
                          "q":  "Quels bénéfices le programme enregistré apporte-t-il, selon le cours ?",
                          "tags":  [
                                       "Programme enregistré"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Vitesse d\u0027exécution accrue",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Possibilités algorithmiques plus importantes",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Possibilité de programme auto-modifiant",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Suppression totale du besoin de mémoire",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le programme enregistré a au contraire besoin d\u0027une mémoire interne pour stocker les instructions : c\u0027est son principe fondateur, pas une suppression de la mémoire."
                      },
                      {
                          "q":  "Où et quand a eu lieu la première exécution d\u0027un programme enregistré ?",
                          "tags":  [
                                       "Programme enregistré"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le 21/06/48 sur la « Baby » à Manchester (GB)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "En 1945 sur l\u0027ENIAC aux États-Unis",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "En 1941 sur le Z3 en Allemagne",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "En 1944 sur le Mark I aux États-Unis",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La « Baby » (Small-Scale Experimental Machine) de Manchester a exécuté le 21 juin 1948 le premier programme réellement stocké en mémoire, concrétisant le principe théorisé par von Neumann en 1945."
                      },
                      {
                          "q":  "Dans l\u0027architecture de von Neumann, quel composant est chargé du « séquençage » des opérations ?",
                          "tags":  [
                                       "Architecture von Neumann"
                                   ],
                          "options":  [
                                          {
                                              "text":  "L\u0027unité de contrôle",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "L\u0027unité arithmétique et logique",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027accumulateur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La mémoire",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027unité de contrôle orchestre le déroulement des opérations ; l\u0027unité arithmétique et logique (avec son accumulateur) effectue les opérations de base, et la mémoire contient à la fois les données et le programme."
                      },
                      {
                          "q":  "Concernant le schéma de l\u0027architecture de von Neumann :",
                          "tags":  [
                                       "Architecture von Neumann"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La mémoire contient à la fois les données et le programme de base",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les périphériques d\u0027entrée et de sortie permettent de communiquer avec l\u0027extérieur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "L\u0027unité arithmétique et logique effectue les opérations de base, avec un accumulateur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "L\u0027unité de contrôle effectue directement les opérations arithmétiques",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est l\u0027ALU, pas l\u0027unité de contrôle, qui réalise les calculs ; l\u0027unité de contrôle se contente de séquencer et de piloter les échanges entre les blocs."
                      },
                      {
                          "q":  "Concernant le langage machine :",
                          "tags":  [
                                       "Langages"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Chaque instruction est un code numérique, par exemple 3fab8e40",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Il est inutilisable directement par un humain",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "C\u0027est le seul langage que comprend un processeur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Il utilise des mnémoniques comme ADD r0,r1,r2",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les mnémoniques (ADD r0,r1,r2) appartiennent au langage assembleur, plus lisible, qui est ensuite traduit en code numérique par un assembleur. Le processeur, lui, n\u0027exécute que du langage machine."
                      },
                      {
                          "q":  "Concernant le langage assembleur :",
                          "tags":  [
                                       "Langages"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Chaque instruction est un mnémonique correspondant à l\u0027instruction effectuée",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un programme appelé assembleur traduit les mnémoniques en codes numériques",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Ses instructions sont spécifiques à un modèle de processeur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Ses instructions sont très puissantes, ce qui réduit fortement le nombre de lignes de code",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Au contraire, les instructions assembleur sont peu puissantes : il faut donc beaucoup de lignes de code pour réaliser une tâche complexe. C\u0027est l\u0027une des limites qui a motivé l\u0027apparition des langages de haut niveau."
                      },
                      {
                          "q":  "Concernant les langages de haut niveau :",
                          "tags":  [
                                       "Langages"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le Fortran (1957) en est un exemple historique",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Ils intègrent des structures de données et de contrôle (tests, boucles…)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Ils permettent au programmeur de s\u0027affranchir des contraintes matérielles pour se concentrer sur l\u0027algorithmique",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Ils sont toujours directement exécutés par le processeur sans aucune traduction",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Un langage de haut niveau doit toujours être traduit, d\u0027une manière ou d\u0027une autre (compilation, interprétation, ou les deux), car le processeur ne comprend que le langage machine."
                      },
                      {
                          "q":  "Concernant les langages compilés (C, C++, Pascal, ADA, Haskell…) :",
                          "tags":  [
                                       "Langages"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Les instructions sont traduites en langage machine par un compilateur avant exécution",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La compilation est plus compliquée que l\u0027assemblage car une instruction de haut niveau peut correspondre à plusieurs instructions processeur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le code source est exécuté directement par un interpréteur, ligne par ligne",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le code source est d\u0027abord traduit en un langage intermédiaire exécuté par une machine virtuelle",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027exécution ligne par ligne par un interpréteur caractérise les langages interprétés (PHP, Perl, Visual Basic), et la compilation vers un langage intermédiaire exécuté par une machine virtuelle caractérise les langages hybrides (Python, Java)."
                      },
                      {
                          "q":  "Concernant les langages interprétés et hybrides :",
                          "tags":  [
                                       "Langages"
                                   ],
                          "options":  [
                                          {
                                              "text":  "PHP, Perl et Visual Basic sont des langages interprétés",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Python et Java sont des langages hybrides : compilation en langage intermédiaire puis exécution par une machine virtuelle",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un interpréteur simule l\u0027exécution de chaque ligne du code source",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Java est un langage purement interprété, sans aucune étape de compilation",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Java est compilé en bytecode (pgm.class), qui est ensuite exécuté par la machine virtuelle Java : c\u0027est la définition même d\u0027un langage hybride, distincte de l\u0027interprétation directe du code source."
                      },
                      {
                          "q":  "Dans la chaîne Compilation \u0026 Assemblage du cours, quel est l\u0027ordre des transformations ?",
                          "tags":  [
                                       "Compilation et assemblage"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Langage haut niveau → (compilation) → langage assembleur → (assemblage) → langage machine",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Langage assembleur → (compilation) → langage haut niveau → (assemblage) → langage machine",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Langage machine → (assemblage) → langage assembleur → (compilation) → langage haut niveau",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Langage haut niveau → (assemblage) → langage machine → (compilation) → langage assembleur",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La compilation traduit le haut niveau (for, if…then, write) vers l\u0027assembleur (sta, lda, cmp, mov, bra), puis l\u0027assemblage traduit l\u0027assembleur en binaire pur (0001 1101, 1111 0110…). Le langage machine est le point d\u0027arrivée, celui que comprend le processeur."
                      },
                      {
                          "q":  "Dans le cycle d\u0027un programme compilé, quel est le rôle de l\u0027éditeur de liens ?",
                          "tags":  [
                                       "Compilation et assemblage"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Assembler le code objet (pgm.o) avec les bibliothèques et autres modules objets pour produire l\u0027exécutable final",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Traduire le code source (pgm.c) en code assembleur (pgm.asm)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Exécuter directement le bytecode Java",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Interpréter ligne par ligne le code source PHP",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est le compilateur qui traduit le code source en code objet, et l\u0027assembleur qui traduit le code assembleur en code objet. L\u0027éditeur de liens intervient ensuite pour combiner le code objet du programme avec les bibliothèques et produire le programme exécutable (pgm)."
                      },
                      {
                          "q":  "Quelle est la différence entre le cycle d\u0027un programme interprété et celui d\u0027un programme Java ?",
                          "tags":  [
                                       "Compilation et assemblage"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le programme interprété (ex. PHP, Perl, Basic) est directement exécutable par l\u0027interpréteur depuis le code source",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le programme Java est d\u0027abord compilé en bytecode (pgm.class) avant d\u0027être exécuté par la machine virtuelle Java",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les deux cycles produisent un fichier .o en langage objet avant exécution",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le programme interprété est systématiquement compilé en assembleur au préalable",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le code objet (pgm.o) n\u0027apparaît que dans le cycle d\u0027un programme compilé classique (C, C++, Pascal…). Le cycle interprété n\u0027a pas d\u0027étape de compilation, tandis que le cycle Java insère une compilation intermédiaire vers le bytecode."
                      },
                      {
                          "q":  "Dans la structure interne théorique d\u0027un ordinateur (vision von Neumann), que relie le bus d\u0027interconnexion ?",
                          "tags":  [
                                       "Structure interne"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le processeur, la mémoire et les entrées/sorties",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Uniquement le processeur et la carte vidéo",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Uniquement la mémoire cache et la mémoire principale",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Uniquement les périphériques externes entre eux",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Dans la vision théorique, trois blocs (processeur, mémoire, E/S) communiquent via un bus d\u0027interconnexion commun, ce qui est une simplification de l\u0027architecture réelle, plus détaillée (bus principal, bus d\u0027entrées/sorties, contrôleur système)."
                      },
                      {
                          "q":  "Concernant le processeur (CPU) :",
                          "tags":  [
                                       "Structure interne"
                                   ],
                          "options":  [
                                          {
                                              "text":  "CPU signifie Central Processing Unit",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Il exécute les instructions des programmes en allant les chercher en mémoire principale",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Il stocke en permanence les programmes et données, même hors tension",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il communique directement avec les périphériques externes sans passer par aucun bus",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le stockage permanent est le rôle de la mémoire de masse (DD, SSD...), pas du processeur. Le CPU va chercher instructions et données en mémoire principale pour les exécuter, et dialogue via un bus avec le contrôleur système."
                      },
                      {
                          "q":  "Concernant la hiérarchie de stockage présentée pour la structure interne :",
                          "tags":  [
                                       "Structure interne"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La mémoire de masse (DD, SSD, DVD, bandes, clés…) est permanente mais lente",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La mémoire principale sert à stocker le programme et les données pour l\u0027exécution ; elle est rapide mais volatile",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La mémoire cache est encore plus rapide et sert à accélérer les transferts",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La mémoire de masse est rapide mais volatile",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est l\u0027inverse : la mémoire de masse est lente mais permanente (non volatile), tandis que la mémoire principale est rapide mais volatile. La mémoire cache se situe encore au-dessus en vitesse."
                      },
                      {
                          "q":  "Dans le schéma détaillé de structure interne, quel composant relie le processeur, la mémoire principale et la carte vidéo ?",
                          "tags":  [
                                       "Structure interne"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le contrôleur système, via le bus principal",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le bus d\u0027entrées/sorties uniquement",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le disque dur / SSD",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La carte son",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le processeur (avec sa mémoire cache de niveaux 1 et 2) communique avec le contrôleur système via le bus principal ; ce contrôleur relie à son tour la mémoire principale, la carte vidéo et, via le bus d\u0027entrées/sorties, les autres périphériques (disque dur/SSD, carte réseau, lecteur DVD, carte son)."
                      },
                      {
                          "q":  "Concernant les entrées/sorties (E/S), selon le cours :",
                          "tags":  [
                                       "Structure interne"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elles permettent de communiquer avec l\u0027extérieur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elles sont variables, flexibles et mouvantes",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elles travaillent souvent plus lentement que le reste de l\u0027ordinateur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elles sont toujours plus rapides que le processeur",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les périphériques (imprimante, clavier, souris…) sont connectés par un bus d\u0027entrées/sorties dédié, précisément parce qu\u0027ils sont plus lents et plus hétérogènes que les composants internes du cœur de l\u0027ordinateur."
                      },
                      {
                          "q":  "Quelle est la différence fondamentale entre mémoire morte et mémoire vive ?",
                          "tags":  [
                                       "Mémoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La mémoire morte est non volatile, la mémoire vive est volatile : son contenu est perdu si elle n\u0027est plus alimentée",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La mémoire morte est volatile, la mémoire vive est non volatile",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les deux sont volatiles mais la mémoire morte est plus rapide",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La mémoire vive ne peut jamais être modifiée après sa fabrication",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "« Volatile » signifie que le contenu disparaît sans alimentation électrique : c\u0027est le cas de la mémoire vive (RAM), pas de la mémoire morte. L\u0027impossibilité de modification concerne historiquement certaines mémoires mortes, pas la mémoire vive."
                      },
                      {
                          "q":  "Pourquoi le terme « mémoire morte » a-t-il été utilisé à l\u0027origine ?",
                          "tags":  [
                                       "Mémoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Pour une mémoire non volatile dont le contenu, fixé lors de sa programmation, ne pouvait plus être modifié (Read Only)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce qu\u0027elle perdait systématiquement son contenu à la coupure d\u0027alimentation",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce qu\u0027elle ne pouvait contenir que des zéros",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce qu\u0027elle était réservée aux ordinateurs hors d\u0027usage",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "D\u0027où le terme anglais Read Only. Avec les évolutions technologiques, le terme « mémoire morte » s\u0027est élargi à toute mémoire non volatile, même lorsque son contenu reste modifiable (comme l\u0027EEPROM/Flash)."
                      },
                      {
                          "q":  "Concernant la distinction entre mémoire dynamique et mémoire statique :",
                          "tags":  [
                                       "Mémoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La mémoire dynamique a une grande densité d\u0027intégration et est bon marché, mais lente",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La mémoire statique est chère mais rapide",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La mémoire dynamique a besoin de rafraîchissement, contrairement à la statique",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La mémoire statique a une plus grande densité d\u0027intégration que la dynamique",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est l\u0027inverse : la mémoire dynamique (SDRAM, DDR-SDRAM) est plus dense et moins chère mais plus lente et nécessite un rafraîchissement périodique ; la mémoire statique (SRAM) est rapide, sans rafraîchissement, mais chère et peu dense."
                      },
                      {
                          "q":  "SRAM, SDRAM et DDR-SDRAM se classent comment ?",
                          "tags":  [
                                       "Mémoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "SRAM est une mémoire vive statique ; SDRAM et DDR-SDRAM sont des mémoires vives dynamiques",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les trois sont des mémoires mortes",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "SRAM est dynamique, SDRAM et DDR-SDRAM sont statiques",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "SRAM, SDRAM et DDR-SDRAM sont toutes des mémoires statiques",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Dans l\u0027arborescence du cours, les mémoires vives se divisent en statiques (SRAM) et dynamiques (SDRAM, DDR-SDRAM), tandis que les mémoires mortes regroupent ROM, PROM, EPROM, EEPROM et mémoire Flash."
                      },
                      {
                          "q":  "Quelles mémoires mortes sont citées dans le cours ?",
                          "tags":  [
                                       "Mémoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "ROM, PROM, EPROM, EEPROM, mémoire Flash",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "SRAM, SDRAM, DDR-SDRAM",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "RAM, ROM, Cache",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "SDRAM, EEPROM, SRAM",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les mémoires mortes (non volatiles) regroupent ROM, PROM, EPROM, EEPROM et mémoire Flash, à distinguer des mémoires vives (volatiles) SRAM, SDRAM et DDR-SDRAM."
                      },
                      {
                          "q":  "Dans le tableau détaillé, la RAM se caractérise par :",
                          "tags":  [
                                       "Mémoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Accès en lecture/écriture, modification et initialisation électriques, volatile (oui)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Accès en lecture seule, non volatile",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Modification par ultraviolets",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Initialisation par masque",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est la seule mémoire du tableau qui soit volatile. L\u0027initialisation par masque caractérise la ROM, et la modification par ultraviolets l\u0027EPROM."
                      },
                      {
                          "q":  "Concernant la ROM selon le tableau détaillé :",
                          "tags":  [
                                       "Mémoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Accès en lecture seule, non modifiable, initialisation par masque, non volatile",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Accès en lecture/écriture, non volatile",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Modifiable électriquement",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Volatile",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La ROM (Read Only Memory) est fixée dès sa fabrication par masque : elle ne peut ensuite ni être modifiée ni perdre son contenu hors tension. C\u0027est l\u0027exemple le plus proche du sens originel de « mémoire morte »."
                      },
                      {
                          "q":  "Quelle est la différence entre la PROM et l\u0027EPROM dans le tableau détaillé ?",
                          "tags":  [
                                       "Mémoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La PROM n\u0027est pas modifiable, alors que l\u0027EPROM peut être effacée par ultraviolets",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La PROM est volatile, l\u0027EPROM ne l\u0027est pas",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La PROM s\u0027initialise par masque, l\u0027EPROM électriquement",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les deux s\u0027initialisent par masque",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La PROM (Programmable ROM) se programme électriquement une seule fois et n\u0027est ensuite plus modifiable, alors que l\u0027EPROM (Erasable PROM) peut être effacée par exposition aux ultraviolets puis reprogrammée électriquement. Les deux sont non volatiles et s\u0027initialisent électriquement."
                      },
                      {
                          "q":  "Concernant l\u0027EEPROM (Flash) :",
                          "tags":  [
                                       "Mémoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Son accès est essentiellement en lecture, sa modification et son initialisation sont électriques, et elle est non volatile",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle se modifie par exposition aux ultraviolets, comme l\u0027EPROM",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle perd son contenu hors tension",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle est en lecture/écriture comme la RAM, avec les mêmes performances",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027EEPROM (Electrically Erasable PROM), à laquelle correspond la mémoire Flash, s\u0027efface et se reprogramme électriquement, sans ultraviolets, ce qui la rend bien plus pratique que l\u0027EPROM, tout en restant non volatile."
                      },
                      {
                          "q":  "Parmi les cinq types de mémoire du tableau (RAM, ROM, PROM, EPROM, EEPROM), lequel est volatile ?",
                          "tags":  [
                                       "Mémoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La RAM uniquement",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La ROM et la RAM",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Aucun : toutes sont volatiles",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Toutes sauf l\u0027EEPROM",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Dans ce tableau, seule la RAM est volatile (colonne Volatile = Oui) ; ROM, PROM, EPROM et EEPROM sont toutes non volatiles, ce qui en fait des mémoires mortes au sens large du terme."
                      },
                      {
                          "q":  "Classez ces mémoires de la plus difficile à la plus facile à reprogrammer : ROM, PROM, EPROM, EEPROM.",
                          "tags":  [
                                       "Mémoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "ROM (jamais) \u003c PROM (une fois) \u003c EPROM (effacement UV puis reprogrammation) \u003c EEPROM (effacement et reprogrammation électriques simples)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "EEPROM \u003c EPROM \u003c PROM \u003c ROM",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Toutes sont aussi faciles à reprogrammer les unes que les autres",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "ROM \u003c EEPROM \u003c PROM \u003c EPROM",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est la progression technologique du cours : la ROM est figée au masque, la PROM se programme une fois électriquement, l\u0027EPROM nécessite un effacement par ultraviolets avant reprogrammation, et l\u0027EEPROM (Flash) s\u0027efface et se reprogramme simplement par voie électrique, d\u0027où son usage généralisé aujourd\u0027hui."
                      }
                  ]
}
});