import React, {useState} from 'react'
import ListItemLink from './list-item-link';
import Search from './search';
import Dropdown from './dropdown';
import { Link } from 'react-router-dom';

import './header.css'

const Header = () => {

    const [collapse, setCollapse] = useState(false);

    const isCollapse = () => collapse ? "" : 'collapse';

    return (
        <div className='navbar navbar-expand-lg fixed-top bg-primary' data-bs-theme="dark">
            <div className="  container">
                    <Link className="navbar-brand" to={'/home'}>MyCookBook</Link>
                        <button className="navbar-toggler" type="button" onClick={e=>{setCollapse(prev => !prev)}}>
                          <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className={`navbar-collapse ${isCollapse()}`} id="navbarResponsive" >
                        <div className={`${isCollapse()} navbar-collapse`} id="navbarColor01">
                            <ul className="navbar-nav me-auto">

                                <ListItemLink href="/home" text="Home">
                                    <span className="visually-hidden">(current)</span>
                                </ListItemLink>
                                <Dropdown/>
                                <ListItemLink href="/encyclopedia" text="Encyclopedia"/>
                                <ListItemLink href="/create-article" text="Add Post"/>
                            </ul>
                            <Search />
                        </div>
                    </div>
            </div>
        </div>

    )

}

export default Header;