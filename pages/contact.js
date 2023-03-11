import Layout from '../components/Layout';
import { SparklesIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion as m, AnimatePresence } from 'framer-motion';

function contact() {
  return (
    <Layout title="Contact">
      <AnimatePresence>
        <m.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: '20%', opacity: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          exit={{ opacity: 1 }}
          className=" flex flex-col items-center justify-center w-full space-y-10"
        >
          <div className="overflow-hidden">
            <m.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className=" font-semibold text-[5rem] max-sm:text-[3rem] flex flex-row gap-3 items-center justify-center"
            >
              Contact Me <SparklesIcon className="w-10 h-10 text-purple-500" />
            </m.h1>
          </div>
          <div className="text-center flex flex-col h-auto pb-10">
            <h1 className="text-[2em] max-sm:text-[20px]">
              Ready to start your next <b>web development</b> project? Let's
              <i> work together </i> to bring your vision to life.
              <div>
                <Link
                  href="mailto: tazkirfurqan@gmail.com"
                  className="flex flex-row items-center justify-center gap-2 decoration-wavy decoration-2 underline text-purple-500"
                >
                  tazkirfurqan@gmail.com{' '}
                  <ArrowUpRightIcon className="animate-bounce h-6 max-sm:h-4 w-6 max-sm:w-4 text-white" />
                </Link>
              </div>{' '}
              <p>Let's connect and make something great together.</p>
            </h1>
          </div>
        </m.div>
      </AnimatePresence>
    </Layout>
  );
}

export default contact;
