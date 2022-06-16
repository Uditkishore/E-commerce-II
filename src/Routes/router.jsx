import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Navbar from "../Components/Navbar";
import ProductsPage from "../Components/Products/Products";
const Router = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  );
};

export default Router;
