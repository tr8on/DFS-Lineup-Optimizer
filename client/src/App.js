import React from "react";
import PlayerSelect from "./components/playerSelect";
import nba from "nba.js";
import { Route, Link } from "react-router-dom";
import home from "./home";
import Lineup from "./components/lineup";
function App() {
  return (
    <div>
      <Route exact path="/" component={home} />
      <Route exact path="/players" component={PlayerSelect} />
      <Route exact path="/lineup" component={Lineup} />
    </div>
  );
}

export default App;
