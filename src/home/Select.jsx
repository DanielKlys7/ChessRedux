import React from "react";

const SelectFEN = ({ chesspuzzleFEN, selectOption, onFenChange }) => {
  function handleChange(e) {
    onFenChange(e.target.value, selectOption);
  }

  return (
    <div id="puzzleNumber">
      <label htmlFor="puzzle-select" className="puzzle-select">
        Choose a puzzle
      </label>
      <select onChange={handleChange} className="puzzle-select" id="dropdown">
        <option className="select-option" value="start" key="start">
          Start
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
    </div>
  );
};

export default SelectFEN;
