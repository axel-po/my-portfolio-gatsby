import * as React from "react";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <Projects />
        <Services />
        <About />
        <Contact />
      </Layout>
    </>
  );
}
