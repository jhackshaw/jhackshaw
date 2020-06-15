const path = require("path");

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const fileNode = getNode(node.parent);
    const fileName = fileNode.name;
    createNodeField({
      node,
      name: "slug",
      value: fileName
    });
  }
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  //
  //  PROJECT PAGES
  //
  const { data: projects } = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/projects//" } }) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  for (const page of projects.allMdx.nodes) {
    createPage({
      path: `/project/${page.fields.slug}`,
      component: path.resolve("src/templates/project-page.tsx"),
      context: {
        slug: page.fields.slug
      }
    });
  }
};
