"use strict"
function getSetLang(lng) {
    var person = {
        firstName: "John",
        lastName : "Doe",
        language : "NO",
        get lang() {
        return this.language;
        },
        // Set an object property using a setter:
        set lang(value) {
        this.language = value;
        }
    };
    
    return person.lang = lng;
}  
getSetLang('sw');

function defObjectProperty() {
    // Create an Object
      person = {
        firstName: "Kennedy",
        lastName: "Gitonga",
        language: "No"
    }
    // Change a Property
    Object.defineProperty(person, "language", {
        value: "SW", 
        writable: true, 
        enumerable: false, 
        configurable: true
    });
    // Enumerate
    let txt = "";
    for (var key in person) {
        txt += person[key] + " ";
    }
    return txt;
}
defObjectProperty();

function getSetObjectProperty() {
    // Create an Object
    var person = {
        firstName: "Kennedy",
        lastName: "Gitonga",
        language: "No"
    }
    // Change a Property
    Object.defineProperty(person, "language", {
        get: function() {return language},
        set: function(value) {language = value.toUpperCase()}
    });
    person.language = 'sw'
    
    return person.language;
}
// console.log(getSetObjectProperty());

function func() {
    const arr = [20, 4, 2, 5, 12, 40];

    const arrFiltered = arr.filter(
        (value) => { return value < 10; }
    );
    return arrFiltered;
}
// High order Functions
const sum = (function () {
    return function sum(...args) {
        // const arr = [...args];
        return args.reduce((total, value) => total += value);
    }
})();
console.log(sum(20, 2, 28));

