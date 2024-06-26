import React from "react";
import '../styles/button.css';

function Button({text, isButtonClick, gestionClick}) {
    return(
        <button
            className={isButtonClick ? 'button-click' : 'button-reset'}
            onClick={gestionClick}>
                {text}
        </button>
    );
}

export default Button;