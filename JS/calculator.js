
    "use strict";



    let div = document.getElementsByClassName('score')


    let btn = document.getElementsByClassName('button')



    let result;
    let arr = [];
    $('button').click(function (e) {
    console.log(e.currentTarget.innerText)

       if (result !== undefined) {
           result = result.toString();
           result += e.currentTarget.innerText.toString()
       } else {
           result = e.currentTarget.innerText
       }

    $('#output').html(result)
    })

    function check(input) {

    }





















