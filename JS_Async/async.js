/*
! "I will call back later!" --> CALLBACKS
? A callback is a function that is passed to another function as an argument.
? This technique allows a function to call another function.
? A callback function can run after another function has finished.
* Where callbacks really shine are in asynchronous functions, 
* where one function has to wait for another function (like waiting for a file to load).
*/

function main(something) {
    console.log(something);
}

function add(a, b, show) {
    let sum = a + b;
    show(sum);
}
add(10, 2, main);

/*
! "I will finish later!"" --> ASYNCHRONOUS
? Functions running in parallel with other functions are call asynchronous.
? A good example is JS --> setTimeout()
*/
setTimeout(saySomething, 5000);

function saySomething() {
    console.log("Hello World!")
}
// setInterval(time, 1000);
function time() {
    let tme = new Date();
    hours = tme.getHours();
    mins = tme.getMinutes();
    secs = tme.getSeconds();
    console.log(`${hours}:${mins}:${secs}`)
}
setInterval(reverseCounter, 1000)
function reverseCounter() {
    let date = new Date();
    date.setSeconds(60)
    let reducer = date.setSeconds(60);
    let mins = 4;
    let secs = 60;
    if (secs == 0) {
        mins -=1;
    }

    if (mins == 0) {
        clearInterval()
    }
    console.log(`0${mins}:${reducer}`);
}
