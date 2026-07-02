import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Layout from "../layouts/Layout";

const getDashboardPath = (role?: string | null) => {
  return role?.toLowerCase() === "admin" ? "/admin" : "/user";
};

// 1. Shared protected route — any authenticated user, regardless of role.
// Use this only for pages both roles should be able to reach.
export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

// 2. Prevents logged-in users from visiting login/register pages
export const PublicRoute = () => {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={getDashboardPath(user?.role)} replace />;
  }

  return <Outlet />;
};

// 3. User-only routes: authenticated AND NOT an admin.
// Keeps admins out of the guest dashboard/booking pages so they always
// land back in their own console instead of a half-relevant view.
export const UserRoute = () => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  if (user?.role?.toLowerCase() === "admin") {
    return <Navigate to="/admin" replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

// 4. Admin-only routes: authenticated AND role === 'admin'
export const AdminRoute = () => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  if (user?.role?.toLowerCase() !== "admin") {
    return <Navigate to="/user" replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};