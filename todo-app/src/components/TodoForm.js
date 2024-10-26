// src/components/TodoForm.js
import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  const [recurrence, setRecurrence] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title, recurrence); // Calls the addTodo function passed as a prop
      setTitle("");
      setRecurrence("");
    }
  };

  return (
    <div class = "p-5 space-x-2">
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border border-gray-400 rounded mb-2 "
        required
      />
      <select
        value={recurrence}
        onChange={(e) => setRecurrence(e.target.value)}
        className="p-2 border border-gray-400 rounded mb-2"
      >
        <option value="">No Recurrence</option>
        <option value="daily" class = "text-green-300">Daily</option>
        <option value="weekly"  class = "text-green-300">Weekly</option>
        <option value="monthly" class = "text-green-300">Monthly</option>
        <option value="yearly" class = "text-green-300">Yearly</option>
      </select>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded  items-center text-center fl ">
        Add Task
      </button>
      </form>
      </div>
  );
}

export default TodoForm;
