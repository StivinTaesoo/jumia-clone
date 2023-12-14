import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/home/Home";
import ProductCategory from "./components/products/ProductCategory";
import ProductDetails from "./components/products/ProductDetails";
import StateProvider from "./context/StateProvider";
import Cart from "./components/cart/Cart";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/products/:category"
                    element={<ProductCategory />}
                />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
