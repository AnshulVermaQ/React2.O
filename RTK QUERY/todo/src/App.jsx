import Todo from "./todos/Todo.jsx"
import { useSelector } from "react-redux";
import { increment ,decrement} from "./store/CounterSlice.jsx";
import { useDispatch } from "react-redux";

const App = () => {


  const count = useSelector((state) => state.counter.count);

  const dispatch  = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  }

  
  const handleDecrement = () => {
    dispatch(decrement());
  }

  return (
    <div>
      Hello
      <Todo />
      <div>
        <Button onClick={handleIncrement}>Increment</Button>
        <h1>{count}</h1>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
    </div>
  )
}

export default App
