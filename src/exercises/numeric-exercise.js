// ============================================================================
// NumericExercise - Saisie mathématique réelle : scalaires, fractions, matrices, ensembles
// Production directe de calculs pour l'Entraînement Académique
// ============================================================================

class NumericExercise extends ExerciseBase {
    render(container) {
        container.innerHTML = '';

        const card = document.createElement('div');
        card.className = 'exercise-card numeric-exercise';

        // Énoncé
        const promptEl = document.createElement('div');
        promptEl.className = 'exercise-prompt';
        promptEl.innerHTML = `<h3 class="exercise-title">${this.data.q}</h3>`;
        card.appendChild(promptEl);

        // Zone de saisie selon le sous-type (scalaire, matrice ou ensemble de valeurs)
        const inputArea = document.createElement('div');
        inputArea.className = 'exercise-input-area';

        if (this.data.subType === 'matrix' || Array.isArray(this.data.expectedMatrix)) {
            // Saisie Matricielle
            const rows = this.data.rows || this.data.expectedMatrix?.length || 2;
            const cols = this.data.cols || this.data.expectedMatrix?.[0]?.length || 2;

            const matrixWrap = document.createElement('div');
            matrixWrap.className = 'matrix-input-wrapper';
            matrixWrap.innerHTML = `
                <div class="matrix-bracket left"></div>
                <div class="matrix-grid" style="grid-template-columns: repeat(${cols}, 1fr);" id="matrix-grid-container"></div>
                <div class="matrix-bracket right"></div>
            `;

            const gridContainer = matrixWrap.querySelector('#matrix-grid-container');
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const cellInput = document.createElement('input');
                    cellInput.type = 'text';
                    cellInput.className = 'matrix-cell-input';
                    cellInput.dataset.row = r;
                    cellInput.dataset.col = c;
                    cellInput.placeholder = `(${r + 1},${c + 1})`;
                    cellInput.autocomplete = 'off';

                    // Navigation intuitive au clavier (flèches, Entrée, Tab)
                    cellInput.addEventListener('keydown', (e) => {
                        let targetRow = r;
                        let targetCol = c;
                        if (e.key === 'ArrowRight' && c < cols - 1) targetCol++;
                        else if (e.key === 'ArrowLeft' && c > 0) targetCol--;
                        else if (e.key === 'ArrowDown' && r < rows - 1) targetRow++;
                        else if (e.key === 'ArrowUp' && r > 0) targetRow--;
                        else if (e.key === 'Enter') {
                            e.preventDefault();
                            if (c < cols - 1) targetCol++;
                            else if (r < rows - 1) { targetRow++; targetCol = 0; }
                        }

                        if (targetRow !== r || targetCol !== c) {
                            const nextCell = gridContainer.querySelector(`input[data-row="${targetRow}"][data-col="${targetCol}"]`);
                            if (nextCell) nextCell.focus();
                        }
                    });

                    gridContainer.appendChild(cellInput);
                }
            }
            inputArea.appendChild(matrixWrap);

