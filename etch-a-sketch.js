// Create grid fxn

function createGrid(size = 16) {

    // create rows
    for (let r = 0; r < size; r++) {
        const row = document.createElement('div')
        row.classList.add('row');
        const grid = document.querySelector('#grid');
        grid.appendChild(row); // adds row to grid

        // create columns in each row
        for (let c = 0; c < size; c++) {
            const square = document.createElement('div')
            square.classList.add('square');
            row.appendChild(square); // add square to row
        }
    }
}

createGrid(64);

// Change square color on hover
function colorSquare() {
    const squares = document.querySelectorAll('.square');
    for (let square of squares) {
        square.addEventListener('mouseover', () => square.style.backgroundColor = 'red')
    }
}

colorSquare();