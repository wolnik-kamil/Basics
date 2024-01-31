const scoreDisplay = document.querySelector('#scoreDispaly');

const score = JSON.parse(localStorage.getItem('score'));
function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'scissors') {
        if(computerMove === 'rock') {
            result = 'You lose';
        }
        else if(computerMove === 'paper') {
            result = 'You win';
        }
        else if(computerMove === 'scissors') {
            result = 'You draw';
        }
    }
    if (playerMove === 'paper') {
        if(computerMove === 'rock') {
            result = 'You win';
        }
        else if(computerMove === 'paper') {
            result = 'You draw';
        }
        else if(computerMove === 'scissors') {
            result = 'You lose';
        }
    }
    if (playerMove === 'rock') {
        if(computerMove === 'rock') {
            result = 'You draw';
        }
        else if(computerMove === 'paper') {
            result = 'You lose';
        }
        else if(computerMove === 'scissors') {
            result = 'You win';
        }
    }
    if(result==='You win') {
        score.win += 1;
    } else if(result==='You lose') {
        score.lose += 1;
    }
    else if(result==='You draw') {
        score.draw += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}!
    Wins:${score.win} | Loses:${score.lose} | Draws:${score.draw}`);
   //scoreDisplay.innerHTML = ``
    console.log(score);
}



function pickComputerMove() {
    const randomNr = Math.random();

    let computerMove = '';

    if(randomNr >= 0 && randomNr < 1/3) {
        computerMove = 'rock';
    } else if(randomNr >= 1/3 && randomNr < 2/3) {
        computerMove = 'paper';
    } else if(randomNr >= 2/3 && randomNr < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}
