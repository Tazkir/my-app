import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Menu from './Menu';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid';
// import baffle from 'baffle';

function Layout({ title, children }) {
  const [color, setColor] = useState(false);

  const navColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', navColor);
  }, []);

  // useEffect(() => {
  //   const target = baffle('.logo');
  //   target.set({
  //     characters: 'abcdehijklmqrstuvwxyz',
  //     speed: 50,
  //   });
  //   target.start();
  //   target.reveal(1000, 1000);
  // }, []);

  return (
    <>
      <Head>
        <title>{title ? title + ' | Tazkir Furqan' : 'Tazkir Furqan'}</title>
        <meta
          name="description"
          content="Malaysian React and Nextjs Develepor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav
            className={
              color
                ? 'navbar flex h-12 items-center px-5 justify-between shadow-md fixed top-0 left-0 right-0'
                : 'flex bg-[#16161a] h-12 items-center px-5 justify-between shadow-md fixed top-0 left-0 right-0'
            }
          >
            <Link className="logo" href="/">
              Tazkir Furqan
            </Link>

            <Menu />
          </nav>
        </header>

        <main className="container m-auto mt-14 px-4">
          <div className="text-yellow-400 w-full animate-pulse flex flex-row max-sm:flex-col items-center justify-center gap-2">
            <h1>Under Construction</h1>{' '}
            <WrenchScrewdriverIcon className="h-4 w-4 text-red-500" />
          </div>
          {children}
        </main>

        <footer className="text-white flex h-14 justify-center items-center shadow-inner">
          <span>Copyright © 2023</span>
        </footer>
      </div>
    </>
  );
}

export default Layout;
