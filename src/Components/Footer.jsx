import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaArrowRight,
  FaApple,
} from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-footerColor relative bottom-0 w-full lg:px-20 py-10">
      <div className=" flex flex-col md:flex-row  gap-y-8 md:gap-y-0  p-5 text-textColor  justify-center items-center md:gap-x-5 md:justify-between md:items-start md:pt-10 lg:gap-x-0 ">
        <div className=" flex flex-col justify-center items-center md:items-start md:justify-between px-4 md:px-2 gap-y-5 pt-5  md:flex-wrap">
          <img
            src="./src/assets/logo.png"
            className="w-24 lg:w-32"
            alt="Icon"
          />
          <p className="text-center md:text-left md:w-[200px]">
            At SORIIC, we’re not just a software company – we’re your innovation
            partner, driven by excellence. Crafting tailored solutions, we
            empower businesses for success in the digital age.
          </p>
          <a href="#" className="font-medium">
            Read More
            <FaArrowRight className="inline ml-1 " />
          </a>
          <div className="flex gap-2 pt-4 justify-start ">
            <div className="p-2 bg-white rounded-lg hover:bg-mainColor transition-all duration-300 hover:text-white cursor-pointer">
              <FaFacebookF className="text-xl" />
            </div>
            <div className="p-2 bg-white rounded-lg hover:bg-mainColor transition-all duration-300 hover:text-white cursor-pointer">
              <FaTwitter className="text-xl" />
            </div>
            <div className="p-2 bg-white rounded-lg hover:bg-mainColor transition-all duration-300 hover:text-white cursor-pointer">
              <FaPinterestP className="text-xl" />
            </div>
            <div className="p-2 bg-white rounded-lg hover:bg-mainColor transition-all duration-300 hover:text-white cursor-pointer">
              <FaLinkedinIn className="text-xl" />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-20">
          <div className="flex flex-col md:gap-y-2">
            <h1 className="font-bold text-xl md:mb-3">Company</h1>
            <a href="">About Us</a>
            <a href="">Service</a>
            <a href="">Case Studies</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
          </div>
          <div className="flex flex-col md:gap-y-2">
            <h1 className="font-bold text-xl md:mb-3">Support</h1>
            <a href="">Community</a>
            <a href="">Resources</a>
            <a href="">Faqs</a>
            <a href="">Privacy Policy</a>
            <a href="">Careers</a>
          </div>
        </div>
        <div className="flex flex-col md:gap-y-2">
          <h1 className="font-bold text-xl md:mb-3">Get In Touch</h1>
          <div className="flex  gap-x-2">
            <MdOutlineMailOutline className="size-5" />
            <a href="mailto:dummy@gmail.com">help.soriic@gmail.com</a>
          </div>
          <div className="flex  gap-x-2">
            <FaPhone className="size-5" />
            <a href="tel:123456789"> +123 456 789</a>
          </div>
          <div className="flex  gap-x-2">
            <FaMapMarkerAlt className="size-5" />
            <a href=""> 6c, Fatima Jinnah Road Sargodha</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 lg:pt-4 flex flex-row justify-between items-center text-textColor">
        <div className="flex flex-row gap-x-5 lg:ml-5">
          <button className="bg-white py-2 px-5 rounded-md transition-all duration-500 ease-in-out hover:bg-transparent border hover:border-gray-300 flex flex-row gap-x-2 items-center justify-center">
            <BiLogoPlayStore className="size-5" />
            Download For Android
          </button>
          <button className="py-2 px-5 rounded-md border border-gray-300 hover:bg-white transition-all duration-500 ease-in-out flex flex-row gap-x-2 items-center justify-center">
            <FaApple className="size-5" />
            Download For IOS
          </button>
        </div>
        <div>
          <p className="text-gray-600">© 2024 Soriic. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
