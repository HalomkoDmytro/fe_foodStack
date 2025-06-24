import React from 'react';
import { Link } from 'react-router-dom';


const ListItemLink = ({href='#', text, children, handleClick }) => {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={href} onClick={handleClick}>{text}</Link>
            {children}
        </li>
    )
}

export default ListItemLink;