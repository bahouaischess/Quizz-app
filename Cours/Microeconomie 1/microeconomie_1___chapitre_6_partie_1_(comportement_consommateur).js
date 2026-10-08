// ============================================================
// MatiÃ¨re : MicroÃ©conomie 1 : Chapitre 6 - P1 (Comportement du consommateur)
// Source : chapitre6_partie1_comportement_consommateur.json
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;

Object.assign(defaultData, {
"MicroÃ©conomie 1 : Chapitre 6 - P1 (Comportement du consommateur)": {
    "course":  "eco",
    "folder":  "MicroÃ©conomie 1",
    "description":  "Contrainte budgétaire, courbes d\u0027indifférence, TMS, choix optimal, effets revenu et substitution, biens de Giffen, offre de travail, transferts en nature.",
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
                          "q":  "Quelle hypothèse simplificatrice est faite sur la contrainte budgétaire du consommateur ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Il ne peut pas emprunter : il ne consomme que ce que lui permet son revenu",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Il ne consomme jamais la totalité de son revenu",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il peut emprunter sans limite",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il épargne toujours la moitié de son revenu",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le cours suppose que le consommateur n\u0027a pas la possibilité d\u0027emprunter. Il ne peut donc consommer aujourd\u0027hui que ce que lui permet son revenu d\u0027aujourd\u0027hui."
                      },
                      {
                          "q":  "Quelles sont les deux dimensions essentielles pour expliquer les choix du consommateur ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La contrainte budgétaire et les préférences du consommateur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les externalités et les taxes",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les coûts fixes et variables",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027offre et la demande",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La contrainte budgétaire dit ce qui est atteignable (on ne peut dépenser plus que son revenu), les préférences disent quel panier est préféré."
                      },
                      {
                          "q":  "Comment s\u0027écrit la contrainte budgétaire d\u0027un consommateur de soda (Cs, prix ps) et de pizzas (Cp, prix pp) avec un revenu R ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "ps·Cs + pp·Cp ≤ R",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Cs + Cp ≥ R",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "ps·pp ≤ R",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "ps·Cp + pp·Cs ≤ R",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La dépense totale en soda plus la dépense totale en pizzas ne peut dépasser le revenu disponible."
                      },
                      {
                          "q":  "Une canette coûte 2 € et une pizza 10 €. Avec 50 € en poche, combien de canettes peut-on acheter si on n\u0027achète aucune pizza ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "5",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "25",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "50",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "20",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "50 / 2 = 25 canettes. Dans le tableau, la combinaison extrême est 0 pizza et 25 canettes. À l\u0027opposé, 5 pizzas et 0 canette."
                      },
                      {
                          "q":  "Avec une canette à 2 € et une pizza à 10 €, quel est le taux d\u0027échange donné par la pente de la contrainte budgétaire ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "1 pizza pour 2 canettes",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "1 pizza pour 10 canettes",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "5 pizzas pour 1 canette",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "1 pizza pour 5 canettes",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "La pente en valeur absolue est ps/pp = 2/10, soit 1 pizza pour 5 canettes. La droite s\u0027écrit Cp = R/pp - ps·Cs/pp."
                      },
                      {
                          "q":  "Que se passe-t-il pour la contrainte budgétaire lorsque le revenu augmente et que les prix restent inchangés ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elle se déplace vers le sud-ouest",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle pivote autour de l\u0027axe des abscisses",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Sa pente change",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle se déplace parallèlement vers le nord-est",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Le rapport des prix n\u0027est pas modifié, donc la pente est inchangée. Les possibilités de consommation augmentent."
                      },
                      {
                          "q":  "Que se passe-t-il pour la contrainte budgétaire lorsque le prix d\u0027un seul bien varie ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elle pivote",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle se déplace parallèlement",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle disparaît",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle reste inchangée",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le rapport des prix change, donc la pente aussi. L\u0027optimum est toujours obtenu par TMS = rapport des prix, mais avec le nouveau rapport."
                      },
                      {
                          "q":  "Qu\u0027est-ce qu\u0027une courbe d\u0027indifférence ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "L\u0027ensemble des paniers au même prix total",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027ensemble des paniers qui procurent au consommateur la même satisfaction",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "L\u0027ensemble des paniers atteignables avec le revenu",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La courbe qui relie les prix et les quantités demandées",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Sur une même courbe d\u0027indifférence, le consommateur est indifférent entre les paniers. Il préfère les courbes situées plus au nord-est."
                      },
                      {
                          "q":  "Que désigne le Taux Marginal de Substitution (TMS) ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La quantité d\u0027un bien nécessaire pour compenser la baisse d\u0027une unité de l\u0027autre bien et rester à satisfaction constante",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le nombre de biens que le revenu permet d\u0027acheter",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La variation du revenu nécessaire pour changer de courbe",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le rapport des prix de deux biens",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le TMS est lié à la pente de la courbe d\u0027indifférence. Il est le taux auquel le consommateur est disposé à faire l\u0027échange, tandis que le rapport des prix est le taux auquel le marché le propose."
                      },
                      {
                          "q":  "Quelles sont des propriétés des courbes d\u0027indifférence selon le cours ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elles ne se croisent pas",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elles sont toujours des droites",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elles se croisent au point de satiété",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elles sont convexes",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les courbes plus hautes sont préférées",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elles ont une pente négative",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Les quatre propriétés du cours : préférence pour les courbes hautes (non-satiété), pente négative, absence de croisement, convexité."
                      },
                      {
                          "q":  "Pourquoi deux courbes d\u0027indifférence ne peuvent-elles pas se croiser ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Cela conduirait à juger équivalents deux paniers dont l\u0027un contient plus des deux biens que l\u0027autre",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce que les prix seraient égaux",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que le TMS serait infini",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que le revenu serait nul",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Si A~B et B~C avec un croisement, alors A~C. Mais C contient plus des deux biens que A, ce qui est contraire à la non-satiété."
                      },
                      {
                          "q":  "Pourquoi les courbes d\u0027indifférence sont-elles convexes ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Parce que les prix sont constants",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que le revenu est limité",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que les biens sont toujours complémentaires",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les consommateurs préfèrent en général l\u0027équilibre : un peu des deux biens plutôt qu\u0027une grande quantité d\u0027un seul",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Le consommateur préfère une combinaison (par exemple 1/2 A + 1/2 B) à chacun des paniers extrêmes. Le TMS décroît quand on descend le long de la courbe."
                      },
                      {
                          "q":  "Dans l\u0027exemple des billets de 10 € et de 20 €, quelle est la forme des courbes d\u0027indifférence ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Des angles droits",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Des courbes concaves",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Des droites : le TMS est constant (parfaite substituabilité)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Des courbes convexes de forme classique",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le consommateur est toujours prêt à échanger deux billets de 10 contre un billet de 20, donc le TMS est constant tout au long de la courbe."
                      },
                      {
                          "q":  "Dans l\u0027exemple des chaussures gauches et droites, quelle est la forme des courbes d\u0027indifférence ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Une droite de pente négative",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Un angle droit (parfaite complémentarité)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Une courbe convexe lisse",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une droite horizontale",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Deux chaussures gauches et une droite ne sont pas plus utiles qu\u0027une seule paire. Les deux biens sont parfaitement complémentaires."
                      },
                      {
                          "q":  "Où se situe le panier optimal du consommateur ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Au point de tangence entre la courbe d\u0027indifférence et la contrainte budgétaire",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Sur la courbe d\u0027indifférence la plus haute, quel que soit le revenu",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "À l\u0027intersection de deux courbes d\u0027indifférence",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Au point le plus bas de la contrainte budgétaire",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les paniers situés sur une courbe plus haute ne sont pas atteignables. Tout panier de la contrainte qui n\u0027est pas à la tangence peut être amélioré."
                      },
                      {
                          "q":  "Quelle condition caractérise le choix optimal du consommateur ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Revenu = prix du bien le plus cher",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "TMS = 0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "TMS = rapport des prix = pente de la contrainte budgétaire (en valeur absolue)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Prix = coût marginal",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "À l\u0027optimum, la valorisation relative des deux biens par le consommateur est égale à celle du marché. La pente de la courbe d\u0027indifférence est égale à celle de la contrainte."
                      },
                      {
                          "q":  "Quand on parle d\u0027un bien normal, que se passe-t-il quand le revenu augmente ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Sa consommation augmente",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Sa consommation reste constante",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Son prix baisse",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Sa consommation diminue",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Un bien normal voit sa consommation croître avec le revenu. Un bien inférieur voit au contraire sa consommation diminuer lorsque le revenu augmente."
                      },
                      {
                          "q":  "Quand le prix du bien p augmente, quelle décomposition est utilisée dans le cours ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Effet revenu (baisse du pouvoir d\u0027achat) et effet de substitution (changement de prix relatif)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Effet taxe et effet subvention",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Effet offre et effet demande",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Effet prix et effet quantité",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027effet revenu déplace le consommateur vers un niveau d\u0027utilité plus faible. L\u0027effet de substitution est le changement de choix à satisfaction constante dû à la variation du prix relatif."
                      },
                      {
                          "q":  "Pour un bien normal dont le prix augmente, quel est l\u0027effet total sur sa consommation ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
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
                                              "text":  "Négatif, sans ambiguïté",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Positif",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027effet de substitution est négatif (le bien devient relativement plus cher) et l\u0027effet revenu est aussi négatif (pouvoir d\u0027achat diminué, bien normal). Les deux vont dans le même sens."
                      },
                      {
                          "q":  "Quand une hausse de prix peut-elle conduire à une hausse de la consommation du bien ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Quand le bien est inférieur et que l\u0027effet revenu l\u0027emporte sur l\u0027effet de substitution (bien de Giffen)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Quand la demande est parfaitement élastique",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Quand le revenu est nul",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Quand le bien est normal",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Pour un bien inférieur, l\u0027effet total est indéterminé. Si l\u0027effet revenu l\u0027emporte, la loi de la demande est violée : c\u0027est un bien de Giffen."
                      },
                      {
                          "q":  "Dans l\u0027exemple du pain à 1 € et de la viande à 2 € avec 3 € par jour, que se passe-t-il si le prix du pain dépasse 1 € ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elle achète autant des deux biens",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle arrête de consommer",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La personne ne peut plus acheter de viande et achète plus de pain",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle achète moins de pain et plus de viande",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Elle doit se contenter de pain et en achète plus pour compenser le manque de viande, ce qui viole la loi de la demande pour cette personne. Cela ne signifie pas que la demande du marché la viole."
                      },
                      {
                          "q":  "Que dit le cours des biens de Giffen ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Ils sont toujours des biens de luxe",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Ils sont très rares et ne concernent que certains consommateurs",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Ils valident la loi de la demande",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Ils sont très fréquents",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La violation de la loi de la demande est possible mais rare, et elle est le fait de certains consommateurs seulement, pas du marché dans son ensemble."
                      },
                      {
                          "q":  "Dans le modèle d\u0027offre de travail, quelle est la contrainte budgétaire du médecin ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "pc·C = T·L",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "pc·C ≥ w·L",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "pc·C ≤ w(T - L)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "C ≤ T - L",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La consommation ne peut dépasser le revenu, égal au salaire horaire multiplié par le temps de travail (T - L). On peut aussi l\u0027écrire pc·C + w·L ≤ w·T."
                      },
                      {
                          "q":  "Qu\u0027est-ce que le « revenu potentiel » du médecin dans le modèle travail-loisir ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "w·(T - L)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "w·T",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "pc·C",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "w·L",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est le revenu que le médecin obtiendrait en consacrant tout son temps total T au travail, au salaire horaire w."
                      },
                      {
                          "q":  "Un médecin dispose de 100 heures par semaine et gagne 50 € par heure travaillée. Quel est le coût d\u0027opportunité d\u0027une heure de loisir ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "50 €",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "100 €",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "5000 €",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "0 €",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Chaque heure de loisir est une heure de travail non effectuée, donc 50 € de revenu perdus. S\u0027il travaille 100 heures, il gagne 5000 € sans loisir."
                      },
                      {
                          "q":  "Quel est l\u0027effet d\u0027une hausse du salaire horaire sur l\u0027offre de travail ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Il est ambigu : cela dépend des effets revenu et substitution",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Toujours une hausse de l\u0027offre de travail",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Toujours une baisse de l\u0027offre de travail",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Aucun effet",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La hausse du salaire rend le loisir plus cher (substitution : plus de travail), mais augmente aussi le revenu (si le loisir est un bien normal, plus de loisir). Tout dépend de l\u0027effet dominant."
                      },
                      {
                          "q":  "Si le loisir est un bien inférieur, quel est l\u0027effet d\u0027une hausse de salaire sur l\u0027offre de travail ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "L\u0027offre de travail reste identique",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027offre de travail diminue",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027effet est ambigu",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027offre de travail augmente",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Les effets revenu et substitution vont dans le même sens : la demande de loisir diminue, donc l\u0027offre de travail augmente."
                      },
                      {
                          "q":  "Si le loisir est un bien normal et que l\u0027effet revenu l\u0027emporte, quel est l\u0027effet d\u0027une hausse du salaire ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le consommateur travaille autant",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027offre de travail augmente",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le loisir diminue",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027offre de travail diminue",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "L\u0027effet revenu positif sur la demande de loisir l\u0027emporte sur l\u0027effet substitution négatif : on demande plus de loisir, donc on offre moins de travail."
                      },
                      {
                          "q":  "Que montrent les études sur les gagnants à la loterie ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Ils changent de salaire horaire",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Ils travaillent autant, car le loisir est inférieur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Leur offre de travail augmente",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Leur offre de travail diminue, ce qui indique un effet revenu positif sur le loisir",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Gagner à la loterie ne change pas le salaire, donc l\u0027effet substitution est neutralisé. Seul l\u0027effet revenu agit, et la baisse de l\u0027offre de travail montre que le loisir est un bien normal."
                      },
                      {
                          "q":  "Dans quel cas un transfert en nature (tickets alimentaires) réduit-il la satisfaction par rapport à un transfert en espèces ?",
                          "tags":  [
                                       "Chapitre 6 - Partie 1"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Toujours",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Lorsque la contrainte supplémentaire est active (le consommateur aurait consommé moins de nourriture)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Jamais, les deux sont équivalents dans tous les cas",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Uniquement si le revenu est nul",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Si la contrainte n\u0027est pas active, le consommateur choisit le même panier dans les deux cas. Si elle est active, il est forcé d\u0027aller au point B, avec une satisfaction plus faible."
                      }
                  ]
}
});