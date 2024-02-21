function createGameSquare() {
    let marker = '';
    return { marker };
};

function createPlayer(n, m) {
    const name = n;
    const mark = m;
    return { name, mark };
};

function gameBoard() {
    let board = [];
    for (let i = 0; i < 9; i++) {
        board.push(createGameSquare());
    };

    let turn = player1
    const nextTurn = function() {
        if (turn = player1) {
            turn = player2;
        } else {
            turn = player1;
        };
    };

    const markSquare = (a, player) => board[a].marker = player.mark;

    const checkWinner = function(player) {
        if ((board[0].marker === board[1].marker && board[1].marker === board[2].marker && board[2].marker === player.mark) ||
            (board[3].marker === board[4].marker && board[4].marker === board[5].marker && board[5].marker === player.mark) ||
            (board[6].marker === board[7].marker && board[7].marker === board[8].marker && board[8].marker === player.mark) ||
            (board[0].marker === board[3].marker && board[3].marker === board[6].marker && board[6].marker === player.mark) ||
            (board[1].marker === board[4].marker && board[4].marker === board[7].marker && board[7].marker === player.mark) ||
            (board[2].marker === board[5].marker && board[5].marker === board[8].marker && board[8].marker === player.mark) ||
            (board[0].marker === board[4].marker && board[4].marker === board[8].marker && board[8].marker === player.mark) ||
            (board[2].marker === board[4].marker && board[4].marker === board[6].marker && board[6].marker === player.mark)) {
                return player.name + ' is the winner!';
            } else if ((board[0].marker === 'X' || board[0].marker === 'O') &&
                        (board[1].marker === 'X' || board[1].marker === 'O') &&
                        (board[2].marker === 'X' || board[2].marker === 'O') &&
                        (board[3].marker === 'X' || board[3].marker === 'O') &&
                        (board[4].marker === 'X' || board[4].marker === 'O') &&
                        (board[5].marker === 'X' || board[5].marker === 'O') &&
                        (board[6].marker === 'X' || board[6].marker === 'O') &&
                        (board[7].marker === 'X' || board[7].marker === 'O') &&
                        (board[8].marker === 'X' || board[8].marker === 'O')) {
                return 'Tie Game';
            } else {
                return 'Continue'
            };
    };

    return { board, turn, nextTurn, markSquare, checkWinner };
};

// GUI functions below

let player1 = createPlayer('Player 1', 'X');
let player2 = createPlayer('Player 2', 'O');

let game = gameBoard();

let gameSquare = document.querySelectorAll('.game-square');
function buildGameBoard() {
    for (let i = 0; i < 9; i++) {
        gameSquare[i].replaceWith(gameSquare[i].cloneNode(true))
        gameSquare[i].addEventListener('click', () => {
            game.markSquare(i, game.turn);
            gameSquare[i].replaceWith(gameSquare[i].cloneNode(true))
            gameSquare[i].innerHTML = game.turn.mark;
            if (game.checkWinner(game.turn) === 'Continue') {
                game.nextTurn;
            } else if (game.checkWinner(game.turn) === 'Tie Game') {
                //display tie game placeholder
                alert('Tie Game')
                // "play again" button
            } else {
                //display winner placeholder
                alert(game.turn.name + ' is the winner!')
                // "play again" button
            };
        });
    };
};

let newGame = document.querySelector('#new-game');
newGame.addEventListener('click', () => {
    game = '';
    game = gameBoard();
    buildGameBoard();
});