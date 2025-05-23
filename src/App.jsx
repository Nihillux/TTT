import Player from './components/Player.jsx'
import Gameboard from './components/Gameboard.jsx'
import { useState } from 'react';
import Log from './components/Log.jsx'
import GameOver from './components/GameOver.jsx'
import { WINNING_COMBINATIONS } from './components/winning-combinations.js';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer ='O';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState ('X');

 const activePlayer = derivedActivePlayer(gameTurns);

 let gameBoard = initialGameBoard;

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const {row, col } = square;

        gameBoard[row][col] = player;
        }

let winner;
console.log('asdasd')
 for (const combination of WINNING_COMBINATIONS) {
  const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
  const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
  const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

  if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
    winner = firstSquareSymbol;
  }
 }

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns(prevTurns => {
      const currentPlayer = derivedActivePlayer(prevTurns);
      
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns,];
      
      return updatedTurns;
    });
     }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
       <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
       <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
      </ol>
      {winner && <GameOver winner={winner} />}
        <Gameboard onSelectSquare={handleSelectSquare} board={gameBoard} />
    </div>
    <Log turns={gameTurns}/>
  </main>;

}

export default App