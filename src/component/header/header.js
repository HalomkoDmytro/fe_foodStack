import React, {useEffect,useState} from 'react'
import {logOut} from '../../service/loginService';
import ListItemLink from './list-item-link';
import Search from './search';
import Dropdown from './dropdown';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setRoles } from '../../utils/slice/rolesSlice';

import './header.css'

const Header = () => {

    const [collapse, setCollapse] = useState(false);
    const [isLogIn, setLogIn] = useState(false);
    const [isEditor, setEditor] = useState(false);
    const userRoles = useSelector(state => state.roles);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
       if(userRoles.value?.length > 0) {
            setLogIn(true);
            setEditor(userRoles.value.map(item => item.trim()).includes("ROLE_ADMIN"));
       }
    }, [userRoles]);

    const setLogOut = () => {
        dispatch(setRoles([]));
        logOut();
        setLogIn(false);
        setEditor(false);
        navigate("/home")
    }

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
                                {isEditor && <ListItemLink href="/create-article" text="Add Post"/>}
                                {isLogIn && <ListItemLink text="Log Out" handleClick={()=>setLogOut()}/>}
                            </ul>
                            <Search />
                        </div>
                    </div>
            </div>
        </div>

    )

}

export default Header;