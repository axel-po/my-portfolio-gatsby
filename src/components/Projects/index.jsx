import React from "react";
import Project from "../Project";

export default function Projects() {
  return (
    <section id='projects' className='bg-[#F2F2F2]  py-28 md:py-40'>
      <div className='container'>
        <h2 className='text-5xl font-bold md:text-6xl'>
          Selected <span className='bg-gradient'>Projects</span>
        </h2>
        <p className='mt-6 mb-12 max-w-[525px] md:text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          expedita a. Earum adipisci.
        </p>

        <div className=' grid grid-cols-1 gap-12 lg:grid-cols-2'>
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </section>
  );
}
