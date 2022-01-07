import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'AddNew',
        path: '/addnew',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'WorkTab',
        path: '/worktab',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'AddUser',
        path: '/adduser',
        icon: <IoIcons.IoIosAddCircle />,
        cName: 'nav-text'
    }
]