import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const PagesDropDown = () => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const handleMouseEnter = () => {
    setDropDownOpen(true);
  };
  const handleMouseLeave = () => {
    setDropDownOpen(false);
  };
  return (
    <div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center "
      >
        <p>Pages</p> <IoMdArrowDropdown />
        {isDropDownOpen && (
          <div className="absolute mt-56 text-black bg-white p-3 rounded text-base font-normal w-36">
            <p>Destination</p>
            <p>Booking</p>
            <p>Travel Guides</p>
            <p>Testimonials</p>
            <p>404 Page</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PagesDropDown;
