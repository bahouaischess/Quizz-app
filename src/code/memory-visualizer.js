// ============================================================================
// MemoryVisualizer - Simulateur interactif d'adresses, pointeurs, Stack et Heap
// ============================================================================

const MemoryVisualizer = {
    // Génère le composant visuel de mémoire dans un conteneur donné
    // state: { stack: [{ name, type, address, value, pointsTo }], heap: [...] }
    render(container, state, onCellClick = null) {
        container.innerHTML = '';

        const wrapper = document.createElement('div');
        wrapper.className = 'memory-visualizer-container';

        wrapper.innerHTML = `
            <div class="memory-column stack-column">
                <div class="column-header">
                    <span class="col-icon">📚</span>
                    <strong>Pile d'Exécution (Stack)</strong>
                    <small>Adresses décroissantes</small>
                </div>
                <div class="memory-cells-list" id="stack-cells-list"></div>
            </div>

            <div class="memory-column heap-column">
                <div class="column-header">
                    <span class="col-icon">🧱</span>
                    <strong>Tas Dynamique (Heap - malloc)</strong>
                    <small>Adresses croissantes</small>
                </div>
                <div class="memory-cells-list" id="heap-cells-list"></div>
            </div>
        `;

        const stackList = wrapper.querySelector('#stack-cells-list');
        const heapList = wrapper.querySelector('#heap-cells-list');

        // Rendu des cases de la pile
        (state.stack || []).forEach(item => {
            const cell = document.createElement('div');
            cell.className = `memory-cell stack-cell ${item.isPointer ? 'is-pointer' : ''}`;
            cell.dataset.address = item.address;

            cell.innerHTML = `
                <div class="cell-addr">${item.address}</div>
                <div class="cell-info">
                    <span class="var-name"><strong>${item.name}</strong> (${item.type})</span>
                    <span class="var-val">${item.value}</span>
                </div>
                ${item.pointsTo ? `<div class="pointer-badge">➡️ pointe vers ${item.pointsTo}</div>` : ''}
            `;

            if (onCellClick) {
                cell.classList.add('clickable');
                cell.addEventListener('click', () => {
                    wrapper.querySelectorAll('.memory-cell').forEach(c => c.classList.remove('selected'));
                    cell.classList.add('selected');
                    onCellClick(item);
                });
            }

            stackList.appendChild(cell);
        });

        // Rendu du tas (heap)
        if (!state.heap || state.heap.length === 0) {
            heapList.innerHTML = `<div class="empty-memory-msg">Aucune allocation dynamique active (malloc).</div>`;
        } else {
            state.heap.forEach(block => {
                const cell = document.createElement('div');
                cell.className = 'memory-cell heap-cell';
                cell.dataset.address = block.address;
                cell.innerHTML = `
                    <div class="cell-addr">${block.address}</div>
                    <div class="cell-info">
                        <span class="var-name">Bloc ${block.size} octets</span>
                        <span class="var-val">${block.value}</span>
                    </div>
                `;
                if (onCellClick) {
                    cell.classList.add('clickable');
                    cell.addEventListener('click', () => {
                        wrapper.querySelectorAll('.memory-cell').forEach(c => c.classList.remove('selected'));
                        cell.classList.add('selected');
                        onCellClick(block);
                    });
                }
                heapList.appendChild(cell);
            });
        }

        container.appendChild(wrapper);
    }
};

if (typeof window !== 'undefined') {
    window.MemoryVisualizer = MemoryVisualizer;
}
