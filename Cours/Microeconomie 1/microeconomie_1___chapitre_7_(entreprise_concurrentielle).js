// ============================================================
// MatiÃ¨re : MicroÃ©conomie 1 : Chapitre 7 (Entreprise sur un marchÃ© concurrentiel)
// Source : chapitre7_entreprise_concurrentielle.json
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;

Object.assign(defaultData, {
"MicroÃ©conomie 1 : Chapitre 7 (Entreprise sur un marchÃ© concurrentiel)": {
    "course":  "eco",
    "folder":  "MicroÃ©conomie 1",
    "description":  "Coûts fixes, variables, d\u0027opportunité, coûts moyens et marginaux, maximisation du profit, offre à court et long terme, entrée et sortie des entreprises.",
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
                          "q":  "Dans l\u0027entreprise de biscuits de Thelma, quels sont des coûts fixes ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "L\u0027énergie consommée",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le local et les machines",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La farine et le beurre",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les salaires des employés embauchés pour produire",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les coûts fixes ne dépendent pas de la quantité produite, au moins à court terme. Les ingrédients, l\u0027énergie et la main d\u0027œuvre sont des coûts variables."
                      },
                      {
                          "q":  "Pourquoi Thelma peut-elle fermer son entreprise alors que son profit comptable est positif ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Parce que ses coûts fixes sont nuls",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que son chiffre d\u0027affaires est nul",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que le prix de vente est inférieur au coût variable moyen",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que le coût d\u0027opportunité de son temps (salaire en informatique) dépasse son profit",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Le comptable ne prend en compte que les coûts visibles. L\u0027économiste ajoute les coûts d\u0027opportunité, comme le salaire que Thelma gagnerait en informatique, et peut ainsi expliquer sa décision."
                      },
                      {
                          "q":  "Quelle est la différence d\u0027approche entre comptable et économiste ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le comptable inclut les coûts d\u0027opportunité, pas l\u0027économiste",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le comptable ne retient que les coûts visibles ; l\u0027économiste inclut aussi les coûts d\u0027opportunité",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Ils prennent en compte exactement les mêmes coûts",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "L\u0027économiste ignore les coûts fixes",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le comptable compte les coûts variables et l\u0027amortissement du capital. L\u0027économiste prend en compte tous les coûts, y compris implicites, pour comprendre le comportement des entrepreneurs."
                      },
                      {
                          "q":  "Thelma investit 300 000 € de ses fonds propres ; un compte rémunéré à 4 % rapporterait 12 000 € par an. Comment l\u0027économiste traite-t-il ces 12 000 € ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Comme un profit",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Comme un coût implicite (coût d\u0027opportunité du capital)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Comme un coût visible dépensé",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il les ignore",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Pour monter son affaire, Thelma renonce à ces 12 000 € : c\u0027est un coût d\u0027opportunité. Le comptable l\u0027ignore car cette somme n\u0027est pas dépensée."
                      },
                      {
                          "q":  "Thelma investit 100 000 € et emprunte 200 000 € à 4 % (crédit in fine). Quels intérêts annuels apparaissent comme dépense chez le comptable ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "4 000 €",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "12 000 €",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "20 000 €",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "8 000 €",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "200 000 × 4 % = 8 000 €. Pour l\u0027économiste rien ne change : les coûts visibles augmentent de 8 000 €, mais le coût d\u0027opportunité du capital propre baisse d\u0027autant."
                      },
                      {
                          "q":  "Que représente la fonction de production ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La relation entre le coût total et le profit",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La relation entre le prix et la quantité demandée",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La relation entre le chiffre d\u0027affaires et les coûts fixes",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La relation entre les intrants (par exemple le nombre d\u0027employés) et la production",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Elle s\u0027aplatit à mesure que la production augmente, du fait de la décroissance du produit marginal."
                      },
                      {
                          "q":  "Pourquoi le produit marginal du travail est-il décroissant dans l\u0027usine de Thelma ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La taille et le nombre d\u0027usines sont fixes : les employés finissent par se gêner",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les salaires augmentent avec le nombre d\u0027employés",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le prix des biscuits baisse",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les employés supplémentaires sont moins motivés par nature",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Quand on augmente le nombre d\u0027employés avec un capital fixe, une même machine ne peut être utilisée par deux employés en même temps."
                      },
                      {
                          "q":  "Dans le tableau de Thelma, que vaut le produit marginal du 3e employé ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "120",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "40",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "20",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "30",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "La production passe de 90 (2 employés) à 120 (3 employés) : produit marginal = 30."
                      },
                      {
                          "q":  "Pourquoi la courbe de coût total de Thelma est-elle convexe ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Parce que le coût fixe augmente avec la production",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que la productivité marginale est décroissante et que chaque employé coûte la même chose",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce que le prix de vente augmente",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que les salaires baissent",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Chaque employé coûte autant, mais produit de moins en moins. Chaque biscuit supplémentaire coûte donc de plus en plus cher."
                      },
                      {
                          "q":  "Que mesure le coût marginal ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le coût total divisé par la quantité",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le coût de la production d\u0027une unité supplémentaire",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le coût fixe divisé par la quantité",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le coût variable total",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le coût moyen répond à « combien coûte un litre ? » (CT/Q), le coût marginal à « combien coûte un litre de plus ? » (ΔCT/ΔQ)."
                      },
                      {
                          "q":  "Dans la fabrique de limonade de Louise, quel est le coût marginal du 3e litre ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "0,70 €",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "0,50 €",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "1,50 €",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "4,50 €",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le coût total passe de 3,80 € (2 litres) à 4,50 € (3 litres) : coût marginal = 0,70 €."
                      },
                      {
                          "q":  "Dans la fabrique de Louise, quel est le coût fixe total ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Il augmente de 0,30 € par litre",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "1,50 € à 3 litres",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "0 €",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "3,00 €, quelle que soit la quantité produite",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Le coût fixe est de 3,00 € à tous les niveaux. C\u0027est le coût fixe moyen (CF/Q) qui décroît avec la production."
                      },
                      {
                          "q":  "Dans le tableau de Louise, quel est le coût total moyen pour 5 litres ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "6,50 €",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "1,10 €",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "1,30 €",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "0,70 €",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "CTM = CT/Q = 6,50 / 5 = 1,30 €, soit CFM (0,60) + CMV (0,70)."
                      },
                      {
                          "q":  "Pourquoi la courbe de coût total moyen a-t-elle une forme en U ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le prix de vente varie avec la quantité",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le coût fixe moyen décroît tandis que le coût variable moyen croît ; le premier domine d\u0027abord, le second ensuite",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le coût fixe moyen croît et le coût variable moyen décroît",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le coût marginal est constant",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Avant le minimum du CTM, c\u0027est la baisse du coût fixe moyen qui l\u0027emporte. Après, c\u0027est la hausse du coût variable moyen."
                      },
                      {
                          "q":  "Où la courbe de coût marginal coupe-t-elle la courbe de coût total moyen ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "À l\u0027origine",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "À son maximum",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle ne la coupe jamais",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "À son minimum",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Quand le coût marginal est inférieur au coût moyen, le coût moyen baisse ; quand il est supérieur, il monte. Le croisement est donc au minimum du CTM."
                      },
                      {
                          "q":  "Quelle est l\u0027échelle de production efficace (optimum de production) selon le cours ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La quantité qui correspond au minimum du coût total moyen",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La quantité maximale possible",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La quantité où le coût marginal est nul",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La quantité où le coût fixe moyen est nul",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Pour la fabrique de Louise c\u0027est environ 5,5 l/h. Toute production inférieure ou supérieure conduit à un coût total moyen supérieur au minimum."
                      },
                      {
                          "q":  "Quelles hypothèses caractérisent la concurrence pure et parfaite dans le chapitre ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Produits différenciés",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Libre entrée et sortie des entreprises",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Acheteurs et vendeurs très nombreux, aucun ne peut influencer le prix",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Biens identiques",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Un seul vendeur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Barrières à l\u0027entrée élevées",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le cours rappelle les deux premières caractéristiques et ajoute l\u0027hypothèse de libre entrée et sortie."
                      },
                      {
                          "q":  "Pour une entreprise concurrentielle, que valent le chiffre d\u0027affaires moyen et marginal ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le chiffre d\u0027affaires moyen est supérieur au prix",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le chiffre d\u0027affaires marginal est nul",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Ils diminuent avec la quantité",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Ils sont tous les deux égaux au prix de vente",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Comme l\u0027entreprise est preneuse de prix, CAT = P·Q, CAM = P et CAm = P. Cela n\u0027est pas forcément vrai pour une entreprise non concurrentielle."
                      },
                      {
                          "q":  "Quelle est la règle de maximisation du profit de l\u0027entreprise concurrentielle ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Produire où le coût fixe est nul",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Produire le maximum possible",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Produire où le coût total est minimal",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Produire la quantité pour laquelle le chiffre d\u0027affaires marginal est égal au coût marginal",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "Tant que CAm \u003e CM, chaque unité supplémentaire rapporte plus qu\u0027elle ne coûte. Quand CAm \u003c CM, il faut produire moins."
                      },
                      {
                          "q":  "Louise vend sa limonade à 1,50 €. D\u0027après le tableau, quelle quantité maximise son profit ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "3 litres",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "10 litres",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "7 litres (CM = P = 1,50), avec un profit de 1,20 €",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "1 litre",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "À 6 litres CM = 1,30 \u003c 1,50 : on peut encore augmenter. À 7 litres CM = 1,50 = P. Profit = 10,50 - 9,30 = 1,20 € (identique à 6 litres, mais l\u0027optimum se situe en P = CM)."
                      },
                      {
                          "q":  "Dans le tableau de Louise à 1,50 €, quel est le profit pour 3 litres ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "0 €",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "-3,00 €",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "4,50 €",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "1,00 €",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Chiffre d\u0027affaires = 4,50 €, coût total = 4,50 € : profit nul. Le prix est égal au CTM, c\u0027est le seuil de rentabilité."
                      },
                      {
                          "q":  "Quelle courbe représente la courbe d\u0027offre de l\u0027entreprise concurrentielle ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La courbe de coût fixe moyen",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La courbe de chiffre d\u0027affaires",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La courbe de coût total moyen",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La courbe de coût marginal",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "En égalisant prix et coût marginal, l\u0027entreprise lit sur la courbe de CM la quantité qu\u0027elle offre pour chaque prix. Quand le prix monte, elle produit plus (loi de l\u0027offre)."
                      },
                      {
                          "q":  "À quelle condition un entrepreneur décide-t-il de démarrer une activité (long terme) ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Lorsque P \u003c CTM",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Lorsque CM = 0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Lorsque le prix est supérieur au coût total moyen (P \u003e CTM)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Lorsque P \u003e CMV",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "CAT \u003e CT équivaut à P \u003e CTM en divisant par Q. Le prix à partir duquel il démarre est le « seuil de rentabilité »."
                      },
                      {
                          "q":  "Pourquoi une entreprise peut-elle continuer à produire à court terme en faisant des pertes ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Parce que si elle s\u0027arrête elle doit quand même payer ses coûts fixes ; elle produit si P \u003e CMV",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce que le coût marginal est nul",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que les coûts fixes disparaissent à l\u0027arrêt",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que le profit est toujours positif",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "CAT - CV - CF \u003e -CF équivaut à CAT \u003e CV, soit P \u003e CMV. Tant que le prix couvre les coûts variables, produire permet de réduire la perte."
                      },
                      {
                          "q":  "Quelle est la courbe d\u0027offre à court terme de l\u0027entreprise concurrentielle ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La portion du CTM au-dessus du CM",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Toute la courbe de coût marginal",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une droite horizontale au niveau du CTM minimum",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La portion de la courbe de coût marginal située au-dessus du coût variable moyen",
                                              "isCorrect":  true
                                          }
                                      ],
                          "explanation":  "En dessous du CMV, l\u0027entreprise cesse sa production. Le cours appelle ce prix le « seuil de fermeture »."
                      },
                      {
                          "q":  "Que devient l\u0027offre du marché si le nombre d\u0027entreprises est constant ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elle est égale à l\u0027offre de la plus grande entreprise",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle est la somme des offres de chaque entreprise",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elle est horizontale",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Elle est la moyenne des offres",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Pour un nombre fixe d\u0027entreprises (court terme), on additionne les quantités offertes par chaque entreprise à chaque prix."
                      },
                      {
                          "q":  "Que se passe-t-il à plus long terme si les profits sont positifs sur un marché concurrentiel ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Les prix augmentent",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "De nouvelles entreprises entrent : l\u0027offre augmente, les prix et profits baissent",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Des entreprises sortent",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Rien ne change",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les entrées augmentent la quantité offerte, diminuent les prix et les profits. À l\u0027inverse, si les entreprises perdent de l\u0027argent, certaines sortent, l\u0027offre baisse et les prix montent."
                      },
                      {
                          "q":  "Quelle égalité caractérise l\u0027équilibre de long terme d\u0027un marché concurrentiel ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Prix = coût total moyen = coût marginal",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Coût marginal = 0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Prix = coût fixe moyen",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Prix \u003e coût marginal",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le profit s\u0027écrit (P - CTM)·Q et il est nul à long terme, donc P = CTM. La firme produit où P = CM, donc au minimum du CTM : quantité optimale."
                      },
                      {
                          "q":  "Si le profit économique est nul à long terme, pourquoi les entrepreneurs restent-ils ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Les coûts incluent les coûts d\u0027opportunité ; le profit comptable est positif et compense ces coûts",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce que les coûts fixes sont nuls",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que l\u0027Etat les subventionne",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce qu\u0027ils ne connaissent pas leurs coûts",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le profit économique nul signifie que l\u0027entrepreneur est rémunéré de son temps et de son capital au niveau de leur meilleur usage alternatif."
                      },
                      {
                          "q":  "Comment est l\u0027offre d\u0027un marché concurrentiel à long terme si toutes les firmes sont identiques et libres d\u0027entrer et sortir ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Décroissante",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Horizontale, au niveau du minimum du coût total moyen",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Verticale",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Croissante",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Si la demande augmente, le profit temporaire attire des entrants jusqu\u0027à ce que le prix revienne au minimum du CTM."
                      },
                      {
                          "q":  "Pourquoi la courbe d\u0027offre de long terme peut-elle être croissante en pratique ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Parce que la demande est infiniment élastique",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que le prix est fixe",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Certains facteurs sont en quantité limitée (terre), ou les firmes ne sont pas identiques",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce que les firmes ne peuvent jamais sortir",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Plus de fermiers font monter le prix de la terre, donc les coûts. Et entrent d\u0027abord les firmes aux coûts les plus faibles."
                      },
                      {
                          "q":  "Quand les firmes ne sont pas identiques, quelle firme détermine le prix de long terme ?",
                          "tags":  [
                                       "Chapitre 7 - Entreprise concurrentielle"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La plus efficace",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La plus grande",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La firme marginale : celle qui quitterait le marché la première si le prix baissait",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La première entrée",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le prix correspond au minimum du coût moyen de la firme marginale. Elle ne réalise aucun bénéfice économique, mais les firmes plus efficaces en réalisent."
                      }
                  ]
}
});