import React, { useReducer } from "react";
import reducer from "./reducer";

const SignUpForm = () => {
  const [state, dispatch] = useReducer(reducer, {
    fname: "",
    lname: "",
    email: "",
    password: "",
    phone: "",
    age: 18,
  });
  const handlerInput = ({ target: { name, value } }) => {
    const action = { name, value };
    dispatch(action);
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input
          type="text"
          name="fname"
          value={state.fname}
          onChange={handlerInput}
        />
        <input
          type="text"
          name="lname"
          value={state.lname}
          onChange={handlerInput}
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handlerInput}
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handlerInput}
        />
        <input
          type="text"
          name="phone"
          value={state.phone}
          onChange={handlerInput}
        />
        <input
          type="number"
          name="age"
          value={state.age}
          onChange={handlerInput}
        />
      </form>
    </div>
  );
};

export default SignUpForm;
