// import bgHero from "/img/bg-hero.jpg";
const Hero = () => {
  return (
    <div className="bg-[url('/img/bg-hero.jpg')]">
      {/* <img0
        className="w-screen h-1/6 -mt-56 z-10 brightness-50"
        src={bgHero}
        alt="Hero-Img"
      /> */}
      <div className="relative z-40 -mt-96 text-white text-center">
        <h1 className="text-5xl font-semibold mb-4">
          Enjoy Your Vacation with Us
        </h1>
        <p className="text-2xl mb-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <span className="flex text-center items-center justify-center rounded-xl">
          <input type="text" className="w-2/5 h-12 rounded-lg" />
          <button className="-ml-20 text-white w-16 h-8 bg-lime-600 rounded-lg">
            Search
          </button>
        </span>
      </div>
    </div>
  );
};

export default Hero;
