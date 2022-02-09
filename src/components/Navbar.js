import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons'
import { reactLocalStorage } from 'reactjs-localstorage';
import * as IoIcons from "react-icons/io";
import { Button } from '@mui/material';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    const name = reactLocalStorage.getObject("Xuser")[0]?.user
    const role = reactLocalStorage.getObject("Xuser")[0]?.role
    console.log(role)

    function FLogout(){
        reactLocalStorage.remove('Xuser');
        window.location.href = "/login"
    }
    
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>

                <div className="navbar">

                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <div>
                        <div className='name'>{name}</div>
                        <div className='role'>{role}</div>
                    </div>

                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-item' onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {

                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                        {reactLocalStorage.getObject("Xuser")[0] ? <li className='nav-text'>
                            <Link  to={"/login"} onClick={FLogout}>
                                {<IoIcons.IoIosAddCircle />}
                                <span>{"LogUot"}</span>
                            </Link>
                        </li> : <li className='nav-text'>
                            <Link to={"/login"}>
                                {<IoIcons.IoIosAddCircle />}
                                <span>{"LogIn"}</span>
                            </Link>
                        </li>}


                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;