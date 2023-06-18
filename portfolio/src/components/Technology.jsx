import React, { useRef } from "react";
import { motion } from "framer-motion";
import video from "../assets/video2.webm";
import BallComponent from "./BallComponent";
import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import three from "../assets/three.png";
import github from "../assets/github.png";
import gitlang from "../assets/gitlang.png";
import pythonlang from "../assets/pythonlang.png";
import fig from "../assets/fig.png";

const Technology = ({ techsection }) => {
  return (
    <motion.div
      className=" mb-10  md:mt-0 h-screen w-full lg:max-w-7xl relative flex flex-row gap-8 items-center justify-center  text-textClr md:mb-52"
      initial={{ opacity: 0.1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      ref={techsection}
    >
      <h1 className="absolute top-0 font-bold text-2xl md:text-4xl text-center mt-9 flex flex-col items-center justify-center gap-2">
        Skillset
        <p className="font-light text-xl">
          Useful <span className="text-accent">Technologies</span> that I use,
          along with many other developers:
        </p>
      </h1>

      <div className="w-full px-2 md:px-0 md:w-7/12 h-1/2 flex items-center justify-center gap-10 flex-wrap">
        <BallComponent icon={html5} name={"HTML5"} />
        <BallComponent icon={css3} name={"CSS3"} />
        <BallComponent icon={javascript} name={"JavaScript"} />
        <BallComponent icon={react} name={"React JS"} />
        <BallComponent icon={tailwind} name={"Tailwind"} />
        <BallComponent icon={redux} name={"Redux"} />
        <BallComponent icon={three} name={"Three.JS"} />
        <BallComponent icon={github} name={"GitHub"} />
        <BallComponent icon={gitlang} name={"Git"} />
        <BallComponent icon={pythonlang} name={"Python"} />
        <BallComponent icon={fig} name={"Figma"} />
      </div>
      <video
        src={video}
        autoPlay
        playsInline
        muted
        loop
        className="bg-video  absolute -z-10 "
      ></video>
    </motion.div>
  );
};

export default Technology;
//HTML CSS JS TAILWIND REACT GITHUB GIT FIGMA PYTHON
