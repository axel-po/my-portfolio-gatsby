import { Link } from "gatsby";
import React from "react";

export default function Nav() {
  return (
    <nav className='effect-nav fixed inset-0 z-10 flex h-[72px] items-center justify-between bg-black px-5 text-white md:px-28'>
      <Link to='/' className='text-base font-bold md:text-2xl'>
        AP
      </Link>

      <div className='hidden gap-4 text-white md:flex'>
        <Link className='text-white' to='/'>
          Home
        </Link>
        <Link to='#projects'>Projects</Link>
        <Link to='#services'>Services</Link>
        <Link to='#about'>About Me</Link>
        <Link to='#contact'>Contact</Link>
      </div>

      <div className='hidden gap-3 md:flex'>
        <Link to='https://github.com/axel-po'>
          <img
            className='w-[32px]'
            src='/icons/icon-github.svg'
            alt='icon-git-hub'
          />
        </Link>

        <Link to='https://www.linkedin.com/in/axel-pointud-7a891b1ba/'>
          <img
            className='w-[32px]'
            src='/icons/icon-linkedin.svg'
            alt='icon-linkedin'
          />
        </Link>
      </div>

      <button className='md:hidden'>
        <img className='w-[32px]' src='/icons/icon-menu.svg' alt='icon-menu' />
      </button>
    </nav>
  );
}
