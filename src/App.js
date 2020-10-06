import React from "react";
import "./App.css";
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FilmsContainer from "./Components/Pages/Searches/FilmsContainer";
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/Results" render={() => <FilmsContainer />} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
