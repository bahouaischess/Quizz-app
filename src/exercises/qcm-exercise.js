// ============================================================================
// QcmExercise - QCM optimisé avec détection d'erreurs et support multi-options
// ============================================================================

class QcmExercise extends ExerciseBase {
    render(container) {
        container.innerHTML = '';

        const card = document.createElement('div');
        card.className = 'exercise-card qcm-exercise';

        const promptEl = document.createElement('div');
        promptEl.className = 'exercise-prompt';
        promptEl.innerHTML = `<h3 class="exercise-title">${this.data.q}</h3>`;
        card.appendChild(promptEl);

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'qcm-options-container';

        const correctCount = (this.data.options || []).filter(o => o.isCorrect).length;
        const inputType = correctCount > 1 ? 'checkbox' : 'radio';

        // Mélange des options pour éviter le biais de mémorisation de position
        const shuffled = (this.data.options || []).map((opt, i) => ({ ...opt, originalIndex: i }));
        // Note: shuffle déterministe ou simple
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        this.currentShuffled = shuffled;

        shuffled.forEach((opt, idx) => {
            const label = document.createElement('label');
            label.className = 'qcm-option-card';
            label.innerHTML = `
                <input type="${inputType}" name="qcm_choice" value="${opt.originalIndex}" data-shuffled-index="${idx}">
                <div class="qcm-option-marker">${String.fromCharCode(65 + idx)}</div>
                <div class="qcm-option-label">${opt.text}</div>
            `;

            label.querySelector('input').addEventListener('change', () => {
                if (inputType === 'radio') {
                    optionsDiv.querySelectorAll('.qcm-option-card').forEach(l => l.classList.remove('selected'));
                    label.classList.add('selected');
                } else {
                    label.classList.toggle('selected', label.querySelector('input').checked);
                }
            });

            optionsDiv.appendChild(label);
        });

        card.appendChild(optionsDiv);
        container.appendChild(card);

        if (window.renderMath) window.renderMath([card]);
    }

    getUserAnswer() {
        const checked = document.querySelectorAll('input[name="qcm_choice"]:checked');
        return Array.from(checked).map(c => Number(c.value));
    }

    validate() {
        const selected = this.getUserAnswer();
        if (!selected.length) {
            return { error: 'Sélectionne au moins une option.' };
        }

        const totalCorrect = this.data.options.filter(o => o.isCorrect).length;
        let correctSelected = 0;
        let wrongSelected = 0;
        let wrongChosenIndex = null;

        selected.forEach(idx => {
            if (this.data.options[idx].isCorrect) {
                correctSelected++;
            } else {
                wrongSelected++;
                wrongChosenIndex = idx;
            }
        });

        const isCorrect = (wrongSelected === 0 && correctSelected === totalCorrect);
        const isPartial = (wrongSelected === 0 && correctSelected > 0 && correctSelected < totalCorrect);

        let diagnostic = null;
        if (!isCorrect) {
            diagnostic = window.DiagnosticEngine.analyze(this.data, wrongChosenIndex !== null ? wrongChosenIndex : selected[0]);
        }

        return {
            isCorrect,
            isPartial,
            selected,
            diagnostic,
            explanation: this.data.explanation
        };
    }

    displayFeedback(container, res) {
        const inputs = container.querySelectorAll('input[name="qcm_choice"]');
        inputs.forEach(inp => {
            inp.disabled = true;
            const idx = Number(inp.value);
            const parent = inp.closest('.qcm-option-card');
            const isOptCorrect = this.data.options[idx].isCorrect;

            if (isOptCorrect) {
                parent.classList.add('correct');
            } else if (inp.checked) {
                parent.classList.add('wrong');
            }
        });

        const feedbackBox = document.createElement('div');
        feedbackBox.className = `feedback-banner ${res.isCorrect ? 'success' : (res.isPartial ? 'warning' : 'danger')}`;

        if (res.isCorrect) {
            feedbackBox.innerHTML = `
                <div class="feedback-header">✅ Réponse correcte !</div>
                <div class="feedback-body">${this.data.explanation || ''}</div>
            `;
        } else {
            feedbackBox.innerHTML = `
                <div class="feedback-header">${res.isPartial ? '⚠️ Réponse incomplète' : '❌ Réponse incorrecte'}</div>
                <div class="diagnostic-box">
                    <span class="diagnostic-badge">${res.diagnostic.category.icon} ${res.diagnostic.category.label}</span>
                    <p class="diagnostic-text">${res.diagnostic.specificReason}</p>
                    <p class="diagnostic-hint">💡 <em>${res.diagnostic.remediationHint}</em></p>
                </div>
                <div class="feedback-body">${this.data.explanation || ''}</div>
            `;
        }

        container.appendChild(feedbackBox);
        if (window.renderMath) window.renderMath([container]);
    }
}

if (typeof window !== 'undefined') {
    window.QcmExercise = QcmExercise;
    window.ExerciseRegistry.register('qcm', QcmExercise);
}
