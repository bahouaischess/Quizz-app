# 🎓 Quizz & Entraînement Universitaire

> **Plateforme d'apprentissage adaptatif, d'entraînement intensif et d'évaluation académique.**  
> Mathématiques Supérieures (Algèbre linéaire, Déterminants, Réduction, Analyse & Séries) et Informatique (C & Python).

---

## ⚡ Distinction Fondamentale de la Plateforme

La plateforme sépare strictement deux activités pédagogiques complémentaires :

```text
┌─────────────────────────────────┐       ┌─────────────────────────────────┐
│        ESPACE 1 : QUIZ          │  vs   │     ESPACE 2 : ENTRAÎNEMENT     │
├─────────────────────────────────┤       ├─────────────────────────────────┤
│ • Restitution de connaissances  │       │ • Calcul effectif & pratique    │
│ • Définitions & théorèmes       │       │ • Démonstrations & déductions   │
│ • Questions flash & QCM         │       │ • Multi-étapes interdépendantes │
│ • Vérification conceptuelle     │       │ • Mesure de l'Autonomie réelle  │
└─────────────────────────────────┘       └─────────────────────────────────┘
```

---

## 🚀 Fonctionnalités Clés

### 1. Navigation Fluide & Zéro Friction (UX)
* **Zéro interruption** : aucune boîte de dialogue intempestive « Êtes-vous sûr d'abandonner ? ».
* **Sauvegarde automatique transparente** : toute session en cours est préservée en arrière-plan (`localStorage`).
* **Reprise en un clic** : carte interactive sur le Hub indiquant le nombre d'exercices réalisés et restants.
* **Clavier virtuel mathématique compact & rétractable** : masqué par défaut, toggleable via un bouton pilule discret (`⌨ Clavier mathématique` / `− Réduire`) sans jamais masquer l'énoncé.
* **Raccourcis clavier desktop** :
  * `↵ Entrée` : Valider la réponse / Passer à l'exercice suivant.
  * `Alt + H` : Déclencher l'indice progressif.
  * `Alt + K` : Ouvrir / Fermer le clavier mathématique.
  * `Échap` : Réduire le clavier mathématique virtuel.

### 2. Moteur Pédagogique Universitaire
* **Génération Procédurale Illimitée** : des centaines d'exercices dynamiques par notion (matrices, systèmes, séries, pointeurs).
* **Progression par Autonomie** :
  * **Niveau 1 — Guidé** : découpage pas à pas assisté.
  * **Niveau 2 — Choix de méthode** : matrice seule, calcul autonome du polynôme caractéristique $\chi_A$ et test de multiplicité géométrique $\dim E_\lambda$.
  * **Niveau 3 — Autonomie complète** : étude spectrale globale sans indication.
* **Distinction Fondamentale en Réduction** :
  $$\text{Diagonalisable} \quad \text{vs} \quad \text{Trigonalisable non diagonalisable} \quad \text{vs} \quad \text{Ni l'un ni l'autre sur } \mathbb{R}$$
* **Raisonnement à Information Partielle** : exercices basés sur les seules dimensions de sous-espaces ou polynômes annulateurs ($A^2 = A$).
* **Mode Étude & Échelle d'Indices Progressifs** :
  * *Indice 1* : Piste théorique.
  * *Indice 2* : Amorce méthodologique.
  * *Indice 3* : Démarche détaillée.

### 3. Métriques & Tracker Multidimensionnel
Mesure dissociée des compétences par notion :
* 🧮 **Calcul** : précision et rapidité de calcul numérique et matriciel.
* 🧠 **Raisonnement** : application rigoureuse des théorèmes et déductions logiques.
* ⚡ **Autonomie Réelle** : proportion d'exercices réussis sans assistance ni indice.
* 🪜 **Paliers de Difficulté** : échelle universitaire gradée de 1 à 9.

---

## 🛠️ Architecture Technique

* **Pur Vanilla JavaScript (ES6+)** : aucun framework lourd, aucun build step obligatoire (`npm run build` non requis).
* **Rendu Mathématique** : KaTeX / MathJax pour une typographie LaTeX professionnelle.
* **Stockage Local** : synchronisation transparente via `localStorage` et `sessionStorage`.
* **Étanche & Modulaire** :
  * `src/core/` : Détection de méthode, évaluation mathématique formelle, diagnostic d'erreur.
  * `src/engine/` : Moteur adaptatif SM-2, suivi de maîtrise (`MasteryTracker`), analyseur de cours.
  * `src/math/` : Générateurs procéduraux d'algèbre linéaire, déterminants, séries et analyse.
  * `src/code/` : Environnement d'exécution et simulateur de mémoire C (Stack vs Heap).
  * `src/ui/` : Vues interactives, radar SVG de compétences, visualiseur spectral 2D, clavier virtuel.

---

## 💻 Démarrage Rapide

Ouvrez simplement `index.html` dans un navigateur moderne, ou lancez un serveur local léger :

```bash
# Avec Python
python -m http.server 8000

# Ou avec Node / npx
npx serve .
```

Puis rendez-vous sur `http://localhost:8000`.
