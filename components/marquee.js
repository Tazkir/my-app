"use client";

import { skills } from "../utils/data";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-block"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            duration: 80,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        <div className="inline-flex">
          {skills.map((text) => (
            <span className="mx-3 skill" key={text}>
              {text}
            </span>
          ))}
        </div>
        <div className="inline-flex">
          {skills.map((text) => (
            <span className="mx-3 skill" key={`${text}-copy`}>
              {text}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Marquee;
