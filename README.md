Bonjour,
Voici un site de quizz personnalisé avec des cours de maths des 2 premières années de licence maths, vous pouvez aussi contribuer aux quizz, voici les instructions : 
## Étape 1 : Préparer le prompt pour l'IA
Copiez le texte ci-dessous et collez-le dans votre IA favorite. N'appuyez pas encore sur Entrée !

> **Prompt à copier :**
> 
> Tu es un professeur expert de niveau universitaire. Je vais te fournir le contenu d'un cours. Ton but est de générer un quiz d'au moins 30 questions pertinentes, difficiles et variées sur ce chapitre.
> 
> **RÈGLES STRICTES :**
> 1. **Format :** Tu dois renvoyer UNIQUEMENT un objet JavaScript valide prêt à être copié-collé. Ne rajoute pas de texte avant ou après le bloc de code.
> 2. **Mathématiques :** Utilise le format LaTeX encadré par des `$` pour les formules en ligne (ex: $x^2 = 4$) et `$$` pour les équations centrées.
> 3. **Options :** Une question peut avoir plusieurs bonnes réponses (QCM multiple). 
> 4. **Explications :** Fournis une explication détaillée et pédagogique pour chaque question.
> 5. **Structure des métadonnées :** Tu dois scrupuleusement respecter la structure des champs `stats` et `sm2` pour chaque question, sans les modifier.
> 
> **VOICI LE MODÈLE EXACT À REMPLIR :**
> 
> ```javascript
>     "Nom de la Matière : Nom du Chapitre": {
>         stats: { attempts: 0, correct: 0 },
>         dailyValidations: {},
>         questions: [
>             {
>                 type: "qcm", 
>                 tags: ["Tag1", "Tag2"],
>                 q: "Texte de la question ici ?",
>                 options: [
>                     { text: "Bonne réponse", isCorrect: true },
>                     { text: "Mauvaise réponse", isCorrect: false },
>                     { text: "Autre bonne réponse", isCorrect: true }
>                 ],
>                 explanation: "Explication détaillée de la correction ici.",
>                 stats: { attempts: 0, correct: 0, partial: 0 },
>                 sm2: { repetition: 0, interval: 0, easeFactor: 2.5, nextReview: 0, lastAttempt: 0, lastWrong: 0, successStreak: 0, lastQuality: 0 }
>             },
>             // Ajouter les autres questions ici avec LA MÊME STRUCTURE exacte...
>         ]
>     }
> ```
> 
> Voici maintenant le cours sur lequel tu dois te baser :
> [COLLER LE TEXTE DU COURS ICI]

## Étape 2 : Générer et vérifier
Une fois le cours collé à la fin du prompt, lancez la génération. L'IA va vous recracher un bloc de code propre. Vérifiez rapidement que l'IA n'a pas oublié les blocs `stats` ou `sm2` dans les questions.

## Étape 3 : Ajouter à l'application
1. Ouvrez le fichier `data.js` du projet.
2. Collez le bloc généré à la suite des autres matières.
3. ⚠️ **RÈGLE D'OR (LE PIÈGE CLASSIQUE) :** Assurez-vous de bien mettre une **virgule `,`** à la toute fin de l'accolade fermante de la matière précédente, juste avant d'ajouter la vôtre !

**Exemple de structure dans le fichier :**
```javascript
const baseData = {
    // ... Matière précédente
    "Algèbre 2 : Chapitre 1": {
        // ... contenu ...
        ]
    }, // <---- N'OUBLIEZ PAS CETTE VIRGULE !

    // VOTRE MATIÈRE COLLÉE ICI
    "Nouvelle Matière : Nouveau Chapitre": {
        // ...
    }
};
