import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct } from '../../features/productSlice';
import { useParams, useNavigate } from 'react-router-dom';

const EditProductForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.products.products.find((item) => item.id === parseInt(id)));

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setPrice(product.price);
      setImage(product.image);
      setDescription(product.description);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProduct({ id: parseInt(id), title, price, image, description }));
    navigate('/admin/products'); // Redirect to product list after editing
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          placeholder="Product Name" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
          className="w-full p-2 border border-gray-300 bg-gray-800 rounded "
        />
        <input 
          type="number" 
          placeholder="Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          required 
          className="w-full p-2 border border-gray-300  rounded bg-gray-800"
        />
        <input 
          type="text" 
          placeholder="Image URL" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          required 
          className="w-full p-2 border border-gray-300 rounded bg-gray-800"
        />
        <textarea 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
          className="w-full p-2 border border-gray-300 rounded bg-gray-800"
          rows="4"
        />
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductForm;
