// Fake contact @https://github.com/wellingtoncosta/fake-contacts-json/blob/master/db.json

// Free Codeacademy Learn JavaScript for beginners excercises 
// Number 1
contacts = [
    {
        "id": 1,
        "name": "Elma Herring",
        "email": "elmaherring@unq.com",
        "phone": "+1 (913) 497-2020"
    },
    {
        "id": 2,
        "name": "Knapp Berry",
        "email": "knappberry@unq.com",
        "phone": "+1 (951) 472-2967"
    },
    {
        "id": 3,
        "name": "Bell Burgess",
        "email": "bellburgess@unq.com",
        "phone": "+1 (887) 478-2693"
    },
    {
        "id": 4,
        "name": "Hobbs Ferrell",
        "email": "hobbsferrell@unq.com",
        "phone": "+1 (862) 581-3022"
    },
    {
        "id": 5,
        "name": "Marylou Medina",
        "email": "maryloumedina@unq.com",
        "phone": "+1 (996) 520-2967"
    },
    {
        "id": 6,
        "name": "Larson Guerra",
        "email": "larsonguerra@unq.com",
        "phone": "+1 (972) 566-2684"
      },
];

function lookUpProfile(name, prop) {
    for(contact of contacts) {
        for(key in contact) {
            if (contact[key] === name ){
                return contact[prop] || "No such property";
            }
        }
    }
    return "No such contact";
    
}
// console.log(lookUpProfile("Marylou Medina", "phone"));

// Number 2
function randomRangeNum(min_num, max_num) {
    return Math.floor(Math.random() * (max_num - min_num + 1)) + min_num;
}
// console.log(randomRangeNum(5, 15))

// Number 3
function convertToInteger(str) { // Base 2 is binary normal is base 10
    return parseInt(str, 2) // Radix - specifies the base of the number in the string
}
// console.log(convertToInteger("10011"))

// Number 4 Ternary Operator
function checkEqual(a, b) {
    return a > b ? a : b;
}
// console.log(checkEqual(1, 4))

// Number 5
function checkSign(num) {
    // Nested ternary
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}
// console.log(checkSign(-1));
function useStrict() {
    "use strict"; // Strict mood -> Catches coding mistakes and unsafe actions
}

function checkScope() {
    "use strict";
    var myvar = "function var";
}
// console.log(myvar);

// Number 6 FREEze
function freezObj() {
    "use strict";
    const CONTACT = {
        fullName: "Kennedy Gitonga Muthuri",
        email: "kendygitonga@gmail.com",
        phone: "+254 700 056 640",
    }

    Object.freeze(CONTACT); // Uneditable

    try {
        CONTACT.email = "kenedygitonga@gmail.com";
    } 
    catch (TypeError) {
        console.log("CONTACT is uneditable!");
    }
    return CONTACT;
}
freezObj()

// Number 7 arrow function 
const add = (a, b) => a+b;

// console.log(add(10, 1));