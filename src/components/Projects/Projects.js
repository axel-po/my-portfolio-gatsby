import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import Project from "../Project/Project";
import { graphql, useStaticQuery } from "gatsby";

export default function Projects() {
  /* Get Data with MD */
  const data = useStaticQuery(graphql`
    query ProjectsData {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            stack
            title
          }
          id
        }
      }
    }
  `);

  const projectsData = data.allMarkdownRemark.nodes;

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
          {/* <Project
            image='/mockup-deliveroo.jpg'
            title='Clone de Deliveroo'
            description="Le but de ce projet était de reproduire l'interface du site aux pixels près, ajouter un système de panier, ajouter un système d'authentification à l'aide de NodeJS."
          />
          <Project
            image='/mockup-netflix-clone.jpg'
            title='Clone de Netflix'
            description='Clone de Netflix avec React JS, utilisation d APIs, authentifiaction JWT, react-router, react-query , ...'
          />

          <Project
            image='/twitter-mockup.jpg'
            title='Clone de Twitter'
            description="Ce projet a été réalisé lors du bootcamp React JS crée par Mike Codeur. En équipe de 4 personnes, nous avons décidé de reproduire l'application Twitter à l'aide de React pour le front et de Firebase pour le back."
          /> */}
          <>
            {projectsData.map((projectData) => (
              <Project key={projectData.id} projectData={projectData} />
            ))}
          </>
        </div>
      </div>
    </section>
  );
}
