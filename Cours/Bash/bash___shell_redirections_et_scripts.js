// ============================================================
// MatiÃ¨re : Bash : Shell, redirections et scripts
// Source : shell-bash.json
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;

Object.assign(defaultData, {
"Bash : Shell, redirections et scripts": {
    "course":  "info",
    "folder":  "Bash",
    "description":  "Bash : commandes de base, permissions, redirections et pipeline, variables, conditions, boucles, fonctions, arguments et codes de retour, grep/sed/awk/cut/sort/uniq/wc, regex, find, scripts robustes.",
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
                          "q":  "Quelle est la caractéristique principale du pipeline de Bash ?",
                          "tags":  [
                                       "Introduction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Il transporte principalement du texte, d\u0027où l\u0027usage de grep, sed, awk, cut, sort, uniq, wc",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Il transporte des objets .NET avec leurs propriétés",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il ne transporte que des nombres",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il ne peut pas être utilisé avec des fichiers",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "À l\u0027inverse de PowerShell, Bash fait circuler des flux de texte. Les commandes classiques sont donc combinées avec des outils spécialisés qui lisent et produisent du texte."
                      },
                      {
                          "q":  "Associez chaque commande Bash à son rôle :",
                          "tags":  [
                                       "Introduction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "pwd : afficher le répertoire courant",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "mkdir -p cours/bash : créer un dossier, y compris les dossiers intermédiaires",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "cp notes.txt copie.txt : copier un fichier",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "mv copie.txt archive.txt : déplacer ou renommer un fichier",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "rm archive.txt : copier un fichier",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "rm supprime. Avec -p, mkdir crée aussi les dossiers parents manquants (cours puis cours/bash). touch notes.txt crée un fichier vide s\u0027il n\u0027existe pas."
                      },
                      {
                          "q":  "Que fait ls -la ?",
                          "tags":  [
                                       "Introduction"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Liste le contenu du dossier en format détaillé, y compris les fichiers cachés",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Supprime tous les fichiers du dossier",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Liste uniquement les dossiers",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Affiche seulement les fichiers de plus de 1 Mo",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "-l donne un format long (permissions, propriétaire, taille, date) et -a inclut les fichiers dont le nom commence par un point."
                      },
                      {
                          "q":  "Que fait chmod u+x script.sh, et comment lance-t-on ensuite le script ?",
                          "tags":  [
                                       "Fichiers et permissions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Ajoute le droit d\u0027exécution pour l\u0027utilisateur propriétaire ; on le lance avec ./script.sh",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Retire le droit d\u0027exécution du groupe ; on le lance avec script.sh",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Supprime le script ; on le lance avec rm script.sh",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Donne tous les droits à tout le monde ; on le lance avec chmod script.sh",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "u désigne l\u0027utilisateur, + ajoute et x correspond à l\u0027exécution. Le préfixe ./ indique d\u0027exécuter le fichier du répertoire courant."
                      },
                      {
                          "q":  "Concernant les permissions Unix :",
                          "tags":  [
                                       "Fichiers et permissions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "u = utilisateur (propriétaire), g = groupe, o = autres",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "r = lecture, w = écriture, x = exécution",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "755 correspond classiquement à rwxr-xr-x",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "755 correspond à rw-r--r--",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "755 se lit : 7 (rwx) pour le propriétaire, 5 (r-x) pour le groupe, 5 (r-x) pour les autres. chmod 755 script.sh est donc un équivalent de u=rwx,g=rx,o=rx."
                      },
                      {
                          "q":  "Avec chmod 755 script.sh, que peut faire un utilisateur appartenant au groupe (mais qui n\u0027est pas propriétaire) ?",
                          "tags":  [
                                       "Fichiers et permissions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Lire et exécuter le script, mais pas le modifier",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Lire, écrire et exécuter",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Rien du tout",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Seulement le modifier",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Pour le groupe, le chiffre 5 vaut 4 + 1 : lecture (r) et exécution (x), sans écriture. Seul le propriétaire a le droit w avec 7."
                      },
                      {
                          "q":  "À quoi sert la commande stat script.sh ?",
                          "tags":  [
                                       "Fichiers et permissions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "À afficher des informations détaillées sur le fichier (taille, permissions, dates, etc.)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "À exécuter le script en mode statistique",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "À compter les lignes du script",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "À rendre le script exécutable",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "stat décrit les métadonnées d\u0027un fichier. C\u0027est chmod qui modifie les permissions, wc -l qui compte les lignes."
                      },
                      {
                          "q":  "On exécute echo \"Bonjour\" \u003e sortie.txt, puis echo \"Deuxième ligne\" \u003e\u003e sortie.txt, puis cat sortie.txt | wc -l. Que s\u0027affiche-t-il ?",
                          "tags":  [
                                       "Redirections et pipeline"
                                   ],
                          "options":  [
                                          {
                                              "text":  "2",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "1",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "0",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "3",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "\u003e crée ou remplace le fichier, \u003e\u003e ajoute à la fin. Le fichier contient donc deux lignes, que wc -l compte. Si la deuxième commande utilisait aussi \u003e, il n\u0027y aurait plus qu\u0027une ligne (Deuxième ligne)."
                      },
                      {
                          "q":  "Associez chaque redirection à son effet :",
                          "tags":  [
                                       "Redirections et pipeline"
                                   ],
                          "options":  [
                                          {
                                              "text":  "\u003e remplace le contenu d\u0027un fichier",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "\u003e\u003e ajoute à la fin du fichier",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "2\u003e redirige la sortie d\u0027erreur (stderr)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "commande \u003e tout.txt 2\u003e\u00261 envoie stdout et stderr dans le même fichier",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "2\u003e ajoute la sortie d\u0027erreur à la fin d\u0027un fichier",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le chiffre 2 désigne le descripteur de stderr (1 pour stdout). 2\u003e\u00261 signifie « rediriger stderr vers là où va stdout » : l\u0027ordre compte, il faut le placer après \u003e tout.txt."
                      },
                      {
                          "q":  "Que fait cat fichier.txt | grep \"ERROR\" | sort | uniq ?",
                          "tags":  [
                                       "Redirections et pipeline"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Affiche les lignes contenant ERROR, triées et sans doublons",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Affiche les lignes ne contenant pas ERROR",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Compte le nombre de lignes contenant ERROR",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Supprime les lignes ERROR du fichier",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Chaque | transmet la sortie standard de la commande de gauche à l\u0027entrée de la commande de droite : lecture, filtre, tri, déduplication. Pour compter, on ajouterait | wc -l."
                      },
                      {
                          "q":  "Que transmet le pipeline | à la commande suivante ?",
                          "tags":  [
                                       "Redirections et pipeline"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La sortie standard (stdout)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La sortie d\u0027erreur (stderr) uniquement",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le code de retour uniquement",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les variables d\u0027environnement",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Seule la sortie standard est canalisée. Pour inclure les erreurs, il faudrait d\u0027abord les rediriger avec 2\u003e\u00261."
                      },
                      {
                          "q":  "Quelle affectation est correcte en Bash ?",
                          "tags":  [
                                       "Variables Bash"
                                   ],
                          "options":  [
                                          {
                                              "text":  "nom=\"Alice\" ",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "nom = \"Alice\" ",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "$nom=\"Alice\" ",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "nom =  \"Alice\" ",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Il ne faut pas mettre d\u0027espaces autour de = dans une affectation, sinon Bash croit appeler une commande nommée nom. Le $ ne sert qu\u0027à lire la variable, pas à l\u0027affecter."
                      },
                      {
                          "q":  "Associez chaque variable spéciale à sa signification :",
                          "tags":  [
                                       "Variables Bash"
                                   ],
                          "options":  [
                                          {
                                              "text":  "$# : nombre d\u0027arguments",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "$? : code de retour de la dernière commande",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "$$ : PID du script",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "$0 : nom du script",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "$1 : tous les arguments",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "$1 est le premier argument ; tous les arguments sont représentés par $@. Les variables spéciales permettent d\u0027écrire des scripts qui s\u0027adaptent à leurs paramètres."
                      },
                      {
                          "q":  "On lance ./s.sh a b c. Quelles valeurs sont exactes ?",
                          "tags":  [
                                       "Variables Bash"
                                   ],
                          "options":  [
                                          {
                                              "text":  "$# vaut 3",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "$1 vaut a",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "$0 vaut ./s.sh",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "$0 vaut a",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "$0 contient le nom du script lui-même, $1 le premier argument, et $# le nombre d\u0027arguments passés (sans compter le script)."
                      },
                      {
                          "q":  "Pourquoi recommande-t-on d\u0027écrire \"$nom\" plutôt que $nom ?",
                          "tags":  [
                                       "Variables Bash"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Les guillemets évitent de nombreux problèmes liés aux espaces et aux caractères spéciaux",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les guillemets rendent la variable constante",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Sans guillemets, la variable n\u0027est jamais interprétée",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les guillemets accélèrent l\u0027exécution du script",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Sans guillemets, une valeur contenant des espaces serait découpée en plusieurs mots, ce qui change le sens de la commande. C\u0027est l\u0027un des pièges les plus fréquents en Bash."
                      },
                      {
                          "q":  "Avec if [ \"$age\" -ge 18 ]; then echo \"Majeur\"; elif [ \"$age\" -ge 13 ]; then echo \"Adolescent\"; else echo \"Enfant\"; fi, que s\u0027affiche-t-il pour age=13 ?",
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
                          "explanation":  "13 est supérieur ou égal à 13 mais pas à 18. Pour age=12, on afficherait Enfant."
                      },
                      {
                          "q":  "Concernant les tests en Bash :",
                          "tags":  [
                                       "Conditions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "-eq, -ne, -lt, -le, -gt, -ge sont les opérateurs de comparaison numérique",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Pour les chaînes, on utilise = ou == dans [[ ]]",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "[[ \"$nom\" == A* ]] est vrai quand nom commence par A",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "-ge signifie « strictement supérieur »",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "-ge signifie supérieur ou égal ; -gt est strictement supérieur. Avec nom=\"Alice\" le test [[ \"$nom\" == A* ]] est vrai, avec nom=\"Bob\" il est faux."
                      },
                      {
                          "q":  "Que fait for fichier in *.txt; do echo \"$fichier\"; done ?",
                          "tags":  [
                                       "Boucles"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Affiche le nom de chaque fichier .txt du dossier courant",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Affiche le contenu de chaque fichier .txt",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Supprime tous les fichiers .txt",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Affiche tous les fichiers du dossier, quelle que soit leur extension",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le motif *.txt est développé par le shell en liste de fichiers. Pour afficher le contenu, on utiliserait cat \"$fichier\"."
                      },
                      {
                          "q":  "Que fait for ((i=0; i\u003c10; i++)); do echo \"$i\"; done ?",
                          "tags":  [
                                       "Boucles"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Affiche les entiers de 0 à 9",
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
                                              "text":  "Ne s\u0027arrête jamais",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Il s\u0027agit d\u0027une boucle de style C : initialisation, condition stricte i\u003c10, incrément. Pour afficher de 1 à 100, il faudrait i=1; i\u003c=100."
                      },
                      {
                          "q":  "Que fait while read -r ligne; do echo \"$ligne\"; done \u003c fichier.txt ?",
                          "tags":  [
                                       "Boucles"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Lit le fichier ligne par ligne et affiche chaque ligne",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Lit le fichier mot par mot",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Écrase le fichier avec chaque ligne lue",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Affiche seulement la dernière ligne",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "La redirection \u003c fichier.txt alimente l\u0027entrée de la boucle ; read -r lit une ligne à la fois sans interpréter les antislashs. Cette structure sert à compter les lignes non vides, par exemple."
                      },
                      {
                          "q":  "Avec addition() { local a=\"$1\"; local b=\"$2\"; echo $((a + b)); }, que vaut resultat après resultat=$(addition 4 7) ?",
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
                                              "text":  "0",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "$(...) capture la sortie de la fonction (ce que echo affiche). $((a + b)) fait un calcul arithmétique : 4 + 7 = 11. local limite a et b à la fonction."
                      },
                      {
                          "q":  "Concernant le retour d\u0027une fonction Bash :",
                          "tags":  [
                                       "Fonctions"
                                   ],
                          "options":  [
                                          {
                                              "text":  "echo produit une sortie capturable avec $(...)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "return sert à donner un statut : 0 pour succès, non-zéro pour échec",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le code de retour d\u0027une fonction est différent de sa sortie",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "return permet de renvoyer n\u0027importe quelle chaîne de caractères",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est l\u0027une des différences majeures avec les langages classiques : un return Bash est un code numérique de statut (accessible via $?). Les résultats se transmettent par echo et capture, ou par variables."
                      },
                      {
                          "q":  "Dans if [ \"$#\" -ne 1 ]; then echo \"Usage: $0 fichier\" \u003e\u00262; exit 1; fi, que signifie \u003e\u00262 ?",
                          "tags":  [
                                       "Arguments et codes de retour"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Le message est écrit sur la sortie d\u0027erreur (stderr)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Le message est écrit dans un fichier nommé 2",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le message est écrit deux fois",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Le message est ignoré",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Un message d\u0027usage ou d\u0027erreur doit aller sur stderr pour ne pas se mélanger aux résultats normaux du script. exit 1 termine le script avec un code d\u0027échec."
                      },
                      {
                          "q":  "Dans le script du cours, quels codes de sortie sont utilisés ?",
                          "tags":  [
                                       "Arguments et codes de retour"
                                   ],
                          "options":  [
                                          {
                                              "text":  "exit 1 quand le nombre d\u0027arguments est incorrect",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "exit 2 quand le fichier est introuvable",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "exit 0 quand le fichier est introuvable",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "exit 1 quand tout s\u0027est bien passé",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Convention : 0 signifie succès, tout code non nul signifie échec. Utiliser des codes différents (1, 2...) permet de distinguer les causes d\u0027échec depuis l\u0027extérieur, via $?."
                      },
                      {
                          "q":  "Pourquoi le script du cours écrit-il wc -l \u003c \"$1\" plutôt que wc -l \"$1\" ?",
                          "tags":  [
                                       "Arguments et codes de retour"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Avec \u003c, wc lit l\u0027entrée standard et n\u0027affiche que le nombre, sans le nom du fichier",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Avec \u003c, wc compte les mots au lieu des lignes",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Avec \u003c, wc modifie le fichier",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les deux écritures donnent exactement la même sortie",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "wc -l fichier.txt affiche le nombre suivi du nom du fichier. Avec une redirection d\u0027entrée, wc ne connaît pas le nom et affiche seulement le nombre, plus facile à réutiliser."
                      },
                      {
                          "q":  "À quoi sert la ligne #!/usr/bin/env bash en tête d\u0027un script ?",
                          "tags":  [
                                       "Arguments et codes de retour"
                                   ],
                          "options":  [
                                          {
                                              "text":  "À indiquer quel interpréteur (bash) doit exécuter le script",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "À commenter la première ligne du script",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "À rendre le script exécutable",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "À importer les bibliothèques Bash",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le shebang (#!) indique au système quel programme doit interpréter le fichier. Il ne rend pas le fichier exécutable : c\u0027est le rôle de chmod +x."
                      },
                      {
                          "q":  "Que fait set -u dans un script Bash ?",
                          "tags":  [
                                       "Arguments et codes de retour"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Signale les variables non définies (erreur plutôt que valeur vide silencieuse)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Arrête le script à la première erreur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Fait remonter l\u0027échec d\u0027une commande dans un pipeline",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Active le mode silencieux",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Sans -u, une faute de frappe dans un nom de variable donne une chaîne vide, ce qui peut causer de gros dégâts (par exemple rm -rf \"$dossier/\"). set -e arrête sur certaines erreurs, pipefail fait remonter l\u0027échec d\u0027un pipeline."
                      },
                      {
                          "q":  "Concernant grep :",
                          "tags":  [
                                       "Outils texte"
                                   ],
                          "options":  [
                                          {
                                              "text":  "grep \"ERROR\" app.log affiche les lignes contenant ERROR",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "grep -i ignore la casse",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "grep -E active les expressions régulières étendues",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "grep -i signifie inverser la sélection (lignes ne contenant pas le motif)",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le -i de grep correspond à ignore case. Pour exclure des lignes, c\u0027est l\u0027option -v. grep -E \u0027^[0-9]+\u0027 fichier.txt sélectionne les lignes qui commencent par des chiffres."
                      },
                      {
                          "q":  "Que fait cut -d\u0027,\u0027 -f1,3 notes.csv ?",
                          "tags":  [
                                       "Outils texte"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Extrait les colonnes 1 et 3, avec la virgule comme séparateur",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Extrait les lignes 1 et 3",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Coupe le fichier en deux parties égales",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Supprime les colonnes 1 et 3",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "-d définit le délimiteur et -f les champs à garder. cut convient aux colonnes simples ; pour des calculs sur les champs, awk est plus adapté."
                      },
                      {
                          "q":  "Associez chaque outil à son rôle :",
                          "tags":  [
                                       "Outils texte"
                                   ],
                          "options":  [
                                          {
                                              "text":  "awk : traiter des champs et faire des calculs",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "sed : transformer du texte",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "sort : trier les lignes",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "wc : compter lignes, mots ou octets",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "uniq : supprimer tous les doublons d\u0027un fichier, où qu\u0027ils soient",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "uniq ne déduplique que les lignes adjacentes : pour supprimer tous les doublons il faut d\u0027abord trier. awk -F\u0027,\u0027 \u0027{print $1, $3}\u0027 notes.csv affiche les champs 1 et 3."
                      },
                      {
                          "q":  "Pourquoi écrit-on sort noms.txt | uniq plutôt que simplement uniq noms.txt ?",
                          "tags":  [
                                       "Outils texte"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Parce que uniq ne supprime que les lignes identiques adjacentes, donc il faut trier avant",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Parce que sort est obligatoire pour lire un fichier",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que uniq ne fonctionne qu\u0027avec des nombres",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Parce que uniq inverse l\u0027ordre des lignes",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "sort regroupe les lignes identiques les unes à côté des autres, ce qui permet à uniq de les dédupliquer. Sans tri préalable, deux lignes identiques non adjacentes subsistent."
                      },
                      {
                          "q":  "Que fait sed \u0027s/ancien/nouveau/g\u0027 fichier.txt ?",
                          "tags":  [
                                       "Outils texte"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Remplace toutes les occurrences de ancien par nouveau dans chaque ligne, et affiche le résultat",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Remplace seulement la première ligne contenant ancien",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Supprime les lignes contenant ancien",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Modifie le fichier sur place sans rien afficher",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "s signifie substitution et le drapeau g signifie global : toutes les occurrences de chaque ligne, pas seulement la première. Sans l\u0027option -i, le fichier d\u0027origine n\u0027est pas modifié."
                      },
                      {
                          "q":  "Que fait wc -l fichier.txt ?",
                          "tags":  [
                                       "Outils texte"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Compte le nombre de lignes du fichier (et affiche son nom)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Compte le nombre de mots",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Compte le nombre de caractères",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Supprime les lignes vides",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "-l pour lines. Les options -w (mots) et -c (octets) existent aussi, utiles pour des statistiques complètes sur un fichier."
                      },
                      {
                          "q":  "Que sélectionne grep -E \u0027^[A-Z][a-z]+$\u0027 noms.txt ?",
                          "tags":  [
                                       "Expressions régulières"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Les lignes formées d\u0027une majuscule suivie d\u0027une ou plusieurs minuscules",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Les lignes contenant au moins une majuscule",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les lignes entièrement en majuscules",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Les lignes qui commencent par une minuscule",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "^ et $ ancrent le début et la fin de ligne : la ligne entière doit correspondre. [A-Z] : une majuscule ; [a-z]+ : une ou plusieurs minuscules. Alice correspond, ALICE non."
                      },
                      {
                          "q":  "Quels résultats sont corrects avec grep -E \u0027^[0-9]{4}-[0-9]{2}-[0-9]{2}$\u0027 dates.txt ?",
                          "tags":  [
                                       "Expressions régulières"
                                   ],
                          "options":  [
                                          {
                                              "text":  "La ligne 2026-10-07 est sélectionnée",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La ligne 1999-01-31 est sélectionnée",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "La ligne 26-10-07 est sélectionnée",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "La ligne 2026/10/07 est sélectionnée",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le motif impose 4 chiffres, un tiret, 2 chiffres, un tiret, 2 chiffres, soit le format AAAA-MM-JJ. {4} et {2} sont des quantificateurs exacts. Attention : il vérifie le format, pas la validité du jour."
                      },
                      {
                          "q":  "Que fait grep -E \u0027@\u0027 emails.txt ?",
                          "tags":  [
                                       "Expressions régulières"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Sélectionne les lignes contenant le caractère @",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Valide que chaque ligne est une adresse e-mail correcte",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Compte les adresses e-mail",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Supprime les lignes contenant @",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "C\u0027est un filtre minimal : il retient les lignes avec un @ mais ne vérifie rien d\u0027autre. Pour une validation plus sérieuse, il faut une regex plus complète, comme en PowerShell."
                      },
                      {
                          "q":  "Que fait find . -type f -name \u0027*.txt\u0027 ?",
                          "tags":  [
                                       "Recherche de fichiers"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Cherche, dans le dossier courant et ses sous-dossiers, les fichiers dont le nom se termine par .txt",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Cherche les dossiers dont le nom se termine par .txt",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Cherche les fichiers contenant le texte .txt",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Affiche seulement les fichiers du dossier courant, sans les sous-dossiers",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "-type f restreint aux fichiers réguliers, -name filtre sur le nom (avec jokers, entre apostrophes pour éviter que le shell ne les développe). find parcourt l\u0027arborescence récursivement."
                      },
                      {
                          "q":  "Que signifient -size +1M et -mtime -7 dans find ?",
                          "tags":  [
                                       "Recherche de fichiers"
                                   ],
                          "options":  [
                                          {
                                              "text":  "-size +1M : fichiers de plus de 1 Mo",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "-mtime -7 : fichiers modifiés il y a moins de 7 jours",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "-size +1M : fichiers de moins de 1 Mo",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "-mtime -7 : fichiers modifiés il y a plus de 7 jours",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Le signe + signifie « plus de » et - « moins de » : c\u0027est la logique des deux options. Elles permettent de répondre à l\u0027exercice « trouver les fichiers modifiés durant les 7 derniers jours »."
                      },
                      {
                          "q":  "Que fait find . -type f -name \u0027*.log\u0027 -exec grep -l \u0027ERROR\u0027 {} \\; ?",
                          "tags":  [
                                       "Recherche de fichiers"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Liste les fichiers .log qui contiennent le mot ERROR",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Affiche toutes les lignes ERROR de tous les fichiers .log",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Supprime les fichiers .log contenant ERROR",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Compte les fichiers .log sans ERROR",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "-exec exécute la commande donnée sur chaque fichier trouvé ({} représente le fichier courant, \\; termine la commande). grep -l n\u0027affiche que les noms de fichiers dont le contenu correspond."
                      },
                      {
                          "q":  "Que font les options de set -Eeuo pipefail ?",
                          "tags":  [
                                       "Scripts robustes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "-e arrête le script sur certaines erreurs",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "-u signale les variables non définies",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "pipefail fait remonter l\u0027échec d\u0027une commande dans un pipeline",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "-u arrête le script à la première commande qui affiche un message",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Ces options améliorent la robustesse mais, comme le précise le cours, elles doivent être comprises et non copiées aveuglément : -e a notamment des comportements subtils selon le contexte."
                      },
                      {
                          "q":  "Pourquoi pipefail est-il utile ?",
                          "tags":  [
                                       "Scripts robustes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Sans lui, le code de retour d\u0027un pipeline est celui de la dernière commande ; avec lui, un échec plus tôt dans le pipeline est signalé",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Il accélère l\u0027exécution des pipelines",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il supprime la nécessité de tester $?",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Il redirige automatiquement stderr dans le pipeline",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Dans cmd1 | cmd2, si cmd1 échoue mais cmd2 réussit, le statut global serait 0 sans pipefail. Avec pipefail, l\u0027échec est visible, ce qui est essentiel combiné avec set -e."
                      },
                      {
                          "q":  "Dans le script robuste du cours, que contrôle-t-on avant de faire find \"$dossier\" -type f | wc -l ?",
                          "tags":  [
                                       "Scripts robustes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Qu\u0027un seul argument a été passé (sinon usage et exit 1)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Que l\u0027argument est bien un dossier existant (sinon message et exit 2)",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Que l\u0027utilisateur est administrateur",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "Que le dossier ne contient aucun fichier",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Valider les entrées et sortir proprement avec des codes distincts rend le script fiable. Le test [[ ! -d \"$dossier\" ]] sert à détecter l\u0027absence du dossier."
                      },
                      {
                          "q":  "Quelles étapes le mini-projet backup.sh doit-il comporter ?",
                          "tags":  [
                                       "Scripts robustes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "Vérifier les arguments et que la source existe",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Créer la destination si nécessaire, puis copier les fichiers",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Produire un journal et afficher un résumé",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "Supprimer la source une fois la copie terminée",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Une sauvegarde ne doit jamais détruire l\u0027original. En bonus, on peut créer une archive tar.gz datée."
                      },
                      {
                          "q":  "Quelle structure Bash l\u0027exercice 9 propose-t-il pour construire un menu de 4 actions ?",
                          "tags":  [
                                       "Scripts robustes"
                                   ],
                          "options":  [
                                          {
                                              "text":  "case",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "while read",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "set -e",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "find -exec",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "L\u0027instruction case permet de choisir une branche selon la valeur saisie par l\u0027utilisateur, ce qui convient bien à un menu."
                      },
                      {
                          "q":  "Quelles équivalences Bash / PowerShell sont exactes ?",
                          "tags":  [
                                       "Comparaison et méthode"
                                   ],
                          "options":  [
                                          {
                                              "text":  "ls ↔ Get-ChildItem",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "pwd ↔ Get-Location",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "cat ↔ Get-Content",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "grep ↔ Select-String",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "cp ↔ Move-Item",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Autres équivalences du tableau : cd ↔ Set-Location, cp ↔ Copy-Item, mv ↔ Move-Item, rm ↔ Remove-Item, ps ↔ Get-Process. Le pipeline est un pipeline de texte côté Bash, d\u0027objets côté PowerShell."
                      },
                      {
                          "q":  "Quel mécanisme général le cours demande-t-il de mémoriser plutôt que 200 commandes ?",
                          "tags":  [
                                       "Comparaison et méthode"
                                   ],
                          "options":  [
                                          {
                                              "text":  "commande → inspection → filtre → transformation → sortie",
                                              "isCorrect":  true
                                          },
                                          {
                                              "text":  "compilation → édition de liens → exécution",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "lecture → écriture → suppression",
                                              "isCorrect":  false
                                          },
                                          {
                                              "text":  "entrée → mémoire → bascule",
                                              "isCorrect":  false
                                          }
                                      ],
                          "explanation":  "Ce schéma résume le travail en ligne de commande. En Bash, on pense en flux texte, redirections et outils spécialisés."
                      }
                  ]
}
});