import React, { Component } from "react";
import cx from "classnames";
import style from "./CallbackForm.module.css";

const initialState = {
  name: "",
  phoneNumber: "",
  isnameValid: true,
  isphoneNumberValid: true,
};

class CallbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }
  handlerForm = (e) => {
    e.preventDefault();
    this.setState(...initialState);
  };
  handlerName = ({ target: { value, name } }) => {
    this.setState({ [name]: value, [`is${name}Valid`]: !value.includes(" ") });
  };
  handlerPhoneNumber = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
      [`is${name}Valid`]: !value.search(
        /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
      ),
    });
  };
  render() {
    const { name, phoneNumber, isnameValid, isphoneNumberValid } = this.state;
    const nameClassName = cx(style.input, { [style.invalid]: !isnameValid });
    const phoneNumberClassName = cx(style.input, {
      [style.invalid]: !isphoneNumberValid,
    });
    return (
      <form className={style.form} onSubmit={this.handlerForm}>
        <label htmlFor="name" className={style.labelName}>
          Please, enter your name:
        </label>
        <input
          onChange={this.handlerName}
          value={name}
          className={nameClassName}
          type="text"
          name="name"
        />
        <label htmlFor="phoneNumber" className={style.labelPhoneNumber}>
          Please, enter phone number:
        </label>
        <input
          onChange={this.handlerPhoneNumber}
          value={phoneNumber}
          className={phoneNumberClassName}
          type="text"
          name="phoneNumber"
        />
        <input className={style.input} type="submit" value="Send" />
      </form>
    );
  }
}

export default CallbackForm;
