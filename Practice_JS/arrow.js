
// This inside an object points to the object itself when used with normal functions not arrow functions
const person = {
    fname: "Kennedy",
    lname: "Gitonga",
    age: 31,
    fullname: function () {
        return `My name is ${this.fname} ${this.lname}.`;
    },
    /*With arrow functions the this keyword always represents the object that defined the arrow function.*/ 
    name_age: ()=> {return `My name is ${this.fullname} and I'm ${this.age} years old`}, // Returns undefined
}
// Refers to the global scope object which is Window 
this.say = 'Hello World'

function func() {
    const person = {
        fname: "Kennedy",
        lname: "Gitonga",
        age: 31,
        fullname: function () {
            return `My name is ${this.fname} ${this.lname}.`;
        }
    }
    console.log(person)
}

console.log(func())
