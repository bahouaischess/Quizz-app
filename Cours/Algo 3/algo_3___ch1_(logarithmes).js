// ============================================================
// MatiÃ¨re : Algo 3 : Ch. 1 (Introduction et fonctions logarithmes)
// Source : quizzhub-algo-ch1-logarithmes.json
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;

Object.assign(defaultData, {
"Algo 3 : Ch. 1 (Introduction et fonctions logarithmes)": {
    "course":  "info",
    "folder":  "Algo 3",
    "description":  "Quiz sur le cours d\u0027Algorithme et Programmation (L2 MIDO, Paris-Dauphine) : validité, arbres d\u0027appels récursifs, logarithmes, puissances et notation Θ.",
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
                          "q":  "Pour a ∈ N et b ∈ N \\ {0}, que garantit la division euclidienne ?",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "q et r sont uniques seulement si a est multiple de b",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il existe un unique q, mais r peut être choisi librement",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il existe q, r tels que a = qb + r avec 0 \u003c r ≤ b",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il existe deux uniques entiers q, r tels que a = qb + r avec 0 ≤ r \u003c b",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Le cours part de l\u0027existence et de l\u0027unicité du couple (q, r) avec a = qb + r et 0 ≤ r \u003c b : c\u0027est ce qui permet de prouver la validité du code."
                      },
                      {
                          "q":  "Que renvoie ce code pour a=17 et b=5 ?\n\ndef q(a,b):\n    q=0\n    while a - q*b \u003e= b:\n        q=q+1\n    return q",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "3",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "2",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "4",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "On boucle tant que 17 - 5q ≥ 5 : q passe à 1, 2, 3, puis 17 - 15 = 2 \u003c 5 et on sort. Le quotient de 17 par 5 est bien 3."
                      },
                      {
                          "q":  "À la sortie de la boucle while a - q*b \u003e= b, quelle propriété est vérifiée ?",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "a − qb \u003e b",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "a − qb \u003c 0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "a − qb = b",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "a − qb \u003c b, c\u0027est-à-dire r \u003c b",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "On sort quand la condition de boucle est fausse : a − qb \u003c b. Cette condition équivaut à r \u003c b, et le code est ainsi plus lisible que la version avec q−1."
                      },
                      {
                          "q":  "La fonction récursive f(x) incrémente y uniquement quand x = 0 (elle compte les feuilles) et fait deux appels f(x//2) quand x \u003e 0. Combien d\u0027appels f(0) pour x = 8 ?",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "15",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "16",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "4",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "8",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le nombre de feuilles vaut 2^(⌊log2 x⌋+1). Pour x = 8, ⌊log2 8⌋ = 3 donc 2^4 = 16, ce qui correspond au schéma du cours."
                      },
                      {
                          "q":  "La variante qui incrémente y à chaque sommet interne (x \u003e 0) donne f(x) = 2^(⌊log2 x⌋+1) − 1. Quelle valeur pour x = 8 ?",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "16",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "15",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "8",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "7",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "2^(3+1) − 1 = 15 sommets internes (1 + 2 + 4 + 8) ; les 16 feuilles s\u0027ajoutent à ces 15 sommets dans l\u0027arbre complet."
                      },
                      {
                          "q":  "La fonction g(x) appelle g(x-1) deux fois si x \u003e 0 puis fait z = z + 1. Quelle est la valeur de z après g(4) en partant de z = 0 ?",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "15",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "8",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "4",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "16",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "g génère un arbre binaire de hauteur x et z = 2^x − 1. Pour x = 4 : 2^4 − 1 = 15."
                      },
                      {
                          "q":  "Quelle égalité vérifie toute fonction p continue sur Q, à valeurs réelles strictement positives, telle que p(x + y) = p(x)p(y) ?",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "p(x) = b^x avec b = p(1)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "p(x) = b·x avec b = p(1)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "p(x) = x^b avec b = p(1)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "p(x) = log_b x",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le cours montre que les fonctions qui transforment les + en × sont les puissances : p(x) = b^x avec b = p(1)."
                      },
                      {
                          "q":  "Quelle propriété caractérise la fonction logarithme l(x) = log_b x ?",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "l(x + y) = l(x)·l(y)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "l(xy) = l(x) + l(y) : elle transforme les produits en sommes",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "l(xy) = l(x)·l(y)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "l(x + y) = l(x) + l(y)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le logarithme est la fonction réciproque de la puissance : il transforme les produits en sommes, avec l(b) = 1."
                      },
                      {
                          "q":  "Que vaut log_b a × log_a x ?",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "log_x b",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "log_b x",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "log_b(a·x)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "log_a x",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est la formule de changement de base du cours : log_b a × log_a x = log_b x."
                      },
                      {
                          "q":  "Quelle égalité est vraie d\u0027après le cours ?",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "a^(log_b x) = b^(log_a x)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "a^(log_b x) = x^(log_b a)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "a^(log_b x) = log_b(x^a)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "a^(log_b x) = x^(log_a b)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "En prenant log_b des deux côtés : log_b x · log_b a des deux côtés, d\u0027où a^(log_b x) = x^(log_b a)."
                      },
                      {
                          "q":  "Que signifie f(n) = Θ(g(n)) ?",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "f(n) = g(n) pour tout n ≥ n0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "f(n) ≤ β·g(n) pour tout n ≥ n0 seulement",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il existe α, β \u003e 0 tels que α·g(n) ≤ f(n) ≤ β·g(n) pour tout n ≥ n0",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "f(n)/g(n) tend vers 0",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Θ est un encadrement par deux multiples constants de g. Seule la majoration serait O, seule la minoration serait Ω."
                      },
                      {
                          "q":  "Pour x = 15, la fonction f appelle f(x//2) deux fois et fait y = y + x. Que vaut y ?",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "45",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "49",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "15",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "60",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les valeurs par niveau : 15 + 2×7 + 4×3 + 8×1 = 15 + 14 + 12 + 8 = 49."
                      },
                      {
                          "q":  "Quelle est la complexité (valeur finale de y) de la fonction qui fait y = y + x à chaque appel, avec deux appels f(x//2) ?",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(x log x)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(2^x)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(x)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(x²)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "f(x) = Σ 2^i ⌊x/2^i⌋ est encadré par x(n+1)/2 et (n+1)x avec n = ⌊log2 x⌋, d\u0027où Θ(x log x)."
                      },
                      {
                          "q":  "Et si l\u0027on fait y = y + x**2 à la place de y = y + x ?",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(x)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(x²)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(x³)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(x log x)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Pour x = 2^p, f = Σ 2^i (2^p/2^i)² = 2^p Σ 2^(p−i) = 2^p(2^(p+1) − 1) = Θ(2^(2p)) = Θ(x²)."
                      },
                      {
                          "q":  "Pourquoi ne précise-t-on jamais la base du logarithme dans Θ(log n) ?",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Car la base est toujours 2 en informatique",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Car toutes les bases donnent exactement la même valeur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Car Θ ignore les fonctions croissantes",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Car log_a x = Θ(log_b x) pour a, b \u003e 1 : les logarithmes de bases différentes sont proportionnels",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "log_a x = (log_a b)·log_b x : un facteur constant, absorbé par la notation Θ."
                      },
                      {
                          "q":  "Quel lien existe entre Θ, Ω et O ?",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "f = Θ(g) équivaut à f = Ω(g) et f = O(g)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "f = Θ(g) équivaut à f = Ω(g) ou f = O(g)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Ω est la majoration et O la minoration",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "f = O(g) implique toujours f = Θ(g)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "O donne une majoration, Ω une minoration, et Θ les deux à la fois."
                      },
                      {
                          "q":  "Que vaut Σ_{i=1}^{n} 1/i du point de vue de l\u0027algorithmique ?",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(1)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(log n)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est l\u0027analogue discret de ∫ dt/t = ln x. L\u0027encadrement du cours donne p/2 ≤ Σ 1/i ≤ p + 1 avec 2^p ≤ n \u003c 2^(p+1)."
                      },
                      {
                          "q":  "La constante c = lim_{h→0} (b^h − 1)/h donne p\u0027(x) = c·p(x) pour p(x) = b^x. Que vaut la base b quand c = 1 ?",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le nombre d\u0027Euler e",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "1",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "2",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "10",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La constante de Neper e est la base pour laquelle c = 1. Elle n\u0027est pas pertinente pour l\u0027approximation Θ(·)."
                      },
                      {
                          "q":  "Dans quelle classe se trouve x log x parmi les trois classes principales du cours ?",
                          "tags":  [
                                       "Logarithmes et Θ"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Exponentielle",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Pseudo-linéaire (Θ(x^p log x) avec p = 1)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Logarithmique",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Linéaire",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les trois classes sont Θ(x^p), Θ(x^p log x) (p = 0 logarithmique, p = 1 pseudo-linéaire) et Θ(b^x) exponentielle."
                      }
                  ]
}
});