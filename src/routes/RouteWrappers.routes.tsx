import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider"; 
import Layout from "../layouts/Layout"; 

// 1. Protects dashboard/booking routes from unauthenticated users
export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  // If not logged in, boot them to login
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  // Wrap authenticated routes inside your common Layout
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

// 2. Prevents logged-in users from visiting login/register pages
export const PublicRoute = () => {
  const { isAuthenticated } = useAuth();

  // If already logged in, send them straight to the track bookings dashboard
  if (isAuthenticated) {
    return <Navigate to="/user" replace />;
  }

  return <Outlet />;
};