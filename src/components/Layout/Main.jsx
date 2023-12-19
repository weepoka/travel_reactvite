import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "../Hero";
import Topbar from "../Topbar";

const Main = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
