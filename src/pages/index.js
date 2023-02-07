import * as React from "react";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <Layout>
        <Header />
        <Projects />
        <Services />
        <About />
        <Contact />
      </Layout>
      <>
        <div>je suis une image : </div>
        {data.allMarkdownRemark.edges.map((el) => (
          <GatsbyImage
            image={
              el.node.frontmatter.featuredImage.childImageSharp.gatsbyImageData
            }
          />
        ))}
      </>
      {/* {data.node.map((el) => console.log("r", el.frontmatter.featuredImage))} */}
      <h2>Je suis une image :</h2>
      {/* <GatsbyImage src={image} alt='ffddf' /> */}
      {/* <StaticImage src='../images/mockup-deliveroo.jpg' /> */}
      <p>je sui sunfdfdf</p>
    </>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            featuredImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            slug
            title
          }
        }
      }
    }
  }
`;
