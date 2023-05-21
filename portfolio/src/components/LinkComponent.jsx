import React, { useState } from "react";

const LinkComponent = ({ img, text }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="w-28 h-28 relative"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setClicked((prevClick) => true);
      }}
      onMouseEnter={() => {
        setHovered((prevHover) => true);
      }}
      onMouseLeave={() => {
        setHovered((prevHover) => false);
        setClicked((prevClick) => false);
      }}
    >
      <img src={img} alt="background" className="w-full h-full" />
      <div
        className="bg-blue-700 rounded-lg absolute -bottom-12 text-center  w-fit px-4 py-1 h-fit  transition-all duration-300 font-semibold text-textClr"
        style={{
          opacity: hovered ? "1" : "0",
        }}
      >
        <span className="text-center">{clicked ? "Copied!" : text}</span>
      </div>
    </div>
  );
};

export default LinkComponent;
