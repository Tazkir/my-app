import { motion as m, AnimatePresence } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Skill from './Skill';

function Hero() {
  return (
    <AnimatePresence>
      <div class="pt-[50px]">
        <m.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: '20%', opacity: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          exit={{ opacity: 1 }}
          className="text-center space-y-5"
        >
          <div className="overflow-hidden ">
            <m.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-white text-[3em] max-sm:text-[2em] font-medium"
            >
              <h1 className="text-violet-500">NextJS Ninja</h1> Crafting Elegant
              Full-Stack Solutions
            </m.h1>
          </div>

          <p className="text-[18px] max-sm:text-[15px]">
            Welcome to my portfolio! I'm a web developer, specializing in
            crafting beautiful and responsive websites that deliver a seamless
            user experience.
          </p>
          <div className="text-white flex flex-row gap-5 items-center justify-center pt-5">
            <Link href="/contact">
              <div className="animate-[btnpulse_2s_infinite] flex flex-row items-center justify-center cursor-pointer gap-2 active:bg-violet-700 hover:bg-violet-600 bg-violet-500 h-[3em] w-[8em] rounded-full">
                <h1>Reach Me</h1> <ArrowUpRightIcon className="h-4 w-4" />
              </div>
            </Link>
            <Link href="/work">
              <div className="flex flex-row items-center justify-center cursor-pointer gap-2 border active:bg-violet-700 hover:bg-white hover:text-black h-[3em] w-[8em] rounded-full">
                <h1>My Work</h1>{' '}
                <ArrowUpRightIcon className="animate-pulse h-4 w-4" />
              </div>
            </Link>
          </div>
        </m.div>
      </div>
      <Skill />
    </AnimatePresence>
  );
}

export default Hero;
