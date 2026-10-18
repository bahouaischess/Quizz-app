// ============================================================
// MatiÃ¨re : Archi : Introduction, de l'électron au processeur (Chap. 1)
// Source : archi-chap1-electron-processeur.json
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;

Object.assign(defaultData, {
"Archi : Introduction, de l'électron au processeur (Chap. 1)": {
    "course":  "info",
    "folder":  "Architecture des ordis",
    "description":  "Histoire de l\u0027électronique et des ordinateurs, analogique et numérique, bit, portes logiques, circuits combinatoires et séquentiels, horloge, CPU, hiérarchie mémoire, von Neumann vs Harvard, cycle d\u0027instruction, histoire de l\u0027IA et de l\u0027informatique.",
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
                          "q":  "Concernant les étapes qui précèdent l\u0027ordinateur électronique, quelles associations sont exactes ?",
                          "tags":  [
                                       "Histoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Pascaline (1642) : machine à calculer mécanique",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Hollerith (1890) : cartes perforées",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Ada Lovelace (1843) : algorithme pour la machine analytique de Babbage",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Z3 (1941) : ordinateur à tubes à vide",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le Z3 (1941) est un ordinateur électromécanique, donc à relais et non à tubes à vide. Le fil directeur du cours est d\u0027automatiser le calcul en séparant progressivement la donnée, l\u0027instruction et la machine qui exécute."
                      },
                      {
                          "q":  "Concernant les premiers ordinateurs électroniques :",
                          "tags":  [
                                       "Histoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Colossus (1943-44) a été conçu pour la cryptanalyse",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "ENIAC (1945) est une machine de calcul numérique d\u0027environ 18 000 tubes",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "EDSAC (1949) est une machine à programme enregistré",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "ENIAC (1945) a été conçu pour la cryptanalyse",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Colossus sert au décryptage (cryptanalyse), ENIAC au calcul numérique (tables de tir puis bombe à hydrogène). EDVAC n\u0027est encore qu\u0027un projet en 1945, tandis qu\u0027EDSAC réalise en 1949 le programme enregistré. Ces machines répondent d\u0027abord à des besoins scientifiques et militaires."
                      },
                      {
                          "q":  "Pourquoi le cours prévient-il que « premier ordinateur » dépend du critère retenu ?",
                          "tags":  [
                                       "Histoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Parce que plusieurs critères possibles (électronique, programmable, programme enregistré, usage général) désignent des machines différentes",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce que les archives des machines des années 1940 sont incomplètes",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce qu\u0027une seule machine réunissait tous les critères, mais son inventeur est contesté",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que le terme ordinateur n\u0027a été défini qu\u0027après 1971",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Z3, Colossus, ENIAC, EDSAC... chacune est « première » selon un critère différent. Il n\u0027existe donc pas de réponse unique : il faut préciser ce que l\u0027on entend par ordinateur."
                      },
                      {
                          "q":  "Quel est l\u0027ordre chronologique correct ?",
                          "tags":  [
                                       "Histoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Transistor (1947), circuit intégré (1958), microprocesseur Intel 4004 (1971)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Circuit intégré (1947), transistor (1958), microprocesseur Intel 4004 (1971)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Transistor (1947), microprocesseur Intel 4004 (1958), circuit intégré (1971)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Microprocesseur Intel 4004 (1947), transistor (1958), circuit intégré (1971)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La chaîne 1947, 1958, 1971 illustre l\u0027intégration croissante : on passe du composant isolé (transistor) à la puce regroupant de nombreux composants (circuit intégré), puis à l\u0027unité centrale complète sur une puce (microprocesseur)."
                      },
                      {
                          "q":  "Concernant la révolution électronique :",
                          "tags":  [
                                       "Histoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le transistor permet la commutation électronique et constitue la brique fondamentale du numérique moderne",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le circuit intégré regroupe de nombreux composants sur une même puce",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La progression historique est : relais électromécanique, tubes à vide, transistor, circuit intégré",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les tubes à vide ont été introduits après le transistor pour le remplacer",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Chaque étape rend les machines plus rapides, plus compactes et plus fiables. Les tubes à vide (ENIAC, Colossus) précèdent le transistor, qui les a remplacés."
                      },
                      {
                          "q":  "Que formalise le rapport de von Neumann en 1945 ?",
                          "tags":  [
                                       "Histoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le programme peut être enregistré en mémoire, comme les données",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Cette organisation permet de modifier le programme sans recâbler toute la machine",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les instructions et les données sont stockées dans des mémoires physiquement distinctes",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Tous les ordinateurs modernes sont des machines de von Neumann pures",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027idée centrale est que le programme devient une donnée stockée en mémoire, ce qui évite de recâbler la machine à chaque nouveau programme. La séparation instructions / données est au contraire le principe de l\u0027architecture Harvard, et les machines modernes sont des variantes plus complexes."
                      },
                      {
                          "q":  "Quelle est la conséquence majeure de l\u0027arrivée du microprocesseur en 1971 (Intel 4004) ?",
                          "tags":  [
                                       "Histoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "L\u0027unité centrale n\u0027est plus une armoire de composants mais tient sur une puce, point de départ de la micro-informatique et de l\u0027informatique embarquée",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les tubes à vide deviennent la technologie dominante",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La mémoire centrale passe de la RAM au stockage magnétique",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le programme peut désormais être stocké en mémoire",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le programme enregistré date de 1945, bien avant. Le microprocesseur intègre l\u0027unité centrale sur une puce, ce qui rend possibles le micro-ordinateur puis l\u0027informatique embarquée."
                      },
                      {
                          "q":  "Concernant de l\u0027ordinateur personnel au SoC :",
                          "tags":  [
                                       "Histoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Altair 8800 (1975) : micro-ordinateur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "IBM PC (1981) : standard professionnel",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Années 1990 : PC et Internet, informatique grand public",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un SoC (System on Chip) ne contient que le CPU, tout le reste étant externe",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Un SoC regroupe sur une seule puce CPU, GPU, contrôleurs et accélérateurs. Le fil rouge historique : plus petit, moins cher, plus puissant, plus intégré, plus présent partout."
                      },
                      {
                          "q":  "Quel est le fil rouge historique présenté dans le cours ?",
                          "tags":  [
                                       "Histoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Plus petit, moins cher, plus puissant, plus intégré, plus présent partout",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Plus grand, plus puissant, plus cher, plus centralisé",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Plus lent, plus précis, plus fiable, plus spécialisé",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Plus analogique, plus continu, plus économe, plus local",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Chaque étape (relais, tubes, transistor, circuit intégré, microprocesseur, SoC) augmente l\u0027intégration et déplace le niveau d\u0027abstraction : on raisonne de moins en moins composant par composant et de plus en plus en blocs fonctionnels."
                      },
                      {
                          "q":  "Concernant analogique et numérique :",
                          "tags":  [
                                       "Analogique et numérique"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Un signal analogique est continu, par exemple la tension d\u0027un microphone",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le numérique est une représentation discrète de l\u0027information",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Physiquement, les 0 et 1 correspondent à des plages de tensions, de courants ou d\u0027états électroniques",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un ordinateur numérique manipule directement des signaux continus",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Un ordinateur numérique ne manipule que des représentations discrètes. Les 0 et 1 ne sont pas de « petits 0/1 » abstraits mais des plages de tension : c\u0027est ce qui permet de distinguer un état de l\u0027autre malgré le bruit."
                      },
                      {
                          "q":  "Concernant le bit et l\u0027octet :",
                          "tags":  [
                                       "Bit et portes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "n bits permettent de représenter 2ⁿ combinaisons",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "1 octet = 8 bits = 256 combinaisons",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Sur 8 bits non signés, les valeurs vont de 0 à 255",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Sur 8 bits non signés, les valeurs vont de 0 à 256",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "8 bits donnent 2⁸ = 256 combinaisons, mais la plus grande valeur est 255 puisque la première est 0. Piège classique : confondre le nombre de combinaisons avec la valeur maximale."
                      },
                      {
                          "q":  "Combien de valeurs différentes peut-on représenter avec 5 bits ?",
                          "tags":  [
                                       "Bit et portes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "32",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "31",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "25",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "10",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "2⁵ = 32 valeurs, de 0 à 31. La réponse 31 correspond à la plus grande valeur, pas au nombre de valeurs, et 25 confond 2⁵ avec 5²."
                      },
                      {
                          "q":  "Que vaut 10110101₂ en décimal ?",
                          "tags":  [
                                       "Bit et portes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "181",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "171",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "179",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "165",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "128 + 32 + 16 + 4 + 1 = 181. Les bits à 1 sont en positions 7, 5, 4, 2 et 0."
                      },
                      {
                          "q":  "Que vaut 1101₂ en décimal ?",
                          "tags":  [
                                       "Bit et portes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "13",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "11",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "14",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "15",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "1×8 + 1×4 + 0×2 + 1×1 = 13. La valeur 11 correspond à 1011, écriture voisine mais différente."
                      },
                      {
                          "q":  "Concernant les portes logiques de base :",
                          "tags":  [
                                       "Bit et portes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "AND vaut 1 uniquement si A = 1 et B = 1",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "OR vaut 1 si au moins une entrée vaut 1",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "XOR vaut 1 si les entrées sont différentes",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "XOR vaut 1 dès qu\u0027au moins une entrée vaut 1",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La différence entre OR et XOR est le cas (1,1) : OR vaut 1, XOR vaut 0. C\u0027est pourquoi le XOR sert à détecter des différences et qu\u0027il intervient dans la somme d\u0027un additionneur."
                      },
                      {
                          "q":  "Concernant les circuits combinatoires et séquentiels :",
                          "tags":  [
                                       "Circuits"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Dans un circuit combinatoire, la sortie est une fonction des seules entrées",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Dans un circuit séquentiel, la sortie dépend aussi de l\u0027état précédent : il se souvient",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un additionneur, un multiplexeur et un décodeur sont combinatoires",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un additionneur est un circuit séquentiel",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Registre, compteur et mémoire sont séquentiels : ils sont indispensables car il faut retenir un état. Additionneur, MUX et décodeur sont combinatoires : à mêmes entrées, même sortie."
                      },
                      {
                          "q":  "Concernant l\u0027horloge d\u0027un processeur :",
                          "tags":  [
                                       "Circuits"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elle permet de synchroniser les changements d\u0027état des circuits séquentiels",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La fréquence est reliée à la période par f = 1/T",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "1 GHz correspond à 1 milliard de cycles par seconde",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La fréquence est reliée à la période par f = T/2",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027horloge est la référence temporelle qui fait évoluer les états des registres. Attention : la fréquence ne dit pas combien de cycles dure une instruction, ni combien d\u0027opérations sont exécutées par cycle."
                      },
                      {
                          "q":  "Vrai ou faux : « Un processeur cadencé à 1 GHz exécute forcément une instruction complète par cycle d\u0027horloge. »",
                          "tags":  [
                                       "Circuits"
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
                          "explanation":  "1 GHz signifie 1 milliard de cycles par seconde, cela ne signifie pas qu\u0027une instruction complète prend un seul cycle. Une instruction peut en demander plusieurs, et les architectures modernes peuvent aussi exécuter plusieurs opérations par cycle."
                      },
                      {
                          "q":  "Une horloge a une période T = 2 ns. Quelle est sa fréquence ?",
                          "tags":  [
                                       "Circuits"
                                   ],
                          "options":  [
                                          {
                                              "text":  "500 MHz",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "2 GHz",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "50 MHz",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "5 GHz",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "f = 1/T = 1 / (2×10⁻⁹ s) = 5×10⁸ Hz = 500 MHz. Piège : confondre 2 ns avec une fréquence de 2 GHz, alors qu\u0027une période de 0,5 ns donnerait 2 GHz."
                      },
                      {
                          "q":  "Concernant le demi-additionneur construit avec des portes :",
                          "tags":  [
                                       "Circuits"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La somme est S = A ⊕ B",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La retenue est C = A · B",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Pour A = B = 1, on obtient S = 0 et C = 1, soit 1 + 1 = 10₂",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La retenue est C = A ⊕ B",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le XOR donne la somme, le AND la retenue. En cascade, ces blocs permettent de construire des additionneurs multi-bits."
                      },
                      {
                          "q":  "Quelles sont les trois grandes fonctions d\u0027un ordinateur ?",
                          "tags":  [
                                       "CPU et mémoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Traiter, stocker, communiquer",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Calculer, afficher, imprimer",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Lire, décoder, écrire",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Compiler, exécuter, déboguer",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le CPU traite, la mémoire stocke, les entrées/sorties (écran, clavier, réseau, capteurs, actionneurs) permettent de communiquer. « Lire, décoder, écrire » évoque plutôt les étapes du cycle d\u0027instruction."
                      },
                      {
                          "q":  "Concernant le CPU :",
                          "tags":  [
                                       "CPU et mémoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le PC (Program Counter) contient l\u0027adresse de la prochaine instruction",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "L\u0027IR (Instruction Register) contient l\u0027instruction en cours d\u0027exécution",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "L\u0027ALU réalise les opérations arithmétiques et logiques",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "L\u0027unité de contrôle réalise les additions et les comparaisons",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027unité de contrôle interprète les instructions et orchestre les transferts et signaux de commande. Le calcul lui-même (arithmétique, logique, comparaison) est confié à l\u0027ALU."
                      },
                      {
                          "q":  "Quel est le rôle principal de l\u0027ALU ?",
                          "tags":  [
                                       "CPU et mémoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Réaliser des opérations arithmétiques et logiques",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Interpréter l\u0027instruction et coordonner les transferts",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Conserver durablement les programmes et les données",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Piloter les périphériques d\u0027entrée/sortie",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027interprétation et la coordination relèvent de l\u0027unité de contrôle, le stockage de la mémoire, et les entrées/sorties d\u0027interfaces dédiées. L\u0027ALU est l\u0027organe de calcul."
                      },
                      {
                          "q":  "Quel est l\u0027ordre de la hiérarchie mémoire, du plus rapide au plus lent ?",
                          "tags":  [
                                       "CPU et mémoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Registres, cache, RAM, SSD / stockage",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Cache, registres, RAM, SSD / stockage",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Registres, RAM, cache, SSD / stockage",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "RAM, cache, registres, SSD / stockage",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Plus on s\u0027éloigne du CPU, plus la mémoire est grande et bon marché mais lente. Le cache s\u0027intercale entre les registres et la RAM précisément pour masquer sa lenteur."
                      },
                      {
                          "q":  "Concernant la hiérarchie mémoire :",
                          "tags":  [
                                       "CPU et mémoire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elle traduit un compromis entre vitesse, capacité et coût",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La RAM est rapide mais volatile",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le SSD est plus lent mais persistant",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les registres offrent la plus grande capacité de la hiérarchie",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les registres sont très rapides mais très petits. La capacité croît en descendant la hiérarchie, la vitesse décroît."
                      },
                      {
                          "q":  "Concernant l\u0027architecture de von Neumann :",
                          "tags":  [
                                       "Architectures"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Une mémoire commune contient les instructions et les données",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le CPU dialogue avec la mémoire par un bus d\u0027adresses, de données et de contrôle",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le débit entre CPU et mémoire peut devenir un goulot d\u0027étranglement",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle sépare physiquement la mémoire des instructions de celle des données",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Avantage : simplicité et flexibilité. Limitation : le chemin commun limite le débit, c\u0027est le von Neumann bottleneck. La séparation instructions / données est la caractéristique d\u0027Harvard."
                      },
                      {
                          "q":  "Concernant l\u0027architecture Harvard :",
                          "tags":  [
                                       "Architectures"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elle utilise deux espaces de stockage et/ou deux chemins d\u0027accès distincts pour instructions et données",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle permet de lire une instruction et une donnée en parallèle, selon l\u0027implémentation",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "On la rencontre sous diverses formes dans les microcontrôleurs, les DSP et les architectures dites Harvard modifiées",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle utilise un unique bus partagé, ce qui la rend plus simple que von Neumann",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Harvard est plus complexe que von Neumann mais facilite le parallélisme grâce aux chemins séparés. Un bus unique partagé est la caractéristique de von Neumann."
                      },
                      {
                          "q":  "Vrai ou faux : « Les ordinateurs actuels sont tous des architectures de von Neumann pures. »",
                          "tags":  [
                                       "Architectures"
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
                          "explanation":  "Les machines actuelles ne sont pas toujours « pures » : beaucoup combinent les deux idées, par exemple avec des caches séparés pour instructions et données (Harvard modifiée) au-dessus d\u0027une mémoire principale commune."
                      },
                      {
                          "q":  "Quel est l\u0027ordre du cycle d\u0027instruction ?",
                          "tags":  [
                                       "Cycle d\u0027instruction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Fetch, Decode, Execute, Write Back",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Decode, Fetch, Execute, Write Back",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Fetch, Execute, Decode, Write Back",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Fetch, Decode, Write Back, Execute",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "On récupère l\u0027instruction, on l\u0027interprète, on la réalise, puis on écrit le résultat, et le cycle recommence. On ne peut pas décoder ce qu\u0027on n\u0027a pas encore récupéré."
                      },
                      {
                          "q":  "Que se passe-t-il à chaque étape du cycle d\u0027instruction ?",
                          "tags":  [
                                       "Cycle d\u0027instruction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Fetch : le PC fournit l\u0027adresse de l\u0027instruction à chercher",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Decode : l\u0027unité de contrôle décode l\u0027opération et détermine les ressources nécessaires",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Execute : l\u0027ALU ou une autre unité d\u0027exécution réalise l\u0027opération",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Fetch : le résultat de l\u0027opération est écrit dans un registre ou en mémoire",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027écriture du résultat dans un registre ou en mémoire correspond à Write Back, pas à Fetch."
                      },
                      {
                          "q":  "Dans le fil rouge C = A + B (A = 5, B = 3), où se trouve l\u0027instruction ADD R1,R2 avant son exécution ?",
                          "tags":  [
                                       "Cycle d\u0027instruction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "En mémoire, d\u0027où elle est récupérée lors du Fetch",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Dans l\u0027ALU, qui la garde en attente",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Dans le registre R1, avec la donnée A",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Dans le PC, qui contient l\u0027instruction elle-même",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le PC contient l\u0027adresse de l\u0027instruction, pas l\u0027instruction. Celle-ci est lue en mémoire (Fetch), placée dans l\u0027IR, décodée, puis l\u0027ALU calcule 5 + 3 = 8 à partir de R1 = 5 et R2 = 3."
                      },
                      {
                          "q":  "Quelle est la somme 0101₂ + 0011₂ sur 4 bits (5 + 3) ?",
                          "tags":  [
                                       "Bit et portes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "1000₂",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "0111₂",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "1001₂",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "10000₂",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "5 = 0101 et 3 = 0011. De droite à gauche : 1+1 = 0 retenue 1 ; 0+1+1 = 0 retenue 1 ; 1+0+1 = 0 retenue 1 ; 0+0+1 = 1. On obtient 1000₂ = 8, qui tient encore sur 4 bits."
                      },
                      {
                          "q":  "Quelle distinction le cours fait-il entre architecture, microarchitecture et électronique numérique ?",
                          "tags":  [
                                       "Architectures"
                                   ],
                          "options":  [
                                          {
                                              "text":  "L\u0027architecture décrit l\u0027organisation fonctionnelle des composants",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La microarchitecture décrit comment une implémentation concrète réalise cette organisation",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "L\u0027électronique numérique fournit les briques physiques permettant l\u0027exécution",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "L\u0027électronique numérique décrit l\u0027organisation fonctionnelle des composants",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Trois niveaux d\u0027une même machine : l\u0027architecture (quoi), la microarchitecture (comment sur une réalisation donnée) et l\u0027électronique (avec quelles briques physiques). Le fil conducteur va du programme aux signaux électriques."
                      },
                      {
                          "q":  "Concernant les grandes dates de l\u0027histoire de l\u0027IA :",
                          "tags":  [
                                       "Histoire de l\u0027IA"
                                   ],
                          "options":  [
                                          {
                                              "text":  "1950 : test de Turing",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "1956 : congrès fondateur de l\u0027IA",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "1997 : Deep Blue (IBM) bat Kasparov aux échecs",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "1997 : Watson (IBM) gagne à Jeopardy!",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Watson gagne à Jeopardy! en 2011. Les autres jalons du cours : 2005 conduite autonome (Stanford), 2010 intégration du deep learning aux réseaux de neurones, 2016 victoire au jeu de Go contre un champion."
                      },
                      {
                          "q":  "Concernant les hivers de l\u0027IA :",
                          "tags":  [
                                       "Histoire de l\u0027IA"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le premier hiver (1974-1980) s\u0027explique par le manque de puissance de calcul, la complexité qui empêche le passage à l\u0027échelle et l\u0027importance du sens commun",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le second hiver (1988-1995) suit l\u0027essor des systèmes experts, plus compliqués que prévu",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Pendant le second hiver, les ordinateurs classiques allaient plus vite que les ordinateurs « IA »",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le premier hiver suit le boom des systèmes experts de 1980-1988",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Chronologie : premier âge d\u0027or (1956-1974), premier hiver (1974-1980), boom des systèmes experts et 5e génération (1980-1988), second hiver (1988-1995). Le boom des systèmes experts précède le second hiver, pas le premier."
                      },
                      {
                          "q":  "Concernant les systèmes experts et les langages de l\u0027IA :",
                          "tags":  [
                                       "Histoire de l\u0027IA"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Dendral (1968) est le premier système expert",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "XCON (1980) est un système expert qui connaît un énorme succès chez DEC",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Lisp date de 1959 et Prolog de 1972",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le Perceptron (1958) est un système expert",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le Perceptron est une simulation de réseau de neurones, dont le livre « Perceptrons » (Minsky et Papert, 1969) montre les limites. Un système expert codifie les connaissances d\u0027experts et infère à partir d\u0027une base de faits."
                      },
                      {
                          "q":  "Concernant les mythes en informatique évoqués dans le cours :",
                          "tags":  [
                                       "Histoire de l\u0027informatique"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Colossus, ENIAC, EDVAC et EDSAC répondent d\u0027abord à des besoins scientifiques et militaires",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le mythe du génie solitaire est nuancé par l\u0027invention simultanée et collective",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "L\u0027industrie (Univac, IBM, Lyons, Ferranti, SEA) prend le relais dans un second temps",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "L\u0027informatique est née dans l\u0027industrie privée avant d\u0027intéresser l\u0027armée",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les premiers besoins sont scientifiques et militaires : Colossus décrypte la machine de Lorentz, ENIAC calcule des tables de tir puis pour la bombe à hydrogène. Le cours cite aussi comme mythes : Ada Lovelace première programmeuse, Turing père de l\u0027ordinateur, Apple inventeur de l\u0027informatique."
                      },
                      {
                          "q":  "Concernant l\u0027histoire d\u0027Internet :",
                          "tags":  [
                                       "Histoire de l\u0027informatique"
                                   ],
                          "options":  [
                                          {
                                              "text":  "1969 : début d\u0027Arpanet",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "1983 : bascule vers les protocoles TCP/IP",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "1993 : arrivée du web et des navigateurs",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "1969 : arrivée du web et des navigateurs",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le web (1993) n\u0027est pas Internet : il arrive après Arpanet (1969), TCP/IP (1983) et l\u0027ouverture aux réseaux commerciaux (1992). Autres jalons : 2000 éclatement de la bulle spéculative, 2015 objets connectés."
                      }
                  ]
}
});