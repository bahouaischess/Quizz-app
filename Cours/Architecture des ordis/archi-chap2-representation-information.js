// ============================================================
// MatiÃ¨re : Archi : Représentation de l'information (Chap. 2)
// Source : archi-chap2-representation-information.json
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;

Object.assign(defaultData, {
"Archi : Représentation de l'information (Chap. 2)": {
    "course":  "info",
    "folder":  "Architecture des ordis",
    "description":  "Bit et mot binaire, systèmes de numération, conversions, arithmétique binaire, entiers signés (signe/valeur absolue, CA1, CA2), réels en virgule fixe et flottante, codage des caractères.",
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
                          "q":  "Concernant le bit (binary digit) :",
                          "tags":  [
                                       "Introduction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Il ne peut prendre que deux valeurs, 0 ou 1",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le 1 logique signifie que l\u0027événement a (eu) lieu, le 0 qu\u0027il n\u0027a pas eu lieu",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Il représente une grandeur analogique continue",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il correspond à un mot binaire complet",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le bit est l\u0027unité élémentaire de la logique booléenne : deux états seulement, matérialisés par deux niveaux de tension (analogie de l\u0027ampoule éteinte / allumée). Un groupe de bits forme un mot binaire, ce qui n\u0027est pas la même chose."
                      },
                      {
                          "q":  "Quelles affirmations sur le mot binaire sont exactes ?",
                          "tags":  [
                                       "Introduction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La taille d\u0027un mot correspond au nombre de bits qui le constituent",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un octet est un mot de taille 8 bits",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un microprocesseur 64 bits peut traiter des mots de 64 bits en une seule opération",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La taille du mot est indépendante de la classification des microprocesseurs",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le mot est l\u0027unité de base manipulée par le calculateur, et sa taille sert justement à classer les microprocesseurs (32 bits, 64 bits...). Plus les mots sont longs, plus le processeur traite de données à la fois, donc plus il est rapide."
                      },
                      {
                          "q":  "Le codage de l\u0027information passe par trois étapes. Dans quel ordre ?",
                          "tags":  [
                                       "Introduction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Numérisation de la grandeur physique, puis codage de chaque nombre en binaire, puis représentation de chaque élément binaire par un état physique",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Codage binaire, puis numérisation, puis représentation par un signal électrique",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Représentation par un signal électrique, puis numérisation, puis codage binaire",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Numérisation, puis représentation par un signal électrique, puis codage binaire",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "On part du signal analogique (ex. une température de 17,4 °C), on le numérise en une suite de nombres, on code ces nombres en binaire, et chaque élément binaire devient enfin un état physique, ici un signal électrique à deux niveaux."
                      },
                      {
                          "q":  "Dans un système de numération, la base correspond à :",
                          "tags":  [
                                       "Systèmes de numération"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le nombre de symboles distincts utilisés",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le nombre de positions disponibles dans l\u0027écriture",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La valeur du symbole de poids fort",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le nombre de bits d\u0027un mot machine",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Un système de numération est défini par un ensemble de symboles (les chiffres) et des règles d\u0027écriture par juxtaposition. Le nombre de symboles distincts est la base : 2 en binaire, 8 en octal, 10 en décimal, 16 en hexadécimal."
                      },
                      {
                          "q":  "Le système décimal est dit positionnel. Que signifie l\u0027écriture polynomiale de 5368 ?",
                          "tags":  [
                                       "Systèmes de numération"
                                   ],
                          "options":  [
                                          {
                                              "text":  "5368 = 5×10³ + 3×10² + 6×10¹ + 8×10⁰",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "5368 = 5×10⁰ + 3×10¹ + 6×10² + 8×10³",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "5368 = (5+3+6+8) × 10⁴",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "5368 = 5×4³ + 3×4² + 6×4¹ + 8×4⁰",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Chaque position possède un poids, puissance croissante de la base de droite à gauche. Le 5 est ici le chiffre de poids fort (10³) et le 8 celui de poids faible (10⁰). Le même principe s\u0027applique aux chiffres après la virgule avec des puissances négatives."
                      },
                      {
                          "q":  "Quelle est la valeur maximale que l\u0027on peut écrire avec n chiffres en base B ?",
                          "tags":  [
                                       "Systèmes de numération"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Bⁿ − 1",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Bⁿ",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Bⁿ⁻¹",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "n × (B − 1)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le maximum est atteint avec n symboles tous égaux à B−1, ce qui vaut Bⁿ − 1. Cas particulier : sur 8 bits en base 2, le maximum est 2⁸ − 1 = 255."
                      },
                      {
                          "q":  "Que vaut (1011)₂ en décimal ?",
                          "tags":  [
                                       "Systèmes de numération"
                                   ],
                          "options":  [
                                          {
                                              "text":  "11",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "13",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "23",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "1011",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11. Attention à ne pas inverser l\u0027ordre des poids : le bit le plus à gauche porte la plus grande puissance."
                      },
                      {
                          "q":  "Concernant les bases 8 et 16 en informatique :",
                          "tags":  [
                                       "Systèmes de numération"
                                   ],
                          "options":  [
                                          {
                                              "text":  "L\u0027octal utilise les symboles de 0 à 7, l\u0027hexadécimal ceux de 0 à 9 puis A à F",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un symbole hexadécimal vaut 4 bits, donc deux symboles font un octet",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le passage base 8 ↔ base 2 se fait par groupes de 3 bits",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un symbole octal vaut 4 bits",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Chaque symbole code log₂(B) bits : 3 bits en octal, 4 bits en hexadécimal. C\u0027est ce qui rend les conversions avec le binaire immédiates, par simple regroupement ou éclatement de bits. L\u0027octal est présenté comme une base ancienne, l\u0027hexadécimal comme la base classique actuelle."
                      },
                      {
                          "q":  "Dans un nombre, on parle de poids fort et de poids faible. Quelle proposition est exacte ?",
                          "tags":  [
                                       "Systèmes de numération"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le bit de poids fort est celui qui « pèse » le plus dans l\u0027écriture du nombre",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Par extension, on parle d\u0027octet de poids fort ou faible pour un nombre sur plusieurs octets",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le bit de poids faible est toujours situé à gauche de l\u0027écriture",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La notion ne s\u0027applique qu\u0027au binaire, jamais aux chiffres décimaux ni aux symboles hexadécimaux",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La notion est générale : elle vaut pour les bits, les chiffres décimaux, les symboles hexadécimaux, et par extension pour les octets d\u0027un nombre codé sur plusieurs octets. Dans l\u0027écriture usuelle, le poids fort est à gauche et le poids faible à droite."
                      },
                      {
                          "q":  "Pour convertir un entier de la base 10 vers la base B, on utilise :",
                          "tags":  [
                                       "Conversions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Des divisions successives par B, en lisant les restes dans le sens inverse de leur obtention",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Des divisions successives par B, en lisant les restes dans l\u0027ordre de leur obtention",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Des multiplications successives par B jusqu\u0027à obtenir un produit nul",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une simple lecture de la forme polynomiale",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "On divise le nombre par B, puis le quotient par B, et ainsi de suite jusqu\u0027à un quotient nul. Le résultat est (X)₁₀ = (Rn…R₃R₂R₁)ᴮ : le dernier reste obtenu est le chiffre de poids fort. Le sens de lecture est le piège classique de cette méthode."
                      },
                      {
                          "q":  "Soit X = (24)₁₀. Quelles conversions sont exactes ?",
                          "tags":  [
                                       "Conversions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "(24)₁₀ = (11000)₂",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "(24)₁₀ = (30)₈",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "(24)₁₀ = (18)₁₆",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "(24)₁₀ = (24)₁₆",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "16 + 8 = 24 donne 11000 en binaire ; 3×8 + 0 = 24 donne 30 en octal ; 1×16 + 8 = 24 donne 18 en hexadécimal. On peut aussi vérifier par regroupement : 011 000 → 30₈ et 0001 1000 → 18₁₆."
                      },
                      {
                          "q":  "Convertir (10111101)₂ en octal :",
                          "tags":  [
                                       "Conversions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "(275)₈",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "(572)₈",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "(BD)₈",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "(357)₈",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "On regroupe par 3 bits à partir du poids faible : 10 | 111 | 101 → 2, 7, 5, soit (275)₈. Le regroupement doit impérativement partir de la droite, sinon le résultat est faux."
                      },
                      {
                          "q":  "Convertir (010111101)₂ en hexadécimal :",
                          "tags":  [
                                       "Conversions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "(BD)₁₆",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "(DB)₁₆",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "(275)₁₆",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "(5D)₁₆",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Regroupement par 4 bits depuis le poids faible : 1011 | 1101 → B, D, soit (BD)₁₆. Dans l\u0027autre sens, chaque symbole hexadécimal se réécrit sur exactement 4 bits (F → 1111, D → 1101)."
                      },
                      {
                          "q":  "En arithmétique binaire, l\u0027addition 1 + 1 donne :",
                          "tags":  [
                                       "Arithmétique binaire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "0 de résultat et 1 de retenue",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "1 de résultat et 0 de retenue",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "2 de résultat et 0 de retenue",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "1 de résultat et 1 de retenue",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "1 + 1 = 10 en binaire : 0 de résultat et 1 de retenue reportée sur la colonne suivante. L\u0027addition se fait de droite à gauche en reportant les retenues, exactement comme en décimal."
                      },
                      {
                          "q":  "En soustraction binaire, 0 − 1 donne :",
                          "tags":  [
                                       "Arithmétique binaire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "1 de résultat et 1 de retenue",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "1 de résultat et 0 de retenue",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "0 de résultat et 1 de retenue",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027opération est impossible",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est le seul cas de la soustraction binaire qui génère une retenue (emprunt) : 0 − 1 donne 1 avec 1 de retenue. Les trois autres cas (0−0, 1−0, 1−1) ne génèrent aucune retenue."
                      },
                      {
                          "q":  "Combien vaut (11011)₂ + (10110)₂ ?",
                          "tags":  [
                                       "Arithmétique binaire"
                                   ],
                          "options":  [
                                          {
                                              "text":  "(110001)₂",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "(101101)₂",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "(11101)₂",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "(1000001)₂",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "27 + 22 = 49, et 49 s\u0027écrit 110001 en binaire. Le résultat comporte un bit de plus que les opérandes, à cause de la retenue finale : c\u0027est le phénomène de débordement si l\u0027on travaille sur un nombre de bits fixé."
                      },
                      {
                          "q":  "Un entier naturel codé en binaire pur sur n bits couvre l\u0027intervalle :",
                          "tags":  [
                                       "Nombres signés"
                                   ],
                          "options":  [
                                          {
                                              "text":  "[0 ; 2ⁿ − 1]",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "[0 ; 2ⁿ]",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "[−2ⁿ⁻¹ ; 2ⁿ⁻¹ − 1]",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "[1 ; 2ⁿ]",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Sur n bits on code 2ⁿ valeurs différentes, de 0 à 2ⁿ − 1 : 0 à 255 sur un octet, 0 à 2¹⁶ − 1 sur deux octets. L\u0027intervalle [−2ⁿ⁻¹ ; 2ⁿ⁻¹ − 1] est celui du complément à deux, pas du binaire pur."
                      },
                      {
                          "q":  "En langage C, quelles affirmations sont exactes ?",
                          "tags":  [
                                       "Nombres signés"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Un entier en notation hexadécimale est préfixé par 0x",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un entier en notation binaire est préfixé par 0b",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un unsigned char occupe 1 octet et code de 0 à 2⁸ − 1",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "En mémoire, un nombre déclaré en décimal est stocké en décimal",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les déclarations i = 123, i = 0x7b et i = 0b1111011 désignent la même valeur : seule la notation change. En mémoire, tout est encodé en binaire. Un unsigned int occupe 4 octets (0 à 2³² − 1) et un short unsigned 2 octets."
                      },
                      {
                          "q":  "Concernant la représentation « signe et valeur absolue » sur n bits :",
                          "tags":  [
                                       "Nombres signés"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le bit de poids fort donne le signe (1 = négatif), les n−1 autres la valeur absolue",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le zéro possède deux représentations, 00…0 et 10…0",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "L\u0027arithmétique est plus compliquée car positifs et négatifs se traitent différemment",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle permet de représenter davantage de nombres qu\u0027en binaire pur sur le même nombre de bits",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "On ne représente pas plus de nombres : on décale simplement la plage de [0 ; 2ⁿ−1] vers [−(2ⁿ⁻¹−1) ; 2ⁿ⁻¹−1]. Exemples du cours : 01011001 = +89 et 10110100 = −52. Le double zéro et la complexité arithmétique expliquent pourquoi cette convention a été abandonnée au profit du complément à deux."
                      },
                      {
                          "q":  "Comment obtient-on la représentation d\u0027un nombre négatif en complément à deux ?",
                          "tags":  [
                                       "Nombres signés"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Écrire la valeur absolue en binaire, inverser tous les bits, puis ajouter 1",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Écrire la valeur absolue en binaire puis forcer le bit de poids fort à 1",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Écrire la valeur absolue en binaire puis inverser tous les bits, sans plus",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Ajouter 1 à la valeur absolue puis inverser tous les bits",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Inverser tous les bits donne le complément à un (CA1) ; ajouter 1 donne le complément à deux (CA2). Une éventuelle retenue finale est abandonnée. La deuxième proposition décrit la représentation signe / valeur absolue."
                      },
                      {
                          "q":  "Quelles propriétés de la représentation en complément à deux sur n bits sont exactes ?",
                          "tags":  [
                                       "Nombres signés"
                                   ],
                          "options":  [
                                          {
                                              "text":  "L\u0027intervalle représenté est [−2ⁿ⁻¹ ; 2ⁿ⁻¹ − 1]",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le zéro a une seule représentation",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "111…11 vaut −1 et 100…00 vaut −2ⁿ⁻¹",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Il faut traiter séparément les positifs et les négatifs lors d\u0027une addition",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est tout l\u0027intérêt du complément à deux : l\u0027arithmétique est simple, on additionne sans se préoccuper des signes. L\u0027intervalle est asymétrique (un négatif de plus que de positifs) parce qu\u0027il n\u0027y a plus de double zéro. Le bit de poids fort reste équivalent à un bit de signe."
                      },
                      {
                          "q":  "On utilise la propriété C2(X) = 2ⁿ − X. Quelle est l\u0027écriture signée de −56 sur 8 bits ?",
                          "tags":  [
                                       "Nombres signés"
                                   ],
                          "options":  [
                                          {
                                              "text":  "11001000",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "10111000",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "11000111",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "00111000",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "2⁸ − 56 = 256 − 56 = 200, et 200 s\u0027écrit 11001000. Vérification par la propriété C2(C2(X)) = X : le complément à deux de 11001000 redonne 00111000 = 56. La réponse 10111000 correspond au piège « signe et valeur absolue », et 11000111 au complément à un (on a oublié le +1)."
                      },
                      {
                          "q":  "Quelle est la valeur signée, en complément à deux sur 8 bits, de X = 10001001 ?",
                          "tags":  [
                                       "Nombres signés"
                                   ],
                          "options":  [
                                          {
                                              "text":  "−119",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "137",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "−137",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "−9",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Lu en binaire pur, VB(X) = 128 + 8 + 1 = 137. Comme le bit de poids fort vaut 1, le nombre est négatif et VS(X) = VB(X) − 2ⁿ = 137 − 256 = −119. La valeur −9 serait la lecture fausse « signe + valeur absolue »."
                      },
                      {
                          "q":  "Concernant le complément à un (CA1) :",
                          "tags":  [
                                       "Nombres signés"
                                   ],
                          "options":  [
                                          {
                                              "text":  "CA1(CA1(N)) = N",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Dans cette représentation, le bit de poids fort indique le signe",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La valeur décimale de 101010 lu en CA1 sur 6 bits est −21",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "CA1 s\u0027obtient en inversant tous les bits puis en ajoutant 1",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "CA1 est la simple inversion de tous les bits ; c\u0027est le CA2 qui ajoute 1. Pour 101010, le bit de poids fort à 1 indique un négatif, donc la valeur est −CA1(101010) = −(010101)₂ = −21."
                      },
                      {
                          "q":  "Pourquoi le complément à deux permet-il de transformer une soustraction en addition ?",
                          "tags":  [
                                       "Nombres signés"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Parce que a − b = a + CA2(b), avec CA2(b) = CA1(b) + 1",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce que a − b = a + CA1(b), sans ajout de 1",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que la soustraction binaire ne génère jamais de retenue",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que le processeur inverse les deux opérandes avant l\u0027opération",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "En partant de a − b = a + 2ⁿ − b = a + (2ⁿ − 1 − b) + 1, et puisque CA1(b) = (2ⁿ − 1) − b, on obtient a − b = a + CA1(b) + 1 = a + CA2(b). L\u0027intérêt matériel est majeur : un seul circuit additionneur suffit pour les deux opérations."
                      },
                      {
                          "q":  "Concernant la représentation en virgule fixe :",
                          "tags":  [
                                       "Nombres réels"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La place de la virgule est imposée : les bits à gauche portent les puissances positives de 2, ceux à droite les puissances négatives",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La plage des nombres représentables et la précision après la virgule sont limitées",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La position de la virgule s\u0027adapte à la valeur du nombre",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle permet de représenter exactement tous les réels",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Toute représentation des réels est nécessairement approchée. En virgule fixe la position de la virgule ne bouge pas, d\u0027où une plage et une précision figées : c\u0027est la limite qui a conduit à la virgule flottante, où l\u0027exposant fait varier l\u0027échelle."
                      },
                      {
                          "q":  "En virgule flottante, on ramène le nombre à l\u0027écriture X = ±1,m × 2ᵉ. Pourquoi parle-t-on de pseudo-mantisse ?",
                          "tags":  [
                                       "Nombres réels"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Parce que la mantisse commence toujours par 1 : ce 1 n\u0027est pas écrit et on ne stocke que m",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce que la mantisse est arrondie à trois chiffres significatifs",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que la mantisse est stockée en complément à deux",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que la mantisse contient aussi le signe du nombre",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La normalisation impose une mantisse dans [1 ; 2[, obtenue par divisions successives par 2 si X ≥ 2 ou multiplications si X \u003c 1. Le 1 initial étant implicite, seul m est codé : c\u0027est la pseudo-mantisse, ce qui économise un bit. Ex. 3,5 = 1,75 × 2¹ et 0,3125 = 1,25 × 2⁻²."
                      },
                      {
                          "q":  "Quelles sont les tailles des champs en virgule flottante ?",
                          "tags":  [
                                       "Nombres réels"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Simple précision : 1 bit de signe, 8 bits d\u0027exposant, 23 bits de pseudo-mantisse",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Double précision : 1 bit de signe, 11 bits d\u0027exposant, 52 bits de pseudo-mantisse",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Simple précision : 1 bit de signe, 11 bits d\u0027exposant, 20 bits de pseudo-mantisse",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le bit de signe vaut 1 lorsque le nombre est positif",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Simple précision = 32 bits au total (float en C), double précision = 64 bits (double en C, float en Python). Le bit de signe vaut 1 quand le nombre est négatif, et non l\u0027inverse."
                      },
                      {
                          "q":  "L\u0027exposant est codé avec un biais de 2ⁿ⁻¹ − 1. Que vaut exp(1000 0000) sur 8 bits ?",
                          "tags":  [
                                       "Nombres réels"
                                   ],
                          "options":  [
                                          {
                                              "text":  "1",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "128",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "−127",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "0",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les bits se lisent 2⁷ = 128, auquel on retranche le biais 2⁷ − 1 = 127, d\u0027où 128 − 127 = 1. Autres exemples du cours : exp(0100 0001) = 64 + 1 − 127 = −62 et exp(1111 0000) = 240 − 127 = 113. Le biais permet de coder des exposants négatifs sans bit de signe supplémentaire."
                      },
                      {
                          "q":  "Soit le flottant 1.10000000.1100…0 (signe . exposant . pseudo-mantisse). Quelle est sa valeur ?",
                          "tags":  [
                                       "Nombres réels"
                                   ],
                          "options":  [
                                          {
                                              "text":  "−3,5",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "+3,5",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "−1,75",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "+0,3125",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Signe = 1 donc négatif ; exposant = 128 − 127 = 1 ; pseudo-mantisse = 2⁻¹ + 2⁻² = 0,75, donc mantisse = 1,75. D\u0027où X = −1,75 × 2¹ = −3,5. Oublier le 1 implicite de la mantisse, ou le bit de signe, sont les deux erreurs classiques."
                      },
                      {
                          "q":  "Comment convertit-on la partie fractionnaire d\u0027un décimal en binaire (ex. 0,427) ?",
                          "tags":  [
                                       "Nombres réels"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Par multiplications successives par 2, en lisant les parties entières obtenues du poids fort vers le poids faible",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Par divisions successives par 2, en lisant les restes à l\u0027envers",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Par multiplications successives par 2, en lisant les parties entières du poids faible vers le poids fort",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "En convertissant séparément chaque chiffre décimal sur 4 bits",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "À chaque multiplication par 2 on retient la partie entière (0 ou 1) et on repart de la partie fractionnaire. Le premier bit obtenu est celui de poids fort, à l\u0027inverse de la méthode des divisions successives utilisée pour la partie entière. Ainsi 0,427 ≈ 0,0110 1101 01₂ ≈ 0,4267578125 : la conversion est approchée."
                      },
                      {
                          "q":  "Concernant les valeurs spéciales et les arrondis en virgule flottante :",
                          "tags":  [
                                       "Nombres réels"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Des valeurs spéciales (0, ±infini, erreur) existent lorsque l\u0027exposant vaut 0 ou 255",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Des règles strictes d\u0027arrondi garantissent la reproductibilité des calculs",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les algorithmes de calcul arithmétique y sont plus simples qu\u0027en entier",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Tous les réels peuvent être représentés exactement",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les exposants extrêmes sont réservés aux cas particuliers. Les algorithmes flottants sont au contraire plus complexes que l\u0027arithmétique entière, et la représentation reste approchée, d\u0027où la nécessité de normaliser les arrondis."
                      },
                      {
                          "q":  "Concernant le codage des caractères :",
                          "tags":  [
                                       "Codage des caractères"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le code ASCII (1964) normalise les caractères sur 7 bits",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "UNICODE vise à coder tous les alphabets mondiaux, avec des codages sur 8, 16 ou 32 bits",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "ASCII inclut dès l\u0027origine les lettres accentuées et les symboles spéciaux",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Chaque caractère est codé par une valeur numérique donnée par une table normalisée",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "ASCII, sur 7 bits, ne couvre ni les accents ni les symboles spéciaux : comme l\u0027octet en compte 8, les constructeurs ont créé leurs propres tables élargies, d\u0027où l\u0027incompatibilité. UNICODE, initié au début des années 1990, unifie l\u0027ensemble (~138 000 caractères)."
                      }
                  ]
}
});