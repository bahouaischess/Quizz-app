// ============================================================
// MatiÃ¨re : Programmation C : Chapitre 1 (Introduction)
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
Object.assign(defaultData, {
"Programmation C : Chapitre 1 (Introduction)": {
        course: "info",
        folder: "Programmation C",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Généralités", "Objectifs"],
                q: "Quels sont les principaux objectifs du cours de programmation C[cite: 1] ?",
                options: [
                    { text: "Apprendre le C, comprendre la mémoire (pointeurs), et coder proprement de façon modulaire[cite: 1]", isCorrect: true },
                    { text: "Apprendre à créer des interfaces graphiques complexes et des pages web[cite: 1]", isCorrect: false }
                ],
                explanation: "Les objectifs incluent l'apprentissage du langage, l'analyse de problèmes pour écrire des programmes élégants, et la compréhension de la mémoire et des pointeurs[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Histoire"],
                q: "Quels sont les créateurs du langage C et en quelle année a-t-il été inventé[cite: 1] ?",
                options: [
                    { text: "Dennis Ritchie et Ken Thompson en 1972[cite: 1]", isCorrect: true },
                    { text: "Brian Kernighan en 1989[cite: 1]", isCorrect: false },
                    { text: "Linus Torvalds en 1991[cite: 1]", isCorrect: false }
                ],
                explanation: "Le langage C a été inventé en 1972 par Dennis Ritchie et Ken Thompson aux Bell Labs pour écrire le système d'exploitation Unix[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Histoire"],
                q: "Quel langage a précédé le langage C[cite: 1] ?",
                options: [
                    { text: "Le langage B (qui n'avait pas de typage)[cite: 1]", isCorrect: true },
                    { text: "Le langage A[cite: 1]", isCorrect: false },
                    { text: "Le Fortran[cite: 1]", isCorrect: false }
                ],
                explanation: "Le langage C a été créé après le langage B, ce dernier ayant la particularité de ne pas avoir de typage[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Généralités", "Usage"],
                q: "Pourquoi le C reste-t-il indispensable aujourd'hui[cite: 1] ?",
                options: [
                    { text: "Il est incontournable pour la programmation bas niveau (OS, drivers, systèmes embarqués)[cite: 1]", isCorrect: true },
                    { text: "C'est le seul langage permettant de faire des mathématiques complexes[cite: 1]", isCorrect: false },
                    { text: "Il possède un système de gestion d'exceptions très moderne[cite: 1]", isCorrect: false }
                ],
                explanation: "Le C permet de faire du bas niveau, est très rapide, et reste indispensable pour les OS et l'embarqué[cite: 1]. Il n'a d'ailleurs pas de gestion d'exceptions moderne[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Caractéristiques", "Paradigmes"],
                q: "Quel est le paradigme principal du langage C[cite: 1] ?",
                options: [
                    { text: "Impératif[cite: 1]", isCorrect: true },
                    { text: "Orienté Objet[cite: 1]", isCorrect: false },
                    { text: "Fonctionnel[cite: 1]", isCorrect: false }
                ],
                explanation: "Le C est un langage impératif, basé sur un état (la mémoire) et des instructions élémentaires qui modifient cet état[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Caractéristiques", "Paradigmes"],
                q: "En quoi consiste le paradigme impératif[cite: 1] ?",
                options: [
                    { text: "Un découpage en procédures contenant des séquences d'instructions pour modifier l'état de la mémoire[cite: 1]", isCorrect: true },
                    { text: "L'utilisation d'objets possédant des attributs et des méthodes[cite: 1]", isCorrect: false }
                ],
                explanation: "Le paradigme impératif (celui du C) consiste à ordonner au processeur des instructions élémentaires (séquences, boucles) pour modifier directement l'état de la mémoire[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Caractéristiques"],
                q: "Le langage C est-il typé[cite: 1] ?",
                options: [
                    { text: "Oui, il utilise un typage statique défini à la compilation[cite: 1]", isCorrect: true },
                    { text: "Non, il utilise un typage dynamique déterminé à l'exécution[cite: 1]", isCorrect: false }
                ],
                explanation: "Contrairement à Python, le C utilise un typage statique : les types des variables doivent être définis par le programmeur et sont vérifiés lors de la compilation[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Généralités", "Avantages"],
                q: "Parmi les éléments suivants, lesquels sont des avantages du C[cite: 1] ?",
                options: [
                    { text: "Il est très rapide, proche de la machine, et permet une gestion manuelle de la mémoire[cite: 1]", isCorrect: true },
                    { text: "Il possède un ramasse-miettes (Garbage Collector) qui évite les fuites mémoire[cite: 1]", isCorrect: false }
                ],
                explanation: "La rapidité et le contrôle manuel sont des atouts du C[cite: 1]. L'absence de gestion automatique (pas de GC) en fait un langage bas niveau très performant[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Généralités", "Inconvénients"],
                q: "Quel est l'un des principaux inconvénients de la liberté offerte par le C[cite: 1] ?",
                options: [
                    { text: "L'absence de vérifications à l'exécution entraîne un risque élevé de bugs et de comportements indéfinis (Undefined behavior)[cite: 1]", isCorrect: true },
                    { text: "L'obligation d'utiliser des interfaces graphiques complexes[cite: 1]", isCorrect: false }
                ],
                explanation: "La liberté totale implique qu'il n'y a pas de garde-fous à l'exécution. Cela donne un code efficace, mais propice aux bugs si l'on gère mal la mémoire[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Compilation"],
                q: "Quelles sont les étapes principales de transformation d'un programme C[cite: 1] ?",
                options: [
                    { text: "Code source -> Fichiers objets -> Programme exécutable[cite: 1]", isCorrect: true },
                    { text: "Code source -> Interpréteur -> Exécution[cite: 1]", isCorrect: false }
                ],
                explanation: "Le flux classique du C passe par la compilation des sources en fichiers objets, suivie de l'édition de liens pour créer l'exécutable binaire final[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Compilation"],
                q: "Quel est le rôle exact du compilateur[cite: 1] ?",
                options: [
                    { text: "Il vérifie le code source et génère des instructions pour le processeur[cite: 1]", isCorrect: true },
                    { text: "Il relie les différents fichiers objets entre eux[cite: 1]", isCorrect: false },
                    { text: "Il lit et exécute le code ligne par ligne[cite: 1]", isCorrect: false }
                ],
                explanation: "Le compilateur lit le code humain, vérifie la syntaxe et les types, puis le traduit en instructions machine (fichiers objets)[cite: 1]. C'est l'éditeur de liens qui relie les objets[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Compilation", "Avantages"],
                q: "Quels sont les avantages d'un langage compilé par rapport à un langage interprété[cite: 1] ?",
                options: [
                    { text: "La détection des erreurs se fait avant l'exécution, et le code machine généré est optimisé et très rapide[cite: 1]", isCorrect: true },
                    { text: "Le même exécutable peut tourner sur n'importe quel système d'exploitation sans modification[cite: 1]", isCorrect: false }
                ],
                explanation: "Un langage compilé détecte les erreurs (types, syntaxe) à la compilation et produit un code plus rapide[cite: 1]. Cependant, l'exécutable généré est spécifique à la plateforme (CPU+OS)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Compilation", "Inconvénients"],
                q: "Quel est l'un des inconvénients majeurs de la compilation[cite: 1] ?",
                options: [
                    { text: "L'exécutable est généré pour une plateforme spécifique (CPU+OS) et il faut recompiler pour chaque système[cite: 1]", isCorrect: true },
                    { text: "L'exécution est plus lente car le processeur doit vérifier le typage[cite: 1]", isCorrect: false }
                ],
                explanation: "Un exécutable compilé est intimement lié à la machine cible (OS et CPU). Il faut recompiler le code source pour l'exécuter sur une autre architecture[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Compilation", "Erreurs"],
                q: "Quelle est la différence entre une « error » et un « warning » signalés par le compilateur[cite: 1] ?",
                options: [
                    { text: "Une erreur empêche la compilation (pas d'exécutable), un warning signale un problème potentiel mais permet la compilation[cite: 1]", isCorrect: true },
                    { text: "Un warning arrête la compilation immédiatement, une erreur la suspend[cite: 1]", isCorrect: false }
                ],
                explanation: "Les erreurs bloquent la création de l'exécutable, tandis que les avertissements (warnings) n'empêchent pas la compilation, bien qu'ils doivent être lus attentivement[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Compilation", "Erreurs"],
                q: "Pourquoi est-il conseillé de traiter les erreurs de compilation dans l'ordre d'apparition[cite: 1] ?",
                options: [
                    { text: "Parce qu'une erreur de syntaxe peut en cacher (ou en générer) une multitude d'autres en cascade[cite: 1]", isCorrect: true },
                    { text: "Parce que le compilateur efface les dernières erreurs[cite: 1]", isCorrect: false }
                ],
                explanation: "« Un train peut en cacher un autre » : une simple variable non déclarée ou un point-virgule manquant peut provoquer des dizaines d'erreurs subséquentes. Il faut toujours corriger la toute première[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Langages interprétés", "Python vs C"],
                q: "Comment fonctionne l'exécution d'un langage interprété comme Python[cite: 1] ?",
                options: [
                    { text: "Le code source est traduit et exécuté au fur et à mesure par l'interpréteur[cite: 1]", isCorrect: true },
                    { text: "Le code est intégralement compilé en fichier binaire avant l'exécution[cite: 1]", isCorrect: false }
                ],
                explanation: "Un langage interprété est lu, analysé et exécuté $n$ fois (à la volée) par un interpréteur[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Langages interprétés", "Avantages"],
                q: "Quel est un avantage majeur des langages interprétés[cite: 1] ?",
                options: [
                    { text: "Le même code source est portable et peut s'exécuter sur différentes plateformes sans recompilation[cite: 1]", isCorrect: true },
                    { text: "L'occupation mémoire est beaucoup plus faible[cite: 1]", isCorrect: false }
                ],
                explanation: "Grâce à l'interpréteur, le code est hautement portable[cite: 1]. En contrepartie, l'exécution est plus lente et l'occupation mémoire est plus élevée[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Outils"],
                q: "Qu'est-ce qu'un IDE (Integrated Development Environment)[cite: 1] ?",
                options: [
                    { text: "Une interface regroupant un éditeur de code, un compilateur, un outil d'exécution et un débogueur[cite: 1]", isCorrect: true },
                    { text: "Un outil en ligne de commande permettant de relier des fichiers objets[cite: 1]", isCorrect: false }
                ],
                explanation: "Un IDE (comme VS Code, Code::Blocks, Eclipse) rassemble tous les outils nécessaires au développement dans une interface unique pour faciliter le travail du programmeur[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Hello World"],
                q: "Dans un programme C, quelle est la fonction appelée automatiquement au lancement de l'exécutable[cite: 1] ?",
                options: [
                    { text: "La fonction `main`[cite: 1]", isCorrect: true },
                    { text: "La première fonction déclarée en haut du fichier[cite: 1]", isCorrect: false },
                    { text: "La fonction `start`[cite: 1]", isCorrect: false }
                ],
                explanation: "En C, l'entrée d'un programme est obligatoirement une fonction unique nommée `main`[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Bibliothèques"],
                q: "À quoi sert la ligne `#include <stdio.h>` au début d'un programme[cite: 1] ?",
                options: [
                    { text: "À déclarer l'utilisation des fonctions d'entrée/sortie standards (comme `printf`)[cite: 1]", isCorrect: true },
                    { text: "À définir la fonction `main`[cite: 1]", isCorrect: false }
                ],
                explanation: "L'inclusion de `stdio.h` (Standard Input/Output) est nécessaire pour utiliser les fonctions de base permettant de lire et d'afficher des données[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Fonctions"],
                q: "Que signifie précisément la signature `int main(void)`[cite: 1] ?",
                options: [
                    { text: "La fonction renvoie un code de type entier (`int`) et n'accepte aucun paramètre (`void`)[cite: 1]", isCorrect: true },
                    { text: "La fonction ne renvoie rien et prend des entiers en paramètres[cite: 1]", isCorrect: false }
                ],
                explanation: "Le mot clé `int` indique le type de retour (0 ou EXIT_SUCCESS en général pour dire que tout va bien), et `void` indique formellement l'absence de paramètres[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Instructions"],
                q: "Comment marque-t-on la fin d'une instruction classique en C[cite: 1] ?",
                options: [
                    { text: "Avec un point-virgule `;`[cite: 1]", isCorrect: true },
                    { text: "Avec un simple retour à la ligne[cite: 1]", isCorrect: false }
                ],
                explanation: "Contrairement à Python où le retour à la ligne suffit, le langage C exige un point-virgule `;` pour clore chaque instruction[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Blocs"],
                q: "Quel symbole est utilisé pour encadrer un bloc d'instructions (le corps d'une fonction, d'une boucle...)[cite: 1] ?",
                options: [
                    { text: "Les accolades `{` et `}`[cite: 1]", isCorrect: true },
                    { text: "L'indentation visuelle du code[cite: 1]", isCorrect: false },
                    { text: "Les crochets `[` et `]`[cite: 1]", isCorrect: false }
                ],
                explanation: "En C, les blocs d'instructions sont structurellement délimités par des accolades[cite: 1]. L'indentation n'est là que pour le confort visuel du développeur[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Commentaires"],
                q: "Comment écrit-on un commentaire sur plusieurs lignes en C[cite: 1] ?",
                options: [
                    { text: "En l'encadrant entre `/*` et `*/`[cite: 1]", isCorrect: true },
                    { text: "En l'encadrant entre `<!--` et `-->`[cite: 1]", isCorrect: false },
                    { text: "En commençant chaque ligne par `#`[cite: 1]", isCorrect: false }
                ],
                explanation: "Les blocs de commentaires s'écrivent avec `/* texte */`. Attention, ils ne sont pas imbricables[cite: 1]. On peut aussi utiliser `//` pour commenter la fin d'une ligne[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Return"],
                q: "Dans la fonction `main`, que signifie l'instruction `return EXIT_SUCCESS;` (ou `return 0;`)[cite: 1] ?",
                options: [
                    { text: "Elle signale au système d'exploitation que le programme s'est terminé sans erreur[cite: 1]", isCorrect: true },
                    { text: "Elle relance le programme au début[cite: 1]", isCorrect: false }
                ],
                explanation: "La valeur de retour de `main` est un code transmis au système. 0 (ou `EXIT_SUCCESS` via `stdlib.h`) indique une exécution réussie[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Variables"],
                q: "Que représente l'instruction `float a,b;` en dehors de toute fonction[cite: 1] ?",
                options: [
                    { text: "La déclaration de variables globales de type réel (float)[cite: 1]", isCorrect: true },
                    { text: "La définition d'une constante[cite: 1]", isCorrect: false }
                ],
                explanation: "Déclarées en dehors de tout bloc, `a` et `b` deviennent des variables globales accessibles par toutes les fonctions du fichier[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Directives"],
                q: "À quoi sert la directive `#define PI 3.14`[cite: 1] ?",
                options: [
                    { text: "À créer une constante de préprocesseur qui remplacera textuellement `PI` par `3.14` avant la compilation[cite: 1]", isCorrect: true },
                    { text: "À allouer de la mémoire dynamique pour la variable PI[cite: 1]", isCorrect: false }
                ],
                explanation: "Le `#define` permet de créer des macros ou des constantes symboliques. Le compilateur remplacera chaque occurrence de `PI` par `3.14`[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base"],
                q: "Le langage C est-il sensible à la casse (majuscules/minuscules)[cite: 1] ?",
                options: [
                    { text: "Oui, `variable` et `Variable` sont considérés comme deux identificateurs totalement différents[cite: 1]", isCorrect: true },
                    { text: "Non, il ignore la casse[cite: 1]", isCorrect: false }
                ],
                explanation: "Le C est strict et sensible à la casse. Par exemple, le nom de l'université `dauphine` est différent de `Dauphine` pour le compilateur[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Identificateurs"],
                q: "Quelles sont les règles de nommage des identificateurs en C[cite: 1] ?",
                options: [
                    { text: "Uniquement des lettres (sans accent), des chiffres et l'underscore `_`, sans commencer par un chiffre[cite: 1]", isCorrect: true },
                    { text: "Tous les caractères y compris les espaces et les accents sont autorisés[cite: 1]", isCorrect: false }
                ],
                explanation: "L'ASCII pur sans accent est de rigueur. On évite de commencer par un `_` (souvent réservé au système), et les espaces sont interdits dans un identificateur[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Bonnes pratiques", "Lisibilité"],
                q: "Pourquoi l'indentation est-elle importante en C si le compilateur ne s'en sert pas[cite: 1] ?",
                options: [
                    { text: "Pour permettre la relecture humaine et faciliter le débogage (par exemple, pour repérer les accolades fermantes manquantes)[cite: 1]", isCorrect: true },
                    { text: "Pour réduire la taille du fichier exécutable[cite: 1]", isCorrect: false }
                ],
                explanation: "L'indentation n'a aucune valeur syntaxique pour le compilateur (il peut tout lire sur une seule ligne), mais elle est vitale pour la maintenance et la compréhension du code[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Python vs C", "Déclarations"],
                q: "Quelle différence fondamentale existe-t-il entre C et Python concernant l'utilisation des variables[cite: 1] ?",
                options: [
                    { text: "En C, toute variable doit être explicitement déclarée avec son type avant de pouvoir être utilisée[cite: 1]", isCorrect: true },
                    { text: "En Python, on doit obligatoirement déclarer le type de la variable avant de l'assigner[cite: 1]", isCorrect: false }
                ],
                explanation: "Le C impose que toute chose (variable, fonction) soit déclarée pour être connue du compilateur avant d'être utilisée. Python permet la déclaration automatique à l'affectation[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Python vs C", "Structure"],
                q: "Si en Python les instructions conditionnelles (if) et les fonctions (def) reposent sur l'indentation, sur quoi reposent-elles en C[cite: 1] ?",
                options: [
                    { text: "Sur la syntaxe des blocs encadrés par des accolades `{ }`[cite: 1]", isCorrect: true },
                    { text: "Sur des mots clés de fermeture comme `endif` ou `enddef`[cite: 1]", isCorrect: false }
                ],
                explanation: "En C, c'est l'accolade qui ouvre et ferme le périmètre d'une fonction, d'une boucle ou d'une condition[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Python vs C", "Typage"],
                q: "Laquelle de ces signatures de fonction illustre le passage de Python (typage dynamique) au C (typage statique)[cite: 1] ?",
                options: [
                    { text: "Python: `def f(x):`  ->  C: `int f(int x) { ... }`[cite: 1]", isCorrect: true },
                    { text: "Python: `int f(x):`  ->  C: `def f(int x) { ... }`[cite: 1]", isCorrect: false }
                ],
                explanation: "Le langage C exige que l'on indique le type de la valeur de retour (ex: `int`) et le type de chaque argument (ex: `int x`) lors de la définition de la fonction[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Python vs C", "Exécution"],
                q: "Quelle différence d'exécution globale sépare Python et C[cite: 1] ?",
                options: [
                    { text: "Python exécute le script de haut en bas ; le C cherche directement la fonction `main` et n'exécute que son contenu[cite: 1]", isCorrect: true },
                    { text: "Le C exécute les fonctions dans l'ordre de leur déclaration dans le fichier[cite: 1]", isCorrect: false }
                ],
                explanation: "En C, on ne peut pas mettre d'instructions flottantes en dehors d'une fonction. Le processeur va systématiquement démarrer l'exécution à la première ligne de la fonction `main`, peu importe où elle se trouve dans le code[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Histoire", "Normes"],
                q: "Quelles sont quelques-unes des principales normes ISO du langage C[cite: 1] ?",
                options: [
                    { text: "C90, C99, C11, C23[cite: 1]", isCorrect: true },
                    { text: "C++, C#, Objective-C[cite: 1]", isCorrect: false }
                ],
                explanation: "Après le livre K&R de 1978, l'ANSI a standardisé le C en 1989, puis l'ISO en 1990 (C90), avec des mises à jour majeures en 1999 (C99), 2011 (C11) et récemment 2023 (C23) ajoutant de nouvelles fonctionnalités[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Bonnes pratiques", "Nomenclature"],
                q: "Pourquoi insiste-t-on sur le choix des identificateurs en C[cite: 1] ?",
                options: [
                    { text: "Pour améliorer drastiquement la lisibilité et la réutilisabilité du code[cite: 1]", isCorrect: true },
                    { text: "Pour optimiser la vitesse de compilation de GCC[cite: 1]", isCorrect: false }
                ],
                explanation: "Un code propre (variables nommées clairement, cohérence de présentation) facilite sa maintenance, le C ayant par nature peu de structures de très haut niveau[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Généralités", "IHM"],
                q: "Le langage C propose-t-il une bibliothèque standard de création d'interface graphique (GUI)[cite: 1] ?",
                options: [
                    { text: "Non, il n'y a pas de GUI standard, le langage est minimaliste[cite: 1]", isCorrect: true },
                    { text: "Oui, la bibliothèque `stdio.h` intègre la gestion des fenêtres[cite: 1]", isCorrect: false }
                ],
                explanation: "C'est l'un de ses inconvénients (ou de ses forces selon le point de vue) : le C est minimaliste et ne fournit pas de GUI dans sa bibliothèque standard[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Python vs C", "Garbage Collector"],
                q: "Dans un programme, que doit faire le développeur vis-à-vis de la mémoire en C par rapport à Python[cite: 1] ?",
                options: [
                    { text: "En C, le développeur gère la mémoire manuellement ; en Python, le Garbage Collector s'en occupe automatiquement[cite: 1]", isCorrect: true },
                    { text: "Les deux langages possèdent un Garbage Collector automatique[cite: 1]", isCorrect: false }
                ],
                explanation: "C'est une différence capitale. L'absence de gestion automatique en C est ce qui le rend si rapide, mais c'est aussi la source majeure de bugs (liberté dangereuse)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Traductions"],
                q: "Comment traduit-on l'assignation Python `price = 5` en C sachant qu'on crée la variable[cite: 1] ?",
                options: [
                    { text: "`int price = 5;`[cite: 1]", isCorrect: true },
                    { text: "`price = 5;` sans indiquer le type[cite: 1]", isCorrect: false }
                ],
                explanation: "En C, lors de sa première utilisation, la variable doit impérativement être déclarée avec son type et l'instruction doit se terminer par un point-virgule[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Culture générale"],
                q: "Selon la célèbre phrase de Dennis Ritchie : « C is quirky, flawed, and an enormous... »[cite: 1]",
                options: [
                    { text: "... success. »[cite: 1]", isCorrect: true },
                    { text: "... failure. »[cite: 1]", isCorrect: false }
                ],
                explanation: "Dennis Ritchie a reconnu que malgré ses défauts et étrangetés, le langage a connu un succès colossal[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Compilation", "Édition de liens"],
                q: "Lors de la chaîne de compilation, à quoi sert l'éditeur de liens (linker)[cite: 1] ?",
                options: [
                    { text: "Il relie ensemble tous les fichiers objets compilés (et les librairies) pour former le programme exécutable final[cite: 1]", isCorrect: true },
                    { text: "Il traduit le code source C directement en langage assembleur[cite: 1]", isCorrect: false }
                ],
                explanation: "La compilation transforme chaque source en fichier objet. L'édition de liens rassemble ces morceaux éparpillés (plus les bibliothèques comme `stdio.h`) pour créer un seul binaire exécutable[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    }
});

