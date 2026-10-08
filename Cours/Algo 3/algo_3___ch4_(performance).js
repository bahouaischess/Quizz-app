// ============================================================
// MatiÃ¨re : Algo 3 : Ch. 4 (Performances des algorithmes)
// Source : quizzhub-algo-ch4-performance.json
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;

Object.assign(defaultData, {
"Algo 3 : Ch. 4 (Performances des algorithmes)": {
    "course":  "info",
    "folder":  "Algo 3",
    "description":  "Quiz sur l\u0027exponentiation rapide, la multiplication d\u0027entiers de Karatsuba et la multiplication de matrices de Strassen.",
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
                          "q":  "Quelle récurrence décrit l\u0027exponentiation rapide de x^n (calcul de x^(n/2) puis élévation au carré) ?",
                          "tags":  [
                                       "Performance des algorithmes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "T(n) = 2T(n/2) + Θ(1)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "T(n) = 2T(n−1) + Θ(1)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "T(n) = T(n−1) + Θ(1)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "T(n) = T(n/2) + Θ(1)",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Un seul appel sur n/2 et un nombre constant de multiplications."
                      },
                      {
                          "q":  "Quelle est la complexité de l\u0027exponentiation rapide d\u0027après le Master Theorem ?",
                          "tags":  [
                                       "Performance des algorithmes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(√n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(log n)",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "a = 1, b = 2, c = 0 = log_2 1 : cas critique, Θ(n^0 log n) = Θ(log n)."
                      },
                      {
                          "q":  "Quelle est la taille d\u0027un entier a en base 10 ?",
                          "tags":  [
                                       "Performance des algorithmes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "a",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "log10 a² ",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Son nombre de chiffres, soit 1 + ⌊log10 a⌋",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "⌊a/10⌋",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La taille d\u0027un entier est de l\u0027ordre de son logarithme, ce qui motive n = max{log a, log b}."
                      },
                      {
                          "q":  "Quelle est la complexité de l\u0027addition « de l\u0027école primaire » de deux entiers de taille n ?",
                          "tags":  [
                                       "Performance des algorithmes"
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
                                              "text":  "Θ(n)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n²)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "On additionne chiffre par chiffre avec retenue : Θ(n) additions de chiffres."
                      },
                      {
                          "q":  "Quelle est la complexité de la multiplication « de l\u0027école primaire » de deux entiers de taille n ?",
                          "tags":  [
                                       "Performance des algorithmes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n²)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n³)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Chaque chiffre de x est multiplié par chaque chiffre de y : n² multiplications de chiffres."
                      },
                      {
                          "q":  "Dans l\u0027algorithme récursif de multiplication, comment écrit-on x ?",
                          "tags":  [
                                       "Performance des algorithmes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "x = a·10^(n/2) + b, avec a et b de taille n/2",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "x = a + b·10^n",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "x = a·b·10^(n/2)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "x = a·10^n + b, avec a et b de taille n",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "On coupe l\u0027entier x en deux moitiés (même chose pour y = c·10^(n/2) + d)."
                      },
                      {
                          "q":  "Avec x = a·10^(n/2) + b et y = c·10^(n/2) + d, que vaut xy ?",
                          "tags":  [
                                       "Performance des algorithmes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "ac·10^n + (ad + bc)·10^(n/2) + bd",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "ac·10^n + (ad − bc)·10^(n/2) + bd",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "(a + b)(c + d)·10^n",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "ac·10^(n/2) + (ad + bc)·10^n + bd",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "On développe (a·10^(n/2) + b)(c·10^(n/2) + d)."
                      },
                      {
                          "q":  "Quelle est la complexité de la multiplication récursive naïve avec 4 sous-produits ac, ad, bc, bd ?",
                          "tags":  [
                                       "Performance des algorithmes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n³)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n²), comme l\u0027algorithme élémentaire",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n^(log_2 3))",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n log n)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "T(n) = 4T(n/2) + Θ(n) : c = 1 \u003c log_2 4 = 2, donc Θ(n²). Aucun gain."
                      },
                      {
                          "q":  "Quelle est la remarque « cruciale » de Karatsuba ?",
                          "tags":  [
                                       "Performance des algorithmes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "ad + bc = ac + bd",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "ad = bc",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "ad + bc = (a + b)(c + d) − ac − bd",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "ad + bc = (a − b)(c − d) + ac",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Il suffit de calculer ac, bd et (a+b)(c+d) : trois produits récursifs au lieu de quatre, le reste n\u0027étant que des additions."
                      },
                      {
                          "q":  "Quelle récurrence décrit l\u0027algorithme de Karatsuba ?",
                          "tags":  [
                                       "Performance des algorithmes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "T(n) = 3T(n/3) + Θ(n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "T(n) = 3T(n/2) + Θ(n)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "T(n) = 2T(n/2) + Θ(n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "T(n) = 4T(n/2) + Θ(n)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Trois appels récursifs sur des entiers de taille n/2, plus Θ(n) pour les additions et décalages."
                      },
                      {
                          "q":  "Quelle est la complexité de Karatsuba ?",
                          "tags":  [
                                       "Performance des algorithmes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n^(log_3 2))",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n^(log_2 3)), soit environ Θ(n^1,58)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n²)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "a = 3, b = 2, c = 1 \u003c log_2 3 : T(n) = Θ(n^(log_2 3)) ≈ n^1,585, meilleur que n²."
                      },
                      {
                          "q":  "Pourquoi la recomposition de xy à partir des sous-produits coûte-t-elle Θ(n) ?",
                          "tags":  [
                                       "Performance des algorithmes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Car on refait une multiplication complète",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Car on trie les sous-produits",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Car il ne s\u0027agit que d\u0027additions (et de décalages par des puissances de 10)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Car on calcule un logarithme",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Additionner des entiers de taille Θ(n) est en Θ(n)."
                      },
                      {
                          "q":  "Quelle est la complexité de l\u0027algorithme naïf de multiplication C = AB de deux matrices n × n (trois boucles imbriquées) ?",
                          "tags":  [
                                       "Performance des algorithmes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n² log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n³)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n²)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n^(log_2 7))",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Trois boucles de n itérations chacune, avec un travail Θ(1) à l\u0027intérieur (entrées de taille bornée)."
                      },
                      {
                          "q":  "Dans la décomposition par blocs, que vaut C11 ?",
                          "tags":  [
                                       "Performance des algorithmes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "A11B11 + A21B12",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "A11B11 − A12B21",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "A11B12 + A12B22",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "A11B11 + A12B21",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "C11 est le bloc en haut à gauche : somme sur k des a_ik b_kj, répartie entre k ≤ n/2 (A11B11) et k \u003e n/2 (A12B21)."
                      },
                      {
                          "q":  "Quelle est la complexité de la multiplication par blocs avec 8 sous-produits ?",
                          "tags":  [
                                       "Performance des algorithmes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n³), car T(n) = 8T(n/2) + Θ(n²)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n² log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n^(log_2 7))",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n²)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "c = 2 \u003c log_2 8 = 3 : on retrouve Θ(n³), pas de gain par rapport à l\u0027algorithme naïf."
                      },
                      {
                          "q":  "Quelle est la complexité de l\u0027algorithme de Strassen ?",
                          "tags":  [
                                       "Performance des algorithmes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n² log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n^(log_2 7)), soit environ Θ(n^2,81)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n³)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n^(log_7 2))",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "T(n) = 7T(n/2) + Θ(n²) avec c = 2 \u003c log_2 7 ≈ 2,807 : Θ(n^(log_2 7)) \u003c Θ(n³)."
                      },
                      {
                          "q":  "Combien de produits de sous-matrices Strassen utilise-t-il, contre combien pour la méthode par blocs naïve ?",
                          "tags":  [
                                       "Performance des algorithmes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "6 contre 8",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "8 contre 12",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "7 contre 9",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "7 contre 8",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Strassen calcule P1, ..., P7 puis reconstitue les quatre blocs de C par additions et soustractions en Θ(n²)."
                      },
                      {
                          "q":  "Dans Strassen avec P1 = (A11 + A12)B22 et P2 = A11(B12 − B22), que vaut C12 ?",
                          "tags":  [
                                       "Performance des algorithmes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "P1 − P2",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "P1 + P2",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "P2 − P1",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "P1·P2",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "P1 + P2 = A11B22 + A12B22 + A11B12 − A11B22 = A11B12 + A12B22 = C12."
                      },
                      {
                          "q":  "Quel produit est P5 dans la décomposition de Strassen du cours ?",
                          "tags":  [
                                       "Performance des algorithmes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "(A11 + A12) B22",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "A11 (B11 + B22)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "(A11 + A22)(B11 + B22)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "(A11 − A22)(B11 − B22)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "P5 = (A11 + A22)(B11 + B22) est la cinquième matrice qui permet d\u0027obtenir C11 = P6 + P5 + P4 − P1 et C22 = P7 + P5 + P2 − P3."
                      }
                  ]
}
});