const path = require("path");

exports.createPages = async ({ graphql }) => {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPages({
      path: "/project/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/project-details.js"),
      context: { slug: node.frontmatter.slug },
    });
  });
};
