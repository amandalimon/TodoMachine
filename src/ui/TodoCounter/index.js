import React from 'react';
import './TodoCounter.css';

function TodoCounter({ user, completedTodos, totalTodos, loading }) {
  
  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      
      Hola, {user}! <br />
      
      Hoy has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> To Do's
      
    </h2>
  );
}

export { TodoCounter };