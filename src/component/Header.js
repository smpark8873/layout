import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const HeaderWrap = styled.div`
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    min-height: 100px;
    background-color: #333; 
    color: #fff;    
    padding: 30px;
    box-sizing: border-box;
    z-index: 100;
    h1 {
        position: absolute;
        top: 30px;
        left: 50px;
        margin: 0;         
        font-size: 40px;
        a {
            text-decoration: none;
            color: #fff;           
        }              
    }     
`;

const Nav = styled.div`
    margin: 0 auto;
    width: 1000px;
    ul {
        display: flex;
        flex-wrap: nowrap;
        list-style: none;
        margin: 0; 
        li { 
            a{
                display: block;
                padding: 0 50px;
                color: #fff;
                line-height: 40px; 
                font-size: 22px;
                text-decoration: 0;               
                &.active {
                    font-weight: bold;
                    color: pink;
                }
            }
        }
    }
`;

function Header(props) {
    return (
        <HeaderWrap>
            <h1><NavLink to="/">LOGO</NavLink></h1>            
            <Nav>
                <ul>
                    <li><NavLink to="/Intro">Intro</NavLink></li>
                    <li><NavLink to="/Business">Business</NavLink></li>
                    <li><NavLink to="/Animation">Animation</NavLink></li>
                </ul>
            </Nav>
        </HeaderWrap>
    );
}

export default Header;