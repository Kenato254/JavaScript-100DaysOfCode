/* For Loop */
function myfunc() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let text = "";
    for (let day=0; day < 7; day++) {
        text += "This is " + days[day] + "<br>";
    }
}

function myfunc2() {
    // Using Var
    var i = 0;
    for (var i = 0; i < 10; i++) {
        i += i;
    } // i = 15;

    // Using let
    let x = 0;
    for (let x = 0; x < 10; x++) {
        x += x;
    } // x = 0;
}

/* For In Loop */
function myfunc3() {
    const obj = {
        "books": [
        {
            "Learn Django": {
            "added_by": "Django Software Foundation",
            "date_added": "2021-10-24"
            }
        },
        {
            "Learn CSS": {
            "added_by": "CSS Foundation",
            "date_added": "2021-10-24"
            }
        },
        {
            "Learn Bootstrap": {
            "added_by": "Bootstrap Foundation",
            "date_added": "2021-10-24"
            }
        },
        {
            "The River Between": {
            "added_by": "Ngugi wa Thiong'",
            "date_added": "2021-10-25"
            }
        },
        {
            "Learn JavaScript": {
            "added_by": "JavaScript Foundation",
            "date_added": "2021-10-25"
            }
        }
        ]
    }
    // Not suitable for ordered loop
    for (let i in obj) { // For In Over Arrays
        for (key in obj[i]) { // For In Over Objects
            obj[i][key];
        }
    }
}
/* ForEach */
function myfunc4() {
    const book = [1, 2, 3, 4, 5];
    let txt = ""
    book.forEach(func);

    function func(value, index, array) {
        txt += value;
    }
    console.log(txt);
}

function myfunc5() {
    const cars = ["BMW", "Volvo", "Mini"];
    for (let x of cars){
        console.log(x);
    }

    let language = 'Javascript';
    for (let y of language) {
        console.log(y);
    }
}

/* While Loop */
function myfunc6() {
    let x =0
    while (x < 10) {
        console.log(x);
        x++;
    }
}

/*Do While */
function myfunc7() {
    let number = 10; // npm install prompt
    do {
        console.log('Welcome to number guess');
        console.log("Enter 10 to exit loop.")
    }
    while (number != 10)
}

/* Break Statment*/
function myfunc8() {
    for (let x = 0; x < 10; x++) {
        if (x === 4){break;}
        console.log(x);
    }
}
/* Continue Statement */
function myfunc9() {
    for (let x = 0; x < 10; x++) {
        if (x % 2 !== 0){continue;}
        console.log(x);
    }
}

/* Break Statment with a label*/
function myfunc10() {
    let text = ""
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    list: {
      text += cars[0] + "<br>";
      text += cars[1] + "<br>";
      break list;
      text += cars[2] + "<br>";
      text += cars[3] + "<br>";
    }
    console.log(text)
}
myfunc10();