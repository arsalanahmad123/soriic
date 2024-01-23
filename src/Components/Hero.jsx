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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <div className="flex justify-between items-center pt-20 h-screen lg:flex-row flex-col">
        <div className="lg:w-[50%] text-wrap w-full">
          <span className="text-mainColor text-sm lg:font-medium font-normal">
            Experience The Best IT Solutions
          </span>
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentHeadlineIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.5 } }}
              transition={{ duration: 0.5 }}
              className="lg:text-6xl w-[80%] lg:w-full font-bold text-textColor sm:text-5xl text-4xl"
            >
              {headlines[currentHeadlineIndex]}
            </motion.h1>
          </AnimatePresence>
          <p className="w-[80%] text-gray-700 font-normal lg:text-[19px] pt-10 text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            quidem beatae accusamus quisquam, autem facere consequatur eos quam
            sapiente? Vel!
          </p>
          <button className="bg-soriic text-mainColor px-4 lg:px-6 py-2 lg:py-3 mt-10 text-sm lg:text-lg border-mainColor border-2 rounded-md hover:bg-mainColor hover:text-white transition-all duration-300 ease-linear">
            Learn More
          </button>
        </div>
        <div className="lg:w-1/2 w-full">
          <img src="/src/assets/hero-thumb.png" alt="Hero" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
