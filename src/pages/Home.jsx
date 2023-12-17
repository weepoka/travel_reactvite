import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <AboutUs />
    </div>
  );
};

export default Home;
