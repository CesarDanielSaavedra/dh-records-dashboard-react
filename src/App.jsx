import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './Components/Header'
import ProductList from './Components/ProductList'
import laEsquinaDelInfinito from './assets/laEsquinaDelInfinito.jpg'
import detonadorDeSueños from './assets/detonadorDeSueños.jpg'

import TotalCardStat from './Components/TotalCardStat'
import { faCompactDisc, faUsers, faMusic } from '@fortawesome/free-solid-svg-icons'

import productsListAll from './apiData/productsListAll.json'

function App() {
  const [count, setCount] = useState(0)

  console.log(productsListAll);

  let productos = productsListAll.products;

  let totalProductos = productsListAll.total;
  let totalUsuarios = 15;
  let totalGeneros = 7;

  return (
    <>
      
      <Header/>

      <TotalCardStat title="Productos" icon={faCompactDisc} total={totalProductos} />
      <TotalCardStat title="Usuarios" icon={faUsers} total={totalUsuarios} />
      <TotalCardStat title="Generos" icon={faMusic} total={totalGeneros} />

      <ProductList data={productos}/>
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
