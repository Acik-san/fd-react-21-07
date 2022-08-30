import React, { useState, useEffect } from "react";
import { format, addMilliseconds } from "date-fns";

const FuncStopWatch = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);
  const handlerBtn = () => {
    setIsRunning(!isRunning);
  };
  const start = () => {
    setTime((time) => addMilliseconds(time, 1000));
  };
  const reset = () => {
    setIsRunning(false);
    setTime(new Date(0, 0, 0, 0, 0, 0));
  };
  useEffect(() => {
    if (isRunning) {
      const idInterval = setInterval(() => start(), 1000);
      return () => {
        clearInterval(idInterval);
      };
    }
  }, [isRunning]);
  return (
    <div>
      <h2>{format(time, "HH:mm:ss")}</h2>
      <button onClick={handlerBtn}>{isRunning ? `Stop` : `Start`}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default FuncStopWatch;
