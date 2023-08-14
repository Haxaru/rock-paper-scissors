function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];

  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

// The above generates the computer choice and logs it

let playerPoints = 0;
let computerPoints = 0;
let totalRounds = 0;

// The above is the starting points for the game

const results = document.querySelector(".results");
const playerDisplay = document.querySelector(".player");
const computerDisplay = document.querySelector(".computer");

// The linking to the classes

function playRound(playerSelection, computerSelection) {
  playerSelection;
  computerSelection = getComputerChoice();

  if (playerSelection == "rock" && computerSelection === "paper") {
    computerPoints++;
    results.textContent = "You lose! Paper beats Rock!";
  } else if (playerSelection == "rock" && computerSelection === "scissors") {
    playerPoints++;
    results.textContent = "You win! Rock beats Scissors!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerPoints++;
    results.textContent = "You lose! Scissors beats Paper!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerPoints++;
    results.textContent = "You win! Paper beats Rock!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerPoints++;
    results.textContent = "You lose! Rock beats Scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerPoints++;
    results.textContent = "You win! Scissors beats Paper!";
  } else if (playerSelection === computerSelection) {
    results.textContent = "It's a tie!";
  } else {
    results.textContent = "Input not recognized! Defaulting to a tie!";
  }
  totalRounds++;

  playerDisplay.textContent = playerPoints;
  computerDisplay.textContent = computerPoints;

  if (playerPoints === 5) {
    results.textContent = `Yay! You win with a score of ${playerPoints} to ${computerPoints}!`;
  } else if (computerPoints === 5) {
    results.textContent = `Sorry! You lose with a score of ${playerPoints} to ${computerPoints}!`;
  }
}

// The above relays the outcome of the game.

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
  playRound("rock");
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
  playRound("paper");
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
  playRound("scissors");
});

// The buttons representing the player selection
