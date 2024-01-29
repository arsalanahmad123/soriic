import React from "react";
import { PiRecycleBold } from "react-icons/pi";
const Cards = () => {
  return (
    <section className="min-h-screen lg:min-h-[80vh] w-full mx-auto bg-white pb-5 lg:px-20">
      <div className="flex flex-col items-center justify-center max-w-full lg:px-10 pt-28 lg:gap-x-5 gap-y-10 md:px-12 px-2 flex-wrap lg:gap-y-20 pb-10">
        <div className="flex justify-center items-center flex-col lg:mt-16">
          <h1 className="font-bold md:text-4xl mb-2 text-textColor lg:text-5xl text-3xl">
            What you can do
          </h1>
          <p className="mb-4 text-slate-800 font-normal text-[18px] text-center">
            The fully monthy spoofing good time no bigle cack grub fantastic.
          </p>
        </div>

        <div className="flex justify-center items-center flex-col md:flex-wrap  lg:gap-x-8p  mt-3 transition duration-700 ease-in-out text-textColor md:flex-row lg:flex-row lg:flex-nowrap gap-y-10 gap-x-4">
          <div className="flex flex-col justify-center items-center bg-transparent hover:shadow-2xl hover:shadow-indigo-200  p-10  rounded-md  hover:-translate-y-7 	transition duration-700 ease-in-out   cursor-pointer min-h-[270px] text-center bg-gradient-to-t from-white to-orange-100 md:w-[45%]">
            <i className="bg-textColor text-white p-3.5 rounded-full shadow-lg shadow-indigo-300">
              <PiRecycleBold className="text-3xl " />
            </i>
            <h1 className="font-bold text-[22px] mt-4">Easy to use</h1>
            <p className="text-[17px] text-center">
              Mucker plaster bugger all mate morish are.
            </p>
            <span className="pt-10">Read More </span>
          </div>
          <div className="flex flex-col bg-card-bg items-center  hover:shadow-2xl hover:shadow-indigo-200  p-10   rounded-md  hover:-translate-y-6 	transition duration-700 ease-in-out   cursor-pointer min-h-[270px] bg-gradient-to-b from-white to-indigo-100 md:w-[45%]">
            <i className="bg-textColor text-white p-3.5 rounded-full shadow-lg shadow-indigo-300">
              <PiRecycleBold className="text-3xl " />
            </i>
            <h1 className="font-bold text-[22px] mt-4">Easy to use</h1>
            <p className="text-[17px] text-center">
              Mucker plaster bugger all mate morish are.
            </p>
            <span className="pt-10">Read More</span>
          </div>
          <div className="flex flex-col  items-center bg-transparent hover:shadow-2xl hover:shadow-indigo-200  p-10   rounded-md  hover:-translate-y-6 	transition duration-700 ease-in-out   cursor-pointer min-h-[270px] bg-gradient-to-t from-white to-orange-100 md:w-[45%]">
            <i className="bg-textColor text-white p-3.5 rounded-full shadow-lg shadow-indigo-300">
              <PiRecycleBold className="text-3xl " />
            </i>
            <h1 className="font-bold text-[22px] mt-4">Easy to use</h1>
            <p className="text-[17px] text-center">
              Mucker plaster bugger all mate morish are.
            </p>
            <span className="pt-10">Read More</span>
          </div>
          <div className="flex flex-col  items-center bg-transparent hover:shadow-2xl hover:shadow-indigo-200  p-10   rounded-md  hover:-translate-y-6 	transition duration-700 ease-in-out   cursor-pointer min-h-[270px] bg-gradient-to-b from-white to-indigo-100 md:w-[45%]">
            <i className="bg-textColor text-white p-3.5 rounded-full shadow-lg shadow-indigo-300">
              <PiRecycleBold className="text-3xl " />
            </i>
            <h1 className="font-bold text-[22px] mt-4">Easy to use</h1>
            <p className="text-[17px] text-center">
              Mucker plaster bugger all mate morish are.
            </p>
            <span className="pt-10">Read More </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
