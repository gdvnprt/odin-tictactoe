// build a gameboard array with 9 squares and the overall game state
let gameBoard = [];

function createGameSquare(a) {
    const squareNumber = a;
    let squareMarker = '';
    return { squareNumber, squareMarker };
};

for (let i = 1; i < 10; i++) {
    gameBoard.push(createGameSquare(i));
};

// build two player objects with names and a marker X or O

function createPlayer(name, marker) {
    const name = name;
    const marker = marker;
    return { name, marker };
};

// have the players take turns marking a square with their marker
// if a player gets 3 of their markers in a row in any direction, report they win
// if all squares fill with markers and there is no winner, report a tie
// reset the board with a command
// change player names with a command