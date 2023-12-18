import aboutImg from "/img/about.jpg";
import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div>
      <div className="grid grid-cols-2 mt-80 justify-center mx-40">
        <img className="h-4/5 w-5/6" src={aboutImg} alt="About Us" />
        <div className="">
          <span className="flex text-lime-600">
            <h1 className=" font-bold text-xl">ABOUT US</h1>
            <span className="mt-2 ml-2">
              <p className="">
                <hr className="w-12 h-0.5 bg-gray-100 border-0 rounded dark:bg-lime-600" />
              </p>
              <p className="mt-2">
                <hr className="w-16 h-px bg-gray-100 border-0 rounded  dark:bg-lime-600" />
              </p>
            </span>
          </span>
          <h1 className="text-4xl font-bold text-gray-600">
            Welcome to <span className="text-lime-600">Tourist</span>
          </h1>
          <p className="text-zinc-500 mt-2 text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit cumque ea maxime corrupti quam assumenda provident,
            soluta ducimus id nam.
          </p>
          <p className="text-zinc-500 mt-2 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            vitae nisi nemo sed, veniam necessitatibus voluptate quaerat eaque
            recusandae sint?
          </p>
          <div className="grid grid-cols-2 mt-2 text-lg">
            <span className="flex items-center mb-1">
              <FaArrowRight className="text-lime-600 mr-1" />
              <p className="text-zinc-500">First Class Flights</p>
            </span>
            <span className="flex items-center mb-1">
              <FaArrowRight className="text-lime-600 mr-1" />
              <p className="text-zinc-500">Handpicked Hotels</p>
            </span>
            <span className="flex items-center mb-1">
              <FaArrowRight className="text-lime-600 mr-1" />
              <p className="text-zinc-500">5 Star Accomodations</p>
            </span>
            <span className="flex items-center mb-1">
              <FaArrowRight className="text-lime-600 mr-1" />
              <p className="text-zinc-500">Latest Model Vehicles</p>
            </span>
            <span className="flex items-center mb-1">
              <FaArrowRight className="text-lime-600 mr-1" />
              <p className="text-zinc-500">150 Premium City Tours</p>
            </span>
            <span className="flex items-center mb-1">
              <FaArrowRight className="text-lime-600 mr-1" />
              <p className="text-zinc-500">24/7 Service</p>
            </span>
          </div>
          <button className="bg-lime-600 px-2 py-3 rounded text-white mt-4">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
