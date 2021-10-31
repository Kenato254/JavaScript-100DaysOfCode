class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    startEngine() {
        console.log("Starting engine...");
        console.log("Starting engine...");
        console.log("Starting engine...");
        console.log("Engine started.");

    }
    stopEngine() {
        console.log("Stopping engine...");
        console.log("Stopping engine...");
        console.log("Stopping engine...");
        console.log("Engine stopped.");
    }
}

function main( ) {
    let jeep = new Car("Jeep", "Wrangler", 2020);
    jeep.startEngine();
    jeep.stopEngine();
}

// JSON - JavaScript Object Notation
let text = `{ "employees" : [
{ "firstName":"John" , "lastName":"Doe" },
{ "firstName":"Anna" , "lastName":"Smith" },
{ "firstName":"Peter" , "lastName":"Jones" } ]}`

console.log(JSON.parse(text))