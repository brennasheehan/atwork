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
//Template html format modified from w3 schools!
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { firebaseData: null };
  }
  componentDidMount() {
    var readData = firebase.database().ref();
    readData.on("value", snapshot => {
      console.log(snapshot.val());
      this.setState({ firebaseData: snapshot.val() });
    });
  }
  handleSubmitMemo = () => {
    this.writeUserData({ post: this.state.memoInput, name: this.state.name });
  };

  displayPosts = () => {
    if (this.state.firebaseData) {
      let divArray = [];
      let dictionary = this.state.firebaseData;
      console.log(dictionary);
      let i = 0;
      for (var key in dictionary) {
        console.log(key, dictionary[key]);
        // check if the property/key is defined in the object itself, not in parent
        if (dictionary.hasOwnProperty(key)) {
          divArray[i] = (
            <div className="w3-container w3-card w3-white w3-round w3-margin">
              <br />

              <span className="w3-right w3-opacity">1 min</span>
              <h4>{dictionary[key].posts.name}</h4>
              <br />
              <hr className="w3-clear" />
              <p>{dictionary[key].posts.post}</p>
              <div className="w3-row-padding" />
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
          );
          i++;
          console.log(key, dictionary[key]);
        }
      }
      divArray.reverse();
      return divArray;
    }
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
              {this.displayPosts()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
