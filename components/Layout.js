import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Menu from './Menu';

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
                ? 'navbar flex h-12 items-center px-12 justify-between shadow-md fixed top-0 left-0 right-0'
                : 'flex bg-[#16161a] h-12 items-center px-12 justify-between shadow-md fixed top-0 left-0 right-0'
            }
          >
            <Link href="/">Tazkir Furqan</Link>
            <Menu />
          </nav>
        </header>
        <main className="container m-auto mt-14 px-4">{children}</main>
        <footer className="text-white flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2023</p>
        </footer>
      </div>
    </>
  );
}

export default Layout;
