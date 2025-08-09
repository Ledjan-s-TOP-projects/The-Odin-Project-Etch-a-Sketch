const body = document.querySelector("body");
const container = document.querySelector(".container");
const options = document.createElement("div");
options.setAttribute("class", "options");
body.appendChild(options);

const gridSizeButton = document.createElement("button");
options.appendChild(gridSizeButton);
gridSizeButton.setAttribute("class", "btn");
gridSizeButton.textContent = "Grid Size";

let userInput = 16;
createGrid(userInput);

gridSizeButton.addEventListener("click", (e) => {
  userInput = prompt("Enter a number between 1-100 to set the grid size.");
  createGrid(userInput);
  return userInput;
});

function createGrid(userInput) {
  const numberOfCells = userInput * userInput;
  for (let i = 0; i < numberOfCells; i++) {
    const cell = document.createElement("div");
    container.appendChild(cell);
    cell.setAttribute("class", "cell");
    container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
  }
}
