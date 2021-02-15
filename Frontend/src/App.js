import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className = "container-fluid">
        <Navbar />

        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
      </div>
    </Router>
  );
}

export default App;
