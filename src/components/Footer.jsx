import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaPhoneAlt,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaCopyright,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import package1 from "/img/package-1.jpg";
import package2 from "/img/package-2.jpg";
import package3 from "/img/package-3.jpg";

const Footer = () => {
  return (
    <div className="bg-slate-950 text-white">
      <div className="flex  justify-between px-36 pt-24 pb-5">
        <div className="mr-5">
          <h1 className="text-xl font-bold mb-3">Company</h1>
          <div>
            <span className="flex items-center mb-2">
              <IoIosArrowForward className="mr-2" />
              <p>About Us</p>
            </span>
            <span className="flex items-center mb-2">
              <IoIosArrowForward className="mr-2" />
              <p>Contact Us</p>
            </span>
            <span className="flex items-center mb-2">
              <IoIosArrowForward className="mr-2" />
              <p>Privacy Policy</p>
            </span>
            <span className="flex items-center mb-2">
              <IoIosArrowForward className="mr-2" />
              <p>Terms & Condition</p>
            </span>
            <span className="flex items-center mb-2">
              <IoIosArrowForward className="mr-2" />
              <p>FAQ & Help</p>
            </span>
          </div>
        </div>
        <div className="mr-5">
          <h1 className="text-xl font-bold mb-3">Contact</h1>
          <div>
            <span className="flex items-center mb-2">
              <FaLocationDot className="mr-2" />
              <p>Mirpur 2, Dhaka, BD</p>
            </span>
            <span className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2" />
              <p>+88 00 0000</p>
            </span>
            <span className="flex items-center mb-2">
              <IoMdMail className="mr-2" />
              <p>info@gmail.com</p>
            </span>
            <div className="flex text-xl mt-3">
              <button className="border border-white rounded-full mr-1">
                <FaTwitter className="m-2" />
              </button>
              <button className="border border-white rounded-full mr-1">
                <FaFacebook className="m-2" />
              </button>
              <button className="border border-white rounded-full mr-1">
                <FaYoutube className="m-2" />
              </button>
              <button className="border border-white rounded-full mr-1">
                <FaLinkedin className="m-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="mr-5">
          <h1 className="text-xl font-bold mb-3">Gallery</h1>
          <div className="grid grid-cols-3 gap-2">
            <img
              className="h-16 w-18 border-4 border-white"
              src={package1}
              alt=""
            />
            <img
              className="h-16 w-18 border-4 border-white"
              src={package2}
              alt=""
            />
            <img
              className="h-16 w-18 border-4 border-white"
              src={package3}
              alt=""
            />
            <img
              className="h-16 w-18 border-4 border-white"
              src={package3}
              alt=""
            />
            <img
              className="h-16 w-18 border-4 border-white"
              src={package2}
              alt=""
            />
            <img
              className="h-16 w-18 border-4 border-white"
              src={package1}
              alt=""
            />
          </div>
        </div>
        <div className="mr-5">
          <h1 className="text-xl font-bold mb-3">Newsletter</h1>
          <div>
            <p className="w-72">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="mt-3">
              <input
                className="h-14 w-80 p-5 border border-lime-600 focus:border-0 focus:outline-4 focus:outline-lime-600"
                type="text"
                placeholder="Your email"
              />
              <button className="-ml-20 bg-lime-600 p-2">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-5/6 h-px mx-auto my-4 bg-gray-600 border-0 rounded" />
      <div className="flex justify-between mx-36 pb-8">
        <div className="flex items-center">
          <FaCopyright className="mr-1" />
          <p className="mr-1">Travel Agency, All Rights Reserved.</p>
          <p>DevelopedBy Weepoka</p>
        </div>
        <div className="flex">
          <p>Home</p>
          <p className="mx-2 text-gray-700">|</p>
          <p>Cookies</p>
          <p className="mx-2 text-gray-700">|</p>
          <p>Help</p>
          <p className="mx-2 text-gray-700">|</p>
          <p>FAQs</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
