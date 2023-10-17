import {useState} from 'react';
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
    box-sizing: border-box;
    z-index: 100;
    h1 {
        position: absolute;
        top: 20px;
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
        height: 100px;
        li { 
            &:hover .depth2 {
                height: auto;               
            }
            position: relative;
            > a {
                display: block;
                padding: 0 40px;
                color: #fff;
                line-height: 100px; 
                font-size: 22px;
                text-decoration: 0;               
                &.active {
                    font-weight: bold;
                    color: pink;
                }                
            }
            .depth2 {
                position: absolute;
                top: 80px;
                left: 0;
                width: 100%;
                height: 0; 
                overflow: hidden;
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 3px 3px 3px 3px rgba(0,0,0,0.05);
                transition: height 0.5s ease-in-out;
                transform-origin: top;

                a {
                    display: block;
                    padding: 0 40px;
                    color: #333;
                    font-size: 18px;
                    line-height: 40px;
                    
                    &:hover {
                        font-weight: bold;
                    }
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
                    <li>
                        <NavLink to="/Intro">ReactPlayer</NavLink>
                        <div className='depth2'>
                            <NavLink to="/Intro">depth2_1_1</NavLink>
                            <NavLink to="/Intro">depth2_1_2</NavLink>
                            <NavLink to="/Intro">depth2_1_3</NavLink>
                        </div>
                    </li>
                    <li><NavLink to="/Business">Animation1</NavLink></li>
                    <li><NavLink to="/Animation">Animation2</NavLink></li>
                    <li><NavLink to="/ScrollAnimation">ScrollAnimation</NavLink></li>
                    <li><NavLink to="/Layout">Layout</NavLink></li>
                    <li><NavLink to="/Accordion">Accordion</NavLink></li>
                    <li><NavLink to="/Ui">Ui</NavLink></li>
                </ul>
            </Nav>
        </HeaderWrap>
    );
}

export default Header;