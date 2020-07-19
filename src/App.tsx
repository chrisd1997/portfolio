import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Home";

function App() {
  return (
      <Router>
        <nav>

        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
