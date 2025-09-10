import { useState } from "react";

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // console.log(formData);
    // const email = formData.get('email')
    // console.log([...formData.entries()]);
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    setValue(value + 1);
    e.currentTarget.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Form Data Api</h2>
      <div className="form-row" style={{ marginBottom: "8px" }}>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-input" id="name" name="name" />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="text" className="form-input" id="email" name="email" />
      </div>
      <div className="form-row">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-input"
          id="password"
          name="password"
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};
export default UncontrolledInputs;
