import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoCartOutline } from "react-icons/io5";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItemCount = useSelector((state) => state.cart.items.length);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="backdrop-blur-lg p-4 bg-black/30 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">E-Commerce</Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded hover:bg-gray-700">Home</Link>
            <Link to="/Admin" className="px-3 py-2 rounded hover:bg-gray-700">AdminSide</Link>
            <Link to="/products" className="px-3 py-2 rounded hover:bg-gray-700">Products</Link>
            <Link to="/cart" className="px-3 py-2 rounded hover:bg-gray-700 relative">
              <IoCartOutline />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{cartItemCount}</span>
              )}
            </Link>
          </div>
          {/* Mobile Menu Button & Cart */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative rounded hover:bg-gray-700 p-2">
              <IoCartOutline />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{cartItemCount}</span>
              )}
            </Link>
            <button onClick={toggleMenu} className="focus:outline-none p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        />
      )}

      {/* Sidebar Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={closeMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link to="/" onClick={closeMenu} className="hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
           <Link to="/Admin" className="px-3 py-2 rounded hover:bg-gray-700">AdminSide</Link>
          <Link to="/products" onClick={closeMenu} className="hover:bg-gray-700 px-3 py-2 rounded">Products</Link>
          <Link to="/cart" onClick={closeMenu} className="hover:bg-gray-700 px-3 py-2 rounded relative">
            Cart
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{cartItemCount}</span>
            )}
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
