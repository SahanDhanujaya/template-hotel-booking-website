import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import HomeSection from "../components/sections/homesection/HomeSection";
import AboutSection from "../components/sections/aboutsection/AboutSection";
import RoomSection from "../components/sections/roomsection/RoomSection";
import FoodSection from "../components/sections/foodsection/Foodsection";
import ContactSection from "../components/sections/contactsection/ContactSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        index: true,
        element: <HomeSection />,
      },
      {
        path: "/home",
        element: <HomeSection />,
      },
      {
        path: "/about",
        element: <AboutSection />,
      },
      {
        path: "/rooms",
        element: <RoomSection />,
      },
      {
        path: "/food",
        element: <FoodSection />,
      },
      {
        path: "/contact",
        element: <ContactSection />,
      }
    ],
  },
]);

export default router;
