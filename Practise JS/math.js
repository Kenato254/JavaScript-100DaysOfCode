function myFunc() {
    let sqrtOf100 = Math.sqrt(100); //Returns the square root of the passed argument
    let rounded = Math.round(4.53); // Returns the nearest integer of the passed argument
    let ceiled = Math.ceil(4.53); //  Returns the value of the passed argument rounded up to nearest integer
    let floored = Math.floor(4.53); // Returns the value of the passed argument rounded down to nearest integer
    let trunced = Math.trunc(4.53); // Returns the integer part of the passed argument
    return trunced;
}

function myFunc2() {
    console.log(Math.sign(-4)); // Returns -1 for negative passed arguments
    console.log(Math.sign(0)); // Returns 0 if passed value equal to 0
    console.log(Math.sign(10)); // Returns 1 postive for positive passed arguments
}

function myFunc3() {
    // Raise 10 to power 2 -> 100
    console.log(Math.pow(10, 2)); // 10^2
    // Returns absolute position of a number 0. Math.abs(-12 -> 12
    console.log(Math.abs(-12)); // Absolute value
    // Return lowest value of given list of arguments
    console.log(Math.min(9, 2, 5, 3, -1, 7, 4));
    // Return highiest value of given list of arguments
    console.log(Math.max(9, 2, 5, 3, -1, 7, 4));

    // Check max and min in a given array
    const arr = [9, 2, 5, 3, -1, 7, 4];
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    console.log(max, min);
}
function myFunc4(num) {
    /* 
    Return random number 0 and given num - 1
    */
    let rand = Math.random(); // Return random number between 0 and 1
    let my_rand = num*rand;
    // Returns a random integer from 0 to 9 when used with Math.floor():
    return Math.floor(Math.random() * num);
}
function myFunc5() {
    // The natural logarithm returns the time needed to reach a certain level of growth.
    console.log(Math.log(1)); // The natural logarithm returns the time needed to reach a certain level of growth.
}

