import { useDispatch, useSelector } from "react-redux";
import { increment } from "../countSlice";

function Counter() {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();
  // console.log(counter);
  // console.log(increment);
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>Add 5</button>
    </>
  );
}

export default Counter;
