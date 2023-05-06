import Image from 'next/image';
import Link from 'next/link';
import { motion as m, AnimatePresence } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import StackList from './stackList';

function ShowcaseList({ data }) {
  return (
    <AnimatePresence>
      {data.shows.map((show) => (
        <m.div
          key={show.id}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: '20%', opacity: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          exit={{ opacity: 1 }}
          className="flex flex-row w-auto place-content-evenly max-sm:text-[12px] text-white space-x-5 max-sm:space-x-0 mb-5 gap-5 p-5 shadow-sm border-b"
        >
          <div className="flex justify-center items-center">
            <h1>[{show.id}]</h1>
          </div>

          <Link target="_blank" href={show.link}>
            <m.div whileHover={{ scale: 1.1 }}>
              <Image
                src={show.image}
                alt={show.name}
                className="rounded-md"
                height={100}
                width={100}
                loading="lazy"
              />
            </m.div>
          </Link>

          <Link target="_blank" href={show.link}>
            <div className="flex flex-col text-center">
              <h1>Project</h1>
              <p className="flex flex-row gap-1 items-center">
                {show.name}
                <ArrowUpRightIcon className="h-3.5 w-3.5 max-sm:hidden" />
              </p>
            </div>
          </Link>

          <div className="flex flex-col place-items-center text-center gap-2">
            <h1>Tech Stack</h1>
            <div className="flex justify-center items-center">
              <StackList show={show} />
            </div>
          </div>
        </m.div>
      ))}
    </AnimatePresence>
  );
}

export default ShowcaseList;
