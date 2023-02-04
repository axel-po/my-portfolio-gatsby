import React from "react";
import Layout from "../components/Layout/Layout";
import { CategoryProject } from "../components/Project/Project";

export default function ProjectDetails() {
  return (
    <Layout>
      <header className='mt-[72px] bg-blue-500 '>
        <CategoryProject>Web App</CategoryProject>
        <h2 className='text-white'>Clone de deliveroo</h2>

        <div className='w-[40px]'>
          <img className='w-[40px]' src='/mockup-deliveroo.jpg' alt='' />
        </div>
      </header>

      <main className='conainer'></main>
    </Layout>
  );
}
