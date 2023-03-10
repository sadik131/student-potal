import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useGlobalContex } from '../Hook/ReactContex';

const PrivetRoute = ({ children }) => {
  const { user } = useGlobalContex()
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
}

export default PrivetRoute;
