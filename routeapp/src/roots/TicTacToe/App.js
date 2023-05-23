import { useState} from 'react';
import background from "./06.png";

function Square({value, onSquareClick, isWinner }) {
  let color = "WhiteSquare";
  if (isWinner){
    color = "YellowSquare";
    console.log(color);
  }
  return <button className={color} onClick={onSquareClick} >{value}</button>;
}

export function Board({ xIsNext, squares, onPlay, winner }) {
  function handleClick(i) {  
    if (squares[i] === "X" || squares[i] ==="O" || (winner && winner.length > 0)){
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext){
      nextSquares[i] = "X";
    }
    else{
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);  
  }
  let status;
  if (winner && winner.length > 0) {
    status = 'Winner: ' + winner[0];
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  return (
    <>
      
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} isWinner={winner.includes(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} isWinner={winner.includes(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} isWinner={winner.includes(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} isWinner={winner.includes(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} isWinner={winner.includes(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} isWinner={winner.includes(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} isWinner={winner.includes(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} isWinner={winner.includes(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} isWinner={winner.includes(8)}/>
      </div>
    </>
  );
}

export default function Game() {
  
  const [history, setHistory] = useState([Array(9).fill("...")]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const winner = calculateWinner(currentSquares);
  console.log(winner);
  const xIsNext = currentMove % 2 === 0;
  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    //src: https://www.w3schools.com/howto/howto_css_center-list.asp
    <center>
      {/* src: https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/ */}
      <div  className="gamecontainer" style={{ backgroundImage: `url(${background})` }}>
        <div className="game">
          <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} winner = {winner} />
          </div>
          <div className="game-info">
            <ol className = "myUL">{moves}</ol>
          </div>
        </div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        <div className = "spacefill"></div>
        
        
      </div>
    </center>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] === "X" && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a],a,b,c];
    }
    if (squares[a] === "O" && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a],a,b,c];
    }
  }
  return [];
}