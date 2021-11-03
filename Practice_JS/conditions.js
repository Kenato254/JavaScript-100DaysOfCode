// Booleans
function bool1() {
    console.log(Boolean(4 > 1));
}

// Ternary Operator
function ternary_op(age) {
    let voatable = (age < 18) ? "Too young to vote.": "Old enough to vote.";
    return voatable;
}
function dayToday() {
    let day;
    switch(new Date().getDay()){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    console.log(day);
    
}

function WeekdayOrweekend() {
    let day;
    switch(new Date().getDay()) {
        case 0:
        case 6:
            day = "Weekend";
            break;
        default:
            day = "Weekday";
    } console.log(day);
}
