let container = document.getElementById('container')
let row = document.getElementsByClassName("row")



function makeDivs() {
    let html1 = "";
    html1 += '<div class="row">';
    html1 += '<div class="col-4 bg-dark border text-white m-0 p-0">' + '<img src="PNG/ind/1.jpg" alt="">' + "</div>";
    html1 += '<div class="col-4 bg-success border m-0 p-0">' + '<img src="PNG/ind/2.jpg" alt="">' + "</div>";
    html1 += '<div class="col-4 bg-primary border m-0 p-0">' + '<img src="PNG/ind/3.jpg" alt="">' + "</div>";
    html1 += '<div class="col-4 bg-danger border m-0 p-0">' + '<img src="PNG/ind/4.jpg" alt="">' + "</div>";
    html1 += '<div class="col-4 bg-warning border m-0 p-0">' + '<img src="PNG/ind/5.jpg" alt="">' + "</div>";
    html1 += '<div class="col-4 bg-info border m-0 p-0">' + '<img src="PNG/ind/6.jpg" alt="">' + "</div>";
    html1 += '<div class="col-4 bg-dark border text-white m-0 p-0">' + '<img src="PNG/ind/7.jpg" alt="">' + "</div>";
    html1 += '<div class="col-4 bg-success border m-0 p-0">' + '<img src="PNG/ind/8.jpg" alt="">' + "</div>";
    html1 += '<div class="col-4 bg-primary border m-0 p-0">' + '<img src="PNG/ind/9.jpg" alt="">' + "</div>";
    html1 += '</div>'

    container.innerHTML = html1
}
makeDivs()

let div1;
let div2;
let div3;
$('.col-4').click(function (e) {

    if (div1 !== undefined) {
    div2 = $(this)

    movePieces()

        div1 = undefined
        div2 = undefined
        div3 = undefined

    }
    else {
        div1 = $(this);

    }

})

function movePieces() {
    div3 = div1.next()
    if (div3[0] == div2[0]) {
        console.log('true')

        $(div1).insertAfter(div2)

    }
    else {

        console.log(div3[0])
        console.log(div2)
        $(div3).insertBefore(div1)
        $(div1).insertBefore(div2)
        $(div2).insertBefore(div3)

    }

}