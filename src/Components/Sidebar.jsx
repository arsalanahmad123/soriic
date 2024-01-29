import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebarContext } from "../Context/SidebarContext";

function Sidebar() {
  const { isSideBarOpen } = useSidebarContext();
  const [showInsightsDropdown, setShowInsightsDropdown] = useState(false);

  const handleInsightsClick = () => {
    setShowInsightsDropdown(!showInsightsDropdown);
  };
  return (
    <>
      <div
        className={`w-[180px] md:w-[280px] lg:w-[280px] min-h-full  bg-white pt-10 fixed top-0 left-0 transition-transform duration-500  ${
          isSideBarOpen ? "translate-x-0" : "translate-x-[-100%]"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="p-2 flex justify-center items-center">
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            loading="lazy"
            className="h-8"
          />
        </div>
        <div className="p-3 font-normal text-[14px]">
          <ul className="transition-all duration-300">
            <li className="p-2 border-b cursor-pointer hover:text-mainColor transition-all duration-300">
              Home
            </li>
            <li className="p-2 border-b cursor-pointer hover:text-mainColor transition-all duration-300">
              Services
            </li>
            <li className="p-2 border-b cursor-pointer hover:text-mainColor transition-all duration-300">
              Blogs
            </li>
            <ul
              className="cursor-pointer transition-all duration-500"
              onClick={handleInsightsClick}
            >
              <div className="flex justify-between items-center border-b">
                <span className="hover:text-mainColor p-2">Insights</span>
                <FaChevronDown className="font-bold" size={12} />
              </div>
              <div
                id="sidebar-dropdown"
                className={`pl-4 pb-3 transition duration-1500 animate__animated  ${
                  showInsightsDropdown
                    ? "block animate__slideInLeft"
                    : "hidden animate__slideOutRight"
                }`}
              >
                <li className="cursor-pointer hover:text-mainColor transition-all duration-300 border-b p-2">
                  Projects
                </li>
                <li className="cursor-pointer hover:text-mainColor transition-all duration-300 border-b p-2">
                  FAQ
                </li>
              </div>
            </ul>
            <li className="p-2 border-b cursor-pointer hover:text-mainColor transition-all duration-300">
              About Us
            </li>
            <li className="p-2 border-b cursor-pointer hover:text-mainColor transition-all duration-300">
              Contact Us
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
