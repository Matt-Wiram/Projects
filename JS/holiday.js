"use strict"


function max(str) {
    let obj = {};

    let end = "";
    let count = 0;

    for (let char of str) {
        if (obj[char]) {
            obj[char]++
        } else {
            obj[char] = 1;

        }
    }

    for (let char in obj) {
        if (obj[char] > count) {
            count = obj[char]
            end = char
        } else {

        }
    }
    return end + " - " + count

}

console.log(max('maxwellllltt'));

function arraySort(arr, num) {
    let final = [];
    let temp = [];

    for (let i = 0; i < arr.length; i++) {
        while (arr.length > 0) {
            if (i % num === 0) {


                temp = arr.splice(0, num)
                final.push(temp)


            }
        }

    }
    return final
}

console.log(arraySort([1, 2, 3, 4, 5, 6, 7], 3));

function isPalindrome(str) {
    let str2 = str.split("").reverse().join("").toLowerCase();
    if (str.toLowerCase() === str2) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome("Bob"));

function revString (str) {
    str = str.split(" ");

    for (let i = 0; i < str.length; i++) {
        if (str[i].length > 3) {
            str[i] = str[i].split('').reverse().join("")
        }
    }
    return str.join(" ");
}

console.log(revString("this is really cool"));

function fizzBuzz() {
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i +  " - fizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log(i + " - fizz")
        }
        else if (i % 5 === 0) {
            console.log(i + " - buzz")
        }
        else console.log(i)
    }
}

console.log(fizzBuzz());