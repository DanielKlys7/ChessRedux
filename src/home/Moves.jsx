import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import firebase from "firebase";

const MovesBox = ({ userID, taskID }) => {
  const { register, handleSubmit, getValues } = useForm();

  const [version, setVersion] = useState("1");
  const [answer, setAnswer] = useState();

  const onSubmit = () => {
    const moveOne = getValues(["move1w", "move1b"]);
    const moveTwo = getValues(["move2w", "move2b"]);
    const moveThree = getValues(["move3w", "move3b"]);
    setAnswer({
      ["v" +
      version]: `1. ${moveOne.move1w} ${moveOne.move1b} 2. ${moveTwo.move2w} ${moveTwo.move2b} 3. ${moveThree.move3w} ${moveThree.move3b}`,
    });
  };

  useEffect(() => {
    if (answer !== undefined) {
      const db = firebase.firestore();
      const zadanieRef = db.doc(`User/${userID}/Zadania/${taskID}`);
      if (version > 0) {
        zadanieRef
          .set(answer, { merge: true })
          .then(function () {
            console.log("Status saved!");
          })
          .catch(function (error) {
            console.log("Error: ", error);
          });
      } else {
        alert("Podaj wersję odpowiedzi");
      }
    }
    // eslint-disable-next-line
  }, [answer]);

  return (
    <form className="container-fluid" onSubmit={handleSubmit(onSubmit)}>
      <label className="label-margin">Version</label>
      <input
        className="path"
        type="number"
        name="wersja"
        placeholder="Wersja"
        value={version}
        onChange={(e) => setVersion(e.target.value)}
      />
      <br />
      <label className="label-margin">1.</label>
      <input className="path" type="text" name="move1w" ref={register} />
      <input className="path" type="text" name="move1b" ref={register} />
      <br />
      <label className="label-margin">2.</label>
      <input className="path" type="text" name="move2w" ref={register} />
      <input className="path" type="text" name="move2b" ref={register} />
      <br />
      <label className="label-margin">3.</label>
      <input className="path" type="text" name="move3w" ref={register} />
      <input className="path" type="text" name="move3b" ref={register} />
      <br />
      <button className="btn-chess" type="submit">
        Submit
      </button>
    </form>
  );
};

export default MovesBox;
