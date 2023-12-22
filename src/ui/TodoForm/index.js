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
        props.submitEvent(newTodoValue);
        navigate('/');
    };

    return (
        <div className='new-todo-container'>
            <form onSubmit={onSubmit}>
                <label>{props.label}</label>
                <textarea
                    id="newTodoValue"
                    placeholder="Comprar aguacate"
                    value={newTodoValue}
                    onChange={onChange}
                    required
                />
                <div className="TodoForm-buttonContainer">
                    <button
                        className="TodoForm-button TodoForm-button--cancel"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        type="submit"
                    >
                        {props.submitText}
                    </button>
                </div>
            </form>
        </div>
    );
}

export { TodoForm };