import "./TaskItems.css";
const TaskItems = (props) => {
  return (
    <ul>
      {props.todos.map((user) => (
        <li key={user.id}>{user.todo}</li>
      ))}
    </ul>
  );
};

export default TaskItems;
