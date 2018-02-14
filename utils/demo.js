const {
 getOneBoard,
 validate,
 eat,
 blanca,
 negra,
 canMove,
 clearOption,
 printState,
 setIn
} = require('./index')

let board = getOneBoard()
// board = setIn(board, negra, 3, 4);
board = setIn(board, blanca, 4, 2);
board = setIn(board, blanca, 4, 3);
board = setIn(board, blanca, 4, 4);
board = setIn(board, blanca, 4, 5);
board = setIn(board, negra, 3, 4);
board = setIn(board, negra, 2, 4);
board = eat(board, 5, 1, negra)
board = validate(board, blanca, negra)
board = eat(board, 4, 1, blanca);
board = validate(board, negra, blanca);
printState(board)
