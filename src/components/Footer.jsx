import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="flex justify-between flex-col md:flex-row">
        <div>
          <h3 className="text-lg font-bold">E-Commerce</h3>
          <p className="text-gray-400">The best place to shop!</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-blue-400 hover:text-white">Facebook</a>
          <a href="#" className="text-blue-400 hover:text-white">Twitter</a>
          <a href="#" className="text-blue-400 hover:text-white">Instagram</a>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-4">
        &copy; 2024 E-Commerce. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
