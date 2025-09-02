const ControlledInputs = () => {
  return (
    <form className="form">
      <h2>Controlled Inputs</h2>
      <div className="form-row" style={{ marginBottom: "8px" }}>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-input" id="name" />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="text" className="form-input" id="email" />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};
export default ControlledInputs;
