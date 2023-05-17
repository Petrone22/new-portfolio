import React, { useState } from "react";
import { motion } from "framer-motion";
import video from "../assets/video2.webm";
import BallComponent from "./BallComponent";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import three from "../assets/three.png";
import github from "../assets/github.png";
import git from "../assets/git.png";
import python from "../assets/python.png";
import figma from "../assets/figma.png";

const Technology = () => {
  return (
    <motion.div
      className=" mt-16 md:-mt-96  h-screen w-full lg:max-w-7xl relative flex flex-row gap-8 items-center justify-center  text-textClr md:mb-96"
      initial={{ opacity: 0.1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full px-2 md:px-0 md:w-7/12 h-1/2 flex items-center justify-center gap-10 flex-wrap">
        <BallComponent icon={html} name={"HTML5"} />
        <BallComponent icon={css} name={"CSS3"} />
        <BallComponent icon={js} name={"JavaScript"} />
        <BallComponent icon={react} name={"React JS"} />
        <BallComponent icon={tailwind} name={"Tailwind"} />
        <BallComponent icon={redux} name={"Redux"} />
        <BallComponent icon={three} name={"Three.JS"} />
        <BallComponent icon={github} name={"GitHub"} />
        <BallComponent icon={git} name={"Git"} />
        <BallComponent icon={python} name={"Python"} />
        <BallComponent icon={figma} name={"Figma"} />
      </div>
      <video
        src={video}
        autoPlay
        playsInline
        muted
        loop
        className="bg-video opacity-90 absolute -z-10 "
      ></video>
    </motion.div>
  );
};

export default Technology;
//HTML CSS JS TAILWIND REACT GITHUB GIT FIGMA PYTHON
