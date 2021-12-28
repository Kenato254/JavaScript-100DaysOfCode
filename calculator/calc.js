let operands = document.querySelector("#para-operands");
let results = document.querySelector("#results");
let btns = document.querySelectorAll("[buttons]");
let arr_operators = [" ÷ ", " x ", " - ", " + ", " = "];
let other_operators = ["C", "⌫", "%"];
let operands_nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

let nums = 0;
let calculate = [];
let display = [];

operands_colors();
function operands_colors() {
  //! Function to handle some css styling and pass elements to click functionality
  for (let each of btns) {
    if (arr_operators.includes(each.textContent)) {
      each.setAttribute("class", "operands-color-one");
      click_functionality(each);
    } else if (other_operators.includes(each.textContent)) {
      each.setAttribute("class", "operands-color-two");
      click_functionality(each);
    } else if (operands_nums.includes(each.textContent)) {
      each.setAttribute("class", "operands");
      click_functionality(each);
    }
  }
}
function click_functionality(element) {
  //! This should always take a single number to perform calculation.
  //! i.e Default (0 + input(any) -> results) => (0 + input(12) -> 12) => (12 - input(2) -> 10)
  element.addEventListener("click", () => {
    if (element.textContent === " + ") {
      display.push(element.textContent);
      nums += parseFloat(calculate.pop());
      results.textContent = nums;
      operands.textContent = display.join("");
      console.log(display);


    } else if (element.textContent === " - ") {
      display.push(element.textContent);
      operands.textContent = display.join("");

      nums -= parseFloat(calculate.pop());
      results.textContent = nums;

    } else if (element.textContent === " = ") {
      display.push(element.textContent);
      calculate.push(nums);
      operands.textContent = element.textContent;
      operands.textContent = display.join("");

      console.log(nums)


    } else if (element.textContent === "⌫") {
      console.log('Backspace is clicked')
      display.pop();
      operands.textContent = display.join("");

    } else if (element.textContent === "C") {
      nums = 0;
      display = [];
      calculate = [];
      operands.textContent = display.join("");
      results.textContent = nums;

    } else {
      display.push(element.textContent);
      calculate.push(element.textContent);
      operands.textContent = element.textContent;
      operands.textContent = display.join("");


    }
  });
}
