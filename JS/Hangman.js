
function generateButtons() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let btn1 = document.createElement("div");
    btn1.innerHTML = '';
    btn1.classList = "btn1";
    btn1.id = "btn1";
    document.body.appendChild(btn1)
    for (let i = 0; i < alphabet.length; i++) {
        let btn = document.createElement("button");
        btn.innerHTML = `${alphabet[i]}`;
        btn.type = 'submit';
        btn.classList = "hold";
        btn.id = btn.innerHTML;
        btn.onclick = function () {

            btn.disabled = true
        }

        let end = document.getElementById("btn1");
        let section = document.getElementById("game")
        end.appendChild(btn);
        section.appendChild(end)
        document.body.appendChild(section);


    }





}


generateButtons();

const game = () => {

    let moves = 0;

    let games = [
        'resident evil',
        'halo',
        'gears of war',
        'kingdom hearts',
        'call of duty',
        'minecraft',
        'runescape'
    ];

    let answer = '';

    answer = games[Math.floor(Math.random() * games.length)];

    let finalWord = [];
    let guessedLetters = [];
    let indexes = [];
    let wrongLetters = [];

    let wordArray = answer.split('')

    let word = wordArray.map(x => '_').join(' ');

    let wordAnswer = document.createElement('h2');
    wordAnswer.innerHTML = word;
    wordAnswer.classList = "word";
    let btn = document.getElementById("btn")
    let section = document.getElementById('game')

    btn.appendChild(wordAnswer)
    section.appendChild(btn)
    document.body.appendChild(section)



    const playGame = () => {



        const generateChoices = () => {


            const playerOptions = document.getElementById("btn1").querySelectorAll('.hold');

            playerOptions.forEach(option => {
                option.addEventListener('click', function() {



                    function checkLetter(a) {
                        if (wordArray.includes(a)) {
                            guessedLetters.push(a)
                            indexes.push(i)
                            for (let i = 0; i < wordArray.length; i++) {
                                if (wordArray[i] === a) {

                                    console.log(guessedLetters)
                                    let answ = word.split(" ");
                                    answ[i] = wordArray[i];
                                    let end = answ.join(" ");
                                    word = end
                                    wordAnswer.innerHTML = word;
                                    finalWord = word
                                    console.log(finalWord.replace("_", "").split(" ").join(""))
                                    console.log(answer.replace(" ", "").replace(" ", ""))

                                }
                            }
                        }
                        else  {

                            wrongLetters.push(a);
                            const movesLeft = document.querySelector('.movesleft');
                            moves++;
                            movesLeft.innerText = `Moves Left: ${6 - moves}`;
                            if (moves === 6) {
                                gameOver(playerOptions, moves, finalWord)
                            }
                        }
                    }



                    checkLetter(option.innerText)

                    console.log(finalWord)
                    console.log(answer)

// do if else

                    if (finalWord.split(" ").join("") === answer) {
                        gameOver(playerOptions, moves, finalWord)
                    }
                    else if (finalWord.replace("_", "").split(" ").join("") === answer.replace(" ", "")) {
                        gameOver(playerOptions, moves, finalWord)
                    }

                    else if (finalWord.replace("_", "").replace("_", "").split(" ").join("") === answer.replace(" ", "").replace(" ", "")) {
                        gameOver(playerOptions, moves, finalWord)

                    }














                })
            })

        }
        generateChoices()


    }


    const gameOver = (playerOptions, movesLeft, finalWord) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');


        playerOptions.forEach(option => {
            option.style.display = 'none'
        })

        chooseMove.innerText = "Game Over";

        console.log(finalWord)
        if (finalWord.replace("_", "").replace("_", "").split(" ").join("") === answer.replace(" ", "").replace(" ", "")) {
            console.log(wordAnswer)
            console.log(answer)
            alert("Congratulations you won")
            result.style.fontSize = '2em';

            result.innerText = "You won the game"
        }

        else if (moves === 6) {
            alert("You lost the game. Here is the answer " + answer);
            result.style.fontSize = '2em';

            result.innerText = "You lost the game"

        }

        reloadBtn.innerText = "Restart";
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', function() {
            window.location.reload();

        })

    }






    playGame()

}

game()



