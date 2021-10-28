import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import SidebarProfile from './SidebarProfile.js'
import Topics from './Topics'
import SubMenu from './SubMenu'
import FrontMenu from './FrontMenu'
import SidebarMenu from './SidebarMenu.js'
import Bedimcode from './Bedimcode.js'

const TopBar= styled.div `
    background : white;
    border-bottom : 1px solid grey;
    height : 80px;
    width : 100%;
    margin-top : -10px;

`

const Nav= styled.div`
    border-right : 1px solid grey;
    padding-top : 50px;
    background : white;
    height : 1000px;
    width : 50px;
    margin-left : -10px;
    display : flex;
    justify-content : flex-start;
    position : fixed;
    top : -300px;
    align-items : center;
`;

const SidebarNav = styled(Nav)`
    background : white;
    border-right : 1px solid grey;
    width : 200px;
    height : 1000px;
    display: flex;
    justify-content: flex-start;
    top : -250px;
    left : ${({ sidebar}) => (sidebar ? '0' : '-100%')};
    transition : 500ms;
    z-index : 1; 
`;

const SidebarWrap = styled.div`
    padding-left : 5px;
    width : 100%;
`;  


const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);
   

    return (
        <div>
            <TopBar to="#">

            </TopBar>
           <Nav to='#'  onMouseEnter={() => setSidebar(true)} >
                <SidebarWrap>
                    {SidebarProfile.map((item,index) => {
                        return <FrontMenu item={item} key={index}/>;
                    })}
                    {SidebarMenu.map((item,index) => {
                        return <FrontMenu item={item} key={index}/>;
                    })}
                </SidebarWrap>
           </Nav>
           <SidebarNav sidebar={sidebar}  onMouseLeave={() => setSidebar(false)}>
               <SidebarWrap>
                    <Bedimcode name="Bedimcode"/>
                    <Topics name = 'PROFILE'/>
                    {SidebarProfile.map((item,index) => {
                        return <SubMenu item={item} key={index}/>;
                    })}
                    <Topics name = 'MENU'/>
                    {SidebarMenu.map((item,index) => {
                        return <SubMenu item={item} key={index}/>;
                    })}

               </SidebarWrap>
           </SidebarNav>
        </div>
    )
}

export default Sidebar;
