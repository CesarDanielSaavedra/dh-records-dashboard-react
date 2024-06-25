import React from 'react';
import './TotalCardStat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TotalCardStat = ({title, icon, total}) => {

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