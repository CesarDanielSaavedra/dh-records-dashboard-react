import React from 'react';
import './Header.css'

const Header = () => {

    return(
        <header className="header-contenedor-general-tarjeta">
            <nav className="header__navbar">
                <div className="header__navbar__logo"> <a href="#"> DH-Records</a></div>
                
                <ul className="links">
                    <li> <a href="#"> Home </a></li>
                    <li> <a href="#"> Popular </a></li>
                    <li> <a href="#"> Products </a></li>
                </ul>

                <div className="barra-superior__sec-buscar-productos">
                    <input type="text" placeholder="Buscar productos, marcas..." className="sec-buscar-productos__input" />    
                </div>

                <div className="header__nabvar__user">     
                    <input type="checkbox" id="checkbox" />
                    <label for="checkbox" className="hamburguesa">
                        <div class="barra" id="bar1"></div>
                        <div class="barra" id="bar2"></div>
                        <div class="barra" id="bar3"></div>
                    </label>
                    
                    {/*<% if(locals.isLogged) { %>
                        <a href="/users/:id" class="user__logIn"> Hola <%= locals.userLogged.nombreUsuario %></i></a>
                        <a href="/users/logout" class="user__singUp"> LogOut </a>
                    <% }else{ %> */}
                        <a href="/users/login" class="user__logIn"> Log in</a>
                        <a href="/users/register" class="user__singUp"> Sing up </a>
                    {/*<% } %> */}
                </div>

            </nav>
        </header>
    )
}

export default Header;