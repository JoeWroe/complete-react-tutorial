import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-2">
            <div className="container">
                <a href="/" className="brand-logo left">Ninja Ninja!</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Create Ninja</a></li>
                    <li><a href="/">About the Ninjas</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
