import React, { useState } from "react";
import "./counter.css";

function WithUseState() {
  //useState Variable Use
  const [count, setCount] = useState(0); //intial value is 0

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <p>You Clicked {count} times</p>
      <button className="button" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default WithUseState;
