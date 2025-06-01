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
    <div className="p-4 sm:p-6 mt-20 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-6 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center my-24 text-lg">
          Your cart is empty.{" "}
          <Link to="/products" className="text-blue-500 hover:underline">
            Start shopping!
          </Link>
        </p>
      ) : (
        <>
          {/* Cart Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 flex flex-col justify-between shadow-sm">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded mb-4" />
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className=" mb-2">{item.price} USD</p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mt-auto mb-3">
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="border px-3 py-1 rounded "
                  >
                    -
                  </button>
                  <span className="text-base">{item.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="border px-3 py-1 rounded "
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 text-sm hover:underline self-end border px-3 py-2"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div className="mt-8 text-right">
            <p className="text-xl font-bold mb-4">Total: {totalAmount} USD</p>
            <div className="flex flex-col sm:flex-row justify-end gap-4">
              <button
                onClick={handleClearCart}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Clear Cart
              </button>
              <Link
                to="/checkout"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>

  );
}

export default Cart;
