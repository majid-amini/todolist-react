import React, { useState } from "react";
import "./FormItems.css";
const FormItems = (props) => {
  const [todo, setTodo] = useState("");
  const [isValid, setIsValid] = useState(true);
  const changeHandler = (e) => {
    setTodo(e.target.value);
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (todo.trim().length === 0) {
      setIsValid(false);
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
          style={{ backgroundColor: !isValid ? "#fab1a0" : "" }}
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
