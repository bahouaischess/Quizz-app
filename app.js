// -----------------------------------------------------
// CONFIGURATION SUPABASE
// -----------------------------------------------------
const SUPABASE_URL = 'https://dylpgqwobictpelbwwzf.supabase.co/rest/v1/'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5bHBncXdvYmljdHBlbGJ3d3pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5NTMzNjMsImV4cCI6MjEwNDUyOTM2M30.A18JCXfr2KWXTdRglTTdun0o9q6Hvlp-LzrWqXLupdo';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// On va stocker l'ID de l'utilisateur connecté ici
let currentUser = null;
const FIVE_HOURS_MS = 5 * 60 * 60 * 1000;
const DATA_SCHEMA_VERSION = 2;
const DEFAULT_FOLDER_ID = 'uncategorized';

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
    // Supprime dynamiquement les[cite: 1], [source: 2], etc.
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
    
    if(isConfirm) {
        cancelBtn.classList.remove('hidden');
        confirmBtn.onclick = () => { overlay.classList.add('hidden'); if(onConfirm) onConfirm(); };
    } else {
        cancelBtn.classList.add('hidden');
        confirmBtn.onclick = () => overlay.classList.add('hidden');
    }
    overlay.classList.remove('hidden');
}

function customAlert(title, msg) { customModal(title, msg, null, false); }
function customConfirm(title, msg, onConfirm) { customModal(title, msg, onConfirm, true); }

