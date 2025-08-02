import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((currentState) => {
      const newState = currentState + 1;
      return newState;
    });
  };
  return (
    <div>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        +1 increment
      </button>
    </div>
  );
};
export default UseStateGotcha;
