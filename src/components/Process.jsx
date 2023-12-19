import { FaGlobe } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";

const Processes = [
  {
    icon: <FaGlobe />,
    title: "Choose A Destination",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente ut illo repellendus odio aut",
  },
  {
    icon: <FaDollarSign />,
    title: "Pay Online",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos repudiandae nesciunt pariatur dolorum eum quae.",
  },
  {
    icon: <FaPlane />,
    title: "Fly Today",
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias repellendus, est autem eveniet dolores ratione.",
  },
];
const Process = () => {
  return (
    <div className="mb-10">
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
          <p className="text-lime-600 font-bold">PROCESS</p>
          <span className="mt-2 ml-2">
            <p className="">
              <hr className="w-12 h-0.5 bg-gray-100 border-0 rounded dark:bg-lime-600 " />
            </p>
            <p className="mt-2">
              <hr className="w-16 h-px bg-gray-100 border-0 rounded  dark:bg-lime-600 " />
            </p>
          </span>
        </div>
        <h1 className="text-4xl font-bold text-slate-700">3 Easy Steps</h1>
      </div>
      <div className="flex mx-40 mb-20 mt-6 text-center">
        {Processes.map((process, i) => {
          return (
            <div className="text-center justify-center items-center border border-lime-600 mr-5" key={i}>
              <p className="text-5xl text-white bg-lime-600 rounded-full p-5 w-24 items-center justify-center overflow-hidden">{process.icon}</p>
              <div className=" items-center justify-between text-center mx-5">
                <p className="">{process.title}</p>
                <br />
                <p>{process.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Process;
