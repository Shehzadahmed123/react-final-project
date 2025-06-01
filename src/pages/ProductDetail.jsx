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
    setSuccessMessage(`Added to your cart!`);
    
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="p-4 mt-16">
      <button className='cursor-pointer px-5 py-2 bg-blue-500 rounded-lg text-white my-4' onClick={() => window.history.back()}> Back</button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-[80vh] object-contain"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl text-blue-600 font-bold">{product.price} USD</p>
          <p className="mt-4">{product.description}</p>

          <button 
            onClick={handleAddToCart} 
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
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
