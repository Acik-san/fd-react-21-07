import React from "react";
import PropTypes from "prop-types";
import config from "../../../configs";

const ControlPanel = (props) => {
  const {
    controlPage: { currentPage, prevPage, nextPage },
    controlNat: { currentNat, setNat },
    controlAmount: { currentAmount, setAmount },
  } = props;
  const handlerRadio = ({ target: { value } }) => {
    setAmount(value);
  };
  const showRadio = (n) => {
    return (
      <label key={n}>
        <input
          onChange={handlerRadio}
          type="radio"
          name="amount"
          value={n}
          checked={currentAmount === n}
        />
        {n}
      </label>
    );
  };
  const handlerSelect = ({ target: { value } }) => {
    setNat(value);
  };
  const showSelect = (nat) => {
    return (
      <option key={nat} value={nat}>
        {nat}
      </option>
    );
  };
  return (
    <div>
      <button onClick={prevPage}>&lt;</button>
      <span>{currentPage}</span>
      <button onClick={nextPage}>&gt;</button>
      {config.DEFAULT_AMOUNTS.map(showRadio)}
      <select onChange={handlerSelect} value={currentNat}>
        {config.DEFAULT_NATS.map(showSelect)}
      </select>
    </div>
  );
};

ControlPanel.propTypes = {};

export default ControlPanel;
