// ============================================================
// MatiÃ¨re : Algèbre 2 : Chapitres 4 & 5 (Bases, Dimensions, Sommes et Supplémentaires)
// ============================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
Object.assign(defaultData, {
    "Algèbre 2 : Chapitres 4 & 5 (Bases, Dimensions, Sommes et Supplémentaires)": {
        folder: "Algèbre 2",
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
    }
});

