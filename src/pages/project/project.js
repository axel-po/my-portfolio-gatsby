import React from "react";
import Nav from "../../components/Nav/Nav";

export default function PageProject() {
  return (
    <>
      <Nav />

      <main className='mt-[72px] bg-black text-white'>
        <div className='mx-auto w-[90%] max-w-[1020px]'>
          <h1 className="font-bold text-7xl">Clone de Netflix</h1>
          <img src='/mockup-netflix-clone.jpg' alt='' />
        </div>
      </main>
    </>
  );
}
