import React from "react";
import resume from "../assets/MustafaRashidCV.pdf";
const ResumePage = () => {
  return (
    <div className=" mt-52 h-screen w-full lg:max-w-7xl relative flex flex-col items-center gap-12 text-textClr md:mb-20 ">
      <h1 className="text-center text-3xl font-bold  text-textClr rounded-2xl ">
        <a
          href={resume}
          className="w-full h-full bg-purple-950 p-5 hover:bg-purple-700 transition-all duration-200 rounded-2xl "
        >
          Download Resume
        </a>
      </h1>
    </div>
  );
};

export default ResumePage;
