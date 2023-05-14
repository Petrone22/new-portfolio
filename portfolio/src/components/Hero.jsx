import React from "react";
import video1 from "../assets/video1.webm";
import svg from "../assets/stars.svg";
const Hero = () => {
  return (
    <div className=" mt-16 h-screen w-full  lg:max-w-7xl relative flex flex-col items-center gap-4 text-textClr">
      <div className="flex flex-col gap-3 items-center absolute">
        <div className="mt-8 border p-2 w-fit rounded-3xl font-semibold text-sm text-secondary border-secondary  flex gap-2 pointer-events-none">
          <img src={svg} alt="stars" />
          <span>New: projects got added.</span>
        </div>
        <h1 className="font-bold text-7xl text-center ">Mustafa Rashid</h1>
        <h3 className="font-bold text-2xl text-center">
          Unlock your business <span className="text-secondary">Potential</span>
        </h3>
      </div>
      <video
        src={video1}
        autoPlay
        loop
        muted
        playsInline
        className="mt-60 sm:mt-48 md:mt-12"
      ></video>
    </div>
  );
};

export default Hero;
