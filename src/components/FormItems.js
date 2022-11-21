import React, { useState } from "react";
import "./FormItems.css";
const FormItems = (props) => {
  const [todo, setTodo] = useState("");

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (todo.trim().length === 0) {
      return;
    }
    props.addItemHandler(todo);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <h3>Todo List</h3>
        <input
          onChange={changeHandler}
          placeholder="writing your tasks here"
          type="text"
          value={todo}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};
export default FormItems;
