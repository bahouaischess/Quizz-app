// ============================================================================
// MathEval - Moteur d'évaluation et de validation mathématique intelligente
// Supporte : scalaires, fractions exactes, nombres décimaux, ensembles de racines,
// vecteurs, matrices et expressions algébriques.
// ============================================================================

const MathEval = {
    gcd(a, b) {
        a = Math.abs(Math.round(a));
        b = Math.abs(Math.round(b));
        while (b) {
            const t = b;
            b = a % b;
            a = t;
        }
        return a || 1;
    },

    // Analyse une chaîne en fraction exacte { num, den, value }
    parseFraction(input) {
        if (typeof input === 'number') {
            return { num: input, den: 1, value: input };
        }
        if (typeof input !== 'string') return null;

        const clean = input.trim().replace(/\s+/g, '').replace(',', '.');
        if (!clean) return null;

        // Cas fraction : "a/b" ou "-a/b"
        const slashIdx = clean.indexOf('/');
        if (slashIdx !== -1) {
            const numPart = clean.slice(0, slashIdx);
            const denPart = clean.slice(slashIdx + 1);

            const num = Number(numPart);
            const den = Number(denPart);

            if (Number.isNaN(num) || Number.isNaN(den) || den === 0) return null;

            const sign = (num * den < 0) ? -1 : 1;
            const absNum = Math.abs(num);
            const absDen = Math.abs(den);
            const g = this.gcd(absNum, absDen);

            return {
                num: sign * (absNum / g),
                den: absDen / g,
                value: num / den
            };
        }

        const val = Number(clean);
        if (Number.isNaN(val)) return null;

        const precision = 10000;
        const num = Math.round(val * precision);
        const den = precision;
        const g = this.gcd(Math.abs(num), den);

        return {
            num: num / g,
            den: den / g,
            value: val
        };
    },

    // Vérifie si deux expressions scalaires/fractions sont mathématiquement équivalentes
    areNumbersEquivalent(input, expected, tolerance = 1e-6) {
        const parsedInput = this.parseFraction(input);
        const parsedExpected = this.parseFraction(expected);

        if (!parsedInput || !parsedExpected) return false;

        // Équivalence fractionnaire exacte
        if (parsedInput.num === parsedExpected.num && parsedInput.den === parsedExpected.den) {
            return true;
        }

        // Équivalence décimale approchée dans la tolérance
        return Math.abs(parsedInput.value - parsedExpected.value) <= tolerance;
    },

    // Compare deux ensembles de valeurs / racines (ex: "1, -2" et "-2, 1" ou "{1, 3}")
    areSetsEquivalent(input, expected, tolerance = 1e-6) {
        if (typeof input !== 'string' && !Array.isArray(input)) return false;
        if (typeof expected !== 'string' && !Array.isArray(expected)) return false;

        const cleanTokens = (val) => {
            if (Array.isArray(val)) return val.map(String);
            return val
                .replace(/[{}[\]()]/g, '')
                .split(/[,;\s]+/)
                .map(s => s.trim())
                .filter(s => s.length > 0);
        };

        const inTokens = cleanTokens(input);
        const expTokens = cleanTokens(expected);

        if (inTokens.length !== expTokens.length) return false;

        const matched = new Array(expTokens.length).fill(false);
        for (const token of inTokens) {
            let found = false;
            for (let j = 0; j < expTokens.length; j++) {
                if (!matched[j] && this.areNumbersEquivalent(token, expTokens[j], tolerance)) {
                    matched[j] = true;
                    found = true;
                    break;
                }
            }
            if (!found) return false;
        }
        return true;
    },

    // Compare deux matrices sous forme de tableaux 2D
    areMatricesEquivalent(inputMatrix, expectedMatrix, tolerance = 1e-6) {
        if (!Array.isArray(inputMatrix) || !Array.isArray(expectedMatrix)) return false;
        if (inputMatrix.length !== expectedMatrix.length) return false;

        for (let i = 0; i < expectedMatrix.length; i++) {
            const rowIn = inputMatrix[i];
            const rowExp = expectedMatrix[i];
            if (!Array.isArray(rowIn) || rowIn.length !== rowExp.length) return false;

            for (let j = 0; j < rowExp.length; j++) {
                if (!this.areNumbersEquivalent(rowIn[j], rowExp[j], tolerance)) {
                    return false;
                }
            }
        }
        return true;
    },

    // Normalise une chaîne textuelle / formule pour comparaison tolérante
    normalizeMathText(str) {
        if (typeof str !== 'string') return '';
        return str
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '')
            .replace(/[{}]/g, '')
            .replace(/\\left|\\right/g, '')
            .replace(/\*/g, '')
            .replace(/,/g, '.')
            .replace(/x/g, 'x')
            .replace(/lambda/g, 'l');
    }
};

if (typeof window !== 'undefined') {
    window.MathEval = MathEval;
}
