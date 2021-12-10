"use strict";
const person = {
    fullName: function() {
        return this.fname + ' ' + this.lname;
    }
}

const p = {
    fname: 'Kennedy',
    lname: 'Gitonga'
}
var pName = person.fullName.apply(p);
console.log(pName)

//! Simulate a Max Method on Arrays
console.log(
    Math.max(1, 2, 3)
)
console.log(
    Math.max.apply(null, [1, 2, 3, 4]),
    Math.min.apply(null, [1, 2, 3, 4])
)