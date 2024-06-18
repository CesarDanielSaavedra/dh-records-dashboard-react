import React from 'react';
import CardProduct from './CardProduct';
import './ProductList.css';

const ProductList = (props) => {
    
    let listaProductos = props.data;

    return(
        <section className="producto__contenedor-general">
            {listaProductos.map((producto) => {
                return <CardProduct key={producto.id} data={producto}/>
            })}
        </section>
    )
}

export default ProductList;