import React, { Component } from "react";
import cx from "classnames";
import style from "./SignInForm.module.css";

const initialValues = {
  email: "",
  password: "",
  isemailValid: true,
  ispasswordValid: true,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialValues,
    };
  }

  handlerForm = (e) => {
    e.preventDefault();
    // e.target.reset()
    this.setState(...initialValues);
  };
  // handlerEmail = ({ target: { value } }) => {
  //   this.setState({ email: value });
  // };
  handlerInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value, [`is${name}Valid`]: !value.includes(" ") });
  };

  render() {
    const { email, password, isemailValid, ispasswordValid } = this.state;
    // const emailClassName = `${style.input} ${
    //   isemailValid ? "" : style.invalid
    // }`;
    // const passwordClassName = `${style.input} ${
    //   ispasswordValid ? "" : style.invalid
    // }`;
    const emailClassName = cx(style.input, { [style.invalid]: !isemailValid });
    const passwordClassName = cx(style.input, { [style.invalid]: !ispasswordValid });
    return (
      <form className={style.form} onSubmit={this.handlerForm}>
        <input
          onChange={this.handlerInput}
          value={email}
          className={emailClassName}
          type="email"
          name="email"
          placeholder="email"
        />
        <input
          onChange={this.handlerInput}
          value={password}
          className={passwordClassName}
          type="password"
          name="password"
          placeholder="password"
        />
        <input className={style.input} type="submit" value="Send" />
      </form>
    );
  }
}

export default SignInForm;
