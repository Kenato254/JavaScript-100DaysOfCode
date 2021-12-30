let operands = document.querySelector("#para-operands");
let results = document.querySelector("#results");
let btns = document.querySelectorAll("[buttons]");
let arr_operators = [" ÷ ", " x ", " - ", " + ", " = "];
let other_operators = ["C", "⌫", "%"];
let operands_nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

let calculate = []; //! Concatenates String to be output on calculator screen
let calculation = []; //! Concatenates String to be output on calculator screen
let nums = [];

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
  //! Function provide EventHandler to log operators and operands to the calculator screen
    //! This should always take a single number to perform calculation.
  //! i.e Default (0 + input(any) -> results) => (0 + input(12) -> 12) => (12 - input(2) -> 10)

  element.addEventListener("click", () => {
    if (element.textContent === " + ") {
      //! Performs addition operations
      let x = results.textContent
      console.log(x);
      nums.push(element.textContent);
      operands.textContent = nums.join("");
      let addition = () => {
        const arr = nums.join("").split(" ")
        let sum = parseFloat(arr.shift());
        for (let num of arr) {
          num = parseFloat(num);
          if (isNaN(num) === false) {
            sum += num;
            console.log(sum); 
          }
        }
        return sum;
      };
      results.textContent = addition();

    } else if (element.textContent === " - ") {
      //! Performs addition operations
      nums.push(element.textContent);
      operands.textContent = nums.join("");
      let substraction = () => {
        const arr = nums.join("").split(" ")
        let substract = parseFloat(arr.shift());
        for (let num of arr) {
          num = parseFloat(num);
          console.log(typeof num)
          if (isNaN(num) === false) {
            substract -= num;
            console.log(substract);
          }
        }
        return substract;
      };
      results.textContent = substraction();

    }else if (element.textContent === " x ") {
      //! Performs Multiplication operations
      nums.push(element.textContent);
      operands.textContent = nums.join("");
      let multiply = () => {
        const arr = nums.join("").split(" ")
        let multiple = parseFloat(arr.shift());
        for (let num of arr) {
          num = parseFloat(num);
          console.log(typeof num)
          if (isNaN(num) === false) {
            multiple *= num;
            console.log(multiple);
          }
        }
        return multiple;
      };
      results.textContent = multiply();

    } else if (element.textContent === " ÷ ") {
      //! Performs Division operations
      nums.push(element.textContent);
      operands.textContent = nums.join("");
      let division = () => {
        const arr = nums.join("").split(" ")
        let divide = parseFloat(arr.shift());
        for (let num of arr) {
          num = parseFloat(num);
          console.log(typeof num)
          if (isNaN(num) === false) {
            divide /= num;
            console.log(divide);
          }
        }
        return divide;
      };
      results.textContent = division();

    } else if (element.textContent === "C") {
      //! Clear screen
      nums = [];
      operands.textContent = [];
      results.textContent = "0";

    } else if (element.textContent === " = ") {
      results.textContent = calculation;
      calculations();

    } else if (element.textContent === "⌫") {
      nums.pop();
      operands.textContent = nums.join("");

    } else {
      nums.push(element.textContent);
      operands.textContent = nums.join("");

    }
  });
}
function calculations() {
  //! Function performs calculations
  for (let each of calculate) {
    // console.log(each);
  }
}
