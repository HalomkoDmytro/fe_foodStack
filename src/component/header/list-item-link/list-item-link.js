import React from 'react';
import { Link } from 'react-router-dom';


const ListItemLink = ({href='#', text, children }) => {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={href}>{text}</Link>
            {children}
        </li>
    )
}

export default ListItemLink;