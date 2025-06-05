import React, {useState} from 'react';
import RadioOption from './radio-option'

import './radio.css'

const Radio = ({title, description, options}) => {

    const list = options.map((el) => {
        return (
            <RadioOption value={el.value} name={el.name} text={el.text}/>
        )
    });

    return (
        <div>
            {title && <h1>{title}</h1>}
            {description && <p>{description}</p>}
            {list}
        </div>
    )
}

export default Radio;