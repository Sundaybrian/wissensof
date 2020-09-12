import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import Landing from './pages/landing/Landing';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
      <h2>wissensof</h2>
    </div>
  );
}

export default App;
