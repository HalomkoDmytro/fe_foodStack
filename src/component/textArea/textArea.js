import React, {useState, useEffect} from 'react';

const TextArea = ({id, labelText='', textAreaId, onChangeInput, initValue=''}) => {

    const [value, setValue] = useState(initValue);

    useEffect(() => {
        setValue(initValue)
    }, [initValue]);

    const onChangeTextArea = (e) => {
        setValue(e.target.value)
        if(onChangeInput) {
            onChangeInput(e.target.value, id);
        }
    }

    return (
        <div>
            {labelText ? <label>{labelText}</label> : ''}
            <textarea className="form-control" id={textAreaId} onChange={onChangeTextArea} value={value}/>
        </div>
    )
}

export default TextArea;