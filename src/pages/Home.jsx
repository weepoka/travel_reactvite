import AboutUs from "../components/AboutUs";
import OnlineBooking from "../components/OnlineBooking";
import OurServices from "../components/OurServices";
import Packages from "../components/Packages";
import PopularDestination from "../components/PopularDestination";
import Process from "../components/Process";
import Testimonial from "../components/Testimonial";
import TravelGuide from "../components/TravelGuide";

const Home = () => {
  return (
    <div>
      <AboutUs />
      <OurServices />
      <PopularDestination />
      <Packages />
      <OnlineBooking />
      <Process />
      <TravelGuide />
      <Testimonial />
    </div>
  );
};

export default Home;
