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

    const markSquare = (a, player) => board[a].marker = player.mark;

    const squareFilled = function(square) {
        return square.marker === 'X' ||
                square.marker === 'O';
    };

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
            } else if (board.every(squareFilled)) {
                return 'Tie Game';
            } else {
                return 'Continue'
            };
    };

    return { board, turn, markSquare, squareFilled, checkWinner };
};

// GUI functions below

const turnName = document.querySelector('#player-turn');
const turnArrow = document.querySelector('#turn-arrow');
function displayTurn() {
    turnName.innerHTML = game.turn.name + "'s turn.";
    if (game.turn.mark === 'X') {
        turnArrow.innerHTML = '&#8592;';
    } else {
        turnArrow.innerHTML = '&#8594;';
    };
};

const resultDialog = document.querySelector('#game-result');
function gameResult(result) {
    resultDialog.open = true;
    const resultText = document.querySelector('#result-text');
    resultText.innerHTML = result;
    for (let i = 0; i < 9; i++) {
        let gameSquare = document.querySelectorAll('.game-square');
        gameSquare[i].replaceWith(gameSquare[i].cloneNode(true));
    };
};

const container = document.querySelector('#container');
function buildGameBoard() {
    for (let i = 0; i < 9; i++) {
        let gameSquare = document.createElement('button');
        gameSquare.classList.add('game-square');
        container.appendChild(gameSquare);
        gameSquare.addEventListener('click', () => {
            game.markSquare(i, game.turn);
            gameSquare.innerHTML = game.turn.mark;
            gameSquare.replaceWith(gameSquare.cloneNode(true));
            if (game.checkWinner(game.turn) === 'Continue') {
                if (game.turn.mark === 'X') {
                    game.turn = player2;
                } else {
                    game.turn = player1;
                };
                displayTurn();
            } else if (game.checkWinner(game.turn) === 'Tie Game') {
                gameResult('Tie Game');
            } else {
                gameResult(game.turn.name + ' is the winner!');
            };
        });
    };
};

function clearGameBoard() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
};

let player1 = createPlayer('Player 1', 'X');
let player2 = createPlayer('Player 2', 'O');

let game = gameBoard();
buildGameBoard();
displayTurn();


const newGame = document.querySelector('#new-game');
newGame.addEventListener('click', () => {
    game = '';
    game = gameBoard();
    clearGameBoard();
    buildGameBoard();
    displayTurn();
});

const playAgain = document.querySelector('#play-again');
playAgain.addEventListener('click', () => {
    resultDialog.open = false;
    game = '';
    game = gameBoard();
    clearGameBoard();
    buildGameBoard();
    displayTurn();
});

const changePlayer1Name = document.querySelector('#change-player-one');
const displayP1 = document.querySelector('#player-one-name');
changePlayer1Name.addEventListener('click', () => {
    player1.name = prompt("Your name?", "Player 1");
    displayP1.innerHTML = player1.name;
    displayTurn();
});

const changePlayer2Name = document.querySelector('#change-player-two');
const displayP2 = document.querySelector('#player-two-name');
changePlayer2Name.addEventListener('click', () => {
    player2.name = prompt("Your name?", "Player 2");
    displayP2.innerHTML = player2.name;
    displayTurn();
});