import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "../redux/slices/appSlice";

const ReduxCounter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.appReducer.count);

  return (
    <>
      <h1>Counter App using Redux</h1>
      <div className="counter">
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increaseCounter())}>Increase</button>
        <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
      </div>
    </>
  );
}

export default ReduxCounter;
