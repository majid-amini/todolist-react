import "./App.css";
import React, { useState } from "react";
import FormItems from "./components/FormItems";
import TaskItems from "./components/TaskItems";
function App() {
  const [todos, setTodo] = useState([]);
  const addItemHandler = (userText) => {
    setTodo((item) => {
      return [...item, { todo: userText, id: Math.random().toString() }];
    });
  };
  const removeHandler = (id) => {
    const filteredTasks = todos.filter((item) => item.id !== id);
    setTodo(filteredTasks);
  };
  return (
    <div className="App">
      <FormItems addItemHandler={addItemHandler} />

      <TaskItems todos={todos} removeHandler={removeHandler} />
    </div>
  );
}

export default App;
