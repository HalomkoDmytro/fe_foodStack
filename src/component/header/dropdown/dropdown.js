import React, {useState} from 'react'
import { Link } from 'react-router-dom';


const Dropdown = () => {

    const [show, setShow] = useState(false);


    return (
        <li className="nav-item dropdown" onClick={() => setShow(!show)}>
            <a className={`nav-link dropdown-toggle ${show ? 'show' : ''}`}
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">Recipe</a>
                <div className={`dropdown-menu ${show ? 'show' : ''}`}>
                      <Link className="dropdown-item" to="/desert-list">Deserts</Link>
                      <Link className="dropdown-item" to="#">Sous</Link>
                      <Link className="dropdown-item" to="#">First course</Link>

                </div>
            </li>
    )

}

export default Dropdown;