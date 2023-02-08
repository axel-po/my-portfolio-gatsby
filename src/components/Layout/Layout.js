import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import MetaData from "../MetaData/MetaData";

export default function Layout({ children }) {
  return (
    <>
      <MetaData />
      <Nav />
      {children}
      <Footer />
    </>
  );
}
