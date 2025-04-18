import React, { useEffect } from 'react';
import { AppDispatch, RootState } from '../../state/store';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { clearUser } from '../../state/auth/authSlice';

const LogoutPage: React.FC = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (isAuthenticated) {
          dispatch(clearUser());
        }
      }, [isAuthenticated, dispatch]);
     
      return <Navigate to='/auth/login'/>;

};

export default LogoutPage;
