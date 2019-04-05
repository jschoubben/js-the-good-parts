// Your function will receive a string of nine "X", "O", and/or "-" characters representing the state of a tic tac toe board, for example the string

// "X-OXXXO-O"
// would represent the board

// X-O
// XXX
// O-O
// where player X has won by getting three in a row horizontally on the middle row.

// Your function needs to return True/true/TRUE (depending on the language you're using) if either the X or the O player has won the game by getting three in a row vertically, horizontally, or diagonally; or False/false/FALSE if there is no winner.

// A few more examples:

// "---------" - False - no one has even made a move yet!

// "XOOOXXXXO" - False - no one got three in a row here.

// "OXO-XOX-O" - True - player O won by getting three in a row vertically in the third column.

// Have fun!
var assert = require("assert");

function regexTicTacToeWinChecker(board) {
  return /./.test(
    board
  );
}

console.log("Some boards with winners");
var winners = [
  "XXX-O-O-O",
  "X--OOOX-X",
  "O--OO-XXX",
  "O-XOX-O-X",
  "OXOOXOXX-",
  "X-O-OOXXO",
  "XO--X-OOX",
  "X-OXOOOXX"
];
for (i = 0; i < winners.length; i++) {
  console.log('Matching ' + winners[i]);
  assert(regexTicTacToeWinChecker(winners[i]) === true);
}

console.log("Some boards without winners");
var notWinners = [
  "XO-------",
  "XX-XOO---",
  "-XX-OO-O-",
  "OXO--XXO-",
  "OOXXXO---",
  "OXXX-XOO-",
  "OOXXX----",
  "XXOOXXOO-",
  "OXOXOX---"
];
for (i = 0; i < notWinners.length; i++) {
  console.log('Matching ' + notWinners[i]);
  assert(regexTicTacToeWinChecker(notWinners[i]) === false);
}
