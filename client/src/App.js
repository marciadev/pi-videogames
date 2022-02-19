import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import "./App.css";
import CreateVideogame from "./components/CreateVideogame";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/create" component={CreateVideogame} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
