// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';  // Import Provider
import App from './App';
import store from './store/store';       // Import the Redux store

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}> 
      <App />
    </Provider>
 
);
