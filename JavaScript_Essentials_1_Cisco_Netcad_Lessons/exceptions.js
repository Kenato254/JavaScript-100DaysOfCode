try {
    cosole.log('');
} catch(e) {
    console.log(`An error occured! Log -> "${e}"`);
}
function name(params) {
    let sX = prompt("Enter the first number");
    let sY = prompt("Enter the second number");
    let x = Number(sX);
    let y = Number(sY);
    if (Number.isFinite(x) && Number.isFinite(y) && y !== 0) {
        console.log(x / y);
    } else {
        console.log("incorrect arguments");
    }     
}

function factorial(n) {
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}

// console.log(factorial(3)); // -> 6
// console.log(factorial(5)); // -> 120
// console.log(factorial(8)); // -> 40320
// console.log(factorial(20)); // -> 2432902008176640000
// console.log(factorial(1000)); // -> Infinity

function factorial(n) {
    if (n > 20) {
        console.log(n);
        throw new RangeError("Max value 20");
    }
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}

// console.log(factorial(20)); // -> 2432902008176640000
// console.log(factorial(1000)); // -> Uncaught RangeError: Max value 20

function div(a, b){
    
    if (b == 0) {
        throw new RangeError('Division Zero Error Occured!');
    } else {
        return  a / b;
    }
}

let numbers = [10, 40, 0, 20, 50];

for (let n in numbers){
    try {
        console.log(div(1000, n));
    } catch(e) {
        console.log(`Something Occured! ${e.message}`)
    }
}



function average(a, b) {
    return (a + b) / 2;
}

console.log(average(2, 10));