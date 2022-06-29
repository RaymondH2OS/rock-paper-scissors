// Rock Paper Scissors Game
const choices = ["rock", "paper", "scissors"];

function computerPlay(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("Tie");
  }

  // Check if computer won
  if (computerSelection == "rock" && playerSelection == "scissors") {
    console.log("Computer Wins! Rock beats Scissors!");
  } 
  else if (computerSelection == "paper" && playerSelection == "rock") {
    console.log("Computer Wins! Paper beats Rock!");
  } 
  else if (
    computerSelection == "scissors" && playerSelection == "paper") {
    console.log("Computer Wins! Scissors beats Paper!");
  }

  // Check if player won
  if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("Player Wins! Rock beats Scissors!");
  } 
  else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("Player Wins! Paper beats Rock!");
  } 
  else if (playerSelection == "scissors" &&computerSelection == "paper") {
    console.log("Player Wins! Scissors beats Paper!");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay(choices);
    let playerInput = prompt("Enter your choice: ");
    let playerSelection = playerInput.toLowerCase();
    playRound(playerSelection, computerSelection);
  }
}