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

function clearGrid() {
    const gridContainer = document.querySelector(".grid-container");
    const getAllRows = document.querySelectorAll(".all-rows");

    getAllRows.forEach(eachRow => {
        gridContainer.removeChild(eachRow);
    });
}