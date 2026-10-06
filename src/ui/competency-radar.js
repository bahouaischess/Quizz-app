// ============================================================================
// CompetencyRadar - Radar de Compétences Mathématiques & Informatiques
// Calcule la maîtrise réelle multidimensionnelle à partir de l'historique :
// - Taux de réussite (40%)
// - Niveau moyen de difficulté résolu (35%)
// - Volume d'exercices pratiqués (15%)
// - Récence et régularité (10%)
// Génère un polygone vectoriel SVG haute définition avec repères concentriques.
// ============================================================================

const CompetencyRadar = {
    axes: [
        { id: 'matrices', label: 'Calcul Matriciel', matcher: (h) => /matrice|produit|trace|gauss|invers/i.test(h.notion || h.chapter) },
        { id: 'determinants', label: 'Déterminants', matcher: (h) => /déterminant|determinant/i.test(h.notion || h.chapter) },
        { id: 'reduction', label: 'Réduction & Diag', matcher: (h) => /diagonalis|spectre|propre|réduction/i.test(h.notion || h.chapter) },
        { id: 'series', label: 'Séries Numériques', matcher: (h) => /série|riemann|alembert|cauchy/i.test(h.notion || h.chapter) },
        { id: 'python', label: 'Python & Algo', matcher: (h) => /python|algo|récursiv|complexit/i.test(h.notion || h.chapter) },
        { id: 'c_lang', label: 'C & Mémoire', matcher: (h) => /c\b|pointeur|stack|mémoire/i.test(h.notion || h.chapter) }
    ],

    calculateAxisScores() {
        const history = window.appData?._workoutHistory || [];
        const now = Date.now();
        const oneWeek = 7 * 24 * 3600 * 1000;

        return this.axes.map(axis => {
            const items = history.filter(axis.matcher);
            const count = items.length;

            if (count === 0) {
                return {
                    ...axis,
                    score: 15, // Score de découverte par défaut
                    attempts: 0,
                    correct: 0,
                    avgDiff: 1,
                    labelWithScore: `${axis.label} (15%)`
                };
            }

            const correctItems = items.filter(i => i.correct);
            const successRate = correctItems.length / count; // 0 à 1

            // Difficulté moyenne pondérée des exercices RÉUSSIS (ou tentés)
            const diffs = (correctItems.length > 0 ? correctItems : items).map(i => i.difficulty || 1);
            const avgDiff = diffs.reduce((a, b) => a + b, 0) / diffs.length; // 1 à 9
            const diffFactor = Math.min(1.0, Math.max(0.1, avgDiff / 9));

            // Facteur volume (se sature à 20 exercices)
            const volumeFactor = Math.min(1.0, count / 20);

            // Facteur récence (au moins un exercice dans les 7 derniers jours)
            const hasRecent = items.some(i => (now - (i.timestamp || 0)) <= oneWeek);
            const recencyFactor = hasRecent ? 1.0 : 0.4;

            // Formule composite d'excellence académique
            const composite = (
                0.40 * successRate +
                0.35 * diffFactor +
                0.15 * volumeFactor +
                0.10 * recencyFactor
            );

            const score = Math.max(10, Math.min(100, Math.round(composite * 100)));

            return {
                ...axis,
                score,
                attempts: count,
                correct: correctItems.length,
                avgDiff: Math.round(avgDiff * 10) / 10,
                labelWithScore: `${axis.label} (${score}%)`
            };
        });
    },

    renderToContainer(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const scores = this.calculateAxisScores();
        const size = 360;
        const center = size / 2;
        const radius = size * 0.38;
        const numAxes = scores.length;
        const angleStep = (Math.PI * 2) / numAxes;

        // Grilles concentriques (20%, 40%, 60%, 80%, 100%)
        const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0];
        let gridPolygons = '';

        gridLevels.forEach(level => {
            const levelPoints = [];
            for (let i = 0; i < numAxes; i++) {
                const angle = i * angleStep - Math.PI / 2;
                const r = radius * level;
                const x = center + r * Math.cos(angle);
                const y = center + r * Math.sin(angle);
                levelPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
            }
            gridPolygons += `
                <polygon points="${levelPoints.join(' ')}" 
                         fill="none" 
                         stroke="rgba(255, 255, 255, 0.08)" 
                         stroke-width="1" />
            `;
        });

        // Lignes d'axes & Textes des labels
        let axisLines = '';
        let labelsHtml = '';

        scores.forEach((axisData, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const endX = center + radius * Math.cos(angle);
            const endY = center + radius * Math.sin(angle);

            axisLines += `
                <line x1="${center}" y1="${center}" 
                      x2="${endX.toFixed(1)}" y2="${endY.toFixed(1)}" 
                      stroke="rgba(255, 255, 255, 0.12)" 
                      stroke-width="1" 
                      stroke-dasharray="2 2" />
            `;

            // Positionnement du texte décalé au-delà du rayon
            const labelDist = radius + 26;
            const labelX = center + labelDist * Math.cos(angle);
            const labelY = center + labelDist * Math.sin(angle) + 4;
            const textAnchor = Math.abs(Math.cos(angle)) < 0.2 ? 'middle' : (Math.cos(angle) > 0 ? 'start' : 'end');

            labelsHtml += `
                <text x="${labelX.toFixed(1)}" y="${labelY.toFixed(1)}" 
                      text-anchor="${textAnchor}" 
                      fill="var(--text-main)" 
                      font-size="11.5" 
                      font-weight="600" 
                      font-family="system-ui, -apple-system, sans-serif">
                    ${axisData.label}
                    <tspan fill="var(--primary)" font-weight="700"> ${axisData.score}%</tspan>
                </text>
            `;
        });

        // Polygone des performances réelles de l'utilisateur
        const userPoints = [];
        let vertexCircles = '';

        scores.forEach((axisData, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const r = radius * (axisData.score / 100);
            const x = center + r * Math.cos(angle);
            const y = center + r * Math.sin(angle);
            userPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);

            vertexCircles += `
                <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" 
                        fill="#6366f1" 
                        stroke="#ffffff" 
                        stroke-width="1.5" />
            `;
        });

        const svgContent = `
            <div class="competency-radar-wrapper" style="text-align: center; max-width: 100%; overflow: hidden;">
                <svg viewBox="0 0 ${size} ${size}" class="radar-svg" style="max-width: 380px; width: 100%; height: auto; filter: drop-shadow(0 4px 16px rgba(0,0,0,0.4));">
                    <defs>
                        <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stop-color="#6366f1" stop-opacity="0.35"/>
                            <stop offset="100%" stop-color="#6366f1" stop-opacity="0.05"/>
                        </radialGradient>
                    </defs>

                    <!-- Repères concentriques -->
                    ${gridPolygons}

                    <!-- Lignes des 6 axes -->
                    ${axisLines}

                    <!-- Polygone utilisateur -->
                    <polygon points="${userPoints.join(' ')}" 
                             fill="url(#radarGlow)" 
                             stroke="#6366f1" 
                             stroke-width="2.5" 
                             stroke-linejoin="round" />

                    <!-- Sommets -->
                    ${vertexCircles}

                    <!-- Labels -->
                    ${labelsHtml}
                </svg>
                
                <div class="radar-legend-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; margin-top: 15px;">
                    ${scores.map(s => `
                        <div class="radar-legend-item" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 8px; font-size: 0.85em;">
                            <div style="color: var(--text-muted); font-size: 0.8em;">${s.label}</div>
                            <div style="font-size: 1.15em; font-weight: 700; color: ${s.score >= 70 ? 'var(--success)' : s.score >= 50 ? 'var(--warning)' : 'var(--danger)'};">
                                ${s.score}%
                            </div>
                            <div style="font-size: 0.75em; color: var(--text-muted);">${s.attempts} ex • Niv moy. ${s.avgDiff}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        container.innerHTML = svgContent;
    }
};

if (typeof window !== 'undefined') {
    window.CompetencyRadar = CompetencyRadar;
}
