// ============================================================
// MatiÃ¨re : Archi : Algèbre de Boole et circuits logiques (Chap. 3)
// Source : archi-chap3-algebre-boole-circuits.json
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;

Object.assign(defaultData, {
"Archi : Algèbre de Boole et circuits logiques (Chap. 3)": {
    "course":  "info",
    "folder":  "Architecture des ordis",
    "description":  "Transistor et portes logiques, fonctions booléennes et tables de vérité, propriétés et De Morgan, formes canoniques et mintermes, portes universelles, décodeur et additionneurs.",
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
                          "q":  "Quelle est la différence entre circuit combinatoire et circuit séquentiel ?",
                          "tags":  [
                                       "Généralités"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Dans un circuit combinatoire, les sorties ne dépendent que des entrées et le temps de propagation est négligé",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Dans un circuit séquentiel, des sorties sont réinjectées dans les entrées et le temps de propagation ne peut plus être ignoré",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un circuit combinatoire mémorise son état précédent",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Un circuit séquentiel n\u0027utilise pas de portes logiques",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le critère est la réinjection des sorties vers les entrées, qui crée une dépendance au temps. Le circuit combinatoire est sans mémoire : à une combinaison d\u0027entrées correspond toujours la même sortie."
                      },
                      {
                          "q":  "Concernant le transistor en logique numérique :",
                          "tags":  [
                                       "Généralités"
                                   ],
                          "options":  [
                                          {
                                              "text":  "C\u0027est un interrupteur numérique à deux états stables",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les transistors sont regroupés en portes logiques, elles-mêmes briques de circuits plus complexes",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Il véhicule une infinité de niveaux de tension intermédiaires exploités par la logique",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "C\u0027est le regroupement de plusieurs portes logiques",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les fils ne véhiculent que deux informations, 0 ou 1, matérialisées par deux niveaux de tension : c\u0027est la logique numérique. La hiérarchie va du transistor (bloqué / saturé, soit interrupteur ouvert / fermé) vers les portes, puis vers les circuits complexes."
                      },
                      {
                          "q":  "Une fonction booléenne de n variables est entièrement définie par :",
                          "tags":  [
                                       "Généralités"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Les valeurs qu\u0027elle prend sur les 2ⁿ combinaisons possibles des entrées",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les valeurs qu\u0027elle prend sur n combinaisons des entrées",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Sa seule expression algébrique simplifiée",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le nombre de portes logiques de son diagramme",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "On s\u0027intéresse aux fonctions {0,1}ⁿ → {0,1}. Une même fonction peut ensuite s\u0027exprimer de trois manières équivalentes : table de vérité, expression algébrique ou diagramme de portes logiques."
                      },
                      {
                          "q":  "Concernant la table de vérité d\u0027un système à n variables d\u0027entrée :",
                          "tags":  [
                                       "Généralités"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elle comporte 2ⁿ lignes",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle comporte n+1 colonnes",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Chaque ligne donne une combinaison des variables et la valeur correspondante de la fonction",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle comporte n lignes et 2ⁿ colonnes",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "n colonnes pour les entrées plus une pour la sortie F, et une ligne par combinaison possible, soit 2ⁿ. Ne pas intervertir lignes et colonnes : le nombre de lignes croît exponentiellement, pas le nombre de colonnes."
                      },
                      {
                          "q":  "Comment étudie-t-on un circuit combinatoire ayant plusieurs sorties ?",
                          "tags":  [
                                       "Généralités"
                                   ],
                          "options":  [
                                          {
                                              "text":  "En considérant chaque sortie indépendamment, car il n\u0027y a pas de dépendances entre sorties",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "En construisant une unique fonction dont la valeur code toutes les sorties",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "En étudiant d\u0027abord les dépendances mutuelles entre les sorties",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "C\u0027est impossible sans passer par un circuit séquentiel",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Dans un circuit combinatoire, chaque sortie est une fonction booléenne des seules entrées : on peut donc traiter chaque sortie comme un problème séparé, ce que fait par exemple l\u0027étude d\u0027un décodeur sortie par sortie."
                      },
                      {
                          "q":  "Quelles sont les trois fonctions élémentaires de l\u0027algèbre de Boole ?",
                          "tags":  [
                                       "Fonctions et portes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "NON (complément), OU (somme logique, union, « + ») et ET (produit logique, intersection, « . »)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "NON-ET, NON-OU et OU-exclusif",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "ET, OU et OU-exclusif",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Addition, soustraction et complément",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "NON, OU et ET suffisent à construire n\u0027importe quelle fonction logique. NAND, NOR et XOR sont des fonctions dérivées, très utiles en pratique mais définies à partir des trois précédentes."
                      },
                      {
                          "q":  "Pour une fonction de n variables, quelles définitions sont exactes ?",
                          "tags":  [
                                       "Fonctions et portes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "ET vaut 1 si et seulement si toutes les entrées valent 1",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "OU vaut 1 si et seulement s\u0027il existe au moins une entrée à 1",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "OU-exclusif à deux entrées vaut 1 si et seulement si une seule des deux entrées vaut 1",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "ET vaut 1 dès qu\u0027au moins une entrée vaut 1",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Formulation quantifiée du cours : ET correspond à « pour tout i, xᵢ = 1 », OU à « il existe i tel que xᵢ = 1 », et XOR à « il existe un unique i tel que xᵢ = 1 ». Le XOR sert à détecter les différences entre deux valeurs."
                      },
                      {
                          "q":  "Que vaut la table de vérité du NON-OU (NOR) pour a et b ?",
                          "tags":  [
                                       "Fonctions et portes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "NOR(0,0) = 1 et NOR(0,1) = NOR(1,0) = NOR(1,1) = 0",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "NOR vaut 1 dans les trois premiers cas et 0 seulement pour (1,1)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "NOR(a,b) = 1 si exactement une entrée vaut 1",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "NOR(a,b) = a.b",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le NOR est le complément du OU : il ne vaut 1 que si toutes les entrées sont à 0. La deuxième proposition décrit le NAND (complément du ET), qui ne vaut 0 que pour (1,1) : c\u0027est la confusion la plus fréquente entre les deux."
                      },
                      {
                          "q":  "Parmi ces propriétés de l\u0027algèbre de Boole, lesquelles sont exactes ?",
                          "tags":  [
                                       "Propriétés"
                                   ],
                          "options":  [
                                          {
                                              "text":  "a + 1 = 1 et 0.a = 0 (élément absorbant)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "a + a = a et a.a = a (idempotence)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "a + ā = 1 et a.ā = 0",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "a + a = 2a",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "En algèbre de Boole il n\u0027y a pas d\u0027accumulation numérique : a + a se simplifie en a (idempotence). Les éléments neutres sont 0 pour le OU et 1 pour le ET, les éléments absorbants sont 1 pour le OU et 0 pour le ET."
                      },
                      {
                          "q":  "Concernant le OU-exclusif, quelles égalités sont exactes ?",
                          "tags":  [
                                       "Propriétés"
                                   ],
                          "options":  [
                                          {
                                              "text":  "a ⊕ a = 0",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "a ⊕ 1 = ā",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "a ⊕ 0 = a",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "a ⊕ ā = 0",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "a ⊕ ā vaut 1, puisque les deux opérandes diffèrent toujours. Le XOR agit comme un inverseur commandé : combiné à 0 il laisse la valeur inchangée, combiné à 1 il la complémente. On retiendra aussi a ⊕ b = ab̄ + āb."
                      },
                      {
                          "q":  "Les lois de De Morgan s\u0027écrivent :",
                          "tags":  [
                                       "Propriétés"
                                   ],
                          "options":  [
                                          {
                                              "text":  "NON(ab) = ā + b̄ et NON(a + b) = ā.b̄",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "NON(ab) = ā.b̄ et NON(a + b) = ā + b̄",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "NON(ab) = a + b et NON(a + b) = ab",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "NON(ab) = NON(a) ⊕ NON(b)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "En complémentant une expression, on échange ET et OU et on complémente chaque variable. La deuxième proposition oublie précisément cet échange d\u0027opérateurs, c\u0027est l\u0027erreur classique. Ces lois permettent de remplacer un OU par des NON et des ET."
                      },
                      {
                          "q":  "Quelles simplifications sont exactes ?",
                          "tags":  [
                                       "Propriétés"
                                   ],
                          "options":  [
                                          {
                                              "text":  "a + ab = a(a + b) = a",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "a + āb = a + b",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "a(ā + b) = ab",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "a + āb = ab",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Ce sont les identités « divers » du tableau des propriétés, très utilisées pour réduire une expression. Attention à ne pas confondre a + āb = a + b (un OU) avec a(ā + b) = ab (un ET) : la barre ne se déplace pas librement."
                      },
                      {
                          "q":  "Qu\u0027est-ce qu\u0027un minterme ?",
                          "tags":  [
                                       "Formes canoniques"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Un ET de toutes les variables, chacune complémentée si elle vaut 0 dans la combinaison considérée, qui ne vaut 1 que pour cette combinaison",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un OU de toutes les variables, qui ne vaut 0 que pour une combinaison",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le produit des seules variables valant 1 dans la combinaison",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La ligne de la table de vérité où la fonction vaut 0",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le minterme doit contenir toutes les variables d\u0027entrée, complémentées ou non : c\u0027est ce qui garantit qu\u0027il ne vaut 1 que pour une seule combinaison. La fonction est ensuite le OU de tous les mintermes correspondant aux lignes où elle vaut 1."
                      },
                      {
                          "q":  "Associez chaque lecture de la table de vérité à sa forme canonique :",
                          "tags":  [
                                       "Formes canoniques"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Lecture sur les 1 → forme disjonctive, somme (OU) de produits (ET)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Lecture sur les 0 → forme conjonctive, produit (ET) de sommes (OU)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Lecture sur les 1 → forme conjonctive, produit de sommes",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les deux formes contiennent seulement une partie des variables d\u0027entrée",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Forme canonique disjonctive : F = Σ Π(eᵢ). Forme canonique conjonctive : F = Π Σ(ēᵢ). Dans les deux cas chaque terme contient toutes les variables d\u0027entrée, d\u0027où le qualificatif canonique. On peut aussi les noter sous forme numérique pour abréger."
                      },
                      {
                          "q":  "Pourquoi cherche-t-on à simplifier les formes canoniques ?",
                          "tags":  [
                                       "Formes canoniques"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Chaque opération utilise du matériel qui prend de la place, donc coûte",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Plus il y a d\u0027opérations, plus le temps de calcul est long et la vitesse de traitement faible",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Plus il y a de matériel, plus la consommation d\u0027énergie est importante",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce qu\u0027une forme canonique est fausse tant qu\u0027elle n\u0027est pas simplifiée",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La forme canonique est correcte mais non minimale. Vitesse, consommation et coût sont les trois grands paramètres de performance des circuits de traitement de l\u0027information numérique, et ils dépendent directement du nombre d\u0027opérations."
                      },
                      {
                          "q":  "Soit F(a,b,c) valant 1 pour les combinaisons 000, 001, 011, 100 et 110. Quelle forme simplifiée obtient-on ?",
                          "tags":  [
                                       "Formes canoniques"
                                   ],
                          "options":  [
                                          {
                                              "text":  "F = ā.b̄.c̄ + (a ⊕ c)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "F = ā.b̄.c̄ + (a ⊕ b)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "F = ā.b̄.c̄ . (a ⊕ c)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "F = a.b.c + (a ⊕ c)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "En partant de F = āb̄c̄ + āb̄c + ābc + ab̄c̄ + abc̄, on factorise : F = āb̄c̄ + (āc + ac̄)(b̄ + b) = āb̄c̄ + (a ⊕ c), puisque b̄ + b = 1. On peut aussi écrire āb̄c̄ = NON(a + b + c) par De Morgan, ce qui donne le schéma à base de portes NOR, XOR et OR."
                      },
                      {
                          "q":  "Quand a-t-on intérêt à calculer NON(F) plutôt que F directement ?",
                          "tags":  [
                                       "Formes canoniques"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Lorsque les cas où F vaut 0 sont moins nombreux que les cas où elle vaut 1",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Lorsque les cas où F vaut 1 sont moins nombreux que les cas où elle vaut 0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Lorsque la fonction possède plus de trois variables d\u0027entrée",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Jamais : le complément d\u0027une fonction ne se calcule pas par mintermes",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le nombre de mintermes à écrire est le nombre de lignes à 1. Si F vaut 1 sur 5 lignes sur 8, il est plus économique d\u0027écrire NON(F) avec ses 3 mintermes : dans l\u0027exemple du cours, NON(F) = ābc̄ + ab̄c + abc."
                      },
                      {
                          "q":  "Concernant les portes universelles :",
                          "tags":  [
                                       "Fonctions et portes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le NON-ET (NAND) permet de calculer n\u0027importe quelle fonction logique",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le NON-OU (NOR) est également universel",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un NON s\u0027obtient avec un seul NAND, en reliant les deux entrées : ā = NON-ET(a,a)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le OU-exclusif est la seule porte universelle",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Puisque NON, ET et OU suffisent à tout construire, et que chacun d\u0027eux se réalise avec des NAND, le NAND seul suffit : un ET demande par exemple trois NAND. Le même raisonnement vaut pour le NOR."
                      },
                      {
                          "q":  "Comment remplacer un OU par des NON et des ET (De Morgan) ?",
                          "tags":  [
                                       "Fonctions et portes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "a + b = NON(ā.b̄), c\u0027est-à-dire le NON du ET de NON(a) et NON(b)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "a + b = ā.b̄",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "a + b = NON(a.b)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "a + b = NON(a).NON(b)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "On applique la double négation : a + b = NON(NON(a + b)) = NON(ā.b̄). Oublier la négation extérieure est l\u0027erreur la plus courante : ā.b̄ vaut le NOR, donc l\u0027inverse du résultat recherché."
                      },
                      {
                          "q":  "Concernant le décodeur :",
                          "tags":  [
                                       "Circuits combinatoires"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Un décodeur n vers 2ⁿ possède n entrées et 2ⁿ sorties",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Lorsque les entrées portent le nombre p en binaire, la sortie numéro p passe à 1",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Il permet de choisir une ligne à partir de son adresse binaire",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Plusieurs sorties sont actives simultanément pour une même adresse",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Une seule sortie est active à la fois, celle dont le numéro correspond à l\u0027adresse présentée. Sur un décodeur 2 vers 4, l\u0027entrée a₁a₀ = 10 active s₂ et laisse s₀, s₁ et s₃ à 0."
                      },
                      {
                          "q":  "Concernant le demi-additionneur :",
                          "tags":  [
                                       "Circuits combinatoires"
                                   ],
                          "options":  [
                                          {
                                              "text":  "S = a ⊕ b et R = a.b",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "S = a.b et R = a ⊕ b",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il additionne deux bits et une retenue entrante",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il ne produit pas de retenue sortante",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le demi-additionneur additionne deux bits seulement : la somme est le XOR (1 uniquement si les bits diffèrent) et la retenue le ET (1 uniquement si les deux bits valent 1). C\u0027est l\u0027additionneur complet qui prend en plus une retenue entrante."
                      },
                      {
                          "q":  "Pour l\u0027additionneur complet à trois bits a, b et r, quelles expressions sont exactes ?",
                          "tags":  [
                                       "Circuits combinatoires"
                                   ],
                          "options":  [
                                          {
                                              "text":  "S = a ⊕ b ⊕ r",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "R\u0027 = r(a ⊕ b) + ab",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "R\u0027 = ābr + ab̄r + abr̄ + abr",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "S = a.b.r",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La somme est le XOR des trois bits : elle vaut 1 quand un nombre impair d\u0027entrées vaut 1. La retenue sortante se factorise depuis sa forme canonique : R\u0027 = r(āb + ab̄) + ab(r̄ + r) = r(a ⊕ b) + ab. En pratique, un additionneur complet se construit avec deux demi-additionneurs et un OU."
                      },
                      {
                          "q":  "Comment construit-on un additionneur 4 bits ?",
                          "tags":  [
                                       "Circuits combinatoires"
                                   ],
                          "options":  [
                                          {
                                              "text":  "En chaînant les étages, la retenue sortante de chaque colonne devenant la retenue entrante de la suivante",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un demi-additionneur suffit pour la colonne de poids faible, les autres colonnes utilisant des additionneurs complets",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "En écrivant la table de vérité complète du circuit à 8 entrées",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "En mettant quatre demi-additionneurs en parallèle, sans propagation de retenue",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "On reproduit l\u0027addition binaire colonne par colonne plutôt que d\u0027écrire une table de vérité, qui serait ingérable. La colonne de poids faible n\u0027a pas de retenue entrante, d\u0027où le demi-additionneur ; la retenue sortante du dernier étage donne le bit R de débordement."
                      }
                  ]
}
});