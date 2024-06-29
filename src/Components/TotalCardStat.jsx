import React from 'react';
import { useState, useEffect } from 'react';
import './TotalCardStat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const API_URL = 'http://localhost:3030/apis/products';

const TotalCardStat = ({title, icon}) => {

    const [totalProductos, setTotalProductos] = useState(0);

  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(API_URL); // Realiza la solicitud HTTP GET a la API
            if (!response.ok) { // Verifica si el estado HTTP indica éxito
              throw new Error(`HTTP error! status: ${response.status}`); // Lanza un error con el estado HTTP
            }
            const data = await response.json(); // Convierte la respuesta a formato JSON
            setTotalProductos(data.total);
          } catch (error) {
            console.error('Error:', error); // Maneja el error de red o HTTP
            // Aquí podrías manejar errores, como mostrar un mensaje al usuario
          }
        };
    
        fetchData();
      }, []); // El array vacío asegura que useEffect solo se ejecute una vez, similar a componentDidMount
      

    return(
        <article className='stat-card__contenedor-general'>
            <div className='stat-card__icono'>
            <FontAwesomeIcon icon={icon} size="2xl" />
            </div>
            <div className='stat-card__contenedor-info'>
                <h4>{title}</h4>
                <p>total: {totalProductos}</p>
            </div>
        </article>
    )
}

export default TotalCardStat;