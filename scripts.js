/* Pseudocode
A function needs to return a random string of rock paper or scissor
*/

function computerChoice() {
    let x = Math.floor(Math.random() * 3)

    if (x === 0) {
        return "Rock"
    } else if (x === 1) {
        return "paper"
    } else if (x === 2) {
        return "scissor"
    } else {
        return "error"
    }
}
console.log(computerChoice())

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


console.log(getHumanChoice())