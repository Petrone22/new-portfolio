import React, { useState } from "react";
import logo from "../assets/logo.jpg";
const Nav = ({ home }) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="w-full md:max-w-7xl h-16  p-4 rounded-b-md text-textClr flex justify-between fixed z-50 backdrop-blur-md">
      <div className="h-full flex gap-4 w-min  cursor-pointer ">
        <img
          src={logo}
          alt="Logo"
          className="rounded-sm"
          style={{
            transform: "scale(1.5)",
          }}
        />
        <span className="font-semibold text-lg w-fit">Mustafa</span>
      </div>
      <div className="hidden md:flex gap-2 border border-offwhite  rounded-3xl  px-4 h-full ">
        <a
          href="#"
          className="hover:text-secondary transition-all"
          onClick={() => {
            home.scrollIntoView({
              behaviour: "smooth",
              block: "start",
            });
          }}
        >
          Home
        </a>
        <a href="#" className="hover:text-secondary transition-all">
          About
        </a>
        <a href="#" className="hover:text-secondary transition-all">
          Technologies
        </a>
        <a href="#" className="hover:text-secondary transition-all">
          Work
        </a>
      </div>
      <div className="h-full flex gap-2 ">
        <button className="border border-offwhite px-4 rounded-2xl bg-purple-950 hover:bg-accent transition-all ">
          Contact
        </button>
        <div
          className="w-10 flex flex-col gap-1 md:hidden"
          onClick={() => {
            setNavOpen((prevNav) => !prevNav);
          }}
        >
          <span
            className="w-full bg-textClr h-1/5 transition-all"
            style={{
              rotate: navOpen ? "45deg" : "0deg",
              transform: navOpen ? "translate(7px,8px)" : "none",
            }}
          ></span>
          <span
            className="w-full bg-textClr h-1/5 transition-all"
            style={{
              display: navOpen ? "none" : "block",
            }}
          ></span>
          <span
            className="w-full bg-textClr h-1/5 transition-all"
            style={{
              rotate: navOpen ? "-45deg" : "0deg",
            }}
          ></span>
        </div>
      </div>
      <div
        className="absolute top-16 flex flex-col gap-6  h-screen bg-bgclr p-4 left-0  w-full  md:hidden transition-all duration-300 "
        style={{
          pointerEvents: navOpen ? "auto" : "none",
          top: navOpen ? "4rem" : "-5%",
          opacity: navOpen ? "1" : "0",
        }}
      >
        <a
          href="#"
          className="hover:text-secondary transition-all border-b-2 border-offwhite mb-4 pb-4 w-full"
          onClick={() => {
            home.scrollIntoView({
              behaviour: "smooth",
              block: "start",
            });
          }}
        >
          Home
        </a>
        <a
          href="#"
          className="hover:text-secondary transition-all border-b-2 border-offwhite mb-4 pb-4 w-full"
        >
          About
        </a>
        <a
          href="#"
          className="hover:text-secondary transition-all border-b-2 border-offwhite mb-4 pb-4 w-full"
        >
          Technologies
        </a>
        <a
          href="#"
          className="hover:text-secondary transition-all border-b-2 border-offwhite mb-4 pb-4 w-full"
        >
          Work
        </a>
      </div>
    </div>
  );
};

export default Nav;
