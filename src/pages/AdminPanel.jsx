import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../features/productSlice';
import AddProductForm from './AddProductForm';

const AdminPanel = () => {
  const products = useSelector((state) => state.products.products); // Fetch products from Redux state
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id)); // Delete product from Redux state and localStorage
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Panel - Manage Products</h1>
      
      {/* Add New Product Form */}
      <AddProductForm />
      
      {/* Product List */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Product Listings</h2>
        {products.length === 0 ? (
          <p>No products available. Add some!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="border p-4">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p>{product.price} USD</p>
                <p className="mt-2 text-gray-600">{product.description}</p>

                {/* Delete Product */}
                <button 
                  onClick={() => handleDelete(product.id)} 
                  className="mt-4 text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
