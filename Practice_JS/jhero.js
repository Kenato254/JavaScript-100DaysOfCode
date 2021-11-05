"use strict";

// 1. Write a function add that takes a string with a summation task and returns 
// its result as a number. Two natural numbers should be added. The summation task is a string of the form '102+17'.

function add(str) {
    let arr = str.split("+");
    let add = arr.reduce((total, value) => {
        total = parseInt(total)
       return total += parseInt(value);
    })
    return add;
}
console.log(add('102+17'));

// 2. Write a function nand that takes two Boolean values. If both values are true, the result should be false. 
// In the other cases the return should be true.
// I.e.: The call nand(true, true) should return false. The calls nand(true, false), nand(false, true) and nand(false, false) should return true.
function nand(bool1, bool2) {
    return !(bool1 && bool2);
}
