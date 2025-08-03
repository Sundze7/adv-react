import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    // console.log(e.target.value);
    // Dynamically accessing the properties in the object
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Multiple Inputs</h2>
      <div className="form-row" style={{ marginBottom: "8px" }}>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-input"
          id="name"
          value={user.name}
          onChange={handleChange}
          name="name"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-input"
          id="email"
          value={user.email}
          onChange={handleChange}
          name="email"
        />
      </div>
      <div className="form-row">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="text"
          className="form-input"
          id="password"
          value={user.password}
          onChange={handleChange}
          name="password"
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};
export default MultipleInputs;
