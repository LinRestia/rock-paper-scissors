let playerWin = 0;
let computerWin = 0;
const computerPlays = () => {
    gen = Math.floor(Math.random() * 3);
    const random = {
        0: 'rock',
        1: 'scissors',
        2: 'paper'
    }
    return random[gen];
}
const oneGame = () => {
    const comp = 'Computer: ';
    const player = 'Player: '
    computerSelection = computerPlays();
    if (playerSelection === computerSelection) {
        console.log('Its a Draw!');
        return 'Draw';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerWin++;
        console.log('You Lose :(');
        console.log(comp + computerWin);
        return 'Loss';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerWin++
        console.log('You Win :)');
        console.log(player + playerWin);
        return 'Win';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerWin++;
        console.log('You Lose :(');
        console.log(comp + computerWin);
        return 'Lose';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWin++;
        console.log('You Win :)');
        console.log(player + playerWin);
        return 'Win';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerWin++;
        console.log('You Lose :(');
        console.log(comp + computerWin);
        return 'Lose';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWin++;
        console.log('You Win :)');
        console.log(player + playerWin);
        return 'Win';
    }
}
const game = () => {
    for (let i = 0; i < 5; i++) {
        oneGame();
    } if (playerWin > computerWin) {
        console.log('It\'s the player\'s Win!')
    } else if (playerWin === computerWin) {
        console.log('Its a Draw :o');
    } else if (playerWin < computerWin) {
        console.log('Its the Computers\'s Win!');
    }
    return 'end';
}
const playerSelection = prompt('choose between rock, paper and scissors');