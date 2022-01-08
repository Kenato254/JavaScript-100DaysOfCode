let operators = document.querySelectorAll("[operators]");
let numerics = document.querySelectorAll("[numerics]");

let operands = document.querySelector("#calculate");
let results = document.querySelector("#results");

let calculation = "";

var math_it_up = {
  //! Transforms operators embedded in string
  " + ": function (a, b) {
    return a + b;
  },
  " - ": function (a, b) {
    return a - b;
  },
  " / ": function (a, b) {
    return a / b;
  },
  " * ": function (a, b) {
    return a * b;
  },
};

click_numerics();
function click_numerics() {
  //! Function handles clicked numerics
  for (each of numerics) {
    each.addEventListener("click", function () {
      calculation += this.textContent;
      operands.textContent = calculation;
      console.log(calculation);
    });
  }
}
for (each of operators) {
  each.addEventListener("click", click_action);
}
function evaluate(param, op) {
  //! Function handles chained operations
  const arr = param.split(op); // console.log(arr);
  let res = parseFloat(arr.shift());
  for (let num of arr) {
    num = parseFloat(num);
    if (isNaN(num) === false) {
      res = math_it_up[op](res, num);
    }
  }
  results.textContent = res;
  return res;
}
function click_action(params) {
  //! Function handles calculations, delete action and reset
  switch (this.textContent) {
    case " + ":
      calculation += this.textContent;
      calculation = evaluate(calculation, " + ");
      calculation += this.textContent;
      operands.textContent = calculation;
      break;

    case " - ":
      calculation += this.textContent;
      calculation = evaluate(calculation, " - ");
      calculation += this.textContent;
      operands.textContent = calculation;
      break;

    case " / ":
      calculation += this.textContent;
      calculation = evaluate(calculation, " / ");
      calculation += this.textContent;
      operands.textContent = calculation;
      break;

    case " * ":
      calculation += this.textContent;
      calculation = evaluate(calculation, " * ");
      calculation += this.textContent;
      operands.textContent = calculation;
      break;

    case "AC":
      calculation = "";
      operands.textContent = calculation;
      results.textContent = 0;
      break;

    case "DEL":
      console.log("DEL");
      calculation = calculation.slice(0, -1);
      operands.textContent = calculation;
      break;

    case "=":
      calculation = eval(calculation);
      results.textContent = calculation;
      break;
  }
}
