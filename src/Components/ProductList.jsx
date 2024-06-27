import React from 'react';
import CardProduct from './CardProduct';
import './ProductList.css';

const ProductList = ({productos}) => {

    if (!productos) {
        return <p>No hay productos disponibles.</p>;
    }

    return(
        <section className="producto__contenedor-general">
            {productos.map((producto) => {
                return <CardProduct key={producto.id} data={producto}/>
            })}
        </section>
    )
}

export default ProductList;