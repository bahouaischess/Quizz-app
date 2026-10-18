// ============================================================================
// DATA.JS - Hub Central & Agrégateur des Données de Cours
// ----------------------------------------------------------------------------
// L'ancien fichier monolithique a été séparé de façon modulaire dans le dossier
// "Cours/" par matière :
//   - Cours/Algebre 2/
//   - Cours/Algebre 3/
//   - Cours/Analyse 3/
//   - Cours/Probabilite/
//   - Cours/Programmation C/
//   - Cours/Architecture des ordis/
//
// Chaque fichier de cours vient enrichir l'objet global `defaultData`.
// Une copie de sauvegarde complète est disponible dans `data.backup.js`.
// ============================================================================

window.defaultData = window.defaultData || {};
var defaultData = window.defaultData;
