// ============================================================
// MatiÃ¨re : Archi : Circuits séquentiels, les bascules (Chap. 3bis)
// Source : archi-chap3bis-sequentiel-bascules.json
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;

Object.assign(defaultData, {
"Archi : Circuits séquentiels, les bascules (Chap. 3bis)": {
    "course":  "info",
    "folder":  "Architecture des ordis",
    "description":  "Combinatoire vs séquentiel, principe d\u0027une bascule, front montant/descendant, bascules RS, D, JK, T, registres, diviseur de fréquence, compteur synchrone.",
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
                          "q":  "Quelle est la différence fondamentale entre un circuit combinatoire et un circuit séquentiel ?",
                          "tags":  [
                                       "Combinatoire vs séquentiel"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le séquentiel dépend des entrées ET de son état précédent, le combinatoire uniquement des entrées",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le combinatoire possède un élément mémoire, pas le séquentiel",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le séquentiel ne dépend que de l\u0027état précédent, jamais des entrées",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les deux dépendent uniquement des entrées instantanées",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le circuit combinatoire calcule une sortie fonction des seules entrées instantanées et n\u0027a pas de mémoire. Le circuit séquentiel possède un élément mémoire : sa sortie dépend des entrées actuelles et de l\u0027état précédent."
                      },
                      {
                          "q":  "Lesquels de ces circuits sont combinatoires ?",
                          "tags":  [
                                       "Combinatoire vs séquentiel"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Additionneur, multiplexeur, décodeur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Bascule, registre, compteur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Registre et additionneur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Compteur et décodeur",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Additionneur, multiplexeur et décodeur n\u0027ont pas de mémoire : à mêmes entrées, même sortie. Bascule, registre et compteur sont au contraire les exemples types de circuits séquentiels, qui mémorisent un état."
                      },
                      {
                          "q":  "Dans le schéma de principe des circuits séquentiels, quel est l\u0027enchaînement correct ?",
                          "tags":  [
                                       "Combinatoire vs séquentiel"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Entrées → logique → mémoire → état suivant → logique…",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Mémoire → entrées → logique → état suivant",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "État suivant → entrées → mémoire → logique",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Logique → entrées → état suivant → mémoire",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les entrées traversent la logique combinatoire, le résultat est mémorisé, cet état mémorisé redevient une entrée du cycle suivant : c\u0027est cette boucle qui introduit la notion de temps dans le circuit séquentiel."
                      },
                      {
                          "q":  "Que mémorise une bascule, et comment note-t-on son état avant et après un changement ?",
                          "tags":  [
                                       "Principe d\u0027une bascule"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Une bascule mémorise 1 bit ; Q(t) est l\u0027état mémorisé, Q(t+1) le prochain état",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Une bascule mémorise un octet entier",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Q(t) désigne le prochain état et Q(t+1) l\u0027état actuel",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une bascule ne peut mémoriser que la valeur 1, jamais 0",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Une bascule est l\u0027élément mémoire élémentaire : 1 bit, valant 0 ou 1. La notation Q(t) / Q(t+1) permet d\u0027exprimer le fonctionnement d\u0027une bascule comme une fonction de l\u0027état courant (et parfois des entrées) vers l\u0027état suivant."
                      },
                      {
                          "q":  "Quels sont les deux signaux qui pilotent une bascule, selon le schéma de principe ?",
                          "tags":  [
                                       "Principe d\u0027une bascule"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Une entrée de commande et une horloge CLK de synchronisation",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Deux entrées de commande, sans horloge",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une seule entrée, qui fait à la fois office de commande et d\u0027horloge",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une sortie Q et une sortie complémentaire, sans aucune entrée",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La bascule reçoit une entrée qui commande le changement d\u0027état souhaité, et un signal d\u0027horloge CLK qui synchronise le moment où ce changement a effectivement lieu."
                      },
                      {
                          "q":  "Qu\u0027est-ce qu\u0027un front montant et un front descendant de l\u0027horloge ?",
                          "tags":  [
                                       "Front d\u0027horloge"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Front montant : transition de CLK de 0 vers 1 ; front descendant : transition de 1 vers 0",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Front montant : CLK reste à 1 en permanence",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Front descendant : transition de CLK de 0 vers 1",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les fronts montant et descendant désignent la même transition",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027horloge est un signal carré alternant régulièrement 0 et 1. Le front montant est la transition 0→1, le front descendant la transition 1→0. Le choix du front définit précisément quand l\u0027information est mémorisée."
                      },
                      {
                          "q":  "Pourquoi précise-t-on que « la bascule ne réagit pas en permanence à l\u0027horloge » ?",
                          "tags":  [
                                       "Front d\u0027horloge"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Parce qu\u0027elle ne change d\u0027état qu\u0027au moment précis d\u0027un front (montant ou descendant), pas en continu",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce que l\u0027horloge ne fonctionne que la moitié du temps",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que la bascule s\u0027arrête de fonctionner après quelques cycles",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que la bascule ignore totalement le signal d\u0027horloge",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est tout l\u0027intérêt de la synchronisation par front : entre deux fronts actifs, l\u0027état de la bascule reste stable même si les entrées varient, ce qui stabilise le fonctionnement du circuit."
                      },
                      {
                          "q":  "Dans la bascule SR asynchrone, que signifient S et R ?",
                          "tags":  [
                                       "Bascule SR"
                                   ],
                          "options":  [
                                          {
                                              "text":  "S = Set (force Q à 1), R = Reset (force Q à 0)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "S = Shift, R = Read",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "S = Store, R = Run",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "S = Synchronisation, R = Registre",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "SR est l\u0027acronyme de Set/Reset. Mettre S à 1 force la sortie à 1 ; mettre R à 1 la force à 0."
                      },
                      {
                          "q":  "Dans la table de la bascule SR asynchrone, que vaut Q(t+1) pour S=0, R=0 et pour S=1, R=1 ?",
                          "tags":  [
                                       "Bascule SR"
                                   ],
                          "options":  [
                                          {
                                              "text":  "S=0,R=0 : conservation de l\u0027état Q(t) ; S=1,R=1 : combinaison interdite (selon la technologie)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "S=0,R=0 : Q passe à 0 ; S=1,R=1 : Q passe à 1",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "S=0,R=0 : combinaison interdite ; S=1,R=1 : conservation de l\u0027état",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les deux cas donnent toujours Q(t+1) = Q(t)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Table complète : (0,0) → Q(t) conservé ; (0,1) → Q passe à 0 ; (1,0) → Q passe à 1 ; (1,1) → état interdit, car les deux commandes contradictoires (forcer à 0 et à 1 en même temps) rendent le résultat indéterminé selon la technologie."
                      },
                      {
                          "q":  "Quelle est la différence entre une bascule « latch » et une bascule « flip-flop » ?",
                          "tags":  [
                                       "Bascule SR"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le latch est synchronisé par un niveau (haut ou bas), le flip-flop par un front",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le latch est synchronisé par un front, le flip-flop par un niveau",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les deux termes désignent exactement la même chose",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le latch n\u0027a pas d\u0027horloge du tout",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les bascules de type RS sont généralement des latchs, sensibles à un niveau haut ou bas de l\u0027horloge, alors que les bascules de type D sont des flip-flops, déclenchées par un front, ce qui donne un contrôle plus précis du moment de mémorisation."
                      },
                      {
                          "q":  "Comment la bascule D est-elle construite à partir de la bascule RS ?",
                          "tags":  [
                                       "Bascule D"
                                   ],
                          "options":  [
                                          {
                                              "text":  "En forçant R et S à être complémentaires, de sorte qu\u0027une seule entrée D commande le résultat",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "En ajoutant une troisième entrée de commande",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "En supprimant totalement l\u0027horloge",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "En remplaçant R et S par un seul signal d\u0027horloge",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Avec R et S complémentaires (l\u0027un des deux toujours à 1), il ne reste qu\u0027un seul degré de liberté, D : D = 1 → Q devient 1 ; D = 0 → Q devient 0. Cela élimine du même coup l\u0027état interdit de la bascule SR."
                      },
                      {
                          "q":  "Concernant la bascule D :",
                          "tags":  [
                                       "Bascule D"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Au front actif de CLK, Q prend la valeur de D",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Entre deux fronts, Q conserve sa valeur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle évite l\u0027état interdit de la bascule SR",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle possède deux entrées indépendantes, comme la bascule SR",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La bascule D n\u0027a qu\u0027une seule entrée de donnée (D pour Data), ce qui la rend très simple et explique son omniprésence dans les registres et la mémoire : Q(t+1) = D."
                      },
                      {
                          "q":  "Dans un chronogramme de bascule D, quand la sortie Q change-t-elle de valeur ?",
                          "tags":  [
                                       "Bascule D"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Seulement aux fronts actifs de l\u0027horloge, en recopiant la valeur de D à cet instant",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "En continu, dès que D change, quelle que soit l\u0027horloge",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Uniquement lorsque CLK reste à 0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une seule fois, à la mise sous tension, puis plus jamais",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La donnée est échantillonnée au front d\u0027horloge : à chaque front actif, Q recopie la valeur de D à ce moment précis. Entre deux fronts, les variations de D n\u0027ont aucun effet sur Q."
                      },
                      {
                          "q":  "Complétez la table de la bascule JK pour J=1, K=1 et pour J=0, K=1 :",
                          "tags":  [
                                       "Bascule JK"
                                   ],
                          "options":  [
                                          {
                                              "text":  "J=1,K=1 → basculement (Q devient ¬Q(t)) ; J=0,K=1 → Reset (Q devient 0)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "J=1,K=1 → Reset ; J=0,K=1 → Set",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "J=1,K=1 → mémorisation (Q(t) conservé) ; J=0,K=1 → basculement",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "J=1,K=1 → Set ; J=0,K=1 → mémorisation",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Table complète de la JK : (0,0) mémorisation ; (0,1) reset (Q→0) ; (1,0) set (Q→1) ; (1,1) basculement (toggle), Q(t+1) = ¬Q(t). C\u0027est ce dernier cas qui élimine l\u0027état interdit de la SR tout en ajoutant une fonctionnalité utile."
                      },
                      {
                          "q":  "En quoi la bascule JK est-elle une évolution de la bascule SR ?",
                          "tags":  [
                                       "Bascule JK"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elle remplace l\u0027état interdit (1,1) de la SR par un état de basculement exploitable",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle supprime complètement les entrées de commande",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle ne fonctionne que de manière asynchrone, sans horloge",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle ne possède qu\u0027une seule entrée, comme la bascule T",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Là où SR interdit la combinaison (1,1), JK lui donne un sens précis, le basculement (toggle), ce qui rend la bascule JK particulièrement pratique pour construire des compteurs."
                      },
                      {
                          "q":  "Pourquoi la bascule JK est-elle particulièrement utile pour construire des compteurs ?",
                          "tags":  [
                                       "Bascule JK"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Parce que sa fonction de basculement (J=K=1) permet de faire changer périodiquement l\u0027état d\u0027une sortie",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce qu\u0027elle ne peut jamais mémoriser un état",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce qu\u0027elle n\u0027a pas besoin d\u0027horloge pour fonctionner",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce qu\u0027elle possède trois entrées indépendantes",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "En reliant J=K=1 en permanence, chaque front actif de l\u0027horloge fait basculer la sortie : c\u0027est exactement le comportement recherché pour un étage de compteur binaire, qui change d\u0027état à chaque impulsion reçue."
                      },
                      {
                          "q":  "Concernant la bascule T (Toggle) :",
                          "tags":  [
                                       "Bascule T"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Avec T = 0, la sortie ne change pas (Q(t+1) = Q(t))",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Avec T = 1, la sortie change d\u0027état à chaque front : 0 → 1 → 0 → 1…",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Une entrée unique commande le changement d\u0027état",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La bascule T possède deux entrées indépendantes comme la SR",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "T = Toggle : une seule entrée, qui soit laisse la bascule isolée (T=0), soit la fait basculer à chaque front (T=1). C\u0027est l\u0027équivalent fonctionnel d\u0027une bascule JK dont les entrées J et K seraient reliées ensemble."
                      },
                      {
                          "q":  "Pourquoi le cours précise-t-il que « souvent l\u0027entrée T n\u0027existe pas » dans les circuits réels ?",
                          "tags":  [
                                       "Bascule T"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Parce que la bascule change simplement d\u0027état à chaque front montant, sans qu\u0027une entrée T explicite soit nécessaire",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce que la bascule T ne peut physiquement pas être fabriquée",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce qu\u0027il s\u0027agit d\u0027un concept purement théorique, jamais utilisé en pratique",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que T doit toujours être réglée à 0",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Dans un diviseur de fréquence ou un compteur, l\u0027entrée est en permanence maintenue active (T=1, ou J=K=1 pour une JK câblée en diviseur) : le comportement « bascule à chaque front » devient alors le mode de fonctionnement normal du composant, sans qu\u0027il soit nécessaire de matérialiser une entrée T séparée."
                      },
                      {
                          "q":  "Qu\u0027est-ce qu\u0027un registre de n bits ?",
                          "tags":  [
                                       "Registres"
                                   ],
                          "options":  [
                                          {
                                              "text":  "n bascules, généralement synchronisées par la même horloge, qui mémorisent n bits en parallèle",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Une seule bascule capable de mémoriser n bits successivement",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "n bascules fonctionnant chacune sur une horloge différente",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Un circuit purement combinatoire sans mémoire",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Un registre 4 bits, par exemple, utilise 4 bascules synchronisées ensemble pour stocker 4 bits simultanément. Les registres servent dans les processeurs, les bus et les mémoires pour le transfert de données."
                      },
                      {
                          "q":  "Concernant le diviseur de fréquence construit à partir de bascules en cascade :",
                          "tags":  [
                                       "Diviseur de fréquence"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La première sortie Q change d\u0027état à chaque front montant de l\u0027horloge, donnant un front montant de Q tous les deux fronts montants d\u0027horloge",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Chaque étage divise la fréquence par 2 par rapport à l\u0027étage précédent",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Chaque étage multiplie la fréquence par 2 par rapport à l\u0027étage précédent",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Toutes les bascules changent d\u0027état exactement au même rythme que l\u0027horloge d\u0027entrée",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le phénomène se reproduit à chaque étage : la sortie de l\u0027étage n devient l\u0027horloge de l\u0027étage n+1, divisant la fréquence par 2 à chaque fois. C\u0027est un diviseur, pas un multiplicateur."
                      },
                      {
                          "q":  "Dans un compteur synchrone en cycle normal, quand une bascule change-t-elle d\u0027état ?",
                          "tags":  [
                                       "Compteur synchrone"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Lorsque la sortie Q de la bascule précédente passe de 1 à 0 (front descendant vu par la bascule suivante)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Lorsque la sortie Q de la bascule précédente passe de 0 à 1",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Uniquement à la mise sous tension du circuit",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "De façon totalement indépendante des autres bascules",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Chaque bascule suivante réagit au front descendant produit par la bascule précédente lorsqu\u0027elle repasse de 1 à 0, ce qui engendre, de proche en proche, le comptage binaire sur l\u0027ensemble des étages."
                      },
                      {
                          "q":  "Avec n bascules, quelles valeurs prennent successivement les sorties d\u0027un compteur synchrone binaire ?",
                          "tags":  [
                                       "Compteur synchrone"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Les valeurs binaires de 0 à 2ⁿ⁻¹, à chaque front descendant de l\u0027horloge",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Uniquement les valeurs 0 et 1, en alternance",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les valeurs de 0 à n, sans jamais revenir à 0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les valeurs de 1 à 2ⁿ",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "n bascules codent 2ⁿ états possibles, de 0 à 2ⁿ−1, parcourus successivement à chaque front descendant d\u0027horloge avant de reboucler à 0. L\u0027exemple du cours est un compteur synchrone binaire modulo 8, soit n = 3 bascules (0 à 7)."
                      },
                      {
                          "q":  "Un compteur synchrone binaire modulo 8 nécessite combien de bascules, et jusqu\u0027à quelle valeur compte-t-il avant de reboucler ?",
                          "tags":  [
                                       "Compteur synchrone"
                                   ],
                          "options":  [
                                          {
                                              "text":  "3 bascules, comptant de 0 à 7",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "8 bascules, comptant de 0 à 8",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "4 bascules, comptant de 0 à 15",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "3 bascules, comptant de 1 à 8",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Modulo 8 signifie 8 états possibles, soit 2³ : il faut donc 3 bascules, dont les sorties parcourent les valeurs binaires de 0 (000) à 7 (111) avant de reboucler à 0."
                      },
                      {
                          "q":  "Parmi les points « À retenir » du cours, lesquels sont exacts ?",
                          "tags":  [
                                       "Synthèse"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Une bascule mémorise un seul bit",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Pour la bascule D : Q(t+1) = D",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Pour la bascule JK, la combinaison 11 provoque le basculement de Q",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un registre ne peut être formé que d\u0027une seule bascule",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est justement l\u0027inverse : plusieurs bascules synchronisées ensemble forment un registre (ou, selon leur câblage, un compteur). Les autres affirmations reprennent fidèlement le mémo de fin de cours."
                      },
                      {
                          "q":  "Pour la bascule T, quelle égalité correspond au point « À retenir » du cours ?",
                          "tags":  [
                                       "Synthèse"
                                   ],
                          "options":  [
                                          {
                                              "text":  "T = 1 provoque le basculement de Q",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "T = 0 provoque le basculement de Q",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "T = 1 force systématiquement Q à 0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "T n\u0027a jamais d\u0027effet sur Q",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est le mode toggle : T=1 fait basculer Q à chaque front actif, alors que T=0 laisse la bascule inchangée (comportement de mémorisation)."
                      },
                      {
                          "q":  "Quelle est l\u0027idée clé que la logique séquentielle introduit, par rapport à la logique combinatoire ?",
                          "tags":  [
                                       "Synthèse"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La notion de temps et de mémoire",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La possibilité de calculer des fonctions booléennes",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La suppression de toute horloge dans les circuits",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le remplacement des portes logiques par des bascules uniquement",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les fonctions booléennes et les portes logiques existent déjà en logique combinatoire. Ce que la logique séquentielle ajoute, c\u0027est la dimension temporelle : l\u0027état d\u0027un circuit à un instant donné dépend de son passé, grâce à la mémoire que constituent les bascules."
                      },
                      {
                          "q":  "Quel est l\u0027objectif pédagogique explicitement annoncé en introduction de ce chapitre ?",
                          "tags":  [
                                       "Synthèse"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Comprendre la mémoire, la synchronisation, et les bascules RS, D, JK…",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Apprendre à programmer en langage assembleur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Étudier l\u0027architecture de von Neumann",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Convertir des nombres entre bases",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le titre du chapitre, « Circuits séquentiels : les bascules », et son sous-titre « De la mémoire d\u0027un bit aux registres et compteurs », annoncent précisément ce triple objectif : mémoire, synchronisation, et typologie des bascules."
                      },
                      {
                          "q":  "Concernant la mémorisation par une bascule SR en l\u0027absence de commande active (S=0, R=0) :",
                          "tags":  [
                                       "Bascule SR"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La bascule conserve son état précédent, Q(t+1) = Q(t)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La bascule force systématiquement Q à 0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La bascule force systématiquement Q à 1",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027état de la bascule devient indéterminé",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est précisément cette capacité à conserver l\u0027état sans commande active qui fait de la bascule un élément de mémoire : en l\u0027absence de Set ou de Reset, rien ne change."
                      },
                      {
                          "q":  "Pourquoi dit-on que la bascule D évite l\u0027état interdit de la bascule SR ?",
                          "tags":  [
                                       "Bascule D"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Parce que R et S étant forcés complémentaires, la combinaison S=1 et R=1 ne peut jamais se produire",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce que la bascule D n\u0027a pas d\u0027horloge",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que la bascule D possède une troisième entrée qui lève l\u0027ambiguïté",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que la bascule D mémorise 2 bits au lieu d\u0027un seul",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "En forçant R = ¬S (ou S = ¬R), il devient structurellement impossible d\u0027avoir S=1 et R=1 simultanément : l\u0027état interdit de la SR ne peut tout simplement plus se produire dans une bascule D."
                      },
                      {
                          "q":  "Un signal d\u0027horloge carré a pour fréquence 4 MHz. Combien de fronts montants se produisent en une microseconde ?",
                          "tags":  [
                                       "Front d\u0027horloge"
                                   ],
                          "options":  [
                                          {
                                              "text":  "4",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "8",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "2",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "1",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "À 4 MHz, il y a 4 millions de cycles par seconde, donc 4 cycles par microseconde (10⁻⁶ s). Chaque cycle comportant un seul front montant, on compte 4 fronts montants dans cet intervalle."
                      }
                  ]
}
});