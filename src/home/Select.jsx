import React, { useState, useEffect } from "react";
import firebase from "firebase";

const SelectFEN = () => {
  const [chesspuzzleFEN, setChesspuzzleFEN] = useState([]);
  const [selectOption, setSelectOption] = useState("start");
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

  return (
    <>
      <label htmlFor="puzzle-select" className="puzzle-select">
        Choose a puzzle
      </label>
      <select
        className="puzzle-select"
        id="dropdown"
        onChange={(e) => setSelectOption(e.target.value)}
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
