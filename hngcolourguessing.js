const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let targetColor = "";
let score = 0;

const colorBox = document.getElementById("colorBox");
const optionsContainer = document.getElementById("options");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

// Start a new game
function startGame() {
  targetColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = targetColor;
  gameStatus.textContent = "";

  optionsContainer.innerHTML = "";
  colors.forEach((color) => {
    const button = document.createElement("button");
    button.style.backgroundColor = color;
    button.dataset.testid = "colorOption";
    button.addEventListener("click", () => checkGuess(color));
    optionsContainer.appendChild(button);
  });
}

// Check if the player's guess is correct
function checkGuess(selectedColor) {
  if (selectedColor === targetColor) {
    gameStatus.textContent = "Correct!";
    gameStatus.style.color = "green";
    score++;
    scoreDisplay.textContent = score;
  } else {
    gameStatus.textContent = "Wrong! Try again.";
    gameStatus.style.color = "red";
  }
}

// Reset game
newGameButton.addEventListener("click", startGame);

// Initialize game on load
startGame();
