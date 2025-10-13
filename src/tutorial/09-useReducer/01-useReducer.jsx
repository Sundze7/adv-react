import { useReducer } from "react";
import { data } from "../../../data";
import { CLEAR_LIST, REMOVE_LIST, RESET_LIST } from "./action";
import reducer from "./reducer";

const defaultState = {
  people: data,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_LIST, payload: { id } });
  };
  const clearAllItems = () => {
    dispatch({ type: CLEAR_LIST });
  };
  const resetList = () => {
    dispatch({ type: RESET_LIST });
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
