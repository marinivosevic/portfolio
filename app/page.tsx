"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import * as image from "@/constants/images";
import Image from "next/image";
import FeaturedProjects from "@/components/FeaturedProjects";
import AllProjects from "@/components/AllProjects";

export default function Home() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.VANTA?.DOTS && vantaRef.current) {
        if (!vantaEffect.current) {
          vantaEffect.current = window.VANTA.DOTS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x9fe6de,
            color2: 0x9fe6de,
            backgroundColor: 0x202733,
            size: 5.0,
            spacing: 68.0,
            showLines: false,
          });
          clearInterval(interval);
        }
      }
    }, 200);

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js"
        strategy="beforeInteractive"
      />

      {/* Fixed Background (covers entire viewport, stays in place) */}
      <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full -z-50" />

      {/* Scrollable Content (everything scrolls over the fixed background) */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20">
          <div className="w-full max-w-7xl px-4 text-white">
            <Navbar />
            <div className="flex flex-row justify-between items-center w-full">
              <div className="md:text-left max-w-2xl text-center">
                <h1 className="text-accent text-lg">Software Engineer</h1>
                <h1 className="text-6xl font-bold">Marin Ivošević</h1>
                <p className="text-lg text-gray-300 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
                <button className="mt-8 px-6 py-2 border-2 border-accent text-white rounded-full hover:bg-gray-700 transition-colors">
                  Contact Me
                </button>
              </div>
              <div className="flex-shrink-0 hidden md:block">
                <Image
                  src={image.heroImage}
                  alt="Marin Ivošević"
                  width={450}
                  height={450}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section (content scrolls over fixed background) */}
        <section className="min-h-screen p-8 flex items-center bg-transparent">
          <div className="max-w-7xl mx-auto text-white grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Column - Image and Social Icons */}
            <div className="flex flex-col items-center  space-y-6">
              {/* Profile Image */}
              <div className="relative">
                <Image
                  src={image.avatarImage}
                  alt="Marin Ivošević"
                  width={250}
                  height={250}
                  className="rounded-full border-4 border-accent"
                />
              </div>

              {/* Name */}
              <h2 className="text-3xl font-bold">Marin Ivošević</h2>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="mailto:your@email.com"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - About Me Text */}
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold mb-8 text-accent">About Me</h2>
              <div className="space-y-4 text-lg">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s.
                </p>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s.
                </p>
                <p>
                  With the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section>
          <FeaturedProjects />
        </section>
        <section>
          <AllProjects />
        </section>
      </div>
    </>
  );
}