            const hint = document.createElement('small');
            hint.className = 'input-hint';
            hint.textContent = 'Astuce : Saisissez des entiers, décimaux ou des fractions (ex: -1/3). Déplacez-vous avec les flèches ou Tab.';
            inputArea.appendChild(hint);

        } else {
            // Saisie Scalaire / Fraction / Ensemble de racines
            const scalarWrap = document.createElement('div');
            scalarWrap.className = 'scalar-input-wrapper';

            const input = document.createElement('input');
            input.type = 'text';
            input.id = 'scalar-math-input';
            input.className = 'scalar-math-input';
            input.placeholder = this.data.placeholder || (this.data.isSet ? 'Ex: 1, -2 (séparées par une virgule)' : 'Ex: 42, -3/5, 0.25...');
            input.autocomplete = 'off';

            const preview = document.createElement('div');
            preview.id = 'fraction-live-preview';
            preview.className = 'fraction-live-preview';

            input.addEventListener('input', () => {
                if (this.data.isSet || this.data.subType === 'set') {
                    preview.innerHTML = `Interprété comme ensemble : <strong>{ ${input.value.trim()} }</strong>`;
                    return;
                }
                const frac = window.MathEval.parseFraction(input.value);
                if (frac && frac.den !== 1) {
                    preview.innerHTML = `Interprété : <strong>${frac.num}/${frac.den}</strong> (≈ ${frac.value.toFixed(4)})`;
                } else if (frac) {
                    preview.innerHTML = `Interprété : <strong>${frac.num}</strong>`;
                } else {
                    preview.innerHTML = '';
                }
            });

            // Validation automatique sur appui sur la touche Entrée
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const valBtn = document.getElementById('workout-validate-btn');
                    if (valBtn && !valBtn.classList.contains('hidden')) {
                        valBtn.click();
                    }
                }
            });

            scalarWrap.appendChild(input);
            scalarWrap.appendChild(preview);
            inputArea.appendChild(scalarWrap);
        }

        card.appendChild(inputArea);
        container.appendChild(card);

        // Focus immédiat
        setTimeout(() => {
            const firstInput = card.querySelector('input');
            if (firstInput) firstInput.focus();
        }, 50);

        if (window.renderMath) window.renderMath([card]);
    }

    getUserAnswer() {
        if (this.data.subType === 'matrix' || Array.isArray(this.data.expectedMatrix)) {
            const inputs = document.querySelectorAll('.matrix-cell-input');
            const rows = this.data.rows || this.data.expectedMatrix.length;
            const cols = this.data.cols || this.data.expectedMatrix[0].length;
            const matrix = Array.from({ length: rows }, () => Array(cols).fill(''));

            inputs.forEach(inp => {
                const r = Number(inp.dataset.row);
                const c = Number(inp.dataset.col);
                matrix[r][c] = inp.value.trim();
            });
            return matrix;
        } else {
            const inp = document.getElementById('scalar-math-input');
            return inp ? inp.value.trim() : '';
        }
    }

    validate() {
        const userAnswer = this.getUserAnswer();
        const tolerance = this.data.tolerance || 1e-6;

        let isCorrect = false;

        if (this.data.subType === 'matrix' || Array.isArray(this.data.expectedMatrix)) {
            isCorrect = window.MathEval.areMatricesEquivalent(userAnswer, this.data.expectedMatrix, tolerance);
        } else if (this.data.subType === 'set' || this.data.isSet) {
            isCorrect = window.MathEval.areSetsEquivalent(userAnswer, this.data.correctAnswer, tolerance);
        } else {
            isCorrect = window.MathEval.areNumbersEquivalent(userAnswer, this.data.correctAnswer, tolerance);
        }

        let diagnostic = null;
        if (!isCorrect) {
            diagnostic = window.DiagnosticEngine ? window.DiagnosticEngine.analyze(this.data, userAnswer) : {
                category: { icon: '🧮', label: 'Calcul inexact' },
                specificReason: `La valeur saisie (${typeof userAnswer === 'object' ? JSON.stringify(userAnswer) : userAnswer}) ne correspond pas au résultat mathématique attendu.`,
                remediationHint: 'Vérifiez les signes et les étapes de réduction.'
            };
        }

        return {
            isCorrect,
            userAnswer,
            diagnostic,
            explanation: this.data.explanation,
            correctAnswerDisplay: this.getExpectedDisplay()
        };
    }

    getExpectedDisplay() {
        if (Array.isArray(this.data.expectedMatrix)) {
            const rows = this.data.expectedMatrix.map(r => r.join(' & ')).join(' \\\\ ');
            return `$\\begin{pmatrix} ${rows} \\end{pmatrix}$`;
        }
        if (this.data.isSet || this.data.subType === 'set') {
            return `$\\{ ${this.data.correctAnswer} \\}$`;
        }
        return `$${this.data.correctAnswer}$`;
    }

    displayFeedback(container, res) {
        const feedbackBox = document.createElement('div');
        feedbackBox.className = `feedback-banner ${res.isCorrect ? 'success' : 'danger'}`;

        const xpAmount = res.xpEarned || 25;

        if (res.isCorrect) {
            feedbackBox.innerHTML = `
                <div class="feedback-header">
                    <span>✅ Excellent ! Calcul rigoureux et exact.</span>
                    <span class="xp-earned-badge">+${xpAmount} XP</span>
                </div>
                <div class="feedback-body">${this.data.explanation || ''}</div>
            `;
        } else {
            feedbackBox.innerHTML = `
                <div class="feedback-header">❌ Résultat incorrect</div>
                <div class="diagnostic-box">
                    <span class="diagnostic-badge">${res.diagnostic.category.icon} ${res.diagnostic.category.label}</span>
                    <p class="diagnostic-text">${res.diagnostic.specificReason}</p>
                    <p class="diagnostic-hint">💡 <em>${res.diagnostic.remediationHint}</em></p>
                </div>
                <div class="feedback-correction">
                    <strong>Valeur exacte attendue :</strong> ${res.correctAnswerDisplay}
                </div>
                <div class="feedback-body">${this.data.explanation || ''}</div>
            `;
        }

        container.appendChild(feedbackBox);
        if (window.renderMath) window.renderMath([feedbackBox]);
    }
}

if (typeof window !== 'undefined') {
    window.NumericExercise = NumericExercise;
    window.ExerciseRegistry.register('numeric_input', NumericExercise);
    window.ExerciseRegistry.register('matrix_input', NumericExercise);
}
