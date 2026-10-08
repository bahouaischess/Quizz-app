// ============================================================
// MatiÃ¨re : Algèbre 2 : Chapitre 3 (espaces vectoriels)
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
Object.assign(defaultData, {
"Algèbre 2 : Chapitre 3 (espaces vectoriels)": {
        folder: "Algèbre 2",
    stats: { attempts: 0, correct: 0 },
    dailyValidations: {},
    questions: [

        // --- DÉFINITIONS ET EXEMPLES FONDAMENTAUX ---
        {
            type: "qcm", tags: ["Définition EV", "Lois et Calculs"],
            q: "Quelles sont les conditions exigées sur la loi interne (+) pour qu'un ensemble $(E, +, \\cdot)$ soit un espace vectoriel ?",
            options: [
                { text: "L'addition doit être associative, posséder un élément neutre (0), admettre un opposé pour chaque élément, et être commutative (Groupe Abélien)", isCorrect: true },
                { text: "L'addition doit seulement posséder un élément neutre et être associative", isCorrect: false },
                { text: "L'addition doit former un groupe abélien, et être distributive par rapport à la loi externe", isCorrect: false }
            ],
            explanation: "Un espace vectoriel a pour fondation une structure de groupe commutatif (abélien) pour l'addition seule. La distributivité par rapport à la loi externe est un axiome à part, qui concerne l'interaction entre les deux lois, pas la loi interne isolément.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Définition EV", "Lois et Calculs"],
            q: "D'après le Lemme 3.3, que peut-on déduire de l'égalité $\\lambda \\cdot x = 0_E$ dans un espace vectoriel ?",
            options: [
                { text: "Que $\\lambda = 0$ et $x = 0_E$ obligatoirement", isCorrect: false },
                { text: "Que $\\lambda = 0$ OU $x = 0_E$", isCorrect: true },
                { text: "Que $x = -\\lambda$", isCorrect: false },
                { text: "Que $x = 0_E$ obligatoirement, quelle que soit la valeur de $\\lambda$", isCorrect: false }
            ],
            explanation: "C'est la règle de l'intégrité de la loi externe : au moins l'un des deux facteurs est nul, mais pas nécessairement les deux, et pas nécessairement $x$ seul (si $\\lambda=0$, $x$ peut être n'importe quel vecteur).",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Exemples de base"],
            q: "L'ensemble $\\mathbb{C}^n$ est-il un espace vectoriel sur $\\mathbb{R}$ ?",
            options: [
                { text: "Oui", isCorrect: true },
                { text: "Non", isCorrect: false }
            ],
            explanation: "Oui, on peut additionner des vecteurs complexes et les multiplier par des réels. En revanche, $\\mathbb{R}^n$ n'est pas un $\\mathbb{C}$-espace vectoriel (multiplier un réel par un complexe peut sortir de $\\mathbb{R}^n$).",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Exemples de base", "Polynômes", "Pièges"],
            q: "Parmi ces ensembles, lequel n'est PAS un espace vectoriel de référence ?",
            options: [
                { text: "L'ensemble des fonctions continues $\\mathcal{F}(\\mathbb{R}, \\mathbb{R})$", isCorrect: false },
                { text: "L'ensemble $\\mathbb{K}_n[X]$ des polynômes de degré inférieur ou égal à $n$", isCorrect: false },
                { text: "L'ensemble des polynômes de degré EXACTEMENT égal à $n$", isCorrect: true }
            ],
            explanation: "Les polynômes de degré exactement $n$ ne forment pas un espace vectoriel car ils ne contiennent pas le polynôme nul (degré $-\\infty$), condition absolue pour être un E.V.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Combinaisons linéaires"],
            q: "Qu'appelle-t-on la base canonique de $\\mathbb{R}^n$ (Prop 3.10) ?",
            options: [
                { text: "La famille de vecteurs dont tous les coefficients valent 1", isCorrect: false },
                { text: "La famille $(e_1, \\dots, e_n)$ où $e_i$ a toutes ses composantes nulles sauf la $i$-ème qui vaut 1", isCorrect: true },
                { text: "La famille de tous les vecteurs de norme 1 dans $\\mathbb{R}^n$", isCorrect: false }
            ],
            explanation: "Tout vecteur de $\\mathbb{R}^n$ est combinaison linéaire de cette base précise : $X = x_1 e_1 + \\dots + x_n e_n$. L'ensemble des vecteurs de norme 1 est infini et n'est même pas une famille finie ordonnée : ce n'est pas ça, la base canonique.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },

        // --- SOUS-ESPACES VECTORIELS (SEV) ---
        {
            type: "qcm", tags: ["Sous-Espaces Vectoriels"],
            q: "Quelles sont les conditions strictes (Définition 3.16) pour qu'une partie $F$ soit un Sous-Espace Vectoriel (SEV) de $E$ ?",
            options: [
                { text: "$F$ est non vide, et $\\forall x,y \\in F, \\forall \\lambda, \\mu \\in \\mathbb{K}$, $\\lambda x + \\mu y \\in F$", isCorrect: true },
                { text: "$F$ est fini, et la somme des vecteurs de $F$ appartient à $F$", isCorrect: false },
                { text: "$F$ est non vide, et stable par addition uniquement (la stabilité par multiplication scalaire n'est pas nécessaire)", isCorrect: false }
            ],
            explanation: "Pour être un SEV, l'ensemble doit être non vide et stable par combinaison linéaire — c'est-à-dire stable À LA FOIS par addition ET par multiplication scalaire. Oublier l'une des deux stabilités est une erreur fréquente.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Sous-Espaces Vectoriels"],
            q: "Quelle est la caractérisation la plus pratique (Prop 3.20) pour vérifier rapidement que $F$ est un SEV ?",
            options: [
                { text: "Le vecteur nul $0_E \\in F$ et $\\forall x,y \\in F, \\forall \\lambda \\in \\mathbb{K}, \\lambda x + y \\in F$", isCorrect: true },
                { text: "$F$ doit avoir la même dimension que $E$", isCorrect: false },
                { text: "$0_E \\in F$ et $F$ est stable par multiplication scalaire (la stabilité par addition en découle automatiquement)", isCorrect: false }
            ],
            explanation: "C'est la méthode reine en TD : on vérifie que 0 est dedans, puis la stabilité par $\\lambda x + y$ en une seule fois. La stabilité par addition ne \"découle\" pas automatiquement de la seule stabilité scalaire : les deux doivent être vérifiées (ici regroupées en une seule combinaison).",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Sous-Espaces Vectoriels", "Pièges"],
            q: "L'ensemble $\\{(x,y) \\in \\mathbb{R}^2, 2x+3y=2\\}$ n'est pas un sous-espace vectoriel. Pour quelle raison précise ?",
            options: [
                { text: "Parce que cet ensemble n'est pas fini", isCorrect: false },
                { text: "Parce que le vecteur nul $(0,0)$ ne vérifie pas l'équation ($2\\times0+3\\times0 \\neq 2$)", isCorrect: true },
                { text: "Parce que l'ensemble n'est stable que par addition, pas par multiplication scalaire", isCorrect: false },
                { text: "Parce que 2 et 3 ne sont pas égaux", isCorrect: false }
            ],
            explanation: "La seule raison qui suffit à disqualifier $F$ est l'absence du vecteur nul : dès que $0_E \\notin F$, $F$ ne peut pas être un SEV, quelle que soit sa taille ou d'éventuelles autres propriétés de stabilité. C'est un sous-espace affine (une droite ne passant pas par l'origine), pas un sous-espace vectoriel.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Sous-Espaces Vectoriels", "Systèmes linéaires"],
            q: "Le noyau d'une matrice $Ker(A)$ forme-t-il un sous-espace vectoriel (Prop 3.24) ?",
            options: [
                { text: "Oui, car $A(\\lambda X + Y) = \\lambda AX + AY = 0$", isCorrect: true },
                { text: "Non", isCorrect: false },
                { text: "Non, car le noyau ne contient pas toujours le vecteur nul", isCorrect: false }
            ],
            explanation: "L'ensemble des solutions d'un système linéaire HOMOGÈNE est toujours un SEV. Le vecteur nul appartient toujours à $Ker(A)$ puisque $A \\times 0 = 0$ pour toute matrice $A$, sans exception.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Sous-Espaces Vectoriels"],
            q: "Que peut-on dire de l'intersection de plusieurs sous-espaces vectoriels (Prop 3.25) ?",
            options: [
                { text: "Ce n'est jamais un SEV", isCorrect: false },
                { text: "C'est toujours un sous-espace vectoriel", isCorrect: true },
                { text: "C'est un SEV seulement si tous les SEV ont la même dimension", isCorrect: false }
            ],
            explanation: "L'intersection de SEV préserve toujours la présence du vecteur nul et la stabilité par combinaison linéaire, quelles que soient leurs dimensions respectives — même très différentes.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Sous-Espaces Vectoriels", "Pièges"],
            q: "L'union de deux sous-espaces vectoriels $F \\cup G$ est-elle toujours un sous-espace vectoriel ?",
            options: [
                { text: "Oui, toujours", isCorrect: false },
                { text: "Non, elle ne l'est que si $F \\subset G$ ou $G \\subset F$", isCorrect: true },
                { text: "Oui, à condition que $F$ et $G$ aient la même dimension", isCorrect: false }
            ],
            explanation: "C'est un grand classique de TD (Ex 3.13). Si l'on prend l'axe des X et l'axe des Y (qui ont d'ailleurs la même dimension, 1), leur union forme une croix qui n'est pas stable par addition : la somme d'un vecteur de chaque axe donne un point hors de la croix.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Sous-Espaces Vectoriels"],
            q: "L'ensemble des suites convergentes vers 0 est-il un SEV de l'espace des suites réelles ?",
            options: [
                { text: "Oui", isCorrect: true },
                { text: "Non", isCorrect: false }
            ],
            explanation: "La suite nulle converge vers 0, et toute combinaison linéaire de suites tendant vers 0 tend également vers 0 (limites usuelles). C'est un SEV classique.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },

        // --- ESPACES ENGENDRÉS (VECT) ---
        {
            type: "qcm", tags: ["Espaces engendrés (Vect)"],
            q: "Que désigne la notation $Vect[(x_i)]$ ?",
            options: [
                { text: "L'ensemble des combinaisons linéaires de la famille de vecteurs $(x_i)$", isCorrect: true },
                { text: "L'intersection des vecteurs $(x_i)$", isCorrect: false },
                { text: "La transposée du vecteur", isCorrect: false }
            ],
            explanation: "$Vect[(x_i)]$ engendre par définition un sous-espace vectoriel (Prop 3.31).",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Espaces engendrés (Vect)"],
            q: "Vrai ou Faux : L'ordre des vecteurs dans la notation $Vect[u, v, w]$ change l'espace vectoriel généré.",
            options: [
                { text: "Vrai", isCorrect: false },
                { text: "Faux", isCorrect: true }
            ],
            explanation: "L'ordre des vecteurs générateurs n'a aucune importance sur l'espace global engendré (Remarque 3.29).",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Espaces engendrés (Vect)"],
            q: "Qu'est-ce qu'une droite vectorielle (Def 3.34) ?",
            options: [
                { text: "Une ligne d'une matrice", isCorrect: false },
                { text: "Un sous-espace vectoriel engendré par un seul vecteur non nul : $Vect[u]$", isCorrect: true },
                { text: "Un sous-espace vectoriel de dimension 2", isCorrect: false }
            ],
            explanation: "Tous les points d'une droite vectorielle sont colinéaires au vecteur directeur $u$ — elle est de dimension 1, pas 2 (ça, c'est un plan vectoriel).",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Espaces engendrés (Vect)"],
            q: "Selon la Proposition 3.35, que devient l'espace $Vect[A \\cup \\{x\\}]$ si le vecteur $x$ appartient déjà à $Vect[A]$ ?",
            options: [
                { text: "Sa dimension augmente de 1", isCorrect: false },
                { text: "$Vect[A \\cup \\{x\\}] = Vect[A]$. L'espace ne change pas.", isCorrect: true },
                { text: "L'espace ne change pas, mais seulement si $x$ s'écrit comme combinaison linéaire à coefficients tous positifs des vecteurs de $A$", isCorrect: false }
            ],
            explanation: "Si un vecteur est déjà une combinaison linéaire des autres — avec des coefficients de n'importe quel signe, pas seulement positifs — l'ajouter à la famille génératrice est redondant et n'agrandit pas l'espace.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Espaces engendrés (Vect)", "Pièges"],
            q: "Soit $F = Vect[u_1, u_2]$ avec $u_1, u_2$ non colinéaires. Si je multiplie $u_1$ par 2, l'espace $F$ change-t-il ?",
            options: [
                { text: "Oui", isCorrect: false },
                { text: "Non", isCorrect: true },
                { text: "Non, dans tous les cas, même si on multipliait $u_1$ par 0", isCorrect: false }
            ],
            explanation: "Multiplier un vecteur générateur par un scalaire NON NUL ne change pas l'espace engendré. Mais attention au cas limite : multiplier par 0 supprimerait $u_1$ de la famille génératrice, ce qui réduirait l'espace à $Vect[u_2]$ si $u_1$ et $u_2$ ne sont pas colinéaires — la 3ème option est donc fausse.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },

        // --- FAMILLES LIBRES ET LIÉES ---
        {
            type: "qcm", tags: ["Familles Libres/Liées"],
            q: "Quand dit-on qu'une famille de vecteurs est LIÉE (Def 3.37) ?",
            options: [
                { text: "S'il existe un vecteur de la famille qui est combinaison linéaire des autres vecteurs de cette même famille", isCorrect: true },
                { text: "Si la somme de tous les vecteurs fait 0", isCorrect: false },
                { text: "Si tous les vecteurs de la famille sont colinéaires entre eux", isCorrect: false }
            ],
            explanation: "Une famille est liée s'il y a de la redondance : au moins un vecteur est \"inutile\". La colinéarité mutuelle de TOUS les vecteurs est une condition beaucoup trop forte : dès 3 vecteurs, une famille peut être liée sans qu'ils soient tous colinéaires entre eux (il suffit qu'un seul soit combinaison des autres).",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Familles Libres/Liées"],
            q: "Quel est le test fondamental de liberté (Prop 3.38) d'une famille $(u_1, \\dots, u_p)$ ?",
            options: [
                { text: "L'équation $\\lambda_1 u_1 + \\dots + \\lambda_p u_p = 0$ doit impliquer que tous les scalaires $\\lambda_i = 0$", isCorrect: true },
                { text: "Le produit des vecteurs doit être non nul", isCorrect: false },
                { text: "Chaque vecteur $u_i$ doit être non nul", isCorrect: false }
            ],
            explanation: "C'est la définition formelle de l'indépendance linéaire. Le fait que chaque vecteur soit non nul est une condition NÉCESSAIRE mais pas SUFFISANTE : une famille peut avoir tous ses vecteurs non nuls et être quand même liée (par exemple deux vecteurs colinéaires non nuls).",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Familles Libres/Liées", "Méthode de Gauss"],
            q: "Soit $A$ la matrice associée à une famille de $p$ vecteurs de $\\mathbb{K}^n$. D'après la méthode de Gauss (Prop 3.40), la famille est LIBRE si et seulement si sa réduite a :",
            options: [
                { text: "$n$ pivots", isCorrect: false },
                { text: "$p$ pivots (autant de pivots que de vecteurs/colonnes)", isCorrect: true },
                { text: "Des zéros sur la diagonale", isCorrect: false }
            ],
            explanation: "Si le nombre de pivots $r$ est égal au nombre d'inconnues $p$, le système homogène admet une unique solution (tous les $\\lambda = 0$), ce qui prouve la liberté.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Familles Libres/Liées", "Méthode de Gauss"],
            q: "D'après la méthode de Gauss (Prop 3.40), la famille est GÉNÉRATRICE de $\\mathbb{K}^n$ si et seulement si sa réduite a :",
            options: [
                { text: "$n$ pivots (autant de pivots que de dimensions dans l'espace)", isCorrect: true },
                { text: "$p$ pivots", isCorrect: false },
                { text: "$p$ pivots, peu importe la valeur de $n$", isCorrect: false }
            ],
            explanation: "Si $r < n$, la réduite aura des lignes de zéros : certains vecteurs $B$ de $\\mathbb{K}^n$ ne seront pas atteints. Il faut $n$ pivots, quel que soit le nombre $p$ de vecteurs de la famille de départ.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Familles Libres/Liées", "Pièges"],
            q: "Dans $\\mathbb{R}^n$, si le nombre de vecteurs $p$ d'une famille est strictement supérieur à la dimension $n$ ($p > n$), que peut-on affirmer ?",
            options: [
                { text: "La famille est forcément libre", isCorrect: false },
                { text: "La famille est forcément LIÉE", isCorrect: true },
                { text: "Cela dépend si les vecteurs sont colinéaires entre eux", isCorrect: false }
            ],
            explanation: "Le nombre de pivots $r$ est au maximum $n$. Si $p > n$, on a forcément $r < p$, donc des variables libres et des solutions non nulles à $\\sum \\lambda_i x_i = 0$ — ce résultat est garanti dans TOUS les cas, sans avoir besoin d'examiner la colinéarité des vecteurs.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Familles Libres/Liées"],
            q: "Que peut-on dire d'une famille de vecteurs contenant le vecteur nul ?",
            options: [
                { text: "Elle est obligatoirement libre", isCorrect: false },
                { text: "Elle est obligatoirement liée", isCorrect: true }
            ],
            explanation: "On peut donner un coefficient non nul (ex: 1) au vecteur nul et des coefficients nuls aux autres pour former le vecteur nul total, ce qui viole la liberté.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Familles Libres/Liées"],
            q: "À quelle condition stricte une famille de DEUX vecteurs est-elle libre (Prop 3.45) ?",
            options: [
                { text: "Si et seulement s'ils sont orthogonaux", isCorrect: false },
                { text: "Si et seulement s'ils ne sont pas colinéaires", isCorrect: true }
            ],
            explanation: "Pour deux vecteurs, l'indépendance linéaire se vérifie instantanément à l'œil : l'un ne doit pas être le multiple proportionnel de l'autre. L'orthogonalité n'est ni nécessaire ni suffisante pour la liberté.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Familles Libres/Liées"],
            q: "D'après la Proposition 3.48, qu'implique la liberté d'une famille sur l'écriture des combinaisons linéaires ?",
            options: [
                { text: "Une infinité d'écritures possibles", isCorrect: false },
                { text: "L'unicité de la décomposition", isCorrect: true }
            ],
            explanation: "Si la famille est libre, tout vecteur de l'espace engendré possède une écriture UNIQUE sur cette famille — c'est le principe fondamental qui permettra de définir une base.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Familles Libres/Liées"],
            q: "Vrai ou Faux : Toute sous-famille non vide d'une famille libre est libre (Prop 3.49).",
            options: [
                { text: "Vrai", isCorrect: true },
                { text: "Faux", isCorrect: false }
            ],
            explanation: "Retirer des vecteurs d'une famille qui n'a aucune redondance ne va évidemment pas créer de la redondance.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Familles Libres/Liées"],
            q: "Soit $A$ une famille libre. À quelle condition stricte la famille $A \\cup \\{x\\}$ reste-t-elle libre (Prop 3.49) ?",
            options: [
                { text: "Si $x \\in Vect[A]$", isCorrect: false },
                { text: "Si et seulement si $x \\notin Vect[A]$", isCorrect: true },
                { text: "Si $x$ est non nul", isCorrect: false }
            ],
            explanation: "Le nouveau vecteur $x$ ne doit pas pouvoir être construit à partir des vecteurs déjà présents dans $A$. Que $x$ soit non nul est une condition NÉCESSAIRE mais pas SUFFISANTE : $x$ peut être non nul et pourtant appartenir à $Vect[A]$, ce qui rendrait la famille liée.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Familles Libres/Liées"],
            q: "Qu'est-ce qu'une famille libre MAXIMALE (Def 3.50) ?",
            options: [
                { text: "Une famille libre contenant le plus grand vecteur", isCorrect: false },
                { text: "Une famille à laquelle il est impossible d'ajouter un vecteur sans détruire sa liberté", isCorrect: true },
                { text: "Une famille libre ayant strictement plus de vecteurs que toute autre famille libre de $E$", isCorrect: false }
            ],
            explanation: "C'est une autre façon de définir une Base : tout ajout créerait forcément une redondance. La 3ème option est un piège subtil : dans un espace de dimension finie, toutes les familles libres maximales ont en réalité le MÊME nombre de vecteurs (la dimension de $E$) — aucune n'en a \"strictement plus\" qu'une autre.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Familles Libres/Liées"],
            q: "Qu'est-ce qu'une famille génératrice MINIMALE (Def 3.36) ?",
            options: [
                { text: "Une famille génératrice à laquelle il est impossible de retirer un vecteur sans détruire sa capacité à engendrer l'espace", isCorrect: true },
                { text: "Une famille de dimension 1", isCorrect: false },
                { text: "Une famille génératrice ayant strictement moins de vecteurs que $\\dim(E)$", isCorrect: false }
            ],
            explanation: "C'est l'autre angle d'approche d'une Base : chaque vecteur est indispensable. Une famille génératrice minimale a en réalité EXACTEMENT $\\dim(E)$ vecteurs, jamais moins — en avoir moins rendrait justement impossible d'engendrer tout l'espace.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Espaces engendrés (Vect)", "Pièges"],
            q: "L'ensemble des solutions d'un système linéaire avec un second membre non nul ($AX = B \\neq 0$) forme-t-il un espace vectoriel ?",
            options: [
                { text: "Oui", isCorrect: false },
                { text: "Non", isCorrect: true }
            ],
            explanation: "Non. Le vecteur nul n'est pas solution ($A \\times 0 = 0 \\neq B$). L'ensemble des solutions d'un système affine est un espace affine, pas un espace vectoriel.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        }

    ]
}
});

