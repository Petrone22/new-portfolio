import React from "react";
import video1 from "../assets/video1.webm";
import svg from "../assets/stars.svg";
import { motion } from "framer-motion";
import Search from "./Search";
import bg from "../assets/bgimg.png";
import { useRef } from "react";

const Hero = ({ homesection }) => {
  return (
    <motion.div
      className=" mt-16 h-screen w-full   lg:max-w-7xl relative flex flex-col items-center gap-4 text-textClr md:mb-20"
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      ref={homesection}
    >
      <div className="flex flex-col gap-3 items-center z-10">
        <div className="mt-8 border p-2 w-fit rounded-3xl font-semibold text-sm text-secondary border-secondary  flex gap-2 pointer-events-none">
          <img src={svg} alt="stars" />
          <span>New: projects got added.</span>
        </div>
        <h1 className="animated font-bold text-4xl md:text-7xl text-center ">
          Mustafa Rashid
        </h1>
        <h3 className="animated font-bold text-xl md:text-2xl text-center">
          Unleash your business{" "}
          <span className="text-secondary">Potential</span>
        </h3>
      </div>
      <div className="absolute  top-4 w-full h-fit ">
        <img
          src={bg}
          alt="backgroud"
          className=" hidden md:block bg-img absolute -z-10 md:w-fit top-full  "
        />
        <video
          src={video1}
          autoPlay
          loop
          muted
          playsInline
          className=" mt-32 sm:mt-48 md:mt-12  "
        ></video>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{ opacity: 1 }}
          className="h-1/2 absolute top-60% md:top-54%  backdrop-blur-lg w-full rounded-xl  border-opacity-0 p-2"
          style={{
            border: "1px solid rgba(255,235,235,0.4)",
          }}
        >
          <div
            className="w-full h-full rounded-xl p-4 flex flex-wrap overflow-hidden gap-4 justify-center"
            style={{
              border: "1px solid rgba(255,235,235,0.4)",
            }}
          >
            <Search quote={"What is HTML?"} />
            <Search quote={"How to Center a Div css"} />
            <Search quote={"JS Error #1"} />
            <Search quote={"How to select elements JS"} />
            <Search quote={"JS Error #1934"} />
            <Search quote={"Intermediate JS Projects"} />
            <Search quote={"Learn React"} />
            <Search quote={"How to use useState()"} />
            <Search quote={"Three.JS"} />
            <Search quote={"Design Course"} />
            <Search quote={"how much coffee before dehydration?"} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
