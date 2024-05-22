import React from "react";
import Hero from "./components/sections/Hero";
import Section1 from "./components/sections/Section1";
import Header from "./components/header/Header";
import HorizontalAccordion from "./components/sections/HorizontalAccor";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="w-[1280px] mx-auto flex flex-col items-center justify-center">
      <Header />
      <Hero />
      <Section1 />
      <Footer/>
    </div>
  );
};

export default App;
