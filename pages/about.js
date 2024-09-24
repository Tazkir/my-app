import Image from "next/image";
import Layout from "../components/Layout";
import about from "../public/about.png";
import { motion as m, AnimatePresence } from "framer-motion";
import Skill from "../components/about/Skill";
import Desc from "../components/about/Desc";
import ExpTree from "../components/about/ExpTree";

function About() {
  return (
    <Layout title="About">
      <AnimatePresence>
        <figure className="md:flex mt-10 p-2 md:p-0 overflow-hidden">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className="w-full md:w-[100em] flex justify-center "
          >
            {/* <div className="absolute max-md:w-24 max-md:h-w-24 w-96 h-96 -z-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#8A3FFC"
                  d="M42.8,-21.9C55.8,-2.2,66.8,21.4,59.4,39.1C51.9,56.9,26,68.8,1.3,68.1C-23.4,67.4,-46.7,53.9,-56.6,34.8C-66.4,15.6,-62.7,-9.2,-51,-28.2C-39.4,-47.2,-19.7,-60.3,-2.4,-58.9C14.9,-57.5,29.8,-41.7,42.8,-21.9Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div> */}
            <Image
              className="w-24 h-24 object-cover md:w-[18em] md:h-[18em] md:mt-10 md:rounded-lg rounded-full mx-auto border-2 border-zinc-700 overflow-hidden"
              src={about}
              alt="Tazkir Furqan's Picture"
              loading="lazy"
            />
          </m.div>

          <Desc />
        </figure>
      </AnimatePresence>

      <ExpTree />
      <Skill />
    </Layout>
  );
}

export default About;
