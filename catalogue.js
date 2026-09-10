const courseCatalogue = [
    {
        id: "analyse3",
        title: "Analyse 3",
        folder: "Mathématiques",
        description: "Intégrales généralisées, suites et séries de fonctions, séries entières et introduction à la topologie.",
        icon: "📈",
        themeColor: "#3498db", // Bleu Dauphine
        stats: {
            chapters: 6,
            totalQuestions: 215
        },
        // Plus tard, ceci servira au Lazy Loading pour télécharger le bon fichier
        dataFile: "data/analyse3.json" 
    },
    {
        id: "algebre2",
        title: "Algèbre 2",
        folder: "Mathématiques",
        description: "Espaces vectoriels, applications linéaires, matrices, systèmes linéaires et réduction des endomorphismes.",
        icon: "🧮",
        themeColor: "#9b59b6", // Violet
        stats: {
            chapters: 7,
            totalQuestions: 180
        },
        dataFile: "data/algebre2.json"
    },
    {
        id: "prog_python",
        title: "Programmation Python",
        folder: "Informatique",
        description: "Structures de données, algorithmique de tri, listes chaînées et arbres.",
        icon: "🐍",
        themeColor: "#2ecc71", // Vert
        stats: {
            chapters: 4,
            totalQuestions: 120
        },
        dataFile: "data/python.json"
    }
];
