import React from 'react';
import './TodoCounter.css';

function TodoCounter({ completedTodos, totalTodos, loading }) {
  
  return (
    <h1 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      Hola, !
      <div> Hoy has completado <p>{completedTodos}</p> de <p>{totalTodos}</p> To Do's</div>
      
    </h1>
  );
}

export { TodoCounter };