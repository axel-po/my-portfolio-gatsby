import React from "react";
import { Link } from "gatsby";

export default function Project() {
  return (
    <article className='bg-white p-5 md:p-8'>
      <img
        className='h-[50vw] w-full object-cover md:h-[350px]'
        src='/mockup-netflix-clone.jpg'
        alt=''
      />
      <div className='my-6 flex gap-3'>
        <CategoryProject>Web App</CategoryProject>
      </div>
      <h3 className='text-3xl font-bold'>Space Webflow Template</h3>
      <p className='mt-6 mb-12 text-sm md:text-base'>
        Le but de ce projet était de reproduire l'interface du site aux pixels
        près, ajouter un système de panier, ajouter un système
        d'authentification à l'aide de NodeJS.
      </p>
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
