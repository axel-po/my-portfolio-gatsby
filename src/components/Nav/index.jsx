import { Link } from "gatsby";
import React from "react";

export default function Nav() {
  return (
    <nav className='fixed inset-0 flex h-[72px] items-center justify-between bg-black px-5 text-white md:px-28 z-10'>
      <Link to='/' className='text-base font-bold md:text-2xl'>
        AP
      </Link>

      <div className='hidden text-white md:flex gap-4'>
        <Link className='text-white' to='/'>
          Home
        </Link>
        <Link to='/'>Services</Link>
        <Link to='/'>Projects</Link>
        <Link to='/'>About Me</Link>
      </div>

      <button className=' rounded-full bg-[#191919] px-6 py-3 text-white'>
        Contact Me
      </button>

      <button className="md:hidden">
        <img className='w-[32px]' src='/icons/icon-menu.svg' alt='icon-menu' />
      </button>
    </nav>
  );
}
