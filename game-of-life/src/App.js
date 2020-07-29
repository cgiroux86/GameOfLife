import React from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Main} />
    </div>
  );
}

export default App;
