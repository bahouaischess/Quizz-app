// ============================================================
// MatiÃ¨re : Algo 3 : Ch. 2 (Analyse de la complexitÃ©)
// Source : quizzhub-algo-ch2-complexite.json
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;

Object.assign(defaultData, {
"Algo 3 : Ch. 2 (Analyse de la complexitÃ©)": {
    "course":  "info",
    "folder":  "Algo 3",
    "description":  "Quiz sur la complexité algorithmique : Θ(1), polynomial vs exponentiel, Euclide, Fibonacci, calculs d\u0027ordre de grandeur et théorème sur T(n) = aT(n−b) + Θ(n^c).",
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
                          "q":  "Quand dit-on qu\u0027un algorithme est en Θ(1) ?",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Quand il s\u0027exécute en moins d\u0027une seconde",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Quand il s\u0027exécute en une seule instruction",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Quand il ne contient aucune boucle",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Quand son temps d\u0027exécution est indépendant de la taille de ses données d\u0027entrée",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Θ(1) signifie borné par des constantes indépendantes de la taille. Une boucle de 1000 tours fixes reste Θ(1)."
                      },
                      {
                          "q":  "Que dit le cours des fonctions a() (boucle sur range(1)), b() (range(1000)) et c() (a() puis b() deux fois) ?",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Seule a() est Θ(1)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "a() est Θ(1), b() est Θ(1000) et c() est Θ(2000)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "a() est Θ(1), b() est Θ(n) et c() est Θ(n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elles sont toutes les trois en Θ(1) : aucune distinction à ce niveau",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Leurs temps ne dépendent d\u0027aucun paramètre non borné : elles sont toutes en Θ(1), même si le nombre exact d\u0027opérations diffère."
                      },
                      {
                          "q":  "Pour la boucle for i in range(1) de a(), combien d\u0027opérations élémentaires le cours compte-t-il ?",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "2 affectations, 1 addition et 2 tests",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "1 affectation, 1 addition et 1 test",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "2 affectations, 2 additions et 1 test",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "1 affectation et 1 test seulement",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "i est initialisé à 0, incrémenté une fois à la fin du passage, et testé 2 fois (avant et après le passage) : 2 affectations, 1 addition, 2 tests."
                      },
                      {
                          "q":  "Comment le cours distingue-t-il complexité polynomiale et exponentielle ?",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Polynomiale : O(n²) ; exponentielle : tout le reste",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Polynomiale : Θ(log n) ; exponentielle : Θ(n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Polynomiale : Θ(n) ; exponentielle : Θ(n²)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Polynomiale : Θ(n^a log^c n) ; exponentielle : Ω(b^n) pour un réel b \u003e 1",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Les deux types principaux étudiés sont n^a log^c n (a, c entiers ≥ 0) et Ω(b^n) avec b \u003e 1."
                      },
                      {
                          "q":  "Quelle est la complexité de la fonction f(n) de Fibonacci récursive (f(n-1) + f(n-2)) ?",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Exponentielle : T(n) = Ω(1.6^n)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Pseudo-linéaire : Θ(n log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Quadratique : Θ(n²)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Linéaire : Θ(n)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "T(n) est au moins le nombre d\u0027appels à f(1), égal à f(n) = Θ(φ^n) = Ω(1.6^n)."
                      },
                      {
                          "q":  "Que vaut φ dans la formule f(n) = (φ^n − φ̄^n)/√5 de la suite de Fibonacci ?",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "(1 − √5)/2",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "(1 + √5)/2",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "√5",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "(1 + √3)/2",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "φ et φ̄ sont les racines de x² = x + 1 : φ = (1+√5)/2 ≈ 1,618 et φ̄ = (1−√5)/2."
                      },
                      {
                          "q":  "Quelle observation montre rapidement que f(n) est exponentielle ?",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "f(n) ≥ n²",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "f(n) = f(n−1) donc f est constante",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "f(n) ≤ 2n",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "f(n) ≥ 2^i f(n − 2i), d\u0027où f(n) ≥ 2^(n/2)·2^(−1/2) f(1), soit Ω((√2)^n)",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "En remplaçant f(n−1) par f(n−2), on obtient f(n) ≥ 2^i f(n−2i), donc Ω(b^n) avec b = √2 \u003e 1."
                      },
                      {
                          "q":  "Comment rend-on le calcul de Fibonacci en Θ(n) avec la version ft du cours ?",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "En calculant seulement les termes pairs",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "En utilisant un logarithme",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "En mémorisant les valeurs déjà calculées dans un tableau A",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "En remplaçant la récursivité par du hasard",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "ft stocke A[i] dès qu\u0027il est calculé : chaque valeur n\u0027est calculée qu\u0027une fois, soit Θ(n) appels."
                      },
                      {
                          "q":  "La fonction fc(n) appelle fc(n-1) une seule fois et renvoie [v, u+v]. Quelle est sa complexité ?",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(2^n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n²)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n)",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Un seul appel récursif sur n−1 avec un travail Θ(1) : cas a = 1, b = 1, c = 0 du théorème 2, soit Θ(n^(c+1)) = Θ(n)."
                      },
                      {
                          "q":  "Que renvoie e(48, 18) avec l\u0027algorithme d\u0027Euclide du cours ?",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "12",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "3",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "6",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "18",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "e(48,18) → e(18,12) → e(12,6) → e(6,0) = 6, le pgcd."
                      },
                      {
                          "q":  "Sur quelle propriété repose l\u0027algorithme d\u0027Euclide ?",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "pgcd(a, b) = a·b",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "pgcd(a, b) = pgcd(a − 1, b − 1)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "pgcd(a, 0) = a et pgcd(a, b) = pgcd(b, r) où r est le reste de a par b",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "pgcd(a, b) = pgcd(a, b + a)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les diviseurs communs de (a, b) et de (b, r) sont les mêmes, et le pgcd de (a, 0) est a."
                      },
                      {
                          "q":  "Que se passe-t-il si a \u003c b dans e(a, b) ?",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "L\u0027algorithme boucle indéfiniment",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il renvoie 0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il lève une erreur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "e(a, b) appelle e(b, a), puisque a = 0·b + a",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Le reste de a par b vaut a quand a \u003c b, donc e(a,b) appelle e(b, a) et l\u0027algorithme se poursuit normalement."
                      },
                      {
                          "q":  "Quelle est la complexité d\u0027Euclide en nombre d\u0027appels récursifs ?",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Exponentielle en n",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(r1²)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "O(r1)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "O(n) où n = Θ(log r1) est la taille des entiers",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "On montre r1 ≥ f(n) = Θ(φ^n) (la suite des restes décroît au moins comme Fibonacci), donc n = O(log r1)."
                      },
                      {
                          "q":  "Que calcule l\u0027algorithme B(a, b) (Euclide étendu) du cours ?",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le ppcm de a et b",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les facteurs premiers de a et b",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "x, y ∈ Z et d = pgcd(a, b) tels que ax + by = d",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le quotient et le reste de a par b",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "B renvoie une relation de Bézout ax + by = d. Cet algorithme est une preuve du théorème de Bachet-Bézout."
                      },
                      {
                          "q":  "Pour h(n) (double boucle : for i in range(1,n+1): for j in range(n//i): y = y+1), quelle est la complexité ?",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n log n)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n²)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "y = Σ ⌊n/i⌋ = Θ(n Σ 1/i) = Θ(n log n)."
                      },
                      {
                          "q":  "Après l\u0027appel à p(3,2), quelle est la valeur de y ? (p incrémente y à chaque appel et se rappelle n fois avec i−1 tant que i ≥ 1)",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "9",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "13",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "27",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "12",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "1 + 3 + 9 = 13 appels. En général y = Σ_{i=0}^{c} n^i = (n^(c+1) − 1)/(n − 1) = Θ(n^c)."
                      },
                      {
                          "q":  "Quelle est la complexité de pp(n) qui appelle p(i, c) pour i = 1..n ?",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(c^n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n^c log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n^c)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n^(c+1))",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Σ_{i=1}^{n} i^c = Θ(n^(c+1)) (lemme 1) : majoré par n·n^c et minoré par (n/2)(n/2)^c."
                      },
                      {
                          "q":  "Que dit le théorème 2 pour T(n) = a·T(n − b) + Θ(n^c) ?",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "T(n) est toujours exponentielle",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "T(n) = Θ(n^c log n) si a = 1",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Si a = 1, T(n) = Θ(n^(c+1)) ; sinon l\u0027algorithme est exponentiel",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "T(n) = Θ(n^c) quel que soit a",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Avec a = 1 on additionne n termes en n^c (Θ(n^(c+1))). Dès a ≥ 2, a^q avec q ≈ n/b donne une croissance exponentielle."
                      },
                      {
                          "q":  "Quelle est la complexité de T(n) = T(n−1) + T(n−2) + Θ(1) ?",
                          "tags":  [
                                       "Complexité"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n²)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Exponentielle",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(log n)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "D\u0027après le corollaire 2, une somme de k ≥ 2 termes T(n − b_i) donne une complexité exponentielle ; seul k = 1 est polynomial."
                      }
                  ]
}
});