// ============================================================================
// MethodDetector - Moteur de Détection de Méthode & Coaching d'Efficacité
// Distingue une réponse correcte obtenue par méthode naïve vs méthode optimale.
// Ne pénalise JAMAIS une méthode valide, mais enseigne les réflexes de concours.
// ============================================================================

const MethodDetector = {
    // Analyse la structure d'une matrice et identifie la méthode la plus élégante
    analyzeMatrixStructure(matrix) {
        if (!Array.isArray(matrix) || !matrix.length) return { method: 'general', label: 'Calcul standard' };
        const n = matrix.length;

        // 1. Matrice triangulaire supérieure ou inférieure
        let isUpperTri = true;
        let isLowerTri = true;
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (r > c && matrix[r][c] !== 0) isUpperTri = false;
                if (r < c && matrix[r][c] !== 0) isLowerTri = false;
            }
        }
        if (isUpperTri || isLowerTri) {
            return {
                method: 'diagonal_product',
                label: 'Produit direct des coefficients diagonaux',
                cost: 'O(n) - 1 multiplication',
                feedback: '⚡ Méthode optimale immédiate : la matrice étant triangulaire, le déterminant est le produit des coefficients de la diagonale principale.'
            };
        }

        // 2. Ligne ou colonne avec un maximum de zéros
        let maxZerosInRow = 0, bestRow = 0;
        let maxZerosInCol = 0, bestCol = 0;

        for (let r = 0; r < n; r++) {
            const z = matrix[r].filter(v => v === 0).length;
            if (z > maxZerosInRow) { maxZerosInRow = z; bestRow = r; }
        }
        for (let c = 0; c < n; c++) {
            let z = 0;
            for (let r = 0; r < n; r++) { if (matrix[r][c] === 0) z++; }
            if (z > maxZerosInCol) { maxZerosInCol = z; bestCol = c; }
        }

        if (maxZerosInRow >= n - 1 || maxZerosInCol >= n - 1) {
            return {
                method: 'laplace_expansion',
                label: maxZerosInRow >= maxZerosInCol ? `Développement selon la ligne ${bestRow + 1}` : `Développement selon la colonne ${bestCol + 1}`,
                cost: '1 sous-déterminant',
                feedback: `⚡ Méthode la plus rapide : développer par rapport à la ${maxZerosInRow >= maxZerosInCol ? `ligne ${bestRow + 1}` : `colonne ${bestCol + 1}`} qui contient ${Math.max(maxZerosInRow, maxZerosInCol)} zéro(s).`
            };
        }

        // 3. Somme constante des lignes ou des colonnes (Astuce concours C1 <- sum Cj)
        const rowSums = matrix.map(row => row.reduce((acc, v) => acc + (typeof v === 'number' ? v : 0), 0));
        const allRowSumsEqual = rowSums.every(s => s === rowSums[0]);

        if (allRowSumsEqual && n >= 3) {
            return {
                method: 'column_sum_factorization',
                label: 'Remplacement C1 ← C1 + C2 + ... + Cn',
                cost: 'Factorisation immédiate',
                feedback: `💡 Réflexe de concours : la somme de chaque ligne valant ${rowSums[0]}, l'opération $C_1 \\leftarrow \\sum C_j$ permettait de factoriser immédiatement ${rowSums[0]} hors du déterminant.`
            };
        }

        // 4. Par défaut : opérations élémentaires de Gauss
        if (n >= 4) {
            return {
                method: 'gaussian_pivot',
                label: 'Pivot de Gauss & Opérations élémentaires Li ← Li - λLj',
                cost: 'O(n^3)',
                feedback: '👍 Méthode recommandée : réduction échelonnée par opérations élémentaires pour faire apparaître des zéros.'
            };
        }

        return {
            method: 'sarrus_or_pivot',
            label: 'Règle de Sarrus ou combinaison de lignes',
            cost: 'Standard',
            feedback: '✅ Calcul direct valide.'
        };
    },

    // Évalue une réponse et retourne le conseil de méthode
    evaluateCalculationMethod(exerciseData, userAnswer, reportedMethod = null) {
        const matrix = exerciseData.matrix || exerciseData.M;
        if (!matrix) return null;

        const optimal = this.analyzeMatrixStructure(matrix);

        // Si l'étudiant a spécifié ou utilisé une méthode sous-optimale
        if (reportedMethod === 'sarrus' && optimal.method === 'column_sum_factorization') {
            return {
                status: 'valid_but_costly',
                badge: '⚠️ Calcul valide mais coûteux',
                message: `Résultat correct. Méthode Sarrus valide mais calculatoirement lourde. Une factorisation préalable via $C_1 \\leftarrow \\sum C_j$ évitait 6 produits complexes.`
            };
        }

        if (reportedMethod === 'sarrus' && optimal.method === 'diagonal_product') {
            return {
                status: 'valid_but_costly',
                badge: '💡 Raccourci manqué',
                message: `Résultat correct. Inutile de développer : la matrice était directement triangulaire !`
            };
        }

        return {
            status: 'optimal',
            badge: '⚡ Méthode Optimale',
            message: optimal.feedback
        };
    }
};

if (typeof window !== 'undefined') {
    window.MethodDetector = MethodDetector;
}
