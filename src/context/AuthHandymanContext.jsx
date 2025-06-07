import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthHandymanContext = createContext();

export const HandymanAuthProvider = ({ children }) => {
  const [handyman, setHandyman] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('handymanToken');
    const storedHandyman = localStorage.getItem('handymanInfo');

    if (storedToken && storedHandyman) {
      setToken(storedToken);
      setHandyman(JSON.parse(storedHandyman));
    }
  }, []);

  const login = (token, handymanData) => {
    localStorage.setItem('handymanToken', token);
    localStorage.setItem('handymanInfo', JSON.stringify(handymanData));
    setToken(token);
    setHandyman(handymanData);
  };

  const logout = () => {
    localStorage.removeItem('handymanToken');
    localStorage.removeItem('handymanInfo');
    setToken(null);
    setHandyman(null);
  };

  return (
    <AuthHandymanContext.Provider value={{ token, handyman, login, logout }}>
      {children}
    </AuthHandymanContext.Provider>
  );
};

// ✅ Ce hook est indispensable pour ton import dans HandyManDashboard.jsx
export const useAuthHandyman = () => useContext(AuthHandymanContext);
