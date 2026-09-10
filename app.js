
const SUPABASE_URL = 'https://dylpgqwobictpelbwwzf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5bHBncXdvYmljdHBlbGJ3d3pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5NTMzNjMsImV4cCI6MjEwNDUyOTM2M30.A18JCXfr2KWXTdRglTTdun0o9q6Hvlp-LzrWqXLupdo';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Variables de session Cloud
let currentUser = null; 
let dbRowId = null;

const FIVE_HOURS_MS = 5 * 60 * 60 * 1000;
const DEFAULT_FOLDER = 'Général';

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
    // Migration des anciens dossiers (_player.folders)
    let oldFolders = [];
    if (rawData?._player?.folders && Array.isArray(rawData._player.folders)) {
        oldFolders = rawData._player.folders.map(f => typeof f === 'string' ? f : f.name);
    }
    
    let validFolders = Array.isArray(rawData?._folders) ? rawData._folders : oldFolders;
    if (!validFolders.includes(DEFAULT_FOLDER)) validFolders.unshift(DEFAULT_FOLDER);
    validFolders = [...new Set(validFolders)]; // Suppression des doublons

    let valid = { 
        _player: { xp: Number(rawData?._player?.xp) || 0, level: Number(rawData?._player?.level) || 1 },
        _folders: validFolders
    };
    
    for (let key in rawData) {
        if (key === '_player' || key === '_folders') continue;
        let sub = rawData[key];
        
        if (sub && Array.isArray(sub.questions)) {
            // Récupération de l'ancien emplacement si présent
            let folderName = sub.folder || rawData?._player?.subjectFolders?.[key] || DEFAULT_FOLDER;
            if (!valid._folders.includes(folderName)) valid._folders.push(folderName);

            valid[key] = {
                folder: folderName,
                questions: sub.questions.filter(q => q && typeof q.q === 'string').map(q => {
                    q.q = removeCitations(q.q);
                    q.explanation = removeCitations(q.explanation);
                    q.options = (q.options || []).map(opt => ({ ...opt, text: removeCitations(opt.text) }));
                    q.tags = cleanTags(q.tags);
                    q.stats = { 
                        attempts: Number(q.stats?.attempts) || 0, 
                        correct: Number(q.stats?.correct) || 0,
                        partial: Number(q.stats?.partial) || 0
                    };
                    q.sm2 = {
                        repetition: Number(q.sm2?.repetition) || 0,
                        interval: Number(q.sm2?.interval) || 0,
                        easeFactor: Number(q.sm2?.easeFactor) || 2.5,
                        nextReview: Number(q.sm2?.nextReview) || 0,
                        lastAttempt: Number(q.sm2?.lastAttempt) || 0,
                        lastWrong: Number(q.sm2?.lastWrong) || 0,
                        successStreak: Number(q.sm2?.successStreak) || 0,
                        lastQuality: Number(q.sm2?.lastQuality) || 0
                    };
                    return q;
                }),
                stats: { attempts: Number(sub.stats?.attempts) || 0, correct: Number(sub.stats?.correct) || 0 },
                dailyValidations: sub.dailyValidations || {}
            };
        }
    }
    return valid;
}

// Fonction de fusion : Base locale (data.js) + Sauvegarde Cloud (Supabase)
function mergeDataWithDefaults(cloudData, baseData) {
    let merged = JSON.parse(JSON.stringify(baseData)); 
    merged._player = cloudData._player || { xp: 0, level: 1 };
    
    // Fusion sécurisée des dossiers locaux et cloud
    let combinedFolders = [...(baseData._folders || []), ...(cloudData._folders || [])];
    if (!combinedFolders.includes(DEFAULT_FOLDER)) combinedFolders.unshift(DEFAULT_FOLDER);
    merged._folders = [...new Set(combinedFolders)];

    for (let subject in baseData) {
        if (subject.startsWith('_')) continue;
        if (cloudData[subject]) {
            merged[subject].folder = cloudData[subject].folder || baseData[subject].folder || DEFAULT_FOLDER;
            if(!merged._folders.includes(merged[subject].folder)) merged._folders.push(merged[subject].folder);
            
            merged[subject].stats = cloudData[subject].stats || {attempts: 0, correct: 0};
            merged[subject].dailyValidations = cloudData[subject].dailyValidations || {};

            merged[subject].questions.forEach(q => {
                const cloudQ = cloudData[subject].questions.find(cq => cq.q === q.q);
                if (cloudQ) {
                    q.stats = cloudQ.stats || {attempts: 0, correct: 0};
                    q.sm2 = cloudQ.sm2 || {repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0};
                }
            });

            cloudData[subject].questions.forEach(cq => {
                const existsInBase = merged[subject].questions.some(q => q.q === cq.q);
                if (!existsInBase) merged[subject].questions.push(cq);
            });
        }
    }

    for (let subject in cloudData) {
        if (!subject.startsWith('_') && !merged[subject]) {
            merged[subject] = cloudData[subject];
            if(!merged._folders.includes(merged[subject].folder)) merged._folders.push(merged[subject].folder || DEFAULT_FOLDER);
        }
    }
    return merged;
}

