const rock = document.querySelector(".rockbtn");
const paper = document.querySelector(".paperbtn");
const scissors = document.querySelector(".scissorsbtn");
const playAgain = document.querySelector(".playAgain");
const playerScoreSpan = document.querySelector(".playerScoreSpan");
const computerScoreSpan = document.querySelector(".computerScoreSpan");
const readOut = document.querySelector(".readOut");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");

const rockSound = new Audio("./sounds/rock.mp3");
rockSound.volume = 0.2;
const paperSound = new Audio("./sounds/paper.mp3");
paperSound.volume = 0.3;
const scissorsSound = new Audio("./sounds/scissors.mp3");
scissorsSound.volume = 0.3;

const RPS = ["rock", "paper", "scissors"];

let rounds = 0;
let playerChoice;
let computerWins = 0;
let playerWins = 0;

function resetGame() {
  rounds = 0;
  playerChoice = "";
  computerWins = 0;
  playerWins = 0;
}

function getComputerChoice() {
  let computerChoice = RPS[Math.floor(Math.random() * RPS.length)];
  return computerChoice;
}

function playRound() {

  playAgain.style.visibility = "hidden";

  rock.addEventListener("click", function (e) {
    e.stopImmediatePropagation();
    rockSound.load();
    rockSound.play();
    setTimeout(() => {
      rockSound.pause();
    },1000);
    let computerChoice = getComputerChoice();
    playerChoice = "rock";
    [computerWins, playerWins] = calcWinner(computerChoice, playerChoice);
    console.log(rounds);
    if ((rounds >= 5 && playerWins > computerWins) || (rounds >= 5 && playerWins < computerWins)) {
      playGameAgain();
      rock.style.visibility = "hidden";
      paper.style.visibility = "hidden";
      scissors.style.visibility = "hidden";
    }
  });

  paper.addEventListener("click", function (e) {
    e.stopImmediatePropagation();
    paperSound.load();
    paperSound.play();
    setTimeout(() => {
      paperSound.pause();
    },1000);
    let computerChoice = getComputerChoice();
    playerChoice = "paper";
    [computerWins, playerWins] = calcWinner(computerChoice, playerChoice);
    console.log(rounds);
    if ((rounds >= 5 && playerWins > computerWins) || (rounds >= 5 && playerWins < computerWins)) {
      playGameAgain();
      rock.style.visibility = "hidden";
      paper.style.visibility = "hidden";
      scissors.style.visibility = "hidden";
    }
  });

  scissors.addEventListener("click", function (e) {
    e.stopImmediatePropagation();
    scissorsSound.load();
    scissorsSound.play();
    setTimeout(() => {
      scissorsSound.pause();
    },1000);
    let computerChoice = getComputerChoice();
    playerChoice = "scissors";
    [computerWins, playerWins] = calcWinner(computerChoice, playerChoice);
    console.log(rounds);
    if ((rounds >= 5 && playerWins > computerWins) || (rounds >= 5 && playerWins < computerWins)) {
      playGameAgain();
      rock.style.visibility = "hidden";
      paper.style.visibility = "hidden";
      scissors.style.visibility = "hidden";
    }
  });
};

function calcWinner(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    rounds += 1;
    readOut.textContent = `It's a tie. You both chose ${playerChoice}.`;
    playerScoreSpan.textContent = `${playerWins}`;
    computerScoreSpan.textContent = `${computerWins}`;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    rounds += 1;
    readOut.textContent = "Computer wins. Paper beats rock.";
    computerWins += 1;
    playerScoreSpan.textContent = `${playerWins}`;
    computerScoreSpan.textContent = `${computerWins}`;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    rounds += 1;
    readOut.textContent = "Player wins. Rock beats scissors.";
    playerWins += 1;
    playerScoreSpan.textContent = `${playerWins}`;
    computerScoreSpan.textContent = `${computerWins}`;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    rounds += 1;
    readOut.textContent = "Player wins. Paper beats rock.";
    playerWins += 1;
    playerScoreSpan.textContent = `${playerWins}`;
    computerScoreSpan.textContent = `${computerWins}`;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    rounds += 1;
    readOut.textContent = "Computer wins. Scissors beats paper.";
    computerWins += 1;
    playerScoreSpan.textContent = `${playerWins}`;
    computerScoreSpan.textContent = `${computerWins}`;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    rounds += 1;
    readOut.textContent = "Computer wins. Rock beats scissors.";
    computerWins += 1;
    playerScoreSpan.textContent = `${playerWins}`;
    computerScoreSpan.textContent = `${computerWins}`;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    rounds += 1;
    readOut.textContent = "Player wins. Scissors beats paper.";
    playerWins += 1;
    playerScoreSpan.textContent = `${playerWins}`;
    computerScoreSpan.textContent = `${computerWins}`;
  } else {
    readOut.textContent = "calcWinner() Error";
    console.log(`playerChoice: ${playerChoice}, computerChoice: ${computerChoice}`)
  }
  return [computerWins, playerWins];
}

function playGameAgain() {

  playAgain.style.visibility = "visible";

  yes.addEventListener("click", function () {
    resetGame();
    readOut.textContent = "Ready?";
    playerScoreSpan.textContent = `${playerWins}`;
    computerScoreSpan.textContent = `${computerWins}`;
    rock.style.visibility = "visible";
    paper.style.visibility = "visible";
    scissors.style.visibility = "visible";
    playRound();
  });

  no.addEventListener("click", function () {
    readOut.textContent = "Thanks for playing.";
    rock.style.visibility = "hidden";
    paper.style.visibility = "hidden";
    scissors.style.visibility = "hidden";
  });
};

playRound();