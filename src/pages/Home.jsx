import ProductListing from './ProductListing';

function Home() {
  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat w-full min-h-[400px] mt-16" style={{ backgroundImage: `url('https://pk.image1993.com/cdn/shop/files/Lawnkari_25_463f5d0e-ec13-4f32-b980-fdc7ddc3eda2.jpg?v=1748583697')` }}>
        <div className="text-center py-60 text-white bg-black bg-opacity-40 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
          <p>Shop the latest products now!</p>
        </div>
      </div>
      <div className="mt-4">
        <ProductListing />
      </div>
    </>
  );
}

export default Home;
