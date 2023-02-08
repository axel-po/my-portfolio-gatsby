import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Header() {
  const titleRef = useRef(null);
  const txtRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .to(titleRef.current, {
        y: 0,
        autoAlpha: 1,
        delay: 0.4,
      })
      .to(txtRef.current, {
        y: 0,
        autoAlpha: 1,
      });
  }, []);

  return (
    <header className='flex h-screen flex-col items-center justify-center bg-black text-white '>
      <div className='mx-auto w-[90%]'>
        <h1
          ref={titleRef}
          className='invisible mx-auto max-w-[1100px] translate-y-full text-center text-4xl font-bold opacity-0  sm:text-5xl md:text-7xl'>
          <span className='bg-gradient'>Axel Pointud</span> Développeur web
          frontend React JS
        </h1>
        <p
          ref={txtRef}
          className='invisible mx-auto mt-6 max-w-[550px] translate-y-full text-center text-gray opacity-0 sm:mt-12 md:text-xl'>
          J'accompagne les particuliers, start-up, associations dans la création
          de leur site internet. 🚀
        </p>
      </div>
    </header>
  );
}
