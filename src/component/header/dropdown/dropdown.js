import React, {useState} from 'react'


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
                      <a className="dropdown-item" href="#">Deserts</a>
                      <a className="dropdown-item" href="#">Sous</a>
                      <a className="dropdown-item" href="#">First course</a>

                </div>
            </li>
    )

}

export default Dropdown;