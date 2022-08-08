import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import ShoppingCart from './pages/ShoppingCart';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} /> 
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="store" element={<Store />} />
        <Route path="shoppingcart" element={<ShoppingCart/>}/>
      </Route> 
    </Routes>
  );
}

export default App;
