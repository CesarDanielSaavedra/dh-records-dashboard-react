import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const API_URL = 'http://localhost:3030/apis/products';

import Header from './Components/Header'

import TotalCardStat from './Components/TotalCardStat'
import { faCompactDisc, faUsers, faMusic } from '@fortawesome/free-solid-svg-icons'

import ProductList from './Components/ProductList'


function App() { 

  const [count, setCount] = useState(0)

  const [dataProductos, setdataProductos] = useState([]);
  const [totalProductos, setTotalProductos] = useState(0);
  const [totalGeneros, setTotalGeneros] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL); 
      if (!response.ok) { // Verifica si el estado HTTP indica éxito
        throw new Error(`HTTP error! status: ${response.status}`); // Lanza un error con el estado HTTP
      }
      const data = await response.json(); 
      setCount((count) => count + 1);
      setdataProductos(data); 
      setTotalProductos(data.total);
      setTotalGeneros(data.productsByGenre.length);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  console.log(dataProductos.products);

  
  let totalUsuarios = 15;

  return (
    <>
      <Header/>

      <div className="card">
        <button onClick={fetchData}>
          Cargar métricas {count}
        </button>
      </div>

      <TotalCardStat title="Productos" icon={faCompactDisc} total={totalProductos} />
      <TotalCardStat title="Usuarios" icon={faUsers} total={totalUsuarios} />
      <TotalCardStat title="Generos" icon={faMusic} total={totalGeneros} />
      
      <ProductList productos={dataProductos.products} /> 


      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
