"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Menu from "./Menu";
import Social from "./Social";
import Status from "./Status";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Review from "./homepage/Review";

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
      <Head>
        <title>{title ? `${title} | Tazkir Furqan` : "Tazkir Furqan"}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* SEO Meta Tags */}
        <meta
          name="description"
          content={
            title
              ? `${title} - Expert Web, Website, Next.js and React Developer in Nilai, Malaysia. Specializing in E-commerce, Landing Pages, and Web Applications.`
              : "Expert Web, Website, Next.js and React Developer in Nilai, Malaysia - Freelance Fullstack Developer Specializing in E-commerce, Landing Pages, and More"
          }
        />

        {/* Open Graph Meta Tags (for Social Media Sharing) */}
        <meta
          property="og:title"
          content={title ? `${title} | Tazkir Furqan` : "Tazkir Furqan"}
        />
        <meta
          property="og:description"
          content="Top-rated Web Developer in Nilai, Malaysia - Web, Website, Next.js, React Developer, React Native Expert for Frontend and Backend Development, Including E-commerce and Landing Pages."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tazkir-furqan.vercel.app" />
        <meta
          property="og:image"
          content="https://tazkir-furqan.vercel.app/og-image.jpg"
        />

        {/* Google Verification */}
        <meta
          name="google-site-verification"
          content="oCudJW5eYB2syqTjncL2wG5fzAR_7EC4ExL_o2wVQSU"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex flex-col min-h-screen overflow-hidden">
        {/* <div className="fixed bottom-4 -left-56 hover:-left-12 transition-all z-50 ">
          <Review />
        </div> */}

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
