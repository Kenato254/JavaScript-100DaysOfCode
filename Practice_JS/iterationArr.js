/*  Array Iterations */
// array.forEach()
const nums =  [40, 1, 80, 5, 25, 10, 90, 45];
const fruits = ['apple', 'banana', 'cider']
let txt = "";
nums.forEach(func);

function func(value) {
    txt += value + "<br>"
}

// Array.map() - Creates a new array by performing a function on each array element
const new1 = nums.map(func2);

function func2(value, index, array) {
    return value * 2;
}

// Array.filter() Creates a new array with array element that passes a test
const new2 = nums.filter(func3);

function func3(value, index , array) {
    return value > 50;
}

// Array.reduce() Runs a function on each array element to produce a single value
// Works from left to right
let sum = nums.reduce(func4); 

function func4(total, value, index, array) {
    return total + value;
}

// Array.reduceRight() Runs a function on each array element to produce a single value
// Works from right to left
let sum2 = nums.reduceRight(func5) ;

function func5(total, value) {
    return total + value;
}

// Array.every() Checks if all elements pass a test
let below100 = nums.every(func6);

function func6(value, index, array) {
    return value < 100;
}

// Array.some() Check if some of array elements pass a test
let someOver50 = nums.some(func7);

function func7(value, index, array) {
    return value > 50;
}


// Array.indexOf() Searches array for an element value and returns its position
const stars = ['Sun', 'Betelgeuse', 'Sirius', 'Sun', 'Alpha Centauri', NaN]
let pos = stars.indexOf("Sun"); // Return first position of argument
let lastPos = stars.lastIndexOf('Sun', -3); // Return last position of argument

// Array.includes() Checks if an element is present in array
let check = stars.includes('Xi Tauri');
let check2 = stars.includes(NaN);

// Array.find() Returns first element in array that passes a test function
let first = nums.find(func8);
let firstIndex = nums.findIndex(func8); // Returns first index of find()

function func8(value, index, array) {
    return value > 50;
}

// Array.from() Returns an array object from any object with a length property/iterable object
const firstName = Array.from('Kennedy');

// Little reminder
const lastName = 'Gitonga'.split(''); // String method
Array.isArray(lastName);

// Array.keys() Returns an array iterator with the keys of an array
const keys = stars.keys();
let text = '';
for (let x of keys) {
    text += x + '<br>';
}
console.log(text)