import React, { useState } from "react";

const FirstComponent = (props) => {
  const [change, setChange] = useState(true);

  const changeText = () => {
    if (change) {
      setChange(false);
    } else {
      setChange(true);
    }
  };

  return (
    <div>
      {change ? <h1>value is true</h1> : <h1>value is false</h1>}

      <h1>{props.name} application</h1>
      <p>This is a {props.reason} application</p>
      <button onClick={changeText}>Change State</button>
    </div>
  );
};

export default FirstComponent;
