import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OurServices from "../components/OurServices";
import Packages from "../components/Packages";
import PopularDestination from "../components/PopularDestination";
import Topbar from "../components/Topbar";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <AboutUs />
      <OurServices />
      <PopularDestination />
      <Packages />
    </div>
  );
};

export default Home;
