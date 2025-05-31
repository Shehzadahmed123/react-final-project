import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cartSlice';

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.products.find((item) => item.id === parseInt(id)));
  const [successMessage, setSuccessMessage] = useState('');

  if (!product) {
    return <p>Product not found!</p>;
  }

  const handleAddToCart = () => {
    dispatch(addItem(product));
    setSuccessMessage(`${product.name} has been added to your cart!`);

    // Optional: Hide the message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-600">{product.price} USD</p>
          <p className="mt-4">{product.description}</p>

          <button 
            onClick={handleAddToCart} 
            className="mt-4 bg-red-500 text-white px-4 py-2 mx-5 rounded hover:bg-red-600"
          >
            Add to Cart
          </button>

          {/* Success Message */}
          {successMessage && (
            <p className="mt-4 text-green-600">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
