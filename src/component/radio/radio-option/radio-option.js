import React, {useState} from 'react';

import './radio-option.css';

const RadioOption = ({value, name, text}) => {

    return (
        <label className="formCheck">
            <input type="radio"
                value={value}
                name={name}
            />
            {text && <p className="radioButtonText">{text}</p>}
        </label>

    )
}


export default RadioOption;