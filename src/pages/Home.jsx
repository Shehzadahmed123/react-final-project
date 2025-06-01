import ProductListing from './ProductListing';

function Home() {
  return (
   <>
    <div
      className="text-center py-60 text-white mt-16"
      style={{
        backgroundImage: "url('https://img.freepik.com/premium-photo/low-section-woman-wearing-traditional-clothing-standing-against-yellow-background_1048944-18202017.jpg')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-4xl font-bold ">Welcome to Our Store</h1>
      <p>Shop the latest products now!</p>
    </div>
   
    <div className='mt-4'><ProductListing/></div>
   </>
  );
}

export default Home;
