import React from 'react';


const ListItemLink = ({href='#', text, children }) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href={href}>{text}</a>
            {children}
        </li>
    )
}

export default ListItemLink;