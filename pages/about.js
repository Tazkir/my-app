import Image from 'next/image';
import Layout from '../components/Layout';
import about from '../public/about.png';
import Link from 'next/link';
import { motion as m, AnimatePresence } from 'framer-motion';
import Skill from '../components/about/Skill';

function About() {
  return (
    <Layout title="About">
      <AnimatePresence>
        <figure className="md:flex rounded-xl mt-10 p-8 md:p-0 overflow-hidden">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            exit={{ opacity: 1 }}
            className="w-full md:w-[100em] "
          >
            <Image
              className="w-24 h-24 object-cover md:w-[18em] md:h-[18em] md:mt-10 md:rounded-lg rounded-full mx-auto bg-violet-500 border-2 border-white"
              src={about}
              alt="Tazkir Furqan's Picture"
              loading="lazy"
            />
          </m.div>
          <m.div
            initial={{ y: '10%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            exit={{ opacity: 1 }}
            className="pt-6 md:p-8 text-center md:text-left space-y-4 "
          >
            <div className="overflow-hidden">
              <m.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-white text-[20px]"
              >
                Recently About Me
              </m.h1>
            </div>
            <p className="text-md font-serif leading-relaxed indent-8 max-md:indent-0">
              Hey there, reader! Welcome to the exciting world of Tazkir Furqan,
              a self-taught programming wizard. This coding prodigy started his
              journey at just 18 years old while studying for a diploma in
              computer science, and he quickly discovered his love for web
              development after mastering HTML, CSS, and JavaScript.
            </p>
            <p className="text-md font-serif leading-relaxed">
              Even amidst the challenges of COVID-19 and financial difficulties,
              Tazkir remains determined to continue learning and problem-solving
              in the world of programming. He's a whiz with React and Next.js
              and has even tackled the intimidating world of Java and
              object-oriented programming.
            </p>
            <p className="text-md font-serif leading-relaxed">
              On this website, you'll get a glimpse into{' '}
              <Link
                className="underline text-violet-500 hover:text-violet-600"
                href="/work"
              >
                Tazkir's work{' '}
              </Link>
              and the impressive projects he's taken on,{' '}
              <Link
                className="underline text-violet-500 hover:text-violet-600"
                href="/work"
              >
                showcasing{' '}
              </Link>
              his ability to design and develop high-quality web applications.
              He's always up for a new challenge and loves collaborating with
              others, so don't be shy! Thanks for stopping by, and let's see
              what exciting programming adventures Tazkir has in{' '}
              <Link
                className="underline text-violet-500 hover:text-violet-600"
                href="/work"
              >
                store{' '}
              </Link>
              for us!{' '}
            </p>

            <figcaption class="font-medium ">
              <div className="text-violet-600">Tazkir Furqan</div>
              <div className="text-slate-700">Web Dev</div>
            </figcaption>
          </m.div>
        </figure>
        {/* <Skill /> */}
      </AnimatePresence>
    </Layout>
  );
}

export default About;
