const container = document.querySelector('.container');

function createGrid() {
    for(let rows = 0; rows < 16; rows++) {
        for(let columns = 0; columns < 16; columns++){
            const cell = document.createElement('div');
            cell.className = 'grid';
            cell.style.width = `${720/16}px`;
            cell.style.height = `${720/16}px`;
            container.appendChild(cell);
        }
    }
}

createGrid();