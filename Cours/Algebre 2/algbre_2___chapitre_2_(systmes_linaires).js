// ============================================================
// MatiÃ¨re : Algèbre 2 : Chapitre 2 (systèmes linéaires)
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
Object.assign(defaultData, {
    "Algèbre 2 : Chapitre 2 (systèmes linéaires)": {
        folder: "Algèbre 2",
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
});

