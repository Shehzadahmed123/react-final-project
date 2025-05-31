import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { setProducts } from '../features/productSlice';

function ProductListing() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    // Fetch products only if not already in localStorage
    const loadProductsFromLocalStorage = () => {
      const savedProducts = localStorage.getItem('products');
      return savedProducts ? JSON.parse(savedProducts) : null;
    };

    const existingProducts = loadProductsFromLocalStorage();
    if (!existingProducts) {
      // Fetch products using RapidAPI (mock example)
      const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        dispatch(setProducts(data));
      };
      fetchProducts();
    }
  }, [dispatch]);

  return (
    <>
     <p className='text-center text-4xl font-bold py-6 my-16 underline'>Our Products</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-8 ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
}

export default ProductListing;
