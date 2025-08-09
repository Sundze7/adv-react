import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    //Example 1
    // const intId = setInterval(() => {
    //   console.log("hello from interval");
    // }, 2000);
    // return () => {
    //   clearInterval(intId);
    //   console.log("clean-up");
    // };

    // event listeners cleanup fxn
    const someFxn = () => {
      //some logic
    };
    window.addEventListener("scroll", someFxn);
    return () => window.removeEventListener("scroll", someFxn);
  }, []);
  return <h1> Hello Buddy</h1>;
};

export default CleanupFunction;
