import React from "react";
import {NavLink} from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return (
        <>
            <ul className="nav-ul">
                <li><NavLink className={({ isActive }) =>
                        isActive ? 'active-navlink' : ''} to="/">Task 1</NavLink></li>
                <li><NavLink className={({ isActive }) =>
                        isActive ? 'active-navlink' : ''} to="/task-2">Task 2</NavLink></li>
                <li><NavLink className={({ isActive }) =>
                        isActive ? 'active-navlink' : ''} to="/task-3">Task 3</NavLink></li>
            </ul>
        </>
    )
}
export default Nav;