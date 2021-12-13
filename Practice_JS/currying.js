//! Advanced technique of transforming a function of n arguments to n functions of one or less arguments
function add(a) {
    return function(b) {
        return a + b;
    }
}
let answer = add(10)(5);
console.log(answer);