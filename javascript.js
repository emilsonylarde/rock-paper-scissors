function getComputerChoice(){
    const pick = ['rock', 'paper', 'scissor']
    return pick[Math.floor(Math.random() * pick.length)]
}

function playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
        return `Its a tie! You both chose the same. ${playerChoice}`;
    }
    else if (playerChoice === "paper" && computerChoice === "rock"){
        return  `You Win! Paper beats Rock`;
    }
    else if(playerChoice === "rock" && computerChoice === "scissors"){
        return `You Win! Rock beats Scissors`;
    }
    else if(playerChoice === "scissors" && computerChoice === "paper"){
        return `You Win! Scissors beat Paper`;
    }
    else{
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}

function game(playerScore, computerScore){
    for (let round = 5; round<5;round++){
        
    }
}

let playerScore = 0;
let computerScore = 0;
const playerChoice = prompt("Choose between rock, paper, or scissors: ");
const computerChoice = getComputerChoice();

console.log(game())