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
             td.id = `${i + alpha[j]}`;
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
            let pawns = "black-pawn";
            let ind = x.id
            piece.classList = pawns + ind

           x.appendChild(piece)

        })
    function autoFill(element, png, classLists) {
        let rows = document.getElementById(element);
        let piece = document.createElement("img");
        piece.src = png;
        piece.classList = classLists;
        rows.appendChild(piece)
    }
    autoFill("1a",'PNG/black_rook.png',"black-rooks1")
    autoFill("1h", 'PNG/black_rook.png', "black-rooks2")
    autoFill("1b", "PNG/black_knight.png", "black-knights1");
    autoFill("1g", "PNG/black_knight.png", "black-knights2");
    autoFill('1e', "PNG/black_king.png", "black-king");
    autoFill('1d', "PNG/black_queen.png", "black-queen");
    autoFill('1c', "PNG/black_bishop.png", "black-bishops1");
    autoFill("1f", "PNG/black_bishop.png", "black-bishops2");




}
setBlackPieces()


function setWhitePieces() {
    let row7 = document.getElementById('7')
    row7.childNodes.forEach(x => {

        let piece = document.createElement("img");
        piece.src = 'PNG/white_pawn.png';
        let pawns = "white-pawn";
        let ind = x.id
        piece.classList = pawns + ind
        x.appendChild(piece)

    })
    function autoFill(element, png, classLists) {
        let rows = document.getElementById(element);
        let piece = document.createElement("img");
        piece.src = png;
        piece.classList = classLists;
        rows.appendChild(piece)
    }
    autoFill("8a",'PNG/white_rook.png',"white-rooks1")
    autoFill("8h", 'PNG/white_rook.png', "white-rooks2")
    autoFill("8b", "PNG/white_knight.png", "white-knights1");
    autoFill("8g", "PNG/white_knight.png", "white-knights2");
    autoFill('8e', "PNG/white_king.png", "white-king");
    autoFill('8d', "PNG/white_queen.png", "white-queen");
    autoFill('8c', "PNG/white_bishop.png", "white-bishops1");
    autoFill("8f", "PNG/white_bishop.png", "white-bishops2");




}
setWhitePieces()

function getPiece() {
    alert("hello")
}


function movePieces() {
    let table = document.getElementById('table').rows;
    console.log(table.cells)


}
movePieces()