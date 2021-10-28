import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as CgIcons from "react-icons/cg";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";

export const SidebarProfile = [
    {
        title : 'Home',
        path : '/home',
        icon : <AiIcons.AiFillHome/>,
    },
    {
        title : 'Profile',
        path : '/profile',
        icon : <CgIcons.CgProfile/>,

        
        iconOpened : <RiIcons.RiArrowDownSFill/>,
        iconClosed : <RiIcons.RiArrowUpSFill/>,
        
        subNav : [
            {
                title : 'Password',
                path : '/profile/password',
                icon : <IoIcons.IoIosPaper/>,
            },
            {
                title : 'Mail',
                path : '/profile/mail',
                icon : <IoIcons.IoIosPaper/>,
            },
            {
                title : 'Accounts',
                path : 'profile/accounts',
                icon : <IoIcons.IoIosAddCircle/>
            }
        ]
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <BiIcons.BiMessageRounded />,
    }
]

export default SidebarProfile;