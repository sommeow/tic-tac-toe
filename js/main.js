// Display an empty tic-tac-toe board when the page is initially displayed.
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Once occupied with an X or O, the cell cannot be played again.
// Provide a Reset Game button that will clear the contents of the board.

var gameBoard;
const playerOne = "o";
const playerTwo = "x";

const winPath = [
	// horizontal
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	// vertical
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	// diagonals
	[0, 4, 8],
	[2, 4, 6]
]

const cells = document.querySelectorAll('.cell');

startGame();

function startGame() {
	document.querySelector('.endGame').style.display = "none"
	gameBoard = Array.from(Array(9).keys());
	//console.log(gameBoard);
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerText = '';
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', turnClick, false);
	}
}

function turnClick(square) {
	if (typeof gameBoard[square.target.id] == 'number') {
		turn(square.target.id, playerOne)
	  if (!checkTie()) turn(playerTwo);	
	}
}

function turn(squareId, player) {
	gameBoard[squareId] = player;
	document.getElementById(squareId).innerText = player;
	let gameWon = checkWin(gameBoard, player)
	if (gameWon) gameOver(gameWon)
}

function checkWin(board, player) {
	let plays = board.reduce((a,e,i) =>
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of winPath.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {index: index, player: player};
		break;
		}
	}
	return gameWon;
}

function gameOver(gameWon) {
	for (let index of winPath[gameWon.index]) {
		document.getElementById(index).style.backgroundColor = gameWon.player == playerOne ? "pink" : "yellow";
	}
	for (var i = 0; i < cells.length; i++) {
		cells[i].removeEventListener('click', turnClick, false)
	}
	declareWinner(gameWon.player == playerOne ? 'Player One wins!' : 'Player Two wins!');
}

function declareWinner(who) {
	document.querySelector('.endGame').style.display = 'block';
	document.querySelector('.endgame .text').innerText = who;
}
function emptySquare () {
	return gameBoard.filter(s => typeof s == 'number');
}

function checkTie() {
	if (emptySquare().length == 0) {
		for (var i = 0; i < cells.length; i++) {
			cells[i].style.backgroundColor = "green";
			cells[i].removeEventListener('click', turnClick, false);
		}
	declareWinner('Tied!')
	return true;
	}
	return false;
}
