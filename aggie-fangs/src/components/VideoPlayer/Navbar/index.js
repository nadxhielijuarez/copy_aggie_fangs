import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavbarElements";
import logo from "./../../images/Aggie_Fangs_Logo_Transparent.png";
const Navbar = () => {
  return (
    <>
    <Nav>
        <NavLink exact to="/">
            <h1 class="nav-title">Aggie Fangs</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/">
                <img class="logo-img" src={logo} alt="logo"/>
            </NavLink>
            <NavLink to="/applications" activeStyle>
                <div class = "nav-link">Applications</div>
            </NavLink>
            <NavLink to="/network" activeStyle>
                <div class = "nav-link">Network</div>
            </NavLink>
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
        <NavBtn>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
        </NavBtn>
    </Nav>
    </>
  )
}

export default Navbar;