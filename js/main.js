// Display an empty tic-tac-toe board when the page is initially displayed.
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Once occupied with an X or O, the cell cannot be played again.
// Provide a Reset Game button that will clear the contents of the board.

/*---constants---*/
const playerOne = 'o';
const playerTwo = 'x';
// mapped winning patterns
const winPath = [
    [0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

const cells = document.querySelectorAll('.cell');



/*---app's state (variables)---*/
var board, winner, turn;

startGame();

/*---cached element references---*/
const msgEl = document.getElementById('whose-turn-msg');


/*---event listeners---*/
document.get


/*---functions---*/
//Function to start game
function startGame() {

}

//Player One Function


//Whose turn? function