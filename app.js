// Rock Paper Scissors Game
let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];
const results = document.getElementById('results');
const pScore = document.getElementById('pScore');
const cScore = document.getElementById('cScore');

function computerPlay(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(playerChoice, computerChoice) {

  let playerSelection = playerChoice.toLowerCase();
  let computerSelection = computerChoice.toLowerCase();
  
  if (playerSelection == computerSelection) {
    results.textContent = "Tie";
  }

  // Check if computer won
  if (computerSelection == "rock" && playerSelection == "scissors") {
    results.textContent = "Computer Wins! Rock beats Scissors!";
    computerScore++;
  }
  else if (computerSelection == "paper" && playerSelection == "rock") {
    results.textContent = "Computer Wins! Paper beats Rock!";
    computerScore++;
  }
  else if (
    computerSelection == "scissors" && playerSelection == "paper") {
      results.textContent = "Computer Wins! Scissors beats Paper!";
      computerScore++;
  }

  // Check if player won
  if (playerSelection == "rock" && computerSelection == "scissors") {
    results.textContent = "Player Wins! Rock beats Scissors!";
    playerScore++;
  }
  else if (playerSelection == "paper" && computerSelection == "rock") {
    results.textContent = "Player Wins! Paper beats Rock!";
    playerScore++;
  }
  else if (playerSelection == "scissors" && computerSelection == "paper") {
    results.textContent = "Player Wins! Scissors beats Paper!";
    playerScore++;
  }

  pScore.textContent = playerScore;
  cScore.textContent = computerScore;

  if (playerScore == 5) {
    results.textContent = "Player Wins! Computer Loses!";
    playerScore = 0;
    computerScore = 0;
  }
  
  if (computerScore == 5) {
    results.textContent = "Computer Wins! Player Loses!";
    playerScore = 0;
    computerScore = 0;
  }

}

const btn = document.querySelectorAll(".pChoice");

btn.forEach((pChoice) => {
  pChoice.addEventListener("click", () => {
    playRound(pChoice.id, computerPlay(choices));
  });
});
