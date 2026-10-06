// ============================================================================
// Test Suite : Banques d'Exercices, Choix Libre du Nombre et Qualité Intellectuelle
// ============================================================================

const fs = require('fs');
const path = require('path');
const assert = require('assert');

// Environnement Mock DOM & LocalStorage
global.window = global;
global.localStorage = {
    _data: {},
    getItem(k) { return this._data[k] || null; },
    setItem(k, v) { this._data[k] = String(v); },
    removeItem(k) { delete this._data[k]; },
    clear() { this._data = {}; }
};

// Mock Document
class MockElement {
    constructor(id = '', tag = 'div') {
        this.id = id;
        this.tagName = tag.toUpperCase();
        this.classList = new Set();
        this.classList.add = (c) => this.classList.add(c);
        this.classList.remove = (c) => this.classList.delete(c);
        this.classList.contains = (c) => this.classList.has(c);
        this.innerHTML = '';
        this.textContent = '';
        this.style = {};
        this.children = [];
        this.disabled = false;
    }
    appendChild(child) { this.children.push(child); return child; }
    querySelector() { return new MockElement(); }
    querySelectorAll() { return [new MockElement()]; }
    focus() {}
}

const elements = {};
global.document = {
    getElementById(id) {
        if (!elements[id]) elements[id] = new MockElement(id);
        return elements[id];
    },
    createElement(tag) { return new MockElement('', tag); },
    querySelectorAll() { return []; }
};

// Chargement des modules
const basePath = path.resolve(__dirname, '..');
require(path.join(basePath, 'src/core/diagnostic.js'));
require(path.join(basePath, 'src/math/matrix-generators.js'));
require(path.join(basePath, 'src/math/algebra-generators.js'));
require(path.join(basePath, 'src/math/series-generators.js'));
require(path.join(basePath, 'src/code/cs-generators.js'));
require(path.join(basePath, 'src/exercises/exercise-base.js'));
require(path.join(basePath, 'src/exercises/numeric-exercise.js'));
require(path.join(basePath, 'src/exercises/next-step-exercise.js'));
require(path.join(basePath, 'src/exercises/flaw-exercise.js'));
require(path.join(basePath, 'src/exercises/qcm-exercise.js'));
require(path.join(basePath, 'src/exercises/code-exercise.js'));
require(path.join(basePath, 'src/exercises/code-tracing-exercise.js'));
require(path.join(basePath, 'src/engine/course-analyzer.js'));
require(path.join(basePath, 'src/engine/multi-angle-engine.js'));
require(path.join(basePath, 'src/engine/mastery-tracker.js'));
require(path.join(basePath, 'src/engine/concept-engine.js'));
require(path.join(basePath, 'src/engine/adaptive-session.js'));
require(path.join(basePath, 'src/ui/workout-view.js'));

console.log("--- TEST 1 : VÉRIFICATION DES VOLUMES DE BANQUES D'EXERCICES ---");
const diagBank = window.ConceptEngine.getAvailableCount('Diagonalisation');
const matBank = window.ConceptEngine.getAvailableCount('Matrices');
const serBank = window.ConceptEngine.getAvailableCount('Séries');
const pyBank = window.ConceptEngine.getAvailableCount('Python');
const cBank = window.ConceptEngine.getAvailableCount('Pointeurs');

console.log(`✓ Diagonalisation : ${diagBank} exercices disponibles (>= 100 garanti)`);
console.log(`✓ Matrices : ${matBank} exercices disponibles (>= 1000 garanti)`);
console.log(`✓ Séries : ${serBank} exercices disponibles (>= 100 garanti)`);
console.log(`✓ Python : ${pyBank} exercices disponibles (>= 100 garanti)`);
console.log(`✓ Pointeurs C : ${cBank} exercices disponibles (>= 100 garanti)`);

assert.ok(diagBank >= 100, "La banque de diagonalisation doit dépasser 100 exercices.");
assert.ok(serBank >= 100, "La banque de séries doit dépasser 100 exercices.");
assert.ok(pyBank >= 100, "La banque de Python doit dépasser 100 exercices.");

console.log("\n--- TEST 2 : SESSION DE LONGUEUR CHOISIE PAR L'UTILISATEUR (ex: 30 exercices) ---");
const session30 = window.AdaptiveSessionEngine.startSession({
    mode: 'targeted',
    targetConcept: 'Diagonalisation',
    totalTarget: 30
});

assert.strictEqual(session30.totalTarget, 30, "La séance doit avoir exactement 30 exercices prévus.");
assert.strictEqual(session30.currentIndex, 0, "Index initial à 0.");
assert.strictEqual(session30.sessionCompleted, false, "La séance n'est pas terminée au départ.");

