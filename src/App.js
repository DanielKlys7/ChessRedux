import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import MainMenu from "./home/index";

firebase.initializeApp({
  apiKey: "AIzaSyCP-MhQokNvLnX8pjQR7noEwDxzteUtiPA",
  authDomain: "chess-d8f42.firebaseapp.com",
});

class App extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      /* 
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID, 
      */
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <MainMenu />
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default App;
