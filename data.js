const defaultData = {
    // ============================================================
//
   "Algèbre 2 : Chapitres 6 & 7 (Applications Linéaires et Matrices)": {
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
    },
   "Algèbre 3 : Chapitre 1 (Réduction des endomorphismes)": {
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            // --- 1.1 SOUS-ESPACES STABLES ---
            {
                type: "qcm", tags: ["Sous-espaces stables"],
                q: "Quelle est la définition d'un sous-espace vectoriel $A$ stable par un endomorphisme $u$ ?",
                options: [
                    { text: "$\\forall x \\in E, x \\in A \\Rightarrow u(x) \\in A$", isCorrect: true },
                    { text: "$\\forall x \\in A, u(x) = x$", isCorrect: false },
                    { text: "$u(A) = E$", isCorrect: false },
                    { text: "$u(A) = A$ exactement", isCorrect: false }
                ],
                explanation: "La stabilité (ou invariance) signifie que l'image de $A$ par $u$ est entièrement incluse dans $A$ ($u(A) \\subseteq A$). L'inclusion n'a pas besoin d'être une égalité : $u$ peut très bien « écraser » $A$ sur un sous-espace strictement plus petit tout en restant stable.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Sous-espaces stables", "Commutation"],
                q: "Soient $u$ et $v$ deux endomorphismes qui commutent ($u \\circ v = v \\circ u$). Que peut-on affirmer sur le noyau et l'image de $u$ ?",
                options: [
                    { text: "Ils sont orthogonaux à $v$", isCorrect: false },
                    { text: "Ils sont stables par l'endomorphisme $v$", isCorrect: true },
                    { text: "Ils sont de dimension identique", isCorrect: false }
                ],
                explanation: "Si $u$ et $v$ commutent, $v$ laisse stable l'image de $u$, le noyau de $u$, et plus généralement tout sous-espace propre $\\ker(u - \\lambda id_E)$. L'orthogonalité suppose une structure euclidienne absente ici, et rien n'impose que $Ker(u)$ et $Im(u)$ aient la même dimension (c'est même rarement le cas hors bijection).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Sous-espaces stables", "Représentation matricielle"],
                q: "Si $E = A \\oplus B$ et que le sous-espace $A$ est stable par $u$, quelle forme prend la matrice de $u$ dans une base adaptée à cette somme directe ?",
                options: [
                    { text: "Diagonale par blocs", isCorrect: false },
                    { text: "Triangulaire supérieure par blocs : $\\begin{pmatrix} M_{11} & M_{12} \\\\ 0 & M_{22} \\end{pmatrix}$", isCorrect: true },
                    { text: "Totalement nulle hors de la diagonale", isCorrect: false }
                ],
                explanation: "Puisque $A$ est stable, les images des vecteurs de la base de $A$ s'écrivent uniquement avec les vecteurs de $A$, générant un bloc de zéros en bas à gauche. Pour avoir une matrice diagonale par blocs, il faudrait que $B$ soit AUSSI stable par $u$ — ce n'est pas garanti par la seule hypothèse sur $A$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },

            // --- 1.2 ELEMENTS PROPRES ---
            {
                type: "qcm", tags: ["Éléments propres"],
                q: "Un vecteur $x$ de $E$ est un vecteur propre de $u$ associé à la valeur propre $\\lambda$ si et seulement si :",
                options: [
                    { text: "$u(x) = \\lambda x$ (avec $x$ pouvant être le vecteur nul)", isCorrect: false },
                    { text: "$u(x) = \\lambda x$ et $x \\neq 0_E$", isCorrect: true },
                    { text: "$u(x) = 0_E$", isCorrect: false }
                ],
                explanation: "Un vecteur propre doit ABSOLUMENT être non nul par définition (sinon tout scalaire $\\lambda$ conviendrait trivialement, ce qui viderait la notion de son sens). En revanche, une valeur propre $\\lambda$ a tout à fait le droit de valoir zéro.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Éléments propres"],
                q: "Le sous-espace propre $E_\\lambda$ associé à la valeur propre $\\lambda$ correspond à :",
                options: [
                    { text: "$\\text{Im}(u - \\lambda id_E)$", isCorrect: false },
                    { text: "$\\ker(u - \\lambda id_E)$", isCorrect: true },
                    { text: "$\\ker(u) - \\lambda \\cdot E$", isCorrect: false }
                ],
                explanation: "$x$ est un vecteur propre pour $\\lambda$ ssi $u(x) = \\lambda x \\iff (u - \\lambda id_E)(x) = 0_E$. Le sous-espace propre est donc le noyau de $u - \\lambda id_E$, et non son image (qui donnerait plutôt une idée de la « portion régulière » de $u-\\lambda id_E$).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Éléments propres"],
                q: "Soient $\\lambda_1, \\dots, \\lambda_k$ des valeurs propres deux à deux distinctes de $u$. Que peut-on dire de leurs sous-espaces propres associés $E_{\\lambda_i}$ ?",
                options: [
                    { text: "Ils sont de même dimension", isCorrect: false },
                    { text: "Ils sont en somme directe", isCorrect: true },
                    { text: "Leur union forme $E$", isCorrect: false }
                ],
                explanation: "Les sous-espaces propres associés à des valeurs propres distinctes sont toujours en somme directe. Une somme de vecteurs propres de valeurs propres différentes ne peut être nulle que si tous les vecteurs sont nuls. Rien ne garantit qu'ils aient la même dimension, ni que leur somme couvre tout $E$ (c'est justement ce défaut de recouvrement qui caractérise la non-diagonalisabilité).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Éléments propres", "Exemples classiques"],
                q: "Quel est le spectre (l'ensemble des valeurs propres) d'un endomorphisme nilpotent $u$ ?",
                options: [
                    { text: "$\\text{Sp}(u) = \\{1\\}$", isCorrect: false },
                    { text: "$\\text{Sp}(u) = \\emptyset$", isCorrect: false },
                    { text: "$\\text{Sp}(u) = \\{0\\}$", isCorrect: true }
                ],
                explanation: "Si $u^k = 0$, et $u(x) = \\lambda x$ avec $x \\neq 0$, alors $u^k(x) = \\lambda^k x = 0$. Puisque $x \\neq 0$, on a obligatoirement $\\lambda^k = 0$, donc $\\lambda = 0$. Le spectre n'est jamais vide : en dimension finie, le polynôme caractéristique d'un endomorphisme nilpotent est toujours $X^n$, donc $0$ y est bien racine (et donc valeur propre).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Éléments propres", "Exemples classiques"],
                q: "Soit $p$ une projection vectorielle stricte ($p \\neq 0_E, p \\neq id_E$). Quel est son spectre ?",
                options: [
                    { text: "$\\text{Sp}(p) = \\{-1, 1\\}$", isCorrect: false },
                    { text: "$\\text{Sp}(p) = \\{0, 1\\}$", isCorrect: true },
                    { text: "$\\text{Sp}(p) = \\{0\\}$", isCorrect: false }
                ],
                explanation: "Les vecteurs de l'image sont invariants ($p(x)=x \\Rightarrow \\lambda=1$) et ceux du noyau sont annulés ($p(x)=0 \\Rightarrow \\lambda=0$). $\\{-1,1\\}$ serait le spectre d'une SYMÉTRIE, pas d'un projecteur — attention à ne pas confondre les deux notions.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Éléments propres", "Corps de base"],
                q: "Vrai ou faux : Le spectre de la matrice d'une rotation d'angle $\\theta \\notin \\{0, \\pi\\}$ dans $\\mathbb{R}^2$ est vide si l'on travaille sur le corps $\\mathbb{R}$.",
                options: [
                    { text: "Vrai", isCorrect: true },
                    { text: "Faux", isCorrect: false }
                ],
                explanation: "Vrai. Le polynôme caractéristique est $X^2 - 2\\cos(\\theta)X + 1$, de discriminant $-4\\sin^2(\\theta) < 0$. Sur $\\mathbb{R}$, il n'y a pas de valeurs propres. Sur $\\mathbb{C}$, le spectre est $\\{e^{i\\theta}, e^{-i\\theta}\\}$ : le corps de base change fondamentalement l'existence même de valeurs propres.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },

            // --- 1.3 POLYNOME CARACTERISTIQUE ---
            {
                type: "qcm", tags: ["Polynôme caractéristique"],
                q: "Quelle est la définition mathématique du polynôme caractéristique $\\chi_u(X)$ ?",
                options: [
                    { text: "$\\det(u - X id_E)$", isCorrect: false },
                    { text: "$\\det(X id_E - u)$", isCorrect: true }
                ],
                explanation: "On utilise $\\det(X id_E - u)$ pour s'assurer que le polynôme caractéristique est toujours UNITAIRE (le coefficient de son terme de plus haut degré $X^n$ vaut 1). $\\det(u - X id_E)$ ne diffère que d'un facteur $(-1)^n$, mais cette convention gâche l'unitarité en dimension impaire.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Polynôme caractéristique"],
                q: "Si $\\chi_M(X) = X^n - tr(M)X^{n-1} + \\dots + c_0$. Que vaut le coefficient constant $c_0$ ?",
                options: [
                    { text: "$\\det(M)$", isCorrect: false },
                    { text: "$(-1)^n \\det(M)$", isCorrect: true },
                    { text: "$\\det(-M)$", isCorrect: true },
                    { text: "$-\\det(M)$ dans tous les cas", isCorrect: false }
                ],
                explanation: "Le terme de degré zéro correspond à la valeur du polynôme en $X=0$. $\\chi_M(0) = \\det(0 \\cdot I_n - M) = \\det(-M) = (-1)^n \\det(M)$. Ces deux écritures sont rigoureusement équivalentes. Le signe dépend donc de la parité de $n$ : $c_0 = -\\det(M)$ uniquement quand $n$ est impair, pas « dans tous les cas ».",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Polynôme caractéristique", "Similitude"],
                q: "Si deux matrices $A$ et $B$ sont semblables, que peut-on affirmer sur leurs polynômes caractéristiques ?",
                options: [
                    { text: "Ils sont égaux : $\\chi_A = \\chi_B$", isCorrect: true },
                    { text: "Ils sont opposés", isCorrect: false }
                ],
                explanation: "Si $B = P^{-1}AP$, alors $\\det(X I_n - B) = \\det(P^{-1}(X I_n - A)P) = \\det(X I_n - A)$. Deux matrices semblables ont le même polynôme caractéristique, jamais opposé (un polynôme caractéristique est toujours unitaire, son opposé ne l'est plus).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Polynôme caractéristique", "Pièges"],
                q: "Vrai ou Faux : Deux matrices ayant le même polynôme caractéristique sont obligatoirement semblables.",
                options: [
                    { text: "Vrai", isCorrect: false },
                    { text: "Faux", isCorrect: true }
                ],
                explanation: "Faux. Contre-exemple classique : l'identité $I_2$ et la matrice unipotente $\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$. Elles ont toutes deux $\\chi(X) = (X-1)^2$, mais ne sont pas semblables (la première est diagonalisable, pas la seconde — la similitude conserverait la diagonalisabilité).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Polynôme caractéristique", "Méthode de Le Verrier"],
                q: "Quel est l'objectif de la méthode de Le Verrier ?",
                options: [
                    { text: "Calculer les coefficients du polynôme caractéristique de manière récursive (sans déterminant abstrait) et obtenir l'inverse de la matrice si elle est inversible", isCorrect: true },
                    { text: "Résoudre des systèmes différentiels", isCorrect: false }
                ],
                explanation: "La méthode de Le Verrier construit une suite de matrices $M_k$ et utilise leurs traces pour déterminer les coefficients du polynôme caractéristique, permettant d'esquiver le calcul d'un déterminant polynomial complexe. Elle n'a pas vocation directe à résoudre des équations différentielles, même si le polynôme obtenu peut ensuite servir à d'autres fins.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },

            // --- 1.4 DIAGONALISATION ---
            {
                type: "qcm", tags: ["Diagonalisation", "Inégalités de dimension"],
                q: "Soit $m_\\lambda$ l'ordre de multiplicité algébrique d'une valeur propre $\\lambda$. Quelle inégalité vérifie la dimension de son sous-espace propre $E_\\lambda$ ?",
                options: [
                    { text: "$1 \\le \\dim(E_\\lambda) \\le m_\\lambda$", isCorrect: true },
                    { text: "$\\dim(E_\\lambda) = m_\\lambda$ toujours", isCorrect: false },
                    { text: "$m_\\lambda \\le \\dim(E_\\lambda) \\le n$", isCorrect: false }
                ],
                explanation: "La dimension géométrique (dimension de $E_\\lambda$) est toujours supérieure ou égale à 1 (puisqu'il y a au moins un vecteur propre) et obligatoirement majorée par la multiplicité algébrique de la racine dans le polynôme caractéristique. L'égalité systématique n'a lieu que dans le cas diagonalisable — ce n'est pas une identité générale.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Diagonalisation", "Théorème fondamental"],
                q: "Quelle est la condition nécessaire et suffisante (CNS) pour qu'un endomorphisme $u$ soit diagonalisable ?",
                options: [
                    { text: "Son polynôme caractéristique doit être scindé", isCorrect: false },
                    { text: "Son polynôme caractéristique doit être scindé ET pour chaque valeur propre, la dimension du sous-espace propre doit être égale à sa multiplicité algébrique", isCorrect: true },
                    { text: "Son polynôme caractéristique doit être scindé à racines simples", isCorrect: false }
                ],
                explanation: "Un polynôme scindé ne suffit pas (ex : bloc de Jordan $\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$). Il faut impérativement que $dim(E_\\lambda) = m_\\lambda$ pour avoir assez de vecteurs propres pour former une base. « Scindé à racines simples » est une condition SUFFISANTE mais bien plus restrictive que nécessaire : une matrice avec des valeurs propres multiples peut très bien être diagonalisable (par exemple $I_n$).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Diagonalisation", "Conditions suffisantes"],
                q: "Si un endomorphisme en dimension $n$ possède $n$ valeurs propres DISTINCTES, que peut-on affirmer ?",
                options: [
                    { text: "Il n'est pas diagonalisable", isCorrect: false },
                    { text: "Il est diagonalisable, et ses sous-espaces propres sont des droites vectorielles", isCorrect: true }
                ],
                explanation: "C'est une condition suffisante forte (mais pas nécessaire : voir $I_n$). S'il y a $n$ racines distinctes, le polynôme est scindé à racines simples. Chaque multiplicité vaut 1, et la dimension géométrique valant au moins 1, on a l'égalité partout — donc chaque $E_{\\lambda_i}$ est de dimension exactement 1.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Diagonalisation", "Codiagonalisation"],
                q: "Deux endomorphismes diagonalisables $u$ et $v$ sont co-diagonalisables (diagonalisables dans la même base) SI ET SEULEMENT SI :",
                options: [
                    { text: "Ils ont le même polynôme caractéristique", isCorrect: false },
                    { text: "Ils commutent entre eux ($u \\circ v = v \\circ u$)", isCorrect: true }
                ],
                explanation: "C'est un lemme fondamental (Lemme 1.35). La commutation est la clé pour pouvoir trouver une base commune de vecteurs propres. Avoir le même polynôme caractéristique n'a même rien à voir : deux endomorphismes très différents peuvent partager $\\chi$ sans commuter (ni être co-diagonalisables).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },

            // --- 1.5 TRIGONALISATION ---
            {
                type: "qcm", tags: ["Trigonalisation"],
                q: "Quelle est la condition nécessaire et suffisante pour qu'un endomorphisme soit trigonalisable ?",
                options: [
                    { text: "Son polynôme caractéristique doit posséder des racines simples", isCorrect: false },
                    { text: "Son polynôme caractéristique doit être scindé (factorisable en produits de degré 1)", isCorrect: true }
                ],
                explanation: "Si le polynôme caractéristique peut s'écrire sous la forme $\\prod (X - \\lambda_i)^{m_i}$, alors il existe une base où la matrice est triangulaire supérieure (Thm 1.38). Aucune exigence de racines simples : au contraire, la trigonalisation gère justement le cas des racines multiples, là où la diagonalisation échoue parfois.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Trigonalisation", "Corps complexes"],
                q: "Vrai ou Faux : Tout endomorphisme défini sur un $\\mathbb{C}$-espace vectoriel est obligatoirement trigonalisable.",
                options: [
                    { text: "Vrai", isCorrect: true },
                    { text: "Faux", isCorrect: false }
                ],
                explanation: "Vrai. Le théorème de d'Alembert-Gauss garantit que tout polynôme sur $\\mathbb{C}$ est scindé. Donc la CNS de trigonalisabilité est toujours vérifiée sur les complexes — ce n'est en revanche PAS vrai sur $\\mathbb{R}$ (voir l'exemple de la rotation plus haut).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },

            // --- 1.6 POLYNOMES ANNULATEURS ET CAYLEY-HAMILTON ---
            {
                type: "qcm", tags: ["Polynômes annulateurs"],
                q: "Si $P$ est un polynôme annulateur d'un endomorphisme $u$ ($P(u)=0$), que peut-on dire des racines de $P$ ?",
                options: [
                    { text: "Toute valeur propre de $u$ est obligatoirement une racine de $P$ : $\\text{Sp}(u) \\subset \\text{Racines}(P)$", isCorrect: true },
                    { text: "Toute racine de $P$ est obligatoirement une valeur propre de $u$", isCorrect: false }
                ],
                explanation: "Si $u(x) = \\lambda x$, alors $P(u)(x) = P(\\lambda)x$. Comme $P(u)=0$ et $x \\neq 0$, alors $P(\\lambda)=0$. Attention à la réciproque : un polynôme annulateur peut avoir des racines « inutiles » qui ne sont pas valeurs propres (c'est justement ce qui distingue un annulateur quelconque du polynôme minimal).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Polynômes annulateurs", "Cayley-Hamilton"],
                q: "Que stipule le Théorème de Cayley-Hamilton (Thm 1.48) ?",
                options: [
                    { text: "Le polynôme caractéristique est égal au polynôme minimal", isCorrect: false },
                    { text: "Le polynôme caractéristique d'un endomorphisme $u$ est un polynôme annulateur de $u$ : $\\chi_u(u) = 0$", isCorrect: true }
                ],
                explanation: "Cayley-Hamilton affirme que si l'on évalue le polynôme caractéristique d'une matrice $M$ en remplaçant la variable $X$ par la matrice $M$ elle-même, on obtient la matrice nulle. Le polynôme caractéristique et le polynôme minimal COÏNCIDENT parfois, mais ce n'est pas une règle générale : le minimal divise seulement le caractéristique.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Polynôme minimal"],
                q: "Comment définit-on le « polynôme minimal » $\\mu_u$ d'un endomorphisme $u$ ?",
                options: [
                    { text: "Le polynôme annulateur unitaire de plus petit degré", isCorrect: true },
                    { text: "Le polynôme dérivé du polynôme caractéristique", isCorrect: false }
                ],
                explanation: "C'est l'unique polynôme unitaire engendrant l'idéal des polynômes annulateurs. Il divise TOUS les autres polynômes annulateurs de $u$ (y compris $\\chi_u$). Il n'a aucun rapport avec une dérivation formelle du polynôme caractéristique.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Polynôme minimal", "Valeurs propres"],
                q: "Quelle relation stricte lie les racines du polynôme minimal $\\mu_u$ et les valeurs propres de $u$ ?",
                options: [
                    { text: "Les racines de $\\mu_u$ sont EXACTEMENT les valeurs propres de $u$", isCorrect: true },
                    { text: "Certaines racines de $\\mu_u$ ne sont pas des valeurs propres", isCorrect: false }
                ],
                explanation: "Contrairement à un polynôme annulateur quelconque qui peut avoir des racines superflues, les racines du polynôme minimal coïncident strictement avec le spectre de l'endomorphisme (Prop 1.53). C'est précisément ce qui distingue le polynôme minimal des autres annulateurs.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Polynôme minimal", "Diagonalisation"],
                q: "D'après le Théorème 1.57, un endomorphisme est DIAGONALISABLE si et seulement si son polynôme minimal est :",
                options: [
                    { text: "Scindé", isCorrect: false },
                    { text: "Scindé à racines simples", isCorrect: true },
                    { text: "De degré $n$", isCorrect: false }
                ],
                explanation: "C'est la caractérisation ultime de la diagonalisabilité : $\\mu_u$ doit être factorisable sous la forme $\\prod (X - \\lambda_i)$ sans aucune puissance supérieure à 1. « Scindé » seul (sans racines simples) ne suffit pas — c'est le même piège que pour le polynôme caractéristique. Le degré de $\\mu_u$ peut d'ailleurs être bien inférieur à $n$ (voir l'exemple de l'homothétie).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Polynôme minimal", "Exemples classiques"],
                q: "Quel est le polynôme minimal d'une symétrie vectorielle stricte ($s \\neq id, s \\neq -id$) ?",
                options: [
                    { text: "$X^2 - 1 = (X-1)(X+1)$", isCorrect: true },
                    { text: "$X(X-1)$", isCorrect: false },
                    { text: "$(X-1)^2$", isCorrect: false }
                ],
                explanation: "Une symétrie vérifie $s^2 = id$, donc $X^2-1$ est un polynôme annulateur scindé à racines simples (les valeurs propres sont 1 et -1). Puisque $s$ n'est pas triviale, c'est son polynôme minimal. $X(X-1)$ caractériserait plutôt un PROJECTEUR strict, pas une symétrie.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Lemme des noyaux"],
                q: "Que stipule le Lemme de décomposition des noyaux pour deux polynômes $P$ et $Q$ PREMIERS ENTRE EUX ?",
                options: [
                    { text: "$\\ker((PQ)(u)) = \\ker(P(u)) \\oplus \\ker(Q(u))$", isCorrect: true },
                    { text: "$\\ker((PQ)(u)) = \\ker(P(u)) \\cap \\ker(Q(u))$", isCorrect: false }
                ],
                explanation: "Le fait que les polynômes n'aient aucune racine commune garantit que les noyaux des endomorphismes correspondants sont en somme directe. C'est l'outil qui permet de prouver la diagonalisation. Leur intersection serait au contraire réduite à $\\{0\\}$ (conséquence de la somme directe), pas égale à $\\ker((PQ)(u))$ tout entier.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },

            // --- 1.7 REDUCTION DE JORDAN ET DE DUNFORD/CHEVALLEY ---
            {
                type: "qcm", tags: ["Réduction de Jordan", "Sous-espaces caractéristiques"],
                q: "Comment définit-on le « sous-espace caractéristique » $N_\\lambda$ associé à la valeur propre $\\lambda$ de multiplicité algébrique $m_\\lambda$ ?",
                options: [
                    { text: "$N_\\lambda = \\ker(u - \\lambda id_E)$", isCorrect: false },
                    { text: "$N_\\lambda = \\ker((u - \\lambda id_E)^{m_\\lambda})$", isCorrect: true },
                    { text: "$N_\\lambda = \\text{Im}((u - \\lambda id_E)^{m_\\lambda})$", isCorrect: false }
                ],
                explanation: "Le sous-espace caractéristique capte non seulement les vecteurs propres, mais aussi les vecteurs propres GÉNÉRALISÉS. Si l'endomorphisme n'est pas diagonalisable, la suite des noyaux itérés finit par se stabiliser pour englober $m_\\lambda$ dimensions. $\\ker(u-\\lambda id_E)$ seul (sans itération) ne redonnerait que le sous-espace propre $E_\\lambda$, en général strictement plus petit.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Réduction de Jordan", "Sous-espaces caractéristiques"],
                q: "Vrai ou Faux : Si le polynôme caractéristique est scindé, l'espace $E$ tout entier est la somme DIRECTE de ses sous-espaces caractéristiques $N_\\lambda$.",
                options: [
                    { text: "Vrai", isCorrect: true },
                    { text: "Faux", isCorrect: false }
                ],
                explanation: "Vrai. C'est une application directe du lemme de décomposition des noyaux généralisé appliqué à $\\chi_u$ : les $N_\\lambda$ absorbent les défaillances de diagonalisabilité et reconstituent parfaitement l'espace, que $u$ soit diagonalisable ou seulement trigonalisable.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Réduction de Jordan", "Définitions"],
                q: "Qu'est-ce qu'un « bloc de Jordan » $J_l(\\lambda)$ ?",
                options: [
                    { text: "Une matrice diagonale avec $\\lambda$ sur la diagonale", isCorrect: false },
                    { text: "Une matrice triangulaire supérieure avec $\\lambda$ sur la diagonale et des $1$ sur la sur-diagonale juste au-dessus", isCorrect: true }
                ],
                explanation: "Un bloc de Jordan encode l'action d'un endomorphisme nilpotent décalé. $\\lambda$ est sur la diagonale, et des $1$ tracent un chemin liant les vecteurs propres généralisés. Une matrice purement diagonale correspondrait au cas dégénéré $l=1$ (un « bloc » réduit à un simple vecteur propre classique).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Réduction de Jordan", "Pratique"],
                q: "Dans la forme de Jordan d'une matrice, à quoi correspond le NOMBRE TOTAL de blocs de Jordan associés à la valeur propre $\\lambda$ ?",
                options: [
                    { text: "À la multiplicité algébrique $m_\\lambda$", isCorrect: false },
                    { text: "À la dimension du sous-espace propre $E_\\lambda = \\dim(\\ker(M - \\lambda I))$", isCorrect: true }
                ],
                explanation: "Chaque bloc de Jordan possède EXACTEMENT un vecteur propre pur (qui « démarre » ou « finit » la chaîne de vecteurs généralisés). Il y a donc autant de blocs que de dimension propre géométrique — pas algébrique, qui donnerait plutôt la SOMME des tailles de tous ces blocs.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Réduction de Jordan", "Pratique"],
                q: "Dans la forme de Jordan, quelle information donne l'ordre de multiplicité de $\\lambda$ en tant que racine du polynôme MINIMAL $\\mu_u$ ?",
                options: [
                    { text: "Le nombre total de blocs de Jordan", isCorrect: false },
                    { text: "La taille du PLUS GRAND bloc de Jordan associé à $\\lambda$", isCorrect: true }
                ],
                explanation: "Le polynôme minimal trace la plus grande puissance nécessaire pour annuler le bloc nilpotent maximal. Cette puissance correspond donc à la taille de ce plus grand bloc — pas au nombre de blocs, qui est donné par la dimension géométrique (question précédente).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Réduction de Jordan", "Unicité"],
                q: "La réduction de Jordan d'une matrice donnée (dont le polynôme caractéristique est scindé) est-elle unique ?",
                options: [
                    { text: "Oui, totalement unique, y compris l'ordre d'apparition des blocs sur la diagonale", isCorrect: false },
                    { text: "Elle est unique à l'ordre des blocs près sur la diagonale", isCorrect: true }
                ],
                explanation: "L'ensemble des blocs de Jordan (leurs tailles et les valeurs propres associées) est entièrement déterminé par $u$. Mais on peut les disposer dans n'importe quel ordre le long de la diagonale en réarrangeant la base adaptée — la matrice de Jordan n'est donc unique qu'à une permutation des blocs près, pas au sens strict.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Dunford / Jordan-Chevalley"],
                q: "Que stipule le Théorème de la Décomposition de Jordan-Chevalley (ou Dunford) pour un endomorphisme dont le polynôme caractéristique est scindé ?",
                options: [
                    { text: "Il existe un unique couple $(s,n)$, avec $s$ diagonalisable et $n$ nilpotente, tels que $u = s+n$ ET que $s$ et $n$ commutent ($sn = ns$)", isCorrect: true },
                    { text: "Tout endomorphisme peut s'écrire comme somme d'une rotation et d'une homothétie", isCorrect: false }
                ],
                explanation: "La commutation ($sn = ns$) est cruciale. C'est elle qui garantit l'unicité de la décomposition et permet d'utiliser la formule du binôme pour calculer les puissances ou l'exponentielle de la matrice. La deuxième option décrit une décomposition géométrique totalement différente (et non générale), sans rapport avec Dunford.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Dunford / Jordan-Chevalley"],
                q: "Dans la décomposition de Dunford $u = s + n$, comment détermine-t-on formellement l'endomorphisme diagonalisable $s$ ?",
                options: [
                    { text: "C'est l'endomorphisme dont la restriction à chaque sous-espace caractéristique $N_\\lambda$ est l'homothétie de rapport $\\lambda$", isCorrect: true },
                    { text: "C'est la partie symétrique de la matrice", isCorrect: false }
                ],
                explanation: "Puisque $E = \\bigoplus N_\\lambda$, on construit $s$ en le définissant comme agissant par une simple multiplication par $\\lambda$ sur chaque bloc $N_\\lambda$. La « partie symétrique » ($\\frac{1}{2}(M+M^T)$) est une notion totalement différente, sans rapport avec la diagonalisabilité.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Dunford / Jordan-Chevalley"],
                q: "Si la partie nilpotente $n$ de la décomposition de Jordan-Chevalley est nulle ($n = 0_E$), que peut-on affirmer sur $u$ ?",
                options: [
                    { text: "Que $u$ est l'endomorphisme nul", isCorrect: false },
                    { text: "Que $u$ est strictement diagonalisable", isCorrect: true }
                ],
                explanation: "Si $u = s + 0$, alors $u = s$. Par définition de la décomposition, $s$ est diagonalisable. Donc l'absence de nilpotence caractérise la diagonalisabilité — cela ne dit rien sur la nullité de $u$ lui-même, qui reste un cas très particulier de diagonalisabilité (toutes les valeurs propres valant 0).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },

            // --- 1.8 APPLICATIONS (Puissances, Exponentielle, etc) ---
            {
                type: "qcm", tags: ["Calcul de puissances", "Suites récurrentes"],
                q: "Lorsqu'on cherche à calculer $M^k$, comment exploite-t-on la décomposition $M = S+N$ de Dunford ?",
                options: [
                    { text: "On fait simplement $M^k = S^k + N^k$", isCorrect: false },
                    { text: "Puisque $S$ et $N$ commutent, on applique la formule du binôme de Newton : $M^k = \\sum \\binom{k}{l} S^l N^{k-l}$. La somme s'arrête vite car $N$ est nilpotente.", isCorrect: true }
                ],
                explanation: "La commutation est la clef. Si $N$ a pour indice de nilpotence $p$, tous les termes avec $N^m$ pour $m \\ge p$ s'annulent, ce qui réduit drastiquement la somme. $M^k = S^k + N^k$ serait faux en général : cette identité ne vaut que si $S$ et $N$ étaient de plus des matrices qui s'annulent mutuellement dans les termes croisés, ce que le binôme complet prend correctement en compte.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Suites récurrentes linéaires"],
                q: "Pour une suite récurrente linéaire d'ordre $n$ à coefficients constants (ex: $u_{k+2} = u_{k+1} + u_k$), de quoi dépend la forme de l'expression explicite du terme général $u_k$ ?",
                options: [
                    { text: "Des racines de son équation caractéristique polynomiale et de leur multiplicité (diagonalisabilité de la matrice compagnon)", isCorrect: true },
                    { text: "Uniquement du premier terme $u_0$", isCorrect: false }
                ],
                explanation: "Si l'équation a des racines simples (diagonalisable), $u_k$ est une somme de suites géométriques. S'il y a des racines multiples (non diagonalisable, blocs de Jordan), des polynômes en $k$ apparaissent en facteur (ex : $k \\cdot \\lambda^k$). Le premier terme $u_0$ (et les suivants jusqu'à $u_{n-1}$) ne fixe que les CONSTANTES devant chaque terme de la formule, pas sa forme générale.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Rayon spectral"],
                q: "Qu'est-ce que le « rayon spectral » $\\rho(M)$ d'une matrice $M$ ?",
                options: [
                    { text: "Le module (ou la valeur absolue) de sa plus GRANDE valeur propre en module", isCorrect: true },
                    { text: "La somme des modules de ses valeurs propres", isCorrect: false }
                ],
                explanation: "Le rayon spectral $\\rho(M) = \\max \\{|\\lambda| \\mid \\lambda \\in \\text{Sp}(M)\\}$ définit la plus grande « envergure » du spectre dans le plan complexe. La somme des modules serait une quantité différente, sans le même intérêt pour l'étude de la convergence des suites $M^k$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Rayon spectral", "Normes"],
                q: "Que stipule le lien fondamental entre le rayon spectral $\\rho(M)$ et une norme matricielle subordonnée $\\|M\\|$ ?",
                options: [
                    { text: "$\\rho(M) > \\|M\\|$", isCorrect: false },
                    { text: "$\\rho(M) \\le \\|M\\|$ pour toute norme subordonnée, et l'on peut trouver une norme s'approchant d'aussi près que voulu de $\\rho(M)$", isCorrect: true }
                ],
                explanation: "Le rayon spectral donne la borne inférieure absolue de toutes les normes subordonnées de la matrice. L'inégalité inverse $>$ est globalement fausse : elle est même incompatible avec l'existence de normes arbitrairement proches de $\\rho(M)$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Exponentielle matricielle"],
                q: "Comment est mathématiquement définie l'exponentielle d'une matrice carrée $\\exp(M)$ ?",
                options: [
                    { text: "La matrice dont chaque coefficient est l'exponentielle du coefficient de $M$", isCorrect: false },
                    { text: "Par la série absolument convergente : $\\sum_{k=0}^{+\\infty} \\frac{M^k}{k!}$", isCorrect: true }
                ],
                explanation: "On utilise la définition analytique en série entière de l'exponentielle. Il est faux d'appliquer l'exponentielle terme à terme sur chaque coefficient (cette confusion mène à des résultats incorrects dès que $M$ n'est pas diagonale).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Exponentielle matricielle"],
                q: "L'égalité $\\exp(M+N) = \\exp(M)\\exp(N)$ est-elle garantie dès que $M$ et $N$ commutent ($MN=NM$) ?",
                options: [
                    { text: "Oui, la commutation est une condition SUFFISANTE pour cette égalité (c'est le théorème du cours)", isCorrect: true },
                    { text: "Non, il faut en plus que $M$ et $N$ soient toutes deux diagonalisables", isCorrect: false },
                    { text: "Non, cette égalité est fausse pour toute paire de matrices distinctes", isCorrect: false }
                ],
                explanation: "Dès que $MN=NM$, le produit de Cauchy des deux séries se réarrange exactement comme pour des scalaires, ce qui donne $\\exp(M+N)=\\exp(M)\\exp(N)$. Aucune hypothèse de diagonalisabilité n'est nécessaire : le résultat marche aussi pour des matrices nilpotentes qui commutent. Sans commutation, l'égalité s'effondre en général (voir le contre-exemple classique plus loin), mais la condition suffisante ne dit pas qu'elle échoue TOUJOURS pour $M \\neq N$ : il faut juste ne pas s'y fier hors commutation.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Exponentielle matricielle", "Inversibilité"],
                q: "Vrai ou Faux : L'exponentielle de toute matrice carrée $\\exp(M)$ est une matrice inversible.",
                options: [
                    { text: "Vrai", isCorrect: true },
                    { text: "Faux", isCorrect: false }
                ],
                explanation: "Vrai. Puisque $M$ et $-M$ commutent (trivialement), $\\exp(M)\\exp(-M) = \\exp(M-M) = \\exp(0) = I_n$. L'inverse de $\\exp(M)$ est donc toujours $\\exp(-M)$, et ce quelle que soit la matrice $M$ de départ (inversible ou non).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Exponentielle matricielle", "Déterminant"],
                q: "Quelle relation spectaculaire relie le déterminant, l'exponentielle et la trace d'une matrice $M$ ?",
                options: [
                    { text: "$\\det(\\exp(M)) = \\exp(tr(M))$", isCorrect: true },
                    { text: "$\\det(\\exp(M)) = tr(\\exp(M))$", isCorrect: false },
                    { text: "$tr(\\exp(M)) = \\exp(\\det(M))$", isCorrect: false }
                ],
                explanation: "C'est l'identité de Jacobi (ou formule de Liouville). En trigonalisant la matrice, les valeurs propres de l'exponentielle sont les exponentielles des valeurs propres. Le produit des exponentielles devient l'exponentielle de la somme (qui est la trace) — jamais confondre avec la trace de $\\exp(M)$, qui est une somme (pas un produit) des $\\exp(\\lambda_i)$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Exponentielle matricielle", "Calcul diff"],
                q: "Si l'on dérive la fonction matricielle $Y(t) = \\exp(tM)$ par rapport au temps $t$, qu'obtient-on ?",
                options: [
                    { text: "$\\frac{d}{dt} Y(t) = \\exp(M)$", isCorrect: false },
                    { text: "$\\frac{d}{dt} Y(t) = M \\exp(tM) = \\exp(tM) M$", isCorrect: true }
                ],
                explanation: "L'exponentielle de matrice est la résolvante canonique des systèmes différentiels linéaires à coefficients constants $Y' = MY$. Notez que $M$ et $\\exp(tM)$ commutent toujours (l'un est une série en l'autre), donc l'ordre de multiplication n'a ici pas d'importance, contrairement au cas général.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Diagonalisation", "Exponentielle matricielle"],
                q: "Si la matrice $M$ est diagonalisable sous la forme $M = P D P^{-1}$, comment calcule-t-on rapidement son exponentielle ?",
                options: [
                    { text: "$\\exp(M) = P \\exp(D) P^{-1}$", isCorrect: true },
                    { text: "$\\exp(M) = \\exp(P) \\exp(D) \\exp(P^{-1})$", isCorrect: false }
                ],
                explanation: "L'exponentielle s'applique bloc par bloc à l'intérieur de la similitude : les puissances $M^k$ donnent $P D^k P^{-1}$, et en sommant la série, les matrices $P$ et $P^{-1}$ se factorisent aux extrémités. La deuxième option n'a même pas de sens rigoureux dans ce contexte, puisque $P$ n'a a priori aucune raison d'être diagonalisable ou d'avoir une exponentielle simple à calculer.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Sous-espaces cycliques"],
                q: "Qu'appelle-t-on le « sous-espace cyclique » engendré par un vecteur $x$ pour un endomorphisme $u$ ?",
                options: [
                    { text: "L'espace engendré par les vecteurs propres de $u$", isCorrect: false },
                    { text: "Le plus petit sous-espace vectoriel stable par $u$ contenant $x$, engendré par la famille $\\{u^k(x)\\}_{k \\in \\mathbb{N}}$", isCorrect: true },
                    { text: "L'espace engendré par un vecteur propre et son image réciproque", isCorrect: false }
                ],
                explanation: "Un sous-espace cyclique $E_u(x)$ se construit en appliquant itérativement l'endomorphisme $u$ au vecteur de départ $x$, créant ainsi une « orbite » qui engendre le sous-espace. Ce vecteur $x$ n'a même pas besoin d'être propre — c'est justement pour des $x$ non propres que la construction devient intéressante (matrice compagnon).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Polynôme caractéristique", "Traces & Déterminants"],
                q: "Si le polynôme caractéristique d'un endomorphisme $u$ de dimension $n$ est scindé : $\\chi_u(X) = \\prod_{i=1}^n (X - \\lambda_i)$. Que peut-on affirmer ?",
                options: [
                    { text: "$tr(u) = \\sum_{i=1}^n \\lambda_i$ et $\\det(u) = \\prod_{i=1}^n \\lambda_i$", isCorrect: true },
                    { text: "$tr(u) = \\prod_{i=1}^n \\lambda_i$ et $\\det(u) = \\sum_{i=1}^n \\lambda_i$", isCorrect: false },
                    { text: "On ne peut rien affirmer si $u$ n'est pas diagonalisable", isCorrect: false }
                ],
                explanation: "C'est une propriété fondamentale des racines d'un polynôme (relations coefficients-racines). Même si $u$ n'est que trigonalisable (pas diagonalisable), la trace reste la somme de SES valeurs propres comptées avec multiplicité, et le déterminant leur produit : ces deux formules ne dépendent en rien de la diagonalisabilité.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Polynôme caractéristique", "Matrice 2x2"],
                q: "Quelle est la formule directe du polynôme caractéristique pour une matrice carrée $M$ d'ordre 2 ?",
                options: [
                    { text: "$\\chi_M(X) = X^2 + \\det(M)X - tr(M)$", isCorrect: false },
                    { text: "$\\chi_M(X) = X^2 - tr(M)X + \\det(M)$", isCorrect: true },
                    { text: "$\\chi_M(X) = X^2 + tr(M)X + \\det(M)$", isCorrect: false }
                ],
                explanation: "Pour toute matrice d'ordre 2, le polynôme caractéristique s'écrit de manière instantanée avec cette formule issue du développement de $X^2 - tr(M)X^{2-1} + \\dots + (-1)^2 \\det(M)$. Attention au signe devant la trace : c'est un moins, pas un plus.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Diagonalisation", "Pièges"],
                q: "Vrai ou Faux : L'ordre de multiplicité géométrique d'une valeur propre $\\lambda$ (c'est-à-dire $\\dim(E_\\lambda)$) peut être strictement SUPÉRIEUR à son ordre de multiplicité algébrique $m_\\lambda$.",
                options: [
                    { text: "Vrai", isCorrect: false },
                    { text: "Faux", isCorrect: true }
                ],
                explanation: "Faux. On a toujours $1 \\le \\dim(E_\\lambda) \\le m_\\lambda$. C'est mathématiquement impossible que la dimension du sous-espace propre dépasse la puissance de la racine dans le polynôme caractéristique.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Polynômes d'endomorphismes"],
                q: "Soit $x$ un vecteur propre de $u$ associé à la valeur propre $\\lambda$. Si $P \\in \\mathbb{K}[X]$ est un polynôme quelconque, que vaut $P(u)(x)$ ?",
                options: [
                    { text: "$P(\\lambda)x$", isCorrect: true },
                    { text: "$P(x)$", isCorrect: false },
                    { text: "$0_E$", isCorrect: false }
                ],
                explanation: "L'application d'un polynôme d'endomorphisme sur un vecteur propre se comporte comme une simple évaluation scalaire du polynôme sur la valeur propre : si $u(x)=\\lambda x$, alors $u^k(x) = \\lambda^k x$, d'où $P(u)(x) = P(\\lambda)x$. Cela ne vaut $0_E$ que dans le cas particulier où $\\lambda$ est racine de $P$ (par exemple si $P$ est annulateur).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Polynôme minimal", "Homothéties"],
                q: "Soit $u = \\lambda id_E$ une homothétie dans un espace de dimension $n \\ge 2$. Quel est le polynôme minimal $\\mu_u$ de $u$ ?",
                options: [
                    { text: "$(X - \\lambda)^n$", isCorrect: false },
                    { text: "$X - \\lambda$", isCorrect: true },
                    { text: "$X^n - \\lambda^n$", isCorrect: false }
                ],
                explanation: "L'homothétie s'annule dès la puissance 1 : $(u - \\lambda id_E) = 0_E$. Le polynôme $X - \\lambda$ annule donc $u$. Puisque le polynôme minimal divise le polynôme caractéristique $(X - \\lambda)^n$, il est exactement de degré 1 — bien plus court que le caractéristique, ce qui illustre que $\\mu_u$ n'a pas toujours le même degré que $\\chi_u$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Polynôme minimal", "Idéal"],
                q: "Quelle structure mathématique forme l'ensemble des polynômes annulateurs d'un endomorphisme ?",
                options: [
                    { text: "Un sous-espace vectoriel de dimension $n$", isCorrect: false },
                    { text: "Un idéal de l'anneau $\\mathbb{K}[X]$", isCorrect: true },
                    { text: "Un corps", isCorrect: false }
                ],
                explanation: "Cet ensemble est stable par addition, et la multiplication de tout polynôme annulateur par un polynôme QUELCONQUE donne encore un polynôme annulateur. C'est la définition d'un idéal, engendré ici par un polynôme unique (le polynôme minimal). Ce n'est ni un sous-espace de dimension finie fixe (l'idéal contient des polynômes de tout degré supérieur ou égal à $\\deg \\mu_u$), ni un corps (il contient le polynôme nul et n'a pas d'inverses).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Lemme des noyaux"],
                q: "Pour appliquer le « lemme de décomposition des noyaux généralisé » à $k$ polynômes $P_1, \\dots, P_k$, quelle condition indispensable ces polynômes doivent-ils vérifier ?",
                options: [
                    { text: "Ils doivent être scindés", isCorrect: false },
                    { text: "Ils doivent être de degré strictement positif", isCorrect: false },
                    { text: "Ils doivent être premiers entre eux deux à deux", isCorrect: true }
                ],
                explanation: "Si les polynômes sont premiers entre eux deux à deux (aucun facteur commun, donc aucune valeur propre commune ne peut les annuler simultanément), alors $\\ker((P_1 \\dots P_k)(u)) = \\bigoplus_{i=1}^k \\ker(P_i(u))$. Aucune exigence sur le fait d'être scindés : le lemme fonctionne même avec des facteurs irréductibles de degré $\\ge 2$ (utile sur $\\mathbb{R}$ par exemple).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Cayley-Hamilton", "Calcul d'inverse"],
                q: "Comment le théorème de Cayley-Hamilton fournit-il une méthode de calcul de l'inverse d'une matrice $M$ ?",
                options: [
                    { text: "En posant $M^{-1} = \\chi_M(0)$", isCorrect: false },
                    { text: "Si $M$ est inversible, l'équation $\\chi_M(M) = 0$ peut être réarrangée sous la forme $M \\times P(M) = c \\cdot I_n$, d'où l'on extrait $M^{-1}$", isCorrect: true }
                ],
                explanation: "Puisque $M^n - tr(M)M^{n-1} + \\dots + (-1)^n \\det(M)I_n = 0$, on peut isoler l'identité en factorisant par $M$ si $\\det(M) \\neq 0$. Le facteur restant divisé par $\\pm \\det(M)$ est exactement l'inverse de $M$. $\\chi_M(0)$ est un simple SCALAIRE (ou plutôt $(-1)^n\\det(M)$ vu plus haut), pas une matrice, donc cette première option n'a même pas de sens dimensionnel.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Réduction de Jordan", "Matrice compagnon"],
                q: "Dans l'étude d'un sous-espace cyclique, la matrice de l'endomorphisme induit prend une forme très particulière. Laquelle ?",
                options: [
                    { text: "Une matrice compagnon", isCorrect: true },
                    { text: "Une matrice symétrique", isCorrect: false },
                    { text: "Une matrice diagonale", isCorrect: false }
                ],
                explanation: "Une matrice compagnon possède des 1 sur la sous-diagonale et les coefficients opposés de son polynôme caractéristique sur la dernière colonne. Elle est la « compagne » de ce polynôme unitaire. Rien ne garantit sa symétrie ni son caractère diagonal — c'est même l'exemple typique d'une matrice non diagonalisable quand le vecteur générateur est bien choisi pour un endomorphisme nilpotent.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Réduction de Jordan", "Vecteurs généralisés"],
                q: "Dans la réduction de Jordan, si l'on est en présence d'un bloc de Jordan de taille $k$ associé à la valeur propre $\\lambda$. De quel ORDRE est le vecteur propre généralisé $V_k$ qui « initie » la chaîne générant ce bloc ?",
                options: [
                    { text: "D'ordre 1 (c'est un vecteur propre classique)", isCorrect: false },
                    { text: "D'ordre $k$ (il appartient à $\\ker((M-\\lambda I)^k)$ mais pas à $\\ker((M-\\lambda I)^{k-1})$)", isCorrect: true }
                ],
                explanation: "Le vecteur $V_k$ est le plus « éloigné » du vrai vecteur propre. Il faut lui appliquer l'opérateur $(M-\\lambda I)$ $k$ fois pour enfin l'annuler. C'est en lui appliquant successivement $(M-\\lambda I)$ qu'on redescend toute la chaîne jusqu'au vecteur propre classique d'ordre 1.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Suites récurrentes", "Dimension"],
                q: "Quelle est la dimension du sous-espace vectoriel formé par les suites réelles $(u_k)$ vérifiant une relation de récurrence linéaire d'ordre $n$ à coefficients constants ?",
                options: [
                    { text: "Dimension infinie", isCorrect: false },
                    { text: "Dimension $n$", isCorrect: true },
                    { text: "Dimension 1", isCorrect: false }
                ],
                explanation: "L'application linéaire qui à toute suite de cet ensemble associe ses $n$ premiers termes $(u_0, \\dots, u_{n-1})$ est une bijection. L'espace vectoriel des solutions est donc isomorphe à $\\mathbb{K}^n$, de dimension $n$ — malgré le fait qu'une suite contienne, elle, une infinité de termes.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Exponentielle matricielle", "Nilpotence"],
                q: "Soit $M$ une matrice nilpotente d'indice $l$ ($M^l = 0_n$). Que devient la série entière définissant l'exponentielle $\\exp(M)$ ?",
                options: [
                    { text: "Elle diverge car les puissances s'annulent", isCorrect: false },
                    { text: "Elle devient un polynôme en $M$ de degré $l-1$, car tous les termes $\\frac{M^k}{k!}$ pour $k \\ge l$ sont nuls", isCorrect: true }
                ],
                explanation: "C'est l'un des plus grands intérêts des matrices nilpotentes : l'exponentielle, qui est normalement une somme infinie, se tronque naturellement en une somme finie parfaitement calculable à la main. L'annulation des puissances n'entraîne évidemment pas une divergence, bien au contraire : elle garantit une somme finie donc triviale à évaluer.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Exponentielle matricielle", "Commutation"],
                q: "Soient les matrices $M = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ et $N = \\begin{pmatrix} 0 & 0 \\\\ 1 & 0 \\end{pmatrix}$. Elles sont toutes deux nilpotentes. Pourquoi a-t-on $\\exp(M+N) \\neq \\exp(M)\\exp(N)$ ?",
                options: [
                    { text: "Parce que ce ne sont pas des matrices symétriques", isCorrect: false },
                    { text: "Parce que $M$ et $N$ ne commutent pas ($MN \\neq NM$)", isCorrect: true }
                ],
                explanation: "L'égalité des exponentielles requiert impérativement la commutation. Dans ce contre-exemple classique (Remarque 1.88), $MN = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$ et $NM = \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}$, qui sont clairement différentes. La symétrie des matrices n'a ici aucun rapport avec le phénomène observé.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Exponentielle matricielle"],
                q: "Vrai ou Faux : L'exponentielle d'une matrice $M$, $\\exp(M)$, peut toujours s'écrire comme un polynôme en la matrice $M$.",
                options: [
                    { text: "Vrai", isCorrect: true },
                    { text: "Faux", isCorrect: false }
                ],
                explanation: "Vrai (Prop 1.86). Même si $\\exp(M)$ est définie par une série infinie, l'espace des polynômes en $M$ est de dimension finie (grâce à Cayley-Hamilton, de dimension au plus $n$). Cet espace étant fermé (car de dimension finie dans un espace vectoriel normé), la limite de la série y appartient bien.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },

            // --- 1.9 QUESTIONS SUPPLÉMENTAIRES (subtilités) ---
            {
                type: "qcm", tags: ["Polynôme caractéristique", "Multiplicités", "Pièges"],
                q: "Soit $u$ un endomorphisme de $E$, $\\dim E = n$. La somme des multiplicités algébriques de toutes les valeurs propres de $u$ vaut-elle toujours $n$ ?",
                options: [
                    { text: "Oui, toujours, quel que soit $u$", isCorrect: false },
                    { text: "Oui, mais seulement si $\\chi_u$ est scindé sur le corps de base ; sinon la somme est strictement inférieure à $n$", isCorrect: true }
                ],
                explanation: "La somme des multiplicités égale toujours le degré du produit des facteurs de degré 1 de $\\chi_u$. Si $\\chi_u$ n'est pas scindé (comme pour une rotation d'angle non trivial sur $\\mathbb{R}$), il reste des facteurs irréductibles de degré $\\ge 2$ qui ne contribuent à AUCUNE valeur propre : la somme des multiplicités est alors strictement inférieure à $n$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Trace", "Nilpotence"],
                q: "Si $u$ est un endomorphisme nilpotent de $E$ (dimension finie $n$), que valent nécessairement $tr(u)$ et $\\det(u)$ ?",
                options: [
                    { text: "$tr(u) = 0$ et $\\det(u) = 0$", isCorrect: true },
                    { text: "$tr(u) = 0$ mais $\\det(u)$ peut être non nul", isCorrect: false },
                    { text: "On ne peut rien affirmer sans connaître l'indice de nilpotence exact", isCorrect: false }
                ],
                explanation: "Le polynôme caractéristique d'un endomorphisme nilpotent est toujours $\\chi_u(X) = X^n$ (toutes les valeurs propres valent 0, avec multiplicité totale $n$). Par les relations coefficients-racines, $tr(u) = \\sum \\lambda_i = 0$ et $\\det(u) = \\prod \\lambda_i = 0$, et ce quel que soit l'indice de nilpotence précis (2, 3, ou $n$).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Diagonalisation", "Corps de base", "Pièges"],
                q: "Une matrice réelle $A \\in \\mathcal{M}_n(\\mathbb{R})$ peut-elle être diagonalisable sur $\\mathbb{C}$ sans l'être sur $\\mathbb{R}$ ?",
                options: [
                    { text: "Non, la diagonalisabilité ne dépend jamais du corps choisi", isCorrect: false },
                    { text: "Oui, c'est même un cas très fréquent : par exemple une matrice de rotation plane d'angle non trivial", isCorrect: true }
                ],
                explanation: "Sur $\\mathbb{C}$, le polynôme caractéristique est automatiquement scindé (d'Alembert-Gauss), ce qui est une des deux conditions de la diagonalisabilité. Sur $\\mathbb{R}$, rien ne garantit que $\\chi_u$ soit scindé : une rotation plane d'angle $\\theta \\notin \\{0,\\pi\\}$ a un spectre réel vide, donc n'est diagonalisable ni sur $\\mathbb{R}$ ni même trigonalisable, alors qu'elle est diagonalisable sur $\\mathbb{C}$ (valeurs propres $e^{\\pm i\\theta}$).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Sous-espaces cycliques", "Polynôme minimal"],
                q: "Un vecteur $x$ est dit « cyclique » pour $u$ si le sous-espace cyclique qu'il engendre est égal à $E$ tout entier. Que peut-on alors dire du polynôme minimal $\\mu_u$ dans ce cas ?",
                options: [
                    { text: "$\\mu_u$ est nécessairement de degré strictement inférieur à $n$", isCorrect: false },
                    { text: "$\\mu_u = \\chi_u$ (le polynôme minimal coïncide avec le polynôme caractéristique)", isCorrect: true }
                ],
                explanation: "Si un seul vecteur suffit à engendrer $E$ tout entier par itérations de $u$, la matrice de $u$ dans la base $(x, u(x), \\dots, u^{n-1}(x))$ est une matrice compagnon de taille $n$, dont on sait que le polynôme minimal est exactement égal au polynôme caractéristique (de degré $n$, pas moins).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Diagonalisation", "Pièges", "Endomorphismes"],
                q: "Si $u^2$ est diagonalisable, peut-on en conclure que $u$ lui-même est diagonalisable ?",
                options: [
                    { text: "Oui, toujours", isCorrect: false },
                    { text: "Non, ce n'est pas garanti en général (un contre-exemple existe même en dimension 2, avec $u$ nilpotente non nulle)", isCorrect: true }
                ],
                explanation: "Contre-exemple : $u = \\begin{pmatrix} 0&1\\\\0&0 \\end{pmatrix}$ vérifie $u^2 = 0$, qui est diagonalisable (c'est la matrice nulle, déjà diagonale). Pourtant $u$ elle-même n'est pas diagonalisable (son polynôme minimal est $X^2$, pas scindé à racines simples). La diagonalisabilité ne « remonte » donc pas automatiquement d'une puissance vers l'endomorphisme de départ.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            }
        ]
    },
    "Analyse 3 : Chapitres 1 & 2 (Cauchy et Séries)": {
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            // --- SUITES DE CAUCHY (Chapitre 1) ---
            {
                type: "qcm", tags: ["Suites de Cauchy"],
                q: "Que stipule le théorème de Bolzano-Weierstrass (Théorème 1.3) ?",
                options: [
                    { text: "Toute suite réelle admet une limite finie", isCorrect: false },
                    { text: "Toute suite réelle bornée possède au moins une valeur d'adhérence (une sous-suite convergente)", isCorrect: true },
                    { text: "Toute suite croissante est de Cauchy", isCorrect: false }
                ],
                explanation: "C'est un théorème fondamental d'analyse : toute suite réelle bornée possède une valeur d'adhérence[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Suites de Cauchy"],
                q: "Quelle est la définition formelle d'une suite de Cauchy $(x_n)$ ?",
                options: [
                    { text: "$\\forall \\epsilon > 0, \\exists n_0 \\in \\mathbb{N}, \\forall n \\ge n_0, |x_n - x_{n-1}| < \\epsilon$", isCorrect: false },
                    { text: "$\\forall \\epsilon > 0, \\exists n_0 \\in \\mathbb{N}, \\forall p, q \\ge n_0, |x_p - x_q| < \\epsilon$", isCorrect: true }
                ],
                explanation: "Une suite est de Cauchy si les termes deviennent tous arbitrairement proches les uns des autres à partir d'un certain rang, et non pas seulement deux termes consécutifs[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Suites de Cauchy"],
                q: "Quel est le lien direct entre les suites convergentes et les suites de Cauchy ?",
                options: [
                    { text: "Toute suite de Cauchy est convergente, mais l'inverse est faux", isCorrect: false },
                    { text: "Toute suite convergente est de Cauchy", isCorrect: true }
                ],
                explanation: "C'est la Proposition 1.5 : toute suite qui admet une limite finie voit nécessairement ses termes se rapprocher les uns des autres[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Suites de Cauchy"],
                q: "Que peut-on affirmer concernant le caractère borné d'une suite de Cauchy (Prop 1.6) ?",
                options: [
                    { text: "Toute suite de Cauchy est bornée", isCorrect: true },
                    { text: "Une suite de Cauchy peut tendre vers $+\\infty$", isCorrect: false }
                ],
                explanation: "En fixant $\\epsilon = 1$, tous les termes à partir du rang $n_0$ sont dans une boule de rayon 1. Comme les termes précédents sont en nombre fini, la suite entière est bornée[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Suites de Cauchy"],
                q: "Si une suite de Cauchy admet une valeur d'adhérence, que se passe-t-il (Prop 1.6) ?",
                options: [
                    { text: "Elle converge vers cette valeur d'adhérence", isCorrect: true },
                    { text: "Elle peut diverger", isCorrect: false }
                ],
                explanation: "Si les termes se rapprochent tous les uns des autres (Cauchy) et qu'une sous-suite converge vers $l$, alors toute la suite est fatalement entraînée vers $l$[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Suites de Cauchy"],
                q: "Que signifie l'affirmation « $\\mathbb{R}$ est complet » (Théorème 1.7) ?",
                options: [
                    { text: "Dans $\\mathbb{R}$, toute suite convergente est de Cauchy", isCorrect: false },
                    { text: "Dans $\\mathbb{R}$, toute suite de Cauchy est une suite convergente", isCorrect: true }
                ],
                explanation: "C'est la propriété fondamentale qui différencie $\\mathbb{R}$ de $\\mathbb{Q}$ : un espace est complet si toute suite de Cauchy y admet une limite[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Suites de Cauchy"],
                q: "L'ensemble des rationnels $\\mathbb{Q}$ est-il complet ?",
                options: [
                    { text: "Oui", isCorrect: false },
                    { text: "Non", isCorrect: true }
                ],
                explanation: "Il existe des suites de rationnels qui sont de Cauchy (car elles convergent vers un irrationnel dans $\\mathbb{R}$) mais qui ne convergent pas dans $\\mathbb{Q}$, car leur limite n'y appartient pas[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },

            // --- SÉRIES : DÉFINITIONS & PROPRIÉTÉS (Chapitre 2) ---
            {
                type: "qcm", tags: ["Séries : Définitions & Propriétés"],
                q: "Comment définit-on la convergence d'une série de terme général $x_n$ ?",
                options: [
                    { text: "Elle converge si la suite $(x_n)$ tend vers 0", isCorrect: false },
                    { text: "Elle converge si la suite de ses sommes partielles $(S_n = \\sum_{k=0}^n x_k)$ admet une limite réelle finie", isCorrect: true }
                ],
                explanation: "La convergence d'une série est définie EXCLUSIVEMENT par la convergence de la suite de ses sommes partielles vers une limite finie[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries : Définitions & Propriétés"],
                q: "À quelle condition stricte la série géométrique $\\sum a^k$ converge-t-elle ?",
                options: [
                    { text: "Si $|a| \\le 1$", isCorrect: false },
                    { text: "Si $|a| < 1$", isCorrect: true },
                    { text: "Si $a < 1$", isCorrect: false }
                ],
                explanation: "La série géométrique converge si et seulement si $|a| < 1$. Si $a=1$ ou $a \\le -1$, elle diverge[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries : Définitions & Propriétés"],
                q: "Que vaut la somme de la série géométrique $\\sum_{k=0}^\\infty a^k$ (pour $|a| < 1$) ?",
                options: [
                    { text: "$\\frac{a}{1-a}$", isCorrect: false },
                    { text: "$\\frac{1}{1-a}$", isCorrect: true }
                ],
                explanation: "Puisque $S_n = \\frac{1-a^{n+1}}{1-a}$, la limite quand $n \\to \\infty$ est $\\frac{1}{1-a}$ pour $|a| < 1$[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries : Définitions & Propriétés"],
                q: "Si la série $\\sum x_n$ converge, que peut-on affirmer sur la suite $(x_n)$ (Prop 2.5) ?",
                options: [
                    { text: "La suite $(x_n)$ converge vers 0", isCorrect: true },
                    { text: "La suite $(x_n)$ est décroissante", isCorrect: false }
                ],
                explanation: "C'est une condition NÉCESSAIRE. Si la série converge, son terme général tend obligatoirement vers zéro ($x_{n+1} = S_{n+1} - S_n \\to l - l = 0$)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries : Définitions & Propriétés"],
                q: "Vrai ou Faux : Si la suite $(x_n)$ tend vers 0, alors la série $\\sum x_n$ converge obligatoirement.",
                options: [
                    { text: "Vrai", isCorrect: false },
                    { text: "Faux", isCorrect: true }
                ],
                explanation: "Faux ! C'est une erreur classique. Le contre-exemple est la série harmonique (terme général $1/n$ qui tend vers 0, mais dont la série diverge)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries : Définitions & Propriétés"],
                q: "Si la suite $(x_n)$ ne tend pas vers 0, que peut-on affirmer sur la série $\\sum x_n$ ?",
                options: [
                    { text: "Elle diverge", isCorrect: true },
                    { text: "On ne peut rien conclure", isCorrect: false }
                ],
                explanation: "C'est la contraposée de la Proposition 2.5. On parle de « divergence grossière »[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries : Définitions & Propriétés"],
                q: "Deux séries dont les termes généraux coïncident à partir d'un certain rang $n_0$ ont-elles la même nature (Prop 2.8) ?",
                options: [
                    { text: "Oui", isCorrect: true },
                    { text: "Non", isCorrect: false }
                ],
                explanation: "La convergence d'une série ne dépend QUE de son comportement à l'infini. Modifier un nombre fini de termes ne change pas sa nature (convergence ou divergence)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries : Définitions & Propriétés"],
                q: "Comment est défini le Reste $R_n$ d'une série convergente $\\sum x_k$ (Def 2.10) ?",
                options: [
                    { text: "$R_n = \\sum_{k=0}^n x_k$", isCorrect: false },
                    { text: "$R_n = \\sum_{k=n+1}^\\infty x_k$", isCorrect: true }
                ],
                explanation: "Le reste $R_n$ est la somme des termes de $n+1$ à l'infini. Par définition, la suite $(R_n)$ d'une série convergente tend vers 0[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries : Définitions & Propriétés"],
                q: "Quel est le lien fondamental entre convergence et convergence absolue (Thm 2.12) ?",
                options: [
                    { text: "Convergence implique convergence absolue", isCorrect: false },
                    { text: "Convergence absolue implique convergence", isCorrect: true }
                ],
                explanation: "Si la série des valeurs absolues $\\sum |x_n|$ converge, alors la série $\\sum x_n$ converge obligatoirement[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },

            // --- SÉRIES À TERMES POSITIFS ---
            {
                type: "qcm", tags: ["Séries à termes positifs"],
                q: "Si le terme général $x_n$ d'une série est positif, que peut-on dire de la suite des sommes partielles $(S_n)$ ?",
                options: [
                    { text: "Elle est strictement décroissante", isCorrect: false },
                    { text: "Elle est positive et croissante", isCorrect: true }
                ],
                explanation: "Puisque $S_{n+1} - S_n = x_{n+1} \\ge 0$, la suite des sommes partielles est croissante (Prop 2.15)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries à termes positifs"],
                q: "Pour une série à termes POSITIFS, quels sont les deux seuls comportements possibles (Prop 2.15) ?",
                options: [
                    { text: "Elle converge, ou elle n'a pas de limite (oscille)", isCorrect: false },
                    { text: "Elle converge (si $(S_n)$ est majorée), ou elle tend vers $+\\infty$ (si $(S_n)$ n'est pas majorée)", isCorrect: true }
                ],
                explanation: "Une suite croissante est soit majorée (et converge), soit non majorée (et tend vers $+\\infty$). Elle ne peut jamais osciller[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries à termes positifs"],
                q: "Séries de Riemann : À quelle condition la série $\\sum \\frac{1}{n^\\alpha}$ converge-t-elle ?",
                options: [
                    { text: "Si $\\alpha \\ge 1$", isCorrect: false },
                    { text: "Si $\\alpha > 1$", isCorrect: true },
                    { text: "Si $\\alpha < 1$", isCorrect: false }
                ],
                explanation: "C'est l'un des résultats les plus utilisés : la série de Riemann converge si et seulement si $\\alpha > 1$. Pour $\\alpha=1$ (série harmonique), elle diverge[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },

            // --- CRITÈRES DE CONVERGENCE ---
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Critère de comparaison : Soient $0 \\le x_n \\le y_n$. Si la série $\\sum x_n$ DIVERGE, que fait $\\sum y_n$ ?",
                options: [
                    { text: "Elle converge", isCorrect: false },
                    { text: "Elle diverge aussi", isCorrect: true },
                    { text: "On ne peut rien dire", isCorrect: false }
                ],
                explanation: "Si la « petite » série diverge (tend vers l'infini), la « grande » série diverge obligatoirement aussi vers l'infini[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Vrai ou Faux : Le critère de comparaison ($x_n \\le y_n$) est applicable même si $x_n$ et $y_n$ changent de signe.",
                options: [
                    { text: "Vrai", isCorrect: false },
                    { text: "Faux", isCorrect: true }
                ],
                explanation: "Faux. C'est une erreur fatale. Le critère de comparaison N'EST VALABLE QUE pour les séries à termes POSITIFS. Contre-exemple : $x_n=-1 \\le 0=y_n$, $\\sum 0$ converge mais $\\sum -1$ diverge[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Critère d'équivalence : Si $x_n \\sim y_n$ et que les termes sont POSITIFS, que peut-on affirmer (Prop 2.21) ?",
                options: [
                    { text: "Elles ont la même somme", isCorrect: false },
                    { text: "Elles sont de même nature (convergent ou divergent en même temps)", isCorrect: true }
                ],
                explanation: "L'équivalence assure que les deux séries ont le même comportement à l'infini. Attention, elles n'auront pas forcément la même somme[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Vrai ou Faux : On peut utiliser le critère d'équivalence sur des séries dont le terme général change de signe.",
                options: [
                    { text: "Vrai", isCorrect: false },
                    { text: "Faux", isCorrect: true }
                ],
                explanation: "Faux. L'équivalence ne conserve la nature des séries QUE si les termes sont de signe constant (positif ou négatif)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Critère de Cauchy : Soit $x_n > 0$. Si $\\lim (x_n)^{\\frac{1}{n}} = l$, que conclut-on ?",
                options: [
                    { text: "Si $l < 1$ la série converge. Si $l > 1$ elle diverge.", isCorrect: true },
                    { text: "Si $l > 1$ la série converge. Si $l < 1$ elle diverge.", isCorrect: false }
                ],
                explanation: "Si la racine n-ième tend vers $l < 1$, le terme général est majoré par une suite géométrique convergente[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Critère de D'Alembert : Soit $x_n > 0$. Si $\\lim \\frac{x_{n+1}}{x_n} = l$, à quelle condition la série diverge-t-elle ?",
                options: [
                    { text: "Si $l < 1$", isCorrect: false },
                    { text: "Si $l > 1$", isCorrect: true }
                ],
                explanation: "Si le rapport est strictement supérieur à 1 à l'infini, les termes grandissent : la série diverge (divergence grossière)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Que se passe-t-il pour les critères de Cauchy et D'Alembert si la limite $l = 1$ ?",
                options: [
                    { text: "La série converge", isCorrect: false },
                    { text: "La série diverge", isCorrect: false },
                    { text: "On ne peut pas conclure", isCorrect: true }
                ],
                explanation: "Le cas $l=1$ est un cas indéterminé pour ces deux règles. Il faut utiliser une autre méthode (ex: équivalence ou critère en $n^\\alpha$)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Critère en $n^\\alpha$ : S'il existe $\\alpha > 1$ tel que $\\lim n^\\alpha x_n = l$ (limite finie), que fait la série à termes positifs $\\sum x_n$ ?",
                options: [
                    { text: "Elle diverge", isCorrect: false },
                    { text: "Elle converge", isCorrect: true }
                ],
                explanation: "Cela signifie que $x_n = \\mathcal{O}(\\frac{1}{n^\\alpha})$. Comme $\\alpha > 1$, la série de Riemann converge, et donc $\\sum x_n$ converge par comparaison[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Critère en $n^\\alpha$ : S'il existe $\\alpha \\le 1$ tel que $\\lim n^\\alpha x_n = +\\infty$, que fait la série à termes positifs $\\sum x_n$ ?",
                options: [
                    { text: "Elle diverge", isCorrect: true },
                    { text: "Elle converge", isCorrect: false }
                ],
                explanation: "Cela signifie qu'à partir d'un certain rang, $n^\\alpha x_n \\ge 1$, soit $x_n \\ge \\frac{1}{n^\\alpha}$. Comme $\\alpha \\le 1$, la série diverge par comparaison[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },

            // --- SÉRIES ALTERNÉES & ABEL ---
            {
                type: "qcm", tags: ["Séries alternées & Abel"],
                q: "Qu'est-ce qu'une série « semi-convergente » (Def 2.31) ?",
                options: [
                    { text: "Une série qui converge vers l'infini", isCorrect: false },
                    { text: "Une série qui est convergente, mais PAS absolument convergente", isCorrect: true }
                ],
                explanation: "Exemple classique : $\\sum \\frac{(-1)^n}{n}$ converge, mais $\\sum \\left|\\frac{(-1)^n}{n}\\right| = \\sum \\frac{1}{n}$ diverge. Elle est semi-convergente[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries alternées & Abel"],
                q: "Critère Spécial des Séries Alternées (CSSA) : Quelles sont les 3 conditions sur la suite $(x_n)$ pour que $\\sum (-1)^n x_n$ converge ?",
                options: [
                    { text: "Positive, strictement croissante, tend vers 1", isCorrect: false },
                    { text: "Positive, décroissante, et tend vers 0", isCorrect: true }
                ],
                explanation: "Si la suite $(x_n)$ (sans le signe) baisse sans cesse vers 0, les oscillations s'atténuent et la série alternée converge[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries alternées & Abel"],
                q: "Peut-on utiliser les théorèmes d'équivalence ou de comparaison directement sur une série alternée pour prouver sa semi-convergence ?",
                options: [
                    { text: "Oui", isCorrect: false },
                    { text: "Non, jamais", isCorrect: true }
                ],
                explanation: "C'est une interdiction absolue (Rem 2.34). On ne peut utiliser ces critères QUE sur la valeur absolue pour prouver la convergence absolue[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries alternées & Abel"],
                q: "Critère d'Abel (Thm 2.36) : Si $x_n = a_n b_n$. Quelles sont les conditions pour que $\\sum x_n$ converge ?",
                options: [
                    { text: "$(a_n)$ tend vers 0, et $(b_n)$ tend vers 0", isCorrect: false },
                    { text: "$(a_n)$ est décroissante vers 0, et la suite des SOMMES PARTIELLES de $(b_n)$ est bornée", isCorrect: true }
                ],
                explanation: "Le critère d'Abel généralise le CSSA. Il demande un amortisseur monotone vers 0 ($(a_n)$) et un oscillateur à énergie bornée (les sommes partielles de $(b_n)$)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries alternées & Abel"],
                q: "Sur quoi repose la démonstration du Critère d'Abel ?",
                options: [
                    { text: "Sur la transformation d'Abel (version discrète de l'intégration par parties)", isCorrect: true },
                    { text: "Sur un développement limité à l'ordre 3", isCorrect: false }
                ],
                explanation: "La transformation d'Abel utilise $b_n = B_n - B_{n-1}$ pour réécrire la somme et transférer les différences sur $a_n - a_{n+1}$[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },

            // --- RESTES & ESTIMATIONS ---
            {
                type: "qcm", tags: ["Restes & Estimations"],
                q: "Si $u_n \\sim v_n > 0$ et que les séries DIVERGENT. Que peut-on affirmer ?",
                options: [
                    { text: "Les restes sont équivalents", isCorrect: false },
                    { text: "Les sommes partielles sont équivalentes : $\\sum_{k=0}^n u_k \\sim \\sum_{k=0}^n v_k$", isCorrect: true }
                ],
                explanation: "Pour des séries divergentes équivalentes positives, la somme explose et c'est la somme partielle entière qui devient équivalente (Prop 2.39)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Restes & Estimations"],
                q: "Si $u_n \\sim v_n > 0$ et que les séries CONVERGENT. Que peut-on affirmer ?",
                options: [
                    { text: "Les sommes partielles sont équivalentes", isCorrect: false },
                    { text: "Les RESTES sont équivalents : $\\sum_{k=n}^\\infty u_k \\sim \\sum_{k=n}^\\infty v_k$", isCorrect: true }
                ],
                explanation: "Puisque les séries convergent, la limite des sommes partielles est une constante (pas forcément la même). Ce sont les queues (les restes) qui tendent vers 0 et qui sont équivalentes[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Restes & Estimations"],
                q: "Dans le cadre du Critère Spécial des Séries Alternées (CSSA), comment majore-t-on la valeur absolue du reste $|R_n|$ ?",
                options: [
                    { text: "$|R_n| \\le |u_n|$", isCorrect: false },
                    { text: "$|R_n| \\le |u_{n+1}|$ (la valeur absolue du PREMIER terme négligé)", isCorrect: true }
                ],
                explanation: "C'est l'un des outils les plus puissants du CSSA : l'erreur commise en arrêtant la somme au rang $n$ est majorée par la taille du tout premier terme que l'on n'a pas additionné[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Restes & Estimations"],
                q: "Dans le cadre du CSSA, quel est le signe du reste $R_n = \\sum_{k=n+1}^\\infty (-1)^k u_k$ ?",
                options: [
                    { text: "Il est toujours positif", isCorrect: false },
                    { text: "Il est du même signe que son premier terme : $(-1)^{n+1}$", isCorrect: true }
                ],
                explanation: "Le premier terme négligé impose son signe à tout le reste de la somme infinie (Prop 2.40)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Restes & Estimations"],
                q: "Comment démontre-t-on le Critère Spécial des Séries Alternées (CSSA) ?",
                options: [
                    { text: "En utilisant le critère de D'Alembert", isCorrect: false },
                    { text: "En prouvant que les suites extraites $(S_{2n})$ et $(S_{2n+1})$ sont adjacentes", isCorrect: true }
                ],
                explanation: "La démonstration classique (et exigible) montre que la somme des termes pairs décroît, celle des impairs croît, et que leur différence $S_{2n+1} - S_{2n}$ tend vers 0[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },

            // --- SÉRIES COMPLEXES ---
            {
                type: "qcm", tags: ["Séries complexes"],
                q: "Quand dit-on qu'une série à termes complexes $\\sum z_n$ converge (Def 2.42) ?",
                options: [
                    { text: "Quand le module $|z_n|$ tend vers 0", isCorrect: false },
                    { text: "Quand la série des parties réelles $\\sum \\text{Re}(z_n)$ ET la série des parties imaginaires $\\sum \\text{Im}(z_n)$ convergent toutes les deux", isCorrect: true }
                ],
                explanation: "Une série complexe se scinde simplement en deux séries réelles indépendantes. Elle converge si et seulement si ses deux composantes réelles convergent[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries complexes"],
                q: "À quelle condition une série complexe est-elle ABSOLUMENT convergente (Def 2.43) ?",
                options: [
                    { text: "Si la série des parties réelles et celle des parties imaginaires sont absolument convergentes", isCorrect: true },
                    { text: "Si $\\sum (z_n)^2$ converge", isCorrect: false }
                ],
                explanation: "La convergence absolue d'une série complexe implique la convergence absolue de ses composantes réelles et imaginaires (et réciproquement)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries complexes"],
                q: "Propriété fondamentale (Prop 2.44) : Une série complexe est absolument convergente SI ET SEULEMENT SI...",
                options: [
                    { text: "... la série réelle des modules $\\sum |z_n|$ converge", isCorrect: true },
                    { text: "... la série $\\sum |z_n|$ diverge", isCorrect: false }
                ],
                explanation: "C'est l'équivalence parfaite : tester la convergence absolue des composantes revient exactement à tester la convergence de la série (réelle et positive) des modules[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries complexes"],
                q: "Dans l'utilisation du critère d'Abel sur la série complexe $\\sum a_n e^{i k \\theta}$ (pour $\\theta \\not\\equiv 0 \\pmod{2\\pi}$), que vaut la somme partielle géométrique $\\sum_{k=0}^n e^{i\\theta k}$ ?",
                options: [
                    { text: "$\\frac{1-e^{i\\theta(n+1)}}{1-e^{i\\theta}}$", isCorrect: true },
                    { text: "$\\frac{e^{i\\theta n}-1}{e^{i\\theta}}$", isCorrect: false }
                ],
                explanation: "C'est la formule classique de la somme des termes d'une suite géométrique de raison $q = e^{i\\theta}$ (avec $q \\neq 1$)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries complexes"],
                q: "Comment majore-t-on le module de la somme de $b_k = e^{i \\theta k}$ pour l'appliquer au critère d'Abel (Ex 2.46) ?",
                options: [
                    { text: "En factorisant par l'angle moitié, on trouve une forme bornée par $\\frac{1}{|\\sin(\\theta/2)|}$", isCorrect: true },
                    { text: "Ce n'est pas majorable, ça tend vers l'infini", isCorrect: false }
                ],
                explanation: "L'astuce de l'angle moitié permet d'extraire des sinus, prouvant que la somme partielle $(B_n)$ des oscillateurs complexes est bornée, condition clé d'Abel[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Séries complexes"],
                q: "Quelle inégalité est utilisée pour lier la convergence absolue des parties réelles/imaginaires avec celle du module $|z_n|$ ?",
                options: [
                    { text: "$|z_n| \\le |\\text{Re}(z_n)| \\times |\\text{Im}(z_n)|$", isCorrect: false },
                    { text: "$\\max(|\\text{Re}(z_n)|, |\\text{Im}(z_n)|) \\le |z_n| \\le |\\text{Re}(z_n)| + |\\text{Im}(z_n)|$", isCorrect: true }
                ],
                explanation: "La partie gauche vient de la géométrie du triangle rectangle. La partie droite est l'inégalité triangulaire appliquée à $z = \\text{Re}(z) + i\\text{Im}(z)$[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            }
        ]
    },
    "Analyse 3 : Chapitre 3 (Intégrales généralisées)": {
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            // --- 3.1 DÉFINITIONS & PROPRIÉTÉS GÉNÉRALES ---
            {
                type: "qcm", tags: ["Définitions"],
                q: "Soit $f$ continue sur $[a, +\\infty[$. Comment définit-on la convergence de l'intégrale généralisée $\\int_a^{+\\infty} f(x)dx$ ?",
                options: [
                    { text: "L'intégrale converge si la limite $\\lim_{X \\to +\\infty} \\int_a^X f(x)dx$ existe et est un nombre réel", isCorrect: true },
                    { text: "L'intégrale converge si $f(x)$ tend vers 0 en $+\\infty$", isCorrect: false },
                    { text: "L'intégrale converge si la fonction est bornée", isCorrect: false }
                ],
                explanation: "C'est la définition fondamentale 3.1. On se ramène toujours à la limite d'une intégrale définie classique (sur un segment $[a, X]$) lorsque la borne $X$ tend vers l'infini[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Propriétés générales"],
                q: "La convergence d'une intégrale généralisée sur $[a, +\\infty[$ dépend-elle du choix de la borne inférieure $a$ (Prop 3.6) ?",
                options: [
                    { text: "Oui", isCorrect: false },
                    { text: "Non, $\\int_a^{+\\infty} f(x)dx$ et $\\int_b^{+\\infty} f(x)dx$ (avec $b \\ge a$) ont la même nature", isCorrect: true }
                ],
                explanation: "La relation de Chasles donne $\\int_a^X f = \\int_a^b f + \\int_b^X f$. Comme $\\int_a^b f$ est juste une constante finie, la limite en $+\\infty$ ne dépend que du comportement à l'infini[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Définitions", "Convergence absolue"],
                q: "Quand dit-on qu'une intégrale généralisée $\\int_a^{+\\infty} f(x)dx$ est ABSOLUMENT convergente ?",
                options: [
                    { text: "Si $\\int_a^{+\\infty} |f(x)|dx$ converge", isCorrect: true },
                    { text: "Si $f$ est une fonction positive", isCorrect: false }
                ],
                explanation: "La définition 3.7 est l'exacte jumelle de celle des séries : l'absolue convergence correspond à la convergence de l'intégrale de la valeur absolue de la fonction[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Convergence absolue"],
                q: "Que stipule le Théorème 3.8 concernant la convergence absolue des intégrales généralisées ?",
                options: [
                    { text: "Une intégrale convergente est toujours absolument convergente", isCorrect: false },
                    { text: "Si l'intégrale est absolument convergente, alors elle est convergente", isCorrect: true }
                ],
                explanation: "C'est le grand théorème d'analyse : l'absolue convergence implique la convergence. Cela permet de se ramener à l'étude de fonctions positives (les valeurs absolues)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Pièges"],
                q: "Vrai ou Faux : Si l'intégrale $\\int_a^{+\\infty} f(x)dx$ converge, alors la fonction $f(x)$ tend obligatoirement vers 0 lorsque $x \\to +\\infty$.",
                options: [
                    { text: "Vrai", isCorrect: false },
                    { text: "Faux", isCorrect: true }
                ],
                explanation: "Faux ! C'est une différence MAJEURE avec les séries. Une fonction peut posséder des \"pics\" arbitrairement hauts mais de plus en plus fins (aire tendant vers 0), de sorte que l'intégrale converge sans que $f$ tende vers 0 (Rem 3.9)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Propriétés générales"],
                q: "Pour une fonction CONTINUE ET POSITIVE sur $[a, +\\infty[$, combien de comportements possibles existe-t-il pour l'intégrale généralisée ?",
                options: [
                    { text: "3 (Convergence, divergence vers $+\\infty$, divergence sans limite)", isCorrect: false },
                    { text: "2 (Elle converge si la primitive est bornée, sinon elle diverge vers $+\\infty$)", isCorrect: true }
                ],
                explanation: "Puisque $f \\ge 0$, la fonction $F(X) = \\int_a^X f(x)dx$ est croissante. Une fonction croissante a seulement deux destins : soit elle est majorée (et converge), soit elle tend vers $+\\infty$ (Rem 3.10)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },

            // --- 3.1 INTÉGRALES DE RIEMANN (Infini) ---
            {
                type: "qcm", tags: ["Riemann & Puissances"],
                q: "Critère de Riemann en l'infini : À quelle condition l'intégrale $\\int_1^{+\\infty} \\frac{1}{x^\\alpha} dx$ converge-t-elle ?",
                options: [
                    { text: "Si $\\alpha < 1$", isCorrect: false },
                    { text: "Si $\\alpha > 1$", isCorrect: true },
                    { text: "Si $\\alpha \\ge 1$", isCorrect: false }
                ],
                explanation: "En $+\\infty$, il faut que la fonction \"s'écrase\" suffisamment vite vers 0. Cela nécessite une puissance strictement supérieure à 1 (Prop 3.3)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Riemann & Puissances"],
                q: "Que vaut l'intégrale convergente $\\int_1^{+\\infty} \\frac{1}{x^\\alpha} dx$ (pour $\\alpha > 1$) ?",
                options: [
                    { text: "$\\frac{1}{1-\\alpha}$", isCorrect: false },
                    { text: "$\\frac{1}{\\alpha-1}$", isCorrect: true }
                ],
                explanation: "La primitive de $x^{-\\alpha}$ est $\\frac{x^{1-\\alpha}}{1-\\alpha}$. Entre 1 et $+\\infty$, cela donne $0 - \\frac{1}{1-\\alpha} = \\frac{1}{\\alpha-1}$[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Riemann & Puissances"],
                q: "Pourquoi l'intégrale de Riemann $\\int_1^{+\\infty} \\frac{1}{x} dx$ (cas $\\alpha = 1$) diverge-t-elle ?",
                options: [
                    { text: "Parce que la primitive est $-1/x^2$ qui tend vers l'infini", isCorrect: false },
                    { text: "Parce que la primitive est $\\log(X)$, qui tend vers $+\\infty$ lorsque $X \\to +\\infty$", isCorrect: true }
                ],
                explanation: "Le cas $\\alpha=1$ est la bascule critique : la primitive est le logarithme, qui bien qu'il croisse très lentement, tend vers l'infini[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },

            // --- 3.1 CRITÈRES DE CONVERGENCE (Infini) ---
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Critère de comparaison : Soient $f$ et $g$ deux fonctions continues telles que $0 \\le f(x) \\le g(x)$ en $+\\infty$. Si l'intégrale de la plus grande ($g$) CONVERGE, que fait l'intégrale de la plus petite ($f$) ?",
                options: [
                    { text: "Elle diverge", isCorrect: false },
                    { text: "Elle converge aussi", isCorrect: true },
                    { text: "On ne peut rien affirmer", isCorrect: false }
                ],
                explanation: "Si l'aire sous la courbe de $g$ est finie, l'aire sous la courbe de $f$ (qui est positive et bornée par $g$) l'est inévitablement aussi (Prop 3.11)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Critère de comparaison : Soient $0 \\le f(x) \\le g(x)$. Si $\\int_a^{+\\infty} f(x)dx$ DIVERGE, que fait $\\int_a^{+\\infty} g(x)dx$ ?",
                options: [
                    { text: "Elle diverge vers $+\\infty$", isCorrect: true },
                    { text: "Elle converge", isCorrect: false }
                ],
                explanation: "Puisque $f$ est positive, l'aire sous $f$ tend vers $+\\infty$. Comme $g$ est au-dessus de $f$, son intégrale tend obligatoirement aussi vers l'infini[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Critère d'équivalence : Si $f(x) \\sim g(x)$ en $+\\infty$, et que les fonctions sont POSITIVES. Que peut-on affirmer (Prop 3.12) ?",
                options: [
                    { text: "Elles ont la même valeur d'intégrale", isCorrect: false },
                    { text: "Leurs intégrales généralisées sont de même nature (convergent ou divergent simultanément)", isCorrect: true }
                ],
                explanation: "L'équivalence en l'infini garantit que les aires ont le même comportement global. La positivité est une condition absolue pour appliquer ce critère[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Critère en $x^\\alpha$ en $+\\infty$ : S'il existe un réel $\\alpha > 1$ tel que $\\lim_{x \\to +\\infty} x^\\alpha f(x) = L$ (finie), alors...",
                options: [
                    { text: "... l'intégrale $\\int_a^{+\\infty} f(x)dx$ diverge", isCorrect: false },
                    { text: "... l'intégrale $\\int_a^{+\\infty} f(x)dx$ converge absolument", isCorrect: true }
                ],
                explanation: "Cela signifie que $f(x) = \\mathcal{O}(1/x^\\alpha)$. Comme $\\alpha > 1$, l'intégrale de Riemann de référence converge, donc celle de $f$ converge aussi (Prop 3.13)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Critère en $x^\\alpha$ en $+\\infty$ : S'il existe $\\alpha \\le 1$ tel que $\\lim_{x \\to +\\infty} x^\\alpha f(x) = +\\infty$, que fait l'intégrale de $f$ ?",
                options: [
                    { text: "Elle diverge", isCorrect: true },
                    { text: "Elle converge", isCorrect: false }
                ],
                explanation: "La fonction $f$ finit par dépasser un multiple de $1/x^\\alpha$. Puisque $\\alpha \\le 1$, l'intégrale de Riemann diverge et entraîne $f$ avec elle dans la divergence[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },

            // --- 3.2 INTÉGRALES DE RIEMANN ET CRITÈRES SUR INTERVALLE BORNÉ (Problème en 0 ou a) ---
            {
                type: "qcm", tags: ["Définitions"],
                q: "Soit $f$ continue sur $]a, b]$. Comment définit-on la convergence de l'intégrale généralisée avec un \"problème\" en $a$ ?",
                options: [
                    { text: "On prend la limite de $\\int_X^b f(x)dx$ quand $X \\to a^+$", isCorrect: true },
                    { text: "On prend la limite de $f(a) \\times (b-a)$", isCorrect: false }
                ],
                explanation: "Puisque le point de discontinuité ou d'explosion est en $a$, on intègre sur $[X, b]$ et on fait tendre $X$ vers $a$ par la droite (Def 3.15)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Riemann & Puissances"],
                q: "Critère de Riemann en 0 : À quelle condition l'intégrale $\\int_0^1 \\frac{1}{x^\\alpha} dx$ converge-t-elle (Prop 3.17) ?",
                options: [
                    { text: "Si $\\alpha < 1$", isCorrect: true },
                    { text: "Si $\\alpha > 1$", isCorrect: false },
                    { text: "Si $\\alpha \\le 1$", isCorrect: false }
                ],
                explanation: "ATTENTION à l'inversion par rapport à l'infini ! En 0, pour que l'aire sous la courbe d'une asymptote verticale soit finie, la puissance doit être STRICTEMENT INFÉRIEURE à 1[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Riemann & Puissances"],
                q: "Que vaut l'intégrale $\\int_0^1 \\frac{1}{x^\\alpha} dx$ lorsqu'elle converge ($\\alpha < 1$) ?",
                options: [
                    { text: "$\\frac{1}{1-\\alpha}$", isCorrect: true },
                    { text: "$\\frac{1}{\\alpha-1}$", isCorrect: false }
                ],
                explanation: "La primitive de $x^{-\\alpha}$ est $\\frac{x^{1-\\alpha}}{1-\\alpha}$. Entre $X$ et 1, quand $X \to 0$, $X^{1-\\alpha}$ tend vers 0 (car $1-\\alpha > 0$). Il reste donc $\\frac{1}{1-\\alpha}$[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Sur un intervalle borné $]a, b]$, les théorèmes de comparaison et d'équivalence s'appliquent-ils comme en l'infini ?",
                options: [
                    { text: "Oui, tant que les fonctions sont continues et POSITIVES sur $]a, b]$", isCorrect: true },
                    { text: "Non, ces critères sont réservés aux intégrales vers $+\\infty$", isCorrect: false }
                ],
                explanation: "Les Propositions 3.23 et 3.24 transposent exactement la logique des séries et de l'infini aux bornes finies, à condition de conserver la positivité[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Critère en $(x-a)^\\alpha$ : Soit un problème en $a$. Si $\\lim_{x \\to a^+} (x-a)^\\alpha f(x) = L$ (limite finie). Pour quelle valeur de $\\alpha$ l'intégrale converge-t-elle ?",
                options: [
                    { text: "$\\alpha < 1$", isCorrect: true },
                    { text: "$\\alpha > 1$", isCorrect: false }
                ],
                explanation: "Cela revient à dire que $f$ est dominée par $\\frac{1}{(x-a)^\\alpha}$ près de $a$. En se référant au critère de Riemann en 0, il faut impérativement $\\alpha < 1$ pour converger (Prop 3.25)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "S'il existe un $\\alpha \\ge 1$ tel que $\\lim_{x \\to a^+} (x-a)^\\alpha f(x) = +\\infty$, que fait l'intégrale $\\int_a^b f(x)dx$ ?",
                options: [
                    { text: "Elle diverge", isCorrect: true },
                    { text: "Elle converge", isCorrect: false }
                ],
                explanation: "La fonction explose près de $a$ \"plus vite\" que $1/(x-a)^\\alpha$. Comme $\\alpha \\ge 1$, l'intégrale de cette borne inférieure explose vers l'infini[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },

            // --- 3.3 INTÉGRALES DOUBLEMENT GÉNÉRALISÉES ---
            {
                type: "qcm", tags: ["Intégrales doublement généralisées"],
                q: "Qu'est-ce qu'une intégrale « doublement généralisée » ?",
                options: [
                    { text: "Une intégrale comportant DEUX problèmes : soit deux bornes infinies ($-\\infty$, $+\\infty$), soit des problèmes de continuité aux deux bornes", isCorrect: true },
                    { text: "Une intégrale double sur $\\mathbb{R}^2$", isCorrect: false }
                ],
                explanation: "Exemple typique : $\\int_{-\\infty}^{+\\infty} f(x)dx$, ou $\\int_{-1}^1 \\frac{1}{\\sqrt{1-x^2}}dx$ (qui explose en -1 ET en 1)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Intégrales doublement généralisées"],
                q: "Comment étudie-t-on formellement la convergence d'une intégrale doublement généralisée $\\int_a^b f(x)dx$ ?",
                options: [
                    { text: "On introduit un point arbitraire $c \\in ]a,b[$ et on exige que les DEUX intégrales $\\int_a^c f$ ET $\\int_c^b f$ convergent séparément", isCorrect: true },
                    { text: "On fait une limite symétrique des deux bornes en même temps", isCorrect: false }
                ],
                explanation: "La définition 3.27 exige la convergence indépendante des deux morceaux. Si l'un des deux diverge, l'intégrale globale diverge, même s'ils semblent se compenser[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Intégrales doublement généralisées"],
                q: "La nature de l'intégrale doublement généralisée dépend-elle du point de coupure $c$ choisi ?",
                options: [
                    { text: "Oui, un mauvais choix peut créer une divergence", isCorrect: false },
                    { text: "Non, la convergence et la valeur de la somme finale sont indépendantes du choix de $c$", isCorrect: true }
                ],
                explanation: "Tant que $c$ est choisi strictement à l'intérieur du domaine de continuité, les intégrales entre différentes coupures $c$ et $c'$ sont juste des intégrales définies classiques (qui valent une constante finie)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Pièges"],
                q: "La convergence de l'intégrale $\\int_{-\\infty}^{+\\infty} f(x)dx$ est-elle équivalente au fait que $\\lim_{X \\to +\\infty} \\int_{-X}^X f(x)dx$ existe ?",
                options: [
                    { text: "Oui, c'est la définition exacte", isCorrect: false },
                    { text: "Non, absolument pas !", isCorrect: true }
                ],
                explanation: "C'est un piège mortel (Rem 3.30). Pour $f(x)=x$, $\\int_{-X}^X x dx = 0$ pour tout $X$, donc la limite symétrique vaut 0. Pourtant $\\int_0^{+\\infty} x dx$ diverge vers l'infini, donc l'intégrale de $-\\infty$ à $+\\infty$ DIVERGE[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Intégrales doublement généralisées"],
                q: "Pour l'intégrale $\\int_0^{+\\infty} \\frac{1}{\\sqrt{x}} dx$, que peut-on dire (Ex 3.29) ?",
                options: [
                    { text: "Elle diverge à cause du problème en $+\\infty$", isCorrect: true },
                    { text: "Elle converge", isCorrect: false },
                    { text: "Elle diverge à cause du problème en 0", isCorrect: false }
                ],
                explanation: "Elle est doublement généralisée. En 0, $\\alpha = 1/2 < 1$, donc ça converge. Mais en $+\\infty$, $\\alpha = 1/2 < 1$, donc ça diverge. L'intégrale globale DIVERGE[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Intégrales doublement généralisées"],
                q: "Existe-t-il une puissance $\\alpha$ pour laquelle l'intégrale $\\int_0^{+\\infty} \\frac{1}{x^\\alpha} dx$ converge ?",
                options: [
                    { text: "Oui, pour $\\alpha=1$", isCorrect: false },
                    { text: "Non, pour aucune valeur de $\\alpha$", isCorrect: true }
                ],
                explanation: "Il faut diviser en $c=1$. Sur $]0, 1]$, on a besoin de $\\alpha < 1$. Sur $[1, +\\infty[$, on a besoin de $\\alpha > 1$. Ces deux conditions étant incompatibles, cette intégrale globale diverge TOUJOURS[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },

            // --- 3.4 CALCUL INTÉGRAL & EXERCICES ---
            {
                type: "qcm", tags: ["Calculs & Exercices"],
                q: "Quelle est la règle d'or pour calculer la valeur exacte d'une intégrale généralisée ?",
                options: [
                    { text: "Faire directement une intégration par parties avec des bornes infinies", isCorrect: false },
                    { text: "Faire tous les calculs (IP, Changement de variable) sur l'intégrale définie $\\int_a^X$, PUIS passer à la limite $X \\to \\infty$ en dernier", isCorrect: true }
                ],
                explanation: "Il ne faut jamais écrire $+\\infty$ dans un crochet ou un changement de variable en cours de route. On calcule à $X$ fixé, on simplifie, et on fait la limite à la fin (Sect 3.4)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Calculs & Exercices"],
                q: "Que vaut l'intégrale $\\int_0^{+\\infty} x e^{-x} dx$ (Exemple 3.31) ?",
                options: [
                    { text: "0", isCorrect: false },
                    { text: "1", isCorrect: true },
                    { text: "$+\\infty$", isCorrect: false }
                ],
                explanation: "On pose $I(X) = \\int_0^X x e^{-x} dx$. Par IPP, $I(X) = [-xe^{-x}]_0^X + \\int_0^X e^{-x} dx = -Xe^{-X} - e^{-X} + 1$. Quand $X \\to \\infty$, les exponentielles l'emportent et écrasent le $X$, il reste $1$[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Calculs & Exercices"],
                q: "La fonction Gamma (d'Euler) est définie par $\\Gamma(a) = \\int_0^{+\\infty} t^{a-1} e^{-t} dt$. Pour quelles valeurs de $a$ cette intégrale converge-t-elle (Exercice 3.2) ?",
                options: [
                    { text: "Pour tout $a > 0$", isCorrect: true },
                    { text: "Pour tout $a \\in \\mathbb{R}$", isCorrect: false },
                    { text: "Pour $a > 1$ uniquement", isCorrect: false }
                ],
                explanation: "Le terme $e^{-t}$ écrase toute puissance en l'infini, garantissant la convergence en $+\\infty$. Le problème est en $0$, où $t^{a-1} = 1/t^{1-a}$. Il faut que $1-a < 1$, soit $a > 0$ pour que l'intégrale de Riemann converge en $0$[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Calculs & Exercices"],
                q: "Quelle relation de récurrence fondamentale vérifie la fonction Gamma : $\\Gamma(a+1)$ ?",
                options: [
                    { text: "$\\Gamma(a+1) = a \\Gamma(a)$", isCorrect: true },
                    { text: "$\\Gamma(a+1) = (a+1) \\Gamma(a)$", isCorrect: false }
                ],
                explanation: "Cette relation, obtenue par une simple intégration par parties, montre que la fonction Gamma généralise la factorielle. Pour un entier $n$, $\\Gamma(n) = (n-1)!$[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },

            // --- QUESTIONS COMPLÉMENTAIRES (Pour blinder les 40 items) ---
            {
                type: "qcm", tags: ["Propriétés générales"],
                q: "Si les intégrales $\\int_a^{+\\infty} f(x)dx$ et $\\int_a^{+\\infty} g(x)dx$ convergent, que peut-on dire de $\\int_a^{+\\infty} (f(x)+g(x))dx$ ?",
                options: [
                    { text: "Elle converge et vaut la somme des deux intégrales", isCorrect: true },
                    { text: "Elle converge seulement si $f$ et $g$ sont positives", isCorrect: false }
                ],
                explanation: "C'est la propriété de linéarité des intégrales généralisées convergentes (Prop 3.5). La somme de limites finies est la limite des sommes[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Définitions"],
                q: "Que représente le \"reste\" $R(x)$ d'une intégrale généralisée convergente $\\int_0^{+\\infty} f(t)dt$ ?",
                options: [
                    { text: "$R(x) = \\int_0^x f(t)dt$", isCorrect: false },
                    { text: "$R(x) = \\int_x^{+\\infty} f(t)dt$", isCorrect: true }
                ],
                explanation: "Le reste mesure \"l'aire qu'il reste à balayer jusqu'à l'infini\". Puisque l'intégrale totale converge, ce reste $\\lim_{x \\to +\\infty} R(x)$ tend obligatoirement vers 0[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Vrai ou Faux : Si $f(x) \\sim \\frac{-1}{x}$ en $+\\infty$, l'intégrale $\\int_1^{+\\infty} f(x)dx$ converge.",
                options: [
                    { text: "Vrai", isCorrect: false },
                    { text: "Faux", isCorrect: true }
                ],
                explanation: "Faux. L'équivalence à $\\frac{-1}{x}$ (qui garde un signe constant négatif) entraîne que l'intégrale est de la même nature que l'intégrale de $\\frac{-1}{x}$. Celle-ci diverge (cas $\\alpha=1$)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Peut-on utiliser le critère d'équivalence $f(x) \\sim g(x)$ si $f$ et $g$ changent constamment de signe en l'infini ?",
                options: [
                    { text: "Oui", isCorrect: false },
                    { text: "Non, c'est interdit", isCorrect: true }
                ],
                explanation: "Comme pour les séries, le critère d'équivalence exige formellement que les fonctions soient de SIGNE CONSTANT (strictement positives ou strictement négatives) au voisinage de l'infini[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Convergence absolue", "Pièges"],
                q: "Si $\\int_a^{+\\infty} f(x)dx$ est semi-convergente (converge mais pas absolument), peut-on la majorer par l'intégrale d'une fonction plus grande ?",
                options: [
                    { text: "Oui", isCorrect: false },
                    { text: "Non, la majoration nécessite la positivité ou l'étude de $|f|$", isCorrect: true }
                ],
                explanation: "Les critères de majoration ($0 \\le f \\le g$) sont structurellement liés à la positivité. Une fonction semi-convergente joue sur l'annulation de ses aires positives et négatives, on ne peut pas l'encadrer de la même manière[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Intégrales doublement généralisées"],
                q: "Dans l'étude de l'intégrale doublement généralisée $\\int_{-\\infty}^{+\\infty} f(x)dx$, si la partie $\\int_0^{+\\infty} f(x)dx$ converge vers $L$ et que $\\int_{-\\infty}^0 f(x)dx$ diverge vers $-\\infty$, que conclut-on ?",
                options: [
                    { text: "L'intégrale globale diverge", isCorrect: true },
                    { text: "L'intégrale globale diverge vers $-\\infty$", isCorrect: false }
                ],
                explanation: "Dès que l'une des deux branches diverge, l'intégrale doublement généralisée diverge globalement par définition. On évite de donner une valeur infinie si les deux côtés ne s'accordent pas[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Calculs & Exercices"],
                q: "Si on souhaite utiliser une intégration par parties pour prouver la convergence d'une intégrale généralisée, quelle est la bonne méthodologie ?",
                options: [
                    { text: "Appliquer l'IPP sur l'intégrale infinie et voir si les termes de bord s'annulent", isCorrect: false },
                    { text: "Appliquer l'IPP sur le segment $[a, X]$, prouver que le terme crochet a une limite finie quand $X \\to \\infty$, puis étudier la convergence de la nouvelle intégrale résiduelle", isCorrect: true }
                ],
                explanation: "Les théorèmes opératoires classiques s'appliquent sur des intégrales propres (finies). On justifie l'existence de la limite globale en s'assurant que TOUTES les parties de la formule IPP convergent séparément[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Propriétés générales"],
                q: "Pour prouver que l'absolue convergence entraîne la convergence, on montre que la suite $s_n = \\int_a^{X_n} f(x)dx$ est...",
                options: [
                    { text: "... croissante et majorée", isCorrect: false },
                    { text: "... de Cauchy, en s'appuyant sur la convergence de $\\int_a^{X_n} |f(x)|dx$", isCorrect: true }
                ],
                explanation: "La démonstration (Thm 3.8) utilise fondamentalement la complétude de $\\mathbb{R}$ : on prouve que la suite des intégrales définies est de Cauchy grâce à l'inégalité triangulaire sur les valeurs absolues[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Définitions"],
                q: "Soit $f$ une fonction continue sur $]-\\infty, b]$. Comment définit-on la convergence de $\\int_{-\\infty}^b f(x)dx$ ?",
                options: [
                    { text: "La limite de $\\int_X^b f(x)dx$ quand $X \\to -\\infty$ doit exister et être finie", isCorrect: true },
                    { text: "On fait le changement de variable $x = -t$ pour se ramener à $+\\infty$", isCorrect: false }
                ],
                explanation: "C'est l'exact miroir de la définition en $+\\infty$ (Remarque 3.4). Le changement de variable est une technique de calcul, pas la définition[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Critères de convergence"],
                q: "Soit un problème en $a$. Si $f(x) = \\mathcal{O}\\left(\\frac{1}{(x-a)^{\\alpha}}\\right)$ près de $a^+$. Pour quelle condition l'intégrale de $f$ sur $]a, b]$ converge-t-elle assurément ?",
                options: [
                    { text: "Pour $\\alpha < 1$", isCorrect: true },
                    { text: "Pour $\\alpha \\ge 1$", isCorrect: false }
                ],
                explanation: "La notation Grand $\\mathcal{O}$ signifie que $f$ est majorée (en valeur absolue) par un multiple de la fonction de référence. Pour que l'aire de cette limite supérieure ne diverge pas en $a$, il faut $\\alpha < 1$ (Prop 3.25)[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Calculs & Exercices"],
                q: "L'intégrale $\\int_0^1 \\ln(x) dx$ a un problème en 0. Que vaut cette intégrale (si elle converge) ?",
                options: [
                    { text: "Elle diverge vers $-\\infty$", isCorrect: false },
                    { text: "Elle converge et vaut $-1$", isCorrect: true }
                ],
                explanation: "La primitive est $x\\ln(x) - x$. On calcule sur $[X, 1]$ : $(1\\ln(1)-1) - (X\\ln(X)-X) = -1 - X\\ln(X) + X$. Par croissances comparées, $X\\ln(X) \\to 0$ quand $X \\to 0^+$. La limite est donc $-1$.", // Calcul implicite standard mais lié à la section "Calcul Intégral".
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            },
            {
                type: "qcm", tags: ["Intégrales doublement généralisées"],
                q: "Pour l'intégrale $\\int_{-1}^1 \\frac{1}{\\sqrt{1-x^2}} dx$ (Exemple 3.28), y a-t-il convergence ?",
                options: [
                    { text: "Oui, car près de $x=1$ et $x=-1$, la fonction se comporte comme une puissance $1/2 < 1$", isCorrect: true },
                    { text: "Non, elle diverge aux deux bornes", isCorrect: false }
                ],
                explanation: "On coupe en 0. Près de 1, $1-x^2 = (1-x)(1+x) \\sim 2(1-x)$. On a donc du $1/(1-x)^{1/2}$, ce qui est un problème de type Riemann avec $\\alpha = 1/2 < 1$. Ça converge des deux côtés[cite: 3].",
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0 }
            }
        ]
    },
    "Analyse 3 : Chapitre 4 (Suites de fonctions)": {
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
    },
    "Analyse 3 : Chapitre 5 (Séries Entières)": {
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            // --- LEMME D'ABEL ET RAYON DE CONVERGENCE ---
            {
                type: "qcm", tags: ["Lemme d'Abel", "Définitions"],
                q: "Que stipule le Lemme d'Abel concernant une série entière $\\sum a_n z^n$ ?",
                options: [
                    { text: "S'il existe un point $z_0$ tel que la suite $(a_n z_0^n)$ est BORNÉE, alors la série converge absolument pour tout $z$ tel que $|z| < |z_0|$", isCorrect: true },
                    { text: "Si la série converge en $z_0$, alors elle converge pour tout $z$ tel que $|z| \\le |z_0|$", isCorrect: false }
                ],
                explanation: "C'est la pierre angulaire des séries entières. Le fait que le terme général soit juste BORNÉ en $z_0$ suffit à forcer la convergence absolue (et même normale sur les compacts) à l'intérieur du disque ouvert de rayon $|z_0|$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Rayon de convergence", "Définitions"],
                q: "Le rayon de convergence $R$ d'une série entière $\\sum a_n z^n$ est défini comme...",
                options: [
                    { text: "La borne supérieure (sup) de l'ensemble des réels $r \\ge 0$ tels que la suite $(|a_n| r^n)$ est bornée", isCorrect: true },
                    { text: "La limite de $|a_{n+1}/a_n|$ quand $n \\to \\infty$", isCorrect: false }
                ],
                explanation: "C'est la définition exacte. Le critère de d'Alembert n'est qu'une astuce de calcul qui ne marche pas toujours, alors que la définition avec le sup de la suite bornée (issue du Lemme d'Abel) est universelle.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Convergence", "Disque"],
                q: "Si $R$ est le rayon de convergence de $\\sum a_n z^n$ (avec $0 < R < \\infty$), quelle est la nature de la convergence sur le disque ouvert $D(0, R)$ ?",
                options: [
                    { text: "Absolue partout sur $D(0,R)$, et NORMALE sur tout sous-disque fermé (compact) inclus dans $D(0,R)$", isCorrect: true },
                    { text: "Normale sur le disque ouvert $D(0, R)$ tout entier", isCorrect: false }
                ],
                explanation: "Piège classique ! La convergence n'est presque jamais normale sur le disque ouvert entier (l'erreur explose au bord). Mais elle est normale sur tout compact $[-r, r]$ strictement à l'intérieur.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Rayon de convergence", "Bord du disque"],
                q: "Si $|z| = R$ (on est sur le cercle de convergence), que peut-on affirmer sur la série $\\sum a_n z^n$ ?",
                options: [
                    { text: "Absolument rien : elle peut converger absolument, semi-converger ou diverger selon la série", isCorrect: true },
                    { text: "Elle diverge obligatoirement", isCorrect: false },
                    { text: "Elle converge, mais pas absolument", isCorrect: false }
                ],
                explanation: "Le bord du disque est la « zone de non-droit ». Exemple : $\\sum z^n$ (diverge partout sur $|z|=1$), $\\sum z^n/n$ (semi-converge sauf en 1), $\\sum z^n/n^2$ (converge absolument partout sur $|z|=1$).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- CALCUL DU RAYON (D'ALEMBERT ET CAUCHY) ---
            {
                type: "qcm", tags: ["Calcul du rayon", "Critère de d'Alembert"],
                q: "Pour une série entière $\\sum a_n z^n$, on suppose que $\\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| = L$. Que vaut le rayon $R$ ?",
                options: [
                    { text: "$R = \\frac{1}{L}$ (avec $1/0 = \\infty$ et $1/\\infty = 0$)", isCorrect: true },
                    { text: "$R = L$", isCorrect: false }
                ],
                explanation: "C'est l'application du critère de d'Alembert. Si la limite vaut $L$, on étudie $|a_{n+1}z^{n+1}| / |a_nz^n| = |z| \\times L$. Pour que ça converge, il faut $|z|L < 1$, donc $|z| < 1/L$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Calcul du rayon", "Critère de d'Alembert"],
                q: "Quelle est la condition obligatoire pour pouvoir utiliser la règle de d'Alembert pour trouver le rayon de convergence ?",
                options: [
                    { text: "Les coefficients $a_n$ ne doivent pas s'annuler à partir d'un certain rang", isCorrect: true },
                    { text: "Les coefficients $a_n$ doivent être positifs", isCorrect: false }
                ],
                explanation: "On ne peut pas diviser par zéro ! Pour une série lacunaire (comme $\\sum z^{2n}$), la moitié des coefficients sont nuls, d'Alembert est inutilisable tel quel.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Calcul du rayon", "Formule de Hadamard"],
                q: "La formule de Cauchy-Hadamard stipule que le rayon de convergence $R$ vérifie : $\\frac{1}{R} = ...$",
                options: [
                    { text: "$\\limsup_{n \\to \\infty} |a_n|^{1/n}$", isCorrect: true },
                    { text: "$\\lim_{n \\to \\infty} |a_n|^{1/n}$", isCorrect: false }
                ],
                explanation: "Il faut utiliser la limite supérieure (limsup) car la simple limite de la racine $n$-ième n'existe pas toujours, notamment si la série est lacunaire ou oscille.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Calcul du rayon", "Croissance comparée"],
                q: "Quel est le rayon de convergence de la série $\\sum n^k a_n z^n$ (pour un entier $k \\in \\mathbb{Z}$ fixé), sachant que $\\sum a_n z^n$ a un rayon $R$ ?",
                options: [
                    { text: "Le rayon est toujours $R$", isCorrect: true },
                    { text: "Le rayon dépend du signe de $k$", isCorrect: false }
                ],
                explanation: "Multiplier ou diviser les coefficients par une puissance de $n$ ne change JAMAIS le rayon de convergence. La croissance exponentielle de $z^n$ écrase totalement la croissance polynomiale de $n^k$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Calcul du rayon", "Séries lacunaires"],
                q: "Soit la série entière $\\sum a_n z^{2n}$. Si le rayon de $\\sum a_n w^n$ est $R'$, quel est le rayon $R$ de la série en $z$ ?",
                options: [
                    { text: "$R = \\sqrt{R'}$", isCorrect: true },
                    { text: "$R = R'^2$", isCorrect: false },
                    { text: "$R = R'/2$", isCorrect: false }
                ],
                explanation: "On pose $w = z^2$. La série converge si $|w| < R'$, c'est-à-dire si $|z|^2 < R'$, soit $|z| < \\sqrt{R'}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- PROPRIÉTÉS DE LA SOMME (Continuité, Dérivation, Intégration) ---
            {
                type: "qcm", tags: ["Propriétés", "Dérivation"],
                q: "Soit $S(x) = \\sum_{n=0}^\\infty a_n x^n$ de rayon $R > 0$. La somme $S$ est-elle dérivable sur $]-R, R[$ ?",
                options: [
                    { text: "Oui, elle est indéfiniment dérivable (classe $C^\\infty$) et on peut dériver terme à terme", isCorrect: true },
                    { text: "Oui, mais on ne peut la dériver qu'une seule fois", isCorrect: false }
                ],
                explanation: "C'est la magie des séries entières. À l'intérieur de l'intervalle ouvert de convergence, la fonction est de classe $\\mathcal{C}^\\infty$. Le rayon de la série dérivée est le même que l'original.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Propriétés", "Primitives"],
                q: "Quelle est la primitive s'annulant en 0 de $S(x) = \\sum_{n=0}^\\infty a_n x^n$ sur $]-R, R[$ ?",
                options: [
                    { text: "$\\sum_{n=0}^\\infty \\frac{a_n}{n+1} x^{n+1}$", isCorrect: true },
                    { text: "$\\sum_{n=1}^\\infty \\frac{a_n}{n} x^n$", isCorrect: false }
                ],
                explanation: "On intègre terme à terme. La primitive de $x^n$ est $x^{n+1}/(n+1)$. Cette série intégrée conserve exactement le même rayon de convergence $R$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Propriétés", "Unicité"],
                q: "Principe des zéros isolés / Unicité du DSE : Si $\\sum a_n x^n = \\sum b_n x^n$ sur un petit intervalle $]-\\varepsilon, \\varepsilon[$. Que conclut-on ?",
                options: [
                    { text: "Pour tout $n$, $a_n = b_n$", isCorrect: true },
                    { text: "Les deux sommes sont égales mais les coefficients peuvent différer", isCorrect: false }
                ],
                explanation: "L'unicité du développement en série entière est absolue. Comme $a_n = S^{(n)}(0) / n!$, si deux séries coïncident sur un voisinage de 0, elles ont les mêmes dérivées en 0, donc les mêmes coefficients.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Théorème d'Abel radial", "Bord du disque"],
                q: "Si la série entière $S(x) = \\sum a_n x^n$ converge en $x = R$. Que garantit le théorème d'Abel radial ?",
                options: [
                    { text: "La fonction somme $S$ est continue à gauche en $R$ : $\\lim_{x \\to R^-} S(x) = \\sum_{n=0}^\\infty a_n R^n$", isCorrect: true },
                    { text: "La fonction $S$ est dérivable en $R$", isCorrect: false }
                ],
                explanation: "C'est un théorème subtil : la convergence uniforme sur les compacts $]-R, R[$ ne garantit rien sur le bord. Abel radial affirme que SI ça converge au bord, ALORS la continuité s'étend jusqu'à ce bord.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- DÉVELOPPEMENTS USUELS (DSE) ---
            {
                type: "qcm", tags: ["DSE usuels", "Exponentielle"],
                q: "Quel est le DSE de $e^x$ et son rayon de convergence ?",
                options: [
                    { text: "$\\sum_{n=0}^\\infty \\frac{x^n}{n!}$ avec $R = +\\infty$", isCorrect: true },
                    { text: "$\\sum_{n=1}^\\infty \\frac{x^n}{n}$ avec $R = +\\infty$", isCorrect: false }
                ],
                explanation: "La factorielle au dénominateur grandit beaucoup plus vite que n'importe quelle puissance $x^n$. Par d'Alembert, la limite de $1/(n+1)$ est 0, donc le rayon est infini.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["DSE usuels", "Fonction rationnelle"],
                q: "Quel est le DSE de $\\frac{1}{1-x}$ et son rayon de convergence ?",
                options: [
                    { text: "$\\sum_{n=0}^\\infty x^n$ avec $R = 1$", isCorrect: true },
                    { text: "$\\sum_{n=0}^\\infty (-1)^n x^n$ avec $R = 1$", isCorrect: false }
                ],
                explanation: "C'est la série géométrique de base. Elle diverge dès que $|x| \\ge 1$. C'est la matrice de tous les autres DSE par dérivation ou intégration.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["DSE usuels", "Logarithme"],
                q: "Sachant que $\\frac{1}{1+x} = \\sum_{n=0}^\\infty (-1)^n x^n$, quel est le DSE de $\\ln(1+x)$ ?",
                options: [
                    { text: "$\\sum_{n=1}^\\infty (-1)^{n-1} \\frac{x^n}{n}$ avec $R = 1$", isCorrect: true },
                    { text: "$\\sum_{n=0}^\\infty (-1)^n \\frac{x^{n+1}}{n+1}$ avec $R = 1$", isCorrect: false },
                    { text: "Les deux expressions sont rigoureusement identiques", isCorrect: true }
                ],
                explanation: "On intègre $\\sum (-1)^n x^n$ terme à terme pour obtenir $\\sum (-1)^n x^{n+1}/(n+1)$. Un simple changement d'indice ($k = n+1$) donne la forme classique. Le rayon reste 1.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["DSE usuels", "Trigonométrie"],
                q: "Quel est le DSE de $\\sin(x)$ et son rayon de convergence ?",
                options: [
                    { text: "$\\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{(2n+1)!}$ avec $R = +\\infty$", isCorrect: true },
                    { text: "$\\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n}}{(2n)!}$ avec $R = +\\infty$", isCorrect: false }
                ],
                explanation: "Le sinus est une fonction impaire, son DSE ne contient donc QUE des puissances impaires. L'autre formule correspond au cosinus (fonction paire).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["DSE usuels", "Arc Tangente"],
                q: "Quel est le DSE de $\\arctan(x)$ et comment le retrouve-t-on ?",
                options: [
                    { text: "$\\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{2n+1}$, trouvé en intégrant $\\frac{1}{1+x^2}$", isCorrect: true },
                    { text: "$\\sum_{n=0}^\\infty \\frac{x^{2n+1}}{2n+1}$, trouvé en intégrant $\\frac{1}{1-x^2}$", isCorrect: false }
                ],
                explanation: "On part de $1/(1-u) = \\sum u^n$. On pose $u = -x^2$, ce qui donne $1/(1+x^2) = \\sum (-1)^n x^{2n}$. On intègre terme à terme pour obtenir le DSE de l'arctangente.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["DSE usuels", "Binôme de Newton généralisé"],
                q: "Quel est le DSE de $(1+x)^\\alpha$ (pour $\\alpha \\notin \\mathbb{N}$) ?",
                options: [
                    { text: "$1 + \\sum_{n=1}^\\infty \\frac{\\alpha(\\alpha-1)...(\\alpha-n+1)}{n!} x^n$ avec $R = 1$", isCorrect: true },
                    { text: "$\\sum_{n=0}^\\infty \\alpha^n x^n$ avec $R = 1$", isCorrect: false }
                ],
                explanation: "C'est la formule du binôme généralisé. Elle se démontre en cherchant la solution DSE de l'équation différentielle $(1+x)y' = \\alpha y$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            
            // --- OPÉRATIONS (Produit, Équations Différentielles) ---
            {
                type: "qcm", tags: ["Opérations", "Produit de Cauchy"],
                q: "Soient deux séries $\\sum a_n x^n$ (rayon $R_1$) et $\\sum b_n x^n$ (rayon $R_2$). Que vaut le rayon $R$ de la série produit $\\sum c_n x^n$ ?",
                options: [
                    { text: "$R \\ge \\min(R_1, R_2)$", isCorrect: true },
                    { text: "$R = \\min(R_1, R_2)$ strictement", isCorrect: false },
                    { text: "$R = R_1 \\times R_2$", isCorrect: false }
                ],
                explanation: "Le produit de Cauchy converge à l'intérieur du plus petit des deux disques. Cependant, le rayon peut s'avérer STRICTEMENT supérieur par hasard (si des annulations miraculeuses s'opèrent dans les $c_n$).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Opérations", "Produit de Cauchy"],
                q: "Dans le produit de Cauchy $\\sum c_n x^n = (\\sum a_n x^n)(\\sum b_n x^n)$, quelle est l'expression du coefficient $c_n$ ?",
                options: [
                    { text: "$c_n = \\sum_{k=0}^n a_k b_{n-k}$", isCorrect: true },
                    { text: "$c_n = a_n b_n$", isCorrect: false }
                ],
                explanation: "En développant le produit, on regroupe les termes donnant la puissance $x^n$. L'indice du premier doit être $k$, et l'indice du second doit être le complément $n-k$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Équations différentielles", "Méthodologie"],
                q: "Pour résoudre une équation différentielle (ex: $y' - xy = 0$) à l'aide des séries entières, quelle est la première étape ?",
                options: [
                    { text: "On pose $y(x) = \\sum a_n x^n$, on dérive terme à terme, et on injecte dans l'équation pour obtenir une relation de récurrence sur les $a_n$", isCorrect: true },
                    { text: "On intègre directement l'équation", isCorrect: false }
                ],
                explanation: "On suppose a priori que la solution admet un DSE de rayon $R>0$. L'identification des coefficients permet de trouver $a_n$. On valide a posteriori la méthode en vérifiant que le rayon trouvé est bien non nul.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Dérivation", "Calcul pratique"],
                q: "Que vaut la somme $\\sum_{n=1}^\\infty n x^{n-1}$ pour $|x| < 1$ ?",
                options: [
                    { text: "$\\frac{1}{(1-x)^2}$", isCorrect: true },
                    { text: "$\\frac{x}{(1-x)^2}$", isCorrect: false }
                ],
                explanation: "C'est la dérivée directe de la série géométrique $\\sum_{n=0}^\\infty x^n = \\frac{1}{1-x}$. La dérivée de $(1-x)^{-1}$ est $(-1)(-1)(1-x)^{-2} = \\frac{1}{(1-x)^2}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Dérivation", "Calcul pratique"],
                q: "Que vaut la somme $\\sum_{n=1}^\\infty n x^n$ pour $|x| < 1$ ?",
                options: [
                    { text: "$\\frac{x}{(1-x)^2}$", isCorrect: true },
                    { text: "$\\frac{1}{(1-x)^2}$", isCorrect: false }
                ],
                explanation: "Puisque $\\sum_{n=1}^\\infty n x^{n-1} = \\frac{1}{(1-x)^2}$, il suffit de multiplier l'expression de gauche par $x$ (ce qui donne bien $\\sum n x^n$) et de multiplier le côté droit par $x$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- ASTUCES ET CALCULS DE RAYONS COMPLEXES ---
            {
                type: "qcm", tags: ["Astuces", "Rayon de convergence"],
                q: "Si la suite des coefficients $|a_n|$ est majorée par une constante $M$, que peut-on dire du rayon $R$ ?",
                options: [
                    { text: "$R \\ge 1$", isCorrect: true },
                    { text: "$R = 1$", isCorrect: false },
                    { text: "$R \\le 1$", isCorrect: false }
                ],
                explanation: "Si $|a_n| \\le M$, alors pour $|z|<1$, on a $|a_n z^n| \\le M|z|^n$. Or $\\sum |z|^n$ converge (série géométrique). Donc par comparaison, la série converge pour tout $|z|<1$, ce qui prouve $R \\ge 1$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Calcul du rayon", "Formule de Stirling"],
                q: "Quel est le rayon de convergence de la série $\\sum_{n=1}^\\infty \\frac{n^n}{n!} z^n$ ?",
                options: [
                    { text: "$1/e$", isCorrect: true },
                    { text: "$e$", isCorrect: false },
                    { text: "$+\\infty$", isCorrect: false }
                ],
                explanation: "Par d'Alembert : $\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^{n+1}}{(n+1)!} \\frac{n!}{n^n} = \\frac{(n+1)^n}{n^n} = (1 + \\frac{1}{n})^n$. On sait que cette limite (caractérisation classique) vaut $e$. Donc $R = 1/e$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    },
    "Analyse 3 : Chapitre 6 (Topologie - Partie 1)": {
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            // --- 6.1 DÉFINITION ET EXEMPLES (DISTANCES) ---
            {
                type: "qcm", tags: ["Distance", "Définitions"],
                q: "Quelles sont les quatre propriétés fondamentales qui définissent une distance $d$ sur un ensemble $X$ ?",
                options: [
                    { text: "Positivité, séparation, symétrie, inégalité triangulaire", isCorrect: true },
                    { text: "Positivité, séparation, homogénéité, inégalité triangulaire", isCorrect: false },
                    { text: "Séparation, linéarité, symétrie, inégalité triangulaire", isCorrect: false }
                ],
                explanation: "Une distance doit vérifier $d(x,y) \\ge 0$ (positivité), $d(x,y)=0 \\iff x=y$ (séparation), $d(x,y)=d(y,x)$ (symétrie) et $d(x,y) \\le d(x,z)+d(z,y)$ (inégalité triangulaire)[cite: 1]. L'homogénéité est une propriété des normes, pas des distances[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Distance", "Propriétés"],
                q: "Que stipule la « deuxième inégalité triangulaire » dans un espace métrique ?",
                options: [
                    { text: "$d(x,y) \\ge |d(x,z) - d(y,z)|$", isCorrect: true },
                    { text: "$d(x,y) \\le |d(x,z) - d(y,z)|$", isCorrect: false }
                ],
                explanation: "Pour tous $x, y, z \\in X$, on a $d(x,y) \\ge |d(x,z) - d(y,z)|$[cite: 1]. Cette propriété découle directement de l'inégalité triangulaire classique[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Distance", "Exemples"],
                q: "Comment est définie la distance discrète sur un ensemble $X$ non vide ?",
                options: [
                    { text: "$d(x,y) = 1$ si $x \\neq y$, et $d(x,y) = 0$ si $x = y$", isCorrect: true },
                    { text: "$d(x,y) = |x - y|$", isCorrect: false }
                ],
                explanation: "Dans la distance discrète, tous les points distincts sont à une distance exacte de 1 entre eux[cite: 1]. Si les points sont identiques, la distance est nulle par séparation[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Distance", "Équivalence"],
                q: "À quelle condition deux distances $d$ et $d_*$ sur $X$ sont-elles dites « équivalentes » ?",
                options: [
                    { text: "S'il existe $C_1, C_2 > 0$ telles que $C_1 d(x,y) \\le d_*(x,y) \\le C_2 d(x,y)$ pour tous $x,y$", isCorrect: true },
                    { text: "S'il existe une constante $C > 0$ telle que $d(x,y) = C d_*(x,y)$ pour tous $x,y$", isCorrect: false }
                ],
                explanation: "L'équivalence de distances permet de borner l'une par rapport à l'autre à un facteur multiplicatif près, de part et d'autre ($C_1$ et $C_2$)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Distance", "Contre-exemples"],
                q: "Sur $\\mathbb{R}$, la distance usuelle $d(x,y) = |x-y|$ et la distance discrète sont-elles équivalentes ?",
                options: [
                    { text: "Non, elles ne sont pas équivalentes", isCorrect: true },
                    { text: "Oui, elles sont équivalentes", isCorrect: false }
                ],
                explanation: "Elles ne sont pas équivalentes[cite: 1]. Par exemple, si on prend $y = 1/n$, la distance discrète reste de 1, ce qui empêcherait l'existence d'une constante $C_1 > 0$ vérifiant l'inégalité $C_1 d(x,y) \\le |x-y|$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Distance", "Exemples"],
                q: "Comment définit-on la distance $d_\\infty$ sur $\\mathbb{R}^n$ ?",
                options: [
                    { text: "$d_\\infty(x,y) = \\max_{i=1,...,n} |x_i - y_i|$", isCorrect: true },
                    { text: "$d_\\infty(x,y) = \\sum_{i=1}^n |x_i - y_i|$", isCorrect: false }
                ],
                explanation: "La distance $d_\\infty$ correspond au maximum des écarts absolus coordonnée par coordonnée[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Distance", "Espaces de fonctions"],
                q: "Comment définit-on la distance uniforme $\\sigma(f,g)$ sur l'espace des applications bornées $\\mathcal{B}(X, Y)$ ?",
                options: [
                    { text: "$\\sigma(f,g) = \\sup_{x \\in X} \\delta(f(x), g(x))$", isCorrect: true },
                    { text: "$\\sigma(f,g) = \\int_X \\delta(f(x), g(x)) dx$", isCorrect: false }
                ],
                explanation: "La distance uniforme est la borne supérieure (sup) des distances ponctuelles $\\delta(f(x), g(x))$ sur l'ensemble $X$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Distance", "Produit"],
                q: "Soient $(X_1, d_1)$ et $(X_2, d_2)$ deux espaces métriques. Comment définit-on naturellement la distance produit $d(x,y)$ sur $X_1 \\times X_2$ ?",
                options: [
                    { text: "$d(x,y) = \\max(d_1(x_1, y_1), d_2(x_2, y_2))$", isCorrect: true },
                    { text: "$d(x,y) = d_1(x_1, y_1) \\times d_2(x_2, y_2)$", isCorrect: false }
                ],
                explanation: "La distance produit est définie comme le maximum des distances sur chaque composante de l'espace[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.2 ESPACES VECTORIELS NORMÉS ---
            {
                type: "qcm", tags: ["Normes", "Définitions"],
                q: "Quelle propriété parmi les suivantes est exclusive aux NORMES et n'est pas requise pour une simple distance ?",
                options: [
                    { text: "L'homogénéité : $||\\lambda x|| = |\\lambda| ||x||$", isCorrect: true },
                    { text: "L'inégalité triangulaire", isCorrect: false },
                    { text: "La séparation ($||x|| = 0 \\iff x = 0$)", isCorrect: false }
                ],
                explanation: "Une norme possède la propriété d'homogénéité (mise en facteur des scalaires en valeur absolue), ce qu'une distance générale ne possède pas[cite: 1]. Les autres axiomes (positivité, séparation, inégalité triangulaire) sont partagés[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Normes", "Propriétés"],
                q: "Comment s'écrit la sous-additivité inverse pour une norme $|| \\cdot ||$ ?",
                options: [
                    { text: "$| ||x|| - ||y|| | \\le ||x - y||$", isCorrect: true },
                    { text: "$||x - y|| \\le ||x|| - ||y||$", isCorrect: false }
                ],
                explanation: "Cette inégalité découle de la sous-additivité classique et permet de lier la différence des normes à la norme de la différence[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Normes", "Équivalence"],
                q: "Vrai ou Faux : Deux normes sur un espace vectoriel de dimension FINIE sont toujours équivalentes.",
                options: [
                    { text: "Vrai", isCorrect: true },
                    { text: "Faux", isCorrect: false }
                ],
                explanation: "Toutes les normes sur un espace vectoriel de dimension finie sont équivalentes[cite: 1]. Par conséquent, elles définissent les mêmes ouverts, fermés et voisinages[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Normes", "Exemples"],
                q: "Dans $\\mathbb{R}^n$, comment est définie la norme $||x||_p$ pour $p \\ge 1$ ?",
                options: [
                    { text: "$||x||_p = (\\sum_{i=1}^n |x_i|^p)^{1/p}$", isCorrect: true },
                    { text: "$||x||_p = \\sum_{i=1}^n |x_i|^{1/p}$", isCorrect: false }
                ],
                explanation: "C'est la définition standard de la norme $L^p$ discrète sur $\\mathbb{R}^n$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Normes", "Distance induite"],
                q: "Tout Espace Vectoriel Normé (EVN) est un espace métrique. Quelle est la distance $d_{|| \\cdot ||}$ induite par la norme ?",
                options: [
                    { text: "$d(x,y) = ||x - y||$", isCorrect: true },
                    { text: "$d(x,y) = ||x|| - ||y||$", isCorrect: false }
                ],
                explanation: "La norme de la différence $||x-y||$ satisfait toutes les propriétés d'une distance (positivité, séparation, symétrie, inégalité triangulaire)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Normes", "Exemples"],
                q: "Soit l'espace $\\mathcal{B}(X,Y)$ des applications bornées vers un EVN. Comment définit-on la norme uniforme $||f||_\\infty$ ?",
                options: [
                    { text: "$||f||_\\infty = \\sup_{x \\in X} ||f(x)||$", isCorrect: true },
                    { text: "$||f||_\\infty = \\max_{x \\in X} ||f(x)||$", isCorrect: false }
                ],
                explanation: "On utilise la borne supérieure (sup) car le maximum n'est pas forcément atteint sur un ensemble $X$ quelconque[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Normes", "Exemples"],
                q: "Pour une fonction continue $f \\in \\mathcal{C}(I, \\mathbb{R})$ sur un intervalle $I=[a,b]$, comment s'écrit la norme $L^p$ (pour $p \\ge 1$) ?",
                options: [
                    { text: "$||f||_p = (\\int_I |f(x)|^p dx)^{1/p}$", isCorrect: true },
                    { text: "$||f||_p = \\int_I |f(x)|^{1/p} dx$", isCorrect: false }
                ],
                explanation: "C'est l'analogue continu de la norme $p$ vectorielle[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Normes", "Espaces produits"],
                q: "Pour un espace produit $X = X_1 \\times X_2 \\times ... \\times X_n$, comment est définie la norme produit $||x||$ ?",
                options: [
                    { text: "$||x|| = \\max_{1 \\le i \\le n} ||x_i||_i$", isCorrect: true },
                    { text: "$||x|| = \\sum_{i=1}^n ||x_i||_i$", isCorrect: false }
                ],
                explanation: "La norme produit usuelle est définie comme le maximum des normes des coordonnées dans leurs espaces respectifs[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.2.2 ESPACES PRÉHILBERTIENS ET EUCLIDIENS ---
            {
                type: "qcm", tags: ["Préhilbertiens", "Définitions"],
                q: "Quelles sont les propriétés qui définissent un produit scalaire $\\langle x,y \\rangle$ sur un espace vectoriel $X$ sur $\\mathbb{R}$ ?",
                options: [
                    { text: "Positivité, séparation (définition), symétrie et bilinéarité", isCorrect: true },
                    { text: "Positivité, homogénéité, inégalité triangulaire", isCorrect: false }
                ],
                explanation: "Un produit scalaire est une forme bilinéaire, symétrique, définie et positive[cite: 1]. L'inégalité triangulaire est une propriété de la norme qui en découle, pas du produit scalaire lui-même[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Euclidiens", "Définitions"],
                q: "Quelle est la définition stricte d'un espace euclidien ?",
                options: [
                    { text: "Un espace préhilbertien de dimension finie", isCorrect: true },
                    { text: "N'importe quel espace préhilbertien", isCorrect: false },
                    { text: "Un espace vectoriel normé de dimension finie", isCorrect: false }
                ],
                explanation: "Le terme « euclidien » est réservé aux espaces préhilbertiens (munis d'un produit scalaire) qui sont de dimension finie[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Préhilbertiens", "Exemples"],
                q: "Sur l'espace des matrices carrées $M_n(\\mathbb{R})$, comment définit-on classiquement le produit scalaire $\\langle A, B \\rangle$ ?",
                options: [
                    { text: "$\\langle A, B \\rangle = Tr({}^tA B)$", isCorrect: true },
                    { text: "$\\langle A, B \\rangle = Tr(AB)$", isCorrect: false },
                    { text: "$\\langle A, B \\rangle = \\det(A) \\times \\det(B)$", isCorrect: false }
                ],
                explanation: "Le produit scalaire matriciel usuel utilise la trace du produit de la transposée de $A$ avec $B$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Préhilbertiens", "Cauchy-Schwarz"],
                q: "Que stipule l'inégalité de Cauchy-Schwarz dans un espace préhilbertien ?",
                options: [
                    { text: "$|\\langle x,y \\rangle| \\le \\langle x,x \\rangle^{1/2} \\langle y,y \\rangle^{1/2}$", isCorrect: true },
                    { text: "$|\\langle x,y \\rangle| \\ge \\langle x,x \\rangle^{1/2} \\langle y,y \\rangle^{1/2}$", isCorrect: false }
                ],
                explanation: "La valeur absolue du produit scalaire est toujours majorée par le produit des normes (issues de ce produit scalaire)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Préhilbertiens", "Cauchy-Schwarz"],
                q: "Dans l'inégalité de Cauchy-Schwarz, à quelle condition a-t-on l'égalité stricte ?",
                options: [
                    { text: "Si et seulement si les vecteurs $x$ et $y$ sont colinéaires (il existe $\\lambda$ tel que $x=\\lambda y$ ou $y=\\lambda x$)", isCorrect: true },
                    { text: "Si et seulement si $x$ et $y$ sont orthogonaux", isCorrect: false }
                ],
                explanation: "L'égalité de Cauchy-Schwarz caractérise la colinéarité des vecteurs[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Préhilbertiens", "Norme"],
                q: "Comment la norme euclidienne $||x||$ est-elle dérivée du produit scalaire ?",
                options: [
                    { text: "$||x|| = \\sqrt{\\langle x,x \\rangle}$", isCorrect: true },
                    { text: "$||x|| = \\langle x,x \\rangle^2$", isCorrect: false }
                ],
                explanation: "Tout espace préhilbertien devient un espace vectoriel normé en définissant la norme comme la racine carrée du produit scalaire d'un vecteur avec lui-même[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Préhilbertiens", "Identités"],
                q: "Dans un espace préhilbertien, que stipule l'identité du parallélogramme ?",
                options: [
                    { text: "$||x+y||^2 + ||x-y||^2 = 2(||x||^2 + ||y||^2)$", isCorrect: true },
                    { text: "$||x+y||^2 = ||x||^2 + ||y||^2$", isCorrect: false }
                ],
                explanation: "Cette identité géométrique relie la somme des carrés des diagonales à la somme des carrés des côtés[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Préhilbertiens", "Identités"],
                q: "À quoi correspond l'identité de polarisation dans un espace préhilbertien ?",
                options: [
                    { text: "$\\langle x,y \\rangle = \\frac{1}{4}||x+y||^2 - \\frac{1}{4}||x-y||^2$", isCorrect: true },
                    { text: "$\\langle x,y \\rangle = ||x||^2 + ||y||^2 - ||x-y||^2$", isCorrect: false }
                ],
                explanation: "L'identité de polarisation permet d'exprimer le produit scalaire uniquement à partir de la norme[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Préhilbertiens", "Théorème de Pythagore"],
                q: "Dans un espace préhilbertien, à quelle condition le théorème de Pythagore $||x+y||^2 = ||x||^2 + ||y||^2$ est-il vérifié ?",
                options: [
                    { text: "Si et seulement si $\\langle x,y \\rangle = 0$ (vecteurs orthogonaux)", isCorrect: true },
                    { text: "Si et seulement si $x$ et $y$ sont colinéaires", isCorrect: false }
                ],
                explanation: "Le théorème de Pythagore est équivalent à l'annulation du produit scalaire (donc au terme croisé dans le développement du carré de la norme)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.3 BOULES ET SPHÈRES ---
            {
                type: "qcm", tags: ["Boules", "Définitions"],
                q: "Comment est définie une boule ouverte $B_d(x_0, r)$ de centre $x_0$ et de rayon $r > 0$ ?",
                options: [
                    { text: "$B_d(x_0, r) = \\{x \\in X \\mid d(x_0, x) < r\\}$", isCorrect: true },
                    { text: "$B_d(x_0, r) = \\{x \\in X \\mid d(x_0, x) \\le r\\}$", isCorrect: false }
                ],
                explanation: "La boule ouverte correspond à une inégalité stricte pour la distance[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Boules", "Définitions"],
                q: "Comment est définie une boule fermée $\\overline{B}_d(x_0, r)$ ?",
                options: [
                    { text: "$\\overline{B}_d(x_0, r) = \\{x \\in X \\mid d(x_0, x) \\le r\\}$", isCorrect: true },
                    { text: "$\\overline{B}_d(x_0, r) = \\{x \\in X \\mid d(x_0, x) = r\\}$", isCorrect: false }
                ],
                explanation: "La boule fermée inclut la frontière (inégalité large)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Boules", "Définitions"],
                q: "Comment est définie la sphère $S_d(x_0, r)$ ?",
                options: [
                    { text: "$S_d(x_0, r) = \\{x \\in X \\mid d(x_0, x) = r\\}$", isCorrect: true },
                    { text: "$S_d(x_0, r) = \\{x \\in X \\mid d(x_0, x) \\le r\\}$", isCorrect: false }
                ],
                explanation: "La sphère contient uniquement les points situés exactement à la distance $r$ du centre[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Boules", "Distance discrète"],
                q: "Dans un espace métrique muni de la distance discrète, que vaut la boule ouverte $B_d(x, r)$ si $0 < r \\le 1$ ?",
                options: [
                    { text: "$B_d(x, r) = \\{x\\}$", isCorrect: true },
                    { text: "$B_d(x, r) = X$", isCorrect: false },
                    { text: "$B_d(x, r) = \\emptyset$", isCorrect: false }
                ],
                explanation: "Pour la distance discrète, toute distance non nulle vaut 1. Si le rayon est $\\le 1$, la boule ouverte (inégalité stricte $< r$) ne peut contenir aucun autre point que le centre $x$ dont la distance est 0[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Boules", "Distance discrète"],
                q: "Dans un espace métrique muni de la distance discrète, que vaut la boule ouverte $B_d(x, r)$ si $r > 1$ ?",
                options: [
                    { text: "$B_d(x, r) = X$", isCorrect: true },
                    { text: "$B_d(x, r) = \\{x\\}$", isCorrect: false }
                ],
                explanation: "Si le rayon est strictement supérieur à 1, tous les points de l'espace (situés à une distance de 1) satisfont l'inégalité stricte $< r$, donc la boule est l'espace entier $X$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Boules", "Distance discrète"],
                q: "Dans un espace métrique discret, que vaut la sphère $S_d(x, 1)$ ?",
                options: [
                    { text: "$X \\setminus \\{x\\}$", isCorrect: true },
                    { text: "$\\emptyset$", isCorrect: false },
                    { text: "$\\{x\\}$", isCorrect: false }
                ],
                explanation: "La sphère de rayon 1 rassemble les points à distance exactement 1. Dans la distance discrète, c'est le cas de tous les points de $X$ à l'exception du centre $x$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Propriété de Hausdorff"],
                q: "Que garantit la propriété de Hausdorff pour deux points distincts $x_1 \\neq x_2$ dans un espace métrique ?",
                options: [
                    { text: "Il existe deux rayons $r_1, r_2 > 0$ tels que les boules ouvertes $B_d(x_1, r_1)$ et $B_d(x_2, r_2)$ sont disjointes", isCorrect: true },
                    { text: "Les boules fermées centrées en ces points ont toujours une intersection non vide", isCorrect: false }
                ],
                explanation: "Tout espace métrique possède la propriété de Hausdorff (ou séparation), ce qui permet toujours d'isoler deux points distincts par des voisinages ouverts disjoints (par exemple avec des rayons valant le tiers de la distance entre eux)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Boules", "Distances équivalentes"],
                q: "Si deux distances $d$ et $d_*$ sont équivalentes ($C_1 d \\le d_* \\le C_2 d$), que peut-on dire de leurs boules ouvertes ?",
                options: [
                    { text: "Les boules s'emboîtent : $B_d(x_0, r) \\subseteq B_{d_*}(x_0, C_2 r)$ et $B_{d_*}(x_0, r) \\subseteq B_d(x_0, r/C_1)$", isCorrect: true },
                    { text: "Les boules ouvertes sont strictement identiques pour tout rayon $r$", isCorrect: false }
                ],
                explanation: "L'équivalence des distances garantit l'emboîtement des boules ouvertes l'une dans l'autre (à une constante près), ce qui implique qu'elles définissent les mêmes voisinages et ouverts[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Boules", "Distance induite"],
                q: "Soit $Y \\subseteq X$ muni de la distance induite $d_Y$. Comment s'exprime la boule $B_{d_Y}(x_0, r)$ pour $x_0 \\in Y$ ?",
                options: [
                    { text: "$B_{d_Y}(x_0, r) = Y \\cap B_d(x_0, r)$", isCorrect: true },
                    { text: "$B_{d_Y}(x_0, r) = B_d(x_0, r) \\setminus Y$", isCorrect: false }
                ],
                explanation: "La boule dans le sous-espace $Y$ est simplement l'intersection de la boule de l'espace global $X$ avec la partie $Y$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.4 VOISINAGES, POINTS INTÉRIEURS ET ADHÉRENTS ---
            {
                type: "qcm", tags: ["Voisinages", "Distance à une partie"],
                q: "Comment est définie la distance d'un point $x_0$ à une partie $E \\subseteq X$ ?",
                options: [
                    { text: "$d(x_0, E) = \\inf_{y \\in E} d(x_0, y)$", isCorrect: true },
                    { text: "$d(x_0, E) = \\min_{y \\in E} d(x_0, y)$", isCorrect: false }
                ],
                explanation: "La distance est définie par la borne inférieure (inf), car le minimum n'est pas obligatoirement atteint (il se peut qu'il n'existe aucun point $y \\in E$ réalisant exactement cette distance)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Voisinages", "Définitions"],
                q: "Qu'est-ce qu'un voisinage de $x_0$ dans un espace métrique ?",
                options: [
                    { text: "Une partie $E$ qui contient une boule ouverte centrée en $x_0$", isCorrect: true },
                    { text: "Uniquement une boule ouverte centrée en $x_0$", isCorrect: false },
                    { text: "Tout ensemble contenant le point $x_0$", isCorrect: false }
                ],
                explanation: "Par définition, $E$ est un voisinage de $x_0$ s'il existe $r>0$ tel que $B_d(x_0, r) \\subseteq E$[cite: 1]. Toute boule ouverte est donc un voisinage, mais un voisinage n'est pas forcément ouvert[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Voisinages", "Propriétés"],
                q: "Que peut-on dire de l'intersection de deux voisinages de $x_0$ ?",
                options: [
                    { text: "C'est encore un voisinage de $x_0$", isCorrect: true },
                    { text: "Ce n'est plus nécessairement un voisinage", isCorrect: false }
                ],
                explanation: "Si $B(x_0, r_1) \\subseteq E_1$ et $B(x_0, r_2) \\subseteq E_2$, alors la boule de rayon $\\min(r_1, r_2)$ est incluse dans l'intersection $E_1 \\cap E_2$, qui est donc un voisinage[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Intérieur", "Définitions"],
                q: "Quand dit-on qu'un point $x_0$ est « intérieur » à une partie $E$ ?",
                options: [
                    { text: "Si $E$ est un voisinage de $x_0$ (i.e. $\\exists r > 0, B_d(x_0, r) \\subseteq E$)", isCorrect: true },
                    { text: "Si $x_0 \\in E$", isCorrect: false }
                ],
                explanation: "Appartenir à $E$ ne suffit pas. Pour être intérieur, il faut qu'il y ait tout un espace (une boule ouverte) autour du point qui soit entièrement contenu dans $E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Adhérence", "Définitions"],
                q: "Quand dit-on qu'un point $x_0$ est « adhérent » à une partie $E$ ?",
                options: [
                    { text: "Si tout voisinage de $x_0$ a une intersection non vide avec $E$ (i.e. $\\forall r > 0, B_d(x_0, r) \\cap E \\neq \\emptyset$)", isCorrect: true },
                    { text: "S'il existe un voisinage de $x_0$ entièrement inclus dans $E$", isCorrect: false }
                ],
                explanation: "Un point adhérent n'a pas besoin d'appartenir à $E$, il suffit qu'on puisse trouver des points de $E$ arbitrairement proches de lui (toute boule autour de $x_0$ touche $E$)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Topologie", "Caractérisation métrique"],
                q: "Lequel de ces énoncés est équivalent au fait que $x_0$ est un point INTÉRIEUR à $E$ ?",
                options: [
                    { text: "$d(x_0, E^c) > 0$", isCorrect: true },
                    { text: "$d(x_0, E) = 0$", isCorrect: false }
                ],
                explanation: "Si la distance au complémentaire est strictement positive, cela signifie qu'il y a une « marge » (une boule) autour de $x_0$ qui ne touche pas $E^c$, donc qui est incluse dans $E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Topologie", "Caractérisation métrique"],
                q: "Lequel de ces énoncés est équivalent au fait que $x_0$ est un point ADHÉRENT à $E$ ?",
                options: [
                    { text: "$d(x_0, E) = 0$", isCorrect: true },
                    { text: "$d(x_0, E^c) > 0$", isCorrect: false }
                ],
                explanation: "Si la distance (infimum) de $x_0$ à $E$ est nulle, cela signifie qu'on peut s'approcher de $E$ de façon infinitésimale : toute boule autour de $x_0$ rencontre $E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Points particuliers", "Isolé"],
                q: "Qu'est-ce qu'un point isolé de $E$ ?",
                options: [
                    { text: "Un point $x_0 \\in E$ tel qu'il existe $r>0$ pour lequel $B_d(x_0, r) \\cap E = \\{x_0\\}$", isCorrect: true },
                    { text: "Un point qui n'est pas adhérent à $E$", isCorrect: false }
                ],
                explanation: "Un point isolé appartient à $E$, mais il y a un \"vide\" de points de $E$ autour de lui. Il est seul dans une petite boule[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Points particuliers", "Accumulation"],
                q: "Qu'est-ce qu'un point d'accumulation de $E$ ?",
                options: [
                    { text: "Un point $x_0$ tel que toute boule autour de $x_0$ contient au moins un point de $E$ distinct de $x_0$", isCorrect: true },
                    { text: "Un point qui est intérieur à $E$", isCorrect: false }
                ],
                explanation: "Un point d'accumulation a la propriété : $\\forall r > 0, \\exists x \\neq x_0 \\text{ tel que } x \\in B_d(x_0, r) \\cap E$[cite: 1]. Tout point adhérent est soit isolé, soit d'accumulation[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Points particuliers", "Frontière"],
                q: "Qu'est-ce qu'un point de frontière de $E$ ?",
                options: [
                    { text: "Un point adhérent à $E$ qui n'est pas intérieur à $E$", isCorrect: true },
                    { text: "Un point extérieur à $E$ et non adhérent", isCorrect: false }
                ],
                explanation: "Autrement dit, pour un point de frontière $x_0$, toute boule autour de $x_0$ rencontre à la fois $E$ et son complémentaire $E^c$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Topologie", "Exemples"],
                q: "Dans $\\mathbb{R}$, on considère l'ensemble des rationnels $\\mathbb{Q}$. Quelle est la particularité de chaque point de $\\mathbb{R}$ vis-à-vis de $\\mathbb{Q}$ ?",
                options: [
                    { text: "Chaque point de $\\mathbb{R}$ est un point d'accumulation et un point de frontière de $\\mathbb{Q}$", isCorrect: true },
                    { text: "Chaque point de $\\mathbb{R}$ est intérieur à $\\mathbb{Q}$", isCorrect: false }
                ],
                explanation: "Comme $\\mathbb{Q}$ est dense dans $\\mathbb{R}$, toute boule autour de n'importe quel réel contient des rationnels (donc adhérence) et des irrationnels (donc pas d'intérieur). Chaque réel est donc sur la frontière[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.5 PARTIES OUVERTES ET FERMÉES ---
            {
                type: "qcm", tags: ["Ouverts et Fermés", "Définitions"],
                q: "Comment définit-on une partie OUVERTE $E$ dans un espace métrique ?",
                options: [
                    { text: "Chaque point de $E$ est un point intérieur à $E$", isCorrect: true },
                    { text: "Chaque point de $E$ est un point isolé", isCorrect: false }
                ],
                explanation: "Une partie est ouverte si elle forme un voisinage pour chacun de ses points (i.e., on peut y centrer une boule ouverte entièrement contenue dans $E$)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Ouverts et Fermés", "Définitions"],
                q: "Comment définit-on une partie FERMÉE $E$ dans un espace métrique ?",
                options: [
                    { text: "Elle contient tous ses points d'adhérence", isCorrect: true },
                    { text: "Elle contient tous ses points intérieurs", isCorrect: false }
                ],
                explanation: "Si on s'approche de $E$ jusqu'à sa frontière, on reste dans $E$. Une partie fermée contient donc toute sa frontière[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Ouverts et Fermés", "Complémentaire"],
                q: "Quel est le lien fondamental entre ouverts et fermés ?",
                options: [
                    { text: "$E$ est fermée si et seulement si son complémentaire $E^c$ est ouvert", isCorrect: true },
                    { text: "$E$ est fermée si et seulement si elle n'est pas ouverte", isCorrect: false }
                ],
                explanation: "C'est la dualité de la topologie. Si $E$ contient ses points d'adhérence, alors tout point extérieur a une distance non nulle avec $E$, donc peut être entouré d'une boule ouverte disjointe de $E$ (faisant de $E^c$ un ouvert)[cite: 1]. Attention : un ensemble peut être ni ouvert ni fermé[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Ouverts et Fermés", "Propriétés"],
                q: "Parmi les assertions suivantes sur l'espace total $X$ et l'ensemble vide $\\emptyset$, laquelle est vraie ?",
                options: [
                    { text: "$X$ et $\\emptyset$ sont à la fois ouverts et fermés", isCorrect: true },
                    { text: "$X$ est ouvert mais pas fermé, $\\emptyset$ est fermé mais pas ouvert", isCorrect: false }
                ],
                explanation: "C'est une propriété universelle de toute topologie. $X$ contient tout (donc tous ses points d'adhérence), et tout point y est intérieur. $\\emptyset$ est son complémentaire, donc il hérite des deux propriétés[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Ouverts et Fermés", "Boules"],
                q: "Dans un espace métrique, une boule ouverte $B_d(x_0, r)$ est-elle une partie ouverte ?",
                options: [
                    { text: "Oui, toujours", isCorrect: true },
                    { text: "Pas nécessairement, cela dépend de la distance", isCorrect: false }
                ],
                explanation: "La démonstration s'appuie sur l'inégalité triangulaire : si $y \\in B_d(x_0, r)$, alors une petite boule de rayon $r - d(x_0, y)$ centrée en $y$ restera incluse dans la grande boule, prouvant que tout point est intérieur[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Ouverts et Fermés", "Singletons"],
                q: "Dans n'importe quel espace métrique, quelle est la nature topologique d'un singleton $\\{x\\}$ ?",
                options: [
                    { text: "C'est toujours une partie fermée", isCorrect: true },
                    { text: "Ce n'est ni ouvert ni fermé en général", isCorrect: false }
                ],
                explanation: "Un point isolé sans autres éléments autour de lui contient trivialement tous ses (uniques) points d'adhérence. Son complémentaire est d'ailleurs un ouvert[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Ouverts et Fermés", "Intervalles de R"],
                q: "Dans $(\\mathbb{R}, |\\cdot|)$, quelle est la nature de l'intervalle $[a, b[$ ?",
                options: [
                    { text: "Il n'est ni ouvert ni fermé", isCorrect: true },
                    { text: "Il est ouvert", isCorrect: false },
                    { text: "Il est fermé", isCorrect: false }
                ],
                explanation: "Il n'est pas ouvert car le point $a$ n'est pas intérieur (toute boule centrée en $a$ déborde à gauche de $a$). Il n'est pas fermé car il ne contient pas son point d'adhérence $b$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Ouverts et Fermés", "Topologie discrète"],
                q: "Dans un espace muni de la distance discrète, quelle est la nature topologique d'une partie $E$ quelconque ?",
                options: [
                    { text: "Toute partie $E$ est à la fois ouverte et fermée", isCorrect: true },
                    { text: "La notion d'ouvert/fermé n'a pas de sens", isCorrect: false }
                ],
                explanation: "Chaque point $x$ admet la boule $B(x,1) = \\{x\\}$ comme voisinage ouvert. Toute partie est donc union de boules ouvertes, donc ouverte. Son complémentaire l'est aussi, la rendant fermée[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    },
    "Analyse 3 : Chapitre 6 (Topologie - Partie 2)": {
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            // --- 6.5 PARTIES OUVERTES ET FERMÉES (OPÉRATIONS) ---
            {
                type: "qcm", tags: ["Ouverts", "Opérations"],
                q: "L'union quelconque (même infinie) de parties ouvertes est-elle une partie ouverte ?",
                options: [
                    { text: "Oui, toute union d'ouverts est un ouvert", isCorrect: true },
                    { text: "Non, seule une union finie d'ouverts est ouverte", isCorrect: false }
                ],
                explanation: "Toute union (même infinie) de parties ouvertes de $(X,d)$ est une partie ouverte[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Ouverts", "Opérations"],
                q: "L'intersection infinie de parties ouvertes est-elle nécessairement ouverte ?",
                options: [
                    { text: "Non, seule une intersection finie de parties ouvertes est garantie d'être ouverte", isCorrect: true },
                    { text: "Oui, toute intersection d'ouverts reste un ouvert", isCorrect: false }
                ],
                explanation: "Une intersection finie de parties ouvertes de $(X,d)$ est une partie ouverte[cite: 1]. Une intersection infinie d'ouverts n'est pas toujours un ouvert, comme $\\bigcap_{k \\ge 1} ]-1/k, 1/k[ = \\{0\\}$ dans $\\mathbb{R}$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Fermés", "Opérations"],
                q: "L'union infinie de parties fermées est-elle nécessairement fermée ?",
                options: [
                    { text: "Non, seule une union finie de parties fermées est fermée", isCorrect: true },
                    { text: "Oui, l'union de fermés est toujours fermée", isCorrect: false }
                ],
                explanation: "Une union finie de parties fermées de $(X,d)$ est une partie fermée[cite: 1]. Une union infinie de fermés n'est pas toujours fermée[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Fermés", "Opérations"],
                q: "L'intersection de parties fermées est-elle toujours fermée ?",
                options: [
                    { text: "Oui, toute intersection (même infinie) de parties fermées est fermée", isCorrect: true },
                    { text: "Non, cela dépend de la distance", isCorrect: false }
                ],
                explanation: "Toute intersection (même infinie) de parties fermées de $(X,d)$ est une partie fermée[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Ouverts", "Caractérisation"],
                q: "Comment peut-on caractériser globalement tous les ouverts de $X$ à l'aide des boules ?",
                options: [
                    { text: "Les ouverts de $X$ sont les réunions de boules ouvertes", isCorrect: true },
                    { text: "Les ouverts de $X$ sont les intersections de boules ouvertes", isCorrect: false }
                ],
                explanation: "Les ouverts de $X$ sont les réunions de boules ouvertes[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.6 INTÉRIEUR ET ADHÉRENCE ---
            {
                type: "qcm", tags: ["Intérieur", "Définitions"],
                q: "Comment définit-on rigoureusement l'intérieur $\\mathring{E}$ d'une partie $E$ ?",
                options: [
                    { text: "C'est la réunion de toutes les parties ouvertes de $X$ incluses dans $E$", isCorrect: true },
                    { text: "C'est l'intersection de toutes les parties ouvertes contenant $E$", isCorrect: false }
                ],
                explanation: "On appelle intérieur de $E$, noté $\\mathring{E}$, la réunion de toutes les parties ouvertes de $X$ incluses dans $E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Intérieur", "Propriétés"],
                q: "Quelle est la caractéristique maximale de l'intérieur $\\mathring{E}$ ?",
                options: [
                    { text: "$\\mathring{E}$ est la plus grande partie ouverte contenue dans $E$", isCorrect: true },
                    { text: "$\\mathring{E}$ est le plus petit ouvert contenant $E$", isCorrect: false }
                ],
                explanation: "$\\mathring{E}$ est la plus grande partie ouverte contenue dans $E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Intérieur", "Équivalence"],
                q: "Que signifie l'égalité $E = \\mathring{E}$ ?",
                options: [
                    { text: "Cela signifie que $E$ est une partie ouverte", isCorrect: true },
                    { text: "Cela signifie que $E$ est une partie fermée", isCorrect: false }
                ],
                explanation: "$E = \\mathring{E}$ si et seulement si $E$ est une partie ouverte[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Intérieur", "Points"],
                q: "Quel est le lien direct entre l'intérieur $\\mathring{E}$ et les points de $E$ ?",
                options: [
                    { text: "L'intérieur $\\mathring{E}$ est exactement l'ensemble de tous les points intérieurs à $E$", isCorrect: true },
                    { text: "L'intérieur contient tous les points d'accumulation de $E$", isCorrect: false }
                ],
                explanation: "L'ensemble de tous les points intérieurs à $E$ est égal à $\\mathring{E}$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Adhérence", "Définitions"],
                q: "Comment définit-on rigoureusement l'adhérence $\\overline{E}$ d'une partie $E$ ?",
                options: [
                    { text: "C'est l'intersection de tous les fermés de $X$ contenant $E$", isCorrect: true },
                    { text: "C'est la réunion de tous les fermés inclus dans $E$", isCorrect: false }
                ],
                explanation: "On appelle adhérence de $E$, notée $\\overline{E}$, l'intersection de tous les fermés de $X$ contenant $E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Adhérence", "Propriétés"],
                q: "Quelle est la caractéristique minimale de l'adhérence $\\overline{E}$ ?",
                options: [
                    { text: "$\\overline{E}$ est la plus petite partie fermée qui contient $E$", isCorrect: true },
                    { text: "$\\overline{E}$ est le plus grand fermé contenu dans $E$", isCorrect: false }
                ],
                explanation: "$\\overline{E}$ est la plus petite partie fermée qui contient $E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Adhérence", "Équivalence"],
                q: "Que signifie l'égalité $E = \\overline{E}$ ?",
                options: [
                    { text: "Cela signifie que $E$ est une partie fermée", isCorrect: true },
                    { text: "Cela signifie que $E$ est une partie d'intérieur vide", isCorrect: false }
                ],
                explanation: "$E = \\overline{E}$ si et seulement si $E$ est une partie fermée[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Adhérence", "Points"],
                q: "Quel est le lien direct entre l'adhérence $\\overline{E}$ et les points d'adhérence ?",
                options: [
                    { text: "L'adhérence $\\overline{E}$ est exactement l'ensemble de tous les points adhérents à $E$", isCorrect: true },
                    { text: "L'adhérence contient uniquement les points de frontière de $E$", isCorrect: false }
                ],
                explanation: "L'ensemble de tous les points adhérents à $E$ est égal à $\\overline{E}$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Intérieur", "Adhérence", "Opérations"],
                q: "Que valent l'adhérence de l'ensemble vide ($\\overline{\\emptyset}$) et l'intérieur de l'espace entier ($\\mathring{X}$) ?",
                options: [
                    { text: "$\\overline{\\emptyset} = \\emptyset$ et $\\mathring{X} = X$", isCorrect: true },
                    { text: "$\\overline{\\emptyset} = X$ et $\\mathring{X} = \\emptyset$", isCorrect: false }
                ],
                explanation: "On a $\\mathring{X} = X$ et $\\overline{\\emptyset} = \\emptyset$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Intérieur", "Adhérence", "Dualité"],
                q: "Quel est le lien de dualité (passage au complémentaire) entre l'intérieur et l'adhérence ?",
                options: [
                    { text: "$X \\setminus \\mathring{E} = \\overline{X \\setminus E}$", isCorrect: true },
                    { text: "$X \\setminus \\mathring{E} = \\mathring{X \\setminus E}$", isCorrect: false }
                ],
                explanation: "On a la relation $X \\setminus \\mathring{E} = \\overline{X \\setminus E}$[cite: 1]. L'adhérence du complémentaire est le complémentaire de l'intérieur.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Inclusions"],
                q: "Si $F \\subseteq E$, que peut-on affirmer sur les intérieurs et les adhérences de ces ensembles ?",
                options: [
                    { text: "$\\mathring{F} \\subseteq \\mathring{E}$ et $\\overline{F} \\subseteq \\overline{E}$", isCorrect: true },
                    { text: "L'inclusion est inversée pour les intérieurs", isCorrect: false }
                ],
                explanation: "Si $F \\subseteq E$, alors $\\mathring{F} \\subseteq \\mathring{E}$ et $\\overline{F} \\subseteq \\overline{E}$[cite: 1]. L'opération conserve l'ordre de l'inclusion.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Idempotence"],
                q: "Que se passe-t-il si on applique deux fois de suite l'opération d'intérieur ($\\mathring{\\mathring{E}}$) ou d'adhérence ($\\overline{\\overline{E}}$) ?",
                options: [
                    { text: "L'opération est idempotente : $\\mathring{\\mathring{E}} = \\mathring{E}$ et $\\overline{\\overline{E}} = \\overline{E}$", isCorrect: true },
                    { text: "L'ensemble grandit ou rétrécit à chaque étape", isCorrect: false }
                ],
                explanation: "On a $\\mathring{\\mathring{E}} = \\mathring{E}$ et $\\overline{\\overline{E}} = \\overline{E}$[cite: 1]. L'intérieur est déjà un ouvert, donc son intérieur est lui-même, et de même pour l'adhérence (fermé)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Adhérence", "Unions"],
                q: "L'adhérence respecte-t-elle l'union ? Que vaut $\\overline{F \\cup E}$ ?",
                options: [
                    { text: "$\\overline{F \\cup E} = \\overline{F} \\cup \\overline{E}$", isCorrect: true },
                    { text: "On a seulement $\\overline{F \\cup E} \\subseteq \\overline{F} \\cup \\overline{E}$", isCorrect: false }
                ],
                explanation: "On a l'égalité stricte : $\\overline{F \\cup E} = \\overline{F} \\cup \\overline{E}$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Adhérence", "Intersections"],
                q: "L'adhérence respecte-t-elle l'intersection ? Que vaut $\\overline{F \\cap E}$ ?",
                options: [
                    { text: "On a seulement l'inclusion $\\overline{F \\cap E} \\subseteq \\overline{F} \\cap \\overline{E}$", isCorrect: true },
                    { text: "L'égalité $\\overline{F \\cap E} = \\overline{F} \\cap \\overline{E}$ est toujours vraie", isCorrect: false }
                ],
                explanation: "On a l'inclusion $\\overline{F \\cap E} \\subseteq \\overline{F} \\cap \\overline{E}$, mais l'égalité n'est pas garantie en général[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Supremum", "Adhérence"],
                q: "Dans $\\mathbb{R}$, soit $E$ une partie non vide et majorée. Que peut-on dire de son supremum $y = \\sup E$ par rapport à l'adhérence $\\overline{E}$ ?",
                options: [
                    { text: "$\\sup E$ appartient toujours à $\\overline{E}$", isCorrect: true },
                    { text: "$\\sup E$ appartient toujours à $E$ (il est le plus grand élément)", isCorrect: false }
                ],
                explanation: "Si $E \\subseteq \\mathbb{R}$ est non vide et majorée, alors $\\sup\\{x \\in E\\} \\in \\overline{E}$[cite: 1]. La caractérisation de la borne supérieure permet de construire une suite d'éléments de $E$ l'approchant, faisant du sup un point adhérent[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.6.1 FRONTIÈRE, INTÉRIEUR VIDE, DENSITÉ ---
            {
                type: "qcm", tags: ["Frontière", "Définitions"],
                q: "Comment est formellement définie la frontière $\\partial E$ d'une partie $E$ ?",
                options: [
                    { text: "$\\partial E = \\overline{E} \\setminus \\mathring{E}$", isCorrect: true },
                    { text: "$\\partial E = X \\setminus \\overline{E}$", isCorrect: false }
                ],
                explanation: "On appelle frontière de $E$ la partie définie par $\\partial E := \\overline{E} \\setminus \\mathring{E}$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Frontière", "Points"],
                q: "La frontière $\\partial E$ correspond-elle à un ensemble précis de points ?",
                options: [
                    { text: "Oui, $\\partial E$ est exactement l'ensemble de tous les points de frontière de $E$", isCorrect: true },
                    { text: "Non, c'est l'ensemble des points isolés", isCorrect: false }
                ],
                explanation: "L'ensemble de tous les points de frontière de $E$ est égal à $\\partial E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Frontière", "Distance discrète"],
                q: "Que vaut la frontière $\\partial E$ d'une partie quelconque $E$ dans un espace métrique discret ?",
                options: [
                    { text: "$\\partial E = \\emptyset$", isCorrect: true },
                    { text: "$\\partial E = E$", isCorrect: false }
                ],
                explanation: "Dans un espace muni de la distance discrète, toute partie est à la fois ouverte et fermée, donc $\\mathring{E} = \\overline{E} = E$[cite: 1]. Il s'ensuit que $\\partial E = \\emptyset$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Densité", "Définitions"],
                q: "Quand dit-on qu'une partie $E$ est dense dans un espace métrique $X$ ?",
                options: [
                    { text: "Lorsque $\\overline{E} = X$", isCorrect: true },
                    { text: "Lorsque $\\mathring{E} = X$", isCorrect: false }
                ],
                explanation: "On dit que $E$ est dense dans $X$ lorsque $X$ est la plus petite partie fermée contenant $E$, c'est-à-dire lorsque $\\overline{E} = X$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Densité", "Intersections"],
                q: "Une partie $E$ est dense dans $V$ si et seulement si pour tout $x \\in V$...",
                options: [
                    { text: "Chaque boule ouverte autour de $x$ possède une intersection non vide avec $E$", isCorrect: true },
                    { text: "Chaque boule ouverte autour de $x$ est entièrement incluse dans $E$", isCorrect: false }
                ],
                explanation: "$E$ est dense dans $V$ si et seulement si pour tout $x \\in V$, $x$ est adhérent à $E$, c'est-à-dire que $\\forall r > 0, B_d(x,r) \\cap E \\neq \\emptyset$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Intérieur vide", "Définitions"],
                q: "Quand dit-on qu'une partie $E$ est d'intérieur vide ?",
                options: [
                    { text: "Lorsqu'elle ne contient aucune partie ouverte non vide, c'est-à-dire $\\mathring{E} = \\emptyset$", isCorrect: true },
                    { text: "Lorsqu'elle est de diamètre nul", isCorrect: false }
                ],
                explanation: "On dit qu'une partie $E$ est d'intérieur vide lorsqu'elle ne contient pas de partie ouverte non vide, c'est-à-dire lorsque $\\mathring{E} = \\emptyset$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Densité", "Intérieur vide"],
                q: "Quel est le lien direct d'équivalence entre une partie d'intérieur vide et la densité ?",
                options: [
                    { text: "$E$ est d'intérieur vide si et seulement si $E^c$ (son complémentaire) est dense dans $X$", isCorrect: true },
                    { text: "$E$ est d'intérieur vide si et seulement si $E$ est dense dans $X$", isCorrect: false }
                ],
                explanation: "Une partie $E$ est d'intérieur vide si et seulement si $E^c$ est dense dans $X$[cite: 1]. Cela découle de $X \\setminus \\mathring{E} = \\overline{X \\setminus E}$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Densité", "Exemples"],
                q: "Dans l'espace $\\mathbb{R}$, la partie $\\mathbb{Z}$ des entiers relatifs est-elle dense ?",
                options: [
                    { text: "Non, $\\mathbb{Z}$ n'est pas dense dans $\\mathbb{R}$", isCorrect: true },
                    { text: "Oui, $\\mathbb{Z}$ est dense dans $\\mathbb{R}$", isCorrect: false }
                ],
                explanation: "Dans $(\\mathbb{R}, |\\cdot|)$, $\\mathbb{Q}$ et $\\mathbb{R} \\setminus \\mathbb{Q}$ sont des parties denses, mais $\\mathbb{Z}$ ne l'est pas (il y a du vide entre deux entiers)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Intérieur vide", "Exemples"],
                q: "Dans $\\mathbb{R}$ muni de sa distance usuelle, un singleton $\\{x\\}$ est-il d'intérieur vide ?",
                options: [
                    { text: "Oui, tout singleton est d'intérieur vide", isCorrect: true },
                    { text: "Non, un singleton n'est pas d'intérieur vide", isCorrect: false }
                ],
                explanation: "Dans $(\\mathbb{R}, |\\cdot|)$, tout singleton $\\{x\\}$ est d'intérieur vide[cite: 1]. Il ne peut contenir aucun intervalle ouvert non vide[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.7 PARTIES BORNÉES ET DIAMÈTRE ---
            {
                type: "qcm", tags: ["Parties bornées", "Définitions"],
                q: "Comment définit-on une partie $E$ bornée dans un espace métrique ?",
                options: [
                    { text: "Elle est contenue dans au moins une boule ouverte", isCorrect: true },
                    { text: "Elle a un nombre fini d'éléments", isCorrect: false }
                ],
                explanation: "La partie $E$ est dite bornée si elle est contenue dans une boule ouverte, c'est-à-dire s'il existe $x_0 \\in X$ et $r > 0$ tels que $E \\subseteq B_d(x_0, r)$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Parties bornées", "Opérations"],
                q: "L'union de plusieurs parties bornées est-elle bornée ?",
                options: [
                    { text: "Oui, une union finie de parties bornées reste une partie bornée", isCorrect: true },
                    { text: "Non, l'union détruit le caractère borné", isCorrect: false }
                ],
                explanation: "Une union finie de parties bornées de $(X,d)$ est une partie bornée de $(X,d)$[cite: 1]. On peut englober toutes ces parties dans une seule grande boule en choisissant un rayon suffisamment grand[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Parties bornées", "Espaces normés"],
                q: "Dans un Espace Vectoriel Normé, quelle est la caractérisation la plus simple d'une partie bornée $E$ ?",
                options: [
                    { text: "Il existe $M > 0$ tel que $||x|| < M$ pour tout $x \\in E$", isCorrect: true },
                    { text: "L'ensemble $E$ contient le vecteur nul", isCorrect: false }
                ],
                explanation: "Une partie $E$ d'un EVN est bornée si et seulement s'il existe $M > 0$ tel que $||x|| < M$ pour tout $x \\in E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Diamètre", "Définitions"],
                q: "Comment définit-on le diamètre d'une partie $E$, noté $\\text{diam}(E)$ ?",
                options: [
                    { text: "$\\text{diam}(E) = \\sup\\{d(x,y) \\mid x,y \\in E\\}$", isCorrect: true },
                    { text: "$\\text{diam}(E) = \\sup_{x \\in E} ||x||$", isCorrect: false }
                ],
                explanation: "Le diamètre de $E$ est la borne supérieure de l'ensemble des distances entre tous les couples de points appartenant à $E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Diamètre", "Propriétés"],
                q: "Dans quelles conditions a-t-on $\\text{diam}(E) = 0$ (pour $E \\neq \\emptyset$) ?",
                options: [
                    { text: "Si et seulement si $E = \\{x_0\\}$ (un singleton)", isCorrect: true },
                    { text: "Si et seulement si $E$ est d'intérieur vide", isCorrect: false }
                ],
                explanation: "$\\text{diam}(E) = 0$ si et seulement si $E$ est constitué d'un unique point $x_0$[cite: 1]. S'il existait deux points distincts, leur distance serait strictement positive (séparation), donc le supremum aussi[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Diamètre", "Parties bornées"],
                q: "Quel est le lien direct entre le diamètre fini d'un ensemble et le fait qu'il soit borné ?",
                options: [
                    { text: "$\\text{diam}(E) < +\\infty$ si et seulement si $E$ est une partie bornée", isCorrect: true },
                    { text: "Un diamètre fini n'implique pas que la partie soit bornée", isCorrect: false }
                ],
                explanation: "$\\text{diam}(E) < +\\infty$ si et seulement si $E$ est une partie bornée[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Diamètre", "Inclusions"],
                q: "Si $E \\subseteq F$, que peut-on déduire sur les diamètres de ces deux parties ?",
                options: [
                    { text: "$\\text{diam}(E) \\le \\text{diam}(F)$", isCorrect: true },
                    { text: "$\\text{diam}(E) \\ge \\text{diam}(F)$", isCorrect: false }
                ],
                explanation: "Si $E \\subseteq F$, l'ensemble des distances de $E$ est inclus dans l'ensemble des distances de $F$, donc le supremum du premier est inférieur ou égal à celui du second : $\\text{diam}(E) \\le \\text{diam}(F)$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Diamètre", "Adhérence"],
                q: "Que vaut le diamètre de l'adhérence $\\overline{E}$ par rapport à celui de la partie $E$ ?",
                options: [
                    { text: "$\\text{diam}(\\overline{E}) = \\text{diam}(E)$", isCorrect: true },
                    { text: "$\\text{diam}(\\overline{E}) > \\text{diam}(E)$", isCorrect: false }
                ],
                explanation: "On a toujours $\\text{diam}(\\overline{E}) = \\text{diam}(E)$[cite: 1]. L'ajout de la frontière n'augmente pas la distance maximale entre les éléments de l'ensemble[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.8 SUITES : CONVERGENCE ET UNICITÉ ---
            {
                type: "qcm", tags: ["Suites", "Définition de convergence"],
                q: "Comment définit-on topologiquement la convergence d'une suite $(x_n)$ vers un point $y$ ?",
                options: [
                    { text: "Pour tout voisinage $V$ de $y$, la suite appartient à $V$ à partir d'un certain rang", isCorrect: true },
                    { text: "Il existe un voisinage $V$ de $y$ contenant une infinité de termes de la suite", isCorrect: false }
                ],
                explanation: "On dit que $(x_n)$ converge vers $y$ lorsque pour tout voisinage $V$ de $y$, $\\exists n_0 \\in \\mathbb{N}$ tel que $\\forall n \\ge n_0, x_n \\in V$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Suites", "Définition métrique"],
                q: "Dans un espace métrique (X,d), comment se traduit métriquement la convergence de $(x_n)$ vers $y$ ?",
                options: [
                    { text: "$\\forall \\epsilon > 0, \\exists n_0 \\in \\mathbb{N}$ tel que $\\forall n \\ge n_0, d(x_n, y) < \\epsilon$", isCorrect: true },
                    { text: "$\\forall \\epsilon > 0, d(x_n, y) \\le \\epsilon$ pour au moins un $n$", isCorrect: false }
                ],
                explanation: "Cela équivaut à dire que la distance numérique entre $x_n$ et la limite $y$ tend vers $0$ : $\\lim_{n\\to+\\infty} d(x_n, y) = 0$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Suites", "Stationnaire"],
                q: "Qu'est-ce qu'une suite stationnaire ?",
                options: [
                    { text: "Une suite qui est constante à partir d'un certain rang", isCorrect: true },
                    { text: "Une suite qui n'admet aucune valeur d'adhérence", isCorrect: false }
                ],
                explanation: "Une suite $(x_n)$ est stationnaire si elle est constante à partir d'un certain rang $n_0$ ($\\exists n_0 \\in \\mathbb{N}, \\forall n \\ge n_0, x_n = x_{n_0}$)[cite: 1]. Toute suite stationnaire est convergente[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Suites", "Distance discrète"],
                q: "Dans un espace métrique muni de la distance discrète, quelles sont les SEULES suites convergentes ?",
                options: [
                    { text: "Les suites stationnaires (constantes à partir d'un certain rang)", isCorrect: true },
                    { text: "Les suites bornées", isCorrect: false }
                ],
                explanation: "Dans un espace muni de la distance discrète, seules les suites stationnaires sont convergentes[cite: 1]. En effet, dès que $\\epsilon = 1/2$, la condition $d(x_n, y) < 1/2$ impose $x_n = y$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Suites", "Unicité"],
                q: "Que stipule le théorème d'unicité de la limite dans un espace métrique ?",
                options: [
                    { text: "Si une suite converge vers $y_1$ et vers $y_2$, alors $y_1 = y_2$", isCorrect: true },
                    { text: "Une suite convergente possède une unique sous-suite", isCorrect: false }
                ],
                explanation: "Si $\\lim_{n\\to+\\infty} x_n = y_1$ et $\\lim_{n\\to+\\infty} x_n = y_2$, alors $y_1 = y_2$[cite: 1]. C'est une conséquence directe de l'inégalité triangulaire et de l'axiome de séparation de la distance[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Suites", "Parties bornées"],
                q: "Tout suite convergente dans un espace métrique $(X,d)$ est-elle bornée ?",
                options: [
                    { text: "Oui, toute suite convergente est une suite bornée", isCorrect: true },
                    { text: "Non, cela dépend de la limite", isCorrect: false }
                ],
                explanation: "Une suite convergente dans $(X,d)$ est toujours une suite bornée[cite: 1]. À partir d'un certain rang $n_0$, tous les termes sont dans une petite boule autour de la limite, et les $n_0$ premiers termes s'inscrivent dans une grande boule finale[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Suites", "Parties bornées", "Contre-exemples"],
                q: "La réciproque est-elle vraie ? Une suite bornée est-elle forcément convergente ?",
                options: [
                    { text: "Non, une suite bornée n'est pas forcément convergente", isCorrect: true },
                    { text: "Oui, toute suite bornée est convergente", isCorrect: false }
                ],
                explanation: "Une suite bornée n'est pas forcément convergente[cite: 1]. On se rappellera de l'exemple de la suite $x_n = (-1)^n$ dans $\\mathbb{R}$, qui est bornée mais oscille sans converger[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.8.1 CARACTÉRISATION SÉQUENTIELLE ---
            {
                type: "qcm", tags: ["Caractérisation séquentielle", "Adhérence"],
                q: "Comment caractériser qu'un point $y$ appartient à l'adhérence $\\overline{E}$ à l'aide de suites ?",
                options: [
                    { text: "$y \\in \\overline{E}$ si et seulement s'il existe une suite $(x_n)$ de points de $E$ qui converge vers $y$", isCorrect: true },
                    { text: "$y \\in \\overline{E}$ si et seulement si toute suite de $E$ converge vers $y$", isCorrect: false }
                ],
                explanation: "C'est la caractérisation séquentielle de l'adhérence : on peut approcher tout point adhérent par une suite d'éléments du sous-ensemble[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Caractérisation séquentielle", "Fermés"],
                q: "Comment caractériser qu'une partie $E$ est fermée à l'aide de suites ?",
                options: [
                    { text: "$E$ est fermée si et seulement si toute suite de points de $E$ qui converge a sa limite dans $E$", isCorrect: true },
                    { text: "$E$ est fermée si et seulement si toute suite de $E$ est convergente", isCorrect: false }
                ],
                explanation: "$E$ est une partie fermée si et seulement si toute suite $(x_n)$ de points de $E$ qui converge dans l'espace a sa limite dans $E$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Caractérisation séquentielle", "Densité"],
                q: "Comment caractériser qu'une partie $E$ est dense dans une partie $V$ à l'aide de suites ?",
                options: [
                    { text: "$E$ est dense dans $V$ si et seulement si tout point de $V$ est limite d'une suite de points de $E$", isCorrect: true },
                    { text: "$E$ est dense dans $V$ si toute suite de $V$ admet une sous-suite dans $E$", isCorrect: false }
                ],
                explanation: "$E$ est dense dans $V$ si et seulement si tout point $x \\in V$ est limite d'une suite de $E$[cite: 1]. Cela découle directement de la caractérisation séquentielle de l'adhérence[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },

            // --- 6.8.2 SUITES EXTRAITES ET VALEURS D'ADHÉRENCE ---
            {
                type: "qcm", tags: ["Sous-suites", "Définitions"],
                q: "Qu'est-ce qu'une suite extraite (ou sous-suite) $(x_{\\phi(n)})$ d'une suite $(x_n)$ ?",
                options: [
                    { text: "C'est une application composée $x \\circ \\phi$ où $\\phi : \\mathbb{N} \\to \\mathbb{N}$ est une application STRICTEMENT croissante", isCorrect: true },
                    { text: "C'est une restriction arbitraire des indices de la suite originelle", isCorrect: false }
                ],
                explanation: "Une sous-suite est définie par une application d'extraction $\\phi : \\mathbb{N} \\to \\mathbb{N}$ strictement croissante[cite: 1]. Cela garantit qu'on avance toujours dans les indices de la suite initiale sans jamais reculer ni stagner[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Valeur d'adhérence", "Définitions"],
                q: "Qu'est-ce qu'une valeur d'adhérence d'une suite $(x_n)$ ?",
                options: [
                    { text: "C'est la limite d'une suite extraite (sous-suite) convergente de $(x_n)$", isCorrect: true },
                    { text: "C'est la borne supérieure des valeurs de la suite", isCorrect: false }
                ],
                explanation: "On dit que $y \\in X$ est une valeur d'adhérence de la suite $(x_n)$ s'il existe une sous-suite $(x_{\\phi(n)})$ qui converge vers $y$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Valeur d'adhérence", "Équivalence métrique"],
                q: "Quelle propriété permet de savoir que $y$ est une valeur d'adhérence d'une suite $(x_n)$ SANS construire explicitement de sous-suite ?",
                options: [
                    { text: "$\\forall \\epsilon > 0, \\forall n \\in \\mathbb{N}, \\exists n_0 \\ge n$ tel que $d(x_{n_0}, y) < \\epsilon$", isCorrect: true },
                    { text: "$\\forall \\epsilon > 0, \\exists n_0 \\in \\mathbb{N}, \\forall n \\ge n_0, d(x_n, y) < \\epsilon$", isCorrect: false }
                ],
                explanation: "Le point $y$ est une valeur d'adhérence si et seulement si pour tout voisinage de $y$ et pour tout rang de départ, on peut toujours trouver un terme de la suite plus loin qui  ce voisinage[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Valeur d'adhérence", "Suites convergentes"],
                q: "Combien de valeurs d'adhérence possède une suite convergente ?",
                options: [
                    { text: "Elle n'en possède qu'une seule (qui est sa limite)", isCorrect: true },
                    { text: "Elle peut en posséder une infinité", isCorrect: false }
                ],
                explanation: "Une suite convergente dans un espace métrique n'a qu'une seule valeur d'adhérence : sa limite (qui est unique)[cite: 1]. Toute suite extraite converge vers cette même limite[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Valeur d'adhérence", "Contre-exemples"],
                q: "Si une suite possède une et une seule valeur d'adhérence, converge-t-elle nécessairement ?",
                options: [
                    { text: "Non, une suite avec une seule valeur d'adhérence ne converge pas forcément", isCorrect: true },
                    { text: "Oui, c'est une condition suffisante de convergence", isCorrect: false }
                ],
                explanation: "Une suite avec une seule valeur d'adhérence ne converge pas forcément[cite: 1]. Par exemple, la suite $x_{2n}=1$ et $x_{2n+1}=n$ a pour unique valeur d'adhérence 1, mais diverge car elle n'est pas bornée[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Suites extraites", "Convergence"],
                q: "Quelle est une condition nécessaire pour qu'une suite $(x_n)$ converge vers $y$ (concernant ses sous-suites) ?",
                options: [
                    { text: "Chaque sous-suite de $(x_n)$ doit converger vers $y$", isCorrect: true },
                    { text: "Au moins une sous-suite doit converger vers $y$", isCorrect: false }
                ],
                explanation: "Une condition nécessaire pour que $(x_n)$ converge vers $y$ est que chaque sous-suite converge vers $y$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Suites extraites", "Critère de convergence"],
                q: "Quelle est une condition SUFFISANTE de convergence basée sur l'extraction de sous-suites ?",
                options: [
                    { text: "De chaque sous-suite, on peut extraire une sous-sous-suite qui converge vers la même limite $y$", isCorrect: true },
                    { text: "Il suffit qu'une sous-suite converge vers $y$", isCorrect: false }
                ],
                explanation: "Une condition suffisante pour que $(x_n)$ converge vers $y$ est que de chaque sous-suite $(x_{\\phi(n)})$, on puisse extraire une sous-sous-suite convergente vers $y$[cite: 1]. Si ce n'était pas le cas, on pourrait construire une sous-suite restant éternellement loin de $y$[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Bolzano-Weierstrass", "Suites"],
                q: "Que stipule le Théorème de Bolzano-Weierstrass dans l'espace $(\\mathbb{R}^n, ||\\cdot||_\\infty)$ ?",
                options: [
                    { text: "Toute suite bornée admet au moins une valeur d'adhérence (une sous-suite convergente)", isCorrect: true },
                    { text: "Toute suite admet une valeur d'adhérence", isCorrect: false }
                ],
                explanation: "Le Théorème de Bolzano-Weierstrass stipule que toute suite BORNÉE de $(\\mathbb{R}^n, ||\\cdot||_\\infty)$ admet (au moins) une valeur d'adhérence[cite: 1]. La démonstration procède par extractions successives sur chaque coordonnée[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm", tags: ["Bolzano-Weierstrass", "Contre-exemples"],
                q: "Peut-on trouver une suite qui n'a AUCUNE valeur d'adhérence dans $\\mathbb{R}$ ?",
                options: [
                    { text: "Oui, par exemple la suite divergente $x_n = n$", isCorrect: true },
                    { text: "Non, le théorème de Bolzano-Weierstrass garantit toujours une valeur d'adhérence", isCorrect: false }
                ],
                explanation: "La suite de terme général $x_n = n$ n'a aucune valeur d'adhérence car elle n'est pas bornée (elle s'échappe vers l'infini)[cite: 1]. Bolzano-Weierstrass ne s'applique qu'aux suites bornées[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    }
};
