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
console.log(fullName.full_name.call(person, ...extra)); //! Call() Function spreading array using ...
console.log(fullName.full_name.apply(person, extra)); //! Apply Function
let n = fullName.full_name.bind(person, ...extra) //! Returns a new function
console.log(n())

