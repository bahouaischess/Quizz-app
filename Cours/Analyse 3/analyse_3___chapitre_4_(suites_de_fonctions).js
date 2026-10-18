// ============================================================
// MatiÃ¨re : Analyse 3 : Chapitre 4 (Suites de fonctions)
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
Object.assign(defaultData, {
    "Analyse 3 : Chapitre 4 (Suites de fonctions)": {
        folder: "Analyse 3",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            // --- CONVERGENCE SIMPLE ET UNIFORME : DÉFINITIONS ---
            {
                type: "qcm", tags: ["Définitions", "Convergence Simple"],
                q: "Que signifie la convergence simple d'une suite de fonctions $(f_n)$ vers une fonction $f$ sur un ensemble $D$ ?",
                options: [
                    { text: "Pour tout $x \\in D$, la suite de nombres réels $f_n(x)$ converge vers le nombre $f(x)$", isCorrect: true },
                    { text: "La distance maximale entre $f_n(x)$ et $f(x)$ tend vers 0", isCorrect: false },
                    { text: "Il existe un rang à partir duquel $f_n(x) = f(x)$ pour tout $x$", isCorrect: false }
                ],
                explanation: "C'est une convergence « point par point ». La vitesse de convergence peut dépendre totalement du point $x$ choisi.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Définitions", "Convergence Uniforme"],
                q: "Laquelle de ces propositions correspond à la définition de la convergence UNIFORME de $(f_n)$ vers $f$ sur $D$ ?",
                options: [
                    { text: "$\\forall \\varepsilon > 0, \\exists N \\in \\mathbb{N}, \\forall n \\ge N, \\forall x \\in D, |f_n(x) - f(x)| < \\varepsilon$", isCorrect: true },
                    { text: "$\\forall x \\in D, \\forall \\varepsilon > 0, \\exists N \\in \\mathbb{N}, \\forall n \\ge N, |f_n(x) - f(x)| < \\varepsilon$", isCorrect: false }
                ],
                explanation: "L'ordre des quantificateurs est capital ! Dans la convergence uniforme, le rang $N$ ne dépend QUE de $\\varepsilon$, il est le même pour TOUT $x$ (le $\\forall x$ est placé à la fin).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Propriétés fondamentales"],
                q: "Quel est le lien d'implication entre la convergence simple (CS) et la convergence uniforme (CU) ?",
                options: [
                    { text: "La CU implique la CS, mais la réciproque est fausse", isCorrect: true },
                    { text: "La CS implique la CU, mais la réciproque est fausse", isCorrect: false },
                    { text: "Elles sont équivalentes", isCorrect: false }
                ],
                explanation: "Si l'écart maximal tend vers 0 (CU), alors l'écart en chaque point tend vers 0 (CS). L'inverse est faux : une suite peut converger point par point mais avec un écart global qui reste grand à cause de pics qui se déplacent.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Norme Infinie"],
                q: "Comment définit-on la norme de la convergence uniforme, notée $\\|f\\|_{\\infty, D}$ ?",
                options: [
                    { text: "$\\sup_{x \\in D} |f(x)|$", isCorrect: true },
                    { text: "$\\int_D |f(x)| dx$", isCorrect: false },
                    { text: "$\\max_{x \\in D} f(x)$", isCorrect: false }
                ],
                explanation: "C'est la borne supérieure (sup) de la valeur absolue. On ne peut pas écrire 'max' car la fonction peut ne pas atteindre cette valeur limite (surtout sur un intervalle ouvert).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Norme Infinie", "Convergence Uniforme"],
                q: "À l'aide de la norme infinie, comment traduit-on la convergence uniforme de $(f_n)$ vers $f$ sur $D$ ?",
                options: [
                    { text: "$\\lim_{n \\to \\infty} \\|f_n - f\\|_{\\infty, D} = 0$", isCorrect: true },
                    { text: "$\\lim_{n \\to \\infty} f_n(x) = f(x)$", isCorrect: false }
                ],
                explanation: "L'écart maximal absolu entre les deux courbes sur tout le domaine $D$ doit tendre vers 0.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            
            // --- EXEMPLES DE RÉFÉRENCE ---
            {
                type: "qcm", tags: ["Exemples de référence", "Polynômes"],
                q: "Soit $f_n(x) = x^n$ définie sur $[0, 1]$. Vers quelle fonction $f$ cette suite converge-t-elle SIMPLEMENT ?",
                options: [
                    { text: "f(x) = 0 si $x \\in [0, 1[$, et f(1) = 1", isCorrect: true },
                    { text: "f(x) = 0 pour tout $x \\in [0, 1]$", isCorrect: false },
                    { text: "La suite ne converge pas simplement", isCorrect: false }
                ],
                explanation: "Si $x < 1$, $x^n \\to 0$. Mais si $x = 1$, $1^n = 1 \\to 1$. La fonction limite est donc discontinue en 1.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Exemples de référence", "Polynômes"],
                q: "La suite $f_n(x) = x^n$ converge-t-elle UNIFORMÉMENT sur $[0, 1]$ ?",
                options: [
                    { text: "Non", isCorrect: true },
                    { text: "Oui", isCorrect: false }
                ],
                explanation: "La fonction limite $f$ est discontinue en 1. Or, si une suite de fonctions continues ($x^n$) convergeait uniformément, la limite devrait être continue. C'est donc impossible.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Exemples de référence", "Polynômes"],
                q: "Soit un réel $a \\in ]0, 1[$. La suite $f_n(x) = x^n$ converge-t-elle UNIFORMÉMENT sur $[0, a]$ ?",
                options: [
                    { text: "Oui, car $\\|f_n - f\\|_{\\infty} = a^n$ qui tend vers 0", isCorrect: true },
                    { text: "Non, car elle est discontinue en 1", isCorrect: false }
                ],
                explanation: "Sur $[0, a]$, la fonction limite est 0 partout. L'erreur maximale est atteinte en $x=a$ et vaut $a^n$. Comme $a<1$, l'erreur maximale tend bien vers 0. On a convergence uniforme sur tout segment compact éloigné de 1.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Contre-exemples", "Bosse glissante"],
                q: "Soit la suite de fonctions formants un triangle glissant : $f_n(x)$ vaut 1 en $x=n$, et 0 en dehors de $[n-1, n+1]$. Quelle est sa limite simple sur $\\mathbb{R}$ ?",
                options: [
                    { text: "La fonction nulle $f(x) = 0$", isCorrect: true },
                    { text: "La fonction constante $f(x) = 1$", isCorrect: false }
                ],
                explanation: "Pour n'importe quel $x$ fixé, dès que $n$ devient suffisamment grand ($n > x+1$), la bosse a dépassé $x$ et la fonction vaut 0. La limite point par point est bien 0.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Contre-exemples", "Bosse glissante"],
                q: "La suite du triangle glissant (qui culmine à 1) converge-t-elle uniformément vers 0 sur $\\mathbb{R}$ ?",
                options: [
                    { text: "Non, car $\\|f_n - 0\\|_{\\infty} = 1$ pour tout $n$, ce qui ne tend pas vers 0", isCorrect: true },
                    { text: "Oui, car chaque point finit par valoir 0", isCorrect: false }
                ],
                explanation: "L'écart maximal absolu entre $f_n$ et la limite (0) reste de 1 pour tout $n$. Il n'y a donc pas convergence uniforme globale.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- THÉORÈME DE CONTINUITÉ ---
            {
                type: "qcm", tags: ["Théorème de Continuité", "Transfert"],
                q: "Si une suite de fonctions continues $(f_n)$ converge UNIFORMÉMENT vers $f$ sur un domaine $D$, que peut-on dire de $f$ ?",
                options: [
                    { text: "La fonction $f$ est obligatoirement continue sur $D$", isCorrect: true },
                    { text: "La fonction $f$ peut présenter des sauts isolés", isCorrect: false }
                ],
                explanation: "C'est le premier grand théorème de transfert. La convergence uniforme préserve la continuité. On dit qu'on peut intervertir les limites : $\\lim_{n \\to \\infty} \\lim_{x \\to a} = \\lim_{x \\to a} \\lim_{n \\to \\infty}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Théorème de Continuité", "Contraposée"],
                q: "Si la limite simple $f$ d'une suite de fonctions continues $f_n$ s'avère être DISCONTINUE. Que peut-on conclure ?",
                options: [
                    { text: "La convergence n'est pas uniforme (elle est seulement simple)", isCorrect: true },
                    { text: "La suite $f_n$ a été mal calculée", isCorrect: false },
                    { text: "Le domaine $D$ n'est pas fermé", isCorrect: false }
                ],
                explanation: "C'est l'utilisation par contraposée du théorème de continuité. Si $f$ n'est pas continue, alors la convergence ne peut absolument pas être uniforme (ex: $x^n$ sur $[0,1]$).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Convergence Locale"],
                q: "Pour prouver que $f$ est continue sur $\\mathbb{R}$, faut-il prouver la convergence uniforme sur $\\mathbb{R}$ tout entier ?",
                options: [
                    { text: "Non, il suffit de prouver la convergence uniforme sur tout segment $[-A, A]$ de $\\mathbb{R}$ (convergence uniforme sur tout compact)", isCorrect: true },
                    { text: "Oui, la continuité globale requiert une convergence uniforme globale", isCorrect: false }
                ],
                explanation: "La continuité est une propriété LOCALE. Montrer la convergence uniforme sur tout segment autour d'un point $x$ suffit à garantir la continuité en ce point.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- THÉORÈME D'INTÉGRATION ---
            {
                type: "qcm", tags: ["Théorème d'Intégration", "Transfert"],
                q: "Soit $(f_n)$ une suite de fonctions continues convergeant UNIFORMÉMENT vers $f$ sur un SEGMENT $[a,b]$. Que peut-on dire de l'intégrale ?",
                options: [
                    { text: "On peut intervertir limite et intégrale : $\\lim_{n \\to \\infty} \\int_a^b f_n(t) dt = \\int_a^b f(t) dt$", isCorrect: true },
                    { text: "Il faut appliquer le théorème de convergence dominée pour pouvoir intervertir", isCorrect: false }
                ],
                explanation: "Sur un intervalle fermé et borné, la convergence uniforme est suffisante pour l'interversion. L'erreur d'aire est majorée par $(b-a) \\times \\|f_n - f\\|_{\\infty}$ qui tend vers 0.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Théorème d'Intégration", "Pièges"],
                q: "Peut-on appliquer le théorème de transfert de l'intégrale par convergence uniforme sur un intervalle infini (ex: $[0, +\\infty[$) ?",
                options: [
                    { text: "Non, la convergence uniforme ne suffit pas sur un intervalle infini. Il faut d'autres outils (comme Lebesgue)", isCorrect: true },
                    { text: "Oui, la convergence uniforme est toujours suffisante", isCorrect: false }
                ],
                explanation: "L'erreur globale d'aire est la largeur multipliée par la hauteur. Si la largeur est infinie, même une erreur de hauteur tendant vers 0 uniformément peut générer une aire infinie (ou constante).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Contre-exemples", "Intégration"],
                q: "Soit $f_n(x) = \\frac{x}{n}$ sur $\\mathbb{R}$. La suite converge simplement vers 0. A-t-on convergence uniforme sur $\\mathbb{R}$ ?",
                options: [
                    { text: "Non, l'erreur $\\sup_{x \\in \\mathbb{R}} |\\frac{x}{n}|$ vaut $+\\infty$ pour tout $n$", isCorrect: true },
                    { text: "Oui, car le $n$ au dénominateur écrase tout", isCorrect: false }
                ],
                explanation: "C'est un autre grand classique : pour tout $n$ fixé, si $x$ part vers l'infini, la fonction diverge. L'écart maximal est donc infini. On n'a pas convergence uniforme sur $\\mathbb{R}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- THÉORÈME DE DÉRIVATION ---
            {
                type: "qcm", tags: ["Théorème de Dérivation", "Hypothèses"],
                q: "Pour prouver qu'une limite simple $f$ est dérivable et que $f' = \\lim f_n'$, quelle hypothèse forte est exigée sur le segment $[a,b]$ ?",
                options: [
                    { text: "Il faut la convergence UNIFORME de la suite des dérivées $(f_n')$ sur $[a,b]$", isCorrect: true },
                    { text: "Il faut la convergence uniforme de la suite $(f_n)$ sur $[a,b]$", isCorrect: false }
                ],
                explanation: "C'est le point clé : la régularité de la limite est contrôlée par la suite des DÉRIVÉES. Une suite $f_n$ peut converger uniformément vers une fonction qui n'est pas dérivable du tout !",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Théorème de Dérivation", "Hypothèses minimales"],
                q: "Dans le théorème de dérivation des suites de fonctions (classe $\\mathcal{C}^1$), que doit-on exiger de la suite $(f_n)$ elle-même (en plus de la CU de $f_n'$) ?",
                options: [
                    { text: "Elle doit converger simplement en AU MOINS UN point $x_0$", isCorrect: true },
                    { text: "Elle doit converger uniformément partout", isCorrect: false }
                ],
                explanation: "Si les dérivées convergent uniformément, les courbes de $f_n$ ont toutes la même forme. Il suffit d'ancrer ces courbes en un seul point $x_0$ pour qu'elles convergent partout !",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Théorème de Dérivation", "Extension CU"],
                q: "Si la suite des dérivées $(f_n')$ converge uniformément sur un segment $[a,b]$ et que $(f_n)$ converge en un point. Que fait $(f_n)$ sur $[a,b]$ ?",
                options: [
                    { text: "Elle converge forcément UNIFORMÉMENT sur $[a,b]$", isCorrect: true },
                    { text: "Elle converge seulement simplement sur $[a,b]$", isCorrect: false }
                ],
                explanation: "C'est un corollaire très puissant : si les pentes s'alignent parfaitement et qu'on attache un bout de la corde, toute la corde s'aligne uniformément (démontré via l'inégalité des accroissements finis).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Contre-exemples", "Dérivation"],
                q: "Soit $f_n(x) = \\frac{\\sin(nx)}{\\sqrt{n}}$. La suite converge uniformément vers 0. Que vaut la suite des dérivées $f_n'(x)$ en 0 ?",
                options: [
                    { text: "$\\sqrt{n}$, ce qui diverge vers $+\\infty$", isCorrect: true },
                    { text: "0", isCorrect: false }
                ],
                explanation: "La dérivée est $\\sqrt{n}\\cos(nx)$. En $x=0$, elle vaut $\\sqrt{n} \\to \\infty$. Ceci montre de façon spectaculaire que la convergence uniforme de $(f_n)$ N'IMPLIQUE PAS la convergence des dérivées !",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- SÉRIES DE FONCTIONS (Séries = Sommes de suites) ---
            {
                type: "qcm", tags: ["Séries de fonctions", "Convergence Normale"],
                q: "Pour une série de fonctions $\\sum f_n(x)$, qu'est-ce que la convergence NORMALE sur $D$ ?",
                options: [
                    { text: "C'est la convergence de la série NUMÉRIQUE des normes : $\\sum \\|f_n\\|_{\\infty, D} < \\infty$", isCorrect: true },
                    { text: "C'est la convergence de $\\| \\sum f_n \\|_{\\infty}$ vers 0", isCorrect: false }
                ],
                explanation: "La convergence normale exige de calculer la borne supérieure de chaque fonction individuellement, puis de vérifier que la somme de ces constantes est finie.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Séries de fonctions", "Hiérarchie"],
                q: "Quel est le lien entre convergence normale (CN) et convergence uniforme (CU) pour les séries de fonctions ?",
                options: [
                    { text: "La CN implique la CU (et donc la CS absolue)", isCorrect: true },
                    { text: "La CU implique la CN", isCorrect: false },
                    { text: "Elles sont équivalentes", isCorrect: false }
                ],
                explanation: "La convergence normale est le « Graal » des convergences. C'est la condition la plus forte. Dès que tu as la CN, tu as la CU, et tu peux appliquer tous les théorèmes de transfert.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Séries de fonctions", "Théorème de Weierstrass"],
                q: "Comment montre-t-on qu'une série $\\sum f_n$ converge NORNALEMENT sur $D$ en pratique ?",
                options: [
                    { text: "On majore $|f_n(x)|$ par le terme général d'une série numérique $u_n$ indépendante de $x$ qui converge (Critère de Weierstrass)", isCorrect: true },
                    { text: "On étudie le signe de la dérivée de la somme", isCorrect: false }
                ],
                explanation: "Il suffit de trouver des $u_n$ tels que $\\|f_n\\|_{\\infty} \\le u_n$ avec $\\sum u_n$ convergente (ex: $u_n = 1/n^2$).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Séries de fonctions", "Continuité"],
                q: "Si la série $\\sum f_n(x)$ de fonctions continues converge UNIFORMÉMENT sur $D$, que peut-on dire de sa somme $S(x)$ ?",
                options: [
                    { text: "La fonction somme $S$ est continue sur $D$", isCorrect: true },
                    { text: "Rien ne garantit la continuité d'une somme infinie", isCorrect: false }
                ],
                explanation: "Puisqu'une série est simplement la limite de la suite de ses sommes partielles ($S_N = \\sum_0^N f_n$), on applique exactement le même théorème de continuité que pour les suites.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Séries de fonctions", "Dérivation"],
                q: "Pour dériver une série de fonctions $\\sum f_n(x)$ terme à terme : $S'(x) = \\sum f_n'(x)$. Quelle est l'hypothèse principale ?",
                options: [
                    { text: "Il faut prouver la convergence UNIFORME de la série des dérivées $\\sum f_n'(x)$", isCorrect: true },
                    { text: "Il faut prouver la convergence uniforme de la série originale $\\sum f_n(x)$", isCorrect: false }
                ],
                explanation: "Toujours la même logique que pour les suites : on dérive la somme partielle, et on a besoin que la suite (donc la série) des dérivées se comporte bien pour justifier l'égalité.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            
            // --- MÉTHODOLOGIE ET CALCUL DE LA NORME ---
            {
                type: "qcm", tags: ["Méthodologie", "Norme infinie"],
                q: "Comment déterminer l'erreur maximale $\\|f_n - f\\|_{\\infty}$ sur un intervalle $I$ de manière rigoureuse ?",
                options: [
                    { text: "On étudie les variations de la fonction d'erreur $h_n(x) = |f_n(x) - f(x)|$ en calculant sa dérivée par rapport à $x$", isCorrect: true },
                    { text: "On calcule la limite de $f_n(x)$ quand $x \\to \\infty$", isCorrect: false }
                ],
                explanation: "Le calcul de la norme infinie est un simple exercice d'étude de fonction (chapitre de Terminale). On dérive $h_n(x)$ pour trouver où elle atteint son maximum local.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Méthodologie", "Astuce Locale"],
                q: "Si je n'arrive pas à prouver la CU sur $]0, 1[$, que dois-je tenter pour sauver la continuité ?",
                options: [
                    { text: "Prouver la CU sur tout segment compact $[a, b] \\subset ]0, 1[$ (par exemple $[a, 1-a]$ avec $a>0$)", isCorrect: true },
                    { text: "Utiliser une intégration par parties", isCorrect: false }
                ],
                explanation: "S'il y a un point qui pose problème aux extrémités (souvent en 0 ou en 1), il suffit de s'en éloigner. La CU sur tout compact est amplement suffisante pour prouver la continuité sur l'ouvert complet.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Méthodologie", "Alternative Intégration"],
                q: "Si la CU échoue sur $]0, +\\infty[$, comment peut-on quand même justifier l'interversion $\\lim \\int f_n = \\int \\lim f_n$ ?",
                options: [
                    { text: "En basculant sur le Théorème de Convergence Dominée (TCD) de Lebesgue", isCorrect: true },
                    { text: "En découpant l'intégrale en une infinité de segments", isCorrect: false }
                ],
                explanation: "La CU sur un intervalle non borné est très rigide. Dès qu'elle échoue ou qu'on est sur l'infini, on sort l'arme absolue : le TCD, qui ne demande qu'une domination par une fonction intégrable.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- QUESTIONS COMPLÉMENTAIRES (RENFORCEMENT) ---
            {
                type: "qcm", tags: ["Séries de fonctions", "Exemples de référence"],
                q: "La série de fonctions $\\sum x^n$ converge-t-elle uniformément sur $]-1, 1[$ ?",
                options: [
                    { text: "Non, l'erreur explose quand $x \\to 1$ ou $x \\to -1$", isCorrect: true },
                    { text: "Oui, car c'est une série géométrique de raison strictement inférieure à 1", isCorrect: false }
                ],
                explanation: "Sur l'ouvert $]-1, 1[$, le reste d'ordre $N$ s'écrit $\\frac{x^{N+1}}{1-x}$. Quand $x \\to 1$, ce reste tend vers l'infini. Il n'y a donc pas CU globale, mais seulement locale sur $[-a, a]$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Norme Infinie", "Reste de série"],
                q: "Pour prouver la convergence uniforme d'une série $\\sum f_n$, il suffit de prouver que la norme infinie de quoi tend vers 0 ?",
                options: [
                    { text: "La norme infinie de la suite des RESTES $R_N(x) = \\sum_{n=N+1}^{\\infty} f_n(x)$", isCorrect: true },
                    { text: "La norme infinie de la fonction $f_N(x)$ uniquement", isCorrect: false }
                ],
                explanation: "La CU de la série est par définition la CU de la suite des sommes partielles $S_N$ vers $S$. L'erreur est exactement le reste $S - S_N = R_N$. C'est donc $\|R_N\|_\\infty$ qui doit tendre vers 0.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Séries de fonctions", "Séries alternées"],
                q: "Si la série $\\sum (-1)^n u_n(x)$ vérifie le Critère Spécial des Séries Alternées (CSSA) pour tout $x$. Comment peut-on prouver la CU rapidement ?",
                options: [
                    { text: "En majorant la valeur absolue du reste $|R_N(x)|$ par son premier terme négligé $|u_{N+1}(x)|$, dont la norme infinie doit tendre vers 0", isCorrect: true },
                    { text: "En prouvant la convergence normale", isCorrect: false }
                ],
                explanation: "C'est une astuce surpuissante ! Le CSSA nous dit que $|R_N(x)| \\le u_{N+1}(x)$. On a juste à montrer que le maximum de $u_{N+1}(x)$ tend vers 0 indépendamment de $x$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Contre-exemples", "Aire conservée"],
                q: "Soit $f_n(x)$ le triangle de hauteur $n$ et de largeur $2/n$ sur $[0, 2/n]$. Il converge simplement vers 0. Que vaut l'intégrale $\\int_0^1 f_n(x)dx$ ?",
                options: [
                    { text: "1 pour tout $n$, donc l'intégrale de la limite (0) n'est pas la limite des intégrales (1)", isCorrect: true },
                    { text: "0, car le triangle devient de plus en plus fin", isCorrect: false }
                ],
                explanation: "L'aire d'un triangle est $(base \\times hauteur)/2 = ((2/n) \\times n)/2 = 1$. La masse est constante, elle « fuit » par le haut, rendant l'interversion illégale (et brisant la CU).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Théorème d'Intégration", "Suite vs Série"],
                q: "Peut-on intervertir somme et intégrale sur $[a,b]$ si la série $\\sum f_n$ converge uniformément sur ce segment ?",
                options: [
                    { text: "Oui, $\\int_a^b \\sum_{n=0}^\\infty f_n(t)dt = \\sum_{n=0}^\\infty \\int_a^b f_n(t)dt$", isCorrect: true },
                    { text: "Non, c'est formellement interdit pour une somme infinie", isCorrect: false }
                ],
                explanation: "C'est la transposition directe du théorème d'intégration des suites. Puisque l'intégrale est linéaire, on peut échanger le signe intégral et le symbole $\\Sigma$ sans aucun problème si on a la CU (ou la CN).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Théorème de Continuité", "Demi-tangente"],
                q: "Si la suite $f_n$ de classe $\\mathcal{C}^1$ converge uniformément vers $f$, peut-on affirmer que $f$ n'a pas de point anguleux (comme $|x|$) ?",
                options: [
                    { text: "Non. $f$ sera continue, mais rien ne garantit sa dérivabilité sans la CU de $f_n'$", isCorrect: true },
                    { text: "Oui, une limite uniforme de fonctions lisses est toujours lisse", isCorrect: false }
                ],
                explanation: "L'exemple d'approximation de Weierstrass le prouve : on peut toujours approcher uniformément la fonction $|x|$ (qui a un point anguleux) par des polynômes lisses.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Norme Infinie", "Pièges"],
                q: "Est-il possible d'avoir $\\|f_n\\|_{\\infty} = +\\infty$ ?",
                options: [
                    { text: "Oui, si la fonction n'est pas bornée sur $D$ (ex: $f_n(x) = x+n$ sur $\\mathbb{R}$)", isCorrect: true },
                    { text: "Non, une norme est toujours un nombre réel fini", isCorrect: false }
                ],
                explanation: "Si la différence $f_n - f$ n'est pas bornée, son supremum vaut $+\\infty$. Cela implique immédiatement que la suite NE CONVERGE PAS uniformément (puisque $+\\infty$ ne tend pas vers 0).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Séries de fonctions", "Convergence absolue"],
                q: "Quelle est la différence entre convergence normale (CN) et convergence absolue d'une série de fonctions ?",
                options: [
                    { text: "La convergence absolue s'étudie point par point $\\sum |f_n(x)|$, la CN s'étudie avec la norme globale $\\sum \\|f_n\\|_{\\infty}$", isCorrect: true },
                    { text: "C'est exactement la même chose", isCorrect: false }
                ],
                explanation: "La CN est globale. Il est fréquent d'avoir une série qui converge absolument pour tout $x$, mais dont le \"chapeau\" global $\\|f_n\\|_{\\infty}$ est trop gros et rend la somme infinie (donc pas de CN).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    }
});

