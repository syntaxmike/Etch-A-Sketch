const container = document.querySelector('.container');

function createGrid(gridNum = 16) {
    for(let rows = 0; rows < gridNum; rows++) {
        for(let columns = 0; columns < gridNum; columns++){
            const cell = document.createElement('div');
            cell.className = 'grid';
            cell.style.width = `${720/gridNum}px`;
            cell.style.height = `${720/gridNum}px`;
            container.appendChild(cell);
        }
    }
}

function removeCurrentGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const btnSubmit = document.querySelector('button');

btnSubmit.addEventListener('click', function(e) {
    const userInput = +document.getElementById('gridNum').value;

    if(isNaN(userInput) || userInput > 100 || userInput < 0) {
        alert(`Please enter a number between 1 - 100`)
    } else {
        removeCurrentGrid();
        createGrid(userInput);
    }
})

createGrid();