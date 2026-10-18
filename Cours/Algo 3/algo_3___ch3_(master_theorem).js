// ============================================================
// MatiÃ¨re : Algo 3 : Ch. 3 (Master Theorem & rÃ©currences)
// Source : quizzhub-algo-ch3-master-theorem.json
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;

Object.assign(defaultData, {
"Algo 3 : Ch. 3 (Master Theorem & rÃ©currences)": {
    "course":  "info",
    "folder":  "Algo 3",
    "description":  "Quiz sur le tri fusion, le lemme sur les puissances de b, les sommes géométriques et le Master Theorem.",
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
                          "q":  "Pour le tri fusion tf, quels sont a, b, c dans T(n) = aT(n/b) + Θ(n^c) ?",
                          "tags":  [
                                       "Master Theorem"
                                   ],
                          "options":  [
                                          {
                                              "text":  "a = 2, b = 1, c = 2",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "a = 2, b = 2, c = 1",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "a = 1, b = 2, c = 1",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "a = 4, b = 2, c = 1",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Deux appels sur des moitiés (a = b = 2) et une fusion en Θ(n) (c = 1)."
                      },
                      {
                          "q":  "Quelle est la complexité de la fonction fus(t1, t2) qui fusionne deux tableaux triés de taille totale n ?",
                          "tags":  [
                                       "Master Theorem"
                                   ],
                          "options":  [
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
                                          },
                                          {
                                              "text":  "Θ(log n)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Chaque élément est ajouté une fois au tableau résultat via les trois boucles while : Θ(n)."
                      },
                      {
                          "q":  "Énoncé du Master Theorem : que vaut T(n) quand c = log_b a ?",
                          "tags":  [
                                       "Master Theorem"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n^c log n)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n log^c n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n^(log_b a))",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n^c)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Dans le cas critique, tous les niveaux de l\u0027arbre contribuent autant, d\u0027où le facteur log n supplémentaire."
                      },
                      {
                          "q":  "Master Theorem : que vaut T(n) quand c \u003e log_b a ?",
                          "tags":  [
                                       "Master Theorem"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n^c log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n^c)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(a^n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n^(log_b a))",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le travail hors récursion domine (la racine pèse le plus) : T(n) = Θ(n^c)."
                      },
                      {
                          "q":  "Master Theorem : que vaut T(n) quand c \u003c log_b a ?",
                          "tags":  [
                                       "Master Theorem"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n^c)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n^c log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n^(log_b a))",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Les feuilles dominent : a^p = n^(log_b a) avec n = b^p."
                      },
                      {
                          "q":  "Quelle est la solution de T(n) = 4T(n/2) + Θ(n) ?",
                          "tags":  [
                                       "Master Theorem"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n³)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n²)",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "a = 4, b = 2, c = 1 \u003c log_2 4 = 2, donc Θ(n^(log_2 4)) = Θ(n²)."
                      },
                      {
                          "q":  "Quelle est la solution de T(n) = 2T(n/2) + Θ(n²) ?",
                          "tags":  [
                                       "Master Theorem"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n²)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n² log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n log n)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "c = 2 \u003e log_2 2 = 1 : le cas où le travail à la racine domine, soit Θ(n^c) = Θ(n²)."
                      },
                      {
                          "q":  "Quelle est la solution de T(n) = T(n/2) + Θ(1) ?",
                          "tags":  [
                                       "Master Theorem"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(1)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(log n)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n log n)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "a = 1, b = 2, c = 0 = log_2 1 : cas critique, Θ(n^0 log n) = Θ(log n). C\u0027est la recherche dichotomique ou l\u0027exponentiation rapide."
                      },
                      {
                          "q":  "Quelle est la solution de T(n) = 8T(n/2) + Θ(n²) ?",
                          "tags":  [
                                       "Master Theorem"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n⁸)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n²)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n² log n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n³)",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "c = 2 \u003c log_2 8 = 3 : Θ(n^(log_2 8)) = Θ(n³). C\u0027est la multiplication matricielle par blocs."
                      },
                      {
                          "q":  "Quelle est la solution de T(n) = 3T(n/2) + Θ(n) ?",
                          "tags":  [
                                       "Master Theorem"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n^(log_2 3))",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n^(3/2))",
                                              "isCorrect":  false
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
                          "explanation":  "c = 1 \u003c log_2 3 ≈ 1,585 : T(n) = Θ(n^(log_2 3)). C\u0027est l\u0027algorithme de Karatsuba."
                      },
                      {
                          "q":  "Quelle est la solution de T(n) = 2T(n/2) + Θ(1) ?",
                          "tags":  [
                                       "Master Theorem"
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
                                              "text":  "Θ(log n)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "c = 0 \u003c log_2 2 = 1 : T(n) = Θ(n^(log_2 2)) = Θ(n)."
                      },
                      {
                          "q":  "Quelle est la solution de T(n) = 9T(n/3) + Θ(n) ?",
                          "tags":  [
                                       "Master Theorem"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n³)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n²)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(n log n)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "log_3 9 = 2 \u003e c = 1 : T(n) = Θ(n^2)."
                      },
                      {
                          "q":  "Quelle est la solution de T(n) = 3T(n/3) + Θ(n) ?",
                          "tags":  [
                                       "Master Theorem"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n log² n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n²)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(n log n)",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "log_3 3 = 1 = c : cas critique, Θ(n log n), comme le tri fusion."
                      },
                      {
                          "q":  "Quelle est la solution de T(n) = 2T(n/4) + Θ(n) ?",
                          "tags":  [
                                       "Master Theorem"
                                   ],
                          "options":  [
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
                                          },
                                          {
                                              "text":  "Θ(√n)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "log_4 2 = 1/2 \u003c c = 1 : T(n) = Θ(n^c) = Θ(n)."
                      },
                      {
                          "q":  "Quel rôle joue la constante n0 (cas de base T(n) = Θ(1) si n ≤ n0) dans la conclusion du Master Theorem ?",
                          "tags":  [
                                       "Master Theorem"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elle détermine la valeur de c",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle détermine le cas applicable",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle ajoute un terme additif n0 au résultat",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Aucun : la conclusion ne dépend que de a, b et c",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Le cours le remarque explicitement : n0 n\u0027intervient pas dans la conclusion."
                      },
                      {
                          "q":  "D\u0027après le lemme 2, que vaut T(b^p) ?",
                          "tags":  [
                                       "Master Theorem"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(a^p + b^p)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(Σ_{i=0}^{p} a^i · b^(c(p−i)))",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Θ(p · a^p)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(Σ_{i=0}^{p} a^(c i) b^p)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "On déroule la récurrence : au niveau i il y a a^i sous-problèmes de taille b^(p−i), chacun coûtant (b^(p−i))^c."
                      },
                      {
                          "q":  "Pour r \u003e 0, que vaut Σ_{i=0}^{n} r^i selon le lemme 3 ?",
                          "tags":  [
                                       "Master Theorem"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(n) dans tous les cas",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(1) si r \u003c 1 ; Θ(n²) si r = 1 ; Θ(r) si r \u003e 1",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(r^n) dans tous les cas",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(1) si r \u003c 1 ; Θ(n) si r = 1 ; Θ(r^n) si r \u003e 1",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Somme géométrique : bornée si r \u003c 1, n+1 termes égaux à 1 si r = 1, dominée par le dernier terme si r \u003e 1."
                      },
                      {
                          "q":  "Pour le tri fusion, que vaut T(2^p) d\u0027après le cours ?",
                          "tags":  [
                                       "Master Theorem"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Θ(2^p)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(p²·2^p)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ(2^(2p))",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Θ((p + 1)·2^p)",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Σ_{i=0}^{p} 2^i·2^(p−i) = (p+1)2^p. Avec le corollaire 1 on obtient T(n) = Θ(n log n)."
                      },
                      {
                          "q":  "Pourquoi faut-il le corollaire 1 (ou le théorème 1) après avoir calculé T(b^p) ?",
                          "tags":  [
                                       "Master Theorem"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Pour supprimer les logarithmes",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Pour justifier que b doit valoir 2",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Pour passer du pire cas au cas moyen",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Pour passer des puissances de b à tout entier n, en utilisant que T est croissante",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "On encadre n entre b^p et b^(p+1) et on utilise la croissance de T pour étendre Θ(b^(pc) p^a) en Θ(n^c log^a n)."
                      }
                  ]
}
});