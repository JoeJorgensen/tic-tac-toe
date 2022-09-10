import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const initBoard = ["", "", "", "", "", "", "", "", ""];

  const [board, setBoard] = useState(initBoard);
  const [xTurn, setXTurn] = useState(true);
  const[winner, setWinner] = useState(null)

  const checkWin = (boardClone) => {
    console.log("board:", boardClone);

    let winner = null;

    let winningCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombo.length; i++) {
      let [i1, i2, i3] = winningCombo[i];

      if (
        boardClone[i1] !== "" &&
        boardClone[i1] === boardClone[i2] &&
        boardClone[i1] === boardClone[i3]
      ) {
        winner = boardClone[i1];
        break;
      }
    }
    // winner && alert(winner);
    console.log("winner:", winner);
    return winner;
  };

  const handleClick = (index) => {
    console.log("clicked item", index);

    if (board[index] !== "" || winner) {
      return;
    }

    let boardClone = [...board];

    boardClone[index] = xTurn ? "X" : "O";

    setBoard(boardClone);

    
    
    if(checkWin(boardClone)) {
      let winner = xTurn ? 'X' : 'O'
      setWinner(winner)
      // alert(`${winner} won!`)
    }else{
      setXTurn(!xTurn);
  }
  };

  const renderBoard = () => {
    // <div className='box'></div>

    return board.map((piece, index) => {
      return (
        <div key={index} onClick={()=> handleClick(index)} className="box">
          {piece}
        </div>
      );
    });
  };
  const reset = () => {
    setBoard(initBoard);
    setWinner(null);
    setXTurn(!xTurn);
  };

  return (
    <div className="App">

      <h1>Tic Tac Toe</h1>
      {winner && <h1>{winner} won</h1>}
        <button onClick={reset}>Reset</button>
      <div className="game-board">

        {renderBoard()}
      </div>
    </div>
  );
}

export default App;
