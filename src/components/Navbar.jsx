import { FaLocationDot } from "react-icons/fa6";
import PagesDropDown from "./PagesDropDown";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between px-10 items-center mt-5 relative z-50">
        <div className="flex items-center text-lime-600 text-4xl font-bold">
          <p className="mr-2">
            <FaLocationDot />
          </p>
          <h1>TRAVEL</h1>
        </div>
        <div className="flex text-white font-semibold text-xl mr-4">
          <a className="mr-6" href="">
            Home
          </a>
          <a className="mr-6" href="">
            About
          </a>
          <a className="mr-6" href="">
            Services
          </a>
          <a className="mr-6" href="">
            Packages
          </a>
          <span className="mr-6">
            <PagesDropDown />
          </span>
          <a className="mr-6" href="">
            Contact
          </a>
          <button className="bg-lime-600 px-5 py-2 -mt-2 text-white rounded-2xl">
            Register
          </button>
        </div>
      </div>
      <hr className="text-white z-50" />
    </div>
  );
};

export default Navbar;
