import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './context/useAuth';

export const ProtectedRoute = () => {
  const { loading, isAuthenticated } = useAuth();
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }
  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
