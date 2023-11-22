import React from 'react';
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal }) {
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label> Escribe una tarea</label>
            <textarea
                placeholder="Comprar aguacate"
                value={newTodoValue}
                onChange={onChange}
                required
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button
                TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    className="TodoForm-button
                TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };