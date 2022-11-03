import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/actions';

function App() {

  const dispatch = useDispatch();
  const { counter } = useSelector(state => state.counter);
  return (
    <div className="App">
      <h2>Hello World</h2>
      <h1>Count: {counter}</h1>
      <button onClick={() => dispatch(increment())}>
        Up
      </button>
      <button onClick={() => dispatch(decrement())}>
        Down
      </button>
    </div>
  );
}

export default App;
