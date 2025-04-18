import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

type GuestRouteProps = {
  children: React.ReactElement;
};

const GuestRoute: React.FC<GuestRouteProps> = ({ children }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} />;
  }
};

export default GuestRoute;