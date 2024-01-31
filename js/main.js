
const result = "";
const score= {
    win: 0,
    draw: 0,
    loose: 0
};


function playGame(playerMove) {
    const computerMove = pickComputerMove();

    if (playerMove === 'scissors') {
        if(computerMove === 'rock') {
            result = 'you lose';
        }
        else if(computerMove === 'paper') {
            result = 'you win';
        }
        else if(computerMove === 'scissors') {
            result = 'you draw';
        }
    }
    if (playerMove === 'paper') {
        if(computerMove === 'rock') {
            result = 'you win';
        }
        else if(computerMove === 'paper') {
            result = 'you drawwin';
        }
        else if(computerMove === 'scissors') {
            result = 'you lose';
        }
    }
    if (playerMove === 'rock') {
        if(computerMove === 'rock') {
            result = 'you draw';
        }
        else if(computerMove === 'lose') {
            result = 'you win';
        }
        else if(computerMove === 'scissors') {
            result = 'you win';
        }
    }

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`)
}


