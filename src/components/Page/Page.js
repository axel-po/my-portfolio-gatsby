import React from "react";
import Layout from "../Layout/Layout";
import Project, { CategoryProject } from "../Project/Project";

export default function Page() {
  return (
    <Layout>
      <header className=' bg-black py-[90px] md:py-[120px]'>
        <div className='container'>
          <CategoryProject>Web App</CategoryProject>
          <h2 className='my-5 text-5xl font-bold text-white md:text-6xl'>
            Clone de Deliveroo
          </h2>

          <img
            className='mt-12 max-h-[670px] w-full object-cover object-center md:mt-[78px]'
            src='/mockup-deliveroo.jpg'
            alt=''
          />
        </div>
      </header>

      <main className='container mt-12'>
        <div className='my-12 flex flex-col justify-around gap-9 md:flex-row md:gap-12'>
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
          <p className='md:text-lg'>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment. Bring to the table win-win
            survival strategies to ensure proactive domination. At the end of
            the day, going forward, a new normal that has evolved from
            generation X is on the runway heading towards a streamlined cloud
            solution.
          </p>
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
