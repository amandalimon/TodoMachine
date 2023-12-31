import React from "react";
import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.css'

function ChangeAlert({ show, toggleShow}) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener }

