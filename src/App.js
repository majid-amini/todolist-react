import "./App.css";
import React, { useState } from "react";
import FormItems from "./components/FormItems";
import TaskItems from "./components/TaskItems";
function App() {
  const [todos, setTodo] = useState([]);
  const addItemHandler = (todo) => {
    setTodo([...todos, todo]);
    console.log(todo);
  };
  return (
    <div className="App">
      <FormItems addItemHandler={addItemHandler} />

      <TaskItems todos={todos} />
    </div>
  );
}

export default App;
