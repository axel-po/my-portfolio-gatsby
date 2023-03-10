import React from "react";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <footer className='bg-black pt-12  text-white md:pt-[60px]' id='footer'>
      <div className='container grid grid-cols-1 gap-12 md:grid-cols-3'>
        <div>
          <a
            className='flex items-center gap-4 text-base font-bold text-white md:text-2xl'
            href='mailto:contact@axel-pointud.fr'>
            <img src='/icons/icon-email.svg' alt='' />
            <p>contact@axel-pointud.fr</p>
          </a>
        </div>

        <div className='flex flex-col md:justify-self-center'>
          <h3 className='mb-6 text-sm font-bold uppercase tracking-wide '>
            Pages 
          </h3>
          <Link to='/' className='mb-3'>
            Home
          </Link>
          <Link to='#projects' className='mb-3'>
            Projects
          </Link>
          <Link to='#services' className='mb-3'>
            Services
          </Link>
          <Link to='#about' className='mb-3'>
            About Me
          </Link>
          <Link to='#contact' className='mb-3'>
            Contact
          </Link>
        </div>

        <div className='flex flex-col md:justify-self-center'>
          <h3 className='mb-6 text-sm font-bold uppercase tracking-wide '>
            Social media
          </h3>
          <a href='https://www.linkedin.com/in/axel-pointud-7a891b1ba/' className='mb-3'>
            Linkedin
          </a>
          <a href='https://github.com/axel-po' className='mb-3'>
            GitHub
          </a>
          <a href='https://twitter.com/AxelPointud' className='mb-3'>
            Twitter
          </a>
        </div>

        <div className='flex flex-col items-center justify-between gap-y-6 border-t border-[#242424] py-9 text-center text-base md:col-span-3 md:flex-row md:text-left'>
          <p className='text-gray'>
            &copy; All rights reserved - Site web personnel created by{" "}
            <span className='font-bold text-white'>Axel Pointud</span>
          </p>

          <p className='text-gray'>
            Site r??alis?? avec{" "}
            <span className='font-bold text-white'>
              Gatsby et Tailwind CSS ??????
            </span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
