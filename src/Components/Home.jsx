import React from "react";
import Hero from "./Hero";
import About from "./About";
import Cards from "./Cards";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="bg-soriic">
        <Hero />
        <Cards />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default Home;
