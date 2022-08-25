import React from "react";
import {NavLink} from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return (
        <>
            <ul className="nav-ul">
                <li><NavLink className={({ isActive }) =>
                        isActive ? 'active-navlink' : ''} to="/">Task 1</NavLink></li>
            </ul>
        </>
    )
}
export default Nav;