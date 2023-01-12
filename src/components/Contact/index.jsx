import { Link } from "gatsby";
import React from "react";

export default function Contact() {
  return (
    <section id='contact' className='bg-black py-28 text-white border-b border-[#242424] md:py-40'>
      <div className='container text-center'>
        <h2 className='text-5xl font-bold md:text-6xl'>
          Des projets en tête ?{" "}
          <span className='bg-gradient'>Travaillons ensemble</span>
        </h2>

        <p className='mx-auto mt-6 max-w-[550px] text-center text-gray sm:mt-12 md:text-xl'>
          J'accompagne les particuliers, start-up, associations dans la création
          de leur site internet. 🚀
        </p>
      </div>
    </section>
  );
}
