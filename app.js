
const SUPABASE_URL = 'https://dylpgqwobictpelbwwzf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5bHBncXdvYmljdHBlbGJ3d3pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5NTMzNjMsImV4cCI6MjEwNDUyOTM2M30.A18JCXfr2KWXTdRglTTdun0o9q6Hvlp-LzrWqXLupdo';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Variables de session Cloud
let currentUser = null;
let dbRowId = null;

const FIVE_HOURS_MS = 5 * 60 * 60 * 1000;
const DEFAULT_FOLDER = 'Général';
const ARCHIVE_FOLDER = 'Archive';

function ensureArchiveFolder() {
    if (!Array.isArray(appData?._folders)) {
        appData._folders = [DEFAULT_FOLDER];
    }
    if (!appData._folders.includes(ARCHIVE_FOLDER)) {
        appData._folders.push(ARCHIVE_FOLDER);
    }
}

function isSubjectDeleted(subjectName) {
    return Boolean(subjectName && appData?.[subjectName]?.deleted);
}

function isSubjectAvailable(subjectName) {
    if (window.communityAdmin && typeof window.communityAdmin.isUserSubject === 'function') {
        return window.communityAdmin.isUserSubject(subjectName, appData);
    }
    return Boolean(subjectName && !subjectName.startsWith('_') && !isSubjectDeleted(subjectName));
}

function getVisibleSubjects() {
    return Object.keys(appData || {}).filter(subject => isSubjectAvailable(subject));
}

async function archiveSubject(subjectName) {
    if (!appData[subjectName]) return;
    appData[subjectName].deleted = false;
    appData[subjectName].archived = true;
    appData[subjectName].folder = ARCHIVE_FOLDER;
    ensureArchiveFolder();
    await saveData();
    renderHome();
    if (currentSubject === subjectName) {
        currentSubject = '';
        showView('home-view');
    }
    customAlert('Matière archivée', `La matière "${subjectName}" a été déplacée dans le dossier ${ARCHIVE_FOLDER}.`);
}

async function deleteSubject(subjectName) {
    if (!appData[subjectName]) return;
    appData[subjectName].deleted = true;
    appData[subjectName].archived = false;
    appData[subjectName].folder = ARCHIVE_FOLDER;
    ensureArchiveFolder();
    await saveData();
    renderHome();
    if (currentSubject === subjectName) {
        currentSubject = '';
        showView('home-view');
    }
    customAlert('Matière supprimée', `La matière "${subjectName}" a été supprimée pour toi et ne sera plus accessible.`);
}

function getSubjectJsonTemplate() {
    return {
        __instructions: 'Champ informatif ignore par QuizzHub. Le JSON ne supporte pas les commentaires avec // ou /* */.',
        name: 'Nom de la matière',
        folder: 'Général',
        description: 'Description facultative du cours',
        prerequisites: [],
        questions: [
            {
                q: 'Énoncé de la question',
                tags: ['Chapitre'],
                options: [
                    { text: 'Réponse correcte', isCorrect: true },
                    { text: 'Réponse incorrecte', isCorrect: false }
                ],
                explanation: 'Explique ici pourquoi la réponse est correcte et pourquoi les pièges sont faux.'
            }
        ]
    };
}

function downloadSubjectTemplate() {
    const template = JSON.stringify(getSubjectJsonTemplate(), null, 2);
    const url = URL.createObjectURL(new Blob([template], { type: 'application/json;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'modele-matiere-quizzhub.json';
    link.click();
    URL.revokeObjectURL(url);
}

function setSubjectJsonMessage(message, type = 'error') {
    const element = document.getElementById('subject-json-message');
    element.textContent = message;
    element.style.color = type === 'success' ? 'var(--success)' : 'var(--danger)';
}

function validateSubjectJson(rawSubject) {
    if (!rawSubject || typeof rawSubject !== 'object' || Array.isArray(rawSubject)) {
        throw new Error('Le fichier doit contenir un objet JSON à sa racine.');
    }

    const name = typeof rawSubject.name === 'string' ? rawSubject.name.trim() : typeof rawSubject.title === 'string' ? rawSubject.title.trim() : '';
    if (!name) throw new Error('Le champ "name" est obligatoire.');
    if (name.startsWith('_')) throw new Error('Le nom de la matière ne peut pas commencer par "_".');
    if (!Array.isArray(rawSubject.questions) || rawSubject.questions.length === 0) throw new Error('Le champ "questions" doit être une liste non vide.');

    const questionTexts = new Set();
    const questions = rawSubject.questions.map((rawQuestion, questionIndex) => {
        const position = `Question ${questionIndex + 1}`;
        if (!rawQuestion || typeof rawQuestion !== 'object') throw new Error(`${position} : objet invalide.`);
        const text = typeof rawQuestion.q === 'string' ? rawQuestion.q.trim() : typeof rawQuestion.question === 'string' ? rawQuestion.question.trim() : '';
        if (!text) throw new Error(`${position} : le champ "q" est obligatoire.`);
        const normalizedText = text.toLowerCase().replace(/\s+/g, ' ');
        if (questionTexts.has(normalizedText)) throw new Error(`${position} : énoncé dupliqué dans ce fichier.`);
        questionTexts.add(normalizedText);
        if (!Array.isArray(rawQuestion.options) || rawQuestion.options.length < 2) throw new Error(`${position} : il faut au moins deux options.`);
        const options = rawQuestion.options.map((rawOption, optionIndex) => {
            if (!rawOption || typeof rawOption.text !== 'string' || !rawOption.text.trim()) throw new Error(`${position}, option ${optionIndex + 1} : texte manquant.`);
            if (typeof rawOption.isCorrect !== 'boolean') throw new Error(`${position}, option ${optionIndex + 1} : "isCorrect" doit être true ou false.`);
            return { text: rawOption.text.trim(), isCorrect: rawOption.isCorrect };
        });
        if (!options.some(option => option.isCorrect)) throw new Error(`${position} : aucune bonne réponse.`);
        if (!rawQuestion.explanation || typeof rawQuestion.explanation !== 'string' || !rawQuestion.explanation.trim()) throw new Error(`${position} : explication obligatoire.`);
        return normalizeQuestion({
            type: 'qcm',
            q: text,
            tags: Array.isArray(rawQuestion.tags) ? rawQuestion.tags : [],
            options,
            explanation: rawQuestion.explanation.trim(),
            stats: { attempts: 0, correct: 0, partial: 0 },
            sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
        }, name, questionIndex);
    });

    return {
        name,
        folder: typeof rawSubject.folder === 'string' && rawSubject.folder.trim() ? rawSubject.folder.trim() : DEFAULT_FOLDER,
        description: typeof rawSubject.description === 'string' ? rawSubject.description.trim() : '',
        prerequisites: Array.isArray(rawSubject.prerequisites) ? rawSubject.prerequisites.filter(item => typeof item === 'string' && item.trim() && item !== name) : [],
        questions
    };
}

async function createSubjectFromValidatedJson(subjectData) {
    const normalizedName = subjectData.name.toLowerCase().replace(/\s+/g, ' ');
    const existingSubject = Object.keys(appData).find(subject => !subject.startsWith('_') && subject.toLowerCase().replace(/\s+/g, ' ') === normalizedName);
    if (existingSubject) throw new Error(`La matière "${existingSubject}" existe déjà.`);
    const existingQuestions = new Set();
    Object.keys(appData).forEach(subject => {
        if (subject.startsWith('_')) return;
        (appData[subject].questions || []).forEach(question => existingQuestions.add(question.q.toLowerCase().replace(/\s+/g, ' ')));
    });
    const duplicateQuestion = subjectData.questions.find(question => existingQuestions.has(question.q.toLowerCase().replace(/\s+/g, ' ')));
    if (duplicateQuestion) throw new Error(`La question "${duplicateQuestion.q}" existe déjà dans une autre matière.`);
    if (!appData._folders.includes(subjectData.folder)) appData._folders.push(subjectData.folder);
    if (typeof openFolders !== 'undefined') openFolders.add(subjectData.folder);

    const authorEmail = currentUser ? currentUser.email : 'local@etudiant';

    appData[subjectData.name] = {
        folder: subjectData.folder,
        description: subjectData.description,
        prerequisites: subjectData.prerequisites,
        questions: subjectData.questions,
        stats: { attempts: 0, correct: 0, partial: 0 },
        dailyValidations: {},
        isCustom: true,
        isSelected: true,
        uploadedAt: Date.now(),
        author: authorEmail
    };

    // 1. Sauvegarde dans le magasin isolé anti-perte
    if (window.communityAdmin && window.communityAdmin.saveCustomSubjectToRegistry) {
        window.communityAdmin.saveCustomSubjectToRegistry(subjectData.name, appData[subjectData.name]);
    }

    // 2. Sauvegarde générale immédiate
    await saveData(true);
}

async function importSubjectJsonText() {
    const text = document.getElementById('subject-json-text').value.trim();
    if (!text) return setSubjectJsonMessage('Colle un JSON ou choisis un fichier avant de lancer la vérification.');
    let parsed;
    try {
        parsed = JSON.parse(text);
    } catch (error) {
        return setSubjectJsonMessage(`JSON invalide : ${error.message}`);
    }
    try {
        const subjectData = validateSubjectJson(parsed);
        await createSubjectFromValidatedJson(subjectData);
        document.getElementById('subject-json-text').value = '';
        document.getElementById('subject-json-file').value = '';
        setSubjectJsonMessage(`Matière "${subjectData.name}" créée avec ${subjectData.questions.length} question(s) et sauvegardée.`, 'success');
        renderCreateSubjectView();
        renderHome();
    } catch (error) {
        setSubjectJsonMessage(`Import impossible : ${error.message}`);
    }
}

function importSubjectJsonFile(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
        document.getElementById('subject-json-text').value = reader.result;
        importSubjectJsonText();
    };
    reader.onerror = () => setSubjectJsonMessage('Impossible de lire ce fichier.');
    reader.readAsText(file);
}
const ACTIVE_QUIZ_KEY = 'activeQuizState';

function stableHash(value) {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index++) {
        hash ^= value.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
    }
    return `q-${(hash >>> 0).toString(16)}`;
}

function getQuestionId(subjectName, question, index = 0) {
    return question.id || stableHash(`${subjectName}|${question.q}|${index}`);
}

function normalizeQuestion(question, subjectName, index = 0) {
    const normalized = { ...question };
    normalized.id = getQuestionId(subjectName, question, index);
    normalized.q = removeCitations(question.q || '').trim();
    normalized.explanation = removeCitations(question.explanation || '');
    normalized.options = Array.isArray(question.options) ? question.options
        .filter(option => option && typeof option.text === 'string')
        .map(option => ({ ...option, text: removeCitations(option.text).trim(), isCorrect: Boolean(option.isCorrect) })) : [];
    normalized.tags = cleanTags(question.tags);
    normalized.stats = {
        attempts: Number(question.stats?.attempts) || 0,
        correct: Number(question.stats?.correct) || 0,
        partial: Number(question.stats?.partial) || 0
    };
    normalized.sm2 = {
        repetition: Number(question.sm2?.repetition) || 0,
        interval: Number(question.sm2?.interval) || 0,
        easeFactor: Number(question.sm2?.easeFactor) || 2.5,
        nextReview: Number(question.sm2?.nextReview) || 0,
        lastAttempt: Number(question.sm2?.lastAttempt) || 0,
        lastWrong: Number(question.sm2?.lastWrong) || 0,
        successStreak: Number(question.sm2?.successStreak) || 0,
        lastQuality: Number(question.sm2?.lastQuality) || 0
    };
    return normalized;
}

const getTodayStr = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

function shuffleArray(array) {
    let result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

// -----------------------------------------------------
// SÉCURITÉ MATHJAX (File d'attente asynchrone)
// -----------------------------------------------------
let mathJaxPromise = Promise.resolve();
function renderMath(elements) {
    if (window.MathJax) {
        mathJaxPromise = mathJaxPromise.then(() => {
            return MathJax.typesetPromise(elements);
        }).catch((err) => console.error('MathJax Error:', err));
    }
}

// -----------------------------------------------------
// MAPPER DE TAGS & NETTOYEUR DE CITATIONS
// -----------------------------------------------------
const TAG_MAP = {
    "Définitions": "Calcul Matriciel", "Opérations": "Calcul Matriciel", "Produit matriciel": "Calcul Matriciel", "Matrices par blocs": "Calcul Matriciel", "Matrice 2x2": "Calcul Matriciel", "Corps complexes": "Calcul Matriciel", "Corps de base": "Calcul Matriciel",
    "Transposition & Trace": "Trace & Symétrie", "Trace": "Trace & Symétrie", "Symétrie & Antisymétrie": "Trace & Symétrie", "Traces & Déterminants": "Trace & Symétrie",
    "Déterminant (Calculs)": "Déterminants", "Déterminant (Propriétés)": "Déterminants", "Déterminant": "Déterminants",
    "Puissances & Nilpotence": "Inversibilité & Puissances", "Calcul de puissances": "Inversibilité & Puissances", "Nilpotence": "Inversibilité & Puissances", "Inversibilité": "Inversibilité & Puissances", "Calcul d'inverse": "Inversibilité & Puissances",
    "Systèmes linéaires & Cramer": "Systèmes Linéaires & Gauss", "Cramer": "Systèmes Linéaires & Gauss", "Systèmes paramétrés": "Systèmes Linéaires & Gauss", "Systèmes homogènes": "Systèmes Linéaires & Gauss", "Solutions": "Systèmes Linéaires & Gauss", "Indétermination": "Systèmes Linéaires & Gauss", "Équivalence": "Systèmes Linéaires & Gauss", "Systèmes linéaires": "Systèmes Linéaires & Gauss", "Méthode de Gauss": "Systèmes Linéaires & Gauss", "Échelonnement": "Systèmes Linéaires & Gauss", "Rang & Échelonnement": "Systèmes Linéaires & Gauss",
    "Sous-Espaces Vectoriels": "Espaces Vectoriels & SEV", "Intersections": "Espaces Vectoriels & SEV", "Sous-espaces stables": "Espaces Vectoriels & SEV", "Sous-espaces cycliques": "Espaces Vectoriels & SEV", "Définition EV": "Espaces Vectoriels & SEV", "Espaces engendrés (Vect)": "Espaces Vectoriels & SEV", "Combinaisons Linéaires": "Espaces Vectoriels & SEV", "Combinaisons linéaires": "Espaces Vectoriels & SEV", "Vecteurs généralisés": "Espaces Vectoriels & SEV",
    "Familles Libres/Liées": "Bases, Dimension & Rang", "Bases": "Bases, Dimension & Rang", "Coordonnées": "Bases, Dimension & Rang", "Dimension": "Bases, Dimension & Rang", "Inégalités de dimension": "Bases, Dimension & Rang", "Dimensions": "Bases, Dimension & Rang", "Rang": "Bases, Dimension & Rang",
    "Définitions App Linéaires": "Applications Linéaires", "Espaces Vectoriels des applications": "Applications Linéaires", "Composition": "Applications Linéaires", "Isomorphismes": "Applications Linéaires", "Homothéties": "Applications Linéaires", "Idéal": "Applications Linéaires", "Noyau": "Applications Linéaires", "Image": "Applications Linéaires", "Noyau & Image": "Applications Linéaires", "Noyau & Injectivité": "Applications Linéaires", "Lemme des noyaux": "Applications Linéaires", "Théorème du rang": "Applications Linéaires",
    "Sommes": "Sommes & Projecteurs", "Somme Directe": "Sommes & Projecteurs", "Supplémentaires": "Sommes & Projecteurs", "Projecteurs & Symétries": "Sommes & Projecteurs",
    "Matrices d'applications": "Changement base & Similitude", "Représentation matricielle": "Changement base & Similitude", "Changement de base": "Changement base & Similitude", "Matrices semblables": "Changement base & Similitude", "Similitude": "Changement base & Similitude",
    "Éléments propres": "Éléments Propres & Polynômes", "Valeurs propres": "Éléments Propres & Polynômes", "Polynôme caractéristique": "Éléments Propres & Polynômes", "Méthode de Le Verrier": "Éléments Propres & Polynômes", "Polynômes d'endomorphismes": "Éléments Propres & Polynômes", "Polynômes annulateurs": "Éléments Propres & Polynômes", "Cayley-Hamilton": "Éléments Propres & Polynômes", "Polynôme minimal": "Éléments Propres & Polynômes", "Polynômes": "Éléments Propres & Polynômes", "Exemples classiques": "Éléments Propres & Polynômes",
    "Diagonalisation": "Diagonalisation & Trigo", "Théorème fondamental": "Diagonalisation & Trigo", "Conditions suffisantes": "Diagonalisation & Trigo", "Codiagonalisation": "Diagonalisation & Trigo", "Trigonalisation": "Diagonalisation & Trigo",
    "Réduction de Jordan": "Réduction de Jordan", "Sous-espaces caractéristiques": "Réduction de Jordan", "Matrice compagnon": "Réduction de Jordan", "Dunford / Jordan-Chevalley": "Réduction de Jordan",
    "Suites récurrentes": "Exponentielle & Suites", "Suites récurrentes linéaires": "Exponentielle & Suites", "Rayon spectral": "Exponentielle & Suites", "Normes": "Exponentielle & Suites", "Exponentielle matricielle": "Exponentielle & Suites", "Calcul diff": "Exponentielle & Suites"
};
const IGNORED_TAGS = ["Vrai/Faux", "Pièges", "Vocabulaire", "Exemples de base", "Pratique", "Propriétés", "Théorèmes", "Lois et Calculs", "Identités remarquables", "Pièges de TD", "Matrices"];

function cleanTags(tagsArr) {
    if (!tagsArr) return [];
    let newTags = new Set();
    tagsArr.forEach(t => {
        if (IGNORED_TAGS.includes(t)) return;
        newTags.add(TAG_MAP[t] || t);
    });
    return Array.from(newTags);
}

function removeCitations(text) {
    if (typeof text !== 'string') return text;
    return text.replace(/\[(?:cite|source):\s*\d+(?:,\s*\d+)*\]/g, '').trim();
}

// -----------------------------------------------------
// MODAL 
// -----------------------------------------------------
function customModal(title, msg, onConfirm = null, isConfirm = false) {
    const overlay = document.getElementById('modal-overlay');
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-message').textContent = msg;
    const cancelBtn = document.getElementById('modal-cancel-btn');
    const confirmBtn = document.getElementById('modal-confirm-btn');

    cancelBtn.onclick = () => overlay.classList.add('hidden');
    confirmBtn.className = isConfirm ? 'danger' : '';
    confirmBtn.textContent = 'OK';

    if (isConfirm) {
        cancelBtn.classList.remove('hidden');
        confirmBtn.onclick = () => { overlay.classList.add('hidden'); if (onConfirm) onConfirm(); };
    } else {
        cancelBtn.classList.add('hidden');
        confirmBtn.onclick = () => overlay.classList.add('hidden');
    }
    overlay.classList.remove('hidden');
}

function customAlert(title, msg) { customModal(title, msg, null, false); }
function customConfirm(title, msg, onConfirm) { customModal(title, msg, onConfirm, true); }

// -----------------------------------------------------
// NORMALISATION STRICTE
// -----------------------------------------------------
// -----------------------------------------------------
// NORMALISATION & FUSION (Correction Copilot)
// -----------------------------------------------------
// -----------------------------------------------------
// NORMALISATION & FUSION (Avec métadonnées SM-2 et Partiel)
// -----------------------------------------------------
// -----------------------------------------------------
// NORMALISATION & FUSION (Dossiers et Métadonnées)
// -----------------------------------------------------
function normalizeData(rawData) {
    rawData = rawData && typeof rawData === 'object' ? rawData : {};
    // Migration des anciens dossiers (_player.folders)
    let oldFolders = [];
    if (rawData?._player?.folders && Array.isArray(rawData._player.folders)) {
        oldFolders = rawData._player.folders.map(f => typeof f === 'string' ? f : f.name);
    }

    let validDeletedFolders = Array.isArray(rawData?._deletedFolders) ? rawData._deletedFolders : [];
    try {
        const localDeleted = JSON.parse(localStorage.getItem('myQuizDeletedFolders') || '[]');
        if (Array.isArray(localDeleted)) {
            validDeletedFolders = [...new Set([...validDeletedFolders, ...localDeleted])];
        }
    } catch (e) { }
    const deletedFoldersFilter = new Set(validDeletedFolders);

    let validFolders = Array.isArray(rawData?._folders) ? rawData._folders.filter(f => !deletedFoldersFilter.has(f)) : oldFolders.filter(f => !deletedFoldersFilter.has(f));
    validFolders = validFolders.filter(folder => typeof folder === 'string' && folder.trim());
    if (!validFolders.includes(DEFAULT_FOLDER)) validFolders.unshift(DEFAULT_FOLDER);
    validFolders = [...new Set(validFolders)]; // Suppression des doublons

    let valid = {
        _player: {
            xp: Number(rawData?._player?.xp) || 0,
            level: Number(rawData?._player?.level) || 1,
            dailyGoal: Math.max(1, Number(rawData?._player?.dailyGoal) || 10)
        },
        _folders: validFolders,
        _deleted: {},
        _deletedFolders: validDeletedFolders,
        _flashcards: Array.isArray(rawData?._flashcards) ? rawData._flashcards : []
    };

    for (let key in rawData) {
        if (key === '_player' || key === '_folders' || key === '_deleted' || key === '_flashcards' || key === '_deletedFolders') continue;
        let sub = rawData[key];

        if (sub && Array.isArray(sub.questions)) {
            // Récupération de l'ancien emplacement si présent
            let folderName = sub.folder || rawData?._player?.subjectFolders?.[key] || DEFAULT_FOLDER;
            if (deletedFoldersFilter.has(folderName)) folderName = DEFAULT_FOLDER;
            if (!valid._folders.includes(folderName)) valid._folders.push(folderName);

            valid[key] = {
                folder: folderName,
                course: sub.course || '',
                description: typeof sub.description === 'string' ? sub.description : '',
                prerequisites: Array.isArray(sub.prerequisites) ? sub.prerequisites.filter(item => typeof item === 'string') : [],
                questions: sub.questions.filter(q => q && typeof q.q === 'string').map((q, index) => normalizeQuestion(q, key, index)),
                stats: {
                    attempts: Number(sub.stats?.attempts) || 0,
                    correct: Number(sub.stats?.correct) || 0,
                    partial: Number(sub.stats?.partial) || 0
                },
                dailyValidations: sub.dailyValidations || {},
                archived: Boolean(sub.archived || folderName === ARCHIVE_FOLDER),
                deleted: Boolean(sub.deleted),
                isCustom: Boolean(sub.isCustom),
                isSelected: sub.isSelected !== undefined ? Boolean(sub.isSelected) : undefined,
                uploadedByMe: Boolean(sub.uploadedByMe),
                author: sub.author || '',
                uploadedAt: sub.uploadedAt || 0
            };
        }
    }
    valid._activity = Array.isArray(rawData._activity) ? rawData._activity.slice(-500) : [];
    valid._sessions = Array.isArray(rawData._sessions) ? rawData._sessions.slice(-100) : [];
    return valid;
}

// Fonction de fusion universelle et non-destructive :
// Fusionne : Base officielle (Cours/) + Sauvegarde Cloud/Local + Données déjà en mémoire (appData)
function mergeDataWithDefaults(incomingData, currentBase = null) {
    const baseCatalogue = typeof baseData !== 'undefined' ? baseData : {};
    if (!incomingData && !currentBase) return normalizeData(baseCatalogue);

    // 0. Récupérer l'ensemble des dossiers supprimés de manière persistante
    let localDeleted = [];
    try {
        localDeleted = JSON.parse(localStorage.getItem('myQuizDeletedFolders') || '[]');
        if (!Array.isArray(localDeleted)) localDeleted = [];
    } catch (e) { localDeleted = []; }

    const allDeletedFolders = new Set([
        ...localDeleted,
        ...(currentBase?._deletedFolders || []),
        ...(incomingData?._deletedFolders || [])
    ]);
    const deletedFoldersList = Array.from(allDeletedFolders).filter(f => f && f !== DEFAULT_FOLDER && f !== ARCHIVE_FOLDER);
    try {
        localStorage.setItem('myQuizDeletedFolders', JSON.stringify(deletedFoldersList));
    } catch (e) { }

    // 1. Initialiser avec le catalogue officiel
    let merged = JSON.parse(JSON.stringify(baseCatalogue));
    merged._deletedFolders = deletedFoldersList;

    // 2. Préserver d'abord TOUS les cours personnalisés présents dans currentBase (mémoire locale)
    if (currentBase && typeof currentBase === 'object') {
        Object.keys(currentBase).forEach(sub => {
            if (!sub.startsWith('_') && (!merged[sub] || currentBase[sub]?.isCustom) && currentBase[sub]?.questions) {
                merged[sub] = JSON.parse(JSON.stringify(currentBase[sub]));
            }
        });
    }

    // Récupérer également le registre de cours personnalisés isolés de communityAdmin
    if (window.communityAdmin && typeof window.communityAdmin.getCustomSubjectsRegistry === 'function') {
        const customReg = window.communityAdmin.getCustomSubjectsRegistry();
        Object.keys(customReg).forEach(sub => {
            if (!merged[sub] || merged[sub]?.isCustom || (merged[sub]?.questions?.length || 0) <= (customReg[sub]?.questions?.length || 0)) {
                merged[sub] = JSON.parse(JSON.stringify(customReg[sub]));
            }
        });
    }

    if (!incomingData) return normalizeData(merged);

    // 3. Cas A : Payload Delta Cloud Supabase (_isDelta: true)
    if (incomingData._isDelta) {
        // Restaurer les cours personnalisés sauvegardés dans le cloud
        if (incomingData._customSubjects && typeof incomingData._customSubjects === 'object') {
            Object.keys(incomingData._customSubjects).forEach(sub => {
                if (!sub.startsWith('_') && incomingData._customSubjects[sub]?.questions) {
                    merged[sub] = JSON.parse(JSON.stringify(incomingData._customSubjects[sub]));
                }
            });
        }

        // Progression du joueur : TOUJOURS prendre le max pour éviter toute perte
        const pIn = incomingData._player || {};
        const pCur = (currentBase && currentBase._player) || {};
        merged._player = {
            xp: Math.max(Number(pIn.xp) || 0, Number(pCur.xp) || 0, Number(merged._player?.xp) || 0),
            level: Math.max(Number(pIn.level) || 1, Number(pCur.level) || 1, Number(merged._player?.level) || 1),
            dailyGoal: Number(pIn.dailyGoal) || Number(pCur.dailyGoal) || 10,
            workoutXP: Math.max(Number(pIn.workoutXP) || 0, Number(pCur.workoutXP) || 0),
            quizXP: Math.max(Number(pIn.quizXP) || 0, Number(pCur.quizXP) || 0)
        };

        merged._activity = (incomingData._activity || currentBase?._activity || []).slice(-300);
        merged._sessions = (incomingData._sessions || currentBase?._sessions || []).slice(-100);

        if (incomingData._mastery && window.MasteryTracker) {
            try { localStorage.setItem(window.MasteryTracker.STORAGE_KEY, JSON.stringify(incomingData._mastery)); } catch (e) { }
        }

        // Réapplication de la progression (stats & répétition espacée SM-2)
        if (incomingData._progress) {
            Object.keys(incomingData._progress).forEach(sub => {
                if (merged[sub] && Array.isArray(merged[sub].questions)) {
                    const prog = incomingData._progress[sub];
                    merged[sub].questions.forEach((q, idx) => {
                        const hashId = getQuestionId(sub, q, idx);
                        const saved = prog[q.id] || prog[hashId] || prog[q.q];
                        if (saved) {
                            if (saved.stats) {
                                q.stats = {
                                    attempts: Math.max(Number(q.stats?.attempts) || 0, Number(saved.stats.attempts) || 0),
                                    correct: Math.max(Number(q.stats?.correct) || 0, Number(saved.stats.correct) || 0),
                                    partial: Math.max(Number(q.stats?.partial) || 0, Number(saved.stats.partial) || 0)
                                };
                            }
                            if (saved.sm2) {
                                q.sm2 = Object.assign(q.sm2 || {}, saved.sm2);
                            }
                        }
                    });
                }
            });
        }

        // Synchroniser les flashcards
        if (Array.isArray(incomingData._flashcards) || Array.isArray(currentBase?._flashcards)) {
            const fcMap = new Map();
            (currentBase?._flashcards || []).forEach(c => c && c.id && fcMap.set(c.id, c));
            (incomingData._flashcards || []).forEach(c => c && c.id && fcMap.set(c.id, c));
            merged._flashcards = Array.from(fcMap.values());
        }

        // Synchroniser tous les dossiers (en excluant formellement tous les dossiers supprimés)
        let folders = [
            ...(baseCatalogue._folders || []).filter(f => !allDeletedFolders.has(f)),
            ...(merged._folders || []).filter(f => !allDeletedFolders.has(f)),
            ...(incomingData._folders || []).filter(f => !allDeletedFolders.has(f))
        ];
        Object.keys(merged).forEach(sub => {
            if (!sub.startsWith('_') && merged[sub]?.folder) {
                if (allDeletedFolders.has(merged[sub].folder)) {
                    merged[sub].folder = DEFAULT_FOLDER;
                }
                if (!allDeletedFolders.has(merged[sub].folder)) {
                    folders.push(merged[sub].folder);
                }
            }
        });
        (merged._flashcards || []).forEach(c => {
            if (c && allDeletedFolders.has(c.folder)) c.folder = DEFAULT_FOLDER;
        });
        if (!folders.includes(DEFAULT_FOLDER)) folders.unshift(DEFAULT_FOLDER);
        merged._folders = [...new Set(folders.filter(f => f && typeof f === 'string' && !allDeletedFolders.has(f)))];
        merged._deletedFolders = deletedFoldersList;

        return normalizeData(merged);
    }

    // 4. Cas B : Sauvegarde complète (JSON local ou full backup)
    const normalizedIn = normalizeData(incomingData);

    const pIn = normalizedIn._player || {};
    const pCur = (currentBase && currentBase._player) || {};
    merged._player = {
        xp: Math.max(Number(pIn.xp) || 0, Number(pCur.xp) || 0),
        level: Math.max(Number(pIn.level) || 1, Number(pCur.level) || 1),
        dailyGoal: Number(pIn.dailyGoal) || Number(pCur.dailyGoal) || 10,
        workoutXP: Math.max(Number(pIn.workoutXP) || 0, Number(pCur.workoutXP) || 0),
        quizXP: Math.max(Number(pIn.quizXP) || 0, Number(pCur.quizXP) || 0)
    };

    merged._activity = (normalizedIn._activity || currentBase?._activity || []).slice(-300);
    merged._sessions = (normalizedIn._sessions || currentBase?._sessions || []).slice(-100);

    for (let subject in normalizedIn) {
        if (subject.startsWith('_')) continue;
        if (merged[subject]) {
            merged[subject].folder = normalizedIn[subject].folder || merged[subject].folder || DEFAULT_FOLDER;
            merged[subject].course = normalizedIn[subject].course || merged[subject].course || '';
            merged[subject].description = normalizedIn[subject].description || merged[subject].description || '';
            merged[subject].prerequisites = normalizedIn[subject].prerequisites || merged[subject].prerequisites || [];

            merged[subject].stats = {
                attempts: Math.max(Number(merged[subject].stats?.attempts) || 0, Number(normalizedIn[subject].stats?.attempts) || 0),
                correct: Math.max(Number(merged[subject].stats?.correct) || 0, Number(normalizedIn[subject].stats?.correct) || 0),
                partial: Math.max(Number(merged[subject].stats?.partial) || 0, Number(normalizedIn[subject].stats?.partial) || 0)
            };
            merged[subject].dailyValidations = Object.assign({}, merged[subject].dailyValidations || {}, normalizedIn[subject].dailyValidations || {});

            merged[subject].questions.forEach((q, idx) => {
                const hashId = getQuestionId(subject, q, idx);
                const cloudQ = normalizedIn[subject].questions.find(cq => cq.id === q.id || cq.id === hashId || cq.q === q.q);
                if (cloudQ) {
                    if (cloudQ.stats) {
                        q.stats = {
                            attempts: Math.max(Number(q.stats?.attempts) || 0, Number(cloudQ.stats.attempts) || 0),
                            correct: Math.max(Number(q.stats?.correct) || 0, Number(cloudQ.stats.correct) || 0),
                            partial: Math.max(Number(q.stats?.partial) || 0, Number(cloudQ.stats.partial) || 0)
                        };
                    }
                    if (cloudQ.sm2) q.sm2 = Object.assign(q.sm2 || {}, cloudQ.sm2);
                }
            });

            normalizedIn[subject].questions.forEach(cq => {
                const exists = merged[subject].questions.some(q => q.id === cq.id || q.q === cq.q);
                if (!exists) merged[subject].questions.push(cq);
            });
        } else {
            // Matière personnalisée créée/uploadée : préservée intégralement !
            merged[subject] = normalizedIn[subject];
        }
    }

    // Synchroniser les flashcards (Sauvegarde complète)
    if (Array.isArray(normalizedIn._flashcards) || Array.isArray(currentBase?._flashcards)) {
        const fcMap = new Map();
        (currentBase?._flashcards || []).forEach(c => c && c.id && fcMap.set(c.id, c));
        (normalizedIn._flashcards || []).forEach(c => c && c.id && fcMap.set(c.id, c));
        merged._flashcards = Array.from(fcMap.values());
    }

    // Synchroniser tous les dossiers (en excluant formellement tous les dossiers supprimés)
    let combinedFolders = [
        ...(baseCatalogue._folders || []).filter(f => !allDeletedFolders.has(f)),
        ...(merged._folders || []).filter(f => !allDeletedFolders.has(f)),
        ...(normalizedIn._folders || []).filter(f => !allDeletedFolders.has(f))
    ];
    Object.keys(merged).forEach(sub => {
        if (!sub.startsWith('_') && merged[sub]?.folder) {
            if (allDeletedFolders.has(merged[sub].folder)) {
                merged[sub].folder = DEFAULT_FOLDER;
            }
            if (!allDeletedFolders.has(merged[sub].folder)) {
                combinedFolders.push(merged[sub].folder);
            }
        }
    });
    (merged._flashcards || []).forEach(c => {
        if (c && allDeletedFolders.has(c.folder)) c.folder = DEFAULT_FOLDER;
    });
    if (!combinedFolders.includes(DEFAULT_FOLDER)) combinedFolders.unshift(DEFAULT_FOLDER);
    merged._folders = [...new Set(combinedFolders.filter(f => f && typeof f === 'string' && !allDeletedFolders.has(f)))];
    merged._deletedFolders = deletedFoldersList;

    return normalizeData(merged);
}

// Initialisation au démarrage avec le localStorage
const baseData = typeof defaultData !== 'undefined' ? normalizeData(defaultData) : { _player: { xp: 0, level: 1 }, _folders: [DEFAULT_FOLDER] };
const localSave = localStorage.getItem('myQuizData');
let appData = baseData;
window.appData = appData;
try {
    Object.defineProperty(window, 'appData', {
        get() { return appData; },
        set(v) { appData = v; },
        configurable: true
    });
} catch (e) {
    window.appData = appData;
}
try {
    Object.defineProperty(window, 'currentUser', {
        get() { return currentUser; },
        set(v) { currentUser = v; },
        configurable: true
    });
} catch (e) {
    window.currentUser = currentUser;
}

if (localSave) {
    try {
        appData = mergeDataWithDefaults(JSON.parse(localSave), baseData);
        window.appData = appData;
    } catch (error) {
        console.error('Sauvegarde locale corrompue, copie de secours conservée :', error);
        try { localStorage.setItem('myQuizData_rescue', localSave); } catch (e) { }
    }
}

// Sécurité Anti-Perte : Restaurer immédiatement tous les cours uploadés dans appData
if (window.communityAdmin && typeof window.communityAdmin.restoreIsolatedCustomSubjects === 'function') {
    window.communityAdmin.restoreIsolatedCustomSubjects(appData);
}

// -----------------------------------------------------
// AUTHENTIFICATION & SAUVEGARDE CLOUD
// -----------------------------------------------------
async function checkSession() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session) {
        currentUser = session.user;
        initAppAfterAuth();
    } else {
        showAuthScreen();
    }
}

