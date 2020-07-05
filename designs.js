
// Selects size input
const gridForm = document.getElementById("sizePicker");

// Selects Table
let newCanvas = document.getElementById("pixelCanvas");

// Selects color, height and width element
const gridHeight = document.getElementById("inputHeight");
const gridWidth = document.getElementById("inputWidth");
const cellColor = document.getElementById("colorPicker");

// Draws the grid
// The first for loop creates a row of cells, the second, creates the cells
// Cells can be colored individually
function makeGrid() {
    newCanvas.innerHTML = "";
    for (let h = 0; h < gridHeight.value; h++) {
        const rows = document.createElement("tr");
        newCanvas.insertAdjacentElement("afterbegin", rows);
        for (let w = 0; w < gridWidth.value; w++) {
            const cells = document.createElement("td");
            cells.addEventListener("click", function () {
                cells.style.backgroundColor = cellColor.value;
            });
            rows.appendChild(cells);
        }
    }
}

// When size is submitted by the user, call makeGrid()
gridForm.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});
