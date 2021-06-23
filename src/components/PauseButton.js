import React from "react";
import { StyledPauseButton } from "./styles/StylePauseButton";

const PauseButton = ({ callback, pause, gameOver, started }) => (
  <StyledPauseButton onClick={callback}>
    {gameOver || !pause || !started ? <p> Pause</p> : <p> Resume</p>}
  </StyledPauseButton>
);

export default PauseButton;
