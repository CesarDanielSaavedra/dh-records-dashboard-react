import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {

    return(
        <header className="header-contenedor-general-tarjeta">
            <nav className="header__navbar">
                <div className="header__navbar__logo"> <Link to='/'> DH-Records </Link></div>
                
                <ul className="links">
                    <li> <Link to='/products'> Products </Link></li>
                    <li> <a href="/users"> Users </a></li>
                    <li> <Link to='/genres'> Genres </Link></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header;