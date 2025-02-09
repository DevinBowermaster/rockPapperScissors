/* Pseudocode
A function needs to return a random string of rock paper or scissor
*/

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3)

    if (x === 0) {
        return "rock"
    } else if (x === 1) {
        return "paper"
    } else if (x === 2) {
        return "scissor"
    } else {
        return "error"
    }
}


/* Pseudocdoe
A prompt needs to be created to have user choose rock paper or scissor 
the value needs to be stored and returned 
if a number or invalid string is entered user must reenter 
*/

function getHumanChoice() {
    let message = prompt("choose rock paper or scissors", " ").toLowerCase()

    if (message === "rock" || message === "paper" || message === "scissor") {
        return message;
    } else {
        return getHumanChoice()
    }
}




/* Pseudocode
Create two variables for user and computer score
*/



/*Psuedocode
Have the game start 
get each players selection 
Evaluate against each other rock beats scissors, paper beats rock, scissors beats paper.
If selections are the same, game starts over
have the winner announced
increase the score of the winner
*/


let humanScore = 0;
let computerScore = 0;
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame() {

    playRound(computerSelection, humanSelection);



    function playRound(computerChoice, humanChoice) {
        if (computerChoice == "rock") {
            if (humanChoice == "scissor") {
                computerScore++
                return "Computer Wins"
            } else {
                humanScore++
                return "Player Wins"


            }

        } else if (computerChoice == "paper") {
            if (humanChoice == "rock") {
                computerScore++
                return "Computer Wins"
            } else {
                humanScore++
                return "Player Wins"
            }

        } else if (computerChoice == "scissor") {
            if (humanChoice == "paper") {
                computerScore++
                return "Computer Wins"
            } else {
                humanScore++
                return "Player Wins"
            }
        } else {

        }
    }

    if (computerScore == 5) {
        console.log("Computer Wins")
    } else if (humanScore == 5) {
        console.log("Player Wins")
    } else {
        anotherRound()
    }
}

playGame()

function anotherRound() {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playGame()
}