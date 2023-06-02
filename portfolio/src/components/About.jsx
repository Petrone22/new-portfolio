import React, { useRef } from "react";
import { motion } from "framer-motion";
import phone from "../assets/cell.svg";
import location from "../assets/location.svg";
import education from "../assets/education.svg";
import gmail from "../assets/gmail.svg";
import person from "../assets/person.svg";
import reactIcon from "../assets/react.svg";
import bg from "../assets/bgimg.png";
const About = ({ aboutsection }) => {
  return (
    <motion.div
      initial={{ opacity: 0.1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" h-screen w-full sm:mt-0 lg:max-w-7xl flex flex-col  items-center gap-12 text-textClr -mt-20 relative md:mt-96 mb-40 md:mb-0"
      ref={aboutsection}
    >
      <img
        src={bg}
        alt="backgroud"
        className="block md:hidden bg-img absolute -z-10 md:w-fit bottom-1/2  "
      />
      <h1 className="animated font-bold text-4xl md:text-4xl text-center mt-9 ">
        About Me:
      </h1>
      <p className="text-center font-semibold text-lg mb-4 md:tracking-wider">
        <span className="text-accent">Mustafa Rashid</span> is A freelancing
        Front end developer & ReactJS developer. <br />
        Mustafa is Dedicated to the process of learning and improving, as well
        as delivering awesome-looking, user friendly reuslts in the least amount
        of time possible. He has very keen attention to detail and a
        never-ending will to learn and grow within the tech industry.
      </p>
      <span className="flex gap-2 items-center">
        <img src={reactIcon} alt="react" className="" />
        <h2 className="text-xl font-bold text-center">
          {" "}
          Front End & ReactJS Developer:
        </h2>
      </span>
      <div className="w-full flex items-center justify-center flex-wrap gap-4">
        <span className="mt-2 md:mr-4">
          <img src={phone} alt="phone" className="inline mr-2" />
          Phone: (+20) 109 619 0799
        </span>
        <span className="mt-2 md:mr-4">
          <img src={location} alt="phone" className="inline mr-2" />
          Location: Cairo, Egypt.
        </span>
        <span className="mt-2 md:mr-4">
          <img src={education} alt="phone" className="inline mr-2" />
          Education: Bachelors.
        </span>
        <span className="mt-2 md:mr-4">
          <img src={gmail} alt="phone" className="inline mr-2" />
          E-Mail: mustafarashid.cs@Gmail.com
        </span>
        <span className="mt-2 md:mr-4">
          <img src={person} alt="phone" className="inline mr-2" />
          Age: 21
        </span>
      </div>
    </motion.div>
  );
};

export default About;
