'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Menu from './Menu';
import Social from './Social';

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

  return (
    <>
      <Head oncontextmenu="return false">
        <title>{title ? `${title} | Tazkir Furqan` : 'Tazkir Furqan'}</title>
        <meta
          name="description"
          content="Expert Next.js and React Developer in Nilai, Malaysia - Freelance Fullstack Developer Specializing in E-commerce, Landing Pages, and More"
        />
        <meta
          name="description"
          content="Top-rated Web Developer in Nilai, Malaysia - Next.js, React, and React Native Expert for Frontend and Backend Development, Including E-commerce and Landing Pages"
        />
        <meta
          name="description"
          content="Professional Next.js Developer in Nilai, Malaysia - Delivering High-quality Web and Mobile Solutions with React Native, E-commerce and Fullstack Expertise"
        />
        <meta name="description" content="Tazkir Furqan" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav
            className={
              color
                ? 'navbar flex h-14 items-center px-5 justify-between shadow-lg fixed top-0 left-0 right-0'
                : 'flex  h-14 items-center px-5 justify-between shadow-lg fixed top-0 left-0 right-0'
            }
          >
            <Link href="/">Tazkir Furqan</Link>

            <Menu />
          </nav>
        </header>

        <main className="container m-auto mt-14 px-4">{children}</main>

        <footer className="text-white flex max-sm:flex-col p-5 h-14 items-center place-content-evenly shadow-inner">
          <Social />
          <span>Copyright © 2023</span>
        </footer>
      </div>
    </>
  );
}

export default Layout;