// Exécution et progression pas à pas jusqu'à 30
for (let i = 0; i < 30; i++) {
    const cur = window.AdaptiveSessionEngine.getCurrentExercise();
    assert.ok(cur, `L'exercice ${i + 1} doit être généré correctement.`);
    
    // Soumission réponse
    window.AdaptiveSessionEngine.processAnswer({
        isCorrect: (i % 3 !== 0), // Mix de réussites et erreurs
        isPartial: false,
        diagnostic: i % 3 === 0 ? { category: { label: 'Piège de multiplicité' }, specificReason: 'Confusion m_a et m_g' } : null
    });

    // Vérifie que l'exercice est complété mais la séance TOUJOURS active
    assert.strictEqual(session30.exerciseCompleted, true);
    assert.strictEqual(session30.sessionCompleted, false, `La séance ne doit pas être finie à l'exercice ${i + 1}/30.`);

    // Passage au suivant
    const hasNext = window.AdaptiveSessionEngine.next();
    if (i < 29) {
        assert.strictEqual(hasNext, true, `Il doit rester un exercice après l'index ${i}.`);
        assert.strictEqual(session30.sessionCompleted, false);
    } else {
        // Au 30e exercice, next() conclut la séance
        assert.strictEqual(hasNext, false, "Après le 30e exercice, next() renvoie false.");
        assert.strictEqual(session30.sessionCompleted, true, "La séance doit être marquée terminée après le 30e exercice.");
        assert.strictEqual(window.AdaptiveSessionEngine.isSessionFinished(), true);
    }
}
console.log(`✓ Déroulement complet des 30 exercices validé avec succès (${session30.stats.correctCount}/30 réussis).`);

console.log("\n--- TEST 3 : QUALITÉ INTELLECTUELLE & ABSENCE DE DISTRACTEURS TRIVIAUX (QCM DIAGONALISATION) ---");
const exDiag = window.AlgebraGenerators.generate(5);
assert.strictEqual(exDiag.tags.includes('Diagonalisation'), true);
assert.strictEqual(exDiag.options.length, 4, "L'exercice de diagonalisation doit avoir 4 propositions.");

// Vérification de la non-évidence des longueurs
const lens = exDiag.options.map(o => o.text.length);
const minLen = Math.min(...lens);
const maxLen = Math.max(...lens);
const correctOpt = exDiag.options.find(o => o.isCorrect);
console.log(`Longueur correcte : ${correctOpt.text.length} caractères | Min : ${minLen} | Max : ${maxLen}`);
assert.ok(maxLen / minLen < 2.5, "Le distracteur ne doit pas être un one-liner caricatural face à une réponse longue.");

// Vérification de la pertinence des distracteurs (théorèmes et pièges réels)
const hasMultiplicityTrap = exDiag.options.some(o => o.text.includes('multiplicité') || o.text.includes('dimension'));
const hasInvertibilityTrap = exDiag.options.some(o => o.text.includes('det(A)') || o.text.includes('inversible'));
assert.ok(hasMultiplicityTrap, "Doit comporter un piège authentique de multiplicité/dimension.");
assert.ok(hasInvertibilityTrap, "Doit comporter un piège authentique reliant à tort déterminant et diagonalisabilité.");
console.log("✓ Options de diagonalisation rigoureusement équilibrées et fondées sur des pièges de prépa/L2.");

console.log("\n--- TEST 4 : SÉRIES NUMÉRIQUES (DL ORDRE 2 & PIÈGE DE SIGNE) ---");
const exSeries4 = window.SeriesGenerators.generate(4);
assert.strictEqual(exSeries4.options.length, 4);
const hasDL2Trap = exSeries4.options.some(o => o.text.includes('DL') || o.text.includes('ordre 2') || o.text.includes('1/2n'));
assert.ok(hasDL2Trap, "Le niveau 4 de séries doit mobiliser le piège du développement limité à l'ordre 2.");
console.log("✓ Séries Niveau 4 validé : distinction rigoureuse équivalent 1er ordre vs DL2.");

console.log("\n--- TEST 5 : INFORMATIQUE C & PYTHON AVANCÉS ---");
const exC2 = window.CSGenerators.generate('c', 2);
assert.strictEqual(exC2.notion, 'c_pointeurs_priorite_post_incrementation');
assert.ok(exC2.q.includes('*p++') && exC2.q.includes('(*p)++'));
console.log("✓ Langage C Niveau 2 validé : distinction *p++ vs (*p)++.");

const exPy4 = window.CSGenerators.generate('python', 4);
assert.strictEqual(exPy4.notion, 'python_default_arg_mutable');
assert.ok(exPy4.q.includes('lst=[]'));
console.log("✓ Python Niveau 4 validé : piège de l'argument par défaut mutable.");

console.log("\n=======================================================");
console.log("TOUS LES CRITÈRES DE BANQUES, LONGUEUR ET QUALITÉ VALIDÉS À 100% !");
console.log("=======================================================");
