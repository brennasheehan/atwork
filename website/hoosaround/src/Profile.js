import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
class Profile extends Component {
  render() {
    return (
      <div className="App">
        <div className="w3-top">
          <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
            <a
              className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
              href="javascript:void(0);"
              onclick="openNav()"
            >
              <i className="fa fa-bars" />
            </a>
            <Link
              to={"/"}
              className="w3-bar-item w3-button w3-padding-large w3-theme-d4"
            >
              <i className="fa fa-home w3-margin-right" />HoosAround
            </Link>
            <Link
              to={"/profile"}
              className="w3-bar-item w3-button w3-padding-large w3-theme-d3"
            >
              My Profile
            </Link>
            <Link
              to={"/events"}
              className="w3-bar-item w3-button w3-padding-large w3-theme-d1"
            >
              Events
            </Link>
          </div>

          <div
            class="w3-container w3-content"
            style={{ maxWidth: 1400 + "px", marginTop: 80 + "px" }}
          >
            <div class="w3-row">
              <div class="w3-col m7">
                <div class="w3-container">
                  <h4>Edit Your Profile</h4>
                  <p>
                    <img
                      src="/w3images/avatar3.png"
                      class="w3-circle"
                      style={{ height: 106 + "px", width: 106 + "px" }}
                      alt="Avatar"
                    />
                  </p>
                  <form>
                    First name:<br />
                    <input type="text" />
                    <br />
                    <br />
                    Last name:<br />
                    <input type="text" />
                    <br />
                    <br />
                    Year:<br />
                    <input type="radio" name="year" value="1" />
                    First Year
                    <br />
                    <input type="radio" name="year" value="2" />
                    Second Year
                    <br />
                    <input type="radio" name="year" value="3" />
                    Third Year
                    <br />
                    <input type="radio" name="year" value="4" />
                    Fourth Year
                    <br />
                    <br />
                    Major:
                    <input type="text" />
                    <br />
                    <br />
                    Housing:
                    <input type="text" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br />
          <footer class="w3-container w3-theme-d3 w3-padding-16">
            <h5>
              Thanks for visiting! Let us know how we can improve this service:{" "}
              <a href="mailto:hoosaround@virginia.edu" target="_blank">
                hoosaround@virginia.edu
              </a>
            </h5>
          </footer>

          <footer class="w3-container w3-theme-d5">
            <p>
              Sponsored by{" "}
              <a href="http://www.virginia.edu/" target="_blank">
                the University of Virginia
              </a>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Profile;
