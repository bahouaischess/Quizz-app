// ============================================================================
// CourseAnalyzer - Analyseur Pédagogique Automatique du Cursus (data.js)
// Extrait disciplines, chapitres, notions granulaires et types épistémiques.
// ============================================================================

const CourseAnalyzer = {
    _cache: null,

    // Analyse l'intégralité des matières et questions fournies
    analyze(appData = null) {
        const data = appData || window.appData || window.defaultData || {};
        
        const graph = {
            disciplines: {
                "Algèbre Linéaire": { id: "algebre", icon: "📐", chapters: {} },
                "Analyse": { id: "analyse", icon: "📈", chapters: {} },
                "Probabilités": { id: "proba", icon: "🎲", chapters: {} },
                "Informatique": { id: "info", icon: "💻", chapters: {} },
                "Microéconomie": { id: "eco", icon: "📊", chapters: {} }
            },
            conceptsIndex: {}, // conceptKey -> { id, label, discipline, chapter, questions: [], types: Set, tags: Set }
            stats: {
                totalQuestions: 0,
                byDiscipline: {},
                byType: {}
            }
        };

        Object.keys(data).forEach(subjectName => {
            if (subjectName.startsWith('_') || data[subjectName]?.deleted) return;
            const subjectObj = data[subjectName];
            const questions = subjectObj.questions || [];
            if (!questions.length) return;

            // Détection de la discipline
            const discKey = this.detectDiscipline(subjectName, subjectObj);
            const disc = graph.disciplines[discKey];
            if (!disc) return;

            // Détection du chapitre épuré
            const chapterCleanName = this.cleanChapterName(subjectName);
            if (!disc.chapters[chapterCleanName]) {
                disc.chapters[chapterCleanName] = {
                    rawSubjectName: subjectName,
                    questionCount: 0,
                    concepts: {}
                };
            }
            const chap = disc.chapters[chapterCleanName];

            questions.forEach((q, idx) => {
                graph.stats.totalQuestions++;
                chap.questionCount++;
                graph.stats.byDiscipline[discKey] = (graph.stats.byDiscipline[discKey] || 0) + 1;

                // Extraction des notions (tags ou inférence par mots-clés)
                const extractedConcepts = this.extractConceptsFromQuestion(q, subjectName);

                extractedConcepts.forEach(cName => {
                    const conceptKey = `${discKey}::${chapterCleanName}::${cName}`;
                    if (!chap.concepts[cName]) {
                        chap.concepts[cName] = {
                            key: conceptKey,
                            label: cName,
                            questions: []
                        };
                    }

                    if (!graph.conceptsIndex[conceptKey]) {
                        graph.conceptsIndex[conceptKey] = {
                            key: conceptKey,
                            label: cName,
                            discipline: discKey,
                            chapter: chapterCleanName,
                            rawSubjectName: subjectName,
                            questions: [],
                            epistemicTypes: new Set(),
                            tags: new Set()
                        };
                    }

                    const epistemicType = this.detectEpistemicType(q);
                    graph.conceptsIndex[conceptKey].epistemicTypes.add(epistemicType);
                    (q.tags || []).forEach(t => graph.conceptsIndex[conceptKey].tags.add(t));

                    const enrichedQ = {
                        ...q,
                        _subjectKey: subjectName,
                        _chapter: chapterCleanName,
                        _discipline: discKey,
                        _concept: cName,
                        _conceptKey: conceptKey,
                        _epistemicType: epistemicType,
                        _originalIndex: idx
                    };

                    chap.concepts[cName].questions.push(enrichedQ);
                    graph.conceptsIndex[conceptKey].questions.push(enrichedQ);
                });
            });
        });

        this._cache = graph;
        return graph;
    },

    getGraph() {
        if (!this._cache) this.analyze();
        return this._cache;
    },

    detectDiscipline(subjectName, subjectObj) {
        const name = subjectName.toLowerCase();
        const folder = (subjectObj.folder || '').toLowerCase();

        if (name.includes('algèbre') || name.includes('algebre') || name.includes('matrices') || name.includes('endomorphisme')) {
            return "Algèbre Linéaire";
        }
        if (name.includes('analyse') || name.includes('intégrale') || name.includes('série') || name.includes('topologie') || name.includes('suites')) {
            return "Analyse";
        }
        if (name.includes('probabilité') || name.includes('probabilites') || name.includes('aléatoire') || name.includes('marche')) {
            return "Probabilités";
        }
        if (name.includes('micro') || name.includes('économie') || name.includes('economie') || folder.includes('micro') || folder.includes('économie') || folder.includes('economie')) {
            return "Microéconomie";
        }
        if (name.includes('algo') || folder.includes('algo') || name.includes('bash') || name.includes('powershell') || name.includes('shell') || folder.includes('bash') || folder.includes('powershell') || name.includes('architecture') || name.includes('ordinateur') || name.includes('ordi') || folder.includes('architecture') || name.includes('programmation') || name.includes('informatique') || name.includes('c :') || folder.includes('info') || folder.includes('programmation')) {
            return "Informatique";
        }
        return "Algèbre Linéaire"; // Valeur par défaut
    },

    cleanChapterName(subjectName) {
        // Ex: "Algèbre 2 : Chapitre 1 (Matrices)" -> "Ch. 1 - Matrices"
        // Ex: "Analyse 3 : Chapitres 1 & 2 (Cauchy et Séries)" -> "Ch. 1 & 2 - Cauchy & Séries"
        let clean = subjectName
            .replace(/^Algèbre \d+\s*:\s*/i, '')
            .replace(/^Analyse \d+\s*:\s*/i, '')
            .replace(/^Probabilités\s*:\s*/i, '')
            .replace(/^Programmation C\s*:\s*/i, '')
            .replace(/^Architecture des ordis\s*:\s*/i, '')
            .replace(/^Architecture des ordinateurs\s*:\s*/i, '')
            .replace(/^Bash\s*:\s*/i, '')
            .replace(/^PowerShell\s*:\s*/i, '')
            .replace(/^Microéconomie\s*(\d+)?\s*:\s*/i, '')
            .replace(/^Microéconomie\s*-\s*/i, '')
            .replace(/^Algo\s*(\d+)?\s*:\s*/i, '')
            .replace(/^Algo\s*-\s*/i, '');
        
        return clean.trim();
    },

    extractConceptsFromQuestion(q, subjectName) {
        const concepts = new Set();

        // 1. Tags explicites
        if (Array.isArray(q.tags) && q.tags.length > 0) {
            q.tags.forEach(tag => {
                const cleanTag = tag.trim();
                if (cleanTag && cleanTag !== 'QCM' && cleanTag !== 'Général') {
                    concepts.add(cleanTag);
                }
            });
        }

        // 2. Inférence contextuelle si aucun tag ou tags trop génériques
        const text = ((q.q || '') + ' ' + (q.explanation || '')).toLowerCase();
        
        // Algèbre
        if (text.includes('diagonalis') || text.includes('propre') || text.includes('spectre')) concepts.add('Diagonalisation & Valeurs Propres');
        if (text.includes('déterminant') || text.includes('det(')) concepts.add('Déterminants');
        if (text.includes('noyau') || text.includes('ker(') || text.includes('image') || text.includes('im(')) concepts.add('Noyau & Image (Théorème du Rang)');
        if (text.includes('dimension') || text.includes('base') || text.includes('libre')) concepts.add('Bases & Dimension');
        if (text.includes('pivot de gauss') || text.includes('système linéaire')) concepts.add('Pivot de Gauss & Systèmes');
        if (text.includes('produit') && text.includes('matrice')) concepts.add('Produit Matriciel');

        // Analyse
        if (text.includes('riemann') || text.includes('série') || text.includes('d\'alembert')) concepts.add('Séries Numériques & Critères');
        if (text.includes('intégrale') || text.includes('impropre')) concepts.add('Intégrales Généralisées');
        if (text.includes('suite de fonction') || text.includes('convergence uniforme')) concepts.add('Suites de Fonctions & CVU');
        if (text.includes('ouvert') || text.includes('fermé') || text.includes('adhérence') || text.includes('topologie')) concepts.add('Topologie & Normes');

        // Proba
        if (text.includes('conditionnelle') || text.includes('bayes') || text.includes('indépendan')) concepts.add('Conditionnement & Bayes');
        if (text.includes('espérance') || text.includes('variance') || text.includes('loi')) concepts.add('Variables Aléatoires & Moments');

        // Info
        if (text.includes('pointeur') || text.includes('*p') || text.includes('malloc') || text.includes('adresse')) concepts.add('Pointeurs & Modèle Mémoire');
        if (text.includes('boucle') || text.includes('for') || text.includes('while')) concepts.add('Boucles & Contrôle de Flux');
        if (text.includes('récursiv')) concepts.add('Récursivité & Piles');

        if (concepts.size === 0) {
            concepts.add('Notions Fondamentales');
        }

        return Array.from(concepts);
    },

    detectEpistemicType(q) {
        const text = ((q.q || '') + ' ' + (q.explanation || '')).toLowerCase();
        const tags = (q.tags || []).map(t => t.toLowerCase());

        if (tags.includes('pièges') || tags.includes('pieges') || text.includes('erreur') || text.includes('faux') || text.includes('attention')) {
            return 'trap_flaw'; // Détection d'erreurs / pièges
        }
        if (text.includes('définition') || text.includes('est dit') || text.includes('appelle-t-on') || tags.includes('définitions')) {
            return 'definition'; // Définition / Rappel
        }
        if (text.includes('calculer') || text.includes('quelle est la valeur') || text.includes('vaut') || text.includes('égal à')) {
            return 'calculation'; // Calcul
        }
        if (text.includes('théorème') || text.includes('sous quelle condition') || text.includes('équivalent') || text.includes('nécessaire')) {
            return 'property_theorem'; // Propriété / Théorème
        }
        if (text.includes('quelle méthode') || text.includes('quel critère') || text.includes('prochaine étape') || text.includes('comment démontrer')) {
            return 'reasoning_method'; // Méthode / Raisonnement
        }
        return 'property_theorem';
    }
};

if (typeof window !== 'undefined') {
    window.CourseAnalyzer = CourseAnalyzer;
}
