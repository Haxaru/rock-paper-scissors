const results = document.querySelector(".results");
const playerDisplay = document.querySelector(".player");
const computerDisplay = document.querySelector(".computer");

let playerPoints = 0;
let computerPoints = 0;
let totalRounds = 0;

const rockBtn = document.querySelector(".rock");
rockBtn.addEventListener("click", () => {
  playRound("rock");
});

const paperBtn = document.querySelector(".paper");
paperBtn.addEventListener("click", () => {
  playRound("paper");
});

const scissorsBtn = document.querySelector(".scissors");
scissorsBtn.addEventListener("click", () => {
  playRound("scissors");
});

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", reset);

const computerChoice = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    results.textContent = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerPoints++;
    results.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    computerPoints++;
    results.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
  totalRounds++;
  updatePoints();
  declareWinner();

  if (playerPoints > 5 || computerPoints > 5) {
    reset();
  }
}

function updatePoints() {
  playerDisplay.textContent = playerPoints;
  computerDisplay.textContent = computerPoints;
}

function declareWinner() {
  if (playerPoints === 5) {
    results.textContent = `Yay! You win with a score of ${playerPoints} to ${computerPoints}!`;
  } else if (computerPoints === 5) {
    results.textContent = `Sorry! You lose with a score of ${playerPoints} to ${computerPoints}!`;
  }
}

function reset() {
  playerPoints = 0;
  computerPoints = 0;
  playerDisplay.textContent = playerPoints;
  computerDisplay.textContent = computerPoints;
  results.textContent = "";
}
