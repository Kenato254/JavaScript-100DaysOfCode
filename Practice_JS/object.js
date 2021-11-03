// Working with  Objects
const cars = {};
cars.make = 'Ford';
cars['model'] = 'Mustang';
cars.year = 1967;

delete cars.year;
delete cars['model']

// hasOwnProperty OBJECT Method
function phoneticLookup(val) {
    const place = {
        'alpha': 'Austria',
        'beta': 'Bosnia',
        'delta': 'Damescus',
        'charlie': 'Cairo',
    };
    if (place.hasOwnProperty(val)) {
        return place[val];
    }else {
        return 'Not Found';
    }
}
// Create array
function createArr() {
    const n = [];

    let x = 0;
    while(x < 5) {
        n.push(x);
        x++;
    }
}
// Patterns
function printPattern(){
    let len = 7;
    for (let i=len; i > 0; i--){
        for (let j=i; j < i+1; j++){
            console.log('*'.repeat(j));
        }
 
    }
}

const l = [1, 2, 3]
function rotate(arr) {
    let first = arr.shift();
    arr.push(first);
    return arr;
}

// Exercise @ -> https://www.jshero.net/en/koans/arrayindexof.html
/*Write a function add that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
Example: add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2]. */

function add(arr, num) {
    if (arr.indexOf(num) === -1) {
      arr.push(num);
    }
    return arr;
}