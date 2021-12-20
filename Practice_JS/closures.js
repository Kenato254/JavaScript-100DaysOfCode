//! Closures is an ability of function to remember variables and functions 
//! declared outside its scope

function add(x) {
    let varr = 9;
    return function(y) {
        return x + y - varr;
    };
}

let sum = add(9);
console.log(sum(10))