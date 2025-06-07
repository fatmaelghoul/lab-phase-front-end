import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthCustomerContext = createContext();
export const CustomerAuthProvider = ({ children }) => {
  const [customer, setCustomer] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('customerToken');
    const storedCustomer = localStorage.getItem('customerInfo');

    if (storedToken && storedCustomer) {
      setToken(storedToken);
      setCustomer(JSON.parse(storedCustomer));
    }
  }, []);

  const login = (token, customerData) => {
    localStorage.setItem('customerToken', token);
    localStorage.setItem('customerInfo', JSON.stringify(customerData));
    setToken(token);
    setCustomer(customerData);
  };

  const logout = () => {
    localStorage.removeItem('customerToken');
    localStorage.removeItem('customerInfo');
    setToken(null);
    setCustomer(null);
  };

  return (
    <AuthCustomerContext.Provider value={{ token, customer, login, logout }}>
      {children}
    </AuthCustomerContext.Provider>
  );
};

// ✅ Exporte ici le hook avec le bon nom
export const useCustomerAuth = () => useContext(AuthCustomerContext);

// Ou si tu préfères l’appeler autrement :
export const useAuthCustomer = () => useContext(AuthCustomerContext);

