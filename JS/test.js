alert("hjdfdk")

function generateButtons() {

    let div = document.createElement('div');
    div.className = 'buttonbank';
    div.id = 'buttonbank';
    document.body.appendChild(div)

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < alphabet.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = `${alphabet[i]}`;
        btn.id = btn.innerHTML;
        btn.className = 'button';
        let div = document.getElementById('buttonbank');
        div.appendChild(btn)
        document.body.appendChild(div)
    }


}

generateButtons()


const game = () => {

    let games = [
        'resident evil',
        'halo',
        'gears of war',
        'kingdom hearts',
        'call of duty',
        'minecraft',
        'runescape',
        'roblox',
        'borderlands',
        'world of warcraft',
        'days gone',
        'final fantasy'

    ];

    let indexes = [];
    let guessedLetters = [];
    let wrongLetters = [];
    let moves = 0;

    let word = games[Math.floor(Math.random() * games.length)];
    let answer = word;
    word = word.split('')

    let wordArray = word.map(x => {
        if (x === " ") {
            return " "
        }
        else {
           return "_"
        }
    }).join(' ');

    let wordAnswer = document.createElement("h2");
    wordAnswer.innerHTML = wordArray;
    wordAnswer.id = 'answer';
    wordAnswer.className = 'answer';
    let stage = document.getElementById('stage');
    stage.appendChild(wordAnswer);
    document.body.appendChild(stage)


    const playGame = () => {

        const playerOptions = document.getElementById('buttonbank').querySelectorAll('.button');

        playerOptions.forEach(x => {
            x.addEventListener('click', function () {

                function checkLetter(a) {
                    if (wordArray.includes(a)) {
                        guessedLetters.push(a);
                        for (let i = 0; i < wordArray.length; i++) {
                            if (wordArray[i] === a) {
                                indexes.push(i);
                                wordArray = wordArray.split(' ');
                                wordArray[i] = a;
                                wordArray = wordArray.join(' ');
                                wordAnswer.innerHTML = wordArray;
                                alert(wordArray)
                            }
                        }
                    }
                    else {
                        wrongLetters.push(a);
                        alert("Wrong Letter");
                        moves++;
                        let movesLeft = document.getElementById('movesleft');
                        movesLeft.innerText = `Moves Left: ${6 - moves}`;
                        if (moves === 6) {
                            gameOver(playerOptions, moves, wordArray)
                        }
                    }
                }
                checkLetter(x.innerText)
                console.log(wordArray);



                if (wordAnswer.innerText.split(" ").join('') === answer) {
                    gameOver(playerOptions, moves, wordArray)
                }
            })
        })





    }








playGame()

}

game()