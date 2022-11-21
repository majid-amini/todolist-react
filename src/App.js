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
  return (
    <div className="App">
      <FormItems addItemHandler={addItemHandler} />

      <TaskItems todos={todos} />
    </div>
  );
}

export default App;
