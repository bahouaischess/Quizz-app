// ============================================================================
// CodeExercise - Exercice de programmation active avec éditeur et tests unitaires
// ============================================================================

class CodeExercise extends ExerciseBase {
    render(container) {
        container.innerHTML = '';

        const card = document.createElement('div');
        card.className = 'exercise-card code-exercise';

        const lang = this.data.language || 'python';
        const initialCode = this.data.initialCode || (lang === 'python' ? `def ${this.data.functionName || 'solution'}():\n    # Écris ton code ici\n    pass\n` : '#include <stdio.h>\n\nint main() {\n    // Écris ton code C ici\n    return 0;\n}\n');

        card.innerHTML = `
            <div class="code-exercise-header">
                <span class="lang-badge ${lang}">${lang === 'python' ? '🐍 Python' : '⚙️ Langage C'}</span>
                <h3 class="exercise-title">${this.data.q}</h3>
            </div>
            
            <div class="code-description-box">
                <p>${this.data.description || 'Complétez la fonction pour satisfaire les tests unitaires indiqués.'}</p>
                ${this.data.example ? `<pre class="code-example">${this.data.example}</pre>` : ''}
            </div>

            <div class="code-editor-wrapper">
                <div class="editor-toolbar">
                    <span>Éditeur de code</span>
                    <button type="button" class="run-code-btn" id="btn-run-code">▶ Tester le code</button>
                </div>
                <textarea class="code-textarea" id="code-input-area" spellcheck="false">${initialCode}</textarea>
            </div>

            <div class="code-output-console hidden" id="code-console-output">
                <div class="console-title">Console de sortie (stdout / tests) :</div>
                <div class="console-body" id="console-body-text"></div>
            </div>

            <div class="test-cases-table" id="test-cases-table">
                <div class="tests-header">Cas de tests prévus :</div>
                <div class="tests-list" id="tests-list-container">
                    ${(this.data.testCases || []).map((tc, idx) => `
                        <div class="test-row" id="test-row-${idx}">
                            <span class="test-name">Test ${idx + 1} ${tc.description ? `(${tc.description})` : ''} :</span>
                            <code>${tc.input ? JSON.stringify(tc.input) : ''} → ${JSON.stringify(tc.expected)}</code>
                            <span class="test-status-pill pending" id="test-pill-${idx}">En attente</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        const textarea = card.querySelector('#code-input-area');
        // Support de la touche Tab dans l'éditeur de code
        textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = textarea.selectionStart;
                const end = textarea.selectionEnd;
                textarea.value = textarea.value.substring(0, start) + '    ' + textarea.value.substring(end);
                textarea.selectionStart = textarea.selectionEnd = start + 4;
            }
        });

        // Bouton Exécuter / Tester
        card.querySelector('#btn-run-code').addEventListener('click', async () => {
            await this.executeCodeInteractive(card);
        });

        container.appendChild(card);
        this.cardRef = card;
    }

    async executeCodeInteractive(card) {
        const code = card.querySelector('#code-input-area').value;
        const consoleOutput = card.querySelector('#code-console-output');
        const consoleBody = card.querySelector('#console-body-text');
        consoleOutput.classList.remove('hidden');
        consoleBody.textContent = 'Exécution en cours...';

        const lang = this.data.language || 'python';
        let res;

        if (lang === 'python') {
            res = await window.CodeRunner.runPython(code, this.data.testCases || [], this.data.functionName);
        } else {
            res = window.CodeRunner.runC(code);
        }

        this.lastRunResult = res;

        // Mise à jour de la console
        if (res.stderr) {
            consoleBody.innerHTML = `<span class="console-error">${res.stderr}</span>`;
        } else {
            consoleBody.innerHTML = `<span class="console-stdout">${res.stdout || 'Programme exécuté sans sortie texte.'}</span>`;
        }

        // Mise à jour des badges de tests
        if (res.details) {
            res.details.forEach((tc, idx) => {
                const pill = card.querySelector(`#test-pill-${idx}`);
                if (pill) {
                    pill.className = `test-status-pill ${tc.isPass ? 'pass' : 'fail'}`;
                    pill.textContent = tc.isPass ? '✓ Succès' : '✗ Échec';
                }
            });
        }
    }

    getUserAnswer() {
        const textarea = document.getElementById('code-input-area');
        return textarea ? textarea.value.trim() : '';
    }

    validate() {
        const code = this.getUserAnswer();
        if (!code) return { error: 'Veuillez écrire du code avant de valider.' };

        // Si l'utilisateur n'a pas cliqué sur Tester, on exécute
        const res = this.lastRunResult;
        const isCorrect = Boolean(res && res.isSuccess);

        let diagnostic = null;
        if (!isCorrect) {
            diagnostic = {
                category: window.DiagnosticEngine.CATEGORIES.CODE_MEMORY_MODEL,
                specificReason: res?.stderr ? `Erreur lors de l'exécution : ${res.stderr}` : "Certains cas de tests unitaires ont échoué.",
                remediationHint: "Vérifie les cas limites (listes vides, indices, types).",
                remediationConcept: 'Algorithmique & Code'
            };
        }

        return {
            isCorrect,
            code,
            lastRunResult: res,
            diagnostic,
            explanation: this.data.explanation || 'Compare ta solution avec l’implémentation optimale fournie.'
        };
    }

    displayFeedback(container, res) {
        const feedbackBox = document.createElement('div');
        feedbackBox.className = `feedback-banner ${res.isCorrect ? 'success' : 'danger'}`;

        if (res.isCorrect) {
            feedbackBox.innerHTML = `
                <div class="feedback-header">✅ Bravo ! Tous les tests unitaires sont validés.</div>
                <div class="feedback-body">${this.data.explanation || ''}</div>
                ${this.data.solutionCode ? `<pre class="code-example solution"><code>${this.data.solutionCode}</code></pre>` : ''}
            `;
        } else {
            feedbackBox.innerHTML = `
                <div class="feedback-header">❌ Code non validé</div>
                <div class="diagnostic-box">
                    <span class="diagnostic-badge">💻 Erreur de Code</span>
                    <p class="diagnostic-text">${res.diagnostic.specificReason}</p>
                    <p class="diagnostic-hint">💡 <em>${res.diagnostic.remediationHint}</em></p>
                </div>
                <div class="feedback-body">${this.data.explanation || ''}</div>
            `;
        }

        container.appendChild(feedbackBox);
    }
}

if (typeof window !== 'undefined') {
    window.CodeExercise = CodeExercise;
    window.ExerciseRegistry.register('code_exercise', CodeExercise);
}
