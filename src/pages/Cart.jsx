import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart, increaseQuantity, decreaseQuantity } from '../features/cartSlice';
import { Link } from 'react-router-dom';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  let totalAmount = useSelector((state) => state.cart.totalAmount);

  // Use a fallback to avoid NaN in case totalAmount is invalid
  totalAmount = Number(totalAmount || 0).toFixed(2);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div className="p-6 mt-16">
      <h2 className="text-4xl font-bold pb-9 text-center">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className='text-center my-24'>Your cart is empty. <Link to="/products" className="text-blue-500 hover:underline">Start shopping!</Link></p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="border p-4 flex justify-between">
                <div>
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
                  <h3 className="text-xl">{item.name}</h3>
                  <p>{item.price} USD</p>
                  <div className="flex items-center mt-2">
                    <button onClick={() => handleDecreaseQuantity(item.id)} className="bg-gray-200 px-2 py-1 rounded">-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => handleIncreaseQuantity(item.id)} className="bg-gray-200 px-2 py-1 rounded">+</button>
                  </div>
                </div>
                <button onClick={() => handleRemove(item.id)} className="text-red-500">Remove</button>
              </div>
            ))}
          </div>

          <div className="mt-4 text-right">
            {/* Show total amount with two decimal places */}
            <p className="text-xl font-bold">Total: {totalAmount} USD</p>
            <button 
              onClick={handleClearCart} 
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-4"
            >
              Clear Cart
            </button>
            <Link to="/checkout" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
