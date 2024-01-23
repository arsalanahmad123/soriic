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
      <AnimatePresence>
        <motion.div
          className={`w-[280px] h-screen  bg-soriic pt-10 fixed top-0 left-0 transition-transform duration-500  ${
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
            <ul>
              <li className="p-2 border-b cursor-pointer hover:text-mainColor transition-all duration-300">
                Home
              </li>
              <li className="p-2 border-b cursor-pointer hover:text-mainColor transition-all duration-300">
                Services
              </li>
              <li className="p-2 border-b cursor-pointer hover:text-mainColor transition-all duration-300">
                Blogs
              </li>
              <li
                className={`p-2 cursor-pointer transition-all duration-300 ${
                  showInsightsDropdown ? "border-b-0" : "border-b"
                }`}
                onClick={handleInsightsClick}
              >
                <motion.div
                  className="flex justify-between items-center"
                  initial={false}
                >
                  <span className="hover:text-mainColor">Insights</span>
                  <FaChevronDown className="font-bold" size={12} />
                </motion.div>
                <AnimatePresence>
                  {showInsightsDropdown && (
                    <motion.ul
                      className="pl-4 pb-3"
                      initial={{ maxHeight: 0 }}
                      animate={{ maxHeight: 400 }}
                      exit={{ maxHeight: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      <motion.li
                        className="cursor-pointer hover:text-mainColor transition-all duration-300 border-b p-2"
                        onClick={() => console.log("Projects clicked")}
                      >
                        Projects
                      </motion.li>
                      <motion.li
                        className="cursor-pointer hover:text-mainColor transition-all duration-300 border-b p-2"
                        onClick={() => console.log("FAQ clicked")}
                      >
                        FAQ
                      </motion.li>
                      {/* Add more dropdown items as needed */}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li className="p-2 border-b cursor-pointer hover:text-mainColor transition-all duration-300">
                About Us
              </li>
              <li className="p-2 border-b cursor-pointer hover:text-mainColor transition-all duration-300">
                Contact Us
              </li>
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Sidebar;
