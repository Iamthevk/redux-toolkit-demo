import {CLEAR_LIST, RESET_LIST, REMOVE_ITEM} from "./action"
import { data } from "./data";
export const reducer = (state, action) => {
    if (action.type === CLEAR_LIST) {
      return { ...state, people: [] };
    }
    if (action.type === REMOVE_ITEM) {
      // console.log(action);
      let newPeople = state.people.filter(
        (person) => person.id !== action.payload.id
      );
      return { ...state, people: newPeople };
    }
    if (action.type === RESET_LIST) {
      return { ...state, people: data };
    }
    throw new Error(`No Matching ${action.type} action type`);
  };