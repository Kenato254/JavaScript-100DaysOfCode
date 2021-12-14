//! Advanced technique for transforming a function of n arguments to n functions of one or less arguments
function add(a) {
    return function(b) {
        return a + b;
    }
}
let answer = add(10)(5);
// console.log(answer);

//! Normal function 
function sum(a, b, c) {
    return a + b + c;    
}

//! Curry Function
function normalCurry(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}
//! Currying Function using arrow function
const curry = a => b => c => a + b + c;

//! Tests
function test() {
    console.log(curry(1)(2)(3) === sum(1, 2, 3));
    console.log(sum(1, 2, 3) === normalCurry(1)(2)(3));    
}




