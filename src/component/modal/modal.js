import React, {useState} from 'react';
import Button from '../button';

const Modal = ({isOpen, setOpen, headerText='info', modalText, optBtnText, optOnClick, optBtnTextStyle}) => {

    const getDisplay = () => {
        return isOpen ? {display: "block"} : {display: "none"}
    }

    const optionalButton = () => {
        if(optBtnText && optOnClick) {
            return <Button text={optBtnText} btnStyle={optBtnTextStyle} onClick={() => {optOnClick(); setOpen(false)}}/>
        }
    }

    return (
        <div className="modal "  style={getDisplay()}  >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{headerText}</h5>
              </div>
              <div className="modal-body">
                <p>{modalText}</p>
              </div>
              <div className="modal-footer">
                {optionalButton()}
                <button type="button" className="btn btn-secondary" onClick={()=>{setOpen(!isOpen)}}>Close</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Modal;