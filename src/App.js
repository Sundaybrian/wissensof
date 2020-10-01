import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Landing from "./pages/landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Landing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
