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
        return "You Lose! Sissors beats paper!";
}

function game(){
    let playerscore = 0;
    let computerscore = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper or Sissors?").toLowerCase();
        let computerSelection = getComputerChoice();
        let string = playRound(playerSelection, computerSelection);
        console.log(string);

        if(string.slice(0,7) === "You Win")
            playerscore++;
        else if(string.slice(0,8) === "You Lose")
            computerscore++;
    }

    if(playerscore > computerscore){
        console.log("You Won! Player defeated the AI with the score of " + playerscore + " to " + computerscore);
    }
    else if(computerscore > playerscore){
        console.log("You Lost! The AI defeated Player with the score of " + computerscore + " to " + playerscore);
    }
    else{
        console.log("Tie! Both the Player and the AI had a score of " + playerscore);
    }
}

game();