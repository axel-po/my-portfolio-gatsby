import React from "react";

export default function index() {
  return (
    <header className='mt-[0px] flex h-screen flex-col items-center justify-center bg-black text-white '>
      <div className='mx-auto w-[90%]'>
        <h1 className='mx-auto max-w-[1100px] text-center text-4xl font-bold sm:text-5xl md:text-7xl'>
          <span className='bg-gradient'>Axel Pointud</span> Développeur web
          frontend React JS
        </h1>
        <p className='mx-auto mt-6 max-w-[550px] text-center text-gray sm:mt-12 md:text-xl'>
          J'accompagne les particuliers, start-up, associations dans la création
          de leur site internet. 🚀
        </p>
      </div>
    </header>
  );
}
