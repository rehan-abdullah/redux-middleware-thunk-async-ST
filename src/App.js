import "./styles.css";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./actions";

const App = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="App">
      <h2>Counter</h2>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
