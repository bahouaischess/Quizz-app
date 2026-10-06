// ============================================================================
// MultiAngleEngine - Déclinateur Pédagogique Multi-Angles Universitaire
// Transforme une question ou notion du cours en multiples formats d'apprentissage :
// - Rappel Actif (Flashcard avec auto-évaluation SM-2)
// - Saisie Libre / Numérique & Exacte (sans choix proposé)
// - Vrai / Faux & Pièges
// - Next-Step Reasoning (Démarche déductive)
// - Spot-the-Flaw (Détection critique d'erreur)
// - QCM Exigeant avec Distracteurs Équilibrés et Crédibles (Règle d'Or anti-giveaway)
// ============================================================================

const MultiAngleEngine = {
    // Transforme une question de cours brute en exercice du format demandé
    deriveExercise(questionData, targetFormat = 'auto') {
        const q = { ...questionData };
        const format = targetFormat === 'auto' ? this.recommendFormat(q) : targetFormat;

        let ex = null;
        switch (format) {
            case 'active_recall':
                ex = this.toActiveRecall(q);
                break;
            case 'numeric_input':
                ex = this.toNumericInput(q) || this.toQCM(q);
                break;
            case 'true_false':
                ex = this.toTrueFalse(q);
                break;
            case 'next_step':
                ex = this.toNextStep(q);
                break;
            case 'spot_the_flaw':
                ex = this.toSpotTheFlaw(q);
                break;
            case 'qcm':
            default:
                ex = this.toQCM(q);
                break;
        }

        // Contrôle de qualité anti-giveaway sur tous les exercices à choix multiples
        if (ex && (ex.type === 'qcm' || ex.type === 'next_step') && ex.options && ex.options.length > 1) {
            ex = this.balanceMCQOptions(ex);
        }

        return ex;
    },

    recommendFormat(q) {
        const epistemic = q._epistemicType || 'property_theorem';
        if (epistemic === 'trap_flaw') return 'spot_the_flaw';
        if (epistemic === 'calculation' && this.extractNumericTarget(q)) return 'numeric_input';
        if (epistemic === 'definition') return 'active_recall';
        if (epistemic === 'reasoning_method') return 'next_step';
        return 'qcm';
    },

    // ========================================================================
    // RÈGLE QUALITÉ QCM : ÉQUILIBRAGE STRICT DES DISTRACTEURS & ANTI-GIVEAWAY
    // ========================================================================
    balanceMCQOptions(ex) {
        const options = [...ex.options];
        const correctOpt = options.find(o => o.isCorrect);
        if (!correctOpt) return ex;

        const correctLen = correctOpt.text.length;

        // Normalise les distracteurs trop courts ou caricaturaux
        const balancedOptions = options.map(opt => {
            if (opt.isCorrect) return opt;

            let text = opt.text;
            // Si le distracteur est beaucoup trop court par rapport à la réponse correcte (> 2x plus court)
            if (text.length < correctLen * 0.5) {
                // Enrichit le distracteur avec une justification erronée plausible
                if (text.toLowerCase().includes('faux') || text.toLowerCase().includes('diverge') || text.toLowerCase().includes('non')) {
                    text = `${text}, car les hypothèses de régularité et de dimension requises ne sont pas satisfaites dans ce cadre.`;
                } else if (text.toLowerCase().includes('vrai') || text.toLowerCase().includes('converge') || text.toLowerCase().includes('oui')) {
                    text = `${text}, d'après une application directe du théorème principal sans condition additionnelle.`;
                } else if (!text.includes('car') && !text.includes('parce que')) {
                    text = `${text}, en vertu de la conservation des propriétés spectrales de l'endomorphisme.`;
                }
            }

            return {
                ...opt,
                text
            };
        });

        // Mélange aléatoire des options pour éviter tout biais de position
        for (let i = balancedOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [balancedOptions[i], balancedOptions[j]] = [balancedOptions[j], balancedOptions[i]];
        }

        return {
            ...ex,
            options: balancedOptions
        };
    },

    // 1. ANGLE : RAPPEL ACTIF (FLASHCARD SM-2)
    toActiveRecall(q) {
        const correctOpt = (q.options || []).find(o => o.isCorrect) || { text: q.explanation || 'Voir le cours.' };
        return {
            type: 'qcm',
            isFlashcardMode: true,
            conceptId: q._conceptKey || 'rappel_actif',
            difficulty: q.difficulty || 2,
            cognitiveLevel: 'recognition',
            tags: [...(q.tags || []), 'Rappel Actif'],
            q: `<strong>[Rappel Actif & Définition]</strong><br>${q.q}`,
            expectedAnswerText: correctOpt.text,
            options: (q.options || []).length ? q.options : [
                { text: correctOpt.text, isCorrect: true, rationale: q.explanation }
            ],
            explanation: q.explanation || `Réponse attendue : ${correctOpt.text}`
        };
    },

    // 2. ANGLE : SAISIE LIBRE / NUMÉRIQUE (Sans options affichées)
    toNumericInput(q) {
        const target = this.extractNumericTarget(q);
        if (target === null) return null;

        return {
            type: 'numeric_input',
            conceptId: q._conceptKey || 'calcul_direct',
            difficulty: q.difficulty || 3,
            cognitiveLevel: 'calculation',
            tags: [...(q.tags || []), 'Saisie Libre'],
            q: `<strong>[Calcul & Saisie Directe]</strong><br>${q.q}`,
            correctAnswer: target.val,
            tolerance: target.tolerance || 0,
            placeholder: target.isFraction ? 'Ex: 3/4 ou -1/2' : 'Entrez la valeur exacte...',
            explanation: q.explanation || `Le résultat exact attendu est ${target.val}.`
        };
    },

    // 3. ANGLE : VRAI / FAUX & PIÈGES
    toTrueFalse(q) {
        const opts = q.options || [];
        if (opts.length < 2) return this.toQCM(q);

        const pickCorrect = Math.random() < 0.5;
        const chosen = pickCorrect ? (opts.find(o => o.isCorrect) || opts[0]) : (opts.find(o => !o.isCorrect) || opts[1]);
        const statement = chosen.text;

        return {
            type: 'qcm',
            conceptId: q._conceptKey || 'vrai_faux',
            difficulty: q.difficulty || 3,
            cognitiveLevel: 'reasoning',
            tags: [...(q.tags || []), 'Vrai / Faux & Pièges'],
            q: `<strong>[Analyse Critique d'Affirmation : Vrai ou Faux ?]</strong><br>Considérez le problème suivant :<br><blockquote>${q.q}</blockquote><br>Affirmation : <em>« ${statement} »</em>`,
            options: [
                {
                    text: `VRAI — L'affirmation est mathématiquement exacte et justifiée sous les hypothèses de l'énoncé.`,
                    isCorrect: Boolean(chosen.isCorrect),
                    rationale: chosen.isCorrect ? `Exact ! ${chosen.rationale || q.explanation || ''}` : `Faux ! Cette affirmation est incorrecte : ${chosen.rationale || q.explanation || ''}`
                },
                {
                    text: `FAUX — L'affirmation est erronée ou utilise une hypothèse non vérifiée dans le cas général.`,
                    isCorrect: !chosen.isCorrect,
                    rationale: !chosen.isCorrect ? `Exact, l'affirmation était fausse ! ${chosen.rationale || q.explanation || ''}` : `Incorrect, l'affirmation était vraie : ${chosen.rationale || q.explanation || ''}`
                }
            ],
            explanation: q.explanation
        };
    },

    // 4. ANGLE : NEXT-STEP REASONING
    toNextStep(q) {
        return {
            type: 'next_step',
            conceptId: q._conceptKey || 'next_step',
            difficulty: q.difficulty || 4,
            cognitiveLevel: 'reasoning',
            tags: [...(q.tags || []), 'Next-Step Reasoning', 'Stratégie'],
            q: `<strong>[Raisonnement Déductif & Next-Step]</strong><br>${q.q}`,
            currentWork: `Dans le cadre de cette situation, on souhaite déterminer la déduction logique ou l'étape mathématique la plus rigoureuse :`,
            options: (q.options || []).map(opt => ({
                text: opt.text,
                isCorrect: Boolean(opt.isCorrect),
                rationale: opt.rationale || (opt.isCorrect ? 'Étape rigoureusement justifiée par les théorèmes du cours.' : 'Déduction erronée ou prématurée.')
            })),
            explanation: q.explanation
        };
    },

    // 5. ANGLE : SPOT-THE-FLAW (DÉTECTION D'ERREUR)
    toSpotTheFlaw(q) {
        const incorrectOpt = (q.options || []).find(o => !o.isCorrect) || { text: "Conclusion hâtive sans vérifier les hypothèses." };

        return {
            type: 'spot_the_flaw',
            conceptId: q._conceptKey || 'spot_the_flaw',
            difficulty: q.difficulty || 5,
            cognitiveLevel: 'diagnostic',
            tags: [...(q.tags || []), 'Détection d\'Erreur', 'Spot-the-Flaw'],
            q: `<strong>[Spot-the-Flaw : Identification du vice de raisonnement]</strong><br>${q.q}`,
            steps: [
                {
                    stepNum: 1,
                    text: "Identification des données initiales, dimension de l'espace et régularité des fonctions/matrices en présence.",
                    hasFlaw: false
                },
                {
                    stepNum: 2,
                    text: `Application de l'argument déductif : ${incorrectOpt.text}`,
                    hasFlaw: true,
                    flawExplanation: `L'erreur se situe précisément à cette étape ! ${incorrectOpt.rationale || q.explanation || 'Hypothèse essentielle manquante ou raisonnement fallacieux.'}`
                },
                {
                    stepNum: 3,
                    text: `Conclusion globale sur la nature de l'objet mathématique ou la convergence.`,
                    hasFlaw: false
                }
            ],
            options: [
                { text: "Étape 1 (Hypothèses initiales)", isCorrect: false },
                { text: "Étape 2 (Argument erroné / condition non vérifiée)", isCorrect: true },
                { text: "Étape 3 (Conclusion)", isCorrect: false }
            ],
            explanation: q.explanation || `L'erreur résidait dans l'étape 2 : ${incorrectOpt.text}.`
        };
    },

    toQCM(q) {
        return {
            type: 'qcm',
            conceptId: q._conceptKey || 'qcm_standard',
            difficulty: q.difficulty || 3,
            cognitiveLevel: q.cognitiveLevel || 'reasoning',
            tags: q.tags || [],
            q: q.q,
            options: q.options || [],
            explanation: q.explanation
        };
    },

    // Détecte si la réponse correcte est un nombre ou une fraction évaluable
    extractNumericTarget(q) {
        const correctOpt = (q.options || []).find(o => o.isCorrect);
        if (!correctOpt) return null;

        const text = correctOpt.text.trim();

        if (/^-?\d+(\.\d+)?$/.test(text)) {
            return { val: Number(text), tolerance: 0, isFraction: false };
        }

        if (/^-?\d+\s*\/\s*\d+$/.test(text)) {
            return { val: text.replace(/\s+/g, ''), tolerance: 1e-4, isFraction: true };
        }

        const fracMatch = text.match(/\\frac\{(-?\d+)\}\{([1-9]\d*)\}/);
        if (fracMatch) {
            return { val: `${fracMatch[1]}/${fracMatch[2]}`, tolerance: 1e-4, isFraction: true };
        }

        const intMatch = text.match(/\b(-?\d+)\b/);
        if (intMatch && text.length < 20 && !text.includes('ou')) {
            return { val: Number(intMatch[1]), tolerance: 0, isFraction: false };
        }

        return null;
    }
};

if (typeof window !== 'undefined') {
    window.MultiAngleEngine = MultiAngleEngine;
}
