import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const headlines = [
  "Providing World-Class Software Solutions & Business Synergy",
  "Visionary Approaches With Expert Services",
];
function Hero() {
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeadlineIndex((prevIndex) =>
        prevIndex === headlines.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="z-50 w-full lg:px-20 px-5 mx-auto ">
        <div className="flex lg:items-start lg:pt-20 justify-center items-center w-full  min-h-screen lg:flex-row flex-col lg:min-h-[80vh]">
          <div className="lg:w-[50%] text-wrap w-full flex flex-col items-start pt-10">
            <span className="text-mainColor text-xs lg:font-medium font-normal px-5">
              Experience The Best IT Solutions
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHeadlineIndex}
                className="lg:text-5xl w-[90%] lg:w-full font-bold text-textColor text-2xl h-[100px] sm:h-[200px] md:h-[100px]  text-wrap p-5 xl:h-[90px] md:text-4xl xl:text-6xl transition-all duration-300 ease-in-out animate__animated animate__flipInX "
              >
                {headlines[currentHeadlineIndex]}
              </motion.div>
            </AnimatePresence>
            <p
              className={`w-[80%] text-gray-700 font-normal lg:text-[19px] text-[15px] p-5 transition-all duration-300 ease-in-out animate__animated animate__backInRight lg:mt-[21%]  ${
                currentHeadlineIndex === 0 && "xl:mt-[27%] mt-16 md:mt-0"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quidem beatae accusamus quisquam, autem facere consequatur eos
              quam sapiente? Vel!
            </p>
            <button className="bg-soriic text-mainColor px-4 lg:px-6 py-2 lg:py-3 m-5 text-sm lg:text-lg border-mainColor border-2 rounded-md hover:bg-mainColor hover:text-white transition-all duration-300 ease-linear animate__animated animate__bounce">
              Learn More
            </button>
          </div>
          <div className="lg:w-1/2 w-full bg-contain">
            <img
              src="/src/assets/hero-thumb.png"
              alt="Hero"
              className="animate__animated animate__fadeInRight"
            />
          </div>
        </div>
      </div>
      <img className="" src="/src/assets/hero-end.png" alt="Animated image" />
    </>
  );
}

export default Hero;
