//Pseudocode//

// Create an array 'RPS' containing strings: "rock","paper","scissors"
const RPS = ['rock','paper','scissors']

// Define a function play() containing getComputerChoice() function and get playerChoice() functions
function play() {
    getComputerChoice();
    getPlayerChoice();
}
// Define function getComputerChoice()  that creates a variable 'computerChoice' and assigns it a random choice string from 'RPS'
function getComputerChoice() {
    let computerChoice = RPS[Math.floor(Math.random() * RPS.length)];
    console.log(computerChoice);
}
// Call getComputerChoice()
getComputerChoice();
// Define a function getPlayerChoice() that creates a variable playerChoice with initial input value from prompt function reading: "Enter either: 'rock', 'paper', or 'scissors'"
// -I also added the toLowerCase method to make the user value 'case insensitive'
function getPlayerChoice() {
    let playerChoice = prompt("Please enter your choice: 'rock','paper', or 'scissors'.").toLowerCase();
//   -if value is not equal to either 'rock' or 'paper' or 'scissors', re-prompt user for correct input value
    while (!(playerChoice in RPS)) {
        playerChoice = prompt("That is not a valid choice. Please enter your choice: 'rock','paper', or 'scissors'.").toLowerCase();
    }
}
//  
// if computerChoice is equal to playerChoice
//   -print "It's a tie"
//   -break
// else if playerChoice is equal to 'rock' and computerChoice is equal to 'paper'
//   -print "Computer wins"
//   -break
// else if playerChoice is equal to 'rock' and computerChoice is equal to 'scissors'
//   -print "Player wins"
//   -break
// else if playerChoice is equal to 'paper' and computerChoice is equal to 'rock'
//   -print "Player wins"
//   -break
// else if playerChoice is equal to 'paper' and computerChoice is equal to 'scissors'
//   -print "Computer wins"
//   -break
// else if playerChoice is equal to 'scissors' and computerChoice is equal to 'rock'
//   -print "Computer wins"
//   -break
// else if playerChoice is equal to 'scissors' and computerChoice is equal to 'paper'
//   -print "Player wins"
//   -break
//
// Define a function playAgain() that creates a variable 'again' with an initial input value from prompt function reading: "Do you want to play again? Enter: 'y' or 'n'"
//   -while again is not equal to either 'y' or 'no'
//     -prompt user with same text prompt and update 'again' variable with the users input
//   -if 'again' is equal to 'y'
//     -call play() function
//   else
//     -print "Thanks for playing"