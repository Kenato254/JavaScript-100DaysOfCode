"use strict";

/* Promise ES6 */
let skippedADay = true;
let didMy100DaysOFCode = '#100DaysOfCode';
const promise = new Promise((resolve, reject) => {
    if (!skippedADay) {
        resolve("Good work keep working hard!");
    } else {
        reject("Work load doubled. No day off!")
    }
})
promise.then((message) => {
    console.log("One day less of " + didMy100DaysOFCode + ". " + message);
}).catch((message) => {
    console.log("One day added to " + didMy100DaysOFCode + ". " + message);
})

/* Map() ES6 */
function myMap() {
    const fruits = new Map();
    fruits.set('Apples', 500);
    fruits.set('Bananas', 100);
    fruits.set('Cider', 200);
    fruits.set('Oranges', 900);
    fruits.set('Kiwi', 600);
    return fruits;
}
// console.log(myMap().get('Bananas'));
// console.log(myMap().keys());
// console.log(myMap().values());
// console.log(myMap().size);
// console.log(myMap().clear());

const myPromise = Promise.resolve('Processing data....');

(async () => {
  try {
    console.log(await myPromise);
  } catch {
    throw new Error(`Oops didn't work`);
  } finally {
    console.log('Data processed!');
  }
})();