// Initialisation au démarrage avec le localStorage
const baseData = typeof defaultData !== 'undefined' ? normalizeData(defaultData) : { _player: {xp:0, level:1}, _folders: [DEFAULT_FOLDER] };
const localSave = localStorage.getItem('myQuizData');
let appData = localSave ? mergeDataWithDefaults(JSON.parse(localSave), baseData) : baseData;

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
        // FUSION MAGIQUE : Les nouveautés de data.js gardent l'historique de Supabase
        appData = mergeDataWithDefaults(data.content, baseData);
    } else {
        // Premier lancement du compte : création de la ligne
        const { data: insertData, error: insertError } = await supabaseClient
            .from('quiz_data')
            .insert([{ user_id: currentUser.id, content: appData }])
            .select()
            .single();
            
        if (insertData) dbRowId = insertData.id;
    }

    showView('home-view');
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

async function saveData() { 
    // Sauvegarde locale de sécurité
    try { localStorage.setItem('myQuizData', JSON.stringify(appData)); } catch(e) {}
    
    // Synchro Cloud
    if (currentUser && dbRowId) {
        const { error } = await supabaseClient
            .from('quiz_data')
            .update({ 
                content: appData, 
                updated_at: new Date().toISOString() 
            })
            .eq('id', dbRowId);
            
        if (error) console.error("Erreur synchro Supabase:", error.message);
    }
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
    reader.onload = async function(e) {
        try {
            appData = normalizeData(JSON.parse(e.target.result));
            await saveData(); 
            updatePlayerUI();
            customAlert("Succès", "Base importée, synchronisée et nettoyée !");
            showView('home-view');
            event.target.value = ""; 
        } catch (err) { customAlert("Erreur", "Fichier JSON corrompu ou invalide."); }
    };
    reader.readAsText(file);
}

function resetData() {
    localStorage.removeItem('myQuizData'); 
    appData = normalizeData(JSON.parse(JSON.stringify(defaultData || {}))); 
    appData._player = {xp:0, level:1}; 
    saveData(); 
    renderHome(); 
    customAlert("Réinitialisation", "Toutes les données ont été remises à zéro.");
}


// -----------------------------------------------------
// GESTION DES DOSSIERS
// -----------------------------------------------------
// -----------------------------------------------------
// GESTION DES DOSSIERS
// -----------------------------------------------------
async function createFolder() {
    const folderName = document.getElementById('new-folder-name').value.trim();
    if (folderName && !appData._folders.includes(folderName)) {
        appData._folders.push(folderName);
        await saveData(); // Attendre la sauvegarde cloud
        document.getElementById('new-folder-name').value = "";
        renderHome();
        customAlert("Dossier", `Dossier '${folderName}' créé !`);
    } else if (appData._folders.includes(folderName)) {
        customAlert("Erreur", "Ce dossier existe déjà.");
    }
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
    
    // Pour le filtre d'accueil, on sauvegarde le choix actuel pour ne pas le réinitialiser
    let filterValue = "ALL";
    if (selectFilter) {
        filterValue = selectFilter.value; 
        selectFilter.innerHTML = '<option value="ALL">📂 Tous les dossiers</option>';
    }
    
    appData._folders.forEach(f => {
        if(selectNew) selectNew.add(new Option(f, f));
        if(selectChange) selectChange.add(new Option(f, f));
        if(selectFilter) selectFilter.add(new Option(f, f));
    });
    
    if (selectFilter) selectFilter.value = filterValue; // On remet le choix de l'utilisateur
}

