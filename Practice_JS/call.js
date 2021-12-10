/*
  ! Call() -> Predefined JavaScript Method.
  ! With call(), an object can be use a method belonging to another object
*/
const myObject = {
    fname: 'Kennedy',
    lname: 'Gitonga',
    fullName: function() {
        return this.fname +" "+ this.lname;
    }
}

const myObject2 = {
    fname: 'Samrawit',
    lname: 'Fetene'
}

const myObject3 = {
    fname: 'Davies',
    lname: 'Kabiro'
}

var person = myObject.fullName.call(myObject);
var person2 = myObject.fullName.call(myObject2);
var person3 = myObject.fullName.call(myObject3);

// console.log(person+'.');
// console.log(person2+'.');
// console.log(person3+'.');

const student = {
    fullName: function(age, course) {
        return this.fname +' '+this.lname + ' ' + age + ' '+ course+'.';
    }
}
var s = student.fullName.call(myObject2, '23', 'BA Marketing ');
console.log(s)
