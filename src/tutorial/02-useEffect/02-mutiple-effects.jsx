import { useEffect, useState } from "react";

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("hello from 1st useEffect");
  }, [value]);
  useEffect(() => {
    console.log("hello from 2nd useEffect");
  }, [secondValue]);
  return (
    <div>
      <h1>value: {value}</h1>
      <button type="button" onClick={() => setValue(value + 1)}>
        {" "}
        Value
      </button>
      <h1>Second Value: {secondValue}</h1>
      <button type="button" onClick={() => setSecondValue(secondValue + 1)}>
        {" "}
        2nd value
      </button>
    </div>
  );
};
export default MultipleEffects;
