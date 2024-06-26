import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoForm.css';

function TodoForm(props) {
    const navigate = useNavigate();
    const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || '');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        navigate('/');
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue.length < 4) {
            alert('El texto debe tener al menos 4 caracteres.');
        } else {
            props.submitEvent(newTodoValue);
            navigate('/');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>
            <textarea
                id="newTodoValue"
                value={newTodoValue}
                onChange={onChange} required
                placeholder="Comprar aguacate"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    {props.submitText}
                </button>
            </div>
        </form>
    );
}

export { TodoForm };