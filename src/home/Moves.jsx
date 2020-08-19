import React, { useState } from "react";
import { useForm } from "react-hook-form";
import firebase from "firebase";

const MovesBox = ({ userID }) => {
  const { register, handleSubmit, getValues } = useForm();

  const [task, setTask] = useState();
  const [version, setVersion] = useState("v1");
  const [answer, setAnswer] = useState();

  const onSubmit = () => {
    const nrZadania = task; //???
    const db = firebase.firestore();
    const zadanieRef = db.doc(`User/${userID}/Zadania/${nrZadania}`);
    zadanieRef
      .set(answer, { merge: true })
      .then(function () {
        console.log("Status saved!");
      })
      .catch(function (error) {
        console.log("Error: ", error);
      });
  };

  return (
    <form className="container-fluid" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="path"
        type="number"
        name="zadanie"
        placeholder="Zadanie"
        ref={register}
      />
      <input
        className="path"
        type="number"
        name="wersja"
        placeholder="Wersja"
        ref={register}
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
      {/*polacz te save i submit xD*/}
      <button
        id="btn-save"
        className="btn-chess"
        type="button"
        onClick={() => {
          const nrZadania = getValues("zadanie");
          const wersja = getValues("wersja");
          setTask("Zadanie " + nrZadania);
          setVersion("v" + wersja);

          const moveOne = getValues(["move1w", "move1b"]);
          const moveTwo = getValues(["move2w", "move2b"]);
          const moveThree = getValues(["move3w", "move3b"]);
          setAnswer({
            [version]: `1. ${moveOne.move1w} ${moveOne.move1b} 2. ${moveTwo.move2w} ${moveTwo.move2b} 3.  ${moveThree.move3w} ${moveThree.move3b}`,
          });
        }}
      >
        Save
      </button>
      <button className="btn-chess" type="submit">
        Submit
      </button>
    </form>
  );
};

export default MovesBox;
