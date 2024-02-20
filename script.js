// build a gameboard array with 9 squares and the overall game state
function createGameSquare(a) {
    const squareNumber = a;
    let marker;
    return { squareNumber, marker };
};

function createPlayer(name, marker) {
    const name = name;
    const mark = marker;
    return { name, mark };
};

const player1 = createPlayer(n, 'X');
const player2 = createPlayer(n, 'O');

function gameBoard() {
    let board = [];
    for (let i = 1; i < 10; i++) {
        board.push(createGameSquare(i));
    };

    const markX = (a) => board[a].marker = 'X';
    const markO = (b) => board[b].marker = 'O';

    const checkWinner = function(c) {
        if ((board[0].marker == board[1].marker == board[2].marker == c) ||
            (board[3].marker == board[4].marker == board[5].marker == c) ||
            (board[6].marker == board[7].marker == board[8].marker == c) ||
            (board[0].marker == board[3].marker == board[6].marker == c) ||
            (board[1].marker == board[4].marker == board[7].marker == c) ||
            (board[2].marker == board[5].marker == board[8].marker == c) ||
            (board[0].marker == board[4].marker == board[8].marker == c) ||
            (board[2].marker == board[4].marker == board[6].marker == c)) {
                return c + ' is the winner!'
            };
    };

    const checkTie = function() {
        if ((board[0].marker == 'X' || 'O') ||
            (board[1].marker == 'X' || 'O') ||
            (board[2].marker == 'X' || 'O') ||
            (board[3].marker == 'X' || 'O') ||
            (board[4].marker == 'X' || 'O') ||
            (board[5].marker == 'X' || 'O') ||
            (board[6].marker == 'X' || 'O') ||
            (board[7].marker == 'X' || 'O') ||
            (board[8].marker == 'X' || 'O')) {
                return 'Tie Game'
            };
    };

    return { board, markX, markO, checkWinner, checkTie };
};


// if all squares fill with markers and there is no winner, report a tie
// reset the board with a command
// change player names with a command