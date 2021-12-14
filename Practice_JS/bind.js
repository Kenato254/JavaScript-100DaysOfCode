function invoker() {
    console.log(n())
    console.log(bound())
    console.log(boundFullname())
}
const person = {
    fname: 'Kennedy',
    lname: 'Gitonga'
};
const person2 = {
    fname: 'Samrawit',
    lname: 'Fetene'
}

const fullName = {
    full_name: function (age, maritalStatus) {
        return this.fname + " " + this.lname + ' ' + age + ' ' + maritalStatus;
    }
}
let extra = [31, 'Single']
let extra2 = [23, 'Single']
// console.log(fullName.full_name.call(person, ...extra)); //! Call() Function spreading array using ...
// console.log(fullName.full_name.apply(person, extra)); //! Apply Function
let n = fullName.full_name.bind(person, ...extra) //! Returns a new function

const person3 = {
    namee: 'Kennedy Gitonga',
    getName: function() {
        return this.namee;
    }
}
let unBound = person3.getName;
// console.log(unBound())
let bound = unBound.bind(person3)

const stude = {
    full_name: function (age, maritalStatus) {
        return this.fname + " " + this.lname + ' ' + age + ' ' + maritalStatus;
    }
}
let boundFullname = stude.full_name.bind(person, 31, 'single');

let x = 9;
const m = {
    x: 81,
    getX: function() { return this.x; }
}
console.log(m.getX())
let retrieveX = m.getX;
console.log(retrieveX());
















