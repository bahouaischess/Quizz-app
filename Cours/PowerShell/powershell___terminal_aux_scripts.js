// ============================================================
// MatiÃ¨re : PowerShell : Du terminal aux scripts
// Source : shell-powershell.json
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;

Object.assign(defaultData, {
"PowerShell : Du terminal aux scripts": {
    "course":  "info",
    "folder":  "PowerShell",
    "description":  "PowerShell : cmdlets, pipeline d\u0027objets, variables, tableaux et hashtables, conditions, boucles, fonctions, erreurs, CSV/JSON, processus et services, scripts, regex, comparaison avec Bash.",
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
                          "q":  "Quelle est la particularité essentielle du pipeline de PowerShell ?",
                          "tags":  [
                                       "Terminal et commandes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Il transporte des objets .NET, et pas seulement du texte",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Il transporte uniquement du texte brut, comme en Bash",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il ne fonctionne qu\u0027avec les alias (ls, cat, cd...)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il ne peut relier que deux commandes à la fois",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "PowerShell est à la fois un shell et un langage de script, et son pipeline cmdlet1 | cmdlet2 | cmdlet3 fait circuler des objets avec leurs propriétés. C\u0027est ce qui permet de filtrer ou trier directement sur une propriété (CPU, Length...) sans analyser du texte."
                      },
                      {
                          "q":  "Associez chaque cmdlet d\u0027aide et d\u0027inspection à son rôle :",
                          "tags":  [
                                       "Terminal et commandes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Get-Command : lister et chercher les commandes disponibles",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Get-Help : afficher l\u0027aide d\u0027une commande",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Get-Member : afficher les propriétés et méthodes d\u0027un objet",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Clear-Host : afficher le répertoire courant",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Clear-Host efface l\u0027écran du terminal ; c\u0027est Get-Location qui affiche le répertoire courant. Get-Member est l\u0027outil d\u0027inspection d\u0027objets, très utile après un pipeline (Get-Process | Get-Member)."
                      },
                      {
                          "q":  "Quelle commande permet de trouver les commandes dont le nom contient le mot Process ?",
                          "tags":  [
                                       "Terminal et commandes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Get-Command *Process*",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Get-Process Command",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Get-Member Process",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Get-Location *Process*",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Get-Command liste les commandes disponibles et accepte des jokers. Get-Process, lui, liste les processus en cours d\u0027exécution, ce n\u0027est pas un outil de recherche de commandes."
                      },
                      {
                          "q":  "Pourquoi le cours recommande-t-il de connaître les cmdlets officielles plutôt que de se limiter aux alias ?",
                          "tags":  [
                                       "Terminal et commandes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Les alias (pwd, cd, ls, cat) existent, mais apprendre Get-Location, Set-Location, Get-ChildItem et Get-Content est plus propre",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce que les alias ont été supprimés de PowerShell 7",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que les alias sont plus lents mais plus complets",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que les cmdlets officielles fonctionnent seulement sous Linux",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les alias sont des raccourcis pratiques qui rappellent le monde Unix. Le cours conseille d\u0027apprendre les noms officiels Verbe-Nom, qui sont ceux que l\u0027on rencontre dans les scripts et la documentation."
                      },
                      {
                          "q":  "Quelle commande crée un dossier nommé test dans le répertoire courant ?",
                          "tags":  [
                                       "Navigation et fichiers"
                                   ],
                          "options":  [
                                          {
                                              "text":  "New-Item -ItemType Directory -Path .\\test",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "New-Item -ItemType File -Path .\\test",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Set-Location .\\test",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Add-Content -Path .\\test -Value \"dossier\" ",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "New-Item crée un élément ; le paramètre -ItemType précise s\u0027il s\u0027agit d\u0027un dossier (Directory) ou d\u0027un fichier (File). Set-Location se contente de se déplacer."
                      },
                      {
                          "q":  "Concernant Set-Content et Add-Content :",
                          "tags":  [
                                       "Navigation et fichiers"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Set-Content écrit la valeur donnée dans le fichier, en remplaçant son contenu",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Add-Content ajoute la valeur à la fin du fichier",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Add-Content remplace tout le contenu du fichier",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Set-Content ajoute toujours à la fin sans rien effacer",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Set-Content ressemble à une redirection \u003e (remplace), Add-Content à une redirection \u003e\u003e (ajoute). Get-Content relit le fichier."
                      },
                      {
                          "q":  "On exécute : New-Item -ItemType File -Path .\\test\\notes.txt, puis Set-Content avec la valeur \"Bonjour\", puis Add-Content avec \"Deuxième ligne\", puis Get-Content .\\test\\notes.txt. Que s\u0027affiche-t-il ?",
                          "tags":  [
                                       "Navigation et fichiers"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Deux lignes : Bonjour puis Deuxième ligne",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Une seule ligne : Deuxième ligne",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une seule ligne : Bonjour",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Rien, car le fichier est vide",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Set-Content initialise le contenu avec Bonjour, Add-Content ajoute ensuite une ligne à la suite sans effacer. Get-Content renvoie le fichier ligne par ligne."
                      },
                      {
                          "q":  "Associez chaque cmdlet à son rôle sur les fichiers :",
                          "tags":  [
                                       "Navigation et fichiers"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Copy-Item : copier un élément",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Move-Item : déplacer (ou renommer) un élément",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Remove-Item : supprimer un élément",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Get-ChildItem : supprimer un élément",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Get-ChildItem liste le contenu d\u0027un dossier (avec -Recurse, récursivement). Dans le cours, Move-Item .\\test\\copie.txt .\\test\\archive.txt illustre aussi le renommage."
                      },
                      {
                          "q":  "Pourquoi le cours déconseille-t-il d\u0027expérimenter Remove-Item n\u0027importe où ?",
                          "tags":  [
                                       "Navigation et fichiers"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Une suppression récursive peut être destructive : il vaut mieux travailler dans un dossier de test dédié",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Remove-Item envoie toujours les fichiers dans la corbeille, ce qui fausse les tests",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Remove-Item ne fonctionne que sur les fichiers texte",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Remove-Item est réservé aux administrateurs",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est un principe de prudence : pour apprendre, on pratique dans un dossier qu\u0027on peut perdre sans conséquence. On fait de même pour les scripts de nettoyage, que l\u0027on teste d\u0027abord en mode simple listage."
                      },
                      {
                          "q":  "Que fait Get-ChildItem -Path . -Recurse ?",
                          "tags":  [
                                       "Navigation et fichiers"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Liste le contenu du dossier courant et de tous ses sous-dossiers",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Supprime récursivement le dossier courant",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Liste uniquement les fichiers du dossier courant",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Copie récursivement le dossier courant",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le paramètre -Recurse étend le listage à l\u0027arborescence entière. Il sert par exemple à rechercher tous les .txt sous le dossier courant."
                      },
                      {
                          "q":  "À quoi sert la commande Get-Process | Get-Member ?",
                          "tags":  [
                                       "Objets et pipeline"
                                   ],
                          "options":  [
                                          {
                                              "text":  "À voir les propriétés et méthodes des objets Process renvoyés par Get-Process",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "À trier les processus par mémoire",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "À arrêter tous les processus",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "À afficher uniquement le nom des processus",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Get-Member inspecte les objets qui arrivent dans le pipeline : c\u0027est ainsi qu\u0027on découvre les propriétés (Name, Id, CPU...) utilisables ensuite avec Where-Object, Sort-Object ou Select-Object."
                      },
                      {
                          "q":  "Associez chaque cmdlet du pipeline à son rôle :",
                          "tags":  [
                                       "Objets et pipeline"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Where-Object : filtrer les objets selon une condition",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Select-Object : choisir ou créer des propriétés",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Sort-Object : trier les objets",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Format-Table : filtrer les objets selon une condition",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Format-Table et Format-List servent surtout à l\u0027affichage final et non à filtrer. C\u0027est la logique du pipeline : on produit, on filtre, on trie, on sélectionne, puis on met en forme."
                      },
                      {
                          "q":  "Que fait Get-Process | Where-Object CPU -gt 100 ?",
                          "tags":  [
                                       "Objets et pipeline"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Ne garde que les processus dont la propriété CPU est supérieure à 100",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Trie les processus par CPU décroissant",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Affiche les 100 premiers processus",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Affiche les processus dont le nom contient 100",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Where-Object CPU -gt 100 est la syntaxe simplifiée d\u0027un filtre sur la propriété CPU avec l\u0027opérateur -gt (greater than). Le tri se ferait avec Sort-Object."
                      },
                      {
                          "q":  "Quelle commande affiche les 10 processus qui consomment le plus de CPU ?",
                          "tags":  [
                                       "Objets et pipeline"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Get-Process | Sort-Object CPU -Descending | Select-Object -First 10",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Get-Process | Select-Object -First 10 | Sort-Object CPU -Descending",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Get-Process | Sort-Object CPU | Select-Object -First 10",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Get-Process | Where-Object CPU -gt 10",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Il faut trier d\u0027abord, par ordre décroissant, puis tronquer. En sélectionnant les 10 premiers avant de trier, on ne trierait que 10 processus quelconques. Sort-Object est croissant par défaut : la troisième proposition donnerait les 10 plus faibles."
                      },
                      {
                          "q":  "Concernant Select-Object et Format-Table :",
                          "tags":  [
                                       "Objets et pipeline"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Select-Object choisit ou crée des propriétés, et renvoie des objets utilisables dans la suite du pipeline",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Format-Table sert surtout à l\u0027affichage final",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Format-Table est la bonne cmdlet pour filtrer les lignes",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Select-Object ne sert qu\u0027à l\u0027affichage en colonnes",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La différence demandée par l\u0027exercice 12 : Select-Object travaille sur les données, Format-Table sur la présentation. On place donc Format-Table en dernier."
                      },
                      {
                          "q":  "Que produit : Get-ChildItem | Where-Object Length -gt 1MB | Sort-Object Length -Descending | Select-Object Name, Length ?",
                          "tags":  [
                                       "Objets et pipeline"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le nom et la taille des fichiers de plus de 1 Mo, du plus gros au plus petit",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le nom et la taille des fichiers de moins de 1 Mo, du plus gros au plus petit",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La liste des fichiers de plus de 1 Mo, triés par nom",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Un fichier CSV contenant les fichiers de plus de 1 Mo",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Chaque étape reçoit les objets de la précédente : filtre sur Length supérieur à 1 Mo (1MB est une constante PowerShell), tri décroissant sur Length, puis projection sur deux propriétés."
                      },
                      {
                          "q":  "Concernant les variables PowerShell :",
                          "tags":  [
                                       "Variables et types"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elles commencent par $",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "PowerShell déduit généralement le type, mais on peut le contraindre",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "$age.GetType() permet de connaître le type d\u0027une variable",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elles se déclarent sans $ lors de l\u0027affectation, comme en Bash",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Contrairement à Bash, le $ est toujours présent en PowerShell, y compris à gauche de l\u0027affectation : $nom = \"Augustin\". En Bash l\u0027affectation s\u0027écrit nom=\"Alice\"."
                      },
                      {
                          "q":  "Avec $nom = \"Augustin\" et $age = 18, que renvoie \"Nom : {0}, âge : {1}\" -f $nom, $age ?",
                          "tags":  [
                                       "Variables et types"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Nom : Augustin, âge : 18",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Nom : 0, âge : 1",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Nom : {0}, âge : {1}",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Nom : 18, âge : Augustin",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027opérateur -f remplace {0} par le premier argument et {1} par le deuxième, dans l\u0027ordre. Il ne faut pas le confondre avec l\u0027interpolation \"Bonjour $nom\", qui remplace directement la variable dans la chaîne."
                      },
                      {
                          "q":  "Concernant le typage en PowerShell :",
                          "tags":  [
                                       "Variables et types"
                                   ],
                          "options":  [
                                          {
                                              "text":  "[int]$n = 12 contraint la variable n à être un entier",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "[int]$x = [int]$texte convertit la chaîne \"42\" en entier",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "[string]$texte = \"42\" crée un entier",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le typage explicite est interdit en PowerShell",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les crochets avec un type avant la variable fixent le type. Convertir une chaîne en nombre est utile avant de comparer ou de calculer."
                      },
                      {
                          "q":  "Soit $nom = \"Augustin\". Quelles expressions valent True ?",
                          "tags":  [
                                       "Variables et types"
                                   ],
                          "options":  [
                                          {
                                              "text":  "$nom -like \"Aug*\" ",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "$nom -eq \"Augustin\" ",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "$nom -ne \"Paul\" ",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "$nom -eq \"Paul\" ",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "-like accepte des jokers, -eq teste l\u0027égalité, -ne la différence. Le dernier test est faux : Augustin n\u0027est pas égal à Paul. À noter : ces comparaisons de chaînes ne tiennent pas compte de la casse par défaut en PowerShell."
                      },
                      {
                          "q":  "Avec $nom = \"Augustin\", que valent $nom.Length et $nom.ToUpper() ?",
                          "tags":  [
                                       "Variables et types"
                                   ],
                          "options":  [
                                          {
                                              "text":  "8 et AUGUSTIN",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "9 et AUGUSTIN",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "8 et augustin",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "7 et Augustin",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Les variables sont des objets : on accède à leurs propriétés (Length) et méthodes (ToUpper()) avec un point. Le mot Augustin compte 8 lettres."
                      },
                      {
                          "q":  "Soit $notes = 12, 15, 9, 18. Quelles affirmations sont exactes ?",
                          "tags":  [
                                       "Tableaux et hashtables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "$notes[0] vaut 12",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "$notes.Count vaut 4",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "$notes[3] vaut 18",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "$notes[4] vaut 18",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Un tableau indexé commence à 0 : les indices valides vont de 0 à 3, le dernier élément est donc $notes[3]. $notes[4] n\u0027existe pas."
                      },
                      {
                          "q":  "Après $notes = 12, 15, 9, 18 puis $notes += 20, combien vaut $notes.Count ?",
                          "tags":  [
                                       "Tableaux et hashtables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "5",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "4",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "20",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "6",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027opérateur += ajoute un élément à la fin : le tableau passe de 4 à 5 éléments, et 20 en est le dernier."
                      },
                      {
                          "q":  "Concernant les hashtables :",
                          "tags":  [
                                       "Tableaux et hashtables"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elles associent des clés à des valeurs et se définissent avec @{ ... }",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "$etudiant[\"Nom\"] et $etudiant.Nom accèdent à une même valeur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "$etudiant.Keys donne la liste des clés",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "On y accède uniquement par un indice numérique à partir de 0",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Un tableau se parcourt par position (à partir de 0), une hashtable par clé. Pour les hashtables, on peut écrire @{ Nom = \"Alice\"; Age = 19; Note = 15 } puis lire l\u0027une ou l\u0027autre syntaxe d\u0027accès."
                      },
                      {
                          "q":  "Associez chaque opérateur de comparaison à sa signification :",
                          "tags":  [
                                       "Conditions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "-ge : supérieur ou égal",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "-le : inférieur ou égal",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "-ne : différent de",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "-gt : supérieur ou égal",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "-gt signifie strictement supérieur (greater than), tandis que -ge signifie supérieur ou égal (greater or equal). Autres opérateurs : -eq, -lt et les opérateurs logiques -and, -or, -not."
                      },
                      {
                          "q":  "Avec la structure if ($age -ge 18) { \"Majeur\" } elseif ($age -ge 13) { \"Adolescent\" } else { \"Enfant\" }, que s\u0027affiche-t-il pour $age = 13 ?",
                          "tags":  [
                                       "Conditions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Adolescent",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Majeur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Enfant",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Rien",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "13 n\u0027est pas supérieur ou égal à 18, mais il est supérieur ou égal à 13 : on entre dans la branche elseif. Pour 12 on obtiendrait Enfant, pour 18 Majeur."
                      },
                      {
                          "q":  "Avec la structure switch ($jour) { \"lundi\" {...} \"vendredi\" { \"Presque le week-end\" } default { \"Autre jour\" } }, que s\u0027affiche-t-il pour $jour = \"mardi\" ?",
                          "tags":  [
                                       "Conditions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Autre jour",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Début de semaine",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Presque le week-end",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Rien, car mardi n\u0027est pas listé",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le bloc default est exécuté quand aucun autre cas ne correspond. Pour vendredi, c\u0027est la branche Presque le week-end qui s\u0027afficherait."
                      },
                      {
                          "q":  "Quelle est la différence entre -like et -match pour comparer des chaînes ?",
                          "tags":  [
                                       "Conditions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "-like utilise des jokers comme Aug*, -match utilise une expression régulière",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "-like utilise une expression régulière, -match des jokers",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les deux sont strictement équivalents",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "-like compare des nombres, -match compare des chaînes",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "-like \"Aug*\" : joker * pour toute suite de caractères. -match \u0027\\.log$\u0027 : expression régulière (fin de chaîne .log). Les deux servent à tester des chaînes, avec une puissance d\u0027expression différente."
                      },
                      {
                          "q":  "Que fait for ($i = 0; $i -lt 10; $i++) { $i } ?",
                          "tags":  [
                                       "Boucles"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Affiche les entiers de 0 à 9, soit 10 valeurs",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Affiche les entiers de 1 à 10",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Affiche les entiers de 0 à 10",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Affiche les entiers de 1 à 9",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La condition -lt 10 est stricte : la boucle s\u0027arrête quand $i vaut 10, avant de l\u0027afficher. Pour afficher de 1 à 100, il faudrait initialiser à 1 et utiliser -le 100."
                      },
                      {
                          "q":  "Avec $notes = 12, 15, 9, 18, que fait foreach ($note in $notes) { if ($note -ge 10) { \"Admis : $note\" } } ?",
                          "tags":  [
                                       "Boucles"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Admis : 12",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Admis : 15",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Admis : 18",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Admis : 9",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La note 9 est inférieure à 10 : elle ne passe pas le test. foreach est pratique pour parcourir les éléments d\u0027un tableau ou les objets produits par une commande."
                      },
                      {
                          "q":  "Avec $i = 0 puis while ($i -lt 5) { $i; $i++ }, combien de valeurs sont affichées ?",
                          "tags":  [
                                       "Boucles"
                                   ],
                          "options":  [
                                          {
                                              "text":  "5 (de 0 à 4)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "4 (de 0 à 3)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "6 (de 0 à 5)",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une infinité, car $i n\u0027est jamais incrémenté",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La boucle s\u0027exécute tant que $i est strictement inférieur à 5. $i++ incrémente à chaque tour : sans cette ligne, on aurait effectivement une boucle infinie."
                      },
                      {
                          "q":  "Avec function Add-Numbers { param([int]$A, [int]$B) $A + $B }, que vaut $resultat après $resultat = Add-Numbers -A 4 -B 7 ?",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "11",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "47",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "4",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Rien, car la fonction n\u0027a pas de return",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "En PowerShell, la valeur d\u0027une expression non capturée est émise en sortie de la fonction : elle est donc récupérée par l\u0027affectation. Les paramètres sont nommés (-A, -B) et typés (int), donc 4 + 7 = 11 et non la concaténation."
                      },
                      {
                          "q":  "Concernant les fonctions PowerShell :",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Elles peuvent recevoir des paramètres nommés",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elles peuvent avoir des valeurs par défaut",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elles peuvent retourner un résultat",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Elles ne peuvent être appelées que depuis un script .ps1",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le bloc param() déclare les paramètres. Le cours conseille d\u0027éviter les fonctions qui mélangent calcul, affichage et effets de bord sans nécessité."
                      },
                      {
                          "q":  "Avec function Test-Majority { param([int]$Age) if ($Age -ge 18) { return $true } return $false }, que renvoie Test-Majority -Age 17 ?",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "$false",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "$true",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "17",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Une erreur de syntaxe",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "17 n\u0027est pas supérieur ou égal à 18 : on saute le premier return, et le second renvoie $false. Une fonction de test (verbe Test-) renvoie conventionnellement un booléen."
                      },
                      {
                          "q":  "Dans try { Get-Item \"C:\\chemin\\inexistant\" -ErrorAction Stop } catch { ... } finally { \"Fin\" }, pourquoi utiliser -ErrorAction Stop ?",
                          "tags":  [
                                       "Erreurs et robustesse"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Pour que l\u0027erreur de la cmdlet interrompe l\u0027exécution et soit interceptée par le bloc catch",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Pour ignorer silencieusement toute erreur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Pour empêcher l\u0027exécution du bloc finally",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Pour transformer l\u0027erreur en avertissement non bloquant",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "ErrorAction permet de contrôler le comportement de nombreuses cmdlets. Avec Stop, une erreur devient bloquante et déclenche catch, où $($_.Exception.Message) donne le message d\u0027erreur. Le bloc finally s\u0027exécute ensuite, que l\u0027erreur ait eu lieu ou non."
                      },
                      {
                          "q":  "Quelles bonnes pratiques de robustesse le cours recommande-t-il pour un script sérieux ?",
                          "tags":  [
                                       "Erreurs et robustesse"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Valider les entrées",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Donner des messages d\u0027erreur compréhensibles",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Utiliser try/catch autour des opérations qui peuvent échouer",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Désactiver toutes les erreurs pour que le script ne s\u0027arrête jamais",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Un script robuste anticipe les cas d\u0027échec au lieu de les masquer. Cacher systématiquement les erreurs rend les problèmes invisibles et difficiles à diagnostiquer."
                      },
                      {
                          "q":  "Associez chaque cmdlet de données structurées à son rôle :",
                          "tags":  [
                                       "CSV et JSON"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Import-Csv : lire un CSV et obtenir des objets",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Export-Csv : écrire des objets dans un CSV",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "ConvertTo-Json : convertir un objet en JSON",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "ConvertFrom-Json : convertir un texte JSON en objet",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Export-Csv : lire un fichier CSV existant",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Ces quatre cmdlets forment la boîte à outils des données structurées. Import-Csv produit des objets dont les colonnes deviennent des propriétés, d\u0027où la possibilité de filtrer avec Where-Object Note -ge 10."
                      },
                      {
                          "q":  "Que fait $data | Where-Object Note -ge 10 | Export-Csv .\\admis.csv -NoTypeInformation ?",
                          "tags":  [
                                       "CSV et JSON"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Écrit dans admis.csv les lignes dont la note est supérieure ou égale à 10, sans la ligne d\u0027en-tête de type .NET",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Écrit dans admis.csv uniquement les lignes dont la note est strictement inférieure à 10",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Affiche à l\u0027écran les admis sans créer de fichier",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Écrit les admis au format JSON",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "-NoTypeInformation évite la ligne #TYPE ... en tête du fichier. Le filtre -ge 10 correspond à la règle des admis. Pour le JSON, on utiliserait ConvertTo-Json."
                      },
                      {
                          "q":  "Que fait Get-Service | Where-Object Status -eq Running ?",
                          "tags":  [
                                       "Processus et système"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Liste les services Windows en cours d\u0027exécution",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Démarre tous les services",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Liste les processus utilisateur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Arrête les services en cours d\u0027exécution",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Get-Service renvoie des objets service avec une propriété Status ; Where-Object filtre sur Running. Aucune modification n\u0027est faite : c\u0027est une simple lecture."
                      },
                      {
                          "q":  "Que permettent d\u0027obtenir Get-CimInstance Win32_OperatingSystem et Get-CimInstance Win32_LogicalDisk ?",
                          "tags":  [
                                       "Processus et système"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Des informations sur le système d\u0027exploitation",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Des informations sur les disques logiques",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La liste des services démarrés",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La liste des utilisateurs connectés",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Get-CimInstance interroge les classes d\u0027information système (CIM/WMI). Win32_OperatingSystem décrit l\u0027OS, Win32_LogicalDisk les volumes."
                      },
                      {
                          "q":  "Quelle précaution le cours donne-t-il pour les opérations d\u0027administration ?",
                          "tags":  [
                                       "Processus et système"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Ne jamais exécuter un script d\u0027administration téléchargé sans l\u0027avoir lu",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Toujours les exécuter avec les droits les plus élevés pour éviter les erreurs",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les lancer d\u0027abord sur un serveur de production pour les tester",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les exécuter sans les lire, s\u0027ils viennent d\u0027un site connu",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Certaines opérations nécessitent des privilèges élevés : un script malveillant ou mal écrit pourrait alors causer des dégâts importants. Lire avant d\u0027exécuter est la règle de base."
                      },
                      {
                          "q":  "Avec param([string]$Dossier = \".\") en tête de rapport.ps1, que se passe-t-il si on lance simplement .\\rapport.ps1 ?",
                          "tags":  [
                                       "Scripts PowerShell"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le paramètre $Dossier prend la valeur par défaut \".\", c\u0027est-à-dire le dossier courant",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Une erreur est levée car le paramètre est obligatoire",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "$Dossier est vide et le script analyse tout le disque",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le script demande un chemin à l\u0027utilisateur",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Une valeur par défaut rend le paramètre optionnel. Pour cibler un autre dossier : .\\rapport.ps1 -Dossier .\\Documents."
                      },
                      {
                          "q":  "Que calcule \"$([math]::Round(($files | Measure-Object Length -Sum).Sum / 1MB, 2)) Mo\" ?",
                          "tags":  [
                                       "Scripts PowerShell"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le volume total des fichiers en Mo, arrondi à 2 décimales",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le nombre de fichiers, arrondi à 2 décimales",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La taille du plus gros fichier en Ko",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La taille moyenne d\u0027un fichier en Mo",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Measure-Object Length -Sum additionne les tailles ; .Sum récupère le total en octets ; la division par 1MB le convertit en Mo ; [math]::Round(..., 2) arrondit à 2 décimales. Le $(...) permet d\u0027insérer l\u0027expression dans la chaîne."
                      },
                      {
                          "q":  "Que recommande le cours si la politique d\u0027exécution bloque un script ?",
                          "tags":  [
                                       "Scripts PowerShell"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Ne pas la modifier aveuglément : comprendre d\u0027abord le mécanisme de sécurité et le contexte de la machine",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La désactiver complètement pour ne plus être gêné",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Renommer le script en .txt",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Exécuter systématiquement PowerShell en administrateur",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La politique d\u0027exécution est une protection : la contourner sans comprendre peut exposer la machine."
                      },
                      {
                          "q":  "Associez chaque symbole de regex à sa signification :",
                          "tags":  [
                                       "Recherche et regex"
                                   ],
                          "options":  [
                                          {
                                              "text":  "^ : début de chaîne",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "$ : fin de chaîne",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "+ : une ou plusieurs occurrences",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "* : zéro ou plusieurs occurrences",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  ". : le caractère point uniquement",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le point . désigne n\u0027importe quel caractère (pour le point littéral, on écrit \\.). Ces symboles sont utilisés par -match, Select-String et grep -E."
                      },
                      {
                          "q":  "Que sélectionne Get-ChildItem -File | Where-Object Name -match \u0027\\.log$\u0027 ?",
                          "tags":  [
                                       "Recherche et regex"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Les fichiers dont le nom se termine par .log",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les fichiers dont le nom commence par .log",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les fichiers contenant le mot log dans leur contenu",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les dossiers dont le nom contient log",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "\\. représente un point littéral, log la suite de lettres, et $ ancre la fin du nom. Pour chercher dans le contenu d\u0027un fichier, on utilise Select-String."
                      },
                      {
                          "q":  "Quels résultats sont corrects avec le motif \u0027^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$\u0027 ?",
                          "tags":  [
                                       "Recherche et regex"
                                   ],
                          "options":  [
                                          {
                                              "text":  "\"alice@example.com\" -match ... renvoie True",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "\"alice@example\" -match ... renvoie True",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "\"alice example.com\" -match ... renvoie True",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le motif exige une partie locale sans @ ni espace, un @, un domaine, un point, puis une extension. \"alice@example\" n\u0027a pas de point après le domaine, et \"alice example.com\" n\u0027a pas de @. Les regex servent à valider des formats."
                      },
                      {
                          "q":  "Que fait Get-Content .\\app.log | Select-String \"ERROR\" ?",
                          "tags":  [
                                       "Recherche et regex"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Affiche les lignes du journal qui contiennent ERROR",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Supprime les lignes contenant ERROR",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Compte le nombre de fichiers app.log",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Trie les lignes par ordre alphabétique",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Select-String est l\u0027équivalent pratique d\u0027une recherche textuelle avec regex, proche de grep sous Bash."
                      },
                      {
                          "q":  "Quelles équivalences PowerShell / Bash sont exactes ?",
                          "tags":  [
                                       "Comparaison PowerShell / Bash"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Get-ChildItem ↔ ls",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Get-Location ↔ pwd",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Select-String ↔ grep",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Get-Content ↔ cat",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Remove-Item ↔ cp",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Autres équivalences du tableau du cours : Set-Location ↔ cd, Copy-Item ↔ cp, Move-Item ↔ mv, Remove-Item ↔ rm, Get-Process ↔ ps. Le cours précise toutefois qu\u0027il ne faut pas traduire mécaniquement chaque commande."
                      },
                      {
                          "q":  "Quelle est la différence de philosophie entre PowerShell et Bash ?",
                          "tags":  [
                                       "Comparaison PowerShell / Bash"
                                   ],
                          "options":  [
                                          {
                                              "text":  "PowerShell pense en objets et propriétés, Bash en flux texte, redirections et outils spécialisés",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "PowerShell pense en flux texte, Bash en objets et propriétés",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les deux sont strictement identiques mais avec une syntaxe différente",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "PowerShell ne sert qu\u0027à lancer des programmes, Bash à écrire des scripts",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est la phrase de conclusion du cours : les deux outils sont à apprendre sans essayer de traduire mécaniquement chaque commande de l\u0027un vers l\u0027autre."
                      },
                      {
                          "q":  "Quelle méthode générale le cours propose-t-il pour résoudre un exercice de scripting ?",
                          "tags":  [
                                       "Méthode"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Écrire les contraintes, tester chaque morceau séparément, assembler avec un pipeline ou une fonction, tester les cas limites, rendre le script lisible",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Mémoriser 200 commandes puis les réécrire à l\u0027identique",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Écrire directement le script complet puis corriger les erreurs",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Copier un corrigé et le modifier légèrement",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le cours insiste : ne pas mémoriser 200 commandes, mais des mécanismes (commande, inspection, filtre, transformation, sortie)."
                      },
                      {
                          "q":  "Quelles consignes figurent dans la section « Comment utiliser ce cours » ?",
                          "tags":  [
                                       "Méthode"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Travailler dans l\u0027ordre",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Taper les commandes soi-même et modifier les exemples",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Faire les exercices sans regarder de correction",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Lire uniquement les titres puis passer aux exercices",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La démarche est active : lire l\u0027idée, taper, modifier, puis s\u0027entraîner. L\u0027environnement conseillé est PowerShell 7 sous Windows, avec WSL/Ubuntu ou une VM Linux pour Bash."
                      }
                  ]
}
});