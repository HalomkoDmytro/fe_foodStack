import React from 'react';
import './progress.css'

const Progress = ({color}) => {

    const getColor = () => {
        switch(color) {
            case "RED":
                return 'bg-danger';
            case "BLUE":
                return 'bg-info';
            case "GREEN":
                return 'bg-success';
            case "YELLOW":
                return 'bg-warning';
            default:
                return ''
        }
    }

    return (
        <div className="progress">
          <div className={`progress-bar progress-bar-striped progress-bar-animated loader ${getColor()}`}/>
        </div>

    )
}

export default Progress;