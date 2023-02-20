import { motion as m, AnimatePresence } from 'framer-motion';

function Hero() {
  return (
    <>
      <AnimatePresence>
        <div class="scale-100 transition ease-in-out delay-[0.03s]">
          <div className="absolute flex left-1/4 gap-20 max-md:top-14 max-sm:left-10">
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="animate-float-fast"
            >
              <div className="inset-none h-60 w-60 max-md:h-32 max-md:w-32 scale-50 rounded-full bg-gradient-to-br from-red-300 via-pink-300 to-orange-100"></div>
            </m.div>

            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="animate-float-fastest"
            >
              <div className="max-[445px]:hidden inset-none h-60 w-60 max-md:h-32 max-md:w-32 scale-50 rounded-full bg-gradient-to-br from-red-300 via-pink-400 to-purple-200"></div>
            </m.div>
          </div>
        </div>
        <div class="mask flex flex-col place-content-center p-10 h-64 w-full rounded-3xl bg-[#262f70]/20 backdrop-blur-2xl after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-br after:from-white/80 after:via-white/10 after:to-white/80 after:p-px">
          <m.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: '20%', opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            exit={{ opacity: 1 }}
            className="text-center"
          >
            <div className="overflow-hidden ">
              <m.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-white text-[2em] max-sm:text-[25px] font-medium"
              >
                Nextjs & React Developer
              </m.h1>
            </div>
            <p className="pt-3 text-[18px] max-sm:text-[15px]">
              Hello, I'm Tazkir Furqan, a 22-year-old web developer who uses
              Nextjs & React.
            </p>
          </m.div>
        </div>
      </AnimatePresence>
    </>
  );
}

export default Hero;
