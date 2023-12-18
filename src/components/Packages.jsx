import package1 from "/img/package-1.jpg";
import package2 from "/img/package-2.jpg";
import package3 from "/img/package-3.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const OurPackages = [
  {
    img: package1,
    place: "Thailand",
    duration: "3 days",
    person: "2 person",
    price: "$149.00",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente ut illo repellendus odio aut",
  },
  {
    img: package2,
    place: "Indonesia",
    duration: "3 days",
    person: "2 person",
    price: "$139.00",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos repudiandae nesciunt pariatur dolorum eum quae.",
  },
  {
    img: package3,
    place: "Malaysia",
    duration: "2 days",
    person: "2 person",
    price: "$135.99",
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias repellendus, est autem eveniet dolores ratione.",
  },
];

const Packages = () => {
  return (
    <div>
      <div className="text-center">
        <div className="flex justify-center text-lime-600">
          <span className="mt-2 mr-5 items-right">
            <p className="">
              <hr className="w-12 h-0.5 bg-gray-100 border-0 rounded dark:bg-lime-600 pl-10" />
            </p>
            <p className="mt-2">
              <hr className="w-16 h-px bg-gray-100 border-0 rounded  dark:bg-lime-600" />
            </p>
          </span>
          <p className="font-bold">PACKAGES</p>
          <span className="mt-2 ml-5">
            <p className="">
              <hr className="w-12 h-0.5 bg-gray-100 border-0 rounded dark:bg-lime-600" />
            </p>
            <p className="mt-2">
              <hr className="w-16 h-px bg-gray-100 border-0 rounded  dark:bg-lime-600" />
            </p>
          </span>
        </div>
        <h1 className="text-4xl font-bold text-slate-700">Awesome Packages</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mx-40 mb-20 mt-6">
        {OurPackages.map((packages, i) => {
          return (
            <div key={i}>
              <img src={packages.img} alt={packages.place} />
              <div className="flex items-center justify-between mx-5">
                <span className="flex items-center text-center">
                  <FaLocationDot className="text-lime-600 mr-2" />
                  <p className="text-gray-400">{packages.place}</p>
                </span>
                <span className="flex items-center text-center">
                  <FaCalendarAlt className="text-lime-600 mr-2" />
                  <p className="text-gray-400">{packages.duration}</p>
                </span>
                <span className="flex items-center text-center">
                  <IoPersonSharp className="text-lime-600 mr-2" />
                  <p className="text-gray-400">{packages.person}</p>
                </span>
              </div>
              <p className="text-center font-bold text-3xl text-gray-700 mt-4">
                {packages.price}
              </p>
              <div className="flex text-lime-600 justify-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-500 mt-2">{packages.details}</p>
              <div className="flex justify-center mx-auto items-center bg-lime-600 w-3/5  h-10 rounded-lg mt-4 text-white">
                <button className="">Read More</button>
                <p className="mx-1 h-6">|</p>
                <button className="bg-lime-600">Book Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Packages;
