import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import { Link, useLocation } from "react-router-dom";

const Btns = ({ hoverstate }) => {
  return (
    <div className="w-full h-full flex gap-1 items-center justify-center">
      <div className="w-full rounded-2xl hover:bg-purple-700 flex items-center justify-center">
        <Link to="/contact" className="w-full h-full text-center">
          Contact
        </Link>
      </div>
      <div
        className="w-full rounded-2xl hover:bg-purple-700 flex items-center justify-center"
        style={{
          display: hoverstate ? "block" : "none",
        }}
      >
        <Link to="/resume" className="w-full h-full ">
          Resume
        </Link>
      </div>
    </div>
  );
};

const HomeBtn = () => {
  return (
    <div className="w-full h-full flex gap-1 hover:bg-purple-700 rounded-2xl items-center justify-center">
      <Link to="/" className="w-full h-full text-center">
        Home
      </Link>
    </div>
  );
};

const ReturnName = (pathname) => {
  if (pathname === "/") {
    return "Contact";
  } else {
    return "Home";
  }
};

const pickBtn = (pathanme, hoverState) => {
  if (pathanme === "/") {
    return <Btns hoverstate={hoverState} />;
  } else {
    return <HomeBtn />;
  }
};

const Nav = ({ home, about, technology, work }) => {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  return (
    <div className="w-full md:max-w-7xl h-16  p-4 rounded-b-md text-textClr flex justify-between fixed z-50 backdrop-blur-md ">
      <div className="h-full flex gap-4 w-min  cursor-pointer ">
        <img
          src={logo}
          alt="Logo"
          className="rounded-sm"
          style={{
            transform: "scale(1.5)",
          }}
        />
        <span className="font-semibold text-lg w-fit">adam</span>
      </div>
      {location.pathname === "/" ? (
        <div className="hidden md:flex gap-2 border border-offwhite  rounded-3xl  px-4 h-full ">
          <a
            href="#"
            className="hover:text-secondary transition-all"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, 0);
            }}
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-secondary transition-all"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, 1000);
            }}
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-secondary transition-all"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, 1700);
            }}
          >
            Technologies
          </a>
          <a
            href="#"
            className="hover:text-secondary transition-all"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, 2500);
            }}
          >
            Work
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="h-full flex gap-2 ">
        <div
          className=" border border-offwhite w-20 text-center rounded-2xl bg-purple-950 cursor-pointer  transition-all duration-300 flex justify-center items-center"
          style={{
            width: btnHovered ? "11rem" : "5rem",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setBtnHovered((prevHover) => !prevHover);
          }}
        >
          {btnHovered
            ? pickBtn(location.pathname, btnHovered)
            : ReturnName(location.pathname)}
        </div>

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
      {location.pathname === "/" ? (
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
            onClick={(e) => {
              e.preventDefault();
              setNavOpen((prevNav) => false);
              window.scrollTo(0, 0);
            }}
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-secondary transition-all border-b-2 border-offwhite mb-4 pb-4 w-full"
            onClick={(e) => {
              e.preventDefault();

              setNavOpen((prevNav) => false);
              window.scrollTo(0, 600);
            }}
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-secondary transition-all border-b-2 border-offwhite mb-4 pb-4 w-full"
            onClick={(e) => {
              e.preventDefault();
              setNavOpen((prevNav) => false);
              window.scrollTo(0, 1400);
            }}
          >
            Technologies
          </a>
          <a
            href="#"
            className="hover:text-secondary transition-all border-b-2 border-offwhite mb-4 pb-4 w-full"
            onClick={(e) => {
              e.preventDefault();
              setNavOpen((prevNav) => false);
              window.scrollTo(0, 2050);
            }}
          >
            Work
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Nav;
