import React from "react";
/* import { withRouter } from "react-router-dom"; */

import firebase from "firebase";
import Navbar from "./Nav";
import "./style/style.css";
import MovesBox from "./Moves";
import ScoreBox from "./Score";
import useWindowSize from "./WindowSize.jsx";
import Chessboard from "chessboardjsx";

function MainMenu(props) {
  const size = useWindowSize();
  let windowHeight = 0.8 * size.height;
  let rightPanelWidth = size.width - windowHeight - 60;

  return (
    <>
      <Navbar />
      <div className="row">
        <div id="board" style={{ width: windowHeight }}>
          <div id="puzzleNumber">
            <label for="puzzle-select" className="puzzle-select">
              Choose a puzzle
            </label>

            <select name="puzzle" className="puzzle-select" id="dropdown">
              <option className="select-option" value="">
                Please choose an option
              </option>
              <option className="select-option" value="dog">
                1
              </option>
              <option className="select-option" value="cat">
                2
              </option>
              <option className="select-option" value="hamster">
                3
              </option>
              <option className="select-option" value="parrot">
                4
              </option>
              <option className="select-option" value="spider">
                5
              </option>
              <option className="select-option" value="goldfish">
                6
              </option>
            </select>
          </div>

          <Chessboard
            position="r2q1rk1/pbpp2bp/1pn1pnp1/5pB1/2BP4/2N1PN2/PPPQ1PPP/3R1RK1 w q - 0 1"
            width={windowHeight}
            dropSquareStyle={{ boxShadow: "inset 0 0 6px 6px #333" }}
          />
        </div>
        <div id="RightPanel" style={{ width: rightPanelWidth }}>
          <span>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
          </span>
          <ScoreBox></ScoreBox>
          <MovesBox></MovesBox>
          <div className="container-fluid">
            <button className="btn-chess"> Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainMenu;
/* export default withRouter(MainMenu); */
