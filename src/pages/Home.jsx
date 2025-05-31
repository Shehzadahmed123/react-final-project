import React from 'react';
import ProductListing from './ProductListing';

function Home() {
  return (
   <>
    <div className="text-center">
      <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
      <p>Shop the latest products now!</p>
    </div>
    <div><ProductListing/></div>
   </>
    
  );
}

export default Home;
