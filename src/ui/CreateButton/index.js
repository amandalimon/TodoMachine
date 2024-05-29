import './CreateButton.css';

function CreateButton({onClick, loading}) {
    return (
        <button
            className="CreateButton"
            onClick={onClick}
            disabled={loading}
        >
            Agrega una tarea
        </button>
    );
}

export { CreateButton };