import { useState } from "react";
import Square from "./Square";

const Initial = "";
const X = "X";
const O = "O";
const winCombina = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Game() {
  const [grid, setGrid] = useState(Array(9).fill(Initial));
  const [player, setPlayer] = useState(false);
  const [gameFinis, setGameFinis] = useState(false);
  const [winCount, setWinCount] = useState({ X: 0, O: 0 });

  function isGameOver() {
    if (!gameFinis) {
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombina[i][0]] === X &&
          grid[winCombina[i][1]] === X &&
          grid[winCombina[i][2]] === X
        ) {
          setGameFinis(true);
          setWinCount({ ...winCount, X: winCount.X + 1 });
          alert("X win");
          return;
        }
      }

      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombina[i][0]] === O &&
          grid[winCombina[i][1]] === O &&
          grid[winCombina[i][2]] === O
        ) {
          setGameFinis(true);
          setWinCount({ ...winCount, O: winCount.O + 1 });
          alert("O win");
          return;
        }
      }

      if (!grid.includes(Initial)) {
        setGameFinis(true);
      }
    }
  }

  function reStartGame() {
    setGrid(Array(9).fill(Initial));
    setGameFinis(false);
  }

  isGameOver();

  function handleClick(id) {
    setGrid(
      grid.map((item, index) => {
        if (index === id) {
          if (player) {
            return O;
          } else {
            return X;
          }
        } else {
          return item;
        }
      })
    );
    setPlayer(!player);
  }

  return (
    <div>
      <Square renderItem={grid} handleClick={handleClick} />
      {gameFinis && (
        <>
          <div className="player-winer">
          <p className="player">X win: {winCount.X}</p>
          <p className="player">O win: {winCount.O}</p>
          </div>
          <button className="btn" onClick={reStartGame}>
            Reset Game
          </button>
        </>
      )}
    </div>
  );
}
export default Game;
