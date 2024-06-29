import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';
import HomeBody from './Components/HomeBody';
import Footer from './Components/Footer';


function App() { 

  return (
    <>
      <Header/>

      <HomeBody/>

      <Footer/>
      
    </>
  )
}

export default App
