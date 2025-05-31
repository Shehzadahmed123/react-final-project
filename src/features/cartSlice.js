import { createSlice } from '@reduxjs/toolkit';

// Helper function to load cart items from localStorage
const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : { items: [], totalAmount: 0 };
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Set quantity to 1 if new
      }
      state.totalAmount += action.payload.price; // Adjust total amount
      localStorage.setItem('cart', JSON.stringify(state)); // Save to localStorage
    },
    removeItem: (state, action) => {
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (itemToRemove) {
        state.totalAmount -= itemToRemove.price * itemToRemove.quantity; // Adjust total amount
        state.items = state.items.filter(item => item.id !== action.payload);
        localStorage.setItem('cart', JSON.stringify(state)); // Save to localStorage
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      localStorage.removeItem('cart'); // Clear localStorage
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalAmount += item.price; // Adjust total amount
        localStorage.setItem('cart', JSON.stringify(state)); // Save to localStorage
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1; // Decrease quantity if it's more than 1
          state.totalAmount -= item.price; // Adjust total amount
        } else {
          state.totalAmount += item.price;
          state.items = state.items.filter(i => i.id !== action.payload); // Remove the item if quantity is 1
        }
        localStorage.setItem('cart', JSON.stringify(state)); // Save to localStorage
      }
    },
  },
});

export const { addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
