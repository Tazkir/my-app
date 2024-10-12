import { motion as m, AnimatePresence } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Marquee from "../marquee";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: "20%",
      transition: {
        duration: 0.75,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const titleVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { delay: 0.5, duration: 0.5, type: "spring", stiffness: 120 },
    },
  };

  return (
    <AnimatePresence>
      <m.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-center space-y-5"
      >
        <div className="overflow-hidden">
          <m.h1
            variants={titleVariants}
            className="text-white text-[4em] max-sm:text-[2em] font-sans"
          >
            <m.p
              variants={childVariants}
              className="font-semibold animate-text bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-red-500 to-pink-500"
            >
              NextJS Ninja
            </m.p>
            <m.span variants={childVariants}>
              Crafting Elegant Full-Stack Solutions
            </m.span>
          </m.h1>
        </div>

        <m.p
          variants={childVariants}
          className="text-[18px] max-sm:text-[15px] font-sans"
        >
          Welcome to my portfolio! I'm a web developer, specializing in crafting
          beautiful and responsive websites that deliver a seamless user
          experience.{" "}
          <Link className="text-slate-200 underline" href="/about">
            more about me.
          </Link>
        </m.p>

        <m.div
          variants={childVariants}
          className="text-white flex flex-row gap-10 max-sm:gap-7 items-center justify-center pt-5 font-semibold max-sm:pb-2 pb-10"
        >
          <Link href="/contact">
            <m.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="animate-[btnpulse_2s_infinite] flex flex-row items-center justify-center cursor-pointer gap-2 active:bg-violet-900 hover:bg-violet-500 bg-violet-600 h-[3em] w-[8em] max-sm:text-sm max-sm:h-[3em] max-sm:w-[8em] rounded-full"
            >
              <h1>Reach Me</h1> <ArrowUpRightIcon className="h-4 w-4" />
            </m.div>
          </Link>
          <Link href="/work">
            <m.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-row items-center justify-center cursor-pointer gap-2 border-2 active:bg-violet-700 hover:bg-white hover:text-black h-[3em] w-[8em] max-sm:text-sm max-sm:h-[3em] max-sm:w-[8em] hover:border-none rounded-full"
            >
              <h1>My Work</h1>{" "}
              <ArrowUpRightIcon className="animate-pulse h-4 w-4" />
            </m.div>
          </Link>
        </m.div>
        <m.div variants={childVariants}>
          <Marquee />
        </m.div>
      </m.div>
    </AnimatePresence>
  );
}

export default Hero;
