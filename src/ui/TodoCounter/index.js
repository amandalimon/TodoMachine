import React from 'react';
import './TodoCounter.css';

function TodoCounter({ completedTodos, totalTodos, loading }) {

  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      Hoy has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> To Do's
    </h2>
  );
}

export { TodoCounter };