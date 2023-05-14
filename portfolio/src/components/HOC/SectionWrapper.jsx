import React from "react";
import { motion } from "framer-motion";

const SectionWrapper = (component, id) => {
  function HOC() {
    return (
      <motion.section>
        <component />
      </motion.section>
    );
  }
};

export default SectionWrapper;