function showAuthScreen() {
    document.getElementById('app-container').classList.add('hidden');
    document.getElementById('auth-container').classList.remove('hidden');
}

async function initAppAfterAuth() {
    document.getElementById('auth-container').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');

    document.getElementById('profile-email').value = currentUser.email;

    // 1. Récupération des données Supabase
    const { data, error } = await supabaseClient
        .from('quiz_data')
        .select('id, content')
        .eq('user_id', currentUser.id)
        .maybeSingle();

    if (data && data.content) {
        dbRowId = data.id;
        // FUSION NON-DESTRUCTIVE : Préserve le catalogue officiel, les cours locaux et la sauvegarde Supabase
        appData = mergeDataWithDefaults(data.content, appData);
    } else {
        // Premier lancement du compte : création de la ligne
        const { data: insertData, error: insertError } = await supabaseClient
            .from('quiz_data')
            .insert([{ user_id: currentUser.id, content: appData }])
            .select()
            .single();

        if (insertData) dbRowId = insertData.id;
    }

    // Sécurité Anti-Perte post-auth : Réinjection des cours personnalisés & enregistrement annuaire
    if (window.communityAdmin) {
        if (typeof window.communityAdmin.restoreIsolatedCustomSubjects === 'function') {
            window.communityAdmin.restoreIsolatedCustomSubjects(appData);
        }
        if (typeof window.communityAdmin.recordUserInDirectory === 'function') {
            window.communityAdmin.recordUserInDirectory();
        }
    }

    restoreQuizState();
    showView('workout-hub-view');
    updatePlayerUI();
}

async function handleSignup() {
    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;
    const msgEl = document.getElementById('auth-msg');

    if (!email || password.length < 6) {
        msgEl.textContent = "Email invalide ou mot de passe trop court (6 car. min).";
        msgEl.style.color = "var(--danger)";
        msgEl.classList.remove('hidden');
        return;
    }

    msgEl.textContent = "Création du compte en cours...";
    msgEl.style.color = "var(--warning)";
    msgEl.classList.remove('hidden');

    const { data, error } = await supabaseClient.auth.signUp({ email, password });

    if (error) {
        msgEl.textContent = "Erreur : " + error.message;
        msgEl.style.color = "var(--danger)";
    } else {
        msgEl.textContent = "Compte créé avec succès ! Tu peux maintenant te connecter.";
        msgEl.style.color = "var(--success)";
    }
}

async function handleLogin() {
    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;
    const msgEl = document.getElementById('auth-msg');

    msgEl.textContent = "Connexion en cours...";
    msgEl.style.color = "var(--warning)";
    msgEl.classList.remove('hidden');

    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

    if (error) {
        msgEl.textContent = "Erreur : " + error.message;
        msgEl.style.color = "var(--danger)";
    } else {
        msgEl.classList.add('hidden');
        currentUser = data.user;
        initAppAfterAuth();
    }
}

function startGuestMode() {
    currentUser = { email: "local@etudiant", id: "guest_local" };
    document.getElementById('auth-container').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');
    restoreQuizState();
    showView('workout-hub-view');
    updatePlayerUI();
}

async function handleLogout() {
    await supabaseClient.auth.signOut();
    currentUser = null;
    dbRowId = null;
    showAuthScreen();
}

async function updateUserProfile() {
    const email = document.getElementById('profile-email').value.trim();
    const password = document.getElementById('profile-password').value;
    const updates = {};

    if (email && email !== currentUser.email) updates.email = email;
    if (password) updates.password = password;

    if (Object.keys(updates).length === 0) return customAlert("Profil", "Aucune modification à enregistrer.");

    const { data, error } = await supabaseClient.auth.updateUser(updates);

    if (error) {
        customAlert("Erreur", "Mise à jour impossible : " + error.message);
    } else {
        customAlert("Succès", "Profil mis à jour !");
        currentUser = data.user;
        document.getElementById('profile-password').value = "";
    }
}

function createLocalBackup(force = false) {
    const now = Date.now();
    const lastBackup = Number(localStorage.getItem('myQuizLastBackupAt')) || 0;
    if (!force && now - lastBackup < 15 * 60 * 1000) return; // Sauvegarde toutes les 15 minutes
    try {
        let backups = [];
        try {
            backups = JSON.parse(localStorage.getItem('myQuizBackups') || '[]');
            if (!Array.isArray(backups)) backups = [];
        } catch (e) {
            backups = [];
        }

        const totalQ = Object.keys(appData || {}).filter(k => !k.startsWith('_')).reduce((acc, k) => acc + (appData[k]?.questions?.length || 0), 0);
        if (totalQ > 0) {
            const snapshot = { at: now, content: JSON.parse(JSON.stringify(appData)) };
            backups.push(snapshot);
            // Conserver au maximum 2 snapshots pour respecter la limite de 5Mo de localStorage
            backups = backups.slice(-2);

            let saved = false;
            while (backups.length > 0 && !saved) {
                try {
                    localStorage.setItem('myQuizBackups', JSON.stringify(backups));
                    saved = true;
                } catch (quotaErr) {
                    console.warn('[Backup] Quota atteint, réduction des snapshots...');
                    backups.shift(); // Réduire le nombre de sauvegardes
                }
            }
            if (saved) {
                try { localStorage.setItem('myQuizLastBackupAt', String(now)); } catch (e) { }
            }
        }
    } catch (error) {
        console.warn('Impossible de créer la sauvegarde locale (quota sécurisé) :', error.message);
    }
}

async function restoreLatestBackup() {
    try {
        const backups = JSON.parse(localStorage.getItem('myQuizBackups') || '[]');
        if (!backups.length) return customAlert('Restauration', 'Aucune sauvegarde automatique trouvée dans le stockage local.');

        // Prendre la sauvegarde la plus complète ou la plus récente
        const sorted = [...backups].reverse();
        const best = sorted.find(b => {
            const subs = Object.keys(b.content || {}).filter(k => !k.startsWith('_'));
            return subs.length > 0;
        }) || sorted[0];

        if (!best?.content) return customAlert('Restauration', 'Aucune sauvegarde valide disponible.');

        const countSubs = Object.keys(best.content).filter(k => !k.startsWith('_')).length;
        const xp = best.content._player?.xp || 0;
        const dateStr = new Date(best.at).toLocaleString();

        customConfirm('Restauration de secours',
            `Restaurer et fusionner la sauvegarde du ${dateStr} (${countSubs} matière(s), ${xp} XP) ?\nTes cours personnels et ton historique seront intégralement récupérés.`,
            async () => {
                appData = mergeDataWithDefaults(best.content, appData);
                await saveData();
                updatePlayerUI();
                renderHome();
                customAlert('Restauration réussie', `La sauvegarde a été fusionnée : ${countSubs} matière(s) restaurée(s) avec succès !`);
            }
        );
    } catch (error) {
        customAlert('Restauration', 'Erreur lors de la lecture des sauvegardes : ' + error.message);
    }
}

