import React, { useState } from "react";
import Input from "./Input";

const Description = ({ initial }) => {
  const [text, setText] = useState(initial);
  const onChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <h3>{text}</h3>
      <Input initial={text} handle={onChange} idValue="input" />
    </>
  );
};

export default Description;
