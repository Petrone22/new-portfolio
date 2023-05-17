import React, { useState } from "react";
import BallCanvas from "./BallCanvas";
const BallComponent = ({ icon, name }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-14 h-14  md:w-20 md:h-20 relative "
      onMouseEnter={() => {
        setHovered((prevHovered) => true);
      }}
      onMouseLeave={() => {
        setHovered((prevHovered) => false);
      }}
    >
      <div
        className="bg-blue-700 rounded-lg absolute -top-10  w-full h-8 flex items-center justify-center transition-all duration-300 font-semibold"
        style={{
          opacity: hovered ? "1" : "0",
        }}
      >
        <span>{name}</span>
      </div>
      <BallCanvas icon={icon} />
    </div>
  );
};

export default BallComponent;
