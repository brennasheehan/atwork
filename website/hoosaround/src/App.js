import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import Profile from "./Profile.js";
import Events from "./Events.js";
import "./App.css";
import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyBwcilMD5b0GMvd3qGnle9uYBWyEjSviqc",
  authDomain: "hoosaround.firebaseapp.com",
  databaseURL: "https://hoosaround.firebaseio.com",
  projectId: "hoosaround",
  storageBucket: "hoosaround.appspot.com",
  messagingSenderId: "148519594689"
};
firebase.initializeApp(config);
var database = firebase.database();

class App extends Component {
  componentDidMount() {
    var readData = firebase.database().ref();
    readData.on("value", snapshot => {
      console.log(snapshot.val());
    });
  }
  handleSubmitMemo = () => {
    this.writeUserData({ post: this.state.memoInput, name: this.state.name });
  };
  writeUserData = posts => {
    console.log(posts);
    firebase
      .database()
      .ref()
      .push({
        posts
      });
  };
  handleMemoInput = (event, memoInput) => {
    this.setState({
      ...this.state,
      memoInput: event.target.value
    });
  };
  handleNameInput = (event, memoInput) => {
    this.setState({
      ...this.state,
      name: event.target.value
    });
  };
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
            </div>

            <div className="w3-col m7">
              <div className="w3-row-padding">
                <div className="w3-col m12">
                  <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding">
                      <h6 className="w3-opacity">Hoo to Meet</h6>
                      <form>
                        <input
                          onChange={this.handleNameInput}
                          placeholder="Name"
                          className="w3-border
                          w3-padding"
                        />
                        <input
                          onChange={this.handleMemoInput}
                          placeholder="Type Post Here"
                          className="w3-border
                          w3-padding"
                        />
                      </form>

                      <button
                        type="button"
                        className="w3-button w3-theme"
                        onClick={() => {
                          this.handleSubmitMemo();
                        }}
                      >
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
