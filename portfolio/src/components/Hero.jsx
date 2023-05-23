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
            <Search
              search={
                "https://www.google.com/search?q=what+is+html&rlz=1C1GCEA_enEG1017EG1017&oq=what+is+html&aqs=chrome..69i57.1925j0j7&sourceid=chrome&ie=UTF-8"
              }
              quote={"What is HTML?"}
            />
            <Search
              search={
                "https://www.google.com/search?q=how+to+center+a+div+css&rlz=1C1GCEA_enEG1017EG1017&oq=how+to+center+a+div+css&aqs=chrome..69i57.3151j0j7&sourceid=chrome&ie=UTF-8"
              }
              quote={"How to Center a Div css"}
            />
            <Search
              search={
                "https://www.google.com/search?q=console+log+null+js&rlz=1C1GCEA_enEG1017EG1017&sxsrf=APwXEdeHLwmPxIyB4TV32LYxVTUqmohKrQ%3A1684835368263&ei=KIxsZOTJD6yDi-gPnd2RqA0&ved=0ahUKEwjk_YTtlIv_AhWswQIHHZ1uBNUQ4dUDCA8&uact=5&oq=console+log+null+js&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIGCAAQFhAeMgYIABAWEB46CggAEEcQ1gQQsAM6BwgjEOoCECc6EAgAEOMEEOkEEOoCELQCGAE6DAgjEIoFECcQRhD5AToHCCMQigUQJzoECCMQJzoICAAQigUQkQI6DQgAEIoFELEDEIMBEEM6BwgAEIoFEEM6DQguEIoFEMcBENEDEEM6CggAEIoFELEDEEM6IAgAEIoFEEYQ-QEQlwUQjAUQ3QQQRhD0AxD1AxD2AxgCOgoIABCABBAUEIcCOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQ0QM6BQgAEIAEOggIABCABBCxAzoLCAAQigUQsQMQgwE6CwguEIAEEMcBEK8BSgQIQRgAUI8JWKogYJAhaARwAXgAgAGrAYgBrRSSAQQwLjE4mAEAoAEBsAEQyAEIwAEB2gEGCAEQARgB2gEGCAIQARgT&sclient=gws-wiz-serp"
              }
              quote={"JS Error #1"}
            />
            <Search
              search={
                "https://www.google.com/search?q=how+to+select+element+js&rlz=1C1GCEA_enEG1017EG1017&oq=how+to+select+element+js&aqs=chrome..69i57.3261j0j7&sourceid=chrome&ie=UTF-8"
              }
              quote={"How to select elements JS"}
            />
            <Search
              search={
                "https://www.google.com/search?q=unable+to+load+module+js&rlz=1C1GCEA_enEG1017EG1017&oq=unable+to+load+module+js&aqs=chrome..69i57.4961j0j7&sourceid=chrome&ie=UTF-8"
              }
              quote={"JS Error #1934"}
            />
            <Search
              search={
                "https://www.google.com/search?q=Intermediate+JS+Projects&rlz=1C1GCEA_enEG1017EG1017&oq=Intermediate+JS+Projects&aqs=chrome..69i57.1023j0j7&sourceid=chrome&ie=UTF-8"
              }
              quote={"Intermediate JS Projects"}
            />
            <Search
              search={
                "https://www.google.com/search?q=Learn+React&rlz=1C1GCEA_enEG1017EG1017&oq=Learn+React&aqs=chrome..69i57j69i65j69i61.277j0j7&sourceid=chrome&ie=UTF-8"
              }
              quote={"Learn React"}
            />
            <Search
              search={
                "https://www.google.com/search?q=How+to+use+useState()&rlz=1C1GCEA_enEG1017EG1017&oq=How+to+use+useState()&aqs=chrome..69i57.177j0j7&sourceid=chrome&ie=UTF-8"
              }
              quote={"How to use useState()"}
            />
            <Search
              search={
                "https://www.google.com/search?q=Three.JS&rlz=1C1GCEA_enEG1017EG1017&oq=Three.JS&aqs=chrome..69i57j69i59j69i65l2j69i60j69i65.1182j0j7&sourceid=chrome&ie=UTF-8"
              }
              quote={"Three.JS"}
            />
            <Search
              search={
                "https://www.google.com/search?q=Design+Course&rlz=1C1GCEA_enEG1017EG1017&oq=Design+Course&aqs=chrome..69i57.307j0j7&sourceid=chrome&ie=UTF-8"
              }
              quote={"Design Course"}
            />
            <Search
              search={
                "https://www.google.com/search?q=how+much+coffee+before+dehydration%3F&rlz=1C1GCEA_enEG1017EG1017&oq=how+much+coffee+before+dehydration%3F&aqs=chrome..69i57.267j0j7&sourceid=chrome&ie=UTF-8"
              }
              quote={"how much coffee before dehydration?"}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
