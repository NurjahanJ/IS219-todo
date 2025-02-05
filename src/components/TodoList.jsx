// Import necessary dependencies from React
import React, { useState } from 'react';

// Define the TodoList component as a functional component
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setTodos([...todos, {
      id: Date.now(),
      text: inputValue,
      completed: false
    }]);

    setInputValue('');
  };

  // Function to toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Todo List</h1>

      {/* Form for adding new todos */}
      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-1 p-3 border rounded-lg text-lg text-gray-700 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300"
        />
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add
        </button>
      </form>

      {/* List of todos */}
      <ul className="space-y-2">
        {todos.map(todo => (
          <li 
            key={todo.id}  
            className={`flex items-center justify-between p-3 rounded-lg shadow-md ${
              todo.completed ? 'bg-green-100' : 'bg-white'
            }`}
          >
            {/* Checkbox and todo text */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="h-5 w-5 accent-blue-500"
              />
              <span className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                {todo.text}
              </span>
            </div>
            {/* Delete button */}
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-600 hover:text-red-800 transition duration-200"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the component
export default TodoList;
