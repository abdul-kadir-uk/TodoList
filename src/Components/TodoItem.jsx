import React, { useState } from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`p-2  border rounded ${todo.completed ? 'bg-green-100' : 'bg-white'}`}>
      <div className="flex justify-between items-center">
        {isEditing ? (
          <textarea
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="p-1 border rounded w-3/4 "
          />
        ) : (
          <span className={`lg:flex-1 overflow-auto ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.text}
          </span>
        )}

        <div className="space-x-2">
          <button
            onClick={() => toggleComplete(todo.id)}
            className="text-blue-500"
          >
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={handleEdit} className="text-yellow-500">
            {isEditing ? 'Save' : 'Edit'}
          </button>
          <button onClick={() => deleteTodo(todo.id)} className="text-red-500">
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
