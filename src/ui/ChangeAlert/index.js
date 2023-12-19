import React from "react";
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css'

function ChangeAlert({ sincronize }) {
    const {show, toggleShow} = useStorageListener(sincronize);
    if(show){
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                <p>Parece que hubo cambios en otra pestaña o ventana del navegador.</p>
                <p>¿Deseas recargar la página?</p>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    onClick={toggleShow}
                >
                    Yup!
                </button>
                </div>
            </div>
        );
    } else{
        return null;
    }
}

export { ChangeAlert }

