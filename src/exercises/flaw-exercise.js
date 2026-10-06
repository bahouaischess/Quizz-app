// ============================================================================
// FlawExercise - Entraînement critique : détection d'erreurs et qualification
// ============================================================================

class FlawExercise extends ExerciseBase {
    render(container) {
        container.innerHTML = '';

        const card = document.createElement('div');
        card.className = 'exercise-card flaw-exercise';

        const header = document.createElement('div');
        header.className = 'flaw-header';
        header.innerHTML = `
            <div class="flaw-badge">🔍 Analyse Critique • Spot-the-Flaw</div>
            <h3 class="exercise-title">${this.data.q}</h3>
            <p class="flaw-instruction">Clique sur l’étape contenant une erreur, ou choisis « Raisonnement entièrement valide ».</p>
        `;
        card.appendChild(header);

        // Liste des étapes interactives
        const stepsContainer = document.createElement('div');
        stepsContainer.className = 'flaw-steps-container';

        this.data.steps.forEach((step, idx) => {
            const stepRow = document.createElement('div');
            stepRow.className = 'flaw-step-row';
            stepRow.dataset.stepId = step.id || (idx + 1);
            stepRow.innerHTML = `
                <div class="step-num-badge">Étape ${idx + 1}</div>
                <div class="step-text">${step.text}</div>
                <div class="step-flaw-tag">Sélectionner</div>
            `;

            stepRow.addEventListener('click', () => {
                stepsContainer.querySelectorAll('.flaw-step-row').forEach(r => r.classList.remove('selected'));
                document.getElementById('no-flaw-btn')?.classList.remove('selected');
                stepRow.classList.add('selected');
                this.showFlawCategorySelector(card);
            });

            stepsContainer.appendChild(stepRow);
        });

        // Bouton : Le raisonnement est sans erreur
        const noFlawBtn = document.createElement('button');
        noFlawBtn.type = 'button';
        noFlawBtn.id = 'no-flaw-btn';
        noFlawBtn.className = 'no-flaw-button';
        noFlawBtn.innerHTML = `<span>🛡️</span> Ce raisonnement est rigoureux et ne contient aucune erreur`;
        noFlawBtn.addEventListener('click', () => {
            stepsContainer.querySelectorAll('.flaw-step-row').forEach(r => r.classList.remove('selected'));
            noFlawBtn.classList.add('selected');
            const catArea = document.getElementById('flaw-category-area');
            if (catArea) catArea.classList.add('hidden');
        });
        stepsContainer.appendChild(noFlawBtn);

        card.appendChild(stepsContainer);

        // Zone conditionnelle pour qualifier la cause de l'erreur (si étape sélectionnée)
        const catArea = document.createElement('div');
        catArea.id = 'flaw-category-area';
        catArea.className = 'flaw-category-area hidden';
        card.appendChild(catArea);

        container.appendChild(card);
        if (window.renderMath) window.renderMath([card]);
    }

    showFlawCategorySelector(card) {
        const catArea = card.querySelector('#flaw-category-area');
        if (!catArea) return;

        catArea.classList.remove('hidden');
        catArea.innerHTML = `
            <div class="category-prompt"><strong>Pourquoi cette étape est-elle incorrecte ?</strong></div>
            <div class="category-options-grid" id="flaw-cat-options"></div>
        `;

        const optionsContainer = catArea.querySelector('#flaw-cat-options');
        const options = this.data.flawOptions || [
            { text: "Hypothèse de théorème manquante ou non vérifiée", id: 'omitted_hypothesis' },
            { text: "Erreur de calcul ou de signe", id: 'calculation_error' },
            { text: "Confusion entre deux notions ou définitions", id: 'definition_confusion' },
            { text: "Implication fausse / conclusion prématurée", id: 'incomplete_reasoning' }
        ];

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'cat-option-btn';
            btn.dataset.id = opt.id;
            btn.textContent = opt.text;

            btn.addEventListener('click', () => {
                optionsContainer.querySelectorAll('.cat-option-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
            });

            optionsContainer.appendChild(btn);
        });

