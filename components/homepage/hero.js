import { motion as m, AnimatePresence } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Skill from './Skill';
import RingSpinningText from './RingSpinningText';

function Hero() {
  return (
    <AnimatePresence>
      <div className="pt-[50px] max-md:pt-[20px]">
        <m.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: '20%', opacity: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          exit={{ opacity: 1 }}
          className="text-center space-y-5"
        >
          <div className="overflow-hidden">
            <m.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-white text-[4em] max-sm:text-[2em] font-sans"
            >
              <p className="font-semibold animate-text bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-red-500 to-pink-500">
                NextJS Ninja
              </p>{' '}
              Crafting Elegant Full-Stack Solutions
            </m.h1>
          </div>

          <p className="text-[18px] max-sm:text-[15px] font-sans">
            Welcome to my portfolio! I'm a web developer, specializing in
            crafting beautiful and responsive websites that deliver a seamless
            user experience.
          </p>

          <div className="text-white flex flex-row gap-10 max-sm:gap-7 items-center justify-center pt-5 font-semibold">
            <Link href="/contact">
              <div className="animate-[btnpulse_2s_infinite] flex flex-row items-center justify-center cursor-pointer gap-2 active:bg-violet-900 hover:bg-violet-700 bg-violet-500 h-[3em] w-[8em] max-sm:text-sm max-sm:h-[3em] max-sm:w-[8em] rounded-full">
                <h1>Reach Me</h1> <ArrowUpRightIcon className="h-4 w-4" />
              </div>
            </Link>
            <Link href="/work">
              <div className="flex flex-row items-center justify-center cursor-pointer gap-2 border active:bg-violet-700 hover:bg-white hover:text-black h-[3em] w-[8em] max-sm:text-sm max-sm:h-[3em] max-sm:w-[8em] hover:border-none rounded-full">
                <h1>My Work</h1>{' '}
                <ArrowUpRightIcon className="animate-pulse h-4 w-4" />
              </div>
            </Link>
          </div>
        </m.div>
      </div>
      {/* <section className="bottom-[20rem]">
        <h1 class="ring__s">
          <RingSpinningText />
        </h1>
      </section> */}
      <Skill />
    </AnimatePresence>
  );
}

export default Hero;
