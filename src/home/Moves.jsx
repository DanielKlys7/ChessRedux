import React from "react";
import { useForm } from "react-hook-form";

export default function MovesBox() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="container-fluid" onSubmit={handleSubmit(onSubmit)}>
      <label className="label-margin">1.</label>
      <input type="text" name="move1w" ref={register({ minLength: 2 })} />
      <input type="text" name="move1b" ref={register({ minLength: 2 })} />
      <br />
      {errors.move1w && <p>Type valid move</p>}
      {errors.move1b && <p>Type valid move</p>}
      <label className="label-margin">2.</label>
      <input type="text" name="move2w" ref={register({ minLength: 2 })} />
      <input type="text" name="move2b" ref={register({ minLength: 2 })} />
      {errors.move2w && <p>Type valid move</p>}
      {errors.move2b && <p>Type valid move</p>}
      <br />
      <input type="submit" />
    </form>
  );
}
