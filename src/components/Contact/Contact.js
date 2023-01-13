import React from "react";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

export default function Contact() {
  const titleRef = useRef(null);
  const txtRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(titleRef.current, {
      autoAlpha: 1,
      y: 0,
      scrollTrigger: {
        trigger: titleRef.current,
        // markers: true,
        start: "top-=300 center",
      },
    });

    gsap.to(txtRef.current, {
      autoAlpha: 1,
      y: 0,
      scrollTrigger: {
        trigger: txtRef.current,
        // markers: true,
        start: "top-=300 center",
      },
    });
  }, []);

  return (
    <section
      id='contact'
      className='border-b border-[#242424] bg-black py-28 text-white md:py-40'>
      <div className='container text-center'>
        <h2
          ref={titleRef}
          className='invisible translate-y-full text-5xl font-bold opacity-0 md:text-6xl'>
          Des projets en tête ?{" "}
          <span className='bg-gradient'>Travaillons ensemble</span>
        </h2>

        <p
          ref={txtRef}
          className='invisible mx-auto mt-6 max-w-[550px] translate-y-full text-center text-gray opacity-0 sm:mt-12 md:text-xl'>
          J'accompagne les particuliers, start-up, associations dans la création
          de leur site internet. 🚀
        </p>
      </div>
    </section>
  );
}
