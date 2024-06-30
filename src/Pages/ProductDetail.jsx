import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import './ProductDetail.css'

const API_DETAIL_URL = 'http://localhost:3030/apis/products/';

const ProductDetail = () => {
    
    const {id} = useParams();
    const [producto, setProducto] = useState();

  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${API_DETAIL_URL}${id}`);
            if (!response.ok) { // Verifica si el estado HTTP indica éxito
              throw new Error(`HTTP error! status: ${response.status}`); // Lanza un error con el estado HTTP
            }
            const data = await response.json();
            setProducto(data.product);
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
    }, [id]);

    if (!producto) {
        return <p>No hay productos disponibles.</p>;
    }

    console.log(producto);

    const {titulo, imagenesProductos, descripcion, autores, release_date, generos, estilo, precio_venta } = producto;
    const releaseDate = new Date(release_date).getFullYear();

    return(
        <div className="detalle-producto__contenedor-general">
    
            <h2 className="producto__titulo-principal"> {titulo} </h2>

            <section className="producto__contenedor-general">

                <div className="producto__contenedor-info--img">
                    <div className="producto__contenedor-img">
                    <img src={`http://localhost:3030/Images/main-img-product/${imagenesProductos[0].nombre}`} alt="imagen del producto" className="tarjeta-producto__img" />
                    </div>
                    <div className="producto__field--info">
                        <p className="producto__info-item--descripcion">{descripcion}</p>
                    </div>
                </div>
                
                <div className="producto__contenedor-info">
                    
                    <div className="producto__field--info">
                        <p className="producto__info-item">Título: {titulo} </p>
                        <p className="producto__info-item">Autor:  {autores.nombre}</p>
                        <p className="producto__info-item">Fecha de estreno:  {releaseDate}</p>
                        <p className="producto__info-item">Genero: {generos.nombre}</p>
                        <p className="producto__info-item">Estilo: {estilo}</p>
                    </div>
                    
                    <div className="producto__field--contenedor-precio">
                        <h3 className="producto__info-item">Precio:&nbsp;</h3>
                        <p className="producto__info-item"> ${precio_venta}</p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ProductDetail;