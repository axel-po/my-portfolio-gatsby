import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Project({ projectData }) {
  const { title, slug } = projectData.node.frontmatter;

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
    <Link
      ref={projectRef}
      className='invisible translate-y-full bg-white  p-5 opacity-0 md:p-8 '
      to={`/projects/${projectData.slug}`}>
      <article>
        <GatsbyImage
          image={
            projectData.node.frontmatter.featuredImage.childImageSharp
              .gatsbyImageData
          }
        />
        <div className='my-6 flex gap-3'>
          <CategoryProject>Web App</CategoryProject>
        </div>
        <h3 className='text-3xl font-bold'>{title}</h3>
        <p className='my-6 text-sm md:text-base'>{slug}</p>
        <Link
          to={`project/${slug}`}
          className='flex items-center gap-3 text-sm font-semibold uppercase md:text-lg'>
          <span>View Project</span>
          <img src='/icons/arrow-right-circle.svg' alt='arrow-right' />
        </Link>
      </article>
    </Link>
  );
}

export function CategoryProject({ children }) {
  return (
    <div className='inline-block rounded-full bg-[#EFEFEF] px-3 py-1 text-xs font-bold'>
      {children}
    </div>
  );
}
