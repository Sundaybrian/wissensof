import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import Landing from './pages/landing/Landing';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
      <h2>wissensof</h2>
    </div>
  );
}

export default App;
