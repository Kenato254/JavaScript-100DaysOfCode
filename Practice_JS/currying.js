//! Advanced technique for transforming a function of n arguments to n functions of one or less arguments
function add(a) {
    return function(b) {
        return a + b;
    };
}
let answer = add(10)(5);
// console.log(answer);
//! Normal function 
function sum(a, b, c) {
    return a + b + c;    
}

//! Curry Function
function curry1(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
function currySum(sum) {
    //! Curry a function
    return function(a) {
        return function(b) {
            return function(c) {
                return sum(a, b, c);
            };
        };
    };
}
//! Currying Function using arrow function
const curriedArrow = a => b => c => a + b + c;

//! Tests
// test()
function test() {
    const curriedSum = currySum(sum)
    console.log(
        `Curried Sum(a, b, c) => curriedSum(a)(b)(c) => ${curriedSum(1)(2)(3)}`
    );
    console.log(curriedArrow(1)(2)(3) === sum(1, 2, 3));
    console.log(sum(1, 2, 3) === curry1(1)(2)(3));    
}

//! Understanding curry importance
function log(date, importance, message) {
    console.log(
        `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
    );
}
function curry(func) {
    return function curried(...args) {
        if(args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}
log = curry(log);
log(new Date('2021-12-1 10:30:59'), "INFO", "starting server..."); //! log(date, importance, message);
log(new Date('2021-12-1 10:31:00')) ("INFO", "server running..."); //! log(date)(importance, message);
log(new Date('2021-12-1 10:32:00')) ("GET") ("http://127.0.0:8080/home"); //! log(date)(importance)(message);
let logNow = log(new Date('2021-12-1 10:33:00'));
logNow("INFO", "Stopping server...");