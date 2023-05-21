import React, { useRef } from "react";
import Hero from "./Hero";
import About from "./About";
import Technology from "./Technology";
import Projects from "./Projects";

const MainPage = ({ home, about, technology, work }) => {
  return (
    <div className="w-full h-fit flex items-center flex-col ">
      <Hero homesection={home} />

      <About aboutsection={about} />

      <Technology techsection={technology} />

      <Projects worksection={work} />
    </div>
  );
};

export default MainPage;
