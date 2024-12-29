import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { loadUser } from '../features/userSlice';
import Loader from './Loader';

// const ProtectedRoute = ({element}) => {
//   useEffect(() => {}, []);
    
//     const { isAuthenticated, loading,user } = useSelector((state) => state.user);

    
    
//       return isAuthenticated ? element : <Navigate to="/login" />;
// }
const ProtectedRoute = ({ element }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading,user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  const location = useLocation();

  if (loading===true) return <Loader/>;

  if (isAuthenticated===false) {
    // Redirect to the login page, but save the current location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return element;
};
export default ProtectedRoute