// src/components/TodoList.js
import React from "react";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between p-2 border-b border-gray-200"
        >
          <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="mr-2"
            />
            <span
              className={`${
                todo.completed ? "line-through text-gray-400" : "text-black"
              }`}
            >
              {todo.title}
            </span>
            {todo.recurrence && (
              <span className="ml-2 text-sm text-gray-500">
                ({todo.recurrence})
              </span>
            )}
          </div>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
