import React from 'react';
import { useState, useEffect } from 'react';
import CardProduct from './CardProduct';
import './ProductList.css';

const API_URL = 'http://localhost:3030/apis/products';

const ProductList = () => {

    const [productos, setProductos] = useState(null);

  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(API_URL);
            if (!response.ok) { // Verifica si el estado HTTP indica éxito
              throw new Error(`HTTP error! status: ${response.status}`); // Lanza un error con el estado HTTP
            }
            const data = await response.json();
            setProductos(data.products);
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
    }, []);

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