function exportStatisticsCSV() {
    const rows = [['type', 'date', 'matiere', 'questionId', 'correcte', 'partielle', 'confiance', 'temps_ms', 'score', 'total', 'duree_ms']];
    (appData._activity || []).forEach(activity => rows.push([
        'réponse', new Date(activity.at).toISOString(), activity.subject, activity.questionId,
        activity.correct, activity.partial, activity.confidence, activity.responseTime, '', '', ''
    ]));
    (appData._sessions || []).forEach(sessionRecord => rows.push([
        'session', new Date(sessionRecord.at).toISOString(), sessionRecord.subject, '', '', '', '', '',
        sessionRecord.score, sessionRecord.total, sessionRecord.duration
    ]));
    const csv = '\ufeff' + rows.map(row => row.map(value => `"${String(value ?? '').replaceAll('"', '""')}"`).join(';')).join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `quizzhub-statistiques-${getTodayStr()}.csv`;
    link.click();
    URL.revokeObjectURL(url);
}

function extractUserDelta() {
    const delta = {
        _isDelta: true,
        _player: appData._player || { xp: 0, level: 1, workoutXP: 0, quizXP: 0 },
        _activity: (appData._activity || []).slice(-200),
        _sessions: (appData._sessions || []).slice(-100),
        _workoutHistory: (appData._workoutHistory || []).slice(-200),
        _mastery: window.MasteryTracker ? window.MasteryTracker.init() : {},
        _customSubjects: {}, // Sauvegarde intégrale des cours personnalisés uploadés par l'utilisateur
        _flashcards: (appData._flashcards || []).slice(-1000), // Persistance Cloud des Flashcards
        _deletedFolders: appData._deletedFolders || [], // Persistance Cloud des dossiers supprimés
        _selectedCommunitySubjects: (window.communityAdmin && typeof window.communityAdmin.getSelectedSubjectsList === 'function')
            ? window.communityAdmin.getSelectedSubjectsList()
            : [],
        _progress: {}
    };

    // 1. Sauvegarde de tous les cours personnalisés dans le Cloud
    const customRegistry = (window.communityAdmin && window.communityAdmin.getCustomSubjectsRegistry)
        ? window.communityAdmin.getCustomSubjectsRegistry()
        : {};

    // S'assurer que tous les cours du registre sont inclus dans le delta
    Object.keys(customRegistry).forEach(sub => {
        if (customRegistry[sub]?.questions) {
            delta._customSubjects[sub] = JSON.parse(JSON.stringify(customRegistry[sub]));
        }
    });

    Object.keys(appData).forEach(sub => {
        if (sub.startsWith('_') || appData[sub]?.deleted) return;
        const isCustom = appData[sub]?.isCustom || Boolean(customRegistry[sub]) || (!baseData || !baseData[sub]);
        if (isCustom && appData[sub]?.questions) {
            delta._customSubjects[sub] = JSON.parse(JSON.stringify(appData[sub]));
        }
    });

    // 2. Sauvegarde de la progression sur tous les cours
    Object.keys(appData).forEach(sub => {
        if (sub.startsWith('_')) return;
        const subProgress = {};
        (appData[sub].questions || []).forEach((q, idx) => {
            if ((q.stats && q.stats.attempts > 0) || (q.sm2 && q.sm2.repetition > 0)) {
                const progData = { stats: q.stats, sm2: q.sm2 };
                if (q.id) subProgress[q.id] = progData;
                if (q.q) subProgress[q.q] = progData;
                const hashId = getQuestionId(sub, q, idx);
                if (hashId) subProgress[hashId] = progData;
            }
        });
        if (Object.keys(subProgress).length > 0) {
            delta._progress[sub] = subProgress;
        }
    });
    return delta;
}

let saveQueue = Promise.resolve();
let cloudSyncTimeout = null;
async function saveData(immediate = false) {
    // Sauvegarde locale de sécurité immédiate
    try {
        localStorage.setItem('myQuizData', JSON.stringify(appData));
    } catch (e) {
        console.warn("Quota atteint pour myQuizData, libération d'espace...", e.message);
        try {
            localStorage.removeItem('myQuizBackups');
            localStorage.setItem('myQuizData', JSON.stringify(appData));
        } catch (e2) {
            console.error("Échec persistance myQuizData locale:", e2);
        }
    }
    createLocalBackup();

    // Mettre à jour l'annuaire local pour l'admin
    if (window.communityAdmin && typeof window.communityAdmin.recordUserInDirectory === 'function') {
        try { window.communityAdmin.recordUserInDirectory(); } catch (err) { }
    }

    // Synchro Cloud
    if (currentUser && dbRowId) {
        clearTimeout(cloudSyncTimeout);
        const executeCloudSync = () => {
            const deltaPayload = extractUserDelta();
            saveQueue = saveQueue.then(async () => {
                const { error } = await supabaseClient
                    .from('quiz_data')
                    .update({ content: deltaPayload, updated_at: new Date().toISOString() })
                    .eq('id', dbRowId);
                if (error) console.error("Erreur synchro Supabase:", error.message);
            }).catch(error => console.error('Erreur dans la file de sauvegarde :', error));
        };

        if (immediate) {
            executeCloudSync();
        } else {
            cloudSyncTimeout = setTimeout(executeCloudSync, 1000);
        }
    }
}

