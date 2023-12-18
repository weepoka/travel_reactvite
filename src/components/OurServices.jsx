import { FaGlobe, FaHotel } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";

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
          <span className="mt-2 mr-5">
            <p className="">
              <hr className="w-12 h-0.5 bg-gray-100 border-0 rounded dark:bg-lime-600" />
            </p>
            <p className="mt-2">
              <hr className="w-16 h-px bg-gray-100 border-0 rounded  dark:bg-lime-600" />
            </p>
          </span>
          <p className="text-lime-600 font-bold">SERVICES</p>
          <span className="mt-2 ml-5">
            <p className="">
              <hr className="w-12 h-0.5 bg-gray-100 border-0 rounded dark:bg-lime-600" />
            </p>
            <p className="mt-2">
              <hr className="w-16 h-px bg-gray-100 border-0 rounded  dark:bg-lime-600" />
            </p>
          </span>
        </div>
        <h1 className="text-4xl font-bold text-slate-700">Our Services</h1>
      </div>
      <div className="grid grid-cols-4 gap-20 mx-32 mt-10">
        {services.map((service, index) => {
          return (
            <ul className="w-80" key={index}>
              <li className="text-lime-600 text-5xl">{service.icon}</li>
              <li className="text-2xl text-zinc-700 font-bold mt-4">
                {service.title}
              </li>
              <li className="text-gray-500 mt-4">{service.desc}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
