// build a gameboard array with 9 squares and the overall game state
function createGameSquare() {
    let marker;
    return { marker };
};

function createPlayer(name, marker) {
    const name = name;
    const mark = marker;
    return { name, mark };
};

function gameBoard() {
    let board = [];
    for (let i = 0; i < 9; i++) {
        board.push(createGameSquare());
    };

    const player1 = (n) => createPlayer(n, 'X');
    const player2 = (n) => createPlayer(n, '0');

    const markSquare = (a, player) => board[a].marker = player.mark;

    const checkWinner = function(player) {
        if ((board[0].marker == board[1].marker == board[2].marker == player.mark) ||
            (board[3].marker == board[4].marker == board[5].marker == player.mark) ||
            (board[6].marker == board[7].marker == board[8].marker == player.mark) ||
            (board[0].marker == board[3].marker == board[6].marker == player.mark) ||
            (board[1].marker == board[4].marker == board[7].marker == player.mark) ||
            (board[2].marker == board[5].marker == board[8].marker == player.mark) ||
            (board[0].marker == board[4].marker == board[8].marker == player.mark) ||
            (board[2].marker == board[4].marker == board[6].marker == player.mark)) {
                return player + ' is the winner!'
            } else if ((board[0].marker == 'X' || 'O') &&
                        (board[1].marker == 'X' || 'O') &&
                        (board[2].marker == 'X' || 'O') &&
                        (board[3].marker == 'X' || 'O') &&
                        (board[4].marker == 'X' || 'O') &&
                        (board[5].marker == 'X' || 'O') &&
                        (board[6].marker == 'X' || 'O') &&
                        (board[7].marker == 'X' || 'O') &&
                        (board[8].marker == 'X' || 'O')) {
                return 'Tie Game'
            };
    };

    return { board, player1, player2, markSquare, checkWinner };
};


// reset the board with a command
// change player names with a command