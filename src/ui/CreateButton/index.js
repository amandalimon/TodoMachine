import './CreateButton.css';

function CreateButton(props) {
    return (
        <button
            className="CreateButton"
            onClick={props.onClick}
        >
            +
        </button>
    );
}

export { CreateButton };