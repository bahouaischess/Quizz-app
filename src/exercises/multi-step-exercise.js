// ============================================================================
// MultiStepExercise - Moteur d'Exercices et Problèmes Multi-Étapes Guidés
// Permet de résoudre un problème universitaire étape par étape.
// En cas d'erreur sur une étape, le système diagnostique l'erreur, fournit la
// correction et permet de continuer les étapes suivantes sans bloquer.
// ============================================================================

class MultiStepExercise extends ExerciseBase {
    constructor(exerciseData) {
        super(exerciseData);
        this.steps = exerciseData.steps || [];
        this.currentStepIndex = 0;
        this.stepResults = []; // { stepIndex, isCorrect, userAnswer, expectedAnswer, points }
        this.isProblemCompleted = false;
    }

    render(container) {
        container.innerHTML = '';

        const card = document.createElement('div');
        card.className = 'exercise-card multi-step-card';
        card.id = 'current-multi-step-exercise';

        // 1. En-tête du problème
        const header = document.createElement('div');
        header.className = 'exercise-header multi-step-header';
        header.innerHTML = `
            <div class="multi-step-title-wrap">
                <span class="exercise-badge">PROBLÈME GUIDÉ</span>
                <span class="exercise-difficulty-badge">Niveau ${this.data.difficulty || 5}</span>
                <span class="exercise-xp-badge">+${this.data.xp || 60} XP max</span>
            </div>
            <h3 class="multi-step-main-title">${this.data.title || 'Problème de Synthèse'}</h3>
            <div class="multi-step-intro">${this.data.intro || this.data.q || ''}</div>
        `;
        card.appendChild(header);

        // 2. Fil d'Ariane / Stepper des étapes
        const stepper = document.createElement('div');
        stepper.className = 'multi-step-stepper';
        stepper.id = 'multi-step-stepper';
        this.renderStepper(stepper);
        card.appendChild(stepper);

        // 3. Zone de l'étape courante
        const stepArea = document.createElement('div');
        stepArea.className = 'multi-step-content-area';
        stepArea.id = 'multi-step-active-content';
        card.appendChild(stepArea);

        container.appendChild(card);

        this.renderActiveStep(stepArea);

        if (window.renderMath) window.renderMath([card]);
    }

    renderStepper(stepperContainer) {
        stepperContainer.innerHTML = '';
        this.steps.forEach((step, idx) => {
            const stepResult = this.stepResults[idx];
            const pill = document.createElement('div');
            let statusClass = 'pending';
            let icon = `${idx + 1}`;

            if (idx === this.currentStepIndex) {
                statusClass = 'active';
            } else if (stepResult) {
                if (stepResult.isCorrect) {
                    statusClass = 'success';
                    icon = '✓';
                } else {
                    statusClass = 'corrected';
                    icon = '⚠️';
                }
            }

            pill.className = `stepper-pill ${statusClass}`;
            pill.innerHTML = `
                <span class="stepper-num">${icon}</span>
                <span class="stepper-label">${step.shortLabel || `Étape ${idx + 1}`}</span>
            `;
            stepperContainer.appendChild(pill);
        });
    }

