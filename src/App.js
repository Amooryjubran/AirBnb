import React from "react";
import "./App.css";
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import Home from "./Components/Home/Home";
import SearchPage from "./Components/Pages/Search/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchInfo from "./Components/Pages/Results/SearchInfo";
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/search/test">
            <SearchInfo />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
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
