import bgHero from "/img/bg-hero.jpg";
const Hero = () => {
  return (
    <div>
      <p>
        <img className="w-screen h-1/6 -mt-48 relative z-40 brightness-50" src={bgHero} alt="Hero-Img" />
      </p>
    </div>
  );
};

export default Hero;
