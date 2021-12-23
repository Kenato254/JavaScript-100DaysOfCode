let operands = document.querySelector("#para-operands");
let results = document.querySelector("#results");
let btns = document.querySelectorAll("[buttons]");
let arr_operators = [" / ", " x ", " - ", " + ", "="];
let other_operators = ["C", "CE", "%"];
let operands_nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

let calculate = []; //! Concatenates String to be output on calculator screen
let calculation; //! Concatenates String to be output on calculator screen
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
  element.addEventListener("click", () => {
    if (element.textContent === " + ") {
      calculate.push(nums.join(''))
      calculate.push(element.textContent);
      operands.textContent = calculate.join('');
      let addition = ()=> {
          let sum = 0;
          for (let num of calculate) {
              if(isNaN(num) === false) {
                  // console.log(num)
                  sum += parseInt(num);
              }
          } return sum;
      };
      calculation = addition();
      results.textContent = addition(); 
    } else if (element.textContent === " x ") {
      calculate.push(element.textContent);
      operands.textContent = calculate.join("");
      let multiply = ()=> {
        let multiple = 1;
        for (let num of calculate) {
            if(isNaN(num) === false) {
                multiple *= parseInt(num);
            }
        } return multiple;
    };
    calculation = multiply();
    results.textContent = multiply(); 
    } else if (element.textContent === " / ") {
      calculate.push(element.textContent);
      operands.textContent = calculate.join("");
      let division = ()=> {
        let divide = 1;
        for (let num of calculate) {
            if(isNaN(num) === false) {
                divide /= parseInt(num);
            }
        } return divide;
    };
    calculation = division();
    results.textContent = division(); 
    } else if (element.textContent === "C") {
      nums = [];
      calculate = [];
      operands.textContent = calculate;
      results.textContent = "0";
    }     else if (element.textContent === "=") {
      results.textContent = calculation;
      calculations();
    }  else {
      nums.push(element.textContent);
      // calculate.push(element.textContent);
      // console.log(nums.join(""));
      operands.textContent = calculate.join("");
    }
  });
}
function calculations() {
  //! Function performs calculations
  for (let each of calculate) {
    console.log(each);
  }
}
