import { createBrowserRouter, Navigate } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ManageBookings from "../pages/admin/ManageBooking";
import AdminComingSoon from "../pages/admin/AdminComingSoon";
import TrackMyBookings from "../pages/user/TrackMyBookings";
import { PublicRoute, UserRoute, AdminRoute } from "./RouteWrappers.routes";
import LoyaltyDashboard from "../pages/user/LoyaltyDashboard";
import Vouchers from "../pages/user/Voucher";
import Activity from "../pages/user/Activity";
import Profile from "../pages/user/Profile";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },

  // GUEST ONLY ROUTES: redirects to dashboard if already logged in
  {
    element: <PublicRoute />,
    children: [
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },
    ],
  },

  // USER-ONLY ROUTES: authenticated AND not an admin
  {
    element: <UserRoute />,
    children: [
      { path: "/user", element: <LoyaltyDashboard /> },
      { path: "/user/reservations", element: <TrackMyBookings /> },
      { path: "/user/vouchers", element: <Vouchers /> },
      { path: "/user/activities", element: <Activity /> },
      { path: "/user/profile", element: <Profile /> },
    ],
  },

  // ADMIN ONLY ROUTES: authenticated AND role === 'admin'
  {
    element: <AdminRoute />,
    children: [
      { path: "/admin", element: <Navigate to="/admin/manage" replace /> },
      { path: "/admin/manage", element: <ManageBookings /> },
      {
        path: "/admin/guests",
        element: (
          <AdminComingSoon
            title="Guests"
            description="A directory of every guest who's stayed with you, with contact details and stay history, is on its way."
          />
        ),
      },
      {
        path: "/admin/rooms",
        element: (
          <AdminComingSoon
            title="Rooms"
            description="Manage room types, availability, and pricing from one place."
          />
        ),
      },
      {
        path: "/admin/reports",
        element: (
          <AdminComingSoon
            title="Reports"
            description="Occupancy, revenue, and booking trend reports are on the way."
          />
        ),
      },
    ],
  },
]);

export default router;