// ============================================================================
// ANNALES MANAGER - PASS PARIS CITÉ
// Gestionnaire central des annales, de la notation et du stockage local
// ============================================================================

window.AnnalesManager = (function () {
    const STORAGE_KEY = 'quizzhub_annales_history_v1';

    const SUBJECT_ICONS = {
        'sante_publique': '🏥',
        'bio_cellulaire': '🔬',
        'biochimie': '🧪',
        'chimie': '⚗️',
        'histo_embryo': '🧬',
        'physique': '⚡',
        'shs': '📚'
    };

    function normalizeQuestion(q, idx) {
        if (!q) return null;
        const letters = ['A', 'B', 'C', 'D', 'E'];
        const rawOptions = q.options || q.Options || [];

        const options = rawOptions.map((o, optIdx) => {
            const id = (o.id || o.Id || letters[optIdx] || '').toString().trim().toUpperCase();
            const text = o.text !== undefined ? o.text : (o.Text !== undefined ? o.Text : '');
            const isCorrect = o.isCorrect !== undefined ? Boolean(o.isCorrect) : (o.IsCorrect !== undefined ? Boolean(o.IsCorrect) : false);
            const explanation = o.explanation !== undefined ? o.explanation : (o.Explanation !== undefined ? o.Explanation : '');
            return { id, text, isCorrect, explanation };
        });

        const type = q.type || q.Type || 'QCM';
        if (type === 'QCM' && options.length === 0) {
            for (let i = 0; i < 5; i++) {
                options.push({
                    id: letters[i],
                    text: `(Proposition ${letters[i]})`,
                    isCorrect: false,
                    explanation: ''
                });
            }
        }

        const rawCorrect = q.correctAnswers || q.CorrectAnswers || [];
        const correctAnswers = Array.isArray(rawCorrect) ? rawCorrect.map(a => a.toString().trim().toUpperCase()) : [];

        if (correctAnswers.length > 0) {
            options.forEach(opt => {
                if (correctAnswers.includes(opt.id)) {
                    opt.isCorrect = true;
                }
            });
        } else {
            options.forEach(opt => {
                if (opt.isCorrect && !correctAnswers.includes(opt.id)) {
                    correctAnswers.push(opt.id);
                }
            });
        }

        return {
            num: q.num !== undefined ? q.num : (q.Num !== undefined ? q.Num : idx + 1),
            type: type,
            context: q.context !== undefined ? q.context : (q.Context !== undefined ? q.Context : ''),
            images: q.images || q.Images || [],
            question: q.question !== undefined ? q.question : (q.Question !== undefined ? q.Question : ''),
            rawOptions: q.rawOptions || q.RawOptions || [],
            options: options,
            correctAnswers: correctAnswers,
            generalNotes: q.generalNotes || q.GeneralNotes || ''
        };
    }

    function normalizeAnnale(a) {
        if (!a) return null;
        let icon = a.icon || a.Icon;
        if (!icon || icon.includes('?')) {
            icon = SUBJECT_ICONS[a.subjectId || a.SubjectId] || '📝';
        }

        const rawQuestions = a.questions || a.Questions || [];
        const questions = rawQuestions.map((q, idx) => normalizeQuestion(q, idx));

        return {
            id: a.id || a.Id,
            year: a.year || a.Year,
            semester: a.semester || a.Semester || 'Semestre 1',
            subjectId: a.subjectId || a.SubjectId,
            subjectName: a.subjectName || a.SubjectName,
            ue: a.ue || a.Ue || 'UE',
            icon: icon,
            tutoId: a.tutoId || a.TutoId,
            tutoName: a.tutoName || a.TutoName,
            title: a.title || a.Title,
            durationMinutes: a.durationMinutes || a.DurationMinutes || (questions.length > 0 ? questions.length : 30),
            questionCount: questions.length || a.questionCount || a.QuestionCount || 0,
            isSpecial: Boolean(a.isSpecial || a.IsSpecial),
            questions: questions
        };
    }

    // Récupérer l'ensemble des annales disponibles
    function getAllAnnales() {
        const list = [];

        // 1. Annale inédite de Santé Publique
        if (window.NOUVELLE_ANNALE_SP) {
            list.push(normalizeAnnale(window.NOUVELLE_ANNALE_SP));
        }

        // 2. Année 2026-2027
        if (window.ANNALES_2026_2027 && Array.isArray(window.ANNALES_2026_2027)) {
            list.push(...window.ANNALES_2026_2027.map(normalizeAnnale));
        }

        // 3. Année 2025-2026
        if (window.ANNALES_2025_2026 && Array.isArray(window.ANNALES_2025_2026)) {
            list.push(...window.ANNALES_2025_2026.map(normalizeAnnale));
        }

        // 4. Année 2024-2025
        if (window.ANNALES_2024_2025 && Array.isArray(window.ANNALES_2024_2025)) {
            list.push(...window.ANNALES_2024_2025.map(normalizeAnnale));
        }

        return list;
    }

    function getAnnaleById(id) {
        const all = getAllAnnales();
        return all.find(a => a.id === id) || null;
    }

    // Filtrer les annales
    function filterAnnales(filters = {}) {
        let list = getAllAnnales();

        if (filters.year && filters.year !== 'all') {
            if (filters.year === 'inedite') {
                list = list.filter(a => a.isSpecial);
            } else {
                list = list.filter(a => a.year === filters.year);
            }
        }

        if (filters.subjectId && filters.subjectId !== 'all') {
            list = list.filter(a => a.subjectId === filters.subjectId);
        }

        if (filters.search && filters.search.trim()) {
            const query = filters.search.toLowerCase().trim();
            list = list.filter(a =>
                (a.title && a.title.toLowerCase().includes(query)) ||
                (a.subjectName && a.subjectName.toLowerCase().includes(query)) ||
                (a.ue && a.ue.toLowerCase().includes(query)) ||
                (a.tutoName && a.tutoName.toLowerCase().includes(query)) ||
                (a.questions && a.questions.some(q => q.question && q.question.toLowerCase().includes(query)))
            );
        }

        return list;
    }

    // Calcul officiel des points selon le barème du prompt
    // 0 erreur = 1.0 pt | 1 erreur = 0.7 pt | 2 erreurs = 0.1 pt | >= 3 erreurs = 0.0 pt
    // Dépassement chrono (> 60 secondes sur la question) = pénalité de -0.3 pt
    function evaluateQuestion(rawQ, userSelection = [], timeSpentSeconds = 0) {
        const q = normalizeQuestion(rawQ, 0);
        const letters = ['A', 'B', 'C', 'D', 'E'];
        const userSet = new Set((userSelection || []).map(l => l.toString().trim().toUpperCase()));
        const correctAnswers = q.correctAnswers && q.correctAnswers.length > 0
            ? q.correctAnswers
            : (q.options ? q.options.filter(o => o.isCorrect).map(o => o.id) : []);
        const correctSet = new Set(correctAnswers);

        // Calcul du nombre d'erreurs (distance de Hamming sur les 5 items)
        let errors = 0;
        const itemAnalysis = [];

        letters.forEach(letter => {
            const isUserChecked = userSet.has(letter);
            const isActuallyCorrect = correctSet.has(letter);
            const isItemMistake = (isUserChecked !== isActuallyCorrect);

            if (isItemMistake) {
                errors++;
            }

            const optionObj = q.options ? q.options.find(o => o.id === letter) : null;
            itemAnalysis.push({
                letter,
                text: optionObj ? optionObj.text : '',
                isUserChecked,
                isActuallyCorrect,
                isItemMistake,
                explanation: optionObj ? optionObj.explanation : ''
            });
        });

        // Barème officiel Paris Cité
        let baseScore = 0;
        if (errors === 0) {
            baseScore = 1.0;
        } else if (errors === 1) {
            baseScore = 0.7;
        } else if (errors === 2) {
            baseScore = 0.1;
        } else {
            baseScore = 0.0;
        }

        // Chronométrage par question (Purement indicatif, sans pénalité de points)
        const isOvertime = timeSpentSeconds > 60;
        const timePenalty = 0.0;
        const netScore = parseFloat(baseScore.toFixed(2));

        return {
            num: q.num,
            questionText: q.question,
            context: q.context || '',
            images: q.images || [],
            userSelection: Array.from(userSet).sort(),
            correctAnswers: Array.from(correctSet).sort(),
            errorsCount: errors,
            baseScore: parseFloat(baseScore.toFixed(2)),
            timeSpentSeconds,
            isOvertime,
            timePenalty: 0.0,
            netScore,
            itemAnalysis,
            generalNotes: q.generalNotes || ''
        };
    }

    // Calcul global du test
    function evaluateExam(annale, userAnswers = {}, questionTimes = {}) {
        const questions = annale.questions || [];
        const questionResults = [];

        let totalBaseScore = 0;
        let totalPenalties = 0;
        let overtimeQuestionsCount = 0;
        let perfectCount = 0;
        let oneErrorCount = 0;
        let twoErrorsCount = 0;
        let threePlusErrorsCount = 0;
        let totalTimeSeconds = 0;

        questions.forEach((q, index) => {
            const qKey = q.num !== undefined ? q.num : (index + 1);
            const userSel = userAnswers[qKey] || [];
            const timeSec = questionTimes[qKey] || 0;
            totalTimeSeconds += timeSec;

            const res = evaluateQuestion(q, userSel, timeSec);
            questionResults.push(res);

            totalBaseScore += res.baseScore;
            if (res.isOvertime) {
                overtimeQuestionsCount++;
            }

            if (res.errorsCount === 0) perfectCount++;
            else if (res.errorsCount === 1) oneErrorCount++;
            else if (res.errorsCount === 2) twoErrorsCount++;
            else threePlusErrorsCount++;
        });

        const maxPoints = questions.length;
        const netScore = parseFloat(totalBaseScore.toFixed(2));
        const scoreSur20 = maxPoints > 0 ? parseFloat(((netScore / maxPoints) * 20).toFixed(2)) : 0;
        const rawScoreSur20 = scoreSur20;

        let mention = 'En progression';
        let mentionClass = 'badge-progress';
        if (scoreSur20 >= 16) {
            mention = 'Major (Excellent)';
            mentionClass = 'badge-major';
        } else if (scoreSur20 >= 12) {
            mention = 'Admis (Très bon)';
            mentionClass = 'badge-admis';
        } else if (scoreSur20 >= 10) {
            mention = 'Admissible (Moyen)';
            mentionClass = 'badge-admissible';
        }

        const summary = {
            annaleId: annale.id,
            annaleTitle: annale.title,
            subjectName: annale.subjectName,
            year: annale.year,
            completedAt: new Date().toISOString(),
            totalQuestions: questions.length,
            totalTimeSeconds,
            totalBaseScore: parseFloat(totalBaseScore.toFixed(2)),
            totalPenalties: parseFloat(totalPenalties.toFixed(2)),
            overtimeQuestionsCount,
            netScore,
            maxPoints,
            scoreSur20,
            rawScoreSur20,
            mention,
            mentionClass,
            stats: {
                perfectCount,
                oneErrorCount,
                twoErrorsCount,
                threePlusErrorsCount
            },
            questionResults
        };

        saveResult(annale.id, summary);
        return summary;
    }

    // Gestion du stockage local des résultats
    function getHistory() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : {};
        } catch (e) {
            console.error('Erreur lecture historique annales:', e);
            return {};
        }
    }

    function saveResult(annaleId, summary) {
        try {
            const history = getHistory();
            if (!history[annaleId]) history[annaleId] = [];
            history[annaleId].unshift(summary);
            // Conserver les 10 dernières tentatives
            if (history[annaleId].length > 10) {
                history[annaleId] = history[annaleId].slice(0, 10);
            }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
        } catch (e) {
            console.error('Erreur sauvegarde historique annales:', e);
        }
    }

    function getBestResult(annaleId) {
        const history = getHistory();
        const runs = history[annaleId];
        if (!runs || runs.length === 0) return null;
        return runs.reduce((best, cur) => (cur.scoreSur20 > (best ? best.scoreSur20 : -1) ? cur : best), null);
    }

    function getLastResult(annaleId) {
        const history = getHistory();
        const runs = history[annaleId];
        return (runs && runs.length > 0) ? runs[0] : null;
    }

    return {
        getAllAnnales,
        getAnnaleById,
        filterAnnales,
        evaluateQuestion,
        evaluateExam,
        saveResult,
        getBestResult,
        getLastResult,
        getHistory
    };
})();

