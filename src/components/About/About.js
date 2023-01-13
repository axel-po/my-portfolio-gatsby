import React from "react";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

export default function About() {
  const titleRef = useRef(null);
  const txtRef1 = useRef(null);
  const txtRef2 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(titleRef.current, {
      y: 0,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        // markers: true,
        start: "top-=130% center",
      },
    });

    gsap.to(txtRef1.current, {
      y: 0,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: txtRef1.current,
        // markers: true,
        start: "top-=130% center",
      },
    });

    gsap.to(txtRef2.current, {
      y: 0,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: txtRef2.current,
        // markers: true,
        start: "top-=130% center",
      },
    });
  }, []);

  return (
    <section id='about' className='  bg-white py-28  md:py-40'>
      <div className='container grid grid-cols-1 gap-12 md:grid-cols-3'>
        <h1
          ref={titleRef}
          className='invisible translate-y-full text-5xl font-bold uppercase opacity-0 md:text-6xl'>
          About <br />
          me
        </h1>

        <p
          ref={txtRef1}
          className='invisible translate-y-full  text-base opacity-0 md:text-lg'>
          Bonjour, je suis un développeur web frontend spécialisé sur les
          technologies JavaScript (React JS, Next JS, Typescript, ...), grâce à
          cela, je réalise des applications web performantes.
        </p>

        <p
          ref={txtRef2}
          className=' invisible translate-y-full text-base opacity-0 md:text-lg'>
          J'accompagne les particuliers, start-up, associations dans la création
          de leur site internet. 🚀 J'ai commencé à apprendre le développement
          web en autodidacte et je suis devenu un réel passionné qui continue à
          apprendre de nouvelles choses chaque jour. 📈
        </p>
      </div>
    </section>
  );
}
