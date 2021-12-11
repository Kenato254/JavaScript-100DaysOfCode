//! Function Constructor
const add = new Function('a', 'b', 'return a + b');
// console.log(add(10, 2))
//! Semicolon are used in javascript executable statements e.g -> add() function expresssion
//! Java script functions are hoisted

(function() {
    //! IIFEs - > Self invoked Functions
    // console.log('I\'m an Immediately Invoked Function Expression/');
})();

//! Functions as variables
function desc(){ 
    return 'Functions used as values'
} 
// let x = desc()
// console.log(x)

function func_with_args(a=10, b=3) {
    //! Functions are Objects
    return a + b;
}
// console.log(func_with_args(100).toString())

//! A functions design as a property of an object if called a METHOD.
const student = {
    fname: undefined,
    lname: undefined,
    fullName: function(){
        //! Function as object's method
        return this.fname + " " + this.lname +'.';
    }
}
const stud1 = {
    fname: 'Samrawit',
    lname: 'Fetene',
};
// console.log(student.fullName.apply(stud1))

function Person() {
    //! Function as object constructor
    this.fname = 'Kennedy';
    this.lname = 'Gitonga';

    this.fullName = function () {
        return this.fname + " " + this.lname +'.';
    }
}
person = new Person() //! Constructing new object
// console.log(person.fullName.apply(stud1))

//! Arrow Functions -> Are short syntax for writing functions expressions
let iife = (function() {
    let x = function(x, y) {
        //! ES5
        return x + y;
    }
    //! ES6
    let y = (a, b) => a + b; 

    console.log(x(1, 2));
    console.log(y(2, 3));
})();

//! FUNCTION PARAMETERS AND ARGUMENTS
//! Function Parameter Rules
// 1-> JS Functions do not specify data types of passed PARAMETERS
// 2. -> js Functions do not check data types of passed ARGUMENTS
// 3. -> JS Functions do not check the number of arguments recieved

//! The Argument Object
let max_value = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    /* 
    ! If a function is called with too many arguments (more than declared) these arguments can be accessed using 
    ! the Argmument Object.
    ! ARGUMENTS ARE PASSED BY VALUE 
    */
    let mxV = -Infinity;
    let mnV = Infinity
    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] > mxV) {
            mxV = arguments[i];
        }
        if(arguments[i] < mnV) {
            mnV = arguments[i];
        }
    } return `Max Value ${mxV}\n Min value -> ${mnV}`;
}
console.log(max_value);