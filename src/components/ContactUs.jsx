import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMailOpen } from "react-icons/lu";

const ContactUs = () => {
  return (
    <div className="mt-80 mb-20 mx-20">
      <div className="text-center">
        <div className="flex justify-center">
          <span className="mt-2 ml-2">
            <p className="">
              <hr className="w-12 h-0.5 bg-gray-100 border-0 rounded dark:bg-lime-600" />
            </p>
            <p className="mt-2">
              <hr className="w-16 h-px bg-gray-100 border-0 rounded  dark:bg-lime-600" />
            </p>
          </span>
          <p className="text-lime-600 font-bold">CONTACT US</p>
          <span className="mt-2 ml-2">
            <p className="">
              <hr className="w-12 h-0.5 bg-gray-100 border-0 rounded dark:bg-lime-600 " />
            </p>
            <p className="mt-2">
              <hr className="w-16 h-px bg-gray-100 border-0 rounded  dark:bg-lime-600 " />
            </p>
          </span>
        </div>
        <h1 className="text-4xl font-bold text-slate-700">
          Contact for any query
        </h1>
      </div>
      <div className="flex justify-between mt-10">
        <div>
          <div>
            <h1 className="text-xl font-bold text-gray-700">Get In Touch</h1>
            <p className="text-gray-500 w-3/4 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet.
            </p>
          </div>
          <div className="flex items-center mb-4">
            <p className="bg-lime-500 p-4 mr-3">
              <FaLocationDot className="text-sm text-white" />
            </p>
            <div>
              <h1 className="text-lime-500 text-xl font-bold">Office</h1>
              <p className="text-gray-500">Mirpur, Dhaka,Bd</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <p className="bg-lime-500 p-4 mr-3">
              <FaPhoneAlt className="text-sm text-white" />
            </p>
            <div>
              <h1 className="text-lime-500 text-xl font-bold">Mobile</h1>
              <p className="text-gray-500">+00 000 00</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="bg-lime-500 p-4 mr-3">
              <LuMailOpen className="text-sm text-white" />
            </p>
            <div>
              <h1 className="text-lime-500 text-xl font-bold">Email</h1>
              <p className="text-gray-500">info@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3482689250204!2d90.35367527518922!3d23.806211678632287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c162749924dd%3A0x4d0b750e1fcaea7c!2sWeero%20Digital!5e0!3m2!1sen!2sbd!4v1702899629890!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <div className="flex">
            <input
              className="h-14 border p-2 mr-1 border-gray-300 outline-none"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="h-14 border p-2 ml-2 border-gray-300 outline-none"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <input
            className="h-14 w-full border p-2 mt-3 border-gray-300 outline-none"
            type="text"
            placeholder="Subject"
          />
          <br />
          <input
            className="h-20 w-full border pl-2 mt-3 border-gray-300 outline-none"
            type="text"
            placeholder="Message"
          />
          <br />
          <button className="h-14 w-full border pl-2 mt-3 bg-lime-600 text-white outline-none">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
