let playerWin = 0;
let draw = 0;
let computerWin = 0;
const computerPlays = () => {
    let gen = Math.floor(Math.random() * 3);
    const random = {
        0: 'rock',
        1: 'scissors',
        2: 'paper'
    }
    return random[gen];
}
const oneGame = () => {
    const comp = 'Computer: ';
    const player = 'Player: ';
    const drawCount = 'Draws: ';
    computerSelection = computerPlays();
    if (playerSelection === computerSelection) {
        draw++;
        console.log('It\'s a draw!');
        console.log(drawCount + draw);
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
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    console.log(playerSelection);
    oneGame();
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', ()=> {
    playerSelection = 'paper';
    console.log(playerSelection);
    oneGame();
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    console.log(playerSelection);
    oneGame();
});
const playerScore = 
let playerSelection = '';