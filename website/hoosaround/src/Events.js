import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

export default class Profile extends Component {
  render() {
    return (
      <div>
        {" "}
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
        </div>
        <div
          class="w3-container w3-content"
          style={{ maxWidth: 1400 + "px", marginTop: 80 + "px" }}
        >
          <div class="w3-row">
            <div class="w3-col m7">
              <div class="w3-row-padding">
                <div class="w3-col m12">
                  <div class="w3-card w3-round w3-white">
                    <div class="w3-container w3-padding">
                      <h6 class="w3-opacity">Create an event!</h6>
                      <p contenteditable="true" class="w3-border w3-padding">
                        What's happening?
                      </p>
                      <button type="button" class="w3-button w3-theme">
                        <i class="fa fa-pencil" /> Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w3-container w3-card w3-white w3-round w3-margin">
                <br />
                <img
                  src="/w3images/avatar2.png"
                  alt="Avatar"
                  class="w3-left w3-circle w3-margin-right"
                  style={{ width: 60 + "px" }}
                />
                <span class="w3-right w3-opacity">1 min</span>
                <h4>Ultimate Frisbee Outdoor BBQ @ 2pm in Mad Bowl</h4>
                <br />
                <hr class="w3-clear" />
                <p>
                  We have burgers, veggie burgers, and hot dogs. Open to anyone
                  interested in Ultimate Frisbee.
                </p>
                <div class="w3-row-padding" style={{ margin: 0 - 16 + "px" }} />
                <button
                  type="button"
                  class="w3-button w3-theme-d1 w3-margin-bottom"
                >
                  <i class="fa fa-thumbs-up" /> Going
                </button>
                <button
                  type="button"
                  class="w3-button w3-theme-d2 w3-margin-bottom"
                >
                  <i class="fa fa-star" /> Interested
                </button>
              </div>

              <div class="w3-container w3-card w3-white w3-round w3-margin">
                <br />
                <img
                  src="/w3images/avatar5.png"
                  alt="Avatar"
                  class="w3-left w3-circle w3-margin-right"
                  style={{ width: 60 + "px" }}
                />
                <span class="w3-right w3-opacity">16 min</span>
                <h4>Freeze tag @ 4pm in Old Dorms</h4>
                <br />
                <hr class="w3-clear" />
                <p>
                  Come and join us whenever, we should be outside for a few
                  hours!
                </p>
                <button
                  type="button"
                  class="w3-button w3-theme-d1 w3-margin-bottom"
                >
                  <i class="fa fa-thumbs-up" /> Going
                </button>
                <button
                  type="button"
                  class="w3-button w3-theme-d2 w3-margin-bottom"
                >
                  <i class="fa fa-star" /> Interested
                </button>
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
