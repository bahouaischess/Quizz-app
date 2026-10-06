// ============================================================================
// NextStepExercise - Entraînement à la stratégie de résolution et au choix d'étape
// ============================================================================

class NextStepExercise extends ExerciseBase {
    render(container) {
        container.innerHTML = '';

        const card = document.createElement('div');
        card.className = 'exercise-card next-step-exercise';

        // En-tête : Contexte et énoncé initial
        const header = document.createElement('div');
        header.className = 'next-step-header';
        header.innerHTML = `
            <div class="next-step-badge">🧭 Stratégie de Résolution • Next-Step</div>
            <h3 class="exercise-title">${this.data.q}</h3>
        `;
        card.appendChild(header);

        // Bloc : État actuel de la résolution (Current Work)
        if (this.data.currentWork) {
            const workBox = document.createElement('div');
            workBox.className = 'current-work-box';
            workBox.innerHTML = `
                <div class="work-label">📌 Raisonnement déjà entamé :</div>
                <div class="work-content">${this.data.currentWork}</div>
            `;
            card.appendChild(workBox);
        }

        // Question stratégique
        const questionPrompt = document.createElement('div');
        questionPrompt.className = 'strategic-prompt';
        questionPrompt.innerHTML = `<strong>Quelle est la meilleure prochaine étape ?</strong>`;
        card.appendChild(questionPrompt);

        // Liste des choix d'étapes
        const optionsList = document.createElement('div');
        optionsList.className = 'step-options-list';

        this.data.options.forEach((opt, idx) => {
            const optBtn = document.createElement('button');
            optBtn.type = 'button';
            optBtn.className = 'step-option-card';
            optBtn.dataset.index = idx;
            optBtn.innerHTML = `
                <div class="step-option-indicator">${String.fromCharCode(65 + idx)}</div>
                <div class="step-option-text">${opt.text}</div>
            `;

            optBtn.addEventListener('click', () => {
                optionsList.querySelectorAll('.step-option-card').forEach(b => b.classList.remove('selected'));
                optBtn.classList.add('selected');
            });

            optionsList.appendChild(optBtn);
        });

        card.appendChild(optionsList);
        container.appendChild(card);

        if (window.renderMath) window.renderMath([card]);
    }

    getUserAnswer() {
        const selected = document.querySelector('.step-option-card.selected');
        return selected ? Number(selected.dataset.index) : null;
    }

    validate() {
        const selectedIdx = this.getUserAnswer();
        if (selectedIdx === null) {
            return { error: 'Veuillez sélectionner une étape.' };
        }

        const chosenOption = this.data.options[selectedIdx];
        const isCorrect = Boolean(chosenOption && chosenOption.isCorrect);

        let diagnostic = null;
        if (!isCorrect) {
            diagnostic = window.DiagnosticEngine.analyze(this.data, selectedIdx);
            if (!diagnostic.specificReason && chosenOption.rationale) {
                diagnostic.specificReason = chosenOption.rationale;
            }
        }

        return {
            isCorrect,
            selectedIdx,
            chosenOption,
            diagnostic,
            explanation: this.data.explanation
        };
    }

    displayFeedback(container, res) {
        // Désactiver les options et colorer
        const buttons = container.querySelectorAll('.step-option-card');
        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            const opt = this.data.options[idx];
            if (opt.isCorrect) {
                btn.classList.add('correct');
            } else if (idx === res.selectedIdx) {
                btn.classList.add('wrong');
            }
        });

        const feedbackBox = document.createElement('div');
        feedbackBox.className = `feedback-banner ${res.isCorrect ? 'success' : 'danger'}`;

        if (res.isCorrect) {
            feedbackBox.innerHTML = `
                <div class="feedback-header">✅ Excellent choix stratégique !</div>
                <p class="rationale-text">${res.chosenOption?.rationale || 'Cette étape permet de progresser directement sans calculs superflus.'}</p>
                <div class="feedback-body">${this.data.explanation || ''}</div>
            `;
        } else {
            feedbackBox.innerHTML = `
                <div class="feedback-header">⚠️ Étape non recommandée ou prématurée</div>
                <div class="diagnostic-box">
                    <span class="diagnostic-badge">${res.diagnostic?.category?.icon || '⚠️'} ${res.diagnostic?.category?.label || 'Raisonnement'}</span>
                    <p class="diagnostic-text">${res.chosenOption?.rationale || res.diagnostic?.specificReason || 'Déduction prématurée.'}</p>
                    <p class="diagnostic-hint">💡 <em>${res.diagnostic?.remediationHint || 'Revoyez les théorèmes applicables.'}</em></p>
                </div>
                <div class="feedback-body">${this.data.explanation || ''}</div>
            `;
        }

        container.appendChild(feedbackBox);
        if (window.renderMath) window.renderMath([container]);
    }
}

if (typeof window !== 'undefined') {
    window.NextStepExercise = NextStepExercise;
    window.ExerciseRegistry.register('next_step', NextStepExercise);
}
