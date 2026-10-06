// ============================================================================
// ExerciseBase & ExerciseRegistry - Interface commune pour tous les types d'exercices
// ============================================================================

class ExerciseBase {
    constructor(exerciseData) {
        this.data = exerciseData;
        this.startTime = Date.now();
    }

    // À implémenter dans chaque sous-classe
    render(container) {
        throw new Error("Method render() must be implemented.");
    }

    // Récupère la réponse de l'utilisateur sous forme structurée
    getUserAnswer() {
        throw new Error("Method getUserAnswer() must be implemented.");
    }

    // Valide la réponse et retourne { isCorrect, isPartial, diagnostic, score, details }
    validate() {
        throw new Error("Method validate() must be implemented.");
    }

    // Affiche le feedback interactif post-validation
    displayFeedback(container, validationResult) {
        throw new Error("Method displayFeedback() must be implemented.");
    }
}

const ExerciseRegistry = {
    types: new Map(),

    register(typeName, exerciseClass) {
        this.types.set(typeName, exerciseClass);
    },

    create(exerciseData) {
        const type = exerciseData.type || 'qcm';
        const ExerciseClass = this.types.get(type);
        if (!ExerciseClass) {
            console.warn(`Type d'exercice inconnu '${type}', repli sur QCM.`);
            const QcmClass = this.types.get('qcm');
            return new QcmClass(exerciseData);
        }
        return new ExerciseClass(exerciseData);
    }
};

if (typeof window !== 'undefined') {
    window.ExerciseBase = ExerciseBase;
    window.ExerciseRegistry = ExerciseRegistry;
}
