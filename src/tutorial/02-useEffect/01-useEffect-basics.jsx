import { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log("hello there");
  };
  sayHello();

  useEffect(() => {
    console.log("hello from useEffect");
  }, []);
  return (
    <div>
      <h1>value: {value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </div>
  );
};
export default UseEffectBasics;
