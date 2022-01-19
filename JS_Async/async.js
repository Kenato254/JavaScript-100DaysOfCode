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
  console.log("Hello World!");
}
// setInterval(time, 1000);
function time() {
  let tme = new Date();
  hours = tme.getHours();
  mins = tme.getMinutes();
  secs = tme.getSeconds();
  console.log(`${hours}:${mins}:${secs}`);
}
const start = setInterval(counter, 1000);

let c = reduce(59);
let mins = 3;

function counter() {
  //? A callback function to process counter value
  let timer;
  let count = c.next().value;
  if (count === 0) {
    c = reduce(59);
    mins -= 1;
  }
  if (count < 10) {
    timer = `0${mins}:0${count}`; //* Prepends zero before when seconds < 10  --> 09
  } else {
    timer = `0${mins}:${count}`; //* Prepends zero before when minutes < 10  --> 09
  }
  if (mins === 0 && count === 1) {
    stopFunction();
  }
  console.log(timer)
}
function stopFunction() {
  //? Function stops interval time
  clearInterval(start);
}
function* reduce(count) {
  //? Generator function to decrease count by one
  while (count !== -1) {
    yield count;
    count--;
  }
}
