import React from 'react';
import './TodoItem.css';

const TodoItem = ({ text, completed, onClick }) => {
  return (
    <li
      className={`todo-item ${completed ? 'completed' : ''}`}
      onClick={onClick}
    >
      {text}
    </li>
  );
};

export default TodoItem;