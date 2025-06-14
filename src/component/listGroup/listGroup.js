import React, {useState} from 'react';

const ListGroup = ({id, listData=[], onChangeInput}) => {

    const [listElement, setListElement] = useState(listData);
    const [elementText, setElementText] = useState('');
    const [size, setSize] = useState('');

    const handleClickAddElementToList = (e) => {
        if(elementText) {
            const newListElement = [...listElement, {text: elementText, size}]
            setListElement(newListElement);
            onChangeInput(newListElement, id);
        }
        setSize('');
        setElementText('');
    }

    const getList = () => {
        const thisListElement = getLisElement();
        if(thisListElement){
            return <div className="list-group">
                {getLisElement()}
            </div>
        }
    }

    const getLisElement = () => {
        if(listElement && listElement.length > 0) {
            return listElement.map((lm, i) => {
                const isActive = i == 0 ? 'active' : '';
                const sizeElement = lm.size ? <span className="badge bg-primary rounded-pill">{lm.size}</span> : '';
                return  <div key={i} className={`list-group-item d-flex justify-content-between align-items-center ${isActive}`}>
                    {lm.text}{sizeElement}</div>
            })
        }
    }

    const addListElement = () => {
        return <div>
            <p></p>
            <div className="input-group mb-3">
                <input className="form-control" value={elementText} placeholder="Text to add" onChange={e => setElementText(e.target.value)}/>
                <input className="input-group-text" value={size} placeholder="Size (optional)" onChange={e => setSize(e.target.value)}/>
                <button className="btn btn-success" type="button" onClick={handleClickAddElementToList}>Add +</button>
            </div>
       </div>
    }

    return (
        <div key={id}>
            {getList()}
            {addListElement()}
        </div>
    )

}

export default ListGroup;