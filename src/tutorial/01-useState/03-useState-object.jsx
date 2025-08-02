import { useState } from "react";

function UseStateObject() {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });

  const displayPerson = () => {
    // setPerson({ name: "john", age: 18, hoppy: "swimming" });
    setPerson({ ...person, name: "Stan" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys to {person.hobby}</h4>
      <button onClick={displayPerson}>show {person.name}</button>
    </>
  );
}
export default UseStateObject;
