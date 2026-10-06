// ============================================================================
// CodeTracingExercise - Traçage de variables, prédiction de sortie et mémoire C
// ============================================================================

class CodeTracingExercise extends ExerciseBase {
    render(container) {
        container.innerHTML = '';

        const card = document.createElement('div');
        card.className = 'exercise-card code-tracing-exercise';

        card.innerHTML = `
            <div class="code-tracing-header">
                <span class="tracing-badge">🔍 Analyse de Code & Mémoire</span>
                <h3 class="exercise-title">${this.data.q}</h3>
            </div>

            <div class="code-snippet-box">
                <pre class="code-snippet"><code>${this.data.codeSnippet}</code></pre>
            </div>

            <div id="tracing-memory-container" class="tracing-memory-slot"></div>

            <div class="tracing-input-zone">
                <label for="tracing-answer-input"><strong>${this.data.inputLabel || 'Votre réponse :'}</strong></label>
                <input type="text" id="tracing-answer-input" class="tracing-input" placeholder="${this.data.placeholder || 'Entrez la valeur exacte ou la sortie...'}" autocomplete="off">
            </div>
        `;

        // Si l'exercice possède un état mémoire (ex: pointeurs C)
        const memSlot = card.querySelector('#tracing-memory-container');
        if (this.data.memoryState && window.MemoryVisualizer) {
            window.MemoryVisualizer.render(memSlot, this.data.memoryState, (clickedCell) => {
                const input = card.querySelector('#tracing-answer-input');
                if (input && this.data.targetIsAddress) {
                    input.value = clickedCell.address;
                }
            });
        }

        container.appendChild(card);
        setTimeout(() => {
            const inp = card.querySelector('#tracing-answer-input');
            if (inp) inp.focus();
        }, 50);
    }

    getUserAnswer() {
        const inp = document.getElementById('tracing-answer-input');
        return inp ? inp.value.trim() : '';
    }

    validate() {
        const ans = this.getUserAnswer();
        if (!ans) return { error: 'Entrez une valeur avant de valider.' };

        // Comparaison souple (chaîne ou numérique)
        const expected = String(this.data.expectedAnswer).trim();
        const isCorrect = (ans === expected || (Number(ans) === Number(expected) && !Number.isNaN(Number(ans))));

        let diagnostic = null;
        if (!isCorrect) {
            diagnostic = {
                category: window.DiagnosticEngine.CATEGORIES.CODE_MEMORY_MODEL,
                specificReason: `Tu as répondu '${ans}', la valeur attendue était '${expected}'.`,
                remediationHint: this.data.hint || "Suis l'exécution ligne par ligne en notant l'état des variables.",
                remediationConcept: 'Traçage de Code'
            };
        }

        return {
            isCorrect,
            userAnswer: ans,
            expectedAnswer: expected,
            diagnostic,
            explanation: this.data.explanation
        };
    }

    displayFeedback(container, res) {
        const feedbackBox = document.createElement('div');
        feedbackBox.className = `feedback-banner ${res.isCorrect ? 'success' : 'danger'}`;

        if (res.isCorrect) {
            feedbackBox.innerHTML = `
                <div class="feedback-header">✅ Exact ! Traçage parfait.</div>
                <div class="feedback-body">${this.data.explanation || ''}</div>
            `;
        } else {
            feedbackBox.innerHTML = `
                <div class="feedback-header">❌ Valeur incorrecte</div>
                <div class="diagnostic-box">
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
    window.CodeTracingExercise = CodeTracingExercise;
    window.ExerciseRegistry.register('code_tracing', CodeTracingExercise);
}
