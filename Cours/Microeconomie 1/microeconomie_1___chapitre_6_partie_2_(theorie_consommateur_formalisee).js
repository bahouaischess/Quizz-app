// ============================================================
// MatiÃ¨re : MicroÃ©conomie 1 : Chapitre 6 - P2 (ThÃ©orie formalisÃ©e du consommateur)
// Source : chapitre6_partie2_theorie_consommateur_formalisee.json
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;

Object.assign(defaultData, {
"MicroÃ©conomie 1 : Chapitre 6 - P2 (ThÃ©orie formalisÃ©e du consommateur)": {
    "course":  "eco",
    "folder":  "MicroÃ©conomie 1",
    "description":  "Axiomes de préférence, fonction d\u0027utilité, TMS, Lagrangien, demandes marshaliennes et hicksiennes, utilité indirecte, fonction de dépense, dualité, équation de Slutsky.",
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
                          "q":  "Comment est représentée la satisfaction du consommateur dans l\u0027approche formalisée ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Par une fonction de coût total",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Par la courbe d\u0027offre",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Par un vecteur de prix",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Par une fonction d\u0027utilité dont les arguments sont les quantités consommées de chaque bien",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "La fonction d\u0027utilité (ou de bien-être) permet de modéliser les préférences. Le consommateur maximise son utilité sous contrainte budgétaire."
                      },
                      {
                          "q":  "Parmi ces vecteurs, lesquels peuvent représenter un panier de consommation dans R+^4 ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "(1, 4, 10.9, 2)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "(0, 2, 4.98, 2)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "(-1, 0, 1, 4)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "(0, 0, 0, 0)",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Un panier est un vecteur de dimension n à composantes positives ou nulles. Le vecteur (-1, 0, 1, 4) est exclu car une composante est négative."
                      },
                      {
                          "q":  "Que stipule l\u0027axiome de complétude ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Plus d\u0027un bien est préférable à moins",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Pour deux paniers x et y, soit x ≽ y, soit y ≽ x, ou les deux",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Pour tout panier x, x ≽ x",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Si x ≽ y et y ≽ z alors x ≽ z",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La complétude signifie que le consommateur peut comparer tous les paniers. Réflexivité : x ≽ x. Transitivité : x ≽ y et y ≽ z implique x ≽ z."
                      },
                      {
                          "q":  "Que stipule l\u0027axiome de transitivité ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Pour tout x, x ≽ x",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Si x ≥ y et x ≠ y alors x ≻ y",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Soit x ≽ y, soit y ≽ x",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Si x ≽ y et y ≽ z, alors x ≽ z",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "C\u0027est la cohérence des préférences. Elle évite des cycles de préférences et permet de les représenter par une fonction d\u0027utilité."
                      },
                      {
                          "q":  "Que stipule l\u0027axiome de réflexivité ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "x ≻ x pour tout x",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Si x ≽ y alors y ≽ x",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Tout panier est au moins aussi bon que lui-même : x ≽ x",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Tous les paniers sont équivalents",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Axiome trivial qui complète la complétude et la transitivité pour définir une relation de préférence cohérente."
                      },
                      {
                          "q":  "Que signifie la stricte monotonicité des préférences ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Les préférences sont discontinues",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le consommateur est indifférent entre tous les paniers",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027utilité est décroissante en quantité",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Si x ≥ y et x ≠ y, alors x ≻ y (plus de chaque bien, et plus d\u0027au moins un, est strictement préféré)",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "C\u0027est l\u0027hypothèse de non-satiété : « au moins autant de chaque bien et plus pour au moins un » est strictement préférable."
                      },
                      {
                          "q":  "Que garantit l\u0027hypothèse de continuité ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Que la demande est linéaire",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Que le consommateur est indifférent entre tous les paniers",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Que les prix sont continus",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Si y ≻ z et x est suffisamment proche de y, alors x ≻ z",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "La continuité (ensembles {x ≽ y} et {x ≼ y} fermés) est une condition technique qui permet de montrer l\u0027existence d\u0027une fonction d\u0027utilité continue."
                      },
                      {
                          "q":  "Que dit le théorème d\u0027existence de la fonction d\u0027utilité ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "L\u0027utilité est toujours linéaire",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Toute fonction d\u0027utilité est unique",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Si les préférences sont complètes, réflexives, transitives, continues et strictement monotones, il existe une fonction d\u0027utilité continue qui les représente",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La fonction d\u0027utilité existe seulement pour deux biens",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le théorème énonce les conditions de représentation. La fonction n\u0027est pas unique : toute transformation monotone croissante la représente aussi."
                      },
                      {
                          "q":  "Comment s\u0027exprime le TMS entre les biens i et j avec une fonction d\u0027utilité u ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "TMS = - pi / pj uniquement",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "TMS = u\u0027i / u\u0027j",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "TMS = dxj/dxi = - u\u0027i / u\u0027j",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "TMS = ui × uj",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "En imposant du = 0 : (∂u/∂xi)dxi + (∂u/∂xj)dxj = 0, d\u0027où dxj/dxi = - u\u0027i/u\u0027j. C\u0027est le rapport des utilités marginales."
                      },
                      {
                          "q":  "Le TMS dépend-il de la fonction d\u0027utilité choisie pour représenter les préférences ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Oui, il change avec toute transformation",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il n\u0027est défini que pour un choix de fonction particulier",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Non, il est invariant par transformation monotone de l\u0027utilité",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Oui, mais seulement si la transformation est linéaire",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Si g est une transformation monotone, le facteur g\u0027(u) se simplifie dans le ratio u\u0027i/u\u0027j. Le TMS reste égal à - u\u0027i/u\u0027j."
                      },
                      {
                          "q":  "Comment s\u0027écrit le programme du consommateur ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "max p·x sous la contrainte u(x) = R",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "min p·x sous la contrainte u(x) ≤ R",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "min u(x) sous la contrainte p·x ≥ R",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "max u(x) sous la contrainte p·x ≤ R",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Le consommateur choisit le panier qui maximise son utilité parmi ceux qu\u0027il peut payer avec son revenu R."
                      },
                      {
                          "q":  "Pourquoi peut-on remplacer la contrainte d\u0027inégalité par une contrainte d\u0027égalité R = p·x ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Grâce à la non-satiété, le consommateur dépense la totalité de son revenu",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce que le consommateur épargne toujours",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que l\u0027utilité est constante",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que les prix sont nuls",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Avec la stricte monotonicité, il est toujours préférable de consommer plus. La contrainte est donc saturée."
                      },
                      {
                          "q":  "Quelle fonction utilise-t-on pour résoudre le programme sous contrainte d\u0027égalité ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La fonction de coût",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le lagrangien L(x, λ) = u(x) + λ(R - p·x)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La fonction d\u0027offre",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le hessien seul",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le lagrangien incorpore la fonction à maximiser et la contrainte. Les conditions du premier ordre fournissent l\u0027optimum."
                      },
                      {
                          "q":  "Quelles sont les conditions du premier ordre du programme du consommateur ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "pi - λ = 0 uniquement",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "λ = 0 et p·x = 0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "u\u0027i(x) - λpi = 0 pour chaque bien i, et R - p·x = 0",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "u\u0027i(x) = 0 pour chaque bien i",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "On dérive le lagrangien par rapport à chaque xi et par rapport à λ. La dernière condition garantit que la contrainte est respectée."
                      },
                      {
                          "q":  "Soit max u(x1, x2) = x1·x2 + 2x1 sous 4x1 + 2x2 = 60. Quelle est la solution ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "x1* = 10, x2* = 10, λ = 2",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "x1* = 15, x2* = 0, λ = 1",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "x1* = 8, x2* = 14, λ = 4",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "x1* = 14, x2* = 8, λ = 4",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "CPO : x2 + 2 = 4λ, x1 = 2λ, 4x1 + 2x2 = 60. On trouve λ = 4, x1 = 8, x2 = 14. Vérification : 4×8 + 2×14 = 60."
                      },
                      {
                          "q":  "Pourquoi les conditions du second ordre sont-elles nécessaires ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Les conditions du premier ordre sont suffisantes, les secondes sont optionnelles",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les conditions du premier ordre sont nécessaires mais pas suffisantes pour garantir un maximum",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elles servent à calculer le multiplicateur de Lagrange",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elles remplacent la contrainte budgétaire",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La condition suffisante du second ordre porte sur le signe du déterminant hessien bordé. Pour deux biens : 2u\u0027\u002712·p1·p2 - u\u0027\u002722·p1² - u\u0027\u002711·p2² \u003e 0."
                      },
                      {
                          "q":  "Dans l\u0027exemple u = x1·x2 + 2x1, que vaut la condition suffisante du second ordre ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "2·p1·p2 \u003e 0",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "p1·p2 \u003c 0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "p1 + p2 \u003c 0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "p1² + p2² = 0",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Ici u\u0027\u002711 = 0, u\u0027\u002722 = 0 et u\u0027\u002712 = 1. La condition 2u\u0027\u002712·p1·p2 - u\u0027\u002722·p1² - u\u0027\u002711·p2² devient 2·p1·p2 \u003e 0."
                      },
                      {
                          "q":  "Comment interprète-t-on le multiplicateur de Lagrange λ dans le programme du consommateur ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Comme le prix du bien i",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Comme l\u0027élasticité-prix de la demande",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Comme l\u0027utilité marginale du revenu : ∂v(p, R)/∂R = λ",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Comme le taux d\u0027intérêt",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "λ mesure le gain d\u0027utilité obtenu en relâchant la contrainte budgétaire d\u0027une unité de revenu. Plus λ est élevé, plus la contrainte est forte."
                      },
                      {
                          "q":  "À l\u0027optimum, que vaut le rapport u\u0027i/u\u0027j ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "pj/pi",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "pi/pj, égal au TMS en valeur absolue",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "λ",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "1",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "En divisant membre à membre u\u0027i = λpi et u\u0027j = λpj, on élimine λ : u\u0027i/u\u0027j = pi/pj = TMS."
                      },
                      {
                          "q":  "Qu\u0027appelle-t-on demande marshalienne ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La fonction de dépense",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La solution du programme de maximisation de l\u0027utilité sous contrainte budgétaire, fonction de p et R",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "L\u0027utilité maximale atteinte",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La solution de la minimisation de la dépense à utilité donnée",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Elle est notée xi(p, R). Elle dépend des paramètres exogènes : prix et revenu."
                      },
                      {
                          "q":  "Quelles sont les propriétés de la demande marshalienne citées dans le cours ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Homogénéité de degré 1 en p",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Homogénéité de degré 0 en (p, R)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La demande est toujours décroissante en R",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Additivité : Σ pi·xi(p, R) = R",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Doubler prix et revenu ne change pas la demande (absence d\u0027illusion monétaire). La dépense totale est égale au revenu."
                      },
                      {
                          "q":  "Qu\u0027est-ce que l\u0027utilité indirecte v(p, R) ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "L\u0027utilité d\u0027un bien sans prix",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La somme des utilités marginales",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027utilité maximale atteignable, v(p, R) = u(x1(p, R), ..., xn(p, R))",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La dépense minimale pour atteindre une utilité donnée",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "On obtient l\u0027utilité indirecte en reportant les demandes marshaliennes dans la fonction d\u0027utilité."
                      },
                      {
                          "q":  "Quelles sont les propriétés de l\u0027utilité indirecte ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Homogène de degré 1 en (p, R)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Croissante en p",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Homogène de degré 0",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Non croissante en p et non décroissante en R",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Quand les prix montent, on peut atteindre moins d\u0027utilité ; quand R monte, au moins autant. Multiplier p et R par µ ne change rien."
                      },
                      {
                          "q":  "Quel est le programme dual du consommateur ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Minimiser l\u0027utilité à revenu donné",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Maximiser la dépense à utilité donnée",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Maximiser l\u0027utilité sous contrainte de revenu",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Minimiser la dépense p·x sous la contrainte u(x) = u",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Le programme dual cherche le panier le moins cher qui atteint un niveau d\u0027utilité donné. À l\u0027optimum, le rapport des utilités marginales est aussi égal au rapport des prix."
                      },
                      {
                          "q":  "Qu\u0027appelle-t-on demande hicksienne ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Une demande qui ne dépend pas des prix",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La demande agrégée du marché",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La solution de la minimisation de la dépense sous contrainte d\u0027atteindre un niveau d\u0027utilité donné",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La solution de la maximisation d\u0027utilité sous contrainte budgétaire",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Notée hi(u, p), elle dépend du niveau d\u0027utilité à atteindre. On l\u0027appelle aussi demande compensée."
                      },
                      {
                          "q":  "Que dit le lemme de Shephard ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "e(u, p) = ∂hi/∂u",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "λ = ∂e/∂R",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "hi(u, p) = ∂e(u, p)/∂pi",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "xi(p, R) = ∂v/∂pi",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La demande hicksienne du bien i s\u0027obtient en dérivant la fonction de dépense par rapport au prix pi."
                      },
                      {
                          "q":  "Quelles sont des propriétés de la fonction de dépense e(u, p) ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Non décroissante en p",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Homogène de degré 1 en p",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Décroissante en p",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Homogène de degré 0 en p",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "e(u, µp) = µ·e(u, p) : multiplier tous les prix par µ multiplie la dépense minimale par µ."
                      },
                      {
                          "q":  "Quelle identité relie la fonction de dépense et l\u0027utilité indirecte ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "v(p, e(u, p)) = p",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "v(p, R) = R",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "e(u, p) = u",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "e(v(p, R), p) = R",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "La dépense minimale pour atteindre l\u0027utilité maximale obtenue avec R est R. Réciproquement v(p, e(u, p)) = u."
                      },
                      {
                          "q":  "Quelle identité relie demandes marshaliennes et hicksiennes ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "xi(p, R) = ∂e/∂R",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "xi(p, R) = hi(v(p, R), p) et hi(u, p) = xi(p, e(u, p))",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "hi(u, p) = xi(p, u)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "xi(p, R) = hi(R, p)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "À l\u0027optimum, les demandes marshaliennes et hicksiennes coïncident : quand le revenu est R, l\u0027utilité est v(p, R) ; quand la dépense minimale est e(u, p), le revenu vaut e(u, p)."
                      },
                      {
                          "q":  "Quelle est l\u0027équation de Slutsky ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "∂xi/∂pj = ∂e/∂pj",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "∂xi/∂pj = ∂v/∂R",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "∂xi/∂pj = ∂hi/∂pj + (∂xi/∂R)·xj*",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "∂xi/∂pj = ∂hi/∂pj (u fixe) - (∂xi/∂R)·xj*",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Le premier terme est l\u0027effet substitution et le second est l\u0027effet revenu."
                      },
                      {
                          "q":  "Que représente le premier terme de l\u0027équation de Slutsky (∂hi/∂pj à utilité fixe) ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La variation de l\u0027utilité indirecte",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027effet revenu",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027effet prix total",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027effet substitution : variation compensatoire de la consommation pour rester au même niveau d\u0027utilité",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "C\u0027est pour cela que les demandes hicksiennes sont appelées fonctions de demande compensée."
                      },
                      {
                          "q":  "Si i est un bien normal et que le prix pj augmente, quel est le signe de l\u0027effet revenu ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Nul",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Indéterminé",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Positif",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Négatif",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "∂xi/∂R \u003e 0 pour un bien normal. L\u0027effet revenu est -(∂xi/∂R)·xj*, négatif : la hausse du prix réduit le pouvoir d\u0027achat."
                      },
                      {
                          "q":  "Quand l\u0027effet revenu est-il nul dans l\u0027équation de Slutsky ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Toujours",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Quand le bien j dont le prix varie n\u0027est pas consommé (xj* = 0)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Quand le bien i est un bien normal",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Quand R est très élevé",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027effet revenu est -(∂xi/∂R)·xj*. Si xj* = 0, la variation du prix de j ne modifie pas le pouvoir d\u0027achat du consommateur."
                      },
                      {
                          "q":  "Pour y = f(x) = 3x² + 7x - 5, que vaut la différentielle dy en x = 5 pour dx = 0,01 ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "3,70",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "0,37 (approximation de la variation réelle Δy = 0,3703)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "0,07",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "0,3703 exactement",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "dy = f\u0027(x)dx = (6x + 7)dx = 37 × 0,01 = 0,37. C\u0027est une approximation puisque f(5) = 105 et f(5,01) = 105,3703."
                      },
                      {
                          "q":  "Que mesure la différentielle totale dy = (∂y/∂x1)dx1 + ... + (∂y/∂xn)dxn ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 2"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La valeur maximale de y",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La variation de y résultant de toutes les sources de variation",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La variation de y quand une seule variable change",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le taux de croissance de y",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Elle additionne les effets de chaque variable. Les termes nuls disparaissent si certaines variables ne varient pas. La dérivée partielle suppose les autres arguments constants."
                      }
                  ]
}
});