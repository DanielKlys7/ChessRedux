import React, { useState, useEffect } from "react";
import Chessboard from "chessboardjsx";
import firebase from "firebase";

import "./style/style.css";

import Navbar from "./Nav";
import MovesBox from "./Moves";
import ScoreBox from "./Score";
import useWindowSize from "./WindowSize.jsx";
import SelectFEN from "./Select";

function MainMenu() {
  const [chesspuzzleFEN, setChesspuzzleFEN] = useState([]);
  const [selectOption, setSelectOption] = useState("start");

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("chesspuzzleFEN").get();
      setChesspuzzleFEN(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchData();
  }, []);

  const size = useWindowSize();
  let windowHeight = 0.8 * size.height;
  let rightPanelWidth = size.width - windowHeight - 60;

  return (
    <>
      <Navbar />
      <div className="row">
        <div id="board" style={{ width: windowHeight }}>
          <SelectFEN
            chesspuzzleFEN={chesspuzzleFEN}
            Fen={selectOption}
            onFenChange={setSelectOption}
          />

          <Chessboard
            position={selectOption}
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
        </div>
      </div>
    </>
  );
}
export default MainMenu;

//(e) => setSelectOption(e.target.value)
