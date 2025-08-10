const body = document.querySelector("body");
const options = document.querySelector(".options");
const container = document.querySelector(".container");

const gridSizeButton = document.createElement("button");
options.appendChild(gridSizeButton);
gridSizeButton.setAttribute("class", "btn");
gridSizeButton.textContent = "Grid Size";

gridSizeButton.addEventListener("click", () => {
  const userInput = prompt(
    "Enter a number between 1-100 to set the grid size."
  );
  const newSize = parseInt(userInput, 10);
  console.log(newSize);

  if (userInput === null) {
    createGrid(); //When the user clicks cancel, the system will choose the default size
  } else if (isNaN(newSize)) {
    alert("Try again using only numbers between 1-100 to set the grid size.");
  } else if (newSize < 0 || newSize > 101) {
    alert("Try again! Enter a number between 1-100 to set the grid size");
  } else if (!Number.isInteger(newSize~)) {
    alert("Try again using whole numbers between 1-100 without decimals.");
  } else {
    createGrid(newSize);
  }

  // if (newSize === null) {
  //   createGrid();
  // } else if (newSize <= 0 || newSize > 100) {
  //   alert("Try again! Enter a number between 1-100 to set the grid size");
  // } else if (isNaN(newSize)) {
  //   alert("Try again! Enter only numbers between 1-100 to set the grid size");
  // } else {
  //   createGrid(newSize);
  // }
});

function createGrid(size = 16) {
  clearGrid();
  const numberOfCells = size * size;
  for (let i = 0; i < numberOfCells; i++) {
    const cell = document.createElement("div");
    container.appendChild(cell);
    cell.setAttribute("class", "cell");
    cell.style.width = `${800 / size}px`;
    cell.style.height = `${800 / size}px`;
  }
}

function clearGrid() {
  container.innerHTML = "";
}

createGrid();
