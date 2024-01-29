import React, { useState, useEffect } from "react";
import { FaChevronDown, FaUser, FaBars } from "react-icons/fa";
import { useSidebarContext } from "../Context/SidebarContext";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { isSideBarOpen, handleSidebarToggle } = useSidebarContext();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = isScrolled
    ? "navbar-fixed bg-white animate__animated animate__slideInDown fixed top-0 w-full p-5 z-50"
    : "bg-sorric p-3 animate__animated animate__fadeInUp";

  return (
    <>
      <nav
        className={`transition-all duration-150 ease-in-out flex justify-between items-center lg:px-10 px-5 ${navbarClass}`}
      >
        <div className="flex justify-between items-center gap-16">
          <a href="/">
            <img
              src="./src/assets/logo.png"
              alt="Logo"
              loading="lazy"
              className="h-10 cursor-pointer"
            />
          </a>
          <ul className="justify-between items-start gap-5 hidden lg:flex">
            <li>
              <NavLink
                className="font-normal text-textColor transition-all duration-300 hover:text-mainColor"
                to={"/"}
              >
                Home
              </NavLink>
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
            <li id="dropdown" className=" cursor-pointer relative inline-block">
              <span className="font-normal text-textColor transition-all duration-500 hover:text-mainColor cursor-pointer flex justify-center items-center gap-2">
                Insights
                <FaChevronDown size={10} />
              </span>
              <ul
                id="dropdown-content"
                className="bg-white rounded-md hidden absolute min-w-40 min-h-0 p-2 top-6"
              >
                <li className="font-normal pt-1 pb-2 pl-2 transition-all duration-300 ease-in-out hover:text-mainColor transfrom hover:translate-x-3 text-[14px]">
                  <a href="#">Projects</a>
                </li>
                <li className="font-normal pt-1 pb-2 pl-2 transition-all duration-300 ease-in-out hover:text-mainColor transform hover:translate-x-3 text-[14px]">
                  FAQ
                </li>
              </ul>
            </li>
            <li>
              <a
                className="font-normal text-textColor transition-all duration-300 hover:text-mainColor"
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <NavLink
                className="font-normal text-textColor transition-all duration-300 hover:text-mainColor"
                to={"/contact"}
              >
                Contact Us
              </NavLink>
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
