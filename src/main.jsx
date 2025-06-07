import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Contexts
import { CustomerAuthProvider } from './context/AuthCustomerContext';
import { HandymanAuthProvider } from './context/AuthHandymanContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomerAuthProvider>
        <HandymanAuthProvider>
          <App />
        </HandymanAuthProvider>
      </CustomerAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);