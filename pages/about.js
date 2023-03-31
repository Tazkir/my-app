import Image from 'next/image';
import Layout from '../components/Layout';
import about from '../public/about.jpg';
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
              className="w-24 h-24 object-cover md:w-[18em] md:h-[18em] md:mt-10 md:rounded-lg rounded-full mx-auto"
              src={about}
              alt="Tazkir Furqan Picture"
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
              Welcome to my portfolio website! My name is Tazkir Furqan, and I
              am a passionate and dedicated self-taught programmer. At 18 years
              old, I began my programming journey while studying for a diploma
              in computer science at the International Islamic College in
              Gombak. I started with structured programming using C++, but I
              quickly discovered my love for web development after learning
              HTML, CSS, and JavaScript.
            </p>
            <p className="text-md font-serif leading-relaxed">
              Since then, I have continued to grow my skills in web development
              and have become proficient in using React and Next.js. Despite the
              challenges posed by COVID-19 and financial difficulties, I remain
              determined to continue learning and problem-solving in
              programming. As an undergraduate diploma student, I have completed
              all subjects except for my internship due to the aforementioned
              challenges.
            </p>
            <p className="text-md font-serif leading-relaxed">
              However, I have honed my skills as a self-taught programmer and
              can learn any stack, including Java and object-oriented
              programming. On this website, you will find examples of{' '}
              <Link className="underline text-violet-500" href="/work">
                my work
              </Link>{' '}
              and the projects I have undertaken,{' '}
              <Link className="underline text-violet-500" href="/work">
                showcasing
              </Link>{' '}
              my ability to design and develop high-quality web applications. I
              am always eager to take on new challenges and projects and am open
              to collaboration opportunities. Thank you for visiting my website,
              and I look forward to connecting with you!
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
