import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import Profile from "./Profile.js";
import App from "./App.js";
import Events from "./Events.js";
import "./App.css";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/events" component={Events} />
        </div>
      </Router>
    );
  }
}
