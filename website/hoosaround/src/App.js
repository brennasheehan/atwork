import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
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
            <a
              href="#"
              className="w3-bar-item w3-button w3-padding-large w3-theme-d4"
            >
              <i className="fa fa-home w3-margin-right" />HoosAround
            </a>
            <a
              href="#"
              className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
              title="News"
            >
              <i className="fa fa-globe" />
            </a>
            <a
              href="#"
              className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
              title="Account Settings"
            >
              <i className="fa fa-user" />
            </a>
            <a
              href="#"
              className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
              title="Messages"
            >
              <i className="fa fa-envelope" />
            </a>
            <div className="w3-dropdown-hover w3-hide-small">
              <button
                className="w3-button w3-padding-large"
                title="Notifications"
              >
                <i className="fa fa-bell" />
                <span className="w3-badge w3-right w3-small w3-green">3</span>
              </button>
              <div
                className="w3-dropdown-content w3-card-4 w3-bar-block"
                style={{ width: 300 + "px" }}
              >
                <a href="#" className="w3-bar-item w3-button">
                  One new friend request
                </a>
                <a href="#" className="w3-bar-item w3-button">
                  John Doe posted on your wall
                </a>
                <a href="#" className="w3-bar-item w3-button">
                  Jane likes your post
                </a>
              </div>
            </div>
            <a
              href="#"
              className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white"
              title="My Account"
            >
              <img
                src="/w3images/avatar2.png"
                classNameName="w3-circle"
                style={{ height: 23 + "px", width: 23 + "px" }}
                alt="Avatar"
              />
            </a>
          </div>
        </div>

        <div
          id="navDemo"
          className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large"
        >
          <a href="#" className="w3-bar-item w3-button w3-padding-large">
            Link 1
          </a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">
            Link 2
          </a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">
            Link 3
          </a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">
            My Profile
          </a>
        </div>

        <div
          className="w3-container w3-content"
          style={{ maxWidth: 1400 + "px", marginTop: 80 + "px" }}
        >
          <div className="w3-row">
            <div className="w3-col m3">
              <div className="w3-card w3-round w3-white">
                <div className="w3-container">
                  <h4 className="w3-center">My Profile</h4>
                  <p className="w3-center">
                    <img
                      src="/w3images/avatar3.png"
                      className="w3-circle"
                      style={{ height: 106 + "px", width: 106 + "px" }}
                      alt="Avatar"
                    />
                  </p>
                  <hr />
                  <p>
                    <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme" />First
                    Year
                  </p>
                  <p>
                    <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme" />Undeclared
                  </p>
                  <p>
                    <i className="fa fa-home fa-fw w3-margin-right w3-text-theme" />Gibbons
                  </p>
                  <button
                    type="button"
                    className="w3-button w3-theme-d1 w3-margin-bottom"
                  >
                    Update Preferences
                  </button>
                </div>
              </div>
              <br />

              <div className="w3-card w3-round">
                <div className="w3-white">
                  <button
                    onclick="myFunction('Demo1')"
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                  >
                    <i className="fa fa-circle-o-notch fa-fw w3-margin-right" />{" "}
                    My Groups
                  </button>
                  <div id="Demo1" className="w3-hide w3-container">
                    <p>Some text..</p>
                  </div>
                  <button
                    onclick="myFunction('Demo2')"
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                  >
                    <i className="fa fa-calendar-check-o fa-fw w3-margin-right" />{" "}
                    My Events
                  </button>
                  <div id="Demo2" className="w3-hide w3-container">
                    <p>Some other text..</p>
                  </div>
                  <button
                    onclick="myFunction('Demo3')"
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                  >
                    <i className="fa fa-users fa-fw w3-margin-right" /> My
                    Photos
                  </button>
                  <div id="Demo3" className="w3-hide w3-container">
                    <div className="w3-row-padding">
                      <br />
                      <div className="w3-half">
                        <img
                          src="/w3images/lights.jpg"
                          style={{ width: 100 % +"%" }}
                          className="w3-margin-bottom"
                        />
                      </div>
                      <div className="w3-half">
                        <img
                          src="/w3images/nature.jpg"
                          style={{ width: 100 % +"%" }}
                          className="w3-margin-bottom"
                        />
                      </div>
                      <div className="w3-half">
                        <img
                          src="/w3images/mountains.jpg"
                          style={{ width: 100 % +"%" }}
                          className="w3-margin-bottom"
                        />
                      </div>
                      <div className="w3-half">
                        <img
                          src="/w3images/forest.jpg"
                          style={{ width: 100 % +"%" }}
                          className="w3-margin-bottom"
                        />
                      </div>
                      <div className="w3-half">
                        <img
                          src="/w3images/nature.jpg"
                          style={{ width: 100 % +"%" }}
                          className="w3-margin-bottom"
                        />
                      </div>
                      <div className="w3-half">
                        <img
                          src="/w3images/fjords.jpg"
                          style={{ width: 100 % +"%" }}
                          className="w3-margin-bottom"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div className="w3-card w3-round w3-white w3-hide-small">
                <div className="w3-container">
                  <p>Interests</p>
                  <p>
                    <span className="w3-tag w3-small w3-theme-d5">News</span>
                    <span className="w3-tag w3-small w3-theme-d3">Labels</span>
                    <span className="w3-tag w3-small w3-theme-d2">Games</span>
                    <span className="w3-tag w3-small w3-theme-d1">Friends</span>
                    <span className="w3-tag w3-small w3-theme">Games</span>
                    <span className="w3-tag w3-small w3-theme-l1">Friends</span>
                    <span className="w3-tag w3-small w3-theme-l2">Food</span>
                    <span className="w3-tag w3-small w3-theme-l3">Design</span>
                    <span className="w3-tag w3-small w3-theme-l4">Art</span>
                    <span className="w3-tag w3-small w3-theme-l5">Photos</span>
                  </p>
                </div>
              </div>
              <br />

              <div className="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
                <span className="w3-button w3-theme-l3 w3-display-topright">
                  <i className="fa fa-remove" />
                </span>
                <p>
                  <strong>Hey!</strong>
                </p>
                <p>People are looking at your profile. Find out who.</p>
              </div>
            </div>

            <div className="w3-col m7">
              <div className="w3-row-padding">
                <div className="w3-col m12">
                  <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding">
                      <h6 className="w3-opacity">Hoo to Meet</h6>
                      <p
                        contenteditable="true"
                        className="w3-border w3-padding"
                      >
                        Times I'm free
                      </p>
                      <button type="button" className="w3-button w3-theme">
                        <i className="fa fa-pencil" /> Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w3-container w3-card w3-white w3-round w3-margin">
                <br />
                <img
                  src="/w3images/avatar2.png"
                  alt="Avatar"
                  className="w3-left w3-circle w3-margin-right"
                  style={{ width: 60 + "px" }}
                />
                <span className="w3-right w3-opacity">1 min</span>
                <h4>John Doe</h4>
                <br />
                <hr className="w3-clear" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div
                  className="w3-row-padding"
                  style={{ margin: 0 - 16 + "px" }}
                >
                  <div className="w3-half">
                    <img
                      src="/w3images/lights.jpg"
                      style={{ width: 100 % +"%" }}
                      alt="Northern Lights"
                      className="w3-margin-bottom"
                    />
                  </div>
                  <div className="w3-half">
                    <img
                      src="/w3images/nature.jpg"
                      style={{ width: 100 % +"%" }}
                      alt="Nature"
                      className="w3-margin-bottom/"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="w3-button w3-theme-d1 w3-margin-bottom"
                >
                  <i className="fa fa-thumbs-up" /> Like
                </button>
                <button
                  type="button"
                  className="w3-button w3-theme-d2 w3-margin-bottom"
                >
                  <i className="fa fa-comment" /> Message
                </button>
              </div>

              <div className="w3-container w3-card w3-white w3-round w3-margin">
                <br />
                <img
                  src="/w3images/avatar5.png"
                  alt="Avatar"
                  className="w3-left w3-circle w3-margin-right"
                  style={{ width: 60 + "px" }}
                />
                <span className="w3-right w3-opacity">16 min</span>
                <h4>Jane Doe</h4>
                <br />
                <hr className="w3-clear" />
                <p>
                  I'm a first year interested in hiking and poetry. I live in
                  old dorms, and I am usually free on the weekends.
                </p>
                <button
                  type="button"
                  className="w3-button w3-theme-d1 w3-margin-bottom"
                >
                  <i className="fa fa-thumbs-up" /> Like
                </button>
                <button
                  type="button"
                  className="w3-button w3-theme-d2 w3-margin-bottom"
                >
                  <i className="fa fa-comment" /> Message
                </button>
              </div>

              <div className="w3-container w3-card w3-white w3-round w3-margin">
                <br />
                <img
                  src="/w3images/avatar6.png"
                  alt="Avatar"
                  className="w3-left w3-circle w3-margin-right"
                  style={{ width: 60 + "px" }}
                />
                <span className="w3-right w3-opacity">32 min</span>
                <h4>Angie Jane</h4>
                <br />
                <hr className="w3-clear" />
                <p>Have you seen this?</p>
                <img
                  src="/w3images/nature.jpg"
                  style={{ width: 100 % +"%" }}
                  className="w3-margin-bottom"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button
                  type="button"
                  className="w3-button w3-theme-d1 w3-margin-bottom"
                >
                  <i className="fa fa-thumbs-up" /> Like
                </button>
                <button
                  type="button"
                  className="w3-button w3-theme-d2 w3-margin-bottom"
                >
                  <i className="fa fa-comment" /> Message
                </button>
              </div>
            </div>

            <div className="w3-col m2">
              <div className="w3-card w3-round w3-white w3-center">
                <div className="w3-container">
                  <p>Upcoming Events:</p>
                  <img
                    src="/w3images/forest.jpg"
                    alt="Forest"
                    style={{ width: 100 % +"%" }}
                  />
                  <p>
                    <strong>Holiday</strong>
                  </p>
                  <p>Friday 15:00</p>
                  <p>
                    <button className="w3-button w3-block w3-theme-l4">
                      Info
                    </button>
                  </p>
                </div>
              </div>
              <br />

              <div className="w3-card w3-round w3-white w3-center">
                <div className="w3-container">
                  <p>Friend Request</p>
                  <img
                    src="/w3images/avatar6.png"
                    alt="Avatar"
                    style={{ width: 50 % +"%" }}
                  />
                  <br />
                  <span>Jane Doe</span>
                  <div className="w3-row w3-opacity">
                    <div className="w3-half">
                      <button
                        className="w3-button w3-block w3-green w3-section"
                        title="Accept"
                      >
                        <i className="fa fa-check" />
                      </button>
                    </div>
                    <div className="w3-half">
                      <button
                        className="w3-button w3-block w3-red w3-section"
                        title="Decline"
                      >
                        <i className="fa fa-remove" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div className="w3-card w3-round w3-white w3-padding-16 w3-center">
                <p>ADS</p>
              </div>
              <br />

              <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
                <p>
                  <i className="fa fa-bug w3-xxlarge" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
