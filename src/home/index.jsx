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
  const [moves, setMoves] = useState([]);
  const [selectOption, setSelectOption] = useState(1);

  const userID = firebase.auth().currentUser;

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

  const [point, setPoint] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("User").get();
      setPoint(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
            selectOption={selectOption}
            onFenChange={setSelectOption}
          />
          {chesspuzzleFEN.length > 0 && (
            <Chessboard
              //cos nie dziala z ruszaniem
              position={
                !moves.length
                  ? chesspuzzleFEN[selectOption - 1].Fen
                  : moves[moves.length - 1]
              }
              width={windowHeight}
              dropSquareStyle={{ boxShadow: "inset 0 0 6px 6px #333" }}
              getPosition={(position) => {
                setMoves([...moves, position]);
                console.log(position);
              }}
            />
          )}
        </div>
        <div id="RightPanel" style={{ width: rightPanelWidth }}>
          <span>
            <h1>Welcome {userID.displayName}</h1>
          </span>
          {point.length > 0 && userID.uid.length > 0 && (
            <ScoreBox point={point} userID={userID.uid} />
          )}
          {chesspuzzleFEN.length > 0 && (
            <MovesBox
              userID={userID.uid}
              taskID={chesspuzzleFEN[selectOption - 1].id}
            />
          )}
        </div>
      </div>
    </>
  );
}
export default MainMenu;
