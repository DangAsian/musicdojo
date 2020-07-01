import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from "./static_pages/Homepage";
import { NavBar } from './layout/NavBar.js'
// import NavBar from './layout/NavBar'

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
      <Route path="/" component={Homepage} exact />
      </Switch>
    </Router>

  );
}

export default App;
