import React from "react";
import Layout from "../../components/Layout/Layout";
import { CategoryProject } from "../../components/Project/Project";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;
  const { title, code, demo } = data.markdownRemark.frontmatter;

  console.log(html);
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
          <GatsbyImage
            className='mt-3 max-h-[670px] w-full object-cover object-center'
            image={
              data.markdownRemark.frontmatter.featuredImage.childImageSharp
                .gatsbyImageData
            }
          />
        </div>
      </header>

      <main style={{ margin: "90px auto" }} className='container'>
        <section className=''>
          <h3 className='mb-6 text-2xl font-bold md:text-4xl'>
            Description du projet
          </h3>
          <div
            className='md:text-xl'
            dangerouslySetInnerHTML={{ __html: html }}></div>
        </section>

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
            <a href={demo} className='mb-4 block underline'>
              {demo}
            </a>

            <a href={code} className='underline'>
              {code}
            </a>
          </CardDetailsLayout>
        </div>

        {/* <section className='my-12'>
          <h2 className='text-center text-3xl font-bold  md:text-5xl'>
            See more <span className='bg-gradient'>Projects</span>
          </h2>
        </section> */}
      </main>
    </Layout>
  );
}

export const CardDetailsLayout = ({ title, children }) => {
  return (
    <div className='w-full bg-[#F4F4F4] py-5 px-5 md:w-6/12'>
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
      html
      frontmatter {
        title
        slug
        code
        demo
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