// NORMALISATION ET VALIDATION DES DONNÉES
function createQuestionId() {
    if (window.crypto?.randomUUID) return window.crypto.randomUUID();
    return `q-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function getQuestionFingerprint(question) {
    return JSON.stringify({
        q: removeCitations(question.q),
        options: question.options.map(option => ({ text: removeCitations(option.text), isCorrect: option.isCorrect }))
    });
}

function createStableQuestionId(subject, question) {
    const source = `${subject}|${getQuestionFingerprint(question)}`;
    let hash = 2166136261;
    for (let index = 0; index < source.length; index++) {
        hash ^= source.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
    }
    return `builtin-${(hash >>> 0).toString(36)}`;
}

function isValidQuestion(question) {
    return Boolean(
        question &&
        typeof question.q === 'string' &&
        question.q.trim() &&
        Array.isArray(question.options) &&
        question.options.length >= 2 &&
        question.options.every(option =>
            option &&
            typeof option.text === 'string' &&
            option.text.trim() &&
            typeof option.isCorrect === 'boolean'
        ) &&
        question.options.some(option => option.isCorrect)
    );
}

function validateData(rawData) {
    const errors = [];
    if (!rawData || typeof rawData !== 'object' || Array.isArray(rawData)) {
        return ['La racine du fichier doit être un objet JSON.'];
    }

    if (rawData._player !== undefined && (typeof rawData._player !== 'object' || Array.isArray(rawData._player))) {
        errors.push('La section _player est invalide.');
    }

    Object.entries(rawData).forEach(([subject, subjectData]) => {
        if (subject === '_player') return;
        if (!subjectData || typeof subjectData !== 'object' || !Array.isArray(subjectData.questions)) {
            errors.push(`La matière « ${subject} » est invalide.`);
            return;
        }
        subjectData.questions.forEach((question, index) => {
            if (!isValidQuestion(question)) {
                errors.push(`Question invalide dans « ${subject } » à la position ${index + 1}.`);
            }
        });
    });
    return errors;
}

function normalizeData(rawData) {
    const rawFolders = Array.isArray(rawData?._player?.folders) ? rawData._player.folders : [];
    const folders = rawFolders
        .filter(folder => folder && typeof folder.id === 'string' && typeof folder.name === 'string' && folder.name.trim())
        .map(folder => ({ id: folder.id, name: folder.name.trim() }));
    if (!folders.some(folder => folder.id === DEFAULT_FOLDER_ID)) {
        folders.unshift({ id: DEFAULT_FOLDER_ID, name: 'À classer' });
    }

    const valid = {
        _player: {
            xp: Number(rawData?._player?.xp) || 0,
            level: Number(rawData?._player?.level) || 1,
            schemaVersion: DATA_SCHEMA_VERSION,
            folders,
            subjectFolders: rawData?._player?.subjectFolders && typeof rawData._player.subjectFolders === 'object'
                ? { ...rawData._player.subjectFolders }
                : {}
        }
    };

    Object.entries(rawData || {}).forEach(([key, sub]) => {
        if (key === '_player' || !sub || !Array.isArray(sub.questions)) return;
        valid[key] = {
            questions: sub.questions.filter(isValidQuestion).map(question => ({
                ...question,
                id: typeof question.id === 'string' && question.id.trim() ? question.id : createStableQuestionId(key, question),
                q: removeCitations(question.q),
                explanation: removeCitations(question.explanation),
                options: question.options.map(option => ({
                    ...option,
                    text: removeCitations(option.text)
                })),
                tags: cleanTags(Array.isArray(question.tags) ? question.tags : []),
                stats: {
                    attempts: Number(question.stats?.attempts) || 0,
                    correct: Number(question.stats?.correct) || 0,
                    partial: Number(question.stats?.partial) || 0
                },
                sm2: {
                    repetition: Number(question.sm2?.repetition) || 0,
                    interval: Number(question.sm2?.interval) || 0,
                    easeFactor: Number(question.sm2?.easeFactor) || 2.5,
                    nextReview: Number(question.sm2?.nextReview) || 0,
                    lastAttempt: Number(question.sm2?.lastAttempt) || 0,
                    lastWrong: Number(question.sm2?.lastWrong) || 0,
                    successStreak: Number(question.sm2?.successStreak) || 0,
                    lastQuality: Number(question.sm2?.lastQuality) || 0
                }
            })),
            stats: {
                attempts: Number(sub.stats?.attempts) || 0,
                correct: Number(sub.stats?.correct) || 0
            },
            dailyValidations: sub.dailyValidations && typeof sub.dailyValidations === 'object'
                ? sub.dailyValidations
                : {}
        };
    });

    Object.keys(valid).forEach(subject => {
        if (subject !== '_player' && !valid._player.subjectFolders[subject]) {
            valid._player.subjectFolders[subject] = DEFAULT_FOLDER_ID;
        }
        if (subject !== '_player' && !folders.some(folder => folder.id === valid._player.subjectFolders[subject])) {
            valid._player.subjectFolders[subject] = DEFAULT_FOLDER_ID;
        }
    });
    return valid;
}

function mergeDataWithDefaults(existingData, builtInData) {
    const merged = normalizeData(existingData);
    const defaults = normalizeData(builtInData);

    Object.entries(defaults).forEach(([subject, defaultSubject]) => {
        if (subject === '_player') return;
        if (!merged[subject]) {
            merged[subject] = defaultSubject;
            merged._player.subjectFolders[subject] = DEFAULT_FOLDER_ID;
            return;
        }

        const knownIds = new Set(merged[subject].questions.map(question => question.id));
        const knownFingerprints = new Set(merged[subject].questions.map(getQuestionFingerprint));
        defaultSubject.questions.forEach(question => {
            const fingerprint = getQuestionFingerprint(question);
            if (!knownIds.has(question.id) && !knownFingerprints.has(fingerprint)) {
                merged[subject].questions.push(question);
                knownIds.add(question.id);
                knownFingerprints.add(fingerprint);
            }
        });
    });

    merged._player.schemaVersion = DATA_SCHEMA_VERSION;
    return merged;
}

let appData = null;
try {
    const raw = localStorage.getItem('myQuizData');
    if(raw) {
        const parsed = JSON.parse(raw);
        appData = mergeDataWithDefaults(parsed, defaultData);
        saveData();
    }
} catch (e) {
    console.error("Erreur parsing local", e);
}
if (!appData) appData = normalizeData(JSON.parse(JSON.stringify(defaultData))); 

function saveData() { 
    try {
        appData._player.schemaVersion = DATA_SCHEMA_VERSION;
        localStorage.setItem('myQuizData', JSON.stringify(appData));
    } 
    catch(e) { customAlert("Erreur", "Impossible de sauvegarder localement."); }
}

function exportData() {
    const blob = new Blob([JSON.stringify(appData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", url);
    dlAnchorElem.setAttribute("download", "quizzhub_backup.json");
    dlAnchorElem.click();
    URL.revokeObjectURL(url);
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            const validationErrors = validateData(importedData);
            if (validationErrors.length > 0) {
                throw new Error(validationErrors.slice(0, 3).join(' '));
            }
            appData = mergeDataWithDefaults(importedData, defaultData);
            saveData(); updatePlayerUI();
            customAlert("Succès", "Base importée, les tags et citations ont été nettoyés !");
            showView('home-view');
            event.target.value = ""; 
        } catch (err) {
            customAlert("Erreur", err.message || "Fichier JSON corrompu ou invalide.");
            event.target.value = "";
        }
    };
    reader.readAsText(file);
}

// ETAT GLOBAL UI
let currentSubject = "";
let activeTagsForNewQuestion = new Set(), activeFilterTags = new Set(), globalCustomFilterTags = new Set();

// ETAT SESSION QUIZ
const session = {
    mode: null, 
    subject: null,
    questions: [],
    currentIndex: 0,
    score: 0,
    failedQuestions: [],
    timerInterval: null,
    timeRemaining: 0
};

// XP
function addXP(points) {
    appData._player.xp += points;
    appData._player.level = Math.floor(Math.sqrt(appData._player.xp / 50)) + 1;
    saveData(); updatePlayerUI();
    return points;
}

function updatePlayerUI() {
    document.getElementById('player-lvl').textContent = appData._player.level;
    document.getElementById('player-xp').textContent = appData._player.xp;
    const currentLevelXP = 50 * Math.pow(appData._player.level - 1, 2);
    const nextLevelXP = 50 * Math.pow(appData._player.level, 2);
    const progress = ((appData._player.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
    document.getElementById('xp-fill-bar').style.width = `${progress}%`;
}

function setupSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('sidebar-toggle');
    const resizer = document.getElementById('sidebar-resizer');
    if (!sidebar || !toggle || !resizer) return;

    let savedWidth = 0;
    try { savedWidth = Number.parseInt(localStorage.getItem('quizSidebarWidth'), 10); } catch (error) { savedWidth = 0; }
    if (Number.isInteger(savedWidth) && savedWidth >= 220 && savedWidth <= 420) {
        sidebar.style.width = `${savedWidth}px`;
    }

    const setCollapsed = collapsed => {
        sidebar.classList.toggle('collapsed', collapsed);
        toggle.textContent = collapsed ? '›' : '‹';
        toggle.setAttribute('aria-label', collapsed ? 'Déployer la barre latérale' : 'Réduire la barre latérale');
        toggle.title = collapsed ? 'Déployer la barre latérale' : 'Réduire la barre latérale';
        try { localStorage.setItem('quizSidebarCollapsed', String(collapsed)); } catch (error) { return; }
    };

    let savedCollapsed = false;
    try { savedCollapsed = localStorage.getItem('quizSidebarCollapsed') === 'true'; } catch (error) { savedCollapsed = false; }
    setCollapsed(savedCollapsed);
    toggle.addEventListener('click', () => setCollapsed(!sidebar.classList.contains('collapsed')));

    let isDragging = false;
    resizer.addEventListener('pointerdown', event => {
        if (sidebar.classList.contains('collapsed')) return;
        isDragging = true;
        resizer.setPointerCapture(event.pointerId);
        document.body.style.cursor = 'col-resize';
    });
    resizer.addEventListener('pointermove', event => {
        if (!isDragging) return;
        const width = Math.max(220, Math.min(420, event.clientX));
        sidebar.style.width = `${width}px`;
    });
    resizer.addEventListener('pointerup', event => {
        if (!isDragging) return;
        isDragging = false;
        resizer.releasePointerCapture(event.pointerId);
        document.body.style.cursor = '';
        try { localStorage.setItem('quizSidebarWidth', sidebar.offsetWidth); } catch (error) { return; }
    });
}

// NAVIGATION
function showView(viewId, navElement = null) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
    if (navElement) {
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        navElement.classList.add('active');
    }
    if (viewId === 'home-view') renderHome();
    if (viewId === 'profile-view') renderProfileDashboard();
    if (viewId === 'custom-quiz-view') renderCustomQuizSetup();
    updatePlayerUI();
}

// MOTEUR SM-2 (FILTRE)
function getAvailableQuestions(subjectName, forceIgnoreDelay = false) {
    const now = Date.now();
    return appData[subjectName].questions.filter(q => {
        if (forceIgnoreDelay) return true;
        return !q.sm2.nextReview || now >= q.sm2.nextReview;
    });
}

function prioritizeQuestions(questionItems) {
    const now = Date.now();
    const dayMs = 24 * 60 * 60 * 1000;

    const getPriority = item => {
        const question = item.originalRef || item;
        const stats = question.stats || {};
        const sm2 = question.sm2 || {};
        const attempts = Number(stats.attempts) || 0;
        const successRate = attempts > 0 ? (Number(stats.correct) || 0) / attempts : 0;
        const overdueDays = sm2.nextReview && sm2.nextReview < now
            ? Math.min((now - sm2.nextReview) / dayMs, 7)
            : 0;
        const streakPenalty = Math.min(Number(sm2.successStreak) || 0, 5) * 0.08;

        return (attempts === 0 ? 0.45 : 0) + (1 - successRate) + overdueDays * 0.08 - streakPenalty;
    };

    return [...questionItems].sort((first, second) => {
        const difference = getPriority(second) - getPriority(first);
        return difference || Math.random() - 0.5;
    });
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
function renderFolderSelect(selectId, selectedFolderId = DEFAULT_FOLDER_ID) {
    const select = document.getElementById(selectId);
    if (!select) return;
    select.innerHTML = '';
    appData._player.folders.forEach(folder => {
        const option = document.createElement('option');
        option.value = folder.id;
        option.textContent = folder.name;
        option.selected = folder.id === selectedFolderId;
        select.appendChild(option);
    });
}

function createFolder() {
    const input = document.getElementById('new-folder-name');
    const name = input.value.trim();
    if (!name) return customAlert('Dossier', 'Donne un nom au dossier.');
    if (appData._player.folders.some(folder => folder.name.toLowerCase() === name.toLowerCase())) {
        return customAlert('Dossier', 'Ce dossier existe déjà.');
    }

    appData._player.folders.push({ id: `folder-${Date.now()}`, name });
    input.value = '';
    saveData();
    renderFolderSelect('new-subject-folder');
    renderHome();
}

function changeSubjectFolder(folderId) {
    if (!currentSubject || !appData._player.folders.some(folder => folder.id === folderId)) return;
    appData._player.subjectFolders[currentSubject] = folderId;
    saveData();
    renderHome();
}

function renderHome() {
    const list = document.getElementById('subjects-list');
    list.innerHTML = ""; 
    renderFolderSelect('new-subject-folder');

    const subjectsByFolder = new Map();
    Object.keys(appData).forEach(subject => {
        if (subject === '_player') return;
        const folderId = appData._player.subjectFolders[subject] || DEFAULT_FOLDER_ID;
        if (!subjectsByFolder.has(folderId)) subjectsByFolder.set(folderId, []);
        subjectsByFolder.get(folderId).push(subject);
    });

    appData._player.folders.forEach(folder => {
        const subjects = subjectsByFolder.get(folder.id) || [];
        subjects.sort((first, second) => first.localeCompare(second));

        const section = document.createElement('section');
        section.className = 'folder-section';
        const header = document.createElement('button');
        header.className = 'folder-header';
        header.type = 'button';
        header.setAttribute('aria-expanded', 'true');
        header.textContent = `${folder.name} (${subjects.length})`;
        const subjectList = document.createElement('div');
        subjectList.className = 'folder-subjects';
        header.onclick = () => {
            const collapsed = subjectList.classList.toggle('hidden');
            header.setAttribute('aria-expanded', String(!collapsed));
        };
        section.appendChild(header);

        if (subjects.length === 0) {
            const emptyMessage = document.createElement('p');
            emptyMessage.className = 'folder-empty-message';
            emptyMessage.textContent = 'Aucune matière dans ce dossier.';
            subjectList.appendChild(emptyMessage);
        }

        subjects.forEach(subject => {
        updateDailyValidation(subject);
        
        const s = appData[subject];
        const available = getAvailableQuestions(subject).length;
        const isValidated = s.dailyValidations && s.dailyValidations[getTodayStr()];

        const btn = document.createElement('button');
        btn.className = 'list-item';
        btn.onclick = () => openSubject(subject);
        
        const titleSpan = document.createElement('span');
        const boldTitle = document.createElement('b');
        boldTitle.textContent = subject; 
        const subTxt = document.createElement('span');
        subTxt.style = "color:var(--text-muted); font-size:0.85em; margin-left:10px;";
        subTxt.textContent = `(${s.questions.length} Q)`;
        
        titleSpan.appendChild(boldTitle);
        titleSpan.appendChild(subTxt);
        btn.appendChild(titleSpan);

        const badge = document.createElement('span');
        if(isValidated) {
            badge.className = 'badge validated'; badge.textContent = '✓ Validé';
        } else {
            badge.className = 'badge pending'; badge.textContent = `${available} à réviser`;
        }
        btn.appendChild(badge);
            subjectList.appendChild(btn);
        });
        section.appendChild(subjectList);
        list.appendChild(section);
    });
}

function addSubject() {
    const name = document.getElementById('new-subject-name').value.trim();
    if (name && !appData[name]) {
        appData[name] = { questions: [], stats: { attempts: 0, correct: 0 }, dailyValidations: {} };
        appData._player.subjectFolders[name] = document.getElementById('new-subject-folder').value || DEFAULT_FOLDER_ID;
        saveData(); document.getElementById('new-subject-name').value = ""; renderHome();
    }
}

// VUE MATIÈRE 
function openSubject(subject) {
    currentSubject = subject;
    document.getElementById('current-subject-title').textContent = subject;
    renderFolderSelect('subject-folder-select', appData._player.subjectFolders[subject] || DEFAULT_FOLDER_ID);
    const s = appData[subject];
    const availableQ = getAvailableQuestions(subject); 
    
    document.getElementById('subject-q-total').textContent = s.questions.length;
    document.getElementById('subject-q-available').textContent = availableQ.length;
    document.getElementById('subject-success-rate').textContent = (s.stats.attempts > 0 ? Math.round((s.stats.correct / s.stats.attempts) * 100) : 0) + "%";
    
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
    if(appData[subject] && appData[subject].questions) {
        appData[subject].questions.forEach(q => { if(q.tags) q.tags.forEach(t => allTags.add(t)); });
    }
    return Array.from(allTags);
}

function getAllTagsGlobally() {
    let allTags = new Set();
    Object.keys(appData).forEach(sub => {
        if(sub !== '_player') appData[sub].questions.forEach(q => { if(q.tags) q.tags.forEach(t => allTags.add(t)); });
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
        span.onkeydown = (e) => { if(e.key==='Enter'||e.key===' ') { e.preventDefault(); toggleSelection(); }};
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
        activeTagsForNewQuestion.forEach(t => { if(!currentTags.includes(t)) currentTags.push(t); });
        renderTagChips('add-tags-container', currentTags, true, activeTagsForNewQuestion);
    }
}

// EDITEUR
function prepareAddQuestion() {
    document.getElementById('edit-q-index').value = "-1";
    document.getElementById('editor-title').textContent = "Nouvelle question";
    document.getElementById('new-q-text').value = "";
    document.getElementById('new-q-explanation').value = "";
    for(let i=1; i<=4; i++) { document.getElementById(`opt-${i}`).value = ""; document.getElementById(`check-${i}`).checked = false; }
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
        if(i < 4) { document.getElementById(`opt-${i+1}`).value = opt.text; document.getElementById(`check-${i+1}`).checked = opt.isCorrect; }
    });
    activeTagsForNewQuestion.clear();
    if(q.tags) q.tags.forEach(t => activeTagsForNewQuestion.add(t));
    renderTagChips('add-tags-container', getAllTagsForSubject(currentSubject), true, activeTagsForNewQuestion);
}

function saveQuestion() {
    const q = document.getElementById('new-q-text').value.trim();
    const expl = document.getElementById('new-q-explanation').value.trim();
    let optionsArray = []; let hasCorrect = false;

    for(let i=1; i<=4; i++) {
        const text = document.getElementById(`opt-${i}`).value.trim();
        const isCorrect = document.getElementById(`check-${i}`).checked;
        if (text) { optionsArray.push({ text: text, isCorrect: isCorrect }); if (isCorrect) hasCorrect = true; }
    }

    if (!q || optionsArray.length < 2 || !hasCorrect) return customAlert("Validation", "Il faut une question, au moins 2 options, et 1 réponse vraie.");

    const newQData = { 
        id: createQuestionId(),
        type: "qcm", tags: Array.from(activeTagsForNewQuestion), q: q, options: optionsArray, explanation: expl, 
        stats: {attempts: 0, correct: 0, partial: 0},
        sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
    };
    
    const idx = parseInt(document.getElementById('edit-q-index').value, 10);
    if(idx >= 0) {
        newQData.id = appData[currentSubject].questions[idx].id || newQData.id;
        newQData.stats = appData[currentSubject].questions[idx].stats || newQData.stats;
        newQData.sm2 = appData[currentSubject].questions[idx].sm2 || newQData.sm2;
        appData[currentSubject].questions[idx] = newQData;
    } else { appData[currentSubject].questions.push(newQData); }
    
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

function setupTimer(isOn) {
    stopTimer();
    const timerDisplay = document.getElementById('timer-display');
    if (isOn) {
        session.timeRemaining = session.questions.length * 60;
        timerDisplay.classList.remove('hidden');
        timerDisplay.textContent = formatTime(session.timeRemaining);
        session.timerInterval = setInterval(() => {
            session.timeRemaining--; 
            timerDisplay.textContent = formatTime(session.timeRemaining);
            if (session.timeRemaining <= 0) { 
                stopTimer(); 
                customAlert("Terminé", "Temps écoulé !"); 
                endQuiz(true); 
            }
        }, 1000);
    }
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function initQuizState(mode, qArray) {
    session.mode = mode;
    session.subject = mode === 'subject' ? currentSubject : null;
    session.questions = qArray;
    session.currentIndex = 0; 
    session.score = 0; 
    session.failedQuestions = [];
    document.getElementById('btn-export-markdown').classList.add('hidden');
    document.getElementById('validation-msg').classList.add('hidden');
}

function startCustomQuiz() {
    const forceReview = document.getElementById('custom-force-review').checked;
    let allAvailableQ = [];
    
    Object.keys(appData).forEach(sub => {
        if(sub !== '_player') {
            appData[sub].questions.forEach(q => {
                const now = Date.now();
                if(forceReview || !q.sm2.nextReview || now >= q.sm2.nextReview) {
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
    allAvailableQ = prioritizeQuestions(allAvailableQ);
    
    initQuizState('custom', allAvailableQ.slice(0, requestedCount));
    setupTimer(document.getElementById('custom-exam-mode').checked);
    
    showView('quiz-view');
    renderQuestion();
}

function startQuiz() {
    const forceReview = document.getElementById('force-review-toggle').checked;
    let availableQ = getAvailableQuestions(currentSubject, forceReview);
    
    if (activeFilterTags.size > 0) availableQ = availableQ.filter(q => q.tags && q.tags.some(t => activeFilterTags.has(t)));
    if (availableQ.length === 0) return customAlert("Quiz", "Tu as tout révisé ! (Coche 'Ignorer la répétition' pour forcer).");

    const rawCount = Number.parseInt(document.getElementById('q-count-input').value, 10);
    if (!Number.isInteger(rawCount) || rawCount < 1) return customAlert("Erreur", "Nombre invalide.");
    
    let requestedCount = Math.min(rawCount, availableQ.length);
    let allQ = availableQ.map(q => ({ originalRef: q, subjectRef: currentSubject }));
    allQ = prioritizeQuestions(allQ);
    
    initQuizState('subject', allQ.slice(0, requestedCount));
    setupTimer(document.getElementById('exam-mode-toggle').checked);
    
    document.getElementById('start-quiz-btn')?.blur(); 
    showView('quiz-view');
    renderQuestion();
}

function startGR20() {
    let allAvailableQ = [];
    Object.keys(appData).forEach(sub => {
        if(sub !== '_player') appData[sub].questions.forEach(q => allAvailableQ.push({ originalRef: q, subjectRef: sub }));
    });

    if(allAvailableQ.length < 1) return customAlert("Erreur", "La base de données est vide.");

    const rawCount = Number.parseInt(document.getElementById('gr20-count').value, 10);
    if (!Number.isInteger(rawCount) || rawCount < 1) return customAlert("Erreur", "Nombre invalide.");
    
    allAvailableQ = shuffleArray(allAvailableQ);
    
    initQuizState('gr20', allAvailableQ.slice(0, Math.min(rawCount, allAvailableQ.length)));
    stopTimer();
    showView('quiz-view');
    renderQuestion();
}

function renderQuestion() {
    // FIX DOM : On force complètement la dissimulation du bouton Valider via le display CSS direct.
    const valBtn = document.getElementById('validate-btn');
    if (session.mode === 'gr20') {
        valBtn.classList.add('hidden');
        valBtn.style.display = 'none';
    } else {
        valBtn.classList.remove('hidden');
        valBtn.style.display = 'block';
    }
    
    document.getElementById('gr20-next-btn').classList.toggle('hidden', session.mode !== 'gr20');
    document.getElementById('explanation-box').classList.add('hidden');
    document.getElementById('sm2-eval-box').classList.add('hidden');
    
    const qItem = session.questions[session.currentIndex];
    const qData = qItem.originalRef; 
    
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
        if(inputName) input.name = "q_option";
        input.setAttribute('data-index', opt.originalIndex);
        
        const span = document.createElement('span');
        span.textContent = opt.text;
        
        const statusIcon = document.createElement('span');
        statusIcon.className = 'status-icon hidden';
        statusIcon.style.marginLeft = "auto";
        
        label.appendChild(input); label.appendChild(span); label.appendChild(statusIcon); frag.appendChild(label);
    });

    optionsDiv.appendChild(frag);
    renderMath([document.getElementById('quiz-question'), document.getElementById('quiz-options')]);
}

// -----------------------------------------------------
// ALGORITHME SM-2
// -----------------------------------------------------

function calculateNextInterval(sm2, quality) {
    if (quality < 3) return { interval: 1, text: "10 min" };
    
    let rep = sm2.repetition;
    let int = sm2.interval;
    let ef = sm2.easeFactor;
    
    if (rep === 0) {
        if (quality === 3) return { interval: 0.5, text: "12 h" };
        if (quality === 4) return { interval: 1, text: "1 jour" };
        return { interval: 3, text: "3 jours" };
    }
    if (rep === 1) {
        if (quality === 3) return { interval: 0.5, text: "12 h" };
        if (quality === 4) return { interval: 3, text: "3 jours" };
        return { interval: 7, text: "7 jours" };
    }
    
    let newInt;
    if (quality === 3) newInt = Math.round(int * 1.2);
    else if (quality === 4) newInt = Math.round(int * ef);
    else if (quality === 5) newInt = Math.round(int * ef * 1.3);
    
    return { interval: newInt, text: newInt + " jours" };
}

function submitSM2(quality) {
    const qItem = session.questions[session.currentIndex];
    const sm2 = qItem.originalRef.sm2;
    const next = calculateNextInterval(sm2, quality);
    sm2.lastQuality = quality;
    
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
    
    saveData();
    nextQuestion();
}

function processAnswerSub() {
    const qItem = session.questions[session.currentIndex];
    const qData = qItem.originalRef; 
    const now = Date.now();
    const totalCorrectAnswers = qData.options.filter(option => option.isCorrect).length;
    let selectedCorrectCount = 0;
    let selectedWrongCount = 0;
    
    appData[qItem.subjectRef].stats.attempts++;
    qData.stats.attempts++;

    let allCorrect = true; let anyChecked = false; let userSelectedTexts = [];
    let correctTexts = qData.options.filter(o => o.isCorrect).map(o => o.text);

    const labels = document.querySelectorAll('.qcm-option');
    labels.forEach(label => {
        const input = label.querySelector('input');
        const statusIcon = label.querySelector('.status-icon');
        input.disabled = true; 
        
        const opt = qData.options[input.getAttribute('data-index')];
        const isChecked = input.checked;
        if(isChecked) { anyChecked = true; userSelectedTexts.push(opt.text); }
        if (isChecked && opt.isCorrect) selectedCorrectCount++;
        if (isChecked && !opt.isCorrect) selectedWrongCount++;
        
        if (opt.isCorrect) {
            label.classList.add('correct'); statusIcon.textContent = "✅"; statusIcon.classList.remove('hidden');
            if (!isChecked) allCorrect = false;
        } else {
            if (isChecked) { label.classList.add('wrong'); statusIcon.textContent = "❌"; statusIcon.classList.remove('hidden'); allCorrect = false; }
        }
    });

    if (!anyChecked) allCorrect = false;

    const scoreValue = totalCorrectAnswers > 1
        ? Math.max(0, (selectedCorrectCount - selectedWrongCount) / totalCorrectAnswers)
        : (allCorrect ? 1 : 0);
    if (!allCorrect && scoreValue > 0) {
        labels.forEach(label => {
            const input = label.querySelector('input');
            const opt = qData.options[input.getAttribute('data-index')];
            if (input.checked && opt.isCorrect) label.classList.add('partial');
        });
    }
    qData.sm2.lastAttempt = now;
    if (allCorrect) {
        qData.sm2.successStreak++;
    } else {
        qData.sm2.lastWrong = now;
        qData.sm2.successStreak = 0;
    }

    if (allCorrect) {
        appData[qItem.subjectRef].stats.correct++;
        qData.stats.correct++;
    } else if (scoreValue > 0) {
        appData[qItem.subjectRef].stats.correct += scoreValue;
        qData.stats.correct += scoreValue;
        qData.stats.partial++;
    } else {
        session.failedQuestions.push({ q: qData.q, userAns: userSelectedTexts.length > 0 ? userSelectedTexts.join(', ') : "Aucune réponse", correctAns: correctTexts.join(', '), explanation: qData.explanation || "Pas d'explication fournie." });
    }

    session.score += scoreValue;
    return { isCorrect: allCorrect, scoreValue, explanation: qData.explanation };
}

function validateAnswer() {
    const valBtn = document.getElementById('validate-btn');
    if (valBtn.classList.contains('hidden') || valBtn.style.display === 'none') return; // Sécurité anti-double-clic
    
    // FIX DOM : On force la dissimulation totale
    valBtn.classList.add('hidden');
    valBtn.style.display = 'none';
    
    const result = processAnswerSub();
    
    if (result.explanation) {
        document.getElementById('explanation-text').textContent = result.explanation;
        document.getElementById('explanation-box').classList.remove('hidden');
    }
    
    const sm2Box = document.getElementById('sm2-eval-box');
    sm2Box.classList.remove('hidden');
    
    const qItem = session.questions[session.currentIndex];
    const sm2 = qItem.originalRef.sm2;

    if (result.isCorrect) {
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

function nextGR20Question() { 
    const result = processAnswerSub();
    const quality = result.isCorrect ? 4 : 0;
    
    const qItem = session.questions[session.currentIndex];
    const sm2 = qItem.originalRef.sm2;
    const next = calculateNextInterval(sm2, quality);
    sm2.lastQuality = quality;
    
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
    
    saveData();
    nextQuestion(); 
}

function nextQuestion() {
    session.currentIndex++;
    session.currentIndex < session.questions.length ? renderQuestion() : endQuiz(true);
}

function endQuiz(finished = false) {
    stopTimer();
    
    if (finished) {
        document.getElementById('results-title').textContent = session.mode === 'gr20' ? "🏁 Arrivée du GR20" : "🏁 Bilan de la session";
        document.getElementById('final-score').textContent = session.score;
        document.getElementById('final-total').textContent = session.questions.length;
        
        let xpGained = addXP(session.score * 10);
        document.getElementById('xp-gained').textContent = `+ ${xpGained} XP`;
        
        if (session.mode === 'subject' && session.subject) {
            const newlyValidated = updateDailyValidation(session.subject);
            if(newlyValidated) document.getElementById('validation-msg').classList.remove('hidden');
        }

        if(session.failedQuestions.length > 0) document.getElementById('btn-export-markdown').classList.remove('hidden');
        showView('results-view');
    } else { 
        showView('home-view'); 
    }
}

function exportMarkdownToClipboard() {
    let md = `# 📓 Cahier d'erreurs (${getTodayStr()})\n\n`;
    session.failedQuestions.forEach((fail, i) => { md += `### ${i+1}. ${fail.q}\n- **Mon erreur :** ${fail.userAns}\n- **Correction :** ${fail.correctAns}\n> 💡 *Explication :* ${fail.explanation}\n\n---\n\n`; });
    navigator.clipboard.writeText(md).then(() => { customAlert("Succès", "Markdown copié !"); }).catch(err => { customAlert("Erreur", "Le navigateur bloque l'accès au presse-papier."); });
}

