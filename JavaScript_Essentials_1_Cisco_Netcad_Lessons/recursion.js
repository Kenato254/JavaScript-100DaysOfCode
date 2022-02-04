/* 
!FUNCTION STATEMENTS -> Are preceded by function keyword followed by function name and called using function name.
*/
function factorial_loop(n) {
    let result = 1;
    while (n != 0) {
        result *= n;
        n--;
    }
    return result;
}
//console.log(factorial_loop(6))

function factorial_recursion(n) {
    if (n === 0) {
        return 1
    }
    return n * factorial_recursion(n-1);
}

// console.log(factorial_recursion(6));

//! Functions are first-class members - > In JS functions can be treated like any other data.
//? They can be stored in variables or can passed to other functions as arguements

function greetings() {
    return 'Hello world!';
}

let greet = greetings; //* Assign a function
let greet2 = greetings() //* Assign a results of a function

// console.log(typeof greet); //* A function
// console.log(typeof greet2); //* A string


function add(x, y){
    return x + y;
}

function muiltiply(x, y){
    return x * y;
}

function operation(func, param1, param2){
    return func(param1, param2);
}

// console.log(operation(add, 10, 2));
// console.log(operation(muiltiply, 10, 2));
/*
! FUNCTION EXPRESSIONS - > Are stored in varable names can be passed to other functions, maybe anonymous or not.
*/

let sum = function (x ,y) {
    return x + y;
}
// console.time();
// console.log(sum(10, 2));
// console.timeEnd();

/*
! ARROW FUNCTION EXPRESSIONS
*/
let exponent = param => param **=2;
let callback = (func, a, b) => {return func(a, b)};

// console.log(exponent(10));
// console.log(callback(sum, 10, 2));

let recursion = (n) => {
    if (n === 1) {
        return 1;
    }
    return n * recursion(n-1);
}
// console.log(recursion(6));

let names = ['Alice', 'Eve', 'John'];
names.forEach(item => {
    console.log(item);
});

// {
//     let numbers = [50, 10, 40, 30, 20];
//     numbers.sort((a,b)=> a-b);
//     console.log(numbers);
//     numbers.sort((a,b)=> b-a);
//     console.log(numbers);

//     let add = (a, b) => {
//         if (Number.isInteger(a) && Number.isInteger(b)){
//             return a + b;
//         } else {
//             return NaN;
//         }
//     }

//     let sub = (a, b) => {
//         if (Number.isInteger(a) && Number.isInteger(b)){
//             return a - b;
//         } else {
//             return NaN;
//         }
//     }

//     let mult = (a, b) => {
//         if (Number.isInteger(a) && Number.isInteger(b)){
//             return a * b;
//         } else {
//             return NaN;
//         }
//     }

//     function action(func, a, b) {
//         return func(a, b);
//     }
//     console.log(action(add, 10, 2));
//     console.log(action(sub, 10, 2));
//     console.log(action(mult, 10, 2));
// }
// let count = 1;

// let print = function (){
//     if (count === 10) {
//         stopPrint();      
//     }    
//     console.log(count++);
// }
// setInterval(print, 1000);

// function stopPrint() {
//     clearInterval(print);    
// }

function fib(n) {
    if (n != 0) {
        if (n === 1){
            return 1;
        }
        return fib(n-1) + fib(n-2);    
    }
}
console.log(fib(6));


let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }
];
let cname = cphone = cemail = '';
function showContact(contact, contactList){
    if (contactList instanceof Array && contactList.length > 0){
        console.log(`${contacts[contact]['name']}/${contacts[contact]['phone']}/${contacts[contact]['email']}`);
    }
}

function showAllContacts(contactList){
    if (contactList instanceof Array && contactList.length > 0){
        contacts.forEach((items)=>{
            console.log(`${items['name']}/${items['phone']}/${items['email']}`);
        });
    }
}

function addNewContact(fullName, phone, email, contactList){
    getContacts();
    if (contactList instanceof Array && contactList.length > 0){
        contactList.push({
            name: fullName,
            phone: phone,
            email: email
        });    
    }
}

function getContacts(){
    let get = false;
    while (!get){
        cname = prompt("Enter full name ");
        if (cname != null){
            cphone = prompt("Enter phone number ");
            cemail = prompt("Enter email address ");
        } else {
            get = true;
        }
    }
    addNewContact(cname, cphone, cemail);
}