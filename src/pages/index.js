import * as React from "react";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>My Website</title>
        <meta name='description' content='A description of my website.' />
      </Helmet>

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
