import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ManageBookings from "../pages/bookings/ManageBooking";
import TrackMyBookings from "../pages/bookings/TrackMyBookings";
import { ProtectedRoute, PublicRoute } from "./RouteWrappers.routes"; 
import LoyaltyDashboard from "../pages/user/LoyaltyDashboard";
import Vouchers from "../pages/user/Voucher";
import Activity from "../pages/user/Activity";
import Profile from '../pages/user/Profile';

const router = createBrowserRouter([
  // Publicly accessible to anyone at any time
  {
    path: "/",
    element: <Landing />,
  },

  // GUEST ONLY ROUTES: Redirects to dashboard if already logged in
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },

  // PROTECTED ROUTES: Requires auth & automatically applies Layout.tsx
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/user",
        element: <LoyaltyDashboard />,
      },
      {
        path: "/user/manage",
        element: <ManageBookings />,
      },
      {
        path: "/user/reservations",
        element: <TrackMyBookings />,
      },
      {
        path: "/user/vouchers",
        element: <Vouchers />,
      },
      {
        path: "/user/activities",
        element: <Activity />,
      },
      {
        path: "/user/profile",
        element: <Profile />,
      }
    ],
  },
]);

export default router;