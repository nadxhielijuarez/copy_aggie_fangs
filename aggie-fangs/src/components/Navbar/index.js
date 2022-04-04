import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavbarElements";
const Navbar = () => {
  return (
    <>
    <Nav>
        <NavLink exact to="/">
            <h1>Aggie Fangs</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/applications" activeStyle>
                Applications
            </NavLink>
            <NavLink to="/network" activeStyle>
                Network
            </NavLink>
            <NavLink to="/interviewPrep" activeStyle>
                Interview Prep
            </NavLink>
            <NavLink to="/settings" activeStyle>
                Settings
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
        </NavBtn>
    </Nav>
    </>
  )
}

export default Navbar;