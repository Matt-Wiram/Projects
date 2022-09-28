function generateButtons() {
    let choices = ['rock', 'paper', 'scissors'];
    let div = document.createElement('div');
    div.id = 'container';
    div.className = 'container';
    document.body.appendChild(div);

    for (let i = 0; i < choices.length; i++) {
        let btn = document.createElement('button');
        let div = document.getElementById('container')
        btn.innerHTML = `${choices[i]}`;
        btn.id = btn.innerHTML;
        btn.className = 'buttons';
        div.appendChild(btn);
        document.body.appendChild(div)
    }
}

generateButtons()



const game = () => {

    let choice = []

    let choices = ['rock', 'paper', 'scissors'];

    let compChoice = choices[Math.floor(Math.random() * choices)];

    const playGame = () => {


        let playerOptions = document.getElementById('container').querySelectorAll('.buttons');

        playerOptions.forEach(x => {
            x.addEventListener('click', function () {

                choice.push(x.innerHTML)
                function checkWin(a) {
                    if (a === 'rock') {
                        (compChoice === 'rock')?alert("It's a tie"):(compChoice === 'paper')?alert('Computer Won'):alert("You Won");
                    }
                    else if (a === 'paper') {
                        (compChoice === 'rock')?alert("You Won"):(compChoice === 'paper')?alert("It's a tie"):alert('Computer Won');
                    }
                    else if (a === 'scissors') {
                        (compChoice === 'rock')?alert('Computer Won'):(compChoice === 'paper')?alert("You Won"):alert("It's a tie")
                    }
                    choice = [];
                }

                checkWin(x.innerHTML)
            })
        })

    }

playGame()

}
game()
let reloadBtn = document.createElement('button');
document.body.appendChild(reloadBtn)
reloadBtn.addEventListener('click', function () {
    reloadBtn.innerHTML = window.location.reload()
})



