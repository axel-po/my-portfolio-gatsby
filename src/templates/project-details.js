import React from "react";
import Layout from "../components/Layout/Layout";
import { CategoryProject } from "../components/Project/Project";

export default function projectDetails() {
  return (
    <Layout>
      <header className='flex justify-center h-screen flex-col items-center bg-black'>
        <CategoryProject>Web App</CategoryProject>
        <h2 className='text-3xl text-black'>Clone de Deliveroo</h2>
      </header>
    </Layout>
  );
}