function exportData() {
    // S'assurer que tous les cours custom du registre sont présents dans appData avant l'export
    if (window.communityAdmin && typeof window.communityAdmin.restoreIsolatedCustomSubjects === 'function') {
        window.communityAdmin.restoreIsolatedCustomSubjects(appData);
    }
    const blob = new Blob([JSON.stringify(appData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", url);
    dlAnchorElem.setAttribute("download", `quizzhub_backup_${new Date().toISOString().slice(0, 10)}.json`);
    dlAnchorElem.click();
    URL.revokeObjectURL(url);
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async function (e) {
        try {
            createLocalBackup(true);
            const imported = JSON.parse(e.target.result);
            appData = mergeDataWithDefaults(imported, appData);
            window.appData = appData;

            // Enregistrer tous les cours personnalisés de l'import dans le registre anti-perte
            Object.keys(appData).forEach(sub => {
                if (!sub.startsWith('_') && (appData[sub].isCustom || (!baseData || !baseData[sub]))) {
                    appData[sub].isCustom = true;
                    appData[sub].isSelected = true;
                    if (window.communityAdmin && window.communityAdmin.saveCustomSubjectToRegistry) {
                        window.communityAdmin.saveCustomSubjectToRegistry(sub, appData[sub]);
                    }
                    if (window.communityAdmin && window.communityAdmin.addSubjectToUserSelection) {
                        window.communityAdmin.addSubjectToUserSelection(sub);
                    }
                }
            });

            await saveData(true);
            updatePlayerUI();
            renderHome();
            customAlert("Succès", "Sauvegarde importée et fusionnée avec succès ! Vos matières et flashcards sont restaurées.");
            showView('home-view');
            event.target.value = "";
        } catch (err) { customAlert("Erreur", "Fichier JSON corrompu ou invalide : " + err.message); }
    };
    reader.readAsText(file);
}

function resetData() {
    createLocalBackup(true);
    localStorage.removeItem('myQuizData');
    localStorage.removeItem('myQuizDeletedFolders');
    appData = normalizeData(JSON.parse(JSON.stringify(defaultData || {})));
    appData._player = { xp: 0, level: 1 };
    saveData();
    renderHome();
    customAlert("Réinitialisation", "Toutes les données ont été remises à zéro.");
}


// -----------------------------------------------------
// GESTION DES DOSSIERS
// -----------------------------------------------------
async function createFolder() {
    const folderName = document.getElementById('new-folder-name').value.trim();
    if (!folderName) return;

    // Si le dossier avait été supprimé précédemment, le réactiver en le retirant des dossiers supprimés
    if (Array.isArray(appData._deletedFolders)) {
        appData._deletedFolders = appData._deletedFolders.filter(f => f !== folderName);
        try {
            localStorage.setItem('myQuizDeletedFolders', JSON.stringify(appData._deletedFolders));
        } catch (e) { }
    }

    if (!appData._folders.includes(folderName)) {
        appData._folders.push(folderName);
        await saveData(true);
        document.getElementById('new-folder-name').value = "";
        renderHome();
        customAlert("Dossier", `Dossier '${folderName}' créé !`);
    } else {
        customAlert("Erreur", "Ce dossier existe déjà.");
    }
}

async function deleteFolder(folderName) {
    if (!folderName || folderName === DEFAULT_FOLDER || folderName === ARCHIVE_FOLDER) {
        customAlert("Action impossible", `Le dossier "${folderName}" est un dossier système et ne peut pas être supprimé.`);
        return;
    }
    const subjectsInFolder = Object.keys(appData).filter(s => !s.startsWith('_') && !appData[s]?.deleted && appData[s]?.folder === folderName);
    const count = subjectsInFolder.length;

    const performDelete = async () => {
        // 1. Déplacer toutes les matières dans Général
        subjectsInFolder.forEach(s => {
            appData[s].folder = DEFAULT_FOLDER;
            if (window.communityAdmin && window.communityAdmin.saveCustomSubjectToRegistry && appData[s].isCustom) {
                window.communityAdmin.saveCustomSubjectToRegistry(s, appData[s]);
            }
        });

        // 2. Déplacer toutes les flashcards dans Général
        (appData._flashcards || []).forEach(c => {
            if (c.folder === folderName) c.folder = DEFAULT_FOLDER;
        });

        // 3. Enregistrer le dossier dans la liste définitive des dossiers supprimés
        if (!Array.isArray(appData._deletedFolders)) appData._deletedFolders = [];
        if (!appData._deletedFolders.includes(folderName)) {
            appData._deletedFolders.push(folderName);
        }
        try {
            localStorage.setItem('myQuizDeletedFolders', JSON.stringify(appData._deletedFolders));
        } catch (e) { }

        // 4. Retirer le dossier de la liste active et des dossiers ouverts
        appData._folders = (appData._folders || []).filter(f => f !== folderName);
        openFolders.delete(folderName);

        await saveData(true);
        renderHome();
        if (window.flashcardManager && typeof window.flashcardManager.renderView === 'function') {
            window.flashcardManager.renderView();
        }
        customAlert("Dossier supprimé", `Le dossier "${folderName}" a été définitivement supprimé.${count > 0 ? ` Les ${count} matière(s) ont été déplacées dans "${DEFAULT_FOLDER}".` : ''}`);
    };

    if (count > 0) {
        customConfirm("Supprimer le dossier", `Le dossier "${folderName}" contient ${count} matière(s). Supprimer ce dossier et déplacer ses matières vers "${DEFAULT_FOLDER}" ?`, performDelete);
    } else {
        performDelete();
    }
}
window.deleteFolder = deleteFolder;

function getHomeFolderOptions() {
    return (appData._folders || []).filter(folder => folder !== ARCHIVE_FOLDER);
}

async function changeSubjectFolder(newFolder) {
    if (!appData[currentSubject]) return;
    if (!appData._folders.includes(newFolder)) return;

    appData[currentSubject].folder = newFolder;
    await saveData();
    customAlert("Matière déplacée", `Matière déplacée vers ${newFolder}`);
}

function populateFolderSelects() {
    const selectNew = document.getElementById('new-subject-folder');
    const selectChange = document.getElementById('subject-folder-select');
    const selectFilter = document.getElementById('filter-folder');

    if (selectNew) selectNew.innerHTML = "";
    if (selectChange) selectChange.innerHTML = "";

    let filterValue = "ALL";
    if (selectFilter) {
        filterValue = selectFilter.value;
        selectFilter.innerHTML = '<option value="ALL">📂 Tous les dossiers</option>';
    }

    const regularFolders = getHomeFolderOptions();
    const allFolders = appData._folders || [];
    regularFolders.forEach(f => {
        if (selectNew) selectNew.add(new Option(f, f));
        if (selectFilter) selectFilter.add(new Option(f, f));
    });
    allFolders.forEach(f => {
        if (selectChange) selectChange.add(new Option(f, f));
    });
    if (selectFilter && allFolders.includes(ARCHIVE_FOLDER)) {
        selectFilter.add(new Option(`📦 ${ARCHIVE_FOLDER}`, ARCHIVE_FOLDER));
    }
    if (selectFilter) selectFilter.value = filterValue;
}

async function addSubject() {
    const name = document.getElementById('new-subject-name').value.trim();
    const folder = document.getElementById('new-subject-folder').value || DEFAULT_FOLDER;
    const normalizedName = name.toLowerCase().replace(/\s+/g, ' ');
    const alreadyExists = Object.keys(appData).some(subject => !subject.startsWith('_') && subject.toLowerCase().replace(/\s+/g, ' ') === normalizedName);
    if (name && !alreadyExists && !name.startsWith('_')) {
        appData[name] = { folder: folder, questions: [], stats: { attempts: 0, correct: 0 }, dailyValidations: {} };
        await saveData();
        document.getElementById('new-subject-name').value = "";
        renderHome();
    } else if (name) {
        customAlert('Matière', 'Une matière portant ce nom existe déjà.');
    }
}

function renderCreateSubjectView() {
    const folderSelect = document.getElementById('created-subject-folder');
    const prerequisiteSelect = document.getElementById('created-subject-prerequisites');
    if (folderSelect) folderSelect.innerHTML = appData._folders.map(folder => `<option value="${folder.replaceAll('"', '&quot;')}">${folder}</option>`).join('');
    if (prerequisiteSelect) {
        const subjects = Object.keys(appData).filter(subject => !subject.startsWith('_')).sort();
        prerequisiteSelect.innerHTML = subjects.map(subject => `<option value="${subject.replaceAll('"', '&quot;')}">${subject}</option>`).join('');
    }
}

async function createSubjectFromApp() {
    const nameInput = document.getElementById('created-subject-name');
    const message = document.getElementById('create-subject-message');
    const name = nameInput.value.trim();
    if (!name) {
        message.textContent = 'Donne un nom à la matière.';
        message.style.color = 'var(--danger)';
        return;
    }
    const normalizedName = name.toLowerCase().replace(/\s+/g, ' ');
    const alreadyExists = Object.keys(appData).some(subject => !subject.startsWith('_') && subject.toLowerCase().replace(/\s+/g, ' ') === normalizedName);
    if (alreadyExists || name.startsWith('_')) {
        message.textContent = 'Cette matière existe déjà ou ce nom est réservé.';
        message.style.color = 'var(--danger)';
        return;
    }
    const prerequisites = [...document.getElementById('created-subject-prerequisites').selectedOptions].map(option => option.value).filter(subject => subject !== name);
    appData[name] = {
        folder: document.getElementById('created-subject-folder').value || DEFAULT_FOLDER,
        description: document.getElementById('created-subject-description').value.trim(),
        prerequisites,
        questions: [],
        stats: { attempts: 0, correct: 0, partial: 0 },
        dailyValidations: {},
        isCustom: true,
        isSelected: true,
        uploadedByMe: true,
        author: currentUser ? currentUser.email : 'local@etudiant',
        uploadedAt: Date.now()
    };
    if (window.communityAdmin && window.communityAdmin.saveCustomSubjectToRegistry) {
        window.communityAdmin.saveCustomSubjectToRegistry(name, appData[name]);
    }
    if (window.communityAdmin && window.communityAdmin.addSubjectToUserSelection) {
        window.communityAdmin.addSubjectToUserSelection(name);
    }
    await saveData(true);
    nameInput.value = '';
    document.getElementById('created-subject-description').value = '';
    message.textContent = 'Matière créée et sauvegardée. Tu peux maintenant ajouter ses questions.';
    message.style.color = 'var(--success)';
    renderCreateSubjectView();
    renderHome();
}


// -----------------------------------------------------
// ETAT GLOBAL UI & QUIZ
// -----------------------------------------------------
let currentSubject = "";
let openFolders = new Set();
window.openFolders = openFolders;
let editingQuestionRef = null;
let activeTagsForNewQuestion = new Set(), activeFilterTags = new Set(), globalCustomFilterTags = new Set();

const session = {
    mode: null,
    questions: [],
    currentIndex: 0,
    score: 0,
    failedQuestions: [],
    timerInterval: null,
    timeRemaining: 0,
    timerEnabled: false,
    questionStartedAt: 0,
    pendingResult: null,
    startedAt: 0,
    answeredCount: 0,
    correctCount: 0,
    partialCount: 0,
    examMode: false,
    examAnswers: [],
    note: ''
};

function hasActiveQuiz() {
    return Boolean(session.mode && session.questions.length && session.currentIndex < session.questions.length);
}

function persistQuizState() {
    if (!hasActiveQuiz()) {
        sessionStorage.removeItem(ACTIVE_QUIZ_KEY);
        return;
    }

    const state = {
        mode: session.mode,
        questions: session.questions.map(item => ({ id: item.originalRef.id, subjectRef: item.subjectRef })),
        currentIndex: session.currentIndex,
        score: session.score,
        failedQuestions: session.failedQuestions,
        timeRemaining: session.timeRemaining,
        timerEnabled: session.timerEnabled,
        questionStartedAt: session.questionStartedAt,
        pendingResult: session.pendingResult,
        startedAt: session.startedAt,
        answeredCount: session.answeredCount,
        correctCount: session.correctCount,
        partialCount: session.partialCount,
        examMode: session.examMode,
        examAnswers: session.examAnswers,
        note: session.note
    };

    try {
        sessionStorage.setItem(ACTIVE_QUIZ_KEY, JSON.stringify(state));
    } catch (error) {
        console.error('Impossible de sauvegarder la session de quiz :', error);
    }
}

function clearQuizState() {
    session.mode = null;
    session.questions = [];
    session.currentIndex = 0;
    session.score = 0;
    session.failedQuestions = [];
    session.timerEnabled = false;
    session.timeRemaining = 0;
    session.questionStartedAt = 0;
    session.pendingResult = null;
    session.startedAt = 0;
    session.answeredCount = 0;
    session.correctCount = 0;
    session.partialCount = 0;
    session.examMode = false;
    session.examAnswers = [];
    session.note = '';
    sessionStorage.removeItem(ACTIVE_QUIZ_KEY);
}

function restoreQuizState() {
    let savedState;
    try {
        savedState = JSON.parse(sessionStorage.getItem(ACTIVE_QUIZ_KEY) || 'null');
    } catch (error) {
        sessionStorage.removeItem(ACTIVE_QUIZ_KEY);
        return false;
    }

    if (!savedState?.questions?.length) return false;

    const restoredQuestions = savedState.questions.map(item => {
        const subject = appData[item.subjectRef];
        const question = subject?.questions.find(candidate => candidate.id === item.id);
        return question ? { originalRef: question, subjectRef: item.subjectRef } : null;
    });

    if (restoredQuestions.some(item => !item) || savedState.currentIndex >= restoredQuestions.length) {
        sessionStorage.removeItem(ACTIVE_QUIZ_KEY);
        return false;
    }

    session.mode = savedState.mode;
    session.questions = restoredQuestions;
    if (session.mode === 'subject') currentSubject = restoredQuestions[0].subjectRef;
    session.currentIndex = Math.max(0, savedState.currentIndex || 0);
    session.score = Number(savedState.score) || 0;
    session.failedQuestions = Array.isArray(savedState.failedQuestions) ? savedState.failedQuestions : [];
    session.timeRemaining = Math.max(0, Number(savedState.timeRemaining) || 0);
    session.timerEnabled = Boolean(savedState.timerEnabled);
    session.questionStartedAt = Number(savedState.questionStartedAt) || Date.now();
    session.pendingResult = savedState.pendingResult || null;
    session.startedAt = Number(savedState.startedAt) || Date.now();
    session.answeredCount = Number(savedState.answeredCount) || 0;
    session.correctCount = Number(savedState.correctCount) || 0;
    session.partialCount = Number(savedState.partialCount) || 0;
    session.examMode = Boolean(savedState.examMode);
    session.examAnswers = Array.isArray(savedState.examAnswers) ? savedState.examAnswers : [];
    session.note = typeof savedState.note === 'string' ? savedState.note : '';
    return true;
}

// XP
function addXP(points, source = 'quiz') {
    if (!appData._player) appData._player = { xp: 0, level: 1, workoutXP: 0, quizXP: 0 };
    points = Math.round(Number(points) || 0);
    if (points <= 0) return 0;
    appData._player.xp = (appData._player.xp || 0) + points;
    if (source === 'workout') {
        appData._player.workoutXP = (appData._player.workoutXP || 0) + points;
    } else {
        appData._player.quizXP = (appData._player.quizXP || 0) + points;
    }
    appData._player.level = Math.floor(Math.sqrt(appData._player.xp / 50)) + 1;
    saveData();
    updatePlayerUI();
    return points;
}
window.addXP = addXP;

function getDailyActivity(date = new Date()) {
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    return (appData._activity || []).filter(item => {
        const activityDate = new Date(item.at);
        const activityKey = `${activityDate.getFullYear()}-${String(activityDate.getMonth() + 1).padStart(2, '0')}-${String(activityDate.getDate()).padStart(2, '0')}`;
        return activityKey === key;
    });
}

function getStudyStreak() {
    let streak = 0;
    const cursor = new Date();
    while (getDailyActivity(cursor).length > 0) {
        streak++;
        cursor.setDate(cursor.getDate() - 1);
    }
    return streak;
}

function updateStudyGoal() {
    const input = document.getElementById('daily-goal-input');
    const goal = Math.max(1, Math.min(500, Number.parseInt(input.value, 10) || 10));
    appData._player.dailyGoal = goal;
    input.value = goal;
    saveData();
    updatePlayerUI();
    customAlert('Objectif quotidien', `Objectif réglé sur ${goal} question(s) par jour.`);
}

function recordActivity(subject, question, result) {
    if (!Array.isArray(appData._activity)) appData._activity = [];
    appData._activity.push({
        at: Date.now(),
        subject,
        questionId: question.id,
        correct: result.isCorrect,
        partial: result.isPartial,
        responseTime: Math.max(0, Date.now() - (session.questionStartedAt || Date.now()))
    });
    appData._activity = appData._activity.slice(-500);
}

function recordSessionHistory(status = 'completed') {
    if (!Array.isArray(appData._sessions)) appData._sessions = [];
    appData._sessions.push({
        at: Date.now(),
        startedAt: session.startedAt || Date.now(),
        mode: session.mode,
        subject: session.mode === 'subject' ? currentSubject : session.mode === 'custom' ? 'Multi-matières' : 'GR20',
        total: session.questions.length,
        answered: session.answeredCount,
        correct: session.correctCount,
        partial: session.partialCount,
        score: session.score,
        duration: Math.max(0, Date.now() - (session.startedAt || Date.now())),
        note: session.note || '',
        status
    });
    appData._sessions = appData._sessions.slice(-100);
}

function updatePlayerUI() {
    document.getElementById('player-lvl').textContent = appData._player.level;
    document.getElementById('player-xp').textContent = appData._player.xp;
    const currentLevelXP = 50 * Math.pow(appData._player.level - 1, 2);
    const nextLevelXP = 50 * Math.pow(appData._player.level, 2);
    const progress = ((appData._player.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
    document.getElementById('xp-fill-bar').style.width = `${progress}%`;
    const dailyGoal = appData._player.dailyGoal || 10;
    const dailyCount = getDailyActivity().length;
    const dailyGoalEl = document.getElementById('daily-goal-progress');
    const streakEl = document.getElementById('study-streak');
    const dailyGoalInput = document.getElementById('daily-goal-input');
    if (dailyGoalEl) dailyGoalEl.textContent = `${Math.min(dailyCount, dailyGoal)} / ${dailyGoal}`;
    if (streakEl) streakEl.textContent = getStudyStreak();
    if (dailyGoalInput && document.activeElement !== dailyGoalInput) dailyGoalInput.value = dailyGoal;
    renderUserProfile();
}

function renderUserProfile() {
    if (!appData._player) appData._player = { xp: 0, level: 1, workoutXP: 0, quizXP: 0 };
    const p = appData._player;
    const lvlEl = document.getElementById('user-profile-level');
    const xpTotalEl = document.getElementById('user-profile-xp-total');
    const xpNextEl = document.getElementById('user-profile-xp-next');
    const xpBarEl = document.getElementById('user-profile-xp-bar');
    const xpWeekEl = document.getElementById('user-profile-xp-week');
    const xpWorkoutEl = document.getElementById('user-profile-xp-workout');
    const xpQuizEl = document.getElementById('user-profile-xp-quiz');
    const historyEl = document.getElementById('user-profile-workout-history');

    if (lvlEl) lvlEl.textContent = p.level || 1;
    if (xpTotalEl) xpTotalEl.textContent = `${p.xp || 0} XP`;

    const curLvlXP = 50 * Math.pow((p.level || 1) - 1, 2);
    const nextLvlXP = 50 * Math.pow(p.level || 1, 2);
    const currentInLevel = Math.max(0, (p.xp || 0) - curLvlXP);
    const levelSpan = Math.max(1, nextLvlXP - curLvlXP);
    const progress = Math.min(100, Math.max(0, (currentInLevel / levelSpan) * 100));

    if (xpNextEl) xpNextEl.textContent = `${p.xp || 0} / ${nextLvlXP} XP (vers Niv ${(p.level || 1) + 1})`;
    if (xpBarEl) xpBarEl.style.width = `${progress}%`;

    // Calcul XP semaine
    const weekAgo = Date.now() - 7 * 24 * 3600 * 1000;
    const workoutWeek = (appData._workoutHistory || []).filter(h => h.timestamp >= weekAgo).reduce((acc, h) => acc + (h.xpEarned || 0), 0);
    const activityWeek = (appData._activity || []).filter(a => a.at >= weekAgo).length * 10;
    const totalWeekXP = workoutWeek + activityWeek;

    if (xpWeekEl) xpWeekEl.textContent = `+${totalWeekXP} XP`;
    if (xpWorkoutEl) xpWorkoutEl.textContent = `+${p.workoutXP || 0} XP`;
    if (xpQuizEl) xpQuizEl.textContent = `+${p.quizXP || 0} XP`;

    // Rendu de l'historique récent
    if (historyEl) {
        const history = (appData._workoutHistory || []).slice(-15).reverse();
        if (history.length === 0) {
            historyEl.innerHTML = `<p style="color:var(--text-muted); margin:0;">Aucun exercice d'entraînement enregistré pour le moment.</p>`;
        } else {
            historyEl.innerHTML = history.map(item => `
                <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.05);">
                    <div>
                        <span style="font-weight:600; color:${item.correct ? 'var(--success)' : 'var(--danger)'};">
                            ${item.correct ? '✓' : '✗'}
                        </span>
                        <span style="margin-left:6px; color:var(--text-main); font-weight:500;">${item.notion || 'Exercice'}</span>
                        <small style="color:var(--text-muted); margin-left:6px; background:rgba(255,255,255,0.06); padding:2px 6px; border-radius:4px;">Niv.${item.difficulty || 1}</small>
                    </div>
                    <div style="text-align:right;">
                        <span style="color:var(--success); font-weight:bold;">+${item.xpEarned || 0} XP</span>
                        <small style="color:var(--text-muted); margin-left:8px;">${item.timeSpent || 0}s</small>
                    </div>
                </div>
            `).join('');
        }
    }

    // Actualisation de l'état administrateur
    if (window.communityAdmin) {
        const isAuth = sessionStorage.getItem('quizz_admin_authenticated') === 'true';
        const badge = document.getElementById('admin-status-badge');
        const panel = document.getElementById('admin-panel-container');
        const loginBox = document.getElementById('admin-login-box');
        if (badge) badge.style.display = isAuth ? 'inline-block' : 'none';
        if (panel) {
            panel.classList.toggle('hidden', !isAuth);
            panel.style.display = isAuth ? 'block' : 'none';
        }
        if (loginBox) loginBox.style.display = isAuth ? 'none' : 'flex';
        if (isAuth && typeof window.communityAdmin.renderAdminDashboard === 'function') {
            window.communityAdmin.renderAdminDashboard();
        }
    }
}
window.renderUserProfile = renderUserProfile;

function saveSessionNote() {
    const note = document.getElementById('session-note').value.trim();
    session.note = note;
    const latest = appData._sessions?.at(-1);
    if (latest) {
        latest.note = note;
        saveData();
    }
    customAlert('Session', note ? 'Note enregistrée.' : 'Note supprimée.');
}

// NAVIGATION
function showView(viewId, navElement = null) {
    if (viewId !== 'quiz-view' && document.body.classList.contains('focus-mode')) {
        document.body.classList.remove('focus-mode');
        const focusButton = document.getElementById('focus-mode-btn');
        if (focusButton) {
            focusButton.textContent = '◉ Faible distraction';
            focusButton.setAttribute('aria-pressed', 'false');
        }
    }
    if (viewId !== 'quiz-view' && hasActiveQuiz()) {
        if (session.timerInterval) stopTimer();
        persistQuizState();
    }
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
    if (navElement) {
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        navElement.classList.add('active');
    }
    if (viewId === 'home-view') {
        openFolders.clear();
        renderHome();
    }
    if (viewId === 'workout-hub-view' && window.WorkoutView) WorkoutView.renderHub();
    if (viewId === 'profile-view') renderProfileDashboard();
    if (viewId === 'custom-quiz-view') renderCustomQuizSetup();
    if (viewId === 'create-subject-view') renderCreateSubjectView();
    if (viewId === 'flashcard-view' && window.flashcardManager) window.flashcardManager.renderView();
    updatePlayerUI();
}

function setSidebarHidden(isHidden) {
    const sidebar = document.getElementById('sidebar');
    const reopenButton = document.getElementById('sidebar-reopen');
    const toggleButton = document.getElementById('sidebar-toggle');
    sidebar.classList.toggle('sidebar-hidden', isHidden);
    reopenButton.classList.toggle('hidden', !isHidden);
    toggleButton.setAttribute('aria-label', isHidden ? 'Afficher la barre latérale' : 'Masquer la barre latérale');
    toggleButton.title = isHidden ? 'Afficher la barre latérale' : 'Masquer la barre latérale';
    localStorage.setItem('quizSidebarHidden', String(isHidden));
}

function initSidebarControls() {
    const toggleButton = document.getElementById('sidebar-toggle');
    const reopenButton = document.getElementById('sidebar-reopen');
    toggleButton.addEventListener('click', () => setSidebarHidden(true));
    reopenButton.addEventListener('click', () => setSidebarHidden(false));
    setSidebarHidden(localStorage.getItem('quizSidebarHidden') === 'true');
}

// MOTEUR SM-2 (FILTRE)
function getAvailableQuestions(subjectName, forceIgnoreDelay = false) {
    const now = Date.now();
    return appData[subjectName].questions.filter(q => {
        if (forceIgnoreDelay) return true;
        return !q.sm2.nextReview || now >= q.sm2.nextReview;
    });
}

function buildReviewQueue(questionItems) {
    const buckets = { weak: [], unseen: [], due: [], other: [] };
    questionItems.forEach(item => {
        const question = item.originalRef || item;
        const attempts = question.stats?.attempts || 0;
        const rate = attempts ? question.stats.correct / attempts : 0;
        if (attempts >= 2 && rate <= 0.5) buckets.weak.push(item);
        else if (attempts === 0) buckets.unseen.push(item);
        else if (!question.sm2?.nextReview || question.sm2.nextReview <= Date.now()) buckets.due.push(item);
        else buckets.other.push(item);
    });

    return [
        ...shuffleArray(buckets.weak),
        ...shuffleArray(buckets.unseen),
        ...shuffleArray(buckets.due),
        ...shuffleArray(buckets.other)
    ];
}

function validateQuestionBank() {
    const issues = [];
    const seenIds = new Set();
    Object.keys(appData).forEach(subject => {
        if (subject.startsWith('_')) return;
        const questions = appData[subject].questions || [];
        const seenTexts = new Set();
        questions.forEach((question, index) => {
            const label = `${subject} / question ${index + 1}`;
            if (!question.id || seenIds.has(question.id)) issues.push(`${label} : identifiant manquant ou dupliqué.`);
            seenIds.add(question.id);
            if (!question.q?.trim()) issues.push(`${label} : énoncé vide.`);
            if (!Array.isArray(question.options) || question.options.length < 2) issues.push(`${label} : moins de 2 options.`);
            if (!question.options?.some(option => option.isCorrect)) issues.push(`${label} : aucune bonne réponse.`);
            if (seenTexts.has(question.q)) issues.push(`${label} : question en double.`);
            seenTexts.add(question.q);
            if (!question.explanation?.trim()) issues.push(`${label} : explication absente.`);
        });
    });
    return issues;
}

function showContentValidation() {
    const report = document.getElementById('validation-report');
    const issues = validateQuestionBank();
    report.textContent = issues.length ? issues.slice(0, 30).join(' ') : 'Base valide : aucun problème détecté.';
    report.style.color = issues.length ? 'var(--warning)' : 'var(--success)';
}

function showSelfTest() {
    const report = document.getElementById('validation-report');
    report.textContent = runQuizSelfChecks().join(' ');
    report.style.color = 'var(--success)';
}

function runQuizSelfChecks() {
    const checks = [];
    const assert = (condition, message) => { if (!condition) throw new Error(message); };
    try {
        assert(stableHash('quiz') === stableHash('quiz'), 'Hash non déterministe');
        assert(calculateNextInterval({ repetition: 0, interval: 0, easeFactor: 2.5 }, 4).interval === 1, 'Intervalle initial incorrect');
        const normalized = normalizeData({ Demo: { questions: [{ q: 'Q', options: [{ text: 'Oui', isCorrect: true }, { text: 'Non', isCorrect: false }] }] } });
        assert(normalized.Demo.questions[0].id, 'ID question absent');
        assert(normalized.Demo.questions[0].sm2, 'SM-2 absent');
        checks.push('SM-2, normalisation et identifiants : OK');
        const contentIssues = validateQuestionBank();
        checks.push(contentIssues.length ? `${contentIssues.length} problème(s) de contenu détecté(s)` : 'Base de questions : OK');
    } catch (error) {
        checks.push(`Échec : ${error.message}`);
    }
    return checks;
}

function updateDailyValidation(subject) {
    const subjectData = appData[subject];
    const today = getTodayStr();
    const isValidated = subjectData.questions.length > 0 && getAvailableQuestions(subject).length === 0;
    subjectData.dailyValidations ??= {};
    if (isValidated) subjectData.dailyValidations[today] = true;
    else delete subjectData.dailyValidations[today];
    return isValidated;
}

// ACCUEIL
function renderHome() {
    ensureArchiveFolder();
    populateFolderSelects();

    // Les dossiers restent repliés par défaut pour un affichage propre et sobre
    const resumeBox = document.getElementById('resume-quiz-box');
    if (resumeBox) resumeBox.classList.toggle('hidden', !hasActiveQuiz());

    const list = document.getElementById('subjects-list');
    list.innerHTML = "";
    const frag = document.createDocumentFragment();

    const searchInput = document.getElementById('search-subject');
    const filterInput = document.getElementById('filter-folder');
    const searchQuery = searchInput ? searchInput.value.toLowerCase() : "";
    const folderFilter = filterInput ? filterInput.value : "ALL";

    const subjectsByFolder = {};
    const foldersToShow = appData._folders.filter(folder => folderFilter === 'ALL' || folderFilter === folder);
    foldersToShow.forEach(folder => {
        subjectsByFolder[folder] = [];
    });

    let totalShownSubjects = 0;
    Object.keys(appData).forEach(subject => {
        if (subject.startsWith('_') || appData[subject]?.deleted) return;
        if (!isSubjectAvailable(subject)) return;
        if (searchQuery && !subject.toLowerCase().includes(searchQuery)) return;

        totalShownSubjects++;
        const folder = appData[subject]?.folder || DEFAULT_FOLDER;
        if (subjectsByFolder[folder] !== undefined) {
            subjectsByFolder[folder].push(subject);
        }
    });

    if (totalShownSubjects === 0 && !searchQuery && folderFilter === 'ALL') {
        list.innerHTML = `
            <div class="empty-state-card" style="margin: 20px 0; padding: 40px 20px; background: rgba(255,255,255,0.02); border: 2px dashed var(--surface-light); border-radius: 16px; text-align: center;">
                <span style="font-size: 3em;">📚</span>
                <h3 style="margin: 14px 0 8px 0; color: var(--primary); font-size: 1.3em;">Aucune matière sélectionnée dans "Mes Matières"</h3>
                <p style="color: var(--text-muted); font-size: 0.95em; max-width: 500px; margin: 0 auto 22px auto; line-height: 1.5;">
                    Choisis parmi les <strong>45+ cours officiels</strong> dans <strong>Matières de la communauté</strong> ou importe tes propres cours au format JSON pour démarrer !
                </p>
                <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                    <button class="btn btn-primary" onclick="showView('community-view'); if (window.renderCommunity) window.renderCommunity();">
                        🌍 Explorer les matières de la communauté
                    </button>
                    <button class="secondary" onclick="showView('create-subject-view');">
                        ➕ Ajouter ma propre matière
                    </button>
                </div>
            </div>
        `;
        return;
    }

    Object.keys(subjectsByFolder).forEach(folder => {
        const subjects = subjectsByFolder[folder];
        // Ne jamais afficher de dossiers vides !
        if (subjects.length === 0) return;

        const folderDiv = document.createElement('div');
        folderDiv.className = 'folder-section';

        const headerWrapper = document.createElement('div');
        headerWrapper.className = 'folder-header list-item';
        headerWrapper.style.display = 'flex';
        headerWrapper.style.justifyContent = 'space-between';
        headerWrapper.style.alignItems = 'center';

        const headerBtn = document.createElement('button');
        headerBtn.type = 'button';
        headerBtn.style.background = 'none';
        headerBtn.style.border = 'none';
        headerBtn.style.color = 'inherit';
        headerBtn.style.fontWeight = 'bold';
        headerBtn.style.cursor = 'pointer';
        headerBtn.style.textAlign = 'left';
        headerBtn.style.flex = '1';
        headerBtn.style.padding = '0';
        const isOpen = openFolders.has(folder);
        headerBtn.textContent = `${isOpen ? '⌄' : '⌃'} 📁 ${folder} (${subjects.length})`;
        headerBtn.setAttribute('aria-expanded', String(isOpen));
        headerBtn.onclick = () => toggleFolder(folder);
        headerWrapper.appendChild(headerBtn);

        // Bouton pour supprimer le dossier s'il n'est pas un dossier système
        if (folder !== DEFAULT_FOLDER && folder !== ARCHIVE_FOLDER) {
            const delFolderBtn = document.createElement('button');
            delFolderBtn.type = 'button';
            delFolderBtn.className = 'secondary';
            delFolderBtn.style.padding = '4px 8px';
            delFolderBtn.style.fontSize = '0.78em';
            delFolderBtn.style.color = 'var(--danger)';
            delFolderBtn.style.borderColor = 'rgba(239, 68, 68, 0.35)';
            delFolderBtn.title = `Supprimer le dossier "${folder}"`;
            delFolderBtn.textContent = '🗑️ Enlever dossier';
            delFolderBtn.onclick = (e) => {
                e.stopPropagation();
                deleteFolder(folder);
            };
            headerWrapper.appendChild(delFolderBtn);
        }

        folderDiv.appendChild(headerWrapper);

        const subjectsContainer = document.createElement('div');
        subjectsContainer.className = 'folder-subjects';
        subjectsContainer.classList.toggle('hidden', !isOpen);
        subjects.forEach(subject => {
            updateDailyValidation(subject);
            const s = appData[subject];
            const available = getAvailableQuestions(subject).length;
            const isValidated = s.dailyValidations && s.dailyValidations[getTodayStr()];

            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'list-item subject-list-item';
            btn.setAttribute('aria-label', `Ouvrir la matière ${subject}`);
            btn.onclick = (event) => {
                const target = event.target.closest('.subject-action');
                if (target) {
                    event.stopPropagation();
                    return;
                }
                openSubject(subject);
            };

            const titleSpan = document.createElement('span');
            titleSpan.className = 'subject-item-main';
            const boldTitle = document.createElement('b');
            boldTitle.textContent = subject;
            const subTxt = document.createElement('span');
            subTxt.style = "color:var(--text-muted); font-size:0.85em; margin-left:10px;";
            subTxt.textContent = `(${s.questions.length} Q)`;
            titleSpan.appendChild(boldTitle);
            titleSpan.appendChild(subTxt);

            const actionWrap = document.createElement('span');
            actionWrap.className = 'subject-item-actions';

            const badge = document.createElement('span');
            if (isValidated) {
                badge.className = 'badge validated'; badge.textContent = '✓ Validé';
            } else {
                badge.className = 'badge pending'; badge.textContent = `${available} à réviser`;
            }

            const archiveAction = document.createElement('span');
            archiveAction.className = 'subject-action';
            archiveAction.textContent = folder === ARCHIVE_FOLDER ? '↩️' : '📦';
            archiveAction.title = folder === ARCHIVE_FOLDER ? 'Désarchiver la matière' : 'Archiver la matière';
            archiveAction.onclick = (event) => {
                event.stopPropagation();
                if (folder === ARCHIVE_FOLDER) {
                    appData[subject].archived = false;
                    appData[subject].deleted = false;
                    appData[subject].folder = DEFAULT_FOLDER;
                    saveData();
                    renderHome();
                    customAlert('Matière restaurée', `La matière "${subject}" est de nouveau disponible.`);
                } else {
                    archiveSubject(subject);
                }
            };

            const deleteAction = document.createElement('span');
            deleteAction.className = 'subject-action danger-action';
            deleteAction.textContent = '🗑️';
            deleteAction.title = 'Supprimer définitivement pour l’utilisateur';
            deleteAction.onclick = (event) => {
                event.stopPropagation();
                customConfirm('Supprimer', `Supprimer définitivement "${subject}" pour toi ? Tu ne pourras plus jamais y répondre.`, async () => {
                    await deleteSubject(subject);
                });
            };

            actionWrap.appendChild(badge);
            actionWrap.appendChild(archiveAction);
            actionWrap.appendChild(deleteAction);
            btn.appendChild(titleSpan);
            btn.appendChild(actionWrap);
            subjectsContainer.appendChild(btn);
        });

        folderDiv.appendChild(subjectsContainer);
        frag.appendChild(folderDiv);
    });

    list.appendChild(frag);
}

function toggleFolder(folder) {
    if (openFolders.has(folder)) openFolders.delete(folder);
    else openFolders.add(folder);
    renderHome();
}


// -----------------------------------------------------
// MATIÈRES DE LA COMMUNAUTÉ
// -----------------------------------------------------
function renderCommunity() {
    if (window.communityAdmin && typeof window.communityAdmin.renderCommunity === 'function') {
        window.communityAdmin.renderCommunity();
    }
}

function filterCommunityCourses() {
    if (window.communityAdmin && typeof window.communityAdmin.filterCommunityCourses === 'function') {
        window.communityAdmin.filterCommunityCourses();
    }
}

function searchCommunity() {
    filterCommunityCourses();
}

// VUE MATIÈRE 
function openSubject(subject) {
    if (!appData[subject] || appData[subject].deleted) {
        customAlert('Matière inaccessible', 'Cette matière a été supprimée et n’est plus accessible.');
        return;
    }
    currentSubject = subject;
    document.getElementById('current-subject-title').textContent = subject;
    const s = appData[subject];
    const availableQ = getAvailableQuestions(subject);

    populateFolderSelects();
    const folderSelect = document.getElementById('subject-folder-select');
    if (folderSelect) folderSelect.value = s.folder || DEFAULT_FOLDER;

    document.getElementById('subject-q-total').textContent = s.questions.length;
    document.getElementById('subject-q-available').textContent = availableQ.length;
    const subjectAttempts = s.questions.reduce((total, question) => total + (question.stats?.attempts || 0), 0);
    const subjectCorrect = s.questions.reduce((total, question) => total + (question.stats?.correct || 0), 0);
    document.getElementById('subject-success-rate').textContent = (subjectAttempts > 0 ? Math.round((subjectCorrect / subjectAttempts) * 100) : 0) + "%";

    activeFilterTags.clear();
    renderTagChips('filter-tags-container', getAllTagsForSubject(subject), true, activeFilterTags);

    document.getElementById('q-count-input').max = s.questions.length;
    document.getElementById('q-count-input').value = Math.min(10, s.questions.length);
    document.getElementById('force-review-toggle').checked = false;

    document.getElementById('question-editor-card').classList.add('hidden');
    renderQuestionsList();

    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    showView('subject-view');
}

function renderQuestionsList() {
    const container = document.getElementById('manage-questions-list');
    container.innerHTML = "";
    const frag = document.createDocumentFragment();
    const questions = appData[currentSubject].questions;

    if (questions.length === 0) {
        container.innerHTML = "<p style='color: var(--text-muted);'>Aucune question.</p>";
        return;
    }

    questions.forEach((q, idx) => {
        const box = document.createElement('div');
        box.style = "background-color: var(--bg-dark); padding: 15px; border-radius: var(--radius); margin-bottom: 10px; border: 1px solid var(--surface-light);";

        const tagsDiv = document.createElement('div');
        tagsDiv.style.marginBottom = '8px';
        (q.tags || []).forEach(t => {
            const sp = document.createElement('span');
            sp.className = 'tag-chip'; sp.textContent = t; tagsDiv.appendChild(sp);
        });
        box.appendChild(tagsDiv);

        const qTxt = document.createElement('div');
        qTxt.style = "font-size: 0.95em; margin-bottom: 10px;";
        qTxt.textContent = q.q;
        box.appendChild(qTxt);

        const actions = document.createElement('div');
        actions.style = "display: flex; gap: 10px;";

        const btnEdit = document.createElement('button');
        btnEdit.className = 'secondary'; btnEdit.style = "padding: 5px 10px; font-size: 0.85em;";
        btnEdit.textContent = "✏️ Éditer";
        btnEdit.onclick = () => editQuestion(idx);

        const btnDel = document.createElement('button');
        btnDel.className = 'danger'; btnDel.style = "padding: 5px 10px; font-size: 0.85em;";
        btnDel.textContent = "🗑️ Supprimer";
        btnDel.onclick = () => customConfirm("Supprimer", "Retirer définitivement cette question ?", () => {
            appData[currentSubject].questions.splice(idx, 1); saveData(); openSubject(currentSubject);
        });

        actions.appendChild(btnEdit); actions.appendChild(btnDel); box.appendChild(actions); frag.appendChild(box);
    });
    container.appendChild(frag);
    renderMath([container]);
}

// TAGS
function getAllTagsForSubject(subject) {
    let allTags = new Set();
    if (appData[subject] && appData[subject].questions) {
        appData[subject].questions.forEach(q => { if (q.tags) q.tags.forEach(t => allTags.add(t)); });
    }
    return Array.from(allTags);
}

function getAllTagsGlobally() {
    let allTags = new Set();
    Object.keys(appData).forEach(sub => {
        if (!sub.startsWith('_')) appData[sub].questions.forEach(q => { if (q.tags) q.tags.forEach(t => allTags.add(t)); });
    });
    return Array.from(allTags);
}

function renderTagChips(containerId, tagsArray, isSelectable = false, activeSet = null) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    if (tagsArray.length === 0) return;

    const frag = document.createDocumentFragment();
    tagsArray.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag-chip'; span.textContent = tag; span.tabIndex = 0; span.role = "button";

        const toggleSelection = () => {
            if (!isSelectable || !activeSet) return;
            activeSet.has(tag) ? activeSet.delete(tag) : activeSet.add(tag);
            span.classList.toggle('selected');
        };

        if (isSelectable && activeSet && activeSet.has(tag)) span.classList.add('selected');
        span.onclick = toggleSelection;
        span.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleSelection(); } };
        frag.appendChild(span);
    });
    container.appendChild(frag);
}

