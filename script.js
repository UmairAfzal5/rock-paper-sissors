//function that will return rock paper or sissor for the AI
//function that takes in the computer selection and playerSelection then return a string to declare who lost

function getComputerChoice(){
    let random = Math.floor(Math.random()* 3)


    if(random === 0)
        return 'rock';
    else if(random === 1)
        return 'paper';
    else
        return 'sissors';
}

function playRound (playerSelection, computerSelection){
    if(playerSelection === computerSelection)
        return "Tie!"
    else if(playerSelection === "rock" && computerSelection === "sissors")
        return "You Win! Rock beats Sissors";
    else if(playerSelection === "rock" && computerSelection === "paper")
        return "You Lose! Paper beats Rock";
    else if(playerSelection === "sissors" && computerSelection === "paper")
        return "You Win! Sissors beats paper";
    else if(playerSelection === "sissors" && computerSelection === "rock")
        return "You Lose! Rock beats Sissors";
    else if(playerSelection === "paper" && computerSelection === "rock")
        return "You Win! Paper beats Rock";
    else 
        return "you Lose! Sissors beats paper!";
}

const playerSelection = "paper";
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
 console.log(computerSelection);