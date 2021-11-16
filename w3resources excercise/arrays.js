"use strict";
// Clone using  Spread Operator
function method1(arr) {
    const arr2 = [...arr];
    arr.pop();
    console.log(`Original: [${arr}]`);
    console.log(`Copy: [${arr2}]`);
    console.log('#####################');
}  
// Clone using Array.prototype.map()
function method2(arr) {
    const arr2 = arr.map((value)=> {
        return value;
    });
    arr.pop();
    console.log(`Original: [${arr}]`);
    console.log(`Copy: [${arr2}]`);
    console.log('#####################');
}

// Clone Using Array.prototype.filter()
function method3(arr) {
    const arr2 = arr.filter(()=> {
        return true;
    });
    arr.pop();
    console.log(`Original: [${arr}]`);
    console.log(`Copy: [${arr2}]`);
    console.log('#####################');
}

// Clone using Array.prototype.slice()
function method4(arr) {
    const arr2 = arr.slice(0);
    arr.pop();
    console.log(`Original: [${arr}]`);
    console.log(`Copy: [${arr2}]`);
    console.log('#####################');
}
/*
    Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
    For example if you accept 025468 the output should be 0-254-6-8. 
*/
function insertDash(number) {
    number = number.toString().split("");
    let newNumber = ""
    for(let x = 0; x < number.length; x++) {
        newNumber += number[x];
        if ((number[x] % 2 === 0) && (number[x + 1] % 2 === 0)) {
            newNumber += "-"
        } 
    }
    console.log(newNumber);

}
// insertDash("025468");
// insertDash("000043");

/*
 7. Write a JavaScript program to sort the items of an array. Go to the editor
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
function sortArr(arr) {
    const sorted = arr.sort(function(a, b){return a - b})
    console.log(sorted)
}
// sortArr([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ])

/*
. Write a JavaScript program to find the most frequent item of an array. 
Go to the editor
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
*/
function mostFrequent(arr) {
   
}
// mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])

/*
  Write a JavaScript program which accept a string as input and swap the case of each character. 
  For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
*/
function swapCase(str) {
    let pattern = /[A-Z]/
    let cap = str.match(/[A-Z]/g)
    let low = str.match(/[a-z]/g)
    str = str.replace(pattern, )
    console.log(cap, low)
}
swapCase("The Quick Brown Fox")