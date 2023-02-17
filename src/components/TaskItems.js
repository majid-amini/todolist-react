import "./TaskItems.css";
const TaskItems = ({ todos, removeHandler }) => {
  return (
    <ul style={{ width: "100%", margin: "0 auto" }}>
      {todos.map((user) => (
        <div
          key={user.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <li>
            {user.todo}
            <button onClick={() => removeHandler(user.id)}>delete</button>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default TaskItems;
