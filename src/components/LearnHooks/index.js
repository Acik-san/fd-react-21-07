import React, { useState, useEffect } from "react";

const LearnHooks = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const handlerInput = ({ target: { value } }) => {
    setStep(Number(value));
  };
  useEffect(() => {
    const handlerClick = () => {
      setCount((prevcount) => prevcount + step);
    };
    document.body.addEventListener("click", handlerClick);
    console.log("add effect");
    return () => {
      document.body.removeEventListener("click", handlerClick);
      console.log("remove effect");
    };
  }, [step]);

  return (
    <div style={{ height: "80vh", backgroundColor: "#eee" }}>
      <p>Count: {count}</p>
      <input value={step} type="number" onChange={handlerInput} />
    </div>
  );
};
export default LearnHooks;
