import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import { Provider } from "react-redux";
import Store from "./store/Store.js";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import MainMenu from "./home/index.jsx";

firebase.initializeApp({
  apiKey: "AIzaSyCP-MhQokNvLnX8pjQR7noEwDxzteUtiPA",
  authDomain: "chess-d8f42.firebaseapp.com",
  databaseURL: "https://chess-d8f42.firebaseio.com",
  projectId: "chess-d8f42",
  storageBucket: "chess-d8f42.appspot.com",
  messagingSenderId: "492091758201",
  appId: "1:492091758201:web:c026cc1366de85aecd66a8",
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
      //console.log("user", user);
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <Provider store={Store}>
            <MainMenu />
          </Provider>
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
