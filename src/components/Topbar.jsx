import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { HiMailOpen } from "react-icons/hi";

import {
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-slate-950 text-white text-base flex justify-between px-10 py-2 relative z-50 top-0">
      <div className="flex  justify-between">
        <div className="flex items-center mr-3">
          <FaLocationDot className="mr-1" />
          <p>Mirpur-2, Dhaka, BD</p>
        </div>
        <div className="flex items-center mr-3">
          <FaPhone className="mr-1" />
          <p>+880 000 000</p>
        </div>
        <div className="flex items-center mr-3">
          <HiMailOpen className="mr-1 text-white" />
          info@example.com
        </div>
      </div>
      <div>
        <button className="border-white border-x border-y rounded-full p-2 mr-2">
          <FaTwitter />
        </button>
        <button className="border-white border-x border-y rounded-full p-2 mr-2">
          <FaFacebookF />
        </button>
        <button className="border-white border-x border-y rounded-full p-2 mr-2">
          <FaLinkedin />
        </button>
        <button className="border-white border-x border-y rounded-full p-2 mr-2">
          <FaInstagram />
        </button>
        <button className="border-white border-x border-y rounded-full p-2 mr-2">
          <FaYoutube />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
