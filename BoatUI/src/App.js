import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        
      
        
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;
