import { useState } from "react";

function UseRefBasics() {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row" style={{ marginBottom: "8px" }}>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-input" id="name" />
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
