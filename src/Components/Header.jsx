import React, { useState } from 'react';

function Header({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    } else {
      alert("write some text first")
    }
  };

  return (
    <header className="mb-4">
      <h1 className="text-4xl font-bold text-center text-white">To-Do List</h1>
      <form onSubmit={handleSubmit} className="mt-8 flex justify-center ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 mr-2 border border-gray-300 rounded-l w-1/2"
          placeholder="Add a new task"
        />
        <button type="submit" className="bg-purple-600 hover:bg-blue-700 transition-all text-white p-2 rounded-r w-20">
          Add
        </button>
      </form>
    </header>
  );
}

export default Header;