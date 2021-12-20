let operands = document.querySelector('#para-operands');
let results = document.querySelector('#results');
let btns = document.getElementsByTagName('div');
let arr_operators = [' / ', ' x ', ' - ', ' + ', '='];
let other_operators = ['C', 'CE', '%'];
let operands_nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

let calculate = []; //! Concatenates String to be output on calculator screen


operands_colors();
function operands_colors() {
    //! Function to handle some css styling and pass elements to click functionality

    for (let each of btns) {
        if(arr_operators.includes(each.textContent)) {
            each.setAttribute('class', 'operands-color-one');
            click_functionality(each);
        } else if(other_operators.includes(each.textContent)) {
            each.setAttribute('class', 'operands-color-two');
            click_functionality(each);
        } else if(operands_nums.includes(each.textContent)) {
            each.setAttribute('class', 'operands');
            click_functionality(each);
        }
    }
}

function click_functionality(element) {
    //! Function provide EventHandler to log operators and operands to the calculator screen

    element.addEventListener('click', ()=> {
        if (element.textContent === '=') {
            results.textContent = calculate;
        }else if(element.textContent === ' + ') {
            calculate.push(element.textContent);
            operands.textContent = calculate.join('');
            // results.textContent = ;
        }else if(element.textContent === ' x ') {
            calculate.push(element.textContent);
            operands.textContent = calculate.join('');
        }else if(element.textContent === ' / ') {
            calculate.push(element.textContent);
            operands.textContent = calculate.join('');
        }else if(element.textContent === 'C') {
            calculate = [];
            operands.textContent = calculate;
            results.textContent = '0';
        } else {
            calculate.push(element.textContent);
            operands.textContent = calculate.join('');
        }
    });
}