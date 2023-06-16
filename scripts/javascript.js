const DEFAULT_COLOR = 'black';
let currentColor = DEFAULT_COLOR;
let mouseDown = false;

const container = document.querySelector('.container');
const btnSubmit = document.querySelector('#submit');
const btnBlackWhite = document.querySelector('#black');
const btnRainbow = document.querySelector('#rainbow');
const btnShader = document.querySelector('#shader');


btnSubmit.addEventListener('click', getUserInput);
btnRainbow.addEventListener('click', setCurrentColor);
btnShader.addEventListener('click', setCurrentColor);
btnBlackWhite.addEventListener('click', setCurrentColor)
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createGrid(gridCount = 16) {
    for(let rows = 0; rows < gridCount; rows++) {
        for(let columns = 0; columns < gridCount; columns++){
            const cell = document.createElement('div');
            cell.className = 'grid';
            cell.style.width = `${container.clientHeight / gridCount}px`;
            cell.style.height = `${container.clientHeight / gridCount}px`;
            cell.addEventListener('mouseover', changeColor);
            cell.addEventListener('mousedown', changeColor);
            container.appendChild(cell);
        }
    }
}

function changeColor(e) {
    let targetCell = e.target;
    if (e.type === 'mouseover' && !mouseDown) return;
    if(currentColor === 'black'){
        targetCell.style.backgroundColor = '#000000';
    } else if (currentColor === 'rainbow') {
        targetCell.style.backgroundColor =`#${Math.floor(Math.random() * 16777215).toString(16)}`;
    } else if (currentColor === 'shader') {
        targetCell.style.backgroundColor = `hsl(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 50)}% )`
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

function setCurrentColor(e) {
    currentColor = e.srcElement.id;
}

function resize() {
    const newHeight =  container.clientHeight / Math.sqrt(container.childElementCount);
    const newWidth =  container.clientWidth / Math.sqrt(container.childElementCount);
    Array.from(container.children).forEach((cell) => {
        cell.style.width = `${newWidth}px`;
        cell.style.height = `${newHeight}px`;
    })
}

function removeCurrentGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

window.onload = () => {
    createGrid();
}

window.addEventListener('resize', resize)