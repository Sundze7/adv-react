import { useReducer, useState } from "react";
import { data, people } from "../../../data";

const defaultState = {
  people: data,
};

// fxn which controls the app state
const reducer = (state, action) => {
  if (action.type === "CLEAR_LIST") {
    return { ...state, people: [] };
  }
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // const newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };
  const clearAllItems = () => {
    dispatch({ type: "CLEAR_LIST" });
    // setPeople([]);
  };
  const resetList = () => {
    // setPeople(data);
  };
  console.log(state);

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        // console.log(person);
        return (
          <div key={id}>
            <h4>{name.toUpperCase()}</h4>
            <button
              type="button"
              style={{ padding: "0.2rem", marginBottom: "1rem" }}
              onClick={() => removeItem(id)}
            >
              remove {name}
            </button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          type="button"
          style={{ marginTop: "1rem" }}
          className="btn"
          onClick={resetList}
        >
          reset list
        </button>
      ) : (
        <button
          type="button"
          style={{ marginTop: "1rem" }}
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
