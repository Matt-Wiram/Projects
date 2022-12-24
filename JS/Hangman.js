"use strict"

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let games = ['runescape', 'call of duty', 'gears of war', 'legend of zelda', 'minecraft', 'resident evil', 'borderlands'];
let lives = 0;
let letter = [];
let rando = Math.floor(Math.random() * games.length);
let game = games[rando]
let formatGame;



function setButtons() {
    for (let i = 0; i < alphabet.length; i++) {

        let btn = document.createElement("button");
        btn.className = 'text-center '
        btn.id = alphabet[i];
        btn.innerText = alphabet[i];
       document.getElementById('letters').append(btn);
    }
}
setButtons()

let letters = document.getElementById('letters').children;

for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener('click', function (e) {
        letter.unshift(e.target.id)
        e.target.disabled = true;
        e.target.style.display = "none"
        if (game.includes(e.target.id)) {
            letter.push(e.target.id)
            check(e.target.id)
        } else {loseCheck()}

    })
}

function format() {
    console.log(game);

        formatGame = game.replace(/[a-z]/gi, "-")

    document.getElementById('choice').append(formatGame)
}
format();


//come back to this when you can select the topic
function check(char) {

    let index = [];
    formatGame = formatGame.split("")
    for (let i = 0; i < game.length; i++) {

        if (game[i] === char) {
            formatGame[i]= char
            console.log(formatGame);
        }
    }
    formatGame = formatGame.join("")

    document.getElementById('choice').innerText = "";

    document.getElementById('choice').innerText = formatGame;

    winCheck(formatGame, game)

}

function loseCheck() {
    lives++
    let live1 = document.getElementById('lives');
    live1.innerText = `Lives Left: ${6 - lives}`
    alert("Sorry Wrong Letter")
    if (lives === 6) {
        document.getElementById('body').style.display = "none";
        let lose = document.createElement('h1');
        let btn = document.createElement('button');
        btn.innerText = "Reload"
        btn.addEventListener('click', function () {
            location.reload()
        })
        btn.id = 'btn2'
        btn.className = 'text-center justify-content-center'
        lose.className = 'text-center lose justify-content-center'
        lose.innerText = "You Lost"
        document.body.append(lose)
        document.body.append(btn)
    }
}

function winCheck (format, gme) {
    if (format === gme) {
        document.getElementById('body').style.display = "none";
        let win = document.createElement('h1');
        let btn = document.createElement('button');
        btn.innerText = "Reload"
        btn.addEventListener('click', function () {
            location.reload()
        })
        btn.className = 'justify-content-center'
        btn.id = 'btn1'
        win.className = 'text-center win'
        win.innerText = "You Won"
        document.body.append(win)
        document.body.append(btn)
    }
}
