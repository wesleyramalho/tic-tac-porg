import ticTacToe from "./ticTacToe";
import label from "../json/label.json";
const getInitialGameState = size => {
  return {
    history: [
      {
        squares: Array(size).fill(null),
        cell: null
      }
    ],
    stepNumber: 0,
    isPlayerOneNext: true,
    isUndoingMove: false,
    isDescendingOrder: false,
    winnerSquares: [],
    statusText: ticTacToe.textStatusNext(),
    statusPlayer: label.playerOne
  };
};

export default getInitialGameState;
