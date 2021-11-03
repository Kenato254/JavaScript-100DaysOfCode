// This will throw an exception
function func(){
    "use strict";
    first_name = "Kennedy";
}

"use strict";
last_name = "Gitonga"; // This will not throw an exception
x = 3.14;
console.log(x);

/* This Keyword */
function func2(){
    const person = {
        fname: "Kennedy",
        lname: "Gitonga",
        age: 30,
        full_name: function(){
            return `${this.fname} ${this.lname}`;
        }
    };
    console.log(person.full_name());
}
var hello;
hello = ()=>'Hello world';
console.log(hello().this)