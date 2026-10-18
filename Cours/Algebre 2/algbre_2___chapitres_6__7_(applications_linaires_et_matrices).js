// ============================================================
// MatiÃ¨re : Algèbre 2 : Chapitres 6 & 7 (Applications Linéaires et Matrices)
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
Object.assign(defaultData, {
   "Algèbre 2 : Chapitres 6 & 7 (Applications Linéaires et Matrices)": {
        folder: "Algèbre 2",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            // --- BLOC 1 : VOCABULAIRE ET DÉFINITIONS (Chap 6) ---
            {
                type: "qcm", tags: ["Définitions App Linéaires"],
                q: "Quelle est la définition mathématique d'une application linéaire $f : E \\to F$ ?",
                options: [
                    { text: "$\\forall (x,y) \\in E^2, \\forall (\\lambda,\\mu) \\in \\mathbb{K}^2, f(\\lambda x + \\mu y) = \\lambda f(x) + \\mu f(y)$", isCorrect: true },
                    { text: "$f(xy) = f(x)f(y)$", isCorrect: false },
                    { text: "$f(x+y) = f(x) + f(y)$ uniquement", isCorrect: false },
                    { text: "$f(\\lambda x) = \\lambda f(x)$ uniquement", isCorrect: false }
                ],
                explanation: "Une application linéaire conserve les combinaisons linéaires. L'image d'une combinaison linéaire est la combinaison linéaire des images. Vérifier seulement l'additivité ou seulement l'homogénéité séparément ne suffit pas à conclure en général (même si en dimension finie sur $\\mathbb{Q}$/$\\mathbb{R}$ additivité + continuité impliquerait homogénéité, ce n'est pas le cadre du cours).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Définitions App Linéaires", "Vocabulaire"],
                q: "Comment appelle-t-on une application linéaire allant de $E$ dans $\\mathbb{K}$ (le corps de base, souvent $\\mathbb{R}$) ?",
                options: [
                    { text: "Un endomorphisme", isCorrect: false },
                    { text: "Une forme linéaire", isCorrect: true },
                    { text: "Un automorphisme", isCorrect: false },
                    { text: "Un isomorphisme", isCorrect: false }
                ],
                explanation: "Une forme linéaire associe un scalaire à chaque vecteur de l'espace (ex : la trace, une coordonnée, une intégrale). Un endomorphisme va de $E$ dans $E$ lui-même — ce n'est donc le cas que si $E = \\mathbb{K}$, ce qui n'est pas la situation générale visée ici.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Définitions App Linéaires", "Vocabulaire"],
                q: "Qu'est-ce qu'un « automorphisme » de $E$ ?",
                options: [
                    { text: "Une application linéaire de $E$ dans $E$ (endomorphisme)", isCorrect: false },
                    { text: "Un endomorphisme bijectif de $E$", isCorrect: true },
                    { text: "Une application linéaire surjective", isCorrect: false },
                    { text: "Une application linéaire injective de $E$ dans $E$", isCorrect: false }
                ],
                explanation: "Un automorphisme cumule deux propriétés : c'est une application linéaire de l'espace vers lui-même (endomorphisme) ET elle est bijective. En dimension finie, injective seule ou surjective seule d'un endomorphisme suffirait (par équivalence en dimensions égales), mais la DÉFINITION exige bien la bijectivité, pas juste l'une des deux.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Définitions App Linéaires"],
                q: "Que vaut obligatoirement $f(0_E)$ pour toute application linéaire $f$ ?",
                options: [
                    { text: "1", isCorrect: false },
                    { text: "Cela dépend de l'application", isCorrect: false },
                    { text: "$0_F$ (le vecteur nul de l'espace d'arrivée)", isCorrect: true }
                ],
                explanation: "En appliquant $f(\\lambda x) = \\lambda f(x)$ avec $\\lambda = 0$, on obtient $f(0_E) = 0_F$. C'est le premier test pour vérifier qu'une fonction n'est PAS linéaire : si $f(0) \\neq 0$, on peut conclure immédiatement à la non-linéarité, sans avoir besoin de tester la définition complète.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Espaces Vectoriels des applications"],
                q: "Quelle est la structure algébrique de $\\mathcal{L}(E,F)$ (l'ensemble des applications linéaires de $E$ dans $F$) ?",
                options: [
                    { text: "C'est un espace affine", isCorrect: false },
                    { text: "C'est un $\\mathbb{K}$-espace vectoriel", isCorrect: true },
                    { text: "C'est un anneau", isCorrect: false }
                ],
                explanation: "La somme de deux applications linéaires est linéaire, et la multiplication par un scalaire donne une application linéaire. $\\mathcal{L}(E,F)$ est donc un E.V. Ce n'est un anneau (avec la composition comme produit) que dans le cas particulier $\\mathcal{L}(E,E)$, pas pour $F$ quelconque.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Composition"],
                q: "Si $f \\in \\mathcal{L}(E,F)$ et $g \\in \\mathcal{L}(F,G)$, que peut-on dire de $g \\circ f$ ?",
                options: [
                    { text: "Ce n'est pas forcément linéaire", isCorrect: false },
                    { text: "$g \\circ f \\in \\mathcal{L}(E,G)$", isCorrect: true },
                    { text: "$g \\circ f \\in \\mathcal{L}(F,F)$", isCorrect: false }
                ],
                explanation: "La composée de deux applications linéaires est toujours une application linéaire, et son espace de départ est celui de $f$ ($E$) tandis que son espace d'arrivée est celui de $g$ ($G$) — pas $F$, qui n'est qu'un espace intermédiaire.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },

            // --- BLOC 2 : NOYAU, IMAGE ET THÉORÈME DU RANG (Chap 6) ---
            {
                type: "qcm", tags: ["Noyau & Image"],
                q: "Comment définit-on le noyau $Ker(f)$ d'une application linéaire $f$ ?",
                options: [
                    { text: "$\\{x \\in E \\mid f(x) = x\\}$", isCorrect: false },
                    { text: "$\\{y \\in F \\mid \\exists x \\in E, f(x) = y\\}$", isCorrect: false },
                    { text: "$\\{x \\in E \\mid f(x) = 0_F\\}$", isCorrect: true }
                ],
                explanation: "Le noyau est l'image réciproque du vecteur nul de l'espace d'arrivée. C'est un sous-espace vectoriel de $E$. La première proposition décrit l'ensemble des points fixes (utile pour les projecteurs), la seconde décrit en réalité $Im(f)$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Noyau & Image"],
                q: "Quelle est la caractérisation fondamentale de l'injectivité d'une application linéaire ?",
                options: [
                    { text: "$f$ est injective $\\iff Im(f) = F$", isCorrect: false },
                    { text: "$f$ est injective $\\iff Ker(f) = \\{0_E\\}$", isCorrect: true },
                    { text: "$f$ est injective $\\iff dim(Ker(f)) = dim(E)$", isCorrect: false }
                ],
                explanation: "L'égalité $f(x)=f(y)$ entraîne $f(x-y)=0$. Si le noyau est réduit à zéro, alors $x-y=0$, donc $x=y$. La première option décrit la surjectivité, et la troisième décrirait au contraire l'application nulle (le pire cas, tout est envoyé sur 0).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Noyau & Image"],
                q: "Que signifie algébriquement que $f : E \\to F$ est surjective ?",
                options: [
                    { text: "$Im(f) = F$", isCorrect: true },
                    { text: "$Ker(f) = E$", isCorrect: false },
                    { text: "$dim(Im(f)) = dim(E)$", isCorrect: false }
                ],
                explanation: "La surjectivité signifie que tout élément de l'espace d'arrivée $F$ possède au moins un antécédent, donc que l'image de $f$ couvre intégralement $F$. $Ker(f)=E$ signifierait que $f$ est l'application nulle, et $dim(Im(f))=dim(E)$ caractériserait plutôt l'injectivité (via le théorème du rang).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Théorème du rang"],
                q: "Soit $E$ un espace de dimension finie. Que stipule le Théorème du rang pour $f \\in \\mathcal{L}(E,F)$ ?",
                options: [
                    { text: "$dim(Im(f)) + dim(Ker(f)) = dim(F)$", isCorrect: false },
                    { text: "$dim(Im(f)) + dim(Ker(f)) = dim(E)$", isCorrect: true },
                    { text: "$dim(Im(f)) \\times dim(Ker(f)) = dim(E)$", isCorrect: false }
                ],
                explanation: "La dimension de l'espace de DÉPART ($E$) se scinde exactement entre ce qui est « écrasé » (le noyau) et ce qui est généré (l'image). Attention, rien n'impose que $dim(F)$ intervienne dans cette égalité : $F$ peut même être de dimension infinie, le théorème reste vrai tant que $E$ est de dimension finie.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Théorème du rang"],
                q: "Comment appelle-t-on $dim(Im(f))$ ?",
                options: [
                    { text: "La trace de $f$", isCorrect: false },
                    { text: "Le rang de $f$ (noté $rg(f)$)", isCorrect: true },
                    { text: "Le déterminant de $f$", isCorrect: false }
                ],
                explanation: "Le rang d'une application linéaire est défini comme la dimension de son image. La trace et le déterminant, eux, ne sont définis que pour des endomorphismes (matrices carrées), pas pour une application linéaire quelconque entre deux espaces différents.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Théorème du rang"],
                q: "Si $f : E \\to F$ est injective, que vaut $rg(f)$ ?",
                options: [
                    { text: "$dim(F)$", isCorrect: false },
                    { text: "$dim(E)$", isCorrect: true },
                    { text: "0", isCorrect: false }
                ],
                explanation: "Si $f$ est injective, $Ker(f) = \\{0\\}$, donc $dim(Ker(f)) = 0$. Le théorème du rang donne alors $rg(f) + 0 = dim(E)$, soit $rg(f) = dim(E)$. Ce n'est égal à $dim(F)$ que dans le cas particulier où $f$ est aussi surjective (donc bijective).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Isomorphismes"],
                q: "Si $E$ et $F$ sont de dimension finie et que $dim(E) = dim(F)$, que peut-on affirmer sur $f \\in \\mathcal{L}(E,F)$ ?",
                options: [
                    { text: "$f$ est obligatoirement bijective", isCorrect: false },
                    { text: "Les propositions \"$f$ est injective\", \"$f$ est surjective\" et \"$f$ est bijective\" sont strictement équivalentes", isCorrect: true }
                ],
                explanation: "C'est l'un des théorèmes les plus utiles. En dimensions égales, il suffit de prouver l'injectivité (Noyau nul) pour obtenir la bijection « gratuitement ». Attention, ce résultat porte sur l'ÉQUIVALENCE des trois propriétés pour une $f$ donnée, il ne dit absolument pas que TOUTE application linéaire entre espaces de même dimension est automatiquement bijective (l'application nulle en est un contre-exemple immédiat dès que $\\dim E \\ge 1$).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Isomorphismes"],
                q: "Soit $B=(e_1, \\dots, e_n)$ une base de $E$. $f$ est un isomorphisme de $E$ sur $F$ si et seulement si :",
                options: [
                    { text: "La famille $(f(e_1), \\dots, f(e_n))$ est une base de $F$", isCorrect: true },
                    { text: "La famille $(f(e_1), \\dots, f(e_n))$ est libre mais pas génératrice", isCorrect: false },
                    { text: "La famille $(f(e_1), \\dots, f(e_n))$ est génératrice de $F$", isCorrect: false }
                ],
                explanation: "Une application linéaire transporte une base sur une base si et seulement si elle est bijective. Génératrice seule correspondrait à la surjectivité de $f$, libre seule (sans être génératrice) correspondrait à une injection non surjective — aucune des deux options partielles ne caractérise l'isomorphisme complet.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Pièges de TD", "Noyau & Image"],
                q: "Soient $f, g \\in \\mathcal{L}(E)$. Si $g \\circ f = 0$, que peut-on en déduire ?",
                options: [
                    { text: "$Im(g) \\subset Ker(f)$", isCorrect: false },
                    { text: "$Im(f) \\subset Ker(g)$", isCorrect: true },
                    { text: "$f=0$ ou $g=0$", isCorrect: false }
                ],
                explanation: "Exercice classique 6.14. Si $g(f(x)) = 0$ pour tout $x$, cela signifie que chaque vecteur de la forme $f(x)$ (donc dans $Im(f)$) est envoyé sur 0 par $g$ (donc est dans $Ker(g)$). $g \\circ f = 0$ n'implique absolument pas que l'un des deux soit nul individuellement (prendre par exemple deux projecteurs sur des sous-espaces complémentaires).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Pièges de TD", "Rang", "Composition"],
                q: "Soient $f \\in \\mathcal{L}(E,F)$ et $g \\in \\mathcal{L}(F,G)$. Quel encadrement vérifie toujours $rg(g \\circ f)$ ?",
                options: [
                    { text: "$rg(g \\circ f) \\le \\min(rg(f), rg(g))$", isCorrect: true },
                    { text: "$rg(g \\circ f) = rg(f) \\times rg(g)$", isCorrect: false },
                    { text: "$rg(g \\circ f) \\ge \\max(rg(f), rg(g))$", isCorrect: false }
                ],
                explanation: "$Im(g\\circ f) = g(Im(f)) \\subset Im(g)$ donne $rg(g\\circ f) \\le rg(g)$. Et $g\\circ f$ restreint à $Im(f)$ ne peut pas avoir un rang supérieur à $\\dim(Im(f)) = rg(f)$, d'où $rg(g\\circ f) \\le rg(f)$. La composition ne peut donc jamais faire remonter le rang au-dessus du plus petit des deux.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },

            // --- BLOC 3 : PROJECTEURS ET SYMÉTRIES (Chap 6) ---
            {
                type: "qcm", tags: ["Projecteurs & Symétries"],
                q: "Quelle est la caractérisation algébrique d'un projecteur $p$ ?",
                options: [
                    { text: "$p \\circ p = Id_E$", isCorrect: false },
                    { text: "$p \\circ p = p$", isCorrect: true },
                    { text: "$p^2 = 0$", isCorrect: false }
                ],
                explanation: "L'idempotence ($p^2 = p$) définit un projecteur. Projeter deux fois a le même effet que projeter une seule fois. $p^2=Id$ caractérise une symétrie, $p^2=0$ caractérise un endomorphisme nilpotent d'indice 2.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Projecteurs & Symétries"],
                q: "Si $p$ est un projecteur, que peut-on affirmer sur $Ker(p)$ et $Im(p)$ ?",
                options: [
                    { text: "Ils sont orthogonaux", isCorrect: false },
                    { text: "Ils sont supplémentaires dans $E$ ($Ker(p) \\oplus Im(p) = E$)", isCorrect: true },
                    { text: "Ils sont en somme directe mais ne couvrent pas $E$", isCorrect: false }
                ],
                explanation: "Tout vecteur $x$ se décompose de manière unique en $x = p(x) + (x - p(x))$, où le premier terme est dans l'Image et le second dans le Noyau : la somme est bien directe ET couvre tout $E$. L'orthogonalité, elle, suppose une structure euclidienne (produit scalaire) qui n'est pas donnée par la seule idempotence.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Projecteurs & Symétries"],
                q: "Dans un projecteur $p$, comment caractérise-t-on l'Image $Im(p)$ ?",
                options: [
                    { text: "$Im(p) = \\{x \\in E \\mid p(x) = 0\\}$", isCorrect: false },
                    { text: "$Im(p) = \\{x \\in E \\mid p(x) = x\\}$", isCorrect: true }
                ],
                explanation: "L'image du projecteur correspond exactement à l'ensemble des vecteurs invariants. Si $y \\in Im(p)$, alors $y=p(x)$ pour un certain $x$, et $p(y)=p(p(x))=p(x)=y$ par idempotence. La première option décrit au contraire $Ker(p)$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Projecteurs & Symétries"],
                q: "Soient deux projecteurs $p_1$ et $p_2$ associés à deux sous-espaces supplémentaires $E_1$ et $E_2$. Que vaut $p_1 + p_2$ ?",
                options: [
                    { text: "$0_E$", isCorrect: false },
                    { text: "$Id_E$ (l'application identité)", isCorrect: true },
                    { text: "Un projecteur sur $E_1 \\cap E_2$", isCorrect: false }
                ],
                explanation: "Pour $x = x_1 + x_2$, on a $p_1(x) = x_1$ et $p_2(x) = x_2$. Donc $(p_1+p_2)(x) = x_1 + x_2 = x$. Puisque $E_1$ et $E_2$ sont supplémentaires, $E_1 \\cap E_2 = \\{0\\}$ : la dernière option n'a donc de sens que pour le sous-espace trivial.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Projecteurs & Symétries"],
                q: "Quelle est la caractérisation algébrique d'une symétrie $s$ ?",
                options: [
                    { text: "$s \\circ s = s$", isCorrect: false },
                    { text: "$s \\circ s = Id_E$ ($s^2 = Id_E$)", isCorrect: true },
                    { text: "$s^2 = -Id_E$", isCorrect: false }
                ],
                explanation: "Appliquer une symétrie deux fois de suite ramène le point à sa position de départ, d'où $s^2 = Id$. $s^2=s$ définirait un projecteur, et $s^2=-Id$ décrit plutôt une structure complexe (comme la multiplication par $i$), pas une symétrie vectorielle réelle.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Projecteurs & Symétries"],
                q: "Quel est le lien algébrique entre la symétrie $s$ par rapport à $E_1$ (direction $E_2$) et le projecteur $p_1$ sur $E_1$ (direction $E_2$) ?",
                options: [
                    { text: "$s = p_1 - Id_E$", isCorrect: false },
                    { text: "$s = 2p_1 - Id_E$", isCorrect: true }
                ],
                explanation: "Pour $x = x_1 + x_2$, $s(x) = x_1 - x_2$. Or $x_1 - x_2 = x_1 - (x - x_1) = 2x_1 - x = 2p_1(x) - x$, d'où $s = 2p_1 - Id_E$. Attention à ne pas oublier le facteur 2, piège fréquent.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Projecteurs & Symétries"],
                q: "Si un endomorphisme $f$ vérifie $f^2 = Id$, quels sont les espaces sur lesquels $f$ s'appuie pour réaliser sa symétrie ?",
                options: [
                    { text: "Symétrie par rapport à $Ker(f-Id)$ de direction $Ker(f+Id)$", isCorrect: true },
                    { text: "Symétrie par rapport à $Im(f)$ de direction $Ker(f)$", isCorrect: false }
                ],
                explanation: "Les vecteurs invariants ($f(x)=x$, donc $x \\in Ker(f-Id)$) forment l'axe de symétrie, et ceux qui sont inversés ($f(x)=-x$, donc $x \\in Ker(f+Id)$) forment la direction. La seconde option confond avec la caractérisation d'un projecteur, qui n'est pas de type $f^2=Id$ mais $f^2=f$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Pièges de TD", "Projecteurs & Symétries"],
                q: "Soient $p$ et $q$ deux projecteurs. À quelle condition $p+q$ est-il aussi un projecteur (Exercice 6.29) ?",
                options: [
                    { text: "Toujours", isCorrect: false },
                    { text: "Si et seulement si $p \\circ q = q \\circ p = 0$", isCorrect: true },
                    { text: "Si et seulement si $p$ et $q$ commutent ($pq = qp$)", isCorrect: false }
                ],
                explanation: "En développant $(p+q)^2 = p^2 + q^2 + pq + qp = p + q + pq + qp$. Pour que cela vaille $p+q$, il faut que $pq+qp=0$, ce qui, combiné à des considérations sur les images/noyaux, force $pq=qp=0$. La seule commutativité ($pq=qp$) ne suffit pas : elle donnerait $pq+qp=2pq$, qu'il faudrait encore annuler.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },

            // --- BLOC 4 : MATRICES D'APPLICATIONS LINÉAIRES (Chap 7) ---
            {
                type: "qcm", tags: ["Matrices d'applications"],
                q: "Comment construit-on la matrice $\\mathcal{M}_{C,\\mathcal{B}}(f)$ d'une application linéaire $f$ de $E$ (base $\\mathcal{B}=(e_1,..,e_p)$) dans $F$ (base $\\mathcal{C}$) ?",
                options: [
                    { text: "On met en lignes les vecteurs de la base $\\mathcal{B}$", isCorrect: false },
                    { text: "La $j$-ème colonne recense les coordonnées de l'image $f(e_j)$ dans la base d'arrivée $\\mathcal{C}$", isCorrect: true },
                    { text: "La $j$-ème ligne recense les coordonnées de l'image $f(e_j)$ dans la base d'arrivée $\\mathcal{C}$", isCorrect: false }
                ],
                explanation: "Les colonnes de la matrice sont littéralement les images des vecteurs de la base de départ, exprimées dans la base d'arrivée. Confondre lignes et colonnes est une erreur fréquente qui inverse complètement la convention de calcul $Y=AX$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Matrices d'applications"],
                q: "Si $A = \\mathcal{M}_{C,\\mathcal{B}}(f)$, $X$ le vecteur de coordonnées de $x$, et $Y$ celui de $f(x)$. Quelle est la relation matricielle fondamentale ?",
                options: [
                    { text: "$Y = AX$", isCorrect: true },
                    { text: "$Y = XA$", isCorrect: false },
                    { text: "$X = AY$", isCorrect: false }
                ],
                explanation: "Le vecteur d'arrivée est le produit de la matrice représentative par le vecteur de départ, avec $X$ à droite en colonne. $X=AY$ inverserait le sens de l'application (ce serait la relation pour $f^{-1}$, quand elle existe).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Matrices d'applications", "Dimensions"],
                q: "Si $E$ est de dimension $p$ et $F$ de dimension $n$. Quelle est la taille de la matrice $\\mathcal{M}_{C,\\mathcal{B}}(f)$ ?",
                options: [
                    { text: "$p$ lignes, $n$ colonnes ($p \\times n$)", isCorrect: false },
                    { text: "$n$ lignes, $p$ colonnes ($n \\times p$)", isCorrect: true }
                ],
                explanation: "Le nombre de colonnes ($p$) correspond au nombre de vecteurs de la base de départ. Le nombre de lignes ($n$) correspond à la dimension de l'arrivée : la matrice permet de transformer un vecteur-colonne de taille $p$ en un vecteur-colonne de taille $n$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Matrices d'applications"],
                q: "Que stipule le théorème fondamental (Thm 7.7) sur l'ensemble $\\mathcal{L}(E,F)$ et l'ensemble des matrices $\\mathcal{M}_{n,p}(\\mathbb{K})$ ?",
                options: [
                    { text: "Ce sont deux espaces de dimensions différentes", isCorrect: false },
                    { text: "L'application qui à $f$ associe sa matrice est un isomorphisme. Ils ont même dimension $n \\times p$", isCorrect: true }
                ],
                explanation: "Il y a une bijection linéaire parfaite entre les applications linéaires (concept abstrait) et les matrices (tableaux de calcul), une fois les bases fixées. Cela permet de faire tous les calculs (somme, composition) indifféremment sur les matrices ou sur les applications.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Matrices d'applications", "Composition"],
                q: "À quelle opération matricielle correspond la COMPOSITION d'applications linéaires ($g \\circ f$) ?",
                options: [
                    { text: "L'addition des matrices $M(g) + M(f)$", isCorrect: false },
                    { text: "Le produit matriciel $M(g) \\times M(f)$", isCorrect: true },
                    { text: "Le produit matriciel $M(f) \\times M(g)$", isCorrect: false }
                ],
                explanation: "La matrice de $g \\circ f$ est le produit de la matrice de $g$ par la matrice de $f$, DANS CET ORDRE : $M(g \\circ f) = M(g) \\times M(f)$. Inverser l'ordre du produit donnerait en général une matrice différente, puisque le produit matriciel n'est pas commutatif.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Matrices d'applications", "Rang"],
                q: "Quel est le lien entre le rang d'une application linéaire $rg(f)$ et le rang de sa matrice représentative $A$ ?",
                options: [
                    { text: "Ils n'ont aucun rapport", isCorrect: false },
                    { text: "Ils sont strictement égaux : $rg(f) = rg(A)$", isCorrect: true }
                ],
                explanation: "Le rang de la matrice (dimension de l'espace engendré par les colonnes) est par définition la dimension de l'image de $f$. Ce résultat est indépendant du choix des bases : le rang de $f$ est un invariant, il ne dépend pas de la représentation matricielle choisie.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Matrices d'applications", "Isomorphismes"],
                q: "Un endomorphisme $f$ est une bijection si et seulement si sa matrice $A$ vérifie :",
                options: [
                    { text: "$A$ est symétrique", isCorrect: false },
                    { text: "$A$ est inversible ($det(A) \\neq 0$)", isCorrect: true },
                    { text: "$A$ est diagonale", isCorrect: false }
                ],
                explanation: "L'isomorphisme dans $\\mathcal{L}(E)$ correspond parfaitement à l'inversibilité dans $\\mathcal{M}_n(\\mathbb{K})$. La symétrie et le caractère diagonal sont des propriétés de forme de la matrice qui n'ont aucun rapport direct avec l'inversibilité (une matrice diagonale avec un 0 sur la diagonale n'est pas inversible, une matrice symétrique peut ne pas être inversible non plus).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Pièges de TD", "Noyau & Image"],
                q: "Si $u$ est un endomorphisme de $\\mathbb{R}^n$ vérifiant $u^n = 0$ et $u^{n-1} \\neq 0$. Que peut-on dire de la famille $(x, u(x), \\dots, u^{n-1}(x))$ pour $x$ bien choisi ?",
                options: [
                    { text: "C'est une famille liée", isCorrect: false },
                    { text: "C'est une base de $\\mathbb{R}^n$", isCorrect: true }
                ],
                explanation: "C'est le classique du bloc de Jordan nilpotente (Ex 7.5). Cette famille libre de $n$ éléments dans un espace de dimension $n$ forme automatiquement une base. Le choix de $x$ n'est pas arbitraire : il faut prendre $x \\notin Ker(u^{n-1})$ pour que la construction fonctionne.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Pièges de TD", "Matrices d'applications"],
                q: "Soit $A \\in \\mathcal{M}_n(\\mathbb{K})$ nilpotente ($A^k = 0$ pour un certain $k$). Que peut-on dire de $Id_n - A$ ?",
                options: [
                    { text: "Elle n'est jamais inversible", isCorrect: false },
                    { text: "Elle est toujours inversible, d'inverse $Id + A + A^2 + \\dots + A^{k-1}$", isCorrect: true }
                ],
                explanation: "En développant $(Id - A)(Id + A + \\dots + A^{k-1}) = Id - A^k = Id$ (télescopage), on obtient directement l'inverse explicite. C'est une astuce très utile pour éviter un calcul de déterminant.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },

            // --- BLOC 5 : CHANGEMENT DE BASE ET MATRICES SEMBLABLES (Chap 7) ---
            {
                type: "qcm", tags: ["Changement de base"],
                q: "Comment est construite la matrice de passage $P_{\\mathcal{B} \\to \\mathcal{C}}$ ?",
                options: [
                    { text: "La $j$-ème colonne recense les coordonnées du vecteur $u_j$ de la NOUVELLE base $\\mathcal{C}$ exprimées dans l'ANCIENNE base $\\mathcal{B}$", isCorrect: true },
                    { text: "La $j$-ème colonne recense les coordonnées du vecteur $e_j$ de l'ANCIENNE base $\\mathcal{B}$ exprimées dans la NOUVELLE base $\\mathcal{C}$", isCorrect: false }
                ],
                explanation: "Attention à ce piège majeur. La matrice de passage donne les nouveaux vecteurs exprimés avec les anciens — c'est-à-dire l'inverse de ce qu'on pourrait naïvement penser en lisant le nom « $\\mathcal{B} \\to \\mathcal{C}$ ».",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Changement de base"],
                q: "La matrice de passage $P_{\\mathcal{B} \\to \\mathcal{C}}$ correspond à la matrice d'une application linéaire particulière. Laquelle ?",
                options: [
                    { text: "La matrice de l'identité $Id_E$ en prenant $\\mathcal{C}$ au départ et $\\mathcal{B}$ à l'arrivée", isCorrect: true },
                    { text: "La matrice de l'identité en prenant $\\mathcal{B}$ au départ et $\\mathcal{C}$ à l'arrivée", isCorrect: false }
                ],
                explanation: "$P_{\\mathcal{B} \\to \\mathcal{C}} = \\mathcal{M}_{\\mathcal{B}, \\mathcal{C}}[Id_E]$. On prend les vecteurs de $\\mathcal{C}$ et on écrit leurs coordonnées dans $\\mathcal{B}$ : c'est cohérent avec le fait que $P$ est toujours inversible (l'identité est toujours bijective), d'inverse $P_{\\mathcal{C} \\to \\mathcal{B}}$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Changement de base"],
                q: "Si $X$ sont les coordonnées d'un vecteur dans $\\mathcal{B}$ et $X'$ ses coordonnées dans $\\mathcal{C}$. Quelle est la relation avec $P = P_{\\mathcal{B} \\to \\mathcal{C}}$ ?",
                options: [
                    { text: "$X' = P X$", isCorrect: false },
                    { text: "$X = P X'$", isCorrect: true }
                ],
                explanation: "Contre-intuitif mais fondamental : pour obtenir l'ancienne colonne $X$, on multiplie la matrice de passage par la NOUVELLE colonne $X'$. Pour l'opération inverse (obtenir $X'$ à partir de $X$), il faut utiliser $P^{-1}$, pas $P$ directement.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Changement de base", "Matrices d'applications"],
                q: "Formule de changement de base pour un ENDOMORPHISME : si $A$ est la matrice dans $\\mathcal{B}$, $A'$ la matrice dans $\\mathcal{B}'$, et $P = P_{\\mathcal{B} \\to \\mathcal{B}'}$. Que vaut $A'$ ?",
                options: [
                    { text: "$A' = P^{-1} A P$", isCorrect: true },
                    { text: "$A' = P A P^{-1}$", isCorrect: false },
                    { text: "$A' = P^T A P$", isCorrect: false }
                ],
                explanation: "C'est la définition de la similitude matricielle. On part des nouvelles coordonnées ($P$ les convertit en anciennes), on applique l'endomorphisme ($A$), puis on revient dans la nouvelle base ($P^{-1}$). $P^T A P$ est la formule de changement de base pour une forme QUADRATIQUE ou bilinéaire, pas pour un endomorphisme — piège classique de confusion entre les deux contextes.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Matrices semblables"],
                q: "Que signifie concrètement que deux matrices carrées $A$ et $A'$ sont « semblables » ?",
                options: [
                    { text: "Elles ont les mêmes coefficients à une constante près", isCorrect: false },
                    { text: "Elles représentent exactement le même endomorphisme, mais exprimé dans des bases différentes", isCorrect: true },
                    { text: "Elles ont le même déterminant", isCorrect: false }
                ],
                explanation: "Deux matrices semblables racontent la même histoire géométrique de deux points de vue (bases) différents. Avoir le même déterminant est une CONSÉQUENCE nécessaire de la similitude, mais ce n'est pas suffisant : deux matrices peuvent avoir le même déterminant sans être semblables (par exemple $I_2$ et $\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Matrices semblables", "Trace"],
                q: "Que peut-on affirmer concernant deux matrices semblables $A$ et $B$ ?",
                options: [
                    { text: "Elles ont obligatoirement le même déterminant, la même trace et le même rang", isCorrect: true },
                    { text: "Elles peuvent avoir des traces différentes", isCorrect: false }
                ],
                explanation: "La trace, le rang et le déterminant sont des invariants de similitude. Si on change de base, ces propriétés fondamentales de l'endomorphisme ne bougent pas — c'est d'ailleurs le moyen le plus rapide de prouver que deux matrices NE SONT PAS semblables : il suffit de trouver un de ces invariants qui diffère.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Changement de base", "Matrices d'applications"],
                q: "Formule de changement de base pour une APPLICATION LINÉAIRE $f: E \\to F$. Si on change les bases de départ (avec $P$) et d'arrivée (avec $Q$), que vaut $A'$ ?",
                options: [
                    { text: "$A' = P^{-1} A Q$", isCorrect: false },
                    { text: "$A' = Q^{-1} A P$", isCorrect: true }
                ],
                explanation: "On convertit les entrées avec $P$ (base de départ $E$), on applique $A$, puis on convertit les sorties avec l'inverse de $Q$ (base d'arrivée $F$). Contrairement au cas d'un endomorphisme, ici $P$ et $Q$ sont a priori deux matrices différentes puisque $E$ et $F$ peuvent être des espaces distincts.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Matrices équivalentes", "Pièges"],
                q: "Deux matrices $A, B \\in \\mathcal{M}_{n,p}(\\mathbb{K})$ (pas nécessairement carrées) vérifiant $B = Q^{-1} A P$ pour $P, Q$ inversibles sont dites « équivalentes ». Quelle est la différence essentielle avec la similitude ?",
                options: [
                    { text: "Aucune, ce sont deux noms pour la même notion", isCorrect: false },
                    { text: "L'équivalence autorise deux matrices de passage différentes ($P \\neq Q$) et concerne des matrices pas forcément carrées ; la similitude impose $P=Q$ et des matrices carrées", isCorrect: true }
                ],
                explanation: "La similitude est un cas particulier (et bien plus restrictif) de l'équivalence : elle correspond au changement de base d'un même endomorphisme ($E=F$, même base au départ et à l'arrivée), alors que l'équivalence correspond au changement de base d'une application linéaire quelconque entre deux espaces éventuellement différents. Deux matrices équivalentes ne sont donc pas nécessairement semblables.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Pièges de TD", "Matrices semblables"],
                q: "Les matrices $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$ et $H = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$ ont même trace (4) et même rang (2). Sont-elles semblables ?",
                options: [
                    { text: "Oui, car leurs invariants sont égaux", isCorrect: false },
                    { text: "Non, car $H = 2I_2$, et pour tout $P$ inversible, $P^{-1} (2I_2) P = 2I_2 \\neq A$", isCorrect: true }
                ],
                explanation: "Avoir les mêmes invariants est nécessaire, mais pas toujours suffisant. L'identité (ou une matrice scalaire) n'est semblable qu'à elle-même, car conjuguer une matrice scalaire par n'importe quelle matrice inversible la laisse inchangée.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },

            // --- BLOC 6 : EXERCICES ET PIÈGES AVANCÉS (TD) ---
            {
                type: "qcm", tags: ["Pièges de TD", "Rang"],
                q: "Soient $f$ et $g$ deux endomorphismes de $E$. Quelle est la relation vérifiée par le rang de leur somme $rg(f+g)$ (Exercice 6.19) ?",
                options: [
                    { text: "$rg(f+g) = rg(f) + rg(g)$", isCorrect: false },
                    { text: "$rg(f+g) \\le rg(f) + rg(g)$", isCorrect: true },
                    { text: "$rg(f+g) \\ge rg(f) + rg(g)$", isCorrect: false }
                ],
                explanation: "L'image de la somme est incluse dans la somme des images : $Im(f+g) \\subset Im(f) + Im(g)$. Donc la dimension (le rang) suit cette inégalité. L'égalité n'a lieu que dans des cas particuliers, par exemple quand $Im(f)$ et $Im(g)$ sont en somme directe.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Pièges de TD", "Matrices d'applications"],
                q: "Soit $A$ une matrice $n \\times n$ telle que $A^2 = 0$. Que peut-on dire de son rang $r$ (Exercice 7.6) ?",
                options: [
                    { text: "$r = n$", isCorrect: false },
                    { text: "$r \\le \\frac{n}{2}$", isCorrect: true },
                    { text: "$r = 0$ obligatoirement", isCorrect: false }
                ],
                explanation: "Puisque $A^2=0$, on a $Im(A) \\subset Ker(A)$. Le théorème du rang donne $dim(Im) + dim(Ker) = n$, donc $r + dim(Ker) = n$. Comme $r \\le dim(Ker)$, on a $2r \\le n$. Notez que $r=0$ n'est qu'un cas particulier (la matrice nulle) : $A^2=0$ n'implique pas $A=0$, il suffit de penser à $A = \\begin{pmatrix} 0&1\\\\0&0 \\end{pmatrix}$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Pièges de TD", "Polynômes"],
                q: "Soit $f : \\mathbb{R}_3[X] \\to \\mathbb{R}^2$ définie par $f(P) = (P(2), P'(2))$. Quelle est la dimension de la matrice de $f$ ?",
                options: [
                    { text: "$2 \\times 3$", isCorrect: false },
                    { text: "$2 \\times 4$", isCorrect: true },
                    { text: "$4 \\times 2$", isCorrect: false }
                ],
                explanation: "L'espace de départ $\\mathbb{R}_3[X]$ a pour base $(1, X, X^2, X^3)$, donc dimension 4. L'espace d'arrivée $\\mathbb{R}^2$ a dimension 2. La matrice a 2 lignes et 4 colonnes (piège classique d'oublier le +1 dans la dimension de $\\mathbb{R}_3[X]$, ou d'inverser lignes et colonnes).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Trace", "Projecteurs & Symétries"],
                q: "Soit $p$ un projecteur sur $E$. Quel lien fondamental existe-t-il entre sa trace et son rang (Exercice 7.19) ?",
                options: [
                    { text: "$Tr(p) = rg(p)$", isCorrect: true },
                    { text: "$Tr(p) = 0$", isCorrect: false },
                    { text: "$Tr(p) = 1$", isCorrect: false }
                ],
                explanation: "Dans une base adaptée à $Ker(p) \\oplus Im(p)$, la matrice de $p$ est diagonale avec des 1 (autant que la dimension de $Im(p)$) et des 0. La somme des 1 donne donc $dim(Im(p)) = rg(p)$. Ce résultat n'est valable que pour les PROJECTEURS (idempotents) — il est faux pour un endomorphisme quelconque.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Trace", "Composition", "Pièges"],
                q: "Soient $f \\in \\mathcal{L}(E,F)$ et $g \\in \\mathcal{L}(F,E)$ deux applications linéaires entre espaces de dimension finie. Que peut-on dire de $Tr(f \\circ g)$ et $Tr(g \\circ f)$ ?",
                options: [
                    { text: "Elles sont toujours égales : $Tr(f\\circ g) = Tr(g \\circ f)$", isCorrect: true },
                    { text: "Elles sont égales seulement si $E=F$", isCorrect: false },
                    { text: "Aucun lien en général", isCorrect: false }
                ],
                explanation: "C'est la propriété de trace cyclique $Tr(AB) = Tr(BA)$, valable pour toute matrice $A$ de taille $n\\times p$ et $B$ de taille $p \\times n$ (même si $A$ et $B$ elles-mêmes ne sont pas carrées, leurs deux produits $AB$ et $BA$ le sont). Ce résultat ne nécessite donc PAS que $E=F$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            }
        ]
    }
});

