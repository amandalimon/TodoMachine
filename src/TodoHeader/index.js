import React from "react";
import './TodoHeader.css';

function TodoHeader({ children, loading }) {
    return (
        <header>
            <h1>TODO <span>MACHINE</span></h1>
            {
                React.Children
                    .toArray(children)
                    .map((child) =>
                        React.cloneElement(child, { loading: loading })
                    )}
        </header>
    )
}

export { TodoHeader };