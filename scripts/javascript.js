const container = document.querySelector('.container');
const btnSubmit = document.querySelector('button');

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

function changeColor(e) {
    let targetCell = e.target;
    if(targetCell.className === 'grid') {
        targetCell.style.backgroundColor =`#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

}

function removeCurrentGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function getUserInput() {
    const userInput = +document.getElementById('gridNum').value;

    if(isNaN(userInput) || userInput > 101 || userInput < 1) {
        alert(`Please enter a number between 1 - 100`)
    } else {
        removeCurrentGrid();
        createGrid(userInput);
    }
}


btnSubmit.addEventListener('click', getUserInput);
window.addEventListener('mouseover', changeColor);

window.onload = () => {
    createGrid();
}