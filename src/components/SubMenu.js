import React, {useState} from 'react'
import { FaIntercom } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import './sty.css'

const SidebarLink = styled(Link)`
    display : flex;
    color: black;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    list-style: none;
    height: 30px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        color : purple;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`;

const SidebarDrop = styled(Link)`
    display : flex;
    color : azure;
    justify-content: space-between;
    align-items: center;
    padding: 1px;
    margin-left : 20px;
    list-style: none;
    text-decoration: none;
    font-size: 15px;

   
    &:hover {
    cursor: pointer;
    color: black;
  }
`;



const SidebarLabel = styled.span`
    margin-left : 16px;
`;


const DropdownLink = styled(Link)`
  text-decoration : none;
`;


const SubMenu = ({item}) => {

    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <div>
            <SidebarLink to={item.path} onClick={showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>

                <div>
                    {item.subNav && subnav ? item.iconClosed : item.subNav ? item.iconOpened : null}
                </div>
            </SidebarLink>

            <div className="bgdrop">
            {subnav && item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                      
                        <SidebarDrop>{item.title}</SidebarDrop>
                    </DropdownLink>
                );
            })}
            </div>
        </div>
    )
}

export default SubMenu;