function createNewTagUI() {
    const newTag = document.getElementById('new-tag-input').value.trim();
    if (newTag) {
        activeTagsForNewQuestion.add(newTag);
        document.getElementById('new-tag-input').value = "";
        let currentTags = getAllTagsForSubject(currentSubject);
        activeTagsForNewQuestion.forEach(t => { if (!currentTags.includes(t)) currentTags.push(t); });
        renderTagChips('add-tags-container', currentTags, true, activeTagsForNewQuestion);
    }
}

// EDITEUR
function prepareAddQuestion() {
    document.getElementById('edit-q-index').value = "-1";
    document.getElementById('editor-title').textContent = "Nouvelle question";
    document.getElementById('new-q-text').value = "";
    document.getElementById('new-q-explanation').value = "";
    for (let i = 1; i <= 4; i++) { document.getElementById(`opt-${i}`).value = ""; document.getElementById(`check-${i}`).checked = false; }
    activeTagsForNewQuestion.clear();
    renderTagChips('add-tags-container', getAllTagsForSubject(currentSubject), true, activeTagsForNewQuestion);
    document.getElementById('question-editor-card').classList.remove('hidden');
    document.getElementById('question-editor-card').scrollIntoView({ behavior: 'smooth' });
}

function editQuestion(idx) {
    prepareAddQuestion();
    const q = appData[currentSubject].questions[idx];
    document.getElementById('edit-q-index').value = idx;
    document.getElementById('editor-title').textContent = "Modifier la question";
    document.getElementById('new-q-text').value = q.q;
    document.getElementById('new-q-explanation').value = q.explanation || "";
    q.options.forEach((opt, i) => {
        if (i < 4) { document.getElementById(`opt-${i + 1}`).value = opt.text; document.getElementById(`check-${i + 1}`).checked = opt.isCorrect; }
    });
    activeTagsForNewQuestion.clear();
    if (q.tags) q.tags.forEach(t => activeTagsForNewQuestion.add(t));
    renderTagChips('add-tags-container', getAllTagsForSubject(currentSubject), true, activeTagsForNewQuestion);
}

function saveQuestion() {
    const q = document.getElementById('new-q-text').value.trim();
    const expl = document.getElementById('new-q-explanation').value.trim();
    let optionsArray = []; let hasCorrect = false;

    for (let i = 1; i <= 4; i++) {
        const text = document.getElementById(`opt-${i}`).value.trim();
        const isCorrect = document.getElementById(`check-${i}`).checked;
        if (text) { optionsArray.push({ text: text, isCorrect: isCorrect }); if (isCorrect) hasCorrect = true; }
    }

    if (!q || optionsArray.length < 2 || !hasCorrect) return customAlert("Validation", "Il faut une question, au moins 2 options, et 1 réponse vraie.");

    const newQData = {
        type: "qcm", tags: Array.from(activeTagsForNewQuestion), q: q, options: optionsArray, explanation: expl,
        stats: { attempts: 0, correct: 0 },
        sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
    };

    const idx = parseInt(document.getElementById('edit-q-index').value, 10);
    if (idx >= 0) {
        newQData.id = appData[currentSubject].questions[idx].id;
        newQData.stats = appData[currentSubject].questions[idx].stats || newQData.stats;
        newQData.sm2 = appData[currentSubject].questions[idx].sm2 || newQData.sm2;
        appData[currentSubject].questions[idx] = newQData;
    } else { appData[currentSubject].questions.push(newQData); }
    newQData.id = newQData.id || getQuestionId(currentSubject, newQData, appData[currentSubject].questions.length);

    updateDailyValidation(currentSubject); saveData(); openSubject(currentSubject);
}

// SETUP MODE LIBRE
function renderCustomQuizSetup() {
    globalCustomFilterTags.clear();
    renderTagChips('global-tags-container', getAllTagsGlobally(), true, globalCustomFilterTags);
}

// TIMER SÉCURISÉ
function stopTimer() {
    if (session.timerInterval) {
        clearInterval(session.timerInterval);
        session.timerInterval = null;
    }
    document.getElementById('timer-display').classList.add('hidden');
}

function setupTimer(isOn, reset = true) {
    stopTimer();
    const timerDisplay = document.getElementById('timer-display');
    session.timerEnabled = isOn;
    if (isOn) {
        if (reset || !session.timeRemaining) session.timeRemaining = session.questions.length * 60;
        timerDisplay.classList.remove('hidden');
        timerDisplay.textContent = `Temps restant : ${formatTime(session.timeRemaining)}`;
        session.timerInterval = setInterval(() => {
            session.timeRemaining--;
            timerDisplay.textContent = `Temps restant : ${formatTime(session.timeRemaining)}`;
            persistQuizState();
            if (session.timeRemaining <= 0) {
                stopTimer();
                customAlert("Terminé", "Temps écoulé !");
                endQuiz(true);
            }
        }, 1000);
    }
    persistQuizState();
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function initQuizState(mode, qArray) {
    session.mode = mode;
    session.questions = qArray;
    session.currentIndex = 0;
    session.score = 0;
    session.failedQuestions = [];
    session.timerEnabled = false;
    session.timeRemaining = 0;
    session.questionStartedAt = Date.now();
    session.pendingResult = null;
    session.startedAt = Date.now();
    session.answeredCount = 0;
    session.correctCount = 0;
    session.partialCount = 0;
    session.examMode = false;
    session.examAnswers = [];
    session.note = '';
    persistQuizState();
    document.getElementById('btn-export-markdown').classList.add('hidden');
    document.getElementById('validation-msg').classList.add('hidden');
    document.getElementById('exam-review').classList.add('hidden');
    document.getElementById('exam-time-result').classList.add('hidden');
}

function resumeQuiz() {
    if (!hasActiveQuiz()) return;
    showView('quiz-view');
    if (session.timerEnabled) setupTimer(true, false);
    renderQuestion();
}

function startCustomQuiz() {
    const forceReview = document.getElementById('custom-force-review').checked;
    const examMode = document.getElementById('custom-exam-mode').checked;
    let allAvailableQ = [];

    Object.keys(appData).forEach(sub => {
        if (!sub.startsWith('_')) {
            appData[sub].questions.forEach(q => {
                const now = Date.now();
                if (forceReview || !q.sm2.nextReview || now >= q.sm2.nextReview) {
                    allAvailableQ.push({ originalRef: q, subjectRef: sub });
                }
            });
        }
    });

    if (globalCustomFilterTags.size > 0) {
        allAvailableQ = allAvailableQ.filter(qItem => qItem.originalRef.tags && qItem.originalRef.tags.some(t => globalCustomFilterTags.has(t)));
    }

    if (allAvailableQ.length === 0) return customAlert("Quiz Libre", "Aucune question disponible à réviser avec ces tags.");

    const rawCount = Number.parseInt(document.getElementById('custom-q-count').value, 10);
    if (!Number.isInteger(rawCount) || rawCount < 1) return customAlert("Erreur", "Nombre invalide.");

    let requestedCount = Math.min(rawCount, allAvailableQ.length);
    allAvailableQ = buildReviewQueue(allAvailableQ);

    initQuizState('custom', allAvailableQ.slice(0, requestedCount));
    session.examMode = examMode;
    setupTimer(true);

    showView('quiz-view');
    renderQuestion();
}

function startQuiz() {
    const forceReview = document.getElementById('force-review-toggle').checked;
    const examMode = document.getElementById('exam-mode-toggle').checked;
    let availableQ = getAvailableQuestions(currentSubject, forceReview);

    if (activeFilterTags.size > 0) availableQ = availableQ.filter(q => q.tags && q.tags.some(t => activeFilterTags.has(t)));
    if (availableQ.length === 0) return customAlert("Quiz", "Tu as tout révisé ! (Coche 'Ignorer la répétition' pour forcer).");

    const rawCount = Number.parseInt(document.getElementById('q-count-input').value, 10);
    if (!Number.isInteger(rawCount) || rawCount < 1) return customAlert("Erreur", "Nombre invalide.");

    let requestedCount = Math.min(rawCount, availableQ.length);
    let allQ = availableQ.map(q => ({ originalRef: q, subjectRef: currentSubject }));
    allQ = buildReviewQueue(allQ);

    initQuizState('subject', allQ.slice(0, requestedCount));
    session.examMode = examMode;
    setupTimer(true);

    showView('quiz-view');
    renderQuestion();
}

function startGR20() {
    let allAvailableQ = [];
    Object.keys(appData).forEach(sub => {
        if (!sub.startsWith('_')) appData[sub].questions.forEach(q => allAvailableQ.push({ originalRef: q, subjectRef: sub }));
    });

    if (allAvailableQ.length < 1) return customAlert("Erreur", "La base de données est vide.");

    const rawCount = Number.parseInt(document.getElementById('gr20-count').value, 10);
    if (!Number.isInteger(rawCount) || rawCount < 1) return customAlert("Erreur", "Nombre invalide.");

    allAvailableQ = shuffleArray(allAvailableQ);

    initQuizState('gr20', allAvailableQ.slice(0, Math.min(rawCount, allAvailableQ.length)));
    stopTimer();
    showView('quiz-view');
    renderQuestion();
}

function renderQuestion() {
    const valBtn = document.getElementById('validate-btn');
    if (session.mode === 'gr20') {
        valBtn.classList.add('hidden');
        valBtn.style.display = 'none';
    } else {
        valBtn.classList.remove('hidden');
        valBtn.style.display = 'block';
    }
    const examNextBtn = document.getElementById('exam-next-btn');
    examNextBtn.classList.add('hidden');
    examNextBtn.disabled = false;
    valBtn.textContent = session.examMode ? 'Enregistrer la réponse' : 'Valider la réponse';
    document.getElementById('gr20-next-btn').classList.toggle('hidden', session.mode !== 'gr20');
    document.getElementById('explanation-box').classList.add('hidden');
    document.getElementById('sm2-eval-box').classList.add('hidden');
    document.getElementById('extra-actions-box').classList.add('hidden');

    const qItem = session.questions[session.currentIndex];
    const qData = qItem.originalRef;
    session.questionStartedAt = Date.now();
    persistQuizState();

    document.getElementById('quiz-progress').textContent = session.mode === 'gr20' ? `🏔️ Étape ${session.currentIndex + 1} / ${session.questions.length}` : `Question ${session.currentIndex + 1} / ${session.questions.length}`;
    let tagStr = qData.tags && qData.tags.length > 0 ? " | " + qData.tags.join(" | ") : "";
    document.getElementById('quiz-tags-display').textContent = (session.mode === 'gr20' || session.mode === 'custom') ? `📚 ${qItem.subjectRef} ${tagStr}` : `🏷️ ${tagStr.substring(3)}`;
    document.getElementById('quiz-question').textContent = qData.q;

    const optionsDiv = document.getElementById('quiz-options');
    optionsDiv.innerHTML = "";
    const frag = document.createDocumentFragment();

    const correctCount = qData.options.filter(o => o.isCorrect).length;
    const inputType = correctCount === 1 ? 'radio' : 'checkbox';
    const inputName = correctCount === 1 ? 'name="q_option"' : '';

    let opts = shuffleArray(qData.options.map((opt, index) => ({ ...opt, originalIndex: index })));

    opts.forEach(opt => {
        const label = document.createElement('label');
        label.className = 'qcm-option';

        const input = document.createElement('input');
        input.type = inputType;
        input.id = `quiz-option-${opt.originalIndex}`;
        input.name = "q_option";
        input.setAttribute('data-index', opt.originalIndex);

        const span = document.createElement('span');
        span.textContent = opt.text;

        const statusIcon = document.createElement('span');
        statusIcon.className = 'status-icon hidden';
        statusIcon.style.marginLeft = "auto";

        label.appendChild(input); label.appendChild(span); label.appendChild(statusIcon); frag.appendChild(label);
    });

    optionsDiv.appendChild(frag);
    optionsDiv.addEventListener('change', persistQuizState, { once: true });
    if (session.pendingResult) {
        const selected = new Set(session.pendingResult.selectedIndices || []);
        optionsDiv.querySelectorAll('input').forEach(input => {
            input.checked = selected.has(Number(input.getAttribute('data-index')));
            input.disabled = true;
        });
        document.getElementById('validate-btn').classList.add('hidden');
        document.getElementById('validate-btn').style.display = 'none';
        if (session.examMode) {
            examNextBtn.classList.remove('hidden');
        } else {
            document.getElementById('sm2-eval-box').classList.remove('hidden');
            showAnswerFeedback(session.pendingResult);
        }
    }
    renderMath([document.getElementById('quiz-question'), document.getElementById('quiz-options')]);
}

// -----------------------------------------------------
// ALGORITHME SM-2
// -----------------------------------------------------

// -----------------------------------------------------
// ALGORITHME SM-2 (Version Optimisée Demi-journées)
// -----------------------------------------------------

function calculateNextInterval(sm2, quality) {
    if (quality < 3) return { interval: 0, text: "10 min" };

    let rep = sm2.repetition;
    let int = sm2.interval;
    let ef = sm2.easeFactor;

    // Première réussite
    if (rep === 0) {
        if (quality === 3) return { interval: 0.5, text: "12 h" };
        if (quality === 4) return { interval: 1, text: "1 jour" };
        return { interval: 3, text: "3 jours" };
    }

    // Deuxième répétition
    if (rep === 1) {
        if (quality === 3) return { interval: 0.5, text: "12 h" };
        if (quality === 4) return { interval: 3, text: "3 jours" };
        return { interval: 7, text: "7 jours" };
    }

    // Répétitions suivantes
    let newInt;
    if (quality === 3) newInt = Math.round(int * 1.2);
    else if (quality === 4) newInt = Math.round(int * ef);
    else if (quality === 5) newInt = Math.round(int * ef * 1.3);

    return { interval: newInt, text: newInt + " jours" };
}

function processAnswerSub() {
    const qItem = session.questions[session.currentIndex];
    const qData = qItem.originalRef;

    appData[qItem.subjectRef].stats.attempts++;
    qData.stats.attempts++;

    let correctSelected = 0;
    let wrongSelected = 0;
    let totalCorrect = qData.options.filter(o => o.isCorrect).length;
    let userSelectedTexts = [];
    let correctTexts = [];
    let selectedIndices = [];
    const revealAnswer = !session.examMode;

    const labels = document.querySelectorAll('.qcm-option');
    labels.forEach(label => {
        const input = label.querySelector('input');
        const statusIcon = label.querySelector('.status-icon');
        input.disabled = true;

        const opt = qData.options[input.getAttribute('data-index')];
        const isChecked = input.checked;

        if (opt.isCorrect) correctTexts.push(opt.text);
        if (isChecked) {
            userSelectedTexts.push(opt.text);
            selectedIndices.push(Number(input.getAttribute('data-index')));
        }

        if (opt.isCorrect) {
            if (isChecked) {
                correctSelected++;
                if (revealAnswer) {
                    label.classList.add('correct');
                    statusIcon.textContent = "✅";
                    statusIcon.classList.remove('hidden');
                }
            } else {
                if (revealAnswer) {
                    label.classList.add('partial');
                    statusIcon.textContent = "⚠️";
                    statusIcon.classList.remove('hidden');
                }
            }
        } else if (isChecked) {
            wrongSelected++;
            if (revealAnswer) {
                label.classList.add('wrong');
                statusIcon.textContent = "❌";
                statusIcon.classList.remove('hidden');
            }
        }
    });

    // La fin de processAnswerSub reprend bien ici
    let isCorrect = false;
    let isPartial = false;

    if (wrongSelected === 0 && correctSelected === totalCorrect) {
        isCorrect = true;
        session.correctCount++;
        appData[qItem.subjectRef].stats.correct++;
        qData.stats.correct++;
        session.score++;
    } else if (wrongSelected === 0 && correctSelected > 0) {
        isPartial = true;
        session.partialCount++;
        appData[qItem.subjectRef].stats.partial = (appData[qItem.subjectRef].stats.partial || 0) + 1;
        qData.stats.partial++;
        session.score += 0.5; // Demi-point
    } else {
        session.failedQuestions.push({
            q: qData.q,
            userAns: userSelectedTexts.length > 0 ? userSelectedTexts.join(', ') : "Aucune réponse",
            correctAns: correctTexts.join(', '),
            explanation: qData.explanation || "Pas d'explication fournie."
        });
    }
    session.answeredCount++;
    if (session.examMode) {
        session.examAnswers.push({
            questionId: qData.id,
            question: qData.q,
            userAnswer: userSelectedTexts.length ? userSelectedTexts.join(', ') : 'Aucune réponse',
            correctAnswer: correctTexts.join(', '),
            explanation: qData.explanation || 'Pas d’explication fournie.',
            isCorrect,
            isPartial
        });
    }


    recordActivity(qItem.subjectRef, qData, { isCorrect, isPartial });
    saveData();
    return { isCorrect, isPartial, explanation: qData.explanation, selectedIndices };
} // <--- FIN DE processAnswerSub()


// -----------------------------------------------------
// La fonction validateAnswer est maintenant bien indépendante
// -----------------------------------------------------
function showAnswerFeedback(result) {
    if (result.explanation) {
        document.getElementById('explanation-text').textContent = result.explanation;
        document.getElementById('explanation-box').classList.remove('hidden');
    }

    const sm2Box = document.getElementById('sm2-eval-box');
    sm2Box.classList.remove('hidden');

    const qItem = session.questions[session.currentIndex];
    const qData = qItem.originalRef; // On récupère la question originale
    const sm2 = qData.sm2;

    const extraActions = document.getElementById('extra-actions-box');

    // ----------------------------------------------------------------------
    // MODIFICATION : On affiche la zone d'édition/favoris DANS TOUS LES CAS
    // ----------------------------------------------------------------------
    extraActions.classList.remove('hidden');
    const favBtn = document.getElementById('btn-fav-q');
    favBtn.textContent = qData.isFavorite ? "🌟 Retirer des favoris" : "⭐ Ajouter aux favoris";
    favBtn.className = qData.isFavorite ? "btn btn-success" : "btn btn-warning";

    // Prise en compte du score partiel pour afficher les bons boutons de révision
    if (result.isCorrect || result.isPartial) {
        document.getElementById('btn-next-wrong').classList.add('hidden');
        document.getElementById('btn-sm2-3').classList.remove('hidden');
        document.getElementById('btn-sm2-4').classList.remove('hidden');
        document.getElementById('btn-sm2-5').classList.remove('hidden');
        document.getElementById('sm2-eval-title').textContent = "Évalue ta facilité à répondre :";

        document.getElementById('sm2-text-3').textContent = calculateNextInterval(sm2, 3).text;
        document.getElementById('sm2-text-4').textContent = calculateNextInterval(sm2, 4).text;
        document.getElementById('sm2-text-5').textContent = calculateNextInterval(sm2, 5).text;
    } else {
        document.getElementById('btn-next-wrong').classList.remove('hidden');
        document.getElementById('btn-sm2-3').classList.add('hidden');
        document.getElementById('btn-sm2-4').classList.add('hidden');
        document.getElementById('btn-sm2-5').classList.add('hidden');
        document.getElementById('sm2-eval-title').textContent = "Aïe... Révise la correction et valide :";
    }

    renderMath([document.getElementById('explanation-box')]);
}

function validateAnswer() {
    const valBtn = document.getElementById('validate-btn');
    if (valBtn.classList.contains('hidden') || valBtn.style.display === 'none') return;

    valBtn.classList.add('hidden');
    valBtn.style.display = 'none';

    const result = processAnswerSub();
    session.pendingResult = result;
    persistQuizState();
    if (session.examMode) {
        document.getElementById('exam-next-btn').classList.remove('hidden');
        document.getElementById('exam-next-btn').focus();
        return;
    }
    showAnswerFeedback(result);
}

function nextExamQuestion() {
    if (!session.examMode || !session.pendingResult) return;
    session.pendingResult = null;
    nextQuestion();
}

function updateSM2Metadata(sm2, quality) {
    sm2.lastAttempt = Date.now();
    sm2.lastQuality = quality;
    if (quality < 3) {
        sm2.lastWrong = Date.now();
        sm2.successStreak = 0;
    } else {
        sm2.successStreak = (sm2.successStreak || 0) + 1;
    }
}

function applySM2Quality(sm2, quality) {
    const next = calculateNextInterval(sm2, quality);
    updateSM2Metadata(sm2, quality);
    if (quality < 3) {
        sm2.repetition = 0;
        sm2.nextReview = Date.now() + 10 * 60 * 1000;
    } else {
        sm2.repetition++;
        sm2.interval = next.interval;
        sm2.nextReview = Date.now() + sm2.interval * 24 * 60 * 60 * 1000;
    }
    sm2.easeFactor += 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02);
    if (sm2.easeFactor < 1.3) sm2.easeFactor = 1.3;
}

