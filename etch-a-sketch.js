let squareSize = 8;
let gridSize = document.querySelector('input');
const applyInput = document.querySelector('.apply');


// Create grid fxn
createGrid(squareSize);

// Select Size 
gridSize.addEventListener('input', function(e) {
    console.log(e.target.value);
    squareSize = e.target.value;
})

// Apply selected size
applyInput.addEventListener('click', function() {
    resetGrid();
});

// Change square color on hover
function addSquareEventListeners () {
    let squares = document.querySelectorAll('.square');
    for (let square of squares) {
        square.addEventListener('mouseover', (e) => e.target.style.backgroundColor = 'red');
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
    let rows = document.querySelectorAll('.row').length
    const grid = document.querySelector('#grid');
    for (let r = rows; r > 0; r--) {
        grid.removeChild(grid.lastChild);
    }
    createGrid(squareSize);
}









