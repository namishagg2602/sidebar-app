import React from 'react'
import { FaIntercom } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

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

    }
`;



const FrontMenu = ({item}) => {

    return (
        <div>
            <SidebarLink>
                <div>
                    {item.icon}  
                </div>
            </SidebarLink>
        </div>
    )
}

export default FrontMenu;
