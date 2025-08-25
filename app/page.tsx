"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import * as image from "@/constants/images";
import Image from "next/image";
import FeaturedProjects from "@/components/FeaturedProjects";
import AllProjects from "@/components/AllProjects";
import Contact from "@/components/Contact";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
declare global {
  interface Window {
    VANTA: {
      DOTS?: (options: unknown) => unknown;
      [key: string]: unknown;
    };
  }
}
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<unknown>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);
  const aboutTitleRef = useRef<HTMLHeadingElement>(null);
  const aboutTextRefs = useRef<(HTMLParagraphElement | null)[]>([]);
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
      if (vantaEffect.current && typeof (vantaEffect.current as { destroy?: () => void }).destroy === "function") {
        (vantaEffect.current as { destroy: () => void }).destroy();
      }
      clearInterval(interval);
    };
  }, []);


  useEffect(() => {
    // Ensure elements exist
    if (!heroRef.current || !leftContentRef.current || !rightImageRef.current) return;

    // Set initial state (hidden)
    gsap.set([leftContentRef.current, rightImageRef.current], {
      y: 100,
      opacity: 0
    });

    // Create the animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate left content
    tl.to(leftContentRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2
    });

    // Animate right image with a slight delay
    tl.to(rightImageRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2
    }, "-=0.8"); // Starts 0.8s before the previous animation ends

    // Optional: Add a subtle scale effect to the image
    tl.fromTo(rightImageRef.current.querySelector('img'),
      { scale: 0.9 },
      { scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" },
      "-=0.5"
    );

    // Optional: Stagger animation for text elements
    const textElements = leftContentRef.current.querySelectorAll('h1, p, button');
    gsap.from(textElements, {
      y: 20,
      opacity: 0,
      stagger: 0.15,
      delay: 0.5,
      duration: 0.8,
      ease: "back.out(1.2)"
    });

  }, []);
  useEffect(() => {


    // Set initial state (hidden)
    gsap.set(
      [avatarRef.current, nameRef.current, socialIconsRef.current, aboutTitleRef.current, ...aboutTextRefs.current],
      { y: 50, opacity: 0 }
    );

    // Left column animations
    gsap.to(avatarRef.current, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: avatarRef.current,
        start: "top 80%",
      }
    });

    gsap.to(nameRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: nameRef.current,
        start: "top 80%",
      }
    });

    gsap.to(socialIconsRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: socialIconsRef.current,
        start: "top 80%",
      }
    });

    // Right column animations
    gsap.to(aboutTitleRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: aboutTitleRef.current,
        start: "top 80%",
      }
    });

    // Paragraph animations with stagger
    aboutTextRefs.current.forEach((textRef, index) => {
      if (!textRef) return;

      gsap.to(textRef, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: textRef,
          start: "top 90%",
        }
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
        <section ref={heroRef} className="min-h-screen flex items-center justify-center pt-20">
          <div className="w-full max-w-7xl px-4 text-white">
            <Navbar />
            <div className="flex flex-row justify-between items-center w-full">
              {/* Left Content */}
              <div ref={leftContentRef} className="md:text-left max-w-2xl text-center">
                <h1 className="text-accent text-lg">Software Engineer</h1>
                <h1 className="text-6xl font-bold">Marin Ivošević</h1>
                <p className="text-lg text-gray-300 mt-4">
                  Software developer passionate about building innovative solutions, exploring new technologies, and capturing life through photography and endurance sports.
                </p>
                <a href="#contact">
                  <button className="mt-8 px-6 py-2 bg-accent shadow-glow text-black rounded-full hover:bg-accent/80 transition-colors duration-300">
                    Contact Me
                  </button>
                </a>
              </div>

              {/* Right Image */}
              <div ref={rightImageRef} className="flex-shrink-0 hidden md:block">
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
        <section
          ref={aboutSectionRef}
          id="about"
          className="min-h-screen p-8 flex items-center bg-transparent"
        >
          <div className="max-w-7xl mx-auto text-white grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Column - Image and Social Icons */}
            <div className="flex flex-col items-center space-y-6">
              {/* Profile Image */}
              <div ref={avatarRef} className="relative">
                <Image
                  src={image.avatarImage}
                  alt="Marin Ivošević"
                  width={250}
                  height={250}
                  className="rounded-full border-6 border-accent shadow-glow"
                />
              </div>

              {/* Name */}
              <h2 ref={nameRef} className="text-3xl font-bold">Marin Ivošević</h2>

              {/* Social Icons */}
              <div className="flex space-x-4" ref={socialIconsRef}>
                <a
                  href="https://github.com/marinivosevic"
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
                  href="https://www.linkedin.com/in/marin-ivo%C5%A1evi%C4%87-634064269/"
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
                  href="mailto:marin.ivosevic91@gmail.com"
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
              <h2 ref={aboutTitleRef} className="text-4xl font-bold mb-8 text-accent">About Me</h2>
              <div className="space-y-4 text-lg">
                <p ref={el => { aboutTextRefs.current[0] = el }}>
                  I am Marin Ivošević, born in Rijeka, Croatia, and currently in my first year of Master&apos;s studies. I work at AITAC d.o.o., where I actively contribute to software development projects and continuously expand my technical skills. My passion lies in creating innovative software solutions, exploring a wide range of technologies, and gaining experience with new frameworks and development methodologies. I am highly motivated to learn, adapt, and tackle challenging problems, always striving to grow both personally and professionally.
                </p>
                <p ref={el => { aboutTextRefs.current[1] = el }}>
                  Beyond coding, I have a wide range of hobbies and interests that keep me balanced and inspired. I am an amateur photographer specializing in sports, equestrian, and landscape photography, capturing moments that combine motion, emotion, and natural beauty. I am also passionate about endurance sports such as running and cycling, pushing my limits while staying healthy and focused. These pursuits fuel my creativity, discipline, and attention to detail—qualities I bring to every project I work on.
                </p>

              </div>
            </div>
          </div>
        </section>


        <section id="projects">
          <FeaturedProjects />
        </section>
        <section id="allProjects">
          <AllProjects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}
