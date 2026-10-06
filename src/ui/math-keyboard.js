// ============================================================================
// MathKeyboard - Clavier Virtuel Mathématique Contextuel Mobile & Desktop
// Collapsible / Rétractable par défaut, mémorisé par session,
// compact, utilisable sans gêner l'énoncé ou les réponses.
// ============================================================================

const MathKeyboard = {
    activeInputElement: null,
    keyboardContainer: null,
    toggleBtn: null,
    isExpanded: false, // Collapsé par défaut selon l'exigence utilisateur

    STORAGE_KEY: 'math_keyboard_expanded_pref',

    init() {
        if (document.getElementById('virtual-math-keyboard')) return;

        // Récupérer la préférence utilisateur (par défaut false = rétracté)
        try {
            const saved = sessionStorage.getItem(this.STORAGE_KEY);
            if (saved !== null) {
                this.isExpanded = JSON.parse(saved);
            }
        } catch (e) {
            this.isExpanded = false;
        }

        // Création du bouton pilule flottant déclencheur "⌨ Afficher le clavier" / "− Réduire"
        const trigger = document.createElement('button');
        trigger.type = 'button';
        trigger.id = 'math-keyboard-toggle-btn';
        trigger.className = 'math-keyboard-toggle-btn';
        trigger.setAttribute('aria-expanded', this.isExpanded ? 'true' : 'false');
        trigger.innerHTML = this.isExpanded ? '<span>− Réduire le clavier</span>' : '<span>⌨ Clavier mathématique</span>';
        trigger.onclick = (e) => {
            e.preventDefault();
            this.toggle();
        };
        document.body.appendChild(trigger);
        this.toggleBtn = trigger;

        // Création du tiroir du clavier
        const kb = document.createElement('div');
        kb.id = 'virtual-math-keyboard';
        kb.className = `virtual-math-keyboard ${this.isExpanded ? 'expanded' : 'collapsed'}`;
        kb.setAttribute('aria-label', 'Clavier mathématique');

        kb.innerHTML = `
            <div class="keyboard-header">
                <span class="keyboard-title">⌨️ Clavier Mathématique Compact</span>
                <div class="keyboard-header-actions">
                    <button type="button" class="kb-header-btn" onclick="MathKeyboard.clearInput()" title="Tout effacer">Effacer</button>
                    <button type="button" class="kb-header-btn close-kb" onclick="MathKeyboard.collapse()" title="Réduire le clavier">− Réduire</button>
                </div>
            </div>
            <div class="keyboard-keys-grid">
                <!-- Ligne 1 : Opérations fondamentales -->
                <button type="button" class="kb-key op" data-insert="+">+</button>
                <button type="button" class="kb-key op" data-insert="-">−</button>
                <button type="button" class="kb-key op" data-insert="*">×</button>
                <button type="button" class="kb-key op" data-insert="/">÷</button>
                <button type="button" class="kb-key num" data-insert="(">(</button>
                <button type="button" class="kb-key num" data-insert=")">)</button>
                
                <!-- Ligne 2 : Puissances & Racines & Notations clés -->
                <button type="button" class="kb-key fn" data-insert="^">^</button>
                <button type="button" class="kb-key fn" data-insert="²">x²</button>
                <button type="button" class="kb-key fn" data-insert="sqrt(">√</button>
                <button type="button" class="kb-key fn" data-insert="inf">∞</button>
                <button type="button" class="kb-key op" data-insert="=">=</button>
                <button type="button" class="kb-key del" onclick="MathKeyboard.backspace()">⌫</button>

                <!-- Ligne 3 : Symboles & Lettres grecques usuelles -->
                <button type="button" class="kb-key greek" data-insert="lambda">λ</button>
                <button type="button" class="kb-key greek" data-insert="alpha">α</button>
                <button type="button" class="kb-key greek" data-insert="beta">β</button>
                <button type="button" class="kb-key greek" data-insert="mu">μ</button>
                <button type="button" class="kb-key sep" data-insert=",">,</button>
                <button type="button" class="kb-key enter" onclick="MathKeyboard.submitActive()">⏎</button>
            </div>
        `;

        document.body.appendChild(kb);
        this.keyboardContainer = kb;

        // Attachement des clics sur les touches data-insert
        kb.querySelectorAll('button[data-insert]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const char = btn.getAttribute('data-insert');
                this.insertText(char);
            });
        });

        // Détection globale des focus sur les inputs de saisie mathématique
        // Enregistre l'input actif SANS forcer l'ouverture brutale si l'utilisateur l'a collapsé
        document.addEventListener('focusin', (e) => {
            const target = e.target;
            if (target && (
                target.classList.contains('scalar-math-input') ||
                target.classList.contains('matrix-cell-input') ||
                target.classList.contains('step-input-field')
            )) {
                this.activeInputElement = target;
                // Le bouton toggle devient visible et pulsing
                if (this.toggleBtn) {
                    this.toggleBtn.classList.add('visible');
                }
            }
        });

        this.updateVisibilityState();
    },

    updateVisibilityState() {
        if (!this.keyboardContainer) return;
        if (this.isExpanded) {
            this.keyboardContainer.classList.remove('collapsed');
            this.keyboardContainer.classList.add('expanded');
            if (this.toggleBtn) {
                this.toggleBtn.innerHTML = '<span>− Réduire le clavier</span>';
                this.toggleBtn.setAttribute('aria-expanded', 'true');
                this.toggleBtn.classList.add('active');
            }
        } else {
            this.keyboardContainer.classList.add('collapsed');
            this.keyboardContainer.classList.remove('expanded');
            if (this.toggleBtn) {
                this.toggleBtn.innerHTML = '<span>⌨ Clavier mathématique</span>';
                this.toggleBtn.setAttribute('aria-expanded', 'false');
                this.toggleBtn.classList.remove('active');
            }
        }
        try {
            sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.isExpanded));
        } catch (e) {}
    },

    expand() {
        if (!this.keyboardContainer) this.init();
        this.isExpanded = true;
        this.updateVisibilityState();
    },

    collapse() {
        if (!this.keyboardContainer) this.init();
        this.isExpanded = false;
        this.updateVisibilityState();
    },

    toggle() {
        if (!this.keyboardContainer) this.init();
        this.isExpanded = !this.isExpanded;
        this.updateVisibilityState();
    },

    show() {
        // Alias de compatibilité
        this.expand();
    },

    hide() {
        // Alias de compatibilité
        this.collapse();
    },

    insertText(text) {
        let input = this.activeInputElement;
        if (!input || !document.body.contains(input)) {
            input = document.querySelector('.scalar-math-input:not(.hidden), .matrix-cell-input:focus, .step-input-field');
        }
        if (!input) return;

        const start = input.selectionStart || input.value.length;
        const end = input.selectionEnd || input.value.length;
        const currentVal = input.value;

        input.value = currentVal.substring(0, start) + text + currentVal.substring(end);
        const newCursorPos = start + text.length;
        input.setSelectionRange(newCursorPos, newCursorPos);
        input.focus();

        input.dispatchEvent(new Event('input', { bubbles: true }));
    },

    backspace() {
        const input = this.activeInputElement || document.querySelector('.scalar-math-input:not(.hidden), .step-input-field');
        if (!input) return;

        const start = input.selectionStart;
        const end = input.selectionEnd;
        if (start === 0 && end === 0) return;

        const currentVal = input.value;
        if (start === end) {
            input.value = currentVal.substring(0, start - 1) + currentVal.substring(end);
            input.setSelectionRange(start - 1, start - 1);
        } else {
            input.value = currentVal.substring(0, start) + currentVal.substring(end);
            input.setSelectionRange(start, start);
        }

        input.focus();
        input.dispatchEvent(new Event('input', { bubbles: true }));
    },

    clearInput() {
        const input = this.activeInputElement || document.querySelector('.scalar-math-input:not(.hidden), .step-input-field');
        if (!input) return;
        input.value = '';
        input.focus();
        input.dispatchEvent(new Event('input', { bubbles: true }));
    },

    submitActive() {
        const valBtn = document.getElementById('workout-validate-btn') || document.getElementById('btn-validate-step');
        if (valBtn && !valBtn.classList.contains('hidden') && !valBtn.disabled) {
            valBtn.click();
        }
    }
};

if (typeof window !== 'undefined') {
    window.MathKeyboard = MathKeyboard;
    if (typeof document !== 'undefined') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => MathKeyboard.init());
        } else {
            MathKeyboard.init();
        }
    }
}
