let playerScore = 0;
let drawCount = 0;
let computerScore = 0;

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
    computerSelection = computerPlays();
    if (playerSelection === computerSelection) {
        drawCount++
        displayDrawResults();
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || 
            playerSelection === 'scissors' && computerSelection === 'rock' || 
            playerSelection === 'paper' && computerSelection === 'scissors') {
                computerScore++;
                switch(computerScore) {
                    case 1:
                        displayComputerResult('1');
                        battleResultsComp(`Computer: ${computerSelection} Beats Player's: ${playerSelection} for its first point`);
                    break;
                    case 2:
                        displayComputerResult('2');
                        battleResultsComp(`Computer: ${computerSelection} Beats Player's: ${playerSelection}. The match is beginning to heat up!`);
                    break;
                    case 3:
                        displayComputerResult('3');
                        battleResultsComp(`Computer: ${computerSelection} Beats Player's: ${playerSelection}. The Battle is beginning to intensify!`);
                    break;
                    case 4:
                        displayComputerResult('4');
                        battleResultsComp(`Computer: ${computerSelection} Beats Player's: ${playerSelection}. The climax is approaching and the end is nigh for one of these contestants!`);
                    break;
                    case 5:
                        displayComputerResult('5');
                        battleResultsComp(`Computer: ${computerSelection} Beats Player's: ${playerSelection} for its final point and has gained Victory!!!`);
                    break;
                }
                if(computerScore === 5 && computerScore > playerScore) {
                    winnerResults('Computer Has Achieved Glory And Has Triumphed Over The Power Of Mankind!!');
                }
    } else {
        playerScore++;
        switch(playerScore) {
            case 1:
                displayPlayerResult('1');
                battleResultsPlayer(`Player's: ${playerSelection} achieves a win over Computers: ${computerSelection} for their first point!`);
            break;
            case 2:
                displayPlayerResult('2');
                battleResultsPlayer(`Player's: ${playerSelection} achieves a win over Computers: ${computerSelection}. Things are looking intense.`);
            break;
            case 3:
                displayPlayerResult('3');
                battleResultsPlayer(`Player's: ${playerSelection} achieves a win over Computers: ${computerSelection}. How will things go from here.`);
            break;
            case 4:
                displayPlayerResult('4');
                battleResultsPlayer(`Player's: ${playerSelection} achieves a win over Computers: ${computerSelection}. Player is showing thier full strength !!`);
            break;
            case 5:
                displayPlayerResult('5');
                battleResultsPlayer(`Player's: ${playerSelection} achieves a win over Computers: ${computerSelection} and has achieved Victory !!`);
            break;
        }
        if(playerScore === 5 && playerScore > computerScore) {
            winnerResults('Player Has Won The Match and Has Gained Glory!!');
        }
    }
    
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    oneGame();
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    oneGame();
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    oneGame();
});
const resetGameButton = document.querySelector('#reset');
resetGameButton.addEventListener('click', () => {
    playerScore = 0;
    drawCount = 0;
    computerScore = 0;
    displayPlayerResult('0')
    displayDrawResults();
    displayComputerResult('0');
    originDisplayText();
});
const playerResults = document.querySelector('#player-score');
const displayPlayerResult = (playerResult) => {
    playerResults.textContent = playerResult;
}
const computerResults = document.querySelector('#computer-score');
const displayComputerResult = (computerResult) => {
    computerResults.textContent = computerResult;
}
const drawResults = document.querySelector('#draw-score');
const displayDrawResults = () => {
    drawResults.textContent = drawCount.toString();
}
const battleDisplayPlayerWin = document.querySelector('.player-win-battle');
const battleResultsPlayer = (battleStringPlayer) => {
    battleDisplayPlayerWin.textContent = battleStringPlayer;
}
const battleDisplayCompWin = document.querySelector('#computer-win-battle');
const  battleResultsComp = (battleStringComp) => {
    battleDisplayCompWin.textContent = battleStringComp;
}
const winnerDisplay = document.querySelector('.explanation');
const winnerResults = (winnerTitleScreen) => {
    winnerDisplay.textContent = winnerTitleScreen;
}
const originDisplay = document.querySelector('#title');
const originDisplayText = () => {
    originDisplay.textContent = 'First to 5 Wins';
}