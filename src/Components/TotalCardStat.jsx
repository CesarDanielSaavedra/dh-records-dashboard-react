import React from 'react';
import { useState, useEffect } from 'react';
import './TotalCardStat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TotalCardStat = ({title, icon, api}) => {

    const [total, setTotal] = useState(0);

  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(api);
            if (!response.ok) { // Verifica si el estado HTTP indica éxito
              throw new Error(`HTTP error! status: ${response.status}`); // Lanza un error con el estado HTTP
            }
            const data = await response.json();
            switch (title) {
              case 'Products':
              case 'Users':
                  setTotal(data.total);
                  break;
              case 'Genres':
                  setTotal(data.productsByGenre.length);
                  break;
              default:
                  setTotal(0);
          }
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
      }, []); // El array vacío asegura que useEffect solo se ejecute una vez
      

    return(
        <article className='stat-card__contenedor-general'>
            <div className='stat-card__icono'>
            <FontAwesomeIcon icon={icon} size="2xl" />
            </div>
            <div className='stat-card__contenedor-info'>
                <h4>{title}</h4>
                <p>total: {total}</p>
            </div>
        </article>
    )
}

export default TotalCardStat;