import React from 'react';
import './Header.css'

const Header = () => {

    return(
        <header className="header-contenedor-general-tarjeta">
            <nav className="header__navbar">
                <div className="header__navbar__logo"> <a href="#"> DH-Records</a></div>
                
                <ul className="links">
                    <li> <a href="#"> Products </a></li>
                    <li> <a href="#"> Users </a></li>
                    <li> <a href="#"> Genres </a></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header;