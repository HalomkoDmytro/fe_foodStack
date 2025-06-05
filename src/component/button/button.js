import React from 'react';
import './button.css'

// btnStyle options: "btn-primary", "btn-secondary", , "btn-success", "btn-info",
// "btn-warning", "btn-danger", "btn-light", "btn-outline-dark"
const Button = ({text, onClick, btnStyle = 'btn-primary'}) => {

    return (
        <button
            type="button"
            className={`btn ${btnStyle}`}
            onClick={onClick}>{text}</button>)
    }

export default Button;