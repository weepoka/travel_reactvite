import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";
import Home from "../pages/Home";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import Packages from "../components/Packages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "services",
        element: <OurServices />,
      },
      {
        path: "packages",
        element: <Packages />,
      },
    ],
  },
]);
export default router;
