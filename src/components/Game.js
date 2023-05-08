import React from 'react';
import Board from "./Board";
import { useState } from 'react';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [ascOrder, setAscOrder] = useState(true);

  const handlePlay = nextSquares => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const jumpTo = nextMove => {
    setCurrentMove(nextMove);
  }

  const returnTextOrButton = (move, description) => {
    return move === currentMove 
    ? <span>{description}</span>
    : <button onClick={() => jumpTo(move)}>{description}</button>
  }

  const moves = history.map((squares, move) => {
    const description = move > 0 ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        {returnTextOrButton(move, description)}
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{ascOrder ? moves: moves.reverse()}</ol>
      </div>
      {currentMove > 0 &&
        <div className="game-info">
          <div className='center-vertically'>
            <button onClick={() => setAscOrder(!ascOrder)}>sort moves</button>
          </div>
        </div>
      }

    </div>
  );
}

export default Game