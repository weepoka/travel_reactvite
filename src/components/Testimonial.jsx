import testimonial1 from "/img/testimonial-1.jpg";
import testimonial2 from "/img/testimonial-2.jpg";
import testimonial3 from "/img/testimonial-3.jpg";
import testimonial4 from "/img/testimonial-4.jpg";

const testimonials = [
  {
    img: testimonial1,
    name: "John Doe",
    address: "Dhaka,Bangladesh",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam soluta iusto sint ipsa nulla cum.",
  },
  {
    img: testimonial2,
    name: "John Doe",
    address: "Dhaka,Bangladesh",
    details:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat architecto sunt vel perferendis aliquam. Laborum",
  },
  {
    img: testimonial3,
    name: "John Doe",
    address: "Dhaka,Bangladesh",
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugiat incidunt aperiam eaque vero quam!",
  },
  {
    img: testimonial4,
    name: "John Doe",
    address: "Dhaka,Bangladesh",
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi autem adipisci, neque sequi id!",
  },
];

const Testimonial = () => {
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
            <p className="text-lime-600 font-bold">TESTIMONIALS</p>
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
            What Our Clients Say
          </h1>
        </div>
        <div className="flex mx-40 mb-20 mt-6 text-center">
          {testimonials.map((testimonial, i) => {
            return (
              <div
                className="text-center justify-center items-center  mr-5 bg-lime-600"
                key={i}
              >
                {/* <img className="text-5xl text-white bg-lime-600 rounded-full p-5 w-24 items-center justify-center overflow-hidden">
                  {guide.img}
                </img> */}
                <img className="justify-center items-center mx-auto rounded-full border-4 border-white" src={testimonial.img} alt="" />
                <div className=" items-center justify-between text-center text-white mx-5">
                  <p className="text-xl font-semibold">{testimonial.name}</p>
                  <p className="text-sm font-normal mt-1">{testimonial.address}</p>
                  <p className="text-sm font-normal mt-1">{testimonial.details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
