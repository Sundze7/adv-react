import { useState } from "react";
import { data } from "../../../data";

const ReducerBasics = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const clearAllItems = () => {
    setPeople([]);
  };
  const resetList = () => {
    setPeople(data);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        // console.log(person);
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              style={{ padding: "0.2rem" }}
              onClick={() => removeItem(id)}
            >
              remove {name}
            </button>
          </div>
        );
      })}
      {people.length < 1 ? (
        <button
          type="button"
          style={{ marginTop: "2rem" }}
          className="btn"
          onClick={resetList}
        >
          reset list
        </button>
      ) : (
        <button
          type="button"
          style={{ marginTop: "2rem" }}
          className="btn"
          onClick={clearAllItems}
        >
          clear list
        </button>
      )}
    </div>
  );
};
export default ReducerBasics;
