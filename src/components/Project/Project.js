import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { Link } from "gatsby";

export default function Project({ image, title, description }) {
  const projectRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(projectRef.current, {
      y: 0,
      duration: 2,
      ease: "power4.out",
      autoAlpha: 1,
      scrollTrigger: {
        trigger: projectRef.current,
        // markers: true,
        start: "top-=100% center",
      },
    });
  }, []);

  return (
    <article
      ref={projectRef}
      className='invisible translate-y-full bg-white  p-5 opacity-0 md:p-8'>
      <img
        className='h-[50vw] w-full object-cover md:h-[350px]'
        src={image}
        alt={title}
      />
      <div className='my-6 flex gap-3'>
        <CategoryProject>Web App</CategoryProject>
      </div>
      <h3 className='text-3xl font-bold'>{title}</h3>
      <p className='mt-6 mb-12 text-sm md:text-base'>{description}</p>
      <Link
        to='/project'
        className='flex items-center gap-3 text-sm font-semibold uppercase md:text-lg'>
        <span>View Project</span>
        <img src='/icons/arrow-right-circle.svg' alt='arrow-right' />
      </Link>
    </article>
  );
}

export function CategoryProject({ children }) {
  return (
    <div className='rounded-full bg-[#EFEFEF] px-3 py-1 text-xs font-bold'>
      {children}
    </div>
  );
}
