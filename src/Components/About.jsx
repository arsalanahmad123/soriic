import React from "react";

function About() {
  return (
    <section className="bg-textColor min-h-screen  flex justify-center items-center lg:gap-x-1 pt-28 pb-32 lg:flex-row flex-col-reverse px-5 md:px-5 lg:p-10 gap-y-10 lg:gap-y-0 xl:p-32 xl:pt-48 lg:px-20">
      <img src="./src/assets/about.png" alt="" />
      <div className="flex flex-col justify-center items-center gap-y-5 w-full md:p-10">
        <div className=" lg:w-[30vw] w-full border border-borderColor text-white py-4 px-8  rounded-lg hover:border-mainColor hover:border-1 transition-all duration-500">
          <div className="flex flex-col px-10 pt-3 pb-2 ">
            <span
              id="aboutBox"
              className=" text-lg md:text-2xl font-bold relative"
            >
              Main Heading
            </span>
            <p className="text-sm md:text-lg text-gray-400">Subheading</p>
          </div>
        </div>
        <div className="lg:w-[30vw] w-full border border-borderColor text-white py-4 px-8  rounded-lg hover:border-mainColor hover:border-1 transition-all duration-500">
          <div className="flex flex-col px-10 pt-3 pb-2">
            <span
              id="aboutBox"
              className="text-lg md:text-2xl font-bold relative"
            >
              Main Heading
            </span>
            <p className="text-sm md:text-lg text-gray-400">Subheading</p>
          </div>
        </div>
        <div className="lg:w-[30vw] w-full border border-borderColor text-white py-4 px-8  rounded-lg hover:border-mainColor hover:border-1 transition-all duration-500">
          <div className="flex flex-col px-10 pt-3 pb-2">
            <span
              id="aboutBox"
              className="text-lg md:text-2xl font-bold relative"
            >
              Main Heading
            </span>
            <p className="text-sm md:text-lg text-gray-400">Subheading</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
