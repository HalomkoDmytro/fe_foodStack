import React, {useEffect, useState} from 'react';

const Select = ({selectOptions = '', title = '', id, onChange}) => {

    const [selectId, setSelectId] = useState(id);

    useEffect(() => {
        if(!selectId) {
            setSelectId(Math.random());
        }
        if(selectOptions && onChange) {
            onChange(selectOptions[0]);
        }
    }, []);

    const getOption = () => {
        if(!isDisabled()) {
            return selectOptions.map((el, i) =>
             <option key={i}>{el}</option>)
        }
        return "";
    }

    const isDisabled = () => {
        if(selectOptions && selectOptions.length > 0) {
            return false;
        }
        return true;
    }

    const handleChange = (e) => {
        if (onChange) {
            onChange(e.target.value);
        }
    }

    return (
        <div>
             <label htmlFor={selectId} className={`form-label mt-4 `}>{title}</label>
                 <select className="form-select"
                    id={selectId}
                    disabled={isDisabled()}
                    onChange={handleChange}>
                    {getOption()}
                </select>
        </div>
    )
}

export default Select;