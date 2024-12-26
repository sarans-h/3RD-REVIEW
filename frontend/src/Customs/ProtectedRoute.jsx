import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { loadUser } from '../features/userSlice';

const ProtectedRoute = ({element}) => {
    
    const { isAuthenticated, loading,user } = useSelector((state) => state.user);

    
    
      return isAuthenticated ? element : <Navigate to="/login" />;
}

export default ProtectedRoute