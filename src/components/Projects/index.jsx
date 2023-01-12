import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

import Project from "../Project";

export default function Projects() {
  const titleRef = useRef(null);
  const txtRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(titleRef.current, {
      y: 0,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        // markers: true,
        start: "top-=300 center",
      },
    });

    gsap.to(txtRef.current, {
      y: 0,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: txtRef.current,
        // markers: true,
        start: "top-=300 center",
      },
    });
  }, []);

  return (
    <section id='projects' className='bg-[#F2F2F2]  py-28 md:py-40'>
      <div className='container'>
        <h2
          ref={titleRef}
          className='invisible translate-y-full text-5xl font-bold opacity-0 md:text-6xl'>
          Selected <span className='bg-gradient'>Projects</span>
        </h2>
        <p
          ref={txtRef}
          className='invisible mt-6 mb-12 max-w-[525px] translate-y-full opacity-0 md:text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          expedita a. Earum adipisci.
        </p>

        <div className='projects grid grid-cols-1 gap-12 lg:grid-cols-2'>
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </section>
  );
}
