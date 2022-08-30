import React, { useState, useEffect } from "react";

const FuncWindowSize = () => {
  const [state, setState] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handlerResize = () => {
    setState({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    window.addEventListener("resize", handlerResize);
    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  }, []);
  const { width, height } = state;
  return (
    <div>
      <p>width: {width}</p>
      <p>height: {height}</p>
    </div>
  );
};

export default FuncWindowSize;
