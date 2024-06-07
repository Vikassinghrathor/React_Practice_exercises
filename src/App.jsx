import { useReducer, useState } from 'react';
import './index.css';

// Define initial state
const initialState = [];

// Define reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'toggle':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'remove':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    dispatch({ type: 'add', text });
    setText('');
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {state.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => dispatch({ type: 'toggle', id: todo.id })}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => dispatch({ type: 'remove', id: todo.id })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