function submitSM2(quality) {
    const qItem = session.questions[session.currentIndex];
    const sm2 = qItem.originalRef.sm2;
    const next = calculateNextInterval(sm2, quality);

    updateSM2Metadata(sm2, quality);

    if (quality < 3) {
        sm2.repetition = 0;
        sm2.nextReview = Date.now() + 10 * 60 * 1000;
    } else {
        sm2.repetition++;
        sm2.interval = next.interval;
        sm2.nextReview = Date.now() + sm2.interval * 24 * 60 * 60 * 1000;
    }

    sm2.easeFactor = sm2.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (sm2.easeFactor < 1.3) sm2.easeFactor = 1.3;

    session.pendingResult = null;
    saveData();
    nextQuestion();
}

function nextGR20Question() {
    const result = processAnswerSub();
    const quality = result.isCorrect ? 4 : (result.isPartial ? 3 : 0);

    const qItem = session.questions[session.currentIndex];
    const sm2 = qItem.originalRef.sm2;
    const next = calculateNextInterval(sm2, quality);

    updateSM2Metadata(sm2, quality);

    if (quality < 3) {
        sm2.repetition = 0;
        sm2.nextReview = Date.now() + 10 * 60 * 1000;
    } else {
        sm2.repetition++;
        sm2.interval = next.interval;
        sm2.nextReview = Date.now() + sm2.interval * 24 * 60 * 60 * 1000;
    }

    sm2.easeFactor = sm2.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (sm2.easeFactor < 1.3) sm2.easeFactor = 1.3;

    session.pendingResult = null;
    saveData();
    nextQuestion();
}

function nextQuestion() {
    session.currentIndex++;
    session.currentIndex < session.questions.length ? renderQuestion() : endQuiz(true);
}

