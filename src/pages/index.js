import * as React from "react";
import Nav from "../components/nav";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Projects />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
