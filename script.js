const computerPlay =() => {
    let random = Math.floor(Math.random() * 3);
    if (random === 1){
        return 'rock';
    } else if(random === 2){
        return 'paper';
    } else {
        return 'scissors';
    }
}
const playerSelection = choice => {
    if (choice.toLowerCase() === 'rock') {
        return 'rock';
    } else if (choice.toLowerCase() === 'paper') {
        return 'paper';
    } else if (choice.toLowerCase() === 'scissors' || choice.toLowerCase() === 'scissor') {
        return 'scissors'
    } else {
        return 'Please choose between rock,paper, or scissors.'
    }
}

const playTheGame = (computerPlay, playerSelection) => {
    if (playerSelection === 'rock' && computerPlay === 'rock') {
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerPlay ==='paper') {
        return 'Computer Win';
    } else if (playerSelection === 'rock' && computerPlay === 'scissors') {
        return 'Player Win!';
    }
    if (playerSelection === 'paper' && computerPlay === 'rock') {
        return 'Player Win';
    } else if (playerSelection === 'paper' && computerPlay === 'paper') {
        return 'It\'s a tie';
    } else if (playerSelection === 'paper' && computerPlay === 'scissors') {
        return 'Computer Win';
    }
    if (playerSelection === 'scissors' && computerPlay === 'rock') {
        return 'Computer Win';
    } else if (playerSelection === 'scissors' && computerPlay ==='paper') {
        return 'Player Win';
    } else if (playerSelection === 'scissors' && computerPlay === 'scissors') {
        return 'It\'s a tie';
    }
}