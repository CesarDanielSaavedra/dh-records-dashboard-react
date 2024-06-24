import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import ProductList from './Components/ProductList'
import laEsquinaDelInfinito from './assets/laEsquinaDelInfinito.jpg'
import detonadorDeSueños from './assets/detonadorDeSueños.jpg'
import TotalCardStat from './Components/TotalCardStat'

function App() {
  const [count, setCount] = useState(0)

  let productos = [
    {
      id: 1,
      titulo: "La esquina del infinito",
      imagen: laEsquinaDelInfinito,
      autor: "La Renga",
      precio: 19.999
    },
    {
      id: 2,
      titulo: "Detonador de sueños",
      imagen: detonadorDeSueños,
      autor: "La Renga",
      precio: 19999
    },
    {
        id: 3,
        titulo: "Oktubre",
        imagen: detonadorDeSueños,
        autor: "Los Redondos",
        precio: 29999
    },
    {
        id: 4,
        titulo: "El acorazado Rivadavia",
        imagen: detonadorDeSueños,
        autor: "La Renga",
        precio: 15999
    },
    {
        id: 5,
        titulo: "La mosca y la sopa",
        imagen: detonadorDeSueños,
        autor: "Los Redondos",
        precio: 24999
    },
    {
        id: 6,
        titulo: "Murga de la Virgen",
        imagen: detonadorDeSueños,
        autor: "La Renga",
        precio: 17999
    },
    {
        id: 7,
        titulo: "Luzbelito",
        imagen: detonadorDeSueños,
        autor: "Los Redondos",
        precio: 22999
    }
  ];

  return (
    <>
      <Header/>

      <TotalCardStat />

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
