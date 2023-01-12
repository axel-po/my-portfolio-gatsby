import { Link } from "gatsby";
import React from "react";

export default function Nav() {
  return (
    <nav className='fixed inset-0 flex h-[72px] items-center justify-between bg-black px-5 text-white'>
      <Link to='/' className='text-[20px] font-bold'>
        AP
      </Link>

      <div className='hidden text-white'>
        <Link className='text-white' to='/'>
          Home
        </Link>
        <Link to='/'>Services</Link>
        <Link to='/'>Projects</Link>
        <Link to='/'>About Me</Link>
      </div>

      <button className='hidden rounded-full bg-[#191919] px-6 py-3 text-white'>
        Contact Me
      </button>

      <button>
        <img className='w-[32px]' src='/icons/icon-menu.svg' alt='icon-menu' />
      </button>
    </nav>
  );
}
