//Pseudocode//

// POTENTIAL IMPROVEMENT/FIX
// Change console.log() calls at the end of conditional blocks in the calcWinner() function
//  to a function that calculates and console.logs all the 'final statements'
// Add alert function to each end of round because it's hard to see the results in the console with the alert popup open

// Create an array 'RPS' containing strings: "rock","paper","scissors"
const RPS = ['rock','paper','scissors']

// Create a variable 'rounds' that keeps track of how many rounds have been played.
let rounds = 0;

// Define function getComputerChoice()  that creates a variable 'computerChoice' and assigns it a random choice string from 'RPS'
function getComputerChoice() {
    let computerChoice = RPS[Math.floor(Math.random() * RPS.length)];
    return computerChoice;
}
// Define a function getPlayerChoice() that creates a variable playerChoice with initial input value from prompt function reading: "Enter either: 'rock', 'paper', or 'scissors'"
// -I also added the toLowerCase method to make the user value 'case insensitive'
function getPlayerChoice() {
    alert(`Round: ${rounds}!`);
    let playerChoice = prompt("Please enter your choice: 'rock','paper', or 'scissors'.").toLowerCase();
//   -if value is not equal to either 'rock' or 'paper' or 'scissors', re-prompt user for correct input value
    while (!(RPS.includes(playerChoice))) {
        playerChoice = prompt("That is not a valid choice. Please enter your choice: 'rock','paper', or 'scissors'.").toLowerCase();
        console.log(`You entered: ${playerChoice}`);
    }
    return playerChoice;
}
// Define function calcWinner() that uses conditional statements to determine the winner of the round
function calcWinner() {
// Add variable wins of type 'Object' with two values: 'computerWins' and 'playerWins' with corresponding values
// Fix instead to be two variables
    let computerWins = 0;
    let playerWins = 0;
// if computerChoice is equal to playerChoice
    if (computerChoice === playerChoice) {
//   -print "It's a tie"
        alert(`It's a tie. You both chose ${playerChoice}.`);
        console.log(`It's a tie. You both chose ${playerChoice}.`);
        rounds++;
        console.log(`Round: ${rounds}`);
    }
// else if playerChoice is equal to 'rock' and computerChoice is equal to 'paper'
    else if ((playerChoice === 'rock') && (computerChoice === 'paper')) {
//   -print "Computer wins"
        alert("Computer wins. Paper beats rock.");
        rounds++;
        computerWins++;
        console.log("Computer wins. Paper beats rock.");
        console.log(".....................");
        console.log(`Computer wins: ${computerWins}`);
        console.log(`Player wins: ${playerWins}`);
        console.log(`Round: ${rounds}`);
    }
// else if playerChoice is equal to 'rock' and computerChoice is equal to 'scissors'
    else if ((playerChoice === 'rock') && (computerChoice === 'scissors')) {
    //   -print "Player wins"
        alert("Player wins. Rock beats scissors.");
        rounds++;
        playerWins++;
        console.log("Player wins. Rock beats scissors.");
        console.log(".....................");
        console.log(`Computer wins: ${computerWins}`);
        console.log(`Player wins: ${playerWins}`);
        console.log(`Round: ${rounds}`);
    }
// else if playerChoice is equal to 'paper' and computerChoice is equal to 'rock'
    else if ((playerChoice === 'paper') && (computerChoice === 'rock')) {
    //   -print "Player wins"
        alert("Player wins. Paper beats rock.");
        rounds++;
        playerWins++;
        console.log("Player wins. Paper beats rock.");
        console.log(".....................");
        console.log(`Computer wins: ${computerWins}`);
        console.log(`Player wins: ${playerWins}`);
        console.log(`Round: ${rounds}`);
    }
// else if playerChoice is equal to 'paper' and computerChoice is equal to 'scissors'
    else if ((playerChoice === 'paper') && (computerChoice === 'scissors')) {
//   -print "Computer wins"
        alert("Computer wins. Scissors beats paper.");
        rounds++;
        computerWins++;
        console.log("Computer wins. Scissors beats paper.");
        console.log(".....................");
        console.log(`Computer wins: ${computerWins}`);
        console.log(`Player wins: ${playerWins}`);
        console.log(`Round: ${rounds}`);
    }
// else if playerChoice is equal to 'scissors' and computerChoice is equal to 'rock'
    else if ((playerChoice === 'scissors') && (computerChoice === 'rock')) {
//   -print "Computer wins"
        alert("Computer wins. Rock beats scissors.");
        rounds++;
        computerWins++;
        console.log("Computer wins. Rock beats scissors.");
        console.log(".....................");
        console.log(`Computer wins: ${computerWins}`);
        console.log(`Player wins: ${playerWins}`);
        console.log(`Round: ${rounds}`);
    }
// else if playerChoice is equal to 'scissors' and computerChoice is equal to 'paper'
    else if ((playerChoice === 'scissors') && (computerChoice === 'paper')) {
//   -print "Player wins"
        alert("Player wins. Scissors beats paper.");
        rounds++;
        playerWins++;
        console.log("Player wins. Scissors beats paper.");
        console.log(".....................");
        console.log(`Computer wins: ${computerWins}`);
        console.log(`Player wins: ${playerWins}`);
        console.log(`Round: ${rounds}`);
    }
    else {
        console.log("Error");
        console.log(`playerChoice = ${playerChoice}`);
        console.log(`computerChoice = ${computerChoice}`);
    }
    return [
        computerWins,
        playerWins
    ];
}
// Define a function playGame() containing getComputerChoice() function and get playerChoice() functions
function playGame() {
    // Use for loop
    for (let i = 0; i < 6; i++) {
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
// NEED TO FIX 'wins' variable to work either as object (line 108 or function call (here))
// SOLUTION: Split 'wins' into both 'computerWins' and 'playerWins' variables   
        [computerWins,playerWins] = calcWinner();
    }
}
// Define a function playAgain() that creates a variable 'again' with an initial input value from prompt function reading: "Do you want to play again? Enter: 'y' or 'n'"
function playAgain() {
    let again = prompt("Do you want to play again? Type 'yes' or 'no'");
//   -while again is not equal to either 'yes' or 'no'
    while (!(again === "yes") || (again === "no")) {
//     -prompt user with same text prompt and update 'again' variable with the users input
    again = prompt("Incorrect response. Do you want to play again? Type 'yes' or 'no'").toLowerCase();
    }
//   -if 'again' is equal to 'yes'
    if (again === "yes") {
        playGame();
    }
//   else
    else {
//     -print "Thanks for playing"
        console.log("Thanks for playing.")
    }
    return again;
}

// Call playGame function()
playGame();
//Call playAgain() function
again = playAgain();