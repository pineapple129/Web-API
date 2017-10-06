// All code should be written in this file.
// create global variables
let playerOneMoveOneType;
let playerOneMoveOneValue;
let playerOneMoveTwoType;
let playerOneMoveTwoValue;
let playerOneMoveThreeType;
let playerOneMoveThreeValue;
let playerTwoMoveOneType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;
let moveRock = 'rock';
let moveScissors = 'scissors';
let movePaper = 'paper';

function getPlayerMovesValues() {
  let inputPlayer = 'Player One';
  let inputMoveOneType = moveRock;
  let inputMoveOneValue = 40;
  let inputMoveTwoType = moveScissors;
  let inputMoveTwoValue = 60;
  let inputMoveThreeType = movePaper;
  let inputMoveThreeValue = 30;

  return setPlayerMoves(inputPlayer, inputMoveOneType, inputMoveOneValue, inputMoveTwoType, inputMoveTwoValue, inputMoveThreeType, inputMoveThreeValue);
}

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
  let playerName = player;
  playerOneMoveOneType = moveOneType;
  playerOneMoveOneValue = moveOneValue;
  playerOneMoveTwoType = moveTwoType;
  playerOneMoveTwoValue = moveTwoValue;
  playerOneMoveThreeType = moveThreeType;
  playerOneMoveThreeValue = moveThreeValue;
  return [playerName, playerOneMoveOneType, playerOneMoveOneValue, playerOneMoveTwoType, playerOneMoveTwoValue, playerOneMoveThreeType, playerOneMoveThreeValue ]
}

function setComputerMoves() {
  //calculate random type
  let moveType = ['rock','scissors','paper'];
  playerTwoMoveOneType = moveType[Math.floor(Math.random() * moveType.length)],
  playerTwoMoveTwoType = moveType[Math.floor(Math.random() * moveType.length)]
  playerTwoMoveThreeType = moveType[Math.floor(Math.random() * moveType.length)];
  //calculate random value
  playerTwoMoveOneValue = Math.floor(Math.random() * 99);
  playerTwoMoveTwoValue = Math.floor(Math.random() * 99);
  playerTwoMoveThreeValue = Math.floor(Math.random() * 99);

  return ['Player Two', playerTwoMoveOneType, playerTwoMoveOneValue, playerTwoMoveTwoType, playerTwoMoveTwoValue, playerTwoMoveThreeType, playerTwoMoveThreeValue];
}


function getRoundWinner(number) {
  let movesCount = 0;
  let computerMoves = setComputerMoves();
  let playerOneMoves = getPlayerMovesValues();
  let valueCount = number;
  let playerN = playerOneMoves[0];
  movesCount = number;

  console.log(playerOneMoves);
  console.log(computerMoves);
  //caculate array index
      if (movesCount === 1) {
        valueCount = number + 1;
      } else if (movesCount === 2) {
        movesCount = movesCount + 1;
        valueCount = valueCount  + 2;
      } else if (movesCount === 3) {
        movesCount = movesCount + 2;
        valueCount = valueCount  + 3;
      }

      if (computerMoves[movesCount] === 'paper' && playerOneMoves[movesCount] === 'rock') {
        return 'Player Two';
      } else if (computerMoves[movesCount] === 'rock' && playerOneMoves[movesCount] === 'paper') {
        return playerN;
      }

      if (computerMoves[movesCount] === 'rock' && playerOneMoves[movesCount] === 'scissors') {
        return 'Player Two';
      } else if (computerMoves[movesCount] === 'scissors' && playerOneMoves[movesCount] === 'rock') {
        return  playerN;
      }

      if (computerMoves[movesCount] === 'scissors' && playerOneMoves[movesCount] === 'paper') {
        return 'Player Two';
      } else if (computerMoves[movesCount] === 'paper' && playerOneMoves[movesCount] === 'scissors') {
        return playerN;
      }

      if (computerMoves[movesCount] === playerOneMoves[movesCount] && computerMoves[valueCount] === playerOneMoves[valueCount]) {
        return 'Tie';
      }

      if (computerMoves[movesCount] === playerOneMoves[movesCount] && computerMoves[valueCount] > playerOneMoves[valueCount]) {
        return 'Player Two';
        } else {
        return playerN;
      }

}

//funtion getGameWinner() {

//}

for (numberCount = 1; numberCount <= 3; numberCount++) {
console.log(numberCount);
console.log(getRoundWinner(numberCount));
}
