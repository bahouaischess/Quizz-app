const defaultData = {
    // ============================================================
// Algèbre 2 — Chapitre 1 : Matrices — VERSION ENRICHIE
// ------------------------------------------------------------
// Modifications apportées par rapport à la version originale :
//  - Quasi toutes les questions passent à 3 ou 4 options, avec
//    des distracteurs qui correspondent à de VRAIES erreurs
//    classiques (erreur de signe, confusion d'ordre, condition
//    fausse ajoutée, hypothèse manquante...) plutôt qu'à des
//    réponses absurdes faciles à éliminer.
//  - La définition de "matrice nilpotente" (mal placée à la fin
//    du bloc Symétrie) a été déplacée au début du bloc
//    Puissances & Nilpotence, où elle a sa place logique.
//  - Ajout de ~13 questions calculatoires (calcul direct sur
//    matrices numériques) réparties dans chaque bloc, absentes
//    de la version originale qui était 100% théorique.
//  - Nettoyage des reliquats "[cite: x]" dans les explications.
//
// Pour l'utiliser : remplace simplement la clé
// "Algèbre 2 : Chapitre 1 (Matrices)" existante dans ton objet
// de chapitres par celle-ci (copier-coller direct, structure
// identique : stats / dailyValidations / questions).
// ============================================================

"Algèbre 2 : Chapitre 1 (Matrices)": {
    course: "analyse3", // <--- LE LIEN FIXE AVEC LE CATALOGUE OFFICIEL
    folder: "Général",
    stats: { attempts: 0, correct: 0 },
    dailyValidations: {},
    questions: [

        // ==========================================================
        // BLOC 1 : DÉFINITIONS ET PRODUIT MATRICIEL
        // ==========================================================
        {
            type: "qcm", tags: ["Définitions"],
            q: "Comment note-t-on l'ensemble des matrices à $n$ lignes et $p$ colonnes à coefficients réels ?",
            options: [
                { text: "$\\mathcal{M}_{p,n}(\\mathbb{R})$", isCorrect: false },
                { text: "$\\mathcal{M}_{n,p}(\\mathbb{R})$", isCorrect: true },
                { text: "$\\mathbb{R}^{n \\times p}$", isCorrect: false },
                { text: "$\\mathcal{M}_n(\\mathbb{R})$ si $n=p$", isCorrect: false }
            ],
            explanation: "L'indice de ligne $n$ s'écrit toujours en premier, suivi de l'indice de colonne $p$. La notation $\\mathcal{M}_n(\\mathbb{R})$ ne désigne que le cas particulier des matrices carrées.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Définitions"],
            q: "Une matrice carrée $A$ est dite triangulaire supérieure si :",
            options: [
                { text: "Pour tout $i > j$, on a $a_{ij} = 0$", isCorrect: true },
                { text: "Pour tout $i < j$, on a $a_{ij} = 0$", isCorrect: false },
                { text: "Tous les termes de la diagonale sont nuls", isCorrect: false },
                { text: "Pour tout $i \\neq j$, on a $a_{ij} = 0$", isCorrect: false }
            ],
            explanation: "Tous les termes strictement sous la diagonale ($i > j$) sont nuls. La dernière option décrit en réalité une matrice diagonale, pas triangulaire.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Définitions"],
            q: "Qu'est-ce qu'une matrice scalaire ?",
            options: [
                { text: "Une matrice composée d'un seul réel", isCorrect: false },
                { text: "Une matrice diagonale dont tous les coefficients diagonaux sont égaux à un même scalaire $\\lambda$", isCorrect: true },
                { text: "Une matrice dont le déterminant est $\\lambda$", isCorrect: false },
                { text: "Une matrice dont tous les coefficients (pas seulement diagonaux) valent $\\lambda$", isCorrect: false }
            ],
            explanation: "Une matrice scalaire s'écrit $\\lambda I_n$ : elle est diagonale, avec $\\lambda$ répété sur la diagonale et des zéros ailleurs — pas $\\lambda$ partout.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Définitions"],
            q: "Quelle est la particularité d'une matrice élémentaire $E_{kl}$ ?",
            options: [
                { text: "Tous ses coefficients valent 1.", isCorrect: false },
                { text: "Elle a des 1 sur la diagonale et des 0 ailleurs.", isCorrect: false },
                { text: "Son coefficient $e_{kl}$ vaut 1, et tous les autres sont nuls.", isCorrect: true },
                { text: "Elle est égale à $I_n$ sauf sur la ligne $k$, remplacée par une combinaison linéaire.", isCorrect: false }
            ],
            explanation: "Un seul coefficient vaut 1 à la position $(k,l)$. La dernière option décrit plutôt une matrice de transvection (utilisée dans les opérations de Gauss), un objet différent.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Définitions"],
            q: "Que peut-on dire de la taille d'une matrice nulle $O_{n,p}$ ?",
            options: [
                { text: "Elle est nécessairement carrée ($n=p$)", isCorrect: false },
                { text: "Elle peut être de taille quelconque $n \\times p$, carrée ou non", isCorrect: true },
                { text: "Elle n'existe que si $n=1$ ou $p=1$ (vecteur nul)", isCorrect: false },
                { text: "Son nombre de lignes est toujours pair", isCorrect: false }
            ],
            explanation: "La matrice nulle existe pour tout format $n \\times p$, sans aucune restriction sur les dimensions.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Produit matriciel"],
            q: "À quelle condition stricte le produit matriciel $AB$ est-il défini ?",
            options: [
                { text: "Les deux matrices doivent être carrées", isCorrect: false },
                { text: "Le nombre de colonnes de $A$ doit être égal au nombre de lignes de $B$", isCorrect: true },
                { text: "Le nombre de lignes de $A$ doit être égal au nombre de colonnes de $B$", isCorrect: false },
                { text: "Les deux matrices doivent avoir le même nombre de lignes", isCorrect: false }
            ],
            explanation: "Si $A \\in \\mathcal{M}_{p,n}$ et $B \\in \\mathcal{M}_{n,q}$, l'indice de liaison $n$ doit correspondre : colonnes de $A$ = lignes de $B$.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Produit matriciel"],
            q: "Comment peut-on interpréter géométriquement le produit d'une matrice $A$ par un vecteur-colonne $X$ ?",
            options: [
                { text: "Une combinaison linéaire des lignes de $A$", isCorrect: false },
                { text: "Une combinaison linéaire des colonnes de $A$, pondérée par les composantes de $X$", isCorrect: true },
                { text: "Une combinaison linéaire des lignes de $A$, pondérée par les composantes de $X$", isCorrect: false },
                { text: "Le produit terme à terme (coefficient par coefficient) de $A$ et $X$", isCorrect: false }
            ],
            explanation: "C'est une vision fondamentale : $AX = x_1 C_1 + \\dots + x_p C_p$, où les $C_i$ sont les colonnes de $A$. Ce n'est en aucun cas un produit terme à terme (produit de Hadamard).",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Produit matriciel"],
            q: "Si $AB = AC$, a-t-on le droit d'écrire $B = C$ ?",
            options: [
                { text: "Oui, toujours", isCorrect: false },
                { text: "Non, sauf si $A$ est une matrice inversible", isCorrect: true },
                { text: "Non, jamais", isCorrect: false },
                { text: "Oui, mais seulement si $A$ est symétrique", isCorrect: false }
            ],
            explanation: "L'anneau des matrices admet des diviseurs de zéro. On ne peut simplifier à gauche qu'en multipliant par $A^{-1}$ ; la symétrie de $A$ n'a rien à voir avec cette propriété.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Produit matriciel"],
            q: "Coche les propriétés VRAIES du produit matriciel :",
            options: [
                { text: "Il est commutatif ($AB = BA$)", isCorrect: false },
                { text: "Il est associatif ($A(BC) = (AB)C$)", isCorrect: true },
                { text: "Il est distributif par rapport à l'addition ($A(B+D) = AB+AD$)", isCorrect: true },
                { text: "$AI_n = A$ et $I_pA = A$", isCorrect: true },
                { text: "Toute matrice non nulle admet un inverse pour ce produit", isCorrect: false }
            ],
            explanation: "Le produit n'est pas commutatif et n'admet pas d'inverse pour toute matrice non nulle (il existe des diviseurs de zéro). Il est en revanche associatif, distributif, avec $I_n$ comme élément neutre.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Produit matriciel", "Identités remarquables"],
            q: "Si $A$ et $B$ sont deux matrices carrées d'ordre $n$, que vaut $(A-B)(A+B)$ en général ?",
            options: [
                { text: "$A^2 - B^2$", isCorrect: false },
                { text: "$A^2 + AB - BA - B^2$", isCorrect: true },
                { text: "$A^2 - 2AB - B^2$", isCorrect: false },
                { text: "$A^2 + 2AB - B^2$", isCorrect: false }
            ],
            explanation: "Comme le produit matriciel n'est pas commutatif, $AB$ et $BA$ sont deux termes distincts qui ne se combinent pas en $2AB$ et ne s'annulent pas.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Produit matriciel", "Calcul numérique"],
            q: "Soient $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ et $B = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$. Que vaut $AB$ ?",
            options: [
                { text: "$\\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}$", isCorrect: true },
                { text: "$\\begin{pmatrix} 3 & 4 \\\\ 1 & 2 \\end{pmatrix}$", isCorrect: false },
                { text: "$\\begin{pmatrix} 0 & 2 \\\\ 3 & 0 \\end{pmatrix}$", isCorrect: false },
                { text: "$\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$", isCorrect: false }
            ],
            explanation: "$AB=\\begin{pmatrix}1\\times0+2\\times1 & 1\\times1+2\\times0\\\\3\\times0+4\\times1 & 3\\times1+4\\times0\\end{pmatrix}=\\begin{pmatrix}2&1\\\\4&3\\end{pmatrix}$. La 2ème option est en fait $BA$ (mauvais ordre), la 3ème est le produit terme à terme (Hadamard), la 4ème est $A^T$.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Produit matriciel", "Calcul numérique"],
            q: "Si $A$ est de taille $2\\times3$ et $B$ de taille $3\\times5$, quelle est la taille de $AB$ ?",
            options: [
                { text: "$2 \\times 5$", isCorrect: true },
                { text: "$3 \\times 3$", isCorrect: false },
                { text: "$2 \\times 3$", isCorrect: false },
                { text: "$5 \\times 2$", isCorrect: false }
            ],
            explanation: "Le résultat garde le nombre de lignes de $A$ et le nombre de colonnes de $B$ : la dimension intermédiaire ($3$) disparaît, elle ne réapparaît jamais dans le résultat final.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },

        // ==========================================================
        // BLOC 2 : TRANSPOSITION, TRACE ET SYMÉTRIE
        // ==========================================================
        {
            type: "qcm", tags: ["Transposition & Trace"],
            q: "Que vaut la transposée d'un produit, $(AB)^T$ ?",
            options: [
                { text: "$A^T B^T$", isCorrect: false },
                { text: "$B^T A^T$", isCorrect: true },
                { text: "$A^T B^T$ si $A$ et $B$ commutent", isCorrect: false },
                { text: "$-(AB)^T$", isCorrect: false }
            ],
            explanation: "La transposition renverse l'ordre du produit : $(AB)^T = B^T A^T$, et ce quelle que soit la relation entre $A$ et $B$ — la commutativité n'entre pas en jeu ici.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Transposition & Trace"],
            q: "Pour toute matrice $A \\in \\mathcal{M}_{n,p}(\\mathbb{R})$, la matrice produit $A A^T$ est obligatoirement :",
            options: [
                { text: "Antisymétrique", isCorrect: false },
                { text: "Symétrique", isCorrect: true },
                { text: "Diagonale", isCorrect: false },
                { text: "Symétrique uniquement si $A$ est carrée", isCorrect: false }
            ],
            explanation: "$(A A^T)^T = (A^T)^T A^T = A A^T$, quelle que soit la forme (carrée ou non) de $A$. Le résultat $AA^T$ est toujours carré d'ordre $n$ et toujours symétrique.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Transposition & Trace"],
            q: "Soit $X$ une matrice colonne à coefficients réels. Si $X^T X = 0$, que peut-on en déduire ?",
            options: [
                { text: "Que $X = 0$ obligatoirement", isCorrect: true },
                { text: "Rien, c'est possible avec $X$ non nul", isCorrect: false },
                { text: "Que $X$ est antisymétrique", isCorrect: false },
                { text: "Que $X^T = X$", isCorrect: false }
            ],
            explanation: "$X^T X$ est la somme des carrés des coefficients de $X$. Une somme de carrés de réels n'est nulle que si chaque terme l'est. (Ce résultat serait faux avec des coefficients complexes.)",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Transposition & Trace"],
            q: "Coche les propriétés exactes concernant la Trace :",
            options: [
                { text: "$Tr(A+B) = Tr(A) + Tr(B)$", isCorrect: true },
                { text: "$Tr(\\lambda A) = \\lambda Tr(A)$", isCorrect: true },
                { text: "$Tr(A^T) = Tr(A)$", isCorrect: true },
                { text: "$Tr(AB) = Tr(BA)$", isCorrect: true },
                { text: "$Tr(AB) = Tr(A) \\times Tr(B)$", isCorrect: false }
            ],
            explanation: "La trace est linéaire, invariante par transposition, et possède la propriété de commutativité circulaire $Tr(AB) = Tr(BA)$. Elle n'est PAS multiplicative.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Transposition & Trace", "Symétrie & Antisymétrie"],
            q: "Soit $A$ une matrice symétrique non nulle. Que peut-on dire de $Tr(A^2)$ ?",
            options: [
                { text: "Elle est nulle", isCorrect: false },
                { text: "Elle est strictement positive", isCorrect: true },
                { text: "On ne peut rien affirmer", isCorrect: false },
                { text: "Elle est strictement négative", isCorrect: false }
            ],
            explanation: "Les coefficients diagonaux de $A^2$ pour une matrice symétrique sont des sommes de carrés des éléments de chaque ligne. Puisque $A \\neq 0$, cette somme est $> 0$ (jamais négative).",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Symétrie & Antisymétrie"],
            q: "Une matrice carrée est dite antisymétrique si :",
            options: [
                { text: "$A^T = -A$", isCorrect: true },
                { text: "$A^T = A$", isCorrect: false },
                { text: "Sa trace est nulle", isCorrect: false },
                { text: "$A^2$ est antisymétrique", isCorrect: false }
            ],
            explanation: "L'antisymétrie se traduit par $A^T = -A$. La trace nulle et le fait que $A^2$ soit antisymétrique sont des CONSÉQUENCES ou des affirmations fausses, pas la définition elle-même (d'ailleurs $A^2$ est symétrique, pas antisymétrique, quand $A$ est antisymétrique).",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Symétrie & Antisymétrie"],
            q: "Soit $M$ une matrice carrée quelconque. Il existe un unique couple $(S, A)$ (S symétrique, A antisymétrique) tel que $M = S + A$. Comment s'écrit $S$ ?",
            options: [
                { text: "$S = \\frac{1}{2}(M - M^T)$", isCorrect: false },
                { text: "$S = \\frac{1}{2}(M + M^T)$", isCorrect: true },
                { text: "$S = M^T M$", isCorrect: false },
                { text: "$S = M M^T$", isCorrect: false }
            ],
            explanation: "La partie symétrique est $\\frac{1}{2}(M + M^T)$ (la première option est en réalité la partie antisymétrique). Attention : $M^TM$ et $MM^T$ sont bien des matrices symétriques, mais elles ne correspondent PAS à cette décomposition additive précise.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Symétrie & Antisymétrie"],
            q: "Si $A$ est une matrice symétrique, que peut-on dire de $A^2$ ?",
            options: [
                { text: "Elle est symétrique", isCorrect: true },
                { text: "Elle est antisymétrique", isCorrect: false },
                { text: "Elle est diagonale", isCorrect: false },
                { text: "Elle est symétrique seulement si $A$ est inversible", isCorrect: false }
            ],
            explanation: "$(A^2)^T = A^T A^T = AA = A^2$ dès que $A^T = A$, sans aucune condition d'inversibilité.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Symétrie & Antisymétrie"],
            q: "Une matrice symétrique non nulle peut-elle être nilpotente ?",
            options: [
                { text: "Oui", isCorrect: false },
                { text: "Non", isCorrect: true },
                { text: "Oui, mais seulement en dimension impaire", isCorrect: false },
                { text: "Cela dépend du signe des coefficients diagonaux", isCorrect: false }
            ],
            explanation: "Non. Si $A$ est symétrique et $A \\neq 0$, alors $Tr(A^2) > 0$ donc $A^2 \\neq 0$, ce qui empêche toute puissance de $A$ de s'annuler. Ce raisonnement ne dépend ni de la dimension ni des signes des coefficients.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Transposition & Trace", "Calcul numérique"],
            q: "Calculer la trace de $A = \\begin{pmatrix} 2 & 5 \\\\ 1 & -3 \\end{pmatrix}$.",
            options: [
                { text: "$-1$", isCorrect: true },
                { text: "$-6$", isCorrect: false },
                { text: "$5$", isCorrect: false },
                { text: "$-11$", isCorrect: false }
            ],
            explanation: "$Tr(A) = 2 + (-3) = -1$. $-6$ vient d'une multiplication des termes diagonaux au lieu d'une somme ; $5$ additionne tous les coefficients de la matrice ; $-11$ correspond au déterminant, pas à la trace.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Transposition & Trace", "Calcul numérique"],
            q: "Donner la transposée de $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$.",
            options: [
                { text: "$\\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$", isCorrect: true },
                { text: "$\\begin{pmatrix} 4 & 1 \\\\ 5 & 2 \\\\ 6 & 3 \\end{pmatrix}$", isCorrect: false },
                { text: "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\\\ 5 & 6 \\end{pmatrix}$", isCorrect: false },
                { text: "$\\begin{pmatrix} 3 & 6 \\\\ 2 & 5 \\\\ 1 & 4 \\end{pmatrix}$", isCorrect: false }
            ],
            explanation: "Chaque ligne de $A$ devient une colonne de $A^T$ dans le même ordre. La 3ème option recopie juste les coefficients dans l'ordre de lecture sans respecter la correspondance ligne/colonne ; les autres inversent l'ordre des lignes ou des colonnes.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },

        // ==========================================================
        // BLOC 3 : PUISSANCES ET INVERSIBILITÉ
        // ==========================================================
        {
            type: "qcm", tags: ["Puissances & Nilpotence"],
            q: "Qu'est-ce qu'une matrice nilpotente ?",
            options: [
                { text: "Une matrice dont la trace est nulle", isCorrect: false },
                { text: "Une matrice $A$ telle qu'il existe un entier $k \\ge 1$ vérifiant $A^k = 0_n$", isCorrect: true },
                { text: "Une matrice sans inverse", isCorrect: false },
                { text: "Une matrice dont le déterminant est nul", isCorrect: false }
            ],
            explanation: "Une matrice nilpotente non nulle a bien une trace nulle et un déterminant nul, et n'est jamais inversible — mais ce sont des CONSÉQUENCES de la définition, pas la définition elle-même, qui porte sur l'annulation d'une puissance de $A$.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Puissances & Nilpotence"],
            q: "Soit $A$ une matrice nilpotente. Comment définit-on son \"indice de nilpotence\" $p$ ?",
            options: [
                { text: "Le plus grand entier $p$ tel que $A^p = 0$", isCorrect: false },
                { text: "Le plus petit entier $p$ tel que $A^p = 0$ (avec $A^{p-1} \\neq 0$)", isCorrect: true },
                { text: "Le nombre de coefficients non nuls de $A$", isCorrect: false },
                { text: "Le rang de $A$", isCorrect: false }
            ],
            explanation: "\"Le plus grand $p$\" n'a pas de sens : si $A^p=0$, toutes les puissances suivantes sont nulles aussi. L'indice de nilpotence est le PREMIER instant où la matrice s'annule.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Puissances & Nilpotence"],
            q: "Sous quelle condition stricte peut-on utiliser la formule du binôme $(A+B)^n = \\sum \\binom{n}{k} A^k B^{n-k}$ ?",
            options: [
                { text: "Si $A$ et $B$ sont toutes deux inversibles", isCorrect: false },
                { text: "Si $A$ et $B$ commutent ($AB = BA$)", isCorrect: true },
                { text: "Toujours", isCorrect: false },
                { text: "Si $A$ et $B$ sont symétriques", isCorrect: false }
            ],
            explanation: "Sans la commutativité, les termes croisés comme $AB$ et $BA$ ne peuvent pas être regroupés lors du développement. L'inversibilité ou la symétrie de $A$ et $B$ ne garantissent absolument pas qu'elles commutent entre elles.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Puissances & Nilpotence"],
            q: "On donne $C = 2A + I_n$. Quel est le développement correct de $C^p$ ?",
            options: [
                { text: "$\\sum_{k=0}^{p} \\binom{p}{k} 2^k A^k$", isCorrect: true },
                { text: "$\\sum_{k=0}^{p} \\binom{p}{k} 2^p A^p$", isCorrect: false },
                { text: "$2^p A^p + I_n$", isCorrect: false },
                { text: "$\\sum_{k=0}^{p} \\binom{p}{k} 2^{p-k} A^{p-k}$", isCorrect: false }
            ],
            explanation: "$A$ et $I_n$ commutent, donc $C^p = \\sum \\binom{p}{k} (2A)^k I_n^{p-k} = \\sum \\binom{p}{k} 2^k A^k$. La dernière option inverse l'indice de sommation entre $2A$ et $I_n$.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Puissances & Nilpotence"],
            q: "Soit la matrice de rotation $A = \\begin{pmatrix} \\cos(\\theta) & -\\sin(\\theta) \\\\ \\sin(\\theta) & \\cos(\\theta) \\end{pmatrix}$. Que vaut $A^n$ ?",
            options: [
                { text: "$\\begin{pmatrix} \\cos^n(\\theta) & -\\sin^n(\\theta) \\\\ \\sin^n(\\theta) & \\cos^n(\\theta) \\end{pmatrix}$", isCorrect: false },
                { text: "$\\begin{pmatrix} \\cos(n\\theta) & -\\sin(n\\theta) \\\\ \\sin(n\\theta) & \\cos(n\\theta) \\end{pmatrix}$", isCorrect: true },
                { text: "$\\begin{pmatrix} n\\cos(\\theta) & -n\\sin(\\theta) \\\\ n\\sin(\\theta) & n\\cos(\\theta) \\end{pmatrix}$", isCorrect: false },
                { text: "$\\begin{pmatrix} \\cos(\\theta) & -n\\sin(\\theta) \\\\ n\\sin(\\theta) & \\cos(\\theta) \\end{pmatrix}$", isCorrect: false }
            ],
            explanation: "Composer $n$ rotations d'angle $\\theta$ donne une rotation globale d'angle $n\\theta$ — ce n'est ni une puissance terme à terme, ni une simple mise à l'échelle par $n$.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Inversibilité"],
            q: "Pour des matrices carrées d'ordre $n$, si $AB = I_n$, que peut-on affirmer sur $BA$ ?",
            options: [
                { text: "Rien, il faut vérifier $BA=I_n$ séparément", isCorrect: false },
                { text: "$BA = I_n$ automatiquement", isCorrect: true },
                { text: "$BA = I_n$ seulement si $A$ est symétrique", isCorrect: false },
                { text: "$BA = 0_n$ nécessairement", isCorrect: false }
            ],
            explanation: "C'est un théorème puissant, spécifique aux matrices carrées : un inverse à droite est automatiquement un inverse à gauche. Aucune condition supplémentaire (comme la symétrie) n'est nécessaire.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Inversibilité"],
            q: "Que vaut l'inverse d'un produit matriciel, $(AB)^{-1}$ ?",
            options: [
                { text: "$A^{-1} B^{-1}$", isCorrect: false },
                { text: "$B^{-1} A^{-1}$", isCorrect: true },
                { text: "$(A^{-1})(B^{-1})^T$", isCorrect: false },
                { text: "$(AB)^T$", isCorrect: false }
            ],
            explanation: "L'inverse d'un produit inverse l'ordre des facteurs, tout comme la transposition — mais il ne faut pas mélanger les deux opérations : l'inverse et la transposée sont des notions distinctes.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Inversibilité", "Polynômes d'endomorphismes"],
            q: "Soit $A$ vérifiant l'équation polynomiale $A^2 + A + I_n = 0$. Que peut-on en déduire ?",
            options: [
                { text: "$A$ n'est pas inversible", isCorrect: false },
                { text: "$A$ est inversible et $A^{-1} = -A - I_n$", isCorrect: true },
                { text: "$A$ est nilpotente", isCorrect: false },
                { text: "$A$ est inversible et $A^{-1} = A + I_n$", isCorrect: false }
            ],
            explanation: "L'équation se factorise en $A(-A-I_n)=I_n$, donc $A^{-1}=-A-I_n$. Attention au signe : $A^{-1}=A+I_n$ (sans le signe moins) est une erreur fréquente lors de cette factorisation.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Inversibilité"],
            q: "La somme de deux matrices inversibles est-elle toujours inversible ?",
            options: [
                { text: "Oui", isCorrect: false },
                { text: "Non", isCorrect: true },
                { text: "Oui, à condition qu'elles soient toutes deux symétriques", isCorrect: false },
                { text: "Cela dépend uniquement du signe de leurs déterminants", isCorrect: false }
            ],
            explanation: "Le contre-exemple $I_n$ et $-I_n$ suffit : leur somme $0_n$ n'est pas inversible, alors qu'elles sont toutes deux symétriques et de déterminants de signes différents — ces deux critères ne suffisent donc pas.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Inversibilité"],
            q: "Toute matrice de $\\mathcal{M}_n(\\mathbb{R})$ peut-elle s'écrire comme la somme de deux matrices inversibles ?",
            options: [
                { text: "Vrai, pour toute matrice", isCorrect: true },
                { text: "Faux", isCorrect: false },
                { text: "Vrai, mais uniquement pour les matrices déjà inversibles", isCorrect: false },
                { text: "Faux, cela n'est possible qu'en dimension 2", isCorrect: false }
            ],
            explanation: "Pour une matrice $A$ non inversible, il existe toujours un $\\epsilon$ assez petit tel que $A = (A+\\epsilon I_n) - \\epsilon I_n$, où les deux termes sont inversibles. Le résultat est valable en toute dimension, y compris pour des matrices déjà inversibles.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Inversibilité", "Puissances & Nilpotence"],
            q: "Une matrice nilpotente non nulle peut-elle être inversible ?",
            options: [
                { text: "Vrai", isCorrect: false },
                { text: "Faux", isCorrect: true },
                { text: "Vrai, si son indice de nilpotence est pair", isCorrect: false },
                { text: "Cela dépend du rang de $A$", isCorrect: false }
            ],
            explanation: "Si $A^k=0$ et que $A$ était inversible, en multipliant par $(A^{-1})^k$ on obtiendrait $I_n=0$, absurde. Ce raisonnement ne dépend ni de la parité de $k$ ni du rang de $A$.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Puissances & Nilpotence", "Calcul numérique"],
            q: "Soit $N = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$. Que vaut $N^2$ ?",
            options: [
                { text: "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$", isCorrect: true },
                { text: "$N$", isCorrect: false },
                { text: "$\\begin{pmatrix} 0 & 2 \\\\ 0 & 0 \\end{pmatrix}$", isCorrect: false },
                { text: "$I_2$", isCorrect: false }
            ],
            explanation: "$N^2=\\begin{pmatrix}0\\times0+1\\times0 & 0\\times1+1\\times0\\\\0\\times0+0\\times0&0\\times1+0\\times0\\end{pmatrix}=0_2$ : $N$ est nilpotente d'indice 2. Elle ne \"boucle\" pas sur elle-même et sa puissance n'est pas une simple multiplication par un scalaire.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Inversibilité", "Calcul numérique"],
            q: "Calculer l'inverse de $A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$.",
            options: [
                { text: "$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$", isCorrect: true },
                { text: "$\\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix}$", isCorrect: false },
                { text: "$\\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$", isCorrect: false },
                { text: "$\\begin{pmatrix} -3 & 1 \\\\ 5 & -2 \\end{pmatrix}$", isCorrect: false }
            ],
            explanation: "$det(A)=2\\times3-1\\times5=1$, donc $A^{-1}=\\frac{1}{1}\\begin{pmatrix}3&-1\\\\-5&2\\end{pmatrix}$. La 2ème option transpose le résultat par erreur, la 3ème oublie les signes sur l'antidiagonale, la 4ème inverse tous les signes.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },

        // ==========================================================
        // BLOC 4 : DÉTERMINANT
        // ==========================================================
        {
            type: "qcm", tags: ["Déterminant (Calculs)"],
            q: "Quelle est l'interprétation géométrique absolue du déterminant d'une matrice $2 \\times 2$ ?",
            options: [
                { text: "La longueur de la diagonale", isCorrect: false },
                { text: "L'aire du parallélogramme formé par les deux vecteurs colonnes", isCorrect: true },
                { text: "Le périmètre du parallélogramme formé par les deux vecteurs colonnes", isCorrect: false },
                { text: "La somme des aires des deux triangles formés par les diagonales", isCorrect: false }
            ],
            explanation: "En dimension 2, c'est une aire (base × hauteur, avec signe). En dimension 3, cela devient le volume du parallélépipède formé par les 3 vecteurs colonnes.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Déterminant (Propriétés)"],
            q: "Que vaut le déterminant de $\\alpha A$, si $A$ est une matrice carrée d'ordre $n$ ?",
            options: [
                { text: "$\\alpha \\cdot det(A)$", isCorrect: false },
                { text: "$\\alpha^n \\cdot det(A)$", isCorrect: true },
                { text: "$n \\alpha \\cdot det(A)$", isCorrect: false },
                { text: "$\\alpha^{n-1} \\cdot det(A)$", isCorrect: false }
            ],
            explanation: "Multiplier la matrice par $\\alpha$ revient à multiplier CHAQUE colonne par $\\alpha$. Par multilinéarité, le scalaire sort une fois par colonne, donc à la puissance $n$ (pas $n-1$, piège classique d'oubli d'une colonne).",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Déterminant (Propriétés)"],
            q: "Que se passe-t-il pour le déterminant si j'échange deux colonnes (ou deux lignes) d'une matrice ?",
            options: [
                { text: "Il ne change pas", isCorrect: false },
                { text: "Il s'annule", isCorrect: false },
                { text: "Il est multiplié par -1 (change de signe)", isCorrect: true },
                { text: "Il est divisé par 2", isCorrect: false }
            ],
            explanation: "Le déterminant est une forme alternée. Un échange de deux vecteurs renverse l'orientation géométrique et inverse le signe — la valeur absolue, elle, ne change pas.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Déterminant (Propriétés)"],
            q: "Que se passe-t-il si j'ajoute à la colonne $C_j$ un multiple d'une autre colonne $C_i$ ($C_j \\leftarrow C_j + \\alpha C_i$) ?",
            options: [
                { text: "Le déterminant est multiplié par $\\alpha$", isCorrect: false },
                { text: "Le déterminant change de signe", isCorrect: false },
                { text: "Le déterminant NE CHANGE PAS", isCorrect: true },
                { text: "Le déterminant est multiplié par $(1+\\alpha)$", isCorrect: false }
            ],
            explanation: "C'est la \"transvection\", qui permet d'échelonner une matrice avec la méthode de Gauss sans altérer son déterminant final, quelle que soit la valeur de $\\alpha$.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Déterminant (Propriétés)"],
            q: "Que vaut le déterminant d'une matrice possédant deux colonnes strictement identiques ?",
            options: [
                { text: "1", isCorrect: false },
                { text: "0", isCorrect: true },
                { text: "On ne peut pas savoir", isCorrect: false },
                { text: "Cela dépend des autres colonnes", isCorrect: false }
            ],
            explanation: "Le déterminant étant une forme alternée, il s'annule systématiquement dès que deux colonnes sont identiques — quelles que soient les autres colonnes de la matrice.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Déterminant (Propriétés)", "Inversibilité"],
            q: "Si $A$ est une matrice inversible, que vaut $det(A^{-1})$ ?",
            options: [
                { text: "$-det(A)$", isCorrect: false },
                { text: "$\\frac{1}{det(A)}$", isCorrect: true },
                { text: "$det(A)^n$", isCorrect: false },
                { text: "$\\frac{1}{n \\cdot det(A)}$", isCorrect: false }
            ],
            explanation: "Comme $det(AB)=det(A)det(B)$, on a $det(A)det(A^{-1})=det(I_n)=1$, d'où $det(A^{-1})=1/det(A)$ — sans facteur $n$ à ajouter.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Matrices par blocs", "Déterminant (Propriétés)"],
            q: "Quel est le déterminant de la matrice triangulaire par blocs $M = \\begin{pmatrix} A & C \\\\ 0 & B \\end{pmatrix}$ ?",
            options: [
                { text: "$det(A) + det(B)$", isCorrect: false },
                { text: "$det(A) \\times det(B)$", isCorrect: true },
                { text: "$det(A) \\times det(C) \\times det(B)$", isCorrect: false },
                { text: "$det(A) \\times det(B) - det(C)$", isCorrect: false }
            ],
            explanation: "Comme pour les matrices triangulaires simples, le bloc $C$ n'affecte jamais le déterminant global, qui reste le produit strict des déterminants des blocs diagonaux $A$ et $B$.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Déterminant (Calculs)"],
            q: "Dans la formule générale du déterminant d'ordre $n$, combien de termes sont additionnés (avant simplification) ?",
            options: [
                { text: "$n^2$", isCorrect: false },
                { text: "$n(n-1)$", isCorrect: false },
                { text: "$n!$ (factorielle n)", isCorrect: true },
                { text: "$2^n$", isCorrect: false }
            ],
            explanation: "La formule utilise toutes les permutations possibles de $\\{1, ..., n\\}$. Il y a exactement $n!$ permutations dans le groupe symétrique $S_n$.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Déterminant (Propriétés)"],
            q: "Que peut-on dire de $det(A+B)$ en général, pour $A,B \\in \\mathcal{M}_n(\\mathbb{R})$ ?",
            options: [
                { text: "$det(A+B) = det(A)+det(B)$ toujours", isCorrect: false },
                { text: "$det(A+B) \\neq det(A)+det(B)$ en général, car le déterminant n'est pas linéaire mais multilinéaire par colonne", isCorrect: true },
                { text: "$det(A+B) = det(A)+det(B)$ uniquement si $A$ et $B$ commutent", isCorrect: false },
                { text: "$det(A+B)$ n'est jamais égal à $det(A)+det(B)$, même par coïncidence numérique", isCorrect: false }
            ],
            explanation: "L'égalité peut arriver par pure coïncidence pour des matrices particulières, mais il n'existe aucune règle générale (ni liée à la commutativité) qui la garantisse : le déterminant est multilinéaire par colonne, pas linéaire sur l'addition de matrices.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Déterminant (Calculs)"],
            q: "Pour la matrice de Vandermonde $3 \\times 3$ : $\\begin{vmatrix} 1 & 1 & 1 \\\\ a & b & c \\\\ a^2 & b^2 & c^2 \\end{vmatrix}$, quelle est la forme factorisée du déterminant ?",
            options: [
                { text: "$(a-b)(b-c)(c-a)$", isCorrect: false },
                { text: "$(b-a)(c-a)(c-b)$", isCorrect: true },
                { text: "$a^2 + b^2 + c^2$", isCorrect: false },
                { text: "$(a-b)(c-b)(c-a)$", isCorrect: false }
            ],
            explanation: "On soustrait les colonnes pour factoriser les racines évidentes. Attention aux variantes de signe : seule $(b-a)(c-a)(c-b)$ correspond exactement à ce déterminant.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Déterminant (Calculs)"],
            q: "Soit le polynôme $P(x) = det(A + xB)$ où $A$ et $B$ sont des matrices $n \\times n$. Quel est le degré maximal de $P$ ?",
            options: [
                { text: "$2n$", isCorrect: false },
                { text: "$n$", isCorrect: true },
                { text: "$n-1$", isCorrect: false },
                { text: "$P$ n'a pas de degré fini", isCorrect: false }
            ],
            explanation: "Chaque colonne apporte au plus un facteur $x$ au déterminant, d'où un degré au plus $n$ — atteint exactement quand $B$ est inversible.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Déterminant (Calculs)"],
            q: "Que vaut le déterminant de la matrice identité $I_n$ ?",
            options: [
                { text: "0", isCorrect: false },
                { text: "1", isCorrect: true },
                { text: "$n$", isCorrect: false },
                { text: "$n!$", isCorrect: false }
            ],
            explanation: "C'est la première propriété axiomatique de l'application déterminant : $det(I_n) = 1$, quel que soit $n$ (à ne pas confondre avec le nombre de termes $n!$ de la formule générale).",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Matrices par blocs", "Inversibilité"],
            q: "Soit la matrice par blocs $M = \\begin{pmatrix} A & I_2 \\\\ 0 & A \\end{pmatrix}$. Quel est le format du bloc $0$ ?",
            options: [
                { text: "C'est le chiffre zéro", isCorrect: false },
                { text: "C'est la matrice nulle $O_{2,2}$", isCorrect: true },
                { text: "C'est la matrice identité $I_2$", isCorrect: false },
                { text: "Cela dépend de la taille du bloc $A$", isCorrect: false }
            ],
            explanation: "Pour que les blocs s'emboîtent avec $I_2$, le bloc 0 doit être une matrice carrée nulle d'ordre 2 — sa taille est fixée par la structure de $M$, pas par $A$.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Inversibilité"],
            q: "Comment calcule-t-on l'inverse d'une matrice $2 \\times 2$ : $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ ?",
            options: [
                { text: "$\\frac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$", isCorrect: true },
                { text: "$\\frac{1}{ad-bc}\\begin{pmatrix} a & -c \\\\ -b & d \\end{pmatrix}$", isCorrect: false },
                { text: "$\\frac{1}{ad-bc}\\begin{pmatrix} d & b \\\\ c & a \\end{pmatrix}$", isCorrect: false },
                { text: "$\\frac{1}{ad+bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$", isCorrect: false }
            ],
            explanation: "On permute la diagonale principale, on oppose l'antidiagonale, et on divise par $ad-bc$. Oublier les signes sur l'antidiagonale ou confondre $ad-bc$ avec $ad+bc$ sont deux erreurs très fréquentes.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Déterminant (Calculs)", "Systèmes linéaires & Cramer"],
            q: "Que stipule la Règle de Sarrus ?",
            options: [
                { text: "C'est une méthode visuelle valable UNIQUEMENT pour calculer les déterminants d'ordre 3", isCorrect: true },
                { text: "C'est une méthode pour inverser une matrice de n'importe quelle taille", isCorrect: false },
                { text: "C'est une méthode valable pour tout déterminant de taille impaire", isCorrect: false },
                { text: "C'est une autre façon de nommer le pivot de Gauss", isCorrect: false }
            ],
            explanation: "La règle de Sarrus (diagonales descendantes moins diagonales montantes) ne s'applique qu'en dimension 3 — pas en dimension 5, 7, etc. C'est une erreur de généralisation très courante.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Déterminant (Calculs)", "Calcul numérique"],
            q: "Calculer $det\\begin{pmatrix} 4 & 3 \\\\ 6 & 5 \\end{pmatrix}$.",
            options: [
                { text: "$2$", isCorrect: true },
                { text: "$38$", isCorrect: false },
                { text: "$-2$", isCorrect: false },
                { text: "$9$", isCorrect: false }
            ],
            explanation: "$4\\times5-3\\times6=20-18=2$. $38$ vient d'une addition au lieu d'une soustraction, $-2$ d'un ordre de soustraction inversé, $9$ d'un mauvais appariement des coefficients.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Déterminant (Calculs)", "Calcul numérique"],
            q: "Calculer, avec la règle de Sarrus, $det\\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 3 \\\\ 2 & 1 & 1 \\end{pmatrix}$.",
            options: [
                { text: "$10$", isCorrect: true },
                { text: "$-10$", isCorrect: false },
                { text: "$16$", isCorrect: false },
                { text: "$4$", isCorrect: false }
            ],
            explanation: "Termes positifs : $1\\times1\\times1+2\\times3\\times2+0\\times0\\times1=1+12+0=13$. Termes négatifs : $0\\times1\\times2+1\\times3\\times1+2\\times0\\times1=0+3+0=3$. Résultat : $13-3=10$.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },

        // ==========================================================
        // BLOC 5 : SYSTÈMES ET RANG
        // ==========================================================
        {
            type: "qcm", tags: ["Systèmes linéaires & Cramer"],
            q: "Qu'appelle-t-on un système de Cramer ?",
            options: [
                { text: "Un système homogène", isCorrect: false },
                { text: "Un système ayant autant d'équations que d'inconnues et admettant une solution unique", isCorrect: true },
                { text: "Un système indéterminé", isCorrect: false },
                { text: "Un système dont la matrice est symétrique", isCorrect: false }
            ],
            explanation: "Un système de Cramer est défini par une matrice carrée de déterminant non nul, garantissant l'unicité de la solution — la symétrie de la matrice n'a rien à voir avec ce critère.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Systèmes linéaires & Cramer"],
            q: "Que représente $X$ dans l'écriture matricielle d'un système $AX = B$ ?",
            options: [
                { text: "La matrice des coefficients", isCorrect: false },
                { text: "La colonne des inconnues", isCorrect: true },
                { text: "Le second membre", isCorrect: false },
                { text: "Une matrice quelconque de même taille que $A$", isCorrect: false }
            ],
            explanation: "$A$ rassemble les coefficients, $X$ les inconnues, et $B$ les constantes du second membre — $X$ est toujours une colonne, jamais une matrice de taille arbitraire.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Systèmes linéaires & Cramer"],
            q: "Combien de solutions un système linéaire homogène ($AX=0$) possède-t-il au minimum ?",
            options: [
                { text: "Zéro", isCorrect: false },
                { text: "Au moins une (la solution triviale)", isCorrect: true },
                { text: "Une infinité", isCorrect: false },
                { text: "Cela dépend du rang de $A$", isCorrect: false }
            ],
            explanation: "Le vecteur nul vérifie toujours $A \\times 0=0$ : un système homogène n'est JAMAIS impossible, quel que soit le rang de $A$ (le rang décide seulement s'il y a UNIQUEMENT cette solution ou une infinité).",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Rang & Échelonnement"],
            q: "Comment définit-on le rang d'une matrice $A$ ($rg(A)$) après échelonnement ?",
            options: [
                { text: "C'est le nombre de colonnes", isCorrect: false },
                { text: "C'est le nombre de lignes non nulles (ou pivots) d'une réduite échelonnée de $A$", isCorrect: true },
                { text: "C'est le nombre de zéros générés", isCorrect: false },
                { text: "C'est le nombre de colonnes non nulles de $A$ avant échelonnement", isCorrect: false }
            ],
            explanation: "Le rang correspond au nombre de pivots non nuls APRÈS échelonnement (algorithme de Gauss) — regarder les colonnes non nulles avant échelonnement ne donne pas cette information, puisque des colonnes peuvent être combinaisons linéaires les unes des autres.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Rang & Échelonnement"],
            q: "Soit $A \\in \\mathcal{M}_{n,p}(\\mathbb{R})$. Quelle est la majoration absolue (la plus fine) du rang de $A$ ?",
            options: [
                { text: "$rg(A) \\le n \\times p$", isCorrect: false },
                { text: "$rg(A) \\le \\min(n,p)$", isCorrect: true },
                { text: "Il n'y a pas de limite", isCorrect: false },
                { text: "$rg(A) \\le n+p$", isCorrect: false }
            ],
            explanation: "Le rang ne peut excéder ni $n$ ni $p$, donc pas $\\min(n,p)$. Les bornes $n\\times p$ et $n+p$ sont vraies mais beaucoup trop larges pour être la majoration \"absolue\"/la plus fine demandée.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Rang & Échelonnement", "Inversibilité"],
            q: "Quelle est la relation entre le rang et l'inversibilité d'une matrice carrée d'ordre $n$ ?",
            options: [
                { text: "Elle est inversible si $rg(A) = 0$", isCorrect: false },
                { text: "Elle est inversible si et seulement si $rg(A) = n$", isCorrect: true },
                { text: "Elle est inversible si $rg(A) \\ge n-1$", isCorrect: false },
                { text: "Elle est inversible si et seulement si $rg(A)=n$ ET $det(A)>0$", isCorrect: false }
            ],
            explanation: "Une matrice carrée d'ordre $n$ est inversible ssi elle est de rang plein ($rg(A)=n$). Il suffit que $det(A) \\neq 0$ — pas besoin qu'il soit strictement positif, et $rg(A)=n-1$ n'est PAS suffisant (c'est justement le cas non inversible juste en dessous).",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Rang & Échelonnement"],
            q: "Qu'est-ce qu'une matrice échelonnée en lignes ?",
            options: [
                { text: "Une matrice où chaque ligne commence par plus de zéros que la précédente (marches d'escalier)", isCorrect: true },
                { text: "Une matrice dont la diagonale est nulle", isCorrect: false },
                { text: "Une matrice où toutes les lignes commencent par un coefficient non nul", isCorrect: false },
                { text: "Une matrice triangulaire supérieure obligatoirement carrée", isCorrect: false }
            ],
            explanation: "Le pivot de chaque ligne doit être strictement à droite de celui de la ligne du dessus. Une matrice échelonnée n'a pas besoin d'être carrée ni triangulaire au sens strict.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Rang & Échelonnement"],
            q: "Deux systèmes linéaires sont dits équivalents si :",
            options: [
                { text: "Ils ont le même nombre d'équations", isCorrect: false },
                { text: "Ils ont exactement le même ensemble de solutions", isCorrect: true },
                { text: "Leurs matrices associées ont le même déterminant", isCorrect: false },
                { text: "Ils ont le même second membre", isCorrect: false }
            ],
            explanation: "C'est la définition même de l'équivalence : les opérations élémentaires de Gauss préservent l'ensemble des solutions, indépendamment du déterminant ou du second membre.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Rang & Échelonnement"],
            q: "Parmi ces opérations, laquelle est AUTORISÉE lors de la méthode du pivot de Gauss ($L_i$ étant la ligne $i$) ?",
            options: [
                { text: "$L_i \\leftarrow L_i^2$", isCorrect: false },
                { text: "$L_i \\leftarrow aL_i + bL_j$ (avec $a \\neq 0$)", isCorrect: true },
                { text: "$L_i \\leftrightarrow L_j$ suivi de $L_j \\leftarrow 0$", isCorrect: false },
                { text: "$L_i \\leftarrow 0 \\times L_i + L_j$", isCorrect: false }
            ],
            explanation: "On peut remplacer une ligne par $aL_i+bL_j$ à condition que $a \\neq 0$ (sinon on perd de l'information sur $L_i$, comme dans la 4ème option où $a=0$). Élever une ligne au carré ou la remplacer par zéro ne sont pas des opérations élémentaires valides.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Systèmes linéaires & Cramer"],
            q: "Soit $A$ une matrice. Le noyau de $A$, $Ker(A)$, correspond à :",
            options: [
                { text: "L'ensemble des matrices colonnes $Y$ telles que $AX = Y$", isCorrect: false },
                { text: "L'ensemble des matrices colonnes $X$ vérifiant $AX = 0_{n,1}$", isCorrect: true },
                { text: "L'ensemble des colonnes de $A$ qui sont nulles", isCorrect: false },
                { text: "L'ensemble des solutions du système $AX=B$ pour $B \\neq 0$", isCorrect: false }
            ],
            explanation: "Le noyau est l'ensemble des solutions du système homogène associé à $A$ — il ne s'agit ni des colonnes nulles de la matrice elle-même, ni des solutions d'un système avec second membre non nul.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Systèmes linéaires & Cramer"],
            q: "Le vecteur nul $0$ appartient-il au noyau d'une matrice $A$ ?",
            options: [
                { text: "Oui, toujours", isCorrect: true },
                { text: "Non, jamais", isCorrect: false },
                { text: "Seulement si $A$ est inversible", isCorrect: false },
                { text: "Non, sauf si $A = 0$", isCorrect: false }
            ],
            explanation: "Puisque $A \\times 0 = 0$ pour toute matrice $A$, le vecteur nul appartient inconditionnellement à $Ker(A)$, y compris si $A$ est inversible (dans ce cas, c'est même le SEUL élément du noyau).",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Systèmes linéaires & Cramer"],
            q: "Comment interpréter l'appartenance d'un vecteur $X$ au noyau $Ker(A)$ en fonction des colonnes $C_j$ de $A$ ?",
            options: [
                { text: "La somme des colonnes est nulle", isCorrect: false },
                { text: "La combinaison linéaire $x_1 C_1 + \\dots + x_p C_p$ est égale au vecteur nul", isCorrect: true },
                { text: "Les colonnes de $A$ sont toutes proportionnelles entre elles", isCorrect: false },
                { text: "Le rang de $A$ est nul", isCorrect: false }
            ],
            explanation: "$AX=0$ signifie exactement que les colonnes sont liées par les poids $x_i$ de $X$ — pas forcément toutes proportionnelles entre elles, et le rang de $A$ n'a pas besoin d'être nul (seul le vecteur $X=0$ serait alors dans le noyau si $rg(A)$ est plein).",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Systèmes linéaires & Cramer"],
            q: "Comment définit-on l'Image d'une matrice $A$, notée $Im(A)$ ?",
            options: [
                { text: "L'ensemble des matrices colonnes $Y$ telles qu'il existe $X$ vérifiant $AX = Y$", isCorrect: true },
                { text: "L'ensemble des matrices colonnes $X$ vérifiant $AX = 0$", isCorrect: false },
                { text: "L'ensemble des colonnes de $A$ uniquement", isCorrect: false },
                { text: "L'ensemble des $Y$ tels que $A^T Y = 0$", isCorrect: false }
            ],
            explanation: "L'image est l'ensemble des seconds membres $Y$ atteignables. Elle est engendrée par les colonnes de $A$ (leur ESPACE VECTORIEL, pas juste l'ensemble fini des colonnes elles-mêmes) — à ne pas confondre avec $Ker(A)$ ou $Ker(A^T)$.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Systèmes linéaires & Cramer"],
            q: "Lorsqu'on cherche à déterminer $Im(A)$ par la méthode de Gauss, que fait-on du second membre abstrait $(a, b, c)$ ?",
            options: [
                { text: "On le remplace par des zéros", isCorrect: false },
                { text: "On lui applique rigoureusement les mêmes opérations sur les lignes qu'à la matrice $A$", isCorrect: true },
                { text: "On l'ignore, seul le rang de $A$ compte", isCorrect: false },
                { text: "On résout le système en supposant que le second membre est nul", isCorrect: false }
            ],
            explanation: "Il faut répercuter les opérations de pivot sur le second membre abstrait pour voir à quelle(s) condition(s) sur $a,b,c$ le système reste compatible — le rang de $A$ seul ne donne que la DIMENSION de $Im(A)$, pas sa description explicite.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Systèmes linéaires & Cramer"],
            q: "Si la matrice $A$ d'un système possède un rang strictement inférieur à son nombre de colonnes ($r < p$), que se passe-t-il pour le système homogène associé ?",
            options: [
                { text: "Il n'admet aucune solution", isCorrect: false },
                { text: "Il est indéterminé (il admet une infinité de solutions)", isCorrect: true },
                { text: "Il admet une solution unique, différente de zéro", isCorrect: false },
                { text: "Cela dépend du second membre $B$", isCorrect: false }
            ],
            explanation: "Des inconnues secondaires (paramètres libres) apparaissent, générant une infinité de solutions. Pour un système homogène, le second membre est par définition nul : cette option n'a donc pas de sens ici.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Rang & Échelonnement", "Calcul numérique"],
            q: "Quel est le rang de $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 1 & 1 \\end{pmatrix}$ ?",
            options: [
                { text: "2", isCorrect: true },
                { text: "3", isCorrect: false },
                { text: "1", isCorrect: false },
                { text: "0", isCorrect: false }
            ],
            explanation: "$L_2 = 2L_1$, donc après $L_2 \\leftarrow L_2 - 2L_1$ on obtient une ligne nulle : il ne reste que 2 lignes indépendantes ($L_1$ et $L_3$, qui ne sont pas proportionnelles entre elles).",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Systèmes linéaires & Cramer", "Calcul numérique"],
            q: "Résoudre le système de Cramer $\\begin{cases} x+y=3 \\\\ x-y=1 \\end{cases}$.",
            options: [
                { text: "$(x,y) = (2,1)$", isCorrect: true },
                { text: "$(x,y) = (1,2)$", isCorrect: false },
                { text: "$(x,y) = (2,-1)$", isCorrect: false },
                { text: "$(x,y) = (4,-1)$", isCorrect: false }
            ],
            explanation: "En additionnant les deux équations : $2x=4$, donc $x=2$, puis $y=3-2=1$. La 2ème option inverse $x$ et $y$, la 3ème se trompe de signe sur $y$.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        },
        {
            type: "qcm", tags: ["Systèmes linéaires & Cramer", "Calcul numérique"],
            q: "Le système associé à la matrice $\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$ est-il un système de Cramer ?",
            options: [
                { text: "Oui, car $det = 1\\times(-1)-1\\times1 = -2 \\neq 0$", isCorrect: true },
                { text: "Non, car $det = 0$", isCorrect: false },
                { text: "Oui, car $det = 2$", isCorrect: false },
                { text: "Non, un système de Cramer nécessite un déterminant strictement positif", isCorrect: false }
            ],
            explanation: "Le déterminant vaut $-2$, qui est non nul : le système est bien de Cramer. Le critère porte sur \"non nul\", pas sur \"positif\" — un déterminant négatif convient tout aussi bien.",
            lastCorrect: 0, stats: { attempts: 0, correct: 0 }
        }

    ]
},
    "Algèbre 2 : Chapitre 2 (systèmes linéaires)": {
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm", tags: ["Définitions", "Solutions"],
                q: "Combien de solutions un système linéaire à coefficients réels peut-il posséder ?",
                options: [
                    { text: "Soit 0, soit 1, soit exactement 2", isCorrect: false },
                    { text: "Soit 0 (impossible), soit 1 (unique), soit une infinité (indéterminé)", isCorrect: true },
                    { text: "Toujours au moins une solution", isCorrect: false }
                ],
                explanation: "Un système linéaire n'a que trois issues possibles. Il est mathématiquement impossible d'avoir exactement un nombre fini de solutions strictement supérieur à 1[cite: 1, 2].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Définitions", "Équivalence"],
                q: "Que signifie rigoureusement que deux systèmes linéaires sont dits « équivalents » ?",
                options: [
                    { text: "Ils ont la même matrice associée", isCorrect: false },
                    { text: "Ils ont exactement le même ensemble de solutions", isCorrect: true },
                    { text: "Ils ont le même nombre d'équations et d'inconnues", isCorrect: false }
                ],
                explanation: "L'équivalence des systèmes repose uniquement sur l'égalité de leur ensemble de solutions. C'est le principe qui valide la méthode de Gauss[cite: 1].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Cramer"],
                q: "Un système linéaire est qualifié de « système de Cramer » si :",
                options: [
                    { text: "Il possède plus d'équations que d'inconnues", isCorrect: false },
                    { text: "Il est homogène (second membre nul)", isCorrect: false },
                    { text: "Il possède autant d'équations que d'inconnues ($n=p$) et admet une solution unique", isCorrect: true }
                ],
                explanation: "Un système de Cramer est un système carré dont la matrice est inversible (déterminant non nul), ce qui garantit l'existence et l'unicité de la solution[cite: 1].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Méthode de Gauss", "Échelonnement"],
                q: "Qu'est-ce qu'une matrice « échelonnée en lignes » ?",
                options: [
                    { text: "Une matrice dont les coefficients de la diagonale valent 1", isCorrect: false },
                    { text: "Une matrice où chaque ligne commence par plus de zéros que la précédente, formant un escalier vers la droite", isCorrect: true },
                    { text: "Une matrice qui ne contient aucune ligne nulle", isCorrect: false }
                ],
                explanation: "Dans une matrice échelonnée, le premier élément non nul de chaque ligne (le pivot) est situé strictement à droite du pivot de la ligne du dessus. De plus, si une ligne est nulle, toutes les suivantes le sont aussi[cite: 1].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Méthode de Gauss", "Opérations"],
                q: "Lors de la méthode du pivot de Gauss, à quelle condition l'opération sur les lignes $L_i \\leftarrow aL_i + bL_j$ produit-elle un système équivalent ?",
                options: [
                    { text: "Il faut que $a \\neq 0$", isCorrect: true },
                    { text: "Il faut que $b \\neq 0$", isCorrect: false },
                    { text: "Il faut que $a = 1$", isCorrect: false }
                ],
                explanation: "Pour garantir la réversibilité de l'opération (et donc l'équivalence du système), le coefficient multiplicateur $a$ de la ligne modifiée $L_i$ ne doit absolument pas être nul[cite: 1].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Rang", "Définitions"],
                q: "Comment détermine-t-on le rang d'une matrice $A$ ($rg(A)$) via la méthode de Gauss ?",
                options: [
                    { text: "C'est le nombre de colonnes de la matrice", isCorrect: false },
                    { text: "C'est le nombre de lignes non nulles (ou nombre de pivots) d'une réduite échelonnée de $A$", isCorrect: true },
                    { text: "C'est le produit des éléments de la diagonale", isCorrect: false }
                ],
                explanation: "Le rang est invariant par opérations sur les lignes. Il correspond au nombre d'échelons (pivots non nuls) de la matrice une fois totalement échelonnée[cite: 1].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Rang", "Théorèmes"],
                q: "Soit $A \\in \\mathcal{M}_{n,p}(\\mathbb{R})$. Quelles sont les bornes supérieures du rang de $A$ ?",
                options: [
                    { text: "$rg(A) \\le n \\times p$", isCorrect: false },
                    { text: "$rg(A) \\le n$ et $rg(A) \\le p$", isCorrect: true },
                    { text: "$rg(A) = \\max(n,p)$", isCorrect: false }
                ],
                explanation: "Le rang d'une matrice ne peut excéder ni le nombre de ses lignes, ni le nombre de ses colonnes. On écrit souvent $rg(A) \\le \\min(n,p)$[cite: 1].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Inversibilité", "Méthode de Gauss"],
                q: "D'après la méthode de Gauss, une matrice carrée $A$ d'ordre $n$ est inversible si et seulement si :",
                options: [
                    { text: "Sa réduite échelonnée est une matrice diagonale avec des zéros", isCorrect: false },
                    { text: "Sa réduite échelonnée est une triangulaire supérieure sans aucun zéro sur sa diagonale (soit $rg(A)=n$)", isCorrect: true },
                    { text: "Son rang est strictement inférieur à $n$", isCorrect: false }
                ],
                explanation: "Une matrice carrée inversible est une matrice de rang plein. Tous ses pivots doivent être non nuls à l'issue de l'échelonnement[cite: 1].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Inversibilité", "Méthode de Gauss"],
                q: "Comment procède-t-on concrètement pour inverser une matrice $A$ avec la méthode de Gauss ?",
                options: [
                    { text: "On divise $1$ par chaque coefficient de $A$", isCorrect: false },
                    { text: "On juxtapose $A$ et la matrice identité $I_n$, puis on échelonne jusqu'à obtenir $I_n$ à gauche. La matrice de droite est alors $A^{-1}$", isCorrect: true }
                ],
                explanation: "On écrit la matrice augmentée $(A | I_n)$. En appliquant les opérations sur les lignes pour transformer $A$ en $I_n$, ces mêmes opérations transforment $I_n$ en $A^{-1}$[cite: 1].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Noyau", "Définitions"],
                q: "Soit $A \\in \\mathcal{M}_{n,p}(\\mathbb{R})$. Comment définit-on algébriquement le noyau $Ker(A)$ ?",
                options: [
                    { text: "L'ensemble des matrices colonnes $Y \\in \\mathcal{M}_{n,1}(\\mathbb{R})$ telles qu'il existe $X$ vérifiant $AX=Y$", isCorrect: false },
                    { text: "L'ensemble des matrices colonnes $X \\in \\mathcal{M}_{p,1}(\\mathbb{R})$ vérifiant $AX = 0_{n,1}$", isCorrect: true }
                ],
                explanation: "Le noyau correspond à l'espace des solutions du système linéaire homogène associé à la matrice $A$[cite: 1].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Noyau", "Combinaisons Linéaires"],
                q: "Quelle est l'interprétation du noyau $Ker(A)$ en termes de combinaisons linéaires des colonnes de $A$ (notées $C_1, \\dots, C_p$) ?",
                options: [
                    { text: "Dire que $X \\in Ker(A)$ revient à dire que la combinaison $x_1 C_1 + \\dots + x_p C_p$ est égale au vecteur nul", isCorrect: true },
                    { text: "Dire que $X \\in Ker(A)$ signifie que toutes les colonnes de $A$ sont nulles", isCorrect: false }
                ],
                explanation: "C'est une astuce vitale pour repérer des éléments du noyau à vue d'œil. Si la colonne 2 est l'opposée de la colonne 1, alors $C_1 + C_2 = 0$, donc le vecteur $(1, 1, 0, \\dots)$ est dans $Ker(A)$[cite: 1].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Image", "Définitions"],
                q: "Soit $A \\in \\mathcal{M}_{n,p}(\\mathbb{R})$. Comment définit-on l'Image $Im(A)$ ?",
                options: [
                    { text: "L'ensemble des matrices colonnes $Y$ telles qu'il existe une matrice colonne $X$ vérifiant $AX = Y$", isCorrect: true },
                    { text: "L'ensemble des solutions de $AX = 0$", isCorrect: false }
                ],
                explanation: "L'image est l'ensemble des seconds membres $Y$ pour lesquels le système $AX=Y$ est compatible (admet au moins une solution)[cite: 1].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Image", "Méthode de Gauss"],
                q: "Pour déterminer des équations définissant l'Image $Im(A)$ par la méthode de Gauss, que doit-on faire ?",
                options: [
                    { text: "Résoudre $AX=0$", isCorrect: false },
                    { text: "Poser $AX = Y$ avec $Y=(a,b,c)^T$, échelonner la matrice augmentée, et imposer que les expressions en face des lignes nulles soient égales à zéro", isCorrect: true }
                ],
                explanation: "Si l'échelonnement génère une ligne de zéros dans la partie gauche, la partie droite (qui est une combinaison des paramètres $a, b, c$) doit obligatoirement être nulle pour que le système ait une solution[cite: 1].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Indétermination", "Solutions"],
                q: "Si la réduite échelonnée d'un système possède un nombre de pivots $r$ strictement inférieur au nombre d'inconnues $p$, et que le système est homogène ($B=0$), que peut-on affirmer ?",
                options: [
                    { text: "Le système est impossible", isCorrect: false },
                    { text: "Le système admet une unique solution", isCorrect: false },
                    { text: "Le système est indéterminé (il admet une infinité de solutions)", isCorrect: true }
                ],
                explanation: "Il y aura $p - r$ \"inconnues auxiliaires\" (paramètres libres) qui pourront prendre n'importe quelle valeur. Le système étant homogène, il n'est jamais impossible[cite: 1].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Systèmes paramétrés"],
                q: "Lors de la résolution d'un système paramétré, on tombe sur la ligne : $0x + 0y + 0z = k - 4$. Quelle est la conclusion ?",
                options: [
                    { text: "Si $k = 4$, le système admet une solution unique", isCorrect: false },
                    { text: "Si $k \\neq 4$, le système est impossible. Si $k = 4$, la ligne devient $0=0$ et le système peut admettre des solutions", isCorrect: true }
                ],
                explanation: "Une ligne $0 = \\text{constante non nulle}$ indique une contradiction mathématique immédiate, rendant le système impossible[cite: 1].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Noyau", "Propriétés"],
                q: "Soit $A \\in \\mathcal{M}_n(\\mathbb{R})$. Quelle inclusion concernant les noyaux successifs de $A$ est toujours vérifiée ?",
                options: [
                    { text: "$Ker(A^2) \\subset Ker(A)$", isCorrect: false },
                    { text: "$Ker(A) \\subset Ker(A^2)$", isCorrect: true },
                    { text: "$Ker(A) = Ker(A^2)$", isCorrect: false }
                ],
                explanation: "C'est un exercice classique. Si $X \\in Ker(A)$, alors $AX = 0$. En multipliant par $A$ à gauche, on obtient $A(AX) = A(0) \\Rightarrow A^2 X = 0$, donc $X \\in Ker(A^2)$[cite: 2].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Solutions", "Vrai/Faux"],
                q: "Vrai ou Faux : Un système de $n$ équations à $n$ inconnues possède TOUJOURS exactement une solution.",
                options: [
                    { text: "Vrai", isCorrect: false },
                    { text: "Faux", isCorrect: true }
                ],
                explanation: "Faux. Un tel système peut n'avoir aucune solution ou une infinité si la matrice n'est pas inversible (déterminant nul)[cite: 2].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Rang", "Dimension"],
                q: "Considérons un système de 7 équations à 5 inconnues de rang 4. Peut-il posséder une solution unique ?",
                options: [
                    { text: "Oui", isCorrect: false },
                    { text: "Non", isCorrect: true }
                ],
                explanation: "Non. Le rang $r=4$ est strictement inférieur au nombre d'inconnues $p=5$. S'il est compatible, le système aura obligatoirement $5-4=1$ inconnue libre, générant une infinité de solutions[cite: 2].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Méthode de Gauss", "Vocabulaire"],
                q: "Dans la résolution finale d'un système par la méthode de Gauss, comment nomme-t-on les inconnues correspondant aux colonnes SANS pivot ?",
                options: [
                    { text: "Les inconnues principales", isCorrect: false },
                    { text: "Les inconnues auxiliaires (ou paramètres libres)", isCorrect: true },
                    { text: "Les constantes", isCorrect: false }
                ],
                explanation: "Les inconnues correspondant aux colonnes avec pivot (inconnues principales) s'expriment en fonction des inconnues sans pivot (auxiliaires)[cite: 1].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Systèmes homogènes", "Vrai/Faux"],
                q: "Vrai ou Faux : Un système linéaire homogène ne peut jamais être classé comme « système impossible ».",
                options: [
                    { text: "Vrai", isCorrect: true },
                    { text: "Faux", isCorrect: false }
                ],
                explanation: "Vrai. Le second membre étant constitué uniquement de zéros, le vecteur nul $X=(0,0,\\dots,0)$ est toujours une solution évidente. Le système est donc toujours compatible[cite: 1].",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            }
        ]
    },
    // ============================================================
// Algèbre 2 — Chapitre 3 : Espaces Vectoriels — VERSION ENRICHIE
// ------------------------------------------------------------
// Approche cette fois plus ciblée (suite à ton retour) :
//  - Les Vrai/Faux qui étaient déjà de bons pièges (union de SEV,
//    familles avec le vecteur nul, colinéarité...) sont restés
//    binaires, inchangés dans leur esprit.
//  - Seules les questions vraiment trop simples ont reçu une
//    option ou une explication supplémentaire pour augmenter le
//    challenge (souvent une condition partielle/nécessaire-mais-
//    pas-suffisante, un cas limite avec le scalaire 0, ou une
//    confusion classique entre deux propositions du cours).
//  - Tous les reliquats "[cite: x]" ont été supprimés.
// ============================================================

"Algèbre 2 : Chapitre 3 (espaces vectoriels)": {
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
},
    "Algèbre 2 : Chapitres 4 & 5 (Bases, Dimensions, Sommes et Supplémentaires)": {
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            // --- BASES ET DIMENSIONS (Concepts) ---
            {
                type: "qcm", tags: ["Bases", "Familles Libres/Liées"],
                q: "Quelle est la définition formelle d'une base d'un espace vectoriel $E$ ?",
                options: [
                    { text: "Une famille de vecteurs qui engendre tout l'espace", isCorrect: false },
                    { text: "Une famille libre et génératrice de l'espace $E$", isCorrect: true },
                    { text: "Une famille libre maximale", isCorrect: true },
                    { text: "Une famille génératrice minimale", isCorrect: true },
                    { text: "Une famille génératrice contenant le vecteur nul", isCorrect: false }
                ],
                explanation: "Une base doit être à la fois libre (sans redondance) et génératrice (permettant d'atteindre tout vecteur). Cela équivaut à être une famille libre maximale ou une famille génératrice minimale. Une famille contenant le vecteur nul est automatiquement liée, donc jamais une base.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Bases", "Coordonnées"],
                q: "Que garantit le fait qu'une famille $\\mathcal{B}$ soit une base de $E$ pour l'écriture d'un vecteur $x \\in E$ ?",
                options: [
                    { text: "Qu'il existe une infinité de décompositions possibles", isCorrect: false },
                    { text: "Qu'il existe un unique $n$-uplet de coordonnées $(x_1, \\dots, x_n)$ tel que $x = x_1 e_1 + \\dots + x_n e_n$", isCorrect: true },
                    { text: "Qu'il existe au moins une décomposition, mais pas forcément unique", isCorrect: false },
                    { text: "Que $x$ s'écrit de façon unique, mais seulement si $x \\neq 0$", isCorrect: false }
                ],
                explanation: "L'existence de la décomposition provient du caractère générateur, et l'unicité provient du caractère libre de la base. Cette unicité vaut pour tout vecteur de $E$, y compris le vecteur nul (dont toutes les coordonnées sont nulles).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Polynômes", "Bases"],
                q: "Dans l'espace vectoriel $\\mathbb{K}_n[X]$, qu'est-ce qu'une « famille échelonnée en degré » ?",
                options: [
                    { text: "Une famille $(P_0, \\dots, P_n)$ où chaque $P_i$ vérifie $deg(P_i) = i$", isCorrect: true },
                    { text: "Une famille où tous les polynômes ont le même degré $n$", isCorrect: false },
                    { text: "Une famille où les degrés sont strictement croissants, sans contrainte sur leur valeur exacte", isCorrect: false }
                ],
                explanation: "Une famille de polynômes ayant tous des degrés échelonnés (0, 1, 2, ..., n) forme automatiquement une base de $\\mathbb{K}_n[X]$, car elle est toujours libre et génératrice. Attention : des degrés simplement croissants (par ex. 0, 2, 5) donnent une famille libre mais pas forcément génératrice de tout $\\mathbb{K}_n[X]$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Dimension"],
                q: "Quand dit-on qu'un espace vectoriel $E$ est de « dimension finie » ?",
                options: [
                    { text: "S'il ne contient qu'un nombre fini de vecteurs", isCorrect: false },
                    { text: "S'il admet une partie génératrice contenant un nombre fini de vecteurs", isCorrect: true },
                    { text: "Si tous ses vecteurs ont une norme finie", isCorrect: false },
                    { text: "S'il possède au moins une famille libre infinie", isCorrect: false }
                ],
                explanation: "Un espace vectoriel non nul sur $\\mathbb{R}$ ou $\\mathbb{C}$ contient toujours une infinité de vecteurs. Il est de dimension finie s'il peut être engendré par une famille finie de vecteurs. Posséder une famille libre infinie est au contraire la signature d'un espace de dimension infinie.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Dimension", "Polynômes"],
                q: "Parmi ces espaces, lequel est de dimension INFINIE ?",
                options: [
                    { text: "$\\mathbb{R}^n$", isCorrect: false },
                    { text: "$\\mathcal{M}_{n,p}(\\mathbb{K})$", isCorrect: false },
                    { text: "$\\mathbb{K}[X]$ (l'espace de tous les polynômes)", isCorrect: true },
                    { text: "$\\mathbb{K}_n[X]$ (polynômes de degré $\\le n$)", isCorrect: false }
                ],
                explanation: "L'espace des polynômes sans restriction de degré $\\mathbb{K}[X]$ n'admet aucune famille génératrice finie, il est donc de dimension infinie. Ne le confondez pas avec $\\mathbb{K}_n[X]$, qui lui est borné en degré et donc de dimension finie ($n+1$).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Théorèmes", "Bases"],
                q: "Que stipule le Théorème de la base incomplète ?",
                options: [
                    { text: "Toute famille libre d'un E.V. de dimension finie $E \\neq \\{0\\}$ peut être complétée avec des vecteurs d'une famille génératrice pour former une base", isCorrect: true },
                    { text: "Toute famille génératrice peut être complétée pour former une base", isCorrect: false },
                    { text: "Toute famille libre peut être complétée par n'importe quel vecteur de $E$", isCorrect: false }
                ],
                explanation: "Si l'on part d'une famille libre, on peut toujours lui adjoindre des vecteurs bien choisis (issus d'une famille génératrice) pour « grossir » jusqu'à devenir une base. Le choix des vecteurs ajoutés n'est pas arbitraire : il faut préserver le caractère libre, donc pas n'importe quel vecteur ne convient.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Dimension"],
                q: "Si un espace $E$ est de dimension finie, que peut-on affirmer sur toutes ses bases ?",
                options: [
                    { text: "Elles contiennent toutes exactement le même nombre de vecteurs", isCorrect: true },
                    { text: "Elles sont toutes orthogonales entre elles", isCorrect: false },
                    { text: "Elles contiennent toutes le vecteur nul", isCorrect: false },
                    { text: "Elles engendrent des sous-espaces différents", isCorrect: false }
                ],
                explanation: "C'est la définition même de la dimension : si l'espace admet une base de cardinal $n$, alors toutes les bases de cet espace auront exactement $n$ éléments. Une base ne contient jamais le vecteur nul (cela la rendrait liée), et toutes les bases d'un même espace engendrent par définition le même espace $E$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },

            // --- JOUER AVEC LA DIMENSION (n) ---
            {
                type: "qcm", tags: ["Dimension", "Familles Libres/Liées"],
                q: "Soit $E$ un espace de dimension $n$. Que peut-on dire de la taille d'une famille LIBRE ?",
                options: [
                    { text: "Elle contient exactement $n$ éléments", isCorrect: false },
                    { text: "Elle contient au maximum $n$ éléments ($\\le n$)", isCorrect: true },
                    { text: "Elle contient au minimum $n$ éléments ($\\ge n$)", isCorrect: false }
                ],
                explanation: "Dans un espace de dimension $n$, il ne peut pas y avoir plus de $n$ vecteurs linéairement indépendants. Une famille libre peut très bien contenir strictement moins de $n$ éléments (par exemple un seul vecteur non nul).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Dimension", "Familles Libres/Liées"],
                q: "Soit $E$ un espace de dimension $n$. Que peut-on dire de la taille d'une famille GÉNÉRATRICE ?",
                options: [
                    { text: "Elle contient au maximum $n$ éléments", isCorrect: false },
                    { text: "Elle contient au minimum $n$ éléments ($\\ge n$)", isCorrect: true },
                    { text: "Elle contient exactement $n$ éléments", isCorrect: false }
                ],
                explanation: "Pour engendrer tout l'espace de dimension $n$, il faut au moins $n$ directions différentes (vecteurs). Rien n'empêche une famille génératrice d'en contenir plus de $n$ (avec des vecteurs redondants) — elle ne sera alors pas une base.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Dimension", "Bases", "Théorèmes"],
                q: "Dans un espace de dimension $n$, si je possède une famille de $n$ vecteurs (exactement). Que suffit-il de vérifier pour prouver que c'est une base ?",
                options: [
                    { text: "Il faut prouver qu'elle est libre ET génératrice", isCorrect: false },
                    { text: "Il suffit de prouver qu'elle est libre OU qu'elle est génératrice", isCorrect: true },
                    { text: "Il suffit qu'aucun vecteur ne soit nul", isCorrect: false }
                ],
                explanation: "C'est un raccourci vital en partiel. Si le cardinal correspond exactement à la dimension, la liberté implique le caractère générateur (et inversement). Ce raccourci ne marche que si le nombre de vecteurs est exactement $n$ : « aucun vecteur nul » ne suffit absolument pas à garantir liberté ou caractère générateur.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Dimension", "Matrices"],
                q: "Quelle est la dimension de l'espace des matrices $\\mathcal{M}_{n,p}(\\mathbb{K})$ ?",
                options: [
                    { text: "$n+p$", isCorrect: false },
                    { text: "$n \\times p$", isCorrect: true },
                    { text: "$n^p$", isCorrect: false },
                    { text: "$\\max(n,p)$", isCorrect: false }
                ],
                explanation: "Il y a $n \\times p$ coefficients indépendants, donc la base canonique contient $np$ matrices élémentaires $E_{ij}$ (un 1 en position $(i,j)$, des 0 ailleurs).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Dimension", "Polynômes"],
                q: "Quelle est la dimension de l'espace des polynômes $\\mathbb{K}_n[X]$ (de degré $\\le n$) ?",
                options: [
                    { text: "$n$", isCorrect: false },
                    { text: "$n+1$", isCorrect: true },
                    { text: "$n-1$", isCorrect: false }
                ],
                explanation: "La base canonique est $(1, X, X^2, \\dots, X^n)$. En comptant la constante $1$ (degré 0), il y a bien $n+1$ éléments — piège classique d'oublier le terme constant.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },

            // --- SOUS-ESPACES ET RANG ---
            {
                type: "qcm", tags: ["Dimension", "Sous-Espaces Vectoriels"],
                q: "Soit $F$ un sous-espace vectoriel de $E$ (de dim finie $n$). Si $dim(F) = dim(E)$, que conclut-on ?",
                options: [
                    { text: "$F$ et $E$ sont isomorphes mais différents", isCorrect: false },
                    { text: "$F = E$ (Égalité stricte)", isCorrect: true },
                    { text: "On ne peut rien conclure sans connaître une base de $F$", isCorrect: false }
                ],
                explanation: "L'inclusion $F \\subset E$ associée à l'égalité des dimensions implique que les deux espaces sont confondus. Ce résultat est vrai en toute généralité, sans avoir besoin d'exhiber explicitement une base.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Dimension", "Sous-Espaces Vectoriels"],
                q: "Comment appelle-t-on un sous-espace vectoriel $F$ tel que $\\dim(F) = \\dim(E) - 1$ ?",
                options: [
                    { text: "Une droite vectorielle", isCorrect: false },
                    { text: "Un plan vectoriel", isCorrect: false },
                    { text: "Un hyperplan vectoriel", isCorrect: true },
                    { text: "Un sous-espace de codimension 2", isCorrect: false }
                ],
                explanation: "Par définition, un hyperplan est un sous-espace de codimension 1 (dimension $n-1$), quelle que soit la valeur de $n$ — ce n'est donc ni forcément une droite ni un plan (ça dépend de $\\dim E$), et surtout pas de codimension 2.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Rang", "Dimension"],
                q: "Qu'est-ce que le « rang » d'une famille de $p$ vecteurs $S = (v_1, \\dots, v_p)$ ?",
                options: [
                    { text: "C'est la dimension de l'espace vectoriel engendré par $S$ ($dim(Vect[S])$)", isCorrect: true },
                    { text: "C'est le nombre total de vecteurs $p$", isCorrect: false },
                    { text: "C'est le nombre de vecteurs nuls", isCorrect: false }
                ],
                explanation: "Le rang est le nombre maximum de vecteurs linéairement indépendants que l'on peut extraire de $S$. C'est la dimension du sous-espace vectoriel généré, et il vérifie toujours $rg(S) \\le p$, avec égalité seulement si $S$ est libre.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Rang", "Familles Libres/Liées"],
                q: "Soit $S$ une famille de $p$ vecteurs. À quelle condition a-t-on $rg(S) = p$ ?",
                options: [
                    { text: "Si et seulement si $S$ est une famille libre", isCorrect: true },
                    { text: "Si et seulement si $S$ est génératrice", isCorrect: false },
                    { text: "Si et seulement si $S$ est une base de $E$", isCorrect: false }
                ],
                explanation: "Si le rang (dimension générée) est égal au nombre de vecteurs fournis, cela signifie qu'aucun vecteur n'est redondant (la famille est libre). Attention : $S$ n'est pas nécessairement une base de $E$ tout entier, seulement de l'espace qu'elle engendre.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },

            // --- SOMMES ET SOMMES DIRECTES ---
            {
                type: "qcm", tags: ["Sommes", "Espaces engendrés (Vect)"],
                q: "Soient deux sous-espaces vectoriels $F$ et $G$. L'ensemble somme $F+G$ est équivalent à :",
                options: [
                    { text: "$F \\cap G$", isCorrect: false },
                    { text: "$Vect[F \\cup G]$", isCorrect: true },
                    { text: "$F \\cup G$", isCorrect: false }
                ],
                explanation: "La somme $F+G$ est le plus petit sous-espace vectoriel contenant à la fois $F$ et $G$. Attention, $F \\cup G$ seul n'est en général PAS un sous-espace vectoriel (il n'est pas stable par addition), c'est pour cela qu'on doit prendre son Vect.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Sommes", "Somme Directe"],
                q: "Quand dit-on que la somme de sous-espaces $F_1 + \\dots + F_p$ est une SOMME DIRECTE ($\\oplus$) ?",
                options: [
                    { text: "Si l'intersection de tous les sous-espaces est vide", isCorrect: false },
                    { text: "Si pour tout vecteur $x$ de la somme, sa décomposition $x = x_1 + \\dots + x_p$ est UNIQUE", isCorrect: true },
                    { text: "Si les $F_i$ sont deux à deux disjoints", isCorrect: false }
                ],
                explanation: "La somme directe garantit qu'il n'y a qu'une seule façon d'écrire un vecteur comme somme d'éléments de ces sous-espaces. Un sous-espace vectoriel n'est jamais « vide » (il contient toujours 0) : on parle d'intersection réduite à $\\{0\\}$, pas d'intersection vide.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Somme Directe", "Intersections"],
                q: "Pour DEUX sous-espaces $F$ et $G$, quelle est la condition nécessaire et suffisante pour qu'ils soient en somme directe ($F \\oplus G$) ?",
                options: [
                    { text: "$F \\cap G = \\{0\\}$ (leur intersection est réduite au vecteur nul)", isCorrect: true },
                    { text: "$F \\cup G = E$", isCorrect: false },
                    { text: "Leurs dimensions doivent être égales", isCorrect: false }
                ],
                explanation: "Si l'intersection ne contient que le vecteur nul, un vecteur ne peut pas appartenir simultanément aux deux espaces, ce qui force l'unicité de la décomposition. Cette condition ne dit rien sur l'égalité des dimensions, ni sur le fait que la somme couvre $E$ (c'est le cas des supplémentaires, une notion plus forte).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Somme Directe", "Pièges", "Intersections"],
                q: "Vrai ou Faux : Pour TROIS sous-espaces $F, G, H$, le fait que $F \\cap G = F \\cap H = G \\cap H = \\{0\\}$ SUFFIT pour prouver que la somme $F+G+H$ est directe.",
                options: [
                    { text: "Vrai", isCorrect: false },
                    { text: "Faux", isCorrect: true }
                ],
                explanation: "C'est un énorme piège. L'intersection deux à deux réduite à zéro n'est valable que pour DEUX sous-espaces. Pour 3 ou plus, il faut vérifier une condition plus forte : par exemple $F \\cap (G+H) = \\{0\\}$, $G \\cap (F+H) = \\{0\\}$ et $H \\cap (F+G) = \\{0\\}$, ou directement l'unicité de la décomposition sur toute la somme.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Somme Directe", "Théorèmes"],
                q: "Quelle est la condition correcte pour que la somme de $p$ sous-espaces $F_1 + \\dots + F_p$ soit directe ?",
                options: [
                    { text: "Pour tout $i$, $F_i \\cap (F_1 + \\dots + F_{i-1} + F_{i+1} + \\dots + F_p) = \\{0\\}$", isCorrect: true },
                    { text: "Les $F_i$ sont deux à deux d'intersection réduite à $\\{0\\}$", isCorrect: false },
                    { text: "$\\dim(F_1) + \\dots + \\dim(F_p) \\le \\dim(E)$", isCorrect: false }
                ],
                explanation: "Chaque sous-espace doit avoir une intersection nulle avec la somme de TOUS les autres (pas seulement avec chacun pris isolément). L'inégalité sur les dimensions est une conséquence nécessaire de la somme directe, mais elle seule ne suffit pas à la garantir : une somme non directe peut très bien vérifier cette inégalité au sens large.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },

            // --- SUPPLÉMENTAIRES ET GRASSMANN ---
            {
                type: "qcm", tags: ["Supplémentaires", "Définitions"],
                q: "Deux sous-espaces vectoriels $F$ et $G$ sont dits « supplémentaires » dans $E$ (soit $E = F \\oplus G$) si :",
                options: [
                    { text: "Ils sont en somme directe", isCorrect: false },
                    { text: "Leur somme est directe ET génère tout l'espace $E$", isCorrect: true },
                    { text: "Ils sont orthogonaux", isCorrect: false }
                ],
                explanation: "Supplémentaire = somme directe (unicité) + la somme vaut $E$ (existence). Être seulement « en somme directe » ne suffit pas : $F$ et $G$ peuvent très bien être en somme directe sans que $F+G$ recouvre tout $E$. L'orthogonalité, elle, est une notion euclidienne totalement différente qui n'intervient pas ici.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Dimension", "Sommes", "Théorèmes"],
                q: "Que stipule la Formule de Grassmann ?",
                options: [
                    { text: "$\\dim(F+G) = \\dim(F) + \\dim(G)$", isCorrect: false },
                    { text: "$\\dim(F+G) = \\dim(F) + \\dim(G) - \\dim(F \\cap G)$", isCorrect: true },
                    { text: "$\\dim(F+G) = \\dim(F) \\times \\dim(G)$", isCorrect: false }
                ],
                explanation: "La dimension de l'espace somme est la somme des dimensions, à laquelle on soustrait la dimension de l'intersection (pour ne pas compter la zone de chevauchement en double). La première formule n'est vraie que dans le cas particulier où la somme est directe ($F \\cap G = \\{0\\}$).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Dimension", "Sommes", "Théorèmes", "Pièges"],
                q: "La formule de Grassmann à deux sous-espaces ($\\dim(F+G) = \\dim F + \\dim G - \\dim(F \\cap G)$) se généralise-t-elle directement à TROIS sous-espaces sous la forme $\\dim(F+G+H) = \\dim F + \\dim G + \\dim H - \\dim(F\\cap G) - \\dim(F\\cap H) - \\dim(G\\cap H) + \\dim(F\\cap G\\cap H)$ ?",
                options: [
                    { text: "Oui, c'est une identité toujours vraie, comme pour les ensembles (formule du crible)", isCorrect: false },
                    { text: "Non, cette formule n'est en général pas valable pour les sous-espaces vectoriels", isCorrect: true }
                ],
                explanation: "Contrairement au principe d'inclusion-exclusion sur les cardinaux d'ensembles, la formule de Grassmann ne se généralise PAS naïvement à 3 sous-espaces ou plus : on peut seulement affirmer l'inégalité $\\dim(F+G+H) \\le \\dim F + \\dim G + \\dim H$, avec égalité si et seulement si la somme est directe.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Supplémentaires", "Dimension"],
                q: "En dimension finie, à quelles conditions deux sous-espaces $F$ et $G$ sont-ils supplémentaires dans $E$ ?",
                options: [
                    { text: "$\\dim(F) + \\dim(G) = \\dim(E)$", isCorrect: false },
                    { text: "$F \\cap G = \\{0\\}$ ET $\\dim(F) + \\dim(G) = \\dim(E)$", isCorrect: true },
                    { text: "$F \\cup G = E$", isCorrect: false }
                ],
                explanation: "C'est l'application directe de Grassmann. Si l'intersection est nulle, $\\dim(F+G) = \\dim F + \\dim G$. Et si cette somme vaut $\\dim E$, alors $F+G=E$. La seule égalité des dimensions ($\\dim F + \\dim G = \\dim E$) ne suffit pas : $F$ et $G$ pourraient se chevaucher et donc ne pas couvrir tout $E$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Supplémentaires", "Matrices"],
                q: "L'espace des matrices $\\mathcal{M}_n(\\mathbb{K})$ peut s'écrire comme la somme directe de quels sous-espaces remarquables ?",
                options: [
                    { text: "Les matrices diagonales et les matrices triangulaires", isCorrect: false },
                    { text: "L'espace des matrices symétriques $\\mathcal{S}_n$ et l'espace des matrices antisymétriques $\\mathcal{A}_n$", isCorrect: true },
                    { text: "Les matrices inversibles et les matrices non inversibles", isCorrect: false }
                ],
                explanation: "Toute matrice peut se décomposer de manière unique en une partie symétrique $\\frac{1}{2}(M+M^T)$ et une partie antisymétrique $\\frac{1}{2}(M-M^T)$. Les matrices non inversibles, elles, ne forment même pas un sous-espace vectoriel (leur somme peut redevenir inversible), donc cette option n'a pas de sens.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Supplémentaires", "Pièges"],
                q: "Si $E = F \\oplus G$, le sous-espace supplémentaire $G$ de $F$ est-il unique ?",
                options: [
                    { text: "Oui, un SEV possède un unique supplémentaire", isCorrect: false },
                    { text: "Non, un SEV possède une infinité de supplémentaires (sauf cas triviaux)", isCorrect: true }
                ],
                explanation: "Si l'on prend l'axe des X dans un plan, toute droite passant par l'origine et non confondue avec X est un supplémentaire. Il y en a une infinité — seuls les cas triviaux ($F=\\{0\\}$ ou $F=E$) admettent un unique supplémentaire (respectivement $E$ et $\\{0\\}$).",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Supplémentaires", "Dimension", "Pièges"],
                q: "Si $G_1$ et $G_2$ sont deux supplémentaires DIFFÉRENTS d'un même sous-espace $F$ dans $E$, que peut-on dire de $\\dim(G_1)$ et $\\dim(G_2)$ ?",
                options: [
                    { text: "Elles peuvent être différentes, puisque $G_1 \\neq G_2$", isCorrect: false },
                    { text: "Elles sont nécessairement égales, toutes deux valant $\\dim(E) - \\dim(F)$", isCorrect: true }
                ],
                explanation: "Bien que le supplémentaire lui-même ne soit pas unique (question précédente), sa DIMENSION, elle, est fixée : $\\dim(G) = \\dim(E) - \\dim(F)$ pour n'importe quel supplémentaire $G$ de $F$. C'est une conséquence directe de Grassmann appliquée à une somme directe qui vaut $E$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },

            // --- CAS EXTRÊMES ET TD ---
            {
                type: "qcm", tags: ["Dimension", "Intersections"],
                q: "Soient $F$ et $G$ deux sous-espaces de $E$ vérifiant : $\\dim(F) + \\dim(G) > \\dim(E)$. Que peut-on en déduire ?",
                options: [
                    { text: "$F$ et $G$ sont en somme directe", isCorrect: false },
                    { text: "Leur intersection n'est PAS réduite au vecteur nul ($F \\cap G \\neq \\{0\\}$)", isCorrect: true },
                    { text: "On ne peut rien conclure sans connaître $F$ et $G$ explicitement", isCorrect: false }
                ],
                explanation: "D'après Grassmann, $\\dim(F \\cap G) = \\dim F + \\dim G - \\dim(F+G)$. Puisque $\\dim(F+G) \\le \\dim E$, l'intersection a forcément une dimension $> 0$ : ce résultat est garanti par le seul jeu des dimensions, sans avoir besoin de connaître la nature exacte de $F$ et $G$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Dimension", "Intersections"],
                q: "Dans $\\mathbb{R}^n$, quelle est la dimension de l'intersection de DEUX hyperplans distincts ?",
                options: [
                    { text: "$n-1$", isCorrect: false },
                    { text: "$n-2$", isCorrect: true },
                    { text: "$0$", isCorrect: false }
                ],
                explanation: "Chaque hyperplan impose 1 équation indépendante. L'intersection de deux hyperplans distincts est définie par un système de 2 équations indépendantes, réduisant la dimension de 2. Ce résultat vaut quel que soit $n$ (dès que $n \\ge 2$) — la dimension n'est jamais nulle sauf cas particulier de $n=2$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Dimension", "Familles Libres/Liées"],
                q: "Vrai ou Faux : Dans $\\mathbb{R}[X]$, les familles infinies sont toujours liées.",
                options: [
                    { text: "Vrai", isCorrect: false },
                    { text: "Faux", isCorrect: true }
                ],
                explanation: "Faux. L'espace $\\mathbb{R}[X]$ est de dimension infinie. La famille canonique $(1, X, X^2, \\dots)$ est infinie ET libre. C'est précisément la signature d'un espace de dimension infinie : il possède une famille libre infinie.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Sous-Espaces Vectoriels", "Théorèmes"],
                q: "Que stipule le théorème sur l'existence d'un supplémentaire (Prop 5.12) ?",
                options: [
                    { text: "Seuls les hyperplans admettent un supplémentaire", isCorrect: false },
                    { text: "Dans un espace de dimension finie, TOUT sous-espace vectoriel $F$ admet (au moins) un supplémentaire", isCorrect: true },
                    { text: "Seul le sous-espace $\\{0\\}$ admet un supplémentaire", isCorrect: false }
                ],
                explanation: "C'est une conséquence du théorème de la base incomplète. On prend une base de $F$, on la complète en une base de $E$, et l'espace généré par les vecteurs ajoutés est un supplémentaire. Ce résultat vaut pour absolument tout sous-espace, pas seulement les cas particuliers comme les hyperplans ou $\\{0\\}$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Sommes", "Équivalence", "Pièges"],
                q: "Soient $E, F, G$ des sous-espaces. A-t-on toujours $E \\cap (F+G) = (E \\cap F) + (E \\cap G)$ ?",
                options: [
                    { text: "Oui, la distributivité marche toujours pour les SEV", isCorrect: false },
                    { text: "Non, c'est faux en général", isCorrect: true },
                    { text: "Oui, mais uniquement si $F \\cap G = \\{0\\}$", isCorrect: false }
                ],
                explanation: "L'intersection ne se distribue pas parfaitement sur la somme des sous-espaces vectoriels. On a seulement l'inclusion $(E \\cap F) + (E \\cap G) \\subset E \\cap (F+G)$, qui devient une égalité (loi modulaire de Dedekind) dès que $E \\subset F$ ou $F \\subset E$ — mais ce n'est pas lié à $F \\cap G = \\{0\\}$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Dimension", "Pièges", "Sous-Espaces Vectoriels"],
                q: "Soit $E$ de dimension $n$ et $F, G$ deux hyperplans distincts de $E$. Peut-on avoir $F \\oplus G$ ?",
                options: [
                    { text: "Oui, dès que $n \\ge 2$", isCorrect: false },
                    { text: "Non, jamais dès que $n \\ge 2$ (sauf le cas dégénéré $n \\le 1$)", isCorrect: true }
                ],
                explanation: "Deux hyperplans distincts vérifient $\\dim F = \\dim G = n-1$, donc $\\dim F + \\dim G = 2n-2$. Pour $n \\ge 2$, on a $2n-2 \\ge n$, donc par Grassmann leur intersection ne peut pas être réduite à $\\{0\\}$ (sauf si $n \\le 1$, cas dégénéré où la notion d'hyperplan distinct n'a plus vraiment de sens). Deux hyperplans distincts ne sont donc jamais en somme directe en dimension $\\ge 2$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            }
        ]
    },
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
                    { text: "La taille du plus grand bloc de Jordan associé à $\\lambda$", isCorrect: true },
                    { text: "La multiplicité algébrique de $\\lambda$", isCorrect: false }
                ],
                explanation: "Dans le polynôme minimal, l'exposant de $(X-\\lambda)$ est la taille du plus grand bloc de Jordan associé à $\\lambda$. La multiplicité algébrique correspond à la somme des tailles de tous les blocs associés à cette valeur propre.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
            {
                type: "qcm", tags: ["Réduction de Jordan", "Pratique"],
                q: "Quel est le lien entre la multiplicité algébrique de $\\lambda$ et les blocs de Jordan associés ?",
                options: [
                    { text: "Elle est égale à la somme des tailles de tous les blocs associés à $\\lambda$", isCorrect: true },
                    { text: "Elle est égale à la taille du plus grand bloc uniquement", isCorrect: false },
                    { text: "Elle est égale au nombre de blocs associés à $\\lambda$", isCorrect: false }
                ],
                explanation: "La multiplicité algébrique de $\\lambda$ est la dimension du sous-espace caractéristique associé, donc la somme des tailles des blocs de Jordan associés à $\\lambda$.",
                lastCorrect: 0, stats: { attempts: 0, correct: 0 }
            },
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
                    { text: "$\\det(M)$ (sans signe)", isCorrect: false },
                    { text: "$(-1)^n \\det(M)$", isCorrect: true },
                    { text: "$-\\det(M)$, quelle que soit la parité de $n$", isCorrect: false },
                    { text: "$n \\cdot \\det(M)$", isCorrect: false }
                ],
                explanation: "Le terme de degré zéro correspond à la valeur du polynôme en $X=0$ : $\\chi_M(0) = \\det(0 \\cdot I_n - M) = \\det(-M) = (-1)^n \\det(M)$. Le signe dépend donc de la parité de $n$ : $c_0 = -\\det(M)$ uniquement quand $n$ est impair, jamais un multiple de $n$ (ne pas confondre avec la trace, qui est une somme et non un produit).",
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
                    { text: "Résoudre des systèmes différentiels", isCorrect: false },
                    { text: "Diagonaliser directement la matrice sans passer par le polynôme caractéristique", isCorrect: false }
                ],
                explanation: "La méthode de Le Verrier construit une suite de matrices $M_k$ et utilise leurs traces pour déterminer les coefficients du polynôme caractéristique, permettant d'esquiver le calcul d'un déterminant polynomial complexe. Elle ne cherche pas à diagonaliser directement la matrice — au contraire, elle construit le polynôme caractéristique lui-même, ce qui reste utile même si la matrice n'est pas diagonalisable. Elle n'a pas non plus vocation directe à résoudre des équations différentielles.",
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
                    { text: "Il est diagonalisable, et ses sous-espaces propres sont des droites vectorielles", isCorrect: true },
                    { text: "Il est seulement trigonalisable, mais pas nécessairement diagonalisable", isCorrect: false }
                ],
                explanation: "C'est une condition suffisante forte (mais pas nécessaire : voir $I_n$). S'il y a $n$ racines distinctes, le polynôme est scindé à racines simples. Chaque multiplicité vaut 1, et la dimension géométrique valant au moins 1, on a l'égalité partout — donc chaque $E_{\\lambda_i}$ est de dimension exactement 1, et $u$ est bien diagonalisable, pas seulement trigonalisable : la trigonalisation seule serait un résultat bien plus faible que ce que garantit ici la CNS de diagonalisabilité.",
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
                    { text: "Le polynôme dérivé du polynôme caractéristique", isCorrect: false },
                    { text: "Le polynôme annulateur unitaire de plus GRAND degré", isCorrect: false }
                ],
                explanation: "C'est l'unique polynôme unitaire engendrant l'idéal des polynômes annulateurs, celui de plus PETIT degré : il divise tous les autres polynômes annulateurs de $u$ (y compris $\\chi_u$). Un polynôme annulateur de grand degré existe toujours (un multiple quelconque de $\\mu_u$), mais n'apporte aucune information nouvelle. Il n'a par ailleurs aucun rapport avec une dérivation formelle du polynôme caractéristique.",
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
    },
    "Probabilités : Chapitre 1 - Modélisation des phénomènes aléatoires": {
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Univers", "Définitions"],
                q: "Que représente l'espace des états (ou univers) $\\Omega$ dans la modélisation d'une expérience aléatoire ?",
                options: [
                    { text: "L'ensemble de tous les résultats possibles de l'expérience", isCorrect: true },
                    { text: "L'ensemble des évènements considérés comme réalisables", isCorrect: false },
                    { text: "La probabilité associée à chaque résultat", isCorrect: false },
                    { text: "Un sous-ensemble particulier des résultats jugés probables", isCorrect: false }
                ],
                explanation: "Par définition (Définition 1.1), $\\Omega$ est l'ensemble des résultats possibles $\\omega$ de l'expérience aléatoire, noté $\\omega \\in \\Omega$. Ce n'est pas l'ensemble des évènements (qui est $\\mathcal{F} \\subset \\mathcal{P}(\\Omega)$), ni une notion probabiliste.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Univers", "Choix de modèle"],
                q: "Concernant le choix de l'espace des états $\\Omega$ pour modéliser une expérience aléatoire, quelles affirmations sont correctes ?",
                options: [
                    { text: "Le choix de $\\Omega$ n'est pas nécessairement unique", isCorrect: true },
                    { text: "$\\Omega$ peut être fini, dénombrable ou infini non dénombrable", isCorrect: true },
                    { text: "Un seul choix d'univers est mathématiquement valide pour une expérience donnée", isCorrect: false },
                    { text: "$\\Omega$ doit toujours être un ensemble de nombres réels", isCorrect: false }
                ],
                explanation: "Le cours précise qu'il n'y a pas forcément unicité du modèle : par exemple pour la somme de deux dés, on peut choisir $\\Omega_1 = \\{1,\\dots,6\\}^2$ ou $\\Omega_2 = \\{2,\\dots,12\\}$. $\\Omega$ peut être de natures très différentes (fini, dénombrable, espace de fonctions, etc.).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tribu", "Axiomes"],
                q: "Quelles conditions un ensemble $\\mathcal{F}$ de parties de $\\Omega$ doit-il satisfaire pour être une tribu (σ-algèbre) ?",
                options: [
                    { text: "$\\Omega \\in \\mathcal{F}$", isCorrect: true },
                    { text: "Si $A \\in \\mathcal{F}$, alors $A^c \\in \\mathcal{F}$", isCorrect: true },
                    { text: "Si $(A_n)_{n \\geq 1}$ est une suite d'éléments de $\\mathcal{F}$, alors $\\bigcup_{n\\geq 1} A_n \\in \\mathcal{F}$", isCorrect: true },
                    { text: "$\\mathcal{F}$ doit contenir uniquement des singletons de $\\Omega$", isCorrect: false }
                ],
                explanation: "La Définition 1.3 donne exactement ces trois axiomes : stabilité par le complémentaire, stabilité par réunion dénombrable, et $\\Omega \\in \\mathcal{F}$ (ce qui implique $\\emptyset \\in \\mathcal{F}$ par complémentation). La stabilité par intersection dénombrable en découle par les lois de De Morgan.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tribu"],
                q: "Quelle est la tribu la plus petite (au sens de l'inclusion) que l'on puisse définir sur $\\Omega$ ?",
                options: [
                    { text: "$\\{\\emptyset, \\Omega\\}$, appelée tribu grossière ou triviale", isCorrect: true },
                    { text: "$\\mathcal{P}(\\Omega)$", isCorrect: false },
                    { text: "L'ensemble des singletons de $\\Omega$", isCorrect: false },
                    { text: "La tribu engendrée par un évènement $A$ quelconque", isCorrect: false }
                ],
                explanation: "$\\{\\emptyset, \\Omega\\}$ est bien une tribu (elle vérifie les trois axiomes) et c'est la plus petite possible car toute tribu doit contenir au minimum $\\Omega$ et $\\emptyset$. À l'inverse, $\\mathcal{P}(\\Omega)$ est la plus grande tribu possible.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tribu", "Cas fini/dénombrable"],
                q: "Dans quel(s) cas choisit-on typiquement $\\mathcal{F} = \\mathcal{P}(\\Omega)$ comme tribu d'évènements ?",
                options: [
                    { text: "Lorsque $\\Omega$ est fini", isCorrect: true },
                    { text: "Lorsque $\\Omega$ est dénombrable", isCorrect: true },
                    { text: "Systématiquement, quel que soit $\\Omega$, y compris infini non dénombrable", isCorrect: false },
                    { text: "Uniquement lorsque $\\Omega$ est un intervalle de $\\mathbb{R}$", isCorrect: false }
                ],
                explanation: "Le cours précise que $\\mathcal{P}(\\Omega)$ est choisie lorsque $\\Omega$ est fini ou dénombrable. Lorsque $\\Omega$ est infini non dénombrable, cette tribu est typiquement trop grande (il devient impossible d'y définir une probabilité cohérente sur toutes les parties), d'où l'usage de tribus plus restreintes comme la tribu borélienne.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tribu", "Tribu engendrée"],
                q: "Comment est définie la tribu engendrée $\\sigma(\\mathcal{C})$ par une classe $\\mathcal{C} \\subset \\mathcal{P}(\\Omega)$ ?",
                options: [
                    { text: "C'est la plus petite tribu contenant $\\mathcal{C}$", isCorrect: true },
                    { text: "C'est l'intersection de toutes les tribus contenant $\\mathcal{C}$", isCorrect: true },
                    { text: "C'est la réunion de tous les éléments de $\\mathcal{C}$", isCorrect: false },
                    { text: "C'est toujours égale à $\\mathcal{P}(\\Omega)$", isCorrect: false }
                ],
                explanation: "$\\sigma(\\mathcal{C})$ est définie comme $\\bigcap_{\\{\\mathcal{F} : \\mathcal{F} \\text{ tribu contenant } \\mathcal{C}\\}} \\mathcal{F}$. Cette intersection existe car $\\mathcal{P}(\\Omega)$ est toujours une telle tribu, c'est bien une tribu (une intersection de tribus est une tribu), elle contient $\\mathcal{C}$, et c'est la plus petite car on prend l'intersection de toutes les candidates.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tribu borélienne"],
                q: "Comment est définie la tribu borélienne $\\mathcal{B}(\\mathbb{R})$ ?",
                options: [
                    { text: "La tribu engendrée par l'ensemble des intervalles ouverts $]a,b[$ avec $a<b$", isCorrect: true },
                    { text: "Elle peut aussi être engendrée par les intervalles de la forme $]-\\infty, a]$, $a \\in \\mathbb{R}$", isCorrect: true },
                    { text: "L'ensemble $\\mathcal{P}(\\mathbb{R})$ de toutes les parties de $\\mathbb{R}$", isCorrect: false },
                    { text: "L'ensemble des singletons de $\\mathbb{R}$", isCorrect: false }
                ],
                explanation: "La Définition 1.7 introduit $\\mathcal{B}(\\mathbb{R})$ comme la tribu engendrée par les intervalles ouverts. Une remarque du cours indique que cette même tribu est aussi engendrée par les intervalles $]-\\infty, a]$. Ce n'est pas $\\mathcal{P}(\\mathbb{R})$ (qui serait trop grande pour porter une mesure de probabilité cohérente).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tribu engendrée", "Exemples"],
                q: "Soit $A \\in \\mathcal{P}(\\Omega)$ avec $A \\neq \\emptyset$ et $A \\neq \\Omega$. Quelle est la tribu engendrée par $\\{A\\}$ ?",
                options: [
                    { text: "$\\sigma(A) = \\{\\emptyset, A, A^c, \\Omega\\}$", isCorrect: true },
                    { text: "$\\sigma(A) = \\{A\\}$", isCorrect: false },
                    { text: "$\\sigma(A) = \\mathcal{P}(\\Omega)$", isCorrect: false },
                    { text: "$\\sigma(A) = \\{\\emptyset, \\Omega\\}$", isCorrect: false }
                ],
                explanation: "Pour être une tribu, l'ensemble doit contenir $\\Omega$, être stable par complémentation (donc contenir $A^c$) et par réunion (donc $A \\cup A^c = \\Omega$, déjà présent, et $\\emptyset$ via complémentation de $\\Omega$). Le plus petit ensemble satisfaisant ces propriétés et contenant $A$ est exactement $\\{\\emptyset, A, A^c, \\Omega\\}$ (Exemple 1.9).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Vocabulaire", "Évènements"],
                q: "Concernant la correspondance entre terminologie ensembliste et probabiliste, quelles affirmations sont exactes ?",
                options: [
                    { text: "$A \\cup B$ correspond à l'évènement « A ou B » au sens non exclusif", isCorrect: true },
                    { text: "$A \\cap B = \\emptyset$ signifie que A et B sont incompatibles", isCorrect: true },
                    { text: "$A \\subset B$ signifie que si A est réalisé alors B l'est aussi", isCorrect: true },
                    { text: "$A^c$ correspond à l'ensemble vide", isCorrect: false }
                ],
                explanation: "Le tableau de correspondance du cours établit ces équivalences : $A\\cup B$ = « A ou B » (non exclusif), $A \\cap B = \\emptyset$ = A et B incompatibles, $A \\subset B$ = si A réalisé alors B aussi. $A^c$ est l'évènement contraire de A, pas l'ensemble vide.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Opérations", "De Morgan"],
                q: "Parmi les propriétés suivantes sur les opérations d'évènements, lesquelles sont correctes ?",
                options: [
                    { text: "$(A \\cup B)^c = A^c \\cap B^c$ (loi de De Morgan)", isCorrect: true },
                    { text: "$(A \\cap B)^c = A^c \\cup B^c$ (loi de De Morgan)", isCorrect: true },
                    { text: "$(A \\cup B) \\cap C = (A \\cap C) \\cup (B \\cap C)$ (distributivité)", isCorrect: true },
                    { text: "$(A \\cup B)^c = A^c \\cup B^c$", isCorrect: false }
                ],
                explanation: "La Propriété 1.6 donne les lois de De Morgan $(A\\cup B)^c = A^c \\cap B^c$ et $(A\\cap B)^c = A^c \\cup B^c$, ainsi que la distributivité de l'intersection sur l'union. La dernière option confond union et intersection dans la loi de De Morgan et est donc fausse.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité", "Axiomes de Kolmogorov"],
                q: "Quels sont les deux axiomes définissant une mesure de probabilité $P$ sur $(\\Omega, \\mathcal{F})$ ?",
                options: [
                    { text: "$P(\\Omega) = 1$", isCorrect: true },
                    { text: "σ-additivité : pour toute famille dénombrable $(A_n)_{n\\geq 1}$ d'évènements deux-à-deux disjoints, $P(\\bigcup_{n\\geq 1} A_n) = \\sum_{n=1}^{+\\infty} P(A_n)$", isCorrect: true },
                    { text: "$P(A) = P(A^c)$ pour tout évènement $A$", isCorrect: false },
                    { text: "$P$ doit être une fonction strictement croissante", isCorrect: false }
                ],
                explanation: "La Définition 1.10 pose exactement ces deux axiomes : la probabilité de l'évènement certain vaut 1, et la σ-additivité pour les familles dénombrables d'évènements disjoints. Toutes les autres propriétés (P(∅)=0, complémentaire, monotonie, etc.) s'en déduisent comme corollaires.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité", "Propriétés"],
                q: "Que vaut $P(\\emptyset)$ pour toute mesure de probabilité $P$, et comment le démontre-t-on ?",
                options: [
                    { text: "$P(\\emptyset) = 0$", isCorrect: true },
                    { text: "On l'obtient en appliquant la σ-additivité à la famille $(A_n)_{n\\geq 1}$ où $A_n = \\emptyset$ pour tout $n$", isCorrect: true },
                    { text: "$P(\\emptyset) = 1$", isCorrect: false },
                    { text: "C'est un axiome supplémentaire, non démontrable", isCorrect: false }
                ],
                explanation: "En appliquant la σ-additivité à la famille $(\\emptyset)_{n\\geq1}$ (deux-à-deux disjoints, trivialement), on obtient $P(\\emptyset) = \\sum_{n\\geq1} P(\\emptyset)$, une série dont chaque terme est identique et qui ne converge que si $P(\\emptyset)=0$ (Corollaire 1.12, Point 1).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité", "Propriétés"],
                q: "Soit $(\\Omega, \\mathcal{F}, P)$ un espace probabilisé et $A, B \\in \\mathcal{F}$. Quelles formules sont correctes ?",
                options: [
                    { text: "$P(A^c) = 1 - P(A)$", isCorrect: true },
                    { text: "$P(B \\setminus A) = P(B) - P(A \\cap B)$", isCorrect: true },
                    { text: "Si $A \\subset B$ alors $P(A) \\leq P(B)$", isCorrect: true },
                    { text: "$P(B \\setminus A) = P(B) - P(A)$ en toute généralité", isCorrect: false }
                ],
                explanation: "Le Corollaire 1.12 donne : $P(A^c)=1-P(A)$ (points 1 et 2 appliqués à $A,A^c$), $P(B\\setminus A)=P(B)-P(A\\cap B)$ (Point 4), et la monotonie (Point 5). La dernière formule n'est correcte que si $A \\subset B$ ; en général il faut soustraire $P(A\\cap B)$ et non $P(A)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité", "Formule du crible"],
                q: "Quelle est la formule du crible (cas de deux évènements) et sa généralisation (formule de Poincaré) ?",
                options: [
                    { text: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$", isCorrect: true },
                    { text: "Pour $n$ évènements, la formule de Poincaré alterne les signes selon le cardinal des intersections multiples", isCorrect: true },
                    { text: "$P(A \\cup B) = P(A) + P(B)$ pour tous A, B", isCorrect: false },
                    { text: "$P(A \\cup B) = P(A) \\cdot P(B)$", isCorrect: false }
                ],
                explanation: "La formule du crible $P(A\\cup B) = P(A)+P(B)-P(A\\cap B)$ se généralise en la formule de Poincaré $P\\left(\\bigcup_{i=1}^n A_i\\right) = \\sum_{i=1}^n (-1)^{i-1} \\sum_{J \\subset \\{1,\\dots,n\\}, |J|=i} P\\left(\\bigcap_{k \\in J} A_k\\right)$, une somme alternée sur les intersections de tailles croissantes.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité", "Sous-additivité", "Limites"],
                q: "Concernant la Proposition 1.13 sur les suites d'évènements, quelles affirmations sont correctes ?",
                options: [
                    { text: "$P(\\bigcup_{n\\geq1} A_n) \\leq \\sum_{n\\geq1} P(A_n)$ (sous-additivité)", isCorrect: true },
                    { text: "Si $(A_n)$ est croissante et $A = \\bigcup_{n\\geq1} A_n$, alors $P(A) = \\lim_{n\\to+\\infty} P(A_n)$", isCorrect: true },
                    { text: "Si $(B_n)$ est décroissante et $B = \\bigcap_{n\\geq1} B_n$, alors $P(B) = \\lim_{n\\to+\\infty} P(B_n)$", isCorrect: true },
                    { text: "La sous-additivité devient toujours une égalité stricte", isCorrect: false }
                ],
                explanation: "La sous-additivité découle de la construction d'une famille disjointe $C_n = A_n \\setminus A_{n-1}$ et n'est une égalité que si les $A_n$ sont eux-mêmes disjoints. La continuité monotone (croissante et décroissante) de la probabilité est démontrée via cette même famille $(C_n)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Cas fini", "Probabilité uniforme"],
                q: "Dans un univers $\\Omega$ fini muni de la probabilité uniforme, comment calcule-t-on $P(A)$ pour $A \\in \\mathcal{P}(\\Omega)$ ?",
                options: [
                    { text: "$P(A) = \\dfrac{\\text{card}(A)}{\\text{card}(\\Omega)}$", isCorrect: true },
                    { text: "$P(\\{\\omega\\}) = \\dfrac{1}{\\text{card}(\\Omega)}$ pour tout $\\omega \\in \\Omega$", isCorrect: true },
                    { text: "$P(A) = \\text{card}(A)$", isCorrect: false },
                    { text: "$P(A)$ dépend de la nature des éléments de $A$, pas seulement de son cardinal", isCorrect: false }
                ],
                explanation: "La Définition 1.15 précise que sous l'hypothèse d'équiprobabilité, chaque singleton a la même probabilité $1/\\text{card}(\\Omega)$, et donc $P(A) = \\text{card}(A)/\\text{card}(\\Omega)$ pour tout évènement $A$ : seul le cardinal de $A$ compte.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Combinatoire", "Tirage avec remise ordonné"],
                q: "On tire un échantillon ordonné de taille $r$ avec remise dans une population de taille $N$. Combien d'échantillons distincts sont possibles ?",
                options: [
                    { text: "$N^r$", isCorrect: true },
                    { text: "$\\dfrac{N!}{(N-r)!}$", isCorrect: false },
                    { text: "$\\binom{N}{r}$", isCorrect: false },
                    { text: "$\\binom{N+r-1}{r}$", isCorrect: false }
                ],
                explanation: "Pour un tirage ordonné avec remise, chaque tirage a $N$ possibilités indépendamment des précédents, donnant $N^r$ échantillons possibles (Exemple : jeter un dé 5 fois donne $6^5$ tirages). Les autres formules correspondent respectivement au tirage ordonné sans remise, au tirage non ordonné sans remise, et au tirage non ordonné avec remise.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Combinatoire", "Tirage sans remise ordonné"],
                q: "Combien y a-t-il d'échantillons ordonnés de taille $r \\leq N$ sans répétition (arrangements) dans une population de taille $N$ ?",
                options: [
                    { text: "$A_N^r = N(N-1)\\dots(N-r+1) = \\dfrac{N!}{(N-r)!}$", isCorrect: true },
                    { text: "$N^r$", isCorrect: false },
                    { text: "$\\binom{N}{r}$", isCorrect: false },
                    { text: "$r!$", isCorrect: false }
                ],
                explanation: "Pour un tirage sans remise, il y a $N$ choix pour le premier élément, $N-1$ pour le second (l'élément déjà tiré étant exclu), etc., jusqu'à $N-r+1$ pour le $r$-ième, soit $N(N-1)\\dots(N-r+1) = N!/(N-r)!$, noté $A_N^r$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Combinatoire", "Coefficient binomial"],
                q: "Le nombre de sous-populations (non ordonnées) de taille $r$ sans répétition choisies parmi $N$ individus est appelé coefficient binomial et vaut :",
                options: [
                    { text: "$\\binom{N}{r} = \\dfrac{N!}{(N-r)!\\, r!}$", isCorrect: true },
                    { text: "$\\dfrac{N!}{(N-r)!}$", isCorrect: false },
                    { text: "$N^r$", isCorrect: false },
                    { text: "$r! \\cdot \\binom{N}{r}$ donne le nombre d'échantillons ordonnés sans répétition associés à chaque combinaison", isCorrect: true }
                ],
                explanation: "Le coefficient binomial $\\binom{N}{r} = \\frac{N!}{(N-r)!r!}$ compte les combinaisons (sous-ensembles non ordonnés). Chaque sous-ensemble à $r$ éléments donne $r!$ arrangements ordonnés, d'où la relation $\\text{card}(\\Omega_2) = r! \\cdot \\text{card}(\\Omega_3)$, c'est-à-dire $A_N^r = r! \\binom{N}{r}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Combinatoire", "Tirage avec remise non ordonné"],
                q: "Combien de sous-populations de taille $r$ avec répétitions (tirage non ordonné avec remise) peut-on former à partir de $N$ individus ?",
                options: [
                    { text: "$\\binom{N+r-1}{r}$", isCorrect: true },
                    { text: "$\\binom{N+r-1}{N-1}$", isCorrect: true },
                    { text: "$N^r$", isCorrect: false },
                    { text: "$\\binom{N}{r}$", isCorrect: false }
                ],
                explanation: "Ce dénombrement (méthode des « étoiles et barres ») revient à placer $r$ boules indistinguables dans $N$ urnes, soit à disposer $N-1$ cloisons parmi $N+r-1$ positions : $\\binom{N+r-1}{N-1} = \\binom{N+r-1}{r}$ (ces deux écritures sont égales par symétrie du coefficient binomial).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Combinatoire", "Coefficient multinomial"],
                q: "Le nombre d'anagrammes du mot CHERCHER (8 lettres, avec les répétitions C×2, H×2, E×2, R×2) se calcule avec :",
                options: [
                    { text: "$\\dfrac{8!}{2!\\,2!\\,2!\\,2!}$, un coefficient multinomial", isCorrect: true },
                    { text: "$8!$", isCorrect: false },
                    { text: "$\\binom{8}{2}$", isCorrect: false },
                    { text: "Le coefficient multinomial $\\binom{N}{r_1 \\dots r_k}$ compte le nombre de façons de répartir $N$ objets en $k$ familles de tailles fixées $r_1,\\dots,r_k$", isCorrect: true }
                ],
                explanation: "Le coefficient multinomial $\\binom{N}{r_1\\dots r_k} = \\frac{N!}{r_1!\\dots r_k!}$ généralise le coefficient binomial à plus de deux catégories. Pour CHERCHER, on partitionne les 8 positions en 4 lettres répétées 2 fois chacune, d'où $8!/(2!)^4$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Combinatoire", "Loi hypergéométrique"],
                q: "Une urne contient $N_a$ individus de catégorie a et $N_b = N - N_a$ de catégorie b. On tire une sous-population de taille $r$ sans répétition. Quelle est la probabilité de tirer exactement $k$ individus de catégorie a ?",
                options: [
                    { text: "$P(A_k) = \\dfrac{\\binom{N_a}{k}\\binom{N-N_a}{r-k}}{\\binom{N}{r}}$", isCorrect: true },
                    { text: "$P(A_k) = \\binom{r}{k}\\left(\\dfrac{N_a}{N}\\right)^k\\left(\\dfrac{N_b}{N}\\right)^{r-k}$", isCorrect: false },
                    { text: "C'est un exemple de loi hypergéométrique", isCorrect: true },
                    { text: "C'est un exemple de loi de Poisson", isCorrect: false }
                ],
                explanation: "Ce tirage sans remise donne la loi hypergéométrique $P(A_k) = \\binom{N_a}{k}\\binom{N-N_a}{r-k} / \\binom{N}{r}$. La deuxième option correspond en fait à la loi binomiale, qui s'obtient dans le cas d'un tirage AVEC remise, et qui apparaît aussi comme limite de la loi hypergéométrique quand $N \\to +\\infty$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Combinatoire", "Limite hypergéométrique-binomiale"],
                q: "Que se passe-t-il lorsque, dans un tirage hypergéométrique, le nombre total de boules $N$ tend vers l'infini avec $N_a/N \\to p$ (r et k fixés) ?",
                options: [
                    { text: "$P(A_k)$ converge vers $\\binom{r}{k} p^k (1-p)^{r-k}$, la probabilité binomiale", isCorrect: true },
                    { text: "Ce résultat est intuitif car pour un grand nombre de boules, tirer avec ou sans remise change peu de choses", isCorrect: true },
                    { text: "$P(A_k)$ diverge vers l'infini", isCorrect: false },
                    { text: "$P(A_k)$ tend toujours vers 0", isCorrect: false }
                ],
                explanation: "Le cours démontre que la loi hypergéométrique converge vers la loi binomiale $\\binom{r}{k}p^k(1-p)^{r-k}$ quand $N \\to +\\infty$ avec $N_a/N \\to p$. L'intuition est que sur une population immense, la probabilité de retirer deux fois le même individu devient négligeable, rendant le tirage sans remise proche du tirage avec remise.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Cas dénombrable"],
                q: "On lance une pièce équilibrée jusqu'à l'obtention du premier pile. On prend $\\Omega = \\mathbb{N}^* \\cup \\{\\infty\\}$ avec $P(\\{k\\}) = 1/2^k$. Quelle est la probabilité que pile ne sorte jamais ?",
                options: [
                    { text: "$P(\\{\\infty\\}) = 0$", isCorrect: true },
                    { text: "$P(\\{\\infty\\}) = 1 - \\sum_{k=1}^{+\\infty} \\frac{1}{2^k} = 1 - 1 = 0$", isCorrect: true },
                    { text: "$P(\\{\\infty\\}) = 1/2$", isCorrect: false },
                    { text: "$P(\\{\\infty\\})$ n'est pas définie car $\\Omega$ est infini", isCorrect: false }
                ],
                explanation: "Comme $\\mathbb{N}^*$ et $\\{\\infty\\}$ partitionnent $\\Omega$, $1 = P(\\{\\infty\\}) + \\sum_{k=1}^{+\\infty} P(\\{k\\})$. Or $\\sum_{k=1}^{+\\infty} \\frac{1}{2^k} = 1$ (série géométrique), donc $P(\\{\\infty\\}) = 1-1 = 0$ : l'univers est bien dénombrable et la probabilité est parfaitement définie même si $\\Omega$ est infini.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Cas dénombrable"],
                q: "Dans l'exemple précédent (lancers de pièce jusqu'au premier pile), quelle est la probabilité que le premier pile sorte après un nombre pair de lancers, $P(\\{2,4,6,\\dots\\})$ ?",
                options: [
                    { text: "$P = \\sum_{k=1}^{+\\infty} \\frac{1}{2^{2k}} = \\frac{1}{3}$", isCorrect: true },
                    { text: "$P = 1/2$", isCorrect: false },
                    { text: "$P = 1$", isCorrect: false },
                    { text: "Le calcul utilise une somme géométrique de raison $1/4$", isCorrect: true }
                ],
                explanation: "$P(\\{2,4,6,\\dots\\}) = \\sum_{k\\geq1} P(\\{2k\\}) = \\sum_{k\\geq1} \\frac{1}{2^{2k}} = \\sum_{k\\geq1} \\left(\\frac{1}{4}\\right)^k = \\frac{1/4}{1-1/4} = \\frac{1}{3}$, série géométrique de raison $1/4$ et premier terme $1/4$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Cas général", "Mesure de Dirac"],
                q: "Qu'est-ce que la mesure de Dirac $\\delta_{\\omega_0}$ en un point $\\omega_0 \\in \\Omega$ ?",
                options: [
                    { text: "La probabilité définie par $\\delta_{\\omega_0}(A) = 1$ si $\\omega_0 \\in A$, et $0$ sinon", isCorrect: true },
                    { text: "Une mesure qui charge tout $\\Omega$ de manière uniforme", isCorrect: false },
                    { text: "Une probabilité telle que $\\Omega \\setminus \\{\\omega_0\\}$ est négligeable", isCorrect: true },
                    { text: "Une mesure qui n'existe que dans le cas fini", isCorrect: false }
                ],
                explanation: "$\\delta_{\\omega_0}$ « concentre » toute la masse de probabilité sur le point $\\omega_0$. Elle vaut 1 sur tout évènement contenant $\\omega_0$ et 0 sinon, ce qui rend $\\Omega\\setminus\\{\\omega_0\\}$ négligeable et $\\omega_0$ (au sens des propriétés qu'il satisfait) presque sûr. Elle est définie dans un cadre d'univers général, pas seulement fini.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Cas général", "π-système"],
                q: "Quel résultat théorique permet de caractériser une mesure de probabilité par ses valeurs sur une classe restreinte d'évènements $\\mathcal{C}$ ?",
                options: [
                    { text: "Si $\\mathcal{C}$ est stable par intersections finies (π-système) et $\\sigma(\\mathcal{C}) = \\mathcal{F}$, alors la mesure est entièrement déterminée par ses valeurs sur $\\mathcal{C}$", isCorrect: true },
                    { text: "Ce résultat découle du lemme de classe monotone", isCorrect: true },
                    { text: "Une mesure de probabilité sur $(\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))$ est entièrement déterminée par sa valeur sur les intervalles $]-\\infty, x]$", isCorrect: true },
                    { text: "Ce résultat garantit également l'existence de la mesure sans autre argument", isCorrect: false }
                ],
                explanation: "Le cours mentionne que, comme conséquence du lemme de classe monotone, une mesure de probabilité est entièrement déterminée par ses valeurs sur un π-système générateur. L'existence de la mesure est une question distincte, plus délicate, nécessitant par exemple le théorème d'extension de Carathéodory.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Combinatoire", "Application numérique"],
                q: "On jette un dé équilibré 5 fois de suite. Quelle est (approximativement) la probabilité d'obtenir 5 résultats tous distincts ?",
                options: [
                    { text: "$\\dfrac{6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2}{6^5} \\approx 0{,}09$", isCorrect: true },
                    { text: "Cette probabilité est le rapport entre un tirage sans remise et un tirage avec remise sur le même univers", isCorrect: true },
                    { text: "$\\dfrac{1}{6^5}$", isCorrect: false },
                    { text: "$\\dfrac{5!}{6!}$", isCorrect: false }
                ],
                explanation: "On choisit $\\Omega_1 = \\{1,\\dots,6\\}^5$ (tirage avec remise, équiprobable), et l'évènement « tous distincts » correspond à $\\Omega_2$ (tirage sans remise) : $P(A) = \\text{card}(\\Omega_2)/\\text{card}(\\Omega_1) = A_6^5/6^5 = (6\\cdot5\\cdot4\\cdot3\\cdot2)/6^5 \\approx 0{,}09$ (Exemple 1.19).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Combinatoire", "Applications"],
                q: "Pour une main de poker (5 cartes tirées parmi un jeu de 32), quelle démarche permet de calculer la probabilité que les 5 hauteurs soient toutes différentes ?",
                options: [
                    { text: "Choisir 5 hauteurs parmi 8 : $\\binom{8}{5}$ façons, puis choisir la couleur de chaque carte : $4^5$ façons", isCorrect: true },
                    { text: "La probabilité recherchée est $\\dfrac{\\binom{8}{5} \\cdot 4^5}{\\binom{32}{5}}$", isCorrect: true },
                    { text: "Il suffit de calculer $\\binom{32}{5}$ sans autre choix supplémentaire", isCorrect: false },
                    { text: "On utilise un tirage avec remise pour modéliser la main de poker", isCorrect: false }
                ],
                explanation: "Il y a $\\binom{32}{5}$ mains possibles au total (tirage sans remise, non ordonné). Pour avoir 5 hauteurs distinctes, on choisit d'abord les 8 hauteurs parmi 8 possibles via $\\binom{8}{5}$, puis pour chaque hauteur on choisit une des 4 couleurs, soit $4^5$ combinaisons, d'où $\\text{card}(A) = \\binom{8}{5}4^5$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Vocabulaire", "Presque-sûr"],
                q: "Que signifie qu'un évènement $A$ est « négligeable » ou « presque-sûr » ?",
                options: [
                    { text: "$A$ est négligeable si $P(A) = 0$", isCorrect: true },
                    { text: "$A$ est presque-sûr si $P(A) = 1$", isCorrect: true },
                    { text: "$A$ négligeable signifie que $A = \\emptyset$ nécessairement", isCorrect: false },
                    { text: "$A$ presque-sûr signifie que $A = \\Omega$ nécessairement", isCorrect: false }
                ],
                explanation: "La Définition 1.11 introduit ces termes : négligeable si $P(A)=0$, presque-sûr si $P(A)=1$. Ces notions ne sont pas équivalentes à $A=\\emptyset$ ou $A=\\Omega$ : dans le cas continu (par exemple), un singleton peut avoir une probabilité nulle sans être l'ensemble vide.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    },
    "Probabilités : Chapitre 2 - Conditionnement et indépendance": {
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Probabilité conditionnelle", "Définition"],
                q: "Comment est définie la probabilité conditionnelle $P(A|B)$ pour $B$ tel que $P(B) > 0$ ?",
                options: [
                    { text: "$P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$", isCorrect: true },
                    { text: "$P(A|B) = P(A) \\cdot P(B)$", isCorrect: false },
                    { text: "$P(A|B) = P(A) - P(B)$", isCorrect: false },
                    { text: "$P(A|B) = \\dfrac{P(B)}{P(A \\cap B)}$", isCorrect: false }
                ],
                explanation: "La Définition 2.1 pose $P(A|B) = P(A\\cap B)/P(B)$, qui nécessite $P(B) > 0$ pour être définie. Intuitivement, on « restreint » l'univers à $B$ et on regarde la proportion de $A\\cap B$ dans ce nouvel univers.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité conditionnelle", "Propriétés"],
                q: "Que peut-on dire de l'application $P(\\cdot | B) : \\mathcal{F} \\to \\mathbb{R}_+$, $A \\mapsto P(A|B)$ (avec $P(B)>0$) ?",
                options: [
                    { text: "C'est une probabilité sur $(\\Omega, \\mathcal{F})$", isCorrect: true },
                    { text: "Le triplet $(\\Omega, \\mathcal{F}, P(\\cdot|B))$ est un espace probabilisé", isCorrect: true },
                    { text: "Elle satisfait donc toutes les propriétés générales des probabilités (Corollaire 1.12, Proposition 1.13)", isCorrect: true },
                    { text: "Elle n'est définie que sur les sous-ensembles de $B$", isCorrect: false }
                ],
                explanation: "Le Lemme 2.2 démontre que $P(\\cdot|B)$ vérifie les trois axiomes d'une probabilité (bornes dans [0,1], $P(\\Omega|B)=1$, σ-additivité), donc c'est bien une probabilité sur l'ensemble de $\\mathcal{F}$ (pas seulement sur les sous-ensembles de $B$), et hérite donc de toutes les propriétés générales déjà établies.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité conditionnelle", "Probabilités composées"],
                q: "Si $P(A) > 0$ et $P(B) > 0$, quelle identité relie $P(A\\cap B)$, $P(A|B)$ et $P(B|A)$ ?",
                options: [
                    { text: "$P(A \\cap B) = P(B|A)\\,P(A) = P(A|B)\\,P(B)$", isCorrect: true },
                    { text: "$P(A \\cap B) = P(A|B) + P(B|A)$", isCorrect: false },
                    { text: "$P(A \\cap B) = P(A) \\cdot P(B)$ dans tous les cas", isCorrect: false },
                    { text: "$P(A \\cap B) = P(A|B) \\cdot P(B|A)$", isCorrect: false }
                ],
                explanation: "C'est la formule des probabilités composées (Proposition 2.4, Point 1), obtenue simplement en réécrivant la définition de la probabilité conditionnelle des deux façons possibles. L'égalité $P(A\\cap B) = P(A)P(B)$ n'est vraie que dans le cas particulier de l'indépendance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité conditionnelle", "Probabilités composées"],
                q: "Quelle est la formule des probabilités composées généralisée à $n$ évènements $A_1, \\dots, A_n$ (avec $P(\\cap_{i=1}^{n-1} A_i) > 0$) ?",
                options: [
                    { text: "$P(A_1 \\cap \\dots \\cap A_n) = P(A_1)\\, P(A_2|A_1)\\, P(A_3|A_1\\cap A_2) \\dots P(A_n|A_1\\cap \\dots \\cap A_{n-1})$", isCorrect: true },
                    { text: "$P(A_1 \\cap \\dots \\cap A_n) = \\prod_{i=1}^n P(A_i)$ en toute généralité", isCorrect: false },
                    { text: "Cette formule se démontre par récurrence à partir du cas $n=2$", isCorrect: true },
                    { text: "$P(A_1 \\cap \\dots \\cap A_n) = P(A_n|A_1 \\cap \\dots \\cap A_{n-1})$ seul suffit", isCorrect: false }
                ],
                explanation: "La Proposition 2.4, Point 2, généralise la règle du produit conditionnel en chaîne. Chaque facteur conditionne sur l'intersection de tous les évènements précédents. Le produit simple des probabilités $\\prod P(A_i)$ ne serait valable qu'en cas d'indépendance mutuelle.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité conditionnelle", "Exemple", "Calcul"],
                q: "On lance deux fois un dé équilibré. Sachant que le premier jet donne 3, quelle est la probabilité que la somme soit strictement supérieure à 6 ?",
                options: [
                    { text: "$P(A|B) = 1/2$", isCorrect: true },
                    { text: "$B$ = « premier jet donne 3 » a pour cardinal 6, donc $P(B) = 1/6$", isCorrect: true },
                    { text: "$A \\cap B = \\{(3,4),(3,5),(3,6)\\}$, de cardinal 3", isCorrect: true },
                    { text: "$P(A|B) = 1/6$", isCorrect: false }
                ],
                explanation: "Avec $\\Omega = \\{1,\\dots,6\\}^2$ équiprobable, $B=\\{(3,j): j\\in\\{1,\\dots,6\\}\\}$ a pour cardinal 6, donc $P(B)=6/36=1/6$. $A\\cap B = \\{(3,4),(3,5),(3,6)\\}$ (sommes 7,8,9 > 6), de cardinal 3, donc $P(A\\cap B) = 3/36 = 1/12$. Ainsi $P(A|B) = (1/12)/(1/6) = 1/2$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Système complet", "Probabilités totales"],
                q: "Qu'est-ce qu'un système complet d'évènements $(B_i)_{i \\in I}$ ?",
                options: [
                    { text: "Une famille d'évènements deux-à-deux disjoints dont la réunion vaut $\\Omega$", isCorrect: true },
                    { text: "C'est-à-dire une partition de $\\Omega$", isCorrect: true },
                    { text: "Une famille d'évènements indépendants", isCorrect: false },
                    { text: "Une famille d'évènements dont l'intersection vaut $\\Omega$", isCorrect: false }
                ],
                explanation: "La Définition 2.6 précise que $(B_i)_{i\\in I}$ forme un système complet d'évènements (une partition de $\\Omega$) si les $B_i$ sont deux-à-deux disjoints et $\\bigcup_{i\\in I} B_i = \\Omega$. Cette notion n'a aucun rapport direct avec l'indépendance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Formule des probabilités totales"],
                q: "Soit $(B_i)_{i\\in I}$ un système complet d'évènements avec $P(B_i) > 0$ pour tout $i$. Quelle est la formule des probabilités totales pour $A \\in \\mathcal{F}$ ?",
                options: [
                    { text: "$P(A) = \\sum_{i \\in I} P(A|B_i)\\, P(B_i)$", isCorrect: true },
                    { text: "$P(A) = \\sum_{i \\in I} P(A \\cap B_i)$", isCorrect: true },
                    { text: "$P(A) = \\prod_{i \\in I} P(A|B_i)$", isCorrect: false },
                    { text: "$P(A) = \\max_{i \\in I} P(A|B_i)$", isCorrect: false }
                ],
                explanation: "Le Théorème 2.7 établit que $A = \\bigcup_{i\\in I}(A\\cap B_i)$ (réunion disjointe car les $B_i$ le sont), d'où par σ-additivité $P(A) = \\sum_i P(A\\cap B_i)$, et en utilisant $P(A\\cap B_i) = P(A|B_i)P(B_i)$, on obtient la forme usuelle de la formule.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Formule de Bayes"],
                q: "Sous les hypothèses de la formule des probabilités totales et si $P(A) > 0$, quelle est la formule de Bayes pour $P(B_i|A)$ ?",
                options: [
                    { text: "$P(B_i|A) = \\dfrac{P(A|B_i)\\,P(B_i)}{\\sum_{j \\in I} P(A|B_j)\\,P(B_j)}$", isCorrect: true },
                    { text: "Le dénominateur est obtenu en appliquant la formule des probabilités totales à $P(A)$", isCorrect: true },
                    { text: "$P(B_i|A) = P(A|B_i)$", isCorrect: false },
                    { text: "$P(B_i|A) = \\dfrac{P(B_i)}{P(A)}$", isCorrect: false }
                ],
                explanation: "La formule de Bayes « inverse » le conditionnement : elle exprime $P(B_i|A)$ en fonction des $P(A|B_j)$. Elle se démontre en écrivant $P(B_i|A) = P(B_i \\cap A)/P(A) = P(A|B_i)P(B_i)/P(A)$, puis en remplaçant $P(A)$ par la formule des probabilités totales.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Paradoxe de Simpson"],
                q: "Que met en évidence le paradoxe de Simpson illustré par l'exemple des traitements de calculs rénaux ?",
                options: [
                    { text: "Une comparaison globale entre deux traitements peut s'inverser lorsqu'on tient compte d'une variable supplémentaire (comme la taille des calculs)", isCorrect: true },
                    { text: "Ce rebroussement provient d'une répartition très différente des tailles de groupes combinés dans les deux populations comparées", isCorrect: true },
                    { text: "Ce paradoxe montre que la formule des probabilités totales est fausse", isCorrect: false },
                    { text: "Le traitement B est toujours objectivement supérieur au traitement A", isCorrect: false }
                ],
                explanation: "Dans l'exemple, le traitement B semble globalement meilleur (83% vs 78%), mais en stratifiant par la taille des calculs, le traitement A est en fait plus efficace dans les deux sous-groupes. Ce paradoxe illustre l'importance de bien utiliser la formule des probabilités totales pour interpréter des données agrégées, et ne remet nullement en cause sa validité.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance", "Définition"],
                q: "Quelle est la définition de l'indépendance de deux évènements $A$ et $B$ ?",
                options: [
                    { text: "$P(A \\cap B) = P(A)\\,P(B)$", isCorrect: true },
                    { text: "$A \\cap B = \\emptyset$", isCorrect: false },
                    { text: "$P(A|B) = P(A)$ (lorsque $P(B) > 0$), ce qui est équivalent à la définition", isCorrect: true },
                    { text: "$P(A \\cup B) = P(A) + P(B)$", isCorrect: false }
                ],
                explanation: "La Définition 2.9 pose $A, B$ indépendants si $P(A\\cap B) = P(A)P(B)$. Quand $P(A), P(B) > 0$, ceci équivaut à $P(A|B) = P(A)$ et $P(B|A) = P(B)$ : l'information de réalisation de B ne modifie pas la vraisemblance de A. L'indépendance n'a rien à voir avec la disjonction des évènements.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance", "Exemples"],
                q: "Les évènements $\\emptyset$ et $\\Omega$ sont-ils toujours indépendants, quelle que soit la probabilité $P$ ?",
                options: [
                    { text: "Oui, car $P(\\emptyset \\cap \\Omega) = P(\\emptyset) = 0$ et $P(\\emptyset)P(\\Omega) = 0 \\times 1 = 0$", isCorrect: true },
                    { text: "Non, cela dépend de la probabilité choisie", isCorrect: false },
                    { text: "Ce résultat illustre que l'indépendance n'implique pas la disjonction (ici $\\emptyset \\cap \\Omega = \\emptyset$ mais aussi $\\emptyset \\subset \\Omega$)", isCorrect: false },
                    { text: "Non, car $\\emptyset$ a une probabilité nulle donc n'est jamais indépendant d'un autre évènement", isCorrect: false }
                ],
                explanation: "$P(\\emptyset \\cap \\Omega) = P(\\emptyset) = 0 = P(\\emptyset) \\cdot P(\\Omega)$ pour toute probabilité $P$ (puisque $P(\\emptyset)=0$ toujours). Cette égalité est vraie systématiquement, indépendamment du choix de $P$. Un évènement de probabilité 0 (ou 1) est toujours indépendant de tout autre évènement.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance", "Nature de la notion"],
                q: "Quelles affirmations sur la nature de la notion d'indépendance sont correctes ?",
                options: [
                    { text: "L'indépendance est liée au choix de la probabilité $P$, ce n'est pas une notion purement ensembliste", isCorrect: true },
                    { text: "Deux évènements indépendants peuvent avoir une intersection non vide", isCorrect: true },
                    { text: "Deux évènements disjoints (incompatibles) et de probabilité strictement positive sont toujours indépendants", isCorrect: false },
                    { text: "L'indépendance équivaut toujours à la disjonction des évènements", isCorrect: false }
                ],
                explanation: "La Remarque 2.11 souligne que l'indépendance dépend du choix de $P$ et n'a rien à voir avec la disjonction ensembliste. Au contraire, si $A$ et $B$ sont disjoints avec $P(A), P(B) > 0$, alors $P(A\\cap B) = 0 \\neq P(A)P(B) > 0$ : ils ne sont donc jamais indépendants dans ce cas.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance", "Exemple dé"],
                q: "On jette un dé équilibré. Soit $A$ = « obtenir 1, 2 ou 3 » et $B$ = « obtenir 1, 2, 4 ou 5 ». $A$ et $B$ sont-ils indépendants ?",
                options: [
                    { text: "Oui, car $P(A\\cap B) = P(\\{1,2\\}) = 1/3 = P(A) \\cdot P(B) = (1/2)(2/3)$", isCorrect: true },
                    { text: "Non, car $A \\cap B \\neq \\emptyset$", isCorrect: false },
                    { text: "$P(A) = 1/2$ et $P(B) = 2/3$", isCorrect: true },
                    { text: "Non, car $A$ et $B$ ont des cardinaux différents", isCorrect: false }
                ],
                explanation: "$P(A) = 3/6 = 1/2$, $P(B) = 4/6 = 2/3$, $A \\cap B = \\{1,2\\}$ donc $P(A\\cap B) = 2/6 = 1/3$. On vérifie $P(A)P(B) = (1/2)(2/3) = 1/3 = P(A\\cap B)$ : les évènements sont bien indépendants, malgré une intersection non vide — ce qui illustre justement que disjonction et indépendance sont des notions distinctes.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance", "Propriétés"],
                q: "Si $A$ et $B$ sont des évènements indépendants, quelles paires d'évènements sont également indépendantes ?",
                options: [
                    { text: "$A^c$ et $B$", isCorrect: true },
                    { text: "$A$ et $B^c$", isCorrect: true },
                    { text: "$A^c$ et $B^c$", isCorrect: true },
                    { text: "Seule la paire originale $A, B$ est garantie indépendante ; les complémentaires ne le sont pas nécessairement", isCorrect: false }
                ],
                explanation: "La Proposition 2.12 démontre que si $A$ et $B$ sont indépendants, alors $A^c$ et $B$, $A$ et $B^c$, ainsi que $A^c$ et $B^c$ le sont aussi. La démonstration clé utilise $P(A^c \\cap B) = P(B) - P(A\\cap B) = P(B)(1-P(A)) = P(B)P(A^c)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance mutuelle"],
                q: "Quelle est la définition de l'indépendance mutuelle d'une famille d'évènements $(A_i)_{i \\in I}$ ?",
                options: [
                    { text: "Pour toute partie finie $K \\subset I$, $P\\left(\\bigcap_{i \\in K} A_i\\right) = \\prod_{i \\in K} P(A_i)$", isCorrect: true },
                    { text: "Il suffit que $P(A_i \\cap A_j) = P(A_i)P(A_j)$ pour tout $i \\neq j$", isCorrect: false },
                    { text: "Cette condition doit être vérifiée pour TOUTE sous-famille finie, pas seulement la famille entière", isCorrect: true },
                    { text: "Il suffit que $\\bigcap_{i \\in I} A_i \\neq \\emptyset$", isCorrect: false }
                ],
                explanation: "La Définition 2.13 exige l'égalité du produit pour toute partie finie $K$ de $I$, ce qui est une condition bien plus forte que la simple indépendance deux-à-deux (qui ne teste que les paires). C'est précisément cette distinction que met en évidence l'Exemple 2.14.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance mutuelle", "Deux-à-deux"],
                q: "Quelle relation existe-t-il entre l'indépendance mutuelle et l'indépendance deux-à-deux d'une famille d'évènements ?",
                options: [
                    { text: "L'indépendance mutuelle implique l'indépendance deux-à-deux", isCorrect: true },
                    { text: "L'indépendance deux-à-deux n'implique pas en général l'indépendance mutuelle", isCorrect: true },
                    { text: "Ces deux notions sont toujours équivalentes", isCorrect: false },
                    { text: "L'indépendance deux-à-deux est une condition plus forte que l'indépendance mutuelle", isCorrect: false }
                ],
                explanation: "L'indépendance mutuelle (produit vrai pour toute sous-famille finie) est strictement plus forte que l'indépendance deux-à-deux (produit vrai seulement pour les paires). L'Exemple 2.14 du cours construit un contre-exemple explicite montrant que l'indépendance deux-à-deux n'entraîne pas l'indépendance mutuelle.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance mutuelle", "Contre-exemple"],
                q: "Dans l'Exemple 2.14 ($\\Omega = \\{1,2,3,4\\}$ équiprobable, $A=\\{1,2\\}$, $B=\\{2,3\\}$, $C=\\{1,3\\}$), pourquoi $A, B, C$ ne sont-ils pas mutuellement indépendants ?",
                options: [
                    { text: "$A \\cap B \\cap C = \\emptyset$ donc $P(A\\cap B\\cap C) = 0$, alors que $P(A)P(B)P(C) = 1/8 \\neq 0$", isCorrect: true },
                    { text: "Ils sont pourtant deux-à-deux indépendants : $P(A\\cap B) = P(A)P(B) = 1/4$", isCorrect: true },
                    { text: "Parce que $A$, $B$ et $C$ sont deux-à-deux disjoints", isCorrect: false },
                    { text: "Parce que $P(A) \\neq P(B) \\neq P(C)$", isCorrect: false }
                ],
                explanation: "On a $P(A)=P(B)=P(C)=1/2$, et $P(A\\cap B)=P(B\\cap C)=P(A\\cap C)=1/4=P(A)P(B)$ etc., donc les trois paires sont bien indépendantes deux-à-deux. Mais $A\\cap B\\cap C = \\emptyset$, donc $P(A\\cap B\\cap C)=0$ alors que $P(A)P(B)P(C)=1/8$ : la condition d'indépendance mutuelle échoue pour la famille entière.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Borel-Cantelli", "lim sup", "lim inf"],
                q: "Soit $(A_n)_{n\\geq1}$ une suite d'évènements. Comment sont définis $\\limsup_n A_n$ et $\\liminf_n A_n$ ?",
                options: [
                    { text: "$\\limsup_n A_n = \\bigcap_{k\\geq1}\\bigcup_{n\\geq k} A_n$, l'ensemble des $\\omega$ appartenant à une infinité de $A_n$", isCorrect: true },
                    { text: "$\\liminf_n A_n = \\bigcup_{k\\geq1}\\bigcap_{n\\geq k} A_n$, l'ensemble des $\\omega$ appartenant à tous les $A_n$ à partir d'un certain rang", isCorrect: true },
                    { text: "$\\limsup_n A_n$ et $\\liminf_n A_n$ n'appartiennent pas nécessairement à $\\mathcal{F}$", isCorrect: false },
                    { text: "$\\limsup_n A_n = \\bigcup_{k\\geq1}\\bigcap_{n\\geq k} A_n$", isCorrect: false }
                ],
                explanation: "La Définition 2.15 donne ces formules précises. Comme $\\limsup A_n$ et $\\liminf A_n$ sont des intersections et réunions dénombrables d'évènements de $\\mathcal{F}$, ils appartiennent bien à $\\mathcal{F}$ (stabilité de la tribu par ces opérations).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Borel-Cantelli", "Théorème"],
                q: "Quel est le premier point du lemme de Borel-Cantelli ?",
                options: [
                    { text: "Si $\\sum_{n\\geq1} P(A_n) < \\infty$, alors $P(\\limsup_n A_n) = 0$", isCorrect: true },
                    { text: "Ce résultat ne nécessite aucune hypothèse d'indépendance des $A_n$", isCorrect: true },
                    { text: "Cela signifie que presque sûrement, un nombre fini seulement de $A_n$ sont réalisés", isCorrect: true },
                    { text: "Ce point nécessite que les $A_n$ soient indépendants", isCorrect: false }
                ],
                explanation: "Le Théorème 2.17, Point 1, est valable sans aucune hypothèse d'indépendance : si la série des probabilités converge, alors presque sûrement seul un nombre fini de $A_n$ se réalisent. C'est le Point 2 (réciproque partielle) qui nécessite l'indépendance des $(A_n)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Borel-Cantelli", "Théorème"],
                q: "Quel est le second point du lemme de Borel-Cantelli, et quelle hypothèse supplémentaire nécessite-t-il ?",
                options: [
                    { text: "Si les $(A_n)$ sont indépendants et $\\sum_{n\\geq1} P(A_n) = \\infty$, alors $P(\\limsup_n A_n) = 1$", isCorrect: true },
                    { text: "Il nécessite l'hypothèse d'indépendance de la suite $(A_n)_{n\\geq1}$", isCorrect: true },
                    { text: "Cela signifie que presque sûrement une infinité de $A_n$ sont réalisés", isCorrect: true },
                    { text: "Ce point est valable même sans hypothèse d'indépendance, comme le premier point", isCorrect: false }
                ],
                explanation: "Le Point 2 du Théorème 2.17 est une réciproque partielle qui, contrairement au Point 1, nécessite l'indépendance des évènements $(A_n)$. Sous cette hypothèse, si la série des probabilités diverge, alors presque sûrement une infinité de $A_n$ sont réalisés.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Borel-Cantelli", "Démonstration"],
                q: "Dans la démonstration du Point 1 du lemme de Borel-Cantelli, quelle inégalité clé est utilisée ?",
                options: [
                    { text: "La sous-additivité : $P(\\bigcup_{n\\geq k} A_n) \\leq \\sum_{n\\geq k} P(A_n)$", isCorrect: true },
                    { text: "La continuité décroissante : $P(\\limsup_n A_n) = \\lim_{k\\to\\infty} P(B_k)$ où $B_k = \\bigcup_{n\\geq k} A_n$", isCorrect: true },
                    { text: "L'inégalité $1-x \\leq e^{-x}$", isCorrect: false },
                    { text: "La formule de Bayes", isCorrect: false }
                ],
                explanation: "La démonstration du Point 1 pose $B_k = \\bigcup_{n\\geq k} A_n$ (suite décroissante), utilise la continuité décroissante de $P$ (Proposition 1.13, Point 3) pour écrire $P(\\limsup A_n) = \\lim_k P(B_k)$, puis borne $P(B_k)$ par sous-additivité. L'inégalité $1-x\\leq e^{-x}$ est utilisée dans la démonstration du Point 2, pas du Point 1.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité produit", "Tribu produit"],
                q: "Pour $k$ espaces probabilisés $(\\Omega_1,\\mathcal{F}_1,P_1),\\dots,(\\Omega_k,\\mathcal{F}_k,P_k)$ indépendants, comment est construite la probabilité produit sur $\\Omega = \\Omega_1 \\times \\dots \\times \\Omega_k$ ?",
                options: [
                    { text: "Sur la tribu produit $\\mathcal{F} = \\mathcal{F}_1 \\otimes \\dots \\otimes \\mathcal{F}_k$, on pose $P(A_1\\times\\dots\\times A_k) = P_1(A_1)\\dots P_k(A_k)$ sur les pavés", isCorrect: true },
                    { text: "La tribu produit est la tribu engendrée par les pavés $A_1 \\times \\dots \\times A_k$ avec $A_n \\in \\mathcal{F}_n$", isCorrect: true },
                    { text: "Cette définition sur les pavés suffit, en général, à caractériser entièrement la probabilité produit sur toute la tribu", isCorrect: true },
                    { text: "On additionne les probabilités $P_1(A_1) + \\dots + P_k(A_k)$", isCorrect: false }
                ],
                explanation: "La probabilité produit est définie sur les pavés (produits cartésiens d'évènements) par le produit des probabilités individuelles. En référence à la Section 1.4 (résultat de caractérisation par un π-système générateur), cela suffit à déterminer entièrement la probabilité produit sur toute la tribu produit.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Probabilité produit", "Cas dénombrable"],
                q: "Dans le cas d'un nombre dénombrable infini d'espaces probabilisés, comment est définie la tribu produit (tribu des cylindres) ?",
                options: [
                    { text: "C'est la tribu engendrée par les produits cartésiens finis d'évènements des tribus $(\\mathcal{F}_n)_{n\\geq1}$", isCorrect: true },
                    { text: "Elle contient tous les évènements de la forme $A_1 \\times \\dots \\times A_k \\times \\Omega_{k+1} \\times \\Omega_{k+2} \\times \\dots$", isCorrect: true },
                    { text: "L'existence et l'unicité de la probabilité produit associée sont admises (démontrées en théorie de la mesure)", isCorrect: true },
                    { text: "C'est simplement $\\mathcal{P}(\\Omega)$ où $\\Omega = \\prod_{n\\geq1} \\Omega_n$", isCorrect: false }
                ],
                explanation: "La tribu des cylindres est engendrée par les produits cartésiens finis d'évènements, où seules un nombre fini de coordonnées sont contraintes (les autres valant $\\Omega_n$ tout entier). L'existence et l'unicité de la probabilité produit vérifiant $P(A_1\\times\\dots\\times A_k\\times\\Omega_{k+1}\\times\\dots) = \\prod_{n=1}^k P_n(A_n)$ sont admises, renvoyées au cours de théorie de la mesure.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Synthèse", "Indépendance", "Conditionnement"],
                q: "Parmi les affirmations suivantes concernant conditionnement et indépendance, lesquelles sont vraies ?",
                options: [
                    { text: "Si $A$ et $B$ sont indépendants et $P(B) > 0$, alors $P(A|B) = P(A)$", isCorrect: true },
                    { text: "La formule des probabilités totales nécessite un système complet d'évènements de probabilité strictement positive", isCorrect: true },
                    { text: "La probabilité conditionnelle $P(\\cdot|B)$ ne satisfait pas nécessairement l'axiome de σ-additivité", isCorrect: false },
                    { text: "Deux évènements incompatibles ($A\\cap B=\\emptyset$) de probabilités strictement positives sont automatiquement indépendants", isCorrect: false }
                ],
                explanation: "Ces deux dernières affirmations sont fausses : le Lemme 2.2 montre que $P(\\cdot|B)$ est bien une probabilité complète, satisfaisant la σ-additivité ; et deux évènements incompatibles de probabilité strictement positive ne sont jamais indépendants car $P(A\\cap B)=0 \\neq P(A)P(B)>0$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Borel-Cantelli", "Application"],
                q: "On lance une infinité de fois une pièce équilibrée de façon indépendante et on note $A_n$ l'évènement « le $n$-ième lancer donne pile ». Que peut-on dire de $\\limsup_n A_n$ ?",
                options: [
                    { text: "$\\sum_{n\\geq1} P(A_n) = \\sum_{n\\geq1} 1/2 = +\\infty$", isCorrect: true },
                    { text: "Comme les $A_n$ sont indépendants et la série diverge, le Point 2 de Borel-Cantelli donne $P(\\limsup_n A_n) = 1$", isCorrect: true },
                    { text: "Presque sûrement, on obtient pile une infinité de fois", isCorrect: true },
                    { text: "Le lemme de Borel-Cantelli ne peut pas s'appliquer ici car $P(A_n)$ ne tend pas vers 0", isCorrect: false }
                ],
                explanation: "Ici $P(A_n) = 1/2$ pour tout $n$, donc $\\sum P(A_n) = \\infty$. Les lancers étant indépendants, le Point 2 du lemme de Borel-Cantelli s'applique directement (aucune condition sur la limite de $P(A_n)$ n'est requise) et donne $P(\\limsup_n A_n)=1$ : presque sûrement, pile apparaît une infinité de fois.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Borel-Cantelli", "Application"],
                q: "Soit $(A_n)_{n\\geq1}$ des évènements (non nécessairement indépendants) tels que $P(A_n) = 1/n^2$. Que peut-on conclure sur $\\limsup_n A_n$ ?",
                options: [
                    { text: "$\\sum_{n\\geq1} 1/n^2 = \\pi^2/6 < \\infty$, la série converge", isCorrect: true },
                    { text: "D'après le Point 1 du lemme de Borel-Cantelli, $P(\\limsup_n A_n) = 0$", isCorrect: true },
                    { text: "Presque sûrement, seul un nombre fini de $A_n$ sont réalisés", isCorrect: true },
                    { text: "On ne peut rien conclure sans savoir si les $A_n$ sont indépendants", isCorrect: false }
                ],
                explanation: "Le Point 1 du lemme de Borel-Cantelli ne requiert aucune hypothèse d'indépendance : dès que $\\sum P(A_n) < \\infty$ (ici la série de Riemann convergente $\\sum 1/n^2$), on peut conclure directement que $P(\\limsup_n A_n) = 0$, c'est-à-dire que presque sûrement un nombre fini seulement des $A_n$ se réalisent.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    },
    "Probabilités : Chapitre 3 - Variables aléatoires": {
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Variable aléatoire", "Définition"],
                q: "Comment est définie une variable aléatoire $X$ de $(\\Omega, \\mathcal{F})$ dans $(E, \\mathcal{E})$ ?",
                options: [
                    { text: "Une application qui vérifie $\\forall B \\in \\mathcal{E}, X^{-1}(B) = \\{X \\in B\\} \\in \\mathcal{F}$", isCorrect: true },
                    { text: "Une application mesurable préservant les structures de tribus respectives", isCorrect: true },
                    { text: "Une application nécessairement bijective de $\\Omega$ dans $E$", isCorrect: false },
                    { text: "Une application qui associe à chaque évènement un nombre réel", isCorrect: false }
                ],
                explanation: "La Définition 3.1 exige que l'image réciproque de tout borélien $B \\in \\mathcal{E}$ soit un élément de $\\mathcal{F}$ : c'est la notion d'application mesurable. La notation $X^{-1}$ n'a aucun rapport avec la bijectivité (Remarque 3.2) : elle désigne simplement l'image réciproque d'une partie.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable aléatoire", "Loi"],
                q: "Qu'est-ce que la loi $P_X$ d'une variable aléatoire $X$, et quelle propriété fondamentale possède-t-elle ?",
                options: [
                    { text: "$P_X(B) := P(X^{-1}(B)) = P(\\{X \\in B\\})$ pour tout $B \\in \\mathcal{E}$", isCorrect: true },
                    { text: "C'est une probabilité sur l'espace d'arrivée $(E, \\mathcal{E})$", isCorrect: true },
                    { text: "On l'appelle aussi « probabilité image » de $P$", isCorrect: true },
                    { text: "$P_X$ n'est définie que si $X$ est une variable discrète", isCorrect: false }
                ],
                explanation: "La Définition/Proposition 3.3 introduit $P_X$ comme la mesure image, et démontre (en vérifiant les axiomes) que c'est bien une probabilité sur $(E,\\mathcal{E})$, faisant de $(E,\\mathcal{E},P_X)$ un espace probabilisé. Cette construction est générale, pas limitée au cas discret.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable aléatoire", "Notation"],
                q: "Que signifie la notation $X \\sim \\mu$ ?",
                options: [
                    { text: "$X$ a pour loi $\\mu$, c'est-à-dire $P_X = \\mu$", isCorrect: true },
                    { text: "$X$ est indépendante de $\\mu$", isCorrect: false },
                    { text: "$X$ converge vers $\\mu$", isCorrect: false },
                    { text: "$\\mu$ est la valeur moyenne de $X$", isCorrect: false }
                ],
                explanation: "C'est une notation standard rappelée dans la Remarque suivant la Définition 3.3 : $X \\sim \\mu$ signifie simplement que la loi de $X$, notée $P_X$, est égale à la mesure $\\mu$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable aléatoire discrète", "Définition"],
                q: "Qu'est-ce qu'une variable aléatoire discrète, et comment sa loi est-elle caractérisée ?",
                options: [
                    { text: "C'est une variable aléatoire dont l'ensemble d'arrivée $E = \\{x_i\\}_{i\\in I}$ est fini ou dénombrable, muni de $\\mathcal{P}(E)$", isCorrect: true },
                    { text: "Sa loi est caractérisée par la donnée de $P(X = x_i)$ pour tout $i \\in I$", isCorrect: true },
                    { text: "Pour tout $B \\in \\mathcal{P}(E)$, $P_X(B) = \\sum_{x_i \\in B} P(X = x_i)$", isCorrect: true },
                    { text: "Sa loi ne peut être caractérisée que via sa fonction de répartition", isCorrect: false }
                ],
                explanation: "La Définition 3.4 et la Proposition 3.5 précisent ce cadre : $E$ dénombrable/fini muni de $\\mathcal{P}(E)$, et grâce à la Proposition 1.14 (caractérisation d'une probabilité par ses valeurs sur les singletons), la loi $P_X$ est entièrement déterminée par les valeurs $(P(X=x_i))_{i\\in I}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indicatrice", "Propriétés"],
                q: "Soit $A, B \\in \\mathcal{F}$. Quelles identités sur les fonctions indicatrices sont correctes ?",
                options: [
                    { text: "$\\mathbb{I}_{A^c} = 1 - \\mathbb{I}_A$", isCorrect: true },
                    { text: "$\\mathbb{I}_{A \\cap B} = \\mathbb{I}_A \\cdot \\mathbb{I}_B$", isCorrect: true },
                    { text: "$\\mathbb{I}_{A \\cup B} = \\mathbb{I}_A + \\mathbb{I}_B - \\mathbb{I}_{A \\cap B}$", isCorrect: true },
                    { text: "$\\mathbb{I}_{A \\cup B} = \\mathbb{I}_A + \\mathbb{I}_B$ en toute généralité", isCorrect: false }
                ],
                explanation: "Ces trois identités sont rappelées dans l'Exemple 3.6. La dernière n'est vraie que si $A$ et $B$ sont disjoints ; en général il faut soustraire $\\mathbb{I}_{A\\cap B}$ pour ne pas compter deux fois les éléments communs (analogue de la formule du crible).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indicatrice", "Loi"],
                q: "Quelle est la loi de l'indicatrice $\\mathbb{I}_A$ d'un évènement $A \\in \\mathcal{F}$ ?",
                options: [
                    { text: "$P_{\\mathbb{I}_A}(1) = P(A)$", isCorrect: true },
                    { text: "$P_{\\mathbb{I}_A}(0) = 1 - P(A) = P(A^c)$", isCorrect: true },
                    { text: "$\\mathbb{I}_A$ suit une loi de Bernoulli de paramètre $P(A)$", isCorrect: true },
                    { text: "$P_{\\mathbb{I}_A}(1) = P(A^c)$", isCorrect: false }
                ],
                explanation: "L'Exemple 3.6 calcule directement $P_{\\mathbb{I}_A}(1) = P(\\{\\omega : \\mathbb{I}_A(\\omega)=1\\}) = P(A)$ et $P_{\\mathbb{I}_A}(0) = P(A^c) = 1-P(A)$, ce qui est précisément la loi de Bernoulli de paramètre $P(A)$ (Exemple 3.8).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi uniforme discrète"],
                q: "Une variable aléatoire $X$ suit la loi uniforme discrète $\\mathcal{U}(\\{x_1,\\dots,x_n\\})$ si :",
                options: [
                    { text: "$X(\\Omega) = \\{x_1,\\dots,x_n\\}$ et $P_X(x_i) = 1/n$ pour tout $i$", isCorrect: true },
                    { text: "Chaque valeur possible a la même probabilité d'être prise", isCorrect: true },
                    { text: "$P_X(x_i)$ dépend de la position de $i$ dans la liste", isCorrect: false },
                    { text: "$X(\\Omega)$ doit être un sous-ensemble de $\\mathbb{N}$", isCorrect: false }
                ],
                explanation: "La loi uniforme discrète attribue la même probabilité $1/n$ à chacune des $n$ valeurs possibles $x_1,\\dots,x_n$, qui n'ont pas besoin d'être des entiers (l'Exemple 3.7 utilise $\\{-1,1\\}$).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi binomiale", "Schéma de Bernoulli"],
                q: "Dans un schéma de Bernoulli de paramètres $n$ et $p$ (n répétitions indépendantes d'une épreuve de Bernoulli de paramètre $p$), quelle est la loi du nombre de succès $X$ ?",
                options: [
                    { text: "$X$ suit une loi binomiale $\\text{Bin}(n,p)$", isCorrect: true },
                    { text: "$P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$ pour $k \\in \\{0,\\dots,n\\}$", isCorrect: true },
                    { text: "$X = \\sum_{i=1}^n \\mathbb{I}_{A_i}$, une somme de $n$ variables de Bernoulli indépendantes de paramètre $p$", isCorrect: true },
                    { text: "$X$ suit une loi géométrique de paramètre $p$", isCorrect: false }
                ],
                explanation: "L'Exemple 3.9 montre que $\\binom{n}{k}$ compte les façons d'obtenir $k$ succès parmi $n$ épreuves indépendantes, chacune de probabilité $p^k(1-p)^{n-k}$, et interprète $X$ comme la somme des indicatrices des succès individuels : $X=\\sum_{i=1}^n \\mathbb{I}_{A_i}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi binomiale", "Somme de variables"],
                q: "Si $X_1$ suit une loi binomiale $\\text{Bin}(n,p)$ et $X_2$ suit une loi binomiale $\\text{Bin}(m,p)$, et que $X_1$ et $X_2$ sont indépendantes, quelle est la loi de $X_1+X_2$ ?",
                options: [
                    { text: "$X_1 + X_2$ suit une loi binomiale $\\text{Bin}(n+m, p)$", isCorrect: true },
                    { text: "$X_1 + X_2$ suit une loi binomiale $\\text{Bin}(nm, p)$", isCorrect: false },
                    { text: "Ce résultat s'explique car $X_1$ et $X_2$ sont chacune des sommes de Bernoulli indépendantes de même paramètre $p$", isCorrect: true },
                    { text: "$X_1+X_2$ ne suit aucune loi connue en général", isCorrect: false }
                ],
                explanation: "Le cours (remarque après l'Exemple 3.9) indique que la somme de variables binomiales indépendantes de même paramètre $p$ mais de nombres d'épreuves différents reste binomiale, avec les paramètres d'épreuves qui s'additionnent : $\\text{Bin}(n,p) + \\text{Bin}(m,p) = \\text{Bin}(n+m,p)$. L'intuition vient de la représentation comme sommes d'indicatrices de Bernoulli indépendantes.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi géométrique"],
                q: "Une variable aléatoire $X$ suit une loi géométrique $\\mathcal{G}(p)$ si :",
                options: [
                    { text: "$X(\\Omega) = \\mathbb{N}^*$ et $P_X(k) = (1-p)^{k-1} p$ pour tout $k \\in \\mathbb{N}^*$", isCorrect: true },
                    { text: "Elle modélise le temps d'attente jusqu'au premier succès dans un schéma de Bernoulli répété indéfiniment", isCorrect: true },
                    { text: "$P_X(k) = \\binom{k}{p}(1-p)^{k}$", isCorrect: false },
                    { text: "$X(\\Omega)$ est nécessairement fini", isCorrect: false }
                ],
                explanation: "L'Exemple 3.10 démontre précisément que $X$ = « rang du premier succès » dans une suite indéfinie d'épreuves de Bernoulli indépendantes suit la loi géométrique $\\mathcal{G}(p)$ : pour obtenir succès au $k$-ième essai, il faut $k-1$ échecs suivis d'un succès, d'où $P(X=k)=(1-p)^{k-1}p$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi de Poisson"],
                q: "Une variable aléatoire $X$ suit une loi de Poisson $\\mathcal{P}(\\lambda)$ (avec $\\lambda > 0$) si :",
                options: [
                    { text: "$X(\\Omega) = \\mathbb{N}$ et $P_X(k) = e^{-\\lambda} \\dfrac{\\lambda^k}{k!}$ pour tout $k \\in \\mathbb{N}$", isCorrect: true },
                    { text: "Elle peut modéliser le nombre d'arrivées d'autobus à un arrêt avant un instant $T$ donné", isCorrect: true },
                    { text: "$\\lambda$ représente le nombre moyen d'arrivées dans l'intervalle considéré", isCorrect: true },
                    { text: "Elle ne prend que des valeurs bornées par $\\lambda$", isCorrect: false }
                ],
                explanation: "La définition et l'Exemple 3.11 donnent cette loi et son interprétation classique : le paramètre $\\lambda$ représente le taux moyen d'occurrence d'un phénomène (ici, arrivées d'autobus), et $X$ peut prendre n'importe quelle valeur entière positive, sans borne supérieure.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Convergence binomiale-Poisson"],
                q: "Sous quelles conditions la loi binomiale $\\text{Bin}(n, p_n)$ converge-t-elle vers la loi de Poisson $\\mathcal{P}(\\lambda)$ ?",
                options: [
                    { text: "Lorsque $n \\to +\\infty$, $p_n \\to 0$, et $n\\, p_n \\to \\lambda > 0$", isCorrect: true },
                    { text: "Pour tout $k$ fixé, $P^{X_n}(k) \\to e^{-\\lambda}\\lambda^k/k!$", isCorrect: true },
                    { text: "Cette convergence nécessite que $p_n$ reste constant et égal à $p$", isCorrect: false },
                    { text: "Cette convergence est valable uniquement lorsque $n$ est pair", isCorrect: false }
                ],
                explanation: "La Proposition 3.12 énonce précisément ce résultat de convergence (« loi des évènements rares ») : lorsque $n\\to+\\infty$ et $p_n\\to 0$ de sorte que $np_n \\to \\lambda$, alors pour tout $k$ fixé, la probabilité binomiale converge vers la probabilité de Poisson correspondante. Il s'agit bien d'une suite $(p_n)$ qui varie avec $n$, pas d'un $p$ fixe.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable aléatoire réelle", "Définition"],
                q: "Qu'est-ce qu'une variable aléatoire réelle ?",
                options: [
                    { text: "Une variable aléatoire $X$ de $(\\Omega,\\mathcal{F})$ dans $(E,\\mathcal{E}) = (\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))$", isCorrect: true },
                    { text: "Une variable aléatoire à valeurs dans $\\mathbb{R}$ munie de la tribu borélienne", isCorrect: true },
                    { text: "Toute application de $\\Omega$ dans $\\mathbb{R}$, sans condition supplémentaire", isCorrect: false },
                    { text: "Une variable aléatoire qui prend nécessairement une infinité de valeurs", isCorrect: false }
                ],
                explanation: "La Définition 3.13 précise le cas particulier où l'espace d'arrivée est $(\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))$. Il ne suffit pas d'être une simple application de $\\Omega$ dans $\\mathbb{R}$ : il faut vérifier la mesurabilité, c'est-à-dire que l'image réciproque de tout borélien appartient à $\\mathcal{F}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable aléatoire réelle", "Critère de mesurabilité"],
                q: "Pour montrer qu'une application $X : \\Omega \\to \\mathbb{R}$ est une variable aléatoire réelle, quel critère suffisant peut-on utiliser (Remarque 3.14) ?",
                options: [
                    { text: "Il suffit de montrer que pour tout $x \\in \\mathbb{R}$, $X^{-1}(]-\\infty,x]) \\in \\mathcal{F}$", isCorrect: true },
                    { text: "Ce critère fonctionne car $\\mathcal{B}(\\mathbb{R})$ est la plus petite tribu contenant les intervalles $]-\\infty,x]$", isCorrect: true },
                    { text: "Il faut vérifier la condition pour tous les boréliens de $\\mathbb{R}$ un par un", isCorrect: false },
                    { text: "Ce critère nécessite en plus que $X$ soit continue", isCorrect: false }
                ],
                explanation: "La démonstration de la Remarque 3.14 construit l'ensemble $G = \\{B \\in \\mathcal{B}(\\mathbb{R}) : X^{-1}(B) \\in \\mathcal{F}\\}$, montre que c'est une tribu contenant les $]-\\infty,x]$, donc contenant $\\mathcal{B}(\\mathbb{R})$ tout entier (car cette dernière est la plus petite tribu engendrée par ces intervalles). Ce critère évite de tester tous les boréliens un par un et ne requiert aucune continuité de $X$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable aléatoire réelle", "Opérations"],
                q: "Si $X_1,\\dots,X_n$ sont des variables aléatoires réelles et $f: \\mathbb{R}^n \\to \\mathbb{R}$ est continue, que peut-on dire de $Y = f(X_1,\\dots,X_n)$ (Proposition 3.15) ?",
                options: [
                    { text: "$Y$ est également une variable aléatoire réelle", isCorrect: true },
                    { text: "En conséquence, $X+Y$, $XY$, et $X/Y$ (si $Y\\neq0$) sont des variables aléatoires réelles", isCorrect: true },
                    { text: "$\\sup_{1\\leq n\\leq k} X_n$, $\\liminf_{n\\geq1} X_n$ sont aussi des variables aléatoires réelles", isCorrect: true },
                    { text: "Ce résultat n'est vrai que si $f$ est linéaire", isCorrect: false }
                ],
                explanation: "La Proposition 3.15 exige seulement la continuité de $f$, pas la linéarité. Le Corollaire 3.16 en tire les conséquences pour les opérations usuelles (somme, produit, quotient) ainsi que pour sup/inf finis et infinis, limsup/liminf, et la limite lorsqu'elle est bien définie.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Fonction de répartition", "Définition"],
                q: "Comment est définie la fonction de répartition $F^X$ d'une variable aléatoire réelle $X$ ?",
                options: [
                    { text: "$F^X(x) = P_X(]-\\infty,x]) = P(X \\leq x)$ pour tout $x \\in \\mathbb{R}$", isCorrect: true },
                    { text: "$F^X(x) = P(X < x)$", isCorrect: false },
                    { text: "$F^X(x) = P(X = x)$", isCorrect: false },
                    { text: "$F^X$ prend ses valeurs dans $[0,1]$", isCorrect: true }
                ],
                explanation: "La Définition 3.17 pose $F^X(x) = P(X\\leq x)$, avec l'inégalité large. Comme $F^X$ est une probabilité d'un évènement, elle prend nécessairement ses valeurs dans $[0,1]$. La confusion fréquente est d'utiliser $P(X<x)$ (inégalité stricte), qui ne coïncide pas toujours avec $F^X(x)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Fonction de répartition", "Propriétés"],
                q: "Quelles sont les trois propriétés fondamentales de toute fonction de répartition $F^X$ (Proposition 3.18) ?",
                options: [
                    { text: "Elle est croissante", isCorrect: true },
                    { text: "Elle est continue à droite", isCorrect: true },
                    { text: "$\\lim_{x\\to-\\infty} F^X(x) = 0$ et $\\lim_{x\\to+\\infty} F^X(x) = 1$", isCorrect: true },
                    { text: "Elle est nécessairement continue en tout point", isCorrect: false }
                ],
                explanation: "$F^X$ vérifie croissance, continuité à droite (mais pas nécessairement à gauche : elle peut avoir des sauts, comme pour les variables discrètes) et les limites 0/1 aux infinis. Ces trois propriétés caractérisent entièrement les fonctions de répartition possibles (Théorème 3.21).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Fonction de répartition", "Caractérisation de la loi"],
                q: "En quel sens la fonction de répartition $F^X$ caractérise-t-elle la loi $P_X$ ?",
                options: [
                    { text: "Deux variables aléatoires ont même loi si et seulement si elles ont même fonction de répartition", isCorrect: true },
                    { text: "Ce résultat s'appuie sur le fait qu'une probabilité sur $(\\mathbb{R},\\mathcal{B}(\\mathbb{R}))$ est déterminée par ses valeurs sur les $]-\\infty,x]$", isCorrect: true },
                    { text: "Cette caractérisation est une conséquence du lemme de classe monotone", isCorrect: true },
                    { text: "Deux variables ayant même fonction de répartition ont nécessairement même valeur presque sûrement", isCorrect: false }
                ],
                explanation: "La Proposition 3.18 affirme cette équivalence. Le sens facile est direct (même loi ⟹ même $F^X$) ; l'autre sens s'appuie sur le résultat de caractérisation par un π-système générateur mentionné en Section 1.4, conséquence du lemme de classe monotone. Attention : « même loi » ne signifie pas « même valeur presque sûrement », deux variables aléatoires distinctes peuvent avoir la même loi sans être égales.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Fonction de répartition", "Formules"],
                q: "Soit $x < y$ deux réels. Quelles formules impliquant $F^X$ et sa limite à gauche $F^X(x^-)$ sont correctes ?",
                options: [
                    { text: "$P(X > x) = 1 - F^X(x)$", isCorrect: true },
                    { text: "$P(x < X \\leq y) = F^X(y) - F^X(x)$", isCorrect: true },
                    { text: "$P(X = x) = F^X(x) - F^X(x^-)$", isCorrect: true },
                    { text: "$P(x < X < y) = F^X(y) - F^X(x)$", isCorrect: false }
                ],
                explanation: "La Proposition 3.19 donne ces formules. Attention à la dernière : $P(x<X<y)$ utilise la limite à gauche en $y$, soit $F^X(y^-) - F^X(x)$, et non $F^X(y)$, car il faut exclure la masse ponctuelle éventuelle en $y$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Fonction de répartition", "Continuité"],
                q: "Quel est le lien entre la continuité de $F^X$ en un point $x$ et la probabilité $P(X=x)$ (Corollaire 3.20) ?",
                options: [
                    { text: "$P(X=x) = 0 \\iff F^X$ est continue en $x$", isCorrect: true },
                    { text: "$F^X$ admet toujours une limite à gauche en tout point (même si elle n'y est pas continue)", isCorrect: true },
                    { text: "$P(X=x) > 0$ signifie que $F^X$ présente un saut de hauteur $P(X=x)$ en $x$", isCorrect: true },
                    { text: "$F^X$ est toujours continue en tout point où $X$ est une variable discrète", isCorrect: false }
                ],
                explanation: "Ce corollaire découle directement du Point 7 de la Proposition 3.19 : $P(X=x) = F^X(x) - F^X(x^-)$. Ainsi la masse ponctuelle en $x$ correspond exactement à la taille du saut de $F^X$ en ce point. Pour une variable discrète, $F^X$ a des sauts précisément aux points de $X(\\Omega)$, donc n'y est justement PAS continue.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Fonction de répartition", "Théorème de caractérisation"],
                q: "Que dit le Théorème 3.21 sur les fonctions satisfaisant les propriétés 1 à 3 de la Proposition 3.18 (croissance, continuité à droite, limites 0/1) ?",
                options: [
                    { text: "Toute fonction $F$ ayant ces propriétés est la fonction de répartition d'une loi $\\mu$ sur $(\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))$", isCorrect: true },
                    { text: "On ne peut pas en général définir $\\mu$ sur la tribu $\\mathcal{P}(\\mathbb{R})$ de toutes les parties de $\\mathbb{R}$", isCorrect: true },
                    { text: "Ce résultat se démontre facilement sans outils avancés", isCorrect: false },
                    { text: "Ce théorème est une conséquence directe et élémentaire du Corollaire 3.20", isCorrect: false }
                ],
                explanation: "Le Théorème 3.21 est la réciproque de la Proposition 3.18 : c'est un résultat profond de théorie de la mesure (nécessitant la preuve de l'existence d'une mesure de probabilité), énoncé sans démonstration dans ce cours. Il souligne aussi que $\\mathcal{P}(\\mathbb{R})$ est en général trop grande pour porter une telle mesure de manière cohérente.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variables discrètes réelles", "Fonction de répartition"],
                q: "Pour une variable aléatoire $X$ discrète réelle, quelles propriétés de la fonction de répartition $F^X$ sont vraies (Proposition 3.22) ?",
                options: [
                    { text: "$F^X(x) = \\sum_{y \\in X(\\Omega), y \\leq x} P_X(y)$", isCorrect: true },
                    { text: "Si $x$ et $y$ sont deux points consécutifs de $X(\\Omega)$, $F^X$ est constante sur $[x,y[$", isCorrect: true },
                    { text: "La hauteur du saut en $x \\in X(\\Omega)$ est $P_X(x)$", isCorrect: true },
                    { text: "$F^X$ est une fonction continue dans le cas discret", isCorrect: false }
                ],
                explanation: "Pour une variable discrète, $F^X$ est une fonction en escalier : constante entre deux valeurs consécutives de $X(\\Omega)$ et présentant un saut de hauteur $P_X(x)$ en chaque point $x$ de $X(\\Omega)$. Elle n'est donc jamais continue en ces points (sauf si $P_X(x)=0$, ce qui n'arrive pas pour les valeurs effectivement prises).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Densité de probabilité", "Définition"],
                q: "Quelles conditions doit vérifier une fonction $f : \\mathbb{R} \\to \\mathbb{R}$ pour être une densité de probabilité ?",
                options: [
                    { text: "$f$ est positive", isCorrect: true },
                    { text: "$f$ est intégrable", isCorrect: true },
                    { text: "$\\int_{-\\infty}^{+\\infty} f(x)\\,dx = 1$", isCorrect: true },
                    { text: "$f$ doit être bornée par 1", isCorrect: false }
                ],
                explanation: "La Définition 3.24 exige positivité, intégrabilité, et intégrale totale égale à 1. Contrairement à une confusion fréquente, une densité n'est PAS bornée par 1 : par exemple la densité uniforme sur $[0, 0.5]$ vaut 2 sur cet intervalle.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable à densité", "Propriétés"],
                q: "Si $X$ est une variable aléatoire à densité $f$, quelles propriétés sont vraies (Proposition 3.25) ?",
                options: [
                    { text: "$F^X$ est continue sur $\\mathbb{R}$, donc $P(X=x)=0$ pour tout $x$", isCorrect: true },
                    { text: "$F^X$ est dérivable partout où $f$ est continue, avec $(F^X)'(x) = f(x)$ en ces points", isCorrect: true },
                    { text: "Pour tout intervalle $J$ non réduit à un point, $P(X \\in J) = \\int_J f(x)\\,dx$", isCorrect: true },
                    { text: "Une variable à densité prend nécessairement un nombre fini de valeurs", isCorrect: false }
                ],
                explanation: "Ces propriétés découlent directement de la définition d'une densité via l'intégrale (3.1). Une variable à densité prend au contraire un continuum de valeurs (typiquement un intervalle de $\\mathbb{R}$), ce qui contraste fondamentalement avec le cas discret.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Densité", "Non-unicité"],
                q: "Concernant l'unicité de la densité d'une variable aléatoire, que dit la Remarque 3.26 ?",
                options: [
                    { text: "Si on modifie $f$ en un nombre fini de points, on obtient une autre densité définissant la même variable aléatoire", isCorrect: true },
                    { text: "On devrait parler « d'une » densité plutôt que « de la » densité", isCorrect: true },
                    { text: "Toutes les variables aléatoires discrètes admettent aussi une densité", isCorrect: false },
                    { text: "La densité d'une variable aléatoire est toujours unique", isCorrect: false }
                ],
                explanation: "Modifier une fonction en un nombre fini (ou même dénombrable) de points ne change pas la valeur de son intégrale, donc ne change pas la loi définie. La densité n'est donc pas unique. Les variables discrètes, elles, n'admettent PAS de densité au sens de cette définition (leur loi est portée par un ensemble dénombrable de points, de mesure de Lebesgue nulle).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi uniforme continue"],
                q: "Quelle est la densité de la loi uniforme $\\mathcal{U}([a,b])$ (avec $a<b$) ?",
                options: [
                    { text: "$f(x) = \\dfrac{1}{b-a} \\mathbb{I}_{[a,b]}(x)$", isCorrect: true },
                    { text: "$f(x) = \\dfrac{1}{b-a}$ pour tout $x \\in \\mathbb{R}$", isCorrect: false },
                    { text: "On peut redéfinir $f(a)=0$ et/ou $f(b)=0$ sans changer la loi", isCorrect: true },
                    { text: "$f(x) = b-a$ pour $x \\in [a,b]$", isCorrect: false }
                ],
                explanation: "La densité vaut $1/(b-a)$ uniquement sur $[a,b]$ et $0$ ailleurs (sinon l'intégrale ne vaudrait pas 1 sur un domaine non borné). En vertu de la non-unicité de la densité, on peut modifier les valeurs aux bornes $a$ et $b$ sans changer la loi (ces points ont une mesure de Lebesgue nulle).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi normale", "Gaussienne"],
                q: "Concernant la loi normale (gaussienne) $\\mathcal{N}(\\mu, \\sigma^2)$ de densité $f(x) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$, quelles affirmations sont vraies ?",
                options: [
                    { text: "Si $X \\sim \\mathcal{N}(0,1)$, alors $Y = \\sigma X + \\mu$ suit une loi $\\mathcal{N}(\\mu, \\sigma^2)$", isCorrect: true },
                    { text: "Si $Y \\sim \\mathcal{N}(\\mu,\\sigma^2)$, alors $X = (Y-\\mu)/\\sigma$ suit une loi $\\mathcal{N}(0,1)$", isCorrect: true },
                    { text: "La fonction de répartition de $\\mathcal{N}(0,1)$ se calcule à l'aide des fonctions usuelles", isCorrect: false },
                    { text: "On parle de loi gaussienne « centrée-réduite » lorsque $\\mu=0$ et $\\sigma^2=1$", isCorrect: true }
                ],
                explanation: "Le cours indique explicitement que la fonction de répartition de la loi normale ne se calcule PAS à l'aide des fonctions usuelles (on utilise des tables numériques, avec la relation $\\Pi(x)+\\Pi(-x)=1$). Les relations de standardisation entre $X\\sim\\mathcal{N}(0,1)$ et $Y=\\sigma X+\\mu \\sim \\mathcal{N}(\\mu,\\sigma^2)$ sont vraies et fondamentales.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi exponentielle"],
                q: "Concernant la loi exponentielle $\\mathcal{E}(\\lambda)$ de densité $f(x) = \\lambda e^{-\\lambda x} \\mathbb{I}_{[0,+\\infty[}(x)$, quelles affirmations sont correctes ?",
                options: [
                    { text: "Elle modélise souvent une durée de vie ou un temps d'attente", isCorrect: true },
                    { text: "Elle a la propriété d'être « sans mémoire »", isCorrect: true },
                    { text: "La densité est nulle pour les valeurs négatives", isCorrect: true },
                    { text: "$\\lambda$ représente la variance de la loi", isCorrect: false }
                ],
                explanation: "Le cours décrit précisément ces usages et propriétés de la loi exponentielle. Le paramètre $\\lambda$ est un taux (analogue continu de la loi géométrique), pas directement la variance (qui vaudra en réalité $1/\\lambda^2$, résultat établi au chapitre suivant sur l'espérance).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi de Cauchy"],
                q: "Concernant la loi de Cauchy $\\mathcal{C}(\\lambda)$ de densité $f(x) = \\dfrac{\\lambda}{\\pi(\\lambda^2+x^2)}$, quelles affirmations sont correctes ?",
                options: [
                    { text: "Elle apparaît comme la loi du quotient de deux variables gaussiennes centrées indépendantes de même variance", isCorrect: true },
                    { text: "L'inverse d'une variable de Cauchy suit également une loi de Cauchy", isCorrect: true },
                    { text: "Sa densité est définie sur $\\mathbb{R}$ tout entier (pas seulement sur $[0,+\\infty[$)", isCorrect: true },
                    { text: "Elle est identique à la loi normale centrée réduite", isCorrect: false }
                ],
                explanation: "Le cours présente ces propriétés remarquables de la loi de Cauchy : elle résulte du quotient de deux gaussiennes centrées indépendantes de même variance, et se distingue de la loi normale (elle a des queues beaucoup plus lourdes, et n'admet même pas d'espérance finie).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi du chi carré"],
                q: "Que représente la loi du $\\chi^2$ à $n$ degrés de liberté, notée $\\chi^2(n)$ ?",
                options: [
                    { text: "La loi de la somme des carrés de $n$ variables aléatoires gaussiennes centrées réduites indépendantes", isCorrect: true },
                    { text: "Sa densité est nulle pour les valeurs strictement négatives", isCorrect: true },
                    { text: "Elle correspond à un cas particulier de la loi Gamma, avec $\\alpha = n/2$ et $\\lambda = 1/2$", isCorrect: true },
                    { text: "Elle est la loi du produit de $n$ variables gaussiennes indépendantes", isCorrect: false }
                ],
                explanation: "Le cours définit $\\chi^2(n)$ comme la loi de $\\sum_{i=1}^n Z_i^2$ où les $Z_i$ sont des gaussiennes centrées réduites indépendantes (pas un produit). Sa densité fait intervenir $\\mathbb{I}_{[0,\\infty[}$, donc s'annule pour les valeurs négatives, et elle coïncide avec la loi Gamma$(n/2, 1/2)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi Gamma"],
                q: "Concernant la loi Gamma $\\Gamma(\\alpha,\\lambda)$ de densité $f(x) = \\dfrac{\\lambda^\\alpha}{\\Gamma(\\alpha)} x^{\\alpha-1} e^{-\\lambda x} \\mathbb{I}_{[0,\\infty[}(x)$, quelles affirmations sont vraies ?",
                options: [
                    { text: "Lorsque $\\alpha = 1$, on retrouve la loi exponentielle $\\mathcal{E}(\\lambda)$", isCorrect: true },
                    { text: "Lorsque $\\alpha = n/2$ et $\\lambda = 1/2$, on retrouve la loi $\\chi^2(n)$", isCorrect: true },
                    { text: "La fonction $\\Gamma$ est définie par $\\Gamma(\\alpha) = \\int_0^{+\\infty} x^{\\alpha-1} e^{-x}\\,dx$", isCorrect: true },
                    { text: "La loi Gamma généralise uniquement la loi normale", isCorrect: false }
                ],
                explanation: "La loi Gamma est une famille très générale qui englobe l'exponentielle ($\\alpha=1$) et le $\\chi^2$ ($\\alpha=n/2, \\lambda=1/2$) comme cas particuliers. La fonction $\\Gamma$, définie par cette intégrale généralisée sur $]0,\\infty[$, normalise la densité. Elle n'a pas de lien direct de généralisation avec la loi normale.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Synthèse", "Discret vs densité"],
                q: "Quelles différences fondamentales distinguent une variable aléatoire discrète d'une variable aléatoire à densité ?",
                options: [
                    { text: "Une variable discrète a une fonction de répartition en escalier (sauts), une variable à densité a une fonction de répartition continue", isCorrect: true },
                    { text: "Pour une variable discrète, $P(X=x)$ peut être strictement positif ; pour une variable à densité, $P(X=x)=0$ toujours", isCorrect: true },
                    { text: "Une variable discrète prend ses valeurs dans un ensemble fini ou dénombrable, une variable à densité typiquement dans un intervalle", isCorrect: true },
                    { text: "Toute variable aléatoire réelle est soit discrète, soit à densité, sans autre possibilité", isCorrect: false }
                ],
                explanation: "Ces trois distinctions résument bien les Sections 3.3.3 et 3.3.4. La dernière affirmation est fausse : il existe des variables aléatoires réelles qui ne sont ni discrètes ni à densité (par exemple des lois mixtes, combinant une partie discrète et une partie continue, ou des lois singulières comme la fonction de Cantor).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    },
    "Probabilités : Chapitre 4 - Espérance, variance et inégalités": {
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Espérance", "Cas discret"],
                q: "Soit $(\\Omega, F, P)$ un espace probabilisé avec $\\Omega$ fini ou dénombrable, et $p_\\omega = P(\\{\\omega\\})$. Comment est définie l'espérance $E(X)$ d'une variable aléatoire $X$ définie sur $\\Omega$ ?",
                options: [
                    { text: "$E(X) = \\sum_{\\omega \\in \\Omega} p_\\omega X(\\omega)$", isCorrect: true },
                    { text: "$E(X) = \\sum_{\\omega \\in \\Omega} X(\\omega)$", isCorrect: false },
                    { text: "$E(X) = \\max_{\\omega \\in \\Omega} p_\\omega X(\\omega)$", isCorrect: false },
                    { text: "$E(X) = \\prod_{\\omega \\in \\Omega} p_\\omega X(\\omega)$", isCorrect: false }
                ],
                explanation: "Par définition, l'espérance pondère chaque valeur $X(\\omega)$ par la probabilité $p_\\omega$ de l'issue $\\omega$ correspondante, puis somme sur tout $\\Omega$. C'est la moyenne pondérée par les probabilités.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Espérance", "Intégrabilité"],
                q: "Dans le cas d'un espace des états $\\Omega$ fini ou dénombrable, quelle condition garantit que l'espérance $E(X) = \\sum_{\\omega\\in\\Omega} p_\\omega X(\\omega)$ est bien définie ?",
                options: [
                    { text: "$\\sum_{\\omega\\in\\Omega} p_\\omega |X(\\omega)| < \\infty$", isCorrect: true },
                    { text: "$X$ doit être positive", isCorrect: false },
                    { text: "$\\Omega$ doit être fini", isCorrect: false },
                    { text: "$\\sum_{\\omega\\in\\Omega} X(\\omega) = 1$", isCorrect: false }
                ],
                explanation: "La Définition 4.1 exige que la somme $\\sum_{\\omega\\in\\Omega} p_\\omega |X(\\omega)|$ soit finie pour que l'espérance soit bien définie ; c'est une condition d'intégrabilité, et elle n'exige pas que $\\Omega$ soit fini (dénombrable suffit) ni que $X$ soit positive.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Espérance", "Loi"],
                q: "D'après le Théorème 4.2, que peut-on affirmer sur l'espérance $E(X)$ lorsque $X(\\Omega)=\\{x_i\\}_{i\\in I}$ ?",
                options: [
                    { text: "$E(X)$ ne dépend que de la loi de $X$, avec $E(X) = \\sum_{i\\in I} x_i P(X=x_i)$", isCorrect: true },
                    { text: "$E(X)$ dépend uniquement de $\\Omega$, pas de la loi de $X$", isCorrect: false },
                    { text: "$E(X)$ ne peut se calculer qu'à partir de $(\\Omega, F, P)$", isCorrect: false },
                    { text: "$E(X)$ n'est définie que si $I$ est fini", isCorrect: false }
                ],
                explanation: "Le Théorème 4.2 permet de passer de l'espace de départ abstrait $(\\Omega,F,P)$ à l'espace d'arrivée $X(\\Omega)$ : l'espérance se réécrit uniquement en fonction de la loi $P_X$ de $X$, ce qui est un résultat clé pour les calculs pratiques.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable étagée"],
                q: "Qu'est-ce qu'une variable aléatoire étagée ?",
                options: [
                    { text: "Une variable aléatoire qui ne prend qu'un nombre fini de valeurs $x_1,\\dots,x_m$", isCorrect: true },
                    { text: "Une variable aléatoire positive", isCorrect: false },
                    { text: "Une variable aléatoire à densité", isCorrect: false },
                    { text: "Une variable aléatoire dénombrable", isCorrect: false }
                ],
                explanation: "Selon la Définition 4.3, une variable aléatoire étagée est de la forme $X = \\sum_{i=1}^m x_i \\mathbb{1}_{A_i}$ avec $A_i = \\{X=x_i\\}$, c'est-à-dire qu'elle ne prend qu'un nombre fini de valeurs distinctes.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Espérance", "Variable positive"],
                q: "Comment est définie l'espérance d'une variable aléatoire positive $X$ (pas nécessairement intégrable) ?",
                options: [
                    { text: "$E(X) = \\sup\\{E(Z) : Z \\text{ étagée positive}, Z \\le X\\}$", isCorrect: true },
                    { text: "$E(X) = \\inf\\{E(Z) : Z \\text{ étagée positive}, Z \\le X\\}$", isCorrect: false },
                    { text: "$E(X)$ n'est jamais définie pour une variable positive non intégrable", isCorrect: false },
                    { text: "$E(X) = \\lim_{n\\to\\infty} X_n$ où $X_n$ est une suite quelconque", isCorrect: false }
                ],
                explanation: "L'espérance d'une variable positive se définit comme le supremum des espérances des variables étagées positives qui la minorent. Cette quantité est toujours positive mais peut valoir $+\\infty$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Décomposition X+ X-"],
                q: "Pour une variable aléatoire quelconque $X$, on écrit $X = X^+ - X^-$. Lesquelles de ces affirmations sont vraies ?",
                options: [
                    { text: "$X^+ = \\max(0, X)$", isCorrect: true },
                    { text: "$X^- = \\max(0, -X)$", isCorrect: true },
                    { text: "$X^-$ et $X^+$ sont toutes deux des variables aléatoires positives", isCorrect: true },
                    { text: "$X = X^+ + X^-$", isCorrect: false }
                ],
                explanation: "$X^+$ et $X^-$ sont respectivement la partie positive et la partie négative de $X$, toutes deux positives. On a bien $X = X^+ - X^-$ (et non $X^+ + X^-$, qui donnerait $|X|$).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Intégrabilité"],
                q: "Une variable aléatoire $X$ est dite intégrable si et seulement si :",
                options: [
                    { text: "$E(X^+) < \\infty$ et $E(X^-) < \\infty$", isCorrect: true },
                    { text: "$E(|X|) < \\infty$", isCorrect: true },
                    { text: "$E(X) > 0$", isCorrect: false },
                    { text: "$X$ est bornée", isCorrect: false }
                ],
                explanation: "Les deux premières conditions sont équivalentes, car $|X| = X^+ + X^-$. La positivité de l'espérance et le caractère borné de $X$ ne sont ni nécessaires ni suffisants pour l'intégrabilité.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable centrée"],
                q: "Une variable aléatoire positive ou intégrable $X$ est dite centrée si :",
                options: [
                    { text: "$E(X) = 0$", isCorrect: true },
                    { text: "$\\text{Var}(X) = 0$", isCorrect: false },
                    { text: "$X = 0$ presque sûrement", isCorrect: false },
                    { text: "$E(X) = E(X^2)$", isCorrect: false }
                ],
                explanation: "Par la Définition 4.5, une variable aléatoire est centrée si son espérance est nulle, sans condition sur sa variance ou sur la valeur de $X$ elle-même.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Propriétés espérance", "Linéarité"],
                q: "Soient $X, Y$ deux variables aléatoires intégrables et $a, b \\in \\mathbb{R}$. Que vaut $E(aX+bY)$ ?",
                options: [
                    { text: "$aE(X) + bE(Y)$", isCorrect: true },
                    { text: "$abE(XY)$", isCorrect: false },
                    { text: "$a E(X) \\cdot b E(Y)$", isCorrect: false },
                    { text: "$E(X) + E(Y)$", isCorrect: false }
                ],
                explanation: "La linéarité de l'espérance (Proposition 4.6, point 2) donne directement $E(aX+bY) = aE(X)+bE(Y)$, ce qui fait de $L^1(\\Omega,F,P)$ un espace vectoriel.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Propriétés espérance", "Monotonie"],
                q: "Si $X \\le Y$ presque sûrement (avec $X,Y$ positives ou intégrables), que peut-on en conclure ?",
                options: [
                    { text: "$E(X) \\le E(Y)$", isCorrect: true },
                    { text: "$E(X) = E(Y)$", isCorrect: false },
                    { text: "$E(X) \\ge E(Y)$", isCorrect: false },
                    { text: "On ne peut rien conclure sans indépendance", isCorrect: false }
                ],
                explanation: "La monotonie de l'espérance (Proposition 4.6, point 3) affirme que $X \\le Y$ p.s. implique $E(X) \\le E(Y)$, de manière équivalente $X\\ge 0$ p.s. implique $E(X)\\ge 0$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Propriétés espérance"],
                q: "Pour $X$ intégrable, quelle inégalité relie $|E(X)|$ et $E(|X|)$ ?",
                options: [
                    { text: "$|E(X)| \\le E(|X|)$", isCorrect: true },
                    { text: "$|E(X)| \\ge E(|X|)$", isCorrect: false },
                    { text: "$|E(X)| = E(|X|)$ toujours", isCorrect: false },
                    { text: "Aucune relation générale n'existe", isCorrect: false }
                ],
                explanation: "C'est la propriété 4 de la Proposition 4.6 : la valeur absolue de l'espérance est toujours majorée par l'espérance de la valeur absolue.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Convergence monotone"],
                q: "Quelles sont les hypothèses du théorème de convergence monotone pour une suite $(X_n)_{n\\ge1}$ ?",
                options: [
                    { text: "$(X_n)$ est croissante et positive presque sûrement", isCorrect: true },
                    { text: "$(X_n)$ converge vers $X$ presque sûrement", isCorrect: true },
                    { text: "$(X_n)$ converge en loi vers $X$", isCorrect: false },
                    { text: "$(X_n)$ est majorée par une variable aléatoire intégrable", isCorrect: false }
                ],
                explanation: "Le théorème de convergence monotone exige que la suite soit croissante et positive p.s. et qu'elle converge p.s. vers $X$. Sous ces conditions, $E(X_n) \\to E(X)$. La domination par une variable intégrable est l'hypothèse du théorème de convergence dominée, pas de la convergence monotone.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Convergence dominée"],
                q: "Quelles sont les hypothèses du théorème de convergence dominée ?",
                options: [
                    { text: "$(X_n)$ converge vers $X$ presque sûrement", isCorrect: true },
                    { text: "Il existe $Y$ intégrable telle que $|X_n| \\le Y$ presque sûrement pour tout $n$", isCorrect: true },
                    { text: "$(X_n)$ doit être croissante", isCorrect: false },
                    { text: "$X$ doit être positive", isCorrect: false }
                ],
                explanation: "Contrairement à la convergence monotone, aucune monotonie n'est requise : il suffit de la convergence p.s. et d'une domination par une variable aléatoire intégrable $Y$. On conclut alors que $X$ est intégrable et $E(X_n)\\to E(X)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Caractérisation de la loi"],
                q: "D'après le Théorème 4.8, deux variables aléatoires $X$ et $Y$ ont la même loi si et seulement si :",
                options: [
                    { text: "Pour toute fonction $h : \\mathbb{R} \\to \\mathbb{R}$ continue et bornée, $E(h(X)) = E(h(Y))$", isCorrect: true },
                    { text: "$E(X) = E(Y)$", isCorrect: false },
                    { text: "$\\text{Var}(X) = \\text{Var}(Y)$", isCorrect: false },
                    { text: "$X$ et $Y$ sont indépendantes", isCorrect: false }
                ],
                explanation: "L'égalité des espérances de $X$ et $Y$ seules ne caractérise pas la loi (contre-exemple facile), mais connaître $E(h(X))=E(h(Y))$ pour toute fonction continue bornée $h$ le fait, car cela permet de reconstruire la fonction de répartition.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Théorème de transfert", "Discret"],
                q: "Soit $X$ une variable aléatoire discrète réelle à valeurs dans $E=\\{x_i\\}_{i\\in I}$, et $h : E \\to \\mathbb{R}$ telle que $h(X)$ soit positive ou intégrable. Que vaut $E(h(X))$ ?",
                options: [
                    { text: "$\\sum_{i\\in I} h(x_i) P(X=x_i)$", isCorrect: true },
                    { text: "$\\sum_{i\\in I} h(x_i)$", isCorrect: false },
                    { text: "$h\\left(\\sum_{i\\in I} x_i P(X=x_i)\\right)$", isCorrect: false },
                    { text: "$\\int_{-\\infty}^{\\infty} h(x) f(x)\\, dx$", isCorrect: false }
                ],
                explanation: "Le théorème de transfert (Théorème 4.10) dans le cas discret donne $E(h(X)) = \\sum_{i\\in I} h(x_i)P(X=x_i)$. Attention : $E(h(X)) \\ne h(E(X))$ en général (sauf cas particuliers, ex : $h$ affine).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Théorème de transfert", "Densité"],
                q: "Soit $X$ une variable aléatoire à densité $f$, et $h$ telle que $h(X)$ soit positive ou intégrable. Que vaut $E(h(X))$ ?",
                options: [
                    { text: "$\\int_{-\\infty}^{+\\infty} h(x) f(x)\\, dx$", isCorrect: true },
                    { text: "$\\int_{-\\infty}^{+\\infty} h(x)\\, dx$", isCorrect: false },
                    { text: "$\\sum_{x} h(x) f(x)$", isCorrect: false },
                    { text: "$h\\left(\\int_{-\\infty}^{+\\infty} x f(x) dx\\right)$", isCorrect: false }
                ],
                explanation: "Dans le cas à densité, le théorème de transfert donne $E(h(X)) = \\int_{-\\infty}^{+\\infty} h(x) f(x)\\,dx$, condition étant que $\\int |h(x)|f(x)dx < \\infty$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Densité", "Changement de variable"],
                q: "Soit $X$ une variable aléatoire à densité $f$, et $Y = aX+b$ avec $a \\ne 0$. Quelle est la densité $f^Y$ de $Y$ ?",
                options: [
                    { text: "$f^Y(y) = f\\left(\\frac{y-b}{a}\\right) \\frac{1}{|a|}$", isCorrect: true },
                    { text: "$f^Y(y) = f(ay+b)$", isCorrect: false },
                    { text: "$f^Y(y) = a f(y) + b$", isCorrect: false },
                    { text: "$f^Y(y) = f\\left(\\frac{y-b}{a}\\right)$ (sans le facteur $1/|a|$)", isCorrect: false }
                ],
                explanation: "L'Exemple 4.13 obtient ce résultat via le théorème de transfert et le changement de variable $y=ax+b$. Le facteur $\\frac{1}{|a|}$ vient du jacobien de la transformation et assure que $f^Y$ s'intègre bien à 1.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variance", "Définition"],
                q: "Quelle est la définition de la variance de $X$ (variable de carré intégrable) ?",
                options: [
                    { text: "$\\text{Var}(X) = E[(X-E(X))^2]$", isCorrect: true },
                    { text: "$\\text{Var}(X) = E(X^2)$", isCorrect: false },
                    { text: "$\\text{Var}(X) = E(X) - E(X)^2$", isCorrect: false },
                    { text: "$\\text{Var}(X) = E(|X-E(X)|)$", isCorrect: false }
                ],
                explanation: "La variance mesure l'écart quadratique moyen de $X$ à sa moyenne : $\\text{Var}(X) = E[(X-E(X))^2]$. Elle est équivalente à $E(X^2)-E(X)^2$, mais ce n'est pas la définition première.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variance", "Ecart-type"],
                q: "L'écart-type $\\sigma(X)$ est défini par :",
                options: [
                    { text: "$\\sigma(X) = \\sqrt{\\text{Var}(X)}$", isCorrect: true },
                    { text: "$\\sigma(X) = \\text{Var}(X)^2$", isCorrect: false },
                    { text: "$\\sigma(X) = E(|X|)$", isCorrect: false },
                    { text: "$\\sigma(X) = \\text{Var}(X)$", isCorrect: false }
                ],
                explanation: "L'écart-type est la racine carrée de la variance. On lui préfère souvent la variance pour les calculs, mais on préfère l'écart-type en statistique car il a la même unité que $X$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variable réduite"],
                q: "Une variable aléatoire $X$ est dite centrée-réduite si :",
                options: [
                    { text: "$\\text{Var}(X) = 1$ et $E(X) = 0$", isCorrect: true },
                    { text: "$\\text{Var}(X) = 0$ et $E(X) = 1$", isCorrect: false },
                    { text: "$\\text{Var}(X) = 1$ uniquement", isCorrect: false },
                    { text: "$E(X) = 1$ uniquement", isCorrect: false }
                ],
                explanation: "Une variable est dite réduite si sa variance vaut 1, et centrée-réduite si de plus son espérance est nulle. C'est le cas typique de la loi $N(0,1)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Propriétés variance"],
                q: "Parmi les propriétés suivantes de la variance (pour $X$ de carré intégrable, $a \\in \\mathbb{R}$), lesquelles sont vraies ?",
                options: [
                    { text: "$\\text{Var}(X+a) = \\text{Var}(X)$", isCorrect: true },
                    { text: "$\\text{Var}(aX) = a^2 \\text{Var}(X)$", isCorrect: true },
                    { text: "$\\text{Var}(X) = E(X^2) - E(X)^2$", isCorrect: true },
                    { text: "$\\text{Var}(aX) = a \\, \\text{Var}(X)$", isCorrect: false }
                ],
                explanation: "La variance est invariante par translation, quadratique en le facteur multiplicatif ($\\text{Var}(aX)=a^2\\text{Var}(X)$, pas $a\\,\\text{Var}(X)$), et se calcule aussi par la formule de Koenig-Huygens $\\text{Var}(X)=E(X^2)-E(X)^2$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variance", "Positivité"],
                q: "Que peut-on dire du signe de $\\text{Var}(X)$ pour toute variable aléatoire $X$ de carré intégrable ?",
                options: [
                    { text: "$\\text{Var}(X) \\ge 0$ toujours", isCorrect: true },
                    { text: "$\\text{Var}(X) > 0$ toujours", isCorrect: false },
                    { text: "$\\text{Var}(X)$ peut être négative si $X$ prend des valeurs négatives", isCorrect: false },
                    { text: "Le signe dépend de $E(X)$", isCorrect: false }
                ],
                explanation: "La variance est toujours positive ou nulle car $\\text{Var}(X)=E[(X-E(X))^2]$, espérance d'une quantité positive (par monotonie de l'espérance). Elle est nulle si et seulement si $X$ est presque sûrement constante.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Covariance", "Définition"],
                q: "Quelle est la définition de la covariance de deux variables aléatoires $X, Y$ de carré intégrable ?",
                options: [
                    { text: "$\\text{Cov}(X,Y) = E[(X-E(X))(Y-E(Y))]$", isCorrect: true },
                    { text: "$\\text{Cov}(X,Y) = E(XY)$", isCorrect: false },
                    { text: "$\\text{Cov}(X,Y) = \\text{Var}(X) \\times \\text{Var}(Y)$", isCorrect: false },
                    { text: "$\\text{Cov}(X,Y) = E(X) + E(Y)$", isCorrect: false }
                ],
                explanation: "La covariance généralise la variance au cas de deux variables : elle mesure comment elles varient conjointement autour de leurs moyennes respectives.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Covariance", "Formule pratique"],
                q: "Quelle est la formule pratique pour calculer $\\text{Cov}(X,Y)$ ?",
                options: [
                    { text: "$\\text{Cov}(X,Y) = E(XY) - E(X)E(Y)$", isCorrect: true },
                    { text: "$\\text{Cov}(X,Y) = E(XY) + E(X)E(Y)$", isCorrect: false },
                    { text: "$\\text{Cov}(X,Y) = E(X^2Y^2) - E(X)^2E(Y)^2$", isCorrect: false },
                    { text: "$\\text{Cov}(X,Y) = E(X)E(Y)$", isCorrect: false }
                ],
                explanation: "En développant $E[(X-E(X))(Y-E(Y))]$ et en utilisant la linéarité de l'espérance, on obtient directement $\\text{Cov}(X,Y) = E(XY)-E(X)E(Y)$ (Proposition 4.21, point 4).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Corrélation"],
                q: "Comment est définie la corrélation $\\text{Cor}(X,Y)$ entre deux variables aléatoires de variances non-nulles ?",
                options: [
                    { text: "$\\text{Cor}(X,Y) = \\dfrac{\\text{Cov}(X,Y)}{\\sigma(X)\\sigma(Y)}$", isCorrect: true },
                    { text: "$\\text{Cor}(X,Y) = \\text{Cov}(X,Y) \\times \\sigma(X)\\sigma(Y)$", isCorrect: false },
                    { text: "$\\text{Cor}(X,Y) = \\dfrac{\\sigma(X)\\sigma(Y)}{\\text{Cov}(X,Y)}$", isCorrect: false },
                    { text: "$\\text{Cor}(X,Y) = \\text{Var}(X) + \\text{Var}(Y)$", isCorrect: false }
                ],
                explanation: "La corrélation normalise la covariance par les écarts-types, ce qui la rend sans unité et comprise entre $-1$ et $1$ (conséquence de Cauchy-Schwarz).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Covariance", "Bilinéarité"],
                q: "Soient $X, Y, Z$ de carré intégrable et $a,b\\in\\mathbb{R}$. Que vaut $\\text{Cov}(aX+bY, Z)$ ?",
                options: [
                    { text: "$a\\,\\text{Cov}(X,Z) + b\\,\\text{Cov}(Y,Z)$", isCorrect: true },
                    { text: "$ab\\,\\text{Cov}(X,Z)\\text{Cov}(Y,Z)$", isCorrect: false },
                    { text: "$\\text{Cov}(X,Z) + \\text{Cov}(Y,Z)$", isCorrect: false },
                    { text: "$a\\,\\text{Cov}(X,Y)+b\\,\\text{Cov}(Y,Z)$", isCorrect: false }
                ],
                explanation: "La covariance est une forme bilinéaire (Proposition 4.21, point 2) : elle est linéaire par rapport à chacun de ses deux arguments, ce qui donne $\\text{Cov}(aX+bY,Z)=a\\,\\text{Cov}(X,Z)+b\\,\\text{Cov}(Y,Z)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variance de la somme"],
                q: "Quelle est la relation générale entre $\\text{Var}(X+Y)$, $\\text{Var}(X)$, $\\text{Var}(Y)$ et $\\text{Cov}(X,Y)$ ?",
                options: [
                    { text: "$\\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y) + 2\\,\\text{Cov}(X,Y)$", isCorrect: true },
                    { text: "$\\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y)$ toujours", isCorrect: false },
                    { text: "$\\text{Var}(X+Y) = \\text{Var}(X) \\times \\text{Var}(Y)$", isCorrect: false },
                    { text: "$\\text{Var}(X+Y) = \\text{Var}(X) - \\text{Var}(Y)$", isCorrect: false }
                ],
                explanation: "C'est le point 5 de la Proposition 4.21 : la formule générale contient toujours le terme de covariance, qui ne s'annule que si $X$ et $Y$ sont non corrélées (par exemple si elles sont indépendantes).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Matrice de covariance"],
                q: "Concernant la matrice de covariance $\\text{Cov}$ de $X_1,\\dots,X_n$ de carré intégrable, quelles affirmations sont vraies ?",
                options: [
                    { text: "Elle est symétrique", isCorrect: true },
                    { text: "Sa diagonale est formée des variances $\\text{Var}(X_i)$", isCorrect: true },
                    { text: "$\\text{Var}\\left(\\sum_{i=1}^n X_i\\right) = \\sum_{i=1}^n \\text{Var}(X_i) + 2\\sum_{1\\le i<j\\le n} \\text{Cov}(X_i,X_j)$", isCorrect: true },
                    { text: "Elle est toujours diagonale", isCorrect: false }
                ],
                explanation: "La matrice de covariance est réelle symétrique (car $\\text{Cov}(X_i,X_j)=\\text{Cov}(X_j,X_i)$), sa diagonale contient les variances, et la formule de la variance d'une somme fait apparaître tous les termes croisés. Elle n'est diagonale que si les covariances croisées sont nulles (par exemple en cas d'indépendance).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Moment d'ordre n"],
                q: "Pour une variable aléatoire $X$ et $n \\in \\mathbb{N}^*$ tel que $X^n$ est intégrable, comment appelle-t-on la quantité $E(X^n)$ ?",
                options: [
                    { text: "Le moment d'ordre $n$ de $X$", isCorrect: true },
                    { text: "La variance d'ordre $n$", isCorrect: false },
                    { text: "L'écart-type d'ordre $n$", isCorrect: false },
                    { text: "Le quantile d'ordre $n$", isCorrect: false }
                ],
                explanation: "Par définition (Définition 4.26), $E(X^n)$ est appelé le moment d'ordre $n$ de $X$ ; le moment d'ordre 1 est l'espérance, et le moment d'ordre 2 sert à définir la variance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Inégalité de Markov"],
                q: "Soit $X$ admettant un moment d'ordre $n \\ge 1$. Que dit l'inégalité de Markov pour $a > 0$ ?",
                options: [
                    { text: "$P(|X| \\ge a) \\le \\dfrac{E(|X|^n)}{a^n}$", isCorrect: true },
                    { text: "$P(|X| \\ge a) \\ge \\dfrac{E(|X|^n)}{a^n}$", isCorrect: false },
                    { text: "$P(|X| \\ge a) \\le \\dfrac{a^n}{E(|X|^n)}$", isCorrect: false },
                    { text: "$P(|X| \\ge a) = \\dfrac{E(|X|^n)}{a^n}$", isCorrect: false }
                ],
                explanation: "L'inégalité de Markov (Proposition 4.28) majore la probabilité que $|X|$ dépasse un seuil $a$ par $E(|X|^n)/a^n$. La preuve utilise l'inégalité $|X|^n \\ge a^n \\mathbb{1}_{|X|\\ge a}$ puis la monotonie de l'espérance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Inégalité de Bienaymé-Tchebychev"],
                q: "Soit $X$ de carré intégrable. Que dit l'inégalité de Bienaymé-Tchebychev pour $a > 0$ ?",
                options: [
                    { text: "$P(|X - E(X)| \\ge a) \\le \\dfrac{\\text{Var}(X)}{a^2}$", isCorrect: true },
                    { text: "$P(|X - E(X)| \\ge a) \\le \\dfrac{E(X)}{a^2}$", isCorrect: false },
                    { text: "$P(|X - E(X)| \\ge a) \\ge \\dfrac{\\text{Var}(X)}{a^2}$", isCorrect: false },
                    { text: "$P(|X - E(X)| \\ge a) \\le \\dfrac{\\text{Var}(X)}{a}$", isCorrect: false }
                ],
                explanation: "Cette inégalité quantifie comment plus la variance est grande, plus les fluctuations autour de la moyenne peuvent être importantes. C'est une version 'déguisée' de l'inégalité de Markov appliquée à $Y=X-E(X)$ avec $n=2$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Bienaymé-Tchebychev", "Démonstration"],
                q: "La preuve de l'inégalité de Bienaymé-Tchebychev applique l'inégalité de Markov à quelle variable aléatoire, et avec quel exposant $n$ ?",
                options: [
                    { text: "$Y = X - E(X)$ avec $n = 2$", isCorrect: true },
                    { text: "$Y = X$ avec $n = 1$", isCorrect: false },
                    { text: "$Y = X^2$ avec $n = 1$", isCorrect: false },
                    { text: "$Y = X - E(X)$ avec $n = 1$", isCorrect: false }
                ],
                explanation: "En posant $Y = X-E(X)$ et en appliquant Markov avec $n=2$ : $P(|Y|\\ge a) \\le E[|Y|^2]/a^2 = \\text{Var}(X)/a^2$, ce qui donne exactement Bienaymé-Tchebychev.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Inégalité de Jensen"],
                q: "Soit $X$ intégrable et $f$ continue et convexe telle que $f(X)$ est intégrable. Que dit l'inégalité de Jensen ?",
                options: [
                    { text: "$E(f(X)) \\ge f(E(X))$", isCorrect: true },
                    { text: "$E(f(X)) \\le f(E(X))$", isCorrect: false },
                    { text: "$E(f(X)) = f(E(X))$", isCorrect: false },
                    { text: "$f(E(X)) \\ge E(X)$", isCorrect: false }
                ],
                explanation: "Pour une fonction convexe, l'espérance de la fonction est toujours supérieure ou égale à la fonction évaluée en l'espérance ; c'est l'inégalité de Jensen (Proposition 4.30), qui se démontre à l'aide d'une tangente en $a=E(X)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Inégalité de Cauchy-Schwarz"],
                q: "Soient $X, Y$ deux variables aléatoires de carré intégrable. Que dit l'inégalité de Cauchy-Schwarz ?",
                options: [
                    { text: "$|E(XY)| \\le \\sqrt{E(X^2)E(Y^2)}$", isCorrect: true },
                    { text: "$E(XY) = E(X)E(Y)$", isCorrect: false },
                    { text: "$|E(XY)| \\ge \\sqrt{E(X^2)E(Y^2)}$", isCorrect: false },
                    { text: "$E(XY) \\le E(X)+E(Y)$", isCorrect: false }
                ],
                explanation: "L'inégalité de Cauchy-Schwarz (Proposition 4.31) garantit notamment que $XY$ est intégrable dès que $X$ et $Y$ sont de carré intégrable, et majore $|E(XY)|$ par le produit des racines carrées des moments d'ordre 2.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Corrélation", "Cauchy-Schwarz"],
                q: "En appliquant Cauchy-Schwarz à $X-E(X)$ et $Y-E(Y)$, quelles bornes obtient-on pour la covariance et la corrélation ?",
                options: [
                    { text: "$|\\text{Cov}(X,Y)| \\le \\sigma(X)\\sigma(Y)$", isCorrect: true },
                    { text: "$-1 \\le \\text{Cor}(X,Y) \\le 1$", isCorrect: true },
                    { text: "$\\text{Cor}(X,Y) \\ge 1$ toujours", isCorrect: false },
                    { text: "$|\\text{Cov}(X,Y)| \\ge \\sigma(X)\\sigma(Y)$", isCorrect: false }
                ],
                explanation: "En appliquant Cauchy-Schwarz aux variables centrées $X-E(X)$ et $Y-E(Y)$, on obtient $|\\text{Cov}(X,Y)|\\le\\sigma(X)\\sigma(Y)$, d'où immédiatement $-1\\le\\text{Cor}(X,Y)\\le 1$ (Proposition 4.32).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Espaces L1 et L2"],
                q: "Quelle relation existe entre les espaces $L^1(\\Omega,F,P)$ et $L^2(\\Omega,F,P)$ ?",
                options: [
                    { text: "$L^2 \\subset L^1$ : toute variable de carré intégrable est intégrable", isCorrect: true },
                    { text: "$L^1 \\subset L^2$ : toute variable intégrable est de carré intégrable", isCorrect: false },
                    { text: "$L^1 = L^2$ toujours", isCorrect: false },
                    { text: "$L^1$ et $L^2$ sont disjoints", isCorrect: false }
                ],
                explanation: "En utilisant $|X| \\le 1+X^2$ et la linéarité de l'espérance, on montre que si $X$ est de carré intégrable elle est intégrable, donc $L^2$ est un sous-espace vectoriel de $L^1$. La réciproque est fausse en général.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Inégalité"],
                q: "Si $X$ est de carré intégrable, quelle inégalité relie $E(|X|)$ et $E(X^2)$ ?",
                options: [
                    { text: "$E(|X|) \\le \\sqrt{E(X^2)}$", isCorrect: true },
                    { text: "$E(|X|) \\ge \\sqrt{E(X^2)}$", isCorrect: false },
                    { text: "$E(|X|) = \\sqrt{E(X^2)}$", isCorrect: false },
                    { text: "$E(|X|)^2 \\ge E(X^2)$", isCorrect: false }
                ],
                explanation: "La Proposition 4.16 montre que $E(|X|) \\le \\sqrt{E(X^2)}$, ce qui est aussi une conséquence de Cauchy-Schwarz appliquée à $|X|$ et à la variable constante 1.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    },
    "Probabilités : Chapitre 5 - Vecteurs aléatoires discrets, indépendance, loi des grands nombres": {
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Vecteur aléatoire discret"],
                q: "Qu'est-ce qu'un vecteur aléatoire discret $X=(X_1,\\dots,X_n) : \\Omega \\to E_1 \\times \\cdots \\times E_n$ ?",
                options: [
                    { text: "Une variable aléatoire de $(\\Omega,F)$ dans $(E,P(E))$ où chaque $E_i$ est dénombrable ou fini", isCorrect: true },
                    { text: "Une variable aléatoire à densité dans $\\mathbb{R}^n$", isCorrect: false },
                    { text: "Une famille de variables aléatoires indépendantes uniquement", isCorrect: false },
                    { text: "Une variable aléatoire dont seule la première composante est discrète", isCorrect: false }
                ],
                explanation: "Un vecteur aléatoire discret est une variable aléatoire à valeurs dans un produit d'espaces discrets, munie de la tribu $P(E)$. C'est équivalent à dire que chacune des composantes $X_i$ est une variable aléatoire discrète (Remarque 5.2).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi jointe", "Loi marginale"],
                q: "Soit $Z=(X,Y)$ un couple aléatoire discret. Que représentent la loi jointe et les lois marginales ?",
                options: [
                    { text: "La loi jointe est $P_{(X,Y)}$ ; les lois marginales sont $P_X$ et $P_Y$", isCorrect: true },
                    { text: "La loi jointe et les lois marginales désignent la même chose", isCorrect: false },
                    { text: "La loi marginale de $X$ est la loi de $Y$ sachant $X$", isCorrect: false },
                    { text: "La loi jointe ne peut être définie que si $X$ et $Y$ sont indépendantes", isCorrect: false }
                ],
                explanation: "La loi jointe $P_{(X,Y)}$ décrit la loi du couple entier, tandis que les lois marginales $P_X$ et $P_Y$ décrivent la loi de chaque composante isolément.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi marginale", "Formule"],
                q: "Comment retrouve-t-on la loi marginale $P_X(\\{x\\})$ à partir de la loi jointe du couple $(X,Y)$ ?",
                options: [
                    { text: "$P_X(\\{x\\}) = \\sum_{y \\in F} P(\\{X=x, Y=y\\})$", isCorrect: true },
                    { text: "$P_X(\\{x\\}) = P(\\{X=x, Y=y\\})$ pour un $y$ fixé quelconque", isCorrect: false },
                    { text: "$P_X(\\{x\\}) = \\max_{y\\in F} P(\\{X=x,Y=y\\})$", isCorrect: false },
                    { text: "$P_X(\\{x\\}) = P(\\{X=x\\}) \\times P(\\{Y=y\\})$", isCorrect: false }
                ],
                explanation: "En sommant sur toutes les valeurs possibles de $Y$ (formule des probabilités totales), on retrouve la loi marginale de $X$ à partir de la loi jointe.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi jointe vs marginales"],
                q: "Connaître les lois marginales $P_X$ et $P_Y$ suffit-il pour connaître la loi jointe $P_{(X,Y)}$ ?",
                options: [
                    { text: "Non, en général la connaissance des lois marginales n'entraîne pas celle de la loi jointe", isCorrect: true },
                    { text: "Oui, toujours", isCorrect: false },
                    { text: "Oui, mais seulement si $X$ et $Y$ prennent un nombre fini de valeurs", isCorrect: false },
                    { text: "Oui, mais seulement si les variables sont à densité", isCorrect: false }
                ],
                explanation: "La Remarque 5.8 souligne que la loi jointe détermine les lois marginales, mais la réciproque est fausse : plusieurs lois jointes différentes peuvent avoir les mêmes lois marginales (voir l'Exemple 5.6 où $X,Y$ suivent une loi uniforme mais le couple non).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Théorème de transfert", "Couple"],
                q: "Soit $(X,Y)$ un couple aléatoire discret et $h : E\\times F \\to \\mathbb{R}$ telle que $h(X,Y)$ soit positive ou intégrable. Que vaut $E(h(X,Y))$ ?",
                options: [
                    { text: "$\\sum_{(x,y)\\in E\\times F} h(x,y) P(\\{X=x, Y=y\\})$", isCorrect: true },
                    { text: "$\\sum_{x\\in E} h(x) P(X=x) + \\sum_{y\\in F} h(y) P(Y=y)$", isCorrect: false },
                    { text: "$h(E(X), E(Y))$", isCorrect: false },
                    { text: "$\\sum_{x\\in E} h(x, E(Y)) P(X=x)$", isCorrect: false }
                ],
                explanation: "Le théorème de transfert pour un couple (Théorème 5.5) généralise celui d'une seule variable : on somme $h(x,y)$ pondéré par la probabilité jointe $P(\\{X=x,Y=y\\})$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi conditionnelle"],
                q: "Soit $(X,Y)$ un couple aléatoire discret, $x \\in E$ avec $P(X=x)>0$. Comment est définie la loi conditionnelle $P(\\{Y=y\\}|\\{X=x\\})$ ?",
                options: [
                    { text: "$P(\\{Y=y\\}|\\{X=x\\}) = \\dfrac{P(\\{Y=y, X=x\\})}{P(\\{X=x\\})}$", isCorrect: true },
                    { text: "$P(\\{Y=y\\}|\\{X=x\\}) = P(\\{Y=y\\}) \\times P(\\{X=x\\})$", isCorrect: false },
                    { text: "$P(\\{Y=y\\}|\\{X=x\\}) = P(\\{Y=y\\}) - P(\\{X=x\\})$", isCorrect: false },
                    { text: "$P(\\{Y=y\\}|\\{X=x\\}) = P(\\{X=x\\})$", isCorrect: false }
                ],
                explanation: "C'est la définition standard de la probabilité conditionnelle appliquée aux évènements $\\{Y=y\\}$ et $\\{X=x\\}$ (Définition 5.7).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Espérance conditionnelle", "Nombre"],
                q: "Soit $x$ tel que $P(X=x)>0$. Comment est définie l'espérance conditionnelle $E(Y|X=x)$ ?",
                options: [
                    { text: "$E(Y|X=x) = \\sum_{y\\in F} y\\, P(Y=y|X=x)$", isCorrect: true },
                    { text: "$E(Y|X=x) = \\sum_{y\\in F} y\\, P(Y=y)$", isCorrect: false },
                    { text: "$E(Y|X=x) = E(Y) \\times P(X=x)$", isCorrect: false },
                    { text: "$E(Y|X=x) = E(XY)/E(X)$", isCorrect: false }
                ],
                explanation: "$E(Y|X=x)$ est l'espérance de $Y$ calculée avec la loi conditionnelle de $Y$ sachant $\\{X=x\\}$, c'est un nombre réel (contrairement à $E(Y|X)$ qui est une variable aléatoire).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Espérance conditionnelle", "Variable aléatoire"],
                q: "Quelle est la nature mathématique de $E(Y|X)$ ?",
                options: [
                    { text: "C'est une variable aléatoire, fonction de $X$", isCorrect: true },
                    { text: "C'est un nombre réel fixe, indépendant de $X$", isCorrect: false },
                    { text: "C'est toujours égale à $E(Y)$", isCorrect: false },
                    { text: "C'est une probabilité, comprise entre 0 et 1", isCorrect: false }
                ],
                explanation: "Contrairement à $E(Y)$ qui est un nombre réel, $E(Y|X) = \\psi(X)$ où $\\psi(x)=E(Y|X=x)$ est une fonction, donc $E(Y|X)$ dépend de l'aléa à travers $X$ : c'est bien une variable aléatoire (Remarque 5.10).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Espérance conditionnelle", "Théorème"],
                q: "Que dit le Théorème 5.11 concernant $E[E(Y|X)]$ ?",
                options: [
                    { text: "$E[E(Y|X)] = E(Y)$", isCorrect: true },
                    { text: "$E[E(Y|X)] = E(X)$", isCorrect: false },
                    { text: "$E[E(Y|X)] = E(X)E(Y)$", isCorrect: false },
                    { text: "$E[E(Y|X)] = \\text{Var}(Y)$", isCorrect: false }
                ],
                explanation: "C'est un résultat fondamental : l'espérance de l'espérance conditionnelle redonne l'espérance totale. La preuve utilise le théorème de transfert et la formule des probabilités totales.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Espérance conditionnelle", "Propriétés"],
                q: "Parmi les propriétés suivantes de l'espérance conditionnelle $E(\\cdot|X)$, lesquelles sont vraies (Y,Z intégrables) ?",
                options: [
                    { text: "$E(aY+bZ|X) = aE(Y|X)+bE(Z|X)$ (linéarité)", isCorrect: true },
                    { text: "$Y \\ge 0 \\Rightarrow E(Y|X) \\ge 0$ (positivité)", isCorrect: true },
                    { text: "$E(1|X) = 1$", isCorrect: true },
                    { text: "$E[Yg(X)|X] = E(Y|X) + g(X)$", isCorrect: false }
                ],
                explanation: "L'espérance conditionnelle hérite des propriétés fondamentales de l'espérance : linéarité, positivité, et $E(1|X)=1$. En revanche, la formule correcte pour une fonction $g(X)$ 'sortie' de l'espérance conditionnelle est $E[Yg(X)|X]=g(X)E(Y|X)$ (produit, pas somme), car $g(X)$ se comporte comme une constante.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance", "Définition"],
                q: "Deux variables aléatoires discrètes $X, Y$ sont dites indépendantes si :",
                options: [
                    { text: "$\\forall A \\in P(E), B \\in P(F),\\ P(\\{X\\in A, Y\\in B\\}) = P(\\{X\\in A\\})P(\\{Y\\in B\\})$", isCorrect: true },
                    { text: "$E(X) = E(Y)$", isCorrect: false },
                    { text: "$\\text{Cov}(X,Y) = 0$", isCorrect: false },
                    { text: "$X$ et $Y$ ont la même loi", isCorrect: false }
                ],
                explanation: "La Définition 5.14 exige que la probabilité jointe se factorise pour tout couple d'évènements $A,B$. Avoir une covariance nulle est une condition nécessaire mais pas suffisante à l'indépendance (voir la remarque 5.19).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance mutuelle"],
                q: "Une famille $(X_i)_{i\\in I}$ de variables aléatoires est dite mutuellement indépendante si :",
                options: [
                    { text: "Pour toute partie finie $K$ de $I$ et tout $A_i \\in P(E_i)$, $P(\\cap_{i\\in K}\\{X_i\\in A_i\\}) = \\prod_{i\\in K} P(X_i \\in A_i)$", isCorrect: true },
                    { text: "Toute paire $(X_i, X_j)$ avec $i\\ne j$ est indépendante", isCorrect: false },
                    { text: "Les $X_i$ ont toutes la même loi", isCorrect: false },
                    { text: "$\\sum_{i\\in I} X_i$ est bornée", isCorrect: false }
                ],
                explanation: "L'indépendance mutuelle est une condition sur toutes les parties finies simultanément, pas seulement sur les paires : l'indépendance deux à deux n'implique pas l'indépendance mutuelle en général.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["i.i.d"],
                q: "Que signifie que des variables aléatoires $(X_i)_{i\\in I}$ soient i.i.d ?",
                options: [
                    { text: "Elles sont indépendantes et ont toutes la même loi", isCorrect: true },
                    { text: "Elles sont indépendantes uniquement", isCorrect: false },
                    { text: "Elles ont la même loi uniquement, sans être nécessairement indépendantes", isCorrect: false },
                    { text: "Elles ont la même espérance", isCorrect: false }
                ],
                explanation: "i.i.d signifie 'indépendantes et identiquement distribuées' : les deux conditions (indépendance ET même loi) sont requises simultanément.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance", "Conséquences"],
                q: "Si $(X_i)_{i\\in I}$ est une famille de variables aléatoires indépendantes, lesquelles des affirmations suivantes (Remarque 5.15) sont vraies ?",
                options: [
                    { text: "Toute sous-famille $(X_i)_{i\\in J}$ avec $J\\subset I$ est indépendante", isCorrect: true },
                    { text: "Pour toute famille de fonctions mesurables $h_i$, les $(h_i(X_i))_{i\\in I}$ sont indépendantes", isCorrect: true },
                    { text: "Les $(X_i)$ deviennent nécessairement de carré intégrable", isCorrect: false },
                    { text: "Les $(X_i)$ ont nécessairement la même loi", isCorrect: false }
                ],
                explanation: "L'indépendance se transmet aux sous-familles et aux images par des fonctions mesurables des composantes, mais n'implique ni intégrabilité ni identité de loi (ce dernier point est spécifique au cas i.i.d).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Théorème caractérisation indépendance"],
                q: "D'après le Théorème 5.16, lesquelles de ces conditions sont équivalentes à l'indépendance de $X$ et $Y$ (variables discrètes) ?",
                options: [
                    { text: "$P(\\{X=x,Y=y\\}) = P(\\{X=x\\})P(\\{Y=y\\})$ pour tout $x,y$", isCorrect: true },
                    { text: "Pour tout $x$ avec $P(X=x)>0$, $P_Y(\\cdot|\\{X=x\\}) = P_Y(\\cdot)$", isCorrect: true },
                    { text: "Pour toutes fonctions bornées $f,g$, $E[f(X)g(Y)] = E[f(X)]E[g(Y)]$", isCorrect: true },
                    { text: "$E(X) = E(Y)$", isCorrect: false }
                ],
                explanation: "Le Théorème 5.16 établit cinq conditions équivalentes à l'indépendance : la factorisation ponctuelle des probabilités, l'invariance des lois conditionnelles, et l'égalité $E[f(X)g(Y)]=E[f(X)]E[g(Y)]$ pour toutes fonctions bornées. L'égalité des espérances n'a aucun lien direct avec l'indépendance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance", "Variance", "Covariance"],
                q: "Si $X, Y$ sont deux variables aléatoires de carré intégrable et indépendantes, lesquelles des affirmations suivantes (Proposition 5.18) sont vraies ?",
                options: [
                    { text: "$E(XY) = E(X)E(Y)$", isCorrect: true },
                    { text: "$\\text{Cov}(X,Y) = 0$", isCorrect: true },
                    { text: "$\\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y)$", isCorrect: true },
                    { text: "$\\text{Var}(X+Y) = \\text{Var}(X) \\times \\text{Var}(Y)$", isCorrect: false }
                ],
                explanation: "Ces trois résultats sont des conséquences directes de l'indépendance : la covariance s'annule car $E(XY)=E(X)E(Y)$, et donc le terme croisé $2\\text{Cov}(X,Y)$ disparaît dans $\\text{Var}(X+Y)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Réciproque fausse", "Covariance"],
                q: "Si $\\text{Cov}(X,Y) = 0$, peut-on en conclure que $X$ et $Y$ sont indépendantes ?",
                options: [
                    { text: "Non, la réciproque est fausse en général", isCorrect: true },
                    { text: "Oui, toujours", isCorrect: false },
                    { text: "Oui, mais seulement si $X$ et $Y$ sont discrètes", isCorrect: false },
                    { text: "Oui, mais seulement si $X$ et $Y$ sont de même loi", isCorrect: false }
                ],
                explanation: "La Remarque 5.19 donne un contre-exemple explicite : $Z$ uniforme sur $\\{-1,0,1\\}$, $X=Z$, $Y=Z^2$. On a $\\text{Cov}(X,Y)=0$ mais $X$ et $Y$ ne sont pas indépendantes, car par exemple $P(X=-1,Y=1) \\ne P(X=-1)P(Y=1)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Contre-exemple", "Application numérique"],
                q: "Dans le contre-exemple de la Remarque 5.19 ($Z$ uniforme sur $\\{-1,0,1\\}$, $X=Z$, $Y=Z^2$), que vaut $P(X=-1, Y=1)$ ?",
                options: [
                    { text: "$\\dfrac{1}{3}$", isCorrect: true },
                    { text: "$\\dfrac{2}{9}$", isCorrect: false },
                    { text: "$\\dfrac{1}{9}$", isCorrect: false },
                    { text: "$0$", isCorrect: false }
                ],
                explanation: "$\\{X=-1,Y=1\\} = \\{Z=-1, Z^2=1\\} = \\{Z=-1\\}$, et comme $Z$ est uniforme sur $\\{-1,0,1\\}$, $P(Z=-1)=1/3$. En revanche $P(X=-1)P(Y=1) = \\frac{1}{3}\\times\\frac{2}{3} = \\frac{2}{9} \\ne \\frac{1}{3}$, ce qui prouve la non-indépendance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi de la somme", "Convolution discrète"],
                q: "Soient $X, Y$ deux variables aléatoires discrètes réelles. Comment est caractérisée la loi de $S = X+Y$ (cas général, pas nécessairement indépendant) ?",
                options: [
                    { text: "$P(X+Y=s) = \\sum_{x\\in E} P(X=x, Y=s-x)$", isCorrect: true },
                    { text: "$P(X+Y=s) = \\sum_{x\\in E} P(X=x) + P(Y=s-x)$", isCorrect: false },
                    { text: "$P(X+Y=s) = P(X=s) \\times P(Y=s)$", isCorrect: false },
                    { text: "$P(X+Y=s) = \\max_{x\\in E} P(X=x,Y=s-x)$", isCorrect: false }
                ],
                explanation: "La Proposition 5.20 utilise la formule des probabilités totales : on décompose selon toutes les valeurs possibles de $X$, ce qui donne la formule générale valable même sans indépendance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Convolution", "Cas indépendant"],
                q: "Si $X$ et $Y$ sont de plus indépendantes, comment se simplifie la formule de $P(X+Y=s)$ ?",
                options: [
                    { text: "$P(X+Y=s) = \\sum_{x\\in E} P(X=x)P(Y=s-x)$", isCorrect: true },
                    { text: "$P(X+Y=s) = P(X=s)+P(Y=s)$", isCorrect: false },
                    { text: "$P(X+Y=s) = \\sum_{x\\in E} P(X=x, Y=s-x)$ (inchangée)", isCorrect: false },
                    { text: "$P(X+Y=s) = P(X=s)P(Y=s)$", isCorrect: false }
                ],
                explanation: "Sous indépendance, $P(X=x,Y=s-x)=P(X=x)P(Y=s-x)$, ce qui donne le produit de convolution discret des lois de $X$ et $Y$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Convolution", "Densité"],
                q: "Soient $X, Y$ deux variables aléatoires réelles à densité indépendantes, de densités $f^X, f^Y$. Quelle est la densité $f^Z$ de $Z = X+Y$ ?",
                options: [
                    { text: "$f^Z(z) = \\int_{\\mathbb{R}} f^X(w) f^Y(z-w)\\, dw$", isCorrect: true },
                    { text: "$f^Z(z) = f^X(z) + f^Y(z)$", isCorrect: false },
                    { text: "$f^Z(z) = f^X(z) \\times f^Y(z)$", isCorrect: false },
                    { text: "$f^Z(z) = \\int_{\\mathbb{R}} f^X(w) + f^Y(z-w)\\, dw$", isCorrect: false }
                ],
                explanation: "C'est la formule du produit de convolution des densités (Proposition 5.22). Elle est très utilisée en pratique et ne nécessite qu'une intégration à une variable, malgré une preuve plus complexe (hors programme ici).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Convolution", "Exemples classiques"],
                q: "Si $X \\sim \\text{Bin}(n_1, p)$ et $Y \\sim \\text{Bin}(n_2, p)$ sont indépendantes, quelle est la loi de $X+Y$ ?",
                options: [
                    { text: "$\\text{Bin}(n_1+n_2, p)$", isCorrect: true },
                    { text: "$\\text{Bin}(n_1 \\times n_2, p)$", isCorrect: false },
                    { text: "$\\text{Bin}(n_1, p) \\times \\text{Bin}(n_2, p)$", isCorrect: false },
                    { text: "Une loi de Poisson de paramètre $n_1+n_2$", isCorrect: false }
                ],
                explanation: "L'Exemple 5.24 précise que la somme de deux variables binomiales indépendantes de même paramètre $p$ suit une loi binomiale dont le nombre d'essais s'additionne : $\\text{Bin}(n_1+n_2,p)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Convolution", "Loi normale"],
                q: "Si $X \\sim N(\\mu,\\sigma^2)$ et $Y \\sim N(\\nu,\\tau^2)$ sont indépendantes, quelle est la loi de $X+Y$ ?",
                options: [
                    { text: "$N(\\mu+\\nu, \\sigma^2+\\tau^2)$", isCorrect: true },
                    { text: "$N(\\mu\\nu, \\sigma^2\\tau^2)$", isCorrect: false },
                    { text: "$N(\\mu+\\nu, \\sigma^2\\tau^2)$", isCorrect: false },
                    { text: "$N(\\mu-\\nu, |\\sigma^2-\\tau^2|)$", isCorrect: false }
                ],
                explanation: "La stabilité de la loi normale par somme (indépendante) est un résultat classique et important : les moyennes s'additionnent et les variances s'additionnent aussi (jamais les écarts-types directement).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Convergence presque sûre"],
                q: "Que signifie que la suite $(X_n)_{n\\ge1}$ converge presque sûrement vers $X$ ?",
                options: [
                    { text: "$P[\\omega \\in \\Omega : \\lim_{n\\to\\infty} X_n(\\omega) = X(\\omega)] = 1$", isCorrect: true },
                    { text: "$\\forall \\varepsilon>0,\\ \\lim_{n\\to\\infty} P[|X-X_n|\\ge \\varepsilon]=0$", isCorrect: false },
                    { text: "$E(X_n) \\to E(X)$", isCorrect: false },
                    { text: "$X_n(\\omega) = X(\\omega)$ pour tout $\\omega\\in\\Omega$", isCorrect: false }
                ],
                explanation: "La convergence presque sûre demande que l'ensemble des $\\omega$ pour lesquels $X_n(\\omega)\\to X(\\omega)$ ait probabilité 1 ; c'est plus fort que d'exiger l'égalité pour tout $\\omega$, et différent de la convergence en probabilité (deuxième option).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Convergence en probabilité"],
                q: "Que signifie que la suite $(X_n)_{n\\ge1}$ converge en probabilité vers $X$ ?",
                options: [
                    { text: "$\\forall \\varepsilon>0,\\ \\lim_{n\\to+\\infty} P[|X-X_n|\\ge \\varepsilon]=0$", isCorrect: true },
                    { text: "$P[\\omega\\in\\Omega : \\lim_{n\\to\\infty} X_n(\\omega)=X(\\omega)]=1$", isCorrect: false },
                    { text: "$X_n = X$ avec probabilité $1/n$", isCorrect: false },
                    { text: "$\\text{Var}(X_n) \\to 0$", isCorrect: false }
                ],
                explanation: "Notée $X_n \\xrightarrow{P} X$, cette convergence demande que la probabilité que $X_n$ s'écarte de $X$ de plus de $\\varepsilon$ tende vers 0, pour tout $\\varepsilon>0$ fixé.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Modes de convergence", "Comparaison"],
                q: "Quelle est la relation entre convergence presque sûre et convergence en probabilité ?",
                options: [
                    { text: "La convergence presque sûre est plus forte : elle implique la convergence en probabilité", isCorrect: true },
                    { text: "La convergence en probabilité est plus forte que la convergence presque sûre", isCorrect: false },
                    { text: "Les deux notions sont équivalentes", isCorrect: false },
                    { text: "Aucune des deux n'implique l'autre", isCorrect: false }
                ],
                explanation: "La Remarque 5.26 précise que la convergence presque sûre est plus forte que la convergence en probabilité : elle l'implique, mais la réciproque est fausse en général.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi faible des grands nombres"],
                q: "Soit $(X_n)_{n\\ge1}$ une suite i.i.d de carré intégrable, de moyenne $\\mu$ et variance $\\sigma^2$, et $Z_n = \\dfrac{X_1+\\cdots+X_n}{n}$. Que dit la loi faible des grands nombres ?",
                options: [
                    { text: "$(Z_n)$ converge en probabilité vers $\\mu$", isCorrect: true },
                    { text: "$(Z_n)$ converge presque sûrement vers $\\mu$", isCorrect: false },
                    { text: "$(Z_n)$ converge vers $\\sigma^2$", isCorrect: false },
                    { text: "$(Z_n)$ diverge toujours", isCorrect: false }
                ],
                explanation: "La version faible (Théorème 5.27) donne uniquement la convergence en probabilité de la moyenne empirique vers $\\mu$. La convergence presque sûre est un résultat plus fort, objet de la loi forte des grands nombres, qui n'est que mentionnée en remarque dans ce chapitre.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi faible des grands nombres", "Borne explicite"],
                q: "Quelle borne explicite le Théorème 5.27 donne-t-il pour $P(|Z_n-\\mu|\\ge \\varepsilon)$ ?",
                options: [
                    { text: "$P(|Z_n-\\mu|\\ge\\varepsilon) \\le \\dfrac{\\sigma^2}{\\varepsilon^2 n}$", isCorrect: true },
                    { text: "$P(|Z_n-\\mu|\\ge\\varepsilon) \\le \\dfrac{\\sigma^2}{\\varepsilon n^2}$", isCorrect: false },
                    { text: "$P(|Z_n-\\mu|\\ge\\varepsilon) \\ge \\dfrac{\\sigma^2}{\\varepsilon^2 n}$", isCorrect: false },
                    { text: "$P(|Z_n-\\mu|\\ge\\varepsilon) \\le \\dfrac{\\sigma^2}{n}$", isCorrect: false }
                ],
                explanation: "Cette borne explicite résulte de l'application de l'inégalité de Bienaymé-Tchebychev à $Z_n$, avec $\\text{Var}(Z_n)=\\sigma^2/n$, ce qui donne une vitesse de convergence quantitative en $O(1/n)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Loi faible des grands nombres", "Démonstration"],
                q: "Dans la démonstration du Théorème 5.27, que valent $E(Z_n)$ et $\\text{Var}(Z_n)$ (avec $(X_n)$ i.i.d de moyenne $\\mu$ et variance $\\sigma^2$) ?",
                options: [
                    { text: "$E(Z_n) = \\mu$ et $\\text{Var}(Z_n) = \\dfrac{\\sigma^2}{n}$", isCorrect: true },
                    { text: "$E(Z_n) = n\\mu$ et $\\text{Var}(Z_n) = n\\sigma^2$", isCorrect: false },
                    { text: "$E(Z_n) = \\mu$ et $\\text{Var}(Z_n) = \\sigma^2$", isCorrect: false },
                    { text: "$E(Z_n) = \\mu/n$ et $\\text{Var}(Z_n) = \\sigma^2/n^2$", isCorrect: false }
                ],
                explanation: "Par linéarité de l'espérance, $E(Z_n)=\\frac{E(X_1)+\\cdots+E(X_n)}{n}=\\mu$. Par indépendance des $X_i$ et la formule de la variance d'une somme de variables indépendantes, $\\text{Var}(Z_n)=\\frac{\\text{Var}(X_1)+\\cdots+\\text{Var}(X_n)}{n^2}=\\frac{\\sigma^2}{n}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Indépendance", "Fréquentisme"],
                q: "Quel est l'intérêt conceptuel principal de la loi faible des grands nombres, mentionné dans le cours ?",
                options: [
                    { text: "Elle valide l'intuition de l'approche fréquentiste de la définition d'une probabilité", isCorrect: true },
                    { text: "Elle permet de calculer exactement la loi de $X_1$", isCorrect: false },
                    { text: "Elle prouve que toute suite de variables aléatoires converge presque sûrement", isCorrect: false },
                    { text: "Elle remplace l'inégalité de Markov", isCorrect: false }
                ],
                explanation: "Le texte du cours souligne que ce théorème fondamental justifie mathématiquement l'idée intuitive que la fréquence empirique d'un évènement se rapproche de sa probabilité théorique quand le nombre d'observations croît.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
},
    "Probabilités : Espérance, Vecteurs aléatoires & Marche aléatoire (Chapitres 4-6)": {
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Chapitre 4", "Espérance", "Définitions"],
                q: "Soit $(\\Omega, \\mathcal{F}, P)$ un espace probabilisé avec $\\Omega$ fini ou dénombrable, et $X$ une variable aléatoire sur $\\Omega$. Sous quelle condition l'espérance $E(X) = \\sum_{\\omega \\in \\Omega} p_\\omega X(\\omega)$ est-elle bien définie ?",
                options: [
                    { text: "Si $\\sum_{\\omega \\in \\Omega} p_\\omega |X(\\omega)|$ est finie", isCorrect: true },
                    { text: "Si $X$ est positive", isCorrect: false },
                    { text: "Toujours, sans aucune condition", isCorrect: false },
                    { text: "Si $\\Omega$ est fini uniquement", isCorrect: false }
                ],
                explanation: "D'après la Définition 4.1, l'espérance $E(X) = \\sum_{\\omega \\in \\Omega} p_\\omega X(\\omega)$ n'est définie que si la somme $\\sum_{\\omega \\in \\Omega} p_\\omega |X(\\omega)|$ est finie, c'est-à-dire si $X$ est intégrable. Cette condition garantit que la somme converge de manière absolue, ce qui est nécessaire car $\\Omega$ peut être infini dénombrable.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Espérance", "Théorème de transfert"],
                q: "Le Théorème 4.2 permet d'écrire $E(X) = \\sum_{i \\in I} x_i P(X = x_i)$. Quelle est la portée fondamentale de ce résultat ?",
                options: [
                    { text: "L'espérance ne dépend que de la loi de $X$, pas de l'espace $\\Omega$ sous-jacent", isCorrect: true },
                    { text: "Il permet de calculer la variance directement", isCorrect: false },
                    { text: "Il prouve que toute variable aléatoire est intégrable", isCorrect: false },
                    { text: "Il s'applique uniquement aux variables aléatoires continues", isCorrect: false }
                ],
                explanation: "Ce théorème est important car il permet de passer de l'espace de départ $(\\Omega, \\mathcal{F}, P)$, souvent abstrait, à l'espace d'arrivée (sous-ensemble de $\\mathbb{R}$). On en déduit que l'espérance ne dépend que de la loi $P_X$ de la variable aléatoire, et non de la structure fine de $\\Omega$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Espérance", "Variables étagées"],
                q: "Une variable aléatoire $X$ est dite étagée si :",
                options: [
                    { text: "Elle ne prend qu'un nombre fini de valeurs $x_1, \\ldots, x_m$", isCorrect: true },
                    { text: "Elle est toujours positive", isCorrect: false },
                    { text: "Elle prend une infinité dénombrable de valeurs", isCorrect: false },
                    { text: "Elle admet une densité", isCorrect: false }
                ],
                explanation: "Par la Définition 4.3, une variable aléatoire étagée ne prend qu'un nombre fini de valeurs $x_1, \\ldots, x_m$, et s'écrit $X = \\sum_{i=1}^m x_i \\mathbb{I}_{A_i}$ où $A_i = \\{X = x_i\\}$. C'est la brique de base pour construire l'espérance des variables positives puis intégrables.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Espérance", "Construction"],
                q: "Quel est l'ordre de construction de l'espérance pour une variable aléatoire réelle générale, selon le cours ?",
                options: [
                    { text: "Étagées → positives → intégrables", isCorrect: true },
                    { text: "Intégrables → positives → étagées", isCorrect: false },
                    { text: "Positives → intégrables → étagées", isCorrect: false },
                    { text: "Discrètes → à densité → générales", isCorrect: false }
                ],
                explanation: "On définit d'abord l'espérance pour les variables étagées via le Théorème 4.2, puis on l'étend aux variables positives par $E(X) = \\sup\\{E(Z) : Z \\text{ étagée positive}, Z \\leq X\\}$, et enfin aux variables intégrables via la décomposition $X = X^+ - X^-$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Espérance", "Intégrabilité"],
                q: "Une variable aléatoire $X$ est dite intégrable si :",
                options: [
                    { text: "$E(X^+) < \\infty$ et $E(X^-) < \\infty$", isCorrect: true },
                    { text: "$E(|X|) < \\infty$", isCorrect: true },
                    { text: "$X$ ne prend que des valeurs positives", isCorrect: false },
                    { text: "$X^2$ est bornée", isCorrect: false }
                ],
                explanation: "Ces deux conditions sont équivalentes : $X = X^+ - X^-$ avec $X^+ = \\max\\{0, X\\}$ et $X^- = \\max\\{0, -X\\}$, et comme $|X| = X^+ + X^-$, on a $E(X^+) < \\infty$ et $E(X^-) < \\infty$ si et seulement si $E(|X|) < \\infty$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Espérance", "Propriétés fondamentales"],
                q: "Parmi les propriétés suivantes de l'espérance, lesquelles sont correctes ?",
                options: [
                    { text: "$E(\\mathbb{I}_A) = P(A)$ pour tout évènement $A$", isCorrect: true },
                    { text: "$E(aX + bY) = aE(X) + bE(Y)$ pour $X, Y$ intégrables et $a, b \\in \\mathbb{R}$ (linéarité)", isCorrect: true },
                    { text: "$X \\leq Y$ p.s. implique $E(X) \\geq E(Y)$", isCorrect: false },
                    { text: "$|E(X)| \\leq E(|X|)$", isCorrect: true }
                ],
                explanation: "La Proposition 4.6 énumère : espérance d'une indicatrice égale à la probabilité de l'évènement, linéarité de l'espérance (qui fait de $L^1$ un espace vectoriel), monotonie ($X \\leq Y$ p.s. implique $E(X) \\leq E(Y)$, pas l'inverse), et l'inégalité triangulaire $|E(X)| \\leq E(|X|)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Espérance", "Convergence"],
                q: "Le théorème de convergence monotone énonce que si $(X_n)_{n\\geq 1}$ est une suite croissante et positive p.s. qui converge vers $X$ p.s., alors :",
                options: [
                    { text: "$E(X_n) \\to E(X)$ quand $n \\to \\infty$", isCorrect: true },
                    { text: "$X_n$ converge vers $X$ en probabilité seulement", isCorrect: false },
                    { text: "$E(X_n)$ est constante", isCorrect: false },
                    { text: "$X$ doit être bornée", isCorrect: false }
                ],
                explanation: "C'est le point 5 de la Proposition 4.6 : sous les hypothèses de croissance, positivité p.s. et convergence p.s., les espérances convergent aussi : $E(X_n) \\xrightarrow{n\\to\\infty} E(X)$. Ce théorème est fondamental pour définir l'espérance des variables positives générales à partir des variables étagées.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Espérance", "Convergence dominée"],
                q: "Quelles sont les hypothèses du théorème de convergence dominée ?",
                options: [
                    { text: "$(X_n)_{n\\geq 1}$ converge vers $X$ p.s.", isCorrect: true },
                    { text: "Il existe $Y$ intégrable telle que $|X_n| \\leq Y$ p.s. pour tout $n$", isCorrect: true },
                    { text: "$(X_n)_{n\\geq 1}$ doit être une suite croissante", isCorrect: false },
                    { text: "Toutes les $X_n$ doivent être positives", isCorrect: false }
                ],
                explanation: "Contrairement à la convergence monotone, la convergence dominée ne nécessite ni croissance ni positivité, mais requiert l'existence d'une variable dominante intégrable $Y$ telle que $|X_n| \\leq Y$ p.s. pour tout $n$. Sous ces conditions, $X$ est intégrable et $E(X_n) \\to E(X)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Espérance", "Caractérisation de la loi"],
                q: "D'après le Théorème 4.8, deux variables aléatoires $X$ et $Y$ ont même loi si et seulement si :",
                options: [
                    { text: "Pour toute fonction $h : \\mathbb{R} \\to \\mathbb{R}$ continue et bornée, $E(h(X)) = E(h(Y))$", isCorrect: true },
                    { text: "$E(X) = E(Y)$", isCorrect: false },
                    { text: "$Var(X) = Var(Y)$", isCorrect: false },
                    { text: "$X$ et $Y$ ont la même fonction de répartition uniquement pour $x=0$", isCorrect: false }
                ],
                explanation: "L'égalité des espérances ou des variances seules ne caractérise pas la loi (contre-exemple facile à construire). En revanche, l'égalité de $E(h(X))$ et $E(h(Y))$ pour toute fonction continue bornée $h$ est équivalente à l'égalité des lois, car cela permet de reconstruire la fonction de répartition par approximation.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Théorème de transfert"],
                q: "Pour une variable aléatoire discrète $X$ à valeurs dans $E = \\{x_i\\}_{i \\in I}$, le théorème de transfert donne $E(h(X))$ égal à :",
                options: [
                    { text: "$\\sum_{i \\in I} h(x_i) P(X = x_i)$", isCorrect: true },
                    { text: "$\\int_{-\\infty}^{\\infty} h(x) f(x) dx$", isCorrect: false },
                    { text: "$h(E(X))$", isCorrect: false },
                    { text: "$\\sum_{i \\in I} h(x_i)$", isCorrect: false }
                ],
                explanation: "Le Théorème 4.10 (théorème de transfert), version discrète, permet de calculer $E(h(X))$ directement à partir de la loi de $X$ sans passer par la loi de $h(X)$ : $E(h(X)) = \\sum_{i \\in I} h(x_i) P(X = x_i)$, sous réserve de convergence absolue.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Théorème de transfert", "Densité"],
                q: "Pour une variable aléatoire à densité $f$, le théorème de transfert donne :",
                options: [
                    { text: "$E(h(X)) = \\int_{-\\infty}^{\\infty} h(x) f(x) dx$", isCorrect: true },
                    { text: "$E(h(X)) = \\sum_i h(x_i) f(x_i)$", isCorrect: false },
                    { text: "$E(h(X)) = h(E(X))$", isCorrect: false },
                    { text: "$E(h(X)) = \\int_{-\\infty}^{\\infty} h(f(x)) dx$", isCorrect: false }
                ],
                explanation: "Pour les variables à densité, la version continue du théorème de transfert (Théorème 4.10) donne $E(h(X)) = \\int_{-\\infty}^{\\infty} h(x) f(x) dx$, sous condition d'intégrabilité $\\int |h(x)| f(x) dx < \\infty$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Densité", "Changement de variable"],
                q: "Soit $X$ une variable aléatoire à densité $f$, et $Y = aX + b$ avec $a \\neq 0$. Quelle est la densité $f^Y$ de $Y$ ?",
                options: [
                    { text: "$f^Y(y) = f\\left(\\frac{y-b}{a}\\right) \\frac{1}{|a|}$", isCorrect: true },
                    { text: "$f^Y(y) = a f(y) + b$", isCorrect: false },
                    { text: "$f^Y(y) = f(ay + b)$", isCorrect: false },
                    { text: "$f^Y(y) = \\frac{1}{a} f(y-b)$", isCorrect: false }
                ],
                explanation: "L'Exemple 4.13 montre, via un changement de variable $y = ax+b$ dans l'intégrale du théorème de transfert, que $f^Y(y) = f\\left(\\frac{y-b}{a}\\right) \\frac{1}{|a|}$. Le facteur $\\frac{1}{|a|}$ vient du jacobien du changement de variable et assure que $f^Y$ s'intègre bien à 1.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Variance", "Définitions"],
                q: "La variance d'une variable aléatoire $X$ de carré intégrable est définie par :",
                options: [
                    { text: "$Var(X) = E[(X - E(X))^2]$", isCorrect: true },
                    { text: "$Var(X) = E(X^2) - E(X)^2$", isCorrect: true },
                    { text: "$Var(X) = E(X^2)$", isCorrect: false },
                    { text: "$Var(X) = \\sigma(X)$", isCorrect: false }
                ],
                explanation: "Les deux premières formules sont équivalentes (Propriété 4.18, point 4) : $Var(X) = E[(X-E(X))^2] = E(X^2) - E(X)^2$. La dernière option est fausse car $\\sigma(X) = \\sqrt{Var(X)}$ est l'écart-type, pas la variance elle-même.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Variance", "Propriétés"],
                q: "Parmi les propriétés suivantes de la variance, lesquelles sont vraies pour $a \\in \\mathbb{R}$ ?",
                options: [
                    { text: "$Var(X+a) = Var(X)$", isCorrect: true },
                    { text: "$Var(aX) = a^2 Var(X)$", isCorrect: true },
                    { text: "$Var(X) \\geq 0$", isCorrect: true },
                    { text: "$Var(aX) = a \\cdot Var(X)$", isCorrect: false }
                ],
                explanation: "La Propriété 4.18 donne : $Var(X) \\geq 0$ (car c'est l'espérance d'un carré), $Var(X+a) = Var(X)$ (la variance est invariante par translation) et $Var(aX) = a^2 Var(X)$ (facteur au carré car $Var$ est une forme quadratique). La dernière option confond variance et espérance (linéaire).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Écart-type"],
                q: "Pourquoi utilise-t-on souvent l'écart-type plutôt que la variance en statistique ?",
                options: [
                    { text: "L'écart-type a la même unité que la variable aléatoire, contrairement à la variance qui a l'unité au carré", isCorrect: true },
                    { text: "L'écart-type est toujours plus grand que la variance", isCorrect: false },
                    { text: "L'écart-type est toujours nul", isCorrect: false },
                    { text: "La variance n'existe pas pour les variables continues", isCorrect: false }
                ],
                explanation: "Comme le note la remarque après la Définition 4.17, si $X$ a une unité (mètres, euros...), l'écart-type $\\sigma(X) = \\sqrt{Var(X)}$ a la même unité, alors que la variance a l'unité au carré. C'est pourquoi l'écart-type est plus interprétable en pratique.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Variable centrée-réduite"],
                q: "Une variable aléatoire $X$ est dite centrée-réduite si :",
                options: [
                    { text: "$E(X) = 0$ et $Var(X) = 1$", isCorrect: true },
                    { text: "$E(X) = 1$ et $Var(X) = 0$", isCorrect: false },
                    { text: "$E(X) = Var(X)$", isCorrect: false },
                    { text: "$X$ suit une loi uniforme", isCorrect: false }
                ],
                explanation: "Par la Définition 4.17, $X$ est dite réduite si $Var(X) = 1$, et centrée-réduite si de plus $E(X) = 0$. C'est une transformation courante en statistique pour standardiser une variable aléatoire.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Covariance", "Définitions"],
                q: "La covariance de deux variables aléatoires $X, Y$ de carré intégrable est définie par :",
                options: [
                    { text: "$Cov(X,Y) = E[(X - E(X))(Y - E(Y))]$", isCorrect: true },
                    { text: "$Cov(X,Y) = E(XY) - E(X)E(Y)$", isCorrect: true },
                    { text: "$Cov(X,Y) = E(X)E(Y)$", isCorrect: false },
                    { text: "$Cov(X,Y) = Var(X) + Var(Y)$", isCorrect: false }
                ],
                explanation: "La Définition 4.20 et la Proposition 4.21 (point 4) donnent deux formules équivalentes : $Cov(X,Y) = E[(X-E(X))(Y-E(Y))] = E(XY) - E(X)E(Y)$. Cette dernière formule est souvent plus pratique en calcul.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Covariance", "Bilinéarité"],
                q: "La covariance, en tant que forme bilinéaire symétrique sur $L^2$, vérifie :",
                options: [
                    { text: "$Cov(X,X) = Var(X)$", isCorrect: true },
                    { text: "$Cov(aX+bY, Z) = a\\,Cov(X,Z) + b\\,Cov(Y,Z)$", isCorrect: true },
                    { text: "$Cov(X,Y) = Cov(Y,X)$ (symétrie)", isCorrect: true },
                    { text: "$Cov(X,Y)$ est toujours positive", isCorrect: false }
                ],
                explanation: "La Proposition 4.21 établit que la covariance est bilinéaire ($Cov(aX+bY,Z) = a\\,Cov(X,Z)+b\\,Cov(Y,Z)$), symétrique ($Cov(X,Y)=Cov(Y,X)$), et que sa forme quadratique associée est la variance ($Cov(X,X) = Var(X)$). Elle peut être négative, nulle ou positive selon la relation entre $X$ et $Y$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Variance", "Somme"],
                q: "La relation entre variance de la somme et covariance s'écrit :",
                options: [
                    { text: "$Var(X+Y) = Var(X) + Var(Y) + 2\\,Cov(X,Y)$", isCorrect: true },
                    { text: "$Var(X+Y) = Var(X) + Var(Y)$", isCorrect: false },
                    { text: "$Var(X+Y) = Var(X) \\cdot Var(Y)$", isCorrect: false },
                    { text: "$Var(X+Y) = Var(X) - Var(Y)$", isCorrect: false }
                ],
                explanation: "Le point 5 de la Proposition 4.21 donne $Var(X+Y) = Var(X) + Var(Y) + 2\\,Cov(X,Y)$. La deuxième option n'est vraie que dans le cas particulier où $X$ et $Y$ sont indépendantes (ou plus généralement non corrélées), car alors $Cov(X,Y) = 0$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Matrice de covariance"],
                q: "Concernant la matrice de covariance de $X_1, \\ldots, X_n$ (variables aléatoires de carré intégrable), quelles affirmations sont vraies ?",
                options: [
                    { text: "C'est une matrice réelle symétrique", isCorrect: true },
                    { text: "Sa diagonale est formée des variances des $X_i$", isCorrect: true },
                    { text: "$Var\\left(\\sum_{i=1}^n X_i\\right) = \\sum_{i=1}^n Var(X_i) + 2\\sum_{1\\leq i<j\\leq n} Cov(X_i,X_j)$", isCorrect: true },
                    { text: "Elle est toujours diagonale", isCorrect: false }
                ],
                explanation: "La Propriété 4.24 confirme la symétrie de la matrice de covariance, sa diagonale formée des variances, et la formule généralisée de la variance d'une somme. Elle n'est diagonale que dans des cas particuliers, notamment lorsque les variables sont deux à deux non corrélées (par exemple indépendantes).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Corrélation"],
                q: "La corrélation $Cor(X,Y)$ entre deux variables aléatoires de variances non nulles est définie et bornée par :",
                options: [
                    { text: "$Cor(X,Y) = \\frac{Cov(X,Y)}{\\sigma(X)\\sigma(Y)}$, avec $-1 \\leq Cor(X,Y) \\leq 1$", isCorrect: true },
                    { text: "$Cor(X,Y) = Cov(X,Y)$ directement", isCorrect: false },
                    { text: "$Cor(X,Y)$ peut dépasser 1 en valeur absolue", isCorrect: false },
                    { text: "$Cor(X,Y)$ a la même unité que $X$", isCorrect: false }
                ],
                explanation: "La Définition 4.20 donne $Cor(X,Y) = \\frac{Cov(X,Y)}{\\sigma(X)\\sigma(Y)}$, et la Proposition 4.32 (conséquence de Cauchy-Schwarz) montre que $-1 \\leq Cor(X,Y) \\leq 1$. La corrélation est sans unité, ce qui la rend très utile en statistique pour comparer différentes paires de variables.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Moments"],
                q: "Le moment d'ordre $n$ d'une variable aléatoire $X$ est défini comme $E(X^n)$, à condition que :",
                options: [
                    { text: "$X^n$ soit intégrable", isCorrect: true },
                    { text: "$X$ soit toujours positive", isCorrect: false },
                    { text: "$n$ soit pair", isCorrect: false },
                    { text: "$X$ suive une loi normale", isCorrect: false }
                ],
                explanation: "Selon la Définition 4.26, si $X^n$ est intégrable, la quantité $E(X^n)$ est bien définie et appelée moment d'ordre $n$ de $X$. Il n'y a pas de restriction sur la parité de $n$ ni sur le signe de $X$, ni sur la loi de $X$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Inégalité de Markov"],
                q: "L'inégalité de Markov énonce, pour $X$ admettant un moment d'ordre $n \\geq 1$ et $a > 0$ :",
                options: [
                    { text: "$P(|X| \\geq a) \\leq \\frac{E[|X|^n]}{a^n}$", isCorrect: true },
                    { text: "$P(|X| \\geq a) \\geq \\frac{E[|X|^n]}{a^n}$", isCorrect: false },
                    { text: "$P(|X| \\geq a) \\leq \\frac{Var(X)}{a^2}$", isCorrect: false },
                    { text: "$P(|X| \\geq a) = \\frac{E[|X|^n]}{a^n}$", isCorrect: false }
                ],
                explanation: "La Proposition 4.28 donne l'inégalité de Markov : $P(|X| \\geq a) \\leq \\frac{E[|X|^n]}{a^n}$ pour tout $a > 0$. C'est une borne (inégalité, pas égalité) qui utilise le fait que $|X|^n \\geq a^n \\mathbb{I}_{\\{|X|\\geq a\\}}$. La troisième option correspond en réalité à l'inégalité de Bienaymé-Tchebychev.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Inégalité de Bienaymé-Tchebychev"],
                q: "L'inégalité de Bienaymé-Tchebychev, pour $X$ de carré intégrable et $a > 0$, s'écrit :",
                options: [
                    { text: "$P[|X - E(X)| \\geq a] \\leq \\frac{Var(X)}{a^2}$", isCorrect: true },
                    { text: "$P[|X - E(X)| \\geq a] \\leq \\frac{E(X)}{a}$", isCorrect: false },
                    { text: "C'est une conséquence de l'inégalité de Markov appliquée à $Y = X - E(X)$ avec $n=2$", isCorrect: true },
                    { text: "Elle nécessite que $X$ suive une loi normale", isCorrect: false }
                ],
                explanation: "La Proposition 4.29 montre que l'inégalité de Bienaymé-Tchebychev $P[|X-E(X)| \\geq a] \\leq \\frac{Var(X)}{a^2}$ s'obtient en appliquant Markov à $Y = X - E(X)$ avec $n=2$. Elle est valable pour toute variable aléatoire de carré intégrable, sans hypothèse de loi particulière, et quantifie que plus la variance est grande, plus les fluctuations autour de la moyenne sont potentiellement grandes.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Inégalité de Jensen"],
                q: "L'inégalité de Jensen énonce, pour $X$ intégrable et $f$ continue convexe telle que $f(X)$ est intégrable :",
                options: [
                    { text: "$E(f(X)) \\geq f(E(X))$", isCorrect: true },
                    { text: "$E(f(X)) \\leq f(E(X))$", isCorrect: false },
                    { text: "$E(f(X)) = f(E(X))$", isCorrect: false },
                    { text: "Elle nécessite que $f$ soit concave", isCorrect: false }
                ],
                explanation: "La Proposition 4.30 donne $E(f(X)) \\geq f(E(X))$ pour $f$ convexe. La preuve utilise le fait qu'une fonction convexe est toujours au-dessus de sa tangente en tout point, en particulier au point $a = E(X)$. Pour $f$ concave, l'inégalité serait inversée.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Inégalité de Cauchy-Schwarz"],
                q: "L'inégalité de Cauchy-Schwarz pour deux variables aléatoires $X, Y$ de carré intégrable donne :",
                options: [
                    { text: "$|E(XY)| \\leq \\sqrt{E(X^2)E(Y^2)}$", isCorrect: true },
                    { text: "$E(XY) = E(X)E(Y)$", isCorrect: false },
                    { text: "$XY$ n'est pas nécessairement intégrable", isCorrect: false },
                    { text: "$|E(XY)| \\geq \\sqrt{E(X^2)E(Y^2)}$", isCorrect: false }
                ],
                explanation: "La Proposition 4.31 énonce que si $X, Y$ sont de carré intégrable, alors $XY$ est intégrable (conséquence de $|XY| \\leq \\frac{1}{2}(X^2+Y^2)$) et $|E(XY)| \\leq \\sqrt{E(X^2)E(Y^2)}$. Cette inégalité est à la base de la borne sur la covariance et la corrélation.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "L1 L2"],
                q: "Quelle est la relation entre les espaces $L^1(\\Omega,\\mathcal{F},P)$ et $L^2(\\Omega,\\mathcal{F},P)$ ?",
                options: [
                    { text: "$L^2$ est un sous-espace vectoriel de $L^1$", isCorrect: true },
                    { text: "$L^1$ est un sous-espace vectoriel de $L^2$", isCorrect: false },
                    { text: "$L^1$ et $L^2$ sont toujours égaux", isCorrect: false },
                    { text: "$E(|X|) \\leq \\sqrt{E(X^2)}$ pour $X$ de carré intégrable", isCorrect: true }
                ],
                explanation: "La Proposition 4.16 montre que si $X$ est de carré intégrable, alors $E(|X|) \\leq \\sqrt{E(X^2)}$, ce qui implique que $X$ est intégrable. Donc $L^2$ est un sous-espace vectoriel de $L^1$ (la réciproque est fausse en général : une variable peut être intégrable sans être de carré intégrable).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Vecteurs aléatoires discrets"],
                q: "Un vecteur aléatoire discret $X = (X_1, \\ldots, X_n)$ est caractérisé par le fait que :",
                options: [
                    { text: "Chacune de ses composantes est une variable aléatoire discrète", isCorrect: true },
                    { text: "$X$ prend nécessairement une infinité non dénombrable de valeurs", isCorrect: false },
                    { text: "L'espace d'arrivée $E = E_1 \\times \\cdots \\times E_n$ est fini ou dénombrable", isCorrect: true },
                    { text: "Toutes les composantes doivent avoir la même loi", isCorrect: false }
                ],
                explanation: "La Remarque 5.2 précise que $X$ est un vecteur aléatoire discret si et seulement si chacune de ses composantes est discrète, et que l'espace d'arrivée $E_1 \\times \\cdots \\times E_n$ est bien fini ou dénombrable car produit cartésien fini d'ensembles finis ou dénombrables. Il n'y a aucune exigence sur l'égalité des lois des composantes.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Loi jointe", "Loi marginale"],
                q: "Pour un couple aléatoire discret $(X,Y)$, la loi marginale de $X$ se retrouve à partir de la loi jointe par :",
                options: [
                    { text: "$P(X=x) = \\sum_{y \\in F} P(X=x, Y=y)$", isCorrect: true },
                    { text: "$P(X=x) = P(X=x,Y=y)$ pour un $y$ fixé quelconque", isCorrect: false },
                    { text: "$P(X=x) = \\max_y P(X=x,Y=y)$", isCorrect: false },
                    { text: "$P(X=x)$ ne peut pas être retrouvée à partir de la loi jointe", isCorrect: false }
                ],
                explanation: "La Définition 5.4 (point 3) montre que la loi marginale de $X$ s'obtient en sommant la loi jointe sur toutes les valeurs de $Y$ : $P_X(\\{x\\}) = \\sum_{y \\in F} P(X=x, Y=y)$. C'est une conséquence de la formule des probabilités totales.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Loi jointe", "Lois marginales"],
                q: "Connaître les lois marginales de $X$ et $Y$ suffit-il à déterminer la loi jointe du couple $(X,Y)$ ?",
                options: [
                    { text: "Non, en général la réciproque est fausse", isCorrect: true },
                    { text: "Oui, toujours", isCorrect: false },
                    { text: "Oui, mais seulement si $X$ et $Y$ sont discrètes", isCorrect: false },
                    { text: "Oui, mais seulement si $X = Y$", isCorrect: false }
                ],
                explanation: "La Remarque 5.8 souligne que la loi du couple $(X,Y)$ détermine les lois marginales, mais la réciproque est fausse : connaître les lois de $X$ et $Y$ séparément n'entraîne pas la connaissance de la loi du couple. L'Exemple 5.6 illustre ceci avec des couples ayant les mêmes marginales uniformes mais des lois jointes différentes selon $p$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Exemple", "Covariance"],
                q: "Dans l'Exemple 5.6, un couple $(X,Y)$ à valeurs dans $\\{-1,1\\}^2$ a pour probabilités $\\frac{1}{2}-p, p, p, \\frac{1}{2}-p$ (dans l'ordre $(-1,-1),(-1,1),(1,-1),(1,1)$). Quelle est la covariance $Cov(X,Y)$ ?",
                options: [
                    { text: "$Cov(X,Y) = 1 - 4p$", isCorrect: true },
                    { text: "$Cov(X,Y) = 4p - 1$", isCorrect: false },
                    { text: "$Cov(X,Y) = 0$ pour toute valeur de $p$", isCorrect: false },
                    { text: "$Cov(X,Y) = p$", isCorrect: false }
                ],
                explanation: "Dans l'Exemple 5.6, $X$ et $Y$ suivent chacune la loi uniforme sur $\\{-1,1\\}$ donc $E(X)=E(Y)=0$. Le calcul de $E(XY)$ par le théorème de transfert donne $E(XY) = 2(\\frac{1}{2}-p) - 2p = 1-4p$, donc $Cov(X,Y) = E(XY) - E(X)E(Y) = 1-4p$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Loi conditionnelle"],
                q: "La loi conditionnelle de $Y$ sachant $\\{X=x\\}$ (avec $P(X=x)>0$) est définie par :",
                options: [
                    { text: "$P(\\{Y=y\\}|\\{X=x\\}) = \\frac{P_{(X,Y)}(\\{(x,y)\\})}{P_X(\\{x\\})}$", isCorrect: true },
                    { text: "$P(\\{Y=y\\}|\\{X=x\\}) = P_{(X,Y)}(\\{(x,y)\\}) \\cdot P_X(\\{x\\})$", isCorrect: false },
                    { text: "$P(\\{Y=y\\}|\\{X=x\\}) = P_Y(\\{y\\})$ toujours", isCorrect: false },
                    { text: "$P(\\{Y=y\\}|\\{X=x\\})$ n'est définie que si $Y$ est indépendante de $X$", isCorrect: false }
                ],
                explanation: "La Définition 5.7 donne exactement cette formule, cohérente avec la définition classique de la probabilité conditionnelle vue au Chapitre 2 : $P(\\{Y=y\\}|\\{X=x\\}) = \\frac{P(\\{Y=y,X=x\\})}{P(\\{X=x\\})} = \\frac{P_{(X,Y)}(\\{(x,y)\\})}{P_X(\\{x\\})}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Espérance conditionnelle"],
                q: "L'espérance conditionnelle $E(Y|X)$ est :",
                options: [
                    { text: "Une variable aléatoire fonction de $X$, contrairement à l'espérance classique qui est un nombre réel", isCorrect: true },
                    { text: "Toujours un nombre réel constant", isCorrect: false },
                    { text: "Définie par $\\psi(X)$ où $\\psi(x) = E(Y|X=x)$ si $P(X=x)>0$", isCorrect: true },
                    { text: "Égale à $E(Y)$ dans tous les cas", isCorrect: false }
                ],
                explanation: "La Remarque 5.10 souligne bien cette différence fondamentale : contrairement à l'espérance $E(Y)$ qui est un nombre réel, l'espérance conditionnelle $E(Y|X)$ est une variable aléatoire (fonction de l'aléa à travers $X$), définie via la Définition 5.9 comme $\\psi(X)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Espérance conditionnelle", "Théorème"],
                q: "Le Théorème 5.11 (formule de l'espérance totale) énonce que si $Y$ est intégrable :",
                options: [
                    { text: "$E[E(Y|X)] = E(Y)$", isCorrect: true },
                    { text: "$E[E(Y|X)] = E(X)$", isCorrect: false },
                    { text: "$E(Y|X)$ n'est jamais intégrable", isCorrect: false },
                    { text: "$E[E(Y|X)] = 0$ toujours", isCorrect: false }
                ],
                explanation: "Le Théorème 5.11 (formule de l'espérance totale) est un résultat fondamental : $E[E(Y|X)] = E(Y)$. La démonstration passe par le théorème de transfert et la formule des probabilités totales, en montrant que l'espérance conditionnelle est intégrable si $Y$ l'est.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Espérance conditionnelle", "Propriétés"],
                q: "Parmi les propriétés de l'espérance conditionnelle du Théorème 5.12, lesquelles sont correctes ?",
                options: [
                    { text: "Linéarité : $E(aY+bZ|X) = aE(Y|X) + bE(Z|X)$", isCorrect: true },
                    { text: "Si $g(X)$ est intégrable, $E[Yg(X)|X] = g(X)E(Y|X)$ ($g(X)$ se comporte comme une constante)", isCorrect: true },
                    { text: "$E(1|X) = 1$", isCorrect: true },
                    { text: "$Y \\geq 0 \\Rightarrow E(Y|X) \\leq 0$", isCorrect: false }
                ],
                explanation: "Le Théorème 5.12 liste : linéarité, positivité ($Y\\geq 0 \\Rightarrow E(Y|X) \\geq 0$, pas $\\leq 0$), $E(1|X)=1$, et la propriété que toute fonction $g(X)$ mesurable et intégrable se comporte comme une constante vis-à-vis de l'espérance conditionnelle sachant $X$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Indépendance", "Définition"],
                q: "Deux variables aléatoires discrètes $X$ et $Y$ sont indépendantes si :",
                options: [
                    { text: "Pour tout $A \\in \\mathcal{P}(E)$, $B \\in \\mathcal{P}(F)$, $P(X \\in A, Y \\in B) = P(X \\in A)P(Y \\in B)$", isCorrect: true },
                    { text: "$E(X) = E(Y)$", isCorrect: false },
                    { text: "$Cov(X,Y) = 0$", isCorrect: false },
                    { text: "Elles ont la même loi", isCorrect: false }
                ],
                explanation: "La Définition 5.14 caractérise l'indépendance par la factorisation des probabilités jointes pour tous ensembles $A, B$. Les autres critères sont soit nécessaires mais non suffisants (comme $Cov(X,Y)=0$, voir Remarque 5.19), soit sans rapport avec l'indépendance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "i.i.d."],
                q: "Une famille de variables aléatoires est dite i.i.d. (indépendantes et identiquement distribuées) si :",
                options: [
                    { text: "Elles sont indépendantes et toutes de même loi", isCorrect: true },
                    { text: "Elles sont indépendantes mais pas nécessairement de même loi", isCorrect: false },
                    { text: "Elles ont la même loi mais ne sont pas nécessairement indépendantes", isCorrect: false },
                    { text: "Elles sont toutes égales entre elles", isCorrect: false }
                ],
                explanation: "La Définition 5.14 précise clairement les deux conditions cumulatives : indépendance mutuelle ET même loi pour toutes les variables de la famille. C'est une hypothèse centrale de la loi des grands nombres (Théorème 5.27).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Indépendance", "Caractérisations"],
                q: "D'après le Théorème 5.16, laquelle des conditions suivantes est équivalente à l'indépendance de $X$ et $Y$ ?",
                options: [
                    { text: "$\\forall x \\in E, y \\in F : P(\\{X=x,Y=y\\}) = P(\\{X=x\\})P(\\{Y=y\\})$", isCorrect: true },
                    { text: "Pour toutes fonctions bornées $f, g$, $E[f(X)g(Y)] = E[f(X)]E[g(Y)]$", isCorrect: true },
                    { text: "$\\forall x, P(X=x) > 0 \\Rightarrow P_Y(\\cdot|\\{X=x\\}) = P_Y(\\cdot)$", isCorrect: true },
                    { text: "$E(X+Y) = E(X) + E(Y)$", isCorrect: false }
                ],
                explanation: "Le Théorème 5.16 énonce cinq conditions équivalentes à l'indépendance, dont la factorisation ponctuelle des lois, l'égalité de la loi conditionnelle et de la loi marginale, et la factorisation de $E[f(X)g(Y)]$. La linéarité de l'espérance $E(X+Y)=E(X)+E(Y)$ est toujours vraie, indépendance ou non, donc elle ne caractérise pas l'indépendance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Indépendance", "Conséquences"],
                q: "Si $X, Y$ sont deux variables aléatoires de carré intégrable et indépendantes, quelles conséquences en découlent (Proposition 5.18) ?",
                options: [
                    { text: "$E(XY) = E(X)E(Y)$", isCorrect: true },
                    { text: "$Cov(X,Y) = 0$", isCorrect: true },
                    { text: "$Var(X+Y) = Var(X) + Var(Y)$", isCorrect: true },
                    { text: "$X$ et $Y$ ont nécessairement la même loi", isCorrect: false }
                ],
                explanation: "La Proposition 5.18 découle directement du Théorème 5.16 : indépendance implique $E(XY)=E(X)E(Y)$, donc $Cov(X,Y)=0$, et donc $Var(X+Y)=Var(X)+Var(Y)$. L'indépendance ne dit rien sur l'égalité des lois (ce serait la propriété i.i.d.).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Covariance nulle", "Contre-exemple"],
                q: "La réciproque de « indépendance implique covariance nulle » est-elle vraie ?",
                options: [
                    { text: "Non : covariance nulle n'implique pas indépendance", isCorrect: true },
                    { text: "Oui, toujours", isCorrect: false },
                    { text: "Oui, mais seulement pour les variables gaussiennes", isCorrect: false },
                    { text: "Oui, mais seulement pour les variables discrètes finies", isCorrect: false }
                ],
                explanation: "La Remarque 5.19 donne un contre-exemple explicite : $Z$ uniforme sur $\\{-1,0,1\\}$, $X=Z$, $Y=Z^2$. On a $Cov(X,Y)=0$ mais $X$ et $Y$ ne sont pas indépendantes, car $P(X=-1,Y=1) = 1/3 \\neq P(X=-1)P(Y=1) = 2/9$. (Note : la réciproque est vraie pour les vecteurs gaussiens, mais ce cas dépasse le cadre du cours.)",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Loi de la somme", "Convolution"],
                q: "Pour $X, Y$ deux variables aléatoires discrètes réelles indépendantes, la loi de $S = X+Y$ est donnée par :",
                options: [
                    { text: "$P(X+Y=s) = \\sum_{x \\in E} P(X=x)P(Y=s-x)$", isCorrect: true },
                    { text: "$P(X+Y=s) = P(X=s)P(Y=s)$", isCorrect: false },
                    { text: "$P(X+Y=s) = P(X=s) + P(Y=s)$", isCorrect: false },
                    { text: "$P(X+Y=s)$ ne peut se calculer que numériquement", isCorrect: false }
                ],
                explanation: "La Proposition 5.20 donne, dans le cas indépendant, $P(X+Y=s) = \\sum_{x\\in E} P(X=x)P(Y=s-x)$, appelée produit de convolution des lois de $X$ et $Y$ (Définition 5.23). Sans indépendance, il faut utiliser la formule générale avec $P(X=x,Y=s-x)$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Convolution", "Densité"],
                q: "Pour $X, Y$ deux variables aléatoires réelles à densité indépendantes, de densités $f^X, f^Y$, la densité de $Z = X+Y$ est :",
                options: [
                    { text: "$f^Z(z) = \\int_{\\mathbb{R}} f^X(w) f^Y(z-w) dw$", isCorrect: true },
                    { text: "$f^Z(z) = f^X(z) \\cdot f^Y(z)$", isCorrect: false },
                    { text: "$f^Z(z) = f^X(z) + f^Y(z)$", isCorrect: false },
                    { text: "$f^Z(z) = f^X(z) - f^Y(z)$", isCorrect: false }
                ],
                explanation: "La Proposition 5.22 donne la formule de convolution des densités : $f^Z(z) = \\int_{\\mathbb{R}} f^X(w) f^Y(z-w) dw = \\int_{\\mathbb{R}} f^X(z-w) f^Y(w) dw$. Cette formule, bien qu'issue d'une preuve hors programme, est très utilisée en pratique.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Convolution", "Lois usuelles"],
                q: "D'après l'Exemple 5.24 sur les produits de convolution, quelles affirmations sont correctes ?",
                options: [
                    { text: "$Bin(n_1,p) + Bin(n_2,p)$ (indépendantes) suit une loi $Bin(n_1+n_2, p)$", isCorrect: true },
                    { text: "$\\mathcal{N}(\\mu,\\sigma^2) + \\mathcal{N}(\\nu,\\tau^2)$ (indépendantes) suit une loi $\\mathcal{N}(\\mu+\\nu, \\sigma^2+\\tau^2)$", isCorrect: true },
                    { text: "La somme de deux lois binomiales de paramètres $p$ différents reste binomiale", isCorrect: false },
                    { text: "$\\mathcal{N}(\\mu,\\sigma^2) + \\mathcal{N}(\\nu,\\tau^2)$ suit une loi $\\mathcal{N}(\\mu+\\nu, \\sigma^2 \\tau^2)$", isCorrect: false }
                ],
                explanation: "L'Exemple 5.24 énonce deux résultats classiques de stabilité par convolution : la somme de deux binomiales indépendantes de même paramètre $p$ est binomiale, et la somme de deux gaussiennes indépendantes est gaussienne avec sommation des moyennes et des variances (pas des écarts-types ni multiplication).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Convergence", "Modes"],
                q: "Une suite $(X_n)_{n\\geq1}$ converge presque sûrement vers $X$ si :",
                options: [
                    { text: "$P[\\omega \\in \\Omega : \\lim_{n\\to\\infty} X_n(\\omega) = X(\\omega)] = 1$", isCorrect: true },
                    { text: "$\\forall \\varepsilon>0, \\lim_{n\\to\\infty} P[|X-X_n|\\geq\\varepsilon]=0$", isCorrect: false },
                    { text: "$X_n(\\omega) = X(\\omega)$ pour tout $\\omega$", isCorrect: false },
                    { text: "$E(X_n) \\to E(X)$", isCorrect: false }
                ],
                explanation: "La Définition 5.25 (point 1) définit la convergence presque sûre par $P[\\omega : \\lim_n X_n(\\omega) = X(\\omega)] = 1$ : la convergence simple a lieu sauf sur un ensemble de probabilité nulle. La deuxième option décrit la convergence en probabilité (point 2), un mode de convergence différent et plus faible.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Convergence en probabilité"],
                q: "Une suite $(X_n)_{n\\geq1}$ converge en probabilité vers $X$ si :",
                options: [
                    { text: "$\\forall \\varepsilon > 0$, $\\lim_{n\\to+\\infty} P[|X-X_n| \\geq \\varepsilon] = 0$", isCorrect: true },
                    { text: "$P[\\omega : \\lim_n X_n(\\omega) = X(\\omega)] = 1$", isCorrect: false },
                    { text: "$X_n$ converge uniformément vers $X$", isCorrect: false },
                    { text: "$Var(X_n) \\to 0$ nécessairement", isCorrect: false }
                ],
                explanation: "La Définition 5.25 (point 2) définit la convergence en probabilité par $\\forall \\varepsilon>0, \\lim_{n\\to+\\infty} P[|X-X_n|\\geq\\varepsilon]=0$. La convergence presque sûre est plus forte que la convergence en probabilité, comme le note la Remarque 5.26.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Convergences", "Comparaison"],
                q: "Quel est le rapport de force entre la convergence presque sûre et la convergence en probabilité ?",
                options: [
                    { text: "La convergence presque sûre est plus forte : elle implique la convergence en probabilité", isCorrect: true },
                    { text: "La convergence en probabilité est plus forte", isCorrect: false },
                    { text: "Les deux modes de convergence sont toujours équivalents", isCorrect: false },
                    { text: "Aucun lien n'existe entre les deux notions", isCorrect: false }
                ],
                explanation: "La Remarque 5.26 précise que la convergence presque sûre est plus forte que la convergence en probabilité. Ce résultat, admis dans ce cours, sera démontré dans le cours de probabilités de l'année suivante.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Loi faible des grands nombres"],
                q: "La loi faible des grands nombres (Théorème 5.27) concerne une suite $(X_n)_{n\\geq1}$ i.i.d. de carré intégrable, de moyenne $\\mu$ et variance $\\sigma^2$. Que dit-elle sur la moyenne empirique $Z_n = \\frac{X_1+\\cdots+X_n}{n}$ ?",
                options: [
                    { text: "$Z_n$ converge en probabilité vers $\\mu$", isCorrect: true },
                    { text: "$Z_n$ converge en probabilité vers $\\sigma^2$", isCorrect: false },
                    { text: "$Z_n$ est constante et égale à $\\mu$ pour tout $n$", isCorrect: false },
                    { text: "$Z_n$ diverge presque sûrement", isCorrect: false }
                ],
                explanation: "Le Théorème 5.27 énonce que la moyenne empirique $Z_n$ converge en probabilité vers la moyenne théorique $\\mu$ : $\\forall \\varepsilon>0, P(|Z_n-\\mu|\\geq\\varepsilon) \\leq \\frac{\\sigma^2}{\\varepsilon^2 n}$. Cela valide l'approche fréquentiste des probabilités.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Loi des grands nombres", "Démonstration"],
                q: "Dans la démonstration de la loi faible des grands nombres, on utilise :",
                options: [
                    { text: "La linéarité de l'espérance pour montrer $E(Z_n) = \\mu$", isCorrect: true },
                    { text: "L'indépendance des $(X_n)$ pour montrer $Var(Z_n) = \\sigma^2/n$", isCorrect: true },
                    { text: "L'inégalité de Bienaymé-Tchebychev appliquée à $Z_n$", isCorrect: true },
                    { text: "L'inégalité de Cauchy-Schwarz uniquement", isCorrect: false }
                ],
                explanation: "La démonstration du Théorème 5.27 combine : linéarité de l'espérance ($E(Z_n)=\\mu$), indépendance pour additivité des variances ($Var(Z_n)=\\sigma^2/n$), puis application de l'inégalité de Bienaymé-Tchebychev pour obtenir la borne $P(|Z_n-\\mu|\\geq\\varepsilon)\\leq\\sigma^2/(\\varepsilon^2 n)$, dont on prend la limite quand $n\\to\\infty$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Loi forte des grands nombres"],
                q: "Quelle est la différence entre la loi faible et la loi forte des grands nombres ?",
                options: [
                    { text: "La loi forte donne la convergence presque sûre, la loi faible donne seulement la convergence en probabilité", isCorrect: true },
                    { text: "La loi forte nécessite des variables de carré intégrable, la loi faible non", isCorrect: false },
                    { text: "Il n'y a aucune différence", isCorrect: false },
                    { text: "La loi forte s'applique uniquement aux variables discrètes", isCorrect: false }
                ],
                explanation: "La Remarque 5.28 précise que la loi forte des grands nombres démontre la convergence presque sûre de $(Z_n)$ vers $\\mu$ (sous la seule hypothèse d'intégrabilité, plus faible que carré-intégrabilité), tandis que la version prouvée dans ce cours (loi faible) ne donne que la convergence en probabilité.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Loi des grands nombres", "Application"],
                q: "Dans l'exemple du schéma de Bernoulli (dé non pipé, succès = obtenir un 6), que représente $\\frac{n_N(A)}{N}$ où $n_N(A)$ est le nombre de succès en $N$ répétitions ?",
                options: [
                    { text: "La fréquence empirique de l'évènement $A$, qui converge en probabilité vers $p = P(A)$", isCorrect: true },
                    { text: "La probabilité théorique exacte de $A$", isCorrect: false },
                    { text: "Une constante indépendante de $N$", isCorrect: false },
                    { text: "La variance de $A$", isCorrect: false }
                ],
                explanation: "L'Exemple 5.29 illustre concrètement la loi des grands nombres : $\\frac{n_N(A)}{N} \\xrightarrow[N\\to+\\infty]{P} p$. Cela justifie l'approche fréquentiste intuitive de la probabilité évoquée au Chapitre 1 : la fréquence d'apparition d'un évènement converge vers sa probabilité théorique.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Marche aléatoire", "Définition"],
                q: "Une marche aléatoire $(S_n)_{n\\geq0}$ est définie par $S_n = x + \\sum_{k=1}^n X_k$. Quelle hypothèse est faite sur les $(X_k)_{k\\geq1}$ ?",
                options: [
                    { text: "Elles sont indépendantes et identiquement distribuées", isCorrect: true },
                    { text: "Elles sont dépendantes deux à deux", isCorrect: false },
                    { text: "Elles doivent être positives", isCorrect: false },
                    { text: "Elles suivent nécessairement une loi normale", isCorrect: false }
                ],
                explanation: "La Définition 6.1 précise que les incréments $(X_k)_{k\\geq1}$ sont i.i.d., et $x = S_0$ est la position initiale. Aucune hypothèse de positivité ni de loi spécifique n'est imposée dans la définition générale.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Marche aléatoire", "Symétrique"],
                q: "Pour la marche aléatoire simple sur $\\mathbb{Z}$ (dimension $d=1$) avec $P(X_k=1)=p$, $P(X_k=-1)=1-p$, quand parle-t-on de marche aléatoire symétrique ?",
                options: [
                    { text: "Lorsque $p = \\frac{1}{2}$", isCorrect: true },
                    { text: "Lorsque $p = 1$", isCorrect: false },
                    { text: "Lorsque $p = 0$", isCorrect: false },
                    { text: "Pour toute valeur de $p$", isCorrect: false }
                ],
                explanation: "L'Exemple 6.2 précise que la marche aléatoire est dite symétrique lorsque les variables $X_k$ sont uniformes, ce qui correspond à $p = \\frac{1}{2}$ dans le cas $d=1$ : la probabilité d'aller à droite ou à gauche est égale.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Marche aléatoire", "Zd"],
                q: "Pour la marche aléatoire symétrique sur $\\mathbb{Z}^2$, les incréments $X_k$ prennent leurs valeurs dans quel ensemble ?",
                options: [
                    { text: "$\\{(1,0), (-1,0), (0,1), (0,-1)\\}$, chacune avec probabilité $\\frac{1}{4}$", isCorrect: true },
                    { text: "$\\{(1,1), (-1,-1)\\}$ uniquement", isCorrect: false },
                    { text: "$\\{-1,1\\}$", isCorrect: false },
                    { text: "$\\mathbb{Z}^2$ tout entier avec probabilité uniforme", isCorrect: false }
                ],
                explanation: "L'Exemple 6.2 décrit la marche aléatoire symétrique sur $\\mathbb{Z}^2$ : les incréments sont à valeurs dans les 4 directions cardinales $\\{(1,0),(-1,0),(0,1),(0,-1)\\}$, chacune avec probabilité $\\frac{1}{4}$ dans le cas symétrique.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Retour en zéro", "Probabilité"],
                q: "Pour la marche aléatoire symétrique sur $\\mathbb{Z}$ ($d=1$), la probabilité de retour en 0 après $2n$ pas est :",
                options: [
                    { text: "$P_0(S_{2n}=0) = \\binom{2n}{n}\\frac{1}{2^{2n}}$", isCorrect: true },
                    { text: "$P_0(S_{2n}=0) = \\frac{1}{2^n}$", isCorrect: false },
                    { text: "$P_0(S_{2n}=0) = \\binom{2n}{n}^2\\frac{1}{2^{4n}}$", isCorrect: false },
                    { text: "$P_0(S_{2n}=0) = 0$", isCorrect: false }
                ],
                explanation: "La Proposition 6.3 donne, pour $d=1$ : $P_0(S_{2n}=0) = \\binom{2n}{n}\\frac{1}{2^{2n}}$. La troisième option correspond en réalité à la formule du cas $d=2$ où $P_0(S_{2n}=0) = \\binom{2n}{n}^2\\frac{1}{2^{4n}}$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Retour en zéro", "Nombre de pas impair"],
                q: "Pourquoi la probabilité de retour en 0 est-elle nulle si le nombre de pas est impair, pour la marche symétrique sur $\\mathbb{Z}^d$ avec $d=1,2$ ?",
                options: [
                    { text: "Car pour revenir en 0, la marche doit faire autant de pas dans chaque direction opposée, ce qui exige un nombre total de pas pair", isCorrect: true },
                    { text: "Car la marche ne peut jamais revenir en 0", isCorrect: false },
                    { text: "Car $p \\neq \\frac{1}{2}$", isCorrect: false },
                    { text: "C'est une convention arbitraire du cours", isCorrect: false }
                ],
                explanation: "Comme expliqué dans la démonstration de la Proposition 6.3, pour $d=1$ la marche doit faire autant de pas à gauche qu'à droite pour revenir en 0, donc le nombre total de pas doit être pair. Le raisonnement est similaire pour $d=2$ avec les 4 directions.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Marche aléatoire", "Dimension 2", "Rotation"],
                q: "Dans la preuve de la Proposition 6.3 pour $d=2$, quelle astuce est utilisée ?",
                options: [
                    { text: "Une bijection avec une marche aléatoire sur le réseau $\\tilde{\\mathbb{Z}}^2$ tourné de $45°$", isCorrect: true },
                    { text: "Une approximation par la loi normale", isCorrect: false },
                    { text: "Une intégration par parties", isCorrect: false },
                    { text: "Le lemme de Borel-Cantelli", isCorrect: false }
                ],
                explanation: "La démonstration utilise une bijection avec la marche aléatoire sur $\\tilde{\\mathbb{Z}}^2$, le réseau $\\mathbb{Z}^2$ tourné de $45°$ avec les longueurs d'arêtes multipliées par $\\sqrt{2}$. Cela permet de décomposer la marche 2D en deux marches 1D indépendantes sur les composantes tournées.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Nombre de visites en zéro"],
                q: "Le Corollaire 6.4 énonce que pour la marche aléatoire symétrique sur $\\mathbb{Z}^d$ avec $d=1,2$, l'espérance du nombre de visites en 0, notée $N_0$, vérifie :",
                options: [
                    { text: "$E(N_0) = \\infty$", isCorrect: true },
                    { text: "$E(N_0) = 1$", isCorrect: false },
                    { text: "$E(N_0) = 0$", isCorrect: false },
                    { text: "$E(N_0)$ est finie mais non calculable explicitement", isCorrect: false }
                ],
                explanation: "Le Corollaire 6.4 montre que pour $d=1,2$, l'espérance du nombre de visites en 0 est infinie : $E(N_0)=\\infty$. C'est un résultat de récurrence de la marche aléatoire en basses dimensions ; la marche revient en moyenne infiniment souvent à l'origine.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Dimension et récurrence"],
                q: "D'après le cours, que se passe-t-il pour l'espérance du nombre de visites en 0 lorsque $d \\geq 3$ ?",
                options: [
                    { text: "Elle devient finie", isCorrect: true },
                    { text: "Elle reste infinie", isCorrect: false },
                    { text: "Elle devient nulle", isCorrect: false },
                    { text: "Elle n'est plus définie", isCorrect: false }
                ],
                explanation: "Le texte précédant le Corollaire 6.4 précise qu'à partir de $d\\geq 3$, l'espérance du nombre de visites en 0 devient finie : plus la dimension augmente, plus il devient difficile pour la marche aléatoire de revenir à l'origine une fois qu'elle est partie (transience en haute dimension).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Convergence monotone", "Application"],
                q: "Dans la démonstration du Corollaire 6.4, quel outil du Chapitre 4 est utilisé pour justifier $E_0(N_0) = \\lim_{\\ell\\to\\infty} E_0(N_0^\\ell)$ ?",
                options: [
                    { text: "Le théorème de convergence monotone, car $(N_0^\\ell)_{\\ell\\geq1}$ est une suite croissante de variables aléatoires positives", isCorrect: true },
                    { text: "L'inégalité de Jensen", isCorrect: false },
                    { text: "Le théorème de convergence dominée", isCorrect: false },
                    { text: "L'inégalité de Cauchy-Schwarz", isCorrect: false }
                ],
                explanation: "La démonstration utilise le théorème de convergence monotone car $N_0 = \\lim_{\\ell\\to\\infty} \\sum_{n=1}^\\ell \\mathbb{I}_{\\{S_n=0\\}}$, et la suite $(N_0^\\ell)_{\\ell\\geq1} = (\\sum_{n=1}^\\ell \\mathbb{I}_{\\{S_n=0\\}})_{\\ell\\geq1}$ est croissante et positive, ce qui permet de passer à la limite dans l'espérance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Formule de Stirling"],
                q: "Dans la preuve du Corollaire 6.4, la formule de Stirling $n! \\sim \\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^n$ est utilisée pour montrer que :",
                options: [
                    { text: "$\\binom{2n}{n}\\frac{1}{2^{2n}} \\sim \\frac{1}{\\sqrt{\\pi n}}$, terme général d'une série divergente", isCorrect: true },
                    { text: "$\\binom{2n}{n}\\frac{1}{2^{2n}}$ converge vers 0 rapidement (série convergente)", isCorrect: false },
                    { text: "La marche aléatoire est bornée", isCorrect: false },
                    { text: "$n!$ est toujours pair", isCorrect: false }
                ],
                explanation: "En utilisant la formule de Stirling, on montre que $\\binom{2n}{n}\\frac{1}{2^{2n}} \\sim \\frac{1}{\\sqrt{\\pi n}}$, terme général équivalent à celui d'une série de Riemann divergente (exposant $\\frac{1}{2}<1$), ce qui prouve que $E(N_0) = \\sum_n P_0(S_{2n}=0) = \\infty$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Ruine du joueur", "Modélisation"],
                q: "Dans le problème de la ruine de la joueuse, la fortune $S_n$ de la joueuse A au temps $n$ est modélisée par une marche aléatoire $S_n = a + \\sum_{k=1}^n X_k$ où :",
                options: [
                    { text: "$X_k$ sont i.i.d à valeurs dans $\\{-1,1\\}$ avec $P(X_k=1)=p$", isCorrect: true },
                    { text: "$a$ est la fortune initiale de la joueuse A", isCorrect: true },
                    { text: "La formule reste valide même après la fin du jeu", isCorrect: false },
                    { text: "Les états 0 et $a+b$ sont absorbants", isCorrect: true }
                ],
                explanation: "Le problème de la ruine de la joueuse modélise la fortune par une marche aléatoire simple avec $a$ la fortune initiale, jusqu'à ce que la marche atteigne 0 (ruine de A) ou $a+b$ (ruine de B), qui sont des états absorbants. La formule $S_n=a+\\sum X_k$ n'est valide que jusqu'à la fin du jeu, après quoi $S_n$ reste constante.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Ruine du joueur", "Récurrence"],
                q: "En notant $u_k = P_k(R)$ la probabilité que la joueuse A (fortune initiale $k$) soit ruinée, quelle relation de récurrence vérifient les $(u_k)$ ?",
                options: [
                    { text: "$u_k = p\\,u_{k+1} + q\\,u_{k-1}$ pour $1 \\leq k \\leq a+b-1$, avec $u_0=1$, $u_{a+b}=0$", isCorrect: true },
                    { text: "$u_k = u_{k+1} - u_{k-1}$", isCorrect: false },
                    { text: "$u_k = p \\cdot u_k$", isCorrect: false },
                    { text: "$u_0 = 0$ et $u_{a+b} = 1$", isCorrect: false }
                ],
                explanation: "En utilisant la formule des probabilités totales sur le résultat du premier lancer, on obtient $u_k = p\\,u_{k+1} + q\\,u_{k-1}$, avec les conditions au bord $u_0=1$ (la joueuse A est déjà ruinée si $k=0$) et $u_{a+b}=0$ (elle a gagné toute la fortune, donc pas ruinée).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Ruine du joueur", "Équation caractéristique"],
                q: "L'équation caractéristique associée à la récurrence $u_k = p\\,u_{k+1} + q\\,u_{k-1}$ est $pr^2 - r + q = 0$. Quelles sont ses racines ?",
                options: [
                    { text: "$r_1 = 1$ et $r_2 = q/p$", isCorrect: true },
                    { text: "$r_1 = p$ et $r_2 = q$", isCorrect: false },
                    { text: "$r_1 = 0$ et $r_2 = 1$", isCorrect: false },
                    { text: "$r_1 = -1$ et $r_2 = 1$", isCorrect: false }
                ],
                explanation: "Le discriminant de $pr^2-r+q=0$ vaut $\\Delta = 1-4pq = (2p-1)^2 \\geq 0$, et les solutions sont $r_1=1$, $r_2=q/p$. Cette équation caractéristique classique des suites récurrentes linéaires d'ordre 2 permet de résoudre explicitement la probabilité de ruine.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Ruine du joueur", "Cas p≠q"],
                q: "Dans le cas où $p \\neq q$ (i.e. $p \\neq \\frac{1}{2}$), la solution générale de la récurrence de la ruine de la joueuse est :",
                options: [
                    { text: "$u_k = \\dfrac{(q/p)^{a+b} - (q/p)^k}{(q/p)^{a+b}-1}$", isCorrect: true },
                    { text: "$u_k = 1 - \\dfrac{k}{a+b}$", isCorrect: false },
                    { text: "$u_k = \\alpha + k\\beta$ pour des constantes $\\alpha, \\beta$", isCorrect: false },
                    { text: "$u_k = (q/p)^k$", isCorrect: false }
                ],
                explanation: "Pour $p \\neq q$, les racines $r_1=1, r_2=q/p$ sont distinctes, la solution générale est $u_k = \\alpha r_1^k + \\beta r_2^k = \\alpha + \\beta(q/p)^k$. En appliquant les conditions au bord $u_0=1, u_{a+b}=0$, on trouve $u_k = \\frac{(q/p)^{a+b}-(q/p)^k}{(q/p)^{a+b}-1}$. La deuxième et troisième options correspondent au cas $p=q$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Ruine du joueur", "Cas p=q"],
                q: "Dans le cas $p = q = \\frac{1}{2}$ (jeu équitable), la probabilité de ruine de la joueuse A partant avec une fortune $k$ est :",
                options: [
                    { text: "$u_k = 1 - \\dfrac{k}{a+b}$", isCorrect: true },
                    { text: "$u_k = \\dfrac{k}{a+b}$", isCorrect: false },
                    { text: "$u_k = \\dfrac{(q/p)^{a+b} - (q/p)^k}{(q/p)^{a+b}-1}$", isCorrect: false },
                    { text: "$u_k$ ne dépend pas de $k$", isCorrect: false }
                ],
                explanation: "Dans le cas $p=q=\\frac{1}{2}$, la racine double $r=1$ conduit à une solution de la forme $u_k = \\alpha + k\\beta$. Les conditions au bord $u_0=1, u_{a+b}=0$ donnent $\\alpha=1$, $\\beta=-1/(a+b)$, d'où $u_k = 1 - \\frac{k}{a+b}$, qui décroît linéairement avec la fortune initiale $k$ de la joueuse A.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Ruine du joueur", "Interprétation"],
                q: "Dans le cas équitable ($p=q=1/2$), si la joueuse A commence avec une fortune $k=a+b$ (fortune totale), quelle est sa probabilité de ruine $u_k$ ?",
                options: [
                    { text: "$0$", isCorrect: true },
                    { text: "$1$", isCorrect: false },
                    { text: "$\\frac{1}{2}$", isCorrect: false },
                    { text: "Indéterminée", isCorrect: false }
                ],
                explanation: "En utilisant $u_k = 1 - \\frac{k}{a+b}$ avec $k=a+b$, on obtient $u_{a+b} = 1 - 1 = 0$. Cela est cohérent avec la condition au bord $u_{a+b}=0$ : si A possède déjà toute la fortune, elle ne peut pas être ruinée (B est déjà ruiné).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Variance", "Application numérique"],
                q: "Soit $X$ une variable aléatoire telle que $E(X)=3$ et $E(X^2)=13$. Quelle est $Var(X)$ ?",
                options: [
                    { text: "$4$", isCorrect: true },
                    { text: "$13$", isCorrect: false },
                    { text: "$10$", isCorrect: false },
                    { text: "$16$", isCorrect: false }
                ],
                explanation: "En utilisant la Propriété 4.18 (point 4) : $Var(X) = E(X^2) - E(X)^2 = 13 - 3^2 = 13 - 9 = 4$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Markov", "Application numérique"],
                q: "Soit $X$ une variable aléatoire positive avec $E(X) = 10$. D'après l'inégalité de Markov, une borne supérieure pour $P(X \\geq 50)$ est :",
                options: [
                    { text: "$\\frac{1}{5} = 0.2$", isCorrect: true },
                    { text: "$0.5$", isCorrect: false },
                    { text: "$50$", isCorrect: false },
                    { text: "$5$", isCorrect: false }
                ],
                explanation: "En appliquant l'inégalité de Markov avec $n=1$ : $P(X \\geq 50) \\leq \\frac{E(X)}{50} = \\frac{10}{50} = \\frac{1}{5} = 0.2$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Bienaymé-Tchebychev", "Application numérique"],
                q: "Soit $X$ de carré intégrable avec $E(X)=20$ et $Var(X)=25$. D'après Bienaymé-Tchebychev, une borne supérieure pour $P(|X-20|\\geq 10)$ est :",
                options: [
                    { text: "$0.25$", isCorrect: true },
                    { text: "$2.5$", isCorrect: false },
                    { text: "$0.025$", isCorrect: false },
                    { text: "$25$", isCorrect: false }
                ],
                explanation: "D'après la Proposition 4.29 : $P(|X-E(X)|\\geq a) \\leq \\frac{Var(X)}{a^2}$. Ici, $a=10$, donc $P(|X-20|\\geq10) \\leq \\frac{25}{10^2} = \\frac{25}{100} = 0.25$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Covariance", "Application numérique"],
                q: "Soit $X, Y$ deux variables aléatoires avec $Var(X)=4$, $Var(Y)=9$ et $Cov(X,Y)=2$. Que vaut $Var(X+Y)$ ?",
                options: [
                    { text: "$17$", isCorrect: true },
                    { text: "$13$", isCorrect: false },
                    { text: "$36$", isCorrect: false },
                    { text: "$6$", isCorrect: false }
                ],
                explanation: "D'après la Proposition 4.21 (point 5) : $Var(X+Y) = Var(X)+Var(Y)+2Cov(X,Y) = 4+9+2(2) = 4+9+4 = 17$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Loi des grands nombres", "Application numérique"],
                q: "Soit $(X_n)$ i.i.d. de carré intégrable, $\\sigma^2=4$. D'après la loi faible des grands nombres, pour $\\varepsilon=0.1$ et $n=1000$, quelle borne obtient-on pour $P(|Z_n-\\mu|\\geq0.1)$ ?",
                options: [
                    { text: "$0.4$", isCorrect: true },
                    { text: "$4$", isCorrect: false },
                    { text: "$0.04$", isCorrect: false },
                    { text: "$40$", isCorrect: false }
                ],
                explanation: "D'après le Théorème 5.27 : $P(|Z_n-\\mu|\\geq\\varepsilon) \\leq \\frac{\\sigma^2}{\\varepsilon^2 n} = \\frac{4}{(0.1)^2 \\times 1000} = \\frac{4}{0.01 \\times 1000} = \\frac{4}{10} = 0.4$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Ruine du joueur", "Application numérique"],
                q: "Dans le jeu de la ruine avec $p=q=\\frac{1}{2}$, $a=3$ (fortune de A), $b=7$ (fortune de B). Quelle est la probabilité de ruine de A ?",
                options: [
                    { text: "$0.7$", isCorrect: true },
                    { text: "$0.3$", isCorrect: false },
                    { text: "$0.5$", isCorrect: false },
                    { text: "$1$", isCorrect: false }
                ],
                explanation: "Avec $k=a=3$ et $a+b=10$ : $u_k = 1 - \\frac{k}{a+b} = 1 - \\frac{3}{10} = 0.7$. Ceci illustre qu'avec une fortune initiale plus faible que l'adversaire, la probabilité de ruine est plus élevée, même dans un jeu équitable.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Espérance", "Espace fini vs général"],
                q: "Pourquoi introduit-on la notion de variable aléatoire étagée avant de définir l'espérance pour les variables aléatoires positives générales ?",
                options: [
                    { text: "Car le Théorème 4.2 (espérance = somme finie) a un sens pour un espace d'arrivée fini, indépendamment de l'espace de départ", isCorrect: true },
                    { text: "Car les variables étagées sont toujours indépendantes", isCorrect: false },
                    { text: "Car seules les variables étagées ont une espérance", isCorrect: false },
                    { text: "Car c'est une exigence purement historique sans justification mathématique", isCorrect: false }
                ],
                explanation: "Comme expliqué avant la Définition 4.3, l'idée clé est que la formule de droite du Théorème 4.2 a un sens si l'espace d'arrivée est fini, indépendamment de la nature de $\\Omega$. Cela permet de construire l'espérance par étapes : étagées → positives (par sup) → intégrables (par décomposition $X^+-X^-$).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Variable centrée"],
                q: "Une variable aléatoire positive ou intégrable $X$ est dite centrée si :",
                options: [
                    { text: "$E(X) = 0$", isCorrect: true },
                    { text: "$Var(X) = 0$", isCorrect: false },
                    { text: "$X = 0$ presque sûrement", isCorrect: false },
                    { text: "$E(X) = 1$", isCorrect: false }
                ],
                explanation: "La Définition 4.5 précise qu'une variable aléatoire (positive ou intégrable) est dite centrée si son espérance est nulle, $E(X)=0$. Cela n'implique pas que $X$ soit nulle p.s. (sauf cas particulier où $Var(X)=0$ également, dans le cas positif).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Vecteur aléatoire", "n composantes"],
                q: "Pour un vecteur aléatoire discret $(X_1,\\ldots,X_n)$, comment généralise-t-on la formule des lois marginales du cas $n=2$ ?",
                options: [
                    { text: "On somme la loi jointe sur toutes les valeurs des autres composantes", isCorrect: true },
                    { text: "On ne peut pas généraliser au-delà de $n=2$", isCorrect: false },
                    { text: "On prend le maximum de la loi jointe", isCorrect: false },
                    { text: "On divise la loi jointe par $n$", isCorrect: false }
                ],
                explanation: "Le cours précise (avant la Définition 5.4) que la généralisation au cas $n>2$ est possible avec des notations plus compliquées au niveau des indices, mais le principe reste le même : sommer sur toutes les valeurs possibles des autres composantes pour obtenir la loi marginale d'une composante.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Indépendance mutuelle"],
                q: "Une famille $(X_i)_{i\\in I}$ de variables aléatoires est dite mutuellement indépendante si :",
                options: [
                    { text: "Pour toute partie finie $K$ de $I$ et tous $A_i \\in \\mathcal{P}(E_i)$, $P(\\cap_{i\\in K}\\{X_i\\in A_i\\}) = \\prod_{i\\in K}P(X_i\\in A_i)$", isCorrect: true },
                    { text: "$X_i$ et $X_j$ sont indépendantes deux à deux uniquement", isCorrect: false },
                    { text: "Toutes les $X_i$ ont la même loi", isCorrect: false },
                    { text: "$Cov(X_i,X_j)=0$ pour tout $i\\neq j$", isCorrect: false }
                ],
                explanation: "La Définition 5.14 précise que l'indépendance mutuelle exige la factorisation des probabilités pour TOUTE partie finie $K$ de $I$, pas seulement les paires. L'indépendance deux à deux (paires) est une notion plus faible que l'indépendance mutuelle en général.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Indépendance", "Stabilité"],
                q: "D'après la Remarque 5.15, si $(X_i)_{i\\in I}$ est une famille de variables aléatoires indépendantes, quelles familles restent indépendantes ?",
                options: [
                    { text: "Toute sous-famille $(X_i)_{i\\in J}$ avec $J \\subset I$", isCorrect: true },
                    { text: "Toute famille $(Y_i)_{i\\in I}$ où $Y_i = h_i(X_i)$", isCorrect: true },
                    { text: "Toute famille obtenue en regroupant des blocs disjoints de variables et en appliquant une fonction à chaque bloc", isCorrect: true },
                    { text: "Uniquement la famille originale, aucune transformation n'est permise", isCorrect: false }
                ],
                explanation: "La Remarque 5.15 énumère trois propriétés de stabilité de l'indépendance : restriction à une sous-famille, application de fonctions mesurables à chaque composante individuellement, et regroupement en blocs disjoints avec application de fonctions à chaque bloc.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Marche aléatoire", "Notion de récurrence"],
                q: "Le fait que $E(N_0) = \\infty$ pour $d=1,2$ mais finie pour $d\\geq3$ est lié à quelle notion, mentionnée dans le cours ?",
                options: [
                    { text: "La récurrence/transience de la marche aléatoire", isCorrect: true },
                    { text: "La loi des grands nombres", isCorrect: false },
                    { text: "L'indépendance des incréments", isCorrect: false },
                    { text: "Le théorème de Bayes", isCorrect: false }
                ],
                explanation: "L'introduction de la section 6.2 précise que ces notions de retour en 0 et d'espérance du nombre de visites sont sous-jacentes aux notions de récurrence/transience de la marche aléatoire, concepts qui seront approfondis dans un cours ultérieur.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Espérance conditionnée", "Prérequis"],
                q: "Quelle propriété de l'espérance est utilisée pour établir la preuve de la Proposition 4.16 ($E(|X|) \\leq \\sqrt{E(X^2)}$) ?",
                options: [
                    { text: "L'étude du signe d'un polynôme du second degré en $\\lambda$ via son discriminant", isCorrect: true },
                    { text: "Le théorème de Bayes", isCorrect: false },
                    { text: "La loi des grands nombres", isCorrect: false },
                    { text: "L'indépendance de $X$ avec elle-même", isCorrect: false }
                ],
                explanation: "La démonstration pose $f(\\lambda) = E[(|X|+\\lambda)^2]$, qui est un polynôme de degré 2 en $\\lambda$, toujours positif ou nul. Son discriminant doit donc être négatif ou nul, ce qui donne directement l'inégalité recherchée. C'est une méthode classique pour prouver des inégalités de type Cauchy-Schwarz.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "XY intégrable"],
                q: "Pourquoi peut-on affirmer que si $X, Y \\in L^2$, alors $XY \\in L^1$ ?",
                options: [
                    { text: "Car $|XY| \\leq \\frac{1}{2}(X^2+Y^2)$ et $X^2, Y^2$ sont intégrables", isCorrect: true },
                    { text: "Car $X$ et $Y$ sont indépendantes", isCorrect: false },
                    { text: "Car $E(XY) = E(X)E(Y)$ toujours", isCorrect: false },
                    { text: "Ce résultat est faux en général", isCorrect: false }
                ],
                explanation: "Le cours (avant la Définition 4.20) note que si $X,Y$ sont dans $L^2$, alors $XY$ est dans $L^1$ car $|XY| \\leq \\frac{1}{2}(X^2+Y^2)$ par l'inégalité classique $2ab \\leq a^2+b^2$, et $X^2, Y^2$ sont intégrables par hypothèse. Cette propriété ne nécessite pas d'indépendance.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Remarque 4.7", "Construction espérance positive"],
                q: "Dans la Remarque 4.7, pour approcher une variable aléatoire positive $X$ par une suite croissante de variables étagées, on utilise :",
                options: [
                    { text: "Une discrétisation dyadique de plus en plus fine des valeurs de $X$", isCorrect: true },
                    { text: "Une approximation gaussienne", isCorrect: false },
                    { text: "Le théorème central limite", isCorrect: false },
                    { text: "Une interpolation polynomiale", isCorrect: false }
                ],
                explanation: "La suite $X_n(\\omega) = \\sum_{k=0}^{n2^n-1} \\frac{k}{2^n} \\mathbb{I}_{\\{X\\in[\\frac{k}{2^n},\\frac{k+1}{2^n}[\\}}(\\omega)$ utilise une discrétisation dyadique : on découpe l'intervalle des valeurs possibles en petits intervalles de longueur $\\frac{1}{2^n}$, de plus en plus fins quand $n$ augmente, ce qui donne une suite croissante convergeant simplement vers $X$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Espérance", "Variance nulle"],
                q: "Si $Var(X) = 0$ pour une variable aléatoire $X$, que peut-on en déduire ?",
                options: [
                    { text: "$X$ est presque sûrement constante et égale à $E(X)$", isCorrect: true },
                    { text: "$X$ suit nécessairement une loi normale", isCorrect: false },
                    { text: "$E(X) = 0$", isCorrect: false },
                    { text: "$X$ n'est pas intégrable", isCorrect: false }
                ],
                explanation: "Bien que non explicitement démontré dans le texte fourni, ce résultat classique découle de la positivité de $E[(X-E(X))^2]$ : si cette espérance est nulle pour une variable positive, alors $(X-E(X))^2=0$ presque sûrement, donc $X=E(X)$ presque sûrement (constante).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Marche aléatoire", "Applications pratiques"],
                q: "Selon l'introduction du Chapitre 6, à quels phénomènes la marche aléatoire s'applique-t-elle ?",
                options: [
                    { text: "Le déplacement d'une particule", isCorrect: true },
                    { text: "Les cours de la bourse", isCorrect: true },
                    { text: "Les réseaux électriques", isCorrect: true },
                    { text: "Uniquement les jeux de hasard", isCorrect: false }
                ],
                explanation: "L'introduction du Chapitre 6 mentionne explicitement que la marche aléatoire est sous-jacente à la modélisation de nombreux phénomènes : déplacement de particules, cours de la bourse, réseaux électriques, évolution d'une population, et bien d'autres, pas seulement les jeux de hasard.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Espérance conditionnelle", "Cas particulier"],
                q: "Si $X$ et $Y$ sont indépendantes, que devient l'espérance conditionnelle $E(Y|X=x)$ pour tout $x$ tel que $P(X=x)>0$ ?",
                options: [
                    { text: "$E(Y|X=x) = E(Y)$, ne dépend pas de $x$", isCorrect: true },
                    { text: "$E(Y|X=x) = x$", isCorrect: false },
                    { text: "$E(Y|X=x) = 0$ toujours", isCorrect: false },
                    { text: "$E(Y|X=x)$ n'est pas définie si $X, Y$ sont indépendantes", isCorrect: false }
                ],
                explanation: "Si $X$ et $Y$ sont indépendantes, alors par le Théorème 5.16 (point 3), la loi conditionnelle de $Y$ sachant $\\{X=x\\}$ est égale à la loi marginale de $Y$ : $P_Y(\\cdot|X=x) = P_Y(\\cdot)$. Donc l'espérance conditionnelle $E(Y|X=x) = E(Y)$ ne dépend pas de $x$, ce qui est cohérent avec l'intuition que $X$ n'apporte aucune information sur $Y$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 6", "Ruine du joueur", "Durée du jeu"],
                q: "Selon la fin de la section 6.3, quelle autre quantité peut-on calculer avec une approche similaire à celle de la probabilité de ruine ?",
                options: [
                    { text: "L'espérance de la durée du jeu avant la ruine d'une des deux joueuses", isCorrect: true },
                    { text: "Le nombre exact de coups gagnés par la joueuse A", isCorrect: false },
                    { text: "La probabilité que le jeu ne se termine jamais", isCorrect: false },
                    { text: "La loi de la fortune finale de B uniquement", isCorrect: false }
                ],
                explanation: "Le cours conclut la section 6.3 en notant qu'une approche similaire (résolution d'une récurrence linéaire avec conditions au bord) permet de calculer l'espérance de la durée du jeu avant que l'une des deux joueuses ne soit ruinée.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Moments", "Corollaire"],
                q: "D'après le Corollaire 4.27, pour une variable aléatoire discrète $X$ telle que $X^n$ est intégrable, le moment d'ordre $n$ est donné par :",
                options: [
                    { text: "$E(X^n) = \\sum_{i \\in I} x_i^n P(X=x_i)$", isCorrect: true },
                    { text: "$E(X^n) = [E(X)]^n$", isCorrect: false },
                    { text: "$E(X^n) = n \\, E(X)$", isCorrect: false },
                    { text: "$E(X^n)$ n'existe que si $X$ est à densité", isCorrect: false }
                ],
                explanation: "Le Corollaire 4.27, conséquence directe du théorème de transfert (Théorème 4.10) appliqué à $h(x)=x^n$, donne $E(X^n) = \\sum_{i\\in I} x_i^n P(X=x_i)$ dans le cas discret, sous réserve que $\\sum_{i\\in I} |x_i|^n P(x_i) < \\infty$. Dans le cas à densité, la formule analogue est $E(X^n) = \\int_{-\\infty}^{\\infty} x^n f(x) dx$.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 4", "Espérance", "L2 espace vectoriel"],
                q: "D'après la Remarque 4.15, pourquoi $L^2(\\Omega, \\mathcal{F}, P)$ est-il un espace vectoriel ?",
                options: [
                    { text: "Car pour $X,Y$ de carré intégrable et $a,b \\in \\mathbb{R}$, $(aX+bY)^2 \\leq 2(a^2X^2+b^2Y^2)$, donc $aX+bY$ est aussi de carré intégrable", isCorrect: true },
                    { text: "Car toute variable aléatoire est automatiquement de carré intégrable", isCorrect: false },
                    { text: "Car $L^2$ est un sous-ensemble fini de $L^1$", isCorrect: false },
                    { text: "Ce fait n'est pas démontré dans le cours", isCorrect: false }
                ],
                explanation: "La Remarque 4.15 (second point) montre que si $X, Y$ sont de carré intégrable, alors, grâce à l'inégalité $(aX+bY)^2 \\leq 2(a^2X^2+b^2Y^2)$, la combinaison linéaire $aX+bY$ est également de carré intégrable pour tout $a,b\\in\\mathbb{R}$. Ceci, combiné à la stabilité par multiplication scalaire, fait de $L^2(\\Omega,\\mathcal{F},P)$ un espace vectoriel.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Vecteurs aléatoires", "Théorème de transfert"],
                q: "D'après le Théorème 5.5, pour un couple aléatoire discret $(X,Y)$ à valeurs dans $E \\times F$, et $h : E \\times F \\to \\mathbb{R}$ telle que $h(X,Y)$ soit positive ou intégrable, l'espérance $E(h(X,Y))$ est égale à :",
                options: [
                    { text: "$\\sum_{(x,y)\\in E\\times F} h(x,y) P(X=x, Y=y)$", isCorrect: true },
                    { text: "$h\\big(E(X), E(Y)\\big)$", isCorrect: false },
                    { text: "$E(h(X)) \\cdot E(h(Y))$", isCorrect: false },
                    { text: "$\\sum_{x\\in E} h(x) P(X=x)$", isCorrect: false }
                ],
                explanation: "Le Théorème 5.5 (théorème de transfert pour les couples aléatoires discrets) généralise le Théorème 4.10 : $E(h(X,Y)) = \\sum_{(x,y)\\in E\\times F} h(x,y) P(\\{X=x,Y=y\\})$, sous réserve que la série $\\sum_{(x,y)} |h(x,y)| P(X,Y)(\\{(x,y)\\})$ converge. C'est cet outil qui permet, par exemple, de calculer explicitement $E(XY)$ à partir de la loi jointe (comme dans l'Exemple 5.6).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Indépendance", "Variables réelles"],
                q: "Selon la Définition 5.21, deux variables aléatoires réelles $X, Y : \\Omega \\to \\mathbb{R}$ (pas nécessairement discrètes) sont dites indépendantes si :",
                options: [
                    { text: "Pour tout $A, B \\in \\mathcal{B}(\\mathbb{R})$ (boréliens de $\\mathbb{R}$), $P(X\\in A, Y\\in B) = P(X\\in A)P(Y\\in B)$", isCorrect: true },
                    { text: "Pour tout $A, B \\in \\mathcal{P}(\\mathbb{R})$ (parties de $\\mathbb{R}$), $P(X\\in A, Y\\in B) = P(X\\in A)P(Y\\in B)$", isCorrect: false },
                    { text: "$X$ et $Y$ ont nécessairement la même densité", isCorrect: false },
                    { text: "Cette notion n'est définie que pour les variables discrètes", isCorrect: false }
                ],
                explanation: "La Définition 5.21 étend l'indépendance (initialement définie pour les variables discrètes à la Définition 5.14, avec $A\\in\\mathcal{P}(E)$) au cas des variables aléatoires réelles générales, en utilisant la tribu borélienne $\\mathcal{B}(\\mathbb{R})$ plutôt que l'ensemble des parties. Cette définition est indispensable pour énoncer la Proposition 5.22 sur la densité de la somme de deux variables à densité indépendantes.",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chapitre 5", "Indépendance", "n variables"],
                q: "Si $X_1, \\ldots, X_n$ sont des variables aléatoires de carré intégrable et mutuellement indépendantes, que peut-on en conclure (Proposition 5.18, points 4 à 6) ?",
                options: [
                    { text: "$E\\left(\\prod_{i=1}^n X_i\\right) = \\prod_{i=1}^n E(X_i)$", isCorrect: true },
                    { text: "La matrice de covariance des $(X_i)$ est diagonale", isCorrect: true },
                    { text: "$Var\\left(\\sum_{i=1}^n X_i\\right) = \\sum_{i=1}^n Var(X_i)$", isCorrect: true },
                    { text: "Les $(X_i)$ ont nécessairement la même variance", isCorrect: false }
                ],
                explanation: "La Proposition 5.18 (points 4 à 6) généralise le cas de deux variables au cas de $n$ variables mutuellement indépendantes de carré intégrable : l'espérance du produit est le produit des espérances, la matrice de covariance est diagonale (car $Cov(X_i,X_j)=0$ pour $i\\neq j$), et par conséquent la variance de la somme est la somme des variances. Rien n'impose que les variables aient la même variance (ce serait le cas i.i.d. en plus).",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    },
"Programmation C : Chapitre 1 (Introduction)": {
        course: "prog_c",
        folder: "Informatique",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Généralités", "Objectifs"],
                q: "Quels sont les principaux objectifs du cours de programmation C[cite: 1] ?",
                options: [
                    { text: "Apprendre le C, comprendre la mémoire (pointeurs), et coder proprement de façon modulaire[cite: 1]", isCorrect: true },
                    { text: "Apprendre à créer des interfaces graphiques complexes et des pages web[cite: 1]", isCorrect: false }
                ],
                explanation: "Les objectifs incluent l'apprentissage du langage, l'analyse de problèmes pour écrire des programmes élégants, et la compréhension de la mémoire et des pointeurs[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Histoire"],
                q: "Quels sont les créateurs du langage C et en quelle année a-t-il été inventé[cite: 1] ?",
                options: [
                    { text: "Dennis Ritchie et Ken Thompson en 1972[cite: 1]", isCorrect: true },
                    { text: "Brian Kernighan en 1989[cite: 1]", isCorrect: false },
                    { text: "Linus Torvalds en 1991[cite: 1]", isCorrect: false }
                ],
                explanation: "Le langage C a été inventé en 1972 par Dennis Ritchie et Ken Thompson aux Bell Labs pour écrire le système d'exploitation Unix[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Histoire"],
                q: "Quel langage a précédé le langage C[cite: 1] ?",
                options: [
                    { text: "Le langage B (qui n'avait pas de typage)[cite: 1]", isCorrect: true },
                    { text: "Le langage A[cite: 1]", isCorrect: false },
                    { text: "Le Fortran[cite: 1]", isCorrect: false }
                ],
                explanation: "Le langage C a été créé après le langage B, ce dernier ayant la particularité de ne pas avoir de typage[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Généralités", "Usage"],
                q: "Pourquoi le C reste-t-il indispensable aujourd'hui[cite: 1] ?",
                options: [
                    { text: "Il est incontournable pour la programmation bas niveau (OS, drivers, systèmes embarqués)[cite: 1]", isCorrect: true },
                    { text: "C'est le seul langage permettant de faire des mathématiques complexes[cite: 1]", isCorrect: false },
                    { text: "Il possède un système de gestion d'exceptions très moderne[cite: 1]", isCorrect: false }
                ],
                explanation: "Le C permet de faire du bas niveau, est très rapide, et reste indispensable pour les OS et l'embarqué[cite: 1]. Il n'a d'ailleurs pas de gestion d'exceptions moderne[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Caractéristiques", "Paradigmes"],
                q: "Quel est le paradigme principal du langage C[cite: 1] ?",
                options: [
                    { text: "Impératif[cite: 1]", isCorrect: true },
                    { text: "Orienté Objet[cite: 1]", isCorrect: false },
                    { text: "Fonctionnel[cite: 1]", isCorrect: false }
                ],
                explanation: "Le C est un langage impératif, basé sur un état (la mémoire) et des instructions élémentaires qui modifient cet état[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Caractéristiques", "Paradigmes"],
                q: "En quoi consiste le paradigme impératif[cite: 1] ?",
                options: [
                    { text: "Un découpage en procédures contenant des séquences d'instructions pour modifier l'état de la mémoire[cite: 1]", isCorrect: true },
                    { text: "L'utilisation d'objets possédant des attributs et des méthodes[cite: 1]", isCorrect: false }
                ],
                explanation: "Le paradigme impératif (celui du C) consiste à ordonner au processeur des instructions élémentaires (séquences, boucles) pour modifier directement l'état de la mémoire[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Caractéristiques"],
                q: "Le langage C est-il typé[cite: 1] ?",
                options: [
                    { text: "Oui, il utilise un typage statique défini à la compilation[cite: 1]", isCorrect: true },
                    { text: "Non, il utilise un typage dynamique déterminé à l'exécution[cite: 1]", isCorrect: false }
                ],
                explanation: "Contrairement à Python, le C utilise un typage statique : les types des variables doivent être définis par le programmeur et sont vérifiés lors de la compilation[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Généralités", "Avantages"],
                q: "Parmi les éléments suivants, lesquels sont des avantages du C[cite: 1] ?",
                options: [
                    { text: "Il est très rapide, proche de la machine, et permet une gestion manuelle de la mémoire[cite: 1]", isCorrect: true },
                    { text: "Il possède un ramasse-miettes (Garbage Collector) qui évite les fuites mémoire[cite: 1]", isCorrect: false }
                ],
                explanation: "La rapidité et le contrôle manuel sont des atouts du C[cite: 1]. L'absence de gestion automatique (pas de GC) en fait un langage bas niveau très performant[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Généralités", "Inconvénients"],
                q: "Quel est l'un des principaux inconvénients de la liberté offerte par le C[cite: 1] ?",
                options: [
                    { text: "L'absence de vérifications à l'exécution entraîne un risque élevé de bugs et de comportements indéfinis (Undefined behavior)[cite: 1]", isCorrect: true },
                    { text: "L'obligation d'utiliser des interfaces graphiques complexes[cite: 1]", isCorrect: false }
                ],
                explanation: "La liberté totale implique qu'il n'y a pas de garde-fous à l'exécution. Cela donne un code efficace, mais propice aux bugs si l'on gère mal la mémoire[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Compilation"],
                q: "Quelles sont les étapes principales de transformation d'un programme C[cite: 1] ?",
                options: [
                    { text: "Code source -> Fichiers objets -> Programme exécutable[cite: 1]", isCorrect: true },
                    { text: "Code source -> Interpréteur -> Exécution[cite: 1]", isCorrect: false }
                ],
                explanation: "Le flux classique du C passe par la compilation des sources en fichiers objets, suivie de l'édition de liens pour créer l'exécutable binaire final[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Compilation"],
                q: "Quel est le rôle exact du compilateur[cite: 1] ?",
                options: [
                    { text: "Il vérifie le code source et génère des instructions pour le processeur[cite: 1]", isCorrect: true },
                    { text: "Il relie les différents fichiers objets entre eux[cite: 1]", isCorrect: false },
                    { text: "Il lit et exécute le code ligne par ligne[cite: 1]", isCorrect: false }
                ],
                explanation: "Le compilateur lit le code humain, vérifie la syntaxe et les types, puis le traduit en instructions machine (fichiers objets)[cite: 1]. C'est l'éditeur de liens qui relie les objets[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Compilation", "Avantages"],
                q: "Quels sont les avantages d'un langage compilé par rapport à un langage interprété[cite: 1] ?",
                options: [
                    { text: "La détection des erreurs se fait avant l'exécution, et le code machine généré est optimisé et très rapide[cite: 1]", isCorrect: true },
                    { text: "Le même exécutable peut tourner sur n'importe quel système d'exploitation sans modification[cite: 1]", isCorrect: false }
                ],
                explanation: "Un langage compilé détecte les erreurs (types, syntaxe) à la compilation et produit un code plus rapide[cite: 1]. Cependant, l'exécutable généré est spécifique à la plateforme (CPU+OS)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Compilation", "Inconvénients"],
                q: "Quel est l'un des inconvénients majeurs de la compilation[cite: 1] ?",
                options: [
                    { text: "L'exécutable est généré pour une plateforme spécifique (CPU+OS) et il faut recompiler pour chaque système[cite: 1]", isCorrect: true },
                    { text: "L'exécution est plus lente car le processeur doit vérifier le typage[cite: 1]", isCorrect: false }
                ],
                explanation: "Un exécutable compilé est intimement lié à la machine cible (OS et CPU). Il faut recompiler le code source pour l'exécuter sur une autre architecture[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Compilation", "Erreurs"],
                q: "Quelle est la différence entre une « error » et un « warning » signalés par le compilateur[cite: 1] ?",
                options: [
                    { text: "Une erreur empêche la compilation (pas d'exécutable), un warning signale un problème potentiel mais permet la compilation[cite: 1]", isCorrect: true },
                    { text: "Un warning arrête la compilation immédiatement, une erreur la suspend[cite: 1]", isCorrect: false }
                ],
                explanation: "Les erreurs bloquent la création de l'exécutable, tandis que les avertissements (warnings) n'empêchent pas la compilation, bien qu'ils doivent être lus attentivement[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Compilation", "Erreurs"],
                q: "Pourquoi est-il conseillé de traiter les erreurs de compilation dans l'ordre d'apparition[cite: 1] ?",
                options: [
                    { text: "Parce qu'une erreur de syntaxe peut en cacher (ou en générer) une multitude d'autres en cascade[cite: 1]", isCorrect: true },
                    { text: "Parce que le compilateur efface les dernières erreurs[cite: 1]", isCorrect: false }
                ],
                explanation: "« Un train peut en cacher un autre » : une simple variable non déclarée ou un point-virgule manquant peut provoquer des dizaines d'erreurs subséquentes. Il faut toujours corriger la toute première[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Langages interprétés", "Python vs C"],
                q: "Comment fonctionne l'exécution d'un langage interprété comme Python[cite: 1] ?",
                options: [
                    { text: "Le code source est traduit et exécuté au fur et à mesure par l'interpréteur[cite: 1]", isCorrect: true },
                    { text: "Le code est intégralement compilé en fichier binaire avant l'exécution[cite: 1]", isCorrect: false }
                ],
                explanation: "Un langage interprété est lu, analysé et exécuté $n$ fois (à la volée) par un interpréteur[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Langages interprétés", "Avantages"],
                q: "Quel est un avantage majeur des langages interprétés[cite: 1] ?",
                options: [
                    { text: "Le même code source est portable et peut s'exécuter sur différentes plateformes sans recompilation[cite: 1]", isCorrect: true },
                    { text: "L'occupation mémoire est beaucoup plus faible[cite: 1]", isCorrect: false }
                ],
                explanation: "Grâce à l'interpréteur, le code est hautement portable[cite: 1]. En contrepartie, l'exécution est plus lente et l'occupation mémoire est plus élevée[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Outils"],
                q: "Qu'est-ce qu'un IDE (Integrated Development Environment)[cite: 1] ?",
                options: [
                    { text: "Une interface regroupant un éditeur de code, un compilateur, un outil d'exécution et un débogueur[cite: 1]", isCorrect: true },
                    { text: "Un outil en ligne de commande permettant de relier des fichiers objets[cite: 1]", isCorrect: false }
                ],
                explanation: "Un IDE (comme VS Code, Code::Blocks, Eclipse) rassemble tous les outils nécessaires au développement dans une interface unique pour faciliter le travail du programmeur[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Hello World"],
                q: "Dans un programme C, quelle est la fonction appelée automatiquement au lancement de l'exécutable[cite: 1] ?",
                options: [
                    { text: "La fonction `main`[cite: 1]", isCorrect: true },
                    { text: "La première fonction déclarée en haut du fichier[cite: 1]", isCorrect: false },
                    { text: "La fonction `start`[cite: 1]", isCorrect: false }
                ],
                explanation: "En C, l'entrée d'un programme est obligatoirement une fonction unique nommée `main`[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Bibliothèques"],
                q: "À quoi sert la ligne `#include <stdio.h>` au début d'un programme[cite: 1] ?",
                options: [
                    { text: "À déclarer l'utilisation des fonctions d'entrée/sortie standards (comme `printf`)[cite: 1]", isCorrect: true },
                    { text: "À définir la fonction `main`[cite: 1]", isCorrect: false }
                ],
                explanation: "L'inclusion de `stdio.h` (Standard Input/Output) est nécessaire pour utiliser les fonctions de base permettant de lire et d'afficher des données[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Fonctions"],
                q: "Que signifie précisément la signature `int main(void)`[cite: 1] ?",
                options: [
                    { text: "La fonction renvoie un code de type entier (`int`) et n'accepte aucun paramètre (`void`)[cite: 1]", isCorrect: true },
                    { text: "La fonction ne renvoie rien et prend des entiers en paramètres[cite: 1]", isCorrect: false }
                ],
                explanation: "Le mot clé `int` indique le type de retour (0 ou EXIT_SUCCESS en général pour dire que tout va bien), et `void` indique formellement l'absence de paramètres[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Instructions"],
                q: "Comment marque-t-on la fin d'une instruction classique en C[cite: 1] ?",
                options: [
                    { text: "Avec un point-virgule `;`[cite: 1]", isCorrect: true },
                    { text: "Avec un simple retour à la ligne[cite: 1]", isCorrect: false }
                ],
                explanation: "Contrairement à Python où le retour à la ligne suffit, le langage C exige un point-virgule `;` pour clore chaque instruction[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Blocs"],
                q: "Quel symbole est utilisé pour encadrer un bloc d'instructions (le corps d'une fonction, d'une boucle...)[cite: 1] ?",
                options: [
                    { text: "Les accolades `{` et `}`[cite: 1]", isCorrect: true },
                    { text: "L'indentation visuelle du code[cite: 1]", isCorrect: false },
                    { text: "Les crochets `[` et `]`[cite: 1]", isCorrect: false }
                ],
                explanation: "En C, les blocs d'instructions sont structurellement délimités par des accolades[cite: 1]. L'indentation n'est là que pour le confort visuel du développeur[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Commentaires"],
                q: "Comment écrit-on un commentaire sur plusieurs lignes en C[cite: 1] ?",
                options: [
                    { text: "En l'encadrant entre `/*` et `*/`[cite: 1]", isCorrect: true },
                    { text: "En l'encadrant entre `<!--` et `-->`[cite: 1]", isCorrect: false },
                    { text: "En commençant chaque ligne par `#`[cite: 1]", isCorrect: false }
                ],
                explanation: "Les blocs de commentaires s'écrivent avec `/* texte */`. Attention, ils ne sont pas imbricables[cite: 1]. On peut aussi utiliser `//` pour commenter la fin d'une ligne[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Return"],
                q: "Dans la fonction `main`, que signifie l'instruction `return EXIT_SUCCESS;` (ou `return 0;`)[cite: 1] ?",
                options: [
                    { text: "Elle signale au système d'exploitation que le programme s'est terminé sans erreur[cite: 1]", isCorrect: true },
                    { text: "Elle relance le programme au début[cite: 1]", isCorrect: false }
                ],
                explanation: "La valeur de retour de `main` est un code transmis au système. 0 (ou `EXIT_SUCCESS` via `stdlib.h`) indique une exécution réussie[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Variables"],
                q: "Que représente l'instruction `float a,b;` en dehors de toute fonction[cite: 1] ?",
                options: [
                    { text: "La déclaration de variables globales de type réel (float)[cite: 1]", isCorrect: true },
                    { text: "La définition d'une constante[cite: 1]", isCorrect: false }
                ],
                explanation: "Déclarées en dehors de tout bloc, `a` et `b` deviennent des variables globales accessibles par toutes les fonctions du fichier[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Directives"],
                q: "À quoi sert la directive `#define PI 3.14`[cite: 1] ?",
                options: [
                    { text: "À créer une constante de préprocesseur qui remplacera textuellement `PI` par `3.14` avant la compilation[cite: 1]", isCorrect: true },
                    { text: "À allouer de la mémoire dynamique pour la variable PI[cite: 1]", isCorrect: false }
                ],
                explanation: "Le `#define` permet de créer des macros ou des constantes symboliques. Le compilateur remplacera chaque occurrence de `PI` par `3.14`[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base"],
                q: "Le langage C est-il sensible à la casse (majuscules/minuscules)[cite: 1] ?",
                options: [
                    { text: "Oui, `variable` et `Variable` sont considérés comme deux identificateurs totalement différents[cite: 1]", isCorrect: true },
                    { text: "Non, il ignore la casse[cite: 1]", isCorrect: false }
                ],
                explanation: "Le C est strict et sensible à la casse. Par exemple, le nom de l'université `dauphine` est différent de `Dauphine` pour le compilateur[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Identificateurs"],
                q: "Quelles sont les règles de nommage des identificateurs en C[cite: 1] ?",
                options: [
                    { text: "Uniquement des lettres (sans accent), des chiffres et l'underscore `_`, sans commencer par un chiffre[cite: 1]", isCorrect: true },
                    { text: "Tous les caractères y compris les espaces et les accents sont autorisés[cite: 1]", isCorrect: false }
                ],
                explanation: "L'ASCII pur sans accent est de rigueur. On évite de commencer par un `_` (souvent réservé au système), et les espaces sont interdits dans un identificateur[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Bonnes pratiques", "Lisibilité"],
                q: "Pourquoi l'indentation est-elle importante en C si le compilateur ne s'en sert pas[cite: 1] ?",
                options: [
                    { text: "Pour permettre la relecture humaine et faciliter le débogage (par exemple, pour repérer les accolades fermantes manquantes)[cite: 1]", isCorrect: true },
                    { text: "Pour réduire la taille du fichier exécutable[cite: 1]", isCorrect: false }
                ],
                explanation: "L'indentation n'a aucune valeur syntaxique pour le compilateur (il peut tout lire sur une seule ligne), mais elle est vitale pour la maintenance et la compréhension du code[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Python vs C", "Déclarations"],
                q: "Quelle différence fondamentale existe-t-il entre C et Python concernant l'utilisation des variables[cite: 1] ?",
                options: [
                    { text: "En C, toute variable doit être explicitement déclarée avec son type avant de pouvoir être utilisée[cite: 1]", isCorrect: true },
                    { text: "En Python, on doit obligatoirement déclarer le type de la variable avant de l'assigner[cite: 1]", isCorrect: false }
                ],
                explanation: "Le C impose que toute chose (variable, fonction) soit déclarée pour être connue du compilateur avant d'être utilisée. Python permet la déclaration automatique à l'affectation[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Python vs C", "Structure"],
                q: "Si en Python les instructions conditionnelles (if) et les fonctions (def) reposent sur l'indentation, sur quoi reposent-elles en C[cite: 1] ?",
                options: [
                    { text: "Sur la syntaxe des blocs encadrés par des accolades `{ }`[cite: 1]", isCorrect: true },
                    { text: "Sur des mots clés de fermeture comme `endif` ou `enddef`[cite: 1]", isCorrect: false }
                ],
                explanation: "En C, c'est l'accolade qui ouvre et ferme le périmètre d'une fonction, d'une boucle ou d'une condition[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Python vs C", "Typage"],
                q: "Laquelle de ces signatures de fonction illustre le passage de Python (typage dynamique) au C (typage statique)[cite: 1] ?",
                options: [
                    { text: "Python: `def f(x):`  ->  C: `int f(int x) { ... }`[cite: 1]", isCorrect: true },
                    { text: "Python: `int f(x):`  ->  C: `def f(int x) { ... }`[cite: 1]", isCorrect: false }
                ],
                explanation: "Le langage C exige que l'on indique le type de la valeur de retour (ex: `int`) et le type de chaque argument (ex: `int x`) lors de la définition de la fonction[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Python vs C", "Exécution"],
                q: "Quelle différence d'exécution globale sépare Python et C[cite: 1] ?",
                options: [
                    { text: "Python exécute le script de haut en bas ; le C cherche directement la fonction `main` et n'exécute que son contenu[cite: 1]", isCorrect: true },
                    { text: "Le C exécute les fonctions dans l'ordre de leur déclaration dans le fichier[cite: 1]", isCorrect: false }
                ],
                explanation: "En C, on ne peut pas mettre d'instructions flottantes en dehors d'une fonction. Le processeur va systématiquement démarrer l'exécution à la première ligne de la fonction `main`, peu importe où elle se trouve dans le code[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Histoire", "Normes"],
                q: "Quelles sont quelques-unes des principales normes ISO du langage C[cite: 1] ?",
                options: [
                    { text: "C90, C99, C11, C23[cite: 1]", isCorrect: true },
                    { text: "C++, C#, Objective-C[cite: 1]", isCorrect: false }
                ],
                explanation: "Après le livre K&R de 1978, l'ANSI a standardisé le C en 1989, puis l'ISO en 1990 (C90), avec des mises à jour majeures en 1999 (C99), 2011 (C11) et récemment 2023 (C23) ajoutant de nouvelles fonctionnalités[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Bonnes pratiques", "Nomenclature"],
                q: "Pourquoi insiste-t-on sur le choix des identificateurs en C[cite: 1] ?",
                options: [
                    { text: "Pour améliorer drastiquement la lisibilité et la réutilisabilité du code[cite: 1]", isCorrect: true },
                    { text: "Pour optimiser la vitesse de compilation de GCC[cite: 1]", isCorrect: false }
                ],
                explanation: "Un code propre (variables nommées clairement, cohérence de présentation) facilite sa maintenance, le C ayant par nature peu de structures de très haut niveau[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Généralités", "IHM"],
                q: "Le langage C propose-t-il une bibliothèque standard de création d'interface graphique (GUI)[cite: 1] ?",
                options: [
                    { text: "Non, il n'y a pas de GUI standard, le langage est minimaliste[cite: 1]", isCorrect: true },
                    { text: "Oui, la bibliothèque `stdio.h` intègre la gestion des fenêtres[cite: 1]", isCorrect: false }
                ],
                explanation: "C'est l'un de ses inconvénients (ou de ses forces selon le point de vue) : le C est minimaliste et ne fournit pas de GUI dans sa bibliothèque standard[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Python vs C", "Garbage Collector"],
                q: "Dans un programme, que doit faire le développeur vis-à-vis de la mémoire en C par rapport à Python[cite: 1] ?",
                options: [
                    { text: "En C, le développeur gère la mémoire manuellement ; en Python, le Garbage Collector s'en occupe automatiquement[cite: 1]", isCorrect: true },
                    { text: "Les deux langages possèdent un Garbage Collector automatique[cite: 1]", isCorrect: false }
                ],
                explanation: "C'est une différence capitale. L'absence de gestion automatique en C est ce qui le rend si rapide, mais c'est aussi la source majeure de bugs (liberté dangereuse)[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Syntaxe de base", "Traductions"],
                q: "Comment traduit-on l'assignation Python `price = 5` en C sachant qu'on crée la variable[cite: 1] ?",
                options: [
                    { text: "`int price = 5;`[cite: 1]", isCorrect: true },
                    { text: "`price = 5;` sans indiquer le type[cite: 1]", isCorrect: false }
                ],
                explanation: "En C, lors de sa première utilisation, la variable doit impérativement être déclarée avec son type et l'instruction doit se terminer par un point-virgule[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Culture générale"],
                q: "Selon la célèbre phrase de Dennis Ritchie : « C is quirky, flawed, and an enormous... »[cite: 1]",
                options: [
                    { text: "... success. »[cite: 1]", isCorrect: true },
                    { text: "... failure. »[cite: 1]", isCorrect: false }
                ],
                explanation: "Dennis Ritchie a reconnu que malgré ses défauts et étrangetés, le langage a connu un succès colossal[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Compilation", "Édition de liens"],
                q: "Lors de la chaîne de compilation, à quoi sert l'éditeur de liens (linker)[cite: 1] ?",
                options: [
                    { text: "Il relie ensemble tous les fichiers objets compilés (et les librairies) pour former le programme exécutable final[cite: 1]", isCorrect: true },
                    { text: "Il traduit le code source C directement en langage assembleur[cite: 1]", isCorrect: false }
                ],
                explanation: "La compilation transforme chaque source en fichier objet. L'édition de liens rassemble ces morceaux éparpillés (plus les bibliothèques comme `stdio.h`) pour créer un seul binaire exécutable[cite: 1].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    },
"Programmation C : Chapitre 2 (Types et Variables)": {
        course: "prog_c",
        folder: "Informatique",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Mémoire", "Définitions"],
                q: "Qu'est-ce qu'une adresse mémoire dans le contexte d'un programme C[cite: 2] ?",
                options: [
                    { text: "Une case mémoire d'un octet, qui est l'unité indivisible de 8 bits (0 ou 1)[cite: 2]", isCorrect: true },
                    { text: "L'emplacement du fichier source sur le disque dur[cite: 2]", isCorrect: false },
                    { text: "Une variable globale stockée dans le processeur[cite: 2]", isCorrect: false }
                ],
                explanation: "La mémoire est manipulée à l'aide d'adresses. Chaque adresse correspond à une case mémoire d'un octet (8 bits)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Mémoire", "Zones"],
                q: "Quelles sont les différentes zones de mémoire utilisées par un programme C[cite: 2] ?",
                options: [
                    { text: "La zone dynamique (pile, tas) et la zone statique (code, données statiques)[cite: 2]", isCorrect: true },
                    { text: "Uniquement le disque dur et la mémoire cache[cite: 2]", isCorrect: false }
                ],
                explanation: "La mémoire d'un programme est divisée en plusieurs segments : la zone dynamique (qui inclut la pile pour les variables locales et le tas pour l'allocation dynamique) et la zone statique (contenant le code exécutable et les données statiques globales)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Types", "Généralités"],
                q: "À quoi sert la déclaration explicite d'un type en C[cite: 2] ?",
                options: [
                    { text: "À permettre au compilateur de réserver la bonne quantité de mémoire et de vérifier la cohérence des expressions[cite: 2]", isCorrect: true },
                    { text: "À indiquer si la variable doit être stockée sur le disque ou en RAM[cite: 2]", isCorrect: false }
                ],
                explanation: "Le type donne deux informations cruciales au compilateur : la taille de la zone mémoire à réserver, et la façon dont il faut interpréter les bits qui s'y trouvent (signé, non signé, flottant...)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Types", "Généralités"],
                q: "Comment est définie la notion de type en C[cite: 2] ?",
                options: [
                    { text: "C'est la combinaison d'une taille de zone mémoire et d'une interprétation des bits[cite: 2]", isCorrect: true },
                    { text: "C'est uniquement la taille en octets de la variable[cite: 2]", isCorrect: false }
                ],
                explanation: "Un type = taille + interprétation (par exemple, savoir si le premier bit indique un signe ou fait partie de la valeur)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Types", "Portabilité"],
                q: "Quelle est l'unique contrainte imposée par la norme C concernant la taille des types entiers[cite: 2] ?",
                options: [
                    { text: "L'ordre des tailles : caractère < petit entier ≤ entier ≤ entier long[cite: 2]", isCorrect: true },
                    { text: "Qu'un entier `int` fasse exactement 4 octets sur toutes les machines[cite: 2]", isCorrect: false }
                ],
                explanation: "Le C est machine-dépendant. La norme impose seulement un ordre de grandeur (ex: `short` $\\le$ `int` $\\le$ `long`), ce qui explique pourquoi la taille exacte varie selon le compilateur et la machine (32 ou 64 bits)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Types entiers", "Limites"],
                q: "Quelles sont les valeurs possibles pour un `signed char` (1 octet)[cite: 2] ?",
                options: [
                    { text: "De -127 à 127 (la norme autorise aussi -128 selon le compilateur)[cite: 2]", isCorrect: true },
                    { text: "De 0 à 255[cite: 2]", isCorrect: false }
                ],
                explanation: "Un `signed char` utilise 1 octet (8 bits). Un bit est réservé pour le signe. La norme contraint l'intervalle entre $-(2^7-1)$ et $2^7-1$, soit $[-127 ; 127]$. Les compilateurs incluent souvent -128, mais ce n'est pas standard et nuit à la portabilité[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Types entiers", "Limites"],
                q: "Quelles sont les valeurs possibles pour un `unsigned char` (1 octet)[cite: 2] ?",
                options: [
                    { text: "De 0 à 255[cite: 2]", isCorrect: true },
                    { text: "De -127 à 127[cite: 2]", isCorrect: false }
                ],
                explanation: "Un `unsigned char` utilise l'intégralité de ses 8 bits pour des valeurs positives, allant donc de $0$ à $2^8-1 = 255$[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Types entiers", "Débordement"],
                q: "Que se passe-t-il si l'on exécute : `unsigned char c = 255; c = c + 1;`[cite: 2] ?",
                options: [
                    { text: "La variable `c` prend la valeur 0 (débordement)[cite: 2]", isCorrect: true },
                    { text: "La variable `c` prend la valeur 256[cite: 2]", isCorrect: false },
                    { text: "Le programme plante avec une erreur d'exécution[cite: 2]", isCorrect: false }
                ],
                explanation: "Il n'y a aucune vérification faite à l'exécution en C. Quand on ajoute 1 à `0b11111111`, on obtient `0b100000000`. Comme on n'a que 8 bits, le 9ème bit est tronqué et il ne reste que des zéros[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Types entiers", "Débordement", "Boucles"],
                q: "Quel est le problème dans cette boucle : `for (unsigned int i=10; i>=0; i--)`[cite: 2] ?",
                options: [
                    { text: "C'est une boucle infinie : quand `i` atteint 0, `i--` provoque un débordement qui remet `i` à sa valeur maximale ($2^{32}-1$), donc `i` reste toujours supérieur ou égal à 0[cite: 2]", isCorrect: true },
                    { text: "Il n'y a pas de problème, la boucle s'arrêtera quand `i` vaudra -1[cite: 2]", isCorrect: false }
                ],
                explanation: "Un `unsigned int` ne peut jamais être strictement inférieur à 0. Après 0, il boucle sur le plafond maximum (phénomène de roll-over), la condition de la boucle est donc une tautologie[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Types entiers", "Représentation"],
                q: "En C, comment écrire l'entier 12 en base octale dans le code source[cite: 2] ?",
                options: [
                    { text: "En ajoutant un 0 devant : `014`[cite: 2]", isCorrect: true },
                    { text: "En écrivant simplement `00012`[cite: 2]", isCorrect: false }
                ],
                explanation: "En C, un nombre entier qui commence par `0` est interprété comme de l'octal (base 8). Le nombre écrit `012` en C vaut donc $1\\times8 + 2 = 10$ en décimal[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Types entiers", "Opérations"],
                q: "Que vaut le résultat de la division `9/4` en C[cite: 2] ?",
                options: [
                    { text: "2[cite: 2]", isCorrect: true },
                    { text: "2.25[cite: 2]", isCorrect: false }
                ],
                explanation: "En C, si les deux opérandes sont des entiers, l'opérateur `/` effectue le quotient de la division entière (il tronque la partie décimale). Le résultat est donc 2[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Réels", "Types"],
                q: "Quelles sont les particularités des types `float` et `double`[cite: 2] ?",
                options: [
                    { text: "Ce sont des représentations en virgule flottante qui produisent des approximations et des erreurs d'arrondis. Ils ne doivent pas être utilisés pour des calculs exacts[cite: 2]", isCorrect: true },
                    { text: "Ils permettent de stocker des nombres réels avec une précision infinie[cite: 2]", isCorrect: false }
                ],
                explanation: "Les flottants sont des approximations stockées sous la forme $m \times 2^e$. Des nombres simples comme 0.1 ne sont pas représentables de façon exacte en binaire, ce qui crée des erreurs d'accumulation[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Réels", "Précision"],
                q: "Vrai ou Faux : En C, la condition `if (0.1 + 0.2 == 0.3)` est toujours vérifiée[cite: 2].",
                options: [
                    { text: "Faux[cite: 2]", isCorrect: true },
                    { text: "Vrai[cite: 2]", isCorrect: false }
                ],
                explanation: "C'est un piège classique de l'arithmétique à virgule flottante. L'approximation de 0.1 et de 0.2 en binaire fait que leur somme n'est pas strictement égale à l'approximation en mémoire de 0.3[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Réels", "Opérations"],
                q: "Que se passe-t-il lors de l'opération `8.4 / 2`[cite: 2] ?",
                options: [
                    { text: "Le 2 est implicitement converti en réel (2.0) pour adopter le type le plus précis, et le résultat est une division réelle (4.2)[cite: 2]", isCorrect: true },
                    { text: "Le programme génère une erreur car les types sont différents[cite: 2]", isCorrect: false }
                ],
                explanation: "C'est la règle de conversion automatique (promotion) du C. Si les opérandes sont de types différents, on convertit dans le type le plus « large » pour effectuer le calcul[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Caractères", "Définition"],
                q: "Comment le type `char` fonctionne-t-il en interne en C[cite: 2] ?",
                options: [
                    { text: "C'est un entier stocké sur 1 octet qui est interprété comme un code de caractère (code ASCII)[cite: 2]", isCorrect: true },
                    { text: "C'est un type de donnée complexe capable de stocker n'importe quel symbole Unicode[cite: 2]", isCorrect: false }
                ],
                explanation: "Un `char` est avant tout un petit entier de 8 bits. La table ASCII fait la correspondance entre ce nombre et un caractère affichable (pour les valeurs de 0 à 127)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Caractères", "Valeurs"],
                q: "Que va afficher l'instruction `printf(\"%d %d\", 9, '9');`[cite: 2] ?",
                options: [
                    { text: "9 et 57[cite: 2]", isCorrect: true },
                    { text: "9 et 9[cite: 2]", isCorrect: false }
                ],
                explanation: "Le premier argument est l'entier mathématique 9. Le second argument est le caractère `'9'`, dont la valeur dans la table ASCII est 57. Le formateur `%d` demande d'afficher l'entier sous-jacent[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Caractères", "Spéciaux"],
                q: "À quoi correspond le caractère spécial `\\n`[cite: 2] ?",
                options: [
                    { text: "Un saut de ligne[cite: 2]", isCorrect: true },
                    { text: "Une tabulation[cite: 2]", isCorrect: false }
                ],
                explanation: "Le `\\n` est la séquence d'échappement standard pour ordonner un retour à la ligne (newline)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variables", "Initialisation"],
                q: "Quelle est la valeur par défaut d'une variable non initialisée (ex: `int a;` dans une fonction)[cite: 2] ?",
                options: [
                    { text: "Sa valeur est indéterminée (elle contient ce qui traînait en mémoire à cette adresse)[cite: 2]", isCorrect: true },
                    { text: "Elle vaut 0 par sécurité[cite: 2]", isCorrect: false }
                ],
                explanation: "En C, les variables locales ne sont pas nettoyées. Déclarer `int a;` réserve la mémoire, mais ne la vide pas. Ne jamais utiliser une variable sans l'avoir initialisée d'abord ![cite: 2]",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variables", "Conversions implicites"],
                q: "Que se passe-t-il avec le code `int a = 2.45;`[cite: 2] ?",
                options: [
                    { text: "La valeur réelle (2.45) est tronquée, et la variable `a` reçoit la valeur 2[cite: 2]", isCorrect: true },
                    { text: "Le compilateur rejette l'affectation car les types sont incompatibles[cite: 2]", isCorrect: false }
                ],
                explanation: "C'est une conversion implicite. La donnée à droite est forcée dans le type de la variable à gauche, ce qui entraîne une perte de précision (la partie décimale est ignorée)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Variables", "Cast"],
                q: "Qu'est-ce qu'un « cast » explicite en C[cite: 2] ?",
                options: [
                    { text: "Le fait de forcer le compilateur à interpréter une variable dans un autre type (ex: `b = (int) a;`)[cite: 2]", isCorrect: true },
                    { text: "Une fonction qui nettoie la mémoire d'une variable[cite: 2]", isCorrect: false }
                ],
                explanation: "Le cast (transtypage) dit au compilateur de fermer les yeux et de traiter les octets de la variable selon les règles du nouveau type précisé entre parenthèses[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Constantes", "Déclaration"],
                q: "Quelle est la différence fondamentale entre `const int a = 5;` et `#define A 5`[cite: 2] ?",
                options: [
                    { text: "`const` crée une vraie variable (en lecture seule) avec un type et un espace mémoire. `#define` effectue une simple substitution de texte avant la compilation sans aucune vérification[cite: 2]", isCorrect: true },
                    { text: "Il n'y a aucune différence, ce sont deux syntaxes pour la même chose[cite: 2]", isCorrect: false }
                ],
                explanation: "La macro `#define` est aveugle. Le préprocesseur cherche et remplace le texte. La variable `const` est gérée par le compilateur, avec toutes les garanties de type et de portée[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Constantes", "Macros"],
                q: "Pourquoi est-il risqué d'utiliser des macros (`#define`) avec un nom d'un seul caractère (ex: `#define A 3`)[cite: 2] ?",
                options: [
                    { text: "Parce que le remplacement de texte est brut. Si on déclare ensuite une variable `int A = 4;`, le code deviendra `int 3 = 4;` et plantera à la compilation[cite: 2]", isCorrect: true },
                    { text: "Parce que le C interdit les identificateurs d'une seule lettre[cite: 2]", isCorrect: false }
                ],
                explanation: "Le préprocesseur qui gère le `#define` ne comprend pas le langage C. Il remplace le texte partout où il le trouve. C'est pourquoi on utilise toujours des mots longs et en MAJUSCULES pour les macros[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tableaux", "Caractéristiques"],
                q: "Un tableau statique en C peut-il être redimensionné au cours de l'exécution du programme[cite: 2] ?",
                options: [
                    { text: "Non[cite: 2]", isCorrect: true },
                    { text: "Oui, en utilisant la fonction resize[cite: 2]", isCorrect: false }
                ],
                explanation: "Un tableau statique est placé dans une zone contiguë de la pile avec une taille fixée à la compilation. Il ne peut jamais changer de taille. Pour un tableau extensible, il faut gérer la mémoire dynamiquement (tas)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tableaux", "Accès"],
                q: "Dans un tableau `int tab[10];`, quel est l'indice du premier et du dernier élément[cite: 2] ?",
                options: [
                    { text: "Le premier est `tab[0]` et le dernier est `tab[9]`[cite: 2]", isCorrect: true },
                    { text: "Le premier est `tab[1]` et le dernier est `tab[10]`[cite: 2]", isCorrect: false }
                ],
                explanation: "En C, les tableaux sont indexés à partir de 0 (zéro-based numbering). Le dernier élément d'un tableau de taille $N$ est donc à l'indice $N-1$[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tableaux", "Sécurité"],
                q: "Que se passe-t-il si l'on écrit `tab[10]` pour un tableau de taille 10[cite: 2] ?",
                options: [
                    { text: "C'est un accès hors-limites (out of bounds). Le C ne vérifie rien, on va lire ou corrompre la mémoire située juste après le tableau (erreur fatale possible)[cite: 2]", isCorrect: true },
                    { text: "Le compilateur signale une erreur et refuse de compiler[cite: 2]", isCorrect: false }
                ],
                explanation: "Le C ne surveille jamais les accès aux indices des tableaux, ni à la compilation ni à l'exécution. C'est l'entière responsabilité du programmeur de rester dans les bornes[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tableaux", "Taille"],
                q: "Pourquoi est-il nécessaire de transmettre la taille d'un tableau en tant que paramètre supplémentaire lorsqu'on le passe à une fonction[cite: 2] ?",
                options: [
                    { text: "Parce qu'un tableau ne connaît pas sa propre taille (il ne transmet que l'adresse de sa première case à la fonction)[cite: 2]", isCorrect: true },
                    { text: "Pour que la fonction puisse vérifier que le tableau n'est pas vide[cite: 2]", isCorrect: false }
                ],
                explanation: "En C, le nom d'un tableau est équivalent à l'adresse mémoire de son premier élément. La fonction appelée ignore complètement où s'arrête le tableau. L'utilisation de `sizeof` dans la fonction renverrait juste la taille d'une adresse[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tableaux", "Initialisation"],
                q: "Dans la déclaration `int tab[5] = {1};`, que valent les éléments du tableau[cite: 2] ?",
                options: [
                    { text: "Le premier vaut 1, et tous les autres (qui n'ont pas été précisés) sont initialisés à 0[cite: 2]", isCorrect: true },
                    { text: "Tous les éléments valent 1[cite: 2]", isCorrect: false }
                ],
                explanation: "Lorsqu'on initialise partiellement un tableau avec des accolades, le compilateur remplit automatiquement toutes les cases restantes avec des zéros[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tableaux", "Affectation"],
                q: "Pourquoi l'instruction `a = b;` (où `a` et `b` sont deux tableaux) provoque-t-elle une erreur de compilation[cite: 2] ?",
                options: [
                    { text: "Parce que le nom d'un tableau désigne une adresse mémoire constante (le début du tableau), on ne peut donc pas réaffecter cette adresse[cite: 2]", isCorrect: true },
                    { text: "Parce que les tableaux n'ont pas la même taille[cite: 2]", isCorrect: false }
                ],
                explanation: "Le C n'offre pas d'opérateur pour copier le contenu d'un tableau d'un seul coup. Le nom du tableau pointe de manière figée sur la première case, on ne peut pas écraser ce pointeur[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tableaux multidimensionnels", "Syntaxe"],
                q: "Comment accède-t-on à l'élément de la 2ème ligne et 3ème colonne de la matrice `int A[3][4];`[cite: 2] ?",
                options: [
                    { text: "`A[1][2]`[cite: 2]", isCorrect: true },
                    { text: "`A[2][3]`[cite: 2]", isCorrect: false },
                    { text: "`A[1, 2]`[cite: 2]", isCorrect: false }
                ],
                explanation: "Chaque dimension possède sa propre paire de crochets et on compte à partir de 0. La syntaxe `A[1,2]` avec une virgule compile mais effectue une opération obscure totalement différente de l'accès 2D[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tableaux multidimensionnels", "Parcours"],
                q: "Dans une très grande matrice en C, pourquoi est-il crucial de parcourir les éléments « ligne par ligne » plutôt que « colonne par colonne »[cite: 2] ?",
                options: [
                    { text: "Car le C stocke les matrices de manière linéaire (ligne après ligne) en mémoire. Le parcours par ligne respecte la contiguïté mémoire et est beaucoup plus rapide (mémoire cache)[cite: 2]", isCorrect: true },
                    { text: "C'est faux, le temps de parcours est exactement le même dans les deux sens[cite: 2]", isCorrect: false }
                ],
                explanation: "Un tableau 2D n'est qu'un grand tableau 1D déguisé, organisé ligne par ligne (`t[0][0]`, `t[0][1]`, `t[0][2]`, puis `t[1][0]`). Parcourir les colonnes implique de faire de grands bonds en mémoire, ruinant les performances d'accès (cache miss)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Tableaux", "Limites de la pile"],
                q: "Que se passera-t-il à l'exécution de ce code : `int main() { int tab[10000][10000]; return 0; }`[cite: 2] ?",
                options: [
                    { text: "Le programme va planter immédiatement avec une erreur de segmentation (Stack overflow)[cite: 2]", isCorrect: true },
                    { text: "Le tableau sera créé sans problème dans la RAM[cite: 2]", isCorrect: false }
                ],
                explanation: "Les tableaux statiques locaux sont stockés sur la « pile » (Stack), une zone mémoire de taille très restreinte (souvent de l'ordre de quelques Mo). Un tableau aussi gigantesque fait exploser la pile[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chaînes de caractères", "Définition"],
                q: "Qu'est-ce qu'une chaîne de caractères en langage C[cite: 2] ?",
                options: [
                    { text: "C'est simplement une convention : un tableau de `char` dont le tout dernier élément utile est suivi du caractère spécial `\\0` (caractère nul)[cite: 2]", isCorrect: true },
                    { text: "C'est un type de base indépendant nommé `String`[cite: 2]", isCorrect: false }
                ],
                explanation: "Le type String n'existe pas en C. Une chaîne est un tableau de caractères classique, et c'est le `\\0` qui indique aux fonctions (comme `printf`) où s'arrêter de lire[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chaînes de caractères", "Taille en mémoire"],
                q: "Pour stocker la chaîne \"cat\" (3 lettres), quelle doit être la longueur minimale du tableau de caractères[cite: 2] ?",
                options: [
                    { text: "4 cases (3 pour les lettres, plus 1 pour le caractère de fin `\\0`)[cite: 2]", isCorrect: true },
                    { text: "3 cases[cite: 2]", isCorrect: false }
                ],
                explanation: "Il faut toujours prévoir une case supplémentaire pour loger le caractère de terminaison nul (`\\0`), indispensable pour délimiter la fin de la chaîne[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chaînes de caractères", "Bibliothèques"],
                q: "Si `s1` et `s2` sont des chaînes, pourquoi l'instruction `s2 = s1;` ne copie-t-elle pas la chaîne[cite: 2] ?",
                options: [
                    { text: "Car ce sont des tableaux (on ne peut pas réaffecter les adresses de tableaux statiques). Il faut utiliser une fonction dédiée comme `strcpy(s2, s1);` de la bibliothèque `string.h`[cite: 2]", isCorrect: true },
                    { text: "Car l'opérateur `=` copie à l'envers, il faut faire `s1 = s2;`[cite: 2]", isCorrect: false }
                ],
                explanation: "Comme pour tous les tableaux en C, le signe `=` ne duplique pas le contenu des cases. On doit utiliser des fonctions standard (`strcpy` pour la copie, `strlen` pour la taille, `strcmp` pour la comparaison)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Chaînes de caractères", "Erreurs classiques"],
                q: "Quel est le risque principal lié à l'utilisation du `\\0` pour marquer la fin des chaînes en C[cite: 2] ?",
                options: [
                    { text: "Si l'on oublie de l'insérer (ou si on l'écrase par erreur), les fonctions de lecture comme `printf` ou `strlen` vont continuer à lire la mémoire à l'infini jusqu'à provoquer un crash[cite: 2]", isCorrect: true },
                    { text: "Cela ralentit considérablement la compilation[cite: 2]", isCorrect: false }
                ],
                explanation: "Les fonctions du C s'appuient aveuglément sur la présence de cette sentinelle `\\0`. Sans elle, elles parcourent la mémoire indéfiniment (car le tableau ne connaît pas sa propre taille)[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Concepts fondamentaux"],
                q: "En C, l'équation « Variable = ... » se résume à trois éléments fondamentaux. Lesquels[cite: 2] ?",
                options: [
                    { text: "Variable = adresse + type + valeur[cite: 2]", isCorrect: true },
                    { text: "Variable = nom + portée + fonction[cite: 2]", isCorrect: false }
                ],
                explanation: "C'est la clé de voûte de la mémoire en C : une variable est située à une adresse précise, elle stocke une valeur binaire pure, et c'est son type qui détermine comment cette valeur doit être interprétée et quelle est sa taille[cite: 2].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    },
"Programmation C : Chapitre 3 (Expressions, instructions et E/S simples)": {
        course: "prog_c",
        folder: "Informatique",
        stats: { attempts: 0, correct: 0 },
        dailyValidations: {},
        questions: [
            {
                type: "qcm",
                tags: ["Expressions", "Définitions"],
                q: "En langage C, qu'est-ce qu'une expression[cite: 3] ?",
                options: [
                    { text: "Une combinaison de valeurs, de variables, d'opérateurs et d'appels de fonctions qui est évaluée pour produire une valeur de type connu[cite: 3]", isCorrect: true },
                    { text: "Une étape du programme qui ne produit aucune valeur, comme une déclaration[cite: 3]", isCorrect: false }
                ],
                explanation: "Une expression produit toujours une valeur typée, qu'il s'agisse d'une constante (ex: 42), d'une opération ($x+y$) ou d'un appel de fonction[cite: 3]. Une étape qui ne produit rien est une instruction[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Instructions", "Définitions"],
                q: "Quelle est la principale différence entre une expression et une instruction[cite: 3] ?",
                options: [
                    { text: "Une instruction est une étape du programme qui ne produit aucune valeur, contrairement à une expression[cite: 3]", isCorrect: true },
                    { text: "Une expression est obligatoirement terminée par un point-virgule, contrairement à une instruction[cite: 3]", isCorrect: false }
                ],
                explanation: "Une instruction (comme la déclaration `int x;` ou une boucle `for`) décrit une action à effectuer mais ne s'évalue pas en une valeur[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Affectation", "Valeur de retour"],
                q: "Que produit l'expression d'affectation `x = 5` en plus de stocker la valeur dans la variable[cite: 3] ?",
                options: [
                    { text: "Elle renvoie la valeur affectée (ici 5)[cite: 3]", isCorrect: true },
                    { text: "Elle renvoie un booléen indiquant si l'affectation a réussi[cite: 3]", isCorrect: false },
                    { text: "Elle ne renvoie aucune valeur[cite: 3]", isCorrect: false }
                ],
                explanation: "En C, l'affectation est une expression qui renvoie la valeur affectée[cite: 3]. C'est ce qui permet d'enchaîner les affectations comme `x = y = z = 5;` ou de tester des retours de fonctions directement dans un `if`[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Affectation", "Exemples"],
                q: "Si `int a = 3;` et `int b = (a = a + 5) + 1;`, que valent `a` et `b` à la fin de l'exécution[cite: 3] ?",
                options: [
                    { text: "`a` vaut 8 et `b` vaut 9[cite: 3]", isCorrect: true },
                    { text: "`a` vaut 3 et `b` vaut 9[cite: 3]", isCorrect: false }
                ],
                explanation: "L'expression `(a = a + 5)` affecte la valeur 8 à `a` et renvoie cette même valeur 8[cite: 3]. Ensuite, `b` reçoit la valeur $8 + 1 = 9$[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Affectation", "Opérateurs composés"],
                q: "À quoi équivaut strictement l'instruction `x *= y + 1;`[cite: 3] ?",
                options: [
                    { text: "`x = x * (y + 1);`[cite: 3]", isCorrect: true },
                    { text: "`x = x * y + 1;`[cite: 3]", isCorrect: false }
                ],
                explanation: "Les affectations composées `<lvalue> <op>= <expression>` équivalent à `<lvalue> = <lvalue> <op> (<expression>)`[cite: 3]. L'expression de droite est toujours évaluée en premier[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Opérateurs", "Incrémentation"],
                q: "Quelle est la différence entre l'incrémentation postfixée (`i++`) et préfixée (`++i`)[cite: 3] ?",
                options: [
                    { text: "`i++` renvoie la valeur de `i` avant l'incrémentation, tandis que `++i` renvoie la valeur de `i` après l'incrémentation[cite: 3]", isCorrect: true },
                    { text: "`i++` ajoute 1, tandis que `++i` ajoute la valeur de la variable précédente[cite: 3]", isCorrect: false }
                ],
                explanation: "Dans les deux cas, la variable est incrémentée[cite: 3]. La seule différence réside dans la valeur renvoyée par l'expression au moment de son exécution[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Opérateurs", "Incrémentation", "Exemples"],
                q: "Si `int i = 2;` et `int a = i++;`, quelles sont les valeurs finales[cite: 3] ?",
                options: [
                    { text: "`a = 2` et `i = 3`[cite: 3]", isCorrect: true },
                    { text: "`a = 3` et `i = 3`[cite: 3]", isCorrect: false }
                ],
                explanation: "L'opérateur postfixé `i++` renvoie la valeur courante de `i` (donc 2) pour l'affecter à `a`, puis incrémente `i` à 3[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Opérateurs", "Erreurs classiques"],
                q: "Peut-on utiliser l'opérateur d'incrémentation sur une constante, comme `5++;`[cite: 3] ?",
                options: [
                    { text: "Non, cela produit une erreur[cite: 3]", isCorrect: true },
                    { text: "Oui, la valeur devient 6 en mémoire[cite: 3]", isCorrect: false }
                ],
                explanation: "L'opérateur d'incrémentation requiert une `<lvalue>` (une variable possédant une adresse mémoire modifiable). Il ne s'applique pas sur les constantes[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Booléens", "Généralités"],
                q: "Comment le langage C (historiquement, avant C99) représente-t-il les valeurs booléennes[cite: 3] ?",
                options: [
                    { text: "La valeur 0 représente \"faux\", et toute valeur non nulle représente \"vrai\"[cite: 3]", isCorrect: true },
                    { text: "Avec les mots clés `True` et `False` uniquement[cite: 3]", isCorrect: false }
                ],
                explanation: "Historiquement, le C n'a pas de type booléen dédié. Le zéro vaut faux, et toute autre valeur (comme 42 ou -1) est évaluée comme vraie[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Booléens", "Normes"],
                q: "Quel ajout la norme C99 a-t-elle apporté concernant les booléens[cite: 3] ?",
                options: [
                    { text: "L'ajout du type `_Bool` et de la macro `bool` via la bibliothèque `<stdbool.h>`[cite: 3]", isCorrect: true },
                    { text: "La suppression définitive de l'évaluation du nombre 0 comme faux[cite: 3]", isCorrect: false }
                ],
                explanation: "La norme C99 a introduit `_Bool` et l'en-tête `<stdbool.h>`. En C23, `bool` devient même un mot-clé natif du langage[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Opérateurs", "Logique"],
                q: "Quels sont les opérateurs logiques en C pour le ET, le OU et le NON[cite: 3] ?",
                options: [
                    { text: "`&&` pour ET, `||` pour OU, `!` pour NON[cite: 3]", isCorrect: true },
                    { text: "`&` pour ET, `|` pour OU, `~` pour NON[cite: 3]", isCorrect: false },
                    { text: "`and` pour ET, `or` pour OU, `not` pour NON[cite: 3]", isCorrect: false }
                ],
                explanation: "Les opérateurs logiques sont `&&` (ET), `||` (OU), et `!` (NON)[cite: 3]. Les opérateurs `&` et `|` sont des opérateurs bit à bit[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Booléens", "Évaluation paresseuse"],
                q: "Qu'est-ce que l'évaluation paresseuse (lazy evaluation) de l'opérateur logique `&&`[cite: 3] ?",
                options: [
                    { text: "Dans `A && B`, si `A` est faux, l'expression `B` n'est même pas évaluée car le résultat sera forcément faux[cite: 3]", isCorrect: true },
                    { text: "Le compilateur retarde le calcul de l'expression à la fin de la fonction[cite: 3]", isCorrect: false }
                ],
                explanation: "C'est un mécanisme de sécurité et d'optimisation fondamental en C. Si la première partie d'un ET logique échoue, la seconde est ignorée[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Booléens", "Évaluation paresseuse"],
                q: "Comment fonctionne l'évaluation paresseuse de l'opérateur logique `||`[cite: 3] ?",
                options: [
                    { text: "Dans `A || B`, si `A` est vrai, l'expression `B` n'est pas évaluée car le résultat sera forcément vrai[cite: 3]", isCorrect: true },
                    { text: "Dans `A || B`, les deux opérandes sont toujours évaluées pour vérifier les erreurs[cite: 3]", isCorrect: false }
                ],
                explanation: "Dès qu'une condition du OU logique est vraie (en lisant de gauche à droite), le système arrête l'évaluation et renvoie vrai[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Booléens", "Évaluation paresseuse", "Exemples"],
                q: "Dans l'expression `if (s != NULL && s[0] < '0')`, pourquoi l'ordre est-il vital[cite: 3] ?",
                options: [
                    { text: "Grâce à l'évaluation paresseuse, si `s` est NULL, `s[0]` ne sera jamais évalué, ce qui évite un crash (erreur de segmentation)[cite: 3]", isCorrect: true },
                    { text: "C'est juste une convention de style[cite: 3]", isCorrect: false }
                ],
                explanation: "L'évaluation paresseuse garantit que l'opérande de droite n'est testée que si celle de gauche est vraie. On teste donc si le pointeur est valide AVANT d'essayer de lire sa première case[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Opérateurs", "Évaluation"],
                q: "En dehors des opérateurs `&&` et `||`, que garantit le C sur l'ordre d'évaluation des opérandes (ex: `f() + g()`)[cite: 3] ?",
                options: [
                    { text: "Rien n'est garanti, l'ordre d'évaluation est souvent non spécifié[cite: 3]", isCorrect: true },
                    { text: "L'évaluation se fait toujours strictement de gauche à droite[cite: 3]", isCorrect: false }
                ],
                explanation: "L'ordre d'évaluation des opérandes pour des opérations mathématiques ou des appels de fonctions n'est pas défini par la norme. On ne sait pas si `f()` sera exécuté avant `g()`[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Opérateurs", "Comportement indéfini"],
                q: "Pourquoi l'expression `A[i] = B[i++]` est-elle considérée comme un comportement indéfini[cite: 3] ?",
                options: [
                    { text: "Car l'ordre d'évaluation n'étant pas spécifié, on ne sait pas si le `i` de `A[i]` sera la valeur avant ou après l'incrémentation de `i++`[cite: 3]", isCorrect: true },
                    { text: "Car on ne peut pas affecter un tableau à un autre tableau[cite: 3]", isCorrect: false }
                ],
                explanation: "Modifier une variable (avec `++`) et la relire dans la même expression, sans point de séquence garanti, donne un comportement indéfini en C[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Comparaison", "Types"],
                q: "Quelles sont les opérateurs réservés à la comparaison d'ordre sur des types numériques[cite: 3] ?",
                options: [
                    { text: "`<`, `>`, `<=`, `>=`[cite: 3]", isCorrect: true },
                    { text: "`==`, `!=`[cite: 3]", isCorrect: false }
                ],
                explanation: "Les opérateurs de stricte infériorité/supériorité ne s'appliquent qu'à des grandeurs numériques. L'égalité (`==`) s'applique plus largement (pointeurs, caractères)[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Opérateurs", "Priorité"],
                q: "Quel opérateur est le plus prioritaire entre `&&`, `==` et `<`[cite: 3] ?",
                options: [
                    { text: "`<` est plus prioritaire que `==`, qui est plus prioritaire que `&&`[cite: 3]", isCorrect: true },
                    { text: "`&&` est le plus prioritaire des trois[cite: 3]", isCorrect: false }
                ],
                explanation: "Dans l'ordre de priorité décroissant : les comparaisons d'ordre (`<`), puis l'égalité (`==`), puis le ET logique (`&&`)[cite: 3]. Dans le doute, il faut utiliser des parenthèses[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Booléens", "Exemples"],
                q: "Que vaut l'expression booléenne `!17` en C[cite: 3] ?",
                options: [
                    { text: "0 (faux)[cite: 3]", isCorrect: true },
                    { text: "1 (vrai)[cite: 3]", isCorrect: false }
                ],
                explanation: "Toute valeur non nulle est considérée comme vraie. La négation (`!`) de \"vrai\" donne 0 (\"faux\")[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Booléens", "Exemples"],
                q: "Que vaut l'expression `4 && 6` en C[cite: 3] ?",
                options: [
                    { text: "1 (vrai)[cite: 3]", isCorrect: true },
                    { text: "4[cite: 3]", isCorrect: false },
                    { text: "24[cite: 3]", isCorrect: false }
                ],
                explanation: "Les opérandes 4 et 6 sont non nuls, donc considérés comme vrais. L'opération logique \"vrai ET vrai\" renvoie le booléen vrai (qui vaut 1 en C)[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Structures conditionnelles", "Syntaxe"],
                q: "Quelle est la structure d'une instruction `if ... else` classique[cite: 3] ?",
                options: [
                    { text: "`if (expression) { instructions1; } else { instructions2; }`[cite: 3]", isCorrect: true },
                    { text: "`if expression then instructions1; else instructions2;`[cite: 3]", isCorrect: false }
                ],
                explanation: "En C, l'expression conditionnelle doit obligatoirement être entre parenthèses, et les blocs d'instructions sont (généralement) entourés d'accolades[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Structures conditionnelles", "Erreurs classiques"],
                q: "Que provoque le code `if (a = 2) { printf(\"vrai\"); }`[cite: 3] ?",
                options: [
                    { text: "L'affectation `a = 2` renvoie 2 (vrai), donc la condition est toujours remplie et le code affiche \"vrai\"[cite: 3]", isCorrect: true },
                    { text: "Une erreur de compilation[cite: 3]", isCorrect: false },
                    { text: "Il n'affiche rien si `a` ne valait pas 2 initialement[cite: 3]", isCorrect: false }
                ],
                explanation: "C'est une erreur très courante. On a confondu l'égalité `==` avec l'affectation `=`. L'affectation écrase `a` avec 2 et la condition évalue ce 2 comme \"vrai\"[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Structures conditionnelles", "Chaînes"],
                q: "Pourquoi le test `if (s1 == s2)` pour deux chaînes contenant \"Francois\" renvoie-t-il faux[cite: 3] ?",
                options: [
                    { text: "Parce que l'opérateur `==` compare les adresses mémoire des tableaux, pas le contenu textuel[cite: 3]", isCorrect: true },
                    { text: "Parce qu'il faut utiliser l'opérateur `===` en C[cite: 3]", isCorrect: false }
                ],
                explanation: "En C, le nom d'un tableau est un pointeur. Comparer deux chaînes avec `==` compare si elles sont stockées au même endroit en mémoire. Il faut utiliser `strcmp()`[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Structures conditionnelles", "Erreurs classiques"],
                q: "Que se passe-t-il dans ce code : `if (10 % 2 == 1); printf(\"10 est impair\\n\");`[cite: 3] ?",
                options: [
                    { text: "Il affichera toujours \"10 est impair\" car le point-virgule après le `if` termine l'instruction conditionnelle (instruction vide)[cite: 3]", isCorrect: true },
                    { text: "Le compilateur plante[cite: 3]", isCorrect: false }
                ],
                explanation: "Le point-virgule après la parenthèse du `if` constitue le corps du `if` (une action vide). Le `printf` qui suit est donc totalement indépendant de la condition et s'exécutera toujours[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Structures conditionnelles", "Portée"],
                q: "Dans un enchaînement `if ... if ... else`, à quel `if` le `else` est-il rattaché par défaut[cite: 3] ?",
                options: [
                    { text: "Au `if` le plus proche qui n'a pas encore de `else`[cite: 3]", isCorrect: true },
                    { text: "Au tout premier `if` de l'enchaînement[cite: 3]", isCorrect: false }
                ],
                explanation: "Pour éviter l'ambiguïté (problème du \"dangling else\"), le compilateur associe toujours le `else` au dernier `if` ouvert. Utiliser des accolades permet de forcer un autre comportement[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Boucles", "for"],
                q: "Quelles sont les trois parties constitutives de l'en-tête d'une boucle `for` en C[cite: 3] ?",
                options: [
                    { text: "`for(instruction_initialisation; expression_condition; instruction_evolution)`[cite: 3]", isCorrect: true },
                    { text: "`for(variable in liste_valeurs)`[cite: 3]", isCorrect: false }
                ],
                explanation: "La boucle `for` en C s'articule autour de l'initialisation (faite une fois), la condition (testée avant chaque tour), et l'évolution (exécutée en fin de tour)[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Boucles", "for"],
                q: "Peut-on laisser des champs vides dans un `for`, comme `for(; i < 10;)`[cite: 3] ?",
                options: [
                    { text: "Oui, c'est autorisé[cite: 3]", isCorrect: true },
                    { text: "Non, une erreur de syntaxe empêchera la compilation[cite: 3]", isCorrect: false }
                ],
                explanation: "Les trois champs du `for` sont optionnels. Laisser la condition vide équivaut à un test toujours vrai, ce qui crée une boucle infinie (`for(;;)`). Les points-virgules, eux, restent obligatoires[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Boucles", "Complexité"],
                q: "Pourquoi écrire `for(i=0; i < strlen(mot); i++)` peut-il poser un problème de complexité[cite: 3] ?",
                options: [
                    { text: "Parce que l'expression de condition (`strlen`) est réévaluée à CHAQUE itération, ce qui recalcule la longueur à chaque tour[cite: 3]", isCorrect: true },
                    { text: "Parce que `strlen` modifie la chaîne de caractères[cite: 3]", isCorrect: false }
                ],
                explanation: "Dans un `for`, l'expression centrale est testée à chaque boucle. Appeler une fonction lourde à cet endroit ralentit énormément le programme. Il vaut mieux la stocker dans une variable avant la boucle[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Boucles", "Portée"],
                q: "Si je déclare la variable d'itération DANS la boucle : `for(int i=0; i<10; i++)`, est-ce que `i` est accessible après la boucle[cite: 3] ?",
                options: [
                    { text: "Non, sa portée se limite au bloc du `for`. Une erreur de compilation surviendra si on l'appelle après[cite: 3]", isCorrect: true },
                    { text: "Oui, `i` conservera la valeur 10[cite: 3]", isCorrect: false }
                ],
                explanation: "Déclarer la variable d'itération à l'intérieur de l'en-tête du `for` réduit sa portée (scope) à la boucle elle-même. Elle n'existe plus en dehors[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Boucles", "while"],
                q: "Quelle est la particularité d'une boucle `while`[cite: 3] ?",
                options: [
                    { text: "Elle n'exige qu'une condition. Si la condition est fausse dès le début, on n'entre jamais dans la boucle[cite: 3]", isCorrect: true },
                    { text: "Elle s'exécute toujours au moins une fois[cite: 3]", isCorrect: false }
                ],
                explanation: "Le `while(expression)` teste la condition avant l'exécution du bloc d'instructions. C'est l'équivalent d'un `for` sans initialisation ni évolution[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Boucles", "do-while"],
                q: "Comment garantit-on qu'une boucle s'exécute TOUJOURS au moins une fois[cite: 3] ?",
                options: [
                    { text: "En utilisant la structure `do { ... } while(expression);`[cite: 3]", isCorrect: true },
                    { text: "En mettant la condition à 1 dans un `while`[cite: 3]", isCorrect: false }
                ],
                explanation: "La boucle `do...while` effectue d'abord les instructions, puis teste la condition à la fin de l'itération pour savoir si elle doit recommencer[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Boucles", "do-while", "Syntaxe"],
                q: "Quelle est la contrainte syntaxique stricte de la structure `do...while`[cite: 3] ?",
                options: [
                    { text: "Le point-virgule `;` est obligatoire tout à la fin, après la parenthèse du `while`[cite: 3]", isCorrect: true },
                    { text: "Les accolades ne sont pas autorisées[cite: 3]", isCorrect: false }
                ],
                explanation: "Contrairement aux blocs `if` ou `while` classiques qui finissent par une accolade fermante `}`, le `do...while` nécessite un point-virgule après l'expression : `do { ... } while(cond);`[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Contrôle du déroulement", "return"],
                q: "Quel est l'effet de l'instruction `return;`[cite: 3] ?",
                options: [
                    { text: "Elle quitte immédiatement la fonction en cours et retourne l'exécution à la fonction appelante[cite: 3]", isCorrect: true },
                    { text: "Elle relance la fonction depuis le début[cite: 3]", isCorrect: false }
                ],
                explanation: "Le `return` met fin à l'exécution de la fonction et, le cas échéant, transmet une valeur au code qui l'a appelée[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Contrôle du déroulement", "break"],
                q: "Que fait l'instruction `break;` dans une boucle[cite: 3] ?",
                options: [
                    { text: "Elle force la sortie immédiate de la boucle la plus proche[cite: 3]", isCorrect: true },
                    { text: "Elle passe immédiatement à l'itération suivante de la boucle[cite: 3]", isCorrect: false }
                ],
                explanation: "L'instruction `break` interrompt prématurément le déroulement et éjecte le programme de la boucle englobante la plus proche[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Contrôle du déroulement", "continue"],
                q: "Que fait l'instruction `continue;` dans une boucle[cite: 3] ?",
                options: [
                    { text: "Elle ignore le reste des instructions et passe directement à l'itération suivante de la boucle la plus proche[cite: 3]", isCorrect: true },
                    { text: "Elle casse la boucle et passe à l'instruction suivante[cite: 3]", isCorrect: false }
                ],
                explanation: "Le `continue` permet de zapper la fin du code de la boucle pour le tour en cours et d'embrayer directement sur la vérification de la condition pour le tour suivant. Cela évite des indentations lourdes (des `if` géants)[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Contrôle du déroulement", "switch"],
                q: "La structure de contrôle `switch` permet de remplacer de multiples `if...else`. Quelle est sa particularité[cite: 3] ?",
                options: [
                    { text: "Elle ne fonctionne que pour vérifier l'égalité sur des constantes entières (ou des caractères)[cite: 3]", isCorrect: true },
                    { text: "Elle permet d'évaluer des conditions complexes avec des signes supérieurs ou inférieurs[cite: 3]", isCorrect: false }
                ],
                explanation: "Le `switch` attend une expression évaluée à un nombre entier et compare ce résultat aux différentes branches `case`[cite: 3]. On ne peut pas mettre de conditions complexes type `x > 5` dans un `case`[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Contrôle du déroulement", "switch", "break"],
                q: "Dans un `switch`, pourquoi faut-il généralement mettre un `break;` à la fin de chaque `case`[cite: 3] ?",
                options: [
                    { text: "Parce que sans `break`, l'exécution va « traverser » et exécuter tous les `case` suivants (comportement de fall-through)[cite: 3]", isCorrect: true },
                    { text: "Parce que le compilateur refusera de compiler sans lui[cite: 3]", isCorrect: false }
                ],
                explanation: "Sans `break`, dès que le programme trouve un cas valide, il exécute les instructions de ce cas MAIS AUSSI les instructions de tous les cas positionnés en dessous, sans refaire de vérification[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["Contrôle du déroulement", "switch", "default"],
                q: "À quoi sert le mot-clé `default:` dans un `switch`[cite: 3] ?",
                options: [
                    { text: "Il permet d'exécuter des instructions si aucune des valeurs spécifiées dans les `case` ne correspond à l'expression[cite: 3]", isCorrect: true },
                    { text: "Il définit la variable par défaut à utiliser si l'expression est nulle[cite: 3]", isCorrect: false }
                ],
                explanation: "Le `default` est le cas par défaut (similaire au `else` final d'une longue chaîne de `if`). Il est optionnel mais recommandé pour traiter les cas imprévus[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "printf"],
                q: "À quoi sert le spécificateur `%d` dans un `printf`[cite: 3] ?",
                options: [
                    { text: "À remplacer l'emplacement par la valeur d'une expression au format entier (décimal)[cite: 3]", isCorrect: true },
                    { text: "À formater l'affichage en nombre flottant double[cite: 3]", isCorrect: false }
                ],
                explanation: "Les formats de `printf` incluent : `%d` pour un entier, `%f` pour un flottant, `%c` pour un caractère et `%s` pour une chaîne[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "printf", "Typage"],
                q: "Que se passe-t-il si vous écrivez `printf(\"%d\", 3.14);`[cite: 3] ?",
                options: [
                    { text: "La fonction va afficher n'importe quoi (elle va lire les bits du flottant comme si c'était un entier, car il n'y a pas de conversion automatique)[cite: 3]", isCorrect: true },
                    { text: "La fonction va afficher 3 en tronquant la décimale[cite: 3]", isCorrect: false }
                ],
                explanation: "Le `printf` en C ne convertit pas automatiquement les types. Si on lui donne un `%d`, il prend 32 bits en mémoire et les lit comme un entier, ce qui donne un résultat absurde avec un flottant[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "printf", "Buffer"],
                q: "Pourquoi le texte d'un `printf` peut-il ne pas s'afficher immédiatement à l'écran[cite: 3] ?",
                options: [
                    { text: "L'affichage est « bufferisé » : il est stocké en mémoire et n'est envoyé à l'écran que lorsque le buffer est plein, qu'il y a un `\\n`, ou que le programme se termine[cite: 3]", isCorrect: true },
                    { text: "Parce que l'écran rafraîchit trop lentement[cite: 3]", isCorrect: false }
                ],
                explanation: "Pour des raisons de performance (les appels systèmes coûtent cher), le C attend d'avoir un bon paquet de caractères (ou une commande claire comme `\\n`) avant de demander au système de les afficher[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "scanf"],
                q: "Quelle est la syntaxe correcte pour récupérer un entier saisi par l'utilisateur avec `scanf`[cite: 3] ?",
                options: [
                    { text: "`scanf(\"%d\", &a);` (avec l'esperluette devant la variable)[cite: 3]", isCorrect: true },
                    { text: "`scanf(\"%d\", a);`[cite: 3]", isCorrect: false }
                ],
                explanation: "Contrairement au `printf`, le `scanf` a besoin de modifier la variable. Il faut donc lui envoyer l'adresse mémoire de cette variable, d'où la présence obligatoire du `&`[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "scanf", "Chaînes"],
                q: "Faut-il mettre un `&` devant une variable chaîne de caractères (`char s[64]`) dans un `scanf(\"%s\", s)`[cite: 3] ?",
                options: [
                    { text: "Non, car le nom d'un tableau est déjà une adresse mémoire[cite: 3]", isCorrect: true },
                    { text: "Oui, c'est obligatoire pour tous les types[cite: 3]", isCorrect: false }
                ],
                explanation: "Pour une chaîne de caractères, la variable `s` désigne intrinsèquement l'adresse de la première case du tableau, on n'utilise donc pas le `&`[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "scanf", "Espaces"],
                q: "Lorsqu'on utilise `scanf(\"%s\", s);`, que se passe-t-il si l'utilisateur saisit \"Salut tout le monde\"[cite: 3] ?",
                options: [
                    { text: "La variable `s` contiendra uniquement \"Salut\" car le `%s` s'arrête au premier espace[cite: 3]", isCorrect: true },
                    { text: "La variable `s` contiendra toute la phrase[cite: 3]", isCorrect: false }
                ],
                explanation: "Le format `%s` de `scanf` lit une chaîne en s'arrêtant dès qu'il rencontre un espace, une tabulation ou un saut de ligne[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "scanf", "Retour"],
                q: "Que renvoie la fonction `scanf` après exécution[cite: 3] ?",
                options: [
                    { text: "Le nombre de variables qui ont été saisies et assignées correctement[cite: 3]", isCorrect: true },
                    { text: "La valeur saisie par l'utilisateur[cite: 3]", isCorrect: false }
                ],
                explanation: "C'est utile pour vérifier les erreurs. Si on demande 3 entiers et que `scanf` renvoie 2, c'est que l'utilisateur s'est trompé sur la troisième saisie (par exemple, il a tapé des lettres)[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "puts"],
                q: "Comment fonctionne la fonction `puts(const char[]);`[cite: 3] ?",
                options: [
                    { text: "Elle affiche la chaîne de caractères passée en argument suivie d'un retour à la ligne automatique[cite: 3]", isCorrect: true },
                    { text: "Elle enregistre une chaîne saisie au clavier[cite: 3]", isCorrect: false }
                ],
                explanation: "C'est une fonction simple d'affichage. La chaîne doit obligatoirement être terminée par le caractère nul `\\0` pour que `puts` sache où s'arrêter[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "gets", "Sécurité"],
                q: "Pourquoi la fonction `gets(char[]);` a-t-elle été supprimée dans la norme C11[cite: 3] ?",
                options: [
                    { text: "Parce qu'elle ne vérifie pas la taille du tableau de destination, ce qui provoque des dépassements de tampon (buffer overflow) très dangereux[cite: 3]", isCorrect: true },
                    { text: "Parce qu'elle était trop lente à exécuter[cite: 3]", isCorrect: false }
                ],
                explanation: "La fonction `gets` est historiquement responsable d'énormément de failles de sécurité, comme le ver de Morris en 1988. Un pirate peut envoyer une chaîne plus longue que prévue pour écraser la pile et exécuter du code malveillant. On doit utiliser `fgets` à la place[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            },
            {
                type: "qcm",
                tags: ["E/S simples", "getchar"],
                q: "Quel est le type de retour de la fonction `getchar()`[cite: 3] ?",
                options: [
                    { text: "`int` (un entier)[cite: 3]", isCorrect: true },
                    { text: "`char` (un caractère)[cite: 3]", isCorrect: false }
                ],
                explanation: "Bien qu'elle lise un caractère, `getchar()` renvoie un entier. Cela permet de renvoyer le code ASCII du caractère lu, mais aussi de pouvoir renvoyer la constante d'erreur ou de fin de fichier `EOF` (qui vaut -1)[cite: 3].",
                stats: { attempts: 0, correct: 0, partial: 0 },
                sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
            }
        ]
    }
}
