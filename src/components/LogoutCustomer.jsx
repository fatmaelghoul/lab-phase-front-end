import React from 'react';
import { Navigate } from 'react-router-dom';
import { useHandymanAuth } from '../context/AuthHandymanContext';

const PrivateRouteHandyman = ({ children }) => {
  const { token } = useHandymanAuth();

  if (!token) {
    return <Navigate to="/login-handyman" replace />;
  }

  return children;
};

export default PrivateRouteHandyman;
