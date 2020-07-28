import React from 'react';
import Logo from '../../images/logo.png';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navbar">
            <div className="brand-logo"><img src={Logo} alt="Logo"/></div>
            <div className="navbar-links">
                <ul>
                    <li><a href="/">Start</a></li>
                    <li><a href="/">Jak to działa?</a></li>
                    <li className="border-right"><a href="/">Cennik</a></li>
                    <li><a href="/">Logowanie</a></li>
                    <li><a href="/">Rejestracja</a></li>
                </ul>
            </div>

        </nav>
    )
}

export default Navigation;


