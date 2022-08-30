import React, { Component } from "react";
import Counter from "../components/Counter";

class CounterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      valueInput: 10,
    };
  }
  handlerInput = ({ target: { value, name } }) => {
    this.setState({ [name]: Number(value) });
  };

  render() {
    const { step, valueInput } = this.state;
    return (
      <section>
        <h1>Counter</h1>
        <Counter step={step} valueInput={valueInput} />
        <input
          type="range"
          name="step"
          min={1}
          max={10}
          step={1}
          value={step}
          onChange={this.handlerInput}
        />
        <input
          type="number"
          name="valueInput"
          min={0}
          max={100}
          step={10}
          value={valueInput}
          onChange={this.handlerInput}
        />
        <p>step: {step}</p>
        <p>valueInput: {valueInput}</p>
      </section>
    );
  }
}

export default CounterPage;
