import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderHistory from './pages/OrderHistory';

import Footer from './components/Footer';
import './App.css';
import AdminLayout from './components/AdminLayout';
import AddProductForm from './pages/Admin/AddProductForm';
import AdminPanel from './pages/Admin/AdminPanel';
import Products from './pages/Admin/products';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPanel />} /> {/* Dashboard or Product Listings */}
          <Route path="add-product" element={<AddProductForm />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<OrderHistory />} />
          {/* Add more admin routes as needed */}
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<OrderHistory />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
