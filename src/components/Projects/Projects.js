import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import Project from "../Project/Project";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Projects() {
  /* Animations */
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

  // Get data
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                featuredImage {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                slug
                title
              }
            }
          }
        }
      }
    `
  );

  // console.log("d", data);
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
          Voici mes réalisations en tant que développeur web, avec une variété
          de projets allant d'applications web complexes, à simple landing page.
        </p>

        <div className='projects grid grid-cols-1 gap-12 lg:grid-cols-2'>
          {data.allMarkdownRemark.edges.map((projectData) => (
            <Project projectData={projectData} />
          ))}
        </div>
      </div>
    </section>
  );
}
