let n1 = parseInt(prompt("Enter a number "), 0)
n1 = Number.isNaN(n1)? 0 : n1;
let n2 = parseInt(prompt("Enter another number "), 0);
n2 = Number.isNaN(n2) ? 0 : n2;
let operation = prompt("Enter operation (+ - / *) to calculate ");

switch (operation) {
    case "+":
        console.log(n1 + n2);
        break;
    case "-":
        console.log(n1 - n2);
        break;
    case "*":
        console.log(n1 * n2);
        break;
    case "/":
        console.log(n1 / n2);
        break;
    default:
        console.log("Invalid operation");
}

while (true) {
    let firstNumber = prompt("Enter first number");
    let secondNumber = prompt("Enter second number");
    let operand = prompt("Enter operand (+, -, * or /)");
    let result;

    if (firstNumber === "Q" || secondNumber === "Q" || operand === "Q") {
        break;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
        switch (operand) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            default:
                result = "Error: unknown operand";
        }
    } else {
        result = "Error: at least one of the entered values is not a number";
    }
    alert(result);

/*
During the last modification of the program with the contact list, 
we allow the user to add a new contact with the data entered by the user while the program is executing. 
Let's go a step further – try to modify the program so that the user has a choice of what they want to do 
with the list. They will have a choice of:

showing the first contact (first)
showing the last contact (last)
adding a new contact (new)

When adding a new contact, check if the user has entered all the necessary data. 
If at least one of the three values is missing (name, phone, or email) don't add the contact.
*/

let contacts = [
    {
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

let get = false;
while (!get) {
    let show = prompt("Enter \"first\" or \"last\" or \"new\" or \"all\" or \"quit\" contact to display ");
    if (show === 'first'){
        display(show);

    }else if (show === 'last'){
        display(show);

    } else if (show === 'all'){
        display(show);

    } else if (show === 'new') {
        let name = prompt("Enter full name ");
        let phone = prompt("Enter phone number ");
        let email = prompt("Enter email address ");
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });

        display('last');

    } else if (show === 'quit') {
        get = true;
    }
};

function display (param){
    switch (param){
        case 'first': {
            console.log(`${contacts[0]["name"]}/${contacts[0]["phone"]}/${contacts[0]["email"]}`);
            break;
        }
        case "last": {
            var len = contacts.length-1;
            console.log(`${contacts[len]["name"]}/${contacts[len]["phone"]}/${contacts[len]["email"]}`);
            break;
        }
        case "new": {
            var len = contacts.length-1;
            // console.log(`${contacts[len]["name"]}/${contacts[len]["phone"]}/${contacts[len]["email"]}`);
            break;
        }
        case 'all': {
            for (let contact in contacts){
                console.log(
                    `${contacts[contact]["name"]}/${contacts[contact]["phone"]}/${contacts[contact]["email"]}`
                );
            }
        }
        default:
            console.log("Invalid choice");        
    };    
}

let movies = [];
let get = true;
while (get){
    let movie = prompt("Enter a 'movie' and 'imdb' ");
    if (movie !== null){
        movies.push({
            title: movie.split(",")[0], 
            imdb: movie.split(",")[1]
        });
    } else {
        get = false;
    }
};

for (let each of movies){
    for (let key in each){
        console.log(`${key} -> ${each[key]}`);
    }
};