import React, {useState} from 'react'
import { Link } from 'react-router-dom';


const Dropdown = () => {

    const [show, setShow] = useState(false);


    return (
        <li className="nav-item dropdown" onClick={() => setShow(!show)}>
            <span className={`nav-link dropdown-toggle ${show ? 'show' : ''}`}
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">Recipe</span>
                <div className={`dropdown-menu ${show ? 'show' : ''}`}>
                      <Link className="dropdown-item" to="/recipe/dessert-list">Deserts</Link>
{/*                       <Link className="dropdown-item" to="#">Sous</Link> */}
                      <Link className="dropdown-item" to="/recipe/main-course">Main Course</Link>

                </div>
            </li>
    )

}

export default Dropdown;