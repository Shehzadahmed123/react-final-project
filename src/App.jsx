import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderHistory from './pages/OrderHistory';

import './App.css';

import AddProductForm from './pages/Admin/AddProductForm';
import AdminPanel from './pages/Admin/AdminPanel';
import Products from './pages/Admin/products';
import AppLayout from './components/Layout/AppLayout';
import AdminLayout from './components/Layout/AdminLayout'
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminLayout/>,
    children: [
      {
        index: true, // 👈 This makes AdminPanel the default when /admin is hit
        element: <AdminPanel />
      },
      {
        path: "/admin/panel",
        element:<AdminPanel />
      },
      {
        path: "/admin/add-product",
        element:<AddProductForm />
      },
      {
        path: "/admin/products",
        element:<Products />
      },
      {
        path: "/admin/orders",
        element:<OrderHistory />
      }
    ]
  },
    {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element:<Home />
      },
      {
        path: "/products",
        element:<ProductListing />
      },
      {
        path: "/products/:id",
        element:<ProductDetail />
      },
      {
        path: "/cart",
        element:<Cart />
      },
      {
        path: "/checkout",
        element:<Checkout />
      },
      {
        path: "/orders",
        element:<OrderHistory />
      }
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/admin" element={<AdminLayout />}>
    //       <Route index element={<AdminPanel />} /> {/* Dashboard or Product Listings */}
    //       <Route path="add-product" element={<AddProductForm />} />
    //       <Route path="products" element={<Products />} />
    //       <Route path="orders" element={<OrderHistory />} />
    //       {/* Add more admin routes as needed */}
    //     </Route>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/products" element={<ProductListing />} />
    //     <Route path="/products/:id" element={<ProductDetail />} />
    //     <Route path="/cart" element={<Cart />} />
    //     <Route path="/checkout" element={<Checkout />} />
    //     <Route path="/orders" element={<OrderHistory />} />
    //   </Routes>
    //   <Footer />
    // </Router>
  );
}

export default App;
