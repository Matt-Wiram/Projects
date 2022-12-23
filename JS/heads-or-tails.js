let headsBtn = document.getElementById("heads");
let tailsBtn = document.getElementById("tails");

let pScore = document.getElementsByClassName('p-count');
let p = 0;
let cScore = document.getElementsByClassName('c-count');
let c = 0;
let movesLeft = document.getElementsByClassName("movesleft");




$(headsBtn).click(function () {
    let rando = Math.floor(Math.random() * 2) === 0 ? "heads" : "tails";
    if (rando === 'heads') {

        p++;



        pScore[0].innerHTML = p;
        winCheck();

    } else {
        c++;


        cScore[0].innerHTML = c;
        winCheck();
    }




})

$(tailsBtn).click(function () {
    let rando = Math.floor(Math.random() * 2) === 0 ? "heads" : "tails";
    if (rando === 'heads') {
        c++


        cScore[0].innerHTML = c;
        winCheck();
    } else {

        p++

        pScore[0].innerHTML = p;
        winCheck();
    }
})


function winCheck() {
    if (pScore[0].innerHTML === "10") {
        console.log("you win");
        $("section").css("display", "none")
        $(".result").css({
        "display": "block",
        "margin-top": "2rem",
        "padding": "1rem",
        "background": "white",
        "outline": "none",
        "border": "none",
        "border-radius": "10px",
        "cursor": "pointer",
        "text-align": "center"



    })
        $(".result").html("You Won")
        $(".reload").css({"display": "block", "text-align": "center", "margin": "auto", "margin-top": "2em"})

    } else if (cScore[0].innerHTML === '10') {
        console.log('you lose')
        $("section").css("display", "none")
        $(".result").css({
            "display": "block",
            "margin-top": "2rem",
            "padding": "1rem",
            "background": "white",
            "outline": "none",
            "border": "none",
            "border-radius": "10px",
            "cursor": "pointer",
            "text-align": "center",




        })
        $(".result").html("You Lost")
        $(".reload").css({"display": "block", "text-align": "center", "margin": "auto", "margin-top": "2em"})

    }
}

$(".reload").click(function () {
    location.reload()
})