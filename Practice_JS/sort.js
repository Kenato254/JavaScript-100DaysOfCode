/* Sorting Array Method Sort & Reverse */
/* String */
function sortString() {    
    const fruitsTypes = [
        'Pears', 
        'Citrus', 
        'Stone fruit', 
        'Tropical and exotic', 
        'Berries', 
        'Melons', 
        'Tomatoes and avocados'
    ];

    fruitsTypes.sort(); // Sorts alphabetically
    fruitsTypes.reverse(); // Reverse order of the elements

    /* Sort array by length of elements */
    fruitsTypes.sort(function(a, b){return a.length - b.length}); 
}
/* Numerics */
function sortNumeric() {
    /* Numeric Sort Using Compare function */
    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a - b}); // Ascending
    points.sort(function(a, b){return b - a}); // Descending
}

/* The Fisher Yates shuffle Method Randon Order*/
 function fisherYates(arr) {
    for (let x = nums.length -1; x > 0; x--) {
        let y = Math.floor(Math.random() * x);
        let z = nums[x];
        nums[x] = nums[y];
        nums[y] = z;
    }
    return arr;
}

/* Custom Sorting Function using Swapping variable Method*/
const nums = [40, 100, 1, 80, 5, 25, 10, 90, 45];
function sortArray(arr) {
    let sort = true;
    while (sort) {
        sort = false;
        for (let x = 0; x < arr.length-1; x++) {
            if (arr[x] > arr[x + 1]) {
                sort = true;
                arr[x] = arr[x] ^ arr[x + 1];
                arr[x + 1] = arr[x] ^ arr[x + 1];
                arr[x] = arr[x] ^ arr[x + 1];
            }
        }
    }
    return arr;
}

/* Find the highest/Lowest Array Value */

//Highest value using Math.max.apply
function findMax(arr) {
    return Math.max.apply(null, arr);
}

// Loweest value using Math.min.apply
function findMin(arr) {
    return Math.min.apply(null, arr);
}

// Custom Find Max value Function
function findHighest(arr) {
    let len = arr.length;
    let max = -Infinity;
    while(len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}
// Custom Find Min value Function
function findLowest(arr) {
    let len = arr.length;
    let min = Infinity;
    while(len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}

// Find the second Highest.

function secondHighest(arr) {
    let len = arr.length;
    let max = -Infinity;
    let sndMax = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            sndMax = max;
            max = arr[len];
        }
        else if ((arr[len] > sndMax) && (arr[len] != max)){
            sndMax = arr[len];
        }
    }
    console.log(`Max: ${max}`);
    console.log(`Second Max: ${sndMax}`);
    return
    
}

secondHighest(nums)
/* Sorting OBJECT Arrays */
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
// Sorting using Numeric in the object
// cars.sort(function(a, b){return a.year - b.year});

// Sorting using String in the object
cars.sort(function(a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});

