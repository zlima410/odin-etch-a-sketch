const defaultGridSize = 16 * 16;
const gridContainer = document.querySelector(".grid-container");
let squareArray = [defaultGridSize];

for (let i = 0; i < defaultGridSize; i++) {
    squareArray[i] = document.createElement("div");
    gridContainer.appendChild(squareArray[i]);
}