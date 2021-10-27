/* Type Conversion Class */

// STRINGS TO NUMBERS
function toNumber(str) {
    // One Way Using Number Method
    let number = Number(str + "");
    // Second Way parseInt Method
    number = parseInt(str + '1');
    // Floating point parseFloat Method
    number = parseFloat(str + "2")
    
    // Using Unary + Operator
    number = + str;
    return number;
}
// console.log(toNumber('Ken'));

// NUMBERS TO STRINGS
function to_string(number) {
    // Method One
    let str = String(number);

    // Method Two
    str = (number + 1).toString();

    // Method Three. Returns a string, Rounded and written using exponential notation.
    str = (number + 2).toExponential();
    
    // Method Four. Returns a string,Rounded and written with a specified number of decimals.
    str = (number + 3.203).toFixed(2);

    // Method Five. Returns a string, with a number written with a specified length
    str = (number + 3.203).toPrecision(3);    
    return str;
}
// console.log(to_string(20));

// DATE TO NUMBERS AND STRING
function dateToNumber() {
    // To Numbers
    let dates = new Date();
    let num = Number(dates);

    // To String
    let str = String(dates); // Same as dates.toString())
    return num;
}
// console.log(dateToNumber());

// BOOLEANS TO NUMBERS
function boolToNumber(bool) {
    return bool === true ? Number(true) : Number(false); // Ternary not necessary here
}

// BOOLEAN TO STRINGS
function boolToString(bool) {
    return String(bool);
}

// console.log(boolToString(true));
console.log(~ 1)