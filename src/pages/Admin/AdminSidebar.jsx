import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar if window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 bg-gray-800 text-white p-2 rounded"
      >
       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-4 font-bold text-xl border-b border-gray-700">
          Admin Menu
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Link to="/admin" className="hover:bg-gray-700 px-3 py-2 rounded">Dashboard</Link>
          <Link to="/admin/add-product" className="hover:bg-gray-700 px-3 py-2 rounded">Add Product</Link>
          <Link to="/admin/products" className="hover:bg-gray-700 px-3 py-2 rounded">All Product</Link>
          <Link to="/admin/orders" className="hover:bg-gray-700 px-3 py-2 rounded">Orders</Link>
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;
