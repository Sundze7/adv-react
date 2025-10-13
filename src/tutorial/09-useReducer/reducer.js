import { CLEAR_LIST, REMOVE_LIST, RESET_LIST } from "./action";
import { data } from "../../../data";

// fxn which controls the app state
const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_LIST) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id,
    );
    return { ...state, people: newPeople };
  }
  //   return state
  throw new Error(`No matching "${action.type}" - sction type`);
};

export default reducer;
