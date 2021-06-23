import React, { useState } from "react";

import "./styles/figureImages.css";

import { createStage, checkCollision } from "../GameHelpers";
//componentes
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";

//custom hooks
import { useInterval } from "../hooks/useInterval";
import {usePlayer} from "../hooks/UsePlayer";
import {proxNext} from "../hooks/UsePlayer";
import { useStage } from "../hooks/UseStage";
import { useGameStatus } from "../hooks/UseGameStatus";
//Styled componentes
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

//Figuras
import I from "../img/I.png"
import J from "../img/J.png"
import L from "../img/L.png"
import O from "../img/O.png"
import S from "../img/S.png"
import T from "../img/T.png"
import Z from "../img/Z.png"

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [pause, setPause] = useState(false);
  const [started, setStarted] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);

  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };
  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (!pause) {
        if (keyCode === 40) {
          setDropTime(1000);
        }
      }
    }
  };
  
  const getImage = (tetromino) =>{
    switch (tetromino) {
      case "I":
        return I
     
      case "J":
        return J
     
      case "L":
        return L
     
      case "O":
        return O
     
      case "S":
        return S
     
      case "T":
        return T
     
      case "X":
        return Z
     
      default:
        break;
    }
  } 

  const startGame = () => {
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setRows(0);
    setLevel(0);
    setGameOver(false);
    setStarted(true);
    setPause(false);
  };

  const pauseGame = () => {
    if (!gameOver) {
      if (!pause) {
        setDropTime(null);
        setPause(true);
      } else {
        setDropTime(1000);
        setPause(false);
      }
    }
  };

  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);

      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        console.log("GAME OVER");
        setGameOver(true);
        setDropTime(null);
        setStarted(false);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  useInterval(() => {
    drop();
  }, dropTime);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (!pause) {
        if (keyCode === 37) {
          movePlayer(-1);
        } else if (keyCode === 39) {
          movePlayer(1);
        } else if (keyCode === 40) {
          dropPlayer();
        } else if (keyCode === 38) {
          playerRotate(stage, 1);
        }
      }
    }
  };

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={(e) => {
        e.preventDefault();
        move(e);
      }}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <div>
              <Display gameOver={gameOver} text="Game Over" />
              <Display text={`Score: ${score}`} />
            </div>
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          <StartButton callback={startGame} />
          <PauseButton
            gameOver={gameOver}
            pause={pause}
            started={started}
            callback={pauseGame}
          />
          <div className="preview">
            <p className="next"> Next:</p>
            <img
              className="figure"
              src={getImage(proxNext.name)}
              alt="avatar"
            />
          </div>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
