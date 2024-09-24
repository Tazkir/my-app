"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Menu from "./Menu";
import Social from "./Social";
import Status from "./Status";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    window.addEventListener("scroll", navColor);
  }, []);

  return (
    <>
      <Head oncontextmenu="return false">
        <title>{title ? `${title} | Tazkir Furqan` : "Tazkir Furqan"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:title" content="Tazkir Furqan" key="title" />
        <meta
          property="description"
          content="Expert Next.js and React Developer in Nilai, Malaysia - Freelance Fullstack Developer Specializing in E-commerce, Landing Pages, and More"
          key="description"
        />
        <meta
          property="og:description"
          content="Top-rated Web Developer in Nilai, Malaysia - Next.js, React, and React Native Expert for Frontend and Backend Development, Including E-commerce and Landing Pages"
          key="og:description"
        />
        <meta
          name="google-site-verification"
          content="oCudJW5eYB2syqTjncL2wG5fzAR_7EC4ExL_o2wVQSU"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex flex-col min-h-screen">
        <header>
          <nav
            className={
              color
                ? "navbar flex h-14 items-center px-5 justify-between shadow-lg fixed top-0 left-0 right-0"
                : "flex  h-14 items-center px-5 justify-between shadow-lg fixed top-0 left-0 right-0"
            }
          >
            <Link href="/">Tazkir Furqan</Link>

            <Menu />
          </nav>
        </header>

        <main className="flex-grow flex-1 py-5 px-2">
          <Analytics />
          <SpeedInsights />
          {children}
        </main>

        <footer className="text-white flex max-sm:flex-col py-2 px-5 h-14 items-center justify-evenly shadow-inner">
          <Social />
          <Status />
        </footer>
      </main>
    </>
  );
}

export default Layout;
