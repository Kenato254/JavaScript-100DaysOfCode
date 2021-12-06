const root = document.body.firstElementChild;
let nodes = document.querySelectorAll('div');
const arr = [1, 2, 2, 2, 3, 4, 2, 5, 6, 9];

function main(data) {
    //! Remove Duplicate Items
    nodes[0].innerHTML = [...new Set(arr)];

    //! ?? Operator for null and undefined
    nodes[1].innerHTML += null ?? "Not present";

    //! Type conversion -> Boolean
    nodes[2].innerHTML += !!data;

    //! Type conversion -> Number
    nodes[3].innerHTML += +data;

}
main("10");
