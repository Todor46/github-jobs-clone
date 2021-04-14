import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App container mx-auto px-10 pb-4">
      <Header />
      <Router>
        <Switch>
          <Route to="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
