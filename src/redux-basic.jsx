import { createStore } from "redux";

function Reduxbasics() {
  const initialState = {
    value: 0, // starting value of the counter
  };
  // console.log(state);
  const counterReducer = (state = initialState, action = {}) => {
    console.log(action.type);
    if (action.type === "counter/increment") {
      return {
        value: state.value + 3, // important: do NOT mutate the state.
      };
    }
    return state; // return the state as is
  };
  const state = counterReducer();
  // console.log(state);
  const store = createStore(counterReducer);
  console.log(store.getState());
  return (
    <div className="card">
      <button onClick={() => store.dispatch({ type: "counter/increment" })}>
        count ++
      </button>
      <p>{state.value}</p>
    </div>
  );
}

export default Reduxbasics;
