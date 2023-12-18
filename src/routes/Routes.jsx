import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";
import Home from "../pages/Home";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import Packages from "../components/Packages";
import ContactUs from "../components/ContactUs";

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
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
]);
export default router;
