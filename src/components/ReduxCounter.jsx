import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter, updateNumber } from "../redux/slices/appSlice";

const ReduxCounter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.appReducer.count);
  const number = useSelector((state) => state.appReducer.number);


  return (
    <>
      <h1>Counter App using Redux</h1>
      <div className="counter">
        <p>Count: {count}</p>
        <input value={number} type="text" placeholder="number count" onChange={(e) => dispatch(updateNumber(e.target.value))}/>
        <button onClick={() => dispatch(increaseCounter())}>Increase</button>
        <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
      </div>
    </>
  );
}

export default ReduxCounter;
