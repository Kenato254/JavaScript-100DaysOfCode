function func1() {
    try {
        console.log("Entering try statement...");
        nol();
    }catch(err) {
        console.log("Error has occurred --> " + err.message);
    }finally {
        console.log('Exiting try statement...');
    }
    console.log('End')
}

function processJson() {
    let json = '{"age": 30}';

    try {
        let user =JSON.parse(json);
        if (!user.name) {
            throw new SyntaxError("Incomplete data: no name");
        }
        console.log(user.name);
    } catch(e) {
        console.log("JSON Error: "+e.message);
    }
}
// Eval error/Syntax error
function func2() {
    try {
        eval("alert('Hello JS)");
    } catch (err){
        console.log(err.message);
    }
}

// TypeError
function func3() {
    let num = 10;
    try {
        num.toUpperCase();
    }catch(err) {
        console.log(err.name)
    }
}

// ReferenceError
function func4() {
    try{
        add();
    }catch(err) {
        console.log(err.name)
    }
}

// URIError
function func5() {
    try {
        decodeURI("%%%"); //A URIError is thrown if you use illegal characters in a URI function
    }catch(err) {
        console.log(err.name);
    }
}

// Scope check 1
var val = 1;
let val1 = 1;
const val2 = 1;
function funct6() {
    var val = 10;
    let val1 = 10;
    const val2 = 10;
}
// funct6()
// console.log(val);
// console.log(val1);
// console.log(val2);

//Scope check 2
function funct7() {
    var x = 10;
    let y = 10;
    const z = 10;
}
// funct7()
// console.log(x);
// console.log(y);
// console.log(z);

// Scpe check 3
var i = 1;
let j = 1;
const k = 1;
function funct8() {
    try {
        i += 9;
        j += 10;
        k += 11;
    }catch(err) {
        console.log(err.name, err.stack);
    }

}
funct8()
console.log(`i is ${i}`);
console.log(`j js ${j}`);
console.log(`k is ${k}`);
