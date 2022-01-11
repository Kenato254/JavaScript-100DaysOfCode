//! Variables
let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");
let main = document.querySelector("#main");
let error = document.querySelector("[error]");
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

let buttonsClickFunctionality = (function () {
  //* Function handles click response
  for (let button of buttons) {
    button.addEventListener("click", clickResponse);
  }
})();

let clearFieldError = (function () {
  //* Function clears field error messages
  input.addEventListener("focus", () => {
    if (error.classList.contains("error-show")) {
      error.classList.remove("error-show");
      error.classList.add("error");
    }
  });
})();

function clickResponse() {
  //* Event handler function
  if (this.textContent === "add") {
    if (input.value === "") {
      error.classList.remove("error");
      error.classList.add("error-show");
    } else {
      //? Updates Task list, localStorage and Clear input field
      taskList.push(input.value);
      updateLocalStorage();
      input.value = "";
    }
  } else if (this.textContent === "delete_forever") {
    alert("Are you sure you want to delete all tasks?");
    document.location.reload();
    localStorage.removeItem("tasks");
    input.value = "";
  }
}

function createTaskList(task) {
  // ? Create a div container, add class namely "container"
  let div = document.createElement("div");
  div.classList.add("container");
  // ? Create a readonly text input element with an id namely "task"
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "task");
  input.setAttribute("readonly", "");
  if (task.length > 0) {
    input.setAttribute("value", task);
  }
  // ? Create three buttons and add classes namely "material-icons", "done", "edit" and "delete" respectively
  let btn1 = document.createElement("button");
  btn1.textContent = "check";
  btn1.setAttribute("title", "Task done!");
  btn1.setAttribute("btn", "");
  btn1.classList.add("done", "material-icons");

  //? Edit Button
  let btn2 = document.createElement("button");
  btn2.textContent = "edit_note";
  btn2.setAttribute("title", "Edit task!");
  btn2.setAttribute("btn", "");
  btn2.classList.add("edit", "material-icons-outlined");

  //? Delete Button"
  let btn3 = document.createElement("button");
  btn3.textContent = "delete";
  btn3.setAttribute("title", "Delete task!");
  btn3.setAttribute("btn", "");
  btn3.classList.add("delete", "material-icons");

  for (let each of [input, btn1, btn2, btn3]) {
    div.appendChild(each);
  }
  main.appendChild(div);
}

function updateLocalStorage() {
  document.location.reload();
  //* Function sets and updates localStorage
  if (typeof Storage !== "undefined") {
    //? Checks browser support
    if (taskList.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(taskList));
    }
  } else {
    document.write("Sorry! No Web Storage support!");
  }
}
// Location.reload(displayAllTasks())
displayAllTasks();
function displayAllTasks() {
  //? Functions forwards tasks listed to the dynamic creating HTML function
  for (let each of taskList) {
    createTaskList(each);
  }
}

let doneEditDeleteAction = (function () {
  let targetItemUpdate;
  main.addEventListener("click", function (event) {
    if (event.target.matches("button.done.material-icons") === true) {
      if (targetItemUpdate !== undefined) {
        taskList[taskList.indexOf(targetItemUpdate)] =
          event.target.previousSibling.value; //? Grabs index of target item for update
        updateLocalStorage(); //? Update changes in the localStorage
        alert(`${event.target.previousSibling.value} updated successfully!`);
      } // else {
      //   event.target.previousSibling.setAttribute("id", "done"); //? Add Strike through
      // }
      if (
        event.target.previousSibling.attributes.hasOwnProperty("readonly") ===
        false
      ) {
        event.target.previousSibling.setAttribute("readOnly", "");
      }
    } else if (event.target.matches("button.delete.material-icons") === true) {
      let unwanted =
        event.target.previousSibling.previousSibling.previousSibling.value; //? Target element to delete
      taskList = taskList.filter((item) => {
        //? Delete target
        return item !== unwanted;
      });
      updateLocalStorage(); //? Update changes in the localStorage
      alert(`${unwanted} deleted successfully!`);
    } else if (
      event.target.matches("button.edit.material-icons-outlined") === true
    ) {
      targetItemUpdate = event.target.previousSibling.previousSibling.value; //? Grab value to be updated
      if (
        event.target.previousSibling.previousSibling.attributes.hasOwnProperty(
          "readonly"
        ) === true
      ) {
        event.target.previousSibling.previousSibling.removeAttribute(
          "readOnly"
        );
      }
      // event.target.previousSibling.previousSibling.removeAttribute(
      //   "done"
      // ); //? Remove Strike through
    }
  });
})();