    renderActiveStep(container) {
        container.innerHTML = '';
        const step = this.steps[this.currentStepIndex];
        if (!step) return;

        const stepBox = document.createElement('div');
        stepBox.className = 'active-step-box';

        stepBox.innerHTML = `
            <div class="step-badge-row">
                <span class="step-counter">Étape ${this.currentStepIndex + 1} sur ${this.steps.length}</span>
                <span class="step-title-text"><strong>${step.title || ''}</strong></span>
            </div>
            <div class="step-instruction">${step.instruction || step.q || ''}</div>
        `;

        // Zone de saisie selon le type
        const inputWrap = document.createElement('div');
        inputWrap.className = 'step-input-wrap';

        if (step.type === 'choice' && Array.isArray(step.options)) {
            // Choix guidé
            const optionsGrid = document.createElement('div');
            optionsGrid.className = 'step-options-grid';
            step.options.forEach((opt, optIdx) => {
                const optBtn = document.createElement('button');
                optBtn.type = 'button';
                optBtn.className = 'step-option-btn';
                optBtn.innerHTML = `<strong>${String.fromCharCode(65 + optIdx)}.</strong> ${opt.text || opt}`;
                optBtn.onclick = () => {
                    optionsGrid.querySelectorAll('.step-option-btn').forEach(b => b.classList.remove('selected'));
                    optBtn.classList.add('selected');
                    optBtn.dataset.selected = 'true';
                };
                optionsGrid.appendChild(optBtn);
            });
            inputWrap.appendChild(optionsGrid);
        } else {
            // Saisie mathématique (scalaire, fraction, ensemble)
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.className = 'scalar-math-input step-input-field';
            inputField.id = `step-input-${this.currentStepIndex}`;
            inputField.placeholder = step.placeholder || (step.isSet ? 'Ex: 1, -2 (séparées par une virgule)' : 'Ex: 42, -3/5...');
            inputField.autocomplete = 'off';

            const preview = document.createElement('div');
            preview.className = 'fraction-live-preview';
            preview.id = 'step-fraction-preview';

            inputField.addEventListener('input', () => {
                if (step.isSet || step.subType === 'set') {
                    preview.innerHTML = `Ensemble : <strong>{ ${inputField.value.trim()} }</strong>`;
                } else if (window.MathEval) {
                    const frac = window.MathEval.parseFraction(inputField.value);
                    if (frac && frac.den !== 1) {
                        preview.innerHTML = `Interprété : <strong>${frac.num}/${frac.den}</strong> (≈ ${frac.value.toFixed(4)})`;
                    } else if (frac) {
                        preview.innerHTML = `Interprété : <strong>${frac.num}</strong>`;
                    } else {
                        preview.innerHTML = '';
                    }
                }
            });

            inputField.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.submitCurrentStep();
                }
            });

            inputWrap.appendChild(inputField);
            inputWrap.appendChild(preview);

            setTimeout(() => inputField.focus(), 50);
        }

        stepBox.appendChild(inputWrap);

        // Bouton de validation de l'étape
        const stepActions = document.createElement('div');
        stepActions.className = 'step-actions-row';
        stepActions.innerHTML = `
            <button type="button" class="btn btn-primary step-validate-btn" id="btn-validate-step">
                ✓ Valider l'étape ${this.currentStepIndex + 1}
            </button>
        `;

        stepBox.appendChild(stepActions);

        // Zone de feedback d'étape
        const stepFeedback = document.createElement('div');
        stepFeedback.id = 'step-feedback-container';
        stepBox.appendChild(stepFeedback);

        container.appendChild(stepBox);

        const validateBtn = stepBox.querySelector('#btn-validate-step');
        if (validateBtn) {
            validateBtn.onclick = () => this.submitCurrentStep();
        }

        if (window.renderMath) window.renderMath([stepBox]);
    }

    getUserAnswer() {
        const step = this.steps[this.currentStepIndex];
        if (!step) return null;

        if (step.type === 'choice') {
            const selected = document.querySelector('.step-option-btn.selected');
            return selected ? selected.innerText.trim() : null;
        }

        const inputField = document.getElementById(`step-input-${this.currentStepIndex}`);
        return inputField ? inputField.value.trim() : null;
    }

    submitCurrentStep() {
        const step = this.steps[this.currentStepIndex];
        const val = this.getUserAnswer();

        if (val === null || val === '') {
            if (window.customAlert) window.customAlert('Attention', 'Veuillez saisir une réponse avant de valider l\'étape.');
            return;
        }

        let isCorrect = false;

        if (step.type === 'choice') {
            const selectedBtn = document.querySelector('.step-option-btn.selected');
            const selectedIndex = Array.from(selectedBtn?.parentNode?.children || []).indexOf(selectedBtn);
            if (step.correctOptionIndex !== undefined) {
                isCorrect = selectedIndex === step.correctOptionIndex;
            } else if (step.correctAnswer !== undefined) {
                isCorrect = val.includes(String(step.correctAnswer));
            }
        } else if (step.isSet || step.subType === 'set') {
            isCorrect = window.MathEval ? window.MathEval.areSetsEquivalent(val, step.correctAnswer) : (val === step.correctAnswer);
        } else {
            isCorrect = window.MathEval ? window.MathEval.areNumbersEquivalent(val, step.correctAnswer) : (val === step.correctAnswer);
        }

        this.stepResults[this.currentStepIndex] = {
            stepIndex: this.currentStepIndex,
            isCorrect,
            userAnswer: val,
            expectedAnswer: step.correctAnswer
        };

        this.displayStepFeedback(isCorrect, step, val);
    }

    displayStepFeedback(isCorrect, step, userAnswer) {
        const feedbackContainer = document.getElementById('step-feedback-container');
        const validateBtn = document.getElementById('btn-validate-step');
        if (!feedbackContainer) return;

        if (validateBtn) validateBtn.classList.add('hidden');

        const stepper = document.getElementById('multi-step-stepper');
        if (stepper) this.renderStepper(stepper);

        const isLastStep = this.currentStepIndex >= this.steps.length - 1;

        if (isCorrect) {
            feedbackContainer.innerHTML = `
                <div class="feedback-banner success">
                    <div class="feedback-header">
                        <span>✅ Étape ${this.currentStepIndex + 1} validée avec rigueur !</span>
                        <span class="xp-earned-badge">+${Math.round((this.data.xp || 60) / this.steps.length)} XP</span>
                    </div>
                    <div class="feedback-body">${step.explanation || ''}</div>
                    <div class="step-next-action" style="margin-top:15px; text-align:right;">
                        <button type="button" class="btn btn-primary" id="btn-next-step">
                            ${isLastStep ? '🏆 Conclure le problème →' : `Passer à l'étape ${this.currentStepIndex + 2} →`}
                        </button>
                    </div>
                </div>
            `;
        } else {
            // Reprise pédagogique sans blocage
            const expectedDisplay = step.expectedDisplay || step.correctAnswer;
            feedbackContainer.innerHTML = `
                <div class="feedback-banner danger">
                    <div class="feedback-header">
                        <span>⚠️ Étape ${this.currentStepIndex + 1} : Résultat inexact</span>
                    </div>
                    <div class="feedback-correction">
                        <strong>Valeur exacte retenue :</strong> $${expectedDisplay}$
                    </div>
                    <div class="feedback-body">${step.explanation || ''}</div>
                    <div class="remediation-continuation-note" style="margin: 12px 0; padding: 10px; background: rgba(99, 102, 241, 0.1); border-left: 3px solid #6366f1; border-radius: 6px; font-size: 0.9em;">
                        💡 <em>Pour vous permettre de continuer l'exercice et de travailler le raisonnement suivant, le problème utilise la valeur exacte ci-dessus pour la suite.</em>
                    </div>
                    <div class="step-next-action" style="margin-top:15px; text-align:right;">
                        <button type="button" class="btn btn-secondary" id="btn-next-step">
                            ${isLastStep ? '🏆 Conclure le problème →' : `Poursuivre avec l'étape ${this.currentStepIndex + 2} →`}
                        </button>
                    </div>
                </div>
            `;
        }

        const nextBtn = feedbackContainer.querySelector('#btn-next-step');
        if (nextBtn) {
            nextBtn.focus();
            nextBtn.onclick = () => {
                if (isLastStep) {
                    this.completeProblem();
                } else {
                    this.currentStepIndex++;
                    const stepArea = document.getElementById('multi-step-active-content');
                    if (stepArea) this.renderActiveStep(stepArea);
                    const st = document.getElementById('multi-step-stepper');
                    if (st) this.renderStepper(st);
                }
            };
        }

        if (window.renderMath) window.renderMath([feedbackContainer]);
    }

    completeProblem() {
        this.isProblemCompleted = true;
        const correctCount = this.stepResults.filter(r => r.isCorrect).length;
        const total = this.steps.length;
        const successRate = correctCount / total;

        const valBtn = document.getElementById('workout-validate-btn');
        if (valBtn) valBtn.click();
    }

    validate() {
        const correctCount = this.stepResults.filter(r => r && r.isCorrect).length;
        const total = Math.max(1, this.steps.length);
        const ratio = correctCount / total;

        const isCorrect = ratio >= 0.75;
        const isPartial = ratio >= 0.5 && ratio < 0.75;

        return {
            isCorrect,
            isPartial,
            score: ratio,
            correctCount,
            totalSteps: total,
            stepResults: this.stepResults,
            explanation: this.data.conclusion || 'Problème multi-étapes résolu.'
        };
    }

    displayFeedback(container, res) {
        const finalBox = document.createElement('div');
        finalBox.className = `feedback-banner ${res.isCorrect ? 'success' : res.isPartial ? 'warning' : 'danger'}`;
        finalBox.innerHTML = `
            <div class="feedback-header">
                <span>🏆 Bilan du Problème : ${res.correctCount} / ${res.totalSteps} étapes réussies</span>
                <span class="xp-earned-badge">+${res.xpEarned || 50} XP</span>
            </div>
            <p>${this.data.conclusion || 'Bravo pour votre persévérance sur l\'ensemble du raisonnement !'}</p>
        `;
        container.appendChild(finalBox);
        if (window.renderMath) window.renderMath([finalBox]);
    }
}

if (typeof window !== 'undefined') {
    window.MultiStepExercise = MultiStepExercise;
    if (window.ExerciseRegistry) {
        window.ExerciseRegistry.register('multi_step', MultiStepExercise);
        window.ExerciseRegistry.register('multi_step_problem', MultiStepExercise);
    }
}
