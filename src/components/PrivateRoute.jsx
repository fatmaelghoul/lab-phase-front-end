import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, children, redirectTo = '/' }) => {
  return isAuthenticated ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;


