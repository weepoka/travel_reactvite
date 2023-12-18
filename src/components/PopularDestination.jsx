import destination1 from "/img/destination-1.jpg";
import destination2 from "/img/destination-2.jpg";
import destination3 from "/img/destination-3.jpg";
import destination4 from "/img/destination-4.jpg";

const PopularDestination = () => {
  return (
    <div className="mt-20">
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
          <p className="font-bold">DESTINATION</p>
          <span className="mt-2 ml-5">
            <p className="">
              <hr className="w-12 h-0.5 bg-gray-100 border-0 rounded dark:bg-lime-600" />
            </p>
            <p className="mt-2">
              <hr className="w-16 h-px bg-gray-100 border-0 rounded  dark:bg-lime-600" />
            </p>
          </span>
        </div>
        <h1 className="text-4xl font-bold text-slate-700">
          Popular Destination
        </h1>
      </div>
      <div className="mt-20 mx-20 grid grid-cols-2 gap-4">
        <div className="">
          <img className="h-80" src={destination1} alt="" />
          <div className="mt-0.5 grid grid-cols-2 gap-2">
            <img src={destination2} alt="" />
            <img src={destination3} alt="" />
          </div>
        </div>
        <div className="w-full h-4/5">
          <img className="h-full w-full" src={destination4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
