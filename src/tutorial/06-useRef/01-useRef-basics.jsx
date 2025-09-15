import { useEffect, useRef, useState } from "react";

function UseRefBasics() {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false);
  //   console.log(refContainer);

  useEffect(() => {
    refContainer.current.focus();
  });

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log(refContainer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log(name);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label
            htmlFor="name"
            className="form-label"
            style={{ margin: "8px" }}
          >
            Name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            ref={refContainer}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
      {/*  render Users */}
      <h2>value: {value}</h2>
      <button onClick={() => setValue(value + 1)} className="btn">
        increse
      </button>
    </div>
  );
}
export default UseRefBasics;
