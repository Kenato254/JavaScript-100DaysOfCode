let operands = document.querySelector("#para-operands");
let results = document.querySelector("#results");
let btns = document.querySelectorAll("[buttons]");
let arr_operators = [" ÷ ", " x ", " - ", " + ", " = "];
let other_operators = ["C", "⌫", "+/-"];
let operands_nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

let nums = "";

operands_colors();
function operands_colors() {
  //! Function to handle some css styling and pass elements to click functionality
  for (let each of btns) {
    if (arr_operators.includes(each.textContent)) {
      each.setAttribute("class", "operands-color-one");
      click_operator(each);
    } else if (other_operators.includes(each.textContent)) {
      each.setAttribute("class", "operands-color-two");
      click_operator(each);
    } else if (operands_nums.includes(each.textContent)) {
      each.setAttribute("class", "operands");
      click_operands(each);
    }
  }
}
function click_operands(element) {
  //! Function handles clicked numerics
  element.addEventListener("click", () => {
    nums += element.textContent;
    operands.textContent = nums;
  });
}
var math_it_up = {
  //! Transforms operators embedded in string
  " + ": function name(a, b) {
    return a + b;
  },
  " - ": function name(a, b) {
    return a - b;
  },
  " ÷ ": function name(a, b) {
    return a / b;
  },
  " x ": function name(a, b) {
    return a * b;
  },
};
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
function click_operator(element) {
  //! This should always take a single number to perform calculation.
  //! i.e Default (0 + input(any) -> results) => (0 + input(12) -> 12) => (12 - input(2) -> 10)
  element.addEventListener("click", () => {
    switch (element.textContent) {
      case " + ":
        nums += element.textContent;
        nums = evaluate(nums, " + ");
        nums += element.textContent;
        operands.textContent = nums;
        break;

      case " - ":
        nums += element.textContent;
        nums = evaluate(nums, " - ");
        nums += element.textContent;
        operands.textContent = nums;
        break;

      case " ÷ ":
        nums += element.textContent;
        nums = evaluate(nums, " ÷ ");
        nums += element.textContent;
        operands.textContent = nums;
        break;

      case " x ":
        nums += element.textContent;
        nums = evaluate(nums, " x ");
        nums += element.textContent;
        operands.textContent = nums;
        break;

      case "⌫":
        nums = nums.slice(0, -1);
        operands.textContent = nums;
        break;

      case " = ":
        if (nums.search(/ ÷ /g) !== -1) {
          nums = eval(nums.replace(/ ÷ /g, "/"));
        } else if (nums.search(/ x /) !== -1) {
          nums = eval(nums.replace(/ x /g, "*"));
        } else {
          // nums = eval(nums);
        }
        results.textContent = nums;
        break;

      case "C":
        nums = "";
        operands.textContent = nums;
        results.textContent = 0;
        break;

      case "+/-":
        if (arr_operators.includes(nums[nums.length - 2])) {
          console.log(nums[nums.length - 2]);
        }
        // nums = nums * -1;
        operands.textContent = nums;
        break;
    }
  });
}
