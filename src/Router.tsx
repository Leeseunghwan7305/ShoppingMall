import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages';
import ProductDetail from './pages/products/product';
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/:id" element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
