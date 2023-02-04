import React from "react";

const Input = ({ initial, idValue, handle }) => {
  return (
    <>
      <input id={idValue} value={initial} onChange={handle}></input>
    </>
  );
};

export default Input;
