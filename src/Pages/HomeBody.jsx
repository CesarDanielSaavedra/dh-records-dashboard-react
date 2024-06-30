import React from 'react';

import TotalCardStat from '../Components/TotalCardStat';
import { faCompactDisc, faUsers, faMusic } from '@fortawesome/free-solid-svg-icons';

const PRODUCTS_API_URL = 'http://localhost:3030/apis/products';

import ProductList from './ProductList';

const HomeBody = () => {

    return (
        <div>
            <TotalCardStat title="Products" icon={faCompactDisc} api={PRODUCTS_API_URL} />
        {/* <TotalCardStat title="Usuarios" icon={faUsers} total={totalUsuarios} /> */}
            <TotalCardStat title="Genres" icon={faMusic} api={PRODUCTS_API_URL} />
      
            {/* <ProductList />  */}
        </div>
    );
}

export default HomeBody;