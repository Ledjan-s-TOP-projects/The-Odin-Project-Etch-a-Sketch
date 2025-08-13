const body = document.querySelector("body");
const options = document.querySelector(".options");
const container = document.querySelector(".container");

//------Buttons-------
const gridSizeButton = document.createElement("button");
options.appendChild(gridSizeButton);
gridSizeButton.setAttribute("class", "btn");
gridSizeButton.style.cursor = "pointer";
gridSizeButton.textContent = "Grid Size";

const clearButton = document.createElement("button");
options.appendChild(clearButton);
clearButton.style.cursor = "pointer";
clearButton.textContent = "Clear";

let currentMode = null;
const colors = [
  "blue",
  "green",
  "yellow",
  "red",
  "orange",
  "pink",
  "magenta",
  "purple",
];

const blackButton = document.createElement("button");
blackButton.setAttribute("class", "blackBtn");
options.appendChild(blackButton);

const randomColorButton = document.createElement("button");
randomColorButton.setAttribute("class", "randomColorBtn");
options.appendChild(randomColorButton);

//------Event Listeners for Buttons-------
gridSizeButton.addEventListener("click", () => {
  const userInput = prompt(
    "Enter a number between 1-100 to set the grid size."
  );
  const newSize = parseFloat(userInput);
  console.log(newSize);

  if (userInput === null) {
    createGrid(); //When the user clicks cancel, the system will choose the default size
  } else if (isNaN(newSize)) {
    alert("Try again using only numbers between 1-100 to set the grid size.");
  } else if (newSize < 0 || newSize > 100) {
    alert("Try again! Enter a number between 1-100 to set the grid size");
  } else if (!Number.isInteger(newSize)) {
    alert("Try again using whole numbers between 1-100 without decimals.");
  } else {
    createGrid(newSize);
  }
});

clearButton.addEventListener("click", () => {
  clear();
});

blackButton.addEventListener("click", () => {
  currentMode = "black";
});

randomColorButton.addEventListener("click", () => {
  currentMode = "random";
});

//------Event Listners for Drawing-------
container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("cell")) {
    let cell = event.target;
    if (!cell.dataset.opacity) {
      cell.dataset.opacity = 0;
    }
    if (currentMode === "black") {
      cell.dataset.opacity = Math.min(
        parseFloat(cell.dataset.opacity) + 0.1,
        1
      );
      cell.style.backgroundColor = "black";
      cell.style.opacity = cell.dataset.opacity;
    } else if (currentMode === "random") {
      const randomChoice = Math.floor(Math.random() * colors.length);
      event.target.style.backgroundColor = colors[randomChoice];
    }
  }
});
//------Functions------
function createGrid(size = 100) {
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

function clear() {
  for (const cell of container.children) {
    cell.style.backgroundColor = "white";
    cell.dataset.opacity = 0;
  }
}

//----//Initial grid creation-------
createGrid();
