const OnlineBooking = () => {
  return (
    <div className="bg-[url('/img/booking.jpg')] bg-center bg-cover bg-no-repeat h-[70vh] py-10  mx-32 mt-20 mb-10 relative">
      <div className="absolute bg-black/60 inset-0"></div>
      <div className="absolute grid grid-cols-2 gap-4 pt-10 px-10">
        <div className="mr-10 text-white">
          <h1 className="text-lg">BOOKING</h1>
          <p className="text-3xl font-bold">Online Booking</p>
          <p className="mt-4 font-medium text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            fugiat recusandae atque vero, cumque nesciunt.
          </p>
          <p className="mt-2 font-medium text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
            eligendi. Delectus, nisi! Perspiciatis amet soluta commodi
            excepturi, nesciunt distinctio harum.
          </p>
          <button className="border border-white py-3 px-10 mt-4">
            Read More
          </button>
        </div>
        <div className="">
          <h1 className="text-4xl text-white font-bold mb-8">Book A Tour</h1>
          <div className="grid grid-cols-2 gap-3">
            <input
              className="h-12 px-2 outline-none bg-transparent border border-white"
              type="text"
              name=""
              id=""
              placeholder="Your Name"
            />
            <input
              className="h-12 p-5 outline-none bg-transparent border border-white"
              type="email"
              name=""
              id=""
              placeholder="Your Email"
            />
          </div>
          <br />
          <div className="grid grid-cols-2 gap-3">
            <input
              className="h-12 outline-none bg-transparent border border-white"
              type="date"
              name=""
              id=""
              placeholder="Date & Time"
            />
            <select className="h-12 outline-none bg-transparent border border-white">
              <option value="d1">Destination 1</option>
              <option value="d2" selected>
                Destination 2
              </option>
              <option value="d3">Destination 3</option>
            </select>
          </div>
          <br />
          <input
            className="h-20 w-full p-5 outline-none bg-transparent border border-white"
            type="text"
            placeholder="Special Request"
          />
          <br />
          <button className="w-full h-12 mt-2 border border-white text-white hover:bg-white hover:text-black hover:font-bold">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineBooking;
