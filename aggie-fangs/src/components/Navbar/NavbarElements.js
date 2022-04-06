import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #500000;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px)/2);
    z-index: 10;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color: #B6CCD7;
    }
`;

export const Bars = styled(FaBars)`
display: none;
color: #500000;
    @media screen and (max-width: 760px){
        display:block;
        position: absolute;
        top:0;
        right: 0;
        transform(-100%, 75%);
        font-size:1.8rem;
        cursor: pointer;
    }
`;
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px){
        display:none;
    }
`;
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    margin-left: 50px;
    white-space: nowrap;

    @media screen and (max-width: 768px){
        display:none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #fff;
    padding 10px 22px;
    color: #000;
    border:none;
    outline:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &.hover{
        transition: all 0.2s ease-in-out;
        background: #000;
        color: #010606
    }
`;
