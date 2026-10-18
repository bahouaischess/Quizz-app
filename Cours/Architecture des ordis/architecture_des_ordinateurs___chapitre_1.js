// ============================================================
// Matière : Architecture des ordinateurs : Chapitre 1 (Logique Combinatoire et Représentation de l'Information)
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;

Object.assign(defaultData, {
    "Architecture des ordis : Chapitre 1 (Logique Combinatoire et Numération)": {
        course: "info",
        folder: "Architecture des ordis",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Binaire", "Numération"],
                q: "Quelle est la valeur décimale de l'octet non signé $(10110010)_2$ ?",
                options: [
                    { text: "178", isCorrect: true },
                    { text: "182", isCorrect: false },
                    { text: "162", isCorrect: false },
                    { text: "194", isCorrect: false }
                ],
                explanation: "On calcule : $128 + 32 + 16 + 2 = 178$."
            },
            {
                type: "qcm",
                tags: ["Hexadécimal", "Numération"],
                q: "Quelle est la représentation hexadécimale du nombre binaire $(11011111)_2$ ?",
                options: [
                    { text: "0xDF", isCorrect: true },
                    { text: "0xEF", isCorrect: false },
                    { text: "0xDE", isCorrect: false },
                    { text: "0xCF", isCorrect: false }
                ],
                explanation: "$1101_2 = D_{16}$ et $1111_2 = F_{16}$, donc le résultat est 0xDF."
            },
            {
                type: "qcm",
                tags: ["Complément à 2", "Arithmétique"],
                q: "Sur 8 bits en complément à 2, quelle est la valeur de l'entier représenté par $(11111000)_2$ ?",
                options: [
                    { text: "-8", isCorrect: true },
                    { text: "-7", isCorrect: false },
                    { text: "-248", isCorrect: false },
                    { text: "-16", isCorrect: false }
                ],
                explanation: "Le bit de poids fort est 1 (négatif). On inverse les bits (00000111) et on ajoute 1 (00001000 = 8), donc la valeur est $-8$."
            },
            {
                type: "qcm",
                tags: ["Portes Logiques", "Logique Combinatoire"],
                q: "Quelle porte logique produit une sortie à 1 si et seulement si un nombre impair de ses entrées vaut 1 ?",
                options: [
                    { text: "XOR", isCorrect: true },
                    { text: "NAND", isCorrect: false },
                    { text: "NOR", isCorrect: false },
                    { text: "AND", isCorrect: false }
                ],
                explanation: "La fonction OU Exclusif (XOR) vaut 1 quand un nombre impair d'entrées vaut 1."
            },
            {
                type: "qcm",
                tags: ["Algèbre de Boole", "Lois de De Morgan"],
                q: "Selon les lois de De Morgan, quelle est l'expression simplifiée de $\\overline{A \\cdot B}$ ?",
                options: [
                    { text: "$\\overline{A} + \\overline{B}$", isCorrect: true },
                    { text: "$\\overline{A} \\cdot \\overline{B}$", isCorrect: false },
                    { text: "$\\overline{A + B}$", isCorrect: false },
                    { text: "$A + B$", isCorrect: false }
                ],
                explanation: "Le complément d'un produit logique est la somme des compléments : $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$."
            },
            {
                type: "qcm",
                tags: ["Multiplexeur", "Circuits"],
                q: "Combien d'entrées de sélection possède un multiplexeur à 8 entrées de données ?",
                options: [
                    { text: "3", isCorrect: true },
                    { text: "8", isCorrect: false },
                    { text: "4", isCorrect: false },
                    { text: "2", isCorrect: false }
                ],
                explanation: "Pour sélectionner 1 entrée parmi $2^n = 8$, il faut $n = 3$ lignes de sélection."
            },
            {
                type: "qcm",
                tags: ["Bascules", "Logique Séquentielle"],
                q: "Quelle est la principale différence entre un circuit combinatoire et un circuit séquentiel ?",
                options: [
                    { text: "Le circuit séquentiel possède un état interne mémorisé (effet d'horloge / boucle)", isCorrect: true },
                    { text: "Le circuit combinatoire utilise une horloge plus rapide", isCorrect: false },
                    { text: "Le circuit séquentiel ne peut pas faire de calculs arithmétiques", isCorrect: false },
                    { text: "Le circuit combinatoire utilise de la mémoire vive", isCorrect: false }
                ],
                explanation: "Les circuits séquentiels disposent d'une mémoire de l'état passé (bascules D, JK, RS), contrairement aux combinatoires."
            },
            {
                type: "qcm",
                tags: ["Architecture von Neumann", "CPU"],
                q: "Dans l'architecture de von Neumann, que contient le registre Program Counter (PC / Compteur ordinal) ?",
                options: [
                    { text: "L'adresse mémoire de la prochaine instruction à exécuter", isCorrect: true },
                    { text: "Le code binaire de l'instruction en cours d'exécution", isCorrect: false },
                    { text: "Le résultat de la dernière opération arithmétique", isCorrect: false },
                    { text: "Le nombre total d'instructions exécutées", isCorrect: false }
                ],
                explanation: "Le Program Counter (PC) stocke l'adresse mémoire de la prochaine instruction à charger (Fetch)."
            }
        ]
    }
});
