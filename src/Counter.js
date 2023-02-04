import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    counter > 10 ? setCounter(10) : setCounter(counter + 1);
  };
  const decrement = () => {
    counter < 0 ? setCounter(0) : setCounter(counter - 1);
  };
  if (counter < 0) {
    setCounter(0);
  }
  if (counter > 10) {
    setCounter(10);
  }
  return (
    <>
      <p>{counter}</p>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </>
  );
};

export default Counter;
