//! Closures is an ability of a function to remember variables and functions 
//! declared outside its scope
//! In javascript closures are created every time a function is created, at a function creation time.


function add(x) {
    let varr = 9;
    return function(y) {
        return x + y - varr;
    };
}

let sum = add(9);
console.log(sum(10))