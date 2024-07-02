import React from 'react';

import './HomeBody.css';
import TotalCardStat from '../Components/TotalCardStat';
import { faCompactDisc, faUsers, faMusic } from '@fortawesome/free-solid-svg-icons';

const PRODUCTS_API_URL = 'http://localhost:3030/apis/products';
const USERS_API_URL = 'http://localhost:3030/apis/users';

import ProductList from './ProductList';


const HomeBody = () => {

    return (
        <div className='home__contenedor-general'>
            <h3 className='home__contenedor-titulo'>Bienvenidos a las metricas generales de DH-records!</h3>

            <TotalCardStat title="Products" icon={faCompactDisc} api={PRODUCTS_API_URL} />
             <TotalCardStat title="Users" icon={faUsers} api={USERS_API_URL} /> 
            <TotalCardStat title="Genres" icon={faMusic} api={PRODUCTS_API_URL} />
      
            {/* <ProductList />  */}
        </div>
    );
}

export default HomeBody;