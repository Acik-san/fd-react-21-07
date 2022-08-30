import React from "react";
import PropTypes from "prop-types";
import { add, format } from "date-fns/esm";

const TitleWeek = () => {
  const titles = ["S", "M", "T", "W", "T", "F", "S"];
  return titles.map((t, i) => <span key={i}>{t}</span>);
};

const Day = (props) => {
  const { currentDate, setDate } = props;
  const handlerAddToDate = (duration) => {
    const newDate = add(currentDate, duration);
    setDate(newDate);
  };
  return (
    <div>
      <p>{format(currentDate, "EEEE, d LLLL, yyyy 'year'")}</p>
      <p>
        <button onClick={() => handlerAddToDate({ days: 1 })}>Add 1 day</button>
        <button onClick={() => handlerAddToDate({ months: 1 })}>
          Add 1 month
        </button>
        <button onClick={() => handlerAddToDate({ years: 1 })}>
          Add 1 year
        </button>
      </p>
      <section>
        <TitleWeek />
      </section>
    </div>
  );
};

Day.defaultProps = {
  currentDate: new Date(),
};
Day.propTypes = { currentDate: PropTypes.object.isRequired };
export default Day;
