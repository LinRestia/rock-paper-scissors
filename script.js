const computerplay = () => {
    let random = Math.floor(Math.random * 3)
    if (random === 1) {
        return 'rock';
    } else if (random === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

const oneRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection ==='paper') {
        return 'You Lose :(';
    } else if (playerSelection === 'rock' && computerSelection ==='scissors') {
        return 'You Win :)';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Tie!' 
    } else if (playerSelection ==='paper' && computerSelection === 'scissors') {
        return 'You Lose :(';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win :)';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Tie!';
    } else if (playerSelection === 'scissors' && computerSelection ==='rock') {
        return 'You Lose :(';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win :)';
    } else if (playerSelection ==='scissors' && computerSelection ==='scissors') {
        return 'Tie!';
    }
}

const playerSelection = "paper";
const computerSelection = computerplay();
console.log(oneRound(playerSelection, computerSelection));