import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../features/cartSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    dispatch(addItem(product));
  }
  return (
    <>
      <div

        className="group relative block border p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300  w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto overflow-visible"
      >
        <Link
          to={`/products/${product.id}`}
          className="relative w-full aspect-[4/3] flex items-center justify-center mb-4 overflow-visible">
          <img
            src={product.image}
            alt={product.title}
            className="absolute w-full h-full object-cover  transition-transform duration-300 ease-in-out group-hover:scale-110 z-10"
          />
        </Link>
        <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 truncate">{product.title}</h2>
        <p className="text-sm sm:text-base md:text-lg font-semibold mb-2">{product.price} USD</p>
        <div className='flex items-center justify-between'>
          <Link
            to={`/products/${product.id}`}
            className="inline-block text-blue-500 hover:underline text-xs sm:text-sm md:text-base">
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Add to Cart
          </button>
        </div>
      </div>

    </>
  );
}

export default ProductCard;
