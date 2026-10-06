// ============================================================================
// SpectralVisualizer - Visualiseur Interactif du Spectre et des Directions Propres (2x2)
// Permet de manipuler un vecteur x et d'observer son image Ax en temps réel.
// Rend immédiatement intuitive la notion d'espace propre invariant :
// Ax reste colinéaire à x lorsque x est sur une direction propre.
// ============================================================================

const SpectralVisualizer = {
    // Matrice courante [[a, b], [c, d]]
    matrix: [[2, 1], [0, 3]],
    currentAngle: Math.PI / 4,

    render(containerId, initialMatrix = null) {
        const container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
        if (!container) return;

        if (initialMatrix) this.matrix = initialMatrix;
        const [ [a, b], [c, d] ] = this.matrix;

        // Calcul des valeurs propres
        const trace = a + d;
        const det = a * d - b * c;
        const delta = trace * trace - 4 * det;

        let eigenInfo = '';
        let lambda1 = null, lambda2 = null;
        let v1 = null, v2 = null;

        if (delta >= 0) {
            lambda1 = ((trace + Math.sqrt(delta)) / 2).toFixed(2);
            lambda2 = ((trace - Math.sqrt(delta)) / 2).toFixed(2);

            // Vecteurs propres
            v1 = this.computeEigenvector(a, b, c, d, Number(lambda1));
            v2 = this.computeEigenvector(a, b, c, d, Number(lambda2));
            eigenInfo = `Valeurs propres réelles : $\\lambda_1 = ${lambda1}$, $\\lambda_2 = ${lambda2}$`;
        } else {
            eigenInfo = `Pas de valeurs propres réelles (spectre complexe : $\\Delta < 0$)`;
        }

        container.innerHTML = `
            <div class="spectral-viz-card" style="background: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 20px; color: #f8fafc;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                    <div>
                        <h4 style="margin: 0; font-size: 1.2em; color: #38bdf8;">🧭 Visualisation Interactive du Spectre 2×2</h4>
                        <p style="margin: 4px 0 0; font-size: 0.9em; color: #94a3b8;">
                            Observez la transformation linéaire $x \\mapsto Ax$. Quand $x$ est sur une droite propre, $Ax$ lui reste parallèle !
                        </p>
                    </div>
                    <div style="background: rgba(56, 189, 248, 0.1); border: 1px solid #38bdf8; border-radius: 8px; padding: 6px 12px; font-family: monospace;">
                        $$A = \\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}$$
                    </div>
                </div>

                <div style="margin-bottom: 12px; font-size: 0.95em; color: #cbd5e1;">
                    ${eigenInfo}
                </div>

                <div style="display: flex; gap: 20px; flex-wrap: wrap; align-items: center;">
                    <div style="flex: 1; min-width: 280px; text-align: center;">
                        <canvas id="spectral-canvas" width="360" height="360" style="background: #090d16; border-radius: 8px; border: 1px solid #1e293b; max-width: 100%; cursor: crosshair;"></canvas>
                    </div>
                    <div style="flex: 1; min-width: 260px;">
                        <label style="display: block; font-weight: bold; margin-bottom: 8px; color: #cbd5e1;">
                            Faire tourner le vecteur $u$ :
                        </label>
                        <input type="range" id="spectral-angle-slider" min="0" max="360" value="${Math.round(this.currentAngle * 180 / Math.PI)}" style="width: 100%; accent-color: #38bdf8;">
                        
                        <div id="spectral-status-indicator" style="margin-top: 15px; padding: 12px; border-radius: 8px; background: rgba(30, 41, 59, 0.8); border-left: 4px solid #64748b; font-size: 0.9em;">
                            Faites glisser pour chercher une direction propre invariante...
                        </div>

                        <div style="margin-top: 15px; font-size: 0.85em; color: #94a3b8; line-height: 1.5;">
                            <div><span style="display:inline-block; width:12px; height:12px; background:#38bdf8; border-radius:50%; margin-right:6px;"></span> <strong>Vecteur $u$ (source)</strong></div>
                            <div><span style="display:inline-block; width:12px; height:12px; background:#f43f5e; border-radius:50%; margin-right:6px;"></span> <strong>Image $v = Au$ (transformé)</strong></div>
                            <div><span style="display:inline-block; width:12px; height:4px; background:#a855f7; margin-right:6px;"></span> <strong>Directions propres stables $E_\\lambda$</strong></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        if (window.renderMath) window.renderMath([container]);

        this.initCanvas(lambda1, lambda2, v1, v2);
    },

    computeEigenvector(a, b, c, d, lambda) {
        // (A - lambda I) v = 0
        // (a - lambda) x + b y = 0
        const a11 = a - lambda;
        if (Math.abs(b) > 1e-5) {
            return { x: -b, y: a11 };
        } else if (Math.abs(c) > 1e-5) {
            return { x: d - lambda, y: -c };
        } else {
            // Matrice diagonale
            return Math.abs(a - lambda) < 1e-5 ? { x: 1, y: 0 } : { x: 0, y: 1 };
        }
    },

    initCanvas(l1, l2, v1, v2) {
        const canvas = document.getElementById('spectral-canvas');
        const slider = document.getElementById('spectral-angle-slider');
        if (!canvas || !slider) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const cx = width / 2;
        const cy = height / 2;
        const scale = 50; // pixels par unité

        const redraw = (angleDeg) => {
            const rad = angleDeg * Math.PI / 180;
            this.currentAngle = rad;

            ctx.clearRect(0, 0, width, height);

            // 1. Grille et axes cartésiens
            ctx.strokeStyle = '#1e293b';
            ctx.lineWidth = 1;
            for (let x = -4; x <= 4; x++) {
                ctx.beginPath();
                ctx.moveTo(cx + x * scale, 0);
                ctx.lineTo(cx + x * scale, height);
                ctx.stroke();
            }
            for (let y = -4; y <= 4; y++) {
                ctx.beginPath();
                ctx.moveTo(0, cy - y * scale);
                ctx.lineTo(width, cy - y * scale);
                ctx.stroke();
            }

            // Axes principaux
            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(0, cy); ctx.lineTo(width, cy);
            ctx.moveTo(cx, 0); ctx.lineTo(cx, height);
            ctx.stroke();

            // 2. Tracer les droites propres invariantes
            const drawInvariantLine = (vec, color) => {
                if (!vec) return;
                const len = Math.hypot(vec.x, vec.y);
                if (len < 1e-5) return;
                const dx = (vec.x / len) * 200;
                const dy = (vec.y / len) * 200;

                ctx.strokeStyle = color;
                ctx.lineWidth = 2;
                ctx.setLineDash([6, 6]);
                ctx.beginPath();
                ctx.moveTo(cx - dx, cy + dy);
                ctx.lineTo(cx + dx, cy - dy);
                ctx.stroke();
                ctx.setLineDash([]);
            };

            drawInvariantLine(v1, 'rgba(168, 85, 247, 0.7)');
            drawInvariantLine(v2, 'rgba(217, 70, 239, 0.7)');

            // 3. Vecteur source u = (cos rad, sin rad) * 2
            const ux = 2 * Math.cos(rad);
            const uy = 2 * Math.sin(rad);

            // 4. Image v = Au
            const [[a, b], [c, d]] = this.matrix;
            const vx = a * ux + b * uy;
            const vy = c * ux + d * uy;

            // Dessiner u (bleu clair)
            this.drawVector(ctx, cx, cy, ux * scale, -uy * scale, '#38bdf8', 'u');

            // Dessiner v = Au (rose vif)
            this.drawVector(ctx, cx, cy, (vx / 2) * scale, -(vy / 2) * scale, '#f43f5e', 'Au');

            // 5. Test de colinéarité : det(u, Au) = ux * vy - uy * vx
            const cross = ux * vy - uy * vx;
            const isColinear = Math.abs(cross) < 0.35;
            const indicator = document.getElementById('spectral-status-indicator');

            if (indicator) {
                if (isColinear) {
                    const ratio = (Math.hypot(vx, vy) / Math.hypot(ux, uy)).toFixed(2);
                    indicator.style.background = 'rgba(16, 185, 129, 0.15)';
                    indicator.style.borderLeftColor = '#10b981';
                    indicator.style.color = '#34d399';
                    indicator.innerHTML = `<strong>🎯 DIRECTION PROPRE IDENTIFIÉE !</strong><br>
                        Le vecteur transformé $Au$ reste colinéaire à $u$. Facteur d'étirement (valeur propre) : $\\lambda \\approx ${ratio}$.`;
                } else {
                    indicator.style.background = 'rgba(30, 41, 59, 0.8)';
                    indicator.style.borderLeftColor = '#64748b';
                    indicator.style.color = '#cbd5e1';
                    indicator.innerHTML = `Vecteur quelconque : la transformation applique une rotation ($Au$ n'est pas colinéaire à $u$). Angle d'écart : ${Math.round(Math.abs(Math.atan2(cross, ux * vx + uy * vy) * 180 / Math.PI))}°`;
                }
            }
        };

        slider.oninput = (e) => redraw(Number(e.target.value));
        redraw(Number(slider.value));
    },

    drawVector(ctx, fromX, fromY, dx, dy, color, label) {
        const toX = fromX + dx;
        const toY = fromY + dy;
        const headlen = 10;
        const angle = Math.atan2(dy, dx);

        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 3;

        // Corps du vecteur
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();

        // Pointe de flèche
        ctx.beginPath();
        ctx.moveTo(toX, toY);
        ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
        ctx.closePath();
        ctx.fill();

        // Label
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(label, toX + 6, toY - 6);
    }
};

if (typeof window !== 'undefined') {
    window.SpectralVisualizer = SpectralVisualizer;
}
