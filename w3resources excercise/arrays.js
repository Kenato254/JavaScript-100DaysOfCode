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
    let newStr = '';
    for (let n = 0; n < str.length; n++) {
        if (isUpper(str[n])) {
            // console.log(str[n].toLowerCase());
            newStr += str[n].toLowerCase();
        } else {
            newStr += str[n].toUpperCase();
        }
    }
    console.log(newStr);
}

function isUpper(string) {
    if (string.match(/[A-Z]/)) {
        return true;
    } else {
        return;
    }
}
// swapCase("The Quick Brown Fox")

/*
Write a JavaScript program which prints the elements of the following array. Go to the editor
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
------
------
*/
function print2DArr(arr) {
    for(let x in arr) {
        console.log('row '+x);
        for(let y in arr[x]) {
            console.log(arr[x][y]);
        }
    }
}
// print2DArr([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]);

/*
 Write a JavaScript program to compute the sum and product of an array of integers. Go to the editor
Click me to see the solution
*/
function sumProductArr(arr) {
    let sum = arr.reduce((total, value) => {
        return total += value;
    });
    let prod = arr.reduce((prod, value)=> {
        return prod *= value;
    });
    console.log(sum, prod)
}
// sumProductArr([1, 2, 3, 4, 5, 6]);

