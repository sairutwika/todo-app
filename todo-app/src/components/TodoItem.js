import React from "react";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "" }}>
      <span onClick={() => toggleComplete(todo.id)}>{todo.title}</span> - {todo.recurrence}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