async function addSubject() {
    const name = document.getElementById('new-subject-name').value.trim();
    const folder = document.getElementById('new-subject-folder').value || DEFAULT_FOLDER;
    if (name && !appData[name]) {
        appData[name] = { folder: folder, questions: [], stats: { attempts: 0, correct: 0 }, dailyValidations: {} };
        await saveData();
        document.getElementById('new-subject-name').value = ""; 
        renderHome();
    }
}


// -----------------------------------------------------
// ETAT GLOBAL UI & QUIZ
// -----------------------------------------------------
let currentSubject = "";
let activeTagsForNewQuestion = new Set(), activeFilterTags = new Set(), globalCustomFilterTags = new Set();

const session = {
    mode: null, 
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

function updateDailyValidation(subject) {
    const subjectData = appData[subject];
    const today = getTodayStr();
    const isValidated = subjectData.questions.length > 0 && getAvailableQuestions(subject).length === 0;
    subjectData.dailyValidations ??= {};
    if (isValidated) subjectData.dailyValidations[today] = true;
    else delete subjectData.dailyValidations[today];
    return isValidated;
}

// -----------------------------------------------------
// AFFICHAGE DU CATALOGUE (VITRINE)
// -----------------------------------------------------
// -----------------------------------------------------
// AFFICHAGE DU CATALOGUE (VITRINE OFFICIELLE)
// -----------------------------------------------------
function renderCatalogue() {
    const container = document.getElementById('catalogue-container');
    if (!container) return;
    container.innerHTML = "";

    if (typeof courseCatalogue === 'undefined') return;

    courseCatalogue.forEach(course => {
        let totalQ = 0;
        let masteredQ = 0; 
        
        // On cherche les chapitres qui appartiennent à ce cours officiel
        Object.keys(appData).forEach(key => {
            if (key.startsWith('_')) return;
            
            // On vérifie l'ID du cours, peu importe dans quel dossier personnel il est rangé !
            if (appData[key].course === course.id || key.includes(course.title)) {
                const questions = appData[key].questions || [];
                totalQ += questions.length;
                masteredQ += questions.filter(q => q.sm2 && q.sm2.interval > 10).length; 
            }
        });

        const progressPercent = totalQ > 0 ? Math.round((masteredQ / totalQ) * 100) : 0;

        const card = document.createElement('div');
        card.className = 'course-card';
        card.style.setProperty('--theme-color', course.themeColor);
        
        // Bientôt, ce clic déclenchera le téléchargement depuis Supabase
        card.onclick = () => {
            customAlert(course.title, `Téléchargement du pack de questions en préparation... (Lazy Loading à venir)`);
        };

        card.innerHTML = `
            <div>
                <div class="course-icon">${course.icon}</div>
                <div class="course-title">${course.title}</div>
                <div class="course-desc">${course.description}</div>
            </div>
            <div>
                <div class="course-meta">
                    <span>📚 ${course.stats.chapters} Chapitres</span>
                    <span>📝 ${course.stats.totalQuestions} Q.</span>
                </div>
                <div class="progress-bar-bg" style="margin-top: 15px; height: 6px; background-color: rgba(255,255,255,0.1);">
                    <div class="progress-bar-fill" style="width: ${progressPercent}%; background-color: ${course.themeColor}; border-radius: 4px;"></div>
                </div>
                <div style="text-align: right; font-size: 0.8em; color: var(--text-muted); margin-top: 8px; font-weight: bold;">
                    ${progressPercent}% maîtrisé
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

        
// ACCUEIL
function renderHome() {
    populateFolderSelects();
    renderCatalogue(); 
    
    const list = document.getElementById('subjects-list');
    list.innerHTML = ""; 
    const frag = document.createDocumentFragment();

    // Récupération des valeurs de recherche et de filtre
    const searchInput = document.getElementById('search-subject');
    const filterInput = document.getElementById('filter-folder');
    const searchQuery = searchInput ? searchInput.value.toLowerCase() : "";
    const folderFilter = filterInput ? filterInput.value : "ALL";

    // 1. Initialiser les groupes (uniquement pour les dossiers correspondant au filtre)
    const subjectsByFolder = {};
    appData._folders.forEach(folder => {
        if (folderFilter === "ALL" || folderFilter === folder) {
            subjectsByFolder[folder] = [];
        }
    });

    // 2. Classer les matières en appliquant la recherche textuelle
    Object.keys(appData).forEach(subject => {
        if (subject.startsWith('_')) return;
        
        // Filtre textuel (on ignore la casse)
        if (searchQuery && !subject.toLowerCase().includes(searchQuery)) return;

        const folder = appData[subject].folder || DEFAULT_FOLDER;
        
        // Si le dossier est bien dans ceux qu'on a le droit d'afficher
        if (subjectsByFolder[folder] !== undefined) {
            subjectsByFolder[folder].push(subject);
        }
    });

    // 3. Afficher par dossier
    Object.keys(subjectsByFolder).forEach(folder => {
        const subjects = subjectsByFolder[folder];
        
        // Si on a tapé une recherche, on masque les dossiers qui ne contiennent aucun résultat
        if (searchQuery && subjects.length === 0) return;

        const folderDiv = document.createElement('div');
        folderDiv.className = 'folder-section';

        const header = document.createElement('div');
        header.className = 'folder-header list-item'; 
        header.style.cursor = 'default';
        header.style.fontWeight = 'bold';
        header.innerHTML = `<span>📁 ${folder}</span>`;
        folderDiv.appendChild(header);

        const subjectsContainer = document.createElement('div');
        subjectsContainer.className = 'folder-subjects';
        
        if (subjects.length === 0) {
            const emptyMsg = document.createElement('div');
            emptyMsg.className = 'folder-empty-message';
            emptyMsg.textContent = "Aucune matière dans ce dossier.";
            subjectsContainer.appendChild(emptyMsg);
        } else {
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
                subjectsContainer.appendChild(btn);
            });
        }
        
        folderDiv.appendChild(subjectsContainer);
        frag.appendChild(folderDiv);
    });
    
    list.appendChild(frag);
}


// -----------------------------------------------------
// ESPACE COMMUNAUTAIRE (MOCK-UP)
// -----------------------------------------------------
function renderCommunity() {
    const container = document.getElementById('community-list');
    container.innerHTML = `
        <div class="card" style="text-align: center; grid-column: 1 / -1; padding: 40px; border-style: dashed; border-color: var(--text-muted);">
            <span style="font-size: 3em;">🚧</span>
            <h3 style="color: var(--primary); margin-top: 15px;">La connexion Supabase arrive !</h3>
            <p style="color: var(--text-muted); font-size: 0.9em; line-height: 1.5; max-width: 500px; margin: 0 auto;">
                C'est ici que tu pourras parcourir le catalogue public et importer les quiz créés par tes camarades. 
                Le système de partage asynchrone (JSONB via Supabase) est en cours de déploiement.
            </p>
        </div>
    `;
}

function searchCommunity() {
    customAlert("Recherche", "La recherche communautaire sera activée dès que la table publique Supabase sera connectée !");
}

function addSubject() {
    const name = document.getElementById('new-subject-name').value.trim();
    const folder = document.getElementById('new-subject-folder').value || DEFAULT_FOLDER;
    if (name && !appData[name]) {
        appData[name] = { folder: folder, questions: [], stats: { attempts: 0, correct: 0 }, dailyValidations: {} };
        saveData(); document.getElementById('new-subject-name').value = ""; renderHome();
    }
}

// VUE MATIÈRE 
function openSubject(subject) {
    currentSubject = subject;
    document.getElementById('current-subject-title').textContent = subject;
    const s = appData[subject];
    const availableQ = getAvailableQuestions(subject); 
    
    populateFolderSelects();
    const folderSelect = document.getElementById('subject-folder-select');
    if(folderSelect) folderSelect.value = s.folder || DEFAULT_FOLDER;

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
        if(sub !== '_player' && sub !== '_folders') appData[sub].questions.forEach(q => { if(q.tags) q.tags.forEach(t => allTags.add(t)); });
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
        type: "qcm", tags: Array.from(activeTagsForNewQuestion), q: q, options: optionsArray, explanation: expl, 
        stats: {attempts: 0, correct: 0},
        sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
    };
    
    const idx = parseInt(document.getElementById('edit-q-index').value, 10);
    if(idx >= 0) {
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
        if(sub !== '_player' && sub !== '_folders') {
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
    allAvailableQ = shuffleArray(allAvailableQ);
    
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
    allQ = shuffleArray(allQ);
    
    initQuizState('subject', allQ.slice(0, requestedCount));
    setupTimer(document.getElementById('exam-mode-toggle').checked);
    
    showView('quiz-view');
    renderQuestion();
}

function startGR20() {
    let allAvailableQ = [];
    Object.keys(appData).forEach(sub => {
        if(sub !== '_player' && sub !== '_folders') appData[sub].questions.forEach(q => allAvailableQ.push({ originalRef: q, subjectRef: sub }));
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
    const valBtn = document.getElementById('validate-btn');
    if (session.mode === 'gr20') {
        valBtn.classList.add('hidden');
        valBtn.style.display = 'none';
    } else {
        valBtn.classList.remove('hidden');
        valBtn.style.display = 'block';
    }
    
    document.getElementById('gr20-next-btn').classList.toggle('hidden', session.mode !== 'gr20');
    document.getElementById('next-q-btn')?.classList.add('hidden'); // Safety check if exists
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

function submitSM2(quality) {
    const qItem = session.questions[session.currentIndex];
    const sm2 = qItem.originalRef.sm2;
    const next = calculateNextInterval(sm2, quality);
    
    if (quality < 3) {
        sm2.repetition = 0;
        sm2.nextReview = Date.now() + 10 * 60 * 1000; // + 10 minutes
    } else {
        sm2.repetition++;
        sm2.interval = next.interval;
        sm2.nextReview = Date.now() + sm2.interval * 24 * 60 * 60 * 1000; // Conversion précise en ms
    }
    
    sm2.easeFactor = sm2.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (sm2.easeFactor < 1.3) sm2.easeFactor = 1.3;
    
    saveData();
    nextQuestion();
}

// (La suite reste identique, mais on applique aussi la correction ms à nextGR20Question)
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

    const labels = document.querySelectorAll('.qcm-option');
    labels.forEach(label => {
        const input = label.querySelector('input');
        const statusIcon = label.querySelector('.status-icon');
        input.disabled = true; 
        
        const opt = qData.options[input.getAttribute('data-index')];
        const isChecked = input.checked;
        
        if(opt.isCorrect) correctTexts.push(opt.text);
        if(isChecked) userSelectedTexts.push(opt.text);

        if (opt.isCorrect) {
            if (isChecked) {
                correctSelected++;
                label.classList.add('correct');
                statusIcon.textContent = "✅";
                statusIcon.classList.remove('hidden');
            } else {
                label.classList.add('partial');
                statusIcon.textContent = "⚠️";
                statusIcon.classList.remove('hidden');
            }
        } else if (isChecked) {
            wrongSelected++;
            label.classList.add('wrong');
            statusIcon.textContent = "❌";
            statusIcon.classList.remove('hidden');
        }
    });

    // La fin de processAnswerSub reprend bien ici
    let isCorrect = false;
    let isPartial = false;

    if (wrongSelected === 0 && correctSelected === totalCorrect) {
        isCorrect = true;
        appData[qItem.subjectRef].stats.correct++;
        qData.stats.correct++;
        session.score++;
    } else if (wrongSelected === 0 && correctSelected > 0) {
        isPartial = true;
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
    
    return { isCorrect, isPartial, explanation: qData.explanation };
} // <--- FIN DE processAnswerSub()


// -----------------------------------------------------
// La fonction validateAnswer est maintenant bien indépendante
// -----------------------------------------------------
function validateAnswer() {
    const valBtn = document.getElementById('validate-btn');
    if (valBtn.classList.contains('hidden') || valBtn.style.display === 'none') return;
    
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
        
        if (session.mode === 'subject' && currentSubject) {
            const newlyValidated = updateDailyValidation(currentSubject);
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
// DASHBOARD
function renderProfileDashboard() {
    let totalAttempts = 0, totalCorrect = 0, totalQuestions = 0;
    let globalDue = 0, globalUnseen = 0;
    let strongQuestions = [], weakQuestions = [];
    let tagsMap = {};
    const now = Date.now();

    const container = document.getElementById('profile-content');
    container.innerHTML = ""; 
    const frag = document.createDocumentFragment();
    
    Object.keys(appData).forEach(subject => {
        if(subject === '_player' || subject === '_folders') return;
        const s = appData[subject];
        let subDue = 0, subUnseen = 0;
        
        totalAttempts += s.stats.attempts || 0;
        totalCorrect += s.stats.correct || 0;
        totalQuestions += s.questions.length;
        
        s.questions.forEach(q => {
            // Stats globales et matières
            if (q.stats.attempts === 0) { globalUnseen++; subUnseen++; }
            else if (q.sm2.nextReview <= now) { globalDue++; subDue++; }

            // Questions fortes / faibles
            if(q.stats.attempts >= 2) {
                const qRate = q.stats.correct / q.stats.attempts;
                if(qRate >= 0.8) strongQuestions.push(q);
                else if(qRate <= 0.5) weakQuestions.push(q);
            }

            // Stats par Tags
            if (q.tags) {
                q.tags.forEach(tag => {
                    if (!tagsMap[tag]) tagsMap[tag] = { total: 0, attempts: 0, correct: 0, due: 0 };
                    tagsMap[tag].total++;
                    tagsMap[tag].attempts += q.stats.attempts;
                    tagsMap[tag].correct += q.stats.correct;
                    if (q.stats.attempts > 0 && q.sm2.nextReview <= now) tagsMap[tag].due++;
                });
            }
        });

        const rate = s.stats.attempts > 0 ? Math.round((s.stats.correct / s.stats.attempts) * 100) : 0;
        
        const box = document.createElement('div');
        box.className = "subject-progress-card";
        
        const headerRow = document.createElement('div');
        headerRow.style = "display:flex; justify-content: space-between; margin-bottom: 10px;";
        const h3 = document.createElement('h3'); h3.style = "margin:0; color: var(--text-main);"; h3.textContent = subject;
        const spanStats = document.createElement('span'); spanStats.style = "color: var(--text-muted); font-weight: bold;"; 
        spanStats.innerHTML = `${rate}% <span style="font-size:0.8em; font-weight:normal;">(${s.stats.correct}/${s.stats.attempts})</span>`;
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
    const globalRate = totalAttempts > 0 ? Math.round((totalCorrect/totalAttempts)*100) : 0;
    document.getElementById('global-stats-container').innerHTML = `
        <div class="stat-card"><h3>Précision Globale</h3><div class="value">${globalRate}%</div></div>
        <div class="stat-card"><h3>Volume de la base</h3><div class="value" style="color: var(--secondary);">${totalQuestions}</div></div>
        <div class="stat-card"><h3>Questions Résolues</h3><div class="value" style="color: var(--text-main);">${totalAttempts}</div></div>
        <div class="stat-card accent-warning"><h3>Urgence (À revoir)</h3><div class="value" style="color: var(--warning);">${globalDue}</div></div>
        <div class="stat-card accent-secondary"><h3>Nouvelles (Jamais vues)</h3><div class="value" style="color: var(--text-muted);">${globalUnseen}</div></div>
    `;

    // Rendu des Tags (Maîtrise par chapitre)
    const tagsArray = Object.keys(tagsMap).map(k => ({ name: k, ...tagsMap[k] }));
    // Tri par urgence (due), puis par précision
    tagsArray.sort((a, b) => {
        if (b.due !== a.due) return b.due - a.due;
        const rateA = a.attempts > 0 ? a.correct/a.attempts : 0;
        const rateB = b.attempts > 0 ? b.correct/b.attempts : 0;
        return rateA - rateB;
    });

    const tagContainer = document.getElementById('tag-stats-container');
    tagContainer.innerHTML = "";
    if (tagsArray.length === 0) tagContainer.innerHTML = "<p style='color:var(--text-muted); font-style:italic;'>Aucune donnée par chapitre.</p>";
    else {
        tagsArray.slice(0, 10).forEach(tag => {
            const tagRate = tag.attempts > 0 ? Math.round((tag.correct / tag.attempts) * 100) : 0;
            const row = document.createElement('div'); row.className = 'tag-stat-row';
            row.innerHTML = `
                <strong style="color: var(--primary); flex: 1;">${tag.name}</strong>
                <span style="flex: 1; text-align: center;">${tagRate}% <small>(${tag.total} Q)</small></span>
                <span style="flex: 1; color: ${tag.due > 0 ? 'var(--warning)' : 'var(--text-muted)'};">🔴 ${tag.due} à revoir</span>
            `;
            tagContainer.appendChild(row);
        });
    }

    // Mini-listes (Fortes / Faibles)
    const buildMiniList = (qList, elementId, cssClass, fallbackMsg) => {
        const listDiv = document.getElementById(elementId);
        listDiv.innerHTML = "";
        if(qList.length === 0) {
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

    strongQuestions.sort((a,b) => (b.stats.correct/b.stats.attempts) - (a.stats.correct/a.stats.attempts));
    weakQuestions.sort((a,b) => (a.stats.correct/a.stats.attempts) - (b.stats.correct/b.stats.attempts));

    buildMiniList(strongQuestions, 'strong-questions-list', 'success', "Continue de t'entraîner pour débloquer cette section.");
    buildMiniList(weakQuestions, 'weak-questions-list', 'danger', "Aucun point de friction détecté pour le moment !");

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

function openEditModal() {
    const qItem = session.questions[session.currentIndex];
    const qData = qItem.originalRef;
    
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
    
    document.getElementById('edit-question-modal').style.display = 'block';
}

function closeEditModal() {
    document.getElementById('edit-question-modal').style.display = 'none';
}

function addOptionToEdit(text = "", isCorrect = false) {
    const container = document.getElementById('edit-q-options-container');
    const optDiv = document.createElement('div');
    optDiv.className = 'option-edit-row';
    optDiv.style = "display: flex; gap: 10px; margin-bottom: 10px; align-items: center;";
    
    const checkCorrect = document.createElement('input');
    checkCorrect.type = 'checkbox';
    checkCorrect.checked = isCorrect;
    checkCorrect.className = "edit-opt-correct";
    checkCorrect.style.transform = "scale(1.5)";
    
    const inputTxt = document.createElement('input');
    inputTxt.type = 'text';
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
    const qItem = session.questions[session.currentIndex];
    const qData = qItem.originalRef;
    
    // Récupération des textes
    const newText = document.getElementById('edit-q-text').value.trim();
    if (!newText) {
        alert("La question ne peut pas être vide !");
        return;
    }
    
    qData.q = newText;
    qData.explanation = document.getElementById('edit-q-explanation').value.trim();
    
    // Traitement des tags
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
        alert("Il faut au moins 2 options valides !");
        return;
    }
    if (!hasCorrect) {
        alert("Il faut au moins une bonne réponse cochée !");
        return;
    }
    
    qData.options = newOptions;
    
    await saveData(); // Synchronisation Supabase
    closeEditModal();
    customAlert("Succès", "La question a été mise à jour et sauvegardée !");
    
    // Mise à jour visuelle immédiate dans le quiz
    document.getElementById('question-text').textContent = qData.q;
    if (qData.explanation) document.getElementById('explanation-text').textContent = qData.explanation;
    renderMath([document.getElementById('question-view')]);
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

                // Recherche de la ou des bonnes réponses
                const correctAnswers = q.options.filter(o => o.isCorrect).map(o => o.text).join('</strong> ou <strong>');

                let htmlContent = `
                    <div style="font-size: 0.85em; color: var(--secondary); margin-bottom: 8px;">Tags : ${q.tags ? q.tags.join(', ') : 'Aucun'}</div>
                    <h3 style="margin-top: 0; font-size: 1.1em;">${q.q}</h3>
                    <div style="margin-top: 12px; padding: 10px; background: rgba(46, 204, 113, 0.1); border-left: 4px solid var(--success); border-radius: 4px;">
                        <span style="color: var(--success);">✅ <strong>${correctAnswers}</strong></span>
                    </div>
                `;

                if (q.explanation) {
                    htmlContent += `
                    <div style="margin-top: 10px; padding: 10px; background: rgba(255, 255, 255, 0.05); border-radius: 4px;">
                        <strong style="color: var(--primary);">💡 Explication :</strong><br>
                        <span style="font-size: 0.95em; color: var(--text-main);">${q.explanation}</span>
                    </div>`;
                }

                // Bouton de suppression des favoris
                const btnRemove = document.createElement('button');
                btnRemove.className = 'btn btn-secondary';
                btnRemove.style = "margin-top: 15px; padding: 6px 12px; font-size: 0.85em;";
                btnRemove.innerHTML = "❌ Retirer des favoris";
                btnRemove.onclick = () => removeFavoriteFromList(subject, q.q);

                card.innerHTML = htmlContent;
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

async function removeFavoriteFromList(subject, questionText) {
    if (appData[subject]) {
        // On trouve la question exacte par son texte
        const targetQ = appData[subject].questions.find(q => q.q === questionText);
        if (targetQ) {
            targetQ.isFavorite = false;
            await saveData(); // Synchronisation Supabase
            renderFavorites(); // Rafraîchir l'affichage instantanément
        }
    }
}
// LANCEMENT DE L'APPLICATION
checkSession();
