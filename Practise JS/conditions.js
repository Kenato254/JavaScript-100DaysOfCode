// Booleans
function bool1() {
    console.log(Boolean(4 > 1));
}

// Ternary Operator
function ternary_op(age) {
    let voatable = (age < 18) ? "Too young to vote.": "Old enough to vote.";
    return voatable;
}
console.log(ternary_op(18));
