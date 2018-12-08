import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-2">
            <div className="container">
                <a href="/" className="brand-logo left">Ninja Ninja!</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/add-ninja">Create Ninja</NavLink></li>
                    <li><NavLink to="/ninjas">About the Ninjas</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
