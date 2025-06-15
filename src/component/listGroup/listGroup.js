import React from 'react';

const ListGroup = ({data}) => {

    const getList = () => {
        if(data && data.length > 0) {
                    return data.map((lm, i) => {
                        const isActive = i === 0 ? 'active' : '';
                        const sizeElement = lm.size ? <span className="badge bg-primary rounded-pill">{lm.size}</span> : '';
                        return  <div key={i} className={`list-group-item d-flex justify-content-between align-items-center ${isActive}`} style={{minWidth: '15em'}}>
                            {lm.text}{sizeElement}</div>
                    })
                }
    }

    return <div className="list-group" >
        {getList()}
   </div>
}

export default ListGroup;