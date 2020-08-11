import React, { useState, useEffect } from "react";
import firebase from "firebase";
/* import { useDispatch } from "react-redux"; */
/* import FEN_CHANGED from "../store/reducerPuzzleFen.js"; */

const SelectFEN = () => {
  const [chesspuzzleFEN, setChesspuzzleFEN] = useState([]);
  /* const [selectOption, setSelectOption] = useState("start"); */

  /*  const dispatch = useDispatch(); */

  //export selectOption Redux

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
  /* 
  useEffect(() => {
    //jakos okreslic fen i co to mi daje
    // setBooks(data); //tu bylo to importowane lokalnie
    //data.forEach((book) => { // tu pobierane przez fetch
    //skad biore dane o ile potrzebuje zadawac sobie takie pytanie
    //dispatch({ type: FEN_CHANGED, payload: fen });
    console.log(selectOption);
  }, [selectOption]);
 */

  return (
    <>
      <label htmlFor="puzzle-select" className="puzzle-select">
        Choose a puzzle
      </label>
      <select
        feen={chesspuzzleFEN.Fen}
        className="puzzle-select"
        id="dropdown"
        /* onChange={(e) => setSelectOption(e.target.value)} */
      >
        <option className="select-option" value="start" key="start">
          Choose a number
        </option>
        {chesspuzzleFEN.map((chesspuzzleFEN) => (
          <option
            className="select-option"
            value={chesspuzzleFEN.Fen}
            key={chesspuzzleFEN.id}
          >
            {chesspuzzleFEN.id}
          </option>
        ))}
      </select>
    </>
  );
};
export default SelectFEN;
