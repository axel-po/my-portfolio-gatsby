import React from "react";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

export default function Services() {
  const titleRef = useRef(null);
  const txtRef = useRef(null);
  const divRef = useRef(null);

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
      y: 0,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: txtRef.current,
        // markers: true,
        start: "top-=300 center",
      },
    });
    gsap.to(divRef.current, {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: divRef.current,
        // markers: true,
        start: "top center",
      },
    });
  }, []);

  return (
    <section id='services' className='flex bg-black py-28 text-white md:py-40'>
      <div className='container grid grid-cols-1 gap-11 md:grid-cols-2'>
        <div>
          <h2
            ref={titleRef}
            className='invisible translate-y-full text-5xl font-bold opacity-0 md:text-6xl'>
            Look at my <span className='bg-gradient'>services</span>
          </h2>
          <p
            ref={txtRef}
            className='invisible mt-12 max-w-[352px] translate-y-full text-gray opacity-0'>
            J'offre des services complets allant de la conception à la mise en
            production pour des applications web modernes et performantes,
            notamment des landing pages sur mesure pour des campagnes de
            marketing efficaces.
          </p>
        </div>

        <div
          ref={divRef}
          className='gradient-2 invisible flex w-full flex-col gap-6 p-4  text-black opacity-0 md:p-6'>
          <ServiceCard
            title="Création d'application web"
            text='Avec les derniers outils : React JS, Next JS, Typescript'
          />
          <ServiceCard
            title='Intégration de maquettes graphiques'
            text='Au pixels près avec HTML, SCSS, JS'
          />
          <ServiceCard title='Landing page perfomantes' text='Avec Gatsby JS' />
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ title, text }) {
  const serviceCardRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(serviceCardRef.current, {
      autoAlpha: 1,
      y: 0,
      scrollTrigger: {
        trigger: serviceCardRef.current,
        // markers: true,
        start: "top-=200% center",
      },
    });
  }, []);
  return (
    <div
      ref={serviceCardRef}
      className='invisible flex translate-y-full bg-white p-5 opacity-0'>
      <div className='flex flex-col'>
        <h3 className='text-lg font-bold'>{title}</h3>
        <p className='mt-4 text-sm'>{text}</p>
      </div>
    </div>
  );
}
