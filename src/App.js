import React from "react";
import Tetris from "./components/Tetris";
import "./App.css";
import nav from "./img/tetrisNav.png"

const App = () => (
  <div className="App">
  <div class="container">
    <div class="row">
      <div className="col">
        <Tetris />
      </div>
      <div class="col">
        <img
          className="tetrisNav"
          src={nav}
          alt="nav"
          />
      </div>
    </div>
   </div>
</div>
);

export default App;
