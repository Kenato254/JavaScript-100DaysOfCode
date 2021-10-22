/*
JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
*/
//One day (24 hours) is 86 400 000 milliseconds.

// Method one
const date = new Date();
function todayDate() {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    console.log(`Date now: ${day}/${month}/${year}`);
}
function timeNow() {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(`Time now: ${hours}:${minutes}:${seconds}`)
}

// Method two

// new Date(year, month, day, hours, minutes, seconds, miliseconds)
const date2 = new Date(2021, 10, 21, 11, 28, 00, 0);
function todayDate2() {
    let day = date2.getDate();
    let month = date2.getMonth();
    let year = date2.getFullYear();
    console.log(`Date now: ${day}/${month}/${year}`);
}
function timeNow2() {
    let hours = date2.getHours();
    let minutes = date2.getMinutes();
    let seconds = date2.getSeconds();
    console.log(`Time now: ${hours}:${minutes}:${seconds}`);
}

// Method three
const date3 = new Date('November 12, 2021 10:20:30');
function todayDate3() {
    let day = date3.getDate();
    let month = date3.getMonth();
    let year = date3.getFullYear();
    console.log(`Date now: ${day}/${month}/${year}`);

}
function timeNow3() {
    let hours = date3.getHours();
    let minutes = date3.getMinutes();
    let seconds = date3.getSeconds();
    console.log(`Time now: ${hours}:${minutes}:${seconds}`);
}
function runConsoles() {
    console.log(`UTC: ${date3.toUTCString()}`);
    console.log(`Simple readable: ${date3.toDateString()}`);
    console.log(`ISO: ${date3.toISOString()}`);
}

// The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format
function combo() {
    const date = new Date("2021-9-22");
    console.log(`ISO: ${date}`);
    console.log();
    const date2 = new Date("09/22/2021");
    console.log(`Short Dates: ${date2}`);
    console.log();
    const date3 = new Date("Oct 22 2021");
    console.log(`Long Dates: ${date3}`);
    let secSince1970 = Date.parse(date3);
    console.log(`Miliseconds since 1/1/1970: ${secSince1970}`);
}
combo()
