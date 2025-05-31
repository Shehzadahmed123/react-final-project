import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="border p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>{product.price} USD</p>
      <Link to={`/products/${product.id}`} className="text-blue-500">View Details</Link>
    </div>
  );
}

export default ProductCard;
