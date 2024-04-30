const gridContainer = document.querySelector(".grid-container");
createGrid(16, 16);

function createGrid(side, side) {
    let squareArray = [side * side];
    for (let i = 0; i < (side * side); i++) {
        squareArray[i] = document.createElement("div");
        squareArray[i].classList.add("square");
        gridContainer.appendChild(squareArray[i]);
    }
}

function resetGrid() {
    
}

document.addEventListener("click", (e) => {
    let target = e.target;

    if (target.className === "reset") {
        resetGrid();
    }
});

document.addEventListener("mousemove", (e) => {
    let target = e.target;

    if (target.className === "square") {
        target.setAttribute("id", "marked");
    }
});