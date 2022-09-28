alert("dfd")
const chessTable = () => {
    var center = document.createElement('center');
    var chessTable = document.createElement('table');
    chessTable.classList = "table";
    chessTable.id = "table";
    var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    for (var i = 8; i >= 1; i--) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 8; j++) {
            var td = document.createElement('td')


             tr.id = `${i}`;
             td.id = `${[i] + alpha[j]}`;
             td.style.zIndex = "3";
            if ((i + j) % 2 === 0) {
                td.setAttribute('class', 'cell whitecell')
                tr.appendChild(td);
            } else {
                td.setAttribute("class", 'cell blackcell');
                tr.appendChild(td)
            }


        }
        chessTable.appendChild(tr)
    }
    center.appendChild(chessTable)

    chessTable.setAttribute('cellspacing', '0');
    chessTable.setAttribute('width', '540px');
    document.body.appendChild(center)
}
chessTable()

// table is set up with 1a through 8h id tags
// now its time to set up game logic but first we need to create buttons

function setBlackPieces() {
    let row2 = document.getElementById('2')
    row2.childNodes.forEach(x => {

            let piece = document.createElement("img");
            piece.src = 'PNG/black_pawn.png';
            piece.id = `black-pawn ${x.id}`;
            let pawns = "black-pawn";
            let ind = x.id;
            piece.style.zIndex = '1';
            piece.classList = pawns

           x.appendChild(piece)

        })
    function autoFill(element, png, classLists) {
        let rows = document.getElementById(element);
        let piece = document.createElement("img");
        piece.src = png;
        piece.id = `${classLists} ${rows.id}`;
        piece.classList = classLists;
        rows.appendChild(piece)
    }
    autoFill("1a",'PNG/black_rook.png',"black-rooks")
    autoFill("1h", 'PNG/black_rook.png', "black-rooks")
    autoFill("1b", "PNG/black_knight.png", "black-knights");
    autoFill("1g", "PNG/black_knight.png", "black-knights");
    autoFill('1e', "PNG/black_king.png", "black-king");
    autoFill('1d', "PNG/black_queen.png", "black-queen");
    autoFill('1c', "PNG/black_bishop.png", "black-bishops");
    autoFill("1f", "PNG/black_bishop.png", "black-bishops");




}
setBlackPieces()


function setWhitePieces() {
    let row7 = document.getElementById('7')
    row7.childNodes.forEach(x => {

        let piece = document.createElement("img");
        piece.src = 'PNG/white_pawn.png';
        piece.id = `white-pawn ${x.id}`;
        piece.style.zIndex = '1'
        let pawns = "white-pawn";
        let ind = x.id
        piece.classList = pawns
        x.appendChild(piece)

    })
    function autoFill(element, png, classLists) {
        let rows = document.getElementById(element);
        let piece = document.createElement("img");
        piece.src = png;
        piece.id = `${classLists} ${rows.id}`;
        piece.classList = classLists;
        rows.appendChild(piece)
    }
    autoFill("8a",'PNG/white_rook.png',"white-rooks")
    autoFill("8h", 'PNG/white_rook.png', "white-rooks")
    autoFill("8b", "PNG/white_knight.png", "white-knights");
    autoFill("8g", "PNG/white_knight.png", "white-knights");
    autoFill('8e', "PNG/white_king.png", "white-king");
    autoFill('8d', "PNG/white_queen.png", "white-queen");
    autoFill('8c', "PNG/white_bishop.png", "white-bishops");
    autoFill("8f", "PNG/white_bishop.png", "white-bishops");




}
setWhitePieces()




//moves stores the element of the piece
let moves = []

// position stores the element of the square

let position = []




function getPieces() {
    let table = document.getElementById('table');
    table.addEventListener('click', function (event) {

        let i = event.target.id

        let pieceOrSquare = document.getElementById(i)
        if (i.length === 2) {
            console.log(i)
            if (moves.length === 0) {


            }
            else {
                position.push(pieceOrSquare)
                console.log(i)
                console.log(pieceOrSquare.id);
                pieceOrSquare.appendChild(moves[0])
                moves = []
                position = []
            }
        }
        else {

            moves.push(pieceOrSquare)
            console.log(i)
            //checkLocation(i)



        }



       // movePieces(event.target.id)
    })



}
getPieces()
moves = [];
getPieces()

// function checkLocation(idLoc) {
//     let piece = document.getElementById(idLoc);
//     let location = piece.parentNode.id
//     console.log(location === '2e')
//
//
// }
//make a matrix
let matrix = [];

function matrixMaker() {

    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (let i = 8; i > 0; i--) {
        for (let j = 0; j < alpha.length; j++) {
            let sum = i + alpha[j]
            matrix.push(sum)
        }
    }

}
matrixMaker()

//find piece type and color on first click and location of click

function typeAndColor(arr, index) {

}

//compare location of second click with color and type of piece
//check for piece at location of second click and if not test if piece can move there
//now find a way to alternate between black and white starting with white
// add in way to win by checkmating king
//restart the game after win
//go from a two player game to a player vs computer
//here