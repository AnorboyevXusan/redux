import { useDispatch, useSelector } from "react-redux";
import { decrement, incremet, getAmount } from "./features/CartSlice";
import './App.css'

function App() {
  const dispatch = useDispatch();
  const { amount, isCalled } = useSelector((state) => state.cart);

  return (
    <div>
      <button className="btn" onClick={() => dispatch(decrement())}>-</button>
      <span>{amount}</span>
      <button className="btn" onClick={() => dispatch(incremet())}>+</button>
      <button className="btn" onClick={() => dispatch(getAmount())}>aa</button>
      {isCalled ? <h1>{amount}</h1> : <p>aaa</p>}
    </div>
  );
}

export default App;
