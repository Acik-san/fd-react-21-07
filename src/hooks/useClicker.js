import { useState, useEffect } from "react";

const useClicker = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  useEffect(() => {
    const handlerCount = () => setCount((count) => count + 1);
    window.addEventListener("click", handlerCount);
    return () => {
      window.removeEventListener("click", handlerCount);
    };
  }, []);
  return count;
};

export default useClicker;
