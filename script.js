const defaultGridSize = 16 * 16;
const gridContainer = document.querySelector(".grid-container");
let squareArray = [defaultGridSize];

function createGrid(side, side) {
    
}

for (let i = 0; i < defaultGridSize; i++) {
    squareArray[i] = document.createElement("div");
    squareArray[i].classList.add("square");
    gridContainer.appendChild(squareArray[i]);
}

document.addEventListener("mousemove", (e) => {
    let target = e.target;

    if (target.className === "square") {
        target.setAttribute("id", "marked");
    }
});