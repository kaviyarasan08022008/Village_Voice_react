import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import TrackingLayout from "../Layout/TrackingLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import Tracking from "../components/Tracking";
import FileComplaint from "../components/FileComplaint";
import Contact from "../components/Contact";
import LandingContent from "../components/LandingContent";
import PainLayout from "../Layout/PainLayout";
import AdminPanel from "../components/AdminPanel";

const router = createBrowserRouter([
  // MainLayout: Navbar + Footer (Landing & Contact pages)
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path:"/",
        element: <LandingContent />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },

  // TrackingLayout: Navbar only (Tracking page)
  {
    path: "/tracking",
    element: <TrackingLayout />,
    children: [
      {
        index: "/",
        element: <Tracking />,
      },
    ],
  },

  // Other pages (PainLayout wrapper)
  {
    path: "/",
    element: <PainLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/fileComplaint",
        element: <FileComplaint />,
      },
      {
        path: "/admin",
        element: <AdminPanel />,
      },
    ]
  },
]);

export default router;
