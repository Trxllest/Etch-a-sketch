// Create grid fxn

function createGrid(size = 16) {

    // create rows
    for (let r = 0; r < size; r++) {
        const row = document.createElement('div').classList.add('row');
        const grid = document.querySelector('grid');
        grid.appendChild(row); // adds row to grid

        // create columns in each row
        for (let c = 0; c < size; c++) {
            const square = document.createElement('div').classList.add('square');
            row.appendChild(square); // add square to row
        }
    }
}