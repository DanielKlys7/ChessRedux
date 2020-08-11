import React from "react";
import firebase from "firebase";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          RudyChess
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="btn-chess"
                onClick={() => firebase.auth().signOut()}
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
