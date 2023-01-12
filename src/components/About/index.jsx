import React from "react";

export default function About() {
  return (
    <section id='about' className='bg-white py-28  md:py-40'>
      <div className='container grid grid-cols-1 gap-12 md:grid-cols-3'>
        <h1 className='text-5xl font-bold uppercase md:text-6xl'>
          About <br />
          me
        </h1>

        <p className='text-base md:text-lg'>
          Bonjour, je suis un développeur web frontend spécialisé sur les
          technologies JavaScript (React JS, Next JS, Typescript, ...), grâce à
          cela, je réalise des applications web performantes.
        </p>

        <p className='text-base md:text-lg'>
          J'accompagne les particuliers, start-up, associations dans la création
          de leur site internet. 🚀 J'ai commencé à apprendre le développement
          web en autodidacte et je suis devenu un réel passionné qui continue à
          apprendre de nouvelles choses chaque jour. 📈
        </p>
      </div>
    </section>
  );
}
