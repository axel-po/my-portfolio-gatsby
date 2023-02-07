import React from "react";
import Layout from "../../components/Layout/Layout";
import { CategoryProject } from "../../components/Project/Project";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function ProjectDetails({ data }) {
  console.log("data", data);
  const { title } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <header className=' bg-black py-[90px] md:py-[120px]'>
        <div className='container'>
          <Link to='/#projects' className='mb-6 block text-lg text-white'>
            Retour
          </Link>
          <CategoryProject>Web App</CategoryProject>
          <h2 className='my-5 text-5xl font-bold text-white md:text-6xl'>
            {title}
          </h2>

          {/* <StaticImage
            className='mt-12 max-h-[670px] w-full object-cover object-center md:mt-[78px]'
            src={thumb}
            alt=''
          /> */}
          {/* <img
            className='mt-12 max-h-[670px] w-full object-cover object-center md:mt-[78px]'
            src='/twitter-mockup.jpg'
            alt=''
          /> */}
          <GatsbyImage
            image={
              data.markdownRemark.frontmatter.featuredImage.childImageSharp
                .gatsbyImageData
            }
          />
        </div>
      </header>

      <main className='container mt-12'>
        <div className='my-12 flex flex-col items-baseline justify-around gap-9 md:flex-row md:gap-12'>
          <CardDetailsLayout title='technologie'>
            <div className='flex flex-wrap justify-between gap-8'>
              <div>
                <p className='mb-2 font-bold'>Frontend</p>
                <ul className='flex gap-2'>
                  <IconSkill src='/icons-skills/css.svg' name='css' />
                  <IconSkill src='/icons-skills/react.svg' name='css' />
                  <IconSkill src='/icons-skills/html.svg' name='css' />
                  <IconSkill src='/icons-skills/scss.svg' name='css' />
                </ul>
              </div>

              <div>
                <p className='mb-2 font-bold'>Backend </p>
                <ul className='flex gap-2'>
                  <IconSkill src='/icons-skills/css.svg' name='css' />
                  <IconSkill src='/icons-skills/react.svg' name='css' />
                  <IconSkill src='/icons-skills/html.svg' name='css' />
                  <IconSkill src='/icons-skills/scss.svg' name='css' />
                </ul>
              </div>
            </div>
          </CardDetailsLayout>

          <CardDetailsLayout title='Demo & Code'>
            <a href='#' className='mb-4 block underline'>
              axel-pointud.fr
            </a>

            <a href='#' className='underline'>
              https://git-hub/fr
            </a>
          </CardDetailsLayout>
        </div>

        <section className='mt-24 md:mb-12'>
          <h3 className='mb-12 text-3xl font-bold md:text-5xl'>
            Description du projet
          </h3>
          {/* <p className='md:text-lg'>{description}</p> */}

          {/* <div
            className='text-red-600'
            dangerouslySetInnerHTML={{ __html: html }}></div> */}
        </section>

        <section className='my-12'>
          <h2 className='text-center text-3xl font-bold  md:text-5xl'>
            See more <span className='bg-gradient'>Projects</span>
          </h2>
        </section>
      </main>
    </Layout>
  );
}

export const CardDetailsLayout = ({ title, children }) => {
  return (
    <div className='bg-[#F4F4F4] py-5 px-5 md:w-6/12'>
      <p className='mb-6 text-lg font-bold uppercase'>{title}</p>
      {children}
    </div>
  );
};

export const IconSkill = ({ src, name }) => {
  return (
    <li>
      <img className='w-[30px]' src={src} alt={name} />
    </li>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        slug
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
