import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import About from "./About";
import Home from "./Home";

class App extends Component {

  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">ToDoApp</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
