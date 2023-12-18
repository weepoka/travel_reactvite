import package1 from "/img/package-1.jpg";
import package2 from "/img/package-2.jpg";
import package3 from "/img/package-3.jpg";

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
        <div className="flex justify-center">
          <span className="mt-2 ml-2">
            <p className="">
              <hr className="w-12 h-0.5 bg-gray-100 border-0 rounded dark:bg-lime-600" />
            </p>
            <p className="mt-2">
              <hr className="w-16 h-px bg-gray-100 border-0 rounded  dark:bg-lime-600" />
            </p>
          </span>
          <p>Packages</p>
          <span className="mt-2 ml-2">
            <p className="">
              <hr className="w-12 h-0.5 bg-gray-100 border-0 rounded dark:bg-lime-600 " />
            </p>
            <p className="mt-2">
              <hr className="w-16 h-px bg-gray-100 border-0 rounded  dark:bg-lime-600 " />
            </p>
          </span>
        </div>
        <h1>Awesome Packages</h1>
      </div>
      <div>
        {OurPackages.map((packages, i) => {
          return (
            <div key={i}>
              <div>
                <img src={packages.img} alt={packages.place} />
                <p>{packages.place}</p>
                <p>{packages.duration}</p>
                <p>{packages.person}</p>
                <p>{packages.price}</p>
                <p>{packages.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Packages;
