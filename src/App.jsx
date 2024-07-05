import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './Components/Header';
import HomeBody from './Pages/HomeBody';
import Footer from './Components/Footer';
import ProductList from './Pages/ProductList';
import GenresList from './Pages/GenresList';
import NotFound from './Pages/NotFound';
import ProductDetail from './Pages/ProductDetail';
import UsersList from './Pages/UsersList';


function App() { 

  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' index element={<HomeBody />}/>
        <Route path='/products' element={<ProductList />}/>
        <Route path='/product/:id' element={<ProductDetail />}/>
        <Route path= '/users' element={<UsersList />}/>
        <Route path='/genres' element={<GenresList />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>

      <Footer/>
      
    </>
  )
}

export default App
