let squareSize = 8;
let chosenColor = '#0D1282'
let gridSize = document.querySelector('.sizeSelect');
let colorChoice = document.querySelector('.colorChoice');
const applyInput = document.querySelector('.apply');
let clear = document.querySelector('.clear');


// Create grid fxn
createGrid(squareSize);

// Select Size 
gridSize.addEventListener('input', function(e) {
    squareSize = e.target.value;
});

// Apply selected size
applyInput.addEventListener('click', function() {
    resetGrid();
});

// Select color
colorChoice.addEventListener('input', function(e) {
    chosenColor = e.target.value;
});


// Clear Button;
clear.addEventListener('click', resetGrid);

// Change square color on hover
function addSquareEventListeners () {
    let squares = document.querySelectorAll('.square');
    for (let square of squares) {
        square.addEventListener('mouseover', (e) => e.target.style.backgroundColor = chosenColor);
    }

}

function createGrid(size = 8) {
    const grid = document.querySelector('#grid');

    // create rows
    for (let r = 0; r < size; r++) {
        const row = document.createElement('div')
        row.classList.add('row');
        grid.appendChild(row); // adds row to grid

        // create columns in each row
        for (let c = 0; c < size; c++) {
            const square = document.createElement('div')
            square.classList.add('square');
            row.appendChild(square); // add square to row
        }
    }

    addSquareEventListeners();
}

// Reset Grid
function resetGrid() {
    grid.textContent = '';
    createGrid(squareSize);
}










