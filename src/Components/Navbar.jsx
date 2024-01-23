import React, { useState } from "react";
import { FaChevronDown, FaUser, FaBars } from "react-icons/fa";
import { useSidebarContext } from "../Context/SidebarContext";
import Sidebar from "./Sidebar";
const Dropdown = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = (e) => {
    setIsOpen(false);
  };

  return (
    <li className="cursor-pointer relative">
      <a
        className="font-normal text-textColor transition-all duration-300 hover:text-mainColor flex flex-row justify-center items-center gap-1 "
        onMouseEnter={handleMouseEnter}
      >
        {label}
        <FaChevronDown size={10} />
      </a>
      <ul
        className={`absolute top-10 left-0 p-2 rounded-sm bg-white w-[200px] ${
          isOpen ? "block transition-all duration-300 slide-up-enter" : "hidden"
        } `}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </ul>
    </li>
  );
};

function Navbar() {
  const { isSideBarOpen, handleSidebarToggle } = useSidebarContext();

  return (
    <>
      <nav className="bg-soriic p-9 flex justify-between items-center md:px-20 px-5">
        <div className="flex justify-between items-center gap-16">
          <a href="/">
            <img
              src="./src/assets/logo.png"
              alt="Logo"
              loading="lazy"
              className="h-10 cursor-pointer"
            />
          </a>
          <ul className="justify-between items-center gap-5 hidden lg:flex">
            <li>
              <a
                className="font-normal text-textColor transition-all duration-300 hover:text-mainColor"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="font-normal text-textColor transition-all duration-300 hover:text-mainColor"
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="font-normal text-textColor transition-all duration-300 hover:text-mainColor"
                href="#"
              >
                Blogs
              </a>
            </li>
            <Dropdown label="Insights">
              <li className="font-normal p-2 transition-all duration-300 hover:translate-x-4 cursor-pointer hover:text-mainColor">
                <a href="#">Projects</a>
              </li>
              <li className="font-normal p-2 transition-all duration-300 hover:translate-x-4 cursor-pointer hover:text-mainColor">
                FAQ
              </li>
            </Dropdown>
            <li>
              <a
                className="font-normal text-textColor transition-all duration-300 hover:text-mainColor"
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="font-normal text-textColor transition-all duration-300 hover:text-mainColor"
                href="#"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-5">
          <button className="flex justify-center items-center gap-2 font-normal text-textColor">
            <FaUser fill="#0e1133" />
            Login
          </button>
          <button className="font-normal text-white transition-all duration-300 hover:text-mainColor md:px-6 md:py-2.5 px-4 py-2 bg-mainColor hover:bg-soriic rounded-md border border-mainColor hidden sm:block">
            Get Started
          </button>
          <FaBars
            className="cursor-pointer lg:hidden block"
            size={25}
            onClick={handleSidebarToggle}
          />
        </div>
      </nav>
      {isSideBarOpen && (
        <div
          className="overlay fixed top-0 left-0 w-full h-full bg-black opacity-80 z-50"
          onClick={handleSidebarToggle}
        ></div>
      )}
    </>
  );
}

export default Navbar;
