function generateButtons() {
    let choice = ['heads', 'tails'];
    let div = document.createElement('div');
    div.id = 'choiceBank';
    div.className = 'choiceBank';
    document.body.appendChild(div);
    for (let i = 0; i < choice.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = `${choice[i]}`;
        btn.id = btn.innerHTML;
        let div = document.getElementById('choiceBank');
        div.appendChild(btn);
        document.body.appendChild(div)
    }
}

generateButtons();

const game = () => {

    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
        const headsBtn = document.getElementById('heads');
        const tailsBtn = document.getElementById("tails");
        const playerOptions = [headsBtn, tailsBtn];
        const computerOptions = ['heads', 'tails'];

        playerOptions.forEach(option => {
            option.addEventListener('click', function () {
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;

                const choiceNumber = Math.floor(Math.random() * 2);
                const computerChoice = computerOptions[choiceNumber];

                winner(this.innerText, computerChoice);

                if (moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })
    }
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === 'heads') {
            if (computer === 'heads') {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
            else if (computer === 'tails') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
        else if (player === 'tails') {
            if (computer === 'tails') {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
            else if (computer === 'heads') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
    }

    const gameOver = (playerOptions, movesLeft) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none'
        })
        chooseMove.innerText = 'Game Over';
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.style.fontsize = '2em';
            result.innerText = 'You won the game'
        }
        else if (playerScore === computerScore) {
            result.style.fontsize = '2em';
            result.innerText = "It's a tie"
        }
        else {
            result.style.fontsize = '2em';
            result.innerText = 'Oh the computer won haha';
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', function () {
            window.location.reload()
        })
    }
playGame()











}

game()