const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const WINNING_COMBINATIONS = [
    // Horizontal Win
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical Win
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal Win
    [0, 4, 8],
    [2, 4, 6]
];
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
let circleTurn;

startGame()

function startGame() {
    circleTurn = false;
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass()
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        console.log('Winner');
    } 
    // Check For win
    // Check for Draw
    // Switch Turns
    swapTurns()
    setBoardHoverClass()
}
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}
function swapTurns() {
    circleTurn = !circleTurn;    
}
function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}
function checkWin(currentClass) {
    WINNING_COMBINATIONS.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentClass);
        })
    })
}
