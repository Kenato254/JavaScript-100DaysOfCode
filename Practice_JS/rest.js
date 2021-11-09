/* Rest Operator */
function sum(...args){
    return args.reduce((total, value) =>{
        return total += value;
    })
}
// console.log(sum(1, 2, 3))

/* Spread operator */
const fruits = ['apples', 'banana', 'oranges', 'grapes'];
function duplicateArr(arr) {
    const newArr = [...arr];
    arr[0] = 'Pineapple';
    return newArr;
}
// console.log(`Copy: ${duplicateArr(fruits)}`)
// console.log(`Original: ${fruits}`)

/*Destructor */
const fruitsObj = {apples:10, banana:100, oranges:0, grapes:200};
function destruct(obj) {
    // Destructing
    const {apples:a, banana:b, oranges:c, grapes:d} = obj;
    console.log(a, b, c, d);
}
// destruct(fruitsObj);
const person = {
    fname: 'Kennedy Gitonga', 
    work: {
        job_title: 'Software Developer', 
        role: 'Full Stack Dev'
        }, 
        age: 30
    };
function destruct2(object) {
    const {work:{job_title:title, role:specility}} = object;
    console.log(
        title +"\n" + specility
    );
}
destruct2(person)