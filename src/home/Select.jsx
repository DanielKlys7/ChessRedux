import React from "react";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onFenChange(e.target.value);
  }
  render() {
    const Fen = this.props.Fen;
    const inputFen = this.props.chesspuzzleFEN;

    return (
      <div id="puzzleNumber">
        <label htmlFor="puzzle-select" className="puzzle-select">
          Choose a puzzle
        </label>
        {/*do poprawy*/}
        <select
          value={Fen}
          onChange={this.handleChange}
          feen={inputFen.Fen}
          className="puzzle-select"
          id="dropdown"
        >
          <option className="select-option" value="start" key="start">
            Choose a number
          </option>
          {inputFen.map((inputFen) => (
            <option
              className="select-option"
              value={inputFen.Fen}
              key={inputFen.id}
            >
              {inputFen.id}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
export default Select;
