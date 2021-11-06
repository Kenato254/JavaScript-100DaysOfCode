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
// console.log(add('102+17'));

// 2. Write a function nand that takes two Boolean values. If both values are true, the result should be false. 
// In the other cases the return should be true.
// I.e.: The call nand(true, true) should return false. The calls nand(true, false), nand(false, true) and nand(false, false) should return true.
function nand(bool1, bool2) {
    return !(bool1 && bool2);
}
 /* Rest Operator with function parameters */

//  function restOp(...args) {
//      const arr = [...args]
//      let sum = arr.reduce((total, value) => {
//          return total += value;
//      })
//      console.log(sum);
//  }

 function restOp(...args) {
    return args.reduce((total, value) => {
        return total += value;
    })
}
//  console.log(restOp(1, 2, 3, 4));

 /* Spread Operator */
const arr1 = ["one", "two", "three", "four", "five"];
let arr2;
(function () {
    arr2 = [...arr1]; // A copy using Spread Operator
    arr1[0] = "uno";
})();
// console.log(arr2);

/* Destructuring Assignment */
function eng2esp() {
    const engToEsp = {one: "uno", two: "dos", three: "tres"};
    const {one : a, two : b, three : c } = engToEsp;
    console.log(a, b, c);
}
/* Destructuring Assignment 2*/
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTomorrow(avgTemperatures) {
    const {tomorrow:tomorrowTemp} = avgTemperatures; //Destructuring
    return tomorrowTemp;
}
// console.log(getTempOfTomorrow(AVG_TEMPERATURES));

/* Destructuring Nested Objects */
const LOCAL_FORECAST = {
    today:{min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};
function getMaxOfTomrw(forecast) {
    const {tomorrow: {max: maxOfTomorrow}} = forecast;
    return maxOfTomorrow;
}
// console.log(getMaxOfTomrw(LOCAL_FORECAST));

/*Destructuring to assign values from Array */
function destrucArray() {
    const [a, b, , c] = [1, 2, 3, 4, 5];
    console.log(a, b, c);
}
// destrucArray();
let a = 10, b = 8;
(() => {
    [a, b] = [b, a];
})();
// console.log(a, b);

/*Destructuring with Rest Operator */
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
function removeTwo(list) {
    const [ , , ...arr] = list;
    return arr;
}
console.log(removeTwo(nums));
console.log(nums);