function renderExamReview() {
    const container = document.getElementById('exam-review');
    if (!container) return;
    container.classList.remove('hidden');
    container.innerHTML = '';
    session.examAnswers.forEach((answer, index) => {
        const card = document.createElement('article');
        card.className = `exam-review-item ${answer.isCorrect ? 'correct' : answer.isPartial ? 'partial' : 'wrong'}`;
        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${answer.question}`;
        const response = document.createElement('p');
        response.textContent = `Ta réponse : ${answer.userAnswer}`;
        const correction = document.createElement('p');
        correction.textContent = `Bonne réponse : ${answer.correctAnswer}`;
        const explanation = document.createElement('p');
        explanation.textContent = answer.explanation;
        card.append(title, response, correction, explanation);
        container.appendChild(card);
    });
    renderMath([container]);
}

function endQuiz(finished = false) {
    stopTimer();
    if (!finished) {
        if (session.answeredCount > 0) {
            recordSessionHistory('abandoned');
            saveData();
        }
        clearQuizState();
    }

    if (finished) {
        if (session.examMode) {
            session.examAnswers.forEach(answer => {
                const item = session.questions.find(candidate => candidate.originalRef.id === answer.questionId);
                if (item) applySM2Quality(item.originalRef.sm2, answer.isCorrect ? 4 : answer.isPartial ? 3 : 0);
            });
            renderExamReview();
        }
        recordSessionHistory(session.timerEnabled && session.timeRemaining <= 0 ? 'timeout' : 'completed');
        saveData();
        document.getElementById('results-title').textContent = session.mode === 'gr20' ? "🏁 Arrivée du GR20" : "🏁 Bilan de la session";
        document.getElementById('final-score').textContent = session.score;
        document.getElementById('final-total').textContent = session.questions.length;
        document.getElementById('session-note').value = session.note || '';
        const examTimeResult = document.getElementById('exam-time-result');
        examTimeResult.classList.toggle('hidden', !session.examMode);
        if (session.examMode) examTimeResult.textContent = `Temps : ${formatDuration(Date.now() - session.startedAt)} · ${session.answeredCount} réponse(s) enregistrée(s)`;

        let xpGained = addXP(session.score * 10);
        document.getElementById('xp-gained').textContent = `+ ${xpGained} XP`;

        if (session.mode === 'subject' && currentSubject) {
            const newlyValidated = updateDailyValidation(currentSubject);
            if (newlyValidated) document.getElementById('validation-msg').classList.remove('hidden');
        }

        if (session.failedQuestions.length > 0) document.getElementById('btn-export-markdown').classList.remove('hidden');
        showView('results-view');
        clearQuizState();
    } else {
        showView('home-view');
    }
}

function exportMarkdownToClipboard() {
    let md = `# 📓 Cahier d'erreurs (${getTodayStr()})\n\n`;
    session.failedQuestions.forEach((fail, i) => { md += `### ${i + 1}. ${fail.q}\n- **Mon erreur :** ${fail.userAns}\n- **Correction :** ${fail.correctAns}\n> 💡 *Explication :* ${fail.explanation}\n\n---\n\n`; });
    navigator.clipboard.writeText(md).then(() => { customAlert("Succès", "Markdown copié !"); }).catch(err => { customAlert("Erreur", "Le navigateur bloque l'accès au presse-papier."); });
}

// DASHBOARD
// DASHBOARD
function calculateRetention(days) {
    const threshold = days * 24 * 60 * 60 * 1000;
    const grouped = new Map();
    (appData._activity || []).forEach(activity => {
        const key = `${activity.subject}:${activity.questionId}`;
        if (!grouped.has(key)) grouped.set(key, []);
        grouped.get(key).push(activity);
    });

    let eligible = 0;
    let remembered = 0;
    grouped.forEach(events => {
        events.sort((a, b) => a.at - b.at);
        const first = events[0];
        if (Date.now() - first.at < threshold) return;
        eligible++;
        if (events.some(event => event.at - first.at >= threshold && event.correct)) remembered++;
    });
    return { eligible, remembered, rate: eligible ? Math.round((remembered / eligible) * 100) : null };
}

function formatDuration(milliseconds) {
    const minutes = Math.round((milliseconds || 0) / 60000);
    return minutes < 1 ? '< 1 min' : `${minutes} min`;
}

function getStatsFilters() {
    const period = document.getElementById('stats-period-filter')?.value || 'all';
    const subject = document.getElementById('stats-subject-filter')?.value || 'all';
    const tag = document.getElementById('stats-tag-filter')?.value || 'all';
    const sort = document.getElementById('stats-subject-sort')?.value || 'name';
    const comparisonPeriod = Number(document.getElementById('comparison-period')?.value || 7);
    return { period, subject, tag, sort, comparisonPeriod };
}

function updateStatsFilterOptions() {
    const subjectSelect = document.getElementById('stats-subject-filter');
    const tagSelect = document.getElementById('stats-tag-filter');
    if (!subjectSelect || !tagSelect) return;
    const currentSubject = subjectSelect.value || 'all';
    const currentTag = tagSelect.value || 'all';
    const subjects = Object.keys(appData).filter(subject => !subject.startsWith('_')).sort();
    const tags = new Set();
    subjects.forEach(subject => (appData[subject].questions || []).forEach(question => (question.tags || []).forEach(tag => tags.add(tag))));
    subjectSelect.innerHTML = '<option value="all">Toutes les matières</option>' + subjects.map(subject => `<option value="${subject.replaceAll('"', '&quot;')}">${subject}</option>`).join('');
    tagSelect.innerHTML = '<option value="all">Tous les chapitres</option>' + [...tags].sort().map(tag => `<option value="${tag.replaceAll('"', '&quot;')}">${tag}</option>`).join('');
    subjectSelect.value = subjects.includes(currentSubject) ? currentSubject : 'all';
    tagSelect.value = tags.has(currentTag) ? currentTag : 'all';
}

function matchesStatsFilters(subject, question, filters) {
    return (filters.subject === 'all' || filters.subject === subject) && (filters.tag === 'all' || (question.tags || []).includes(filters.tag));
}

function resetStatsFilters() {
    document.getElementById('stats-period-filter').value = 'all';
    document.getElementById('stats-subject-filter').value = 'all';
    document.getElementById('stats-tag-filter').value = 'all';
    document.getElementById('stats-subject-sort').value = 'name';
    renderProfileDashboard();
}

function toggleFocusMode() {
    const enabled = document.body.classList.toggle('focus-mode');
    const button = document.getElementById('focus-mode-btn');
    button.textContent = enabled ? '◉ Quitter le mode réduit' : '◉ Faible distraction';
    button.setAttribute('aria-pressed', String(enabled));
}

function renderSessionHistory() {
    const container = document.getElementById('session-history');
    if (!container) return;
    const query = (document.getElementById('session-history-search')?.value || '').toLowerCase().trim();
    const sessions = [...(appData._sessions || [])].reverse().filter(record => {
        const haystack = `${record.subject} ${record.mode} ${record.status} ${new Date(record.at).toLocaleString('fr-FR')}`.toLowerCase();
        return !query || haystack.includes(query);
    }).slice(0, 20);
    container.innerHTML = '';
    if (!sessions.length) {
        container.textContent = query ? 'Aucune session ne correspond à cette recherche.' : 'Aucune session enregistrée pour le moment.';
        return;
    }
    sessions.forEach(sessionRecord => {
        const row = document.createElement('div');
        row.className = 'session-row';
        const date = new Date(sessionRecord.at).toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' });
        const status = sessionRecord.status === 'abandoned' ? 'abandonnée' : sessionRecord.status === 'timeout' ? 'temps écoulé' : 'terminée';
        const left = document.createElement('span');
        const dateText = document.createElement('strong');
        dateText.textContent = date;
        const subjectText = document.createElement('small');
        subjectText.textContent = `${sessionRecord.subject} · ${status}`;
        left.append(dateText, subjectText);
        const right = document.createElement('span');
        const scoreText = document.createElement('strong');
        scoreText.textContent = `${sessionRecord.score}/${sessionRecord.total}`;
        const detailText = document.createElement('small');
        detailText.textContent = `${sessionRecord.correct} correcte(s) · ${formatDuration(sessionRecord.duration)}${sessionRecord.note ? ` · ${sessionRecord.note}` : ''}`;
        right.append(scoreText, detailText);
        row.append(left, right);
        container.appendChild(row);
    });
}

function getActivityWindow(days, offset = 0) {
    const end = Date.now() - offset * days * 24 * 60 * 60 * 1000;
    const start = end - days * 24 * 60 * 60 * 1000;
    return (appData._activity || []).filter(item => Number(item.at) >= start && Number(item.at) < end);
}

function renderPeriodComparison(days) {
    const container = document.getElementById('period-comparison-content');
    if (!container) return;
    const current = getActivityWindow(days, 0);
    const previous = getActivityWindow(days, 1);
    const summarize = entries => ({
        attempts: entries.length,
        correct: entries.filter(entry => entry.correct).length,
        minutes: entries.reduce((sum, entry) => sum + (Number(entry.responseTime) || 0), 0) / 60000
    });
    const currentStats = summarize(current);
    const previousStats = summarize(previous);
    const rate = stats => stats.attempts ? Math.round(stats.correct / stats.attempts * 100) : 0;
    const delta = (value, previousValue) => `${value - previousValue >= 0 ? '+' : ''}${value - previousValue}`;
    container.innerHTML = `<span>Questions : <strong>${currentStats.attempts}</strong> <small>(${delta(currentStats.attempts, previousStats.attempts)})</small></span><span>Précision : <strong>${rate(currentStats)}%</strong> <small>(${delta(rate(currentStats), rate(previousStats))} pts)</small></span><span>Temps : <strong>${Math.round(currentStats.minutes)} min</strong> <small>(${delta(Math.round(currentStats.minutes), Math.round(previousStats.minutes))} min)</small></span>`;
}

function renderAdvancedDashboard(filters, now) {
    const subjectData = new Map();
    const tagData = {};
    const activities = appData._activity || [];
    Object.keys(appData).forEach(subject => {
        if (subject.startsWith('_')) return;
        const questions = appData[subject].questions.filter(question => matchesStatsFilters(subject, question, filters));
        const subjectActivities = activities.filter(activity => activity.subject === subject);
        subjectData.set(subject, { attempts: subjectActivities.length, correct: subjectActivities.filter(activity => activity.correct).length });
        questions.forEach(question => (question.tags || []).forEach(tag => {
            if (!tagData[tag]) tagData[tag] = { attempts: 0, due: 0, stable: 0, total: 0 };
            const data = tagData[tag];
            data.total++;
            data.attempts += question.stats.attempts || 0;
            if (!question.sm2.nextReview || question.sm2.nextReview <= now) data.due++;
            if ((question.sm2.successStreak || 0) >= 3 && (question.sm2.interval || 0) >= 7) data.stable++;
        }));
    });

    const chapterUrgency = Object.entries(tagData).sort((a, b) => (b[1].due - a[1].due) || (a[1].attempts - b[1].attempts));
    const urgencyContainer = document.getElementById('chapter-urgency-list');
    if (urgencyContainer) urgencyContainer.innerHTML = chapterUrgency.slice(0, 8).map(([tag, data]) => `<div class="q-mini-item danger"><span>${tag}</span><strong>${data.due} due(s)</strong></div>`).join('') || '<span>Aucune donnée.</span>';

    const fastAnswers = activities.filter(activity => Number(activity.responseTime) > 0 && Number(activity.responseTime) < 2500 && !activity.correct).sort((a, b) => a.responseTime - b.responseTime);
    const fastContainer = document.getElementById('fast-answer-list');
    if (fastContainer) fastContainer.innerHTML = fastAnswers.slice(0, 8).map(activity => `<div class="q-mini-item danger"><span>${activity.subject}</span><strong>${(activity.responseTime / 1000).toFixed(1)} s</strong></div>`).join('') || '<span>Aucune réponse suspectement rapide.</span>';

    const stabilityContainer = document.getElementById('stability-list');
    if (stabilityContainer) stabilityContainer.innerHTML = Object.entries(tagData).sort((a, b) => b[1].stable - a[1].stable).slice(0, 8).map(([tag, data]) => `<div class="q-mini-item success"><span>${tag}</span><strong>${data.stable}/${data.total} stable(s)</strong></div>`).join('') || '<span>Aucune notion stabilisée pour le moment.</span>';

    const effortContainer = document.getElementById('effort-gap-list');
    if (effortContainer) {
        effortContainer.innerHTML = [...subjectData.entries()].filter(([, data]) => data.attempts >= 3).sort((a, b) => (b[1].attempts - a[1].attempts) || (a[1].correct / a[1].attempts - b[1].correct / b[1].attempts)).slice(0, 8).map(([subject, data]) => `<div class="q-mini-item warning"><span>${subject} · ${data.attempts} tentatives</span><strong>${Math.round(data.correct / data.attempts * 100)}%</strong></div>`).join('') || '<span>Pas encore assez de données.</span>';
    }

    const prerequisiteContainer = document.getElementById('prerequisite-graph');
    if (prerequisiteContainer) {
        const edges = [];
        Object.keys(appData).forEach(subject => {
            if (subject.startsWith('_')) return;
            (appData[subject].prerequisites || []).forEach(prerequisite => edges.push(`<div class="q-mini-item"><span>${prerequisite}</span><strong>→ ${subject}</strong></div>`));
        });
        prerequisiteContainer.innerHTML = edges.join('') || '<span>Aucun prérequis défini. Ajoute-les depuis l’onglet de création.</span>';
    }

    const semesterContainer = document.getElementById('semester-evolution');
    if (semesterContainer) {
        const semester = getActivityWindow(180);
        const firstHalf = semester.filter(item => item.at < Date.now() - 90 * 24 * 60 * 60 * 1000);
        const lastHalf = semester.filter(item => item.at >= Date.now() - 90 * 24 * 60 * 60 * 1000);
        const success = entries => entries.length ? Math.round(entries.filter(item => item.correct).length / entries.length * 100) : 0;
        semesterContainer.innerHTML = `<span>Activité : <strong>${semester.length}</strong> réponses</span><span>Début : <strong>${success(firstHalf)}%</strong></span><span>Récent : <strong>${success(lastHalf)}%</strong></span><span>Évolution : <strong>${success(lastHalf) - success(firstHalf) >= 0 ? '+' : ''}${success(lastHalf) - success(firstHalf)} pts</strong></span>`;
    }
}

function renderProfileDashboard() {
    updateStatsFilterOptions();
    const filters = getStatsFilters();
    renderPeriodComparison(filters.comparisonPeriod);
    let totalAttempts = 0, totalCorrect = 0, totalPartial = 0, totalQuestions = 0, masteredQuestions = 0;
    let globalDue = 0, globalUnseen = 0;
    let strongQuestions = [], weakQuestions = [];
    let tagsMap = {};
    const now = Date.now();
    const periodLimit = filters.period === 'all' ? Infinity : Number(filters.period) * 24 * 60 * 60 * 1000;
    const recentActivity = (appData._activity || []).filter(item => {
        const subjectMatches = filters.subject === 'all' || item.subject === filters.subject;
        return subjectMatches && now - Number(item.at) <= periodLimit;
    });
    const recentAttempts = recentActivity.length;
    const recentCorrect = recentActivity.filter(item => item.correct).length;
    const recentMinutes = recentActivity.reduce((total, item) => total + (Number(item.responseTime) || 0), 0) / 60000;
    const activeDays = new Set(recentActivity.map(item => new Date(item.at).toISOString().slice(0, 10))).size;

    const container = document.getElementById('profile-content');
    container.innerHTML = "";
    const frag = document.createDocumentFragment();
    const subjects = Object.keys(appData).filter(subject => !subject.startsWith('_') && (filters.subject === 'all' || filters.subject === subject));
    const subjectMetrics = subject => {
        const questions = appData[subject].questions.filter(question => matchesStatsFilters(subject, question, filters));
        const attempts = questions.reduce((sum, question) => sum + (question.stats?.attempts || 0), 0);
        const correct = questions.reduce((sum, question) => sum + (question.stats?.correct || 0), 0);
        const due = questions.filter(question => !question.sm2.nextReview || question.sm2.nextReview <= now).length;
        const progress = questions.length ? questions.filter(question => question.sm2.interval > 10).length / questions.length : 0;
        return { attempts, correct, due, progress, accuracy: attempts ? correct / attempts : 0 };
    };
    subjects.sort((a, b) => {
        const aMetrics = subjectMetrics(a);
        const bMetrics = subjectMetrics(b);
        if (filters.sort === 'urgency') return bMetrics.due - aMetrics.due;
        if (filters.sort === 'progress') return bMetrics.progress - aMetrics.progress;
        if (filters.sort === 'accuracy') return bMetrics.accuracy - aMetrics.accuracy;
        return a.localeCompare(b, 'fr');
    });

    subjects.forEach(subject => {
        if (subject.startsWith('_')) return;
        if (filters.subject !== 'all' && filters.subject !== subject) return;
        const s = appData[subject];
        const filteredQuestions = s.questions.filter(question => matchesStatsFilters(subject, question, filters));
        let subDue = 0, subUnseen = 0;

        const subjectAttempts = filteredQuestions.reduce((total, question) => total + (question.stats?.attempts || 0), 0);
        const subjectCorrect = filteredQuestions.reduce((total, question) => total + (question.stats?.correct || 0), 0);
        const subjectPartial = filteredQuestions.reduce((total, question) => total + (question.stats?.partial || 0), 0);
        totalAttempts += subjectAttempts;
        totalCorrect += subjectCorrect;
        totalPartial += subjectPartial;
        totalQuestions += filteredQuestions.length;

        filteredQuestions.forEach(q => {
            // Stats globales et matières
            if (q.stats.attempts === 0) { globalUnseen++; subUnseen++; }
            else if (q.sm2.nextReview <= now) { globalDue++; subDue++; }
            if (q.sm2.interval > 10) masteredQuestions++;

            // Questions fortes / faibles
            if (q.stats.attempts >= 2) {
                const qRate = q.stats.correct / q.stats.attempts;
                if (qRate >= 0.8) strongQuestions.push(q);
                else if (qRate <= 0.5) weakQuestions.push(q);
            }

            // Stats par Tags
            if (q.tags) {
                q.tags.forEach(tag => {
                    if (filters.tag !== 'all' && tag !== filters.tag) return;
                    if (!tagsMap[tag]) tagsMap[tag] = { total: 0, attempts: 0, correct: 0, due: 0 };
                    tagsMap[tag].total++;
                    tagsMap[tag].attempts += q.stats.attempts;
                    tagsMap[tag].correct += q.stats.correct;
                    if (q.stats.attempts > 0 && q.sm2.nextReview <= now) tagsMap[tag].due++;
                });
            }
        });

        const rate = subjectAttempts > 0 ? Math.round((subjectCorrect / subjectAttempts) * 100) : 0;

        const box = document.createElement('div');
        box.className = "subject-progress-card";

        const headerRow = document.createElement('div');
        headerRow.style = "display:flex; justify-content: space-between; margin-bottom: 10px;";
        const h3 = document.createElement('h3'); h3.style = "margin:0; color: var(--text-main);"; h3.textContent = subject;
        const spanStats = document.createElement('span'); spanStats.style = "color: var(--text-muted); font-weight: bold;";
        spanStats.innerHTML = `${rate}% <span style="font-size:0.8em; font-weight:normal;">(${subjectCorrect}/${subjectAttempts})</span>`;
        headerRow.appendChild(h3); headerRow.appendChild(spanStats);

        const pbBg = document.createElement('div'); pbBg.className = 'progress-bar-bg';
        const pbFill = document.createElement('div'); pbFill.className = `progress-bar-fill ${rate > 50 ? 'good' : 'bad'}`; pbFill.style.width = `${rate}%`;
        pbBg.appendChild(pbFill);

        const metaRow = document.createElement('div'); metaRow.className = "subject-progress-meta";
        metaRow.innerHTML = `<span>🔴 ${subDue} à revoir</span><span>⚪ ${subUnseen} jamais vues</span>`;

        box.appendChild(headerRow); box.appendChild(pbBg); box.appendChild(metaRow);
        frag.appendChild(box);
    });
    container.appendChild(frag);

    // Injection Stats Globales
    const globalRate = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
    const recentRate = recentAttempts > 0 ? Math.round((recentCorrect / recentAttempts) * 100) : 0;
    const averageResponse = recentAttempts > 0 ? Math.round((recentMinutes * 60) / recentAttempts) : 0;
    document.getElementById('global-stats-container').innerHTML = `
        <div class="stat-card"><h3>Précision Globale</h3><div class="value">${globalRate}%</div></div>
        <div class="stat-card"><h3>Volume de la base</h3><div class="value" style="color: var(--secondary);">${totalQuestions}</div></div>
        <div class="stat-card"><h3>Tentatives totales</h3><div class="value" style="color: var(--text-main);">${totalAttempts}</div></div>
        <div class="stat-card"><h3>Réponses partielles</h3><div class="value" style="color: var(--warning);">${totalPartial}</div></div>
        <div class="stat-card accent-warning"><h3>Urgence (À revoir)</h3><div class="value" style="color: var(--warning);">${globalDue}</div></div>
        <div class="stat-card accent-secondary"><h3>Nouvelles (Jamais vues)</h3><div class="value" style="color: var(--text-muted);">${globalUnseen}</div></div>
        <div class="stat-card"><h3>7 derniers jours</h3><div class="value">${recentAttempts}</div><small>${recentRate}% de réussite</small></div>
        <div class="stat-card"><h3>Temps moyen</h3><div class="value">${averageResponse}s</div><small>${Math.round(recentMinutes)} min étudiées cette semaine</small></div>
        <div class="stat-card"><h3>Jours actifs</h3><div class="value">${activeDays}/7</div><small>${masteredQuestions} questions bien ancrées</small></div>
    `;

    const summary = document.getElementById('dashboard-summary');
    if (summary) {
        const dueCount = Object.keys(appData).filter(subject => !subject.startsWith('_')).reduce((total, subject) => total + appData[subject].questions.filter(question => matchesStatsFilters(subject, question, filters) && (!question.sm2.nextReview || question.sm2.nextReview <= now)).length, 0);
        const latestSession = [...(appData._sessions || [])].sort((a, b) => b.at - a.at)[0];
        summary.innerHTML = `<span><strong>${dueCount}</strong> à réviser</span><span><strong>${getDailyActivity().length}/${appData._player.dailyGoal || 10}</strong> objectif du jour</span><span><strong>${getStudyStreak()}</strong> jour(s) de série</span><span>Dernière session : <strong>${latestSession ? new Date(latestSession.at).toLocaleDateString('fr-FR') : 'aucune'}</strong></span>`;
    }

    const chart = document.getElementById('activity-chart');
    if (chart) {
        const chartDays = [];
        for (let offset = 6; offset >= 0; offset--) {
            const date = new Date(now - offset * 24 * 60 * 60 * 1000);
            const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
            const dayActivity = (appData._activity || []).filter(item => new Date(item.at).toISOString().slice(0, 10) === key);
            const attempts = dayActivity.length;
            const correct = dayActivity.filter(item => item.correct).length;
            chartDays.push(`<div class="activity-day"><div class="activity-bars"><span class="activity-bar attempts" style="height:${Math.min(100, attempts * 12)}%" title="${attempts} tentative(s)"></span><span class="activity-bar correct" style="height:${attempts ? Math.min(100, (correct / attempts) * 100) : 0}%" title="${correct} réussite(s)"></span></div><small>${date.toLocaleDateString('fr-FR', { weekday: 'short' }).replace('.', '')}</small><strong>${attempts}</strong></div>`);
        }
        chart.innerHTML = chartDays.join('');
    }

    const retentionStats = document.getElementById('retention-stats');
    if (retentionStats) {
        retentionStats.innerHTML = [1, 7, 30].map(days => {
            const retention = calculateRetention(days);
            const value = retention.rate === null ? 'Pas encore assez de recul' : `${retention.rate}% (${retention.remembered}/${retention.eligible})`;
            return `<div class="confidence-row"><span>Après ${days} jour${days > 1 ? 's' : ''}</span><strong>${value}</strong></div>`;
        }).join('');
    }

    const reviewCalendar = document.getElementById('review-calendar');
    if (reviewCalendar) {
        const reviewDays = Array.from({ length: 8 }, (_, offset) => ({ offset, count: 0, subjects: new Set() }));
        Object.keys(appData).forEach(subject => {
            if (subject.startsWith('_')) return;
            appData[subject].questions.forEach(question => {
                const reviewAt = Number(question.sm2?.nextReview) || 0;
                const offset = reviewAt <= now ? 0 : Math.floor((reviewAt - now) / (24 * 60 * 60 * 1000)) + 1;
                if (offset >= 0 && offset < reviewDays.length) {
                    reviewDays[offset].count++;
                    reviewDays[offset].subjects.add(subject);
                }
            });
        });
        reviewCalendar.innerHTML = '';
        reviewDays.forEach(day => {
            const date = new Date(now + day.offset * 24 * 60 * 60 * 1000);
            const row = document.createElement('div');
            row.className = 'review-day';
            const dateText = document.createElement('span');
            dateText.textContent = day.offset === 0 ? "Aujourd'hui" : date.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });
            const countText = document.createElement('strong');
            countText.textContent = `${day.count} question${day.count > 1 ? 's' : ''}`;
            const subjectsText = document.createElement('small');
            subjectsText.textContent = [...day.subjects].slice(0, 2).join(', ');
            row.append(dateText, countText, subjectsText);
            reviewCalendar.appendChild(row);
        });
    }

    renderSessionHistory();

    // Rendu des Tags (Maîtrise par chapitre)
    const tagsArray = Object.keys(tagsMap).map(k => ({ name: k, ...tagsMap[k] }));
    // Tri par urgence (due), puis par précision
    tagsArray.sort((a, b) => {
        if (b.due !== a.due) return b.due - a.due;
        const rateA = a.attempts > 0 ? a.correct / a.attempts : 0;
        const rateB = b.attempts > 0 ? b.correct / b.attempts : 0;
        return rateA - rateB;
    });

    const tagContainer = document.getElementById('tag-stats-container');
    tagContainer.innerHTML = "";
    if (tagsArray.length === 0) tagContainer.innerHTML = "<p style='color:var(--text-muted); font-style:italic;'>Aucune donnée par chapitre.</p>";
    else {
        tagsArray.slice(0, 10).forEach(tag => {
            const tagRate = tag.attempts > 0 ? Math.round((tag.correct / tag.attempts) * 100) : 0;
            const coverage = Math.min(1, tag.attempts / Math.max(1, tag.total * 3));
            const masteryScore = Math.round(tagRate * (0.7 + 0.3 * coverage));
            const row = document.createElement('div'); row.className = 'tag-stat-row';
            row.innerHTML = `
                <strong style="color: var(--primary); flex: 1;">${tag.name}</strong>
                <span style="flex: 1; text-align: center;">Maîtrise ${masteryScore}% <small>(${tagRate}% réussite, ${tag.total} Q)</small></span>
                <span style="flex: 1; color: ${tag.due > 0 ? 'var(--warning)' : 'var(--text-muted)'};">🔴 ${tag.due} à revoir</span>
            `;
            tagContainer.appendChild(row);
        });
    }

    // Mini-listes (Fortes / Faibles)
    const buildMiniList = (qList, elementId, cssClass, fallbackMsg) => {
        const listDiv = document.getElementById(elementId);
        listDiv.innerHTML = "";
        if (qList.length === 0) {
            listDiv.innerHTML = `<span style="color: var(--text-muted); font-size: 0.9em; font-style: italic;">${fallbackMsg}</span>`;
            return;
        }
        qList.slice(0, 5).forEach(q => {
            const item = document.createElement('div'); item.className = `q-mini-item ${cssClass}`;
            const pct = Math.round((q.stats.correct / q.stats.attempts) * 100);

            const qSpan = document.createElement('span');
            qSpan.style = "white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 80%;";
            qSpan.textContent = q.q; qSpan.title = q.q;

            const pSpan = document.createElement('strong'); pSpan.textContent = `${pct}%`;

            item.appendChild(qSpan); item.appendChild(pSpan); listDiv.appendChild(item);
        });
    };

    strongQuestions.sort((a, b) => (b.stats.correct / b.stats.attempts) - (a.stats.correct / a.stats.attempts));
    weakQuestions.sort((a, b) => (a.stats.correct / a.stats.attempts) - (b.stats.correct / b.stats.attempts));

    buildMiniList(strongQuestions, 'strong-questions-list', 'success', "Continue de t'entraîner pour débloquer cette section.");
    buildMiniList(weakQuestions, 'weak-questions-list', 'danger', "Aucun point de friction détecté pour le moment !");

    const forgottenContainer = document.getElementById('forgotten-questions-list');
    if (forgottenContainer) {
        const forgotten = [];
        Object.keys(appData).forEach(subject => {
            if (subject.startsWith('_')) return;
            appData[subject].questions.forEach(question => {
                if (!matchesStatsFilters(subject, question, filters) || !question.stats.attempts) return;
                const lastActivity = (appData._activity || []).filter(item => item.subject === subject && item.questionId === question.id).sort((a, b) => b.at - a.at)[0];
                const daysSince = lastActivity ? Math.floor((now - lastActivity.at) / (24 * 60 * 60 * 1000)) : 999;
                if (daysSince >= 14) forgotten.push({ question, subject, daysSince });
            });
        });
        forgotten.sort((a, b) => b.daysSince - a.daysSince);
        forgottenContainer.innerHTML = forgotten.length ? forgotten.slice(0, 10).map(item => `<div class="q-mini-item danger"><span title="${item.question.q}">${item.subject} · ${item.question.q}</span><strong>${item.daysSince} j</strong></div>`).join('') : '<span style="color:var(--text-muted);">Aucune question oubliée depuis plus de 14 jours.</span>';
    }

    renderAdvancedDashboard(filters, now);

    renderMath([document.getElementById('profile-view')]);
}

// -----------------------------------------------------
// ÉDITION ET FAVORIS EN COURS DE QUIZ
// -----------------------------------------------------

async function toggleFavorite() {
    const qItem = session.questions[session.currentIndex];
    const qData = qItem.originalRef;

    // Inversion de l'état favori
    qData.isFavorite = !qData.isFavorite;

    const favBtn = document.getElementById('btn-fav-q');
    if (qData.isFavorite) {
        favBtn.textContent = "🌟 Retirer des favoris";
        favBtn.className = "btn btn-success";
        customAlert("Favoris", "Question ajoutée aux favoris !");
    } else {
        favBtn.textContent = "⭐ Ajouter aux favoris";
        favBtn.className = "btn btn-warning";
        customAlert("Favoris", "Question retirée des favoris.");
    }

    await saveData(); // Sauvegarde immédiate dans Supabase
}

function getQuestionForEditing() {
    if (editingQuestionRef) {
        const subjectData = appData[editingQuestionRef.subject];
        const question = subjectData?.questions.find(item => item.id === editingQuestionRef.questionId);
        if (question) return { question, subject: editingQuestionRef.subject };
    }
    const qItem = session.questions[session.currentIndex];
    return qItem ? { question: qItem.originalRef, subject: qItem.subjectRef } : null;
}

function openEditModal(subject = null, questionId = null) {
    editingQuestionRef = subject && questionId ? { subject, questionId } : null;
    const editingTarget = getQuestionForEditing();
    if (!editingTarget) return customAlert('Édition', 'Cette question est introuvable.');
    const qData = editingTarget.question;

    // Pré-remplissage des champs avec les données actuelles
    document.getElementById('edit-q-text').value = qData.q;
    document.getElementById('edit-q-explanation').value = qData.explanation || "";
    document.getElementById('edit-q-tags').value = (qData.tags || []).join(", ");

    // Génération des options existantes
    const optionsContainer = document.getElementById('edit-q-options-container');
    optionsContainer.innerHTML = "";

    qData.options.forEach(opt => {
        addOptionToEdit(opt.text, opt.isCorrect);
    });

    const modal = document.getElementById('edit-question-modal');
    modal.classList.remove('hidden');
    modal.style.display = 'block';
}

function closeEditModal() {
    const modal = document.getElementById('edit-question-modal');
    modal.classList.add('hidden');
    modal.style.display = 'none';
}

function addOptionToEdit(text = "", isCorrect = false) {
    const container = document.getElementById('edit-q-options-container');
    const optDiv = document.createElement('div');
    optDiv.className = 'option-edit-row';
    optDiv.style = "display: flex; gap: 10px; margin-bottom: 10px; align-items: center;";

    const checkCorrect = document.createElement('input');
    checkCorrect.type = 'checkbox';
    checkCorrect.id = `edit-option-correct-${container.children.length}`;
    checkCorrect.name = 'edit-option-correct';
    checkCorrect.checked = isCorrect;
    checkCorrect.className = "edit-opt-correct";
    checkCorrect.style.transform = "scale(1.5)";

    const inputTxt = document.createElement('input');
    inputTxt.type = 'text';
    inputTxt.id = `edit-option-text-${container.children.length}`;
    inputTxt.name = 'edit-option-text';
    inputTxt.style.flex = "1";
    inputTxt.value = text;
    inputTxt.className = "edit-opt-text";
    inputTxt.style.padding = "8px";
    inputTxt.style.borderRadius = "5px";
    inputTxt.style.background = "rgba(255,255,255,0.1)";
    inputTxt.style.color = "white";
    inputTxt.style.border = "1px solid rgba(255,255,255,0.3)";

    const btnDel = document.createElement('button');
    btnDel.innerHTML = "❌";
    btnDel.className = "btn btn-danger";
    btnDel.style.padding = "8px 12px";
    btnDel.onclick = () => container.removeChild(optDiv);

    optDiv.appendChild(checkCorrect);
    optDiv.appendChild(inputTxt);
    optDiv.appendChild(btnDel);
    container.appendChild(optDiv);
}

async function saveEditedQuestion() {
    const editingTarget = getQuestionForEditing();
    if (!editingTarget) return customAlert('Édition', 'Cette question est introuvable.');
    const qData = editingTarget.question;

    // Récupération des textes
    const newText = document.getElementById('edit-q-text').value.trim();
    if (!newText) {
        customAlert("Attention", "La question ne peut pas être vide !");
        return;
    }

    qData.q = newText;
    qData.explanation = document.getElementById('edit-q-explanation').value.trim();

    const tagsRaw = document.getElementById('edit-q-tags').value;
    qData.tags = tagsRaw.split(',').map(t => t.trim()).filter(t => t);

    // Traitement des options
    const optionRows = document.querySelectorAll('.option-edit-row');
    let newOptions = [];
    let hasCorrect = false;

    optionRows.forEach(row => {
        const text = row.querySelector('.edit-opt-text').value.trim();
        const isCorrect = row.querySelector('.edit-opt-correct').checked;
        if (text) {
            newOptions.push({ text, isCorrect });
            if (isCorrect) hasCorrect = true;
        }
    });

    if (newOptions.length < 2) {
        customAlert("Attention", "Il faut au moins 2 options valides !");
        return;
    }
    if (!hasCorrect) {
        customAlert("Attention", "Il faut au moins une bonne réponse cochée !");
        return;
    }

    const duplicate = appData[editingTarget.subject].questions.find(question => question.id !== qData.id && question.q.trim().toLowerCase() === newText.toLowerCase());
    if (duplicate) return customAlert('Édition', 'Une autre question de cette matière possède déjà cet énoncé.');

    qData.options = newOptions;
    qData.id = qData.id || getQuestionId(editingTarget.subject, qData, 0);

    await saveData(); // Synchronisation Supabase
    closeEditModal();
    customAlert("Succès", "La question a été mise à jour et sauvegardée. Son historique a été conservé.");

    // Mise à jour visuelle immédiate dans le quiz
    const quizQuestion = document.getElementById('quiz-question');
    if (quizQuestion && session.questions[session.currentIndex]?.originalRef.id === qData.id) {
        quizQuestion.textContent = qData.q;
        document.getElementById('explanation-text').textContent = qData.explanation || '';
        renderMath([document.getElementById('quiz-view')]);
    }
    if (document.getElementById('favorites-view').classList.contains('hidden') === false) renderFavorites();
    editingQuestionRef = null;
}

