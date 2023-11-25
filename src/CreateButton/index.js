import './CreateButton.css';

function CreateButton ({setOpenModal}) {
    return (
        <button 
        className="CreateButton"
            onClick={
             () => {setOpenModal(state => !state);}
            }
        >+</button>
    );
}

export {CreateButton};