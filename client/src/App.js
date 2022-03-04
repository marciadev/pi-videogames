import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import "./App.css";
import CreateVideogame from "./components/CreateVideogame";
import DetailsVideogames from "./components/DetailsVideogames";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/create" component={CreateVideogame} />
        <Route path="/:id" component={DetailsVideogames}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
