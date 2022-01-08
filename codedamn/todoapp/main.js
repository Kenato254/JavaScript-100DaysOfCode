
let buttons = document.querySelectorAll('[btn]');
let input = document.getElementById('text');
let main = document.querySelector('#main');

let events  = (function () {
    //* Function handles click response
    for (let button of buttons) {
        button.addEventListener('click', clickResponse)
    }
})();

const tasks = []; //* Tasks container
function clickResponse() {
    //* Event handler function
    if (this.textContent === 'add') {
        if (input.value === "") {
            console.log("Task cannot be empty");
        } else {
            updateTask(input.value);
            print();
            localstorage();    
        }
    } else if (this.textContent === 'delete') {
        input.value = "";
    }
}

function updateTask(task) {
    //* Function updates List of task to be store in the localStorage
    tasks.push(task);
}

function localstorage(){
    //* Function sets and updates localStorage
    if (typeof(Storage) !== "undefined") {
        if (tasks.length > 0) {
            let allTasks = JSON.stringify(tasks);
            localStorage.setItem('tasks', allTasks);
        }    
    } else {
        alert("Sorry! No Web Storage support!");
    }
};

function print() {
    for(let task of tasks) {
    console.log(task);
    }
}