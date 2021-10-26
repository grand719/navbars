
import React, {useState} from "react";
import {FaSearch, FaUserCircle} from "react-icons/fa"
import {AiOutlineBell} from "react-icons/ai"
import './NavBar.css';

import { LinkComponent } from "../../LinkComponent/LinkComponent";

export const NavBar = ({user, setUser}) => {

   const loginHandler = () =>{
        setUser(!user)
    }

    return (
        <div id="nav">
            <div id="left-menu">
                <div id="logo">
                    <div id="dot"></div>
                </div>
                <div id="link-wraper">
                    <LinkComponent path = "/" name="Wydarzenia"/>
                    <LinkComponent path = "/" name="Kontakt"/>
                    <LinkComponent path = "/" name="Wesprzyj Nas"/>
                </div>
            </div>
            <div id="right-menu">
                <FaSearch />
                {user ?    
                <><AiOutlineBell /><FaUserCircle /></> : 
                <button id="login-button" onClick={loginHandler}>
                    Zaloguj się
                </button> }
                
            </div>
        </div>
    )

}
