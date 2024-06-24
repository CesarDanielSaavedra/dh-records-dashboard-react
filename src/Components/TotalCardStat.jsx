import React from 'react';
import './TotalCardStat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'

const TotalCardStat = () => {
    return(
        <article className='stat-card__contenedor-general'>
            <div className='stat-card__icono'>
            <FontAwesomeIcon icon={faCompactDisc} size="2xl" />
            </div>
            <div className='stat-card__contenedor-info'>
                <h4>titulo general</h4>
                <p>total: </p>
            </div>
        </article>
    )
}

export default TotalCardStat;