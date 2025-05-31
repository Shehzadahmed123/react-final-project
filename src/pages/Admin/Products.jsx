import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../../features/productSlice';


const Products = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="flex ">
      {/* Main Content */}
      <div className=" p-4 w-full">
        <h1 className="text-3xl font-bold mb-4">Admin Panel - Manage Products</h1>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Product Listings</h2>
          {products.length === 0 ? (
            <p>No products available. Add some!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
              {products.map((product) => (
                <div key={product.id} className="border p-4  rounded shadow">
                  <img src={product.image} alt={product.name} className="w-full h-80 object-cover mb-4" />
                  <h3 className="text-xl font-bold">{product.title}</h3>
                  <p>{product.price} USD</p>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                  <div className="flex justify-between mt-4">
                    <button onClick={() => handleDelete(product.id)} className="text-red-500 hover:underline">Delete</button>
                    <button className="text-green-500 hover:underline">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
