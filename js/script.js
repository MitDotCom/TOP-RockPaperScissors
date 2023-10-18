const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playAgain = document.querySelector(".playAgain");

let RPS = [rock, paper, scissors];
let rounds = 1;
let playerChoice;
let computerWins = 0;
let playerWins = 0;

function getComputerChoice() {
  let computerChoice = RPS[Math.floor(Math.random() * RPS.length)];
  return computerChoice;
}

function playRound(playerChoice) {
  computerChoice = getComputerChoice();
}

function main() {
  rock.addEventListener("click", function () {
    playerChoice = rock.textContent;
    playRound(playerChoice);
  });

  paper.addEventListener("click", function () {
    playerChoice = paper.textContent;
    playRound(playerChoice);
  });

  scissors.addEventListener("click", function () {
    playerChoice = scissors.textContent;
    playRound(playerChoice);
  });
}

function calcWinner(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    console.log(`It's a tie. You both chose ${playerChoice}.`);
    console.log(`It's a tie. You both chose ${playerChoice}.`);
    rounds++;
    console.log(`Round: ${rounds}`);
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    console.log("Computer wins. Paper beats rock.");
    rounds++;
    computerWins++;
    console.log(`Computer wins: ${computerWins}`);
    console.log(`Player wins: ${playerWins}`);
    console.log(`Round: ${rounds}`);
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log("Player wins. Rock beats scissors.");
    rounds++;
    playerWins++;
    console.log(`Computer wins: ${computerWins}`);
    console.log(`Player wins: ${playerWins}`);
    console.log(`Round: ${rounds}`);
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log("Player wins. Paper beats rock.");
    rounds++;
    playerWins++;
    console.log(`Computer wins: ${computerWins}`);
    console.log(`Player wins: ${playerWins}`);
    console.log(`Round: ${rounds}`);
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    console.log("Computer wins. Scissors beats paper.");
    rounds++;
    computerWins++;
    console.log(`Computer wins: ${computerWins}`);
    console.log(`Player wins: ${playerWins}`);
    console.log(`Round: ${rounds}`);
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    console.log("Computer wins. Rock beats scissors.");
    rounds++;
    computerWins++;
    console.log(`Computer wins: ${computerWins}`);
    console.log(`Player wins: ${playerWins}`);
    console.log(`Round: ${rounds}`);
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log("Player wins. Scissors beats paper.");
    rounds++;
    playerWins++;
    console.log(`Computer wins: ${computerWins}`);
    console.log(`Player wins: ${playerWins}`);
    console.log(`Round: ${rounds}`);
  } else {
    console.log("Error");
    console.log(`playerChoice = ${playerChoice}`);
    console.log(`computerChoice = ${computerChoice}`);
  }
  return [computerWins, playerWins];
}

function playAgain() {
  playAgain.style.visibility = "visible";
  //   let again = prompt(
  //     "Do you want to play again? Type 'yes' or 'no'"
  //   ).toLowerCase();
  while (again === "yes" && again === "no") {
    again = prompt(
      "Incorrect response. Do you want to play again? Type 'yes' or 'no'"
    ).toLowerCase();
    console.log(`Again: ${again}`);
  }
  if (again === "yes") {
    rounds = 1;
    playRound();
  } else if (again === "no") {
    console.log("Thanks for playing.");
  } else {
    console.log("Error");
  }
  return [again, rounds];
}

playRound(playerChoice);

[again, rounds] = playAgain();
