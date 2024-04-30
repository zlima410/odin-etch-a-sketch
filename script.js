let numRowCol = 16;

function board() {
    const gridContainer = document.querySelector(".grid-container");

    for (row = 0; row < numRowCol; row++) {
        const allRows = document.createElement("div");
        allRows.className = "all-rows";
        gridContainer.appendChild(allRows);
    }

    const getAllRows = document.querySelectorAll(".all-rows");

    getAllRows.forEach(eachRow => {
        for (let i = 0; i < numRowCol; i++) {
            eachRow.style.height = 600 / numRowCol + "px";

            const square = document.createElement("div");
            square.className = "square";
            eachRow.appendChild(square);
        }
    });
}

function addHover() {
    const allSquares = document.querySelectorAll(".square");

    allSquares.forEach(eachSquare => {
        eachSquare.addEventListener("mouseover", () => {
            eachSquare.className = "square change-color"
        });
    });
}

function clearGrid() {
    const gridContainer = document.querySelector(".grid-container");
    const getAllRows = document.querySelectorAll(".all-rows");

    getAllRows.forEach(eachRow => {
        gridContainer.removeChild(eachRow);
    });
}

function editGridSize() {
    const newSize = document.querySelector("button");

    newSize.addEventListener("click", () => {
        clearGrid();
        numRowCol = Number(prompt("Enter a number (1-100): "));

        while (numRowCol < 1 && numRowCol > 100) {
            numRowCol = Number(prompt("Number out of bounds. Please enter a new number: "));
        }

        board();
        addHover();
    });
}

board();
addHover();
editGridSize();