// -----------------------------------------------------
// PAGE "MES FAVORIS"
// -----------------------------------------------------

function renderFavorites() {
    const container = document.getElementById('favorites-container');
    container.innerHTML = "";

    let hasFavorites = false;
    const frag = document.createDocumentFragment();

    Object.keys(appData).forEach(subject => {
        if (subject.startsWith('_')) return; // On ignore _player et _folders

        const favQuestions = appData[subject].questions.filter(q => q.isFavorite);

        if (favQuestions.length > 0) {
            hasFavorites = true;

            // En-tête de la matière
            const subjectTitle = document.createElement('h2');
            subjectTitle.style = "margin-top: 30px; margin-bottom: 15px; border-bottom: 1px solid var(--surface-light); padding-bottom: 5px;";
            subjectTitle.textContent = `📁 ${subject}`;
            frag.appendChild(subjectTitle);

            // Création des cartes pour chaque question
            favQuestions.forEach(q => {
                const card = document.createElement('div');
                card.className = 'card';
                card.style = "margin-bottom: 15px; position: relative;";

                const tags = document.createElement('div');
                tags.style = "font-size: 0.85em; color: var(--secondary); margin-bottom: 8px;";
                tags.textContent = `Tags : ${q.tags?.join(', ') || 'Aucun'}`;
                card.appendChild(tags);

                const questionTitle = document.createElement('h3');
                questionTitle.style = "margin-top: 0; font-size: 1.1em;";
                questionTitle.textContent = q.q;
                card.appendChild(questionTitle);

                const answersBox = document.createElement('div');
                answersBox.style = "margin-top: 12px; padding: 10px; background: rgba(46, 204, 113, 0.1); border-left: 4px solid var(--success); border-radius: 4px;";
                const answers = document.createElement('span');
                answers.style.color = 'var(--success)';
                answers.textContent = `✅ ${q.options.filter(option => option.isCorrect).map(option => option.text).join(' ou ')}`;
                answersBox.appendChild(answers);
                card.appendChild(answersBox);

                if (q.explanation) {
                    const explanationBox = document.createElement('div');
                    explanationBox.style = "margin-top: 10px; padding: 10px; background: rgba(255, 255, 255, 0.05); border-radius: 4px;";
                    const explanationTitle = document.createElement('strong');
                    explanationTitle.style.color = 'var(--primary)';
                    explanationTitle.textContent = '💡 Explication :';
                    const explanationText = document.createElement('span');
                    explanationText.style = "font-size: 0.95em; color: var(--text-main);";
                    explanationText.textContent = q.explanation;
                    explanationBox.append(explanationTitle, document.createElement('br'), explanationText);
                    card.appendChild(explanationBox);
                }

                const btnEdit = document.createElement('button');
                btnEdit.className = 'secondary';
                btnEdit.style = "margin-top: 15px; padding: 6px 12px; font-size: 0.85em; margin-right: 8px;";
                btnEdit.textContent = '✏️ Modifier';
                btnEdit.onclick = () => openEditModal(subject, q.id);
                card.appendChild(btnEdit);

                const btnRemove = document.createElement('button');
                btnRemove.className = 'btn btn-secondary';
                btnRemove.style = "margin-top: 15px; padding: 6px 12px; font-size: 0.85em;";
                btnRemove.innerHTML = "❌ Retirer des favoris";
                btnRemove.onclick = () => removeFavoriteFromList(subject, q.id);

                card.appendChild(btnRemove);
                frag.appendChild(card);
            });
        }
    });

    if (!hasFavorites) {
        container.innerHTML = `
            <div class="card" style="text-align: center; padding: 40px 20px;">
                <h3 style="color: var(--text-muted);">Aucune question favorite</h3>
                <p style="color: var(--text-muted); font-size: 0.9em;">Épingle les questions difficiles pendant tes quiz en cliquant sur ⭐ Favoris.</p>
            </div>`;
    } else {
        container.appendChild(frag);
        // On demande à MathJax de formater les maths (LaTeX) dans la nouvelle page
        renderMath([container]);
    }
}

function handleQuizKeyboard(event) {
    if (!hasActiveQuiz() || document.getElementById('quiz-view').classList.contains('hidden')) return;
    if (['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'].includes(event.target.tagName)) return;

    if (session.pendingResult) {
        const reviewButtons = { '1': 'btn-next-wrong', '2': 'btn-sm2-3', '3': 'btn-sm2-4', '4': 'btn-sm2-5' };
        const buttonId = reviewButtons[event.key];
        if (buttonId && !document.getElementById(buttonId).classList.contains('hidden')) {
            event.preventDefault();
            document.getElementById(buttonId).click();
        }
        return;
    }

    if (event.key >= '1' && event.key <= '4') {
        const input = document.querySelectorAll('.qcm-option input')[Number(event.key) - 1];
        if (input) {
            event.preventDefault();
            input.checked = input.type === 'radio' ? true : !input.checked;
            input.dispatchEvent(new Event('change', { bubbles: true }));
        }
    } else if (event.key === 'Enter' && session.mode !== 'gr20') {
        event.preventDefault();
        document.getElementById('validate-btn').click();
    } else if ((event.key === 'n' || event.key === 'N') && session.mode === 'gr20') {
        event.preventDefault();
        document.getElementById('gr20-next-btn').click();
    }
}

async function removeFavoriteFromList(subject, questionId) {
    if (appData[subject]) {
        const targetQ = appData[subject].questions.find(q => q.id === questionId);
        if (targetQ) {
            targetQ.isFavorite = false;
            await saveData(); // Synchronisation Supabase
            renderFavorites(); // Rafraîchir l'affichage instantanément
        }
    }
}

// -----------------------------------------------------
// LAZY LOADING : TÉLÉCHARGEMENT DES COURS
// -----------------------------------------------------
async function loadCourseData(courseTitle, dataUrl) {
    try {
        customAlert("Téléchargement", `Téléchargement de ${courseTitle} en cours... ⏳`);

        // On va chercher le fichier JSON
        const response = await fetch(dataUrl);
        if (!response.ok) throw new Error("Fichier introuvable ou erreur réseau");

        const courseData = await response.json();
        let hasNewContent = false;

        // On parcourt les chapitres du fichier téléchargé
        for (let subject in courseData) {
            if (!appData[subject]) {
                // Si la matière n'existe pas encore chez l'utilisateur, on l'ajoute
                appData[subject] = normalizeData({ [subject]: courseData[subject] })[subject];

                // On s'assure qu'elle atterrit dans un dossier par défaut
                appData[subject].folder = courseData[subject].folder || "Général";

                // On s'assure que _folders connaît ce dossier
                if (!appData._folders.includes(appData[subject].folder)) {
                    appData._folders.push(appData[subject].folder);
                }

                hasNewContent = true;
            } else {
                // Si la matière existe déjà (stats conservées), on ajoute juste les NOUVELLES questions
                courseData[subject].questions.forEach((newQ, index) => {
                    const exists = appData[subject].questions.find(q => q.q === newQ.q);
                    if (!exists) {
                        appData[subject].questions.push(normalizeQuestion(newQ, subject, appData[subject].questions.length + index));
                        hasNewContent = true;
                    }
                });
            }
        }

        if (hasNewContent) {
            await saveData(); // On sauvegarde dans Supabase / Local
            renderHome();     // On rafraîchit l'accueil pour voir les nouvelles matières
            customAlert("Succès", `Le cours ${courseTitle} a été installé/mis à jour avec succès ! ✅`);
        } else {
            customAlert("À jour", `Le cours ${courseTitle} est déjà 100% à jour dans ta base. 👍`);
        }

    } catch (error) {
        console.error(error);
        customAlert("Erreur", `Impossible de charger ${courseTitle}. Vérifie que le fichier ${dataUrl} existe bien.`);
    }
}
// LANCEMENT DE L'APPLICATION
initSidebarControls();
document.addEventListener('keydown', handleQuizKeyboard);
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        if (hasActiveQuiz() && session.timerInterval) {
            stopTimer();
            persistQuizState();
        }
    } else if (hasActiveQuiz() && session.timerEnabled && !document.getElementById('quiz-view').classList.contains('hidden')) {
        setupTimer(true, false);
    }
});
checkSession();

// Utilitaire de secours accessible en console pour restaurer n'importe quel snapshot précédent
window.quizzRecovery = {
    list() {
        const backups = JSON.parse(localStorage.getItem('myQuizBackups') || '[]');
        const rescue = localStorage.getItem('myQuizData_rescue');
        if (rescue) {
            console.log("%c[INFO] Une copie de secours 'myQuizData_rescue' a été trouvée dans localStorage. Tu peux faire window.quizzRecovery.restoreRescue() pour la réappliquer.", "color: #f59e0b; font-weight: bold;");
        }
        if (!backups.length && !rescue) {
            console.warn("Aucune sauvegarde trouvée dans localStorage.");
            return [];
        }
        console.table(backups.map((b, i) => ({
            Index: i,
            Date: new Date(b.at).toLocaleString(),
            XP: b.content?._player?.xp || 0,
            Matieres: Object.keys(b.content || {}).filter(k => !k.startsWith('_')).length,
            QuestionsTotales: Object.keys(b.content || {}).filter(k => !k.startsWith('_')).reduce((acc, k) => acc + (b.content[k]?.questions?.length || 0), 0)
        })));
        return backups;
    },
    restoreRescue() {
        const rescue = localStorage.getItem('myQuizData_rescue');
        if (!rescue) {
            console.warn("Aucune sauvegarde de secours 'myQuizData_rescue' trouvée.");
            return false;
        }
        try {
            const parsed = JSON.parse(rescue);
            appData = mergeDataWithDefaults(parsed, appData);
            window.appData = appData;

            // Réactivation et ouverture des dossiers pour toutes les matières restaurées
            const restoredNames = [];
            Object.keys(parsed || {}).forEach(sub => {
                if (!sub.startsWith('_') && appData[sub]) {
                    appData[sub].isSelected = true;
                    appData[sub].deleted = false;
                    restoredNames.push(sub);
                    const folder = appData[sub].folder || DEFAULT_FOLDER;
                    if (!Array.isArray(appData._folders)) appData._folders = [DEFAULT_FOLDER];
                    if (!appData._folders.includes(folder)) appData._folders.push(folder);
                    openFolders.add(folder);
                }
            });

            try {
                const cur = JSON.parse(localStorage.getItem('myQuizSelectedSubjects') || '[]');
                localStorage.setItem('myQuizSelectedSubjects', JSON.stringify([...new Set([...cur, ...restoredNames])]));
            } catch (err) { }

            saveData();
            renderHome();
            updatePlayerUI();
            console.log("%c✓ Sauvegarde d'urgence 'myQuizData_rescue' restaurée et fusionnée avec succès !", "color: #10b981; font-weight: bold; font-size: 14px;");
            return true;
        } catch (e) {
            console.error("Erreur parsing rescue :", e);
            return false;
        }
    },
    restore(index = -1) {
        let backups = [];
        try {
            backups = JSON.parse(localStorage.getItem('myQuizBackups') || '[]');
        } catch (e) { backups = []; }
        if (!backups.length) {
            console.error("Aucune sauvegarde disponible.");
            return false;
        }
        const target = index === -1 ? backups.at(-1) : backups[index];
        if (!target?.content) {
            console.error("Index invalide ou contenu vide.");
            return false;
        }
        appData = mergeDataWithDefaults(target.content, appData);
        window.appData = appData;

        // Réactivation et ouverture des dossiers pour toutes les matières restaurées
        const restoredNames = [];
        Object.keys(target.content || {}).forEach(sub => {
            if (!sub.startsWith('_') && appData[sub]) {
                appData[sub].isSelected = true;
                appData[sub].deleted = false;
                restoredNames.push(sub);
                const folder = appData[sub].folder || DEFAULT_FOLDER;
                if (!Array.isArray(appData._folders)) appData._folders = [DEFAULT_FOLDER];
                if (!appData._folders.includes(folder)) appData._folders.push(folder);
                openFolders.add(folder);

                // Sauvegarder dans le registre anti-perte
                if (target.content[sub]?.isCustom || (!baseData || !baseData[sub])) {
                    appData[sub].isCustom = true;
                    if (window.communityAdmin && window.communityAdmin.saveCustomSubjectToRegistry) {
                        window.communityAdmin.saveCustomSubjectToRegistry(sub, appData[sub]);
                    }
                }
            }
        });

        // Restaurer la liste des dossiers supprimés
        if (Array.isArray(target.content?._deletedFolders)) {
            appData._deletedFolders = [...new Set([...(appData._deletedFolders || []), ...target.content._deletedFolders])];
            try {
                localStorage.setItem('myQuizDeletedFolders', JSON.stringify(appData._deletedFolders));
            } catch (e) { }
        }

        try {
            const cur = JSON.parse(localStorage.getItem('myQuizSelectedSubjects') || '[]');
            localStorage.setItem('myQuizSelectedSubjects', JSON.stringify([...new Set([...cur, ...restoredNames])]));
        } catch (err) { }

        saveData(true);
        renderHome();
        updatePlayerUI();
        console.log("%c✓ Sauvegarde restaurée et fusionnée avec succès !", "color: #10b981; font-weight: bold; font-size: 14px;");
        return true;
    }
};

// Fonctions d'interface pour la modal de récupération des anciennes statistiques et cours
function openStatsRecoveryModal() {
    const modal = document.getElementById('stats-recovery-modal');
    if (!modal) return;
    renderRecoveryModalList();
    modal.classList.remove('hidden');
    modal.style.display = 'block';
}

function closeStatsRecoveryModal() {
    const modal = document.getElementById('stats-recovery-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.style.display = 'none';
}

function renderRecoveryModalList() {
    const container = document.getElementById('stats-recovery-list');
    if (!container) return;
    container.innerHTML = '';

    const rescue = localStorage.getItem('myQuizData_rescue');
    const backups = JSON.parse(localStorage.getItem('myQuizBackups') || '[]');

    let html = '';

    if (rescue) {
        let rescueInfo = 'Point de secours automatique détecté';
        try {
            const parsed = JSON.parse(rescue);
            const subs = Object.keys(parsed || {}).filter(k => !k.startsWith('_')).length;
            const xp = parsed?._player?.xp || 0;
            rescueInfo = `${subs} matière(s) • ${xp} XP`;
        } catch (e) { }

        html += `
            <div style="background: rgba(245, 158, 11, 0.12); border: 1px solid var(--warning); border-radius: 8px; padding: 14px; margin-bottom: 15px;">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                    <div>
                        <strong style="color: var(--warning); font-size: 1.05em;">⚡ Copie de secours d'urgence (Rescue)</strong>
                        <div style="font-size:0.85em; color: var(--text-muted); margin-top: 3px;">${rescueInfo}</div>
                    </div>
                    <button class="warning" style="background:var(--warning); color:#000; font-weight:bold; cursor:pointer;" onclick="applyRecoveryRescue()">Restaurer la copie de secours</button>
                </div>
            </div>
        `;
    }

    if (!backups.length && !rescue) {
        html += `<p style="color: var(--text-muted); text-align:center; padding: 30px; background: rgba(255,255,255,0.03); border-radius: 8px;">Aucune sauvegarde locale automatique trouvée sur ce navigateur.<br><small style="opacity: 0.7;">Si tu possèdes un fichier JSON exporté précédemment, utilise le bouton d'importation ci-dessous.</small></p>`;
    } else if (backups.length > 0) {
        html += `<h4 style="margin: 15px 0 10px 0; color: var(--primary);">Points de sauvegarde enregistrés (${backups.length}) :</h4>`;
        const reversed = [...backups].reverse();
        reversed.forEach((b, idx) => {
            const originalIndex = backups.length - 1 - idx;
            const dateStr = b.at ? new Date(b.at).toLocaleString() : 'Date inconnue';
            const countSubs = Object.keys(b.content || {}).filter(k => !k.startsWith('_')).length;
            const xp = b.content?._player?.xp || 0;
            const questionsTotal = Object.keys(b.content || {}).filter(k => !k.startsWith('_')).reduce((acc, k) => acc + (b.content[k]?.questions?.length || 0), 0);

            html += `
                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--surface-light); border-radius: 8px; padding: 12px 14px; margin-bottom: 10px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                    <div>
                        <strong style="color: var(--text-main);">📅 ${dateStr}</strong>
                        <div style="font-size: 0.85em; color: var(--text-muted); margin-top: 4px;">
                            <span>${countSubs} matières</span> • <span>${questionsTotal} questions</span> • <span style="color:var(--success); font-weight:bold;">${xp} XP</span>
                        </div>
                    </div>
                    <button class="secondary" style="cursor:pointer;" onclick="applyRecoveryIndex(${originalIndex})">↩ Restaurer</button>
                </div>
            `;
        });
    }

    container.innerHTML = html;
}

async function applyRecoveryRescue() {
    if (window.quizzRecovery && window.quizzRecovery.restoreRescue) {
        const ok = window.quizzRecovery.restoreRescue();
        if (ok) {
            closeStatsRecoveryModal();
            customAlert("Succès", "La copie de secours a été restaurée et fusionnée avec succès !");
            if (typeof renderProfileDashboard === 'function') renderProfileDashboard();
        }
    }
}

async function applyRecoveryIndex(idx) {
    if (window.quizzRecovery && window.quizzRecovery.restore) {
        const ok = window.quizzRecovery.restore(idx);
        if (ok) {
            closeStatsRecoveryModal();
            customAlert("Succès", "La sauvegarde a été restaurée et fusionnée avec succès !");
            if (typeof renderProfileDashboard === 'function') renderProfileDashboard();
        }
    }
}

// ============================================================================
// GESTION DU COMPARTIMENT FLASHCARDS (AJOUTER UNE MATIÈRE)
// ============================================================================
async function createFlashcardFromCompartment() {
    const recto = document.getElementById('create-fc-recto')?.value.trim();
    const verso = document.getElementById('create-fc-verso')?.value.trim();
    const subject = document.getElementById('create-fc-subject')?.value.trim() || 'Général';
    const folder = document.getElementById('create-fc-folder')?.value.trim() || 'Général';
    const msgEl = document.getElementById('create-fc-message');

    if (!recto || !verso) {
        if (msgEl) {
            msgEl.textContent = 'Veuillez remplir le Recto et le Verso de la carte.';
            msgEl.style.color = 'var(--danger)';
        }
        return;
    }

    if (window.flashcardManager) {
        window.flashcardManager.addCard({ recto, verso, subject, folder });
        const rEl = document.getElementById('create-fc-recto');
        const vEl = document.getElementById('create-fc-verso');
        if (rEl) rEl.value = '';
        if (vEl) vEl.value = '';
        if (msgEl) {
            msgEl.textContent = `✓ Flashcard créée avec succès dans "${subject}" (${folder}) !`;
            msgEl.style.color = 'var(--success)';
            setTimeout(() => { if (msgEl) msgEl.textContent = ''; }, 4000);
        }
    }
}
window.createFlashcardFromCompartment = createFlashcardFromCompartment;

function importCompartmentFlashcardFile(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const msgEl = document.getElementById('compartment-fc-message');
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const parsed = JSON.parse(e.target.result);
            const list = Array.isArray(parsed) ? parsed : (parsed.flashcards || parsed.cards || []);
            if (window.flashcardManager) {
                const count = window.flashcardManager.importCards(list);
                if (msgEl) {
                    msgEl.textContent = `✓ ${count} flashcard(s) importée(s) avec succès !`;
                    msgEl.style.color = 'var(--success)';
                }
                event.target.value = '';
            }
        } catch (err) {
            if (msgEl) {
                msgEl.textContent = `Erreur : ${err.message}`;
                msgEl.style.color = 'var(--danger)';
            }
        }
    };
    reader.readAsText(file);
}
window.importCompartmentFlashcardFile = importCompartmentFlashcardFile;

function importCompartmentFlashcardJson() {
    const text = document.getElementById('compartment-fc-json')?.value.trim();
    const msgEl = document.getElementById('compartment-fc-message');
    if (!text) {
        if (msgEl) {
            msgEl.textContent = 'Veuillez coller du code JSON.';
            msgEl.style.color = 'var(--danger)';
        }
        return;
    }
    try {
        const parsed = JSON.parse(text);
        const list = Array.isArray(parsed) ? parsed : (parsed.flashcards || parsed.cards || []);
        if (window.flashcardManager) {
            const count = window.flashcardManager.importCards(list);
            const txtEl = document.getElementById('compartment-fc-json');
            if (txtEl) txtEl.value = '';
            if (msgEl) {
                msgEl.textContent = `✓ ${count} flashcard(s) importée(s) avec succès !`;
                msgEl.style.color = 'var(--success)';
            }
        }
    } catch (err) {
        if (msgEl) {
            msgEl.textContent = `Erreur JSON : ${err.message}`;
            msgEl.style.color = 'var(--danger)';
        }
    }
}
window.importCompartmentFlashcardJson = importCompartmentFlashcardJson;

// ============================================================================
// EXPOSITIONS GLOBALES SUR WINDOW
// ============================================================================
window.saveData = saveData;
window.renderHome = renderHome;
window.openSubject = openSubject;
window.customAlert = customAlert;
window.customConfirm = customConfirm;
window.showView = showView;
window.updatePlayerUI = updatePlayerUI;
window.isSubjectAvailable = isSubjectAvailable;
window.openFolders = openFolders;


