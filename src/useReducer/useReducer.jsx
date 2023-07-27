import { useReducer } from "react";
import { data } from "./data";
import { reducer } from "./reducer";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./action";
const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // we need id to remove the item so we will pass id in payload
    //we can direct pass id without payload but its not conventional
    dispatch({ type: REMOVE_ITEM, payload: { id } }); //we can pass direct id to payload but its a convention to store payload's value in object
  };
  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };
  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };
  //   console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
