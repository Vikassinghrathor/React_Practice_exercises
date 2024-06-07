import { useState } from "react";
import './index.css';

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [addInput, setAddInput] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [editValue, setEditValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim()) {
      setAddInput([...addInput, inputValue]);
      setInputValue("");
    }
  }

  function handleDelete(index) {
    setAddInput(addInput.filter((_, i) => i !== index));
  }

  function handleRemoveAll() {
    setAddInput([]);
  }

  function handleEdit(index) {
    setIsEditing(index);
    setEditValue(addInput[index]);
  }

  function handleSave(index) {
    const updatedTasks = [...addInput];
    updatedTasks[index] = editValue;
    setAddInput(updatedTasks);
    setIsEditing(null);
    setEditValue("");
  }

  return (
    <>
      <h1>Todo App</h1>
      <div className="todo-container">
        <input
          type="text"
          placeholder="Enter today's task"
          value={inputValue}
          onChange={handleInput}
        />
        <button type="submit" onClick={handleSubmit}>Add Task</button>
        <ul>
          {addInput.map((task, index) => (
            <div key={index} className="task-item">
              {isEditing === index ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button onClick={() => handleSave(index)}>Save</button>
                </>
              ) : (
                <>
                  <li>{task}</li>
                  <button onClick={() => handleEdit(index)}>Edit Task</button>
                  <button onClick={() => handleDelete(index)}>Delete Task</button>
                </>
              )}
            </div>
          ))}
        </ul>
        <button onClick={handleRemoveAll}>Remove All Tasks</button>
      </div>
    </>
  );
};

export default App;
