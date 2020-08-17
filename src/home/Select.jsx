import React from "react";

const Select = ({ chesspuzzleFEN, Fen, onFenChange }) => {
  function handleChange(e) {
    onFenChange(e.target.value, Fen);
  }

  return (
    <div id="puzzleNumber">
      <label htmlFor="puzzle-select" className="puzzle-select">
        Choose a puzzle
      </label>
      <select
        value={chesspuzzleFEN.Fen}
        onChange={handleChange}
        className="puzzle-select"
        id="dropdown"
      >
        <option className="select-option" value="start" key="start">
          Start
        </option>
        {chesspuzzleFEN.map((chesspuzzleFEN) => (
          <option
            className="select-option"
            value={chesspuzzleFEN.Fen}
            key={chesspuzzleFEN.id}
            onChange={handleChange}
          >
            {chesspuzzleFEN.id}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
