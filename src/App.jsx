import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Header from './Components/Header'

import TotalCardStat from './Components/TotalCardStat'
import { faCompactDisc, faUsers, faMusic } from '@fortawesome/free-solid-svg-icons'

const PRODUCTS_API_URL = 'http://localhost:3030/apis/products';

import ProductList from './Components/ProductList'


function App() { 

  return (
    <>
      <Header/>

      <TotalCardStat title="Products" icon={faCompactDisc} api={PRODUCTS_API_URL} />
      {/* <TotalCardStat title="Usuarios" icon={faUsers} total={totalUsuarios} /> */}
      <TotalCardStat title="Genres" icon={faMusic} api={PRODUCTS_API_URL} />
      
      <ProductList /> 


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
