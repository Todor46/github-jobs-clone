import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Job from "./pages/Job";

function App() {
  return (
    <div className="App container mx-auto px-10 pb-4 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/job/:id">
              <Job />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
