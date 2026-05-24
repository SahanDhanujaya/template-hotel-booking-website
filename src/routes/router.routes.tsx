import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/landing/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "*",
    element: <Landing />,
  }
]);

export default router;