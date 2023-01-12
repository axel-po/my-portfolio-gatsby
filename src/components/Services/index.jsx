import React from "react";

export default function Services() {
  return (
    <section id='services' className='flex bg-black py-28 text-white md:py-40'>
      <div className='container grid grid-cols-1 gap-11 md:grid-cols-2'>
        <div>
          <h2 className='text-5xl font-bold md:text-6xl'>
            Look at my <span className='bg-gradient'>services</span>
          </h2>
          <p className='mt-12 max-w-[352px] text-gray'>
            I discover this process working more than 10+ in the design industry
            that why you can trust blindly
          </p>

          {/* <div className='mt-12 flex h-[140px] items-center justify-center gap-x-12 overflow-hidden bg-red-500'>
            <img src='icons-skills/css.svg' alt='' />
            <img src='icons-skills/css.svg' alt='' />
            <img src='icons-skills/css.svg' alt='' />
            <img src='icons-skills/css.svg' alt='' />
            <img src='icons-skills/css.svg' alt='' />
            <img src='icons-skills/css.svg' alt='' />
            <img src='icons-skills/css.svg' alt='' />
            <img src='icons-skills/css.svg' alt='' />
            <img src='icons-skills/css.svg' alt='' />
          </div> */}
        </div>

        <div className='gradient-2 flex w-full flex-col gap-6  p-4 text-black md:p-6'>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  );
}

export function ServiceCard() {
  return (
    <div className='flex bg-white p-5'>
      <div className='flex flex-col'>
        <h3 className='text-lg font-bold'>
          Création d'application web React JS
        </h3>
        <p className='mt-4 text-sm'>React JS / Next JS</p>
      </div>
    </div>
  );
}
