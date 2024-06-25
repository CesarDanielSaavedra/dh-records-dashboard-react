import React from 'react';
import './CardProduct.css'

const CardProduct = ({data}) => {

    const { titulo, autores, precio_venta, imagen } = data;

    return(
        <article className="tarjeta_producto">
            <div className="tarjeta-producto__contenedor-img">
                <img src={imagen} alt="imagen del producto" className="tarjeta-producto__img" />
            </div>
            <div className="tarjeta-producto__contenedor-info">
                <div className="tarjeta-producto__contenedor-info--descripcion">
                    <p className="tarjeta-producto__titulo">{titulo}</p>
                    <p className="tarjeta-producto__autor">{autores.nombre}</p>
                </div>
                <h3 className="tarjeta-producto__precio">${precio_venta}</h3>     
            </div>
        </article>
    )
}

export default CardProduct;