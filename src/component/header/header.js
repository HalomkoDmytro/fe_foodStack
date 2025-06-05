import React, {useState} from 'react'
import ListItemLink from './list-item-link';
import Search from './search';
import Dropdown from './dropdown';
import { Link } from 'react-router-dom';

import './header.css'

const Header = () => {

    return (
        <div className='navbar navbar-expand-lg fixed-top bg-primary' data-bs-theme="dark">
            <div className="  container">
                    <Link className="navbar-brand" to={'/'}>MyCookBook</Link>
                    <div className="navbar-collapse collapse" id="navbarResponsive" >
                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav me-auto">

                                <ListItemLink href="/home" text="Home">
                                    <span className="visually-hidden">(current)</span>
                                </ListItemLink>
                                <Dropdown/>
                                <ListItemLink href="/feature" text="Features"/>
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