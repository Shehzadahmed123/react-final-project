import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <>
      <Link
        to={`/products/${product.id}`}
        className="group relative block border p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto overflow-visible"
      >
        <div className="relative w-full aspect-[4/3] flex items-center justify-center mb-4 overflow-visible">
          <img
            src={product.image}
            alt={product.title}
            className="absolute w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110 z-10"
          />
        </div>
        <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 truncate">{product.title}</h2>
        <p className="text-sm sm:text-base md:text-lg font-semibold mb-2">{product.price} USD</p>
        <span className="inline-block text-blue-500 hover:underline text-xs sm:text-sm md:text-base">
          View Details
        </span>
      </Link>

    </>
  );
}

export default ProductCard;
