// ============================================================================
// ANNALE INÉDITE DE SANTÉ PUBLIQUE - PASS UNIVERSITÉ PARIS CITÉ
// Conçue selon les standards officiels de Paris Cité (Format Groupe B - QCM isolés)
// Barème : 0 erreur = 1.0 pt | 1 erreur = 0.7 pt | 2 erreurs = 0.1 pt | >=3 erreurs = 0 pt
// Chronométrage indicatif avec suivi du temps par question et temps global (sans pénalité de points)
// ============================================================================

window.NOUVELLE_ANNALE_SP = {
    id: "pass_2026_sp_inedite",
    year: "2026-2027",
    semester: "Semestre 1",
    subjectId: "sante_publique",
    subjectName: "Santé Publique",
    ue: "UE 6",
    icon: "🏥",
    tutoId: "inedite",
    tutoName: "Annale Inédite (Entraînement Paris Cité)",
    title: "Annale Inédite PASS Paris Cité - UE 6 : Santé Publique (Semestre 1)",
    durationMinutes: 20,
    questionCount: 20,
    isSpecial: true,
    description: "Épreuve inédite rédigée conformément au programme officiel du PASS Paris Cité : Épidémiologie, Indicateurs de santé, Inégalités sociales et territoriales, Morbidité/Mortalité, Prévention et Organisation du système de santé.",
    questions: [
        {
            num: 1,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant la définition de la santé et les concepts généraux de santé publique, laquelle (lesquelles) des propositions suivantes est (sont) exacte(s) ?",
            options: [
                {
                    id: "A",
                    text: "Selon le préambule de la constitution de l'OMS de 1946, la santé est définie comme un état de complet bien-être physique, mental et social, et ne consiste pas seulement en une absence de maladie ou d'infirmité.",
                    isCorrect: true,
                    explanation: "VRAI - C'est la définition textuelle de l'OMS adoptée en 1946 (entrée en vigueur en 1948). Elle a le mérite d'introduire une dimension positive et multidimensionnelle de la santé."
                },
                {
                    id: "B",
                    text: "La définition de l'OMS est qualifiée d'opérationnelle car elle permet de mesurer directement et facilement le niveau de santé d'une population à l'aide d'indicateurs quantitatifs simples.",
                    isCorrect: false,
                    explanation: "FAUX - C'est le principal reproche qui lui est fait : c'est une définition idéale, utopique et statique, mais elle est NON opérationnelle car le « complet bien-être » est très difficilement mesurable de façon objective."
                },
                {
                    id: "C",
                    text: "La Charte d'Ottawa (1986) insiste sur la promotion de la santé et stipule que la santé doit être perçue comme une ressource de la vie quotidienne, et non comme le but de la vie.",
                    isCorrect: true,
                    explanation: "VRAI - La Charte d'Ottawa (1986) définit la promotion de la santé et la conceptualise comme une ressource permettant à l'individu de réaliser ses ambitions et de s'adapter à son environnement."
                },
                {
                    id: "D",
                    text: "En France, les enquêtes de santé publique privilégient toujours les mesures négatives de la santé (mortalité, morbidité) car elles sont plus simples à standardiser et à quantifier.",
                    isCorrect: true,
                    explanation: "VRAI - Bien que l'on recherche une santé positive, en pratique épidémiologique opérationnelle, on mesure surtout les événements négatifs (décès, maladies, incapacités) qui sont enregistrés et standardisés."
                },
                {
                    id: "E",
                    text: "La santé publique s'intéresse exclusivement à la prise en charge clinique individuelle des malades les plus vulnérables.",
                    isCorrect: false,
                    explanation: "FAUX - La santé publique est une approche collective et populationnelle : elle s'intéresse à la santé des populations dans leur globalité, à la prévention, à l'organisation des soins et aux déterminants de santé, et non à l'acte clinique individuel."
                }
            ],
            correctAnswers: ["A", "C", "D"],
            generalNotes: "Règle à retenir : Définition OMS 1946 = positive, multidimensionnelle mais idéale et NON opérationnelle. Santé publique = approche collective, de population."
        },
        {
            num: 2,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant la séquence de Wood (Classification Internationale des Handicaps - CIH) et les indicateurs fonctionnels, laquelle (lesquelles) de ces propositions est (sont) exacte(s) ?",
            options: [
                {
                    id: "A",
                    text: "La séquence de Wood décrit l'évolution des conséquences d'une maladie selon l'ordre : Maladie → Déficience → Incapacité → Désavantage social (ou handicap).",
                    isCorrect: true,
                    explanation: "VRAI - C'est l'ordre canonique de la séquence de Wood : l'atteinte anatomique ou physiologique (déficience) entraîne une limitation d'activité (incapacité), qui génère un désavantage social dans l'environnement du sujet."
                },
                {
                    id: "B",
                    text: "Une déficience correspond à une réduction partielle ou totale de la capacité d'accomplir une activité dans les limites considérées comme normales pour un être humain.",
                    isCorrect: false,
                    explanation: "FAUX - Piège classique de Paris Cité ! La réduction de la capacité à accomplir une activité est la définition de l'INCAPACITÉ. La déficience est la perte de substance ou altération d'une structure ou fonction psychologique, physiologique ou anatomique (au niveau d'un organe ou fonction)."
                },
                {
                    id: "C",
                    text: "Le désavantage social (handicap) dépend uniquement de la sévérité intrinsèque de la déficience et ne dépend nullement de l'environnement physique et social de l'individu.",
                    isCorrect: false,
                    explanation: "FAUX - Au contraire ! Le désavantage social résulte de l'interaction entre l'incapacité de l'individu et les obstacles de son environnement (ex: présence de rampes d'accès, aménagement du poste de travail, regard social)."
                },
                {
                    id: "D",
                    text: "Un indicateur fonctionnel aborde la santé sous l'angle des conséquences concrètes des pathologies ou du vieillissement sur l'autonomie et le fonctionnement de l'individu.",
                    isCorrect: true,
                    explanation: "VRAI - C'est la définition exacte d'un indicateur fonctionnel : il s'intéresse à l'impact fonctionnel (AVQ - activités de la vie quotidienne, IADL) plutôt qu'au simple diagnostic biologique."
                },
                {
                    id: "E",
                    text: "La Classification Internationale du Fonctionnement (CIF) adoptée en 2001 par l'OMS remplace le terme négatif de « désavantage social » par le concept de « participation sociale ».",
                    isCorrect: true,
                    explanation: "VRAI - La CIF a modernisé le modèle de Wood en adoptant une vision positive et biopsychosociale : activités et participation sociale, en valorisant les facteurs environnementaux facilitateurs ou barrières."
                }
            ],
            correctAnswers: ["A", "D", "E"],
            generalNotes: "Règle à retenir : Déficience = niveau de l'organe/fonction ; Incapacité = niveau de la personne (action/activité) ; Handicap/Désavantage = niveau de la société (rôle social)."
        },
        {
            num: 3,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant la démarche épidémiologique et les différents types d'épidémiologie, quelle(s) est (sont) la (les) proposition(s) exacte(s) ?",
            options: [
                {
                    id: "A",
                    text: "L'épidémiologie descriptive a pour objectif principal d'identifier avec certitude les liens de causalité directe entre une exposition et la survenue ultérieure d'une pathologie.",
                    isCorrect: false,
                    explanation: "FAUX - L'épidémiologie descriptive décrit l'état de santé dans le temps, l'espace et selon les personnes, et FORMULE des hypothèses étiologiques. C'est l'épidémiologie ANALYTIQUE qui teste et quantifie les associations."
                },
                {
                    id: "B",
                    text: "L'épidémiologie analytique (ou étiologique) permet de tester des hypothèses de causalité en comparant des groupes d'individus exposés et non exposés, ou malades et non malades.",
                    isCorrect: true,
                    explanation: "VRAI - C'est le fondement de l'épidémiologie analytique : elle utilise un groupe témoin de comparaison pour évaluer le rôle d'un facteur de risque."
                },
                {
                    id: "C",
                    text: "L'épidémiologie évaluative s'intéresse à la mesure de l'efficacité, de la sécurité et de l'impact réel des interventions de santé publique, des traitements ou des programmes de dépistage.",
                    isCorrect: true,
                    explanation: "VRAI - L'épidémiologie évaluative analyse l'impact des actions de santé dans des conditions réelles (efficacité pragmatique vs théorique, coût-efficacité)."
                },
                {
                    id: "D",
                    text: "Le travail historique de John Snow sur l'épidémie de choléra à Londres en 1854 illustre la démarche de l'épidémiologie descriptive et analytique avant même la découverte du bacille responsable par Robert Koch.",
                    isCorrect: true,
                    explanation: "VRAI - John Snow a cartographié les décès (épidémiologie spatiale) et comparé les taux de mortalité selon les compagnies d'approvisionnement en eau (Lambeth vs Southwark), démontrant la transmission hydrique 30 ans avant la découverte du vibrion cholérique."
                },
                {
                    id: "E",
                    text: "Au Bangladesh, les puits forés dans les années 1970 par l'UNICEF pour éviter les maladies diarrhéiques étaient massivement contaminés au plomb selon l'enquête nationale de 2009.",
                    isCorrect: false,
                    explanation: "FAUX - Piège classique de Paris Cité ! Les puits étaient contaminés à l'ARSENIC (et non au plomb), entraînant une intoxication chronique de masse (arsenicisme, kératoses, cancers)."
                }
            ],
            correctAnswers: ["B", "C", "D"],
            generalNotes: "Règle à retenir : Descriptive = évalue fréquence et distribution, génère des hypothèses ; Analytique = teste les hypothèses ; Évaluative = mesure l'efficacité. Bangladesh = ARSENIC (pas plomb !)."
        },
        {
            num: 4,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant les indicateurs de fréquence en épidémiologie : incidence et prévalence, laquelle (lesquelles) de ces affirmations est (sont) exacte(s) ?",
            options: [
                {
                    id: "A",
                    text: "L'incidence mesure le nombre de nouveaux cas apparus dans une population donnée au cours d'une période de temps déterminée.",
                    isCorrect: true,
                    explanation: "VRAI - L'incidence est une mesure dynamique de flux : elle quantifie la vitesse d'apparition de nouveaux événements morbides."
                },
                {
                    id: "B",
                    text: "La prévalence représente la proportion d'individus atteints d'une affection donnée dans une population à un instant précis (ou sur une courte période).",
                    isCorrect: true,
                    explanation: "VRAI - La prévalence est une mesure statique de stock : Prévalence = Nombre de cas (anciens + nouveaux) / Population totale à l'instant t."
                },
                {
                    id: "C",
                    text: "Pour une maladie chronique stable, la prévalence est approximativement égale au produit du taux d'incidence annuel par la durée moyenne de la maladie (P ≈ I × D).",
                    isCorrect: true,
                    explanation: "VRAI - C'est la relation fondamentale d'équilibre épidémiologique en état stationnaire : Prévalence ≈ Incidence × Durée moyenne."
                },
                {
                    id: "D",
                    text: "L'introduction d'un nouveau traitement hautement efficace qui permet de guérir définitivement et rapidement une maladie entraîne une augmentation immédiate de sa prévalence.",
                    isCorrect: false,
                    explanation: "FAUX - Si le traitement guérit la maladie, la durée de la maladie diminue, donc la prévalence DIMINUE. (En revanche, un traitement qui prolonge la survie sans guérir augmente la prévalence)."
                },
                {
                    id: "E",
                    text: "Le taux d'attaque est un taux d'incidence cumulée particulier calculé sur une période courte, fréquemment utilisé lors d'épidémies infectieuses aiguës (ex : toxi-infections alimentaires collectives).",
                    isCorrect: true,
                    explanation: "VRAI - Le taux d'attaque correspond à la proportion de personnes exposées qui développent la maladie lors d'un foyer épidémique aigu."
                }
            ],
            correctAnswers: ["A", "B", "C", "E"],
            generalNotes: "Règle à retenir : Incidence = nouveaux cas (flux) ; Prévalence = cas totaux à un instant t (stock). Guérison rapide = baisse de prévalence ; Augmentation de la survie sans guérison = hausse de prévalence."
        },
        {
            num: 5,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant les enquêtes épidémiologiques analytiques de cohorte et cas-témoins, laquelle (lesquelles) de ces propositions est (sont) exacte(s) ?",
            options: [
                {
                    id: "A",
                    text: "Une étude de cohorte est typiquement prospective : elle sélectionne les sujets selon leur statut d'exposition (exposés vs non-exposés) et les suit dans le temps pour mesurer l'apparition de la maladie.",
                    isCorrect: true,
                    explanation: "VRAI - C'est la définition d'une étude de cohorte : constitution de deux groupes selon l'exposition, initialement indemnes de la maladie, puis suivi temporel."
                },
                {
                    id: "B",
                    text: "Dans une étude cas-témoins, les sujets sont sélectionnés au départ selon leur statut de maladie (malades/cas vs non-malades/témoins) et on recherche rétrospectivement leur exposition antérieure.",
                    isCorrect: true,
                    explanation: "VRAI - L'enquête cas-témoins remonte le temps : on compare la fréquence d'exposition passée chez les cas et chez les témoins."
                },
                {
                    id: "C",
                    text: "L'étude de cohorte permet de calculer directement les taux d'incidence chez les exposés et chez les non-exposés, et donc de déterminer directement le Risque Relatif (RR).",
                    isCorrect: true,
                    explanation: "VRAI - Puisqu'on suit la cohorte dans le temps, on dispose du dénominateur personnes-temps et on calcule directement I_e, I_ne et RR = I_e / I_ne."
                },
                {
                    id: "D",
                    text: "Dans une étude cas-témoins, on peut calculer directement les taux d'incidence dans la population générale car l'échantillon est naturellement représentatif de toute la population.",
                    isCorrect: false,
                    explanation: "FAUX - Dans une étude cas-témoins, le nombre de cas et de témoins est fixé arbitrairement par l'investigateur (ex : 1 cas pour 2 témoins). On ne connaît pas la population totale à risque, donc on ne peut PAS calculer d'incidence ; on estime l'association par l'Odds Ratio (OR)."
                },
                {
                    id: "E",
                    text: "Les études cas-témoins sont particulièrement adaptées à l'étude des maladies rares ou ayant un temps de latence très prolongé.",
                    isCorrect: true,
                    explanation: "VRAI - Pour une maladie rare (ex : 1 cas pour 100 000 par an), une cohorte nécessiterait un effectif immense et des décennies de suivi. Une étude cas-témoins est rapide, moins coûteuse et parfaitement adaptée aux maladies rares."
                }
            ],
            correctAnswers: ["A", "B", "C", "E"],
            generalNotes: "Règle à retenir : Cohorte = Exposés vs Non-Exposés → Incidence & Risque Relatif (RR). Cas-Témoins = Malades vs Non-Malades → Pas d'incidence directe, calcul de l'Odds Ratio (OR), idéal pour maladies rares."
        },
        {
            num: 6,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant la célèbre étude épidémiologique de Framingham (Framingham Heart Study), quelles sont les propositions exactes ?",
            options: [
                {
                    id: "A",
                    text: "La Framingham Heart Study a été initiée aux États-Unis au milieu du XXe siècle (1948) sous l'égide du National Heart Institute.",
                    isCorrect: true,
                    explanation: "VRAI - L'étude a débuté en 1948 dans la petite ville de Framingham (Massachusetts) pour étudier l'épidémie croissante de maladies cardiovasculaires."
                },
                {
                    id: "B",
                    text: "Il s'agit d'une étude rétrospective de type cas-témoins ayant inclus des sujets après leur infarctus du myocarde pour interroger leur mode de vie passé.",
                    isCorrect: false,
                    explanation: "FAUX - Piège récurrent des annales ! Framingham est le modèle archétypal de l'étude de COHORTE PROSPECTIVE. Elle a inclus plus de 5 000 adultes initialement sains et les a suivis tous les deux ans."
                },
                {
                    id: "C",
                    text: "Cette étude a permis de forger le concept de « facteur de risque » en médecine cardiovasculaire.",
                    isCorrect: true,
                    explanation: "VRAI - C'est Thomas Dawber et les chercheurs de Framingham qui ont popularisé en 1961 l'expression « risk factor » pour désigner les éléments associés à une probabilité accrue de survenue d'un événement."
                },
                {
                    id: "D",
                    text: "Parmi les principaux facteurs de risque cardiovasculaires majeurs identifiés et retenus dans le cours de PASS figurent le diabète, l'hypertension artérielle, l'hypercholestérolémie, le tabagisme, l'obésité et la sédentarité.",
                    isCorrect: true,
                    explanation: "VRAI - Ce sont exactement les 6 facteurs de risque majeurs répertoriés dans le cours de santé publique de Paris Cité."
                },
                {
                    id: "E",
                    text: "L'alcool fait partie des 6 facteurs de risque majeurs de maladies cardiovasculaires explicitement listés par la cohorte de Framingham dans le cours.",
                    isCorrect: false,
                    explanation: "FAUX - Piège classique de l'A2SUP ! L'alcool n'est PAS listé parmi les 6 facteurs cardiovasculaires majeurs retenus dans ce chapitre du cours (bien qu'il soit un facteur de risque majeur de cancers et d'hypertension dans d'autres contextes)."
                }
            ],
            correctAnswers: ["A", "C", "D"],
            generalNotes: "Règle à retenir : Framingham = cohorte PROSPECTIVE (pas cas-témoins !). 6 facteurs majeurs : HTA, diabète, cholestérol, tabac, obésité, sédentarité. L'alcool n'en fait pas partie dans ce cours."
        },
        {
            num: 7,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant les critères d'imputabilité et de causalité de Bradford Hill, laquelle (lesquelles) des propositions suivantes est (sont) exacte(s) ?",
            options: [
                {
                    id: "A",
                    text: "Une association statistique significative entre une exposition et une pathologie suffit à prouver formellement une relation de cause à effet.",
                    isCorrect: false,
                    explanation: "FAUX - Une association statistique (p < 0,05) ne signifie jamais automatiquement causalité. Elle peut être due au hasard, à des biais (de sélection, d'information) ou à un facteur de confusion."
                },
                {
                    id: "B",
                    text: "L'antériorité temporelle de l'exposition par rapport à l'apparition de la maladie est le seul critère de Bradford Hill absolument indispensable et obligatoire pour envisager une causalité.",
                    isCorrect: true,
                    explanation: "VRAI - La cause doit obligatoirement précéder l'effet dans le temps. C'est le seul critère sine qua non de Bradford Hill."
                },
                {
                    id: "C",
                    text: "La force de l'association statistique est mesurée par la grandeur du Risque Relatif (RR) ou de l'Odds Ratio (OR) : plus l'association est forte, plus la causalité est plausible.",
                    isCorrect: true,
                    explanation: "VRAI - Un RR de 15 (ex: tabac et cancer bronchique) rend très peu probable qu'un simple biais ou facteur de confusion résiduel explique l'intégralité de l'effet, contrairement à un RR de 1,1."
                },
                {
                    id: "D",
                    text: "L'existence d'une relation dose-réponse (gradient biologique) renforce la présomption de causalité : le risque augmente avec l'intensité ou la durée de l'exposition.",
                    isCorrect: true,
                    explanation: "VRAI - Si l'augmentation du nombre de paquets-années s'accompagne d'une hausse proportionnelle de l'incidence du cancer, l'hypothèse d'un lien causal est considérablement renforcée."
                },
                {
                    id: "E",
                    text: "L'absence de plausibilité biologique au moment de l'étude élimine définitivement toute possibilité de relation causale.",
                    isCorrect: false,
                    explanation: "FAUX - La plausibilité biologique dépend de l'état des connaissances scientifiques du moment. Lorsque John Snow a suspecté l'eau contaminée ou lorsque Doll et Hill ont lié le tabac au cancer, les mécanismes intimes n'étaient pas encore connus. L'absence de mécanisme connu ne réfute pas une causalité bien documentée."
                }
            ],
            correctAnswers: ["B", "C", "D"],
            generalNotes: "Règle à retenir : Seul critère obligatoire de Bradford Hill = la séquence temporelle (la cause précède l'effet). Les autres critères (force, dose-réponse, cohérence, plausibilité) ne sont que des arguments de faisceau."
        },
        {
            num: 8,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant les indicateurs de mortalité en France et leurs sources d'information, quelle(s) est (sont) la (les) proposition(s) exacte(s) ?",
            options: [
                {
                    id: "A",
                    text: "En France, les statistiques sur les causes médicales de décès sont centralisées et analysées par le CépiDc (Centre d'épidémiologie sur les causes médicales de décès de l'INSERM).",
                    isCorrect: true,
                    explanation: "VRAI - Le CépiDc-INSERM gère le traitement et la codification internationale (CIM-10) des certificats de décès sur l'ensemble du territoire national."
                },
                {
                    id: "B",
                    text: "Le taux brut de mortalité permet de comparer directement et sans biais le niveau de santé entre deux départements ayant des structures par âge très différentes.",
                    isCorrect: false,
                    explanation: "FAUX - Piège classique ! Le taux brut est fortement influencé par la pyramide des âges. Un département âgé (ex: Creuse) aura un taux brut plus élevé qu'un département jeune (ex: Seine-Saint-Denis) sans que son risque de mortalité à âge égal ne soit supérieur. Il faut utiliser un TAUX STANDARDISÉ SUR L'ÂGE."
                },
                {
                    id: "C",
                    text: "L'espérance de vie à la naissance est un indicateur transversal qui synthétise les conditions de mortalité par âge observées au cours d'une année donnée.",
                    isCorrect: true,
                    explanation: "VRAI - L'espérance de vie à la naissance ne prédit pas la vie future réelle d'un nouveau-né, mais résume la mortalité observée l'année N pour une génération fictive soumise à ces taux."
                },
                {
                    id: "D",
                    text: "Au cours des dix dernières années en France, l'écart d'espérance de vie entre les hommes et les femmes tend à se réduire progressivement.",
                    isCorrect: true,
                    explanation: "VRAI - L'écart historique de près de 8 ans s'est resserré à environ 5,5 à 6 ans aujourd'hui, notamment sous l'effet de l'augmentation de la mortalité par cancer du poumon chez les femmes et de l'amélioration des comportements chez les hommes."
                },
                {
                    id: "E",
                    text: "Selon les données de la DREES et de l'INSEE, l'espérance de vie à la naissance en France en 2020 a connu une baisse temporaire liée à la pandémie de COVID-19.",
                    isCorrect: true,
                    explanation: "VRAI - L'espérance de vie en 2020 a chuté d'environ 0,5 an pour les femmes et 0,7 an pour les hommes en raison de la surmortalité liée au SARS-CoV-2."
                }
            ],
            correctAnswers: ["A", "C", "D", "E"],
            generalNotes: "Règle à retenir : Taux brut = dépendant de l'âge (ne permet pas de comparer deux populations différentes). Pour comparer = Taux STANDARDISÉ. CépiDc = causes de décès. Écart H/F se réduit."
        },
        {
            num: 9,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant la mortalité prématurée et la mortalité évitable en France, laquelle (lesquelles) de ces affirmations est (sont) exacte(s) ?",
            options: [
                {
                    id: "A",
                    text: "Par convention épidémiologique en France, la mortalité prématurée est définie comme l'ensemble des décès survenant avant l'âge de 65 ans.",
                    isCorrect: true,
                    explanation: "VRAI - C'est le seuil universellement retenu en santé publique en France : décès avant 65 ans = décès prématuré."
                },
                {
                    id: "B",
                    text: "La mortalité prématurée représente une part beaucoup plus importante chez les femmes que chez les hommes.",
                    isCorrect: false,
                    explanation: "FAUX - C'est l'inverse ! La surmortalité masculine est maximale pour la mortalité prématurée : environ 1 décès sur 5 chez les hommes survient avant 65 ans, contre seulement 1 sur 10 chez les femmes."
                },
                {
                    id: "C",
                    text: "La mortalité prématurée évitable liée aux comportements individuels (tabac, alcool, accidents de la route) représente une cible prioritaire pour les politiques de prévention primaire.",
                    isCorrect: true,
                    explanation: "VRAI - Elle regroupe les causes évitables par modification des comportements (consommation de substances, conduite à risque), qui constituent le levier majeur de la prévention primaire."
                },
                {
                    id: "D",
                    text: "La mortalité évitable liée au système de soins regroupe les décès qui auraient pu être évités par une prise en charge médicale, diagnostique ou thérapeutique précoce et appropriée.",
                    isCorrect: true,
                    explanation: "VRAI - C'est la distinction classique du Haut Conseil de la Santé Publique (HCSP) : évitable par les comportements vs évitable par le système de soins (qualité et accès aux soins)."
                },
                {
                    id: "E",
                    text: "En France, la première cause de mortalité prématurée chez l'homme comme chez la femme est constituée par les tumeurs malignes (cancers).",
                    isCorrect: true,
                    explanation: "VRAI - Avant 65 ans, les cancers représentent de loin la première cause de mortalité chez les deux sexes (suivis des morts violentes chez l'homme et des maladies cardiovasculaires)."
                }
            ],
            correctAnswers: ["A", "C", "D", "E"],
            generalNotes: "Règle à retenir : Mortalité prématurée = avant 65 ans. Forte surmortalité masculine (facteurs de risque, métiers pénibles, conduites à risque). 1ère cause prématurée = Cancers."
        },
        {
            num: 10,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant la mesure de la morbidité et les maladies chroniques en France, quelle(s) est (sont) la (les) proposition(s) exacte(s) ?",
            options: [
                {
                    id: "A",
                    text: "La morbidité déclarée (ou ressentie) est mesurée à travers des enquêtes auprès des ménages et reflète la perception que les individus ont de leur propre état de santé.",
                    isCorrect: true,
                    explanation: "VRAI - Elle est recueillie par questionnaire ou entretien (ex : Enquêtes Santé INSEE/DREES) sans validation médicale obligatoire."
                },
                {
                    id: "B",
                    text: "La morbidité diagnostiquée ne prend en compte que les pathologies confirmées par un examen complémentaire standardisé dans le cadre d'un dépistage de masse.",
                    isCorrect: false,
                    explanation: "FAUX - La morbidité diagnostiquée (recensée) correspond aux pathologies identifiées par les professionnels de santé lors des recours aux soins (données SNDS, ALD de l'Assurance Maladie, PMSI hospitalier)."
                },
                {
                    id: "C",
                    text: "La multimorbidité est définie par la présence simultanée d'au moins deux pathologies chroniques chez un même individu.",
                    isCorrect: true,
                    explanation: "VRAI - C'est la définition officielle retenue par l'OMS et le cours de santé publique : présence d'au moins 2 maladies chroniques chez une même personne."
                },
                {
                    id: "D",
                    text: "La prévalence de la multimorbidité diminue avec l'âge car les personnes âgées consultent moins fréquemment les médecins généralistes.",
                    isCorrect: false,
                    explanation: "FAUX - La prévalence de la multimorbidité AUGMENTE fortement avec l'âge : elle concerne la majorité des personnes de plus de 65 ans."
                },
                {
                    id: "E",
                    text: "Dans les enquêtes de santé en population générale, les problèmes dentaires et de gencives figurent parmi les motifs les plus fréquemment rapportés de morbidité déclarée.",
                    isCorrect: true,
                    explanation: "VRAI - Les affections dentaires, les troubles visuels et les dorsalgies/lombalgies constituent le trio de tête des problèmes déclarés par les adultes."
                }
            ],
            correctAnswers: ["A", "C", "E"],
            generalNotes: "Règle à retenir : Multimorbidité = au moins 2 maladies chroniques. Morbidité déclarée = ressentie par l'usager (dentaire, dos au premier rang). Augmente avec l'avancée en âge."
        },
        {
            num: 11,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant les inégalités sociales et territoriales de santé en France, laquelle (lesquelles) des propositions suivantes est (sont) exacte(s) ?",
            options: [
                {
                    id: "A",
                    text: "Le gradient social de santé montre une relation continue entre la position socio-économique et l'état de santé, qui ne se limite pas à une simple opposition entre les plus pauvres et le reste de la population.",
                    isCorrect: true,
                    explanation: "VRAI - C'est le concept fondamental de Michael Marmot : à chaque échelon de la hiérarchie sociale, la santé s'améliore de façon progressive et continue."
                },
                {
                    id: "B",
                    text: "En France, l'espérance de vie à 35 ans des hommes cadres supérieurs est supérieure d'environ 6 ans à celle des hommes ouvriers.",
                    isCorrect: true,
                    explanation: "VRAI - Selon les données de l'INSEE, un homme cadre de 35 ans vit en moyenne 6,4 ans de plus qu'un homme ouvrier du même âge."
                },
                {
                    id: "C",
                    text: "Chez les femmes, l'écart d'espérance de vie selon la catégorie socioprofessionnelle est plus marqué et plus ample que chez les hommes.",
                    isCorrect: false,
                    explanation: "FAUX - L'écart social d'espérance de vie est NETTEMENT MOINS IMPORTANT chez les femmes (environ 3 ans entre cadres et ouvrières) que chez les hommes (plus de 6 ans)."
                },
                {
                    id: "D",
                    text: "Concernant le tabagisme, la prévalence des fumeurs réguliers est plus élevée dans les catégories défavorisées, alors que les fumeurs occasionnels sont plus fréquents dans les catégories à hauts revenus.",
                    isCorrect: true,
                    explanation: "VRAI - C'est un point précis du cours de Paris Cité : le tabagisme régulier est surreprésenté chez les personnes à bas revenus et en situation de chômage, tandis que l'usage festif occasionnel se retrouve davantage dans les classes aisées."
                },
                {
                    id: "E",
                    text: "Les disparités sociales de santé débutent uniquement après l'entrée dans la vie active et ne sont pas mesurables au cours de la période périnatale.",
                    isCorrect: false,
                    explanation: "FAUX - Les inégalités de santé sont observables dès la période périnatale : le taux de prématurité et de petit poids de naissance est significativement supérieur chez les mères défavorisées, lié à un suivi prénatal moins optimal."
                }
            ],
            correctAnswers: ["A", "B", "D"],
            generalNotes: "Règle à retenir : Gradient social = continu. Écart cadres/ouvriers = ~6 ans chez les hommes (plus faible chez les femmes ~3 ans). Disparités dès la grossesse."
        },
        {
            num: 12,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant l'épidémiologie des cancers en France, quelles sont les affirmations exactes ?",
            options: [
                {
                    id: "A",
                    text: "Chez l'homme en France, les trois cancers les plus fréquents en termes d'incidence sont, dans l'ordre décroissant : prostate, poumon, côlon-rectum.",
                    isCorrect: true,
                    explanation: "VRAI - C'est le trio d'incidence chez l'homme : Prostate (1er de loin avec ~50 000 cas), Poumon (2e) et Côlon-rectum (3e)."
                },
                {
                    id: "B",
                    text: "Chez l'homme en France, la première cause de mortalité par cancer est le cancer de la prostate en raison de sa très grande fréquence.",
                    isCorrect: false,
                    explanation: "FAUX - Piège classique ! La 1ère cause de mortalité par cancer chez l'homme est le cancer du POUMON (suivi du côlon-rectum, la prostate n'étant qu'en 3e position de mortalité grâce à un bon pronostic global)."
                },
                {
                    id: "C",
                    text: "Chez la femme en France, le cancer du sein est à la fois le cancer le plus fréquent en incidence et la première cause de mortalité par cancer.",
                    isCorrect: true,
                    explanation: "VRAI - Le cancer du sein est 1er en incidence (~60 000 cas) et reste la 1ère cause de mortalité par cancer chez la femme (~12 000 décès/an)."
                },
                {
                    id: "D",
                    text: "Chez la femme, l'incidence et la mortalité du cancer du poumon sont en forte augmentation constante depuis les années 1980 en raison de l'évolution du tabagisme féminin.",
                    isCorrect: true,
                    explanation: "VRAI - C'est une tendance épidémiologique majeure soulignée dans le cours : alors que la mortalité masculine par cancer du poumon recule, elle explose chez les femmes."
                },
                {
                    id: "E",
                    text: "La mortalité globale par cancer en France augmente continuellement depuis 30 ans chez les deux sexes en raison de l'inefficacité des chimiothérapies.",
                    isCorrect: false,
                    explanation: "FAUX - Le taux de mortalité standardisé par cancer DIMINUE globalement depuis 30 ans (plus nettement chez l'homme que chez la femme), grâce au recul du tabagisme masculin, au diagnostic précoce et aux progrès thérapeutiques."
                }
            ],
            correctAnswers: ["A", "C", "D"],
            generalNotes: "Règle à retenir : Homme : Incidence = Prostate > Poumon > Côlon. Mortalité = Poumon > Côlon > Prostate. Femme : Sein 1er partout. Mortalité globale par cancer en diminution."
        },
        {
            num: 13,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant les niveaux de prévention selon l'Organisation Mondiale de la Santé (OMS), quelle(s) est (sont) la (les) proposition(s) exacte(s) ?",
            options: [
                {
                    id: "A",
                    text: "La prévention primaire vise à diminuer l'incidence d'une maladie en agissant sur ses causes et facteurs de risque avant même que la pathologie ne se développe.",
                    isCorrect: true,
                    explanation: "VRAI - Prévention primaire = en amont de la maladie. Objectif : baisser le nombre de nouveaux cas (ex : vaccination, sevrage tabagique, assainissement de l'eau)."
                },
                {
                    id: "B",
                    text: "La vaccination contre le papillomavirus (HPV) chez les adolescents constitue un exemple typique de prévention secondaire.",
                    isCorrect: false,
                    explanation: "FAUX - La vaccination est une mesure de prévention PRIMAIRE (elle empêche l'infection et l'apparition de lésions précancéreuses). Le frottis cervico-utérin est en revanche de la prévention secondaire."
                },
                {
                    id: "C",
                    text: "La prévention secondaire a pour objectif de déceler précocement une affection à un stade asymptomatique pour enrayer son évolution (dépistage précoce).",
                    isCorrect: true,
                    explanation: "VRAI - Prévention secondaire = détection précoce (dépistage de masse ou individuel) pour réduire la durée et la gravité de la maladie."
                },
                {
                    id: "D",
                    text: "La prévention tertiaire intervient après le diagnostic clinique pour prévenir les récidives, éviter les complications et favoriser la réadaptation fonctionnelle et sociale.",
                    isCorrect: true,
                    explanation: "VRAI - Prévention tertiaire = prise en charge des séquelles, réadaptation cardiaque après infarctus, éducation thérapeutique du patient diabétique."
                },
                {
                    id: "E",
                    text: "La prévention universelle s'adresse à l'ensemble de la population quel que soit le niveau de risque individuel (ex : interdiction de fumer dans les lieux publics).",
                    isCorrect: true,
                    explanation: "VRAI - Distinction selon Gordon : Prévention universelle (toute la population), Prévention sélective/ciblée (groupes à risque plus élevé), Prévention indiquée (sujets avec premiers signaux d'alerte)."
                }
            ],
            correctAnswers: ["A", "C", "D", "E"],
            generalNotes: "Règle à retenir : Primaire = avant la maladie (diminue incidence, ex: vaccin) ; Secondaire = dépistage précoce asymptomatique (ex: mammographie) ; Tertiaire = rééducation / réadaptation après la maladie."
        },
        {
            num: 14,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant les principes et critères d'un programme de dépistage en santé publique (critères de Wilson et Jungner), laquelle (lesquelles) des propositions suivantes est (sont) exacte(s) ?",
            options: [
                {
                    id: "A",
                    text: "L'affection ciblée par le dépistage doit représenter un problème de santé publique important par sa fréquence et/ou sa gravité.",
                    isCorrect: true,
                    explanation: "VRAI - 1er critère de Wilson & Jungner : l'impact sur la population doit justifier la mise en place d'une politique de dépistage organisée."
                },
                {
                    id: "B",
                    text: "Il doit exister une phase de latence ou un stade précoce asymptomatique détectable au cours de l'histoire naturelle de la maladie.",
                    isCorrect: true,
                    explanation: "VRAI - S'il n'y a pas de phase asymptomatique décelable, le dépistage n'apporte aucun bénéfice par rapport au diagnostic clinique classique."
                },
                {
                    id: "C",
                    text: "Un test de dépistage doit obligatoirement être un test diagnostique invasif à certitude absolue (100% de spécificité), même s'il présente un risque vital pour le sujet.",
                    isCorrect: false,
                    explanation: "FAUX - Un test de dépistage doit être simple, rapide, sûr, économique et acceptable pour la population générale saine. Il est suivi, en cas de positivité, d'un examen diagnostique de confirmation."
                },
                {
                    id: "D",
                    text: "Un traitement efficace et reconnu doit être disponible pour les patients chez lesquels l'anomalie est dépistée.",
                    isCorrect: true,
                    explanation: "VRAI - Dépister une maladie incurable pour laquelle aucun traitement ni mesure d'accompagnement précoce ne modifie le pronostic est éthiquement et médicalement injustifié."
                },
                {
                    id: "E",
                    text: "Le coût global de la recherche des cas et de la prise en charge doit être équilibré par rapport à l'ensemble du coût des soins médicaux.",
                    isCorrect: true,
                    explanation: "VRAI - Critère médico-économique explicite de Wilson et Jungner : allocation efficiente des ressources collectives."
                }
            ],
            correctAnswers: ["A", "B", "D", "E"],
            generalNotes: "Règle à retenir : Dépistage = maladie fréquente/grave, histoire naturelle connue, phase latente, test simple/acceptable/efficace, traitement disponible, coût acceptable."
        },
        {
            num: 15,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant la surveillance sanitaire et le Réseau Sentinelles en France, quelle(s) est (sont) la (les) proposition(s) exacte(s) ?",
            options: [
                {
                    id: "A",
                    text: "Le réseau Sentinelles a été créé en 1984 sous la tutelle conjointe de l'INSERM et de Sorbonne Université.",
                    isCorrect: true,
                    explanation: "VRAI - Le Réseau Sentinelles a été créé en 1984 pour la surveillance épidémiologique informatisée en médecine générale."
                },
                {
                    id: "B",
                    text: "Le réseau Sentinelles est composé exclusivement de médecins généralistes et pédiatres libéraux volontaires et bénévoles exerçant en France métropolitaine.",
                    isCorrect: true,
                    explanation: "VRAI - Environ 1 300 médecins généralistes libéraux et 100 pédiatres participent bénévolement à la collecte continue de données en temps réel."
                },
                {
                    id: "C",
                    text: "Les médecins du réseau Sentinelles sont tirés au sort obligatoirement chaque année par Santé publique France sur les listes du Conseil de l'Ordre.",
                    isCorrect: false,
                    explanation: "FAUX - Piège des annales ! Les médecins ne sont PAS tirés au sort : ils sont STRICTEMENT VOLONTAIRES et bénévoles."
                },
                {
                    id: "D",
                    text: "L'une des missions fondamentales du réseau Sentinelles est d'estimer en temps réel l'incidence des syndromes grippaux, des gastro-entérites aiguës et de la varicelle en France.",
                    isCorrect: true,
                    explanation: "VRAI - Ce sont les indicateurs historiques majeurs du bulletin hebdomadaire Sentinelles."
                },
                {
                    id: "E",
                    text: "Le réseau Sentinelles relève de l'épidémiologie descriptive et contribue à la détection précoce des épidémies saisonnières.",
                    isCorrect: true,
                    explanation: "VRAI - Il permet de définir les seuils épidémiques régionaux et nationaux pour alerter les autorités sanitaires et les professionnels."
                }
            ],
            correctAnswers: ["A", "B", "D", "E"],
            generalNotes: "Règle à retenir : Réseau Sentinelles = MG et pédiatres VOLONTAIRES (pas tirés au sort !). Surveillance en médecine de ville (grippe, GEA, varicelle). Épidémiologie descriptive."
        },
        {
            num: 16,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant l'organisation et les agences sanitaires de l'État en France, laquelle (lesquelles) de ces propositions est (sont) exacte(s) ?",
            options: [
                {
                    id: "A",
                    text: "Santé publique France (SPF) est l'agence nationale de santé publique issue de la fusion en 2016 de l'InVS, de l'Inpes et de l'Eprus.",
                    isCorrect: true,
                    explanation: "VRAI - Santé publique France regroupe désormais la veille épidémiologique (ex-InVS), la promotion de la santé (ex-Inpes) et la réponse aux urgences sanitaires (ex-Eprus)."
                },
                {
                    id: "B",
                    text: "L'ANSM (Agence nationale de sécurité du médicament et des produits de santé) a pour mission principale de délivrer les autorisations de mise sur le marché (AMM) et d'assurer la pharmacovigilance.",
                    isCorrect: true,
                    explanation: "VRAI - L'ANSM est l'autorité compétente pour l'évaluation scientifique, l'autorisation, le contrôle en laboratoire et la vigilance de l'ensemble des produits de santé (médicaments, dispositifs médicaux, vaccins)."
                },
                {
                    id: "C",
                    text: "La Haute Autorité de Santé (HAS) est chargée de fixer unilatéralement le prix de vente des médicaments remboursables.",
                    isCorrect: false,
                    explanation: "FAUX - Piège classique ! La HAS évalue le Service Médical Rendu (SMR) et l'ASMR par sa commission de la transparence. La fixation du prix relève du CEPS (Comité Économique des Produits de Santé), et le taux de remboursement relève de l'UNCAM."
                },
                {
                    id: "D",
                    text: "Les Agences Régionales de Santé (ARS) sont chargées du pilotage et de la mise en œuvre de la politique de santé au niveau de chaque région (ville, hôpital, médico-social).",
                    isCorrect: true,
                    explanation: "VRAI - Créées par la loi HPST de 2009, les ARS déclinent la politique nationale de santé à l'échelon régional dans les domaines de la veille, de la prévention, des soins et du médico-social."
                },
                {
                    id: "E",
                    text: "Toutes les agences sanitaires d'État ont été créées avec un statut d'établissement public pour maintenir une certaine distance institutionnelle entre l'expertise scientifique et la décision politique.",
                    isCorrect: true,
                    explanation: "VRAI - C'est la doctrine mise en place après l'affaire du sang contaminé dans les années 1990 : séparer la veille et l'expertise (agences) de la décision stratégique et de la tutelle (ministère)."
                }
            ],
            correctAnswers: ["A", "B", "D", "E"],
            generalNotes: "Règle à retenir : SPF = veille, prévention, alertes (fusion 2016 InVS + Inpes + Eprus). ANSM = sécurité produits de santé. HAS = évaluation médicale, SMR (pas fixation du prix !). ARS = échelon régional."
        },
        {
            num: 17,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant les comptes de la santé et les dépenses de santé en France, quelle(s) est (sont) la (les) proposition(s) exacte(s) ?",
            options: [
                {
                    id: "A",
                    text: "La Consommation de Soins et Biens Médicaux (CSBM) mesure la valeur totale des biens et services médicaux consommés sur le territoire national pour le traitement direct d'une perturbation de l'état de santé.",
                    isCorrect: true,
                    explanation: "VRAI - La CSBM évalue les soins hospitaliers, les soins de ville (médecins, dentistes, kinés), les médicaments et transports sanitaires."
                },
                {
                    id: "B",
                    text: "La Dépense Courante de Santé (DCS) est un agrégat plus large que la CSBM car elle inclut également les soins aux personnes âgées dépendantes, les indemnités journalières et les dépenses de recherche/formation.",
                    isCorrect: true,
                    explanation: "VRAI - DCS = CSBM + soins de longue durée (EHPAD) + indemnités journalières + gestion + subventions + recherche/formation."
                },
                {
                    id: "C",
                    text: "En France, la Sécurité sociale (régime obligatoire) finance environ 78 à 80% de la CSBM.",
                    isCorrect: true,
                    explanation: "VRAI - La part de la Sécurité sociale dans la CSBM est d'environ 79% (la plus élevée des pays de l'OCDE)."
                },
                {
                    id: "D",
                    text: "Le reste à charge des ménages après intervention de la Sécurité sociale et des complémentaires santé s'élève en moyenne à plus de 45% de la CSBM.",
                    isCorrect: false,
                    explanation: "FAUX - Le reste à charge direct des ménages (« déboursé » net) est l'un des plus faibles au monde : environ 7 à 8% de la CSBM."
                },
                {
                    id: "E",
                    text: "Le ticket modérateur correspond à la part des dépenses de soins qui reste théoriquement à la charge de l'assuré (ou de sa mutuelle) après le remboursement de l'Assurance Maladie obligatoire.",
                    isCorrect: true,
                    explanation: "VRAI - C'est la définition même du ticket modérateur : pourcentage du tarif conventionné non couvert par le régime obligatoire."
                }
            ],
            correctAnswers: ["A", "B", "C", "E"],
            generalNotes: "Règle à retenir : DCS > CSBM. Financement CSBM : Sécu ~79%, Mutuelles ~13%, Reste à charge ménages ~7-8% (très faible en France). Ticket modérateur = part non prise en charge par la Sécu."
        },
        {
            num: 18,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant la démographie médicale et l'offre de soins en France, laquelle (lesquelles) de ces affirmations est (sont) exacte(s) ?",
            options: [
                {
                    id: "A",
                    text: "La densité médicale mesure le nombre de médecins en activité rapporté à une population de référence (généralement pour 100 000 habitants).",
                    isCorrect: true,
                    explanation: "VRAI - Densité médicale = nombre de praticiens / 100 000 habitants. Elle permet de comparer les territoires."
                },
                {
                    id: "B",
                    text: "La répartition géographique des médecins en France est parfaitement homogène sur l'ensemble du territoire métropolitain.",
                    isCorrect: false,
                    explanation: "FAUX - Il existe de très fortes disparités régionales et infrarégionales (inégalités territoriales de santé, « déserts médicaux » dans les zones rurales et périurbaines défavorisées, vs surdensité dans le Sud et à Paris)."
                },
                {
                    id: "C",
                    text: "La féminisation et le vieillissement de la population médicale constituent deux évolutions démographiques majeures observées au cours des deux dernières décennies.",
                    isCorrect: true,
                    explanation: "VRAI - La part des femmes praticiennes dépasse désormais 50% chez les moins de 50 ans, et l'âge moyen des médecins en exercice est élevé (nombreux départs à la retraite)."
                },
                {
                    id: "D",
                    text: "Le numérus clausus instauré en 1971 a été remplacé en 2020 par un système d'objectifs pluriannuels (« numerus apertus ») fixé en concertation entre les universités et les ARS.",
                    isCorrect: true,
                    explanation: "VRAI - La réforme des études de santé (PASS / LAS) a supprimé le numérus clausus rigide au profit de capacités d'accueil négociées avec les ARS selon les besoins régionaux de santé."
                },
                {
                    id: "E",
                    text: "Les médecins généralistes libéraux en secteur 1 s'engagent à respecter les tarifs opposables fixés par la convention médicale sans pratiquer de dépassements d'honoraires (sauf exigence particulière du patient).",
                    isCorrect: true,
                    explanation: "VRAI - Secteur 1 = respect strict des tarifs conventionnels opposables (garantissant un reste à charge minimal pour les assurés)."
                }
            ],
            correctAnswers: ["A", "C", "D", "E"],
            generalNotes: "Règle à retenir : Densité médicale très hétérogène (zones sous-denses vs surdenses). Féminisation & vieillissement du corps médical. Réforme 2020 = suppression du numerus clausus."
        },
        {
            num: 19,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant le dispositif des Maladies à Déclaration Obligatoire (MDO) et la veille sanitaire en France, quelle(s) est (sont) la (les) proposition(s) exacte(s) ?",
            options: [
                {
                    id: "A",
                    text: "La déclaration d'une MDO incombe à la fois aux médecins cliniciens prescripteurs et aux biologistes des laboratoires de biologie médicale.",
                    isCorrect: true,
                    explanation: "VRAI - Le double circuit de notification (médecin et biologiste) garantit l'exhaustivité et la rapidité du signalement."
                },
                {
                    id: "B",
                    text: "La transmission du signalement urgent d'une MDO s'effectue sans délai auprès de l'Agence Régionale de Santé (ARS) de la région concernée.",
                    isCorrect: true,
                    explanation: "VRAI - Dès la suspicion ou confirmation, le signalement immédiat est transmis au point focal régional de l'ARS pour déclencher sans délai les mesures de gestion (ex: prophylaxie autour d'une méningite)."
                },
                {
                    id: "C",
                    text: "Les MDO font l'objet d'un volet de notification épidémiologique anonymisé transmis à Santé publique France pour le suivi national et international.",
                    isCorrect: true,
                    explanation: "VRAI - Deux volets : le volet nominatif pour l'ARS (action locale d'urgence), et le volet épidémiologique anonymisé pour Santé publique France (statistiques et suivi)."
                },
                {
                    id: "D",
                    text: "L'infection par le VIH et la tuberculose font partie de la liste officielle des maladies à déclaration obligatoire en France.",
                    isCorrect: true,
                    explanation: "VRAI - Le VIH (depuis 2003) et la tuberculose sont deux MDO majeures en France (parmi plus d'une trentaine, presque toutes infectieuses, plus le saturnisme infantile)."
                },
                {
                    id: "E",
                    text: "Le diabète de type 2 et l'hypertension artérielle essentielle sont classés parmi les maladies à déclaration obligatoire en France en raison de leur très grande fréquence.",
                    isCorrect: false,
                    explanation: "FAUX - Piège classique ! Les MDO sont réservées aux maladies nécessitant une intervention d'urgence immédiate (maladies infectieuses transmissibles épidémiques) ou une surveillance d'une menace rare et grave. Le diabète et l'HTA sont surveillés par les registres et le SNDS, pas par MDO."
                }
            ],
            correctAnswers: ["A", "B", "C", "D"],
            generalNotes: "Règle à retenir : MDO = double déclaration médecin + biologiste → ARS (signalement d'urgence nominatif) + SPF (notification anonymisée). Presque toutes infectieuses (VIH, méningite, tuberculose, rougeole...). Diabète et HTA ne sont PAS des MDO !"
        },
        {
            num: 20,
            type: "QCM",
            context: "",
            images: [],
            question: "Concernant la sécurité sanitaire et la pharmacovigilance en France, laquelle (lesquelles) de ces propositions est (sont) exacte(s) ?",
            options: [
                {
                    id: "A",
                    text: "La pharmacovigilance a pour objet la surveillance, l'évaluation et la prévention du risque d'effet indésirable résultant de l'utilisation des médicaments.",
                    isCorrect: true,
                    explanation: "VRAI - Définition réglementaire exacte de la pharmacovigilance (art. L. 5121-1 du CSP)."
                },
                {
                    id: "B",
                    text: "Tout médecin, chirurgien-dentiste ou sage-femme ayant constaté un effet indésirable grave ou inattendu susceptible d'être dû à un médicament a l'obligation légale de le déclarer immédiatement.",
                    isCorrect: true,
                    explanation: "VRAI - C'est une obligation légale inscrite dans le code de la santé publique (déclaration auprès du Centre Régional de Pharmacovigilance - CRPV)."
                },
                {
                    id: "C",
                    text: "Depuis la loi de modernisation de notre système de santé, les patients et les associations d'usagers agréées peuvent également déclarer directement un effet indésirable sur le portail des signalements du ministère.",
                    isCorrect: true,
                    explanation: "VRAI - Les usagers peuvent directement déclarer les effets indésirables en ligne sans passer par un professionnel de santé."
                },
                {
                    id: "D",
                    text: "Le réseau des Centres Régionaux de Pharmacovigilance (CRPV) analyse les déclarations et transmet ses conclusions à l'ANSM pour d'éventuelles mesures de police sanitaire (modification du RCP, restriction d'indication, retrait du marché).",
                    isCorrect: true,
                    explanation: "VRAI - Les 31 CRPV expertisent les cas (évaluation de l'imputabilité) et alertent l'ANSM qui prend les décisions réglementaires."
                },
                {
                    id: "E",
                    text: "Une fois l'Autorisation de Mise sur le Marché (AMM) accordée, le rapport bénéfice/risque d'un médicament est considéré comme définitivement immuable et n'est plus jamais réévalué.",
                    isCorrect: false,
                    explanation: "FAUX - C'est précisément la raison d'être de la pharmacovigilance (phase IV) ! Les essais cliniques préalables portent sur des effectifs limités et sélectionnés ; l'évaluation du rapport bénéfice/risque en vie réelle se poursuit tout au long du cycle de vie du produit."
                }
            ],
            correctAnswers: ["A", "B", "C", "D"],
            generalNotes: "Règle à retenir : Pharmacovigilance = surveillance continue continue (phase IV). Déclaration obligatoire pour les soignants, ouverte aux usagers. CRPV expertisent → ANSM décide (police sanitaire)."
        }
    ]
};

