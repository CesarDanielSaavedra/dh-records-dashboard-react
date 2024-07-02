import React from 'react';
import './CardUsers.css'

const CardUsers = ({data}) => {

    console.log(data); 

    const {nombreUsuario,email,imagenUsuario} = data;

    return(
        <article className="tarjeta_usuario">
        <div className="tarjeta-usuario__contenedor-img">
            <img src={`http://localhost:3030/Images/users/${imagenUsuario}`} alt="imagen del usuario" className="tarjeta-usuario__img" />
        </div>
        <div className="tarjeta-usuario__contenedor-info">
            <div className="tarjeta-usuario__contenedor-info--descripcion">
                <p className="tarjeta-usuario__titulo">{nombreUsuario}</p>
                <p className="tarjeta-usuario__autor">{email}</p>
            </div>
            {/* <h3 className="tarjeta-producto__precio">${}</h3>      */}
        </div>
    </article>
)

}

export default CardUsers;