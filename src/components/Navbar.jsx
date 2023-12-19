import { FaLocationDot } from "react-icons/fa6";
import PagesDropDown from "./PagesDropDown";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [color, setColor] = useState(false);

  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  });
  return (
    <div className={active ? "bg-white  fixed top-0  w-full " : ""}>
      <div className="flex justify-between px-10 items-center mt-5 sticky z-50">
        <Link
          to="/"
          className="flex items-center text-lime-600 text-4xl font-bold -mt-8"
        >
          <p className="mr-2">
            <FaLocationDot />
          </p>
          <h1>TRAVEL</h1>
        </Link>
        <div
          className={
            color
              ? "flex text-black font-semibold text-xl mr-4 h-16"
              : "flex text-white font-semibold text-xl mr-4 h-16"
          }
        >
          <Link to="/" className="mr-6">
            Home
          </Link>
          <Link to="aboutus" className="mr-6">
            About Us
          </Link>
          <Link to="services" className="mr-6">
            Services
          </Link>
          <Link to="packages" className="mr-6">
            Packages
          </Link>
          <Link className="mr-6">
            <PagesDropDown />
          </Link>
          <Link to="contact" className="mr-6" href="">
            Contact
          </Link>
          <Link to="register">
            <button className="bg-lime-600 px-5 py-2 h-10 -mt-2 text-sm text-white rounded-2xl">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
