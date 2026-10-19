# 🎴 Guide & Prompt IA : Générateur de Flashcards QuizzHub

Ce document contient le **prompt officiel** à copier-coller dans une IA (ChatGPT, Claude, Mistral, Gemini, DeepSeek, etc.) avec votre cours pour générer automatiquement un fichier JSON de **Flashcards** parfaitement compatible avec QuizzHub.

---

## 📋 Structure du Modèle JSON attendu par QuizzHub

Chaque flashcard possède les propriétés suivantes :
- `recto` : La question, le concept, le terme ou l'énoncé du théorème à deviner.
- `verso` : La réponse, la définition complète, la formule ou la démonstration.
- `subject` : La matière à laquelle la flashcard est rattachée (ex: `"Algèbre 2"`, `"Programmation C"`, `"Microéconomie"`). *Si non précisé, sera placé dans `"Général"`*.
- `folder` : Le dossier ou sous-dossier (ex: `"Mathématiques / Algèbre"`, `"Informatique / C / Pointeurs"`). *Si non précisé, sera placé dans `"Général"`*.
- `tags` *(facultatif)* : Tableau de mots-clés ou de numéros de chapitre (ex: `["Matrices", "Inversible"]`).

### Exemple de JSON valide :
```json
[
  {
    "recto": "Quelle est la définition d'un espace vectoriel ?",
    "verso": "Un ensemble E muni d'une loi interne (+) et d'une loi externe (.) vérifiant les 8 axiomes fondamentaux (associativité, commutativité, élément neutre, élément symétrique, distributivités).",
    "subject": "Algèbre 2",
    "folder": "Mathématiques / Algèbre",
    "tags": ["Espaces vectoriels", "Définition"]
  },
  {
    "recto": "Quelle est la différence fondamentale entre un pointeur et une référence en C/C++ ?",
    "verso": "Un pointeur possède sa propre adresse en mémoire, peut être NULL et peut être réassigné. Une référence est un alias constant pour une variable existante et ne peut pas être nulle.",
    "subject": "Programmation C",
    "folder": "Informatique / Programmation C",
    "tags": ["Mémoire", "Pointeurs"]
  },
  {
    "recto": "Qu'énonce la loi des rendements décroissants en microéconomie ?",
    "verso": "À court terme, lorsqu'on augmente la quantité d'un facteur variable tandis que les autres facteurs restent fixes, la productivité marginale de ce facteur finit inévitablement par décroître.",
    "subject": "Microéconomie 1",
    "folder": "Économie / Microéconomie",
    "tags": ["Production", "Rendements"]
  }
]
```

---

## 🤖 Prompt à copier-coller pour l'IA

> **Instructions pour l'utilisateur :** Copie le texte ci-dessous dans ton IA favorite, puis colle ton cours à la fin sous la section `# MON COURS`.

```markdown
Tu es un expert pédagogique spécialisé dans la méthode de répétition espacée (Spaced Repetition / Anki / SuperMemo SM-2).
Ton objectif est d'extraire toutes les notions clés, définitions, théorèmes, formules et concepts importants du cours fourni et de les convertir en un tableau JSON de Flashcards prêt pour l'application QuizzHub.

### RÈGLES STRICTES DE FORMATAGE :
1. Tu dois répondre UNIQUEMENT avec un bloc de code JSON valide commençant par `[` et se terminant par `]`.
2. Aucun texte avant, aucun texte après, aucun commentaire JavaScript (`//` ou `/* */`).
3. Chaque élément du tableau doit comporter exactement ces clés :
   - "recto": Texte concis, précis, posant une question claire ou demandant de définir un concept clé.
   - "verso": Réponse claire, rigoureuse et mémorisable (avec les étapes clés si nécessaire).
   - "subject": Le nom de la matière (ex: "Algèbre 2", "Physique quantique", "Droit civil"). Si non spécifié, utilise "Général".
   - "folder": Le chemin du dossier et éventuel sous-dossier (ex: "Mathématiques / Algèbre", "Informatique / Algorithmes"). Si non spécifié, utilise "Général".
   - "tags": Une liste de mots-clés ou le nom du chapitre (ex: ["Chapitre 1", "Définition"]).

### CONSEILS PÉDAGOGIQUES :
- Règle de l'atome : Une seule idée par carte. Évite les cartes pavés ou trop longues.
- Formule les questions de façon active ("Qu'est-ce que...", "Quelle est la condition pour...", "Énoncer le théorème de...").
- Ne saute aucune définition fondamentale du cours.

---
# MATIÈRE SOUHAITÉE : [Indique ici le nom de la matière, ex: Algèbre linéaire]
# DOSSIER SOUHAITÉ : [Indique ici le dossier / sous-dossier, ex: Mathématiques / Chapitre 3]

# MON COURS :
[Colle ici ton cours, tes notes ou ton PDF retranscrit]
```

---

## 🐍 Script Python de validation (Optionnel)

Si vous voulez vérifier que votre fichier JSON généré par l'IA est 100% conforme avant de l'importer dans QuizzHub, exécutez ce petit script :

```python
import json
import sys

def valider_flashcards(fichier_chemin):
    try:
        with open(fichier_chemin, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except Exception as e:
        print(f"❌ Erreur de syntaxe JSON : {e}")
        return False

    cards = data if isinstance(data, list) else data.get('flashcards', data.get('cards', []))
    if not isinstance(cards, list) or len(cards) == 0:
        print("❌ Le fichier ne contient pas de liste de cartes valide.")
        return False

    erreurs = 0
    for idx, card in enumerate(cards):
        recto = card.get('recto') or card.get('front') or card.get('question')
        verso = card.get('verso') or card.get('back') or card.get('answer')
        if not recto or not str(recto).strip():
            print(f"⚠️ Carte #{idx+1} : 'recto' manquant ou vide.")
            erreurs += 1
        if not verso or not str(verso).strip():
            print(f"⚠️ Carte #{idx+1} : 'verso' manquant ou vide.")
            erreurs += 1

    if erreurs == 0:
        print(f"✅ Succès ! {len(cards)} flashcard(s) validée(s) et prêtes à être importées dans QuizzHub.")
        return True
    else:
        print(f"❌ {erreurs} problème(s) détecté(s). Corrigez le fichier avant import.")
        return False

if __name__ == "__main__":
    fichier = sys.argv[1] if len(sys.argv) > 1 else "modele-flashcards.json"
    valider_flashcards(fichier)
```
