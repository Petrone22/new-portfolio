import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import data from "./projects.json";
import enigma from "../assets/enigma.png";
import form from "../assets/form.png";
import oldportfolio from "../assets/portfolio.png";
import musika from "../assets/musika.png";
import space from "../assets/space.png";
const Projects = () => {
  console.log(data);
  return (
    <motion.div
      className=" mt-16 md:mt-56 md:mb-60% h-screen w-full lg:max-w-7xl flex flex-col md:flex-row gap-8 flex-wrap items-center justify-center text-textClr md:mb-20"
      transition={{ duration: 0.5 }}
    >
      <Card
        img={space}
        title={data[0].title}
        description={data[0].description}
        gh={data[0].linkgh}
        pages={data[0].linkwebsite}
      />
      <Card
        img={musika}
        title={data[1].title}
        description={data[1].description}
        gh={data[1].linkgh}
        pages={data[1].linkwebsite}
      />
      <Card
        img={oldportfolio}
        title={data[2].title}
        description={data[2].description}
        gh={data[2].linkgh}
        pages={data[2].linkwebsite}
      />
      <Card
        img={form}
        title={data[3].title}
        description={data[3].description}
        gh={data[3].linkgh}
        pages={data[3].linkwebsite}
      />
      <Card
        img={enigma}
        title={data[4].title}
        description={data[4].description}
        gh={data[4].linkgh}
        pages={data[4].linkwebsite}
      />
    </motion.div>
  );
};

export default Projects;