        if (window.renderMath) window.renderMath([catArea]);
    }

    getUserAnswer() {
        const selectedStep = document.querySelector('.flaw-step-row.selected');
        const noFlawSelected = document.getElementById('no-flaw-btn')?.classList.contains('selected');
        const selectedCat = document.querySelector('.cat-option-btn.selected')?.dataset.id;

        return {
            stepId: noFlawSelected ? 0 : (selectedStep ? Number(selectedStep.dataset.stepId) : null),
            categoryId: selectedCat || null
        };
    }

    validate() {
        const ans = this.getUserAnswer();
        if (ans.stepId === null) {
            return { error: 'Sélectionne l’étape contenant une erreur ou indique que le raisonnement est valide.' };
        }

        const expectedStepId = Number(this.data.flawStepId || 0);
        const isStepCorrect = (ans.stepId === expectedStepId);

        let isCategoryCorrect = true;
        if (expectedStepId !== 0 && this.data.flawCategory) {
            isCategoryCorrect = (ans.categoryId === this.data.flawCategory);
        }

        const isCorrect = isStepCorrect && isCategoryCorrect;
        const isPartial = isStepCorrect && !isCategoryCorrect;

        let diagnostic = null;
        if (!isCorrect) {
            diagnostic = window.DiagnosticEngine.analyze(this.data, ans.categoryId);
            if (!isStepCorrect) {
                diagnostic.specificReason = `L'erreur ne se situait pas à cette étape. L'étape fautive était l'étape ${expectedStepId}.`;
            }
        }

        return {
            isCorrect,
            isPartial,
            userAnswer: ans,
            expectedStepId,
            diagnostic,
            explanation: this.data.explanation || this.data.remediation
        };
    }

    displayFeedback(container, res) {
        // Mettre en évidence les étapes
        container.querySelectorAll('.flaw-step-row').forEach(row => {
            const stepId = Number(row.dataset.stepId);
            if (stepId === res.expectedStepId) {
                row.classList.add('actual-flaw');
            }
        });

        const feedbackBox = document.createElement('div');
        feedbackBox.className = `feedback-banner ${res.isCorrect ? 'success' : (res.isPartial ? 'warning' : 'danger')}`;

        if (res.isCorrect) {
            feedbackBox.innerHTML = `
                <div class="feedback-header">✅ Parfait ! Erreur démasquée et qualifiée avec rigueur.</div>
                <div class="feedback-body">${res.explanation || ''}</div>
            `;
        } else if (res.isPartial) {
            feedbackBox.innerHTML = `
                <div class="feedback-header">⚠️ Bonne étape repérée, mais mauvaise qualification !</div>
                <div class="diagnostic-box">
                    <p class="diagnostic-text">Tu as bien localisé l'erreur à l'étape ${res.expectedStepId}, mais la cause n'était pas celle-ci.</p>
                </div>
                <div class="feedback-body">${res.explanation || ''}</div>
            `;
        } else {
            feedbackBox.innerHTML = `
                <div class="feedback-header">❌ Diagnostic erroné</div>
                <div class="diagnostic-box">
                    <span class="diagnostic-badge">${res.diagnostic.category.icon} ${res.diagnostic.category.label}</span>
                    <p class="diagnostic-text">${res.diagnostic.specificReason}</p>
                    <p class="diagnostic-hint">💡 <em>${res.diagnostic.remediationHint}</em></p>
                </div>
                <div class="feedback-body">${res.explanation || ''}</div>
            `;
        }

        container.appendChild(feedbackBox);
        if (window.renderMath) window.renderMath([container]);
    }
}

if (typeof window !== 'undefined') {
    window.FlawExercise = FlawExercise;
    window.ExerciseRegistry.register('spot_the_flaw', FlawExercise);
}
