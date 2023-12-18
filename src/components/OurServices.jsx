import { FaGlobe, FaHotel } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import Services from "./Services";

const services = [
  {
    icon: <FaGlobe />,
    title: "World Wide Tours",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ad itaque atque ab eum eaque!",
  },
  {
    icon: <FaHotel />,
    title: "Hotel Reservation",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ad itaque atque ab eum eaque!",
  },
  {
    icon: <IoPersonSharp />,
    title: "Travel Guides",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ad itaque atque ab eum eaque!",
  },
  {
    icon: <MdOutlineSettings />,
    title: "Event Management",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ad itaque atque ab eum eaque!",
  },
];

const OurServices = () => {
  return (
    <div>
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
          <p>Services</p>
          <span className="mt-2 ml-2">
            <p className="">
              <hr className="w-12 h-0.5 bg-gray-100 border-0 rounded dark:bg-lime-600 float-right" />
            </p>
            <p className="mt-2">
              <hr className="w-16 h-px bg-gray-100 border-0 rounded  dark:bg-lime-600" />
            </p>
          </span>
        </div>
        <h1>Our Services</h1>
      </div>
      {services.map((service, index) => {
        return (
          <Services
            key={index}
            icon={service.icon}
            title={service.title}
            desc={service.desc}
          />
        );
      })}
    </div>
  );
};

export default OurServices;
