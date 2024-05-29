import React from 'react';
import './TodoCounter.css';

function TodoCounter({ completedTodos, totalTodos, loading }) {
  const headingClass = `TodoCounter__heading ${loading ? "TodoCounter--loading" : ""}`;

  if (loading) {
    return (
      <h2 className={headingClass}>Cargando datos...</h2>
    );
  }

  if (totalTodos === 0) {
    return (
      <h2 className={headingClass}>No hay tareas agregadas.</h2>
    );
  } else if (completedTodos === totalTodos) {
    return (
      <h2 className={headingClass}>¡Felicidades! Has completado todas tus tareas</h2>
    );
  } else {
    return (
      <h2 className={headingClass}>
        Has completado {completedTodos} de {totalTodos} tareas hoy.
      </h2>
    );
  }
}

export { TodoCounter };
