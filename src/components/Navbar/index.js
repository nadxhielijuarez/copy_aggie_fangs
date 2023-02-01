import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavbarElements";
import logo from "./../../images/Aggie_Fangs_Logo_Transparent.png";
const Navbar = () => {
  return (
    <>
    <Nav>
        <NavLink exact to="/">
            <img src={logo} alt="logo" height="100%"/>
            <h1 class="nav-title">Aggie Fangs</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/feedbackform" activeStyle>
                <div class = "nav-link">Share Experience</div>
            </NavLink>
            <NavLink to="/interviewPrep" activeStyle>
                <div class = "nav-link">Interview Prep</div>
            </NavLink>
            <NavLink to="/coding" activeStyle>
                <div class = "nav-link">Coding Problems</div>
            </NavLink>
            <NavLink to="/guide1" activeStyle>
                <div class = "nav-link">Interview Guides</div>
            </NavLink>
            <NavLink to="/settings" activeStyle>
                <div class = "nav-link">Settings</div>
            </NavLink>
        </NavMenu>
    </Nav>
    </>
  )
}

export default Navbar;