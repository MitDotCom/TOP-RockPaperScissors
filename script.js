const rock = document.querySelector(".rockbtn");
const paper = document.querySelector(".paperbtn");
const scissors = document.querySelector(".scissorsbtn");
const playAgain = document.querySelector(".playAgain");
const score = document.querySelector(".score");
const readOut = document.querySelector(".readOut");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");

let RPS = ["rock", "paper", "scissors"];
let rounds = 1;
let playerChoice;
let computerWins = 0;
let playerWins = 0;
let again;

function getComputerChoice() {
  let computerChoice = RPS[Math.floor(Math.random() * RPS.length)];
  return computerChoice;
}

function playRound() {
  playAgain.style.visibility = "hidden";
  rock.addEventListener("click", function () {
    let computerChoice = getComputerChoice();
    playerChoice = rock.textContent.toLowerCase();
    [computerWins, playerWins] = calcWinner(computerChoice, playerChoice);
    console.log(
      `Player Choice: ${playerChoice}, Computer Choice: ${computerChoice}`
    );
    if (rounds === 5) {
      [again, rounds] = playGameAgain();
    }
  });

  paper.addEventListener("click", function () {
    let computerChoice = getComputerChoice();
    playerChoice = paper.textContent.toLowerCase();
    [computerWins, playerWins] = calcWinner(computerChoice, playerChoice);
    console.log(
      `Player Choice: ${playerChoice}, Computer Choice: ${computerChoice}`
    );
    if (rounds === 5) {
      [again, rounds] = playGameAgain();
    }
  });

  scissors.addEventListener("click", function () {
    let computerChoice = getComputerChoice();
    playerChoice = scissors.textContent.toLowerCase();
    [computerWins, playerWins] = calcWinner(computerChoice, playerChoice);
    console.log(
      `Player Choice: ${playerChoice}, Computer Choice: ${computerChoice}`
    );
    if (rounds === 5) {
      [again, rounds] = playGameAgain();
    }
  });
}

function calcWinner(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    readOut.textContent = `It's a tie. You both chose ${playerChoice}.`;
    rounds++;
    score.textContent = `Computer wins: ${computerWins} Player wins: ${playerWins} Round: ${rounds}`;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    readOut.textContent = "Computer wins. Paper beats rock.";
    rounds++;
    computerWins++;
    score.textContent = `Computer wins: ${computerWins} Player wins: ${playerWins} Round: ${rounds}`;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    readOut.textContent = "Player wins. Rock beats scissors.";
    rounds++;
    playerWins++;
    score.textContent = `Computer wins: ${computerWins} Player wins: ${playerWins} Round: ${rounds}`;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    readOut.textContent = "Player wins. Paper beats rock.";
    rounds++;
    playerWins++;
    score.textContent = `Computer wins: ${computerWins} Player wins: ${playerWins} Round: ${rounds}`;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    readOut.textContent = "Computer wins. Scissors beats paper.";
    rounds++;
    computerWins++;
    score.textContent = `Computer wins: ${computerWins} Player wins: ${playerWins} Round: ${rounds}`;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    readOut.textContent = "Computer wins. Rock beats scissors.";
    rounds++;
    computerWins++;
    score.textContent = `Computer wins: ${computerWins} Player wins: ${playerWins} Round: ${rounds}`;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    readOut.textContent = "Player wins. Scissors beats paper.";
    rounds++;
    playerWins++;
    score.textContent = `Computer wins: ${computerWins} Player wins: ${playerWins} Round: ${rounds}`;
  } else {
    readOut.textContent = "calcWinner() Error";
    readOut.textContent = `playerChoice = ${playerChoice}`;
    readOut.textContent = `computerChoice = ${computerChoice}`;
  }
  return [computerWins, playerWins];
}

function playGameAgain() {
  playAgain.style.visibility = "visible";

  yes.addEventListener("click", function () {
    again = yes.textContent.toLowerCase();
    if (again === "yes") {
      rounds = 1;
      playerWins = 0;
      computerWins = 0;
      readOut.textContent = "";
      score.textContent = `Computer wins: ${computerWins} Player wins: ${playerWins} Round: ${rounds}`;
      playRound();
    } else if (again === "no") {
      readOut.textContent = "Thanks for playing.";
    } else {
      readOut.textContent = "playGameAgain() Error";
    }
  });
  no.addEventListener("click", function () {
    again = no.textContent.toLowerCase();
    if (again === "yes") {
      rounds = 1;
      playRound();
    } else if (again === "no") {
      readOut.textContent = "Thanks for playing.";
    } else {
      readOut.textContent = "playGameAgain() Error";
    }
  });

  return [again, rounds];
}

playRound();
