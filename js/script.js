//Pseudocode//

// POTENTIAL IMPROVEMENT/FIX
// Change readOut.textContent() calls at the end of conditional blocks in the calcWinner() function
//  to a function that calculates and readOut.textContents all the 'final statements'
// Add readOut.textContent function to each end of round because it's hard to see the results in the console with the readOut.textContent popup open

// Creating DOM nodes for usage with Event Listener
const score = document.querySelector(".score");
const readOut = document.querySelector(".readOut");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const playAgain = document.querySelector(".playAgain");
const question = document.querySelector(".question");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");

// Create an array 'yesNo' for yes and no buttons
const yesNo = [yes, no];

// Make playAgain invisible at the start of the page
playAgain.style.visibility = "hidden";

yesNo.forEach((elem) =>
  elem.addEventListener("click", (elem) => (again = elem))
);

// Create an array 'RPS' containing strings: "rock","paper","scissors"
// Updated: array to contain DOM nodes
const RPS = [rock, paper, scissors];

// Create a variable 'rounds' that keeps track of how many rounds have been played.
let rounds = 1;

// Add variable wins of type 'Object' with two values: 'computerWins' and 'playerWins' with corresponding values
// Fix instead to be two variables
let computerWins = 0;
let playerWins = 0;

function getPlayerChoice() {
  let playerChoice = RPS.forEach(
    elem,
    elem.addEventListener("click", function () {
      playerChoice = elem;
    })
  );
}

// Define function getComputerChoice()  that creates a variable 'computerChoice' and assigns it a random choice string from 'RPS'
function getComputerChoice() {
  let computerChoice = RPS[Math.floor(Math.random() * RPS.length)];
  return computerChoice;
}

// Define function calcWinner() that uses conditional statements to determine the winner of the round
function calcWinner() {
  // if computerChoice is equal to playerChoice
  if (computerChoice === playerChoice) {
    //   -print "It's a tie"
    score.textContent = `Round: ${rounds}`;
    readOut.textContent = `It's a tie. You both chose ${playerChoice}.`;
    rounds++;
  }
  // else if playerChoice is equal to 'rock' and computerChoice is equal to 'paper'
  else if (playerChoice === rock && computerChoice === paper) {
    //   -print "Computer wins"
    rounds++;
    computerWins++;
    score.textContent = `Computer wins: ${computerWins}, Player wins: ${playerWins}, Round: ${rounds}`;
    readOut.textContent = "Computer wins. Paper beats rock.";
  }
  // else if playerChoice is equal to 'rock' and computerChoice is equal to 'scissors'
  else if (playerChoice === rock && computerChoice === scissors) {
    //   -print "Player wins"
    rounds++;
    playerWins++;
    score.textContent = `Computer wins: ${computerWins}, Player wins: ${playerWins}, Round: ${rounds}`;
    readOut.textContent = "Player wins. Rock beats scissors.";
  }
  // else if playerChoice is equal to 'paper' and computerChoice is equal to 'rock'
  else if (playerChoice === paper && computerChoice === rock) {
    //   -print "Player wins"
    rounds++;
    playerWins++;
    score.textContent = `Computer wins: ${computerWins}, Player wins: ${playerWins}, Round: ${rounds}`;
    readOut.textContent = "Player wins. Paper beats rock.";
  }
  // else if playerChoice is equal to 'paper' and computerChoice is equal to 'scissors'
  else if (playerChoice === paper && computerChoice === scissors) {
    //   -print "Computer wins"
    rounds++;
    computerWins++;
    score.textContent = `Computer wins: ${computerWins}, Player wins: ${playerWins}, Round: ${rounds}`;
    readOut.textContent = "Computer wins. Scissors beats paper.";
  }
  // else if playerChoice is equal to 'scissors' and computerChoice is equal to 'rock'
  else if (playerChoice === scissors && computerChoice === rock) {
    //   -print "Computer wins"
    rounds++;
    computerWins++;
    score.textContent = `Computer wins: ${computerWins}, Player wins: ${playerWins}, Round: ${rounds}`;
    readOut.textContent = "Computer wins. Scissors beats paper.";
  }
  // else if playerChoice is equal to 'scissors' and computerChoice is equal to 'paper'
  else if (playerChoice === scissors && computerChoice === paper) {
    //   -print "Player wins"
    rounds++;
    playerWins++;
    score.textContent = `Computer wins: ${computerWins}, Player wins: ${playerWins}, Round: ${rounds}`;
    readOut.textContent = "Player wins. Scissors beats paper.";
  } else {
    readOut.textContent = "Error. calWinner() function is not working.";
    console.log(`playerChoice = ${playerChoice}`);
    console.log(`computerChoice = ${computerChoice}`);
  }
  return [computerWins, playerWins];
}

// Define a function playGame() containing getComputerChoice() function and get playerChoice() functions
function playGame() {
  // Use for loop
  for (let i = 0; i < 5; i++) {
    computerChoice = getComputerChoice();
    playerChoice = RPS.forEach((elem) =>
      elem.addEventListener("click", function () {
        return playerChoice;
      })
    );
    // NEED TO FIX 'wins' variable to work either as object (line 108 or function call (here))
    // SOLUTION: Split 'wins' into both 'computerWins' and 'playerWins' variables
    [computerWins, playerWins] = calcWinner();
  }
  return computerWins, playerWins;
}

// Define a function playAgain() that creates a variable 'again' with an initial input value from prompt function reading: "Do you want to play again? Enter: 'y' or 'n'"
function playGameAgain() {
  let again;
  playAgain.style.visibility = "visible";

  //   -if 'again' is equal to 'yes'
  if (again === yes) {
    rounds = 1;
    playGame();
  }
  //   -else if 'again' is equal to 'no'
  //-print "Thanks for playing"
  else if (again === no) {
    readOut.textContent = "Thanks for playing.";
  }
  //   else
  else {
    readOut.textContent = "Error. playGameAgain() function is not working.";
  }
  return [again, rounds];
}

// Call playGame function()
playGame();

//Call playAgain() function
[again, rounds] = playGameAgain();
