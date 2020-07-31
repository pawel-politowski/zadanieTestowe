import React from 'react';
import Logo from '../../images/logo.png';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navbar">
            <div className="brand-logo"><img src={Logo} alt="Logo"/></div>
            <div className="navbar-links">
                <ul>
                    <li><a href="/">Start</a></li>
                    <li><a href="/">Jak to działa?</a></li>
                    <li className="border-right"><a href="/">Cennik</a></li>
                    <li><Link to='/login' style={{padding:0}}><a href="/">Logowanie</a></Link></li>
                    <li><Link to='/register' style={{padding:0}}><a href="/">Rejestracja</a></Link></li>
                </ul>
            </div>

        </nav>
    )
}

export default Navigation;


