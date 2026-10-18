// ============================================================
// MatiÃ¨re : Algo 3 : Ch. 5 & 6 (Force brute et tris)
// Source : quizzhub-algo-ch5-6-force-brute-tri.json
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;

Object.assign(defaultData, {
"Algo 3 : Ch. 5 & 6 (Force brute et tris)": {
    "course":  "info",
    "folder":  "Algo 3",
    "description":  "Quiz sur l\u0027énumération par force brute (count, ensembles stables, permutations, 8 reines) et sur les algorithmes de tri (fusion, tas, insertion, dénombrement, borne inférieure).",
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
                          "q":  "Avec b = 2 et n = 3, combien de tableaux X l\u0027appel count(0) affiche-t-il ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "8",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "3",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "9",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "6",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "count(0) affiche l\u0027écriture en base b de tous les entiers de 0 à b^n − 1, soit 2³ = 8 tableaux."
                      },
                      {
                          "q":  "Quels sont les deux premiers tableaux affichés par count(0) avec b = 2 et n = 3 ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "[0,0,1] puis [0,0,0]",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "[0,0,0] puis [0,0,1]",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "[0,0,0] puis [1,0,0]",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "[1,1,1] puis [1,1,0]",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "On remplit X[0] puis X[1] puis X[2] : la dernière case varie le plus vite, ce qui donne l\u0027ordre croissant 000, 001, 010, ..."
                      },
                      {
                          "q":  "Pourquoi l\u0027énumération count est-elle de complexité exponentielle ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elle contient une double boucle imbriquée",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle utilise la récursivité qui est toujours exponentielle",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle trie les tableaux",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle affiche b^n tableaux, donc au moins b^n opérations",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Le nombre d\u0027objets énumérés vaut b^n : c\u0027est la caractéristique de la force brute."
                      },
                      {
                          "q":  "Avec b = 2, quels objets sont en bijection avec les tableaux de n cases à valeurs 0 ou 1 ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Les permutations de n éléments",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les vecteurs de {0,1}^n et les sous-ensembles de {1,…,n}",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les arbres binaires de hauteur n",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les entiers de 0 à n",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Chaque case indique si l\u0027élément i est dans le sous-ensemble : il y a donc 2^n sous-ensembles."
                      },
                      {
                          "q":  "Que fait la procédure stable(i) du cours avec la liste G = [[0,1],[0,2],...] ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elle affiche toutes les permutations de G",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle affiche les vecteurs X ∈ {0,1}^n sans deux sommets adjacents tous deux à 1 (contraintes Ax ≤ 1)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle trie les arêtes de G",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle calcule le plus court chemin dans G",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "À la dernière case, on vérifie pour chaque couple de G que X ne vaut pas 1 des deux côtés ; si toutes les contraintes sont satisfaites (t == 1), on affiche X."
                      },
                      {
                          "q":  "Combien de tableaux affiche permut(0) pour n = 5 ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "5² = 25",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "5⁵ = 3125",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "2⁵ = 32",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "5! = 120",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Chaque valeur j de {0,…,n−1} est utilisée exactement une fois : n! permutations."
                      },
                      {
                          "q":  "Dans permut, quel est le rôle du tableau U ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "U[j] = 1 indique que la valeur j est déjà présente dans X",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "U compte le nombre de permutations",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "U contient le résultat trié",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "U mémorise la profondeur de la récursivité",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "On ne choisit que les valeurs j avec U[j] == 0, ce qui garantit que X est une permutation."
                      },
                      {
                          "q":  "Pourquoi remet-on U[j] à 0 après l\u0027appel récursif dans permut (et r, c, d à 0 dans queen) ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Pour libérer la mémoire du tableau",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Pour annuler le choix (retour arrière) et pouvoir essayer d\u0027autres valeurs",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Pour éviter une erreur de syntaxe",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Pour trier les valeurs de X",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est le principe du backtracking : après avoir exploré toutes les suites possibles d\u0027un choix, on le défait avant d\u0027essayer le suivant."
                      },
                      {
                          "q":  "Dans le problème des 8 reines, que représente Q[i] = j ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Une reine placée en ligne i, colonne j",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La diagonale numéro i",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une reine placée en colonne i, ligne j",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Deux reines sur la ligne j",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les tableaux Q sont en bijection avec les échiquiers ayant exactement une reine par colonne."
                      },
                      {
                          "q":  "Comment les diagonales sont-elles repérées dans queen (colonne i, ligne j, échiquier n × n) ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "c[i+j] pour une diagonale, d[i−j+n−1] pour l\u0027autre, soit 2n−1 diagonales de chaque sorte",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "c[i−j] et d[i+j] sans décalage",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "r[i] et r[j] seulement",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "c[i·j] et d[i+j], soit n diagonales",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "i+j varie de 0 à 2n−2 et i−j+n−1 aussi : on obtient 2n−1 indices distincts par direction, d\u0027où des tableaux de taille 2*n−1."
                      },
                      {
                          "q":  "Combien y a-t-il de façons de placer 8 reines sur un échiquier 8 × 8 sans qu\u0027aucune n\u0027en menace une autre ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "720",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "92",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "40",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "8",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est le résultat classique : 92 solutions pour n = 8 (2 solutions pour n = 4)."
                      },
                      {
                          "q":  "Dans un tas (heap) stocké dans un tableau A avec A[0] = 0, quels sont les fils du sommet i ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "2i et 2i + 1",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "i/2 et i/2 + 1",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "2i − 1 et 2i",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "i − 1 et i + 1",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027arbre binaire est implicite : la racine est A[1], ses fils sont A[2] et A[3], etc."
                      },
                      {
                          "q":  "Quelle propriété le tas de heapsort vérifie-t-il après heap(A) ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "A[i] ≥ A[2i] et A[i] ≥ A[2i+1] : A[1] est le maximum",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le tableau est entièrement trié",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "A[i] = A[2i] + A[2i+1]",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "A[i] ≤ min{A[2i], A[2i+1]} pour tous les sommets internes, donc A[1] est le minimum",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "C\u0027est un tas-min : la racine contient le minimum. Il ne faut pas confondre cette propriété avec le fait que le tableau soit trié."
                      },
                      {
                          "q":  "Quelle est la complexité au pire cas de tas(A, i) ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(1)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(log n)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La valeur descend dans l\u0027arbre binaire de hauteur ⌊log2 n⌋, avec un travail Θ(1) à chaque niveau."
                      },
                      {
                          "q":  "Quelle est la complexité au pire cas de heapsort ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n log n)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n²)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "n extractions du minimum, chacune suivie d\u0027un appel à tas en Θ(log n)."
                      },
                      {
                          "q":  "Quelle est la complexité du tri par insertion trins sur un tableau déjà trié ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n²)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(1)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Pour chaque j, A[j−1] \u003c x : on ne rentre jamais dans la boucle while, d\u0027où Θ(n) au total."
                      },
                      {
                          "q":  "Quelle est la complexité du tri par insertion sur un tableau trié à l\u0027envers ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(2^n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n²), avec Σ_{j=1}^{n−1} j = n(n−1)/2 passages dans le while",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Chaque x est plus petit que tous les éléments précédents : le while fait j passages pour chaque j."
                      },
                      {
                          "q":  "Quelle est la complexité en moyenne du tri par insertion ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n²), avec environ n(n−1)/4 passages",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n^1,5)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "En moyenne la moitié des éléments précédents sont décalés : Σ j/2 = n(n−1)/4, toujours quadratique."
                      },
                      {
                          "q":  "Que dit le cours sur la complexité au pire cas de tout tri par comparaisons ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elle est en Ω(n log n) ; le tri fusion et le tri par tas atteignent cette borne",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle est en Ω(n) et le tri par insertion l\u0027atteint",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle peut être Θ(log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle est en Ω(n²)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027arbre de décision a au moins n! feuilles et au plus 2^h feuilles, donc h ≥ log2 n! = Θ(n log n)."
                      },
                      {
                          "q":  "Dans la preuve de la borne inférieure, pourquoi l\u0027arbre de décision a-t-il au moins n! feuilles ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Parce que l\u0027arbre est un arbre ternaire",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que chaque comparaison a n! résultats",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que le tableau contient n! éléments",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Un algorithme valide doit pouvoir trier n\u0027importe laquelle des n! permutations de l\u0027entrée",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Chaque permutation doit aboutir à une feuille différente, et un arbre binaire de hauteur h a au plus 2^h feuilles."
                      },
                      {
                          "q":  "Quelle est la complexité du tri par dénombrement triden, où m est la valeur maximum du tableau ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(m²)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n·m)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n + m)",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Il parcourt le tableau, le tableau des compteurs de taille m+1, puis le tableau une dernière fois."
                      },
                      {
                          "q":  "Pourquoi triden peut-il être en Θ(n + m) sans contredire la borne Ω(n log n) ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Car il ne trie que des tableaux de taille 2",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Car il utilise le tri par tas en interne",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Car ce n\u0027est pas un tri par comparaisons : il utilise les valeurs comme indices d\u0027un tableau",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Car la borne ne s\u0027applique qu\u0027aux tableaux triés",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La borne n log n concerne les algorithmes qui n\u0027obtiennent d\u0027informations que par des comparaisons. Le tri par dénombrement exploite la valeur des entiers (utile si m est petit devant n log n)."
                      },
                      {
                          "q":  "Dans triden, que représente C[j] après la boucle for j in range(1,m+1): C[j] = C[j-1] + C[j] ?",
                          "tags":  [
                                       "Force brute et tris"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le nombre d\u0027éléments de A égaux à j",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027indice du maximum de A",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le nombre d\u0027éléments de A inférieurs ou égaux à j",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La somme des éléments de A",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C[j] comptait d\u0027abord les occurrences de j ; la somme cumulée donne le nombre d\u0027éléments ≤ j, d\u0027où la position finale de j dans le tableau trié."
                      }
                  ]
}
});