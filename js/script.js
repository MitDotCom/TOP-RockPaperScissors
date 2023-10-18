const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const RPS = [rock, paper, scissors];

let rounds = 1;

let computerWins = 0;
let playerWins = 0;

function getComputerChoice() {
  let computerChoice = RPS[Math.floor(Math.random() * RPS.length)];
  return computerChoice;
}

function getPlayerChoice() {
  alert(`Round: ${rounds}!`);
  let playerChoice = prompt(
    "Please enter your choice: 'rock','paper', or 'scissors'."
  ).toLowerCase();
  while (!RPS.includes(playerChoice)) {
    playerChoice = prompt(
      "That is not a valid choice. Please enter your choice: 'rock','paper', or 'scissors'."
    ).toLowerCase();
    console.log(`You entered: ${playerChoice}`);
  }
  return playerChoice;
}

function calcWinner() {
  if (computerChoice === playerChoice) {
    alert(`It's a tie. You both chose ${playerChoice}.`);
    console.log(`It's a tie. You both chose ${playerChoice}.`);
    rounds++;
    console.log(`Round: ${rounds}`);
    console.log(".....................");
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    alert("Computer wins. Paper beats rock.");
    rounds++;
    computerWins++;
    console.log("Computer wins. Paper beats rock.");
    console.log(`Computer wins: ${computerWins}`);
    console.log(`Player wins: ${playerWins}`);
    console.log(`Round: ${rounds}`);
    console.log(".....................");
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    alert("Player wins. Rock beats scissors.");
    rounds++;
    playerWins++;
    console.log("Player wins. Rock beats scissors.");
    console.log(`Computer wins: ${computerWins}`);
    console.log(`Player wins: ${playerWins}`);
    console.log(`Round: ${rounds}`);
    console.log(".....................");
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    alert("Player wins. Paper beats rock.");
    rounds++;
    playerWins++;
    console.log("Player wins. Paper beats rock.");
    console.log(`Computer wins: ${computerWins}`);
    console.log(`Player wins: ${playerWins}`);
    console.log(`Round: ${rounds}`);
    console.log(".....................");
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    alert("Computer wins. Scissors beats paper.");
    rounds++;
    computerWins++;
    console.log("Computer wins. Scissors beats paper.");
    console.log(`Computer wins: ${computerWins}`);
    console.log(`Player wins: ${playerWins}`);
    console.log(`Round: ${rounds}`);
    console.log(".....................");
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    alert("Computer wins. Rock beats scissors.");
    rounds++;
    computerWins++;
    console.log("Computer wins. Rock beats scissors.");
    console.log(`Computer wins: ${computerWins}`);
    console.log(`Player wins: ${playerWins}`);
    console.log(`Round: ${rounds}`);
    console.log(".....................");
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    alert("Player wins. Scissors beats paper.");
    rounds++;
    playerWins++;
    console.log("Player wins. Scissors beats paper.");
    console.log(`Computer wins: ${computerWins}`);
    console.log(`Player wins: ${playerWins}`);
    console.log(`Round: ${rounds}`);
    console.log(".....................");
  } else {
    console.log("Error");
    console.log(`playerChoice = ${playerChoice}`);
    console.log(`computerChoice = ${computerChoice}`);
  }
  return [computerWins, playerWins];
}

function playGame() {
  computerChoice = getComputerChoice();
  playerChoice = getPlayerChoice();
  [computerWins, playerWins] = calcWinner();
}

function playAgain() {
  let again = prompt(
    "Do you want to play again? Type 'yes' or 'no'"
  ).toLowerCase();
  while (again === "yes" && again === "no") {
    again = prompt(
      "Incorrect response. Do you want to play again? Type 'yes' or 'no'"
    ).toLowerCase();
    console.log(`Again: ${again}`);
  }
  if (again === "yes") {
    rounds = 1;
    playGame();
  } else if (again === "no") {
    console.log("Thanks for playing.");
  } else {
    console.log("Error");
  }
  return [again, rounds];
}

playGame();

[again, rounds] = playAgain();