// DASHBOARD
function renderProfileDashboard() {
    let totalAttempts = 0, totalCorrect = 0, totalQuestions = 0;
    let dueQuestions = 0, unseenQuestions = 0;
    let strongQuestions = [];
    let weakQuestions = [];
    const tagStats = new Map();
    const now = Date.now();

    const container = document.getElementById('profile-content');
    container.innerHTML = ""; 
    const frag = document.createDocumentFragment();
    
    Object.keys(appData).forEach(subject => {
        if(subject === '_player') return;
        const s = appData[subject];
        totalAttempts += s.stats.attempts || 0;
        totalCorrect += s.stats.correct || 0;
        totalQuestions += s.questions.length;
        
        s.questions.forEach(q => {
            const attempts = Number(q.stats?.attempts) || 0;
            const isDue = !q.sm2?.nextReview || q.sm2.nextReview <= now;
            if (isDue) dueQuestions++;
            if (attempts === 0) unseenQuestions++;

            const questionTags = q.tags && q.tags.length > 0 ? q.tags : ['Sans tag'];
            questionTags.forEach(tag => {
                if (!tagStats.has(tag)) tagStats.set(tag, { questions: 0, attempts: 0, correct: 0, due: 0 });
                const stats = tagStats.get(tag);
                stats.questions++;
                stats.attempts += attempts;
                stats.correct += Number(q.stats?.correct) || 0;
                if (isDue) stats.due++;
            });

            if(q.stats && q.stats.attempts >= 2) {
                const qRate = q.stats.correct / q.stats.attempts;
                if(qRate >= 0.8) strongQuestions.push(q);
                else if(qRate <= 0.5) weakQuestions.push(q);
            }
        });

        const rate = s.stats.attempts > 0 ? Math.round((s.stats.correct / s.stats.attempts) * 100) : 0;
        const subjectDue = s.questions.filter(question => !question.sm2?.nextReview || question.sm2.nextReview <= now).length;
        const subjectUnseen = s.questions.filter(question => !(Number(question.stats?.attempts) || 0)).length;
        
        const box = document.createElement('div');
        box.className = 'subject-progress-card';
        
        const headerRow = document.createElement('div');
        headerRow.style = "display:flex; justify-content: space-between; margin-bottom: 10px;";
        const h3 = document.createElement('h3'); h3.style = "margin:0; color: var(--text-main);"; h3.textContent = subject;
        const spanStats = document.createElement('span'); spanStats.style = "color: var(--text-muted);"; spanStats.textContent = `${s.stats.correct} / ${s.stats.attempts} essais`;
        headerRow.appendChild(h3); headerRow.appendChild(spanStats);
        
        const pbBg = document.createElement('div'); pbBg.className = 'progress-bar-bg';
        const pbFill = document.createElement('div'); pbFill.className = `progress-bar-fill ${rate > 50 ? 'good' : 'bad'}`; pbFill.style.width = `${rate}%`;
        pbBg.appendChild(pbFill);
        
        const rateLabel = document.createElement('div'); rateLabel.style = "text-align: right; font-size: 0.85em; margin-top: 5px;";
        rateLabel.innerHTML = `Précision : <strong style="color:var(--primary)">${rate}%</strong>`;

        const meta = document.createElement('div');
        meta.className = 'subject-progress-meta';
        meta.textContent = `${subjectDue} à revoir · ${subjectUnseen} jamais vue${subjectUnseen > 1 ? 's' : ''}`;
        
        box.appendChild(headerRow); box.appendChild(pbBg); box.appendChild(rateLabel); box.appendChild(meta);
        frag.appendChild(box);
    });
    container.appendChild(frag);

    const globalRate = totalAttempts > 0 ? Math.round((totalCorrect/totalAttempts)*100) : 0;
    document.getElementById('global-stats-container').innerHTML = `
        <div class="stat-card"><h3>Précision globale</h3><div class="value">${globalRate}%</div></div>
        <div class="stat-card accent-secondary"><h3>Questions résolues</h3><div class="value" style="color: var(--text-main);">${totalAttempts}</div></div>
        <div class="stat-card accent-secondary"><h3>Volume de la base</h3><div class="value" style="color: var(--secondary);">${totalQuestions}</div></div>
        <div class="stat-card accent-warning"><h3>À revoir maintenant</h3><div class="value" style="color: var(--warning);">${dueQuestions}</div></div>
        <div class="stat-card accent-success"><h3>Jamais vues</h3><div class="value" style="color: var(--text-main);">${unseenQuestions}</div></div>
    `;

    const tagContainer = document.getElementById('tag-stats-container');
    tagContainer.innerHTML = '';
    const sortedTags = [...tagStats.entries()].sort((first, second) => {
        const firstAttempts = first[1].attempts;
        const secondAttempts = second[1].attempts;
        return (second[1].due - first[1].due) || (secondAttempts - firstAttempts) || first[0].localeCompare(second[0]);
    });

    if (sortedTags.length === 0) {
        tagContainer.textContent = 'Aucun tag disponible pour le moment.';
    } else {
        sortedTags.forEach(([tag, stats]) => {
            const rate = stats.attempts > 0 ? Math.round((stats.correct / stats.attempts) * 100) : 0;
            const row = document.createElement('div');
            row.className = 'tag-stat-row';

            const name = document.createElement('strong');
            name.textContent = tag;
            const details = document.createElement('span');
            details.textContent = `${rate}% · ${stats.questions} question${stats.questions > 1 ? 's' : ''} · ${stats.due} à revoir`;
            row.appendChild(name);
            row.appendChild(details);
            tagContainer.appendChild(row);
        });
    }

    const buildMiniList = (qList, elementId, cssClass, fallbackMsg) => {
        const listDiv = document.getElementById(elementId);
        listDiv.innerHTML = "";
        if(qList.length === 0) {
            listDiv.innerHTML = `<span style="color: var(--text-muted); font-size: 0.9em; font-style: italic;">${fallbackMsg}</span>`;
            return;
        }
        qList.slice(0, 5).forEach(q => {
            const item = document.createElement('div');
            item.className = `q-mini-item ${cssClass}`;
            const pct = Math.round((q.stats.correct / q.stats.attempts) * 100);
            
            const qSpan = document.createElement('span');
            qSpan.style = "white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 80%;";
            qSpan.textContent = q.q;
            qSpan.title = q.q;
            
            const pSpan = document.createElement('strong'); pSpan.textContent = `${pct}%`;
            
            item.appendChild(qSpan); item.appendChild(pSpan);
            listDiv.appendChild(item);
        });
    };

    strongQuestions.sort((a,b) => (b.stats.correct/b.stats.attempts) - (a.stats.correct/a.stats.attempts));
    weakQuestions.sort((a,b) => (a.stats.correct/a.stats.attempts) - (b.stats.correct/b.stats.attempts));

    buildMiniList(strongQuestions, 'strong-questions-list', 'success', "Continue de t'entraîner pour débloquer cette section.");
    buildMiniList(weakQuestions, 'weak-questions-list', 'danger', "Aucun point de friction détecté pour le moment !");

    renderMath([document.getElementById('profile-view')]);
}

function resetData() {
    localStorage.removeItem('myQuizData'); 
    appData = normalizeData(JSON.parse(JSON.stringify(defaultData))); 
    appData._player.xp = 0;
    appData._player.level = 1;
    saveData(); renderHome(); 
    customAlert("Réinitialisation", "Toutes les données ont été remises à zéro.");
}

setupSidebar();
renderHome(); updatePlayerUI();
