import { useState } from "react";

const frameworks = ["react", "angular", "vue", "svelte"];

function OtherInputs() {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  const handleShipping = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };

  const handleFramework = (e) => {
    setFramework(e.target.value);
  };

  const handleSubmit = () => {};
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Other Inputs</h2>
        <div
          className="form-row"
          style={{ marginBottom: "8px", textAlign: "left" }}
        >
          <label htmlFor="shipping" className="form-label">
            Free Shipping
          </label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            style={{ margin: "8px" }}
            checked={shipping}
            onChange={handleShipping}
          />
        </div>

        <div
          className="form-row"
          style={{ marginBottom: "8px", textAlign: "left" }}
        >
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            style={{ margin: "8px" }}
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>;
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}
export default OtherInputs;
