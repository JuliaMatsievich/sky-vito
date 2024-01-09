import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ redirectPath = '/signin' }) => {
  const isAuth = localStorage.getItem('isAuth');
  if (!isAuth) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
};
