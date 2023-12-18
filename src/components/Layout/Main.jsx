import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Topbar from "../Topbar";
import Footer from "../Footer";

const Main = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
