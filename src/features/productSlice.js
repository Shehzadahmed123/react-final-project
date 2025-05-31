import { createSlice } from '@reduxjs/toolkit';

// Helper function to load products from localStorage
const loadFromLocalStorage = () => {
  const savedProducts = localStorage.getItem('products');
  return savedProducts ? JSON.parse(savedProducts) : [];
};

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: loadFromLocalStorage(),  // Initialize from localStorage
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      localStorage.setItem('products', JSON.stringify(state.products)); // Persist on set
    },
    addProduct: (state, action) => {
      const newProduct = { ...action.payload, id: Date.now() }; // Assign ID using Date.now()
      state.products.push(newProduct);
      localStorage.setItem('products', JSON.stringify(state.products)); // Persist on add
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
      localStorage.setItem('products', JSON.stringify(state.products)); // Persist on delete
    },
    editProduct: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
        localStorage.setItem('products', JSON.stringify(state.products)); // Persist on edit
      }
    },
  },
});

export const { setProducts, addProduct, deleteProduct, editProduct } = productSlice.actions;
export default productSlice.reducer;
