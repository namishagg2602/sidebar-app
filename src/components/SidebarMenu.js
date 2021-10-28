import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as CgIcons from "react-icons/cg";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";

export const SidebarMenu = [
    {
    title : 'Notifications',
    path : '/notifications',
    icon : <IoIcons.IoIosNotificationsOutline/>,

    
    iconClosed : <RiIcons.RiArrowUpSFill/>,
    iconOpened : <RiIcons.RiArrowDownSFill/>,

    subNav: [
        {
          title: 'Block',
          path: '/notifications/block',
          icon: <IoIcons.IoIosPaper />
        },
        {
          title: 'Silenced',
          path: '/notifications/silenced',
          icon: <IoIcons.IoIosPaper />
        },
        {
            title: 'Publish',
            path: '/notification/publish',
            icon: <IoIcons.IoIosPaper />
          },
          {
            title: 'Program',
            path: '/notifications/program',
            icon: <IoIcons.IoIosPaper />
          }
      ]
},
{
    title: 'Explore',
    path: '/explore',
    icon: <MdIcons.MdOutlineExplore />,
},
{
    title: 'Saved',
    path: '/saved',
    icon: <BsIcons.BsBookmark />,
}
]

export default SidebarMenu;