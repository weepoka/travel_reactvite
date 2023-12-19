import guide1 from "/img/team-1.jpg";
import guide2 from "/img/team-2.jpg";
import guide3 from "/img/team-3.jpg";
import guide4 from "/img/team-4.jpg";
const guides = [
  {
    img: guide1,
    name: "Full Name",
    details: "Designation",
  },
  {
    img: guide2,
    name: "Full Name",
    details: "Designation",
  },
  {
    img: guide3,
    name: "Full Name",
    details: "Designation",
  },
  {
    img: guide4,
    name: "Full Name",
    details: "Designation",
  },
];
const TravelGuide = () => {
  return (
    <div>
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
            <p className="text-lime-600 font-bold">TRAVEL GUIDE</p>
            <span className="mt-2 ml-2">
              <p className="">
                <hr className="w-12 h-0.5 bg-gray-100 border-0 rounded dark:bg-lime-600 " />
              </p>
              <p className="mt-2">
                <hr className="w-16 h-px bg-gray-100 border-0 rounded  dark:bg-lime-600 " />
              </p>
            </span>
          </div>
          <h1 className="text-4xl font-bold text-slate-700">Meet Our Guides</h1>
        </div>
        <div className="flex mx-40 mb-20 mt-6 text-center">
          {guides.map((guide, i) => {
            return (
              <div
                className="text-center justify-center items-center  mr-5"
                key={i}
              >
                {/* <img className="text-5xl text-white bg-lime-600 rounded-full p-5 w-24 items-center justify-center overflow-hidden">
                  {guide.img}
                </img> */}
                <img src={guide.img} alt="" />
                <div className=" items-center justify-between text-center mx-5">
                  <p className="text-xl font-semibold">{guide.name}</p>
                  <p>{guide.details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TravelGuide;
