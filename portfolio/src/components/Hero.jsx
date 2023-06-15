import React from "react";
import video1 from "../assets/video1.webm";
import svg from "../assets/stars.svg";
import { motion } from "framer-motion";
import Search from "./Search";
import bg from "../assets/bgimg.png";
import way from "../assets/pointer.png";
const Hero = ({ homesection }) => {
  return (
    <motion.div
      className=" mt-16 h-screen w-full   lg:max-w-7xl relative flex flex-col items-center gap-4 text-textClr md:mb-20"
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
      <div className="absolute top-4 w-full h-fit ">
        <img
          src={bg}
          alt="backgroud"
          className="w-fit bg-img absolute opacity-60 -z-10 object-contain top-full mt-10  "
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
          className="h-2/3 md:h-fit absolute top-60% md:top-54%  backdrop-blur-lg w-full rounded-xl  border-opacity-0 p-2"
          style={{
            border: "1px solid rgba(255,235,235,0.4)",
          }}
        >
          <div
            className="w-full h-full md:h-fit  rounded-xl p-4 flex flex-wrap overflow-hidden gap-4 justify-center items-center"
            style={{
              border: "1px solid rgba(255,235,235,0.4)",
            }}
          >
            <div className="flex w-full relative big-search-card search-card border border-purple-800 p-1 md:min-h-fit md:h-12 md:max-h-fit shrink-0 text-textClr rounded-md  gap-1 justify-between items=center text-sm md:mb-8 transition-all duration-300">
              <a
                href="https://www.google.com/search?q=how+to+start+my+web+development+journey&rlz=1C1GCEA_enEG1017EG1017&oq=how+to+start+my+web+development+journey&aqs=chrome..69i57.4794j0j4&sourceid=chrome&ie=UTF-8"
                className="absolute h-full w-full"
                target="_blank"
              ></a>
              <div
                className="h-14 md:h-full pr-1 flex items-center justify-center"
                style={{
                  borderRight: "1px solid rgba(255,235,235,0.4)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  color="white"
                  viewBox="0 0 50 50"
                  width="20"
                  height="20"
                >
                  <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
                </svg>
              </div>
              <span className="h-full text-start text-lg font-semibold w-full md:mx-1 flex items-center ">
                How to start my web development journey
              </span>
              <div className="w-fit pr-1 h-full flex justify-center items-center">
                <svg
                  width="24"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  color="white"
                  fill="white"
                  strokeWidth="20"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </div>
            </div>

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
