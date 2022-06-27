import React from "react";
import Tetris from "./components/Tetris";
import "./App.css";
import nav from "./img/tetrisNav.png"

const App = () => (
  <div className="App">
  <div class="container">
    <div class="row">
     
      <div class="col-12">
        <img
          className="tetrisNav"
          src={nav}
          alt="nav"
          />
      </div>
      <div className="col-12">
        <Tetris />
      </div>
    </div>
   </div>
</div>
);

export default App;
