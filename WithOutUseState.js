import React from "react";
import "./counter.css";

function WithOutUseState() {
  //normal let variable use without UseState

  let count = 0;
  const handleClick = () => {
    count += 1;
    console.log(count);
  };

  return (
    <div className="counter">
      <p>You Clicked {count} times.</p>
      <button className="button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default WithOutUseState;
